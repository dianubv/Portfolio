(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{435:function(R,K,s){var A=s(436),I=s(275),U=s(437),x=s(438),C=s(274);s(46);function T(n,e){var t=typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=L(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(a){throw a},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u=!0,h=!1,l;return{s:function(){t=t.call(n)},n:function(){var a=t.next();return u=a.done,a},e:function(a){h=!0,l=a},f:function(){try{!u&&t.return!=null&&t.return()}finally{if(h)throw l}}}}function L(n,e){if(!!n){if(typeof n=="string")return D(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(n,e)}}function D(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}s(10),s(21),s(22),s(50),s(78),s(37),s(149),s(439),s(440),s(54),s(41),s(27),s(53),s(32),s(36),s(20),s(55),s(56),s(33);var W=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).filter(function(r){return t.includes(r)}).reduce(function(r,o){return Object.assign(r,C({},o,e[o]))},{})},j=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).filter(function(r){return!t.includes(r)}).reduce(function(r,o){return Object.assign(r,C({},o,e[o]))},{})},S=function(){"use strict";function n(e,t){var r=e.query,o=e.path,u=e.init,h=e.text,l=e.postprocess,i=l===void 0?[]:l;U(this,n),this.query=r,this.path=o,this.init=u,this.postprocess=i,this.options=t||{},this.onlyKeys=null,this.withoutKeys=null,this.sortKeys=[],this.limitN=null,this.skipN=null,h||this.postprocess.unshift(function(a){return a.map(function(d){return j(d,["text"])})})}return x(n,[{key:"only",value:function(t){return this.onlyKeys=Array.isArray(t)?t:[t],this}},{key:"without",value:function(t){return this.withoutKeys=Array.isArray(t)?t:[t],this}},{key:"sortBy",value:function(t,r){return this.sortKeys.push([t,r==="desc"]),this}},{key:"where",value:function(t){return this.query=this.query.find(t),this}},{key:"search",value:function(t,r){if(!t)return this;var o;return I(t)==="object"?o=t:r?o={query:{type:"match",field:t,value:r,prefix_length:1,fuzziness:1,extended:!0,minimum_should_match:1}}:o={query:{type:"bool",should:this.options.fullTextSearchFields.map(function(u){return{type:"match",field:u,value:t,prefix_length:1,operator:"and",minimum_should_match:1,fuzziness:1,extended:!0}})}},this.query=this.query.find({$fts:o}).sortByScoring(),this}},{key:"surround",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.before,u=o===void 0?1:o,h=r.after,l=h===void 0?1:h,i=t.indexOf("/")===0?"path":"slug";this.onlyKeys&&this.onlyKeys.push(i),this.withoutKeys&&(this.withoutKeys=this.withoutKeys.filter(function(d){return d!==i}));var a=function(m){var f=m.findIndex(function(g){return g[i]===t}),c=new Array(u+l).fill(null,0);if(f===-1)return c;for(var y=m.slice(f-u,f),v=m.slice(f+1,f+1+l),P=0,E=u-1;E>=0;E--)c[E]=y[P]||null,P++;for(var O=0,M=u;M<=l;M++)c[M]=v[O]||null,O++;return c};return this.postprocess.push(a),this}},{key:"limit",value:function(t){return typeof t=="string"&&(t=parseInt(t)),this.limitN=t,this}},{key:"skip",value:function(t){return typeof t=="string"&&(t=parseInt(t)),this.skipN=t,this}},{key:"fetch",value:function(){var e=A(regeneratorRuntime.mark(function r(){var o=this,u,h,l,i,a,d;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:this.sortKeys&&this.sortKeys.length&&(this.query=this.query.compoundsort(this.sortKeys)),this.skipN&&(this.query=this.query.offset(this.skipN)),this.limitN&&(this.query=this.query.limit(this.limitN)),u=this.query.data({removeMeta:!0}),this.onlyKeys&&(this.options.watch&&this.onlyKeys.push("path","extension"),h=function(y){return y.map(function(v){return W(v,o.onlyKeys)})},this.postprocess.unshift(h)),this.withoutKeys&&(this.options.watch&&(this.withoutKeys=this.withoutKeys.filter(function(c){return!["path","extension"].includes(c)})),l=function(y){return y.map(function(v){return j(v,o.withoutKeys)})},this.postprocess.unshift(l)),i=T(this.postprocess);try{for(i.s();!(a=i.n()).done;)d=a.value,u=d(u)}catch(c){i.e(c)}finally{i.f()}if(u){f.next=10;break}throw new Error("".concat(this.path," not found"));case 10:return f.abrupt("return",JSON.parse(JSON.stringify(u)));case 11:case"end":return f.stop()}},r,this)}));function t(){return e.apply(this,arguments)}return t}()}]),n}();R.exports=S},449:function(R,K,s){"use strict";s.r(K);var A=s(13),I=s(10),U=s.n(I),x=s(19),C=s.n(x),T=s(53),L=s.n(T),D=s(32),W=s.n(D),j=s(36),S=s.n(j),n=s(72),e=s.n(n),t=s(75),r=s.n(t),o=s(149),u=s.n(o),h=s(212),l=s.n(h),i=s(41),a=s.n(i),d=s(435),m=s.n(d),f=s(441),c=s.n(f),y=s(442),v=s.n(y);v.a.register();var P=["/","/works"],E,O,M=function(){var $={},N=[];Array.from(arguments).forEach(function(_){typeof _=="string"?N.push(_):Object(A.a)(_)==="object"&&($=_)});var J=$,z=J.text,Q=z===void 0?!1:z,F=J.deep,G=F===void 0?!1:F,p="/".concat(N.join("/").replace(/\/+/g,"/")),B=!p||!!P.find(function(_){return _===p}),H=B?{dir:G?{$regex:new RegExp("^".concat(p))}:p}:{path:p},V=B?[]:[function(_){return _[0]}];return new m.a({query:O.chain().find(H,!B),path:p,postprocess:V,text:Q},{fullTextSearchFields:["title","description","slug","text"]})};K.default=function(g){return E=new c.a("content.db"),E.loadJSONObject(g),O=E.getCollection("items"),M}}}]);
