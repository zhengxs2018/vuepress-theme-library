if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),a={module:{uri:r},exports:t,require:o};s[r]=Promise.all(l.map((e=>a[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9e072841a189e7e3b999b7efad84901e"},{url:"android-chrome-192x192.png",revision:"b4332fe3e6244afb34e7d6305f1e5386"},{url:"android-chrome-512x512.png",revision:"ee72ee51befd4b24cfa85802f51010a0"},{url:"apple-touch-icon-precomposed.png",revision:"725543d4eff5573fa7185e0a30c010c9"},{url:"apple-touch-icon.png",revision:"0f60fb932214cf501a70a3645bf71a77"},{url:"assets/404.ad702aba.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/app.d7269146.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/getting-started.html.5650f5c4.js",revision:null},{url:"assets/getting-started.html.f3d93a34.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.238eae68.js",revision:null},{url:"assets/index.html.504c7800.js",revision:null},{url:"assets/index.html.d882e8fb.js",revision:null},{url:"assets/index.html.d957abea.js",revision:null},{url:"assets/Layout.2a7c5a50.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.b5c1b1b1.css",revision:null},{url:"assets/twikoo.all.min.21ff186f.js",revision:null},{url:"favicon-16x16.png",revision:"8a49799bf25dca3628499addf9625b7e"},{url:"favicon-32x32.png",revision:"2480189168759f5658011bebe3919419"},{url:"guide/getting-started.html",revision:"23bf9642e8aeb8f380582c18e96e6771"},{url:"guide/index.html",revision:"d9f20a98e954d5e066f9766da6b35df5"},{url:"images/logo.png",revision:"ee72ee51befd4b24cfa85802f51010a0"},{url:"index.html",revision:"50cffb03c5941ab99e3680411657bd53"},{url:"safari-pinned-tab.svg",revision:"d336172d6ff930b0cd0bcaf0fe4f026d"}],{})}));
