"use strict";(self.webpackChunkratnet=self.webpackChunkratnet||[]).push([[656],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),h=a,d=f["".concat(u,".").concat(h)]||f[h]||s[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:2},u="Router Interface",l={unversionedId:"api/router/api",id:"api/router/api",title:"Router Interface",description:"To create a new router, the Router interface must be implemented.  This is the only interface required for a new Router.",source:"@site/docs/api/router/api.md",sourceDirName:"api/router",slug:"/api/router/api",permalink:"/ratnet-docs/docs/api/router/api",draft:!1,editUrl:"https://github.com/awgh/ratnet-docs/tree/gh-pages/docs/api/router/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Router",permalink:"/ratnet-docs/docs/api/router/intro"}},p={},s=[{value:"Route",id:"route",level:2},{value:"Patch",id:"patch",level:2},{value:"GetPatches",id:"getpatches",level:2},{value:"MarshallJSON",id:"marshalljson",level:2}],f={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router-interface"},"Router Interface"),(0,o.kt)("p",null,"To create a new router, the Router interface must be implemented.  This is the only interface required for a new Router."),(0,o.kt)("p",null,"In this section, we'll go through each of the functions in the Router interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'"','"':!0},"type Router interface {\n    Route(node Node, msg []byte) error\n    Patch(patch Patch)\n    GetPatches() []Patch\n\n    JSON\n}\n\ntype JSON interface {\n    // MarshalJSON : Serialize this type to JSON\n    MarshalJSON() (b []byte, e error)\n}\n")),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'"','"':!0},"    Route(node Node, msg []byte) error\n")),(0,o.kt)("p",null,"Determine what to do with the given message, and then have the node do it."),(0,o.kt)("h2",{id:"patch"},"Patch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'"','"':!0},"    Patch(patch Patch)\n")),(0,o.kt)("p",null,"Add a mapping from an incoming channel to one or more destination channels."),(0,o.kt)("h2",{id:"getpatches"},"GetPatches"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'"','"':!0},"    GetPatches() []Patch\n")),(0,o.kt)("p",null,"Returns an array with the mappings of incoming channels to destination channels."),(0,o.kt)("h2",{id:"marshalljson"},"MarshallJSON"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"MarshalJSON() (b []byte, e error)\n")),(0,o.kt)("p",null,"Serialize this type to JSON."))}h.isMDXComponent=!0}}]);