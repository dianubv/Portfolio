(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{309:function(l,r){},432:function(l,r,o){"use strict";var n=o(309),a=o.n(n)},466:function(l,r,o){"use strict";o.r(r);var n=function(){var _=this,s=_.$createElement,e=_._self._c||s;return e("div",{staticClass:"scroll-down"},[e("div",{staticClass:"sr-only"},[_._v("Scroll down to see more content")]),_._v(" "),e("div",{staticClass:"scroll-down__text",attrs:{"aria-hidden":"true"}},[_._v(`
        `+_._s(_.scrollText)+`
    `)]),_._v(" "),_._l(3,function(t){return e("div",{directives:[{name:"show",rawName:"v-show",value:!_.prefersReducedMotion,expression:"!prefersReducedMotion"}],key:t,ref:"scrollDownCircles",refInFor:!0,staticClass:"scroll-down__circle",attrs:{"aria-hidden":"true"}})})],2)},a=[],c={data:function(){return{prefersReducedMotion:!1}},computed:{scrollText:function(){return this.prefersReducedMotion?"Scroll Down":"Scroll"}},mounted:function(){if(this.prefersReducedMotion=this.$prefersReducedMotion(),!this.prefersReducedMotion){var s=this.$refs.scrollDownCircles,e=this.$gsap,t=e.utils.mapRange(0,s.length,.8,.3),d=e.timeline({defaults:{duration:1.75,ease:"power2.inOut"},repeat:-1});d.fromTo(s,{opacity:0},{opacity:function(p){return t(p)}}),d.fromTo(s,{yPercent:0},{yPercent:-250,duration:2.5,stagger:.15},"<+0.5"),d.to(s,{opacity:0,duration:.75},"-=0.45")}}},i=c,v=o(432),u=o(34),f=Object(u.a)(i,n,a,!1,null,null,null),m=r.default=f.exports}}]);
