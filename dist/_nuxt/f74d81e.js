(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(s,r,l){"use strict";var u=l(0);r.a=function(){var o=function(n,i){return function(){return window.$nuxt.$emit(n,i)}};u.a.directive("hoverable",{bind:function(n){n.style.cursor="none",n.addEventListener("mouseenter",o("toggle-hovering")),n.addEventListener("mouseleave",o("toggle-hovering"))}})}},142:function(s,r,l){"use strict";r.a=function(u,o){var c=function(){return typeof window=="undefined"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches};o("prefersReducedMotion",c)}},143:function(s,r,l){"use strict";var u=l(203),o=1024,c=1.5;r.a=function(n,i){var d=n.$gsap,f=n.$ScrollTrigger;i("smoothScrollBreakPoint",o);var e=new u.a({el:document.querySelector(".scroller"),smooth:!0});e.on("scroll",f.update),f.scrollerProxy(e.el,{pinType:e.el.style.transform?"transform":"fixed",scrollTop:function(v){return arguments.length?e.scrollTo(v,0,0):e.scroll.instance.scroll.y},getBoundingClientRect:function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}),window.innerWidth>=o&&f.defaults({scroller:e.el});var a=0;e.on("scroll",function(t){var v=t.scroll;a=v.y}),i("locomotiveScroll",e),i("scrollY",function(){return window.innerWidth<o?window.scrollY:a}),i("disableScrollY",function(){window.innerWidth<o?d.set(document.body,{overflowY:"hidden"}):e.stop()}),i("enableScrollY",function(){window.innerWidth<o?d.set(document.body,{overflowY:"auto"}):e.start()}),i("scrollTo",function(t){window.innerWidth<o?d.to(window,{scrollTo:{y:t,autoKill:!0},duration:c,ease:"power3.inOut"}):e.scrollTo(t,{duration:c*1e3,easing:[.645,.045,.355,1]})})}},206:function(s,r,l){"use strict";var u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"scroller",attrs:{role:"presentation"}},[t("Nuxt")],1),e._v(" "),t("V-Pointer"),e._v(" "),t("V-Loader")],1)},o=[],c={name:"DefaultLayout",mounted:function(){this.clear(),this.setViewHeight(),window.addEventListener("resize",this.setViewHeight)},methods:{setViewHeight:function(){var a=window.innerHeight*.01;document.documentElement.style.setProperty("--vh","".concat(a,"px"))},clear:function(){console.clear()}}},n=c,i=l(34),d=Object(i.a)(n,u,o,!1,null,null,null),f=r.a=d.exports},219:function(s,r,l){l(220),s.exports=l(221)},255:function(s,r){},256:function(s,r){}},[[219,21,1,22]]]);
