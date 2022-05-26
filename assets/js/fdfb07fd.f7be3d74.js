"use strict";(self.webpackChunkdeep_dive=self.webpackChunkdeep_dive||[]).push([[3749],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),k=l,T=d["".concat(u,".").concat(k)]||d[k]||s[k]||a;return r?n.createElement(T,i(i({ref:t},c),{},{components:r})):n.createElement(T,i({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9259:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return k}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],o={sidebar_position:50},u="44\uc7a5 REST API",p={unversionedId:"week12/chapter44",id:"week12/chapter44",title:"44\uc7a5 REST API",description:"REST: Representational State Transfer",source:"@site/docs/week12/chapter44.md",sourceDirName:"week12",slug:"/week12/chapter44",permalink:"/deep-dive/docs/week12/chapter44",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/week12/chapter44.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"answer",permalink:"/deep-dive/docs/week10/answer"},next:{title:"45\uc7a5 \ud504\ub85c\ubbf8\uc2a4",permalink:"/deep-dive/docs/week12/chapter45"}},c={},s=[{value:"REST API\uc758 \uad6c\uc131",id:"rest-api\uc758-\uad6c\uc131",level:2},{value:"REST API \uc124\uacc4 \uc6d0\uce59",id:"rest-api-\uc124\uacc4-\uc6d0\uce59",level:2},{value:"GET",id:"get",level:3},{value:"POST",id:"post",level:3},{value:"PUT",id:"put",level:3},{value:"PATCH",id:"patch",level:3},{value:"DELETE",id:"delete",level:3},{value:"JSON Server\ub97c \uc774\uc6a9\ud55c REST API \uc2e4\uc2b5",id:"json-server\ub97c-\uc774\uc6a9\ud55c-rest-api-\uc2e4\uc2b5",level:2}],d={toc:s};function k(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"44\uc7a5-rest-api"},"44\uc7a5 REST API"),(0,a.kt)("p",null,"REST: Representational State Transfer "),(0,a.kt)("p",null,"\uc6f9\uc774 HTTP\ub97c \uc81c\ub300\ub85c \uc0ac\uc6a9\ud558\uc9c0 \ubabb\ud558\uace0 \uc788\ub294 \uc0c1\ud669\uc744 \ubcf4\uace0 HTTP\uc758 \uc7a5\uc810\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \uc544\ud0a4\ud14d\ucc98\ub85c\uc11c REST\ub97c \ub85c\uc774 \ud544\ub529\uc774 \uc18c\uac1c\ud588\uace0, \uc774\ub294 HTTP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc758\ub3c4\uc5d0 \ub9de\uac8c \ub514\uc790\uc778\ud558\ub3c4\ub85d \uc720\ub3c4\ud558\uace0 \uc788\ub514."),(0,a.kt)("p",null,"REST\uc758 \uae30\ubcf8 \uc6d0\uce59\uc744 \uc131\uc2e4\ud788 \uc9c0\ud0a8 \uc11c\ube44\uc2a4 \ub514\uc790\uc778\uc744 RESTful \uc774\ub77c\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc989, REST\ub294 HTTP\ub97c \uae30\ubc18\uc73c\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc11c\ubc84\uc758 \ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud558\ub294 \ubc29\uc2dd\uc744 \uaddc\uc815\ud55c \uc544\ud0a4\ud14d\ucc98\uace0, REST API \ub294 REST\ub97c \uae30\ubc18\uc73c\ub85c \uc11c\ube44\uc2a4 API\ub97c \uad6c\ud604\ud55c\uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. "),(0,a.kt)("h2",{id:"rest-api\uc758-\uad6c\uc131"},"REST API\uc758 \uad6c\uc131"),(0,a.kt)("p",null,"REST API \ub294 \uc790\uc6d0 (resource), \ud589\uc704 (verb), \ud45c\ud604 (representations)\uc758 3\uac00\uc9c0 \uc694\uc18c\ub85c \uad6c\uc131\ub41c\ub2e4. REST\ub294 \uc790\uccb4 \ud45c\ud604 \uad6c\uc870 self-descriptiveness\ub85c \uad6c\uc131\ub418\uc5b4 REST API\ub9cc\uc73c\ub85c http\uc694\uccad\uc758 \ub0b4\uc6a9\uc744 \uc774\ud574\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"resource : \uc790\uc6d0 - URI (\uc5d4\ub4dc\ud3ec\uc778\ud2b8)"),(0,a.kt)("li",{parentName:"ul"},"verb: \uc790\uc6d0\uc5d0 \ub300\ud55c \ud589\uc704 - HTTP \uc694\uccad \uba54\uc11c\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"representations: \uc790\uc6d0\uc5d0 \ub300\ud55c \ud589\uc704\uc758 \uad6c\uccb4\uc801 \ub0b4\uc6a9 - \ud398\uc774\ub85c\ub4dc")),(0,a.kt)("h2",{id:"rest-api-\uc124\uacc4-\uc6d0\uce59"},"REST API \uc124\uacc4 \uc6d0\uce59"),(0,a.kt)("p",null,"REST \uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \uae30\ubcf8\uc801\uc778 \uc6d0\uce59\uc744 \uc54c\uc544\ubcf4\uc790."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"URI\ub294 \ub9ac\uc18c\uc2a4\ub97c \ud45c\ud604\ud574\uc57c\ud55c\ub2e4.\n\ub9ac\uc18c\uc2a4\ub97c \uc2dd\ubcc4\ud560\uc218 \uc788\ub294 \uc774\ub984\uc740 \ub3d9\uc0ac\ubcf4\ub2e4\ub294 \uba85\uc0ac\ub97c \uc0ac\uc6a9.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /todos/1")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \ud589\uc704\ub294 http \uc694\uccad \uba54\uc11c\ub4dc\ub85c \ud45c\ud604\nHTTP \uc694\uccad \uba54\uc11c\ub4dc\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc11c\ubc84\uc5d0\uc138 \uc694\uccad\uc758 \uc885\ub8cc\uc640 \ubaa9\uc801 (\ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \ud589\uc704)\uc744 \uc54c\ub9ac\ub294 \ubc29\ubc95\uc774\ub2e4. GET, POST, PUT, PATCH, DELETE \ub97c \uc0ac\uc6a9\ud558\uc5ec CRUD\ub97c \uad6c\ud604\ud55c\ub2e4.")),(0,a.kt)("h3",{id:"get"},"GET"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc885\ub958: index / retrieve"),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\ub85c\ub4dc: X")),(0,a.kt)("h3",{id:"post"},"POST"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc885\ub958: create"),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\ub85c\ub4dc: O")),(0,a.kt)("h3",{id:"put"},"PUT"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc885\ub958: replace (\uc804\uccb4\uad50\uccb4)"),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\ub85c\ub4dc: O ")),(0,a.kt)("h3",{id:"patch"},"PATCH"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc885\ub958: modify (\uc77c\ubd80\uc218\uc815)"),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\ub85c\ub4dc: O")),(0,a.kt)("h3",{id:"delete"},"DELETE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc885\ub958: delete "),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\ub85c\ub4dc: X")),(0,a.kt)("p",null,"\ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \ud589\uc704\ub294 URI\uc5d0 \ud45c\ud604\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("h2",{id:"json-server\ub97c-\uc774\uc6a9\ud55c-rest-api-\uc2e4\uc2b5"},"JSON Server\ub97c \uc774\uc6a9\ud55c REST API \uc2e4\uc2b5"),(0,a.kt)("p",null,"JSON Server\ub97c \uc0ac\uc6a9\ud574 \uac00\uc0c1 REST API \uc11c\ubc84\ub97c \uad6c\ucd95\ud558\uc5ec HTTP \uc694\uccad\uc744 \uc804\uc1a1, \uc751\ub2f5 \ubc1b\uc744 \uc218 \uc788\ub2e4."))}k.isMDXComponent=!0}}]);