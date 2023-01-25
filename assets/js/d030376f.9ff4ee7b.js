"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[363],{9652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7896),o=(n(2784),n(3905));const a={},i="BitmapText",p={unversionedId:"components/BitmapText",id:"components/BitmapText",title:"BitmapText",description:"Props",source:"@site/docs/components/BitmapText.mdx",sourceDirName:"components",slug:"/components/BitmapText",permalink:"/pixi-react/components/BitmapText",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/components/BitmapText.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AnimatedSprite",permalink:"/pixi-react/components/AnimatedSprite"},next:{title:"Container",permalink:"/pixi-react/components/Container"}},s={},l=[{value:"Props",id:"props",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bitmaptext"},"BitmapText"),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pixijs.download/dev/docs/PIXI.BitmapText.html"},"https://pixijs.download/dev/docs/PIXI.BitmapText.html")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const position = {\n  anchor: 0.5,\n  x: 250,\n  y: 150,\n};\n\nrender(\n  <Stage width={500} height={300} options={{ backgroundColor: 0xffffff }}>\n    <ExampleAssetLoader\n      name="desyrel"\n      url="/pixi-react/font/desyrel.xml"\n      loader={\n        <Text\n          {...position}\n          text="\u231b Loading font..."\n          style={{ fontFamily: \'Arial\', fontSize: 15 }}\n        />\n      }\n    >\n      <BitmapText\n        {...position}\n        text="Hello World!"\n        style={{ fontName: \'Desyrel\', fontSize: 50 }}\n      />\n    </ExampleAssetLoader>\n  </Stage>,\n);\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Make sure to load the bitmap font data before mounting."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://pixijs.io/examples/#/demos/text-demo.js"},"https://pixijs.io/examples/#/demos/text-demo.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { render } from 'react-dom'\nimport { Stage, BitmapText } from '@pixi/react'\n\nPIXI.Loader.shared\n  .add('desyrel', './assets/desyrel.xml')\n  .load(onAssetsLoaded)\n\nconst App = () => (\n  <Stage>\n    <BitmapText text=\"Hello World\" style={{ fontName: 'Desyrel', fontSize: 35 }}>\n  </Stage>\n)\n\nfunction onAssetsLoaded() {\n  render(<App />, document.getElementById('root'))\n}\n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);