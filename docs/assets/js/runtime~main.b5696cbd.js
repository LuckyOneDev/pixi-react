(()=>{"use strict";var e,t,r,a,o,f={},c={};function n(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=f,n.c=c,e=[],n.O=(t,r,a,o)=>{if(!r){var f=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var c=!0,d=0;d<r.length;d++)(!1&o||f>=o)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(c=!1,o<f&&(f=o));if(c){e.splice(b--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,n.d(o,f),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({38:"0a9f85ba",53:"935f2afb",73:"36041992",83:"c31773f8",85:"1f391b9e",91:"27a2bfe0",93:"584bbc4f",254:"1fcc5c43",259:"4efdd5d5",298:"29b99498",333:"6106ae1c",341:"d865ed60",343:"1ec189fe",355:"65e5aaae",356:"09ca0bbe",363:"d030376f",395:"424528eb",414:"393be207",495:"45aa79da",501:"0aea4520",514:"1be78505",530:"d1850a29",713:"295ef503",750:"253425bc",755:"3a56c021",848:"4ec89b17",918:"17896441",985:"f3ed2cdd"}[e]||e)+"."+{38:"cf73da1f",53:"fe8df96f",73:"b0f16d88",83:"eb3c5f07",85:"5045a1aa",91:"d26ce198",93:"5455be3d",221:"54edd2bc",254:"8190c63e",259:"a8b75dbc",298:"0f59d5a8",328:"0a92e982",333:"d3a4d6ba",341:"e3d3c912",343:"70840cdb",355:"75093c7a",356:"d4d46c99",363:"c36c2880",395:"594091b2",414:"068eb56b",426:"34f9cea9",495:"a95d0a07",501:"7af68749",514:"1b899ada",530:"add7eed9",713:"9add25c1",750:"52a8c8f1",755:"20f5e578",848:"09f504c4",918:"5ac4055f",985:"740aaae1"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="@pixi/react-docs:",n.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var c,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var l=i[b];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){c=l;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",o+r),c.src=e),a[e]=[t];var u=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),d&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/pixi-react/",n.gca=function(e){return e={17896441:"918",36041992:"73","0a9f85ba":"38","935f2afb":"53",c31773f8:"83","1f391b9e":"85","27a2bfe0":"91","584bbc4f":"93","1fcc5c43":"254","4efdd5d5":"259","29b99498":"298","6106ae1c":"333",d865ed60:"341","1ec189fe":"343","65e5aaae":"355","09ca0bbe":"356",d030376f:"363","424528eb":"395","393be207":"414","45aa79da":"495","0aea4520":"501","1be78505":"514",d1850a29:"530","295ef503":"713","253425bc":"750","3a56c021":"755","4ec89b17":"848",f3ed2cdd:"985"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=n.p+n.u(t),c=new Error;n.l(f,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",c.name="ChunkLoadError",c.type=o,c.request=f,a[1](c)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],c=r[1],d=r[2],i=0;if(f.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(d)var b=d(n)}for(t&&t(r);i<f.length;i++)o=f[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(b)},r=self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();