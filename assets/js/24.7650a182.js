(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{243:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"npefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npefix","aria-hidden":"true"}},[t._v("#")]),t._v(" NPEFix")]),t._v(" "),s("p",[t._v("This is the repository of NPEFix.\nNPEFix is a system that systematically explores and assesses a set of possible runtime patches developed at Inria Lille.\nThis code is research code, released under the GPL licence.")]),t._v(" "),s("p",[t._v("If you use this code, please cite:")]),t._v(" "),s("p",[t._v('Thomas Durieux, Benoit Cornu, Lionel Seinturier and Martin Monperrus, "Dynamic Patch Generation for Null Pointer Exceptions Using Metaprogramming", In IEEE International Conference on Software Analysis, Evolution and Reengineering, 2017.\nBibtex Entry:')]),t._v(" "),s("div",{staticClass:"language-bibtex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@inproceedings{durieux2016npefix,\n    title = {{Dynamic Patch Generation for Null Pointer Exceptions Using Metaprogramming}},\n    author = {Durieux, Thomas and Cornu, Benoit and Seinturier, Lionel and Monperrus, Martin},\n    url = {https://hal.archives-ouvertes.fr/hal-01419861/document},\n    booktitle = {{IEEE International Conference on Software Analysis, Evolution and Reengineering}},\n    year = {2017},\n}\n")])])]),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("How to automatically repair your NullPointerException?")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone https://github.com/Spirals-Team/npefix-maven\ncd npefix-maven\nmvn install\ncd /somewhere/my-project-with-an-NPE\n\n# check there is a NullPointerException\nmvn test \n\n# look for patches\nmvn fr.inria.spirals:npefix-maven:1.0-SNAPSHOT:npefix\n\n# the patches are in target\ncat target/npefix/patches.json\n")])])]),s("h2",{attrs:{id:"run-the-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Run the tests")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Spirals-Team/npefix\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" npefix\nmvn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\n")])])]),s("h3",{attrs:{id:"run-the-evaluation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-evaluation","aria-hidden":"true"}},[t._v("#")]),t._v(" Run the evaluation")]),t._v(" "),s("ol",[s("li",[t._v("Gets the NPE Dataset: https://github.com/Spirals-Team/npe-dataset")]),t._v(" "),s("li",[t._v("Installs each bug on your system, in order to download the dependencies")]),t._v(" "),s("li",[t._v("Configures the location of the dataset in src/main/resources/config.ini")]),t._v(" "),s("li",[t._v("Creates the jar with all dependencies: "),s("code",[t._v("mvn clean compile assembly:single")])]),t._v(" "),s("li",[t._v("Execute "),s("code",[t._v("java -jar target/npefix-0.3-jar-with-dependencies.jar")]),t._v(" (see the execution usage below)")])]),t._v(" "),s("h4",{attrs:{id:"execution-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Execution usage")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("java -jar target/npefix-0.2-jar-with-dependencies.jar\n                          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("math-1117"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--working"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("workingDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-k"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--m2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("~/.m2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--epsilon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("0.2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("randomSeed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-l"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--laps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("nbLaps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("testTimeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("math-1117"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        The name of the buggy program to execute "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e.g. collection-360, math-1117, "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        The execution mode:\n            * normal: Executes n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("the option --laps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" the program and use the Epsilon Greedy algorithm to "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" the decision.\n            * exploration: Explores all possible decision sequences with a limit of n laps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defined by --laps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--working"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("workingDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        The path to the evaluation working directory.\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-k"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--m2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("~/.m2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        The m2 folder. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: ~/.m2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--epsilon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("0.2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        The Epsilon-Greedy epsilon "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("the probability to use the exploration vs exploitation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: 0.2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("randomSeed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        The seed of the random generator.\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-l"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--laps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("nbLaps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        Defines the number of laps. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: 100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("testTimeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        Defines the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" second of the each "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" execution. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: 5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);