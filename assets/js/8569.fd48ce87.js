(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[8569],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39649:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(83117),a=n(80102),o=n(67294),l=n(86010),c=n(95999),i=n(86668),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"];function p(e){var t=e.as,n=e.id,p=(0,a.Z)(e,m),d=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},p,{className:(0,l.Z)("anchor",d?u:s),id:n}),p.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},p,{id:void 0}))}},96471:function(e,t,n){"use strict";n.d(t,{Z:function(){return me}});var r=n(83117),a=n(67294),o=n(80102),l=n(35742),c=["mdxType","originalType"];var i=n(72389),s=n(86010),u=n(92949),m=n(86668);function p(){var e=(0,m.L)().prism,t=(0,u.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var d=n(28900),f=n(87594),g=n.n(f),v=(0,d.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,d.Z)(/\{([\d,-]+)\}/,{range:1}),h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){var n=e.map((function(e){var n=h[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function k(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&y.test(o)){var l=o.match(y).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=a[0].className,i=g()(l).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(h),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),d=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),v=0;v<u.length;){var k=u[v].match(s);if(k){var E=k.slice(1).find((function(e){return void 0!==e}));p[E]?m[p[E]].range+=v+",":d[E]?m[d[E]].start=v:f[E]&&(m[f[E]].range+=m[f[E]].start+"-"+(v-1)+","),u.splice(v,1)}else v+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;g()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var E=n(35281),N="codeBlockContainer_MPoW",j=["as"];function B(e){var t=e.as,n=(0,o.Z)(e,j),l=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(p());return a.createElement(t,(0,r.Z)({},n,{style:l,className:(0,s.Z)(n.className,N,E.k.common.codeBlock)}))}var Z={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function C(e){var t=e.children,n=e.className;return a.createElement(B,{as:"pre",tabIndex:0,className:(0,s.Z)(Z.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Z.codeBlockLines},t))}var O={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},w={Prism:n(11205).default,theme:O};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}var L=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},P=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=_({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=_({},n,{backgroundColor:null}),a};function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var I=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?P(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=_({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?_({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),T(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),T(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=_({},D(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?_({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),T(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=S(u,m.type),m.alias&&(u=S(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(L),d=p.length;c.push({types:u,content:p[0]});for(var f=1;f<d;f++)x(c),i.push(c=[]),c.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return x(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),A=I,z="codeLine_rqGN",R="codeLineNumber_hzTh",W="codeLineContent_hM6e";function M(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,l=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=l({line:t,className:(0,s.Z)(n,o&&z)}),u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))}));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:R}),a.createElement("span",{className:W},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var V=n(95999),H={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function F(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],l=r[1],c=(0,a.useRef)(void 0),i=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,V.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,V.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,V.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,H.copyButton,o&&H.copyButtonCopied),onClick:i},a.createElement("span",{className:H.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:H.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:H.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var G="wordWrapButtonIcon_azs1",q="wordWrapButtonEnabled_Geot";function Q(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,V.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,r&&q),"aria-label":o,title:o},a.createElement("svg",{className:G,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function X(e){var t,n,o,l,c,i,u,d,f,g,y,h=e.children,b=e.className,E=void 0===b?"":b,N=e.metastring,j=e.title,C=e.showLineNumbers,O=e.language,T=(0,m.L)().prism,_=T.defaultLanguage,L=T.magicComments,x=null!=(t=null!=O?O:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:_,S=p(),P=(o=(0,a.useState)(!1),l=o[0],c=o[1],i=(0,a.useState)(!1),u=i[0],d=i[1],f=(0,a.useRef)(null),g=(0,a.useCallback)((function(){var e=f.current.querySelector("code");l?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",c((function(e){return!e}))}),[f,l]),y=(0,a.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");d(t)}),[f]),(0,a.useEffect)((function(){y()}),[l,y]),(0,a.useEffect)((function(){return window.addEventListener("resize",y,{passive:!0}),function(){window.removeEventListener("resize",y)}}),[y]),{codeBlockRef:f,isEnabled:l,isCodeScrollable:u,toggle:g}),D=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(v))?void 0:n.groups.title)?t:""}(N)||j,I=k(h,{metastring:N,language:x,magicComments:L}),z=I.lineClassNames,R=I.code,W=C||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(N);return a.createElement(B,{as:"div",className:(0,s.Z)(E,x&&!E.includes("language-"+x)&&"language-"+x)},D&&a.createElement("div",{className:Z.codeBlockTitle},D),a.createElement("div",{className:Z.codeBlockContent},a.createElement(A,(0,r.Z)({},w,{theme:S,code:R,language:null!=x?x:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:P.codeBlockRef,className:(0,s.Z)(t,Z.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,s.Z)(Z.codeBlockLines,W&&Z.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(M,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:z[t],showLineNumbers:W})}))))})),a.createElement("div",{className:Z.buttonGroup},(P.isEnabled||P.isCodeScrollable)&&a.createElement(Q,{className:Z.codeButton,onClick:function(){return P.toggle()},isEnabled:P.isEnabled}),a.createElement(F,{className:Z.codeButton,code:R}))))}var $=["children"];function Y(e){var t=e.children,n=(0,o.Z)(e,$),l=(0,i.Z)(),c=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?X:C;return a.createElement(s,(0,r.Z)({key:String(l)},n),c)}var U=n(39960);var J=n(86043),K="details_lb9f",ee="isBrowser_bmU9",te="collapsibleContent_i85q",ne=["summary","children"];function re(e){return!!e&&("SUMMARY"===e.tagName||re(e.parentElement))}function ae(e,t){return!!e&&(e===t||ae(e.parentElement,t))}function oe(e){var t=e.summary,n=e.children,r=(0,o.Z)(e,ne),l=(0,i.Z)(),c=(0,a.useRef)(null),u=(0,J.u)({initialState:!r.open}),m=u.collapsed,p=u.setCollapsed,d=(0,a.useState)(r.open),f=d[0],g=d[1];return a.createElement("details",Object.assign({},r,{ref:c,open:f,"data-collapsed":m,className:(0,s.Z)(K,l&&ee,r.className),onMouseDown:function(e){re(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;re(t)&&ae(t,c.current)&&(e.preventDefault(),m?(p(!1),g(!0)):p(!0))}}),t||a.createElement("summary",null,"Details"),a.createElement(J.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),g(!e)}},a.createElement("div",{className:te},n)))}var le="details_BAp3";function ce(e){var t=Object.assign({},e);return a.createElement(oe,(0,r.Z)({},t,{className:(0,s.Z)("alert alert--info",le,t.className)}))}var ie=n(39649);function se(e){return a.createElement(ie.Z,e)}var ue="img_E7b_";var me={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.Z)(r,c));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(Y,e)},a:function(e){return a.createElement(U.Z,e)},pre:function(e){var t;return a.createElement(Y,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(ce,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,ue))}));var t},h1:function(e){return a.createElement(se,(0,r.Z)({as:"h1"},e))},h2:function(e){return a.createElement(se,(0,r.Z)({as:"h2"},e))},h3:function(e){return a.createElement(se,(0,r.Z)({as:"h3"},e))},h4:function(e){return a.createElement(se,(0,r.Z)({as:"h4"},e))},h5:function(e){return a.createElement(se,(0,r.Z)({as:"h5"},e))},h6:function(e){return a.createElement(se,(0,r.Z)({as:"h6"},e))}}},71750:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),a=n(86010),o=n(39960);function l(e){var t=e.permalink,n=e.title,l=e.subLabel,c=e.isNext;return r.createElement(o.Z,{className:(0,a.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},n))}},7774:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o=n(39960),l="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function s(e){var t=e.permalink,n=e.label,s=e.count;return r.createElement(o.Z,{href:t,className:(0,a.Z)(l,s?i:c)},n,s&&r.createElement("span",null,s))}},20062:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o=n(95999),l=n(7774),c="tags_XVD_",i="tag_JSN8";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:i},r.createElement(l.Z,{label:t,permalink:n}))}))))}},87594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);