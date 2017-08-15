import os
from os import listdir
from os.path import isdir, isfile, join
import json

path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "bugs")
dirs = [f for f in listdir(path) if isdir(join(path, f))]
output = []
for directory in dirs:
	if directory in ["www", "log"] :
		continue
	projectOutput = {
		"name": directory,
		"versions": []
	}
	versions = [f for f in listdir(join(path, directory)) if isfile(join(join(path, directory), f))]
	for version in versions:
		if version == "project.json":
			continue
		versionDict = {
			"date": int(version.replace(".json", ""))
		}
		projectOutput['versions'] += [versionDict]
	output += [projectOutput]
f = open("../data/data.json", "w")
f.write(json.dumps(output, indent=2, sort_keys=True))
