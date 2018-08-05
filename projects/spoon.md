---
title: Spoon
tags:
  - AST
  - Java
description: "Spoon is a library to analyze, transform, rewrite, transpile Java source code."
image: ./spoon.png
github: https://github.com/INRIA/spoon
---

# Spoon

Spoon is an open-source library to analyze, rewrite, transform, transpile Java source code. It parses source files to build a well-designed AST with powerful analysis and transformation API. It fully supports Java 8.

```java
CtClass l = Launcher.parseClass("class A { void m() { System.out.println(\"yeah\");} }");
```

External contributions as pull requests are welcome.
The official website is available at <http://spoon.gforge.inria.fr/>.
Spoon is an official Inria open-source project, and member of the [OW2](https://www.ow2.org/) open-source consortium.

- If you use Spoon for industrial purposes, please consider funding Spoon through a research contract with Inria (contact [Martin Monperrus](http://monperrus.net/martin/) for this).

- If you use Spoon for academic purposes, please cite: Renaud Pawlak, Martin Monperrus, Nicolas Petitprez, Carlos Noguera, Lionel Seinturier. “[Spoon: A Library for Implementing Analyses and Transformations of Java Source Code](https://hal.archives-ouvertes.fr/hal-01078532/document)”. In Software: Practice and Experience, Wiley-Blackwell, 2015. Doi: 10.1002/spe.2346.

```bibtex
@article{pawlak:hal-01169705,
  TITLE = {{Spoon: A Library for Implementing Analyses and Transformations of Java Source Code}},
  AUTHOR = {Pawlak, Renaud and Monperrus, Martin and Petitprez, Nicolas and Noguera, Carlos and Seinturier, Lionel},
  JOURNAL = {{Software: Practice and Experience}},
  PUBLISHER = {{Wiley-Blackwell}},
  PAGES = {1155-1179},
  VOLUME = {46},
  URL = {https://hal.archives-ouvertes.fr/hal-01078532/document},
  YEAR = {2015},
  doi = {10.1002/spe.2346},
}

```

## Compiling

To compile Spoon, you need a Java Development Kit (JDK) and Maven:

```bash
git clone https://github.com/INRIA/spoon
cd spoon
mvn compile
```

To run the tests:
```bash
mvn test
```


# Design Philosophy


R1) The Spoon metamodel is as close as possible to the language concepts.

R2) The Spoon model of a program is complete and sound.

R3) The text version of a Spoon model is well-formed and semantically equivalent to the original program.

R4) The analysis and transformation API is intuitive and regular.

R5) Transformation operators are designed to warn as fast as possible about invalid programs. This is done either with static type checking or with dynamic checks when the operators are used.

R6) When feasible, the text version of a Spoon model is close to the original one.
