"use strict";(self.webpackChunkgx_blog=self.webpackChunkgx_blog||[]).push([[9924],{9853:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var l=a(7294),c=a(4814),s=a(9960),r=a(2822),n=a(5999);function g(e){var t=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(s.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function o(e){var t,a=e.tag,o=(t=(0,r.c2)().selectMessage,function(e){return t(e,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:o(a.docs.length),tagName:a.name});return l.createElement(c.Z,{title:i,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(s.Z,{href:a.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},a.docs.map((function(e){return l.createElement(g,{key:e.id,doc:e})})))))))}}}]);