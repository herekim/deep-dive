"use strict";(self.webpackChunkdeep_dive=self.webpackChunkdeep_dive||[]).push([[186],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(n),k=o,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9020:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},assets:function(){return s},toc:function(){return p},default:function(){return k}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],c={sidebar_position:17},u="17\uc7a5 \uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131",i={unversionedId:"week4/chapter17",id:"week4/chapter17",title:"17\uc7a5 \uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131",description:"17.1 Object \uc0dd\uc131\uc790 \ud568\uc218",source:"@site/docs/week4/chapter17.md",sourceDirName:"week4",slug:"/week4/chapter17",permalink:"/deep-dive/docs/week4/chapter17",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/week4/chapter17.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"11\uc7a5 \uc6d0\uc2dc \uac12\uacfc \uac1d\uccb4\uc758 \ube44\uad50",permalink:"/deep-dive/docs/week2/chapter11"},next:{title:"18\uc7a5 \uc77c\uae09 \uac1d\uccb4",permalink:"/deep-dive/docs/week4/chapter18"}},s={},p=[{value:"17.1 Object \uc0dd\uc131\uc790 \ud568\uc218",id:"171-object-\uc0dd\uc131\uc790-\ud568\uc218",level:2},{value:"17.2 \uc0dd\uc131\uc790 \ud568\uc218",id:"172-\uc0dd\uc131\uc790-\ud568\uc218",level:2},{value:"\uac1d\uccb4 \ub9ac\ud130\ub7f4\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131 \ubc29\uc2dd\uc758 \ubb38\uc81c\uc810",id:"\uac1d\uccb4-\ub9ac\ud130\ub7f4\uc5d0-\uc758\ud55c-\uac1d\uccb4-\uc0dd\uc131-\ubc29\uc2dd\uc758-\ubb38\uc81c\uc810",level:3},{value:"\uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131 \ubc29\uc2dd\uc758 \uc7a5\uc810",id:"\uc0dd\uc131\uc790-\ud568\uc218\uc5d0-\uc758\ud55c-\uac1d\uccb4-\uc0dd\uc131-\ubc29\uc2dd\uc758-\uc7a5\uc810",level:3},{value:"\uc0dd\uc131\uc790 \ud568\uc218\uc758 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131 \uacfc\uc815",id:"\uc0dd\uc131\uc790-\ud568\uc218\uc758-\uc778\uc2a4\ud134\uc2a4-\uc0dd\uc131-\uacfc\uc815",level:3},{value:"\ub0b4\ubd80 \uba54\uc11c\ub4dc [Call]\uacfc [Construct]",id:"\ub0b4\ubd80-\uba54\uc11c\ub4dc-call\uacfc-construct",level:3},{value:"constructor &amp; non-constructor",id:"constructor--non-constructor",level:3},{value:"new \uc5f0\uc0b0\uc790",id:"new-\uc5f0\uc0b0\uc790",level:3},{value:"new.target",id:"newtarget",level:3}],d={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"17\uc7a5-\uc0dd\uc131\uc790-\ud568\uc218\uc5d0-\uc758\ud55c-\uac1d\uccb4-\uc0dd\uc131"},"17\uc7a5 \uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131"),(0,l.kt)("h2",{id:"171-object-\uc0dd\uc131\uc790-\ud568\uc218"},"17.1 Object \uc0dd\uc131\uc790 \ud568\uc218"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"new \uc5f0\uc0b0\uc790\uc640 \ud568\uaed8 Object \uc0dd\uc131\uc790 \ud568\uc218 \ud638\ucd9c\ud55c\ub2e4."),(0,l.kt)("p",null,"\uc0dd\uc131\uc790 \ud568\uc218 constructor \ub780 new \uc5f0\uc0b0\uc790\uc640 \ud568\uaed8 \ud638\ucd9c\ud558\uc5ec \uac1d\uccb4 (\uc778\uc2a4\ud134\uc2a4)\ub97c \uc0dd\uc131\ud558\ub294 \ud568\uc218\ub97c \ub9d0\ud55c\ub2e4.\nString, Number, Boolean, Function, Array, Date, RegExp, Promise \ub4f1 \ube4c\ud2b8\uc778 \uc0dd\uc131\uc790 \ud568\uc218\uac00 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const person = new Object();\n")),(0,l.kt)("h2",{id:"172-\uc0dd\uc131\uc790-\ud568\uc218"},"17.2 \uc0dd\uc131\uc790 \ud568\uc218"),(0,l.kt)("h3",{id:"\uac1d\uccb4-\ub9ac\ud130\ub7f4\uc5d0-\uc758\ud55c-\uac1d\uccb4-\uc0dd\uc131-\ubc29\uc2dd\uc758-\ubb38\uc81c\uc810"},"\uac1d\uccb4 \ub9ac\ud130\ub7f4\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131 \ubc29\uc2dd\uc758 \ubb38\uc81c\uc810"),(0,l.kt)("p",null,"\uac1d\uccb4 \ub9ac\ud130\ub7f4\uc5d0 \uc758\ud55c \uc0dd\uc131\uc740 \ub2e8 \ud558\ub098\uc758 \uac1d\uccb4\ub9cc \uc0dd\uc131\ud558\uae30\ub54c\ubb38\uc5d0 \uc5ec\ub7ec \uac1c\ub97c \uc0dd\uc131\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 \uac19\uc740 \uc0dd\uc131\uc744 \ubc18\ubcf5\ud574\uc57c\ud55c\ub2e4."),(0,l.kt)("h3",{id:"\uc0dd\uc131\uc790-\ud568\uc218\uc5d0-\uc758\ud55c-\uac1d\uccb4-\uc0dd\uc131-\ubc29\uc2dd\uc758-\uc7a5\uc810"},"\uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uc758\ud55c \uac1d\uccb4 \uc0dd\uc131 \ubc29\uc2dd\uc758 \uc7a5\uc810"),(0,l.kt)("p",null,"\uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uae30\uc704\ud55c \ud15c\ud50c\ub9bf(\ud074\ub798\uc2a4)\ucc98\ub7fc \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud504\ub85c\ud37c\ud2f0 \uad6c\uc870\uac00 \ub3d9\uc77c\ud55c \uac1d\uccb4 \uc5ec\ub7ec\uac1c\ub97c \uac04\ud3b8\ud558\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ub2e4\ub978 \ud074\ub798\uc2a4 \uae30\ubc18 \uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4\uc758 \uc0dd\uc131\uc790\uc640\ub294 \ub2e4\ub974\uac8c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \ud615\uc2dd\uc774 \uc815\ud574\uc838 \uc788\ub294\uac83\uc774 \uc544\ub2c8\uace0 \uc77c\ubc18 \ud568\uc218\uc640 \ub3d9\uc77c\ud55c \ubc29\ubc95\uc73c\ub85c \uc0dd\uc131\uc790 \ud568\uc218\ub97c \uc815\uc758\ud558\uace0 new \uc5f0\uc0b0\uc790\uc640 \ud568\uaed8 \ud638\ucd9c\ud558\uba74 \ud574\ub2f9 \ud568\uc218\ub294 \uc0dd\uc131\uc790 \ud568\uc218\ub85c \ub3d9\uc791\ud55c\ub2e4."),(0,l.kt)("h3",{id:"\uc0dd\uc131\uc790-\ud568\uc218\uc758-\uc778\uc2a4\ud134\uc2a4-\uc0dd\uc131-\uacfc\uc815"},"\uc0dd\uc131\uc790 \ud568\uc218\uc758 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131 \uacfc\uc815"),(0,l.kt)("p",null,"\uc0dd\uc131\uc790 \ud568\uc218\uc758 \uc5ed\ud560:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131 (\ud544\uc218)"),(0,l.kt)("li",{parentName:"ul"},"\uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\ub97c \ucd08\uae30\ud654 (\uc778\uc2a4\ud134\uc2a4 \ud504\ub85c\ud37c\ud2f0 \ucd94\uac00 \ubc0f \ucd08\uae30\uac12 \ud560\ub2f9)"),(0,l.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \ubc18\ud658\ud558\ub294 \ucf54\ub4dc\uac00 \uc5c6\uc5b4\ub3c4 new \uc5f0\uc0b0\uc790\uc640 \ud568\uaed8 \ud638\ucd9c\ud558\uba74 \uc5d4\uc9c4\uc774 \uc554\ubb35\uc801\uc778 \ucc98\ub9ac\ub97c \ud1b5\ud574 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uace0 \ubc18\ud658\ud55c\ub2e4.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\uacfc this \ubc14\uc778\ub529")),(0,l.kt)("p",null,"\uc554\ubb35\uc801\uc73c\ub85c \ube48 \uac1d\uccb4(\uc778\uc2a4\ud134\uc2a4) \uc0dd\uc131 \u2192 \uc778\uc2a4\ud134\uc2a4\ub294 this \uc5d0 \ubc14\uc778\ub529 (\ub7f0\ud0c0\uc784 \uc774\uc804 \uc2e4\ud589)\nthis \ubc14\uc778\ub529\uc774\ub780? this\uc640 this \uac00 \uac00\ub9ac\ud0ac \uac1d\uccb4\ub97c \uc5f0\uacb0"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\uc778\uc2a4\ud134\uc2a4 \ucd08\uae30\ud654")),(0,l.kt)("p",null,"\uc0dd\uc131\uc790 \ud568\uc218\uc5d0 \uae30\uc220\ub418\uc5b4 \uc788\ub294 \ucf54\ub4dc\uac00 \ud55c\uc904\uc529 \uc2e4\ud589\ub418\uc5b4 \uc778\uc2a4\ud134\uc2a4\ub97c \ucd08\uae30\ud654 - \ud504\ub85c\ud37c\ud2f0\ub098 \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud558\uace0, \uc778\uc218\ub85c \uc804\ub2ec\ubc1b\uc740 \ucd08\uae30\uac12\uc744 \ud560\ub2f9\ud558\uc5ec \ucd08\uae30\ud654\ud558\uac70\ub098 \uace0\uc815\uac12\uc744 \ud560\ub2f9."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\uc778\uc2a4\ud134\uc2a4 \ubc18\ud658\n\ud568\uc218 \ub0b4\ubd80\uc758 \ubaa8\ub4e0 \ucc98\ub9ac\uac00 \ub05d\ub09c \ud6c4 \uc778\uc2a4\ud134\uc2a4\uac00 \ubc14\uc778\ub529\ub41c this \uac00 \uc554\ubb35\uc801\uc73c\ub85c \ubc18\ud658\ub41c\ub2e4.")),(0,l.kt)("p",null,"\uba85\uc2dc\uc801\uc73c\ub85c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\uba74 \uc554\ubb35\uc801 this \ubc18\ud658\uc740 \ubb34\uc2dc\ub418\uace0, \uac1d\uccb4\uac00 \ubc18\ud658\ub41c\ub2e4. \ud558\uc9c0\ub9cc \uba85\uc2dc\uc801\uc73c\ub85c \uc6d0\uc2dc \uac12\uc744 \ubc18\ud658\ud558\uba74 \uc6d0\uc2dc \uac12\uc740 \ubb34\uc2dc\ub418\uace0 \uc554\ubb35\uc801\uc73c\ub85c this\uac00 \ubc18\ud658\ub41c\ub2e4. this\uac00 \uc544\ub2cc \uac12\uc744 \ubc18\ud658\ud558\ub294 \uac83\uc740 \uc0dd\uc131\uc790 \ud568\uc218\uc758 \uae30\ubcf8 \ub3d9\uc791\uc744 \ud6fc\uc190\ud558\ubbc0\ub85c return \ubb38\uc744 \ubc18\ub4dc\uc2dc \uc0dd\ub7b5\ud574\uc57c\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function Circle(radius) {\n  //1. \uc554\ubb35\uc801\uc73c\ub85c \ube48 \uac1d\uccb4 \uc0dd\uc131, this\uc5d0 \ubc14\uc778\ub529\n\n  //2. this\uc5d0 \ubc14\uc778\ub529\ub418\uc5b4 \uc788\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \ucd08\uae30\ud654\n  this.radius = radius;\n  this.getDiameter = function () {\n    return 2 * this.radius;\n  };\n  //3. \uc554\ubb35\uc801\uc73c\ub85c this \ubc18\ud658\n}\n")),(0,l.kt)("h3",{id:"\ub0b4\ubd80-\uba54\uc11c\ub4dc-call\uacfc-construct"},"\ub0b4\ubd80 \uba54\uc11c\ub4dc [","[Call]","]\uacfc [","[Construct]","]"),(0,l.kt)("p",null,"\ud568\uc218 \uc120\uc5b8\ubb38, \ud568\uc218 \ud45c\ud604\uc2dd\uc73c\ub85c \uc815\uc758\ud55c \ud568\uc218\ub294 \uc77c\ubc18\uc801\uc778 \ud568\uc218, \uc0dd\uc131\uc790 \ud568\uc218 \ub458\ub2e4\ub85c\uc11c \ud638\ucd9c\uc774 \uac00\ub2a5\ud558\ub2e4.\n\uc0dd\uc131\uc0ac \ud568\uc218\ub85c \ud638\ucd9c\ud55c\ub2e4\ub294\uac74 new \uc5f0\uc0b0\uc790\uc640 \ud568\uaed8 \ud638\ucd9c\ud574\uc11c \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,l.kt)("p",null,"\ud568\uc218 \uac1d\uccb4\ub3c4 \uc77c\ubc18 \uac1d\uccb4\uac00 \uac16\uace0 \uc788\ub294 \ub0b4\ubd80 \uc2ac\ub86f\uacfc \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub97c \ubaa8\ub450 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc77c\ubc18 \uac1d\uccb4\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud560 \uc218 \uc788\ub2e4.\n\ub2e4\ub978 \uc810\uc740, \uc77c\ubc18 \uac1d\uccb4\ub294 \ud638\ucd9c\ud560 \uc218 \uc5c6\ub2e4."),(0,l.kt)("p",null,"\ud568\uc218\ub294 \uc77c\ubc18 \uac1d\uccb4\uc758 \ub0b4\ubd80 \uc2ac\ub86f, \ub0b4\ubd80 \uba54\uc11c\ub4dc\uc5d0 \ucd94\uac00\ub85c environment, FormalParameters \ub4f1\uc758 \ub0b4\ubd80 \uc2ac\ub86f\uacfc call, construct \uac19\uc740 \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub97c \uac00\uc9c0\uace0\uc788\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \ud568\uc218 \ud638\ucd9c -> [","[call]","] \ud638\ucd9c"),(0,l.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \uc790 \ud568\uc218 \ud638\ucd9c ->[","[contstruct]","] \ud638\ucd9c")),(0,l.kt)("p",null,"\ud568\uc218 \uac1d\uccb4\ub294 \ubc18\ub4dc\uc2dc callable (\ub0b4\ubd80 \uba54\uc11c\ub4dc call\uc744 \uac16\uace0\uc788\uc74c) \ud558\uc9c0\ub9cc ontstructor \uc77c\uc218\ub3c4, non-constructor \uc77c\uc218\ub3c4 \uc788\ub2e4."),(0,l.kt)("h3",{id:"constructor--non-constructor"},"constructor & non-constructor"),(0,l.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ud568\uc218 \uc815\uc758\ub97c \ud3c9\uac00\ud558\uc5ec \ud568\uc218 \uac1d\uccb4\ub97c \uc0dd\uc131\ud560\ub54c \uad6c\ubd84\ud55c\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"constructor: \ud568\uc218 \uc120\uc5b8\ubb38, \ud568\uc218 \ud45c\ud604\uc2dd, \ud074\ub798\uc2a4 (\ud074\ub798\uc2a4\ub3c4 \ud568\uc218)"),(0,l.kt)("li",{parentName:"ul"},"non-constructor : \uba54\uc11c\ub4dc(es6 \uba54\uc11c\ub4dc \ucd95\uc57d\ud45c\ud604), \ud654\uc0b4\ud45c \ud568\uc218")),(0,l.kt)("p",null,"*","ECMAScript \uc0ac\uc591\uc5d0\uc11c \uba54\uc11c\ub4dc\ub85c \uc778\uc815\ud558\ub294 \ubc94\uc704\uac00 \uc77c\ubc18\uc801\uc778 \uc758\ubbf8\uc758 \uba54\uc11c\ub4dc\ubcf4\ub2e4 \uc881\ub2e4\ub294 \uac83 \uc8fc\uc758 (es6\uc758 \uba54\uc11c\ub4dc \ucd95\uc57d \ud45c\ud604\ub9cc \uc758\ubbf8)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const baz = {\n  x: function () {},\n};\nnew baz.x(); // x {}\n\n//\uba54\uc11c\ub4dc \uc815\uc758: Es6\uc758 \uba54\uc11c\ub4dc \ucd95\uc57d \ud45c\ud604\ub9cc \uba54\uc11c\ub4dc\ub85c \uc778\uc815\nconst obj = {\n  x() {},\n};\n\nnew obj.x(); // TypeError: obj.x is not a constructor\n")),(0,l.kt)("p",null,"\ud568\uc218\uac00 \uc5b4\ub514\uc5d0 \ud560\ub2f9\ub418\uc5b4 \uc788\ub294\uc9c0\uc5d0 \ub530\ub77c \uba54\uc11c\ub4dc\uc778\uc9c0 \ud310\ub2e8\ud558\ub294\uac8c \uc544\ub2c8\ub77c ",(0,l.kt)("strong",{parentName:"p"},"\ud568\uc218 \uc815\uc758 \ubc29\uc2dd"),"\uc5d0 \ub530\ub77c constructor, non-constructor\ub97c \uad6c\ubd84\ud55c\ub2e4."),(0,l.kt)("p",null,"\ud568\uc218 \uc120\uc5b8\ubb38\uacfc \ud568\uc218 \ud45c\ud604\uc2dd\uc73c\ub85c \uc815\uc758\ub41c \ud568\uc218\ub9cc\uc774 constructor \uc774\uace0 \ud654\uc0b4\ud45c \ud568\uc218, \uba54\uc11c\ub4dc \ucd95\uc57d \ud45c\ud604\uc73c\ub85c \uc815\uc758\ub41c \ud568\uc218\ub294 non-constructor \uc774\ub2e4."),(0,l.kt)("h3",{id:"new-\uc5f0\uc0b0\uc790"},"new \uc5f0\uc0b0\uc790"),(0,l.kt)("p",null,"new \uc5f0\uc0b0\uc790\uc640 \ud568\uaed8 \uc0dd\uc131\uc790 \ud568\uc218\ub85c\uc11c \ud638\ucd9c\ud558\uba70 \ud568\uc218 \ub0b4\ubd80\uc758 this\ub294 \ud568\uc218\uac00 \uc0dd\uc131\ud560 \uc778\uc2a4\ud134\uc2a4\ub97c \uac00\ub9ac\ud0a8\ub2e4. \ud558\uc9c0\ub9cc \uc77c\ubc18 \ud568\uc218\ub85c \ud638\ucd9c\ud558\uba74 this\ub294 \uc804\uc5ed \uac1d\uccb4 window\ub97c \uac00\ub9ac\ud0a8\ub2e4."),(0,l.kt)("h3",{id:"newtarget"},"new.target"),(0,l.kt)("p",null,"es6 \uc5d0\uc11c \uc9c0\uc6d0. this\uc640 \uc720\uc0ac\ud558\uac8c constructor \uc778 \ubaa8\ub4e0 \ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c \uc554\ubb35\uc801\uc778 \uc9c0\uc5ed \ubcc0\uc218\uc640 \uac19\uc774 \uc0ac\uc6a9\ub418\uace0 \uba54\ud0c0 \ud504\ub85c\ud37c\ud2f0\ub77c\uace0 \ubd80\ub978\ub2e4."),(0,l.kt)("p",null,"new \uc5f0\uc0b0\uc790\uc640 \ud568\uaed8 \uc0dd\uc131\uc790 \ud568\uc218\ub85c\uc11c \ud638\ucd9c\ub418\uba74 \ud568\uc218\ub0b4\ubd80\uc758 new.target\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\ud568\uc218 \uc790\uc2e0"),"\uc744 \uac00\ub9ac\ud0a8\ub2e4. \uc77c\ubc18 \ud568\uc218\ub85c\uc11c \ud638\ucd9c\ub418\uba74 new.target\uc740 undefined\uc774\ub2e4."),(0,l.kt)("p",null,"\ub530\ub77c\uc11c new.target\uc744 \uc774\uc6a9\ud558\uc5ec ",(0,l.kt)("strong",{parentName:"p"},"\ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ud638\ucd9c\ub418\uc5c8\ub294\uc9c0")," \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ucc38\uace0: \ube4c\ud2b8\uc778 \uc0dd\uc131\uc790 \ud568\uc218\uc911 Object, Function\uc740 new \uc5f0\uc0b0\uc790 \uc5c6\uc774 \ud638\ucd9c\ud574\ub3c4 \ud568\uaed8 \ud638\ucd9c\ud588\uc744\ub54c\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud55c\ub2e4.\nString, Number, Boolean\uc740 new \uc5f0\uc0b0\uc790\uac00\uc788\uc73c\uba74 \uac1d\uccb4\ub97c \uc0dd\uc131 \ubc18\ud658, \uc5c6\uc73c\uba74 \ubcc0\ud658\ub41c \uac12\uc744 \ubc18\ud658\ud55c\ub2e4."))}k.isMDXComponent=!0}}]);