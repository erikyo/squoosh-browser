(()=>{"use strict";var e={723:(e,r,t)=>{function o(e,r){return new Promise((t=>{e.addEventListener("message",(function o({data:n}){null!=n&&n.type===r&&(e.removeEventListener("message",o),t(n))}))}))}async function n(e,r,n){const i={type:"wasm_bindgen_worker_init",module:e,memory:r,receiver:n.receiver()};try{await Promise.all(Array.from({length:n.numThreads()},(()=>{const e=new Worker(new URL(t.p+t.u(723),t.b),{type:void 0});return e.postMessage(i),o(e,"wasm_bindgen_worker_ready")}))),n.build()}finally{n.free()}}t.d(r,{Q:()=>n}),o(self,"wasm_bindgen_worker_init").then((async e=>{const r=await t.e(277).then(t.bind(t,277));await r.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),r.wbg_rayon_start_worker(e.receiver)}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[])),t.u=e=>e+".main.js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{t.b=self.location+"";var e={723:1};t.f.i=(r,o)=>{e[r]||importScripts(t.p+t.u(r))};var r=self.webpackChunksquoosh_browser_demo=self.webpackChunksquoosh_browser_demo||[],o=r.push.bind(r);r.push=r=>{var[n,i,a]=r;for(var s in i)t.o(i,s)&&(t.m[s]=i[s]);for(a&&a(t);n.length;)e[n.pop()]=1;o(r)}})(),t(723)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFReEQsT0FBUyxHQUFHdUQsS0FLN0QsSUFBS0wsRUFBVyxNQUFNLElBQUlRLE1BQU0seURBQ2hDUixFQUFZQSxFQUFVUyxRQUFRLE9BQVEsSUFBSUEsUUFBUSxRQUFTLElBQUlBLFFBQVEsWUFBYSxLQUNwRjdDLEVBQW9COEMsRUFBSVYsRyxTQ2Z4QnBDLEVBQW9CK0MsRUFBSXJELEtBQUs0QyxTQUFXLEdBSXhDLElBQUlVLEVBQWtCLENBQ3JCLElBQUssR0FnQk5oRCxFQUFvQmUsRUFBRWtDLEVBQUksQ0FBQ2hDLEVBQVNHLEtBRS9CNEIsRUFBZ0IvQixJQUVsQm9CLGNBQWNyQyxFQUFvQjhDLEVBQUk5QyxFQUFvQnFCLEVBQUVKLEtBSy9ELElBQUlpQyxFQUFxQnhELEtBQXVDLGlDQUFJQSxLQUF1QyxrQ0FBSyxHQUM1R3lELEVBQTZCRCxFQUFtQkUsS0FBS0MsS0FBS0gsR0FDOURBLEVBQW1CRSxLQXZCQzlFLElBQ25CLElBQUtnRixFQUFVQyxFQUFhQyxHQUFXbEYsRUFDdkMsSUFBSSxJQUFJMkIsS0FBWXNELEVBQ2hCdkQsRUFBb0JVLEVBQUU2QyxFQUFhdEQsS0FDckNELEVBQW9CTSxFQUFFTCxHQUFZc0QsRUFBWXRELElBSWhELElBREd1RCxHQUFTQSxFQUFReEQsR0FDZHNELEVBQVNwRSxRQUNkOEQsRUFBZ0JNLEVBQVNHLE9BQVMsRUFDbkNOLEVBQTJCN0UsSyxHQ2hCRjBCLEVBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcXVvb3NoLWJyb3dzZXItZGVtby8uLi9jb2RlY3Mvb3hpcG5nL3BrZy1wYXJhbGxlbC9zbmlwcGV0cy93YXNtLWJpbmRnZW4tcmF5b24tM2QyZGYwOWViZWMxN2EyMi9zcmMvd29ya2VySGVscGVycy5qcyIsIndlYnBhY2s6Ly9zcXVvb3NoLWJyb3dzZXItZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcXVvb3NoLWJyb3dzZXItZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3F1b29zaC1icm93c2VyLWRlbW8vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9zcXVvb3NoLWJyb3dzZXItZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vc3F1b29zaC1icm93c2VyLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcXVvb3NoLWJyb3dzZXItZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NxdW9vc2gtYnJvd3Nlci1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3F1b29zaC1icm93c2VyLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3F1b29zaC1icm93c2VyLWRlbW8vd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcXVvb3NoLWJyb3dzZXItZGVtby93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8vIE5vdGU6IHdlIHVzZSBgd2FzbV9iaW5kZ2VuX3dvcmtlcl9gLXByZWZpeGVkIG1lc3NhZ2UgdHlwZXMgdG8gbWFrZSBzdXJlXHJcbi8vIHdlIGNhbiBoYW5kbGUgYnVuZGxpbmcgaW50byBvdGhlciBmaWxlcywgd2hpY2ggbWlnaHQgaGFwcGVuIHRvIGhhdmUgdGhlaXJcclxuLy8gb3duIGBwb3N0TWVzc2FnZWAvYG9ubWVzc2FnZWAgY29tbXVuaWNhdGlvbiBjaGFubmVscy5cclxuLy9cclxuLy8gSWYgd2UgZGlkbid0IHRha2UgdGhhdCBpbnRvIHRoZSBhY2NvdW50LCB3ZSBjb3VsZCBzZW5kIG11Y2ggc2ltcGxlciBzaWduYWxzXHJcbi8vIGxpa2UganVzdCBgMGAgb3Igd2hhdGV2ZXIsIGJ1dCB0aGUgY29kZSB3b3VsZCBiZSBsZXNzIHJlc2lsaWVudC5cclxuXHJcbmZ1bmN0aW9uIHdhaXRGb3JNc2dUeXBlKHRhcmdldCwgdHlwZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gb25Nc2coeyBkYXRhIH0pIHtcclxuICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCBkYXRhLnR5cGUgIT09IHR5cGUpIHJldHVybjtcclxuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZyk7XHJcbiAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxud2FpdEZvck1zZ1R5cGUoc2VsZiwgJ3dhc21fYmluZGdlbl93b3JrZXJfaW5pdCcpLnRoZW4oYXN5bmMgZGF0YSA9PiB7XHJcbiAgLy8gIyBOb3RlIDFcclxuICAvLyBPdXIgSlMgc2hvdWxkIGhhdmUgYmVlbiBnZW5lcmF0ZWQgaW5cclxuICAvLyBgW291dC1kaXJdL3NuaXBwZXRzL3dhc20tYmluZGdlbi1yYXlvbi1baGFzaF0vd29ya2VySGVscGVycy5qc2AsXHJcbiAgLy8gcmVzb2x2ZSB0aGUgbWFpbiBtb2R1bGUgdmlhIGAuLi8uLi8uLmAuXHJcbiAgLy9cclxuICAvLyBUaGlzIG1pZ2h0IG5lZWQgdXBkYXRpbmcgaWYgdGhlIGdlbmVyYXRlZCBzdHJ1Y3R1cmUgY2hhbmdlcyBvbiB3YXNtLWJpbmRnZW5cclxuICAvLyBzaWRlIGV2ZXIgaW4gdGhlIGZ1dHVyZSwgYnV0IHdvcmtzIHdlbGwgd2l0aCBidW5kbGVycyB0b2RheS4gVGhlIHdob2xlXHJcbiAgLy8gcG9pbnQgb2YgdGhpcyBjcmF0ZSwgYWZ0ZXIgYWxsLCBpcyB0byBhYnN0cmFjdCBhd2F5IHVuc3RhYmxlIGZlYXR1cmVzXHJcbiAgLy8gYW5kIHRlbXBvcmFyeSBidWdzIHNvIHRoYXQgeW91IGRvbid0IG5lZWQgdG8gZGVhbCB3aXRoIHRoZW0gaW4geW91ciBjb2RlLlxyXG4gIC8vXHJcbiAgLy8gIyBOb3RlIDJcclxuICAvLyBUaGlzIGNvdWxkIGJlIGEgcmVndWxhciBpbXBvcnQsIGJ1dCB0aGVuIHNvbWUgYnVuZGxlcnMgY29tcGxhaW4gYWJvdXRcclxuICAvLyBjaXJjdWxhciBkZXBzLlxyXG4gIC8vXHJcbiAgLy8gRHluYW1pYyBpbXBvcnQgY291bGQgYmUgY2hlYXAgaWYgdGhpcyBmaWxlIHdhcyBpbmxpbmVkIGludG8gdGhlIHBhcmVudCxcclxuICAvLyB3aGljaCB3b3VsZCByZXF1aXJlIHVzIGp1c3QgdXNpbmcgYC4uLy4uLy4uYCBpbiBgbmV3IFdvcmtlcmAgYmVsb3csXHJcbiAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIGJlY2F1c2Ugd2FzbS1wYWNrIHVuY29uZGl0aW9uYWxseSBhZGRzXHJcbiAgLy8gXCJzaWRlRWZmZWN0c1wiOmZhbHNlIChzZWUgYmVsb3cpLlxyXG4gIC8vXHJcbiAgLy8gT1RPSCwgZXZlbiB0aG91Z2ggaXQgY2FuJ3QgYmUgaW5saW5lZCwgaXQgc2hvdWxkIGJlIHN0aWxsIHJlYXNvbmFibHlcclxuICAvLyBjaGVhcCBzaW5jZSB0aGUgcmVxdWVzdGVkIGZpbGUgaXMgYWxyZWFkeSBpbiBjYWNoZSAoaXQgd2FzIGxvYWRlZCBieVxyXG4gIC8vIHRoZSBtYWluIHRocmVhZCkuXHJcbiAgY29uc3QgcGtnID0gYXdhaXQgaW1wb3J0KCcuLi8uLi8uLi9zcXVvb3NoX294aXBuZycpO1xyXG4gIGF3YWl0IHBrZy5kZWZhdWx0KGRhdGEubW9kdWxlLCBkYXRhLm1lbW9yeSk7XHJcbiAgcG9zdE1lc3NhZ2UoeyB0eXBlOiAnd2FzbV9iaW5kZ2VuX3dvcmtlcl9yZWFkeScgfSk7XHJcbiAgcGtnLndiZ19yYXlvbl9zdGFydF93b3JrZXIoZGF0YS5yZWNlaXZlcik7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0V29ya2Vycyhtb2R1bGUsIG1lbW9yeSwgYnVpbGRlcikge1xyXG4gIGNvbnN0IHdvcmtlckluaXQgPSB7XHJcbiAgICB0eXBlOiAnd2FzbV9iaW5kZ2VuX3dvcmtlcl9pbml0JyxcclxuICAgIG1vZHVsZSxcclxuICAgIG1lbW9yeSxcclxuICAgIHJlY2VpdmVyOiBidWlsZGVyLnJlY2VpdmVyKClcclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGJ1aWxkZXIubnVtVGhyZWFkcygpIH0sICgpID0+IHtcclxuICAgICAgICAvLyBTZWxmLXNwYXduIGludG8gYSBuZXcgV29ya2VyLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gVE9ETzogd2hpbGUgYG5ldyBVUkwoJy4uLicsIGltcG9ydC5tZXRhLnVybCkgYmVjb21lcyBhIHNlbWktc3RhbmRhcmRcclxuICAgICAgICAvLyB3YXkgdG8gZ2V0IGFzc2V0IFVSTHMgcmVsYXRpdmUgdG8gdGhlIG1vZHVsZSBhY3Jvc3MgdmFyaW91cyBidW5kbGVyc1xyXG4gICAgICAgIC8vIGFuZCBicm93c2VyLCBpZGVhbGx5IHdlIHNob3VsZCBzd2l0Y2ggdG8gYGltcG9ydC5tZXRhLnJlc29sdmVgXHJcbiAgICAgICAgLy8gb25jZSBpdCBiZWNvbWVzIGEgc3RhbmRhcmQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBOb3RlOiB3ZSBjb3VsZCB1c2UgYC4uLy4uLy4uYCBhcyB0aGUgVVJMIGhlcmUgdG8gaW5saW5lIHdvcmtlckhlbHBlcnMuanNcclxuICAgICAgICAvLyBpbnRvIHRoZSBwYXJlbnQgZW50cnkgaW5zdGVhZCBvZiBjcmVhdGluZyBhbm90aGVyIHNwbGl0IHBvaW50IC1cclxuICAgICAgICAvLyB0aGlzIHdvdWxkIGJlIHByZWZlcmFibGUgZnJvbSBvcHRpbWl6YXRpb24gcGVyc3BlY3RpdmUgLVxyXG4gICAgICAgIC8vIGhvd2V2ZXIsIFdlYnBhY2sgdGhlbiBlbGltaW5hdGVzIGFsbCBtZXNzYWdlIGhhbmRsZXIgY29kZVxyXG4gICAgICAgIC8vIGJlY2F1c2Ugd2FzbS1wYWNrIHByb2R1Y2VzIFwic2lkZUVmZmVjdHNcIjpmYWxzZSBpbiBwYWNrYWdlLmpzb25cclxuICAgICAgICAvLyB1bmNvbmRpdGlvbmFsbHkuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gd29yayBhcm91bmQgdGhhdCBpcyB0byBoYXZlIHNpZGUgZWZmZWN0IGNvZGVcclxuICAgICAgICAvLyBpbiBhbiBlbnRyeSBwb2ludCBzdWNoIGFzIFdvcmtlciBmaWxlIGl0c2VsZi5cclxuICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKG5ldyBVUkwoJy4vd29ya2VySGVscGVycy5qcycsIGltcG9ydC5tZXRhLnVybCksIHtcclxuICAgICAgICAgIHR5cGU6ICdtb2R1bGUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHdvcmtlckluaXQpO1xyXG4gICAgICAgIHJldHVybiB3YWl0Rm9yTXNnVHlwZSh3b3JrZXIsICd3YXNtX2JpbmRnZW5fd29ya2VyX3JlYWR5Jyk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgYnVpbGRlci5idWlsZCgpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBidWlsZGVyLmZyZWUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIubWFpbi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IHNlbGYubG9jYXRpb24gKyBcIlwiO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQ3MjM6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3NxdW9vc2hfYnJvd3Nlcl9kZW1vXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3NxdW9vc2hfYnJvd3Nlcl9kZW1vXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSBpbnN0YWxsQ2h1bms7XG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNzIzKTtcbiJdLCJuYW1lcyI6WyJ3YWl0Rm9yTXNnVHlwZSIsInRhcmdldCIsInR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1zZyIsImRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXN5bmMiLCJzdGFydFdvcmtlcnMiLCJtb2R1bGUiLCJtZW1vcnkiLCJidWlsZGVyIiwid29ya2VySW5pdCIsInJlY2VpdmVyIiwiYWxsIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibnVtVGhyZWFkcyIsIndvcmtlciIsIldvcmtlciIsIlVSTCIsInBvc3RNZXNzYWdlIiwiYnVpbGQiLCJmcmVlIiwic2VsZiIsInRoZW4iLCJwa2ciLCJkZWZhdWx0Iiwid2JnX3JheW9uX3N0YXJ0X3dvcmtlciIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibSIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImYiLCJlIiwiY2h1bmtJZCIsImtleXMiLCJyZWR1Y2UiLCJwcm9taXNlcyIsInUiLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsIndpbmRvdyIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJiIiwiaW5zdGFsbGVkQ2h1bmtzIiwiaSIsImNodW5rTG9hZGluZ0dsb2JhbCIsInBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uIiwicHVzaCIsImJpbmQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwicnVudGltZSIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=