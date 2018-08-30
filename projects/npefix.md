---
title: NPEFix
tags:
  - Academic
  - Automatic Program Repair
description: NPEFix is a system that systematically explores and assesses a set of possible runtime patches developed at Inria Lille.
image: ./npefix.png
github: https://github.com/Spirals-Team/npefix
---

# NPEFix

This is the repository of NPEFix.
NPEFix is a system that systematically explores and assesses a set of possible runtime patches developed at Inria Lille.
This code is research code, released under the GPL licence.

If you use this code, please cite:

Thomas Durieux, Benoit Cornu, Lionel Seinturier and Martin Monperrus, "Dynamic Patch Generation for Null Pointer Exceptions Using Metaprogramming", In IEEE International Conference on Software Analysis, Evolution and Reengineering, 2017.
Bibtex Entry:

```bibtex
@inproceedings{durieux2016npefix,
    title = {{Dynamic Patch Generation for Null Pointer Exceptions Using Metaprogramming}},
    author = {Durieux, Thomas and Cornu, Benoit and Seinturier, Lionel and Monperrus, Martin},
    url = {https://hal.archives-ouvertes.fr/hal-01419861/document},
    booktitle = {{IEEE International Conference on Software Analysis, Evolution and Reengineering}},
    year = {2017},
}
```


## Getting Started

How to automatically repair your NullPointerException?
```
git clone https://github.com/Spirals-Team/npefix-maven
cd npefix-maven
mvn install
cd /somewhere/my-project-with-an-NPE

# check there is a NullPointerException
mvn test 

# look for patches
mvn fr.inria.spirals:npefix-maven:1.0-SNAPSHOT:npefix

# the patches are in target
cat target/npefix/patches.json
```

## Run the tests

```Bash
git clone https://github.com/Spirals-Team/npefix
cd npefix
mvn test
```

### Run the evaluation

1. Gets the NPE Dataset: https://github.com/Spirals-Team/npe-dataset
2. Installs each bug on your system, in order to download the dependencies
3. Configures the location of the dataset in src/main/resources/config.ini
4. Creates the jar with all dependencies: `mvn clean compile assembly:single`
5. Execute `java -jar target/npefix-0.3-jar-with-dependencies.jar` (see the execution usage below)

#### Execution usage
```Bash
java -jar target/npefix-0.2-jar-with-dependencies.jar
                          (-p|--project) <math-1117...> [(-m|--mode) <mode>] [(-x|--working) <workingDirectory>] [(-k|--m2) <~/.m2>] [(-e|--epsilon) <0.2>] [(-s|--seed) <randomSeed>] [(-l|--laps) <nbLaps>] [(-t|--timeout) <testTimeout>]

  (-p|--project) <math-1117...>
        The name of the buggy program to execute (e.g. collection-360, math-1117, ...).

  [(-m|--mode) <mode>]
        The execution mode:
            * normal: Executes n times (the option --laps) the program and use the Epsilon Greedy algorithm to select the decision.
            * exploration: Explores all possible decision sequences with a limit of n laps (defined by --laps)

  [(-x|--working) <workingDirectory>]
        The path to the evaluation working directory.

  [(-k|--m2) <~/.m2>]
        The m2 folder. (default: ~/.m2)

  [(-e|--epsilon) <0.2>]
        The Epsilon-Greedy epsilon (the probability to use the exploration vs exploitation). (default: 0.2)

  [(-s|--seed) <randomSeed>]
        The seed of the random generator.

  [(-l|--laps) <nbLaps>]
        Defines the number of laps. (default: 100)

  [(-t|--timeout) <testTimeout>]
        Defines the timeout in second of the each test execution. (default: 5)
```

