---
title: Defects4J Dissection
description: Defects4J Dissection presents data to help researchers and practitioners to better understand the Defects4J bug dataset.
image: defects4j_dissection.png
tags:
	- Benchmark
github: https://github.com/Spirals-Team/defects4j-repair/
---

# Dissection of a Bug Dataset : Anatomy of 395 Patches from Defects4J

Defects4J Dissection presents data to help researchers and practitioners to better understand the Defects4J bug dataset. 
It is the open-science appendix of ["Dissection of a Bug Dataset: Anatomy of 395 Patches from Defects4J"](https://github.com/program-repair/defects4j-dissection/blob/master/2018.03.20%20-%20Defects4J%20Dissection%20-%20Oficial%20Pre-Print.pdf).

```bibtex
@inproceedings{defects4J-dissection,
    title = {{Dissection of a Bug Dataset: Anatomy of 395 Patches from Defects4J}},
    author = {Sobreira, Victor and Durieux, Thomas and Madeiral, Fernanda and Monperrus, Martin and Maia, Marcelo A.}
    booktitle = {Proceedings of SANER},
    year = {2018}
}
```

Main files:

* The file `defects4j-bugs.json` contains all the extracted information.
* The file [defects4j-patch.md](https://github.com/program-repair/defects4j-dissection/blob/master/defects4j-patch.md) gives link to the buggy and patched version as well as the diff.
* The website http://program-repair.github.io/defects4j-dissection/ is a user interface that presents the information contained in `defects4j-bugs.json` in a user-friendly manner.

## defects4j-bugs.json format

```js
[
	{
		"project":"Chart",
		"bugId":8,
		"activeSynStruct":1,
		"activePat":2,
		"repairTools":1,
		"files":1,
		"linesAdd":0,
		"linesRem":0,
		"linesMod":1,
		"sizeInLines":1,
		"chunks":1,
		"spreadAllLines":0,
		"spreadCodeOnly":0,
		"mcParValChange":true,
		... 
		// more repair operations ("name": true)
		"Observations":"Changes params passed to constructor.",
		"program":"jfreechart",
		"revisionId":"1085",
		"failingTests":[
			{
				"className":" org.jfree.data.time.junit.WeekTests",
				"methodName":"testConstructor",
				"error":"junit.framework.AssertionFailedError",
				"message":"expected:<35> but was:<	34>"
			}
		]
		"diff":"git diff of the source"
	}
]
```

