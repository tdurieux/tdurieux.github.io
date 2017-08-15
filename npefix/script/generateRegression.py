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
            if isinstance(currentObject, list) and key.isdigit():
                currentObject = currentObject[int(key)]
            elif key in currentObject:
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

def _unidiff_output(expected, actual):
    """
    Helper function. Returns a string containing the unified diff of two multiline strings.
    """

    import difflib
    expected=expected.splitlines(1)
    actual=actual.splitlines(1)

    diff=difflib.unified_diff(expected, actual)

    return ''.join(diff)

path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "regression")
dirs = [f for f in listdir(path) if isdir(join(path, f))]
output = []
for directory in dirs:
    if directory in ["www", "log"] :
        continue
    projectOutput = {
        "name": directory,
        "patches": {}
    }
    patches = [f for f in listdir(join(path, directory)) if isdir(join(join(path, directory), f))]
    for patch in patches:
        patchDict = {
            "name": patch,
            "versions": []
        }
        versions = [f for f in listdir(join(path, directory, patch)) if isfile(join(join(path, directory, patch), f))]
        for version in versions:
            patchDict["versions"] += [int(version.replace(".json", ""))]
        projectOutput['patches'][patch] = patchDict
    output += [projectOutput]
f = open("../data/regression.json", "w")
f.write(json.dumps(output, indent=2, sort_keys=True))
f.close()

currentDir = os.path.dirname(os.path.realpath(__file__))
resultsPath = join(currentDir, "../data/regression.json")

average_bugs = {}
projects = {}
oracles = {}
types = {}
benchmarks = {}

with open(resultsPath) as data_file:
    resultsData = (json.load(data_file))

    agregatedProjects = {}
    for project in resultsData:

        original = None

        agregatedRequests = {}

        for patch in sorted(project['patches'], key=lambda x: -1 if x == "original" else 1):
            max_version = None
            for version in project['patches'][patch]['versions']:
                if max_version is None:
                    max_version = version
                    continue
                if version > max_version:
                    max_version = version
            # no execuValid/Total \\ Requesttion found
            if max_version is None:
                continue

            executionPath = join(currentDir, "..", "regression", project['name'], patch, str(max_version) + ".json")
            print executionPath

            executionData = json.load(open(executionPath))

            if patch == "original":
                original = executionData

            agregatedRequest = {
                "nbDiff": 0,
                "nbRequest": len(executionData),
                "locations": {},
                "appliedPatches": {}
            }
            idLocation = patch
            if idLocation != "original":
                idLocation = idLocation[:idLocation.rfind("-")]
            if idLocation not in agregatedRequests:
                agregatedRequests[idLocation] = []
            agregatedRequests[idLocation]+=[(idLocation.replace("-",":"), patch.replace(idLocation+"-", ""), agregatedRequest)]
            agregatedRequests[idLocation] = sorted(agregatedRequests[idLocation], key=lambda x: 1 if x[1] == "original" else x[1])
            requestId = 0
            for request in executionData:
                if "appliedPatches" in request:
                    for patchLocation in request["appliedPatches"]:
                        agregatedRequest["appliedPatches"] = request["appliedPatches"][patchLocation]
                request["executedIf"] = sorted(request["executedIf"].items(), key=lambda x: 1 if x[1]['true'] == 0 or x[1]['false'] == 0 else -1)
                for location, response in request["executedIf"]:
                    if location not in agregatedRequest["locations"]:
                        agregatedRequest["locations"][location] = response
                    else:
                        agregatedRequest["locations"][location]['false'] += response['false']
                        agregatedRequest["locations"][location]['true'] += response['true']
                if patch != "original":
                    key_request = request["request"]["method"] + " " + request["request"]["url"]
                    if "parameters" in request["request"]:
                        key_request += " " + request["request"]["parameters"]
                    original_request = original[requestId]
                    original_key_request = original_request["request"]["method"] + " " + original_request["request"]["url"]
                    if "parameters" in original_request["request"]:
                        original_key_request += " " + original_request["request"]["parameters"]
                    if key_request == original_key_request:
                        expected = ""
                        if "body" in original_request["response"]:
                            expected = original_request["response"]["body"]
                        elif "body" in request["response"]:
                            print "Error original_request ", original_key_request
                        actual = ""
                        if "body" in request["response"]:
                            actual = request["response"]["body"]
                        elif "body" in original_request["response"]:
                            print "Error request", original_key_request
                        expected = re.sub('<input type="hidden" name="csrfToken" value="([^"]+)" />', '', expected)
                        expected = re.sub('<div id="product-option-data" hidden="hidden".+</div>', '', expected)
                        actual = re.sub('<input type="hidden" name="csrfToken" value="([^"]+)" />', '', actual)
                        actual = re.sub('<div id="product-option-data" hidden="hidden".+</div>', '', actual)
                        if actual != expected:
                            request["diff"] = _unidiff_output(expected, actual).encode('ascii', 'ignore').decode('ascii')
                            agregatedRequest["nbDiff"] += 1
                    else:
                        print "Error ", key_request, original_key_request
                requestId+=1
                

            outputDir = join(os.path.dirname(os.path.realpath(__file__)), "..", "static", "regression", project["name"], patch)
            if not os.path.exists(outputDir):
                os.makedirs(outputDir)
            htmlPath = join(outputDir, "index.html")

            agregatedRequest["locations"] = sorted(agregatedRequest["locations"].items(), key=lambda x: 1 if x[1]['true'] == 0 or x[1]['false'] == 0 else -1)

            rendered = render('regression_template.html', {'title': project["name"].title() + " - " + patch, 'data': executionData, 'agregated': agregatedRequest})
            with open(htmlPath, 'w') as html_file:
                html_file.write(rendered)

        agregatedRequestsSorted = sorted(agregatedRequests.items(), key=lambda x: -1 if x[0] == "original" else x[0])
        agregatedProjects[project["name"]] = agregatedRequestsSorted

        htmlPath = join(os.path.dirname(os.path.realpath(__file__)), "..", "static", "regression", project["name"], "index.html")
        rendered = render('regression_project_template.html', {'data': agregatedRequestsSorted, 'project': project['name'].title()})
        with open(htmlPath, 'w') as html_file:
            html_file.write(rendered)

    agregatedProjectsSorted = sorted(agregatedProjects.items(), key=lambda x: x[0])

    countValid = 0
    countTotal = 0
    for project, projectValue in agregatedProjectsSorted:
        for location, locationValue in projectValue:
            for location, patch_id, agregated in locationValue:
                if location == "original":
                    continue
                countTotal += 1
                if agregated['nbDiff'] == 0:
                    countValid += 1
    htmlPath = join(os.path.dirname(os.path.realpath(__file__)), "..", "static", "regression", "index.html")
    rendered = render('regression_projects_template.html', {'data': agregatedProjectsSorted, "countValid": countValid, "countTotal": countTotal})
    with open(htmlPath, 'w') as html_file:
        html_file.write(rendered)

    rendered = render('regression_template.tex', {'data': agregatedProjectsSorted, "countValid": countValid, "countTotal": countTotal})
    with open(join(os.path.dirname(os.path.realpath(__file__)), "..", "static", "regression", "tab_regression.tex"), 'w') as html_file:
        html_file.write(rendered)
