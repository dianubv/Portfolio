(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{292:function(l,n){},323:function(l,n,s){"use strict";var i=s(292),a=s.n(i)},458:function(l,n,s){"use strict";s.r(n);var i=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("a",{staticClass:"social-link",attrs:{href:e.href,rel:"noopener noreferrer"},on:{focus:e.showHoverText,blur:e.hideHoverText,pointerenter:e.showHoverText,pointerleave:e.hideHoverText}},[_("div",{staticClass:"social-link__wrapper",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"social-link__line serif"},e._l(e.linkText,function(o,r){return _("span",{key:r,ref:"hoverChars",refInFor:!0},[e._v(e._s(o))])}),0),e._v(" "),_("span",{staticClass:"social-link__line"},e._l(e.linkText,function(o,r){return _("span",{key:r,ref:"idleChars",refInFor:!0},[e._v(e._s(o))])}),0)]),e._v(" "),_("span",{staticClass:"sr-only"},[e._v(e._s(e.linkText))])])},a=[],c=s(11),m=s(94),j=s(154),y=s(22),O=s(20),x=s(21),g=s(10),b=s(29),T=s(19),P=s(30);function d(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),_.push.apply(_,o)}return _}function u(e){for(var t=1;t<arguments.length;t++){var _=arguments[t]!=null?arguments[t]:{};t%2?d(Object(_),!0).forEach(function(o){Object(c.a)(e,o,_[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):d(Object(_)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(_,o))})}return e}var f={props:{href:{type:String,required:!0,default:"https://example.com",validator:function(t){return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:")}}},data:function(){return{prefersReducedMotion:!1}},computed:{linkText:function(){return this.$slots.default[0].text.trim()}},mounted:function(){this.prefersReducedMotion=this.$prefersReducedMotion()},methods:{timelineFactory:function(t){return this.$gsap.timeline(u({defaults:{stagger:.05,duration:.2}},t))},showHoverText:function(){if(!this.prefersReducedMotion){this.prevTl&&this.prevTl.kill();var t=this.timelineFactory();t.to(this.$refs.idleChars,{yPercent:-100}),t.to(this.$refs.hoverChars,{yPercent:-100},"<"),this.prevTl=t}},hideHoverText:function(){if(!this.prefersReducedMotion){this.prevTl&&this.prevTl.kill();var t=this.timelineFactory();t.to(this.$refs.idleChars,{yPercent:0}),t.to(this.$refs.hoverChars,{yPercent:0},"<"),this.prevTl=t}}}},p=f,k=s(323),v=s(34),h=Object(v.a)(p,i,a,!1,null,null,null),C=n.default=h.exports}}]);