#!/usr/bin/env python

import argparse
from Util import isNaN, avg, decisionID, locationID, med, numToStr
import os
from os import listdir
from os.path import isdir, isfile, join
import json
import re
from unidiff import PatchSet

from django.template.loader import render_to_string
import django
from django.conf import settings

settings.configure()
settings.TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [join(os.path.dirname(os.path.realpath(__file__)), 'template')]
    },
]
django.setup()

currentDir = os.path.dirname(os.path.realpath(__file__))
resultsPath = join(currentDir, "../data/data.json")
average_bugs = {}
with open(resultsPath) as data_file:
    resultsData = (json.load(data_file))

    collectObjects = {}
    for project in resultsData:
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
        print executionPath
        executionData = json.load(open(executionPath))

        bugTitle = project['name'].title().replace("-", "").replace("_", "")
        titleSplit = re.compile("([0-9]+)").split(bugTitle)
        bugTitle = "-".join(titleSplit[0:2]) + "".join(titleSplit[2::])

        outputDir = join(os.path.dirname(os.path.realpath(__file__)), "..", "static", bugTitle)
        if not os.path.exists(outputDir):
            os.makedirs(outputDir)
        htmlPath = join(outputDir, bugTitle + ".html")
        average_bugs[bugTitle] = {
            "bugTitle": bugTitle,
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
            "medSizeFailureSeqDecision": []
        }

        countPassedLaps = 0
        nbPassedSeqLaps = 0

        index = 0

        nbDetectedDecision = []
        exploredDecisions = {}
        exploredSeqDecisions = {}
        exploredLocations = {}
        sizeCorrectSeqDecisions = []
        sizeFailureSeqDecisions = []

        executions = executionData['executions']
        for execution in executions:
            if 'decisions' not in execution or not execution['decisions'][0]['used']:
                executions.remove(execution)
                continue
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
        average_bugs[bugTitle]['nbDetectedDecision'] += [len(executionData['searchSpace'])]
        average_bugs[bugTitle]['nbExploredDecision'] += [len(exploredDecisions)]
        average_bugs[bugTitle]['nbExploredLocation'] += [len(exploredLocations)]
        average_bugs[bugTitle]['totalSize'] += [len(executionData['executions'])]

        if len(sizeCorrectSeqDecisions) > 0:
            average_bugs[bugTitle]['minSizeCorrectSeqDecision'] += [min(sizeCorrectSeqDecisions)]
            average_bugs[bugTitle]['maxSizeCorrectSeqDecision'] += [max(sizeCorrectSeqDecisions)]
            average_bugs[bugTitle]['medSizeCorrectSeqDecision'] += [med(sizeCorrectSeqDecisions)]

        if len(sizeFailureSeqDecisions) > 0:
            average_bugs[bugTitle]['minSizeFailureSeqDecision'] += [min(sizeFailureSeqDecisions)]
            average_bugs[bugTitle]['maxSizeFailureSeqDecision'] += [max(sizeFailureSeqDecisions)]
            average_bugs[bugTitle]['medSizeFailureSeqDecision'] += [med(sizeFailureSeqDecisions)]


        sortedExecutions = sorted(executions, key=lambda x: -1 if x['result']['success'] else 1)
        rendered = render_to_string('bug_template.html', {'title': bugTitle, 'executions': sortedExecutions,
                                                          'data': average_bugs[bugTitle]})
        with open(htmlPath, 'w') as html_file:
            html_file.write(rendered)
    sortedList = sorted(average_bugs.items(), key=lambda x: x[1]['bugTitle'])
    rendered = render_to_string('index_template.html', {'data': sortedList})
    with open(join(outputDir, "..", "index.html"), 'w') as html_file:
        html_file.write(rendered)
