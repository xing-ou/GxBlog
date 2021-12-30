"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[7918],{2018:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var a=n(7294),l=n(6010),i=n(3783),r=n(5999),s=n(9960);var o=function(e){var t=e.navLink,n=e.next;return a.createElement(s.Z,{className:(0,l.Z)("pagination-nav__link"),to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},n?a.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):a.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},t.title))};var c=function(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(o,{navLink:t})),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(o,{navLink:n,next:!0})))},m=n(2263),d=n(907),u=n(6681);var v={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=v[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){var t=e.versionLabel,n=e.to,l=e.onClick;return a.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(s.Z,{to:n,onClick:l},a.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,n=e.className,i=e.versionMetadata,r=(0,m.Z)().siteConfig.title,s=(0,d.gA)({failfast:!0}).pluginId,o=(0,u.J)(s).savePreferredVersionName,c=(0,d.Jo)(s),v=c.latestDocSuggestion,b=c.latestVersionSuggestion,f=null!=v?v:(t=b).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,l.Z)(n,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:r,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:b.label,to:f.path,onClick:function(){return o(b.name)}})))}function f(e){var t=e.className,n=(0,u.E6)();return n.banner?a.createElement(b,{className:t,versionMetadata:n}):null}function E(e){var t=e.className,n=(0,u.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",n.label):null}var p=n(1217);var k=n(62),N=n(5203);function _(e){return a.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(k.Z,e)))}function Z(e){var t=e.content.metadata,n=t.editUrl,i=t.lastUpdatedAt,r=(t.formattedLastUpdatedAt,t.lastUpdatedBy),s=t.tags,o=s.length>0;return o||!!(n||i||r)?a.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(_,{tags:s}),a.createElement(N.i,null)):a.createElement(a.Fragment,null)}var L=n(1575),C="tocCollapsible_1PrD",T="tocCollapsibleButton_2O1e",x="tocCollapsibleContent_2Ydz",H="tocCollapsibleExpanded_3GYr",M=n(5002);function y(e){var t,n=e.toc,i=e.className,s=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),m=c.collapsed,d=c.toggleCollapsed;return a.createElement("div",{className:(0,l.Z)(C,(t={},t[H]=!m,t),i)},a.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",T),onClick:d},a.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:x,collapsed:m},a.createElement(M.Z,{toc:n,minHeadingLevel:s,maxHeadingLevel:o})))}var A=n(9649),w="docItemContainer_33ec",O="docItemCol_3FnS",S="tocMobile_3Hoh";function V(e){var t,n=e.content,r=n.metadata,s=n.frontMatter,o=s.image,m=s.keywords,d=s.hide_title,v=s.hide_table_of_contents,g=s.toc_min_heading_level,h=s.toc_max_heading_level,b=r.description,k=r.title,N=!d&&void 0===n.contentTitle,_=(0,i.Z)(),C=!v&&n.toc&&n.toc.length>0,T=C&&("desktop"===_||"ssr"===_);return a.createElement(a.Fragment,null,a.createElement(p.Z,{title:k,description:b,keywords:m,image:o}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,l.Z)("col",(t={},t[O]=!v,t))},a.createElement(f,null),a.createElement("div",{className:w},a.createElement("article",null,a.createElement(E,null),C&&a.createElement(y,{toc:n.toc,minHeadingLevel:g,maxHeadingLevel:h,className:(0,l.Z)(u.kM.docs.docTocMobile,S)}),a.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&a.createElement(A.N,null,k),a.createElement(n,null)),a.createElement(Z,e)),a.createElement(c,{previous:r.previous,next:r.next}))),T&&a.createElement("div",{className:"col col--3"},a.createElement(L.Z,{toc:n.toc,minHeadingLevel:g,maxHeadingLevel:h,className:u.kM.docs.docTocDesktop}))))}},9649:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return v}});var a=n(102),l=n(3117),i=n(7294),r=n(6010),s=n(5999),o=n(6681),c="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",d=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var n,u=e.id,v=(0,a.Z)(e,d),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,r.Z)("anchor",(n={},n[m]=g,n[c]=!g,n)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},1575:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(102),i=n(7294),r=n(6010),s=n(5002),o="tableOfContents_35-E",c=["className"];var m=function(e){var t=e.className,n=(0,l.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},i.createElement(s.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3117),l=n(102),i=n(7294),r=n(6681),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,n=e.className,a=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function c(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,h=e.maxHeadingLevel,b=(0,l.Z)(e,s),f=(0,r.LU)(),E=null!=g?g:f.tableOfContents.minHeadingLevel,p=null!=h?h:f.tableOfContents.maxHeadingLevel,k=(0,r.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:p}),N=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:E,maxHeadingLevel:p}}),[d,v,E,p]);return(0,r.Si)(N),i.createElement(o,(0,a.Z)({toc:k,className:c,linkClassName:d},b))}},7774:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(6010),i=n(9960),r="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){var t,n=e.permalink,c=e.name,m=e.count;return a.createElement(i.Z,{href:n,className:(0,l.Z)(r,(t={},t[s]=!m,t[o]=m,t))},c,m&&a.createElement("span",null,m))}},62:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(6010),i=n(5999),r=n(7774),s="tags_2ga9",o="tag_11ep";function c(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:o},a.createElement(r.Z,{name:t,permalink:n}))}))))}},5203:function(e,t,n){n.d(t,{i:function(){return i}});var a=n(5350),l=n(7294),i=function(){var e=(0,a.Z)().isDarkTheme,t=(0,l.useRef)(null),n=e?"github-dark":"github-light";return(0,l.useEffect)((function(){if(t.current){var e=document.createElement("script");e.src="https://utteranc.es/client.js",e.async=!0,e.crossOrigin="anonymous",e.setAttribute("repo","xing-ou/GxBlog"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","blog-comment"),e.setAttribute("theme",n),t.current.appendChild(e)}}),[]),(0,l.useEffect)((function(){if(document.querySelector(".utterances-frame")){var e,t=document.querySelector(".utterances-frame");if(!t)return;null==t||null==(e=t.contentWindow)||e.postMessage({type:"set-theme",theme:n},"https://utteranc.es")}}),[n]),l.createElement("section",{ref:t})}}}]);