(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(t,r,e){var s=e(67),a=e(12);t.exports=function(t,r,e){if(s(r))throw TypeError("String#"+e+" doesn't accept regex!");return String(a(t))}},160:function(t,r,e){var s=e(1)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[s]=!1,!"/./"[t](r)}catch(t){}}return!0}},162:function(t,r,e){"use strict";var s=e(2),a=e(50),n=e(159),i="".startsWith;s(s.P+s.F*e(160)("startsWith"),"String",{startsWith:function(t){var r=n(this,t,"startsWith"),e=a(Math.min(arguments.length>1?arguments[1]:void 0,r.length)),s=String(t);return i?i.call(r,s,e):r.slice(e,e+s.length)===s}})},171:function(t,r,e){"use strict";e.r(r);e(162),e(21);var s={methods:{projects:function(){var t=this.$page;return this.$site.pages.filter(function(r){return r!=t&&r.path.startsWith("/projects/")})}}},a=e(0),n=Object(a.a)(s,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("A list of my active projects that are also available on "),e("a",{attrs:{href:"https://github.com/tdurieux",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHug"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"posts"},t._l(t.projects(),function(r){return e("article",{staticClass:"post"},[e("router-link",{attrs:{to:r.path}},[e("span",{staticClass:"img-wrap"},[e("img",{staticClass:"entry-image attachment-post",attrs:{"article-title":r.title,src:t.$withBase(r.frontmatter.image||"")}})])]),t._v(" "),e("ul",{staticClass:"post-categories"},t._l(r.frontmatter.tags,function(r){return e("li",{staticClass:"entry-categories"},[t._v(t._s(r)+" ")])})),t._v(" "),e("header",{staticClass:"entry-header"},[e("h4",{staticClass:"entry-title"},[e("router-link",{attrs:{to:r.path}},[t._v("\n          "+t._s(r.title)+"\n        ")])],1)]),t._v(" "),e("div",{staticClass:"entry-content"},[e("p",[t._v("\n        "+t._s(r.frontmatter.description)+"\n      ")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(r.excerpt)}})]),t._v(" "),e("p",{staticClass:"entry-meta"},[r.frontmatter.github?e("a",{attrs:{href:r.frontmatter.github}},[t._v("GitHub")]):t._e()])],1)}))])},[function(){var t=this.$createElement,r=this._self._c||t;return r("h1",{attrs:{id:"projects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#projects","aria-hidden":"true"}},[this._v("#")]),this._v(" Projects")])}],!1,null,null,null);r.default=n.exports}}]);