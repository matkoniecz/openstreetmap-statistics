"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1989],{46827:(n,r,o)=>{o.d(r,{Z:()=>s});var c=o(34663),e=o.n(c),t=o(7638),A=o.n(t)()(e());A.push([n.id,"/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./../node_modules/codemirror/theme/nord.css"],names:[],mappings:"AAAA,0CAA0C;AAC1C,4CAA4C;;AAE5C,wBAAwB,mBAAmB,EAAE,cAAc,EAAE;AAC7D,qCAAqC,mBAAmB,EAAE;AAC1D,8IAA8I,mBAAmB,EAAE;AACnK,6JAA6J,mBAAmB,EAAE;AAClL,iCAAiC,mBAAmB,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE;AACtD,6CAA6C,cAAc,EAAE;AAC7D,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,8BAA8B,EAAE;;AAEhE,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,4BAA4B,cAAc,EAAE;;AAE5C,0CAA0C,cAAc,EAAE;AAC1D,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;;AAErD,4DAA4D,cAAc,EAAE;AAC5E,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;;AAE5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yDAAyD,cAAc,EAAE;AACzE,yBAAyB,cAAc,EAAE;AACzC,6BAA6B,cAAc,EAAE;AAC7C,yBAAyB,cAAc,EAAE;AACzC,4BAA4B,cAAc,EAAE;AAC5C,0BAA0B,cAAc,EAAE;AAC1C,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;;AAEhE,+CAA+C,mBAAmB,EAAE;AACpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const s=A},7638:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var o="",c=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),c&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=n(r),c&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o})).join("")},r.i=function(n,o,c,e,t){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(c)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(A[a]=!0)}for(var d=0;d<n.length;d++){var i=[].concat(n[d]);c&&A[i[0]]||(void 0!==t&&(void 0===i[5]||(i[1]="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {").concat(i[1],"}")),i[5]=t),o&&(i[2]?(i[1]="@media ".concat(i[2]," {").concat(i[1],"}"),i[2]=o):i[2]=o),e&&(i[4]?(i[1]="@supports (".concat(i[4],") {").concat(i[1],"}"),i[4]=e):i[4]="".concat(e)),r.push(i))}},r}},34663:n=>{n.exports=function(n){var r=n[1],o=n[3];if(!o)return r;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),t="/*# ".concat(e," */"),A=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[r].concat(A).concat([t]).join("\n")}return[r].join("\n")}},51989:(n,r,o)=>{o.r(r),o.d(r,{default:()=>b});var c=o(1892),e=o.n(c),t=o(95760),A=o.n(t),s=o(38311),a=o.n(s),d=o(58192),i=o.n(d),m=o(38060),l=o.n(m),p=o(54865),u=o.n(p),C=o(46827),E={};E.styleTagTransform=u(),E.setAttributes=i(),E.insert=a().bind(null,"head"),E.domAPI=A(),E.insertStyleElement=l(),e()(C.Z,E);const b=C.Z&&C.Z.locals?C.Z.locals:void 0},1892:n=>{var r=[];function o(n){for(var o=-1,c=0;c<r.length;c++)if(r[c].identifier===n){o=c;break}return o}function c(n,c){for(var t={},A=[],s=0;s<n.length;s++){var a=n[s],d=c.base?a[0]+c.base:a[0],i=t[d]||0,m="".concat(d," ").concat(i);t[d]=i+1;var l=o(m),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==l)r[l].references++,r[l].updater(p);else{var u=e(p,c);c.byIndex=s,r.splice(s,0,{identifier:m,updater:u,references:1})}A.push(m)}return A}function e(n,r){var o=r.domAPI(r);return o.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;o.update(n=r)}else o.remove()}}n.exports=function(n,e){var t=c(n=n||[],e=e||{});return function(n){n=n||[];for(var A=0;A<t.length;A++){var s=o(t[A]);r[s].references--}for(var a=c(n,e),d=0;d<t.length;d++){var i=o(t[d]);0===r[i].references&&(r[i].updater(),r.splice(i,1))}t=a}}},38311:n=>{var r={};n.exports=function(n,o){var c=function(n){if(void 0===r[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}r[n]=o}return r[n]}(n);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(o)}},38060:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},58192:(n,r,o)=>{n.exports=function(n){var r=o.nc;r&&n.setAttribute("nonce",r)}},95760:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(o){!function(n,r,o){var c="";o.supports&&(c+="@supports (".concat(o.supports,") {")),o.media&&(c+="@media ".concat(o.media," {"));var e=void 0!==o.layer;e&&(c+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),c+=o.css,e&&(c+="}"),o.media&&(c+="}"),o.supports&&(c+="}");var t=o.sourceMap;t&&"undefined"!=typeof btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleTagTransform(c,n,r.options)}(r,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},54865:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}}]);
//# sourceMappingURL=1989.88d258f.js.map