---
title: Maven-repair
tags:
  - Automatic Program Repair
description: A maven plugin for executing automated program repair on Maven projects.
github: https://github.com/Spirals-Team/maven-repair
---

# maven-repair: a Maven plugin for executing automated program repair tools on Maven projects 

The goal of this projects is is to simplify automatic repair on Maven projects.


## Automatic Repair Techniques

- [NPEFix](npefix.html)
- [Nopol](nopol.html)
- DynaMoth
- jGenProg
- jKali
- Cardumen

## Install

### Manual install

```bash
git clone https://github.com/Spirals-Team/maven-repair
cd maven-repair
mvn install
```

### Maven

```bash
mvn org.apache.maven.plugins:maven-dependency-plugin:2.1:get \
    -DrepoUrl=https://tdurieux.github.io/maven-repository/snapshots/ \
    -Dartifact=fr.inria.gforge.spirals:repair-maven-plugin:1.4-SNAPSHOT
``` 

## Usage

```bash
cd /somewhere/my-project-with-failing-tests

# check the failing tests
mvn test -DtrimStackTrace=false

# look for patches with Nopol
mvn fr.inria.gforge.spirals:repair-maven-plugin:nopol

# look for patches with NpeFix
mvn fr.inria.gforge.spirals:repair-maven-plugin:npefix
```

## Output

```
# the patches are in target
cat target/npefix/patches.json

cat target/nopol/output.json
```

