(function(){"use strict";var e={5822:function(e,t,n){var r=n(5130),o=n(6768),a=n(6450),i=n(8477);function u(e,t,n,r,u,c){const l=(0,o.g2)("AppBar"),f=(0,o.g2)("router-view"),s=(0,o.g2)("FooterView");return(0,o.uX)(),(0,o.Wv)(a.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(l),(0,o.bF)(i.Y,{style:{"margin-top":"6vh"}},{default:(0,o.k6)((()=>[(0,o.bF)(f)])),_:1}),(0,o.bF)(s)])),_:1})}var c=n(4232),l=n(4186),f=n(8088),s=n(3047),A=n(6620),d=n(8445),g=n(8050);const p=["src"],h={id:"computer"},m={id:"mobile"},v={class:"d-flex flex-column"};function b(e,t,n,r,a,i){return(0,o.uX)(),(0,o.Wv)(l.z,{style:{padding:"3vh"},color:"#DFD3C3"},{default:(0,o.k6)((()=>[(0,o.bF)(f.D,{height:"auto",rounded:"circle"},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:e.logo,alt:"Button Image",style:{width:"70px",height:"70px"}},null,8,p)])),_:1}),(0,o.bF)(g.s,{class:"",style:{color:"#C5705D",fontSize:"30px",fontWeight:"bold"}},{default:(0,o.k6)((()=>[(0,o.eW)("Codexical")])),_:1}),(0,o.Lk)("div",h,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.linkOption,(e=>((0,o.uX)(),(0,o.Wv)(f.D,{key:e.name,href:e.url,text:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,c.v_)(e.name),1)])),_:2},1032,["href"])))),128)),(0,o.bF)(f.D,{onClick:i.changeLang},{default:(0,o.k6)((()=>[(0,o.eW)("中文/English")])),_:1},8,["onClick"])]),(0,o.Lk)("div",m,[(0,o.bF)(d.p,{"max-width":"340",transition:"scale-transition"},{activator:(0,o.k6)((({props:e})=>[(0,o.bF)(f.D,(0,o.v6)(e,{icon:"mdi-dots-vertical"}),null,16)])),default:(0,o.k6)((()=>[(0,o.bF)(s.J,null,{default:(0,o.k6)((()=>[(0,o.bF)(A.m,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",v,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.linkOption,(e=>((0,o.uX)(),(0,o.Wv)(f.D,{class:"ma-1",key:e.name,href:e.url,variant:"text"},{default:(0,o.k6)((()=>[(0,o.eW)((0,c.v_)(e.name),1)])),_:2},1032,["href"])))),128)),(0,o.bF)(f.D,{class:"ma-1",onClick:i.changeLang,variant:"text"},{default:(0,o.k6)((()=>[(0,o.eW)("中文/English")])),_:1},8,["onClick"])])])),_:1})])),_:1})])),_:1})])])),_:1})}var y={data:()=>({logo:n(3153),linkOption:[]}),created(){sessionStorage.getItem("lang")||sessionStorage.setItem("lang","zh"),this.linkOption="en"===sessionStorage.getItem("lang")?[{name:"Home",url:"/"},{name:"Contact Us",url:"contact"}]:[{name:"首頁",url:"/"},{name:"聯絡我們",url:"contact"}]},methods:{changeLang(){sessionStorage.setItem("lang","en"===sessionStorage.getItem("lang")?"zh":"en"),location.reload()}}},C=n(3622);const k=(0,C.A)(y,[["render",b]]);var B=k,T=n(6756);const E=e=>((0,o.Qi)("data-v-e7b2ca78"),e=e(),(0,o.jt)(),e),I={class:"footer"},Q=E((()=>(0,o.Lk)("div",{class:"copyright"}," © 2024 Codexical. All rights reserved. ",-1)));function O(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("footer",I,[(0,o.bF)(T.L,{class:"options"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.linkOption,(e=>((0,o.uX)(),(0,o.Wv)(f.D,{key:e.name,variant:"text",href:e.url},{default:(0,o.k6)((()=>[(0,o.eW)((0,c.v_)(e.name),1)])),_:2},1032,["href"])))),128))])),_:1}),Q])}var D={data:()=>({linkOption:[]}),created(){this.linkOption="en"===sessionStorage.getItem("lang")?[{name:"Home",url:"/"},{name:"Contact Us",url:"contact"}]:[{name:"首頁",url:"/"},{name:"聯絡我們",url:"contact"}]}};const w=(0,C.A)(D,[["render",O],["__scopeId","data-v-e7b2ca78"]]);var N=w,j={components:{AppBar:B,FooterView:N}};const X=(0,C.A)(j,[["render",u]]);var F=X,G=(n(5524),n(1036)),x=(0,G.$N)(),V=n(1387);const P=[{path:"/",name:"Codexical",component:()=>n.e(952).then(n.bind(n,6952)),meta:{title:"Codexical"}},{path:"/contact",name:"contact",component:()=>n.e(176).then(n.bind(n,5176)),meta:{title:"ContactUs"}},{path:"/:catchAll(.*)",name:"404",component:()=>n.e(149).then(n.bind(n,3149)),meta:{title:"404"}}],M=(0,V.aE)({history:(0,V.LA)(),routes:P});M.beforeEach(((e,t,n)=>{window.document.title=e.meta.title,n()}));var W=M;async function L(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var z=n(1863);L(),(0,r.Ef)(F).use(W).use(x).use(z.uy).mount("#app")},3153:function(e){e.exports="data:image/png;base64,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"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(53===e?"webfontloader":e)+"."+{53:"abfe75f9",149:"7811f9c3",176:"d0103acc",952:"5350c32d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{176:"933751a4",952:"ab27161d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="codexical-intro:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var A=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(A.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=A.bind(null,u.onerror),u.onload=A.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=u,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={176:1,952:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkcodexical_intro"]=self["webpackChunkcodexical_intro"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5822)}));r=n.O(r)})();
//# sourceMappingURL=app.54deaedb.js.map