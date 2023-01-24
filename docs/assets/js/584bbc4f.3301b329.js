"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[93],{2850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7896),o=(r(2784),r(3905));const i={},a="Hooks",p={unversionedId:"hooks/Hooks",id:"hooks/Hooks",title:"Hooks",description:"Pixi React now support React hooks \ud83c\udf1f",source:"@site/docs/hooks/Hooks.mdx",sourceDirName:"hooks",slug:"/hooks/",permalink:"/pixi-react/hooks/",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/hooks/Hooks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"withFilters",permalink:"/pixi-react/hoc/with-filters"},next:{title:"React Spring",permalink:"/pixi-react/react-spring"}},c={},s=[{value:"useApp",id:"useapp",level:2},{value:"useTick",id:"usetick",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"Pixi React now support ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html"},"React hooks")," \ud83c\udf1f"),(0,o.kt)("h2",{id:"useapp"},"useApp"),(0,o.kt)("p",null,"Access the ",(0,o.kt)("inlineCode",{parentName:"p"},"PIXI.Application")," in your component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useApp } from '@pixi/react'\n\nfunction MyComponent () {\n  const app = useApp()\n  // app => PIXI.Application\n\n  return (\n    ...\n  )\n}\n")),(0,o.kt)("h2",{id:"usetick"},"useTick"),(0,o.kt)("p",null,"Bind listener to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PIXI.Application")," ticker event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useTick } from '@pixi/react'\n\nfunction MyComponent () {\n  useTick(delta => {\n    // do something here\n  })\n\n  return (\n    ...\n  )\n}\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("iframe",{height:500,scrolling:"no",title:"useTick",src:"//codepen.io/inlet/embed/EOMBer/?height=300&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowFullScreen:!0,style:{width:"100%"}}))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);