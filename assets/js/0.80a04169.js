(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[e._v("I'm currently working in the research field of Software Engineering.\nDuring my Ph.D., I'm working on new patch generation techniques.\nI'm particularly interested in the integration of the patch generation technique in the production environment.")]),e._m(1),e._m(2),a("ul",[a("li",[a("p",[a("cv",{attrs:{name:"Fully Automated HTML and Javascript Rewriting for Constructing a Self-healing Web Proxy",url:"https://arxiv.org/abs/1803.08725",date:"2018",description:"Over the last few years, the complexity of web applications has increased to provide more dynamic web applications to users. The drawback of this complexity is the growing number of errors in the front-end applications. In this paper, we present BikiniProxy, a novel technique to provide self-healing for the web. BikiniProxy is designed as an HTTP proxy that uses five self-healing strategies to rewrite the buggy HTML and Javascript code. We evaluate BikiniProxy with a new benchmark of 555 reproducible Javascript errors, DeadClick. We create DeadClick by randomly crawling the Internet and collect all web pages that contain Javascript errors. Then, we observe how BikiniProxy heals those errors by collecting and comparing the traces of the original and healed pages. To sum up, BikiniProxy is a novel fully-automated self-healing approach that is specific to the web, evaluated on 555 real Javascript errors, and based on original self-healing rewriting strategies for HTML and Javascript.",authors:[{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Hamadi",firstname:"Youssef",url:"https://www.msr-inria.fr/researchers/youssef-hamadi/"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}]}}),a("a",{attrs:{href:"https://arxiv.org/abs/1803.08725",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/Spirals-Team/bikiniproxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"Alleviating Patch Overfitting with Automatic Test Generation: A Study of Feasibility and Effectiveness for the Nopol Repair System",url:"https://hal.inria.fr/hal-01774223/",date:"2018",description:"Among the many different kinds of program repair techniques, one widely studied family of techniques is called test suite based repair. However, test suites are in essence input-output specifications and are thus typically inadequate for completely specifying the expected behavior of the program under repair. Consequently, the patches generated by test suite based repair techniques can just overfit to the used test suite, and fail to generalize to other tests. We deeply analyze the overfitting problem in program repair and give a classification of this problem. This classification will help the community to better understand and design techniques to defeat the overfitting problem. We further propose and evaluate an approach called UnsatGuided, which aims to alleviate the overfitting problem for synthesis-based repair techniques with automatic test case generation. The approach uses additional automatically generated tests to strengthen the repair constraint used by synthesis-based repair techniques. We analyze the effectiveness of UnsatGuided: 1) analytically with respect to alleviating two different kinds of overfitting issues; 2) empirically based on an experiment over the 224 bugs of the Defects4J repository. The main result is that automatic test generation is effective in alleviating one kind of overfitting issue–regression introduction, but due to oracle problem, has minimal positive impact on alleviating the other kind of overfitting issue–incomplete fixing.",authors:[{lastname:"Yu",firstname:"Zhongxing",url:"https://sites.google.com/site/yuzxpage/"},{lastname:"Martinez",firstname:"Matias",url:"http://www.martinezmatias.com/"},{lastname:"Danglot",firstname:"Benjamin",url:"https://danglotb.github.io/"},{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}],role:"Proceedings at Empirical Software Engineering."}}),a("a",{attrs:{href:"https://hal.inria.fr/hal-01774223/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/Spirals-Team/test4repair-experiments",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"Exhaustive Exploration of the Failure-oblivious Computing Search Space",url:"https://arxiv.org/abs/1710.09722",date:"2018",description:"High-availability of software systems requires automated handling of crashes in presence of errors. Failure-oblivious computing is one technique that aims to achieve high availability. We note that failure-obliviousness has not been studied in depth yet, and there is very few study that helps understand why failure-oblivious techniques work. In order to make failure-oblivious computing to have an impact in practice, we need to deeply understand failure-oblivious behaviors in software. In this paper, we study, design and perform an experiment that analyzes the size and the diversity of the failure-oblivious behaviors. Our experiment consists of exhaustively computing the search space of 16 field failures of large-scale open-source Java software. The outcome of this experiment is a much better understanding of what really happens when failure-oblivious computing is used, and this opens new promising research directions.",authors:[{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Hamadi",firstname:"Youssef",url:"https://www.msr-inria.fr/researchers/youssef-hamadi/"},{lastname:"Yu",firstname:"Zhongxing",url:"https://sites.google.com/site/yuzxpage/"},{lastname:"Baudry",firstname:"Benoit",url:"https://softwarediversity.eu/"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}],role:"Proceedings of the 11th IEEE Conference on Software Testing, Validation and Verification (ICST'18)"}}),a("a",{attrs:{href:"https://arxiv.org/abs/1710.09722",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/Spirals-Team/runtime-repair-experiments",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"Dissection of a Bug Dataset: Anatomy of 395 Patches from Defects4J",url:"https://arxiv.org/abs/1801.06393",date:"2018",description:"Well-designed and publicly available datasets of bugs are an invaluable asset to advance research fields such as fault localization and program repair as they allow directly and fairly comparison between competing techniques and also the replication of experiments. These datasets need to be deeply understood by researchers: the answer for questions like 'which bugs can my technique handle?' and 'for which bugs is my technique effective?'' depends on the comprehension of properties related to bugs and their patches. However, such properties are usually not included in the datasets, and there is still no widely adopted methodology for characterizing bugs and patches. In this work, we deeply study 395 patches of the Defects4J dataset. Quantitative properties (patch size and spreading) were automatically extracted, whereas qualitative ones (repair actions and patterns) were manually extracted using a thematic analysis-based approach. We found that 1) the median size of Defects4J patches is four lines, and almost 30% of the patches contain only addition of lines; 2) 92% of the patches change only one file, and 38% has no spreading at all; 3) the top-3 most applied repair actions are addition of method calls, conditionals, and assignments, occurring in 77% of the patches; and 4) nine repair patterns were found for 95% of the patches, where the most prevalent, appearing in 43% of the patches, is on conditional blocks. These results are useful for researchers to perform advanced analysis on their techniques' results based on Defects4J. Moreover, our set of properties can be used to characterize and compare different bug datasets.",authors:[{lastname:"Sobreira",firstname:"Victor"},{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Madeiral",firstname:"Fernanda",url:"https://fermadeiral.github.io/"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"},{lastname:"Maia",firstname:"Marcelo de Almeida",url:"http://lascam.facom.ufu.br/"}],role:"Proceedings of the 25th IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER'18)"}}),a("a",{attrs:{href:"https://arxiv.org/abs/1801.06393",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/program-repair/defects4j-dissection/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"http://program-repair.org/defects4j-dissection/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSite"),a("OutboundLink")],1)],1)])]),e._m(3),a("ul",[a("li",[a("p",[a("cv",{attrs:{name:"Production-Driven Patch Generation",url:"https://hal.archives-ouvertes.fr/hal-01463689/document",date:"2017",description:"We present an original concept for patch generation: we propose to do it directly in production. Our idea is to generate patches on-the-fly based on automated analysis of the failure context. By doing this in production, the repair process has complete access to the system state at the point of failure. We propose to perform live regression testing of the generated patches directly on the production traffic, by feeding a sandboxed version of the application with a copy of the production traffic, the 'shadow traffic'. Our concept widens the applicability of program repair because it removes the requirements of having a failing test case.",authors:[{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Hamadi",firstname:"Youssef",url:"https://www.msr-inria.fr/researchers/youssef-hamadi/"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}],role:"Proceeding of ICSE NIER"}}),a("a",{attrs:{href:"https://hal.archives-ouvertes.fr/hal-01463689/document",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"/slide_itzal.pdf"}},[e._v("Slide")])],1)]),a("li",[a("p",[a("cv",{attrs:{name:"Dynamic Patch Generation for Null Pointer Exceptions Using Metaprogramming",url:"https://hal.archives-ouvertes.fr/hal-01419861/document",date:"2017",description:"Null pointer exceptions (NPE) are the number one cause of uncaught crashing exceptions in production. In this paper, we aim at exploring the search space of possible patches for null pointer exceptions with metaprogramming. Our idea is to transform the program under repair with automated code transformation, so as to obtain a metaprogram. This metaprogram contains automatically injected hooks, that can be activated to emulate a null pointer exception patch. This enables us to perform a fine-grain analysis of the runtime context of null pointer exceptions. We set up an experiment with 16 real null pointer exceptions that have happened in the field. We compare the effectiveness of our metaprogramming approach against simple templates for repairing null pointer exceptions.",authors:[{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Cornu",firstname:"Benoit"},{lastname:"Seinturier",firstname:"Lionel",url:"http://www.lifl.fr/~seinturi/"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}],role:"IEEE International Conference on Software Analysis, Evolution and Reengineering"}}),a("a",{attrs:{href:"https://hal.archives-ouvertes.fr/hal-01419861/document",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"/slide_npefix.pdf"}},[e._v("Slide")]),e._v(" • "),a("a",{attrs:{href:"https://github.com/Spirals-Team/npefix/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/Spirals-Team/npefix-experiments",target:"_blank",rel:"noopener noreferrer"}},[e._v("Experiment Results"),a("OutboundLink")],1)],1)])]),e._m(4),a("ul",[a("li",[a("p",[a("cv",{attrs:{name:"Automatic repair of real bugs in java: a large-scale experiment on the defects4j dataset",url:"http://link.springer.com/article/10.1007/s10664-016-9470-4",date:"2016",description:"Defects4J is a large, peer-reviewed, structured dataset of real-world Java bugs. Each bug in Defects4J comes with a test suite and at least one failing test case that triggers the bug. In this paper, we report on an experiment to explore the effectiveness of automatic test-suite based repair on Defects4J. The result of our experiment shows that the considered state-of-the-art repair methods can generate patches for 47 out of 224 bugs. However, those patches are only test-suite adequate, which means that they pass the test suite and may potentially be incorrect beyond the test-suite satisfaction correctness criterion. We have manually analyzed 84 different patches to assess their real correctness. In total, 9 real Java bugs can be correctly repaired with a test-suite based repair. This analysis shows that test-suite based repair suffers from under-specified bugs, for which trivial or incorrect patches still pass the test suite. With respect to practical applicability, it takes on average 14.8 minutes to find a patch. The experiment was done on a scientific grid, totaling 17.6 days of computation time. All the repair systems and experimental results are publicly available on Github in order to facilitate future research on automatic repair.",authors:[{lastname:"Martinez",firstname:"Matias",url:"http://www.martinezmatias.com/"},{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Sommerard",firstname:"Romain"},{lastname:"Xuan",firstname:"Jifeng",url:"http://jifeng-xuan.com/"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}],role:"Proceedings at Empirical Software Engineering."}}),a("a",{attrs:{href:"http://link.springer.com/article/10.1007/s10664-016-9470-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"/slide_defects4j_repair.pdf"}},[e._v("Slide")]),e._v(" • "),a("a",{attrs:{href:"https://github.com/Spirals-Team/defects4j-repair/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Experiment Results"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"Nopol: Automatic Repair of Conditional Statement Bugs in Java Programs",url:"https://hal.archives-ouvertes.fr/hal-01285008/document",date:"2016",description:"We propose Nopol, an approach to automatic repair of buggy conditional statements (i.e., if-then-else statements). This approach takes a buggy program as well as a test suite as input and generates a patch with a conditional expression as output. The test suite is required to contain passing test cases to model the expected behavior of the program and at least one failing test case that reveals the bug to be repaired. The process of Nopol consists of three major phases. First, Nopol employs angelic fix localization to identify expected values of a condition during the test execution. Second, runtime trace collection is used to collect variables and their actual values, including primitive data types and objected-oriented features (e.g., nullness checks), to serve as building blocks for patch generation. Third, Nopol encodes these collected data into an instance of a Satisfiability Modulo Theory (SMT) problem; then a feasible solution to the SMT instance is translated back into a code patch. We evaluate Nopol on 22 real-world bugs (16 bugs with a buggy if conditions and six bugs with missing preconditions) on two large open-source projects, namely Apache Commons Math and Apache Commons Lang. Empirical analysis on these bugs shows that our approach can effectively fix bugs with buggy if conditions and missing preconditions. We illustrate the capabilities and limitations of Nopol using case studies of real bug fixes.",authors:[{lastname:"Xuan",firstname:"Jifeng",url:"http://jifeng-xuan.com/"},{lastname:"Martinez",firstname:"Matias",url:"http://www.martinezmatias.com/"},{lastname:"Demarco",firstname:"Favio"},{lastname:"Clement",firstname:"Maxime"},{lastname:"Lamelas Marcote",firstname:"Sebastian"},{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Le Berre",firstname:"Daniel"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}],role:"IEEE Transactions on Software Engineering, Institute of Electrical and Electronics Engineers."}}),a("a",{attrs:{href:"https://hal.archives-ouvertes.fr/hal-01285008/document",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/SpoonLabs/nopol",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/SpoonLabs/nopol-experiments",target:"_blank",rel:"noopener noreferrer"}},[e._v("Experiment Results"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"DynaMoth: Dynamic Code Synthesis for Automatic Program Repair",url:"https://hal.archives-ouvertes.fr/hal-01279233/document",date:"2016",description:"Automatic software repair is the process of automatically fixing bugs. The Nopol repair system repairs Java code using code synthesis. We have designed a new code synthesis engine for Nopol based on dynamic exploration, it is called DynaMoth. The main design goal is to be able to generate patches with method calls. We evaluate DynaMoth over 224 of the Defects4J dataset. The evaluation shows that Nopol with DynaMoth is capable of synthesizing patches and enables Nopol to repair new bugs of the dataset.",authors:[{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}],role:"11th International Workshop in Automation of Software Test (AST 2016), May 2016, Austin, United States."}}),a("a",{attrs:{href:"https://hal.archives-ouvertes.fr/hal-01279233/document",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"/slide_dynamoth.pdf"}},[e._v("Slide")]),e._v("  • "),a("a",{attrs:{href:"https://github.com/SpoonLabs/nopol",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"IntroClassJava: A Benchmark of 297 Small and Buggy Java Programs",url:"https://hal.archives-ouvertes.fr/hal-01272126/document",date:"2016",description:"Reproducible and comparative research requires well-designed and publicly available benchmarks. We present IntroClassJava, a benchmark of 297 small Java programs, specified by JUnit test cases, and usable by any fault localization or repair system for Java. The dataset is based on the IntroClass benchmark and is publicly available on Github. ",authors:[{lastname:"Durieux",firstname:"Thomas",url:"https://durieux.me"},{lastname:"Monperrus",firstname:"Martin",url:"https://www.monperrus.net/martin/"}]}}),a("a",{attrs:{href:"https://hal.archives-ouvertes.fr/hal-01272126/document",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),a("OutboundLink")],1),e._v(" • "),a("a",{attrs:{href:"https://github.com/Spirals-Team/IntroClassJava",target:"_blank",rel:"noopener noreferrer"}},[e._v("Benchmark"),a("OutboundLink")],1)],1)])]),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),a("ul",[a("li",[a("p",[a("cv",{attrs:{name:"BikiniProxy",url:"https://github.com/Spirals-Team/bikiniproxy/",description:"",role:"Automatic Repair Technique for JavaScript"}}),a("a",{attrs:{href:"https://github.com/Spirals-Team/bikiniproxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"Itzal",url:"https://github.com/Spirals-Team/itzal",description:"",role:"Automatic Repair Technique for Java"}}),a("a",{attrs:{href:"https://github.com/Spirals-Team/itzal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"maven-repair",url:"https://github.com/Spirals-Team/maven-repair",description:"",role:"Automatic Repair Technique for Maven"}}),a("a",{attrs:{href:"https://github.com/Spirals-Team/maven-repair",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"NoPol",url:"https://github.com/SpoonLabs/nopol/",description:"",role:"Automatic Repair Technique for Java"}}),a("a",{attrs:{href:"https://github.com/SpoonLabs/nopol/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1)],1)]),a("li",[a("p",[a("cv",{attrs:{name:"NPEFix",url:"https://github.com/Spirals-Team/npefix",description:"",role:"Automatic Repair Technique for Java"}}),a("a",{attrs:{href:"https://github.com/Spirals-Team/npefix",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1)],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"research"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#research","aria-hidden":"true"}},[this._v("#")]),this._v(" Research")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publications","aria-hidden":"true"}},[this._v("#")]),this._v(" Publications")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2018","aria-hidden":"true"}},[this._v("#")]),this._v(" 2018")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2017","aria-hidden":"true"}},[this._v("#")]),this._v(" 2017")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_2016"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2016","aria-hidden":"true"}},[this._v("#")]),this._v(" 2016")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ph-d-thesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ph-d-thesis","aria-hidden":"true"}},[this._v("#")]),this._v(" Ph.D. Thesis")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Title")]),this._v(": "),t("em",[this._v("From Runtime Failures to Patches: Study of Patch Generation in Production")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Directors")]),this._v(": Martin Monperrus and Lionel Seinturier")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Started in")]),this._v(": September 2015, "),t("strong",[this._v("Expected Defense")]),this._v(": September 2018")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"open-source-reasearch-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-source-reasearch-tools","aria-hidden":"true"}},[this._v("#")]),this._v(" Open-source Reasearch Tools")])}],!1,null,null,null);t.default=i.exports}}]);