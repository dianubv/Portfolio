(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{304:function(i,n){},425:function(i,n,s){"use strict";var a=s(304),c=s.n(a)},461:function(i,n,s){"use strict";s.r(n);var a=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("header",{ref:"header",staticClass:"header",attrs:{role:"banner","data-scroll-section":""}},[_("V-Header-Background",{staticClass:"header__canvas"}),e._v(" "),_("div",{ref:"headerContainer",staticClass:"header__container"},[e._m(0),e._v(" "),_("div",{staticClass:"header__container__subtitle"},[_("p",{staticClass:"sr-only"},[e._v(e._s(e.subTitleText))]),e._v(" "),e._l(e.subTitleText,function(r,l){return _("span",{key:l,ref:"headerContainerSubtitle",refInFor:!0,attrs:{"aria-hidden":"true"},domProps:{innerHTML:e._s(r)}})})],2)]),e._v(" "),_("div",{staticClass:"header__bottom-bar"},[_("V-Scroll-Down",{staticClass:"header__bottom-bar__scroll-down",nativeOn:{click:function(r){return e.$scrollTo(".works")}}})],1)],1)},c=[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("h1",{staticClass:"header__container__title"},[_("span",{staticClass:"sr-only"},[e._v("Diane Bouffard-Vercelli")]),e._v(" "),_("span",{staticClass:"line",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"line__content"},[e._v("Diane")])]),e._v(" "),_("span",{staticClass:"line",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"line__content ml-responsive serif"},[e._v(`
                    Bouffard-`),_("br"),e._v(`
                    \xA0\xA0\xA0 Vercelli
                `)])])])}],f={data:function(){var t=this;return{links:[{label:"About",action:function(){return t.$scrollTo(".about")}},{label:"Work",action:function(){return t.$scrollTo(".works")}},{label:"Contact",action:function(){return t.$scrollTo(".contact")}}],subTitleText:"Creative Technology Engineer"}},mounted:function(){var t=this,_=this.$refs,r=_.header,l=_.headerContainer,h=_.headerContainerSubtitle,d=this.$gsap,u=this.$prefersReducedMotion();u||(d.fromTo(l,{y:-3},{y:20,scrollTrigger:{scrub:!0,trigger:r,start:"top-=50px top",end:"bottom top"}}),d.fromTo(".scroll-down",{opacity:1},{opacity:0,scrollTrigger:{scrub:.75,trigger:r,start:"top+=25% top",end:"bottom-=25% top"}}));var o=d.timeline({paused:!0,delay:.25,onEnd:function(){return t.$locomotiveScroll.update()}});u?o.from(".line__content",{opacity:0,stagger:.25}):o.from(".line__content",{yPercent:105,ease:"power1.out",duration:1,stagger:.25}),o.from(h,{opacity:0,stagger:{amount:.5,from:"center"}},"-=0.75"),o.from(".nav__sections__list__section, .nav__menu-button",{opacity:0,stagger:.05},"<+0.75"),o.from(".scroll-down",{opacity:0},"<+0.25"),this.$nuxt.$on("show-layout",function(){return o.play()})}},v=f,b=s(425),p=s(34),m=Object(p.a)(v,a,c,!1,null,null,null),g=n.default=m.exports}}]);
