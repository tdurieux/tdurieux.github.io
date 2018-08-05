(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{186:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The goal of this projects is is to simplify automatic repair on Maven projects.")]),t._v(" "),t._m(1),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./npefix.html"}},[t._v("NPEFix")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./nopol.html"}},[t._v("Nopol")])],1),t._v(" "),e("li",[t._v("DynaMoth")]),t._v(" "),e("li",[t._v("jGenProg")]),t._v(" "),e("li",[t._v("jKali")]),t._v(" "),e("li",[t._v("Cardumen")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"maven-repair-a-maven-plugin-for-executing-automated-program-repair-tools-on-maven-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven-repair-a-maven-plugin-for-executing-automated-program-repair-tools-on-maven-projects","aria-hidden":"true"}},[this._v("#")]),this._v(" maven-repair: a Maven plugin for executing automated program repair tools on Maven projects")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"automatic-repair-techniques"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-repair-techniques","aria-hidden":"true"}},[this._v("#")]),this._v(" Automatic Repair Techniques")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"manual-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-install","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual install")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/Spirals-Team/maven-repair\n"),a("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" maven-repair\nmvn "),a("span",{attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven","aria-hidden":"true"}},[this._v("#")]),this._v(" Maven")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("mvn org.apache.maven.plugins:maven-dependency-plugin:2.1:get \\\n    -DrepoUrl"),a("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("https://tdurieux.github.io/maven-repository/snapshots/ \\\n    -Dartifact"),a("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("fr.inria.gforge.spirals:repair-maven-plugin:1.4-SNAPSHOT\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /somewhere/my-project-with-failing-tests\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# check the failing tests")]),t._v("\nmvn "),e("span",{attrs:{class:"token function"}},[t._v("test")]),t._v(" -DtrimStackTrace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# look for patches with Nopol")]),t._v("\nmvn fr.inria.gforge.spirals:repair-maven-plugin:nopol\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# look for patches with NpeFix")]),t._v("\nmvn fr.inria.gforge.spirals:repair-maven-plugin:npefix\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[this._v("#")]),this._v(" Output")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("# the patches are in target\ncat target/npefix/patches.json\n\ncat target/nopol/output.json\n")])])])}],!1,null,null,null);a.default=r.exports}}]);