(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{274:function(e,u,t){var _=t(277);function n(r,s,i){return s=_(s),s in r?Object.defineProperty(r,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[s]=i,r}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},275:function(e,u){function t(_){return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(_)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},276:function(e,u,t){var _=t(281);function n(r,s){if(r==null)return{};var i=_(r,s),o,f;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(f=0;f<l.length;f++)o=l[f],!(s.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,o)||(i[o]=r[o]))}return i}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},277:function(e,u,t){var _=t(275).default,n=t(279);function r(s){var i=n(s,"string");return _(i)==="symbol"?i:String(i)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},279:function(e,u,t){var _=t(275).default;function n(r,s){if(_(r)!=="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var o=i.call(r,s||"default");if(_(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},281:function(e,u){function t(_,n){if(_==null)return{};var r={},s=Object.keys(_),i,o;for(o=0;o<s.length;o++)i=s[o],!(n.indexOf(i)>=0)&&(r[i]=_[i]);return r}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},308:function(e,u){},430:function(e,u,t){var _=t(274),n=t(276),r=["class","staticClass","style","staticStyle","attrs"];t(44),t(22),t(20),t(21),t(10),t(29),t(19),t(30);function s(o,f){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(o);f&&(d=d.filter(function(x){return Object.getOwnPropertyDescriptor(o,x).enumerable})),l.push.apply(l,d)}return l}function i(o){for(var f=1;f<arguments.length;f++){var l=arguments[f]!=null?arguments[f]:{};f%2?s(Object(l),!0).forEach(function(d){_(o,d,l[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach(function(d){Object.defineProperty(o,d,Object.getOwnPropertyDescriptor(l,d))})}return o}e.exports={functional:!0,render:function(f,l){var d=l._c,x=l._v,c=l.data,a=l.children,p=a===void 0?[]:a,v=c.class,h=c.staticClass,y=c.style,g=c.staticStyle,j=c.attrs,m=j===void 0?{}:j,P=n(c,r);return d("svg",i({class:[v,h],style:[y,g],attrs:Object.assign({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},m)},P),p.concat([d("path",{attrs:{d:"M11.232 5.232L5.476 10.99l.767.768L12 6l-.768-.768z",fill:"currentColor"}}),d("path",{attrs:{d:"M6.242.243l-.767.768 5.758 5.758L12 6 6.242.243z",fill:"currentColor"}}),d("path",{attrs:{d:"M.543 5.458v1.086H11.4V5.458H.543z",fill:"currentColor"}})]))}}},431:function(e,u,t){"use strict";var _=t(308),n=t.n(_)},465:function(e,u,t){"use strict";t.r(u);var _=function(){var c=this,a=c.$createElement,p=c._self._c||a;return p("div",{ref:"pointer",staticClass:"pointer"},[p("ArrowLink",{ref:"pointerArrow",staticClass:"pointer__arrow",attrs:{"aria-label":"arrow for indicating link"}})],1)},n=[],r=t(430),s=t.n(r),i={components:{ArrowLink:s.a},data:function(){return{isPointerInWindow:!0,isHovering:!1}},watch:{isPointerInWindow:function(a){a?this.$refs.pointer.classList.remove("pointer--hidden"):this.$refs.pointer.classList.add("pointer--hidden")},isHovering:function(a){var p=.3,v="back.out",h=7,y=1;a?(this.$gsap.to(this.$refs.pointer,{scale:h,duration:p,ease:v}),this.$gsap.fromTo(this.$refs.pointerArrow,{scale:0,rotate:0},{scale:1,rotate:-45,delay:.075,duration:p,ease:v})):(this.$gsap.to(this.$refs.pointer,{scale:y,duration:p,ease:v}),this.$gsap.to(this.$refs.pointerArrow,{scale:0,duration:p,ease:v}))}},mounted:function(){var a=this,p=this.$prefersReducedMotion();if(!("ontouchstart"in document.documentElement||p)){var v=this.$refs.pointer,h=this.$gsap;this.$nuxt.$on("show-layout",function(){h.to(v,{delay:1,autoAlpha:1,onEnd:function(){document.addEventListener("pointermove",a.pointermoveHandler,!1),document.addEventListener("pointerover",a.pointeroverHandler,!1),document.addEventListener("pointerout",a.pointeroutHandler,!1)}})}),this.$nuxt.$on("toggle-hovering",function(y){typeof y=="boolean"?a.isHovering=y:a.isHovering=!a.isHovering})}},methods:{pointeroutHandler:function(a){!a.toElement&&!a.relatedTarget&&(this.isPointerInWindow=!1)},pointeroverHandler:function(){this.isPointerInWindow||(this.isPointerInWindow=!0)},pointermoveHandler:function(a){var p=a.clientX,v=a.clientY,h=this.$gsap.getProperty(this.$refs.pointer,"width"),y=p-window.innerWidth/2-h/2,g=v-window.innerHeight/2-h/2;this.$gsap.to(this.$refs.pointer,{x:y,y:g,opacity:this.isPointerInWindow?1:0,duration:.4,ease:"power2.out(1.5)"})}}},o=i,f=t(431),l=t(34),d=Object(l.a)(o,_,n,!1,null,null,null),x=u.default=d.exports}}]);