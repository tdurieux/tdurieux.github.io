(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{237:function(e,t,n){"use strict";n.r(t);var o=n(2),a=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"anonymous-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-github","aria-hidden":"true"}},[e._v("#")]),e._v(" Anonymous GitHub")]),e._v(" "),n("p",[n("img",{attrs:{src:"/projects/explorer.png",alt:"explorer.png"}}),e._v("\nAnonymous Github is a system to anonymize Github repositories before referring to them in a double-anonymous paper submission. To start using Anonymous Github right now: "),n("a",{attrs:{href:"http://anonymous.4open.science/",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("http://anonymous.4open.science/")]),n("OutboundLink")],1),e._v("\nIndeed, in a double-anonymous review process, the open-science data or code that is in the online appendix must be anonymized, similarly to paper anonymization. The authors must")]),e._v(" "),n("ul",[n("li",[e._v("anonymize URLs: the name of the institution/department/group/authors should not appear in the URLs of the open-science appendix")]),e._v(" "),n("li",[e._v("anonymize the appendix content itself")])]),e._v(" "),n("p",[e._v("Anonymizing an open-science appendix needs some work, but fortunately, this can be automated, this is what Anonymous Github is about.\nAnonymous Github anonymizes:")]),e._v(" "),n("ul",[n("li",[e._v("the Github owner / organization / repository name")]),e._v(" "),n("li",[e._v("the content of the repository")])]),e._v(" "),n("p",[e._v("Question / Feedback / Bug report: please open an issue in this repository.")]),e._v(" "),n("h2",{attrs:{id:"using-anonymous-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-anonymous-github","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Using Anonymous Github")])]),e._v(" "),n("h2",{attrs:{id:"how-to-create-a-new-anonymized-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-new-anonymized-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("How to create a new anonymized repository")])]),e._v(" "),n("p",[e._v("To use it, open the main page (e.g., "),n("a",{attrs:{href:"http://anonymous.4open.science/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://anonymous.4open.science/"),n("OutboundLink")],1),e._v(' ), login with GitHub, and click on "Anonymize". Simply fill 1. the Github repo URL and 2. the id of the anonymized repository, 3. the terms to anonymize (which can be updated afterward). The anonymization of the content is done by replacing all occurrences of words in a list by "XXXX" (can be changed in the configuration). The word list is provided by the authors, and typically contains the institution name, author names, logins, etc... The README is anonymized as well as all files of the repository. Even filenames are anonymized.\nIn a paper under double-anonymous review, instead of putting a link to Github, one puts a link to the Anonymous Github instance (e.g. '),n("a",{attrs:{href:"http://anonymous.4open.science/r/840c8c57-3c32-451e-bf12-0e20be300389/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://anonymous.4open.science/r/840c8c57-3c32-451e-bf12-0e20be300389/"),n("OutboundLink")],1),e._v(" which is an anonymous version of this repo).\nTo start using Anonymous Github right now, a public instance of anonymous_github is hosted at 4open.science:\n"),n("a",{attrs:{href:"http://anonymous.4open.science/",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("http://anonymous.4open.science/")]),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"what-is-the-scope-of-anonymization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-scope-of-anonymization","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("What is the scope of anonymization?")])]),e._v(" "),n("p",[e._v("In double-anonymous peer-review, the boundary of anonymization is the paper plus its online appendix, and only this, it's not the whole world. Googling any part of the paper or the online appendix can be considered as a deliberate attempt to break anonymity ( "),n("a",{attrs:{href:"http://www.monperrus.net/martin/open-science-double-anonymous",target:"_blank",rel:"noopener noreferrer"}},[e._v("explanation"),n("OutboundLink")],1),e._v(" )")]),e._v(" "),n("h2",{attrs:{id:"how-does-it-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("How does it work?")])]),e._v(" "),n("p",[e._v("Anonymous Github either download the complete repository and anonymize the content of the file or proxy the request to GitHub. In both case, the original and anonymized versions of the file are cached on the server.")]),e._v(" "),n("h2",{attrs:{id:"installing-anonymous-github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-anonymous-github","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Installing Anonymous Github")])]),e._v(" "),n("ol",[n("li",[e._v("Clone the repository")])]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/tdurieux/anonymous_github/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" anonymous_github\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ol",[n("li",[e._v("Configure the Github token")])]),e._v(" "),n("p",[e._v("Create a file "),n("code",[e._v(".env")]),e._v(" that contains")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("GITHUB_TOKEN"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("GITHUB_TOKEN"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nCLIENT_ID"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CLIENT_ID"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nCLIENT_SECRET"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CLIENT_SECRET"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nPORT"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("5000\nDB_USERNAME"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nDB_PASSWORD"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nAUTH_CALLBACK"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://localhost:5000/github/auth,\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[n("code",[e._v("GITHUB_TOKEN")]),e._v(" can be generated here: "),n("a",{attrs:{href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/settings/tokens/new"),n("OutboundLink")],1),e._v(" with "),n("code",[e._v("repo")]),e._v(" scope. "),n("code",[e._v("CLIENT_ID")]),e._v(" and "),n("code",[e._v("CLIENT_SECRET")]),e._v(" are the tokens are generated when you create a new GitHub app "),n("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/settings/applications/new"),n("OutboundLink")],1),e._v(" . The callback of the GitHub app needs to be defined as "),n("code",[e._v("https://<host>/github/auth")]),e._v(" (the same as defined in AUTH_CALLBACK).")]),e._v(" "),n("ol",[n("li",[e._v("Start Anonymous Github server: "),n("code",[e._v("docker-compose up -d")])]),e._v(" "),n("li",[e._v("Go to Anonymous Github")])]),e._v(" "),n("p",[e._v("By default, Anonymous Github uses port 5000. It can be changed in "),n("code",[e._v("docker-compose.yml")]),e._v(" .")]),e._v(" "),n("h2",{attrs:{id:"related-tools"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#related-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Related tools")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.gitmask.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gitmask"),n("OutboundLink")],1),e._v(" is a tool to anonymously contribute to a Github repository.\n"),n("a",{attrs:{href:"https://github.com/zombie/blind-reviews/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blind-reviews"),n("OutboundLink")],1),e._v(" is a browser add-on that enables a person reviewing a GitHub pull request to hide identifying information about the person submitting it.")]),e._v(" "),n("h2",{attrs:{id:"see-also"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#see-also","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("See also")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.monperrus.net/martin/open-science-double-anonymous",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open-science and double-anonymous Peer-Review"),n("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=a.exports}}]);