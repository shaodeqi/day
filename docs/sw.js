if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),d={module:{uri:t},exports:c,require:o};s[t]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-bc55f1ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.2706bfc2.js",revision:null},{url:"assets/index.3a023d4d.css",revision:null},{url:"assets/sdk/jinrishici.js",revision:"7d85c01b3ecbc8a3b1900e769b0bfb6c"},{url:"assets/sdk/swiper.css",revision:"5db2510ca0295306edc38a509f86ae82"},{url:"assets/sdk/swiper.js",revision:"458899e455104920ffd6c449a884e541"},{url:"index.html",revision:"a006c88a8bfe225bfce3f24a382cdcdf"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"a052575a313219a72641461054e706eb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
