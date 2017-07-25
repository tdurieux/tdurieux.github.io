#!/usr/bin/env python

import argparse
from Util import isNaN, avg, decisionID, locationID, med, numToStr
import os
from os import listdir
from os.path import isdir, isfile, join
import json
import re
from unidiff import PatchSet

import jinja2 

from templatetags.poll_extras import diff2html

def sumTable(arr, key):
    values = set()
    output = 0
    keys = key.split(".")
    for project, obj in arr:
        currentObject = obj
        for key in keys:
            if key in currentObject:
                currentObject = currentObject[key]
        if currentObject != obj:
            if isinstance(currentObject, basestring):
                values.add(currentObject)
            elif isinstance(currentObject, int):
                output+=currentObject
            elif isinstance(currentObject, list):
                if len(currentObject) == 1 and isinstance(currentObject[0], int):
                    output+=currentObject[0]
                else:
                    output+=len(currentObject)
    output += len(values)
    return output

def render(tpl_path, context):
    path, filename = os.path.split(tpl_path)
    env = jinja2.Environment(
        loader=jinja2.FileSystemLoader(path or './template')
    )
    env.filters['diff2html'] = diff2html
    env.filters['sum'] = sumTable
    return env.get_template(filename).render(context)



currentDir = os.path.dirname(os.path.realpath(__file__))
resultsPath = join(currentDir, "../data/data.json")

average_bugs = {}
projects = {}
oracles = {}
types = {}
benchmarks = {}

with open(resultsPath) as data_file:
    resultsData = (json.load(data_file))

    collectObjects = {}
    for project in resultsData:
        if False and project['name'] == "math_1117":
            continue
        collectObject = {
            "patch": [],
            "valid": [],
            "patchSec": [],
            "init": [],
            "run": [],
            "firstPatch": [],
            "total": []
        }
        max_version = None
        for version in project['versions']:
            if max_version is None:
                max_version = version
                continue
            if version['date'] > max_version['date']:
                max_version = version
        # no execution found
        if max_version is None:
            continue
        executionPath = join(currentDir, "..", "bugs", project['name'], str(max_version['date']) + ".json")
        projectPath = join(currentDir, "..", "bugs", project['name'], "project.json")
        print executionPath
        executionData = json.load(open(executionPath))
        projectData = json.load(open(projectPath))

        bugTitle = projectData['name']
        projectName = bugTitle[:bugTitle.index(" ")]
        

        bugTitlePath = project['name'].title().replace("-", "").replace("_", "")
        titleSplit = re.compile("([0-9]+)").split(bugTitlePath)
        bugTitlePath = "-".join(titleSplit[0:2]) + "".join(titleSplit[2::])

        outputDir = join(os.path.dirname(os.path.realpath(__file__)), "..", "static", bugTitlePath)
        if not os.path.exists(outputDir):
            os.makedirs(outputDir)
        htmlPath = join(outputDir, "index.html")
        average_bugs[bugTitle] = {
            "bugTitle": bugTitle,
            "bugTitlePath": bugTitlePath,
            "nbPassedSeqLaps": [],
            "nbExploredDecision": [],
            "nbExploredSeqDecision": [],
            "nbExploredLocation": [],
            "nbDetectedDecision": [],
            "totalSize": [],
            "minSizeCorrectSeqDecision": [],
            "maxSizeCorrectSeqDecision": [],
            "medSizeCorrectSeqDecision": [],
            "minSizeFailureSeqDecision": [],
            "maxSizeFailureSeqDecision": [],
            "medSizeFailureSeqDecision": [],
            "projectData": projectData
        }

        if projectName not in projects:
            projects[projectName] = []
        projects[projectName] += [average_bugs[bugTitle]]

        if projectData['oracle'] not in oracles:
            oracles[projectData['oracle']] = []
        oracles[projectData['oracle']] += [average_bugs[bugTitle]]

        if projectData['benchmark'] not in benchmarks:
            benchmarks[projectData['benchmark']] = []
        benchmarks[projectData['benchmark']] += [average_bugs[bugTitle]]

        if projectData['type'] not in types:
            types[projectData['type']] = []
        types[projectData['type']] += [average_bugs[bugTitle]]

        countPassedLaps = 0
        nbPassedSeqLaps = 0

        index = 0

        nbDetectedDecision = []
        exploredDecisions = {}
        exploredSeqDecisions = {}
        exploredLocations = {}
        sizeCorrectSeqDecisions = []
        sizeFailureSeqDecisions = []

        executions = [execution for execution in executionData['executions'] if 'decisions' in execution and len(execution['decisions']) > 0 and execution['decisions'][0]['used']]
        for execution in executions:
            if 'score' not in execution:
                execution['score'] = 1
            if execution['result']['success']:
                countPassedLaps += 1
            sID = ""
            for decision in execution['decisions']:
                lID = locationID(decision['location'])
                if lID not in exploredLocations:
                    exploredLocations[lID] = 0
                exploredLocations[lID] += 1

                dID = decisionID(decision)
                sID += dID
                if dID not in exploredDecisions:
                    exploredDecisions[dID] = 0
                exploredDecisions[dID] += 1

            if sID not in exploredSeqDecisions:
                exploredSeqDecisions[sID] = 0
                if execution['result']['success']:
                    nbPassedSeqLaps += 1
            exploredSeqDecisions[sID] += 1

            if execution['result']['success']:
                sizeCorrectSeqDecisions += [len(execution['decisions'])]
            else:
                sizeFailureSeqDecisions += [len(execution['decisions'])]

            index += 1
        
        average_bugs[bugTitle]['nbPassedSeqLaps'] += [countPassedLaps]
        if "searchSpace" in executionData:
            average_bugs[bugTitle]['nbDetectedDecision'] += [len(executionData['searchSpace'])]
        average_bugs[bugTitle]['nbExploredDecision'] += [len(exploredDecisions)]
        average_bugs[bugTitle]['nbExploredLocation'] += [len(exploredLocations)]
        average_bugs[bugTitle]['totalSize'] += [len(executions)]

        if len(sizeCorrectSeqDecisions) > 0:
            average_bugs[bugTitle]['minSizeCorrectSeqDecision'] += [min(sizeCorrectSeqDecisions)]
            average_bugs[bugTitle]['maxSizeCorrectSeqDecision'] += [max(sizeCorrectSeqDecisions)]
            average_bugs[bugTitle]['medSizeCorrectSeqDecision'] += [med(sizeCorrectSeqDecisions)]

        if len(sizeFailureSeqDecisions) > 0:
            average_bugs[bugTitle]['minSizeFailureSeqDecision'] += [min(sizeFailureSeqDecisions)]
            average_bugs[bugTitle]['maxSizeFailureSeqDecision'] += [max(sizeFailureSeqDecisions)]
            average_bugs[bugTitle]['medSizeFailureSeqDecision'] += [med(sizeFailureSeqDecisions)]

        sortedExecutions = sorted(executions, key=lambda x: -1 if x['result']['success'] else 1)
        rendered = render('bug_template.html', {'title': bugTitle, 'executions': sortedExecutions,
                                                          'data': average_bugs[bugTitle]})
        with open(htmlPath, 'w') as html_file:
            html_file.write(rendered)
    sortedList = sorted(average_bugs.items(), key=lambda x: x[1]['bugTitle'])
    sortedProject = sorted(projects.items(), key=lambda x: len(x[1]), reverse=True)
    sortedOracle = sorted(oracles.items(), key=lambda x: len(x[1]), reverse=True)
    sortedBenchmark = sorted(benchmarks.items(), key=lambda x: len(x[1]), reverse=True)
    sortedType = sorted(types.items(), key=lambda x: len(x[1]), reverse=True)

    rendered = render('index_template.html', {'data': sortedList, 'projects': sortedProject, 'oracles': sortedOracle, 'benchmarks': sortedBenchmark, 'types': sortedType})
    with open(join(outputDir, "..", "index.html"), 'w') as html_file:
        html_file.write(rendered)
