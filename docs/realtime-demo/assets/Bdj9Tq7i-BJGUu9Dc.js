import{n as Jo,s as r2,m as a2,r as s2,b as dl}from"./index-D99TeBRU.js";import{a as o2}from"./bF2cz1Qs-BMDusl2d.js";var i2=Object.defineProperty,u2=(n,e,t)=>e in n?i2(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fl=(n,e,t)=>u2(n,typeof e!="symbol"?e+"":e,t);function l2(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var ml={},gl;function c2(){return gl||(gl=1,(function(){var n;function e(g){var v=0;return function(){return v<g.length?{done:!1,value:g[v++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(g,v,k){return g==Array.prototype||g==Object.prototype||(g[v]=k.value),g};function r(g){g=[typeof globalThis=="object"&&globalThis,g,typeof window=="object"&&window,typeof self=="object"&&self,typeof dl=="object"&&dl];for(var v=0;v<g.length;++v){var k=g[v];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var a=r(this);function s(g,v){if(v)e:{var k=a;g=g.split(".");for(var O=0;O<g.length-1;O++){var W=g[O];if(!(W in k))break e;k=k[W]}g=g[g.length-1],O=k[g],v=v(O),v!=O&&v!=null&&t(k,g,{configurable:!0,writable:!0,value:v})}}s("Symbol",function(g){function v(K){if(this instanceof v)throw new TypeError("Symbol is not a constructor");return new k(O+(K||"")+"_"+W++,K)}function k(K,G){this.g=K,t(this,"description",{configurable:!0,writable:!0,value:G})}if(g)return g;k.prototype.toString=function(){return this.g};var O="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",W=0;return v}),s("Symbol.iterator",function(g){if(g)return g;g=Symbol("Symbol.iterator");for(var v="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),k=0;k<v.length;k++){var O=a[v[k]];typeof O=="function"&&typeof O.prototype[g]!="function"&&t(O.prototype,g,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return g});function o(g){return g={next:g},g[Symbol.iterator]=function(){return this},g}function i(g){var v=typeof Symbol<"u"&&Symbol.iterator&&g[Symbol.iterator];return v?v.call(g):{next:e(g)}}function u(g){if(!(g instanceof Array)){g=i(g);for(var v,k=[];!(v=g.next()).done;)k.push(v.value);g=k}return g}var l=typeof Object.create=="function"?Object.create:function(g){function v(){}return v.prototype=g,new v},c;if(typeof Object.setPrototypeOf=="function")c=Object.setPrototypeOf;else{var p;e:{var h={a:!0},d={};try{d.__proto__=h,p=d.a;break e}catch{}p=!1}c=p?function(g,v){if(g.__proto__=v,g.__proto__!==v)throw new TypeError(g+" is not extensible");return g}:null}var m=c;function y(g,v){if(g.prototype=l(v.prototype),g.prototype.constructor=g,m)m(g,v);else for(var k in v)if(k!="prototype")if(Object.defineProperties){var O=Object.getOwnPropertyDescriptor(v,k);O&&Object.defineProperty(g,k,O)}else g[k]=v[k];g.ea=v.prototype}function b(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function x(g){if(g.l)throw new TypeError("Generator is already running");g.l=!0}b.prototype.o=function(g){this.h=g};function T(g,v){g.j={U:v,V:!0},g.g=g.m||g.s}b.prototype.return=function(g){this.j={return:g},this.g=this.s};function $(g,v,k){return g.g=k,{value:v}}function F(g){this.g=new b,this.h=g}function M(g,v){x(g.g);var k=g.g.i;return k?U(g,"return"in k?k.return:function(O){return{value:O,done:!0}},v,g.g.return):(g.g.return(v),X(g))}function U(g,v,k,O){try{var W=v.call(g.g.i,k);if(!(W instanceof Object))throw new TypeError("Iterator result "+W+" is not an object");if(!W.done)return g.g.l=!1,W;var K=W.value}catch(G){return g.g.i=null,T(g.g,G),X(g)}return g.g.i=null,O.call(g.g,K),X(g)}function X(g){for(;g.g.g;)try{var v=g.h(g.g);if(v)return g.g.l=!1,{value:v.value,done:!1}}catch(k){g.g.h=void 0,T(g.g,k)}if(g.g.l=!1,g.g.j){if(v=g.g.j,g.g.j=null,v.V)throw v.U;return{value:v.return,done:!0}}return{value:void 0,done:!0}}function z(g){this.next=function(v){return x(g.g),g.g.i?v=U(g,g.g.i.next,v,g.g.o):(g.g.o(v),v=X(g)),v},this.throw=function(v){return x(g.g),g.g.i?v=U(g,g.g.i.throw,v,g.g.o):(T(g.g,v),v=X(g)),v},this.return=function(v){return M(g,v)},this[Symbol.iterator]=function(){return this}}function L(g,v){return v=new z(new F(v)),m&&g.prototype&&m(v,g.prototype),v}function C(g,v){g instanceof String&&(g+="");var k=0,O=!1,W={next:function(){if(!O&&k<g.length){var K=k++;return{value:v(K,g[K]),done:!1}}return O=!0,{done:!0,value:void 0}}};return W[Symbol.iterator]=function(){return W},W}var q=typeof Object.assign=="function"?Object.assign:function(g,v){for(var k=1;k<arguments.length;k++){var O=arguments[k];if(O)for(var W in O)Object.prototype.hasOwnProperty.call(O,W)&&(g[W]=O[W])}return g};s("Object.assign",function(g){return g||q}),s("Promise",function(g){function v(G){this.h=0,this.i=void 0,this.g=[],this.o=!1;var J=this.j();try{G(J.resolve,J.reject)}catch(ne){J.reject(ne)}}function k(){this.g=null}function O(G){return G instanceof v?G:new v(function(J){J(G)})}if(g)return g;k.prototype.h=function(G){if(this.g==null){this.g=[];var J=this;this.i(function(){J.l()})}this.g.push(G)};var W=a.setTimeout;k.prototype.i=function(G){W(G,0)},k.prototype.l=function(){for(;this.g&&this.g.length;){var G=this.g;this.g=[];for(var J=0;J<G.length;++J){var ne=G[J];G[J]=null;try{ne()}catch(ue){this.j(ue)}}}this.g=null},k.prototype.j=function(G){this.i(function(){throw G})},v.prototype.j=function(){function G(ue){return function(ye){ne||(ne=!0,ue.call(J,ye))}}var J=this,ne=!1;return{resolve:G(this.C),reject:G(this.l)}},v.prototype.C=function(G){if(G===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(G instanceof v)this.F(G);else{e:switch(typeof G){case"object":var J=G!=null;break e;case"function":J=!0;break e;default:J=!1}J?this.u(G):this.m(G)}},v.prototype.u=function(G){var J=void 0;try{J=G.then}catch(ne){this.l(ne);return}typeof J=="function"?this.G(J,G):this.m(G)},v.prototype.l=function(G){this.s(2,G)},v.prototype.m=function(G){this.s(1,G)},v.prototype.s=function(G,J){if(this.h!=0)throw Error("Cannot settle("+G+", "+J+"): Promise already settled in state"+this.h);this.h=G,this.i=J,this.h===2&&this.D(),this.A()},v.prototype.D=function(){var G=this;W(function(){if(G.B()){var J=a.console;typeof J<"u"&&J.error(G.i)}},1)},v.prototype.B=function(){if(this.o)return!1;var G=a.CustomEvent,J=a.Event,ne=a.dispatchEvent;return typeof ne>"u"?!0:(typeof G=="function"?G=new G("unhandledrejection",{cancelable:!0}):typeof J=="function"?G=new J("unhandledrejection",{cancelable:!0}):(G=a.document.createEvent("CustomEvent"),G.initCustomEvent("unhandledrejection",!1,!0,G)),G.promise=this,G.reason=this.i,ne(G))},v.prototype.A=function(){if(this.g!=null){for(var G=0;G<this.g.length;++G)K.h(this.g[G]);this.g=null}};var K=new k;return v.prototype.F=function(G){var J=this.j();G.J(J.resolve,J.reject)},v.prototype.G=function(G,J){var ne=this.j();try{G.call(J,ne.resolve,ne.reject)}catch(ue){ne.reject(ue)}},v.prototype.then=function(G,J){function ne(Se,be){return typeof Se=="function"?function(pe){try{ue(Se(pe))}catch(f){ye(f)}}:be}var ue,ye,Ee=new v(function(Se,be){ue=Se,ye=be});return this.J(ne(G,ue),ne(J,ye)),Ee},v.prototype.catch=function(G){return this.then(void 0,G)},v.prototype.J=function(G,J){function ne(){switch(ue.h){case 1:G(ue.i);break;case 2:J(ue.i);break;default:throw Error("Unexpected state: "+ue.h)}}var ue=this;this.g==null?K.h(ne):this.g.push(ne),this.o=!0},v.resolve=O,v.reject=function(G){return new v(function(J,ne){ne(G)})},v.race=function(G){return new v(function(J,ne){for(var ue=i(G),ye=ue.next();!ye.done;ye=ue.next())O(ye.value).J(J,ne)})},v.all=function(G){var J=i(G),ne=J.next();return ne.done?O([]):new v(function(ue,ye){function Ee(pe){return function(f){Se[pe]=f,be--,be==0&&ue(Se)}}var Se=[],be=0;do Se.push(void 0),be++,O(ne.value).J(Ee(Se.length-1),ye),ne=J.next();while(!ne.done)})},v}),s("Object.is",function(g){return g||function(v,k){return v===k?v!==0||1/v===1/k:v!==v&&k!==k}}),s("Array.prototype.includes",function(g){return g||function(v,k){var O=this;O instanceof String&&(O=String(O));var W=O.length;for(k=k||0,0>k&&(k=Math.max(k+W,0));k<W;k++){var K=O[k];if(K===v||Object.is(K,v))return!0}return!1}}),s("String.prototype.includes",function(g){return g||function(v,k){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(v instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(v,k||0)!==-1}}),s("Array.prototype.keys",function(g){return g||function(){return C(this,function(v){return v})}});var ee=this||self;function te(g,v){g=g.split(".");var k=ee;g[0]in k||typeof k.execScript>"u"||k.execScript("var "+g[0]);for(var O;g.length&&(O=g.shift());)g.length||v===void 0?k[O]&&k[O]!==Object.prototype[O]?k=k[O]:k=k[O]={}:k[O]=v}function le(g,v){return v=String.fromCharCode.apply(null,v),g==null?v:g+v}var de,fe=typeof TextDecoder<"u",Re,ge=typeof TextEncoder<"u";function Te(g){if(ge)g=(Re||(Re=new TextEncoder)).encode(g);else{var v=void 0;v=v===void 0?!1:v;for(var k=0,O=new Uint8Array(3*g.length),W=0;W<g.length;W++){var K=g.charCodeAt(W);if(128>K)O[k++]=K;else{if(2048>K)O[k++]=K>>6|192;else{if(55296<=K&&57343>=K){if(56319>=K&&W<g.length){var G=g.charCodeAt(++W);if(56320<=G&&57343>=G){K=1024*(K-55296)+G-56320+65536,O[k++]=K>>18|240,O[k++]=K>>12&63|128,O[k++]=K>>6&63|128,O[k++]=K&63|128;continue}else W--}if(v)throw Error("Found an unpaired surrogate");K=65533}O[k++]=K>>12|224,O[k++]=K>>6&63|128}O[k++]=K&63|128}}g=O.subarray(0,k)}return g}var We={},Ne=null;function Ye(g,v){v===void 0&&(v=0),ur(),v=We[v];for(var k=Array(Math.floor(g.length/3)),O=v[64]||"",W=0,K=0;W<g.length-2;W+=3){var G=g[W],J=g[W+1],ne=g[W+2],ue=v[G>>2];G=v[(G&3)<<4|J>>4],J=v[(J&15)<<2|ne>>6],ne=v[ne&63],k[K++]=ue+G+J+ne}switch(ue=0,ne=O,g.length-W){case 2:ue=g[W+1],ne=v[(ue&15)<<2]||O;case 1:g=g[W],k[K]=v[g>>2]+v[(g&3)<<4|ue>>4]+ne+O}return k.join("")}function Vt(g){var v=g.length,k=3*v/4;k%3?k=Math.floor(k):"=.".indexOf(g[v-1])!=-1&&(k="=.".indexOf(g[v-2])!=-1?k-2:k-1);var O=new Uint8Array(k),W=0;return Vn(g,function(K){O[W++]=K}),O.subarray(0,W)}function Vn(g,v){function k(ne){for(;O<g.length;){var ue=g.charAt(O++),ye=Ne[ue];if(ye!=null)return ye;if(!/^[\s\xa0]*$/.test(ue))throw Error("Unknown base64 encoding at char: "+ue)}return ne}ur();for(var O=0;;){var W=k(-1),K=k(0),G=k(64),J=k(64);if(J===64&&W===-1)break;v(W<<2|K>>4),G!=64&&(v(K<<4&240|G>>2),J!=64&&v(G<<6&192|J))}}function ur(){if(!Ne){Ne={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),v=["+/=","+/","-_=","-_.","-_"],k=0;5>k;k++){var O=g.concat(v[k].split(""));We[k]=O;for(var W=0;W<O.length;W++){var K=O[W];Ne[K]===void 0&&(Ne[K]=W)}}}}var dn=typeof Uint8Array.prototype.slice=="function",Na;function zr(g,v,k){return v===k?Na||(Na=new Uint8Array(0)):dn?g.slice(v,k):new Uint8Array(g.subarray(v,k))}var Wt=0,zt=0;function Ze(g,v){v=v===void 0?{}:v,v=v.v===void 0?!1:v.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=v,g&&Wn(this,g)}function Wn(g,v){v=v.constructor===Uint8Array?v:v.constructor===ArrayBuffer?new Uint8Array(v):v.constructor===Array?new Uint8Array(v):v.constructor===String?Vt(v):v instanceof Uint8Array?new Uint8Array(v.buffer,v.byteOffset,v.byteLength):new Uint8Array(0),g.h=v,g.l=0,g.j=g.h.length,g.g=g.l}Ze.prototype.reset=function(){this.g=this.l};function lr(g){for(var v=128,k=0,O=0,W=0;4>W&&128<=v;W++)v=g.h[g.g++],k|=(v&127)<<7*W;if(128<=v&&(v=g.h[g.g++],k|=(v&127)<<28,O|=(v&127)>>4),128<=v)for(W=0;5>W&&128<=v;W++)v=g.h[g.g++],O|=(v&127)<<7*W+3;if(128>v)return g=k>>>0,v=O>>>0,(O=v&2147483648)&&(g=~g+1>>>0,v=~v>>>0,g==0&&(v=v+1>>>0)),g=4294967296*v+(g>>>0),O?-g:g;g.m=!0}Ze.prototype.i=function(){var g=this.h,v=g[this.g],k=v&127;return 128>v?(this.g+=1,k):(v=g[this.g+1],k|=(v&127)<<7,128>v?(this.g+=2,k):(v=g[this.g+2],k|=(v&127)<<14,128>v?(this.g+=3,k):(v=g[this.g+3],k|=(v&127)<<21,128>v?(this.g+=4,k):(v=g[this.g+4],k|=(v&15)<<28,128>v?(this.g+=5,k>>>0):(this.g+=5,128<=g[this.g++]&&128<=g[this.g++]&&128<=g[this.g++]&&128<=g[this.g++]&&this.g++,k)))))},Ze.prototype.o=function(){var g=this.h[this.g],v=this.h[this.g+1],k=this.h[this.g+2],O=this.h[this.g+3];return this.g+=4,k=(g<<0|v<<8|k<<16|O<<24)>>>0,g=2*(k>>31)+1,v=k>>>23&255,k&=8388607,v==255?k?NaN:1/0*g:v==0?g*Math.pow(2,-149)*k:g*Math.pow(2,v-150)*(k+Math.pow(2,23))};var Gr=[];function Gt(){this.g=new Uint8Array(64),this.h=0}Gt.prototype.push=function(g){if(!(this.h+1<this.g.length)){var v=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(v)}this.g[this.h++]=g},Gt.prototype.length=function(){return this.h},Gt.prototype.end=function(){var g=this.g,v=this.h;return this.h=0,zr(g,0,v)};function nn(g,v){for(;127<v;)g.push(v&127|128),v>>>=7;g.push(v)}function zn(g){var v={},k=v.N===void 0?!1:v.N;this.o={v:v.v===void 0?!1:v.v},this.N=k,v=this.o,Gr.length?(k=Gr.pop(),v&&(k.v=v.v),g&&Wn(k,g),g=k):g=new Ze(g,v),this.g=g,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}zn.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function Tt(g){var v=g.g;if((v=v.g==v.j)||(v=g.j)||(v=g.g,v=v.m||0>v.g||v.g>v.j),v)return!1;g.m=g.g.g,v=g.g.i();var k=v&7;return k!=0&&k!=5&&k!=1&&k!=2&&k!=3&&k!=4?(g.j=!0,!1):(g.i=v,g.l=v>>>3,g.h=k,!0)}function rn(g){switch(g.h){case 0:if(g.h!=0)rn(g);else{for(g=g.g;g.h[g.g]&128;)g.g++;g.g++}break;case 1:g.h!=1?rn(g):(g=g.g,g.g+=8);break;case 2:if(g.h!=2)rn(g);else{var v=g.g.i();g=g.g,g.g+=v}break;case 5:g.h!=5?rn(g):(g=g.g,g.g+=4);break;case 3:v=g.l;do{if(!Tt(g)){g.j=!0;break}if(g.h==4){g.l!=v&&(g.j=!0);break}rn(g)}while(!0);break;default:g.j=!0}}function jr(g,v,k){var O=g.g.j,W=g.g.i(),K=g.g.g+W;if(g.g.j=K,k(v,g),k=K-g.g.g,k!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+W+" bytes, instead read "+(W-k)+" bytes, either the data ended unexpectedly or the message misreported its own length");return g.g.g=K,g.g.j=O,v}function et(g){return g.g.o()}function cr(g){var v=g.g.i();g=g.g;var k=g.g;g.g+=v,g=g.h;var O;if(fe)(O=de)||(O=de=new TextDecoder("utf-8",{fatal:!1})),O=O.decode(g.subarray(k,k+v));else{v=k+v;for(var W=[],K=null,G,J,ne;k<v;)G=g[k++],128>G?W.push(G):224>G?k>=v?W.push(65533):(J=g[k++],194>G||(J&192)!==128?(k--,W.push(65533)):W.push((G&31)<<6|J&63)):240>G?k>=v-1?W.push(65533):(J=g[k++],(J&192)!==128||G===224&&160>J||G===237&&160<=J||((O=g[k++])&192)!==128?(k--,W.push(65533)):W.push((G&15)<<12|(J&63)<<6|O&63)):244>=G?k>=v-2?W.push(65533):(J=g[k++],(J&192)!==128||(G<<28)+(J-144)>>30!==0||((O=g[k++])&192)!==128||((ne=g[k++])&192)!==128?(k--,W.push(65533)):(G=(G&7)<<18|(J&63)<<12|(O&63)<<6|ne&63,G-=65536,W.push((G>>10&1023)+55296,(G&1023)+56320))):W.push(65533),8192<=W.length&&(K=le(K,W),W.length=0);O=le(K,W)}return O}function $a(g,v,k){var O=g.g.i();for(O=g.g.g+O;g.g.g<O;)k.push(v.call(g.g))}function Ra(g,v){g.h==2?$a(g,Ze.prototype.o,v):v.push(et(g))}function Tn(){this.h=[],this.i=0,this.g=new Gt}function jt(g,v){v.length!==0&&(g.h.push(v),g.i+=v.length)}function pr(g){var v=g.i+g.g.length();if(v===0)return new Uint8Array(0);v=new Uint8Array(v);for(var k=g.h,O=k.length,W=0,K=0;K<O;K++){var G=k[K];G.length!==0&&(v.set(G,W),W+=G.length)}return k=g.g,O=k.h,O!==0&&(v.set(k.g.subarray(0,O),W),k.h=0),g.h=[v],v}function Et(g,v,k){if(k!=null){nn(g.g,8*v+5),g=g.g;var O=k;O=(k=0>O?1:0)?-O:O,O===0?0<1/O?Wt=zt=0:(zt=0,Wt=2147483648):isNaN(O)?(zt=0,Wt=2147483647):34028234663852886e22<O?(zt=0,Wt=(k<<31|2139095040)>>>0):11754943508222875e-54>O?(O=Math.round(O/Math.pow(2,-149)),zt=0,Wt=(k<<31|O)>>>0):(v=Math.floor(Math.log(O)/Math.LN2),O*=Math.pow(2,-v),O=Math.round(8388608*O),16777216<=O&&++v,zt=0,Wt=(k<<31|v+127<<23|O&8388607)>>>0),k=Wt,g.push(k>>>0&255),g.push(k>>>8&255),g.push(k>>>16&255),g.push(k>>>24&255)}}var hr=typeof Uint8Array=="function";function _a(g,v,k){if(g!=null)return typeof g=="object"?hr&&g instanceof Uint8Array?k(g):Aa(g,v,k):v(g)}function Aa(g,v,k){if(Array.isArray(g)){for(var O=Array(g.length),W=0;W<g.length;W++)O[W]=_a(g[W],v,k);return Array.isArray(g)&&g.W&&lt(O),O}O={};for(W in g)O[W]=_a(g[W],v,k);return O}function ks(g){return typeof g=="number"?isFinite(g)?g:String(g):g}var Ts={W:{value:!0,configurable:!0}};function lt(g){return Array.isArray(g)&&!Object.isFrozen(g)&&Object.defineProperties(g,Ts),g}var Je;function Qe(g,v,k){var O=Je;Je=null,g||(g=O),O=this.constructor.ca,g||(g=O?[O]:[]),this.j=O?0:-1,this.m=this.g=null,this.h=g;e:{if(O=this.h.length,g=O-1,O&&(O=this.h[g],!(O===null||typeof O!="object"||Array.isArray(O)||hr&&O instanceof Uint8Array))){this.l=g-this.j,this.i=O;break e}v!==void 0&&-1<v?(this.l=Math.max(v,g+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(k)for(v=0;v<k.length;v++)g=k[v],g<this.l?(g+=this.j,(O=this.h[g])?lt(O):this.h[g]=vt):(dr(this),(O=this.i[g])?lt(O):this.i[g]=vt)}var vt=Object.freeze(lt([]));function dr(g){var v=g.l+g.j;g.h[v]||(g.i=g.h[v]={})}function Me(g,v,k){return v===-1?null:k!==void 0&&k||v>=g.l?g.i?g.i[v]:void 0:g.h[v+g.j]}function fr(g,v){var k=k===void 0?!1:k,O=Me(g,v,k);return O==null&&(O=vt),O===vt&&(O=lt([]),ke(g,v,O,k)),O}function Oa(g){var v=fr(g,3);if(g.m||(g.m={}),!g.m[3]){for(var k=0;k<v.length;k++)v[k]=+v[k];g.m[3]=!0}return v}function fn(g,v,k){return g=Me(g,v),g??k}function At(g,v,k){return g=Me(g,v),g=g==null?g:+g,g??(k===void 0?0:k)}function ke(g,v,k,O){O!==void 0&&O||v>=g.l?(dr(g),g.i[v]=k):g.h[v+g.j]=k}function Es(g,v,k){if(k===-1)return null;if(g.g||(g.g={}),!g.g[k]){var O=Me(g,k,!1);O&&(g.g[k]=new v(O))}return g.g[k]}function Hr(g,v){g.g||(g.g={});var k=g.g[1];if(!k){var O=fr(g,1);k=[];for(var W=0;W<O.length;W++)k[W]=new v(O[W]);g.g[1]=k}return k}function mr(g,v,k){var O=O===void 0?!1:O;g.g||(g.g={});var W=k&&mn(k);g.g[v]=k,ke(g,v,W,O)}function gr(g,v,k,O){var W=Hr(g,k);v=v||new k,g=fr(g,1),O!=null?(W.splice(O,0,v),g.splice(O,0,mn(v))):(W.push(v),g.push(mn(v)))}Qe.prototype.toJSON=function(){var g=mn(this);return Aa(g,ks,Ye)};function mn(g,v){if(g.g)for(var k in g.g){var O=g.g[k];if(Array.isArray(O))for(var W=0;W<O.length;W++)O[W]&&mn(O[W]);else O&&mn(O)}return g.h}Qe.prototype.toString=function(){return mn(this).toString()};function Xr(g,v){if(g=g.o){jt(v,v.g.end());for(var k=0;k<g.length;k++)jt(v,g[k])}}function Ot(g,v){if(v.h==4)return!1;var k=v.m;return rn(v),v.N||(v=zr(v.g.h,k,v.g.g),(k=g.o)?k.push(v):g.o=[v]),!0}function gn(g){Qe.call(this,g,-1,Vo)}y(gn,Qe),gn.prototype.getRows=function(){return Me(this,1)},gn.prototype.getCols=function(){return Me(this,2)},gn.prototype.getPackedDataList=function(){return Oa(this)},gn.prototype.getLayout=function(){return fn(this,4,0)};function Cs(g,v){for(;Tt(v);)switch(v.i){case 8:var k=v.g.i();ke(g,1,k);break;case 16:k=v.g.i(),ke(g,2,k);break;case 29:case 26:Ra(v,g.getPackedDataList());break;case 32:k=lr(v.g),ke(g,4,k);break;default:if(!Ot(g,v))return g}return g}var Vo=[3];function at(g,v){var k=void 0;return new(k||(k=Promise))(function(O,W){function K(ne){try{J(v.next(ne))}catch(ue){W(ue)}}function G(ne){try{J(v.throw(ne))}catch(ue){W(ue)}}function J(ne){ne.done?O(ne.value):new k(function(ue){ue(ne.value)}).then(K,G)}J((v=v.apply(g,void 0)).next())})}function yn(g){Qe.call(this,g)}y(yn,Qe);function Is(g,v){for(;Tt(v);)switch(v.i){case 8:var k=v.g.i();ke(g,1,k);break;case 21:k=et(v),ke(g,2,k);break;case 26:k=cr(v),ke(g,3,k);break;case 34:k=cr(v),ke(g,4,k);break;default:if(!Ot(g,v))return g}return g}function qr(g){Qe.call(this,g,-1,Ns)}y(qr,Qe),qr.prototype.addClassification=function(g,v){return gr(this,g,yn,v),this};var Ns=[1];function Gn(g){Qe.call(this,g)}y(Gn,Qe);function Wo(g,v){for(;Tt(v);)switch(v.i){case 13:var k=et(v);ke(g,1,k);break;case 21:k=et(v),ke(g,2,k);break;case 29:k=et(v),ke(g,3,k);break;case 37:k=et(v),ke(g,4,k);break;case 45:k=et(v),ke(g,5,k);break;default:if(!Ot(g,v))return g}return g}function $s(g){Qe.call(this,g,-1,_s)}y($s,Qe);function Rs(g){e:{var v=new $s;for(g=new zn(g);Tt(g);)switch(g.i){case 10:var k=jr(g,new Gn,Wo);gr(v,k,Gn,void 0);break;default:if(!Ot(v,g))break e}}return v}var _s=[1];function Kr(g){Qe.call(this,g)}y(Kr,Qe);function En(g){Qe.call(this,g,-1,Go)}y(En,Qe),En.prototype.getVertexType=function(){return fn(this,1,0)},En.prototype.getPrimitiveType=function(){return fn(this,2,0)},En.prototype.getVertexBufferList=function(){return Oa(this)},En.prototype.getIndexBufferList=function(){return fr(this,4)};function zo(g,v){for(;Tt(v);)switch(v.i){case 8:var k=lr(v.g);ke(g,1,k);break;case 16:k=lr(v.g),ke(g,2,k);break;case 29:case 26:Ra(v,g.getVertexBufferList());break;case 32:case 34:k=v;var O=g.getIndexBufferList();k.h==2?$a(k,Ze.prototype.i,O):O.push(k.g.i());break;default:if(!Ot(g,v))return g}return g}var Go=[3,4];function Yr(g){Qe.call(this,g)}y(Yr,Qe),Yr.prototype.getMesh=function(){return Es(this,En,1)},Yr.prototype.getPoseTransformMatrix=function(){return Es(this,gn,2)};function As(g){e:{var v=new Yr;for(g=new zn(g);Tt(g);)switch(g.i){case 10:var k=jr(g,new En,zo);mr(v,1,k);break;case 18:k=jr(g,new gn,Cs),mr(v,2,k);break;default:if(!Ot(v,g))break e}}return v}function Fa(g,v,k){if(k=g.createShader(k===0?g.VERTEX_SHADER:g.FRAGMENT_SHADER),g.shaderSource(k,v),g.compileShader(k),!g.getShaderParameter(k,g.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+g.getShaderInfoLog(k));return k}function Da(g){return Hr(g,yn).map(function(v){return{index:fn(v,1,0),Y:At(v,2),label:Me(v,3)!=null?fn(v,3,""):void 0,displayName:Me(v,4)!=null?fn(v,4,""):void 0}})}function Ma(g){return{x:At(g,1),y:At(g,2),z:At(g,3),visibility:Me(g,4)!=null?At(g,4):void 0}}function yr(g,v){this.h=g,this.g=v,this.l=0}function jn(g,v,k){return Ft(g,v),typeof g.g.canvas.transferToImageBitmap=="function"?Promise.resolve(g.g.canvas.transferToImageBitmap()):k?Promise.resolve(g.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(g.g.canvas):(g.i===void 0&&(g.i=document.createElement("canvas")),new Promise(function(O){g.i.height=g.g.canvas.height,g.i.width=g.g.canvas.width,g.i.getContext("2d",{}).drawImage(g.g.canvas,0,0,g.g.canvas.width,g.g.canvas.height),O(g.i)}))}function Ft(g,v){var k=g.g;if(g.m===void 0){var O=Fa(k,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),W=Fa(k,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),K=k.createProgram();if(k.attachShader(K,O),k.attachShader(K,W),k.linkProgram(K),!k.getProgramParameter(K,k.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+k.getProgramInfoLog(K));O=g.m=K,k.useProgram(O),W=k.getUniformLocation(O,"sampler0"),g.j={I:k.getAttribLocation(O,"aVertex"),H:k.getAttribLocation(O,"aTex"),da:W},g.s=k.createBuffer(),k.bindBuffer(k.ARRAY_BUFFER,g.s),k.enableVertexAttribArray(g.j.I),k.vertexAttribPointer(g.j.I,2,k.FLOAT,!1,0,0),k.bufferData(k.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),k.STATIC_DRAW),k.bindBuffer(k.ARRAY_BUFFER,null),g.o=k.createBuffer(),k.bindBuffer(k.ARRAY_BUFFER,g.o),k.enableVertexAttribArray(g.j.H),k.vertexAttribPointer(g.j.H,2,k.FLOAT,!1,0,0),k.bufferData(k.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),k.STATIC_DRAW),k.bindBuffer(k.ARRAY_BUFFER,null),k.uniform1i(W,0)}O=g.j,k.useProgram(g.m),k.canvas.width=v.width,k.canvas.height=v.height,k.viewport(0,0,v.width,v.height),k.activeTexture(k.TEXTURE0),g.h.bindTexture2d(v.glName),k.enableVertexAttribArray(O.I),k.bindBuffer(k.ARRAY_BUFFER,g.s),k.vertexAttribPointer(O.I,2,k.FLOAT,!1,0,0),k.enableVertexAttribArray(O.H),k.bindBuffer(k.ARRAY_BUFFER,g.o),k.vertexAttribPointer(O.H,2,k.FLOAT,!1,0,0),k.bindFramebuffer(k.DRAW_FRAMEBUFFER?k.DRAW_FRAMEBUFFER:k.FRAMEBUFFER,null),k.clearColor(0,0,0,0),k.clear(k.COLOR_BUFFER_BIT),k.colorMask(!0,!0,!0,!0),k.drawArrays(k.TRIANGLE_FAN,0,4),k.disableVertexAttribArray(O.I),k.disableVertexAttribArray(O.H),k.bindBuffer(k.ARRAY_BUFFER,null),g.h.bindTexture2d(0)}function jo(g){this.g=g}var Ho=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Os(g,v){return v+g}function La(g,v){window[g]=v}function Ct(g){var v=document.createElement("script");return v.setAttribute("src",g),v.setAttribute("crossorigin","anonymous"),new Promise(function(k){v.addEventListener("load",function(){k()},!1),v.addEventListener("error",function(){k()},!1),document.body.appendChild(v)})}function Fs(){return at(this,function g(){return L(g,function(v){switch(v.g){case 1:return v.m=2,$(v,WebAssembly.instantiate(Ho),4);case 4:v.g=3,v.m=0;break;case 2:return v.m=0,v.j=null,v.return(!1);case 3:return v.return(!0)}})})}function Cn(g){if(this.g=g,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=g&&g.locateFile||Os,typeof window=="object")var v=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")v=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=v,g.options){v=i(Object.keys(g.options));for(var k=v.next();!k.done;k=v.next()){k=k.value;var O=g.options[k].default;O!==void 0&&(this.j[k]=typeof O=="function"?O():O)}}}n=Cn.prototype,n.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Ds(g,v){return g.g.files===void 0?[]:typeof g.g.files=="function"?g.g.files(v):g.g.files}function Pa(g){return at(g,function v(){var k=this,O,W,K,G,J,ne,ue,ye,Ee,Se,be;return L(v,function(pe){switch(pe.g){case 1:return O=k,k.R?(W=Ds(k,k.j),$(pe,Fs(),2)):pe.return();case 2:if(K=pe.h,typeof window=="object")return La("createMediapipeSolutionsWasm",{locateFile:k.locateFile}),La("createMediapipeSolutionsPackedAssets",{locateFile:k.locateFile}),ne=W.filter(function(f){return f.data!==void 0}),ue=W.filter(function(f){return f.data===void 0}),ye=Promise.all(ne.map(function(f){var S=Hn(O,f.url);if(f.path!==void 0){var E=f.path;S=S.then(function(I){return O.overrideFile(E,I),Promise.resolve(I)})}return S})),Ee=Promise.all(ue.map(function(f){return f.simd===void 0||f.simd&&K||!f.simd&&!K?Ct(O.locateFile(f.url,O.S)):Promise.resolve()})).then(function(){return at(O,function f(){var S,E,I=this;return L(f,function(A){if(A.g==1)return S=window.createMediapipeSolutionsWasm,E=window.createMediapipeSolutionsPackedAssets,$(A,S(E),2);I.h=A.h,A.g=0})})}),Se=(function(){return at(O,function f(){var S=this;return L(f,function(E){return S.g.graph&&S.g.graph.url?E=$(E,Hn(S,S.g.graph.url),0):(E.g=0,E=void 0),E})})})(),$(pe,Promise.all([Ee,ye,Se]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return G=W.filter(function(f){return f.simd===void 0||f.simd&&K||!f.simd&&!K}).map(function(f){return O.locateFile(f.url,O.S)}),importScripts.apply(null,u(G)),$(pe,createMediapipeSolutionsWasm(Module),6);case 6:k.h=pe.h,k.l=new OffscreenCanvas(1,1),k.h.canvas=k.l,J=k.h.GL.createContext(k.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),k.h.GL.makeContextCurrent(J),pe.g=4;break;case 7:if(k.l=document.createElement("canvas"),be=k.l.getContext("webgl2",{}),!be&&(be=k.l.getContext("webgl",{}),!be))return alert("Failed to create WebGL canvas context when passing video frame."),pe.return();k.D=be,k.h.canvas=k.l,k.h.createContext(k.l,!0,!0,{});case 4:k.i=new k.h.SolutionWasm,k.R=!1,pe.g=0}})})}function Xo(g){return at(g,function v(){var k=this,O,W,K,G,J,ne,ue,ye;return L(v,function(Ee){if(Ee.g==1){if(k.g.graph&&k.g.graph.url&&k.P===k.g.graph.url)return Ee.return();if(k.o=!0,!k.g.graph||!k.g.graph.url){Ee.g=2;return}return k.P=k.g.graph.url,$(Ee,Hn(k,k.g.graph.url),3)}for(Ee.g!=2&&(O=Ee.h,k.i.loadGraph(O)),W=i(Object.keys(k.B)),K=W.next();!K.done;K=W.next())G=K.value,k.i.overrideFile(G,k.B[G]);if(k.B={},k.g.listeners)for(J=i(k.g.listeners),ne=J.next();!ne.done;ne=J.next())ue=ne.value,Ko(k,ue);ye=k.j,k.j={},k.setOptions(ye),Ee.g=0})})}n.reset=function(){return at(this,function g(){var v=this;return L(g,function(k){v.i&&(v.i.reset(),v.m={},v.s={}),k.g=0})})},n.setOptions=function(g,v){var k=this;if(v=v||this.g.options){for(var O=[],W=[],K={},G=i(Object.keys(g)),J=G.next();!J.done;K={K:K.K,L:K.L},J=G.next()){var ne=J.value;ne in this.j&&this.j[ne]===g[ne]||(this.j[ne]=g[ne],J=v[ne],J!==void 0&&(J.onChange&&(K.K=J.onChange,K.L=g[ne],O.push((function(ue){return function(){return at(k,function ye(){var Ee,Se=this;return L(ye,function(be){if(be.g==1)return $(be,ue.K(ue.L),2);Ee=be.h,Ee===!0&&(Se.o=!0),be.g=0})})}})(K))),J.graphOptionXref&&(ne={valueNumber:J.type===1?g[ne]:0,valueBoolean:J.type===0?g[ne]:!1,valueString:J.type===2?g[ne]:""},J=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),J.graphOptionXref),ne),W.push(J))))}(O.length!==0||W.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(W),this.u=(this.u===void 0?[]:this.u).concat(O))}};function qo(g){return at(g,function v(){var k=this,O,W,K,G,J,ne,ue;return L(v,function(ye){switch(ye.g){case 1:if(!k.o)return ye.return();if(!k.u){ye.g=2;break}O=i(k.u),W=O.next();case 3:if(W.done){ye.g=5;break}return K=W.value,$(ye,K(),4);case 4:W=O.next(),ye.g=3;break;case 5:k.u=void 0;case 2:if(k.A){for(G=new k.h.GraphOptionChangeRequestList,J=i(k.A),ne=J.next();!ne.done;ne=J.next())ue=ne.value,G.push_back(ue);k.i.changeOptions(G),G.delete(),k.A=void 0}k.o=!1,ye.g=0}})})}n.initialize=function(){return at(this,function g(){var v=this;return L(g,function(k){return k.g==1?$(k,Pa(v),2):k.g!=3?$(k,Xo(v),3):$(k,qo(v),0)})})};function Hn(g,v){return at(g,function k(){var O=this,W,K;return L(k,function(G){return v in O.F?G.return(O.F[v]):(W=O.locateFile(v,""),K=fetch(W).then(function(J){return J.arrayBuffer()}),O.F[v]=K,G.return(K))})})}n.overrideFile=function(g,v){this.i?this.i.overrideFile(g,v):this.B[g]=v},n.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},n.send=function(g,v){return at(this,function k(){var O=this,W,K,G,J,ne,ue,ye,Ee,Se;return L(k,function(be){switch(be.g){case 1:return O.g.inputs?(W=1e3*(v??performance.now()),$(be,O.C,2)):be.return();case 2:return $(be,O.initialize(),3);case 3:for(K=new O.h.PacketDataList,G=i(Object.keys(g)),J=G.next();!J.done;J=G.next())if(ne=J.value,ue=O.g.inputs[ne]){e:{var pe=O,f=g[ne];switch(ue.type){case"video":var S=pe.m[ue.stream];if(S||(S=new yr(pe.h,pe.D),pe.m[ue.stream]=S),pe=S,pe.l===0&&(pe.l=pe.h.createTexture()),typeof HTMLVideoElement<"u"&&f instanceof HTMLVideoElement){var E=f.videoWidth;S=f.videoHeight}else typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement?(E=f.naturalWidth,S=f.naturalHeight):(E=f.width,S=f.height);S={glName:pe.l,width:E,height:S},E=pe.g,E.canvas.width=S.width,E.canvas.height=S.height,E.activeTexture(E.TEXTURE0),pe.h.bindTexture2d(pe.l),E.texImage2D(E.TEXTURE_2D,0,E.RGBA,E.RGBA,E.UNSIGNED_BYTE,f),pe.h.bindTexture2d(0),pe=S;break e;case"detections":for(S=pe.m[ue.stream],S||(S=new jo(pe.h),pe.m[ue.stream]=S),pe=S,pe.data||(pe.data=new pe.g.DetectionListData),pe.data.reset(f.length),S=0;S<f.length;++S){E=f[S];var I=pe.data,A=I.setBoundingBox,_=S,D=E.T,B=new Kr;ke(B,1,D.Z),ke(B,2,D.$),ke(B,3,D.height),ke(B,4,D.width),ke(B,5,D.rotation),ke(B,6,D.X);var j=D=new Tn;Et(j,1,Me(B,1)),Et(j,2,Me(B,2)),Et(j,3,Me(B,3)),Et(j,4,Me(B,4)),Et(j,5,Me(B,5));var Y=Me(B,6);if(Y!=null&&Y!=null){nn(j.g,48);var Q=j.g,re=Y;Y=0>re,re=Math.abs(re);var se=re>>>0;for(re=Math.floor((re-se)/4294967296),re>>>=0,Y&&(re=~re>>>0,se=(~se>>>0)+1,4294967295<se&&(se=0,re++,4294967295<re&&(re=0))),Wt=se,zt=re,Y=Wt,se=zt;0<se||127<Y;)Q.push(Y&127|128),Y=(Y>>>7|se<<25)>>>0,se>>>=7;Q.push(Y)}if(Xr(B,j),D=pr(D),A.call(I,_,D),E.O)for(I=0;I<E.O.length;++I)B=E.O[I],j=!!B.visibility,A=pe.data,_=A.addNormalizedLandmark,D=S,B=Object.assign(Object.assign({},B),{visibility:j?B.visibility:0}),j=new Gn,ke(j,1,B.x),ke(j,2,B.y),ke(j,3,B.z),B.visibility&&ke(j,4,B.visibility),Q=B=new Tn,Et(Q,1,Me(j,1)),Et(Q,2,Me(j,2)),Et(Q,3,Me(j,3)),Et(Q,4,Me(j,4)),Et(Q,5,Me(j,5)),Xr(j,Q),B=pr(B),_.call(A,D,B);if(E.M)for(I=0;I<E.M.length;++I){if(A=pe.data,_=A.addClassification,D=S,B=E.M[I],j=new yn,ke(j,2,B.Y),B.index&&ke(j,1,B.index),B.label&&ke(j,3,B.label),B.displayName&&ke(j,4,B.displayName),Q=B=new Tn,se=Me(j,1),se!=null&&se!=null)if(nn(Q.g,8),Y=Q.g,0<=se)nn(Y,se);else{for(re=0;9>re;re++)Y.push(se&127|128),se>>=7;Y.push(1)}Et(Q,2,Me(j,2)),Y=Me(j,3),Y!=null&&(Y=Te(Y),nn(Q.g,26),nn(Q.g,Y.length),jt(Q,Q.g.end()),jt(Q,Y)),Y=Me(j,4),Y!=null&&(Y=Te(Y),nn(Q.g,34),nn(Q.g,Y.length),jt(Q,Q.g.end()),jt(Q,Y)),Xr(j,Q),B=pr(B),_.call(A,D,B)}}pe=pe.data;break e;default:pe={}}}switch(ye=pe,Ee=ue.stream,ue.type){case"video":K.pushTexture2d(Object.assign(Object.assign({},ye),{stream:Ee,timestamp:W}));break;case"detections":Se=ye,Se.stream=Ee,Se.timestamp=W,K.pushDetectionList(Se);break;default:throw Error("Unknown input config type: '"+ue.type+"'")}}return O.i.send(K),$(be,O.C,4);case 4:K.delete(),be.g=0}})})};function Ms(g,v,k){return at(g,function O(){var W,K,G,J,ne,ue,ye=this,Ee,Se,be,pe,f,S,E,I;return L(O,function(A){switch(A.g){case 1:if(!k)return A.return(v);for(W={},K=0,G=i(Object.keys(k)),J=G.next();!J.done;J=G.next())ne=J.value,ue=k[ne],typeof ue!="string"&&ue.type==="texture"&&v[ue.stream]!==void 0&&++K;1<K&&(ye.G=!1),Ee=i(Object.keys(k)),J=Ee.next();case 2:if(J.done){A.g=4;break}if(Se=J.value,be=k[Se],typeof be=="string")return E=W,I=Se,$(A,Ls(ye,Se,v[be]),14);if(pe=v[be.stream],be.type==="detection_list"){if(pe){for(var _=pe.getRectList(),D=pe.getLandmarksList(),B=pe.getClassificationsList(),j=[],Y=0;Y<_.size();++Y){var Q=_.get(Y);e:{var re=new Kr;for(Q=new zn(Q);Tt(Q);)switch(Q.i){case 13:var se=et(Q);ke(re,1,se);break;case 21:se=et(Q),ke(re,2,se);break;case 29:se=et(Q),ke(re,3,se);break;case 37:se=et(Q),ke(re,4,se);break;case 45:se=et(Q),ke(re,5,se);break;case 48:se=lr(Q.g),ke(re,6,se);break;default:if(!Ot(re,Q))break e}}re={Z:At(re,1),$:At(re,2),height:At(re,3),width:At(re,4),rotation:At(re,5,0),X:fn(re,6,0)},Q=Hr(Rs(D.get(Y)),Gn).map(Ma);var ie=B.get(Y);e:for(se=new qr,ie=new zn(ie);Tt(ie);)switch(ie.i){case 10:se.addClassification(jr(ie,new yn,Is));break;default:if(!Ot(se,ie))break e}re={T:re,O:Q,M:Da(se)},j.push(re)}_=j}else _=[];W[Se]=_,A.g=7;break}if(be.type==="proto_list"){if(pe){for(_=Array(pe.size()),D=0;D<pe.size();D++)_[D]=pe.get(D);pe.delete()}else _=[];W[Se]=_,A.g=7;break}if(pe===void 0){A.g=3;break}if(be.type==="float_list"){W[Se]=pe,A.g=7;break}if(be.type==="proto"){W[Se]=pe,A.g=7;break}if(be.type!=="texture")throw Error("Unknown output config type: '"+be.type+"'");return f=ye.s[Se],f||(f=new yr(ye.h,ye.D),ye.s[Se]=f),$(A,jn(f,pe,ye.G),13);case 13:S=A.h,W[Se]=S;case 7:be.transform&&W[Se]&&(W[Se]=be.transform(W[Se])),A.g=3;break;case 14:E[I]=A.h;case 3:J=Ee.next(),A.g=2;break;case 4:return A.return(W)}})})}function Ls(g,v,k){return at(g,function O(){var W=this,K;return L(O,function(G){return typeof k=="number"||k instanceof Uint8Array||k instanceof W.h.Uint8BlobList?G.return(k):k instanceof W.h.Texture2dDataOut?(K=W.s[v],K||(K=new yr(W.h,W.D),W.s[v]=K),G.return(jn(K,k,W.G))):G.return(void 0)})})}function Ko(g,v){for(var k=v.name||"$",O=[].concat(u(v.wants)),W=new g.h.StringList,K=i(v.wants),G=K.next();!G.done;G=K.next())W.push_back(G.value);K=g.h.PacketListener.implement({onResults:function(J){for(var ne={},ue=0;ue<v.wants.length;++ue)ne[O[ue]]=J.get(ue);var ye=g.listeners[k];ye&&(g.C=Ms(g,ne,v.outs).then(function(Ee){Ee=ye(Ee);for(var Se=0;Se<v.wants.length;++Se){var be=ne[O[Se]];typeof be=="object"&&be.hasOwnProperty&&be.hasOwnProperty("delete")&&be.delete()}Ee&&(g.C=Ee)}))}}),g.i.attachMultiListener(W,K),W.delete()}n.onResults=function(g,v){this.listeners[v||"$"]=g},te("Solution",Cn),te("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Yo(g){g=As(g);var v=g.getMesh();if(!v)return g;var k=new Float32Array(v.getVertexBufferList());v.getVertexBufferList=function(){return k};var O=new Uint32Array(v.getIndexBufferList());return v.getIndexBufferList=function(){return O},g}var Ba={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(g){return g.map(Yo)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(g){return g.map(function(v){return Hr(Rs(v),Gn).map(Ma)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},Ua=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Va=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Wa=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],za=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Ga=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],ja=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Ps=[].concat(u(Ua),u(Va),u(Wa),u(za),u(Ga),u(ja));function Bs(g){g=g||{},g=Object.assign(Object.assign({},Ba),g),this.g=new Cn(g)}n=Bs.prototype,n.close=function(){return this.g.close(),Promise.resolve()},n.onResults=function(g){this.g.onResults(g)},n.initialize=function(){return at(this,function g(){var v=this;return L(g,function(k){return $(k,v.g.initialize(),0)})})},n.reset=function(){this.g.reset()},n.send=function(g){return at(this,function v(){var k=this;return L(v,function(O){return $(O,k.g.send(g),0)})})},n.setOptions=function(g){this.g.setOptions(g)},te("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),te("FaceMesh",Bs),te("FACEMESH_LIPS",Ua),te("FACEMESH_LEFT_EYE",Va),te("FACEMESH_LEFT_EYEBROW",Wa),te("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),te("FACEMESH_RIGHT_EYE",za),te("FACEMESH_RIGHT_EYEBROW",Ga),te("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),te("FACEMESH_FACE_OVAL",ja),te("FACEMESH_CONTOURS",Ps),te("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),te("matrixDataToMatrix",function(g){for(var v=g.getCols(),k=g.getRows(),O=g.getPackedDataList(),W=[],K=0;K<k;K++)W.push(Array(v));for(K=0;K<k;K++)for(var G=0;G<v;G++){var J=g.getLayout()===1?K*v+G:G*k+K;W[K][G]=O[J]}return W}),te("VERSION","0.4.1633559619")}).call(ml)),ml}var p2=c2();const h2=1e-7,d2=1e-4;class f2{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Bc{refCount(e){return Dt("refCount")}incRef(e){return Dt("incRef")}timerAvailable(){return!0}time(e){return Dt("time")}read(e){return Dt("read")}readSync(e){return Dt("readSync")}readToGPU(e,t){return Dt("readToGPU")}numDataIds(){return Dt("numDataIds")}disposeData(e,t){return Dt("disposeData")}write(e,t,r){return Dt("write")}move(e,t,r,a,s){return Dt("move")}memory(){return Dt("memory")}floatPrecision(){return Dt("floatPrecision")}epsilon(){return this.floatPrecision()===32?h2:d2}dispose(){return Dt("dispose")}}function Dt(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function eo(n,e,t){return Math.max(n,Math.min(e,t))}function ku(n){return n%2===0?n:n+1}function Ha(n,e,t){const r=n[e];n[e]=n[t],n[t]=r}function m2(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e}function R(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function Lt(n,e,t=""){R(qe(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function ga(n){R(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function ia(n,e=[],t=!1){if(e==null&&(e=[]),Array.isArray(n)||wn(n)&&!t)for(let r=0;r<n.length;++r)ia(n[r],e,t);else e.push(n);return e}function ae(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function qe(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function ua(n){return n%1===0}function Ei(n){const e=Math.ceil(Math.sqrt(n));return[e,Math.ceil(n/e)]}function ra(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function yl(n,e=a=>0,t,r=setTimeout){return new Promise((a,s)=>{let o=0;const i=()=>{if(n()){a();return}o++;const u=e(o);if(t!=null&&o>=t){s();return}r(i,u)};i()})}function g2(n,e){let t=1,r=-1;for(let s=0;s<n.length;++s)if(n[s]>=0)t*=n[s];else if(n[s]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${s}`);r=s}else if(n[s]<0)throw Error(`Shapes can not be < 0. Found ${n[s]} at dim ${s}`);if(r===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${n}`);return n}if(t===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);const a=n.slice();return a[r]=e/t,a}function rt(n,e){const t=e.length;return n=n==null?e.map((r,a)=>a):[].concat(n),R(n.every(r=>r>=-t&&r<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),R(n.every(r=>ua(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?t+r:r)}function rr(n,e){const t=[],r=[],a=e!=null&&Array.isArray(e)&&e.length===0,s=e==null||a?null:rt(e,n).sort();let o=0;for(let i=0;i<n.length;++i){if(s!=null){if(s[o]===i&&n[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${n[i]}' is not 1`);(s[o]==null||s[o]>i)&&n[i]===1&&(t.push(n[i]),r.push(i)),s[o]<=i&&o++}n[i]!==1&&(t.push(n[i]),r.push(i))}return{newShape:t,keptDims:r}}function On(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else throw new Error(`Unknown data type ${n}`);return t}function kt(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function y2(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function x2(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function b2(n,e){return!(e==="complex64"||e==="float32"&&n!=="complex64"||e==="int32"&&n!=="float32"&&n!=="complex64"||e==="bool"&&n==="bool")}function wn(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function Ci(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function v2(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function bo(n){return typeof n=="string"||n instanceof String}function w2(n){return typeof n=="boolean"}function S2(n){return typeof n=="number"}function vo(n){return Array.isArray(n)?vo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":S2(n)?"float32":bo(n)?"string":w2(n)?"bool":"float32"}function xl(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Ii(n,e){for(let t=e;t<n;++t)if(n%t===0)return t;return n}function ot(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let r=e-3;r>=0;--r)t[r]=t[r+1]*n[r+1];return t}function Uc(n,e,t,r=!1){const a=new Array;if(e.length===1){const s=e[0]*(r?2:1);for(let o=0;o<s;o++)a[o]=t[n+o]}else{const s=e[0],o=e.slice(1),i=o.reduce((u,l)=>u*l)*(r?2:1);for(let u=0;u<s;u++)a[u]=Uc(n+u*i,o,t,r)}return a}function Ni(n,e,t=!1){if(n.length===0)return e[0];const r=n.reduce((a,s)=>a*s)*(t?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return Uc(0,n,e,t)}function Vc(n,e){const t=er(n,e);for(let r=0;r<t.length;r++)t[r]=1;return t}function er(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function Wc(n){n.forEach(e=>{R(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function $i(n,e,t){if(e===0)return 0;if(e===1)return n[0];let r=n[n.length-1];for(let a=0;a<n.length-1;++a)r+=t[a]*n[a];return r}function Tu(n,e,t){if(e===0)return[];if(e===1)return[n];const r=new Array(e);for(let a=0;a<r.length-1;++a)r[a]=Math.floor(n/t[a]),n-=r[a]*t[a];return r[r.length-1]=n,r}function la(n){return n&&n.then&&typeof n.then=="function"}const bl="tfjsflags";class k2{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=T2,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(H().getBool("IS_TEST")||H().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},this.urlFlags[e]!=null){const a=this.urlFlags[e];H().getBool("IS_TEST")||H().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${a}.`),this.set(e,a)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(la(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);bl in e&&e[bl].split(",").forEach(t=>{const[r,a]=t.split(":");this.urlFlags[r]=C2(r,a)})}}function T2(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...r)=>(E2(e,r[0],r[1]),r.join("="))),e}function E2(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function C2(n,e){if(e=e.toLowerCase(),e==="true"||e==="false")return e==="true";if(`${+e}`===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${n}.`)}function H(){return zc}let zc=null;function I2(n){zc=n}let Qo;function Gc(){if(Qo==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Qo=n}return Qo}function N2(){const n=Gc();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Eu(n,e){const t=N2();if(t.has(n))return t.get(n);{const r=e();return t.set(n,r),t.get(n)}}const jc="Abs",Hc="Acos",Xc="Acosh",Cu="Add",qc="AddN",Kc="All",Yc="Any",Zc="ArgMax",Jc="ArgMin",Qc="Asin",ep="Asinh",tp="Atan",np="Atanh",rp="Atan2",ap="AvgPool",$2="AvgPoolGrad",sp="AvgPool3D",R2="AvgPool3DGrad",op="BatchMatMul",ip="BatchToSpaceND",up="Bincount",lp="BroadcastArgs",Iu="Cast",cp="Ceil",pp="ClipByValue",hp="Complex",dp="ComplexAbs",fp="Concat",mp="Conv2D",gp="Conv2DBackpropFilter",yp="Conv2DBackpropInput",xp="Conv3D",_2="Conv3DBackpropFilterV2",bp="Conv3DBackpropInputV2",vp="Cos",wp="Cosh",Sp="Cumprod",kp="Cumsum",Tp="CropAndResize",Ep="DenseBincount",Cp="DepthToSpace",Ip="DepthwiseConv2dNative",Np="DepthwiseConv2dNativeBackpropFilter",$p="DepthwiseConv2dNativeBackpropInput",Rp="Diag",_p="Dilation2D",Ap="RealDiv",Op="Einsum",Fp="Elu",A2="EluGrad",Dp="Erf",Mp="Equal",Lp="Exp",Pp="ExpandDims",Bp="Expm1",Up="FFT",Vp="Fill",Wp="FlipLeftRight",zp="Floor",Gp="FloorDiv",jp="FusedBatchNorm",Hp="GatherV2",Xp="GatherNd",qp="Greater",Kp="GreaterEqual",Nu="Identity",Yp="IFFT",Zp="Imag",Jp="IsFinite",Qp="IsInf",eh="IsNan",th="LeakyRelu",nh="Less",rh="LessEqual",ah="LinSpace",sh="Log",oh="Log1p",ih="LogicalAnd",uh="LogicalNot",lh="LogicalOr",ch="LRN",O2="LRNGrad",ph="Max",hh="Maximum",dh="MaxPool",F2="MaxPoolGrad",fh="MaxPool3D",D2="MaxPool3DGrad",mh="MaxPoolWithArgmax",gh="Mean",yh="Min",xh="Minimum",bh="MirrorPad",vh="Mod",wh="Multinomial",Sh="Multiply",kh="Neg",Th="NotEqual",Eh="NonMaxSuppressionV3",Ch="NonMaxSuppressionV4",Ih="NonMaxSuppressionV5",Nh="OnesLike",$h="OneHot",Rh="Pack",_h="PadV2",Ah="Pow",Oh="Prelu",Fh="Prod",Dh="RaggedGather",Mh="RaggedTensorToTensor",Lh="Range",Ph="Real",Bh="Reciprocal",Uh="Relu",Vh="Reshape",Wh="ResizeNearestNeighbor",M2="ResizeNearestNeighborGrad",zh="ResizeBilinear",L2="ResizeBilinearGrad",Gh="Relu6",jh="Reverse",Hh="Round",Xh="Rsqrt",qh="ScatterNd",Kh="SearchSorted",Yh="Select",Zh="Selu",Jh="Slice",Qh="Sin",ed="Sinh",td="Sign",nd="Sigmoid",rd="Softplus",ad="Sqrt",sd="Sum",od="SpaceToBatchND",id="SplitV",ud="Softmax",ld="SparseFillEmptyRows",cd="SparseReshape",pd="SparseSegmentMean",hd="SparseSegmentSum",dd="SparseToDense",fd="SquaredDifference",P2="Square",md="StridedSlice",gd="StringNGrams",yd="StringSplit",xd="StringToHashBucketFast",bd="Sub",vd="Tan",wd="Tanh",$u="Tile",Sd="TopK",kd="Transform",Ks="Transpose",Td="Unique",Ed="Unpack",Cd="UnsortedSegmentSum",Id="ZerosLike",Nd="Step",Ri="FromPixels",$d="RotateWithOffset",_i="_FusedMatMul",Ai="FusedConv2D",Oi="FusedDepthwiseConv2D";function ln(...n){H().getBool("IS_TEST")||H().getBool("PROD")||console.warn(...n)}function B2(...n){H().getBool("IS_TEST")||H().getBool("PROD")||console.log(...n)}const to=Eu("kernelRegistry",()=>new Map),U2=Eu("gradRegistry",()=>new Map);function Fi(n,e){const t=Rd(n,e);return to.get(t)}function vl(n){return U2.get(n)}function wl(n){const e=to.entries(),t=[];for(;;){const{done:r,value:a}=e.next();if(r)break;const[s,o]=a,[i]=s.split("_");i===n&&t.push(o)}return t}function V2(n){const{kernelName:e,backendName:t}=n,r=Rd(e,t);to.has(r)&&ln(`The kernel '${e}' for backend '${t}' is already registered`),to.set(r,n)}function Rd(n,e){return`${e}_${n}`}var ei,Sl;function W2(){if(Sl)return ei;Sl=1,ei=e;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function e(C,q,ee){this.low=C|0,this.high=q|0,this.unsigned=!!ee}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0});function t(C){return(C&&C.__isLong__)===!0}e.isLong=t;var r={},a={};function s(C,q){var ee,te,le;return q?(C>>>=0,(le=0<=C&&C<256)&&(te=a[C],te)?te:(ee=i(C,(C|0)<0?-1:0,!0),le&&(a[C]=ee),ee)):(C|=0,(le=-128<=C&&C<128)&&(te=r[C],te)?te:(ee=i(C,C<0?-1:0,!1),le&&(r[C]=ee),ee))}e.fromInt=s;function o(C,q){if(isNaN(C))return q?T:x;if(q){if(C<0)return T;if(C>=m)return X}else{if(C<=-y)return z;if(C+1>=y)return U}return C<0?o(-C,q).neg():i(C%d|0,C/d|0,q)}e.fromNumber=o;function i(C,q,ee){return new e(C,q,ee)}e.fromBits=i;var u=Math.pow;function l(C,q,ee){if(C.length===0)throw Error("empty string");if(C==="NaN"||C==="Infinity"||C==="+Infinity"||C==="-Infinity")return x;if(typeof q=="number"?(ee=q,q=!1):q=!!q,ee=ee||10,ee<2||36<ee)throw RangeError("radix");var te;if((te=C.indexOf("-"))>0)throw Error("interior hyphen");if(te===0)return l(C.substring(1),q,ee).neg();for(var le=o(u(ee,8)),de=x,fe=0;fe<C.length;fe+=8){var Re=Math.min(8,C.length-fe),ge=parseInt(C.substring(fe,fe+Re),ee);if(Re<8){var Te=o(u(ee,Re));de=de.mul(Te).add(o(ge))}else de=de.mul(le),de=de.add(o(ge))}return de.unsigned=q,de}e.fromString=l;function c(C,q){return typeof C=="number"?o(C,q):typeof C=="string"?l(C,q):i(C.low,C.high,typeof q=="boolean"?q:C.unsigned)}e.fromValue=c;var p=65536,h=1<<24,d=p*p,m=d*d,y=m/2,b=s(h),x=s(0);e.ZERO=x;var T=s(0,!0);e.UZERO=T;var $=s(1);e.ONE=$;var F=s(1,!0);e.UONE=F;var M=s(-1);e.NEG_ONE=M;var U=i(-1,2147483647,!1);e.MAX_VALUE=U;var X=i(-1,-1,!0);e.MAX_UNSIGNED_VALUE=X;var z=i(0,-2147483648,!1);e.MIN_VALUE=z;var L=e.prototype;return L.toInt=function(){return this.unsigned?this.low>>>0:this.low},L.toNumber=function(){return this.unsigned?(this.high>>>0)*d+(this.low>>>0):this.high*d+(this.low>>>0)},L.toString=function(C){if(C=C||10,C<2||36<C)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(z)){var q=o(C),ee=this.div(q),te=ee.mul(q).sub(this);return ee.toString(C)+te.toInt().toString(C)}else return"-"+this.neg().toString(C);for(var le=o(u(C,6),this.unsigned),de=this,fe="";;){var Re=de.div(le),ge=de.sub(Re.mul(le)).toInt()>>>0,Te=ge.toString(C);if(de=Re,de.isZero())return Te+fe;for(;Te.length<6;)Te="0"+Te;fe=""+Te+fe}},L.getHighBits=function(){return this.high},L.getHighBitsUnsigned=function(){return this.high>>>0},L.getLowBits=function(){return this.low},L.getLowBitsUnsigned=function(){return this.low>>>0},L.getNumBitsAbs=function(){if(this.isNegative())return this.eq(z)?64:this.neg().getNumBitsAbs();for(var C=this.high!=0?this.high:this.low,q=31;q>0&&(C&1<<q)==0;q--);return this.high!=0?q+33:q+1},L.isZero=function(){return this.high===0&&this.low===0},L.eqz=L.isZero,L.isNegative=function(){return!this.unsigned&&this.high<0},L.isPositive=function(){return this.unsigned||this.high>=0},L.isOdd=function(){return(this.low&1)===1},L.isEven=function(){return(this.low&1)===0},L.equals=function(C){return t(C)||(C=c(C)),this.unsigned!==C.unsigned&&this.high>>>31===1&&C.high>>>31===1?!1:this.high===C.high&&this.low===C.low},L.eq=L.equals,L.notEquals=function(C){return!this.eq(C)},L.neq=L.notEquals,L.ne=L.notEquals,L.lessThan=function(C){return this.comp(C)<0},L.lt=L.lessThan,L.lessThanOrEqual=function(C){return this.comp(C)<=0},L.lte=L.lessThanOrEqual,L.le=L.lessThanOrEqual,L.greaterThan=function(C){return this.comp(C)>0},L.gt=L.greaterThan,L.greaterThanOrEqual=function(C){return this.comp(C)>=0},L.gte=L.greaterThanOrEqual,L.ge=L.greaterThanOrEqual,L.compare=function(C){if(t(C)||(C=c(C)),this.eq(C))return 0;var q=this.isNegative(),ee=C.isNegative();return q&&!ee?-1:!q&&ee?1:this.unsigned?C.high>>>0>this.high>>>0||C.high===this.high&&C.low>>>0>this.low>>>0?-1:1:this.sub(C).isNegative()?-1:1},L.comp=L.compare,L.negate=function(){return!this.unsigned&&this.eq(z)?z:this.not().add($)},L.neg=L.negate,L.add=function(C){t(C)||(C=c(C));var q=this.high>>>16,ee=this.high&65535,te=this.low>>>16,le=this.low&65535,de=C.high>>>16,fe=C.high&65535,Re=C.low>>>16,ge=C.low&65535,Te=0,We=0,Ne=0,Ye=0;return Ye+=le+ge,Ne+=Ye>>>16,Ye&=65535,Ne+=te+Re,We+=Ne>>>16,Ne&=65535,We+=ee+fe,Te+=We>>>16,We&=65535,Te+=q+de,Te&=65535,i(Ne<<16|Ye,Te<<16|We,this.unsigned)},L.subtract=function(C){return t(C)||(C=c(C)),this.add(C.neg())},L.sub=L.subtract,L.multiply=function(C){if(this.isZero())return x;if(t(C)||(C=c(C)),n){var q=n.mul(this.low,this.high,C.low,C.high);return i(q,n.get_high(),this.unsigned)}if(C.isZero())return x;if(this.eq(z))return C.isOdd()?z:x;if(C.eq(z))return this.isOdd()?z:x;if(this.isNegative())return C.isNegative()?this.neg().mul(C.neg()):this.neg().mul(C).neg();if(C.isNegative())return this.mul(C.neg()).neg();if(this.lt(b)&&C.lt(b))return o(this.toNumber()*C.toNumber(),this.unsigned);var ee=this.high>>>16,te=this.high&65535,le=this.low>>>16,de=this.low&65535,fe=C.high>>>16,Re=C.high&65535,ge=C.low>>>16,Te=C.low&65535,We=0,Ne=0,Ye=0,Vt=0;return Vt+=de*Te,Ye+=Vt>>>16,Vt&=65535,Ye+=le*Te,Ne+=Ye>>>16,Ye&=65535,Ye+=de*ge,Ne+=Ye>>>16,Ye&=65535,Ne+=te*Te,We+=Ne>>>16,Ne&=65535,Ne+=le*ge,We+=Ne>>>16,Ne&=65535,Ne+=de*Re,We+=Ne>>>16,Ne&=65535,We+=ee*Te+te*ge+le*Re+de*fe,We&=65535,i(Ye<<16|Vt,We<<16|Ne,this.unsigned)},L.mul=L.multiply,L.divide=function(C){if(t(C)||(C=c(C)),C.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&C.low===-1&&C.high===-1)return this;var q=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,C.low,C.high);return i(q,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?T:x;var ee,te,le;if(this.unsigned){if(C.unsigned||(C=C.toUnsigned()),C.gt(this))return T;if(C.gt(this.shru(1)))return F;le=T}else{if(this.eq(z)){if(C.eq($)||C.eq(M))return z;if(C.eq(z))return $;var de=this.shr(1);return ee=de.div(C).shl(1),ee.eq(x)?C.isNegative()?$:M:(te=this.sub(C.mul(ee)),le=ee.add(te.div(C)),le)}else if(C.eq(z))return this.unsigned?T:x;if(this.isNegative())return C.isNegative()?this.neg().div(C.neg()):this.neg().div(C).neg();if(C.isNegative())return this.div(C.neg()).neg();le=x}for(te=this;te.gte(C);){ee=Math.max(1,Math.floor(te.toNumber()/C.toNumber()));for(var fe=Math.ceil(Math.log(ee)/Math.LN2),Re=fe<=48?1:u(2,fe-48),ge=o(ee),Te=ge.mul(C);Te.isNegative()||Te.gt(te);)ee-=Re,ge=o(ee,this.unsigned),Te=ge.mul(C);ge.isZero()&&(ge=$),le=le.add(ge),te=te.sub(Te)}return le},L.div=L.divide,L.modulo=function(C){if(t(C)||(C=c(C)),n){var q=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,C.low,C.high);return i(q,n.get_high(),this.unsigned)}return this.sub(this.div(C).mul(C))},L.mod=L.modulo,L.rem=L.modulo,L.not=function(){return i(~this.low,~this.high,this.unsigned)},L.and=function(C){return t(C)||(C=c(C)),i(this.low&C.low,this.high&C.high,this.unsigned)},L.or=function(C){return t(C)||(C=c(C)),i(this.low|C.low,this.high|C.high,this.unsigned)},L.xor=function(C){return t(C)||(C=c(C)),i(this.low^C.low,this.high^C.high,this.unsigned)},L.shiftLeft=function(C){return t(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?i(this.low<<C,this.high<<C|this.low>>>32-C,this.unsigned):i(0,this.low<<C-32,this.unsigned)},L.shl=L.shiftLeft,L.shiftRight=function(C){return t(C)&&(C=C.toInt()),(C&=63)===0?this:C<32?i(this.low>>>C|this.high<<32-C,this.high>>C,this.unsigned):i(this.high>>C-32,this.high>=0?0:-1,this.unsigned)},L.shr=L.shiftRight,L.shiftRightUnsigned=function(C){if(t(C)&&(C=C.toInt()),C&=63,C===0)return this;var q=this.high;if(C<32){var ee=this.low;return i(ee>>>C|q<<32-C,q>>>C,this.unsigned)}else return C===32?i(q,0,this.unsigned):i(q>>>C-32,0,this.unsigned)},L.shru=L.shiftRightUnsigned,L.shr_u=L.shiftRightUnsigned,L.toSigned=function(){return this.unsigned?i(this.low,this.high,!1):this},L.toUnsigned=function(){return this.unsigned?this:i(this.low,this.high,!0)},L.toBytes=function(C){return C?this.toBytesLE():this.toBytesBE()},L.toBytesLE=function(){var C=this.high,q=this.low;return[q&255,q>>>8&255,q>>>16&255,q>>>24,C&255,C>>>8&255,C>>>16&255,C>>>24]},L.toBytesBE=function(){var C=this.high,q=this.low;return[C>>>24,C>>>16&255,C>>>8&255,C&255,q>>>24,q>>>16&255,q>>>8&255,q&255]},e.fromBytes=function(C,q,ee){return ee?e.fromBytesLE(C,q):e.fromBytesBE(C,q)},e.fromBytesLE=function(C,q){return new e(C[0]|C[1]<<8|C[2]<<16|C[3]<<24,C[4]|C[5]<<8|C[6]<<16|C[7]<<24,q)},e.fromBytesBE=function(C,q){return new e(C[4]<<24|C[5]<<16|C[6]<<8|C[7],C[0]<<24|C[1]<<16|C[2]<<8|C[3],q)},ei}var _d=W2();const Ad=s2(_d),z2=l2({__proto__:null,default:Ad},[_d]);const kr=Ad||z2;function wo(n){return kr.fromString(n,!0,16)}const Od=wo("c3a5c85c97cb3127"),Sr=wo("b492b66fbe98f273"),dt=wo("9ae16a3b2f90404f");function Di(n){return n.xor(n.shru(47))}function Fd(n,e,t){const r=n.slice(e,e+t);return kr.fromBytes(Array.from(r),!0,!0)}function Le(n,e){return Fd(n,e,8)}function kl(n,e){return Fd(n,e,4)}function nt(n,e){return e===0?n:n.shru(e).or(n.shl(64-e))}function Zn(n,e,t=wo("9ddfea08eb382d69")){let r=n.xor(e).mul(t);r=r.xor(r.shru(47));let a=e.xor(r).mul(t);return a=a.xor(a.shru(47)),a=a.mul(t),a}function G2(n,e,t,r,a,s){a=a.add(n),s=nt(s.add(a).add(r),21);const o=a;return a=a.add(e),a=a.add(t),s=s.add(nt(a,44)),[a.add(r),s.add(o)]}function Vs(n,e,t,r){return G2(Le(n,e),Le(n,e+8),Le(n,e+16),Le(n,e+24),t,r)}function j2(n,e=n.length){if(e>=8){const t=dt.add(e*2),r=Le(n,0).add(dt),a=Le(n,e-8),s=nt(a,37).mul(t).add(r),o=nt(r,25).add(a).mul(t);return Zn(s,o,t)}if(e>=4){const t=dt.add(e*2),r=kl(n,0);return Zn(r.shl(3).add(e),kl(n,e-4),t)}if(e>0){const t=n[0],r=n[e>>1],a=n[e-1],s=t+(r<<8),o=e+(a<<2);return Di(dt.mul(s).xor(Od.mul(o))).mul(dt)}return dt}function H2(n,e=n.length){const t=dt.add(e*2),r=Le(n,0).mul(Sr),a=Le(n,8),s=Le(n,e-8).mul(t),o=Le(n,e-16).mul(dt);return Zn(nt(r.add(a),43).add(nt(s,30)).add(o),r.add(nt(a.add(dt),18)).add(s),t)}function X2(n,e=n.length){const t=dt.add(e*2),r=Le(n,0).mul(dt),a=Le(n,8),s=Le(n,e-8).mul(t),o=Le(n,e-16).mul(dt),i=nt(r.add(a),43).add(nt(s,30)).add(o),u=Zn(i,r.add(nt(a.add(dt),18)).add(s),t),l=Le(n,16).mul(t),c=Le(n,24),p=i.add(Le(n,e-32)).mul(t),h=u.add(Le(n,e-24)).mul(t);return Zn(nt(l.add(c),43).add(nt(p,30)).add(h),l.add(nt(c.add(r),18)).add(p),t)}function q2(n,e=n.length){const t=kr.fromNumber(81,!0);if(e<=32)return e<=16?j2(n,e):H2(n,e);if(e<=64)return X2(n,e);let r=t,a=t.mul(Sr).add(113),s=Di(a.mul(dt).add(113)).mul(dt),o=[kr.UZERO,kr.UZERO],i=[kr.UZERO,kr.UZERO];r=r.mul(dt).add(Le(n,0));let u=0;const l=(e-1>>6)*64,c=l+(e-1&63)-63;do r=nt(r.add(a).add(o[0]).add(Le(n,u+8)),37).mul(Sr),a=nt(a.add(o[1]).add(Le(n,u+48)),42).mul(Sr),r=r.xor(i[1]),a=a.add(o[0]).add(Le(n,u+40)),s=nt(s.add(i[0]),33).mul(Sr),o=Vs(n,u,o[1].mul(Sr),r.add(i[0])),i=Vs(n,u+32,s.add(i[1]),a.add(Le(n,u+16))),[s,r]=[r,s],u+=64;while(u!==l);const p=Sr.add(s.and(255).shl(1));return u=c,i[0]=i[0].add(e-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=nt(r.add(a).add(o[0]).add(Le(n,u+8)),37).mul(p),a=nt(a.add(o[1]).add(Le(n,u+48)),42).mul(p),r=r.xor(i[1].mul(9)),a=a.add(o[0].mul(9).add(Le(n,u+40))),s=nt(s.add(i[0]),33).mul(p),o=Vs(n,u,o[1].mul(p),r.add(i[0])),i=Vs(n,u+32,s.add(i[1]),a.add(Le(n,u+16))),[s,r]=[r,s],Zn(Zn(o[0],i[0],p).add(Di(a).mul(Od)).add(s),Zn(o[1],i[1],p).add(r),p)}function ya(n,e){return e==="string"?Nr(n):So([n],e)}function K2(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function So(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=ia(n)),H().getBool("DEBUG")&&y2(n,e),K2(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let r=0;r<t.length;++r)Math.round(n[r])!==0&&(t[r]=1);return t}else throw new Error(`Unknown data type ${e}`)}function an(){return H().platform.now()}function Nr(n,e="utf-8"){return e=e||"utf-8",H().platform.encode(n,e)}function ca(n,e="utf-8"){return e=e||"utf-8",H().platform.decode(n,e)}class Y2{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new J2)}profileKernel(e,t,r){let a;const s=()=>{a=r()};let o;const i=an();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(s);else{s();for(const u of a)u.dataSync();o=Promise.resolve({kernelMs:an()-i})}if(H().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<a.length;u++){const l=a[u];l.data().then(c=>{Z2(c,l.dtype,e)})}return{kernelName:e,outputs:a,inputs:t,timeMs:o.then(u=>u.kernelMs),extraInfo:o.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:r,timeMs:a,inputs:s,extraInfo:o}=e;r.forEach(i=>{Promise.all([i.data(),a,o]).then(u=>{this.logger.logKernelProfile(t,i,u[0],u[1],s,u[2])})})}}function Z2(n,e,t){if(e!=="float32")return!1;for(let r=0;r<n.length;r++){const a=n[r];if(isNaN(a)||!isFinite(a))return console.warn(`Found ${a} in the result of '${t}'`),!0}return!1}class J2{logKernelProfile(e,t,r,a,s,o){const i=typeof a=="number"?ra(`${a}ms`,9):a.error,u=ra(e,25),l=t.rank,c=t.size,p=ra(t.shape.toString(),14);let h="";for(const d in s){const m=s[d];if(m!=null){const y=m.shape||t.shape,b=y.length;h+=`${d}: ${b}D ${b>0?y:""} `}}console.log(`%c${u}	%c${i}	%c${l}D ${p}	%c${c}	%c${h}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function Q2(n,e,t){const r={},a={};for(let u=0;u<e.length;u++)r[e[u].id]=!0;for(let u=0;u<n.length;u++){const l=n[u],c=l.inputs;for(const p in c){const h=c[p];let d=!1;for(let m=0;m<e.length;m++)if(r[h.id]){l.outputs.forEach(y=>r[y.id]=!0),d=!0,a[l.id]=!0;break}if(d)break}}const s={};s[t.id]=!0;const o={};for(let u=n.length-1;u>=0;u--){const l=n[u],c=l.inputs;for(let p=0;p<l.outputs.length;p++)if(s[l.outputs[p].id]){for(const h in c)s[c[h].id]=!0,o[l.id]=!0;break}}const i=[];for(let u=0;u<n.length;u++){const l=n[u];if(a[l.id]&&o[l.id]){const c={};for(const h in l.inputs){const d=l.inputs[h];r[d.id]&&(c[h]=d)}const p=Object.assign({},l);p.inputs=c,p.outputs=l.outputs,i.push(p)}}return i}function eg(n,e,t,r){for(let a=e.length-1;a>=0;a--){const s=e[a],o=[];if(s.outputs.forEach(u=>{const l=n[u.id];l!=null?o.push(l):o.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const i=s.gradient(o);for(const u in s.inputs){if(!(u in i))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(i)}.`);const l=t(()=>i[u]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${l.dtype}'`);const c=s.inputs[u];if(!qe(l.shape,c.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${u}' has shape '${l.shape}', which does not match the shape of the input '${c.shape}'`);if(n[c.id]==null)n[c.id]=l;else{const p=n[c.id];n[c.id]=r(p,l),p.dispose()}}}}const Tl=20,Xa=3,ti=7;function tg(n,e,t,r){const a=ot(e),s=ng(n,e,t,a),o=e.length,i=Ys(n,e,t,a,s),u=["Tensor"];return r&&(u.push(`  dtype: ${t}`),u.push(`  rank: ${o}`),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(i.map(l=>"    "+l).join(`
`)),u.join(`
`)}function ng(n,e,t,r){const a=ae(e),s=r[r.length-1],o=new Array(s).fill(0),i=e.length,u=t==="complex64"?Ya(n):n;if(i>1)for(let l=0;l<a/s;l++){const c=l*s;for(let p=0;p<s;p++)o[p]=Math.max(o[p],Ka(u[c+p],0,t).length)}return o}function Ka(n,e,t){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(ti))} + ${parseFloat(n[1].toFixed(ti))}j`:bo(n)?r=`'${n}'`:t==="bool"?r=Dd(n):r=parseFloat(n.toFixed(ti)).toString(),ra(r,e)}function Dd(n){return n===0?"false":"true"}function Ys(n,e,t,r,a,s=!0){const o=t==="complex64"?2:1,i=e[0],u=e.length;if(u===0){if(t==="complex64"){const y=Ya(n);return[Ka(y[0],0,t)]}return t==="bool"?[Dd(n[0])]:[n[0].toString()]}if(u===1){if(i>Tl){const y=Xa*o;let b=Array.from(n.slice(0,y)),x=Array.from(n.slice((i-Xa)*o,i*o));return t==="complex64"&&(b=Ya(b),x=Ya(x)),["["+b.map((T,$)=>Ka(T,a[$],t)).join(", ")+", ..., "+x.map((T,$)=>Ka(T,a[i-Xa+$],t)).join(", ")+"]"]}return["["+(t==="complex64"?Ya(n):Array.from(n)).map((y,b)=>Ka(y,a[b],t)).join(", ")+"]"]}const l=e.slice(1),c=r.slice(1),p=r[0]*o,h=[];if(i>Tl){for(let y=0;y<Xa;y++){const b=y*p,x=b+p;h.push(...Ys(n.slice(b,x),l,t,c,a,!1))}h.push("...");for(let y=i-Xa;y<i;y++){const b=y*p,x=b+p;h.push(...Ys(n.slice(b,x),l,t,c,a,y===i-1))}}else for(let y=0;y<i;y++){const b=y*p,x=b+p;h.push(...Ys(n.slice(b,x),l,t,c,a,y===i-1))}const d=u===2?",":"";h[0]="["+h[0]+d;for(let y=1;y<h.length-1;y++)h[y]=" "+h[y]+d;let m=`,
`;for(let y=2;y<u;y++)m+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(s?"":m),h}function Ya(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}class ts{constructor(e,t,r){if(this.dtype=t,this.shape=e.slice(),this.size=ae(e),r!=null){const a=r.length;R(a===this.size,()=>`Length of values '${a}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||kt(t,this.size),this.strides=ot(e)}set(e,...t){t.length===0&&(t=[0]),R(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const r=this.locToIndex(t);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const a of e){if(a<0||a>=this.shape[t]){const s=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(s)}t++}let r=e[e.length-1];for(let a=0;a<e.length-1;++a)r+=this.strides[a]*e[a];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return sn().makeTensor(this.values,this.shape,this.dtype)}}let sn=null,ta=null;function rg(n){sn=n}function ag(n){ta=n}class Ge{constructor(e,t,r,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=ae(e),this.strides=ot(e),this.dataId=r,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return ta.buffer(this.shape,this.dtype,e)}bufferSync(){return ta.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return Ni(this.shape,e,this.dtype==="complex64")}arraySync(){return Ni(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=sn().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(r=>ca(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),sn().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=sn().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>ca(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await sn().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(sn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return ta.print(this,e)}clone(){return this.throwIfDisposed(),ta.clone(this)}toString(e=!1){const t=this.dataSync();return tg(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),ta.cast(this,e)}variable(e=!0,t,r){return this.throwIfDisposed(),sn().makeVariable(this,e,t,r)}}Object.defineProperty(Ge,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function sg(){return Eu("Tensor",()=>Ge)}sg();class Mi extends Ge{constructor(e,t,r,a){super(e.shape,e.dtype,e.dataId,a),this.trainable=t,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!qe(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);sn().disposeTensor(this),this.dataId=e.dataId,sn().incRef(this,null)}dispose(){sn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Mi,Symbol.hasInstance,{value:n=>n instanceof Ge&&n.assign!=null&&n.assign instanceof Function});var El;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(El||(El={}));var Li;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Li||(Li={}));var Pi;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Pi||(Pi={}));var Bi;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Bi||(Bi={}));var Ui;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Ui||(Ui={}));const og={float32:Bi,int32:Li,bool:Pi,complex64:Ui};function Sn(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return og[n][e]}function Ru(n){return Sn(n,"int32")}function Ke(n,e){if(n.dtype===e.dtype)return[n,e];const t=Sn(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function ig(n,e){R(n.dtype===e.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${e.dtype}) input must match`)}function Md(n){const e=[];return Ld(n,e,new Set),e}function Ld(n,e,t){if(n==null)return;if(n instanceof Ge){e.push(n);return}if(!ug(n))return;const r=n;for(const a in r){const s=r[a];t.has(s)||(t.add(s),Ld(s,e,t))}}function ug(n){return Array.isArray(n)||typeof n=="object"}function ni(n){return n.kernelName!=null}class Cl{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class pa{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Cl}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,r=1){return e in this.registryFactory?(ln(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:r}=this.initializeBackend(e);if(!(r?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Y2(this.backendInstance),!0}setupRegisteredKernels(){wl(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){wl(e).forEach(t=>{t.disposeFunc!=null&&t.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=t.factory();if(r&&!(r instanceof Bc)&&typeof r.then=="function"){const a=++this.pendingBackendInitId,s=r.then(o=>a<this.pendingBackendInitId?!1:(this.registry[e]=o,this.pendingBackendInit=null,!0)).catch(o=>(a<this.pendingBackendInitId||(this.pendingBackendInit=null,ln(`Initialization of backend ${e} failed`),ln(o.stack||o.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return ln(`Initialization of backend ${e} failed`),ln(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t],{success:a,asyncInit:s}=this.initializeBackend(r);if(s||a)return{name:r,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const r=this.state.tensorInfo.get(t),a=r.backend,s=this.readSync(t),o=a.refCount(t);a.disposeData(t,!0),r.backend=e,e.move(t,s,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let r=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let a;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(a),()=>(a=t(),a instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),a))}scopedRun(e,t,r){e();try{const a=r();return t(),a}catch(a){throw t(),a}}nextTensorId(){return pa.nextTensorId++}nextVariableId(){return pa.nextVariableId++}clone(e){const t=V.runKernel(Nu,{x:e}),r={x:e},a=o=>({x:()=>{const i="float32",u={x:o},l={dtype:i};return V.runKernel(Iu,u,l)}}),s=[];return this.addTapeNode(this.state.activeScope.name,r,[t],a,s,{}),t}runKernel(e,t,r){if(this.backendName==null&&this.backend,Fi(e,this.backendName)==null)throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,r){const a=this.backend.numDataIds();let s=0;r.forEach(u=>{s+=u.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=a-t-s-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let t,r=[];const a=this.isTapeOn(),s=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let u;const l=ni(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(ni(e)){const{kernelName:m,inputs:y,attrs:b}=e;this.backendName==null&&this.backend;const x=Fi(m,this.backendName);R(x!=null,()=>`Cannot find registered kernel '${m}' for backend '${this.backendName}'`),i=()=>{const T=this.backend.numDataIds();u=x.kernelFunc({inputs:y,attrs:b,backend:this.backend});const $=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(m,T,$);const F=$.map(M=>M.rank!=null?M:this.makeTensorFromTensorInfo(M));if(a){const M=this.getTensorsForGradient(m,y,F);r=this.saveTensorsForBackwardMode(M)}return F}}else{const{forwardFunc:m}=e,y=b=>{a&&(r=b.map(x=>this.keep(this.clone(x))))};i=()=>{const b=this.backend.numDataIds();u=this.tidy(()=>m(this.backend,y));const x=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,b,x),x}}const{inputs:c,attrs:p}=e,h=ni(e)?null:e.backwardsFunc;let d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=i():(d=this.profiler.profileKernel(l,c,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),t=d.outputs)}),a&&this.addTapeNode(l,c,t,h,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(m=>c[m]!=null?c[m].shape:null),outputShapes:t.map(m=>m.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(u)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(t=>this.keep(this.clone(t)))}getTensorsForGradient(e,t,r){const a=vl(e);if(a!=null){const s=a.inputsToSave||[],o=a.outputsToSave||[];let i;a.saveAllInputs?(R(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(t).map(l=>t[l])):i=s.map(l=>t[l]);const u=r.filter((l,c)=>o[c]);return i.concat(u)}return[]}makeTensor(e,t,r,a){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",a=a||this.backend;let s=e;r==="string"&&bo(e[0])&&(s=e.map(u=>Nr(u)));const o=a.write(s,t,r),i=new Ge(t,r,o,this.nextTensorId());if(this.trackTensor(i,a),r==="string"){const u=this.state.tensorInfo.get(o),l=v2(s);this.state.numBytes+=l-u.bytes,u.bytes=l}return i}makeTensorFromDataId(e,t,r,a){r=r||"float32";const s={dataId:e,shape:t,dtype:r};return this.makeTensorFromTensorInfo(s,a)}makeTensorFromTensorInfo(e,t){const{dataId:r,shape:a,dtype:s}=e,o=new Ge(a,s,r,this.nextTensorId());return this.trackTensor(o,t),o}makeVariable(e,t=!0,r,a){r=r||this.nextVariableId().toString(),a!=null&&a!==e.dtype&&(e=e.cast(a));const s=new Mi(e,t,r,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*Ci(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof Mi||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*Ci(e.dtype);this.state.numBytes-=r}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(a=>a.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const a of this.state.activeProfile.kernels)a.kernelTimeMs=await a.kernelTimeMs,a.extraInfo=await a.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,r,a,s,o){const i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:s},u=vl(e);u!=null&&(a=u.gradFunc),a!=null&&(i.gradient=l=>(l=l.map((c,p)=>{if(c==null){const h=r[p],d=er(h.size,h.dtype);return this.makeTensor(d,h.shape,h.dtype)}return c}),a(l.length>1?l:l[0],s,o))),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Md(e),r=new Set(t.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){const o=this.state.activeScope.track[s];!o.kept&&!r.has(o.id)&&o.dispose()}const a=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(s=>{!s.kept&&s.scopeId===a.id&&this.track(s)})}gradients(e,t,r,a=!1){if(R(t.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));R(s instanceof Ge,()=>"The result y returned by f() must be a tensor.");const o=Q2(this.state.activeTape,t,s);if(!a&&o.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[s.id]=r??lg(s.shape),eg(i,o,l=>this.tidy(l),cg);const u=t.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const c of l.saved)c.dispose()}),this.state.activeTape=null),{value:s,grads:u}})}customGrad(e){return R(xl(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{R(t.every(i=>i instanceof Ge),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const a={};t.forEach((i,u)=>{a[u]=i});const s=(i,u)=>(r=e(...t,u),R(r.value instanceof Ge,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),R(xl(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(i,u)=>{const l=r.gradFunc(i,u),c=Array.isArray(l)?l:[l];R(c.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),R(c.every(h=>h instanceof Ge),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return c.forEach((h,d)=>{p[d]=()=>h}),p};return this.runKernelFunc({forwardFunc:s,backwardsFunc:o,inputs:a})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=an(),r=await this.backend.time(e);return r.wallMs=an()-t,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Cl;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}pa.nextTensorId=0;pa.nextVariableId=0;function lg(n){const e=Vc(ae(n),"float32");return V.makeTensor(e,n,"float32")}function Pd(){const n=Gc();if(n._tfengine==null){const e=new k2(n);n._tfengine=new pa(e)}return I2(n._tfengine.ENV),rg(()=>n._tfengine),n._tfengine}const V=Pd();function cg(n,e){const t={a:n,b:e};return V.runKernel(Cu,t)}function pg(){return typeof navigator<"u"&&navigator!=null}function Bd(n){if(n||pg()){if(n||(n=navigator),n.product==="ReactNative")return!0;const e=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!e){const t=n;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Ud(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const $t=H();$t.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});$t.registerFlag("IS_BROWSER",()=>Ud());$t.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");$t.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));$t.registerFlag("PROD",()=>!1);$t.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>$t.getBool("DEBUG"));$t.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);$t.registerFlag("IS_TEST",()=>!1);$t.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);$t.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);$t.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);$t.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);$t.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function ar(n,e){let t=n;if(wn(n))return e==="string"?[]:[n.length];if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(t)||wn(t)&&e!=="string";)r.push(t.length),t=t[0];return Array.isArray(n)&&H().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Vd(n,r,[]),r}function Vd(n,e,t){if(t=t||[],!Array.isArray(n)&&!wn(n)){R(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}R(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),R(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const r=e.slice(1);for(let a=0;a<n.length;++a)Vd(n[a],r,t.concat(a))}function Il(n,e,t,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${r}' must be ${n} tensor, but got ${e} tensor`)}}function N(n,e,t,r="numeric"){if(n instanceof Ge)return Il(r,n.dtype,e,t),n;let a=vo(n);if(a!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),Il(r,a,e,t),n==null||!wn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const i=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${i}'`)}const s=ar(n,a);!wn(n)&&!Array.isArray(n)&&(n=[n]);const o=a!=="string"?So(n,a):ia(n,[],!0);return V.makeTensor(o,s,a)}function no(n,e,t,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((a,s)=>N(a,`${e}[${s}]`,t,r))}const Wd="__op";function P(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const r=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+Wd;const a=(...s)=>{V.startScope(t);try{const o=r(...s);return la(o)&&console.error("Cannot return a Promise inside of tidy."),V.endScope(o),o}catch(o){throw V.endScope(null),o}};return Object.defineProperty(a,"name",{value:t,configurable:!0}),a}function hg(n,e){const t=N(n,"real","complex"),r=N(e,"imag","complex");Lt(t.shape,r.shape,`real and imag shapes, ${t.shape} and ${r.shape}, must match in call to tf.complex().`);const a={real:t,imag:r};return V.runKernel(hp,a)}const tr=P({complex_:hg});function sr(n,e,t,r){if(r==null&&(r=vo(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!wn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Wc(e);const a=ae(e),s=ae(t);R(a===s,()=>`Based on the provided shape, [${e}], the tensor should have ${a} values but has ${s}`);for(let o=0;o<t.length;++o){const i=t[o],u=o===t.length-1?i!==ae(e.slice(o)):!0;R(t[o]===e[o]||!u,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!wn(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=r!=="string"?So(n,r):ia(n,[],!0),V.makeTensor(n,e,r)}function vn(n,e,t){const r=ar(n,t);return sr(n,e,r,t)}const Vi={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};const ro=4;async function dg(n,e){const t=[],r=[],a=Array.isArray(n)?n.map(o=>o.name):Object.keys(n);for(let o=0;o<a.length;++o){const i=a[o],u=Array.isArray(n)?n[o].tensor:n[i];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${u.dtype}`);const l={name:i,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const c=new Promise(async p=>{const h=await u.bytes(),d=h.reduce((b,x)=>b+x.length,0)+ro*h.length,m=new Uint8Array(d);let y=0;for(let b=0;b<h.length;b++){const x=h[b],T=new Uint8Array(new Uint32Array([x.length]).buffer);m.set(T,y),y+=ro,m.set(x,y),y+=x.length}p(m)});r.push(c)}else r.push(u.data());e!=null&&(l.group=e),t.push(l)}const s=await Promise.all(r);return{data:fg(s),specs:t}}function zd(n,e){const t={};let r,a=0;for(const s of e){const o=s.name,i=s.dtype,u=s.shape,l=ae(u);let c;if("quantization"in s){const p=s.quantization;if(p.dtype==="uint8"||p.dtype==="uint16"){if(!("min"in p&&"scale"in p))throw new Error(`Weight ${s.name} with quantization ${p.dtype} doesn't have corresponding metadata min and scale.`)}else if(p.dtype==="float16"){if(i!=="float32")throw new Error(`Weight ${s.name} is quantized with ${p.dtype} which only supports weights of type float32 not ${i}.`)}else throw new Error(`Weight ${s.name} has unknown quantization dtype ${p.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const h=Vi[p.dtype],d=n.slice(a,a+l*h),m=p.dtype==="uint8"?new Uint8Array(d):new Uint16Array(d);if(i==="float32")if(p.dtype==="uint8"||p.dtype==="uint16"){c=new Float32Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];c[y]=b*p.scale+p.min}}else if(p.dtype==="float16")r===void 0&&(r=vg()),c=r(m);else throw new Error(`Unsupported quantization type ${p.dtype} for weight type float32.`);else if(i==="int32"){if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error(`Unsupported quantization type ${p.dtype} for weight type int32.`);c=new Int32Array(m.length);for(let y=0;y<m.length;y++){const b=m[y];c[y]=Math.round(b*p.scale+p.min)}}else throw new Error(`Unsupported dtype in weight '${o}': ${i}`);a+=l*h}else if(i==="string"){const p=ae(s.shape);c=[];for(let h=0;h<p;h++){const d=new Uint32Array(n.slice(a,a+ro))[0];a+=ro;const m=new Uint8Array(n.slice(a,a+d));c.push(m),a+=d}}else{const p=Vi[i],h=n.slice(a,a+l*p);if(i==="float32")c=new Float32Array(h);else if(i==="int32")c=new Int32Array(h);else if(i==="bool")c=new Uint8Array(h);else if(i==="complex64"){c=new Float32Array(h);const d=new Float32Array(c.length/2),m=new Float32Array(c.length/2);for(let x=0;x<d.length;x++)d[x]=c[x*2],m[x]=c[x*2+1];const y=vn(d,u,"float32"),b=vn(m,u,"float32");t[o]=tr(y,b),y.dispose(),b.dispose()}else throw new Error(`Unsupported dtype in weight '${o}': ${i}`);a+=l*p}i!=="complex64"&&(t[o]=vn(c,u,i))}return t}function fg(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(s=>{if(e+=s.byteLength,t.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});const r=new Uint8Array(e);let a=0;return t.forEach(s=>{r.set(new Uint8Array(s.buffer),a),a+=s.byteLength}),r.buffer}const _u=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Nl(n){return _u?Buffer.byteLength(n):new Blob([n]).size}function mg(n){if(_u)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let r=0,a=e.length;r<a;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function gg(n){if(_u){const r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let r=0;r<e.length;++r)t.set([e.charCodeAt(r)],r);return t.buffer}function Au(n){if(n.length===1)return n[0];let e=0;n.forEach(a=>{e+=a.byteLength});const t=new Uint8Array(e);let r=0;return n.forEach(a=>{t.set(new Uint8Array(a),r),r+=a.byteLength}),t.buffer}function $l(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);const e=n.split("/");return e[e.length-1]}function Gd(n,e){const t={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:e};return n.signature!=null&&(t.signature=n.signature),n.userDefinedMetadata!=null&&(t.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(t.modelInitializer=n.modelInitializer),n.trainingConfig!=null&&(t.trainingConfig=n.trainingConfig),t}function jd(n,e,t){const r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(r.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=t}return n.signature!=null&&(r.signature=n.signature),n.userDefinedMetadata!=null&&(r.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(r.modelInitializer=n.modelInitializer),r}async function Ou(n,e){let t,r;return n.weightsManifest!=null&&([t,r]=await e(n.weightsManifest)),jd(n,t,r)}function hs(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Nl(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Nl(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}function Hd(n){const e=[];for(const t of n)e.push(...t.weights);return e}function yg(){const n=t=>{let r=t<<13,a=0;for(;(r&8388608)===0;)a-=8388608,r<<=1;return r&=-8388609,a+=947912704,r|a},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=n(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function xg(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let e=1;e<31;e++)n[e]=e<<23;for(let e=33;e<63;e++)n[e]=2147483648+(e-32<<23);return n}function bg(){const n=new Uint32Array(64);for(let e=0;e<64;e++)n[e]=1024;return n[0]=n[32]=0,n}function vg(){const n=yg(),e=xg(),t=bg();return r=>{const a=new ArrayBuffer(4*r.length),s=new Uint32Array(a);for(let o=0;o<r.length;o++){const i=r[o],u=n[t[i>>10]+(i&1023)]+e[i>>10];s[o]=u}return new Float32Array(a)}}class ze{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ze.instance==null&&(ze.instance=new ze),ze.instance}static registerSaveRouter(e){ze.getInstance().saveRouters.push(e)}static registerLoadRouter(e){ze.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return ze.getHandlers(e,"save")}static getLoadHandlers(e,t){return ze.getHandlers(e,"load",t)}static getHandlers(e,t,r){const a=[];return(t==="load"?ze.getInstance().loadRouters:ze.getInstance().saveRouters).forEach(s=>{const o=s(e,r);o!==null&&a.push(o)}),a}}const wg=n=>ze.registerSaveRouter(n),Sg=n=>ze.registerLoadRouter(n),kg=n=>ze.getSaveHandlers(n),Tg=(n,e)=>ze.getLoadHandlers(n,e);const Wi="tensorflowjs",zi=1,Er="models_store",Kn="model_info_store";function Xd(){if(!H().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Gi(n){const e=n.result;e.createObjectStore(Er,{keyPath:"modelPath"}),e.createObjectStore(Kn,{keyPath:"modelPath"})}class _r{constructor(e){if(this.indexedDB=Xd(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((r,a)=>{const s=this.indexedDB.open(Wi,zi);s.onupgradeneeded=()=>Gi(s),s.onsuccess=()=>{const o=s.result;if(t==null){const i=o.transaction(Er,"readonly"),u=i.objectStore(Er).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return o.close(),a(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=l=>(o.close(),a(u.error)),i.oncomplete=()=>o.close()}else{const i=hs(t),u=o.transaction(Kn,"readwrite");let l=u.objectStore(Kn);const c=l.put({modelPath:this.modelPath,modelArtifactsInfo:i});let p;c.onsuccess=()=>{p=o.transaction(Er,"readwrite");const h=p.objectStore(Er).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:i});h.onsuccess=()=>r({modelArtifactsInfo:i}),h.onerror=d=>{l=u.objectStore(Kn);const m=l.delete(this.modelPath);m.onsuccess=()=>(o.close(),a(h.error)),m.onerror=y=>(o.close(),a(h.error))}},c.onerror=h=>(o.close(),a(c.error)),u.oncomplete=()=>{p==null?o.close():p.oncomplete=()=>o.close()}}},s.onerror=o=>a(s.error)})}}_r.URL_SCHEME="indexeddb://";const qd=n=>H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(_r.URL_SCHEME)?Eg(n.slice(_r.URL_SCHEME.length)):null;ze.registerSaveRouter(qd);ze.registerLoadRouter(qd);function Eg(n){return new _r(n)}function Cg(n){return n.startsWith(_r.URL_SCHEME)?n.slice(_r.URL_SCHEME.length):n}class Ig{constructor(){this.indexedDB=Xd()}async listModels(){return new Promise((e,t)=>{const r=this.indexedDB.open(Wi,zi);r.onupgradeneeded=()=>Gi(r),r.onsuccess=()=>{const a=r.result,s=a.transaction(Kn,"readonly"),o=s.objectStore(Kn).getAll();o.onsuccess=()=>{const i={};for(const u of o.result)i[u.modelPath]=u.modelArtifactsInfo;e(i)},o.onerror=i=>(a.close(),t(o.error)),s.oncomplete=()=>a.close()},r.onerror=a=>t(r.error)})}async removeModel(e){return e=Cg(e),new Promise((t,r)=>{const a=this.indexedDB.open(Wi,zi);a.onupgradeneeded=()=>Gi(a),a.onsuccess=()=>{const s=a.result,o=s.transaction(Kn,"readwrite"),i=o.objectStore(Kn),u=i.get(e);let l;u.onsuccess=()=>{if(u.result==null)return s.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const c=i.delete(e),p=()=>{l=s.transaction(Er,"readwrite");const h=l.objectStore(Er).delete(e);h.onsuccess=()=>t(u.result.modelArtifactsInfo),h.onerror=d=>r(u.error)};c.onsuccess=p,c.onerror=h=>(p(),s.close(),r(u.error))}},u.onerror=c=>(s.close(),r(u.error)),o.oncomplete=()=>{l==null?s.close():l.oncomplete=()=>s.close()}},a.onerror=s=>r(a.error)})}}const Nn="/",na="tensorflowjs_models",Kd="info",Ng="model_topology",$g="weight_specs",Rg="weight_data",_g="model_metadata";function Yd(n){return{info:[na,n,Kd].join(Nn),topology:[na,n,Ng].join(Nn),weightSpecs:[na,n,$g].join(Nn),weightData:[na,n,Rg].join(Nn),modelMetadata:[na,n,_g].join(Nn)}}function Zd(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function Ag(n){const e=n.split(Nn);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(Nn)}function Og(n){return n.startsWith(Ar.URL_SCHEME)?n.slice(Ar.URL_SCHEME.length):n}class Ar{constructor(e){if(!H().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Yd(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),a=hs(e);try{this.LS.setItem(this.keys.info,JSON.stringify(a)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,mg(e.weightData));const s={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:a}}catch{throw Zd(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${a.modelTopologyBytes}, weightSpecsBytes=${a.weightSpecsBytes}, weightDataBytes=${a.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=r;const a=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(a==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=a;const s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){const i=JSON.parse(s);t.format=i.format,t.generatedBy=i.generatedBy,t.convertedBy=i.convertedBy,i.signature!=null&&(t.signature=i.signature),i.userDefinedMetadata!=null&&(t.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(t.modelInitializer=i.modelInitializer),i.trainingConfig!=null&&(t.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=gg(o),t}}Ar.URL_SCHEME="localstorage://";const Jd=n=>H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ar.URL_SCHEME)?Fg(n.slice(Ar.URL_SCHEME.length)):null;ze.registerSaveRouter(Jd);ze.registerLoadRouter(Jd);function Fg(n){return new Ar(n)}class Dg{constructor(){R(H().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),R(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=na+Nn,r=Nn+Kd;for(let a=0;a<this.LS.length;++a){const s=this.LS.key(a);if(s.startsWith(t)&&s.endsWith(r)){const o=Ag(s);e[o]=JSON.parse(this.LS.getItem(s))}}return e}async removeModel(e){e=Og(e);const t=Yd(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(t.info));return Zd(t),r}}const aa="://";class ht{constructor(){this.managers={}}static getInstance(){return ht.instance==null&&(ht.instance=new ht),ht.instance}static registerManager(e,t){R(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(aa)&&(e=e.slice(0,e.indexOf(aa))),R(e.length>0,()=>"scheme must not be an empty string.");const r=ht.getInstance();R(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=t}static getManager(e){const t=ht.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(ht.getInstance().managers)}}function Zs(n){if(n.indexOf(aa)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ht.getSchemes().join(",")}`);return{scheme:n.split(aa)[0],path:n.split(aa)[1]}}async function Qd(n,e,t=!1){R(n!==e,()=>`Old path and new path are the same: '${n}'`);const r=ze.getLoadHandlers(n);R(r.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),R(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`);const a=r[0],s=ze.getSaveHandlers(e);R(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),R(s.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const o=s[0],i=Zs(n).scheme,u=Zs(n).path,l=i===Zs(n).scheme,c=await a.load();t&&l&&await ht.getManager(i).removeModel(u);const p=await o.save(c);return t&&!l&&await ht.getManager(i).removeModel(u),p.modelArtifactsInfo}async function Mg(){const n=ht.getSchemes(),e={};for(const t of n){const r=await ht.getManager(t).listModels();for(const a in r){const s=t+aa+a;e[s]=r[a]}}return e}async function Lg(n){const e=Zs(n);return ht.getManager(e.scheme).removeModel(e.path)}async function Pg(n,e){return Qd(n,e,!1)}async function Bg(n,e){return Qd(n,e,!0)}class Ug{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(!window||!H().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const a=this.functionRefs[r.data.index];a(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(H().get("IS_BROWSER")){H().setPlatform("browser",new Ug);try{ht.registerManager(Ar.URL_SCHEME,new Dg)}catch{}try{ht.registerManager(_r.URL_SCHEME,new Ig)}catch{}}const Vg={importFetch:()=>require("node-fetch")};let ri;class Wg{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return H().global.fetch!=null?H().global.fetch(e,t):(ri==null&&(ri=Vg.importFetch()),ri(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}}H().get("IS_NODE")&&!H().get("IS_BROWSER")&&H().setPlatform("node",new Wg);function He(n,e="float32",t){return e=e||"float32",Wc(n),new ts(n,e,t)}function zg(n,e){const t=N(n,"x","cast");if(!x2(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:t},a={dtype:e};return V.runKernel(Iu,r,a)}const je=P({cast_:zg});function Gg(n){const e={x:N(n,"x","clone","string_or_numeric")};return V.runKernel(Nu,e)}const Jn=P({clone_:Gg});function ef(n,e=!1){console.log(n.toString(e))}Pd();const jg={buffer:He,cast:je,clone:Jn,print:ef};ag(jg);const Hg="model",Xg=".json",qg=".weights.bin";function Rl(n){return new Promise(e=>setTimeout(e)).then(n)}class Or{constructor(e){if(!H().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Or.URL_SCHEME)&&(e=e.slice(Or.URL_SCHEME.length)),(e==null||e.length===0)&&(e=Hg),this.modelJsonFileName=e+Xg,this.weightDataFileName=e+qg}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=Gd(e,r),s=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=s,await Rl(()=>o.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const i=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;i.download=this.weightDataFileName,i.href=t,await Rl(()=>i.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:hs(e)}}}}Or.URL_SCHEME="downloads://";class Kg{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const r=new FileReader;r.onload=a=>{const s=JSON.parse(a.target.result),o=s.modelTopology;if(o==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:o});return}const i=Ou(s,u=>this.loadWeights(u));e(i)},r.onerror=a=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const t=[],r=[];for(const o of e)t.push(...o.weights),r.push(...o.paths);const a=this.checkManifestAndWeightFiles(e),s=r.map(o=>this.loadWeightsFile(o,a[o]));return Promise.all(s).then(o=>[t,Au(o)])}loadWeightsFile(e,t){return new Promise((r,a)=>{const s=new FileReader;s.onload=o=>{const i=o.target.result;r(i)},s.onerror=o=>a(`Failed to weights data from file of path '${e}'.`),s.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],r=this.weightsFiles.map(s=>$l(s.name)),a={};for(const s of e)s.paths.forEach(o=>{const i=$l(o);if(t.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(t.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);a[o]=this.weightsFiles[r.indexOf(i)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return a}}const Yg=n=>H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Or.URL_SCHEME)?Zg(n.slice(Or.URL_SCHEME.length)):null;ze.registerSaveRouter(Yg);function Zg(n="model"){return new Or(n)}function Jg(n){return new Kg(n)}function _l(n,e,t,r){o(n),t=t??0,r=r??1,i(t,r);let a=0;const s=u=>(u.then(l=>{const c=t+ ++a/n.length*(r-t);return e(c),l}),u);function o(u){R(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function i(u,l){R(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),R(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),R(l>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${l}`)}return Promise.all(n.map(s))}async function tf(n,e){e==null&&(e={});const t=e.fetchFunc==null?H().platform.fetch:e.fetchFunc,r=n.map(s=>t(s,e.requestInit,{isBinary:!0})),a=(e.onProgress==null?await Promise.all(r):await _l(r,e.onProgress,0,.5)).map(s=>s.arrayBuffer());return e.onProgress==null?await Promise.all(a):await _l(a,e.onProgress,.5,1)}async function Qg(n,e="",t,r){return nf(a=>tf(a,{requestInit:r}))(n,e,t)}function nf(n){return async(e,t="",r)=>{const a=e.map(()=>!1),s={},o=r!=null?r.map(()=>!1):[],i=[];if(e.forEach((d,m)=>{let y=0;d.weights.forEach(b=>{const x="quantization"in b?b.quantization.dtype:b.dtype,T=Vi[x]*ae(b.shape),$=()=>{a[m]=!0,s[m]==null&&(s[m]=[]),s[m].push({manifestEntry:b,groupOffset:y,sizeBytes:T})};r!=null?r.forEach((F,M)=>{F===b.name&&($(),o[M]=!0)}):$(),i.push(b.name),y+=T})}),!o.every(d=>d)){const d=r.filter((m,y)=>!o[y]);throw new Error(`Could not find weights in manifest with names: ${d.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const u=a.reduce((d,m,y)=>(m&&d.push(y),d),[]),l=[];u.forEach(d=>{e[d].paths.forEach(m=>{const y=t+(t.endsWith("/")?"":"/")+m;l.push(y)})});const c=await n(l),p={};let h=0;return u.forEach(d=>{const m=e[d].paths.length;let y=0;for(let $=0;$<m;$++)y+=c[h+$].byteLength;const b=new ArrayBuffer(y),x=new Uint8Array(b);let T=0;for(let $=0;$<m;$++){const F=new Uint8Array(c[h+$]);x.set(F,T),T+=F.byteLength}s[d].forEach($=>{const F=b.slice($.groupOffset,$.groupOffset+$.sizeBytes),M=zd(F,[$.manifestEntry]);for(const U in M)p[U]=M[U]}),h+=m}),p}}const e0="application/octet-stream",t0="application/json";class Fu{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(R(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=H().platform.fetch,R(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&R(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],a=Gd(e,r);t.body.append("model.json",new Blob([JSON.stringify(a)],{type:t0}),"model.json"),e.weightData!=null&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:e0}),"model.weights.bin");const s=await this.fetch(this.path,t);if(s.ok)return{modelArtifactsInfo:hs(e),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let s=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?s+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":s+=" Please make sure the server is serving valid JSON for this request.",new Error(s)}const r=t.modelTopology,a=t.weightsManifest;if(r==null&&a==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Ou(t,s=>this.loadWeights(s))}async loadWeights(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[r,a]=n0(t),s=this.weightPathPrefix||r,o=Hd(e),i=[],u=[];for(const c of e)for(const p of c.paths)this.weightUrlConverter!=null?u.push(this.weightUrlConverter(p)):i.push(s+p+a);this.weightUrlConverter&&i.push(...await Promise.all(u));const l=await tf(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,Au(l)]}}Fu.URL_SCHEME_REGEX=/^https?:\/\//;function n0(n){const e=n.lastIndexOf("/"),t=n.lastIndexOf("?"),r=n.substring(0,e),a=t>e?n.substring(t):"";return[r+"/",a]}function ji(n){return n.match(Fu.URL_SCHEME_REGEX)!=null}const rf=(n,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(n)?t=n.every(r=>ji(r)):t=ji(n),t)return Du(n,e)}return null};ze.registerSaveRouter(rf);ze.registerLoadRouter(rf);function Du(n,e){return new Fu(n,e)}function r0(n,e){return Du(n,e)}class ai{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class af{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class a0{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function s0(n,e,t,r){const a=arguments;return new a0(sf(...a))}function sf(n,e,t,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new ai(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ai({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ai({modelTopology:n,weightSpecs:e,weightData:t,trainingConfig:r}))}function o0(n){return new af(n)}function i0(n){return new af(n)}const of=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:Jg,browserHTTPRequest:r0,concatenateArrayBuffers:Au,copyModel:Pg,decodeWeights:zd,encodeWeights:dg,fromMemory:s0,fromMemorySync:sf,getLoadHandlers:Tg,getModelArtifactsForJSON:Ou,getModelArtifactsForJSONSync:jd,getModelArtifactsInfoForJSON:hs,getSaveHandlers:kg,getWeightSpecs:Hd,http:Du,isHTTPScheme:ji,listModels:Mg,loadWeights:Qg,moveModel:Bg,registerLoadRouter:Sg,registerSaveRouter:wg,removeModel:Lg,weightsLoaderFactory:nf,withSaveHandler:o0,withSaveHandlerSync:i0},Symbol.toStringTag,{value:"Module"}));function u0(n,e,t=!1,r=!1){let a=N(n,"a","matMul"),s=N(e,"b","matMul");[a,s]=Ke(a,s);const o={a,b:s},i={transposeA:t,transposeB:r};return V.runKernel(op,o,i)}const Oe=P({matMul_:u0});function l0(n,e,t=1,r=0,a="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const s={indices:N(n,"indices","oneHot","int32")},o={dtype:a,depth:e,onValue:t,offValue:r};return V.runKernel($h,s,o)}const c0=P({oneHot_:l0});function Jr(){return V}function Xe(n,e){return V.tidy(n,e)}function bn(n){Md(n).forEach(e=>e.dispose())}function Yn(n){return V.keep(n)}function p0(n,e,t=1){return V.registerBackend(n,e,t)}function h0(n){const e={input:N(n,"input","imag")};return V.runKernel(Zp,e)}const ko=P({imag_:h0});function d0(n){const e={x:N(n,"x","neg")};return V.runKernel(kh,e)}const An=P({neg_:d0});function f0(n){const e={input:N(n,"input","real")};return V.runKernel(Ph,e)}const ns=P({real_:f0});function m0(n,e,t){const r=N(n,"x","transpose");if(e==null&&(e=r.shape.map((o,i)=>i).reverse()),R(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(o=>{R(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const a={x:r},s={perm:e};return r.dtype==="complex64"?Xe(()=>{let o=ns(r),i=ko(r);return o=V.runKernel(Ks,{x:o},s),i=V.runKernel(Ks,{x:i},s),t&&(i=An(i)),tr(o,i)}):V.runKernel(Ks,a,s)}const Hi=P({transpose_:m0});function ao(n,e){const t=n.length,r=[];for(let a=0;a<t;a++){const s=t-1-a,o=n[s]||1;(e[e.length-1-a]||1)>1&&o===1&&r.unshift(s)}return r}function uf(n,e){const t=[];for(let r=0;r<e.length;r++){const a=n[n.length-r-1],s=e.length-r-1,o=e[s];(a==null||a===1&&o>1)&&t.unshift(s)}return t}function $e(n,e){const t=[],r=Math.max(n.length,e.length);for(let a=0;a<r;a++){let s=n[n.length-a-1];s==null&&(s=1);let o=e[e.length-a-1];if(o==null&&(o=1),s===1)t.unshift(o);else if(o===1)t.unshift(s);else if(s!==o){const i=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(i)}else t.unshift(s)}return t}function lf(n,e,t){if(ga(n),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=ar(n,t);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return sr(n,e,r,t)}let br;function g0(n,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,r=!1,a=!1,s=!1,o=!1,i=!1;if(n.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)a=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)s=!0;else if(n.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(Fi(Ri,V.backendName)!=null){const h={pixels:n},d={numChannels:e};return V.runKernel(Ri,h,d)}const[u,l]=a?[n.videoWidth,n.videoHeight]:[n.width,n.height];let c;if(o)c=n.getContext("2d").getImageData(0,0,u,l).data;else if(r||t)c=n.data;else if(s||a||i){if(br==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")br=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else br=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});br.canvas.width=u,br.canvas.height=l,br.drawImage(n,0,0,u,l),c=br.getImageData(0,0,u,l).data}let p;if(e===4)p=new Int32Array(c);else{const h=u*l;p=new Int32Array(h*e);for(let d=0;d<h;d++)for(let m=0;m<e;++m)p[d*e+m]=c[d*4+m]}return lf(p,[l,u,e],"int32")}async function cf(n,e){let t=N(n,"img","toPixels");if(!(n instanceof Ge)){const l=t;t=je(l,"int32"),l.dispose()}if(t.rank!==2&&t.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${t.rank}.`);const[r,a]=t.shape.slice(0,2),s=t.rank===2?1:t.shape[2];if(s>4||s===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${s}`);if(t.dtype!=="float32"&&t.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${t.dtype}. Please use float32 or int32 tensors.`);const o=await t.data(),i=t.dtype==="float32"?255:1,u=new Uint8ClampedArray(a*r*4);for(let l=0;l<r*a;++l){const c=[0,0,0,255];for(let h=0;h<s;h++){const d=o[l*s+h];if(t.dtype==="float32"){if(d<0||d>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${d}.`)}else if(t.dtype==="int32"&&(d<0||d>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${d}.`);s===1?(c[0]=d*i,c[1]=d*i,c[2]=d*i):c[h]=d*i}const p=l*4;u[p+0]=Math.round(c[0]),u[p+1]=Math.round(c[1]),u[p+2]=Math.round(c[2]),u[p+3]=Math.round(c[3])}return t!==n&&t.dispose(),u}const pf=P({fromPixels_:g0});function hf(n,e){const t=n.shape.length,r=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[r-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[r-1]} vs. ${t}`);if(ae(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const a=e.shape,s=a[a.length-1];let o=1;for(let p=0;p<a.length-1;++p)o*=a[p];const i=n.shape,u=a.slice();u.pop();let l=1;for(let p=s;p<t;++p)l*=i[p],u.push(i[p]);const c=[...ot(n.shape).map(p=>p/l),1].slice(0,s);return[u,o,l,c]}function df(n,e,t){const r=e.rank>1?e.shape[e.rank-1]:1,a=e.rank>1?e.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${a}.`;if(t.rank<a)throw new Error(s+` update.rank < ${a}. `);if(n.length<r+(t.rank-a))throw new Error(s+` Output shape length < ${r+(t.rank-a)}`);if(t.rank!==a+n.length-r)throw new Error(s+` update.rank != ${a+n.length-r}`);for(let o=0;o<a;++o)if(t.shape[o]!==e.shape[o])throw new Error(s+` updates.shape[${o}] (${t.shape[o]}) != indices.shape[${o}] (${e.shape[o]}).`);for(let o=0;o<t.rank-a;++o)if(t.shape[o+a]!==n[o+r])throw new Error(s+` updates.shape[${o+a}] (${t.shape[o+a]}) != shape[${o+a}] (${n[o+a]})`)}function ff(n,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}df(t,e,n)}function Mu(n,e,t){const r=e.shape.length,a=r>1?e.shape[r-1]:1,s=t.length;let o=1;for(let p=a;p<s;++p)o*=t[p];const i=a<1?1:a,u=ae(e.shape)/i,l=[...ot(t.slice(0,a)),1],c=ae(t);return{sliceRank:a,numUpdates:u,sliceSize:o,strides:l,outputSize:c}}const Xi=-2,y0=-1;function mf(n,e,t){const r=n.shape.length;R(r===e.length,()=>`Error in slice${r}D: Length of begin ${e} must match the rank of the array (${r}).`),R(r===t.length,()=>`Error in slice${r}D: Length of size ${t} must match the rank of the array (${r}).`);for(let a=0;a<r;++a)R(e[a]+t[a]<=n.shape[a],()=>`Error in slice${r}D: begin[${a}] + size[${a}] (${e[a]+t[a]}) would overflow input.shape[${a}] (${n.shape[a]})`)}function x0(n){const e=[];let t=0;for(;n>0;)n&1&&e.push(t),n/=2,t++;return e}function gf(n,e,t){const r=[];for(let a=0;a<n.length;a++)r[a]=Math.ceil((e[a]-n[a])/t[a]);return r}function yf(n,e,t,r){const a=[...n];for(let s=a.length;s<r.length;s++)a.push(1);for(let s=0;s<t;s++)s===0?a[e]=1:(a.splice(e,0,1),a.pop());return a}function xf(n,e,t){return t<=n?t:t-(e-1)}function bf(n,e){const t=[];for(let r=0;r<n;r++)t.push(e+r);return t}function b0(n,e,t,r,a,s,o,i,u){const l=n.length;let c=new Array(l),p=new Array(l),h=new Array(l);if(e.length&&t>0){const d=e[0],m=t+1;c=vf(o,d,m,r,n),p=wf(i,d,m,a,n),h=yf(s,d,m,n)}else for(let d=0;d<l;d++)c[d]=kf(o,r,s,n,d,u),p[d]=Tf(i,a,s,n,d,u),h[d]=Sf(s,d,u);return{begin:c,end:p,strides:h}}function vf(n,e,t,r,a){const s=[...a],o=bf(t,e);for(let i=0;i<s.length;i++)if(o.indexOf(i)>-1)s[i]=0;else{const u=xf(e,t,i);let l=r[u];n&1<<u&&(l=0),s[i]=l}return s}function wf(n,e,t,r,a){const s=[...a],o=bf(t,e);for(let i=0;i<s.length;i++)if(o.indexOf(i)>-1)s[i]=Number.MAX_SAFE_INTEGER;else{const u=xf(e,t,i);let l=r[u];n&1<<u&&(l=Number.MAX_SAFE_INTEGER),s[i]=l}for(let i=0;i<s.length;i++){const u=a[i];s[i]<0&&(s[i]+=u),s[i]=eo(0,s[i],a[i])}return s}function Sf(n,e,t){let r=n[e];return(t&1<<e||r==null)&&(r=1),r}function kf(n,e,t,r,a,s){let o=e[a];const i=t[a]||1;(n&1<<a||s&1<<a||o==null)&&(i>0?o=Number.MIN_SAFE_INTEGER:o=Number.MAX_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),o=eo(0,o,u-1),o}function Tf(n,e,t,r,a,s){let o=e[a];const i=t[a]||1;(n&1<<a||s&1<<a||o==null)&&(i>0?o=Number.MAX_SAFE_INTEGER:o=Number.MIN_SAFE_INTEGER);const u=r[a];return o<0&&(o+=u),i>0?o=eo(0,o,u):o=eo(-1,o,u-1),o}function Lu(n,e,t){let r=t.length;for(let a=0;a<t.length;a++)if(t[a]>1){r=a;break}for(let a=r+1;a<t.length;a++)if(e[a]>0||t[a]!==n[a])return!1;return!0}function Pu(n,e){let t=n.length>0?n[n.length-1]:1;for(let r=0;r<n.length-1;r++)t+=n[r]*e[r];return t}function Ef(n,e,t){let r;const a=n.shape.length;typeof e=="number"?r=[e,...new Array(a-1).fill(0)]:e.length<a?r=e.concat(new Array(a-e.length).fill(0)):r=e.slice(),r.forEach(o=>{R(o!==-1,()=>"slice() does not support negative begin indexing.")});let s;return t==null?s=new Array(a).fill(-1):typeof t=="number"?s=[t,...new Array(a-1).fill(-1)]:t.length<a?s=t.concat(new Array(a-t.length).fill(-1)):s=t,s=s.map((o,i)=>o>=0?o:(R(o===-1,()=>`Negative size values should be exactly -1 but got ${o} for the slice() size at index ${i}.`),n.shape[i]-r[i])),[r,s]}function Cf(n,e,t,r,a,s,o,i,u){let l;if(r==null?(l=new Array(e.length),l.fill(1)):l=r,o!=null&&(o&o-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1;const p={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:l.slice(),beginMask:a,endMask:s,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};for(let T=0;T<p.dims;T++)c&&(1<<T&i)!==0&&p.numAddAxisAfterEllipsis++,1<<T&o&&(c=!0);c||(p.ellipsisMask|=1<<p.dims,p.dims++);const h={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};v0(p,h);let d=!0,m=!0,y=!0;const b=[],x=[];for(let T=0;T<n.length;++T){if(h.strides[T]===0)throw Error(`strides[${T}] must be non-zero`);const $=!!(h.shrinkAxisMask&1<<T),F=n[T];if(F===-1){b.push($?1:-1);continue}const M=[h.beginMask&1<<T,h.endMask&1<<T],U=[h.strides[T]>0?0:-1,h.strides[T]>0?F:F-1];if($&&h.strides[T]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&h.strides[T]===1;const X=!!(h.beginMask&1<<T&&h.endMask&1<<T);if(h.beginValid&&h.endValid){if($){const q=h.begin[T]<0?F+h.begin[T]:h.begin[T];if(h.begin[T]=q,h.end[T]=h.begin[T]+1,q<0||q>=F)throw Error(`slice index ${h.begin[T]} of dimension ${T} out of bounds.`)}else h.begin[T]=Al(h.begin[T],0,h.strides[T],F,M,U),h.end[T]=Al(h.end[T],1,h.strides[T],F,M,U);const C=h.strides[T]===1&&h.begin[T]===0&&h.end[T]===F;d=d&&C,m=m&&(T===0&&h.strides[T]===1||C)}else d=d&&h.strides[T]===1&&X,m=m&&(T===0&&h.strides[T]===1||X);let z,L=!1;if(h.beginValid&&h.endValid?(z=h.end[T]-h.begin[T],L=!0):$?(z=1,L=!0):X&&F>=0&&(h.strides[T]<0?z=-F:z=F,L=!0),L){let C;z===0||z<0!=h.strides[T]<0?C=0:C=Math.trunc(z/h.strides[T])+(z%h.strides[T]!==0?1:0),b.push(C)}else b.push(-1)}for(let T=0;T<h.finalShapeGatherIndices.length;++T){const $=h.finalShapeGatherIndices[T];$>=0?x.push(b[$]):$===Xi&&x.push(1)}return{finalShapeSparse:x.filter((T,$)=>h.finalShapeGatherIndices[$]!==Xi),finalShape:x,isIdentity:d,sliceDim0:m,isSimpleSlice:y,begin:h.begin,end:h.end,strides:h.strides}}function v0(n,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=n.begin!=null,e.endValid=n.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let r=0;r<n.dims;r++)if(1<<r&n.ellipsisMask){const a=Math.min(e.dims-(n.dims-r)+1+n.numAddAxisAfterEllipsis,e.dims);for(;t<a;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=r}else if(1<<r&n.newAxisMask)e.finalShapeGatherIndices.push(Xi),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);n.begin!=null&&(e.begin[t]=n.begin[r]),n.end!=null&&(e.end[t]=n.end[r]),e.strides[t]=n.strides[r],n.beginMask&1<<r&&(e.beginMask|=1<<t),n.endMask&1<<r&&(e.endMask|=1<<t),n.shrinkAxisMask&1<<r?(e.finalShapeGatherIndices.push(y0),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(r)),e.inputShapeGatherIndicesSparse[t]=r,t++}}function Al(n,e,t,r,a,s){if(a[e])return t>0?s[e]:s[e+1&1];{const o=n<0?r+n:n;return o<s[0]?s[0]:o>s[1]?s[1]:o}}const w0=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:mf,computeFlatOffset:Pu,computeOutShape:gf,getNormalizedAxes:b0,isSliceContinous:Lu,maskToAxes:x0,parseSliceParams:Ef,sliceInfo:Cf,startForAxis:kf,startIndicesWithElidedDims:vf,stopForAxis:Tf,stopIndicesWithElidedDims:wf,stridesForAxis:Sf,stridesWithElidedDims:yf},Symbol.toStringTag,{value:"Module"}));function S0(n,e){let t=N(n,"a","add"),r=N(e,"b","add");[t,r]=Ke(t,r);const a={a:t,b:r};return V.runKernel(Cu,a)}const Pe=P({add_:S0});function k0(n,e){let t=N(n,"a","floorDiv"),r=N(e,"b","floorDiv");[t,r]=Ke(t,r);const a={a:t,b:r};return V.runKernel(Gp,a)}const If=P({floorDiv_:k0});function T0(n,e){let t=N(n,"a","div"),r=N(e,"b","div");if([t,r]=Ke(t,r),t.dtype==="int32"&&r.dtype==="int32")return If(t,r);const a={a:t,b:r},s={};return V.runKernel(Ap,a,s)}const De=P({div_:T0});function E0(n,e){let t=N(n,"a","mul"),r=N(e,"b","mul");[t,r]=Ke(t,r);const a={a:t,b:r};return V.runKernel(Sh,a)}const me=P({mul_:E0});function C0(n){const e=N(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return V.runKernel(dp,t)}else{const t={x:e};return V.runKernel(jc,t)}}const Kt=P({abs_:C0});function I0(n){const e={x:N(n,"x","acos")};return V.runKernel(Hc,e)}const N0=P({acos_:I0});function $0(n){const e={x:N(n,"x","acosh")};return V.runKernel(Xc,e)}const R0=P({acosh_:$0});function _0(n){R(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),R(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const e=n.map((a,s)=>N(a,`tensors${s}`,"addN")),t=e[0];e.forEach(a=>{if(a.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(a=>{if(!qe(a.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return V.runKernel(qc,r)}const A0=P({addN_:_0});function O0(n,e=null,t=!1){const r={x:N(n,"x","all","bool")},a={axis:e,keepDims:t};return V.runKernel(Kc,r,a)}const F0=P({all_:O0});function D0(n,e=null,t=!1){const r={x:N(n,"x","any","bool")},a={axis:e,keepDims:t};return V.runKernel(Yc,r,a)}const M0=P({any_:D0});function L0(n,e=0){const t={x:N(n,"x","argMax")},r={axis:e};return V.runKernel(Zc,t,r)}const P0=P({argMax_:L0});function B0(n,e=0){const t={x:N(n,"x","argMin")},r={axis:e};return V.runKernel(Jc,t,r)}const U0=P({argMin_:B0});function V0(n){const e={x:N(n,"x","asin")};return V.runKernel(Qc,e)}const W0=P({asin_:V0});function z0(n){const e={x:N(n,"x","asinh")};return V.runKernel(ep,e)}const G0=P({asinh_:z0});function j0(n){const e={x:N(n,"x","atan")};return V.runKernel(tp,e)}const H0=P({atan_:j0});function X0(n,e){let t=N(n,"a","atan2"),r=N(e,"b","atan2");[t,r]=Ke(t,r);const a={a:t,b:r};return V.runKernel(rp,a)}const q0=P({atan2_:X0});function K0(n){const e={x:N(n,"x","atanh")};return V.runKernel(np,e)}const Y0=P({atanh_:K0});function Nf(n,e,t,r,a="NHWC",s){const o=n[3],i=[...e,o],u=xa(a);return Pt(n,i,t,s,r,null,null,u)}function Pr(n,e,t,r,a,s,o="channelsLast"){const[i,u]=so(e);let l;if(o==="channelsLast")l=[i,u,n[3],n[3]];else if(o==="channelsFirst")l=[i,u,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return Pt(n,l,t,r,a,s,!1,o)}function ds(n,e,t,r,a,s,o="NDHWC"){const[i,u,l]=qi(e);let c,p;if(o==="NDHWC")p="channelsLast",c=[i,u,l,n[4],n[4]];else if(o==="NCDHW")p="channelsFirst",c=[i,u,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${o}`);return fs(n,c,t,r,a,!1,p,s)}function Pt(n,e,t,r,a,s,o=!1,i="channelsLast"){let[u,l,c,p]=[-1,-1,-1,-1];if(i==="channelsLast")[u,l,c,p]=n;else if(i==="channelsFirst")[u,p,l,c]=n;else throw new Error(`Unknown dataFormat ${i}`);const[h,d,,m]=e,[y,b]=so(t),[x,T]=so(r),$=sa(h,x),F=sa(d,T),{padInfo:M,outHeight:U,outWidth:X}=Q0(a,l,c,y,b,$,F,s,i),z=o?m*p:m;let L;return i==="channelsFirst"?L=[u,z,U,X]:i==="channelsLast"&&(L=[u,U,X,z]),{batchSize:u,dataFormat:i,inHeight:l,inWidth:c,inChannels:p,outHeight:U,outWidth:X,outChannels:z,padInfo:M,strideHeight:y,strideWidth:b,filterHeight:h,filterWidth:d,effectiveFilterHeight:$,effectiveFilterWidth:F,dilationHeight:x,dilationWidth:T,inShape:n,outShape:L,filterShape:e}}function fs(n,e,t,r,a,s=!1,o="channelsLast",i){let[u,l,c,p,h]=[-1,-1,-1,-1,-1];if(o==="channelsLast")[u,l,c,p,h]=n;else if(o==="channelsFirst")[u,h,l,c,p]=n;else throw new Error(`Unknown dataFormat ${o}`);const[d,m,y,,b]=e,[x,T,$]=qi(t),[F,M,U]=qi(r),X=sa(d,F),z=sa(m,M),L=sa(y,U),{padInfo:C,outDepth:q,outHeight:ee,outWidth:te}=e3(a,l,c,p,x,T,$,X,z,L,i),le=s?b*h:b;let de;return o==="channelsFirst"?de=[u,le,q,ee,te]:o==="channelsLast"&&(de=[u,q,ee,te,le]),{batchSize:u,dataFormat:o,inDepth:l,inHeight:c,inWidth:p,inChannels:h,outDepth:q,outHeight:ee,outWidth:te,outChannels:le,padInfo:C,strideDepth:x,strideHeight:T,strideWidth:$,filterDepth:d,filterHeight:m,filterWidth:y,effectiveFilterDepth:X,effectiveFilterHeight:z,effectiveFilterWidth:L,dilationDepth:F,dilationHeight:M,dilationWidth:U,inShape:n,outShape:de,filterShape:e}}function Z0(n,e,t,r,a){r==null&&(r=Bu(n,e,t));const s=n[0],o=n[1],i=$r((s-e+2*r)/t+1,a),u=$r((o-e+2*r)/t+1,a);return[i,u]}function J0(n,e,t,r,a,s){a==null&&(a=Bu(n,e,r));const o=n[0],i=n[1],u=n[2],l=$r((o-e+2*a)/r+1,s),c=$r((i-e+2*a)/r+1,s),p=$r((u-e+2*a)/r+1,s);return[l,c,p,t]}function Bu(n,e,t,r=1){const a=sa(e,r);return Math.floor((n[0]*(t-1)-t+a)/2)}function so(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function qi(n){return typeof n=="number"?[n,n,n]:n}function sa(n,e){return e<=1?n:n+(n-1)*(e-1)}function Q0(n,e,t,r,a,s,o,i,u){let l,c,p;if(typeof n=="number"){l={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const h=Z0([e,t],s,r,n,i);c=h[0],p=h[1]}else if(n==="same"){c=Math.ceil(e/r),p=Math.ceil(t/a);const h=Math.max(0,(c-1)*r+s-e),d=Math.max(0,(p-1)*a+o-t),m=Math.floor(h/2),y=h-m,b=Math.floor(d/2),x=d-b;l={top:m,bottom:y,left:b,right:x,type:"SAME"}}else if(n==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-s+1)/r),p=Math.ceil((t-o+1)/a);else if(typeof n=="object"){const h=u==="channelsLast"?n[1][0]:n[2][0],d=u==="channelsLast"?n[1][1]:n[2][1],m=u==="channelsLast"?n[2][0]:n[3][0],y=u==="channelsLast"?n[2][1]:n[3][1];l={top:h,bottom:d,left:m,right:y,type:h===0&&d===0&&m===0&&y===0?"VALID":"EXPLICIT"},c=$r((e-s+h+d)/r+1,i),p=$r((t-o+m+y)/a+1,i)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:l,outHeight:c,outWidth:p}}function e3(n,e,t,r,a,s,o,i,u,l,c){let p,h,d,m;if(typeof n=="number"){p={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const y=J0([e,t,r,1],i,1,a,n,c);h=y[0],d=y[1],m=y[2]}else if(n==="same"){h=Math.ceil(e/a),d=Math.ceil(t/s),m=Math.ceil(r/o);const y=(h-1)*a+i-e,b=(d-1)*s+u-t,x=(m-1)*o+l-r,T=Math.floor(y/2),$=y-T,F=Math.floor(b/2),M=b-F,U=Math.floor(x/2),X=x-U;p={top:F,bottom:M,left:U,right:X,front:T,back:$,type:"SAME"}}else if(n==="valid")p={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},h=Math.ceil((e-i+1)/a),d=Math.ceil((t-u+1)/s),m=Math.ceil((r-l+1)/o);else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:p,outDepth:h,outHeight:d,outWidth:m}}function $r(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function rs(n){const[e,t,r]=so(n);return e===1&&t===1&&r===1}function _t(n,e){return rs(n)||rs(e)}function xa(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function Jt(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")R(ua(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(a=>{R(ua(a),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${a}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}function t3(n,e){const t={x:N(n,"x","reshape","string_or_numeric")},r={shape:e};return V.runKernel(Vh,t,r)}const Z=P({reshape_:t3});function n3(n,e,t,r,a){const s=N(n,"x","avgPool","float32"),o=1;R(_t(t,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`);let i=s,u=!1;s.rank===3&&(u=!0,i=Z(s,[1,s.shape[0],s.shape[1],s.shape[2]])),R(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),Jt("avgPool",r,a);const l={x:i},c={filterSize:e,strides:t,pad:r,dimRoundingMode:a};let p=V.runKernel(ap,l,c);return p=je(p,s.dtype),u?Z(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const $f=P({avgPool_:n3});function r3(n,e,t,r,a,s="NDHWC"){const o=N(n,"x","avgPool3d","float32");let i=o,u=!1;o.rank===4&&(u=!0,i=Z(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),R(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),R(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),Jt("avgPool3d",r,a);const l={x:i},c={filterSize:e,strides:t,pad:r,dimRoundingMode:a,dataFormat:s};let p=V.runKernel(sp,l,c);return p=je(p,i.dtype),u?Z(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const a3=P({avgPool3d_:r3});function s3(n,e=0){R(n.length>=1,()=>"Pass at least one tensor to concat");const t=no(n,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),t.length===1)return Jn(t[0]);const r=t,a={axis:e};return V.runKernel(fp,r,a)}const it=P({concat_:s3});function o3(n){const e={x:N(n,"x","sigmoid","float32")};return V.runKernel(nd,e)}const Rr=P({sigmoid_:o3});function i3(n,e,t){const r=N(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const a={x:r},s={begin:e,size:t};return V.runKernel(Jh,a,s)}const we=P({slice_:i3});function u3(n){const e={x:N(n,"x","tanh","float32")};return V.runKernel(wd,e)}const Ki=P({tanh_:u3});function l3(n,e,t,r,a,s){const o=N(n,"forgetBias","basicLSTMCell"),i=N(e,"lstmKernel","basicLSTMCell"),u=N(t,"lstmBias","basicLSTMCell"),l=N(r,"data","basicLSTMCell"),c=N(a,"c","basicLSTMCell"),p=N(s,"h","basicLSTMCell"),h=it([l,p],1),d=Oe(h,i),m=Pe(d,u),y=m.shape[0],b=m.shape[1]/4,x=[y,b],T=we(m,[0,0],x),$=we(m,[0,b],x),F=we(m,[0,b*2],x),M=we(m,[0,b*3],x),U=Pe(me(Rr(T),Ki($)),me(c,Rr(Pe(o,F)))),X=me(Ki(U),Rr(M));return[U,X]}const c3=P({basicLSTMCell_:l3});function p3(n,e,t){const r=N(n,"x","batchToSpaceND"),a=e.reduce((i,u)=>i*u);R(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),R(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),R(r.shape[0]%a===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${a}`);const s={x:r},o={blockShape:e,crops:t};return V.runKernel(ip,s,o)}const Rf=P({batchToSpaceND_:p3});function h3(n){let e;return n.rank===0||n.rank===1?e=Z(n,[1,1,1,n.size]):n.rank===2?e=Z(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?e=Z(n,[1,n.shape[0],n.shape[1],n.shape[2]]):e=n,e}function d3(n,e,t,r,a,s){s==null&&(s=.001);const o=N(n,"x","batchNorm"),i=N(e,"mean","batchNorm"),u=N(t,"variance","batchNorm");let l;a!=null&&(l=N(a,"scale","batchNorm"));let c;r!=null&&(c=N(r,"offset","batchNorm")),R(i.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),R(c==null||i.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),R(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const p={x:h3(o),scale:l,offset:c,mean:i,variance:u},h={varianceEpsilon:s},d=V.runKernel(jp,p,h);return Z(d,o.shape)}const To=P({batchNorm_:d3});function f3(n,e,t,r,a,s){const o=N(n,"x","batchNorm"),i=N(e,"mean","batchNorm"),u=N(t,"variance","batchNorm");let l;a!=null&&(l=N(a,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),R(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),R(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),R(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),l!=null&&R(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&R(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),To(o,i,u,c,l,s)}const m3=P({batchNorm2d_:f3});function g3(n,e,t,r,a,s){const o=N(n,"x","batchNorm"),i=N(e,"mean","batchNorm"),u=N(t,"variance","batchNorm");let l;a!=null&&(l=N(a,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),R(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),R(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),R(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),l!=null&&R(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&R(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),To(o,i,u,c,l,s)}const y3=P({batchNorm3d_:g3});function x3(n,e,t,r,a,s){const o=N(n,"x","batchNorm"),i=N(e,"mean","batchNorm"),u=N(t,"variance","batchNorm");let l;a!=null&&(l=N(a,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),R(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),R(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),R(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),l!=null&&R(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&R(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),To(o,i,u,c,l,s)}const b3=P({batchNorm4d_:x3});function v3(n,e,t){const r=N(n,"x","bincount"),a=N(e,"weights","bincount");R(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),R(t>=0,()=>`size must be non-negative, but got ${t}.`),R(a.size===r.size||a.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`);const s={x:r,weights:a},o={size:t};return V.runKernel(up,s,o)}const _f=P({bincount_:v3});function w3(n,e){const t=N(n,"s0","broadcastArgs","int32"),r=N(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const a={s0:t,s1:r};return V.runKernel(lp,a)}const S3=P({broadcastArgs_:w3});function k3(n,e){let t=N(n,"broadcastTo","x");const r=t.shape;if(e.some(u=>!(u>0)||u%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${e}].`);if(e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const u=t.shape.slice();for(;u.length<e.length;)u.unshift(1);t=Z(t,u)}const a=t.shape,s=Array.from(e);for(let u=e.length-1;u>=0;u--)if(a[u]===e[u])s[u]=1;else if(t.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(s.map((u,l)=>u>1?l:-1).filter(u=>u>=0).length===0)return Jn(t);const o={x:t},i={reps:s};return V.runKernel($u,o,i)}const Qa=P({broadcastTo_:k3});function T3(n){const e={x:N(n,"x","ceil","float32")};return V.runKernel(cp,e)}const E3=P({ceil_:T3});function Eo(n,e,t){const r={shape:n,value:e,dtype:t};return V.runKernel(Vp,{},r)}function C3(n,e,t){const r=N(n,"x","clipByValue");if(R(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return Eo(r.shape,e,r.dtype);const a={x:r},s={clipValueMin:e,clipValueMax:t};return V.runKernel(pp,a,s)}const Af=P({clipByValue_:C3});function I3(n){return it(n,0)}const N3=P({concat1d_:I3});function $3(n,e){return it(n,e)}const R3=P({concat2d_:$3});function _3(n,e){return it(n,e)}const A3=P({concat3d_:_3});function O3(n,e){return it(n,e)}const F3=P({concat4d_:O3});function D3(n,e,t,r,a="NHWC",s=[1,1],o){const i=N(n,"x","conv2d","float32"),u=N(e,"filter","conv2d","float32");let l=i,c=!1;i.rank===3&&(c=!0,l=Z(i,[1,i.shape[0],i.shape[1],i.shape[2]])),R(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),R(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Jt("conv2d",r,o);const p=a==="NHWC"?l.shape[3]:l.shape[1];R(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),R(_t(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`);const h={x:l,filter:u},d={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},m=V.runKernel(mp,h,d);return c?Z(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const Co=P({conv2d_:D3});function M3(n,e,t,r,a="NWC",s=1,o){const i=N(n,"x","conv1d"),u=N(e,"filter","conv1d");let l=i,c=!1;i.rank===2&&(c=!0,l=Z(i,[1,i.shape[0],i.shape[1]])),R(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),R(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Jt("conv1d",r,o),R(l.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`),R(_t(t,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${s}'`),R(a==="NWC",()=>`Error in conv1d: got dataFormat of ${a} but only NWC is currently supported.`);const p=Z(u,[1,u.shape[0],u.shape[1],u.shape[2]]),h=Z(l,[l.shape[0],1,l.shape[1],l.shape[2]]),d=Co(h,p,[1,t],r,"NHWC",[1,s],o);return c?Z(d,[d.shape[2],d.shape[3]]):Z(d,[d.shape[0],d.shape[2],d.shape[3]])}const L3=P({conv1d_:M3});function P3(n,e,t,r,a,s="NHWC",o){R(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let i=n,u=e,l=!1;e.rank===3&&(l=!0,u=Z(e,[1,e.shape[0],e.shape[1],e.shape[2]]),i=[1,n[0],n[1],n[2]]),R(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),R(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),R(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);const c=s==="NHWC"?i[3]:i[1],p=s==="NHWC"?u.shape[3]:u.shape[1];R(c===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${t.shape[2]}.`),R(p===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${t.shape[3]}.`),Jt("conv2dDerInput",a,o);const h={dy:u,filter:t},d={strides:r,pad:a,dataFormat:s,dimRoundingMode:o,inputShape:i},m=V.runKernel(yp,h,d);return l?Z(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const Of=P({conv2DBackpropInput_:P3});function B3(n,e,t,r,a,s){const o=N(n,"x","conv2dTranspose"),i=N(e,"filter","conv2dTranspose");return Of(t,o,i,r,a,"NHWC",s)}const U3=P({conv2dTranspose_:B3});function V3(n,e,t,r,a="NDHWC",s=[1,1,1]){const o=N(n,"x","conv3d"),i=N(e,"filter","conv3d");let u=o,l=!1;o.rank===4&&(l=!0,u=Z(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),R(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),R(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),R(u.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`),R(_t(t,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),R(a==="NDHWC",()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`);const c={x:u,filter:i},p={strides:t,pad:r,dataFormat:a,dilations:s},h=V.runKernel(xp,c,p);return l?Z(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const W3=P({conv3d_:V3});function z3(n,e,t,r,a){R(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let s=n,o=e,i=!1;e.rank===4&&(i=!0,o=Z(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),s=[1,n[0],n[1],n[2],n[3]]);const u=s[4],l=o.shape[4];R(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),R(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),R(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),R(u===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${t.shape[3]}.`),R(l===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${t.shape[4]}.`);const c={dy:o,filter:t},p={pad:a,strides:r,inputShape:s},h=V.runKernel(bp,c,p);return i?Z(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const G3=P({conv3DBackpropInput_:z3});function j3(n,e,t,r,a){const s=N(n,"x","conv3dTranspose"),o=N(e,"filter","conv3dTranspose");return G3(t,s,o,r,a)}const H3=P({conv3dTranspose_:j3});function X3(n){const e={x:N(n,"x","cos","float32")};return V.runKernel(vp,e)}const q3=P({cos_:X3});function K3(n){const e={x:N(n,"x","cosh","float32")};return V.runKernel(wp,e)}const Y3=P({cosh_:K3});function Z3(n,e=0,t=!1,r=!1){const a={x:N(n,"x","cumprod")},s={axis:e,exclusive:t,reverse:r};return V.runKernel(Sp,a,s)}const J3=P({cumprod_:Z3});function Q3(n,e=0,t=!1,r=!1){const a={x:N(n,"x","cumsum")},s={axis:e,exclusive:t,reverse:r};return V.runKernel(kp,a,s)}const ey=P({cumsum_:Q3});function ty(n,e,t,r=!1){const a=N(n,"x","denseBincount"),s=N(e,"weights","denseBincount");R(a.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${a.dtype}`),R(a.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`),R(t>=0,()=>`size must be non-negative, but got ${t}.`),R(s.size===a.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: ${s.shape}.`);const o={x:a,weights:s},i={size:t,binaryOutput:r};return V.runKernel(Ep,o,i)}const ny=P({denseBincount_:ty});function ry(n,e,t="NHWC"){const r=N(n,"x","depthToSpace","float32"),a=t==="NHWC"?r.shape[1]:r.shape[2],s=t==="NHWC"?r.shape[2]:r.shape[3],o=t==="NHWC"?r.shape[3]:r.shape[1];R(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),R(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e}  for depthToSpace with input shape
    ${r.shape}`),R(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e} for depthToSpace with input shape
        ${r.shape}`),R(o%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${o} for depthToSpace with input shape ${r.shape}`);const i={x:r},u={blockSize:e,dataFormat:t};return V.runKernel(Cp,i,u)}const ay=P({depthToSpace_:ry});function sy(n,e,t,r,a="NHWC",s=[1,1],o){const i=N(n,"x","depthwiseConv2d","float32"),u=N(e,"filter","depthwiseConv2d","float32");let l=i,c=!1;i.rank===3&&(c=!0,l=Z(i,[1,i.shape[0],i.shape[1],i.shape[2]])),R(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),R(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const p=a==="NHWC"?l.shape[3]:l.shape[1];R(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),Jt("depthwiseConv2d",r,o);const h={x:l,filter:u},d={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},m=V.runKernel(Ip,h,d);return c?Z(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const Uu=P({depthwiseConv2d_:sy});function oy(n){const e={x:N(n,"x","diag")};return V.runKernel(Rp,e)}const iy=P({diag_:oy});function uy(n,e,t,r,a=[1,1],s="NHWC"){const o=N(n,"x","dilation2d"),i=N(e,"filter","dilation2d");R(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),R(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),R(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let u=o,l=!1;o.rank===3&&(u=Z(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0);const c={x:u,filter:i},p={strides:t,pad:r,dilations:a},h=V.runKernel(_p,c,p);return l?Z(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const ly=P({dilation2d_:uy});function cy(n,e){let t=N(n,"a","equal","string_or_numeric"),r=N(e,"b","equal","string_or_numeric");[t,r]=Ke(t,r),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(Mp,a)}const Ff=P({equal_:cy});function py(n,e,t){const r=N(e,"a","where"),a=N(t,"b","where"),s=N(n,"condition","where","bool"),o=$e($e(s.shape,r.shape),a.shape),i=Qa(s,o),u=Qa(r,o),l=Qa(a,o),c={condition:i,t:u,e:l};return V.runKernel(Yh,c)}const ha=P({where_:py});function hy(n){const e={x:N(n,"x","zerosLike")};return V.runKernel(Id,e)}const Vu=P({zerosLike_:hy});function dy(n,e){let t=N(n,"a","div"),r=N(e,"b","div");[t,r]=Ke(t,r);const a=De(t,r),s=Vu(a),o=Ff(r,s);return ha(o,s,a)}const fy=P({divNoNan_:dy});function my(n,e){const t=N(n,"t1","dot"),r=N(e,"t2","dot");R((t.rank===1||t.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${r.rank}.`);const a=t.rank===1?t.size:t.shape[1],s=r.rank===1?r.size:r.shape[0];if(R(a===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${s}.`),t.rank===1&&r.rank===1){const o=Z(t,[1,-1]),i=Z(r,[-1,1]),u=Oe(o,i);return Z(u,[])}else if(t.rank===1&&r.rank===2){const o=Z(t,[1,-1]),i=Z(r,[r.shape[0],r.shape[1]]),u=Oe(o,i);return Z(u,[u.size])}else if(t.rank===2&&r.rank===1){const o=Z(r,[-1,1]),i=Oe(t,o);return Z(i,[i.size])}else{const o=Z(r,[r.shape[0],r.shape[1]]);return Oe(t,o)}}const gy=P({dot_:my});function yy(n,...e){const t=e.map((a,s)=>N(a,`tensors${s}`,"einsum")),r={equation:n};return V.runKernel(Op,t,r)}const xy=P({einsum_:yy});function by(n){const e={x:N(n,"x","elu","float32")};return V.runKernel(Fp,e)}const Df=P({elu_:by});function vy(n){let e=N(n,"x","erf");R(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=je(e,"float32"));const t={x:e};return V.runKernel(Dp,t)}const wy=P({erf_:vy});function Wu(n,e){for(let t=0;t<n.length;++t)if(n[n.length-t-1]!==e-1-t)return!1;return!0}function Mf(n,e,t){const r=n.length+e.length,a=[];let s=0,o=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(n[s++]):a.push(e[o++]);return a}function kn(n,e){const t=[],r=n.length;for(let s=0;s<r;s++)e.indexOf(s)===-1&&t.push(n[s]);const a=e.map(s=>n[s]);return[t,a]}function Bt(n,e){const t=e.map(r=>1);return Mf(n,t,e)}function hn(n,e,t){R(Wu(e,t),()=>`${n} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function Qt(n,e){if(Wu(n,e))return null;const t=[];for(let r=0;r<e;++r)n.indexOf(r)===-1&&t.push(r);return n.forEach(r=>t.push(r)),t}function zu(n){return n.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function en(n,e){const t=[];for(let r=e-n;r<e;++r)t.push(r);return t}function Sy(n,e=null,t=!1){const r={x:N(n,"x","max")},a={reductionIndices:e,keepDims:t};return V.runKernel(ph,r,a)}const oa=P({max_:Sy});function ky(n,e=null,t=!1){const r={x:N(n,"x","min")},a={axis:e,keepDims:t};return V.runKernel(yh,r,a)}const Yi=P({min_:ky});function Ty(n,e){let t=N(n,"base","pow"),r=N(e,"exp","pow");[t,r]=Ke(t,r);const a={a:t,b:r};return V.runKernel(Ah,a)}const Gu=P({pow_:Ty});function Ae(n,e){if((wn(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&wn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return sr(n,[],[],e)}function Ey(n){const e={x:N(n,"x","sqrt","float32")};return V.runKernel(ad,e)}const Zi=P({sqrt_:Ey});function Cy(n){const e=N(n,"x","square"),t={};return V.runKernel("Square",{x:e},t)}const Io=P({square_:Cy});function Iy(n,e=null,t=!1){let r=N(n,"x","sum");r.dtype==="bool"&&(r=je(r,"int32"));const a={x:r},s={axis:e,keepDims:t};return V.runKernel(sd,a,s)}const Ve=P({sum_:Iy});function Ny(n,e="euclidean",t=null,r=!1){n=N(n,"x","norm");const a=Lf(n,e,t);let s=a.shape;if(r){const o=rt(t,n.shape);s=Bt(a.shape,o)}return Z(a,s)}function Lf(n,e,t=null){if(n.rank===0)return Kt(n);if(n.rank!==1&&t===null)return Lf(Z(n,[-1]),e,t);if(n.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return Ve(Kt(n),t);if(e===1/0)return oa(Kt(n),t);if(e===-1/0)return Yi(Kt(n),t);if(e==="euclidean"||e===2)return Zi(Ve(Gu(Kt(n),Ae(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return oa(Ve(Kt(n),t[0]),t[1]-1);if(e===1/0)return oa(Ve(Kt(n),t[1]),t[0]);if(e===-1/0)return Yi(Ve(Kt(n),t[1]),t[0]);if(e==="fro"||e==="euclidean")return Zi(Ve(Io(n),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const No=P({norm_:Ny});function $y(n,e=null,t=!1){return No(n,"euclidean",e,t)}const Ry=P({euclideanNorm_:$y});function _y(n){const e={x:N(n,"x","exp")};return V.runKernel(Lp,e)}const Fn=P({exp_:_y});function Ay(n,e=0){const t=N(n,"x","expandDims","string_or_numeric");R(e<=t.rank,()=>"Axis must be <= rank of the tensor");const r={input:t},a={dim:e};return V.runKernel(Pp,r,a)}const on=P({expandDims_:Ay});function Oy(n){const e={x:N(n,"x","expm1")};return V.runKernel(Bp,e)}const Fy=P({expm1_:Oy});function Dy(n,e){const t=N(n,"x","tile","string_or_numeric");R(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);const r={x:t},a={reps:e};return V.runKernel($u,r,a)}const es=P({tile_:Dy});function My(n,e,t,r="float32"){e==null&&(e=n);const a=He([n,e],r),s=n<=e?n:e;for(let i=0;i<s;++i)a.set(1,i,i);const o=Z(a.toTensor(),[n,e]);if(t==null)return o;if(t.length===1)return es(on(o,0),[t[0],1,1]);if(t.length===2)return es(on(on(o,0),0),[t[0],t[1],1,1]);if(t.length===3)return es(on(on(on(o,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}const Pf=P({eye_:My});function Ly(n){const e={x:N(n,"x","floor","float32")};return V.runKernel(zp,e)}const Bf=P({floor_:Ly});function Py(n,e,t=0,r=0){const a=N(n,"x","gather"),s=N(e,"indices","gather","int32"),o={x:a,indices:s},i={axis:t,batchDims:r};return V.runKernel(Hp,o,i)}const Uf=P({gather_:Py});function By(n,e){let t=N(n,"a","greater","string_or_numeric"),r=N(e,"b","greater","string_or_numeric");[t,r]=Ke(t,r),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(qp,a)}const $o=P({greater_:By});function Uy(n,e){let t=N(n,"a","greaterEqual","string_or_numeric"),r=N(e,"b","greaterEqual","string_or_numeric");[t,r]=Ke(t,r),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(Kp,a)}const Vf=P({greaterEqual_:Uy});function Vy(n){const e={x:N(n,"x","isFinite")};return V.runKernel(Jp,e)}const Wy=P({isFinite_:Vy});function zy(n){const e={x:N(n,"x","isInf")};return V.runKernel(Qp,e)}const Gy=P({isInf_:zy});function jy(n){const e={x:N(n,"x","isNaN")};return V.runKernel(eh,e)}const Hy=P({isNaN_:jy});function Xy(n,e=.2){const t={x:N(n,"x","leakyRelu")},r={alpha:e};return V.runKernel(th,t,r)}const Wf=P({leakyRelu_:Xy});function qy(n,e){let t=N(n,"a","less","string_or_numeric"),r=N(e,"b","less","string_or_numeric");[t,r]=Ke(t,r),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(nh,a)}const Ky=P({less_:qy});function Yy(n,e){let t=N(n,"a","lessEqual","string_or_numeric"),r=N(e,"b","lessEqual","string_or_numeric");[t,r]=Ke(t,r),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(rh,a)}const ju=P({lessEqual_:Yy});function Zy(n,e,t){if(t<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:e,num:t};return V.runKernel(ah,{},r)}function Jy(n,e=5,t=1,r=1,a=.5){const s=N(n,"x","localResponseNormalization");R(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),R(ua(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let o=s,i=!1;s.rank===3&&(i=!0,o=Z(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const u={x:o},l={depthRadius:e,bias:t,alpha:r,beta:a},c=V.runKernel(ch,u,l);return i?Z(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Qy=P({localResponseNormalization_:Jy});function ex(n){const e={x:N(n,"x","log","float32")};return V.runKernel(sh,e)}const as=P({log_:ex});function tx(n){const e={x:N(n,"x","log1p")};return V.runKernel(oh,e)}const zf=P({log1p_:tx});function Dn(n){return V.customGrad(n)}function nx(n){const e={x:N(n,"x","softplus")};return V.runKernel(rd,e)}const Gf=P({softplus_:nx});function rx(n){const e=N(n,"x","logSigmoid");return Dn(t=>({value:An(Gf(An(t))),gradFunc:r=>me(r,Rr(An(t)))}))(e)}const ax=P({logSigmoid_:rx});function sx(n,e){let t=N(n,"a","sub"),r=N(e,"b","sub");[t,r]=Ke(t,r);const a={a:t,b:r};return V.runKernel(bd,a)}const Ce=P({sub_:sx});function ox(n,e=-1){const t=N(n,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return Dn((r,a)=>{const s=oa(r,e,!0),o=Ce(r,s),i=Ce(je(o,"float32"),as(Ve(Fn(o),e,!0)));return a([i]),{value:i,gradFunc:(u,l)=>{const[c]=l,p=!0,h=Fn(c);return Ce(u,me(Ve(u,e,p),h))}}})(t)}const ix=P({logSoftmax_:ox});function ux(n,e=null,t=!1){const r=N(n,"x","logSumExp"),a=rt(e,r.shape),s=oa(r,a,!0),o=Ce(r,s),i=Fn(o),u=Ve(i,a),l=as(u),c=Pe(Z(s,l.shape),l);if(t){const p=Bt(c.shape,a);return Z(c,p)}return c}const jf=P({logSumExp_:ux});function lx(n,e){const t=N(n,"a","logicalAnd","bool"),r=N(e,"b","logicalAnd","bool");$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(ih,a)}const oo=P({logicalAnd_:lx});function cx(n){const e={x:N(n,"x","logicalNot","bool")};return V.runKernel(uh,e)}const Hf=P({logicalNot_:cx});function px(n,e){const t=N(n,"a","logicalOr","bool"),r=N(e,"b","logicalOr","bool");$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(lh,a)}const Xf=P({logicalOr_:px});function hx(n,e){const t=N(n,"a","logicalXor","bool"),r=N(e,"b","logicalXor","bool");return $e(t.shape,r.shape),oo(Xf(n,e),Hf(oo(n,e)))}const dx=P({logicalXor_:hx});const Ws=2147483648;function fx(n,e,t="left"){const r=N(n,"sortedSequence","searchSorted"),a=N(e,"values","searchSorted"),s=r.shape[r.shape.length-1],o=a.shape[a.shape.length-1],i=Z(r,[-1,s]),u=Z(a,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(ae(u.shape)>=Ws)throw new Error(`values tensor size must less than ${Ws}`);if(i.shape[1]>=Ws)throw new Error(`trailing dim_size must less than ${Ws} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:u},c={side:t};return V.runKernel(Kh,l,c)}const Hu=P({searchSorted_:fx});function mx(n,e){return Hu(n,e,"left")}function gx(n,e,t,r,a){const s=N(n,"x","maxPool"),o=1;let i=s,u=!1;s.rank===3&&(u=!0,i=Z(s,[1,s.shape[0],s.shape[1],s.shape[2]])),R(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),R(_t(t,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${o}'`),Jt("maxPool",r,a);const l={x:i},c={filterSize:e,strides:t,pad:r,dimRoundingMode:a},p=V.runKernel(dh,l,c);return u?Z(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const qf=P({maxPool_:gx});function yx(n,e=[1,1,1],t,r,a,s="NDHWC"){const o=N(n,"x","maxPool3d");let i=o,u=!1;o.rank===4&&(u=!0,i=Z(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),R(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),R(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),Jt("maxPool3d",r,a);const l={x:i},c={filterSize:e,strides:t,pad:r,dimRoundingMode:a,dataFormat:s},p=V.runKernel(fh,l,c);return u?Z(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const xx=P({maxPool3d_:yx});function bx(n,e,t,r,a=!1){const s={x:N(n,"x","maxPoolWithArgmax")},o={filterSize:e,strides:t,pad:r,includeBatchInIndex:a},i=V.runKernel(mh,s,o);return{result:i[0],indexes:i[1]}}const vx=P({maxPoolWithArgmax_:bx});function wx(n,e){let t=N(n,"a","maximum"),r=N(e,"b","maximum");[t,r]=Ke(t,r),t.dtype==="bool"&&(t=je(t,"int32"),r=je(r,"int32")),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(hh,a)}const Sx=P({maximum_:wx});function kx(n,e=null,t=!1){const r={x:N(n,"x","mean")},a={axis:e,keepDims:t};return V.runKernel(gh,r,a)}const io=P({mean_:kx});function Fr(n,e="float32"){if(e==="complex64"){const r=Fr(n,"float32"),a=Fr(n,"float32");return tr(r,a)}const t=er(ae(n),e);return V.makeTensor(t,n,e)}function Cr(n,e="float32"){if(e==="complex64"){const r=Cr(n,"float32"),a=Fr(n,"float32");return tr(r,a)}const t=Vc(ae(n),e);return V.makeTensor(t,n,e)}function Tx(n,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(n===void 0)return[];let r=N(n,"x","meshgrid",n instanceof Ge?n.dtype:"float32");if(e===void 0)return[r];let a=N(e,"y","meshgrid",e instanceof Ge?e.dtype:"float32");const s=ae(r.shape),o=ae(a.shape);return t==="xy"?(r=Z(r,[1,-1]),a=Z(a,[-1,1]),[Oe(Cr([o,1],r.dtype),r),Oe(a,Cr([1,s],a.dtype))]):(r=Z(r,[-1,1]),a=Z(a,[1,-1]),[Oe(r,Cr([1,o],r.dtype)),Oe(Cr([s,1],a.dtype),a)])}function Ex(n,e){let t=N(n,"a","minimum"),r=N(e,"b","minimum");[t,r]=Ke(t,r),t.dtype==="bool"&&(t=je(t,"int32"),r=je(r,"int32")),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(xh,a)}const Kf=P({minimum_:Ex});function Cx(n,e,t){R(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);const r=N(n,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");R(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const a=t==="reflect"?1:0;for(let i=0;i<r.rank;i++)R(e[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),R(e[i][0]>=0&&e[i][0]<=r.shape[i]-a&&e[i][1]>=0&&e[i][1]<=r.shape[i]-a,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-a} or less than 0 for input of shape ${r.shape}`);const s={paddings:e,mode:t},o={x:r};return V.runKernel(bh,o,s)}const Ix=P({mirrorPad_:Cx});function Nx(n,e){let t=N(n,"a","mod"),r=N(e,"b","mod");[t,r]=Ke(t,r);const a={a:t,b:r};return V.runKernel(vh,a)}const $x=P({mod_:Nx});function Rx(n,e=null,t=!1){n=N(n,"x","moments");const r=rt(e,n.shape),a=io(n,r,t);let s=a.shape;t||(s=Bt(a.shape,r));const o=Io(Ce(je(n,"float32"),Z(a,s))),i=io(o,r,t);return{mean:a,variance:i}}const _x=P({moments_:Rx});function Ax(n,e,t,r){const a=N(e,"data","multiRNNCell"),s=no(t,"c","multiRNNCell"),o=no(r,"h","multiRNNCell");let i=a;const u=[];for(let p=0;p<n.length;p++){const h=n[p](i,s[p],o[p]);u.push(h[0]),u.push(h[1]),i=h[1]}const l=[],c=[];for(let p=0;p<u.length;p+=2)l.push(u[p]),c.push(u[p+1]);return[l,c]}const Ox=P({multiRNNCell_:Ax});function Fx(n,e,t,r=!1){const a=N(n,"logits","multinomial"),s=a.size,o=a.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);t=t||Math.random();const i={logits:o===1?Z(a,[1,-1]):a},u={numSamples:e,seed:t,normalized:r},l=V.runKernel(wh,i,u);return o===1?Z(l,[l.size]):l}const Dx=P({multinomial_:Fx});function Mx(n,e){let t=N(n,"a","notEqual","string_or_numeric"),r=N(e,"b","notEqual","string_or_numeric");[t,r]=Ke(t,r),$e(t.shape,r.shape);const a={a:t,b:r};return V.runKernel(Th,a)}const Yf=P({notEqual_:Mx});function Lx(n){const e={x:N(n,"x","onesLike")};return V.runKernel(Nh,e)}const Px=P({onesLike_:Lx});function Bx(n,e){const t=N(n,"v1","outerProduct"),r=N(e,"v2","outerProduct");R(t.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${r.rank}.`);const a=Z(t,[-1,1]),s=Z(r,[1,-1]);return Oe(a,s)}const Ux=P({outerProduct_:Bx});function Vx(n,e,t=0){const r=N(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const a={paddings:e,constantValue:t},s={x:r};return V.runKernel(_h,s,a)}const ms=P({pad_:Vx});function Wx(n,e,t=0){return R(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),ms(n,[e],t)}const zx=P({pad1d_:Wx});function Gx(n,e,t=0){return R(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ms(n,e,t)}const jx=P({pad2d_:Gx});function Hx(n,e,t=0){return R(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ms(n,e,t)}const Xx=P({pad3d_:Hx});function qx(n,e,t=0){return R(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ms(n,e,t)}const Kx=P({pad4d_:qx});function Yx(n,e,t){const r=N(n,"x","spaceToBatchND");R(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),R(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),R(r.shape.reduce((o,i,u)=>u>0&&u<=e.length?o&&(i+t[u-1][0]+t[u-1][1])%e[u-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);const a={x:r},s={blockShape:e,paddings:t};return V.runKernel(od,a,s)}const Zf=P({spaceToBatchND_:Yx});function Zx(n,e,t,r,a,s,o){a==null&&(a=[1,1]),s==null&&(s=1),r===0&&(r="valid");const i=N(n,"x","maxPool");let u=i,l=!1;i.rank===3&&(l=!0,u=Z(i,[1,i.shape[0],i.shape[1],i.shape[2]])),R(_t(s,a),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${a}'`);const c=Pr(u.shape,e,s,a,r),p=[c.dilationHeight,c.dilationWidth];let h;r==="same"?h=Qx([c.filterHeight,c.filterWidth],p):h=[[0,0],[0,0]];const d=p[0]===1&&p[1]===1,[m,y]=Jx([c.inHeight,c.inWidth],p,h),b=d?r:"valid",x=d?u:Zf(u,p,m),T=(t==="avg"?()=>$f(x,e,s,b,o):()=>qf(x,e,s,b,o))(),$=d?T:Rf(T,p,y);return l?Z($,[$.shape[1],$.shape[2],$.shape[3]]):$}function Jx(n,e,t){const r=t.map(c=>c[0]),a=t.map(c=>c[1]),s=n.concat(r,a),o=e.map((c,p)=>(c-s[p]%c)%c),i=a.map((c,p)=>c+o[p]),u=e.map((c,p)=>[r[p],i[p]]),l=e.map((c,p)=>[0,o[p]]);return[u,l]}function Qx(n,e){const t=n.map((s,o)=>s+(s-1)*(e[o]-1)).map(s=>s-1),r=t.map(s=>Math.floor(s/2)),a=t.map((s,o)=>s-r[o]);return t.map((s,o)=>[r[o],a[o]])}const e4=P({pool_:Zx});function t4(n,e){const t=N(n,"x","prelu"),r=N(e,"alpha","prelu"),a={x:t,alpha:r};return V.runKernel(Oh,a)}const Jf=P({prelu_:t4});function n4(n,e=null,t=!1){let r=N(n,"x","prod");r.dtype==="bool"&&(r=je(r,"int32"));const a={x:r},s={axis:e,keepDims:t};return V.runKernel(Fh,a,s)}const r4=P({prod_:n4});function a4(n,e,t,r){const a=n.map((c,p)=>N(c,`tensors${p}`,"raggedGather","int32")),s=N(e,"paramsDenseValues","raggedGather"),o=N(t,"indices","raggedGather","int32"),i={paramsNestedSplits:a,paramsDenseValues:s,indices:o},u={outputRaggedRank:r},l=V.runKernel(Dh,i,u);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const s4=P({raggedGather_:a4});function o4(n,e,t,r,a){const s=N(n,"shape","raggedTensorToTensor","int32"),o=N(e,"values","raggedTensorToTensor"),i=N(t,"defaultValue","raggedTensorToTensor",o.dtype),u=r.map((p,h)=>N(p,`tensors${h}`,"raggedTensorToTensor","int32")),l={shape:s,values:o,defaultValue:i,rowPartitionTensors:u},c={rowPartitionTypes:a};return V.runKernel(Mh,l,c)}const i4=P({raggedTensorToTensor_:o4});function u4(n,e,t){const r=ae(n);let a=null;if(t==null||t==="float32")a=new Float32Array(r);else if(t==="int32")a=new Int32Array(r);else if(t==="bool")a=new Uint8Array(r);else throw new Error(`Unknown data type ${t}`);for(let s=0;s<r;s++)a[s]=e();return V.makeTensor(a,n,t)}const l4=P({rand_:u4});var Ji={exports:{}},c4=Ji.exports,Ol;function p4(){return Ol||(Ol=1,(function(n){(function(e,t,r){function a(u){var l=this,c=i();l.next=function(){var p=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=p-(l.c=p|0)},l.c=1,l.s0=c(" "),l.s1=c(" "),l.s2=c(" "),l.s0-=c(u),l.s0<0&&(l.s0+=1),l.s1-=c(u),l.s1<0&&(l.s1+=1),l.s2-=c(u),l.s2<0&&(l.s2+=1),c=null}function s(u,l){return l.c=u.c,l.s0=u.s0,l.s1=u.s1,l.s2=u.s2,l}function o(u,l){var c=new a(u),p=l&&l.state,h=c.next;return h.int32=function(){return c.next()*4294967296|0},h.double=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.quick=h,p&&(typeof p=="object"&&s(p,c),h.state=function(){return s(c,{})}),h}function i(){var u=4022871197,l=function(c){c=String(c);for(var p=0;p<c.length;p++){u+=c.charCodeAt(p);var h=.02519603282416938*u;u=h>>>0,h-=u,h*=u,u=h>>>0,h-=u,u+=h*4294967296}return(u>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=o:this.alea=o})(c4,n)})(Ji)),Ji.exports}var Qi={exports:{}},h4=Qi.exports,Fl;function d4(){return Fl||(Fl=1,(function(n){(function(e,t,r){function a(i){var u=this,l="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},i===(i|0)?u.x=i:l+=i;for(var c=0;c<l.length+64;c++)u.x^=l.charCodeAt(c)|0,u.next()}function s(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u}function o(i,u){var l=new a(i),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,m=(h+d)/(1<<21);while(m===0);return m},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&s(c,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=o:this.xor128=o})(h4,n)})(Qi)),Qi.exports}var eu={exports:{}},f4=eu.exports,Dl;function m4(){return Dl||(Dl=1,(function(n){(function(e,t,r){function a(i){var u=this,l="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(p^p<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,i===(i|0)?u.x=i:l+=i;for(var c=0;c<l.length+64;c++)u.x^=l.charCodeAt(c)|0,c==l.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function s(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u.v=i.v,u.d=i.d,u}function o(i,u){var l=new a(i),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,m=(h+d)/(1<<21);while(m===0);return m},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&s(c,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=o:this.xorwow=o})(f4,n)})(eu)),eu.exports}var tu={exports:{}},g4=tu.exports,Ml;function y4(){return Ml||(Ml=1,(function(n){(function(e,t,r){function a(i){var u=this;u.next=function(){var c=u.x,p=u.i,h,d;return h=c[p],h^=h>>>7,d=h^h<<24,h=c[p+1&7],d^=h^h>>>10,h=c[p+3&7],d^=h^h>>>3,h=c[p+4&7],d^=h^h<<7,h=c[p+7&7],h=h^h<<13,d^=h^h<<9,c[p]=d,u.i=p+1&7,d};function l(c,p){var h,d=[];if(p===(p|0))d[0]=p;else for(p=""+p,h=0;h<p.length;++h)d[h&7]=d[h&7]<<15^p.charCodeAt(h)+d[h+1&7]<<13;for(;d.length<8;)d.push(0);for(h=0;h<8&&d[h]===0;++h);for(h==8?d[7]=-1:d[h],c.x=d,c.i=0,h=256;h>0;--h)c.next()}l(u,i)}function s(i,u){return u.x=i.x.slice(),u.i=i.i,u}function o(i,u){i==null&&(i=+new Date);var l=new a(i),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,m=(h+d)/(1<<21);while(m===0);return m},p.int32=l.next,p.quick=p,c&&(c.x&&s(c,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=o:this.xorshift7=o})(g4,n)})(tu)),tu.exports}var nu={exports:{}},x4=nu.exports,Ll;function b4(){return Ll||(Ll=1,(function(n){(function(e,t,r){function a(i){var u=this;u.next=function(){var c=u.w,p=u.X,h=u.i,d,m;return u.w=c=c+1640531527|0,m=p[h+34&127],d=p[h=h+1&127],m^=m<<13,d^=d<<17,m^=m>>>15,d^=d>>>12,m=p[h]=m^d,u.i=h,m+(c^c>>>16)|0};function l(c,p){var h,d,m,y,b,x=[],T=128;for(p===(p|0)?(d=p,p=null):(p=p+"\0",d=0,T=Math.max(T,p.length)),m=0,y=-32;y<T;++y)p&&(d^=p.charCodeAt((y+32)%p.length)),y===0&&(b=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,y>=0&&(b=b+1640531527|0,h=x[y&127]^=d+b,m=h==0?m+1:0);for(m>=128&&(x[(p&&p.length||0)&127]=-1),m=127,y=512;y>0;--y)d=x[m+34&127],h=x[m=m+1&127],d^=d<<13,h^=h<<17,d^=d>>>15,h^=h>>>12,x[m]=d^h;c.w=b,c.X=x,c.i=m}l(u,i)}function s(i,u){return u.i=i.i,u.w=i.w,u.X=i.X.slice(),u}function o(i,u){i==null&&(i=+new Date);var l=new a(i),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,m=(h+d)/(1<<21);while(m===0);return m},p.int32=l.next,p.quick=p,c&&(c.X&&s(c,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=o:this.xor4096=o})(x4,n)})(nu)),nu.exports}var ru={exports:{}},v4=ru.exports,Pl;function w4(){return Pl||(Pl=1,(function(n){(function(e,t,r){function a(i){var u=this,l="";u.next=function(){var p=u.b,h=u.c,d=u.d,m=u.a;return p=p<<25^p>>>7^h,h=h-d|0,d=d<<24^d>>>8^m,m=m-p|0,u.b=p=p<<20^p>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^m,u.a=m-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,i===Math.floor(i)?(u.a=i/4294967296|0,u.b=i|0):l+=i;for(var c=0;c<l.length+20;c++)u.b^=l.charCodeAt(c)|0,u.next()}function s(i,u){return u.a=i.a,u.b=i.b,u.c=i.c,u.d=i.d,u}function o(i,u){var l=new a(i),c=u&&u.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,m=(h+d)/(1<<21);while(m===0);return m},p.int32=l.next,p.quick=p,c&&(typeof c=="object"&&s(c,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=o:this.tychei=o})(v4,n)})(ru)),ru.exports}var au={exports:{}},S4=au.exports,Bl;function k4(){return Bl||(Bl=1,(function(n){(function(e,t,r){var a=256,s=6,o=52,i="random",u=r.pow(a,s),l=r.pow(2,o),c=l*2,p=a-1,h;function d(F,M,U){var X=[];M=M==!0?{entropy:!0}:M||{};var z=x(b(M.entropy?[F,$(t)]:F??T(),3),X),L=new m(X),C=function(){for(var q=L.g(s),ee=u,te=0;q<l;)q=(q+te)*a,ee*=a,te=L.g(1);for(;q>=c;)q/=2,ee/=2,te>>>=1;return(q+te)/ee};return C.int32=function(){return L.g(4)|0},C.quick=function(){return L.g(4)/4294967296},C.double=C,x($(L.S),t),(M.pass||U||function(q,ee,te,le){return le&&(le.S&&y(le,L),q.state=function(){return y(L,{})}),te?(r[i]=q,ee):q})(C,z,"global"in M?M.global:this==r,M.state)}function m(F){var M,U=F.length,X=this,z=0,L=X.i=X.j=0,C=X.S=[];for(U||(F=[U++]);z<a;)C[z]=z++;for(z=0;z<a;z++)C[z]=C[L=p&L+F[z%U]+(M=C[z])],C[L]=M;(X.g=function(q){for(var ee,te=0,le=X.i,de=X.j,fe=X.S;q--;)ee=fe[le=p&le+1],te=te*a+fe[p&(fe[le]=fe[de=p&de+ee])+(fe[de]=ee)];return X.i=le,X.j=de,te})(a)}function y(F,M){return M.i=F.i,M.j=F.j,M.S=F.S.slice(),M}function b(F,M){var U=[],X=typeof F,z;if(M&&X=="object")for(z in F)try{U.push(b(F[z],M-1))}catch{}return U.length?U:X=="string"?F:F+"\0"}function x(F,M){for(var U=F+"",X,z=0;z<U.length;)M[p&z]=p&(X^=M[p&z]*19)+U.charCodeAt(z++);return $(M)}function T(){try{var F;return h&&(F=h.randomBytes)?F=F(a):(F=new Uint8Array(a),(e.crypto||e.msCrypto).getRandomValues(F)),$(F)}catch{var M=e.navigator,U=M&&M.plugins;return[+new Date,e,U,e.screen,$(t)]}}function $(F){return String.fromCharCode.apply(0,F)}if(x(r.random(),t),n.exports){n.exports=d;try{h=o2}catch{}}else r["seed"+i]=d})(typeof self<"u"?self:S4,[],Math)})(au)),au.exports}var si,Ul;function T4(){if(Ul)return si;Ul=1;var n=p4(),e=d4(),t=m4(),r=y4(),a=b4(),s=w4(),o=k4();return o.alea=n,o.xor128=e,o.xorwow=t,o.xorshift7=r,o.xor4096=a,o.tychei=s,si=o,si}var Xu=T4();class qu{constructor(e,t,r,a,s){this.mean=e,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=a,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=s||Math.random();this.random=Xu.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const a=this.nextVal;return this.nextVal=NaN,a}let e,t,r=!1;for(;!r;){let a,s,o;do a=2*this.random()-1,s=2*this.random()-1,o=a*a+s*s;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*a*i,t=this.mean+this.stdDev*s*i,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class E4{constructor(e,t,r,a){this.alpha=e,this.beta=1/t,this.dtype=r;const s=a||Math.random();this.randu=Xu.alea(s.toString()),this.randn=new qu(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,r,a,s,o;for(;;){do a=this.randn.nextValue(),o=1+this.c*a;while(o<=0);if(o*=o*o,e=a*a,t=1-.331*e*e,r=.5*e+this.d*(1-o+Math.log(o)),s=this.randu(),s<t||Math.log(s)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class C4{constructor(e=0,t=1,r,a){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=r,a==null&&(a=Math.random()),typeof a=="number"&&(a=a.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=Xu.alea(a)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function I4(n,e,t=1,r="float32",a){if(t==null&&(t=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const s=new E4(e,t,r,a),o=He(n,r);for(let i=0;i<o.values.length;i++)o.values[i]=s.nextValue();return o.toTensor()}const N4=P({randomGamma_:I4});function $4(n,e=0,t=1,r,a){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const s=new qu(e,t,r,!1,a),o=He(n,r);for(let i=0;i<o.values.length;i++)o.values[i]=s.nextValue();return o.toTensor()}const Qf=P({randomNormal_:$4});function R4(n,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return Qf(n,0,1,e,t)}const _4=P({randomStandardNormal_:R4});function A4(n,e=0,t=1,r="float32",a){const s=He(n,r),o=new C4(e,t,null,a);for(let i=0;i<s.values.length;i++)s.values[i]=o.nextValue();return s.toTensor()}const e1=P({randomUniform_:A4});function ss(n,e,t=1,r="float32"){if(t===0)throw new Error("Cannot have a step of zero");const a={start:n,stop:e,step:t,dtype:r};return V.runKernel(Lh,{},a)}function O4(n){const e={x:N(n,"x","reciprocal")};return V.runKernel(Bh,e)}const F4=P({reciprocal_:O4});function D4(n){const e={x:N(n,"x","relu")};return V.runKernel(Uh,e)}const Ro=P({relu_:D4});function M4(n){const e={x:N(n,"x","relu6")};return V.runKernel(Gh,e)}const t1=P({relu6_:M4});function L4(n,e){const t={x:N(n,"x","reverse")},r={dims:e};return V.runKernel(jh,t,r)}const Dr=P({reverse_:L4});function P4(n){const e=N(n,"x","reverse");return R(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),Dr(e,0)}const B4=P({reverse1d_:P4});function U4(n,e){const t=N(n,"x","reverse");return R(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),Dr(t,e)}const V4=P({reverse2d_:U4});function W4(n,e){const t=N(n,"x","reverse");return R(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),Dr(t,e)}const z4=P({reverse3d_:W4});function G4(n,e){const t=N(n,"x","reverse");return R(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),Dr(t,e)}const j4=P({reverse4d_:G4});function H4(n){const e={x:N(n,"x","round")};return V.runKernel(Hh,e)}const n1=P({round_:H4});function X4(n){const e={x:N(n,"x","rsqrt","float32")};return V.runKernel(Xh,e)}const q4=P({rsqrt_:X4});function K4(n){const e={x:N(n,"x","selu")};return V.runKernel(Zh,e)}const Y4=P({selu_:K4});function Z4(n,e,t,r,a,s=[1,1],o="NHWC"){const i=N(n,"x","separableConv2d"),u=N(e,"depthwiseFilter","separableConv2d"),l=N(t,"pointwiseFilter","separableConv2d");let c=i,p=!1;if(i.rank===3&&(p=!0,c=Z(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");R(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),R(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),R(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),R(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),R(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const h=u.shape[2],d=u.shape[3];R(l.shape[2]===h*d,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${h*d}, but got ${l.shape[2]}.`);const m=Uu(c,u,r,a,o,s),y=Co(m,l,1,"valid",o);return p?Z(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const J4=P({separableConv2d_:Z4});async function Q4(n,e){const t=N(n,"x","setdiff1d"),r=N(e,"y","setdiff1d");R(t.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${r.dtype}).`),R(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),R(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const a=await t.data(),s=await r.data(),o=new Set(s);let i=0;for(let c=0;c<a.length;c++)o.has(a[c])||i++;const u=new ts([i],t.dtype),l=new ts([i],"int32");for(let c=0,p=0;c<a.length;c++)o.has(a[c])||(u.values[p]=a[c],l.values[p]=c,p++);return[u.toTensor(),l.toTensor()]}const eb=Q4;function tb(n){const e={x:N(n,"x","sign")};return V.runKernel(td,e)}const nb=P({sign_:tb});function rb(n){const e={x:N(n,"x","sin","float32")};return V.runKernel(Qh,e)}const ab=P({sin_:rb});function sb(n){const e={x:N(n,"x","sinh")};return V.runKernel(ed,e)}const ob=P({sinh_:sb});function ib(n,e,t){const r=N(n,"x","slice1d");return R(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),we(r,[e],[t])}const ub=P({slice1d_:ib});function lb(n,e,t){const r=N(n,"x","slice2d");return R(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),we(r,e,t)}const cb=P({slice2d_:lb});function pb(n,e,t){const r=N(n,"x","slice3d");return R(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),we(r,e,t)}const hb=P({slice3d_:pb});function db(n,e,t){const r=N(n,"x","slice4d");return R(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),we(r,e,t)}const fb=P({slice4d_:db});function mb(n,e=-1){const t=N(n,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const r={logits:t},a={dim:e};return V.runKernel(ud,r,a)}const gb=P({softmax_:mb});function yb(n){R(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const e={input:n};return V.runKernel(Up,e)}const Ku=P({fft_:yb});function xb(n){R(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const e={input:n};return V.runKernel(Yp,e)}const uo=P({ifft_:xb});function bb(n){const e=n.shape[n.shape.length-1],t=n.size/e;let r;if(e<=2){const a=Z(n,[t,e]);r=uo(a)}else{const a=[t,2*(e-1)],s=Z(ns(n),[t,e]),o=Z(ko(n),[t,e]),i=Dr(we(s,[0,1],[t,e-2]),1),u=me(Dr(we(o,[0,1],[t,e-2]),1),Ae(-1)),l=it([s,i],1),c=it([o,u],1),p=Z(tr(l,c),[a[0],a[1]]);r=uo(p)}if(r=ns(r),n.rank===3&&n.shape[0]!==0){const a=r,s=n.shape[0];r=Z(r,[s,r.shape[0]/s,r.shape[1]]),a.dispose()}return r}const r1=P({irfft_:bb});function vb(n,e,t=0){const r={x:N(n,"x","split")},a={numOrSizeSplits:e,axis:t};return V.runKernel(id,r,a)}const os=P({split_:vb});function wb(n,e){R(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let t=n.shape[n.shape.length-1];const r=n.size/t;let a;if(e!=null&&e<t){const m=n.shape.map(b=>0),y=n.shape.map(b=>b);y[n.shape.length-1]=e,a=we(n,m,y),t=e}else if(e!=null&&e>t){const m=n.shape.map(y=>y);m[n.shape.length-1]=e-t,a=it([n,Fr(m)],n.shape.length-1),t=e}else a=n;const s=Vu(a),o=Z(tr(a,s),[r,t]),i=Ku(o),u=Math.floor(t/2)+1,l=ns(i),c=ko(i),p=os(l,[u,t-u],l.shape.length-1),h=os(c,[u,t-u],c.shape.length-1),d=a.shape.slice();return d[a.shape.length-1]=u,Z(tr(p[0],h[0]),d)}const Yu=P({rfft_:wb});function Sb(n,e){let t=N(n,"a","squaredDifference"),r=N(e,"b","squaredDifference");[t,r]=Ke(t,r),$e(t.shape,r.shape);const a={a:t,b:r},s={};return V.runKernel(fd,a,s)}const a1=P({squaredDifference_:Sb});function kb(n,e){const t=N(n,"x","squeeze","string_or_numeric");return Z(t,rr(t.shape,e).newShape)}const tt=P({squeeze_:kb});function Tb(n,e=0){const t=no(n,"tensors","stack","string_or_numeric");R(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&R(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");const r=t,a={axis:e};return V.runKernel(Rh,r,a)}const Mn=P({stack_:Tb});function Eb(n,e=0){const t={x:N(n,"x","step")},r={alpha:e};return V.runKernel(Nd,t,r)}const s1=P({step_:Eb});function Cb(n,e,t,r,a=0,s=0,o=0,i=0,u=0){const l={x:N(n,"x","stridedSlice","string_or_numeric")},c={begin:e,end:t,strides:r,beginMask:a,endMask:s,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};return V.runKernel(md,l,c)}const Ib=P({stridedSlice_:Cb});function Nb(n){const e={x:N(n,"x","tan","float32")};return V.runKernel(vd,e)}const $b=P({tan_:Nb});function gt(n,e){ga(n);const t=ar(n,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return sr(n,null,t,e)}function Qn(n,e,t){if(ga(n),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=ar(n,t);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return sr(n,e,r,t)}function Rb(n,e,t){if(ga(n),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=ar(n,t);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return sr(n,e,r,t)}function _b(n,e,t){if(ga(n),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=ar(n,t);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return sr(n,e,r,t)}function Ab(n,e,t){if(ga(n),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=ar(n,t);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,sr(n,e,r,t)}function Ob(n,e=1,t=!0){const r=N(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const a=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>a)throw new Error(`'k' passed to topk() must be <= the last dimension (${a}) but got ${e}`);const s={x:r},o={k:e,sorted:t},[i,u]=V.runKernel(Sd,s,o);return{values:i,indices:u}}const Fb=P({topk_:Ob});function Db(n,e=0,t=1,r,a){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const s=new qu(e,t,r,!0,a),o=He(n,r);for(let i=0;i<o.values.length;i++)o.values[i]=s.nextValue();return o.toTensor()}const Mb=P({truncatedNormal_:Db});function Lb(n,e=0){const t=N(n,"x","unique","string_or_numeric");R(t.rank>0,()=>"The input tensor must be at least 1D");const r={x:t},a={axis:e},[s,o]=V.runKernel(Td,r,a);return{values:s,indices:o}}const Pb=P({unique_:Lb});function Bb(n,e,t){const r=N(n,"x","unsortedSegmentSum"),a=N(e,"segmentIds","unsortedSegmentSum","int32");R(ua(t),()=>"numSegments must be of dtype int");const s={x:r,segmentIds:a},o={numSegments:t};return V.runKernel(Cd,s,o)}const Ub=P({unsortedSegmentSum_:Bb});function Vb(n,e=0){const t=N(n,"x","unstack","string_or_numeric");R(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);const r={value:t},a={axis:e};return V.runKernel(Ed,r,a)}const Br=P({unstack_:Vb});function Wb(n,e){return Hu(n,e,"right")}function zb(n,e=!0,t,r){return V.makeVariable(n,e,t,r)}function o1(n,e){const t=[];for(let s=0;s<e.length;s++)e[s]&&t.push(s);const r=He(n,"int32"),a=He([t.length,n.length],"int32");for(let s=0;s<t.length;s++){const o=r.indexToLoc(t[s]),i=s*n.length;a.values.set(o,i)}return a.toTensor()}async function Gb(n){const e=N(n,"condition","whereAsync","bool"),t=await e.data(),r=o1(e.shape,t);return n!==e&&e.dispose(),r}const i1=Gb;async function jb(n,e,t){const r=N(n,"tensor","boolMask"),a=N(e,"mask","boolMask","bool"),s=t??0,o=a.rank,i=r.shape;R(o>0,()=>"mask cannot be scalar"),Lt(i.slice(s,s+o),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let y=s;y<s+o;y++)u*=i[y];const l=i.slice(0,s).concat([u],i.slice(s+o)),c=Z(r,l),p=Z(a,[-1]),h=await i1(p),d=tt(h,[1]),m=Uf(c,d,s);return n!==r&&r.dispose(),e!==a&&a.dispose(),d.dispose(),c.dispose(),p.dispose(),h.dispose(),m}const Hb=jb;function Xb(n,e,t,r,a=!0){const s=N(n,"v","movingAverage"),o=N(e,"x","movingAverage"),i=N(t,"decay","movingAverage");ig(s,o),R(qe(s.shape,o.shape),()=>"Shape mismatch in v and x");const u=Ae(1),l=Ce(u,i);let c=me(Ce(o,s),l);if(a){R(r!=null,()=>"When using zeroDebias: true, step is required.");const p=N(r,"step","movingAverage");c=De(c,Ce(u,Gu(i,p)))}return Pe(s,c)}const qb=P({movingAverage_:Xb});function Kb(n,e,t){const r=N(n,"indices","scatterND","int32"),a=N(e,"updates","scatterND");ff(a,r,t);const s={indices:r,updates:a},o={shape:t};return V.runKernel(qh,s,o)}const Yb=P({scatterND_:Kb});function Zb(n,e,t,r){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const a=n.rank>0?n.shape[0]:1,s=n.rank>1?n.shape[1]:1;if(t.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${s}.`);const o=e.size;if(!(e.rank===0||e.rank===1&&o===a))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${a}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}function Jb(n,e,t,r=0){const a=N(n,"sparseIndices","sparseToDense","int32"),s=N(e,"sparseValues","sparseToDense","string_or_numeric"),o=N(r,"defaultValue","sparseToDense",s.dtype);Zb(a,s,t,o);const i={sparseIndices:a,sparseValues:s,defaultValue:o},u={outputShape:t};return V.runKernel(dd,i,u)}const Qb=P({sparseToDense_:Jb});function ev(n,e){const t=N(e,"indices","gatherND","int32"),r={params:N(n,"x","gatherND","string_or_numeric"),indices:t};return V.runKernel(Xp,r)}const tv=P({gatherND_:ev});function nv(n,e){if(e==null)return n.shape.slice();if(qe(n.shape,e))return e;if(n.shape.length===e.length){const t=[];for(let r=0;r<n.shape.length;r++)e[r]==null&&n.shape[r]!=null?t.push(n.shape[r]):t.push(e[r]);return t}return e}function rv(n,e,t,r){const a=N(n,"x","dropout");if(R(a.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`),R(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return n instanceof Ge?a.clone():a;const s=nv(a,t),o=1-e,i=De(Bf(Pe(e1(s,0,1,"float32",r),o)),o);return me(a,i)}const av=P({dropout_:rv});function u1(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function Zu(n,e,t){const r=1-n%2,a=new Float32Array(n);for(let s=0;s<n;++s){const o=2*Math.PI*s/(n+r-1);a[s]=e-t*Math.cos(o)}return gt(a,"float32")}async function sv(n,e,t=1){const r=N(n,"predictions","inTopK"),a=N(e,"targets","inTopK");R(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),R(r.rank-1===a.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`),Lt(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const s=r.shape[r.shape.length-1];R(t>0&&t<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${t}`);const o=await r.data(),i=await a.data(),[u,l]=[o.length/s,s],c=On("bool",u);for(let p=0;p<u;p++){const h=p*l,d=o.subarray(h,h+l),m=[];for(let y=0;y<d.length;y++)m.push({value:d[y],index:y});m.sort((y,b)=>b.value-y.value),c[p]=0;for(let y=0;y<t;y++)if(m[y].index===i[p]){c[p]=1;break}}return n!==r&&r.dispose(),e!==a&&a.dispose(),vn(c,a.shape,"bool")}const ov=sv;function iv(n,e,t,r,a,s="NHWC",o){let i=n;n.rank===3&&(i=Z(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let u=e;u.rank===3&&(u=Z(e,[1,e.shape[0],e.shape[1],e.shape[2]])),R(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),R(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),R(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);const l=s==="NHWC"?i.shape[3]:i.shape[1],c=s==="NHWC"?u.shape[3]:u.shape[1];R(l===t[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${t[2]}.`),R(c===t[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${t[3]}).`),Jt("conv2dDerFilter",a,o);const p={x:i,dy:u},h={strides:r,pad:a,dataFormat:s,dimRoundingMode:o,filterShape:t};return V.runKernel(gp,p,h)}const uv=P({conv2DBackpropFilter_:iv});function _o(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return me(n,s1(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function Ao(n,e){let t=e;const r=uf(n.shape,e.shape);return r.length>0&&(t=Ve(t,r)),Z(t,n.shape)}function Oo(n,e,t,r){if(e==="linear")return n;if(e==="relu")return Ro(n);if(e==="elu")return Df(n);if(e==="relu6")return t1(n);if(e==="prelu")return Jf(n,t);if(e==="leakyrelu")return Wf(n,r);if(e==="sigmoid")return Rr(n);throw new Error(`Unknown fused activation ${e}.`)}const Fo=(n,e)=>!(n>0)||e==="linear";function lv({x:n,filter:e,strides:t,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(u=u||"linear",Fo(V.state.gradientDepth,u)===!1){R(a==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${a} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let U=Co(n,e,t,r,a,s,o);return i!=null&&(U=Pe(U,i)),Oo(U,u,l,c)}const p=N(n,"x","conv2d","float32"),h=N(e,"filter","conv2d","float32");let d=p,m=!1;p.rank===3&&(m=!0,d=Z(p,[1,p.shape[0],p.shape[1],p.shape[2]])),R(d.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${d.rank}.`),R(h.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${h.rank}.`),Jt("fused conv2d",r,o);const y=a==="NHWC"?d.shape[3]:d.shape[1];R(h.shape[2]===y,()=>`Error in conv2d: depth of input (${y}) must match input depth for filter ${h.shape[2]}.`),R(_t(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`);const b=Pt(d.shape,h.shape,t,s,r,o);let x;i!=null&&(x=N(i,"bias","fused conv2d"),[x]=Ke(x,p),a==="NHWC"?$e(b.outShape,x.shape):(R(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),R(x.shape.length===0||x.shape[0]===b.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${b.outChannels})`)));let T;if(l!=null){const U=l.shape;if(R(U.length<=1||U.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${U.length}.`),U.length===1)R(U[0]===1||U[0]===b.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${U}) is not compatible with the number of output channels (${b.outChannels}).`);else if(U.length===3)try{$e(U,b.outShape)}catch{const X=`Error in fused conv2d: PReLU activation weights (${U}) is not compatible with the output shape of the conv2d (${b.outShape}).`;throw Error(X)}T=N(l,"prelu weights","fused conv2d")}const $=(U,X)=>{R(a==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${a} but only NHWC is currently supported.`);const[z,L,C,q]=X,ee=_o(U,C,u);R(rs(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const te=Of(L.shape,ee,z,t,r),le=uv(L,ee,z.shape,t,r),de=[te,le];if(q!=null){const fe=Ao(q,ee);de.push(fe)}return de},F={x:d,filter:h,bias:x,preluActivationWeights:T},M={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:c};return i==null?Dn((U,X,z)=>{let L=V.runKernel(Ai,F,M);return z([X,U,L]),m&&(L=Z(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:$}})(d,h):Dn((U,X,z,L)=>{let C=V.runKernel(Ai,F,M);return L([X,U,C,z]),m&&(C=Z(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:$}})(d,h,x)}const cv=P({fusedConv2d_:lv});function pv(n,e,t,r,a,s=[1,1],o){let i=n;n.rank===3&&(i=Z(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let u=e;u.rank===3&&(u=Z(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const l={x:i,dy:u},c={strides:r,pad:a,dimRoundingMode:o,dilations:s,filterShape:t};return V.runKernel(Np,l,c)}const hv=P({depthwiseConv2dNativeBackpropFilter_:pv});function dv(n,e,t,r,a,s=[1,1],o){let i=e,u=!1;e.rank===3&&(u=!0,i=Z(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const l={dy:i,filter:t},c={strides:r,pad:a,dimRoundingMode:o,dilations:s,inputShape:n},p=V.runKernel($p,l,c);return u?Z(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const fv=P({depthwiseConv2dNativeBackpropInput_:dv});function mv({x:n,filter:e,strides:t,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(Fo(V.state.gradientDepth,u)===!1){let M=Uu(n,e,t,r,a,s,o);return i!=null&&(M=Pe(M,i)),Oo(M,u,l,c)}const p=N(n,"x","depthwiseConv2d","float32"),h=N(e,"filter","depthwiseConv2d","float32");let d=p,m=!1;p.rank===3&&(m=!0,d=Z(p,[1,p.shape[0],p.shape[1],p.shape[2]])),R(d.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),R(h.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`),R(d.shape[3]===h.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${h.shape[2]}.`),s==null&&(s=[1,1]),R(_t(t,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),Jt("fused depthwiseConv2d",r,o);const y=Pt(d.shape,h.shape,t,s,r,o,!0);let b;i!=null&&(b=N(i,"bias","fused conv2d"),[b]=Ke(b,p),$e(y.outShape,b.shape));let x;l!=null&&(x=N(l,"prelu weights","fused depthwiseConv2d"));const T=(M,U)=>{R(rs(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);const[X,z,L,C]=U,q=_o(M,L,u),ee=fv(z.shape,q,X,t,r,s,o),te=hv(z,q,X.shape,t,r,s,o);if(C!=null){const le=Ao(b,q);return[ee,te,le]}return[ee,te]},$={x:d,filter:h,bias:b,preluActivationWeights:x},F={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:c};return i==null?Dn((M,U,X)=>{let z=V.runKernel(Oi,$,F);return X([U,M,z]),m&&(z=Z(z,[z.shape[1],z.shape[2],z.shape[3]])),{value:z,gradFunc:T}})(d,h):Dn((M,U,X,z)=>{let L=V.runKernel(Oi,$,F);return z([U,M,L,X]),m&&(L=Z(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:T}})(d,h,b)}const gv=P({fusedDepthwiseConv2d_:mv});function yv({a:n,b:e,transposeA:t=!1,transposeB:r=!1,bias:a,activation:s="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(Fo(V.state.gradientDepth,s)===!1){let C=Oe(n,e,t,r);return a!=null&&(C=Pe(C,a)),Oo(C,s,o,i)}let u=N(n,"a","fused matMul"),l=N(e,"b","fused matMul");[u,l]=Ke(u,l);const c=t?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?l.shape[l.rank-1]:l.shape[l.rank-2],h=t?u.shape[u.rank-1]:u.shape[u.rank-2],d=r?l.shape[l.rank-2]:l.shape[l.rank-1],m=u.shape.slice(0,-2),y=l.shape.slice(0,-2),b=ae(m),x=ae(y);R(c===p,()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${t} and transposeB=${r} must match.`);const T=$e(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([h,d]),$=t?Z(u,[b,c,h]):Z(u,[b,h,c]),F=r?Z(l,[x,d,p]):Z(l,[x,p,d]);let M;a!=null&&(M=N(a,"bias","fused matMul"),[M]=Ke(M,u),$e(T,M.shape));let U;o!=null&&(U=N(o,"prelu weights","fused matMul"));const X=(C,q)=>{const[ee,te,le,de]=q,fe=_o(Z(C,le.shape),le,s);let Re,ge;if(!t&&!r?(Re=Oe(fe,te,!1,!0),ge=Oe(ee,fe,!0,!1)):!t&&r?(Re=Oe(fe,te,!1,!1),ge=Oe(fe,ee,!0,!1)):t&&!r?(Re=Oe(te,fe,!1,!0),ge=Oe(ee,fe,!1,!1)):(Re=Oe(te,fe,!0,!0),ge=Oe(fe,ee,!0,!0)),a!=null){const Te=Ao(de,fe);return[Re,ge,Te]}else return[Re,ge]},z={a:$,b:F,bias:M,preluActivationWeights:U},L={transposeA:t,transposeB:r,activation:s,leakyreluAlpha:i};return a==null?Dn((C,q,ee)=>{const te=V.runKernel(_i,z,L);return ee([C,q,te]),{value:Z(te,T),gradFunc:X}})($,F):Dn((C,q,ee,te)=>{const le=V.runKernel(_i,z,L);return te([C,q,le,ee]),{value:Z(le,T),gradFunc:X}})($,F,M)}const xv=P({fusedMatMul_:yv});const bv=Object.freeze(Object.defineProperty({__proto__:null,conv2d:cv,depthwiseConv2d:gv,matMul:xv},Symbol.toStringTag,{value:"Module"}));function vv(n){return Zu(n,.54,.46)}const wv=P({hammingWindow_:vv});function Sv(n){return Zu(n,.5,.5)}const l1=P({hannWindow_:Sv});function kv(n,e,t,r=!1,a=0){let s=0;const o=[];for(;s+e<=n.size;)o.push(we(n,s,e)),s+=t;if(r)for(;s<n.size;){const i=s+e-n.size,u=it([we(n,s,e-i),Eo([i],a)]);o.push(u),s+=t}return o.length===0?Qn([],[0,e]):Z(it(o),[o.length,e])}const c1=P({frame_:kv});function Tv(n,e,t,r,a=l1){r==null&&(r=u1(e));const s=c1(n,e,t),o=me(s,a(e));return Yu(o,r)}const Ev=P({stft_:Tv});function Cv(n,e,t,r,a="bilinear",s=0){const o=N(n,"image","cropAndResize"),i=N(e,"boxes","cropAndResize","float32"),u=N(t,"boxInd","cropAndResize","int32"),l=i.shape[0];R(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),R(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),R(u.rank===1&&u.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),R(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),R(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),R(a==="bilinear"||a==="nearest",()=>`method must be bilinear or nearest, but was ${a}`);const c={image:o,boxes:i,boxInd:u},p={method:a,extrapolationValue:s,cropSize:r};return V.runKernel(Tp,c,p)}const Iv=P({cropAndResize_:Cv});function Nv(n){const e=N(n,"image","flipLeftRight","float32");R(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const t={image:e};return V.runKernel(Wp,t,{})}const $v=P({flipLeftRight_:Nv});function Rv(n){const e=N(n,"image","grayscaleToRGB"),t=e.rank-1,r=e.shape[t];R(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),R(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const a=new Array(e.rank);return a.fill(1,0,t),a[t]=3,es(e,a)}const _v=P({grayscaleToRGB_:Rv});function Av(n,e,t=0,r=.5){const a=N(n,"image","rotateWithOffset","float32");R(a.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`);const s={image:a},o={radians:e,fillValue:t,center:r};return V.runKernel($d,s,o)}const Ov=P({rotateWithOffset_:Av});function ba(n,e,t,r,a,s){r==null&&(r=.5),a==null&&(a=Number.NEGATIVE_INFINITY),s==null&&(s=0);const o=n.shape[0];return t=Math.min(t,o),R(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),R(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),R(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),R(e.rank===1,()=>"scores must be a 1D tensor"),R(e.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${e.shape[0]}`),R(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:t,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}function Fv(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY){const s=N(n,"boxes","nonMaxSuppression","float32"),o=N(e,"scores","nonMaxSuppression","float32"),i=ba(s,o,t,r,a);t=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;const u={maxOutputSize:t,iouThreshold:r,scoreThreshold:a};return V.runKernel(Eh,{boxes:s,scores:o},u)}const Dv=P({nonMaxSuppression_:Fv});function Mv(n,e,t){const r=Lv(n,e,t),a=r<0?-(r+1):r;n.splice(a,0,e)}function Lv(n,e,t){return Bv(n,e,t||Pv)}function Pv(n,e){return n>e?1:n<e?-1:0}function Bv(n,e,t){let r=0,a=n.length,s=0,o=!1;for(;r<a;){s=r+(a-r>>>1);const i=t(e,n[s]);i>0?r=s+1:(a=s,o=!i)}return o?r:-r-1}function p1(n,e,t,r,a){return Ju(n,e,t,r,a,0)}function h1(n,e,t,r,a,s){return Ju(n,e,t,r,a,0,!1,s,!0)}function d1(n,e,t,r,a,s){return Ju(n,e,t,r,a,s,!0)}function Ju(n,e,t,r,a,s,o=!1,i=!1,u=!1){const l=[];for(let b=0;b<e.length;b++)e[b]>a&&l.push({score:e[b],boxIndex:b,suppressBeginIndex:0});l.sort(Vl);const c=s>0?-.5/s:0,p=[],h=[];for(;p.length<t&&l.length>0;){const b=l.pop(),{score:x,boxIndex:T,suppressBeginIndex:$}=b;if(x<a)break;let F=!1;for(let M=p.length-1;M>=$;--M){const U=Uv(n,T,p[M]);if(U>=r){F=!0;break}if(b.score=b.score*Vv(r,c,U),b.score<=a)break}b.suppressBeginIndex=p.length,F||(b.score===x?(p.push(T),h.push(b.score)):b.score>a&&Mv(l,b,Vl))}const d=p.length,m=t-d;i&&m>0&&(p.push(...new Array(m).fill(0)),h.push(...new Array(m).fill(0)));const y={selectedIndices:p};return o&&(y.selectedScores=h),u&&(y.validOutputs=d),y}function Uv(n,e,t){const r=n.subarray(e*4,e*4+4),a=n.subarray(t*4,t*4+4),s=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),c=Math.min(a[1],a[3]),p=Math.max(a[0],a[2]),h=Math.max(a[1],a[3]),d=(i-s)*(u-o),m=(p-l)*(h-c);if(d<=0||m<=0)return 0;const y=Math.max(s,l),b=Math.max(o,c),x=Math.min(i,p),T=Math.min(u,h),$=Math.max(x-y,0)*Math.max(T-b,0);return $/(d+m-$)}function Vv(n,e,t){const r=Math.exp(e*t*t);return t<=n?r:0}function Vl(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}async function Wv(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY){const s=N(n,"boxes","nonMaxSuppressionAsync"),o=N(e,"scores","nonMaxSuppressionAsync"),i=ba(s,o,t,r,a);t=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;const u=await Promise.all([s.data(),o.data()]),l=u[0],c=u[1],{selectedIndices:p}=p1(l,c,t,r,a);return s!==n&&s.dispose(),o!==e&&o.dispose(),gt(p,"int32")}const zv=Wv;function Gv(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=N(n,"boxes","nonMaxSuppression"),i=N(e,"scores","nonMaxSuppression"),u=ba(o,i,t,r,a,s);t=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,s=u.softNmsSigma;const l={boxes:o,scores:i},c={maxOutputSize:t,iouThreshold:r,scoreThreshold:a,softNmsSigma:s},p=V.runKernel(Ih,l,c);return{selectedIndices:p[0],selectedScores:p[1]}}const jv=P({nonMaxSuppressionWithScore_:Gv});async function Hv(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=N(n,"boxes","nonMaxSuppressionAsync"),i=N(e,"scores","nonMaxSuppressionAsync"),u=ba(o,i,t,r,a,s);t=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,s=u.softNmsSigma;const l=await Promise.all([o.data(),i.data()]),c=l[0],p=l[1],{selectedIndices:h,selectedScores:d}=d1(c,p,t,r,a,s);return o!==n&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:gt(h,"int32"),selectedScores:gt(d)}}const Xv=Hv;function qv(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=N(n,"boxes","nonMaxSuppression"),i=N(e,"scores","nonMaxSuppression"),u=ba(o,i,t,r,a,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,h={boxes:o,scores:i},d={maxOutputSize:l,iouThreshold:c,scoreThreshold:p,padToMaxOutputSize:s},m=V.runKernel(Ch,h,d);return{selectedIndices:m[0],validOutputs:m[1]}}const Kv=P({nonMaxSuppressionPadded_:qv});async function Yv(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=N(n,"boxes","nonMaxSuppressionAsync"),i=N(e,"scores","nonMaxSuppressionAsync"),u=ba(o,i,t,r,a,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,[h,d]=await Promise.all([o.data(),i.data()]),{selectedIndices:m,validOutputs:y}=h1(h,d,l,c,p,s);return o!==n&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:gt(m,"int32"),validOutputs:Ae(y,"int32")}}const Zv=Yv;function Jv(n,e,t=!1,r=!1){const a=N(n,"images","resizeBilinear");R(a.rank===3||a.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`),R(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),R(r===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=a,o=!1;a.rank===3&&(o=!0,s=Z(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const i={images:s},u={alignCorners:t,halfPixelCenters:r,size:e},l=V.runKernel(zh,i,u);return o?Z(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Qv=P({resizeBilinear_:Jv});function ew(n,e,t=!1,r=!1){const a=N(n,"images","resizeNearestNeighbor");R(a.rank===3||a.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`),R(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),R(a.dtype==="float32"||a.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),R(r===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=a,o=!1;a.rank===3&&(o=!0,s=Z(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const i={images:s},u={alignCorners:t,halfPixelCenters:r,size:e},l=V.runKernel(Wh,i,u);return o?Z(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const tw=P({resizeNearestNeighbor_:ew});function nw(n,e="binary",t=!1,r=.5){const a=N(n,"image","threshold"),s=.2989,o=.587,i=.114,u=a.shape[0]*a.shape[1];let l=me(gt([r]),255),c,p,h,d;if(R(a.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${a.rank}.`),R(a.shape[2]===3||a.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${a.shape[2]}.`),R(a.dtype==="int32"||a.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${a.dtype}.`),R(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),a.shape[2]===3){[c,p,h]=os(a,[1,1,1],-1);const y=me(c,s),b=me(p,o),x=me(h,i);d=Pe(Pe(y,b),x)}else d=n;if(e==="otsu"){const y=_f(je(n1(d),"int32"),vn([]),256);l=rw(y,u)}const m=t?ju(d,l):$o(d,l);return je(me(m,255),"int32")}function rw(n,e){let t=gt([-1]),r=gt([0]),a=gt([0]),s,o,i,u,l,c;for(let p=0;p<n.size-1;p++){s=we(n,0,p+1),o=we(n,p+1),l=De(Ve(s),e),c=De(Ve(o),e);const h=Ve(me(s,ss(0,s.size)));i=De(h,Ve(s));const d=Eo(o.shape,s.size),m=Pe(ss(0,o.size),d),y=me(o,m);u=De(Ve(y),Ve(o));const b=Ce(i,u),x=Ce(i,u),T=me(l,c);a=me(me(T,b),x);const $=$o(a,r);r=ha($,a,r),t=ha($,gt([p]),t)}return t}const aw=P({threshold_:nw});function sw(n,e,t="nearest",r="constant",a=0,s){const o=N(n,"image","transform","float32"),i=N(e,"transforms","transform","float32");R(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),R(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),R(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);const u={image:o,transforms:i},l={interpolation:t,fillMode:r,fillValue:a,outputShape:s};return V.runKernel(kd,u,l)}const ow=P({transform_:sw});function iw(n,e,t){R(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),R(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`);const r=N(n,"a","bandPart");R(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const a=r.shape,[s,o]=r.shape.slice(-2);if(!(e<=s))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${s}).`);if(!(t<=o))throw new Error(`bandPart(): numUpper (${t}) must not be greater than the number of columns (${o}).`);e<0&&(e=s),t<0&&(t=o);const i=Z(ss(0,s,1,"int32"),[-1,1]),u=ss(0,o,1,"int32"),l=Ce(i,u),c=oo(ju(l,Ae(+e,"int32")),Vf(l,Ae(-t,"int32"))),p=Fr([s,o],r.dtype);return Z(Mn(Br(Z(r,[-1,s,o])).map(h=>ha(c,h,p))),a)}const uw=P({bandPart_:iw});function lw(n){let e;if(Array.isArray(n)){e=!1,R(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const a=n[0].shape[0];for(let s=1;s<n.length;++s)R(n[s].shape[0]===a,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[s].shape[0]} vs. ${a})`)}else e=!0,n=os(n,n.shape[0],0).map(a=>tt(a,[0]));R(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const t=[],r=n;for(let a=0;a<n.length;++a)t.push(V.tidy(()=>{let s=r[a];if(a>0)for(let o=0;o<a;++o){const i=me(Ve(me(t[o],s)),t[o]);s=Ce(s,i)}return De(s,No(s,"euclidean"))}));return e?Mn(t,0):t}const cw=P({gramSchmidt_:lw});function pw(n,e=!1){if(R(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Wl(n,e);{const t=n.shape.slice(0,n.shape.length-2).reduce((u,l)=>u*l),r=Br(Z(n,[t,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),a=[],s=[];r.forEach(u=>{const[l,c]=Wl(u,e);a.push(l),s.push(c)});const o=Z(Mn(a,0),n.shape),i=Z(Mn(s,0),n.shape);return[o,i]}}function Wl(n,e=!1){return V.tidy(()=>{R(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const t=n.shape[0],r=n.shape[1];let a=Pf(t),s=Jn(n);const o=Qn([[1]],[1,1]);let i=Jn(o);const u=t>=r?r:t;for(let l=0;l<u;++l){const c=s,p=i,h=a;[i,s,a]=V.tidy(()=>{const d=we(s,[l,l],[t-l,1]),m=No(d),y=we(s,[l,l],[1,1]),b=ha($o(y,0),Qn([[-1]]),Qn([[1]])),x=Ce(y,me(b,m)),T=De(d,x);T.shape[0]===1?i=Jn(o):i=it([o,we(T,[1,0],[T.shape[0]-1,T.shape[1]])],0);const $=An(De(Oe(b,x),m)),F=we(s,[l,0],[t-l,r]),M=me($,i),U=Hi(i);if(l===0)s=Ce(F,Oe(M,Oe(U,F)));else{const L=Ce(F,Oe(M,Oe(U,F)));s=it([we(s,[0,0],[l,r]),L],0)}const X=Hi(M),z=we(a,[0,l],[t,a.shape[1]-l]);if(l===0)a=Ce(z,Oe(Oe(z,i),X));else{const L=Ce(z,Oe(Oe(z,i),X));a=it([we(a,[0,0],[t,l]),L],1)}return[i,s,a]}),bn([c,p,h])}return!e&&t>r&&(a=we(a,[0,0],[t,r]),s=we(s,[0,0],[r,r])),[a,s]})}const hw=P({qr_:pw});var St;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(St||(St={}));function dw(n,e,t=St.SUM_BY_NONZERO_WEIGHTS){const r=N(n,"losses","computeWeightedLoss");let a=null;e!=null&&(a=N(e,"weights","computeWeightedLoss"));const s=a==null?r:me(r,a);if(t===St.NONE)return s;if(t===St.SUM)return Ve(s);if(t===St.MEAN){if(a==null)return io(s);{const o=r.size/a.size,i=De(Ve(s),Ve(a));return o>1?De(i,Ae(o)):i}}if(t===St.SUM_BY_NONZERO_WEIGHTS){if(a==null)return De(Ve(s),Ae(r.size));{const o=me(a,Cr(r.shape)),i=je(Ve(Yf(o,Ae(0))),"float32");return De(Ve(s),i)}}throw Error(`Unknown reduction: ${t}`)}const Bn=P({computeWeightedLoss_:dw});function fw(n,e,t,r=St.SUM_BY_NONZERO_WEIGHTS){const a=N(n,"labels","absoluteDifference"),s=N(e,"predictions","absoluteDifference");let o=null;t!=null&&(o=N(t,"weights","absoluteDifference")),Lt(a.shape,s.shape,"Error in absoluteDifference: ");const i=Kt(Ce(a,s));return Bn(i,o,r)}const mw=P({absoluteDifference_:fw});function gw(n,e,t,r,a=St.SUM_BY_NONZERO_WEIGHTS){const s=N(n,"labels","cosineDistance"),o=N(e,"predictions","cosineDistance");let i=null;r!=null&&(i=N(r,"weights","cosineDistance")),Lt(s.shape,o.shape,"Error in cosineDistance: ");const u=Ae(1),l=Ce(u,Ve(me(s,o),t,!0));return Bn(l,i,a)}const yw=P({cosineDistance_:gw});function xw(n,e,t,r=St.SUM_BY_NONZERO_WEIGHTS){let a=N(n,"labels","hingeLoss");const s=N(e,"predictions","hingeLoss");let o=null;t!=null&&(o=N(t,"weights","hingeLoss")),Lt(a.shape,s.shape,"Error in hingeLoss: ");const i=Ae(1);a=Ce(me(Ae(2),a),i);const u=Ro(Ce(i,me(a,s)));return Bn(u,o,r)}const bw=P({hingeLoss_:xw});function vw(n,e,t,r=1,a=St.SUM_BY_NONZERO_WEIGHTS){const s=N(n,"labels","huberLoss"),o=N(e,"predictions","huberLoss");let i=null;t!=null&&(i=N(t,"weights","huberLoss")),Lt(s.shape,o.shape,"Error in huberLoss: ");const u=Ae(r),l=Kt(Ce(o,s)),c=Kf(l,u),p=Ce(l,c),h=Pe(me(Ae(.5),Io(c)),me(u,p));return Bn(h,i,a)}const ww=P({huberLoss_:vw});function Sw(n,e,t,r=1e-7,a=St.SUM_BY_NONZERO_WEIGHTS){const s=N(n,"labels","logLoss"),o=N(e,"predictions","logLoss");let i=null;t!=null&&(i=N(t,"weights","logLoss")),Lt(s.shape,o.shape,"Error in logLoss: ");const u=Ae(1),l=Ae(r),c=An(me(s,as(Pe(o,l)))),p=me(Ce(u,s),as(Pe(Ce(u,o),l))),h=Ce(c,p);return Bn(h,i,a)}const kw=P({logLoss_:Sw});function Tw(n,e,t,r=St.SUM_BY_NONZERO_WEIGHTS){const a=N(n,"labels","meanSquaredError"),s=N(e,"predictions","meanSquaredError");let o=null;t!=null&&(o=N(t,"weights","meanSquaredError")),Lt(a.shape,s.shape,"Error in meanSquaredError: ");const i=a1(a,s);return Bn(i,o,r)}const Ew=P({meanSquaredError_:Tw});function Cw(n,e){const t=N(n,"labels","sigmoidCrossEntropyWithLogits"),r=N(e,"logits","sigmoidCrossEntropyWithLogits");Lt(t.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=Ro(r),s=me(r,t),o=zf(Fn(An(Kt(r))));return Pe(Ce(a,s),o)}function Iw(n,e,t,r=0,a=St.SUM_BY_NONZERO_WEIGHTS){let s=N(n,"multiClassLabels","sigmoidCrossEntropy");const o=N(e,"logits","sigmoidCrossEntropy");let i=null;if(t!=null&&(i=N(t,"weights","sigmoidCrossEntropy")),Lt(s.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=Ae(r),c=Ae(1),p=Ae(.5);s=Pe(me(s,Ce(c,l)),me(p,l))}const u=Cw(s,o);return Bn(u,i,a)}const Nw=P({sigmoidCrossEntropy_:Iw});function $w(n,e,t=-1){if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${t}`);return Dn((r,a,s)=>{const o=jf(a,[t],!0),i=Ce(je(a,"float32"),o);s([r,i]);const u=An(me(i,r));return{value:Ve(u,[t]),gradFunc:(l,c)=>{const[p,h]=c,d=Bt(l.shape,[t]);return[me(Z(l,d),Ce(je(p,"float32"),Fn(h))),me(Z(l,d),Ce(Fn(h),je(p,"float32")))]}}})(n,e)}function Rw(n,e,t,r=0,a=St.SUM_BY_NONZERO_WEIGHTS){let s=N(n,"onehotLabels","softmaxCrossEntropy");const o=N(e,"logits","softmaxCrossEntropy");let i=null;if(t!=null&&(i=N(t,"weights","softmaxCrossEntropy")),Lt(s.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const l=Ae(r),c=Ae(1),p=Ae(s.shape[1]);s=Pe(me(s,Ce(c,l)),De(l,p))}const u=$w(s,o);return Bn(u,i,a)}const _w=P({softmaxCrossEntropy_:Rw});function Aw(n,e,t,r){const a=N(n,"indices","sparseFillEmptyRows","int32"),s=N(e,"values","sparseFillEmptyRows"),o=N(t,"denseShape","sparseFillEmptyRows","int32"),i=N(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(a.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${a.shape}`);if(s.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:a,values:s,denseShape:o,defaultValue:i},l=V.runKernel(ld,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const Ow=P({sparseFillEmptyRows_:Aw});function Fw(n,e,t){const r=N(n,"inputIndices","sparseReshape","int32"),a=N(e,"inputShape","sparseReshape","int32"),s=N(t,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(a.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(s.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);const o={inputIndices:r,inputShape:a,newShape:s},i=V.runKernel(cd,o);return{outputIndices:i[0],outputShape:i[1]}}const Dw=P({sparseReshape_:Fw});function Mw(n,e,t){const r=N(n,"data","sparseSegmentMean"),a=N(e,"indices","sparseSegmentMean","int32"),s=N(t,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(a.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${a.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return V.runKernel(pd,o)}const Lw=P({sparseSegmentMean_:Mw});function Pw(n,e,t){const r=N(n,"data","sparseSegmentSum"),a=N(e,"indices","sparseSegmentSum","int32"),s=N(t,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(a.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${a.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return V.runKernel(hd,o)}const Bw=P({sparseSegmentSum_:Pw});function Uw(n,e,t,r,a,s,o,i){const u=N(n,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=N(e,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const c={separator:t,nGramWidths:r,leftPad:a,rightPad:s,padWidth:o,preserveShortSequences:i},p={data:u,dataSplits:l},h=V.runKernel(gd,p,c);return{nGrams:h[0],nGramsSplits:h[1]}}const Vw=P({stringNGrams_:Uw});function Ww(n,e,t=!0){const r=N(n,"input","stringSplit","string"),a=N(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(a.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${a.shape}`);const s={skipEmpty:t},o={input:r,delimiter:a},i=V.runKernel(yd,o,s);return{indices:i[0],values:i[1],shape:i[2]}}const zw=P({stringSplit_:Ww});function Gw(n,e){const t=N(n,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const a={input:t};return V.runKernel(xd,a,r)}const jw=P({stringToHashBucketFast_:Gw});const Hw={fft:Ku,ifft:uo,rfft:Yu,irfft:r1},Xw={hammingWindow:wv,hannWindow:l1,frame:c1,stft:Ev},va={flipLeftRight:$v,grayscaleToRGB:_v,resizeNearestNeighbor:tw,resizeBilinear:Qv,rotateWithOffset:Ov,cropAndResize:Iv,nonMaxSuppression:Dv,nonMaxSuppressionAsync:zv,nonMaxSuppressionWithScore:jv,nonMaxSuppressionWithScoreAsync:Xv,nonMaxSuppressionPadded:Kv,nonMaxSuppressionPaddedAsync:Zv,threshold:aw,transform:ow},qw={bandPart:uw,gramSchmidt:cw,qr:hw},Kw={absoluteDifference:mw,computeWeightedLoss:Bn,cosineDistance:yw,hingeLoss:bw,huberLoss:ww,logLoss:kw,meanSquaredError:Ew,sigmoidCrossEntropy:Nw,softmaxCrossEntropy:_w},Yw={sparseFillEmptyRows:Ow,sparseReshape:Dw,sparseSegmentMean:Lw,sparseSegmentSum:Bw},Zw={stringNGrams:Vw,stringSplit:zw,stringToHashBucketFast:jw};const Jw=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n();function Qw(){return new Promise(n=>Jw(()=>n()))}function f1(n,e){const t=n[0].length;n.forEach((a,s)=>{R(a.length===t,()=>`Error in concat${t}D: rank of tensors[${s}] must be the same as the rank of the rest (${t})`)}),R(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);const r=n[0];n.forEach((a,s)=>{for(let o=0;o<t;o++)R(o===e||a[o]===r[o],()=>`Error in concat${t}D: Shape of tensors[${s}] (${a}) does not match the shape of the rest (${r}) along the non-concatenated axis ${s}.`)})}function Mr(n,e){const t=n[0].slice();for(let r=1;r<n.length;r++)t[e]+=n[r][e];return t}var un;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(un||(un={}));function m1(n,e,t){let r=new Array;if(t==null&&e==null)return r;if(e==null)for(;r.length<n+t.length;)r.push(-1);else r=e.slice();if(t==null)return r;if(n+t.length!==r.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${n+t.length}, but shape.rank = ${r.length}`);for(let a=1;a<t.length;++a){const s=t[a],o=r[r.length-t.length+a],i=r[o];if(s>=0)if(i>=0){if(i!==s)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${a+n}] = ${s} but shape[${a+n}] = ${i}`)}else r[o]=s}return r}function g1(n){const e={FIRST_DIM_SIZE:un.FIRST_DIM_SIZE,VALUE_ROWIDS:un.VALUE_ROWIDS,ROW_LENGTHS:un.ROW_LENGTHS,ROW_SPLITS:un.ROW_SPLITS,ROW_LIMITS:un.ROW_LIMITS,ROW_STARTS:un.ROW_STARTS},t=[];for(const r of n)if(r in e)t.push(e[r]);else break;return t}function y1(n){return n.length===0?0:n[0]===un.FIRST_DIM_SIZE?n.length-1:n.length}function x1(n,e){if(n==null||e==null)return;const t=n.length,r=e.length;if(t>=r)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${r})`);for(let a=0;a<Math.min(t,r-1);++a){const s=n[a],o=e[a+1];if(s>=0&&o>=0&&s!==1&&s!==o)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${a-n.length}] = ${s} but ragged tensor input.flatValues.shape[${a-n.length}] = ${o}`)}}const Qu=30;function Do(n){return n<=Qu?n:Ii(n,Math.floor(Math.sqrt(n)))}function b1(n,e,t){const r=t*(typeof n=="number"?n:n[0]),a=e*(typeof n=="number"?n:n[1]);return[r,a]}function el(n,e,t,r=!0){let a=[];if(r)a=a.concat(e.slice(0)),a.push(n[0]/t),a=a.concat(n.slice(1));else{a=a.concat(n[0]);const s=e.length;for(let o=0;o<s;++o)a=a.concat([n[o+1]/e[o],e[o]]);a=a.concat(n.slice(s+1))}return a}function tl(n,e,t=!0){const r=[];if(t){r.push(e);for(let a=e+1;a<n;++a)a<=2*e?(r.push(a),r.push(a-(e+1))):r.push(a)}else{const a=[],s=[];for(let o=1;o<n;++o)o>=e*2+1||o%2===1?s.push(o):a.push(o);r.push(...a),r.push(0),r.push(...s)}return r}function nl(n,e,t,r=!0){const a=[];r?a.push(n[0]/t):a.push(n[0]*t);for(let s=1;s<n.length;++s)s<=e.length?r?a.push(e[s-1]*n[s]):a.push(n[s]/e[s-1]):a.push(n[s]);return a}function v1(n,e){const t=[0];for(let r=0;r<e;++r)t.push(n[r][0]);return t}function w1(n,e,t){const r=n.slice(0,1);for(let a=0;a<t;++a)r.push(n[a+1]-e[a][0]-e[a][1]);return r}const S1=1.7580993408473768,k1=1.0507009873554805;const T1=.3275911,E1=.254829592,C1=-.284496736,I1=1.421413741,N1=-1.453152027,$1=1.061405429;function su(n,e){if(n.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${e.length}.`);const t=new Float32Array(n.length*2);for(let r=0;r<t.length;r+=2)t[r]=n[r/2],t[r+1]=e[r/2];return t}function e6(n){const e=new Float32Array(n.length/2),t=new Float32Array(n.length/2);for(let r=0;r<n.length;r+=2)e[r/2]=n[r],t[r/2]=n[r+1];return{real:e,imag:t}}function t6(n){const e=Math.ceil(n.length/4),t=new Float32Array(e),r=new Float32Array(e);for(let a=0;a<n.length;a+=4)t[Math.floor(a/4)]=n[a],r[Math.floor(a/4)]=n[a+1];return{real:t,imag:r}}function n6(n){const e=Math.floor(n.length/4),t=new Float32Array(e),r=new Float32Array(e);for(let a=2;a<n.length;a+=4)t[Math.floor(a/4)]=n[a],r[Math.floor(a/4)]=n[a+1];return{real:t,imag:r}}function r6(n,e){const t=n[e*2],r=n[e*2+1];return{real:t,imag:r}}function a6(n,e,t,r){n[r*2]=e,n[r*2+1]=t}function s6(n,e){const t=new Float32Array(n/2),r=new Float32Array(n/2);for(let a=0;a<Math.ceil(n/2);a++){const s=(e?2:-2)*Math.PI*(a/n);t[a]=Math.cos(s),r[a]=Math.sin(s)}return{real:t,imag:r}}function o6(n,e,t){const r=(t?2:-2)*Math.PI*(n/e),a=Math.cos(r),s=Math.sin(r);return{real:a,imag:s}}const oi="->",i6=/->/g,zl=",",Gl="...";function R1(n,e){n=n.replace(/\s/g,"");const t=(n.length-n.replace(i6,"").length)/oi.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${oi}").`);const[r,a]=n.split(oi);R(r.indexOf(Gl)===-1,()=>`The ellipsis notation ("${Gl}") is not supported yet.`);const s=r.split(zl),o=s.length;if(e!==o)throw new Error(`Expected ${o} input tensors, received ${e}`);if(o>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let h=0;h<a.length;++h){const d=a[h];if(!s.some(m=>m.indexOf(d)!==-1))throw new Error(`Output subscripts contain the label ${d} not present in the input subscripts.`);i.indexOf(d)===-1&&i.push(d)}for(let h=0;h<r.length;++h){const d=r[h];i.indexOf(d)===-1&&d!==zl&&i.push(d)}const u=new Array(s.length);for(let h=0;h<o;++h){if(new Set(s[h].split("")).size!==s[h].length)throw new Error(`Found duplicate axes in input component ${s[h]}. Support for duplicate axes in input is not implemented yet.`);u[h]=[];for(let d=0;d<s[h].length;++d)u[h].push(i.indexOf(s[h][d]))}const l=i.length,c=a.length,p=[];for(let h=c;h<l;++h)p.push(h);return{allDims:i,summedDims:p,idDims:u}}function _1(n,e){let t=new Array(n);t.fill(-1);for(let a=0;a<e.length;++a)t[e[a]]=a;const r=[];for(let a=0;a<n;++a)t[a]===-1&&r.push(a);return t=t.filter(a=>a!==-1),{permutationIndices:t,expandDims:r}}function A1(n,e,t){const r=new Array(n);for(let a=0;a<t.length;++a){const s=t[a].shape;for(let o=0;o<e[a].length;++o)r[e[a][o]]===void 0?r[e[a][o]]=s[o]:R(r[e[a][o]]===s[o],()=>`Expected dimension ${r[e[a][o]]} at axis ${o} of input shaped ${JSON.stringify(s)}, but got dimension ${s[o]}`)}}function O1(n,e){const t=n,r=[];let a=0;n.length===0&&t.push(-1),a=n.length+1;for(let o=0;o<a;++o)r.push([]);const s=[];for(let o=0;o<t.length;++o){const i=t[o],u=u6(e,i);for(const l of u)s.indexOf(l)===-1&&(r[o].push(l),s.push(l))}return{path:t,steps:r}}function F1(n){return n.every((e,t)=>e===t)}function u6(n,e){const t=[];for(let r=0;r<n.length;++r)(n[r].length===0||n[r].indexOf(e)!==-1||e===-1)&&t.push(r);return t}function D1(n,e,t=0){let r=[];if(typeof e=="number")R(n.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),r=new Array(e).fill(n.shape[t]/e);else{const a=e.reduce((o,i)=>(i===-1&&(o+=1),o),0);R(a<=1,()=>"There should be only one negative value in split array.");const s=e.indexOf(-1);if(s!==-1){const o=e.reduce((i,u)=>u>0?i+u:i);e[s]=n.shape[t]-o}R(n.shape[t]===e.reduce((o,i)=>o+i),()=>"The sum of sizes must match the size of the axis dimension."),r=e}return r}function M1(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function L1(n,e){return`indices(${n}, 0) is invalid: ${e} < 0`}function P1(n,e,t){return`indices(${n}, 0) is invalid: ${e} >= ${t}`}function B1(n,e){return`only one output dimension may be -1, not both ${n} and ${e}`}function U1(n,e){return`size ${n} must be non-negative, not ${e}`}function V1(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function W1(n,e){const t=ae(n),r=ae(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${n} outputShape= ${e}`}function z1(n,e){const t=ae(n),r=ae(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${r}. inputShape=${n} outputShape=${e}`}function ou(){return"segment ids must be >= 0"}function G1(){return"segment ids are not increasing"}function j1(n,e){return`Segment id ${n} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function H1(n,e,t){return`Bad: indices[${n}] == ${e} out of range [0, ${t})`}function X1(n,e){let t=!1,r;for(n<=Qu?(r=n,t=!0):r=Ii(n,Math.floor(Math.sqrt(n)));!t;)r>e||r===n?t=!0:r=Ii(n,r+1);return r}function q1(n,e,t){const r=[],a=n.length;for(let s=0;s<a;s++)s!==e?r.push(n[s]):r.push(t);return r}function K1(n,e,t,r){const a=e.shape.length,s=n.shape.length;if(r!==0&&(r<-a||r>a))throw new Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${s}).`);if(t<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${t}).`);for(let p=0;p<r;++p)if(n.shape[p]!==e.shape[p])throw new Error(`x.shape[${p}]: ${n.shape[p]} should be equal to indices.shape[${p}]: ${e.shape[p]}.`);const o=n.shape[t],i=[];let u=1,l=1,c=1;for(let p=0;p<r;++p)i.push(n.shape[p]),u*=n.shape[p];for(let p=r;p<t;p++)i.push(n.shape[p]),l*=n.shape[p];for(let p=r;p<a;p++)i.push(e.shape[p]);for(let p=t+1;p<s;p++)i.push(n.shape[p]),c*=n.shape[p];return{batchSize:u,sliceSize:c,outerSize:l,dimSize:o,outputShape:i}}const l6=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:K1,computeOutShape:q1,segOpComputeOptimalWindowSize:X1},Symbol.toStringTag,{value:"Module"}));function is(n){try{return n.map(e=>ca(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function Y1(n){return n.map(e=>Nr(e))}const c6=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:E1,ERF_A2:C1,ERF_A3:I1,ERF_A4:N1,ERF_A5:$1,ERF_P:T1,PARALLELIZE_THRESHOLD:Qu,get RowPartitionType(){return un},SELU_SCALE:k1,SELU_SCALEALPHA:S1,applyActivation:Oo,assertAndGetBroadcastShape:$e,assertAxesAreInnerMostDims:hn,assertParamsConsistent:f1,assignToTypedArray:a6,axesAreInnerMostDims:Wu,calculateShapes:Mu,checkEinsumDimSizes:A1,checkPadOnDimRoundingMode:Jt,combineLocations:Mf,combineRaggedTensorToTensorShapes:m1,complexWithEvenIndex:t6,complexWithOddIndex:n6,computeConv2DInfo:Pt,computeConv3DInfo:fs,computeDefaultPad:Bu,computeDilation2DInfo:Nf,computeOptimalWindowSize:Do,computeOutAndReduceShapes:kn,computeOutShape:Mr,computePool2DInfo:Pr,computePool3DInfo:ds,convertConv2DDataFormat:xa,decodeEinsumEquation:R1,eitherStridesOrDilationsAreOne:_t,expandShapeToKeepDim:Bt,exponent:o6,exponents:s6,fromStringArrayToUint8:Y1,fromUint8ToStringArray:is,getAxesPermutation:Qt,getBroadcastDims:ao,getComplexWithIndex:r6,getEinsumComputePath:O1,getEinsumPermutation:_1,getFusedBiasGradient:Ao,getFusedDyActivation:_o,getImageCenter:b1,getInnerMostAxes:en,getPermuted:tl,getRaggedRank:y1,getReductionAxes:uf,getReshaped:el,getReshapedPermuted:nl,getRowPartitionTypesHelper:g1,getSliceBeginCoords:v1,getSliceSize:w1,getSparseFillEmptyRowsIndicesDenseShapeMismatch:M1,getSparseFillEmptyRowsNegativeIndexErrorMessage:L1,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:P1,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:V1,getSparseReshapeInputOutputMismatchErrorMessage:z1,getSparseReshapeInputOutputMultipleErrorMessage:W1,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:B1,getSparseReshapeNegativeOutputDimErrorMessage:U1,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:H1,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:ou,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:G1,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:j1,getUndoAxesPermutation:zu,isIdentityPermutation:F1,log:B2,mergeRealAndImagArrays:su,prepareAndValidate:hf,prepareSplitSize:D1,segment_util:l6,shouldFuse:Fo,slice_util:w0,splitRealAndImagArrays:e6,tupleValuesAreOne:rs,upcastType:Sn,validateDefaultValueShape:x1,validateInput:ff,validateUpdateShape:df,warn:ln},Symbol.toStringTag,{value:"Module"}));const Tr={},zs={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function p6(n,e){Tr[n]=e}function pn(n,e){if(!(n in Tr)||e!=null){const r=d6(n,e);if(r!==null)Tr[n]=r;else return console.log("Could not get context for WebGL version",n),null}const t=Tr[n];return t==null||t.isContextLost()?(delete Tr[n],pn(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Tr[n])}function h6(n){if(typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function d6(n,e){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=e??h6(n);return t.addEventListener("webglcontextlost",r=>{r.preventDefault(),delete Tr[n]},!1),H().getBool("SOFTWARE_WEBGL_ENABLED")&&(zs.failIfMajorPerformanceCaveat=!1),n===1?t.getContext("webgl",zs)||t.getContext("experimental-webgl",zs):t.getContext("webgl2",zs)}var us;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(us||(us={}));var Mt;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(Mt||(Mt={}));var st;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(st||(st={}));function gs(n,e){return[e,n]}function f6(n,e){return n*e}function Gs(n){const e=ae(n),t=Math.ceil(e/4);return Ei(t)}function wa(n,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(n/2))]}function m6(n,e){const[t,r]=wa(n,e);return t*r*4}function rl(n,e){const t=n;let r,a,s,o,i,u,l,c,p,h;return H().getNumber("WEBGL_VERSION")===2?(r=t.R32F,a=t.R16F,s=t.RGBA16F,o=t.RGBA32F,i=t.RED,l=4,c=1,p=t.HALF_FLOAT,h=t.FLOAT,u=t.RGBA8):(r=n.RGBA,a=n.RGBA,s=n.RGBA,o=t.RGBA,i=n.RGBA,l=4,c=4,p=e!=null?e.HALF_FLOAT_OES:null,h=n.FLOAT,u=n.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:a,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:o,textureFormatFloat:i,downloadTextureFormat:u,downloadUnpackNumChannels:l,defaultNumChannels:c,textureTypeHalfFloat:p,textureTypeFloat:h}}function ce(n,e){const t=e();return H().getBool("DEBUG")&&g6(n),t}function g6(n){const e=n.getError();if(e!==n.NO_ERROR)throw new Error("WebGL Error: "+v6(n,e))}const y6=596e-10,x6=65504;function b6(n){return!!(H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||y6<Math.abs(n)&&Math.abs(n)<x6)}function v6(n,e){switch(e){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function js(n,e){return Un(n,()=>n.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function w6(n,e){const t=Un(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(ce(n,()=>n.shaderSource(t,e)),ce(n,()=>n.compileShader(t)),n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function S6(n,e){const t=Un(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(ce(n,()=>n.shaderSource(t,e)),ce(n,()=>n.compileShader(t)),H().get("ENGINE_COMPILE_ONLY"))return t;if(n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw Z1(e,n.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}const k6=/ERROR: [0-9]+:([0-9]+):/g;function Z1(n,e){const t=k6.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(n);return}const r=+t[1],a=n.split(`
`),s=a.length.toString().length+2,o=a.map((p,h)=>ra((h+1).toString(),s)+p);let i=0;for(let p=0;p<o.length;p++)i=Math.max(o[p].length,i);const u=o.slice(0,r-1),l=o.slice(r-1,r),c=o.slice(r);console.log(u.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${ra(l[0],i)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join(`
`))}function T6(n){return Un(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function E6(n,e){if(ce(n,()=>n.linkProgram(e)),!H().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function ii(n,e){if(ce(n,()=>n.validateProgram(e)),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function C6(n,e){const t=Un(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ce(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),ce(n,()=>n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function I6(n,e){const t=Un(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ce(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t)),ce(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function N6(n){return Un(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function $6(n,e){const t=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||e<=0){const r=`[${n}x${e}]`;throw new Error("Requested texture size "+r+" is invalid.")}if(n>t||e>t){const r=`[${n}x${e}]`,a=`[${t}x${t}]`;throw new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+a+".")}}function R6(n){return Un(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function jl(n,e,t,r,a,s,o){const i=n.getAttribLocation(e,t);return i===-1?!1:(ce(n,()=>n.bindBuffer(n.ARRAY_BUFFER,r)),ce(n,()=>n.vertexAttribPointer(i,a,n.FLOAT,!1,s,o)),ce(n,()=>n.enableVertexAttribArray(i)),!0)}function _6(n,e,t){M6(n,t),ce(n,()=>n.activeTexture(n.TEXTURE0+t)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,e))}function A6(n,e,t){return Un(n,()=>n.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function O6(n,e,t){return n.getUniformLocation(e,t)}function F6(n,e,t,r){ce(n,()=>_6(n,e,r)),ce(n,()=>n.uniform1i(t,r))}function ui(n,e,t){ce(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),ce(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0))}function Hl(n,e){ce(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),ce(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function Hs(n){const e=n.checkFramebufferStatus(n.FRAMEBUFFER);if(e!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+D6(n,e))}function D6(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function Un(n,e,t){const r=ce(n,()=>e());if(r==null)throw new Error(t);return r}function M6(n,e){const t=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=e+n.TEXTURE0;if(r<n.TEXTURE0||r>t){const a=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${a}.`)}}function da(n,e=2){return ae(n.slice(0,n.length-e))}function fa(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function li(n){let e=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(e=[da(n),...fa(n)]),e}function L6(n,e=!1){let t=H().getNumber("WEBGL_MAX_TEXTURE_SIZE"),r=H().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");r===1/0&&H().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(r=t/2),e&&(t=t*2,r=r*2,n=n.map((i,u)=>u>=n.length-2?ku(n[u]):n[u]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=rr(n).newShape);let a=ae(n),s=null;n.length<=1&&a<=t?s=[1,a]:n.length===2&&n[0]<=t&&n[1]<=t?s=n:n.length===3&&n[0]*n[1]<=t&&n[2]<=t?s=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=t&&n[1]*n[2]<=t?s=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=t&&n[3]<=t?s=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=t&&n[1]*n[2]*n[3]<=t&&(s=[n[0],n[1]*n[2]*n[3]]);const o=s!=null&&Math.max(...s)>r&&Math.min(...s)<=(e?2:1)&&Math.min(...s)>0;if(s==null||o)if(e){const i=da(n);let u=2,l=2;n.length&&([u,l]=fa(n)),a=i*(u/2)*(l/2),s=Ei(a).map(c=>c*2)}else s=Ei(a);return s}function Xs(n){return n%2===0}function lo(n,e){if(n=n.slice(-2),e=e.slice(-2),qe(n,e)||!n.length||!e.length||n[0]===0||n[1]===0||e[0]===0||e[1]===0)return!0;if(n.length!==e.length){const t=n.slice(-1)[0],r=e.slice(-1)[0];if(t===r||Xs(t)&&Xs(r)&&(n[0]===1||e[0]===1))return!0}return n[1]===e[1]&&Xs(n[0])&&Xs(e[0])}let ci,pi;function P6(n){if(ci==null){const e=pn(n);ci=e.getParameter(e.MAX_TEXTURE_SIZE)}return ci}function B6(n){if(pi==null){const e=pn(n);pi=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,pi)}function U6(n){if(n===0)return 0;let e;const t=pn(n);return Zt(t,"EXT_disjoint_timer_query_webgl2")&&n===2?e=2:Zt(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function Zt(n,e){return n.getExtension(e)!=null}function Xl(n){try{if(pn(n)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function V6(n){if(n===0)return!1;const e=pn(n);if(n===1){if(!Zt(e,"OES_texture_float"))return!1}else if(!Zt(e,"EXT_color_buffer_float"))return!1;return iu(e)}function W6(n){if(n===0)return!1;const e=pn(n);if(n===1){if(!Zt(e,"OES_texture_float")||!Zt(e,"WEBGL_color_buffer_float"))return!1}else{if(Zt(e,"EXT_color_buffer_float"))return iu(e);const t="EXT_color_buffer_half_float";if(Zt(e,t)){const r=e.getExtension(t);return z6(e,r)}return!1}return iu(e)}function iu(n){const e=rl(n),t=n.createTexture();n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(t),n.deleteFramebuffer(r),a}function z6(n,e){const t=rl(n,e),r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);const a=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,r,0);const s=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(r),n.deleteFramebuffer(a),s}function G6(n){return n!==2?!1:pn(n).fenceSync!=null}function ys(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&R(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}const he=H();he.registerFlag("HAS_WEBGL",()=>he.getNumber("WEBGL_VERSION")>0);he.registerFlag("WEBGL_VERSION",()=>Xl(2)?2:Xl(1)?1:0);he.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);he.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>he.get("WEBGL_VERSION")===2);he.registerFlag("WEBGL_CPU_FORWARD",()=>!0);he.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);he.registerFlag("WEBGL_PACK",()=>he.getBool("HAS_WEBGL"));he.registerFlag("WEBGL_PACK_NORMALIZATION",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_PACK_CLIP",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_PACK_REDUCE",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_LAZILY_UNPACK",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_CONV_IM2COL",()=>he.getBool("WEBGL_PACK"));he.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>P6(he.getNumber("WEBGL_VERSION")));he.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>B6(he.getNumber("WEBGL_VERSION")));he.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=he.getNumber("WEBGL_VERSION");return n===0?0:U6(n)});he.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>he.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Bd());he.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>V6(he.getNumber("WEBGL_VERSION")));he.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>he.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:he.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));he.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>W6(he.getNumber("WEBGL_VERSION")));he.registerFlag("WEBGL_FENCE_API_ENABLED",()=>G6(he.getNumber("WEBGL_VERSION")));he.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>he.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);he.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});he.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Bd()?1:-1,n=>{if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});he.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);he.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);he.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);he.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);he.registerFlag("WEBGL_EXP_CONV",()=>!1);he.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>he.getBool("IS_TEST"));he.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);he.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);he.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);function xt(){let n,e,t,r,a,s,o,i,u,l;return H().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",e="in",t="out",r="in",a="texture",s="outputColor",o="out vec4 outputColor;",i=H().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",u="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",e="attribute",t="varying",r="varying",a="texture2D",s="gl_FragColor",o="",i=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:e,varyingVs:t,varyingFs:r,texture2D:a,output:s,defineOutput:o,defineSpecialNaN:i,defineSpecialInf:u,defineRound:l}}function Ur(n,e,t="index"){const r=ot(e);return r.map((a,s)=>{const o=`int ${n[s]} = ${t} / ${a}`,i=s===r.length-1?`int ${n[s+1]} = ${t} - ${n[s]} * ${a}`:`index -= ${n[s]} * ${a}`;return`${o}; ${i};`}).join("")}function Mo(n,e,t="index"){const r=ot(e);return r.map((a,s)=>{const o=`int ${n[s]} = ${t} / outShapeStrides[${s}]`,i=s===r.length-1?`int ${n[s+1]} = ${t} - ${n[s]} * outShapeStrides[${s}]`:`index -= ${n[s]} * outShapeStrides[${s}]`;return`${o}; ${i};`}).join("")}function j6(n,e){const t=n.length,r=n.map(s=>`${e}[${s}]`),a=new Array(t-1);a[t-2]=r[t-1];for(let s=t-3;s>=0;--s)a[s]=`(${a[s+1]} * ${r[s+1]})`;return a}function H6(n,e,t="index"){const r=n.map((s,o)=>o),a=j6(r,e);return a.map((s,o)=>{const i=`int ${n[o]} = ${t} / ${a[o]}`,u=o===a.length-1?`int ${n[o+1]} = ${t} - ${n[o]} * ${a[o]}`:`index -= ${n[o]} * ${a[o]}`;return`${i}; ${u};`}).join("")}function al(n){const e=ot(n).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function sl(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const J1=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:Q1}=c6;function X6(n,e,t){const r=[];if(n.forEach(h=>{const d=ae(h.shapeInfo.logicalShape);if(h.shapeInfo.isUniform?r.push(`uniform float ${h.name}${d>1?`[${d}]`:""};`):(r.push(`uniform sampler2D ${h.name};`),r.push(`uniform int offset${h.name};`)),t.enableShapeUniforms){const{uniformShape:m}=ol(t.packedInputs,h.shapeInfo.logicalShape,h.shapeInfo.texShape);switch(m.length){case 1:r.push(`uniform int ${h.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${h.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${h.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${h.name}Shape;`);break}r.push(`uniform ivec2 ${h.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:r.push("uniform int outShape;");break;case 2:r.push("uniform ivec2 outShape;"),r.push("uniform int outShapeStrides;");break;case 3:r.push("uniform ivec3 outShape;"),r.push("uniform ivec2 outShapeStrides;");break;case 4:r.push("uniform ivec4 outShape;"),r.push("uniform ivec3 outShapeStrides;");break}r.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(h=>{r.push(`uniform ${h.type} ${h.name}${h.arrayIndex?`[${h.arrayIndex}]`:""};`)});const a=r.join(`
`),s=n.map(h=>q6(h,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),o=e.texShape,i=xt(),u=Z6(i);let l,c,p=eS(i);return e.isPacked?(l=K6(e.logicalShape,o,t.enableShapeUniforms),c=Q6(i)):(l=Y6(e.logicalShape,o,t.enableShapeUniforms),c=J6(i)),t.packedInputs&&(p+=aS),[p,u,c,a,l,s,t.userCode].join(`
`)}function Sa(n,e=!1){const t=n.shapeInfo.logicalShape;switch(t.length){case 0:return gS(n,e);case 1:return xS(n,e);case 2:return vS(n,e);case 3:return SS(n,e);case 4:return TS(n,e);case 5:return ES(n);case 6:return CS(n);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function em(n,e){switch(n.shapeInfo.logicalShape.length){case 0:return mS(n);case 1:return yS(n,e);case 2:return bS(n,e);case 3:return wS(n,e);default:return kS(n,e)}}function q6(n,e,t=!1,r){let a="";t?a+=em(n,r):a+=Sa(n,r);const s=n.shapeInfo.logicalShape,o=e.logicalShape;return s.length<=o.length&&(t?a+=IS(n,e):a+=NS(n,e)),a}function K6(n,e,t){switch(n.length){case 0:return tm();case 1:return sS(n,e,t);case 2:return dS(n,e,t);case 3:return iS(n,e,t);default:return lS(n,e,t)}}function Y6(n,e,t){switch(n.length){case 0:return tm();case 1:return oS(n,e,t);case 2:return fS(n,e,t);case 3:return uS(n,e,t);case 4:return cS(n,e,t);case 5:return pS(n,e);case 6:return hS(n,e);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function Z6(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function J6(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function Q6(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function eS(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${tS}
    ${nS}
    ${rS}
  `}const tS=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,nS=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,rS=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,aS=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function tm(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function sS(n,e,t){const r=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return r[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function oS(n,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function iS(n,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const r=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],a=Math.ceil(n[2]/2),s=a*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${a});
      int c = imod(index, ${a}) * 2;

      return ivec3(b, r, c);
    }
  `}function uS(n,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Mo(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const r=Ur(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function lS(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const r=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],a=Math.ceil(n[n.length-1]/2),s=a*Math.ceil(n[n.length-2]/2);let o=s,i="",u="b, r, c";for(let l=2;l<n.length-1;l++)o*=n[n.length-l-1],i=`
      int b${l} = index / ${o};
      index -= b${l} * ${o};
    `+i,u=`b${l}, `+u;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${i}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${a});
      int c = imod(index, ${a}) * 2;

      return ivec${n.length}(${u});
    }
  `}function cS(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Mo(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const r=Ur(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function pS(n,e){const t=Ur(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function hS(n,e){const t=Ur(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function dS(n,e,t){const r=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(qe(n,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;const a=Math.ceil(n[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${a});
      int c = imod(index, ${a}) * 2;

      return ivec2(r, c);
    }
  `}function fS(n,e,t){return qe(n,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:n[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function Vr(n){return`offset${n}`}function mS(n){const e=n.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),r=xt();return`
    vec4 ${t}() {
      return ${r.texture2D}(${e}, halfCR);
    }
  `}function gS(n,e){const t=n.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`float ${r}() {return ${t};}`;const[a,s]=n.shapeInfo.texShape;if(a===1&&s===1)return`
      float ${r}() {
        return sampleTexture(${t}, halfCR);
      }
    `;const o=Vr(t);if(e)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${o});
      return sampleTexture(${t}, uv);
    }
  `;const[i,u]=n.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${i}, ${u}, ${o});
      return sampleTexture(${t}, uv);
    }
  `}function yS(n,e){const t=n.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),a=n.shapeInfo.texShape,s=xt();if(e)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${t}, uv);
    }
  `;const o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${s.texture2D}(${t}, uv);
    }
  `}function xS(n,e){const t=n.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${ka(n)}
      }
    `;const a=n.shapeInfo.texShape,s=a[0],o=a[1];if(o===1&&s===1)return`
      float ${r}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;const i=Vr(t);return o===1?e?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${s}.0);
        return sampleTexture(${t}, uv);
      }
    `:s===1?e?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${i});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${s}, ${o}, index + ${i});
      return sampleTexture(${t}, uv);
    }
  `}function bS(n,e){const t=n.shapeInfo.logicalShape,r=n.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),s=n.shapeInfo.texShape,o=s[0],i=s[1],u=xt();if(s!=null&&qe(t,s))return e?`
      vec4 ${a}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${u.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${a}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${i}.0, ${o}.0);

        return ${u.texture2D}(${r}, uv);
      }
    `;if(e)return`
    vec4 ${a}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${u.texture2D}(${r}, uv);
    }
  `;const l=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Math.ceil(t[1]/2);return`
    vec4 ${a}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c}, ${l[0]}, ${l[1]}, row, col);
      return ${u.texture2D}(${r}, uv);
    }
  `}function vS(n,e){const t=n.shapeInfo.logicalShape,r=n.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),s=n.shapeInfo.texShape;if(s!=null&&qe(t,s)){if(e)return`
      float ${a}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;const h=s[0],d=s[1];return`
    float ${a}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${r}, uv);
    }
  `}const{newShape:o,keptDims:i}=rr(t),u=o;if(u.length<t.length){const h=Ta(n,u),d=["row","col"];return`
      ${Sa(h,e)}
      float ${a}(int row, int col) {
        return ${a}(${Ea(d,i)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${a}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${ka(n)}
      }
    `;const l=s[0],c=s[1],p=Vr(r);return c===1?e?`
      float ${a}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${a}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?e?`
      float ${a}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${a}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${c}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:e?`
      float ${a}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${p};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${a}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${p};
    vec2 uv = uvFromFlat(${l}, ${c}, index);
    return sampleTexture(${r}, uv);
  }
`}function wS(n,e){const t=n.shapeInfo.logicalShape,r=n.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),s=n.shapeInfo.texShape,o=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(t[0]===1){const h=t.slice(1),d=[1,2],m=Ta(n,h),y=["b","row","col"];return`
        ${em(m,e)}
        vec4 ${a}(int b, int row, int col) {
          return ${a}(${Ea(y,d)});
        }
      `}const i=xt();if(e)return`
    vec4 ${a}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${i.texture2D}(${r}, uv);
    }
  `;const u=o[0],l=o[1],c=Math.ceil(t[2]/2),p=c*Math.ceil(t[1]/2);return`
    vec4 ${a}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${u}, ${l}, ${p}, ${c}, b, row, col);
      return ${i.texture2D}(${r}, uv);
    }
  `}function SS(n,e){const t=n.shapeInfo.logicalShape,r=n.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),s=t[1]*t[2],o=t[2],{newShape:i,keptDims:u}=rr(t),l=i;if(l.length<t.length){const y=Ta(n,l),b=["row","col","depth"];return`
        ${Sa(y,e)}
        float ${a}(int row, int col, int depth) {
          return ${a}(${Ea(b,u)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${a}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${o}, 1)));
        ${ka(n)}
      }
    `;const c=n.shapeInfo.texShape,p=c[0],h=c[1],d=n.shapeInfo.flatOffset;if(h===s&&d==null)return e?`
      float ${a}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${a}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${h}.0, ${p}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(h===o&&d==null)return e?`
      float ${a}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${a}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${p}.0);
      return sampleTexture(${r}, uv);
    }
  `;const m=Vr(r);return e?`
    float ${a}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${a}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${p}, ${h}, index);
        return sampleTexture(${r}, uv);
      }
  `}function kS(n,e){const t=n.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),a=xt();if(e)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${a.texture2D}(${t}, uv);
    }
  `;const s=n.shapeInfo.logicalShape,o=s.length,i=n.shapeInfo.texShape,u=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=u[0],c=u[1],p=Math.ceil(s[o-1]/2);let h=p*Math.ceil(s[o-2]/2),d="int b, int row, int col",m=`b * ${h} + (row / 2) * ${p} + (col / 2)`;for(let y=2;y<o-1;y++)d=`int b${y}, `+d,h*=s[o-y-1],m=`b${y} * ${h} + `+m;return`
    vec4 ${r}(${d}) {
      int index = ${m};
      int texR = index / ${c};
      int texC = index - texR * ${c};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${l});
      return ${a.texture2D}(${t}, uv);
    }
  `}function TS(n,e){const t=n.shapeInfo.logicalShape,r=n.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),s=t[3],o=t[2]*s,i=t[1]*o,{newShape:u,keptDims:l}=rr(t);if(u.length<t.length){const T=Ta(n,u),$=["row","col","depth","depth2"];return`
      ${Sa(T,e)}
      float ${a}(int row, int col, int depth, int depth2) {
        return ${a}(${Ea($,l)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${a}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${i}, ${o}, ${s}, 1)));
        ${ka(n)}
      }
    `;const c=n.shapeInfo.flatOffset,p=n.shapeInfo.texShape,h=p[0],d=p[1],m=`int stride2 = ${r}Shape[3];`,y=`int stride1 = ${r}Shape[2] * stride2;`,b=`int stride0 = ${r}Shape[1] * stride1;`;if(d===i&&c==null)return e?`
      float ${a}(int row, int col, int depth, int depth2) {
        ${m}
        ${y}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${a}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${h}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(d===s&&c==null)return e?`
      float ${a}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${a}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${d}.0, ${h}.0);
        return sampleTexture(${r}, uv);
      }
    `;const x=Vr(r);return e?`
    float ${a}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${y}
      ${b}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${x});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${a}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${i} + col * ${o} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${h}, ${d}, index + ${x});
      return sampleTexture(${r}, uv);
    }
  `}function ES(n){const e=n.shapeInfo.logicalShape,t=n.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),a=e[4],s=e[3]*a,o=e[2]*s,i=e[1]*o,{newShape:u,keptDims:l}=rr(e);if(u.length<e.length){const y=Ta(n,u),b=["row","col","depth","depth2","depth3"];return`
      ${Sa(y)}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${Ea(b,l)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${i}, ${o}, ${s}, ${a})) +
          depth3;
        ${ka(n)}
      }
    `;const c=n.shapeInfo.flatOffset,p=n.shapeInfo.texShape,h=p[0],d=p[1];if(d===i&&c==null)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${s}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${h}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(d===a&&c==null)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${d}.0, ${h}.0);
        return sampleTexture(${t}, uv);
      }
    `;const m=Vr(t);return`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${i} + col * ${o} + depth * ${s} +
          depth2 * ${a} + depth3 + ${m};
      vec2 uv = uvFromFlat(${h}, ${d}, index);
      return sampleTexture(${t}, uv);
    }
  `}function CS(n){const e=n.shapeInfo.logicalShape,t=n.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:a,keptDims:s}=rr(e);if(a.length<e.length){const b=Ta(n,a),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${Sa(b)}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${Ea(x,s)});
      }
    `}const o=e[5],i=e[4]*o,u=e[3]*i,l=e[2]*u,c=e[1]*l;if(n.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${l}, ${u}, ${i})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${ka(n)}
      }
    `;const p=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],m=h[1];if(m===c&&p==null)return`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${u}, ${i}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${d}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(m===o&&p==null)return`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${d}.0);
        return sampleTexture(${t}, uv);
      }
    `;const y=Vr(t);return`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${l} + depth * ${u} +
          depth2 * ${i} + depth3 * ${o} + depth4 + ${y};
      vec2 uv = uvFromFlat(${d}, ${m}, index);
      return sampleTexture(${t}, uv);
    }
  `}function ka(n){const e=n.name,t=ae(n.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function IS(n,e){const t=n.name,r=t.charAt(0).toUpperCase()+t.slice(1),a="get"+r+"AtOutCoords",s=n.shapeInfo.logicalShape.length,o=e.logicalShape.length,i=Q1(n.shapeInfo.logicalShape,e.logicalShape),u=Be(o),l=o-s;let c;const p=["x","y","z","w","u","v"];s===0?c="":o<2&&i.length>=1?c="coords = 0;":c=i.map(b=>`coords.${p[b+l]} = 0;`).join(`
`);let h="";o<2&&s>0?h="coords":h=n.shapeInfo.logicalShape.map((b,x)=>`coords.${p[x+l]}`).join(", ");let d="return outputValue;";const m=ae(n.shapeInfo.logicalShape)===1,y=ae(e.logicalShape)===1;if(s===1&&!m&&!y)d=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!y)o===1?d=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:d=`
        return vec4(outputValue.x);
      `;else if(i.length){const b=s-2,x=s-1;i.indexOf(b)>-1&&i.indexOf(x)>-1?d="return vec4(outputValue.x);":i.indexOf(b)>-1?d="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":i.indexOf(x)>-1&&(d="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${a}() {
      ${u} coords = getOutputCoords();
      ${c}
      vec4 outputValue = get${r}(${h});
      ${d}
    }
  `}function NS(n,e){const t=n.name,r=t.charAt(0).toUpperCase()+t.slice(1),a="get"+r+"AtOutCoords",s=e.texShape,o=n.shapeInfo.texShape,i=n.shapeInfo.logicalShape.length,u=e.logicalShape.length;if(!n.shapeInfo.isUniform&&i===u&&n.shapeInfo.flatOffset==null&&qe(o,s))return`
      float ${a}() {
        return sampleTexture(${t}, resultUV);
      }
    `;const l=Be(u),c=Q1(n.shapeInfo.logicalShape,e.logicalShape),p=u-i;let h;const d=["x","y","z","w","u","v"];i===0?h="":u<2&&c.length>=1?h="coords = 0;":h=c.map(y=>`coords.${d[y+p]} = 0;`).join(`
`);let m="";return u<2&&i>0?m="coords":m=n.shapeInfo.logicalShape.map((y,b)=>`coords.${d[b+p]}`).join(", "),`
    float ${a}() {
      ${l} coords = getOutputCoords();
      ${h}
      return get${r}(${m});
    }
  `}function Be(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function ol(n,e,t){const{newShape:r,keptDims:a}=rr(e),s=e.length,o=n&&s===3&&e[0]===1,i=o?e.slice(1):r,u=!n&&s>1&&!qe(e,t)&&r.length<s||o;return{useSqueezeShape:u,uniformShape:u?i:e,keptDims:a}}function Ta(n,e){const t=JSON.parse(JSON.stringify(n));return t.shapeInfo.logicalShape=e,t}function Ea(n,e){return e.map(t=>n[t]).join(", ")}function $S(n,e,t,r){const a=t.map((c,p)=>{const h={logicalShape:c.shape,texShape:c.isUniform?null:c.texData.texShape,isUniform:c.isUniform,isPacked:c.isUniform?!1:c.texData.isPacked,flatOffset:null};return c.texData!=null&&c.texData.slice!=null&&c.texData.slice.flatOffset>0&&(h.flatOffset=c.texData.slice.flatOffset),{name:e.variableNames[p],shapeInfo:h}}),s=a.map(c=>c.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},i=X6(a,o,e),u=S6(n.gl,i),l=n.createProgram(u);return H().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:u,source:i,webGLProgram:l,inShapeInfos:s,outShapeInfo:o,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:e,fragmentShader:u,source:i,webGLProgram:l,inShapeInfos:s,outShapeInfo:o},nm(n,e,l))}function nm(n,e,t){const r={},a={},s={},o=[];let i,u,l,c=null,p=null;p=n.getUniformLocation(t,"NAN",!1),H().getNumber("WEBGL_VERSION")===1&&(c=n.getUniformLocation(t,"INFINITY",!1));const h=!1;for(let d=0;d<e.variableNames.length;d++){const m=e.variableNames[d];r[m]=n.getUniformLocation(t,m,h),r[`offset${m}`]=n.getUniformLocation(t,`offset${m}`,h),e.enableShapeUniforms&&(a[`${m}Shape`]=n.getUniformLocation(t,`${m}Shape`,h),s[`${m}TexShape`]=n.getUniformLocation(t,`${m}TexShape`,h))}return e.enableShapeUniforms&&(i=n.getUniformLocation(t,"outShape",h),l=n.getUniformLocation(t,"outShapeStrides",h),u=n.getUniformLocation(t,"outTexShape",h)),e.customUniforms&&e.customUniforms.forEach((d,m)=>{o[m]=n.getUniformLocation(t,d.name,h)}),{uniformLocations:r,customUniformLocations:o,infLoc:c,nanLoc:p,inShapesLocations:a,inTexShapesLocations:s,outShapeLocation:i,outShapeStridesLocation:l,outTexShapeLocation:u}}function ql(n,e){if(n.length!==e.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${e.length} inputs`);n.forEach((t,r)=>{const a=t.logicalShape,s=e[r],o=s.shape;if(!qe(a,o))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${a} and ${o} must match`);if(t.isUniform&&s.isUniform)return;const i=t.texShape,u=s.isUniform?null:s.texData.texShape;if(!qe(i,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${u} must match`)})}function RS(n,e,t,r,a){e.program.enableShapeUniforms||(ql(e.inShapeInfos,t),ql([e.outShapeInfo],[r]));const s=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?n.setOutputPackedMatrixTexture(s.texture,o[0],o[1]):n.setOutputMatrixTexture(s.texture,o[0],o[1]),n.setProgram(e.webGLProgram),H().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&n.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&n.gl.uniform1f(e.nanLoc,NaN),t.forEach((u,l)=>{const c=e.program.variableNames[l],p=e.uniformLocations[c],h=e.uniformLocations[`offset${c}`],d=e.inShapesLocations[`${c}Shape`],m=e.inTexShapesLocations[`${c}TexShape`];if(d){const{uniformShape:y}=ol(e.program.packedInputs,u.shape,u.texData.texShape);switch(y.length){case 1:n.gl.uniform1iv(d,new Int32Array(y));break;case 2:n.gl.uniform2iv(d,new Int32Array(y));break;case 3:n.gl.uniform3iv(d,new Int32Array(y));break;case 4:n.gl.uniform4iv(d,new Int32Array(y));break}}if(m&&n.gl.uniform2i(m,u.texData.texShape[0],u.texData.texShape[1]),p!=null){if(u.isUniform){if(ae(u.shape)<2)n.gl.uniform1f(p,u.uniformValues[0]);else{let y=u.uniformValues;y instanceof Float32Array||(y=new Float32Array(y)),n.gl.uniform1fv(p,y)}return}u.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,u.texData.slice.flatOffset),n.setInputMatrixTexture(u.texData.texture.texture,p,l)}});const i=e.outShapeLocation;if(i)switch(r.shape.length){case 1:n.gl.uniform1iv(i,new Int32Array(r.shape));break;case 2:n.gl.uniform2iv(i,new Int32Array(r.shape));break;case 3:n.gl.uniform3iv(i,new Int32Array(r.shape));break;case 4:n.gl.uniform4iv(i,new Int32Array(r.shape));break}if(e.outShapeStridesLocation){const u=ot(r.shape);switch(r.shape.length){case 2:n.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(u));break;case 3:n.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(u));break;case 4:n.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(u));break}}e.outTexShapeLocation&&n.gl.uniform2i(e.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),e.program.customUniforms&&a&&e.program.customUniforms.forEach((u,l)=>{const c=e.customUniformLocations[l],p=a[l];if(u.type==="float")n.gl.uniform1fv(c,p);else if(u.type==="vec2")n.gl.uniform2fv(c,p);else if(u.type==="vec3")n.gl.uniform3fv(c,p);else if(u.type==="vec4")n.gl.uniform4fv(c,p);else if(u.type==="int")n.gl.uniform1iv(c,p);else if(u.type==="ivec2")n.gl.uniform2iv(c,p);else if(u.type==="ivec3")n.gl.uniform3iv(c,p);else if(u.type==="ivec4")n.gl.uniform4iv(c,p);else throw Error(`uniform type ${u.type} is not supported yet.`)}),n.executeProgram()}function _S(n,e,t){let r="";e.concat(t).forEach(o=>{const i=o.texData!=null&&o.texData.slice!=null&&o.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!o.isUniform){const u=o.texData.texShape,{useSqueezeShape:l,uniformShape:c,keptDims:p}=ol(n.packedInputs,o.shape,u);let h="",d="",m="";if(c.length===1&&n.packedInputs){const M=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];h=`${M[0]>1}_${M[1]>1}`}else if(c.length===2&&!n.packedInputs)d=`${c[0]>1}_${c[1]>1}`;else if(c.length>2&&!n.packedInputs){const M=ot(c);m=`${M[0]===u[1]}_${M[M.length-1]===u[1]}`}const y=o.shape.length,b=c.length===2&&qe(o.shape,u),x=ae(o.shape)===1,T=ao(o.shape,t.shape),$=!n.packedInputs&&y===t.shape.length&&qe(u,t.texData.texShape),F=n.packedInputs||c.length>2?"":`${u[0]>1}_${u[1]>1}`;r+=`${y}_${$}_${l?p:""}_${c.length}_${x}_${T}_${b}_${h}_${d}_${m}_${F}_${i}`}else{const u=o.isUniform?"uniform":o.texData.texShape;r+=`${o.shape}_${u}_${i}`}});const a=n.userCode;let s=n.constructor.name;return s+="_"+r+"_"+a+`${H().getNumber("WEBGL_VERSION")}`,s}function bt(n){return H().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class AS{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=us.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=xt();this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Mo(["r","c","d"],e):Ur(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}class OS{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=us.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=xt();this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Mo(["r","c","d"],e):Ur(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}class FS{constructor(e){this.variableNames=["A"],this.outTexUsage=Mt.DOWNLOAD;const t=xt();this.outputShape=e,this.userCode=`
      ${J1}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}class DS{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Mt.DOWNLOAD;const t=xt();this.outputShape=e,this.userCode=`
      ${J1}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}class MS{constructor(e,t=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=xt();this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length);let a="result";t&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      ${this.enableShapeUniforms?sl():al(e)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${r.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${r.output} = vec4(${a}, 0., 0., 0.);
      }
    `}}class LS{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const r=xt();this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length);let a="",s="result";t&&(s="floor(result * 255. + 0.5)");for(let o=0;o<=1;o++)for(let i=0;i<=1;i++){const u=o*2+i;a+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${o} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${o};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${r.texture2D}(A, uv);

            if (offset == 0) {
              result[${u}] = values[0];
            } else if (offset == 1) {
              result[${u}] = values[1];
            } else if (offset == 2) {
              result[${u}] = values[2];
            } else {
              result[${u}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?sl():al(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${a}

          ${r.output} = ${s};
        }
    `}}function PS(n){const e=xt(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return w6(n,t)}function BS(n){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return C6(n,e)}function US(n){const e=new Uint16Array([0,1,2,2,1,3]);return I6(n,e)}function xs(n,e,t,r,a,s){$6(e,t);const o=N6(n),i=n.TEXTURE_2D;return ce(n,()=>n.bindTexture(i,o)),ce(n,()=>n.texParameteri(i,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),ce(n,()=>n.texParameteri(i,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),ce(n,()=>n.texParameteri(i,n.TEXTURE_MIN_FILTER,n.NEAREST)),ce(n,()=>n.texParameteri(i,n.TEXTURE_MAG_FILTER,n.NEAREST)),H().getNumber("WEBGL_VERSION")===1?ce(n,()=>n.texImage2D(i,0,r,e,t,0,a,s,null)):ce(n,()=>n.texStorage2D(i,1,r,e,t)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:o,texShape:[t,e]}}function rm(n){return n.internalFormatFloat}function VS(n,e,t,r){const[a,s]=gs(e,t);return xs(n,a,s,rm(r),r.textureFormatFloat,n.FLOAT)}function am(n){return n.internalFormatHalfFloat}function WS(n,e,t,r){const[a,s]=gs(e,t);return xs(n,a,s,am(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function sm(n){return n.downloadTextureFormat}function zS(n,e,t,r){const[a,s]=gs(e,t);return xs(n,a,s,sm(r),n.RGBA,n.UNSIGNED_BYTE)}function om(n){return n.internalFormatPackedFloat}function GS(n,e,t,r){const[a,s]=wa(e,t);return xs(n,a,s,om(r),n.RGBA,n.FLOAT)}function im(n){return n.internalFormatPackedHalfFloat}function jS(n,e,t,r){const[a,s]=wa(e,t);return xs(n,a,s,im(r),n.RGBA,r.textureTypeHalfFloat)}function HS(n,e,t){return ce(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),jl(n,e,"clipSpacePos",t,3,20,0)&&jl(n,e,"uv",t,2,20,12)}function XS(n,e,t,r,a,s){ce(n,()=>n.bindTexture(n.TEXTURE_2D,e));let o,i,u;a instanceof Uint8Array?(o=new Uint8Array(t*r*4),i=n.UNSIGNED_BYTE,u=n.RGBA):(o=new Float32Array(t*r*4),i=n.FLOAT,u=s.internalFormatPackedFloat),o.set(a),H().getNumber("WEBGL_VERSION")===2?ce(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,r,n.RGBA,i,o)):ce(n,()=>n.texImage2D(n.TEXTURE_2D,0,u,t,r,0,n.RGBA,i,o)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function qS(n,e,t){ce(n,()=>n.bindTexture(n.TEXTURE_2D,e)),t.data instanceof Uint8Array?H().getNumber("WEBGL_VERSION")===2?ce(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.width,t.height,n.RGBA,n.UNSIGNED_BYTE,t.data)):ce(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data)):H().getNumber("WEBGL_VERSION")===2?ce(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t)):ce(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)),ce(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function KS(n,e,t,r){const a=n.createBuffer();ce(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,a));const s=16*e*t;return ce(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,s,n.STREAM_READ)),ce(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,0)),ce(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),a}function YS(n,e,t){const r=n,a=new Float32Array(t);return r.bindBuffer(r.PIXEL_PACK_BUFFER,e),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,a),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),a}function ZS(n,e,t,r){const[a,s]=gs(e,t),o=4,i=new Uint8Array(f6(e*t,o));return ce(n,()=>n.readPixels(0,0,a,s,r.downloadTextureFormat,n.UNSIGNED_BYTE,i)),new Float32Array(i.buffer)}function JS(n,e,t,r,a,s,o,i){const u=n,l=new Float32Array(m6(s,o));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function QS(n,e,t){const r=new Float32Array(e*t*4);return ce(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,r)),r}class hi{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const t=H().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,p6(t,e)):this.gl=pn(t);let r="WEBGL_color_buffer_float";const a="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),H().getNumber("WEBGL_VERSION")===1){const s="OES_texture_float",o="OES_texture_half_float";if(this.textureFloatExtension=js(this.gl,s),Zt(this.gl,o))this.textureHalfFloatExtension=js(this.gl,o);else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),Zt(this.gl,a))this.colorBufferHalfFloatExtension=js(this.gl,a);else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",Zt(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else if(Zt(this.gl,a))this.colorBufferHalfFloatExtension=this.gl.getExtension(a);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=BS(this.gl),this.indexBuffer=US(this.gl),this.framebuffer=R6(this.gl),this.textureConfig=rl(this.gl,this.textureHalfFloatExtension)}get debug(){return H().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;ce(e,()=>e.finish()),ce(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),ce(e,()=>e.deleteFramebuffer(this.framebuffer)),ce(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),ce(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),ce(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),VS(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),WS(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),zS(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),qS(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,r,a){this.throwIfDisposed(),XS(this.gl,e,t,r,a,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),jS(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),GS(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Hl(this.gl,this.framebuffer),this.outputTexture=null),ce(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,r){return this.downloadMatrixDriver(e,()=>ZS(this.gl,t,r,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,r,a,s,o){return JS(this.gl,e,t,r,a,s,o,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return YS(this.gl,e,t)}createBufferFromTexture(e,t,r){this.bindTextureToFrameBuffer(e);const a=KS(this.gl,t,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),a}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,r;if(H().getBool("WEBGL_FENCE_API_ENABLED")){const a=e,s=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),r=()=>{const o=a.clientWaitSync(s,0,0);return o===a.ALREADY_SIGNALED||o===a.CONDITION_SATISFIED},t=s}else H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),r=()=>this.isQueryAvailable(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):r=()=>!0;return{query:t,isFencePassed:r}}downloadMatrixFromPackedTexture(e,t,r){return this.downloadMatrixDriver(e,()=>QS(this.gl,t,r))}createProgram(e){this.throwIfDisposed();const t=this.gl;this.vertexShader==null&&(this.vertexShader=PS(t));const r=T6(t);return ce(t,()=>t.attachShader(r,this.vertexShader)),ce(t,()=>t.attachShader(r,e)),E6(t,r),this.debug&&ii(t,r),this.vertexAttrsAreBound||(this.setProgram(r),this.vertexAttrsAreBound=HS(t,this.program,this.vertexBuffer)),r}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&ce(this.gl,()=>this.gl.deleteProgram(e))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&ii(this.gl,this.program),ce(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,r=!0){return this.throwIfDisposed(),r?A6(this.gl,e,t):O6(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),ce(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,r){this.throwIfDisposed(),this.throwIfNoProgram(),F6(this.gl,e,t,r)}setOutputMatrixTexture(e,t,r){this.setOutputMatrixTextureDriver(e,r,t)}setOutputPackedMatrixTexture(e,t,r){this.throwIfDisposed();const[a,s]=wa(t,r);this.setOutputMatrixTextureDriver(e,a,s)}setOutputMatrixWriteRegion(e,t,r,a){this.setOutputMatrixWriteRegionDriver(r,e,a,t)}setOutputPackedMatrixWriteRegion(e,t,r,a){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&ii(this.gl,this.program),Hs(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),ce(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),ce(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=js(this.gl,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const r=this.gl,a=this.getQueryTimerExtensionWebGL2(),s=r.createQuery();return r.beginQuery(a.TIME_ELAPSED_EXT,s),s}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const t=this.gl,r=this.getQueryTimerExtensionWebGL2();t.endQuery(r.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await yl(()=>this.disposed||this.isQueryAvailable(e,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(t===0)return null;if(t===2){const r=this.gl;return r.getQueryParameter(e,r.QUERY_RESULT)/1e6}else{const r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){const r=this.gl,a=this.getQueryTimerExtensionWebGL2(),s=r.getQueryParameter(e,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{const r=this.getQueryTimerExtensionWebGL1(),a=r.getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),a&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){const e=e5(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){const{resolveFn:r}=this.itemsToPoll[t];r()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let r;"setTimeoutCustom"in H().platform&&(r=H().platform.setTimeoutCustom.bind(H().platform)),yl(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,r)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),ui(this.gl,e,this.framebuffer),this.debug&&Hs(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(ui(this.gl,this.outputTexture,this.framebuffer),this.debug&&Hs(this.gl)):Hl(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const r=t();return this.unbindTextureToFrameBuffer(),r}setOutputMatrixTextureDriver(e,t,r){this.throwIfDisposed();const a=this.gl;ui(a,e,this.framebuffer),this.debug&&Hs(a),this.outputTexture=e,ce(a,()=>a.viewport(0,0,t,r)),ce(a,()=>a.scissor(0,0,t,r))}setOutputMatrixWriteRegionDriver(e,t,r,a){this.throwIfDisposed(),ce(this.gl,()=>this.gl.scissor(e,t,r,a))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function e5(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}function t5(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;++t)e[t]=Math.abs(n[t]);return e}function Ut(n){return(e,t,r,a,s)=>{const o=$e(e,t),i=o.length,u=ot(o),l=ae(o),c=On(s,l),p=e.length,h=t.length,d=ot(e),m=ot(t),y=ao(e,o),b=ao(t,o);if(y.length+b.length===0)for(let x=0;x<c.length;++x)c[x]=n(r[x%r.length],a[x%a.length]);else for(let x=0;x<c.length;++x){const T=Tu(x,i,u),$=T.slice(-p);y.forEach(X=>$[X]=0);const F=$i($,p,d),M=T.slice(-h);b.forEach(X=>M[X]=0);const U=$i(M,h,m);c[x]=n(r[F],a[U])}return[c,o]}}function n5(n,e,t,r){if(r==="int32"){const a=Int32Array.from(n);return[e,"int32",a]}if(r==="bool"){const a=So([0],t),[s,o]=Ut((i,u)=>i!==u?1:0)(e,[],n,a,"bool");return[o,"bool",s]}throw new Error(`Error in Cast: failed to cast ${t} to ${r}`)}const r5=Ut(((n,e)=>n+e));function a5(n,e,t,r,a){const s=ae(r),o=er(a,t);for(let i=0;i<n.length;i++){const u=n[i];if(u<0)throw new Error("Input x must be non-negative!");u>=a||(s>0?o[u]+=e[i]:o[u]+=1)}return o}function s5(n,e,t,r=!1){const a=n.shape[0],s=n.shape[1],o=He([a,t],e.dtype);for(let i=0;i<a;i++)for(let u=0;u<s;u++){const l=n.get(i,u);if(l<0)throw new Error("Input x must be non-negative!");l>=t||(r?o.set(1,i,l):e.size>0?o.set(o.get(i,l)+e.get(i,u),i,l):o.set(o.get(i,l)+1,i,l))}return o}function or(n){return(e,t,r)=>{const a=On(t,e.length);for(let s=0;s<e.length;++s)a[s]=n(e[s],r);return a}}const o5=or(n=>Math.ceil(n));function i5(n,e,t,r){const a=kt(t,ae(e));if(r&&t!=="string"){let s=0;n.forEach(o=>{const i=ae(o.shape);a.set(o.vals,s),s+=i})}else{let s=0;n.forEach(o=>{const i=t==="string"?is(o.vals):o.vals;let u=0;for(let l=0;l<o.shape[0];++l){const c=l*e[1]+s;for(let p=0;p<o.shape[1];++p)a[c+p]=i[u++]}s+=o.shape[1]})}return a}const u5=Ut((n,e)=>n===e?1:0);const l5=or(n=>Math.exp(n));const c5=or(n=>Math.expm1(n));const p5=or(n=>Math.floor(n));function h5(n,e,t,r,a,s,o,i,u){const l=He([r,s],t);for(let c=0;c<r;c++){const p=[];let h=0;for(let d=0;d<a;d++){const m=n[c*a+d];h+=m*o[d],p.push(m)}if(h<0||h>=u/s)throw new Error(`Invalid indices: ${p} does not index into ${i}`);for(let d=0;d<s;d++)l.values[c*s+d]=e.get(...e.indexToLoc(h*s+d))}return l}function d5(n,e,t){const r=He(t,n.dtype);for(let a=0;a<r.size;++a){const s=r.indexToLoc(a).slice(),o=s[0],i=s[2],u=e.locToIndex([o,i]);s[2]=e.values[u];const l=n.locToIndex(s);0<=l&&l<n.values.length&&(r.values[a]=n.values[l])}return r}const f5=Ut((n,e)=>n>e?1:0);const m5=Ut((n,e)=>n>=e?1:0);const g5=Ut((n,e)=>n<e?1:0);const y5=Ut((n,e)=>n<=e?1:0);function x5(n,e,t){const r=(e-n)/(t-1),a=er(t,"float32");a[0]=n;for(let s=1;s<a.length;s++)a[s]=a[s-1]+r;return a}const b5=or(n=>Math.log(n));function v5(n,e,t,r){const a=On(r,ae(t));for(let s=0;s<a.length;++s){const o=s*e;let i=n[o];for(let u=0;u<e;++u){const l=n[o+u];(Number.isNaN(l)||l>i)&&(i=l)}a[s]=i}return a}const w5=Ut(((n,e)=>Math.max(n,e)));const S5=Ut(((n,e)=>Math.min(n,e)));const um=Ut(((n,e)=>n*e));function k5(n,e,t){const r=ya(-1,t);return um([],e,r,n,t)}const T5=Ut(((n,e)=>n!==e?1:0));function E5(n,e,t,r,a){const s=e.length,o=ae(e),i=ot(e),u=ot(a),l=On(t,ae(a));for(let c=0;c<o;++c){const p=Tu(c,s,i),h=new Array(p.length);for(let m=0;m<h.length;m++)h[m]=p[r[m]];const d=$i(h,s,u);l[d]=n[c]}return l}function C5(n,e,t,r){const[a,s]=kn(n,r),o=Sn(e,"int32"),i=er(ae(a),o),u=ae(s);for(let l=0;l<i.length;++l){const c=l*u;let p=1;for(let h=0;h<u;++h)p*=t[c+h];i[l]=p}return{outVals:i,outShape:a,outDtype:o}}function I5(n,e,t){n.forEach((r,a)=>{if(r<0||r>=t){const s=Tu(a,e.length,ot(e)).join(",");throw new Error(`indices[${s}] = ${r} is not in [0, ${t})`)}})}function N5(n,e){for(let t=0;t<n.length;++t){const r=n[t],a=t===n.length-1?e:n[t+1].length;if(r.length===0)throw new Error("Ragged splits may not be empty");if(r[0]<0)throw new Error("Ragged splits must be non-negative");if(r[r.length-1]>a)throw new Error("Ragged splits must not point past values");for(let s=1;s<r.length;++s)if(r[s-1]>r[s])throw new Error("Ragged splits must be sorted in ascending order")}}function $5(n,e,t,r){const a=[];let s=0;const o=e.length-1+t.length,i=new Array(o).fill(null).map(()=>[0]);N5(t,r);let u=1;for(let l=0;l<e.length-1;++l){u*=e[l];const c=e[l+1];for(let p=1;p<u+1;++p)i[l].push(p*c)}for(let l=0;l<n.length;++l){let c=n[l],p=n[l]+1;for(let h=0;h<t.length;++h){const d=t[h],m=h+e.length-1;if(m>=0){const y=i[m],b=y[y.length-1]-d[c];for(let x=c;x<p;++x)i[m].push(d[x+1]+b)}c=d[c],p=d[p]}p!==c&&(a.push([c,p]),s+=p-c)}return{outSplits:i,valueSlices:a,numValues:s}}function R5(n){const e=[];for(let t=0;t<n.length;++t){const r=n[t].length,a=kt("int32",r);e.push(a),n[t].forEach((s,o)=>a[o]=s)}return e}function Kl(n,e){const t=n.slice(0,e);for(;t.length<e;)t.push(1);for(let r=e;r<n.length;r++)t[e-1]*=n[r];return t}function _5(n,e,t,r,a,s){const o=Kl(e,2)[1],i=Kl(s,2)[1];let u=0;for(const l of t)for(let c=l[0];c<l[1];++c){for(let p=0;p<r;++p)a[u*i+p]=n[c*o+p];++u}}function A5(n,e,t,r,a){const s=e.slice();s[0]=a;const o=kt(t,ae(s)),i=n.length,u=i===0?0:i/e[0];return _5(n,e,r,u,o,s),[o,s]}function O5(n,e,t,r,a,s,o,i){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const u=e[0][0]-1;if(I5(s,o,u),r.length===0)throw new Error("params.rank must be nonzero");const l=r[0],{outSplits:c,valueSlices:p,numValues:h}=$5(s,o,n,l),d=R5(c),m=A5(t,r,a,p,h);return[d,m[0],m[1]]}var Xt=un;class co{constructor(e,t,r,a,s,o,i,u,l,c){this.shape=e,this.shapeShape=t,this.values=r,this.valuesShape=a,this.valuesDType=s,this.defaultValue=o,this.defaultValueShape=i,this.rowPartitionValues=u,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=g1(c),this.raggedRank=y1(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===Xt.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===Xt.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case Xt.VALUE_ROWIDS:return co.getMaxWidthValueRowID(t);case Xt.ROW_SPLITS:return co.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${Xt[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let r=0;for(let a=0;a<t-1;++a){const s=e[a+1]-e[a];s>r&&(r=s)}return r}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let r=0,a=e[0],s=0;for(let o=1;o<t;++o){const i=e[o];i!==a&&(a=i,s=Math.max(o-r,s),r=o)}return Math.max(t-r,s)}tensorShapeFromTensor(e,t,r=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Zl(e,r)}calculateOutputSize(e){const t=this.valuesShape,r=this.defaultValueShape;x1(r,t);const a=this.tensorShapeFromTensor(this.shape,this.shapeShape),s=m1(this.raggedRank,a,t);s[0]<0&&(s[0]=e);for(let o=1;o<=this.raggedRank;++o)s[o]<0&&(s[o]=this.getMaxWidth(o));return s}calculateFirstParentOutputIndex(e,t,r){const a=Math.min(e,r),s=[];let o=0;for(let i=0;i<a;++i,o+=t)s.push(o);for(let i=a;i<e;++i)s.push(-1);return R(s.length===e,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(e,t,r,a){const s=e.length,o=[];for(let i=0;i<s-1;++i){const u=e[i+1]-e[i];let l=Math.min(a,u),c=t[i];c===-1&&(l=0);for(let p=0;p<l;++p)o.push(c),c+=r;for(let p=0;p<u-l;++p)o.push(-1)}if(s>0&&o.length!==e[s-1])throw new Error("Invalid row split size.");return o}calculateOutputIndexValueRowID(e,t,r,a){const s=e.length,o=[];if(s===0)return[];let i=0,u=e[0];if(u>=t.length)throw new Error(`Got currentValueRowId=${u}, which is not less than ${t.length}`);let l=t[u];o.push(l);for(let c=1;c<s;++c){const p=e[c];if(p===u)l>=0&&(++i,i<a?l+=r:l=-1);else{if(i=0,u=p,p>=t.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${t.length}`);l=t[p]}o.push(l)}if(o.length!==e.length)throw new Error("Invalid row ids.");return o}calculateOutputIndex(e,t,r,a){const s=this.getRowPartitionTensor(e),o=this.getRowPartitionTypeByDimension(e);switch(o){case Xt.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,t,r,a);case Xt.ROW_SPLITS:if(s.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(s,t,r,a);default:throw new Error(`Unsupported partition type: ${Xt[o]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case Xt.FIRST_DIM_SIZE:return e[0];case Xt.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Xt.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Xt[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let o=r.length-2;o>=0;--o)r[o]=r[o+1]*t[o+1];const a=Zl(t,!1),s=kt(this.valuesDType,ae(a));if(r[0]*t[0]>0){let o=this.calculateFirstParentOutputIndex(e,r[0],t[0]);for(let i=1;i<=this.raggedRank;++i)o=this.calculateOutputIndex(i-1,o,r[i],t[i]);this.setOutput(this.raggedRank,o,s,a)}return[a,s]}setOutput(e,t,r,a){if(r.length===0)return;const s=this.values,o=r;let i=a.slice();i=i.slice(e+1);const u=ae(i),l=t.length;let c=this.defaultValue;if(c.length!==u&&c.length!==1){const m=this.defaultValueShape;Xe(()=>{const y=Z(c,m);c=Qa(y,i).dataSync()})}let p=0,h=0,d=0;for(let m=0;m<=l;++m){let y=m<l?t[m]:-1;if(y===d){++d;continue}if(h<d){const b=s.subarray(p*u),x=o.subarray(h*u),T=(d-h)*u;Yl(x,b,T)}if(m>=l){const b=r.length;y=Math.floor(b/u)}if(y>d)if(this.defaultValue.length===1)o.subarray(d*u,y*u).fill(this.defaultValue[0]),d=y;else for(;y>d;){const b=o.slice(d*u);Yl(b,c,u),++d}y<0?(p=m+1,h=d):(p=m,h=d,d=h+1)}}}function Yl(n,e,t){for(let r=0;r<t;r++)n[r]=e[r]}function Zl(n,e){const t=[];for(let r of n){if(r<0){if(!e)throw new Error(`Dimension ${r} must be >= 0`);if(r<-1)throw new Error(`Dimension ${r} must be >= -1`);r=-1}t.push(r)}return t}function F5(n,e,t,r,a,s,o,i,u,l){return new co(n,e,t,r,a,s,o,i,u,l).compute()}function D5(n,e,t,r){const a=n===e,s=n<e&&t<0,o=e<n&&t>1;if(a||s||o)return er(0,r);const i=Math.abs(Math.ceil((e-n)/t)),u=er(i,r);e<n&&t===1&&(t=-1),u[0]=n;for(let l=1;l<u.length;l++)u[l]=u[l-1]+t;return u}const M5=or(n=>1/Math.sqrt(n));function L5(n,e,t,r,a,s,o,i,u,l){const c=[r/a,a],p=n.values,h=e.values;if(r===0)return He(t,e.dtype);const d=He(c,e.dtype);typeof u=="string"||typeof u=="number"?d.values.fill(u):typeof u=="boolean"&&d.values.fill(+u);for(let m=0;m<s;m++){const y=[];let b=0;for(let x=0;x<o;x++){const T=p[m*o+x];y.push(T),b+=T*i[x]}if(b<0||b>=r/a)throw new Error(`Invalid indices: ${y} does not index into ${t}`);for(let x=0;x<a;x++)l?d.values[b*a+x]+=h[m*a+x]:d.values[b*a+x]=e.rank===0?h[0]:h[m*a+x]}return d}const P5=or(n=>1/(1+Math.exp(-n)));function B5(n,e,t,r,a){const s=Lu(r,e,t),o=ae(t),i=ot(r);if(s){const p=Pu(e,i);return a==="string"?n.slice(p,p+o):n.subarray(p,p+o)}const u=a==="string"?is(n):n,l=He(r,a,u),c=He(t,a);for(let p=0;p<c.size;++p){const h=c.indexToLoc(p),d=h.map((m,y)=>m+e[y]);c.set(l.get(...d),...h)}return a==="string"?Y1(c.values):c.values}function U5(n,e,t,r,a,s,o){const i=e[0],u=s[0],l=new Array(u),c=new Array(i),p=e[1];if(u===0){if(i!==0)throw new Error(M1(i));const b=kt(t,0),x=kt(a,0);return[b,[0,p],x,l,c]}let h=!0,d=0;const m=new Array(u).fill(0);for(let b=0;b<i;++b){const x=n[b*p];if(x<0)throw new Error(L1(b,x));if(x>=u)throw new Error(P1(b,x,u));++m[x],h=h&&x>=d,d=x}let y=!0;for(let b=0;b<u;++b){const x=m[b]===0;l[b]=x,y=y&&!x,m[b]=Math.max(m[b],1),b>0&&(m[b]+=m[b-1])}if(y&&h){const b=n,x=r;for(let T=0;T<i;++T)c[T]=T;return[b,[i,p],x,l,c]}else{const b=m[u-1],x=kt(t,b*p),T=kt(a,b),$=new Array(u).fill(0);for(let F=0;F<i;++F){const M=n[F*p],U=$[M],X=(M===0?0:m[M-1])+U;$[M]++;for(let z=0;z<p;++z)x[X*p+z]=n[F*p+z];T[X]=r[F],c[F]=X}for(let F=0;F<u;++F)if($[F]===0){const M=F===0?0:m[F-1];x[M*p+0]=F;for(let U=1;U<p;++U)x[M*p+U]=0;T[M]=o}return[x,[b,p],T,l,c]}}function V5(n,e,t,r,a){const s=ae(r),o=e[0],i=a.length,u=[];let l=1,c=-1;for(let y=0;y<i;++y){const b=a[y];if(b===-1){if(c!==-1)throw new Error(B1(c,y));c=y,u.push(1)}else{if(b<0)throw new Error(U1(y,b));l*=b,u.push(b)}}if(c!==-1){if(l<=0)throw new Error(V1());const y=Math.trunc(s/l);if(l*y!==s)throw new Error(W1(r,u));u[c]=y}if(ae(u)!==s)throw new Error(z1(r,u));const p=r.length,h=[];if(p>0){h[p-1]=1;for(let y=p-2;y>=0;--y)h[y]=h[y+1]*r[y+1]}const d=[];if(i>0){d[i-1]=1;for(let y=i-2;y>=0;--y)d[y]=d[y+1]*u[y+1]}const m=kt(t,o*i);for(let y=0;y<o;++y){let b=0;for(let x=0;x<p;++x)b+=n[y*p+x]*h[x];for(let x=0;x<i;++x)m[y*i+x]=Math.trunc(b/d[x]),b%=d[x]}return[m,[o,i],u]}function W5(n,e,t,r,a,s=!1,o=0){const i=r.length,u=[e[0],n.length/e[0]],l=u[1],c=i>0?a[i-1]+1:0;if(c<0)throw new Error(ou());const p=e.slice();p[0]=c;const h=p.reduce((T,$)=>T*$,1),d=kt(t,h);if(i===0)return c>0&&d.fill(o),[d,p];if(c<=0)throw new Error(ou());let m=0,y=1,b=0,x=a[m];for(;;){let T=0;if(y<i){if(T=a[y],x===T){++y;continue}if(x>=T)throw new Error(G1())}if(x<0||x>=c)throw new Error(j1(x,c));x>b&&d.fill(o,b*l,x*l);for(let $=m;$<y;++$){const F=r[$];if(F<0||F>=u[0])throw new Error(H1($,r[$],u[0]));for(let M=0;M<l;M++)d[x*l+M]+=n[F*l+M]}if(s)for(let $=0;$<l;$++)d[x*l+$]/=y-m;if(m=y,++y,b=x+1,x=T,y>i)break}return b<c&&d.fill(o,b*l,c*l),[d,p]}const z5=or(n=>Math.sqrt(n));const G5=Ut(((n,e)=>{const t=n-e;return t*t}));function j5(n,e,t,r){const a=He(n,e.dtype);for(let s=0;s<a.size;s++){const o=a.indexToLoc(s),i=new Array(o.length);for(let u=0;u<i.length;u++)i[u]=o[u]*t[u]+r[u];a.set(e.get(...i),...o)}return a}class H5{constructor(e,t,r,a,s,o){this.separator=Nr(e),this.nGramWidths=t,this.leftPad=Nr(r),this.rightPad=Nr(a),this.padWidth=s,this.preserveShort=o}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const r=this.getPadWidth(t);return Math.max(0,e+2*r-t+1)}createNGrams(e,t,r,a,s,o){for(let i=0;i<s;++i){const u=this.getPadWidth(o),l=Math.max(0,u-i),c=Math.max(0,u-(s-(i+1))),p=o-(l+c),h=t+(l>0?0:i-u);let d=0;d+=l*this.leftPad.length;for(let T=0;T<p;++T)d+=e[h+T].length;d+=c*this.rightPad.length;const m=l+c+p-1;d+=m*this.separator.length,r[a+i]=new Uint8Array(d);const y=r[a+i];let b=0;const x=T=>T.forEach($=>y[b++]=$);for(let T=0;T<l;++T)x(this.leftPad),x(this.separator);for(let T=0;T<p-1;++T)x(e[h+T]),x(this.separator);if(p>0){x(e[h+p-1]);for(let T=0;T<c;++T)x(this.separator),x(this.rightPad)}else{for(let T=0;T<c-1;++T)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,t){const r=e.length,a=t.length;if(a>0){let u=t[0];if(u!==0)throw new Error(`First split value must be 0, got ${u}`);for(let l=1;l<a;++l){let c=t[l]>=u;if(c=c&&t[l]<=r,!c)throw new Error(`Invalid split value ${t[l]}, must be in [${u}, ${r}]`);u=t[l]}if(u!==r)throw new Error(`Last split value must be data size. Expected ${r}, got ${u}`)}const s=a-1,o=kt("int32",a);if(r===0||a===0){const u=new Array(r);for(let l=0;l<=s;++l)o[l]=0;return[u,o]}o[0]=0;for(let u=1;u<=s;++u){const l=t[u]-t[u-1];let c=0;this.nGramWidths.forEach(p=>{c+=this.getNumNGrams(l,p)}),this.preserveShort&&l>0&&c===0&&(c=1),o[u]=o[u-1]+c}const i=new Array(o[s]);for(let u=0;u<s;++u){const l=t[u];let c=o[u];if(this.nGramWidths.forEach(p=>{const h=t[u+1]-t[u],d=this.getNumNGrams(h,p);this.createNGrams(e,l,i,c,d,p),c+=d}),this.preserveShort&&c===o[u]){const p=t[u+1]-t[u];if(p===0)continue;const h=p+2*this.padWidth;this.createNGrams(e,l,i,c,1,h)}}return[i,o]}}function X5(n,e,t,r,a,s,o,i){return new H5(t,r,a,s,o,i).compute(n,e)}function q5(n,e,t,r){if(!n.length)return;if(e.length===0){for(let s=0;s<n.length;++s)r.push(n.subarray(s,s+1));return}if(e.length===1){const s=e[0];let o=n.indexOf(s);for(;o!==-1;){const i=n.subarray(0,o);(!t||i.length!==0)&&r.push(i),n=n.subarray(o+1),o=n.indexOf(s)}(!t||n.length!==0)&&r.push(n);return}let a=0;for(let s=0;s<n.length+1;s++)if(s===n.length||e.indexOf(n[s])!==-1){const o=n.subarray(a,s);(!t||o.length!==0)&&r.push(o),a=s+1}}function K5(n,e,t){const r=n.length,a=[];let s=0,o=0;const i=new Array(r);for(let h=0;h<r;++h){const d=a.length;q5(n[h],e,t,a);const m=a.length-d;i[h]=m,s+=m,o=Math.max(o,m)}const u=kt("int32",s*2),l=new Array(s),c=[r,o];let p=0;for(let h=0;h<r;++h)for(let d=0;d<i[h];++d)u[p*2]=h,u[p*2+1]=d,l[p]=a[p],++p;return[u,l,c]}function Y5(n,e){const t=kt("int32",n.length);for(let r=0;r<n.length;++r)t[r]=q2(n[r]).modulo(e).getLowBitsUnsigned();return t}const Z5=Ut(((n,e)=>n-e));function J5(n,e){const t=new Array(n.rank);for(let a=0;a<t.length;a++)t[a]=n.shape[a]*e[a];const r=He(t,n.dtype);for(let a=0;a<r.values.length;++a){const s=r.indexToLoc(a),o=new Array(n.rank);for(let u=0;u<o.length;u++)o[u]=s[u]%n.shape[u];const i=n.locToIndex(o);r.values[a]=n.values[i]}return r}const Za=(n,e)=>{const t=e.value-n.value;return t===0?n.index-e.index:t};function lm(n,e,t=0,r=n.length-1){for(;r>t;){if(r-t>600){const i=r-t+1,u=e-t+1,l=Math.log(i),c=.5*Math.exp(2*l/3),p=.5*Math.sqrt(l*c*(i-c)/i)*Math.sign(u-i/2),h=Math.max(t,Math.floor(e-u*c/i+p)),d=Math.min(r,Math.floor(e+(i-u)*c/i+p));lm(n,e,h,d)}const a=n[e];let s=t,o=r;for(Ha(n,t,e),Za(n[r],a)>0&&Ha(n,t,r);s<o;){for(Ha(n,s,o),s++,o--;Za(n[s],a)<0;)s=s+1;for(;Za(n[o],a)>0;)o=o-1}Za(n[t],a)===0?Ha(n,t,o):(o=o+1,Ha(n,o,r)),o<=e&&(t=o+1),e<=o&&(r=o-1)}}function Q5(n,e,t,r,a){const s=e[e.length-1],[o,i]=[n.length/s,s],u=On(t,o*r),l=On("int32",o*r);for(let p=0;p<o;p++){const h=p*i,d=n.subarray(h,h+i);let m=new Array(d.length);d.forEach((T,$)=>m[$]={value:T,index:$}),r<m.length&&(lm(m,r),m=m.slice(0,r)),a&&m.sort(Za);const y=p*r,b=u.subarray(y,y+r),x=l.subarray(y,y+r);for(let T=0;T<r;T++)b[T]=m[T].value,x[T]=m[T].index}const c=e.slice();return c[c.length-1]=r,[He(c,t,u),He(c,"int32",l)]}function ek(n,e,t,r){const a=rt(e,t)[0],s=[1,t[0],1];for(let m=0;m<a;m++)s[0]*=t[m];s[1]=t[a];for(let m=a+1;m<t.length;m++)s[2]*=t[m];const o={},i=new Int32Array(t[a]),u=new ts(s,r,n),l=[],c=s[0]===1&&s[2]===1;for(let m=0;m<t[a];m++){let y;if(c)y=n[m].toString();else{const b=[];for(let x=0;x<s[0];x++)for(let T=0;T<s[2];T++)b.push(u.get(x,m,T));y=b.join(",")}if(o[y]!==void 0)i[m]=o[y];else{const b=Object.keys(o).length;o[y]=b,i[m]=b,l.push(m)}}const p=s.slice();p[1]=Object.keys(o).length;const h=new ts(p,r);l.forEach((m,y)=>{for(let b=0;b<s[0];b++)for(let x=0;x<s[2];x++)h.set(u.get(b,m,x),b,y,x)});const d=t.slice();return d[a]=p[1],{outputValues:h.values,outputShape:d,indices:i}}const tk=Object.freeze(Object.defineProperty({__proto__:null,addImpl:r5,bincountImpl:a5,bincountReduceImpl:s5,castImpl:n5,ceilImpl:o5,concatImpl:i5,equalImpl:u5,expImpl:l5,expm1Impl:c5,floorImpl:p5,gatherNdImpl:h5,gatherV2Impl:d5,greaterEqualImpl:m5,greaterImpl:f5,lessEqualImpl:y5,lessImpl:g5,linSpaceImpl:x5,logImpl:b5,maxImpl:v5,maximumImpl:w5,minimumImpl:S5,multiplyImpl:um,negImpl:k5,notEqualImpl:T5,prodImpl:C5,raggedGatherImpl:O5,raggedTensorToTensorImpl:F5,rangeImpl:D5,rsqrtImpl:M5,scatterImpl:L5,sigmoidImpl:P5,simpleAbsImpl:t5,sliceImpl:B5,sparseFillEmptyRowsImpl:U5,sparseReshapeImpl:V5,sparseSegmentReductionImpl:W5,sqrtImpl:z5,squaredDifferenceImpl:G5,stridedSliceImpl:j5,stringNGramsImpl:X5,stringSplitImpl:K5,stringToHashBucketFastImpl:Y5,subImpl:Z5,tileImpl:J5,topKImpl:Q5,transposeImpl:E5,uniqueImpl:ek},Symbol.toStringTag,{value:"Module"}));const{addImpl:nk,bincountImpl:cm,bincountReduceImpl:rk,castImpl:ak,ceilImpl:sk,concatImpl:ok,equalImpl:ik,expImpl:uk,expm1Impl:lk,floorImpl:ck,gatherNdImpl:pk,gatherV2Impl:hk,greaterImpl:dk,greaterEqualImpl:fk,lessImpl:mk,lessEqualImpl:gk,linSpaceImpl:yk,logImpl:xk,maxImpl:bk,maximumImpl:vk,minimumImpl:wk,multiplyImpl:Sk,negImpl:kk,notEqualImpl:Tk,prodImpl:Ek,raggedGatherImpl:Ck,raggedTensorToTensorImpl:Ik,rangeImpl:Nk,rsqrtImpl:$k,scatterImpl:Rk,sigmoidImpl:_k,simpleAbsImpl:pm,sliceImpl:Ak,sparseFillEmptyRowsImpl:Ok,sparseReshapeImpl:Fk,sparseSegmentReductionImpl:hm,sqrtImpl:Dk,stridedSliceImpl:Mk,stringNGramsImpl:Lk,stringSplitImpl:Pk,stringToHashBucketFastImpl:Bk,subImpl:Uk,tileImpl:Vk,topKImpl:Wk,transposeImpl:il,uniqueImpl:zk}=tk;function dm(n,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${n}.${t}`)}function ft(n,e){return e===1?[n]:dm(n,e)}function Gk(n,e){if(n===1)return"rc";let t="";for(let r=0;r<n;r++)t+=e[r],r<n-1&&(t+=",");return t}class jk{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=bt(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const t=ft("rc",this.rank),r=Be(this.rank),a=this.getOutOfBoundsCondition(t),s=this.getSetup(t),o=this.getOutput(t);this.userCode=`
        void main() {
          ${r} rc = getOutputCoords();

          if(${a}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${o}));
          }
        }
      `}}getSourceCoordsArr(e){const t=[];for(let r=0;r<=1;r++)for(let a=0;a<=1;a++){let s=`${r===0?"r":"rp1"}, ${a===0?"c":"cp1"}`;for(let o=2;o<this.rank;o++)s=`${e[e.length-1-o]},`+s;t.push(s)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let r=this.rank-2;r<this.rank;r++)t+=`${e[r]} >= ${this.enableShapeUniforms?`outShape[${r}]`:this.outputShape[r]}`,r<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";const t=e.slice(-2),r=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],a=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${r};
      bool rEdge = rp1 >= ${a};
    `}getOutput(e){const t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}class fm{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length);let r="";for(let a=0;a<4;a++){let s="thisRC = rc;";a%2===1&&(s+="thisRC.z += 1;"),a>1&&(s+="thisRC.y += 1;"),r+=`
        ${s}
        ${a>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${a}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${a>0?"}":""}
      `}this.userCode=`
      ${Hk(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?sl():al(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${r}

        setOutput(result);
      }
    `}}function Hk(n,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?H6(["r","c","d"],"inputShape"):Ur(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class Xk{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,r){const a=Ql(t,r),s=ec(e,a,r);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);const o=Jl(e,a,this.gpgpu.gl,this.gpgpu.textureConfig,r);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=o,this.log();const u=this.freeTextures[s].shift();return this.usedTextures[s].push(u),u}let i;return a===st.PACKED_2X2_FLOAT32?i=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===st.PACKED_2X2_FLOAT16?i=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===st.UNPACKED_FLOAT32?i=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===st.UNPACKED_FLOAT16?i=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===st.PACKED_4X1_UNSIGNED_BYTE&&(i=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[s].push(i),this.numUsedTextures++,this._numBytesAllocated+=o,this.log(),i}releaseTexture(e,t,r,a){if(this.freeTextures==null)return;const s=Ql(r,a),o=ec(t,s,a);o in this.freeTextures||(this.freeTextures[o]=[]);const i=Jl(t,s,this.gpgpu.gl,this.gpgpu.textureConfig,a),u=H().get("WEBGL_DELETE_TEXTURE_THRESHOLD");u!==-1&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=i):(this.freeTextures[o].push(e),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;const l=this.usedTextures[o],c=l.indexOf(e);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(c,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function qk(n,e){const t=n;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F||e===n.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function Jl(n,e,t,r,a){const s=Kk(e,r);let o;if(a){const[u,l]=wa(n[0],n[1]);o=u*l}else{const[u,l]=gs(n[0],n[1]);o=u*l}const i=qk(t,s);return o*i}function Kk(n,e){switch(n){case st.PACKED_2X2_FLOAT32:return om(e);case st.PACKED_2X2_FLOAT16:return im(e);case st.UNPACKED_FLOAT32:return rm(e);case st.UNPACKED_FLOAT16:return am(e);case st.PACKED_4X1_UNSIGNED_BYTE:return sm(e);default:throw new Error(`Unknown physical texture type ${n}`)}}function Yk(n){return H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?st.PACKED_2X2_FLOAT32:st.UNPACKED_FLOAT32:n?st.PACKED_2X2_FLOAT16:st.UNPACKED_FLOAT16}function Ql(n,e){if(n===Mt.UPLOAD)return st.PACKED_2X2_FLOAT32;if(n===Mt.RENDER||n==null)return Yk(e);if(n===Mt.DOWNLOAD||n===Mt.PIXELS)return st.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function ec(n,e,t){return`${n[0]}_${n[1]}_${e}_${t}`}class $n{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const tn="if (isnan(x)) return x;",Zk="return x;",tc="return abs(x);",Jk="return (x >= 0.0) ? x : (exp(x) - 1.0);",Qk=tn+`
  return (x < 0.0) ? 0.0 : x;
`,eT=tn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Qr="return x;",tT="return 1.0 / (1.0 + exp(-1.0 * x));";const nT="return x;",rT=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,aT=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,sT=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,oT="return 1.0 / (1.0 + exp(-1.0 * x));";class Ir{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class iT{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length);const t=e.length,r=ft("rc",t),a=Be(t),s=Gk(t,r),o=r.slice(-2),i=t<=1?"rc":`vec2(${o.join(",")})`;this.userCode=`
      void main() {
        ${a} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${i}));
      }
    `}}const uT=o1,lT=1e-7,cT=1e-4,di={};function pT(n){return n in di||(di[n]={}),di[n]}const hT=H().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),dT=600;function fT(){return H().global.screen==null?1024:H().global.screen.height*H().global.screen.width*window.devicePixelRatio*dT/1024/1024}class Lo extends Bc{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!H().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(e!=null){if(e instanceof hi)t=e;else{const r=pn(H().getNumber("WEBGL_VERSION"),e);t=new hi(r)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const r=pn(H().getNumber("WEBGL_VERSION"));t=new hi(r),this.binaryCache=pT(H().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Xk(this.gpgpu),this.numMBBeforeWarning=fT(),this.texData=new f2(this,Jr())}nextDataId(){return Lo.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,t,r){if((H().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||H().getBool("DEBUG"))&&this.checkNumericalProblems(e),r==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const a={id:this.nextDataId()};return this.texData.set(a,{shape:t,dtype:r,values:e,usage:Mt.UPLOAD,refCount:1}),a}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){const t=this.texData.get(e);t.refCount--}}move(e,t,r,a,s){if(H().getBool("DEBUG")&&this.checkNumericalProblems(t),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:r,dtype:a,values:t,usage:Mt.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:r,dtype:a,complexTensorInfos:s,slice:o,shape:i,isPacked:u}=t;if(o!=null){let h;u?h=new Ir(i,Qr):h=new $n(i,Qr);const d=this.runWebGLProgram(h,[{dataId:e,shape:i,dtype:a}],a),m=this.readSync(d.dataId);return this.disposeIntermediateTensorInfo(d),m}if(r!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return r;const l=this.activeTimers!=null;let c;l&&(c=an());let p;if(a==="complex64"){const h=this.readSync(s.real.dataId),d=this.readSync(s.imag.dataId);p=su(h,d)}else p=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=an()-c),this.convertAndCacheOnCPU(e,p)}async read(e){if(this.pendingRead.has(e)){const m=this.pendingRead.get(e);return new Promise(y=>m.push(y))}const t=this.texData.get(e),{values:r,shape:a,slice:s,dtype:o,complexTensorInfos:i,isPacked:u}=t;if(s!=null){let m;u?m=new Ir(a,Qr):m=new $n(a,Qr);const y=this.runWebGLProgram(m,[{dataId:e,shape:a,dtype:o}],o),b=this.read(y.dataId);return this.disposeIntermediateTensorInfo(y),b}if(r!=null)return this.convertAndCacheOnCPU(e);if(H().getBool("DEBUG")&&!H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&H().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,c;if(o!=="complex64"&&H().get("WEBGL_BUFFER_SUPPORTED")){c=this.decode(e);const m=this.texData.get(c.dataId);l=this.gpgpu.createBufferFromTexture(m.texture.texture,...Gs(a))}this.pendingRead.set(e,[]),o!=="complex64"&&await this.gpgpu.createAndWaitForFence();let p;if(o==="complex64"){const m=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),y=m[0],b=m[1];p=su(y,b)}else if(l==null)p=this.getValuesFromTexture(e);else{const m=ae(a);p=this.gpgpu.downloadFloat32MatrixFromBuffer(l,m)}if(c!=null&&this.disposeIntermediateTensorInfo(c),l!=null){const m=this.gpgpu.gl;ce(m,()=>m.deleteBuffer(l))}const h=this.convertAndCacheOnCPU(e,p),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(m=>m(h)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&Jr().removeDataId(e,this),this.pendingDeletes--),h}readToGPU(e,t={}){const r=this.texData.get(e),{values:a,shape:s,slice:o,dtype:i,isPacked:u,texture:l}=r;if(i==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(o!=null){let d;u?d=new Ir(s,Qr):d=new $n(s,Qr);const m=this.runWebGLProgram(d,[{dataId:e,shape:s,dtype:i}],i),y=this.readToGPU(m,t);return this.disposeIntermediateTensorInfo(m),y}if(l==null)throw a!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const c=this.decode(e,t.customTexShape),p=Jr().makeTensorFromTensorInfo(c),h=this.texData.get(c.dataId);return Object.assign({tensorRef:p},h.texture)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const r=t.map(a=>ca(a));return He(e.shape,e.dtype,r)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return He(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){const r=e[t];if(!b6(r))throw H().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${r} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${r} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:t,dtype:r,isPacked:a}=this.texData.get(e),s=ae(t);if(H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const h=this.decode(e),d=this.texData.get(h.dataId),m=this.gpgpu.downloadMatrixFromPackedTexture(d.texture.texture,...Gs(t)).subarray(0,s);return this.disposeIntermediateTensorInfo(h),m}const o=H().getBool("WEBGL_PACK")&&a===!0,i=o?li(t):t,u=o?new DS(i):new FS(i),l=this.runWebGLProgram(u,[{shape:i,dtype:r,dataId:e}],"float32"),c=this.texData.get(l.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(l),p}timerAvailable(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,r=[];let a=!1;this.programTimersStack==null?(this.programTimersStack=r,a=!0):this.activeTimers.push(r),this.activeTimers=r,e();const s=ia(this.activeTimers.map(u=>u.query)).filter(u=>u!=null),o=ia(this.activeTimers.map(u=>u.name)).filter(u=>u!=null);this.activeTimers=t,a&&(this.programTimersStack=null);const i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const u=await Promise.all(s);i.kernelMs=m2(u),i.getExtraProfileInfo=()=>u.map((l,c)=>({name:o[c],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else i.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:an(),endMs:null}}endTimer(e){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=an(),e)}async getQueryTime(e){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:r}=this.texData.get(e);return r!=null&&(this.disposeData(r.real.dataId,t),this.disposeData(r.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:r,texShape:a,usage:s,isPacked:o,slice:i}=this.texData.get(e),u=i&&i.origDataId||e,l=this.dataRefCount.get(u);l>1?this.dataRefCount.set(u,l-1):(this.dataRefCount.delete(u),t!=null&&(this.numBytesInGPU-=this.computeBytes(a,r),this.textureManager.releaseTexture(t,a,s,o)));const c=this.texData.get(e);c.texture=null,c.texShape=null,c.isPacked=!1,c.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=hT){return H().getBool("WEBGL_CPU_FORWARD")&&e.every(r=>this.texData.get(r.dataId).texture==null&&ae(r.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){ln("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return uT(e.shape,t)}packedUnaryOp(e,t,r){const a=new Ir(e.shape,t),s=this.compileAndRun(a,[e],r);return Jr().makeTensorFromTensorInfo(s)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const a=pm(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,a)}if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,tc,e.dtype);const t=new $n(e.shape,tc),r=this.compileAndRun(t,[e]);return Jr().makeTensorFromTensorInfo(r)}makeTensorInfo(e,t,r){let a;if(t==="string"&&r!=null&&r.length>0&&bo(r[0])){const s=r.map(o=>Nr(o));a=this.write(s,e,t)}else a=this.write(r,e,t);return this.texData.get(a).usage=null,{dataId:a,shape:e,dtype:t}}makeOutput(e,t,r){return Jr().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,r),this)}unpackTensor(e){const t=new iT(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new jk(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const r=[da(e.shape),...fa(e.shape)],a={dtype:e.dtype,shape:r,dataId:e.dataId},s=[da(t),...fa(t)],o=new fm(s,r),i=!0,u=[r],l=this.runWebGLProgram(o,[a],e.dtype,u,i);return{dataId:l.dataId,shape:t,dtype:l.dtype}}decode(e,t){const r=this.texData.get(e),{isPacked:a,shape:s,dtype:o}=r;if(t!=null){const h=ae(s),d=t[0]*t[1]*4;R(h<=d,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const i=li(s);let u;a?u=new OS(i):u=new AS(i);const l=!0,c=[t??Gs(i)],p=this.runWebGLProgram(u,[{shape:i,dtype:o,dataId:e}],o,c,l,t);return{dtype:o,shape:s,dataId:p.dataId}}runWebGLProgram(e,t,r,a,s=!1,o){const i=this.makeTensorInfo(e.outputShape,r),u=this.texData.get(i.dataId);if(e.packedOutput&&(u.isPacked=!0),e.outPackingScheme===us.DENSE){const x=o??Gs(e.outputShape);u.texShape=x.map(T=>T*2)}if(e.outTexUsage!=null&&(u.usage=e.outTexUsage),ae(i.shape)===0)return u.values=On(i.dtype,0),i;const l=[],c=t.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let T=this.texData.get(x.dataId);if(T.texture==null){if(!e.packedInputs&&ae(x.shape)<=H().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:T.values};e.packedInputs&&(T.isPacked=!0,T.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!T.isPacked!=!!e.packedInputs)x=T.isPacked?this.unpackTensor(x):this.packTensor(x),l.push(x),T=this.texData.get(x.dataId);else if(T.isPacked&&!lo(T.shape,x.shape)){const $=x,F=x.shape;x.shape=T.shape,x=this.packedReshape(x,F),l.push(x),T=this.texData.get(x.dataId),$.shape=F}return{shape:x.shape,texData:T,isUniform:!1}});this.uploadToGPU(i.dataId);const p={shape:i.shape,texData:u,isUniform:!1},h=_S(e,c,p),d=this.getAndSaveBinary(h,()=>$S(this.gpgpu,e,c,p)),m=this.activeTimers!=null;let y;m&&(y=this.startTimer()),H().get("ENGINE_COMPILE_ONLY")||RS(this.gpgpu,d,c,p,a),l.forEach(x=>this.disposeIntermediateTensorInfo(x)),m&&(y=this.endTimer(y),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(y)}));const b=H().get("WEBGL_FLUSH_THRESHOLD");if(b>0){const x=an();x-this.lastGlFlushTime>b&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!H().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&s===!1){const x=this.unpackTensor(i);return this.disposeIntermediateTensorInfo(i),x}return i}compileAndRun(e,t,r,a,s=!1){return r=r||t[0].dtype,this.runWebGLProgram(e,t,r,a,s)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(H().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Xe(()=>{if(!H().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=H().getBool("DEBUG");H().set("DEBUG",!1);const t=this.abs(Ae(1e-8)).dataSync()[0];if(H().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?lT:cT}uploadToGPU(e){const t=this.texData.get(e),{shape:r,dtype:a,values:s,texture:o,usage:i,isPacked:u}=t;if(o!=null)return;const l=this.activeTimers!=null;let c;l&&(c=an());let p=t.texShape;if(p==null&&(p=L6(r,u),t.texShape=p),s!=null){const h=li(r);let d,m=p[1],y=p[0];const b=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(u||!b)&&([m,y]=wa(p[0],p[1])),u?d=new LS(h,b):d=new MS(h,b);const x=b?[y,m]:p,T=this.makeTensorInfo(x,a),$=this.texData.get(T.dataId);b?$.usage=Mt.PIXELS:$.usage=Mt.UPLOAD,$.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(T.dataId),m,y,s);const F=[[y,m]],M=this.runWebGLProgram(d,[T],a,F,!0),U=this.texData.get(M.dataId);t.texShape=U.texShape,t.isPacked=U.isPacked,t.usage=U.usage,H().get("ENGINE_COMPILE_ONLY")?this.disposeData(M.dataId):(t.texture=U.texture,t.values=null,this.texData.delete(M.dataId)),this.disposeIntermediateTensorInfo(T),l&&(this.uploadWaitMs+=an()-c)}else{const h=this.acquireTexture(p,i,a,u);t.texture=h}}convertAndCacheOnCPU(e,t){const r=this.texData.get(e),{dtype:a}=r;return this.releaseGPUData(e),t!=null&&(r.values=mT(t,a)),r.values}acquireTexture(e,t,r,a){if(this.numBytesInGPU+=this.computeBytes(e,r),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,a)}computeBytes(e,t){return e[0]*e[1]*Ci(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(const[,t]of Object.entries(this.binaryCache)){const r=new Promise(a=>{try{this.checkCompletion_(t),a(!0)}catch(s){throw s}});e.push(r)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Qw(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Z1(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const[,e]of Object.entries(this.binaryCache)){const{uniformLocations:t,customUniformLocations:r,infLoc:a,nanLoc:s,inShapesLocations:o,inTexShapesLocations:i,outShapeLocation:u,outShapeStridesLocation:l,outTexShapeLocation:c}=nm(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=t,e.customUniformLocations=r,e.infLoc=a,e.nanLoc=s,e.inShapesLocations=o,e.inTexShapesLocations=i,e.outShapeLocation=u,e.outShapeStridesLocation=l,e.outTexShapeLocation=c}}}Lo.nextDataId=0;function mT(n,e){if(e==="float32"||e==="complex64")return n;if(e==="int32"||e==="bool"){const t=e==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let r=0;r<t.length;++r)t[r]=Math.round(n[r]);return t}else throw new Error(`Unknown dtype ${e}`)}Ud()&&p0("webgl",()=>new Lo,2);const ul=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class ma{constructor(e,t,r){this.variableNames=["A","B"],this.outputShape=$e(t,r),this.enableShapeUniforms=bt(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const bs=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class vs{constructor(e,t,r,a=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=$e(t,r);const s=this.outputShape.length;this.enableShapeUniforms=bt(s);let o="";if(a)if(s===0||ae(this.outputShape)===1)o=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(o=`
          ${Be(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?o+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:o+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const i=ft("coords",s);this.enableShapeUniforms?o+=`
            bool nextRowOutOfBounds =
              (${i[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${i[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:o+=`
            bool nextRowOutOfBounds =
              (${i[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${i[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${o}

        setOutput(result);
      }
    `}}function Rt(n){const{inputs:e,backend:t}=n,{x:r}=e;return t.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}const gT={kernelName:Nu,backendName:"webgl",kernelFunc:Rt};function ir(n){const{inputs:e,backend:t}=n,{real:r,imag:a}=e,s=t.makeTensorInfo(r.shape,"complex64"),o=t.texData.get(s.dataId),i=Rt({inputs:{x:r},backend:t}),u=Rt({inputs:{x:a},backend:t});return o.complexTensorInfos={real:i,imag:u},s}const yT={kernelName:hp,backendName:"webgl",kernelFunc:ir};const mm="return (a < 0.) ? b * a : a;",gm=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function xT(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{alpha:s}=r,o=t.makeTensorInfo([],"float32",ya(s,"float32")),i=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new vs(gm,a.shape,o.shape):new ma(mm,a.shape,o.shape),u=t.runWebGLProgram(i,[a,o],"float32");return t.disposeIntermediateTensorInfo(o),u}const bT={kernelName:th,backendName:"webgl",kernelFunc:xT};const ym="return (a < 0.) ? b * a : a;",xm=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function vT(n){const{inputs:e,backend:t}=n,{x:r,alpha:a}=e,s=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new vs(xm,r.shape,a.shape):new ma(ym,r.shape,a.shape);return t.runWebGLProgram(s,[r,a],"float32")}const wT={kernelName:Oh,backendName:"webgl",kernelFunc:vT};const Ca="if (isnan(x)) return x;";function Ie({opSnippet:n,packedOpSnippet:e,cpuKernelImpl:t,dtype:r}){return({inputs:a,backend:s})=>{const{x:o}=a,i=s,u=r||o.dtype;if(i.shouldExecuteOnCPU([o])&&t!=null){const p=i.texData.get(o.dataId),h=t(p.values,u);return i.makeTensorInfo(o.shape,u,h)}const l=H().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let c;return l?c=new Ir(o.shape,e):c=new $n(o.shape,n),i.runWebGLProgram(c,[o],u)}}function ut({opSnippet:n,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:r=!1,cpuKernelImpl:a,dtype:s}){return({inputs:o,backend:i})=>{const{a:u,b:l}=o,c=i;if(r&&u.dtype==="complex64"){const m=c.texData.get(u.dataId),y=c.texData.get(l.dataId),[b,x]=[[m.complexTensorInfos.real,y.complexTensorInfos.real],[m.complexTensorInfos.imag,y.complexTensorInfos.imag]].map($=>{const[F,M]=$,U={dataId:F.dataId,dtype:F.dtype,shape:u.shape},X={dataId:M.dataId,dtype:M.dtype,shape:l.shape},z=new ma(n,u.shape,l.shape);return c.runWebGLProgram(z,[U,X],Sn(F.dtype,M.dtype))}),T=ir({inputs:{real:b,imag:x},backend:c});return c.disposeIntermediateTensorInfo(b),c.disposeIntermediateTensorInfo(x),T}const p=s||Sn(u.dtype,l.dtype);if((u.dtype==="string"||l.dtype==="string"||c.shouldExecuteOnCPU([u,l]))&&a!=null){const m=c.texData.get(u.dataId).values,y=c.texData.get(l.dataId).values,b=u.dtype==="string"?is(m):m,x=u.dtype==="string"?is(y):y,[T,$]=a(u.shape,l.shape,b,x,p),F=c.makeTensorInfo($,p),M=c.texData.get(F.dataId);return M.values=T,F}const h=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let d;return h?d=new vs(e,u.shape,l.shape,t):d=new ma(n,u.shape,l.shape),c.runWebGLProgram(d,[u,l],p)}}function ls(n,e=!1){if(n==="linear")return e?nT:Zk;if(n==="relu")return e?aT:Qk;if(n==="elu")return e?rT:Jk;if(n==="relu6")return e?sT:eT;if(n==="prelu")return e?xm:ym;if(n==="leakyrelu")return e?gm:mm;if(n==="sigmoid")return e?oT:tT;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class bm{constructor(e,t,r,a=!1,s=!1,o=!1,i=null,u=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.enableShapeUniforms=bt(this.outputShape.length);const c=a?e[1]:e[2],p=Math.ceil(c/2),h=a?"i * 2, rc.y":"rc.y, i * 2",d=s?"rc.z, i * 2":"i * 2, rc.z",m=a?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],y=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let b="",x="";i&&(u?b=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${i}
        }`:l?b=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${i}
        }`:b=`vec4 activation(vec4 x) {
          ${i}
        }`,x="result = activation(result);");const T=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let $="rc.x",F="rc.x";e[0]<t[0]?$=`int(min(float(rc.x), ${e[0]-1}.))`:t[0]<e[0]&&(F=`int(min(float(rc.x), ${t[0]-1}.))`),this.userCode=`
      ${b}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${p}; i++) {
          int batchA = ${$};
          int batchB = ${F};
          vec4 a = getMatrixA(batchA, ${h});
          vec4 b = getMatrixB(batchB, ${d});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${m[0]} * ${y[0]});
          result += (${m[1]} * ${y[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${T}

        ${x}

        setOutput(result);
      }
    `}}const nc={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class rc{constructor(e,t,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=$e(t,r),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const ac="return a * b;";function ll(n){const{inputs:e,backend:t}=n,{a:r,b:a}=e,s=Sn(r.dtype,a.dtype);if(r.dtype==="complex64"){const i=t.texData.get(r.dataId),u=t.texData.get(a.dataId),l=new rc(nc.REAL,r.shape,a.shape),c=new rc(nc.IMAG,r.shape,a.shape),p=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:r.shape},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:u.complexTensorInfos.real.dataId,dtype:u.complexTensorInfos.real.dtype,shape:a.shape},{dataId:u.complexTensorInfos.imag.dataId,dtype:u.complexTensorInfos.imag.dtype,shape:a.shape}],h=t.runWebGLProgram(l,p,"float32"),d=t.runWebGLProgram(c,p,"float32"),m=ir({inputs:{real:h,imag:d},backend:t});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),m}if(t.shouldExecuteOnCPU([r,a])){const i=t.texData.get(r.dataId),u=t.texData.get(a.dataId),[l,c]=Sk(r.shape,a.shape,i.values,u.values,s),p=t.makeTensorInfo(c,s),h=t.texData.get(p.dataId);return h.values=l,p}let o;return H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?o=new vs(ac,r.shape,a.shape):o=new ma(ac,r.shape,a.shape),t.runWebGLProgram(o,[r,a],s)}const ST={kernelName:Sh,backendName:"webgl",kernelFunc:ll};function kT(n,e,t){const r=[da(n.shape),...fa(n.shape)],a={dtype:n.dtype,shape:r,dataId:n.dataId},s=[da(e),...fa(e)],o=new fm(s,r),i=!0,u=[r],l=t.runWebGLProgram(o,[a],n.dtype,u,i);return{dataId:l.dataId,shape:e,dtype:l.dtype}}function oe(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{shape:s}=r,o=t,i=ae(a.shape),u=g2(s,i),l=ae(u);R(i===l,()=>`The new shape (${u}) has ${l} elements and the old shape (${a.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`);const c=o.texData.get(a.dataId);return c.isPacked&&!lo(a.shape,u)&&!(c.texture!==null&&lo(c.shape,u))?kT(a,u,o):(o.incRef(a.dataId),{dataId:a.dataId,shape:u,dtype:a.dtype})}const TT={kernelName:Vh,backendName:"webgl",kernelFunc:oe};class sc{constructor(e,t){this.variableNames=["x"];const{windowSize:r,batchSize:a,inSize:s,outSize:o}=e;this.outputShape=[a,o];const i=Math.floor(r/4)*4,u=r%4;let l="sumValue += dot(values, ones);";if(t!=null){const p=1/t;l=`sumValue += dot(values * ${ua(p)?p.toPrecision(2):p}, ones);`}let c="";s%r>0&&(c=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        float sumValue = 0.0;

        for (int i = 0; i < ${i}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${i};
        if (${u===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${u===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${u===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}class ET{constructor(e,t){this.variableNames=["x"];const{windowSize:r,batchSize:a,inSize:s,outSize:o}=e;this.outputShape=[a,o];let i="0.0",u="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",u="min"):t==="max"&&(i="-1.0 / 1e-20",u="max");let l=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?l="sumValue":t==="prod"?l="prodValue":t==="all"?l="allValue":t==="any"&&(l="anyValue");const c=Math.floor(r/4)*4,p=r%4;let h=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${u}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${u}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,d="vec4";t==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):t==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");let m="";s%r>0&&(m=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${i};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${m}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        vec4 minMaxValue = vec4(${i});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${h}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${p===2}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${p===3}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}function CT(n){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const t=e.length?e[e.length-1].outSize:n[1],r=Do(t);e.push({inSize:t,windowSize:r,outSize:Math.ceil(t/r)})}return e}function Wr(n,e,t,r){const a=CT(n.shape);let s=n;for(let o=0;o<a.length;o++){const{inSize:i,windowSize:u,outSize:l}=a[o];let c,p;t==="mean"?c=o===0?new sc({windowSize:u,inSize:i,batchSize:n.shape[0],outSize:l},i):new sc({windowSize:u,inSize:i,batchSize:n.shape[0],outSize:l}):c=new ET({windowSize:u,inSize:i,batchSize:n.shape[0],outSize:l},t),p=s,s=r.runWebGLProgram(c,[s],e),p.dataId!==n.dataId&&r.disposeIntermediateTensorInfo(p)}return s}class IT{constructor(e,t){this.variableNames=["A"];const r=new Array(e.length);for(let o=0;o<r.length;o++)r[o]=e[t[o]];this.outputShape=r,this.rank=r.length;const a=Be(this.rank),s=NT(t);this.userCode=`
    void main() {
      ${a} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}}function NT(n){const e=n.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(e);for(let a=0;a<n.length;a++)r[n[a]]=t[a];return r.join()}class $T{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const r=new Array(e.length);for(let c=0;c<r.length;c++)r[c]=e[t[c]];if(this.outputShape=r,this.rank=r.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const a=Be(this.rank),s=dm("rc",this.rank),o=new Array(this.rank);for(let c=0;c<t.length;c++)o[t[c]]=s[c];const i=`vec2(${o.slice(-2).join()})`,u=`++${s[this.rank-1]} < ${r[this.rank-1]}`,l=`getChannel(getA(${o.join()}), ${i})`;this.userCode=`
    void main() {
      ${a} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${u}) {
        result[1] = ${l};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${r[this.rank-2]}) {
        result[2] = ${l};
        if(${u}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}function Po(n,e,t){const r=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new $T(n.shape,e):new IT(n.shape,e);return t.runWebGLProgram(r,[n],n.dtype)}function RT(n,e,t,r){const a=e,s=n.shape.length,o=rt(a,n.shape);let i=o;const u=Qt(i,s),l=u!=null;let c=n;l&&(c=Po(n,u,r),i=en(i.length,s)),hn("sum",i,s);const[p,h]=kn(c.shape,i);let d=p;t&&(d=Bt(p,o));const m=ae(h),y=ae(n.shape)/m,b=oe({inputs:{x:c},attrs:{shape:[y,m]},backend:r}),x=Ru(n.dtype),T=Wr(b,x,"sum",r),$=oe({inputs:{x:T},attrs:{shape:d},backend:r});return r.disposeIntermediateTensorInfo(b),r.disposeIntermediateTensorInfo(T),l&&r.disposeIntermediateTensorInfo(c),$}function Bo(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,keepDims:o}=r;return RT(a,s,o,t)}const _T={kernelName:sd,backendName:"webgl",kernelFunc:Bo};function yt(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{perm:s}=r,o=t,i=a.shape.length,u=new Array(i);for(let c=0;c<u.length;c++)u[c]=a.shape[s[c]];let l;if(o.shouldExecuteOnCPU([a])){const c=o.texData.get(a.dataId).values,p=il(c,a.shape,a.dtype,s,u);l=o.makeTensorInfo(u,a.dtype);const h=o.texData.get(l.dataId);h.values=p}else l=Po(a,s,o);return l}const AT={kernelName:Ks,backendName:"webgl",kernelFunc:yt};const vm=1e3;function po({a:n,b:e,transposeA:t,transposeB:r,backend:a,bias:s=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:u=null}){const l=n.shape.length,c=e.shape.length,p=t?n.shape[l-2]:n.shape[l-1],h=r?e.shape[c-1]:e.shape[c-2],d=t?n.shape[l-1]:n.shape[l-2],m=r?e.shape[c-2]:e.shape[c-1],y=n.shape.slice(0,-2),b=e.shape.slice(0,-2),x=ae(y),T=ae(b),$=$e(n.shape.slice(0,-2),e.shape.slice(0,-2)).concat([d,m]);R(p===h,()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${n.shape} and ${e.shape} and transposeA=${t} and transposeB=${r} must match.`);const F=t?[x,p,d]:[x,d,p],M=r?[T,m,h]:[T,h,m],U=oe({inputs:{x:n},backend:a,attrs:{shape:F}}),X=oe({inputs:{x:e},backend:a,attrs:{shape:M}}),z=[U,X],L=Math.max(x,T),C=t?U.shape[1]:U.shape[2],q=s!=null,ee=o!=null,te=u==="leakyrelu",le=u!=null?ls(u,!0):null,de=q||ee||te||le!=null;let fe;if((d===1||m===1)&&C>vm&&de===!1){let ge=U,Te=X;t&&(ge=yt({inputs:{x:U},backend:a,attrs:{perm:[0,2,1]}}),z.push(ge)),r&&(Te=yt({inputs:{x:X},backend:a,attrs:{perm:[0,2,1]}}),z.push(Te));const We=m!==1,Ne=m===1;let Ye=ge;We&&(Ye=oe({inputs:{x:ge},backend:a,attrs:{shape:[L,C,1]}}),z.push(Ye));const Vt=m===1?2:1;let Vn=Te;Ne&&(Vn=oe({inputs:{x:Te},backend:a,attrs:{shape:[L,1,C]}}),z.push(Vn));const ur=ll({inputs:{a:Ye,b:Vn},backend:a});fe=Bo({inputs:{x:ur},backend:a,attrs:{axis:Vt,keepDims:!0}}),z.push(ur)}else{const ge=Sn(n.dtype,e.dtype),Te=new bm(F,M,[L,d,m],t,r,q,le,ee,te),We=[U,X];if(s!=null&&We.push(s),ee&&We.push(o),te){const Ne=a.makeTensorInfo([],"float32",ya(i,"float32"));We.push(Ne),z.push(Ne)}fe=a.runWebGLProgram(Te,We,ge)}const Re=oe({inputs:{x:fe},backend:a,attrs:{shape:$}});z.push(fe);for(const ge of z)a.disposeIntermediateTensorInfo(ge);return Re}function OT(n){const{inputs:e,backend:t,attrs:r}=n,{a,b:s,bias:o,preluActivationWeights:i}=e,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:p}=r;return po({a,b:s,transposeA:u,transposeB:l,backend:t,bias:o,preluActivationWeights:i,leakyreluAlpha:p,activation:c})}const FT={kernelName:_i,backendName:"webgl",kernelFunc:OT};const oc="return abs(x);";function DT(n){const{inputs:e,backend:t}=n,{x:r}=e;if(t.shouldExecuteOnCPU([r])&&r.dtype!=="complex64"){const s=t.texData.get(r.dataId),o=pm(s.values);return t.makeTensorInfo(r.shape,r.dtype,o)}let a;return H().getBool("WEBGL_PACK_UNARY_OPERATIONS")?a=new Ir(r.shape,oc):a=new $n(r.shape,oc),t.runWebGLProgram(a,[r],r.dtype)}const MT={kernelName:jc,backendName:"webgl",kernelFunc:DT};const LT=tn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,PT=Ie({opSnippet:LT}),BT={kernelName:Hc,backendName:"webgl",kernelFunc:PT};const UT=tn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,VT=Ie({opSnippet:UT}),WT={kernelName:Xc,backendName:"webgl",kernelFunc:VT};const ic="return a + b;",zT=ut({opSnippet:ic,packedOpSnippet:ic,supportsComplex:!0,cpuKernelImpl:nk}),GT={kernelName:Cu,backendName:"webgl",kernelFunc:zT};class jT{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((s,o)=>`T${o}`);const r=[];this.variableNames.forEach(s=>{r.push(`float v${s} = get${s}AtOutCoords();`)});const a=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${r.join(`
        `)}

        float result = ${a};
        setOutput(result);
      }
    `}}class HT{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((s,o)=>`T${o}`);const r=[];this.variableNames.forEach(s=>{r.push(`vec4 v${s} = get${s}AtOutCoords();`)});const a=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${r.join(`
        `)}

        vec4 result = ${a};
        setOutput(result);
      }
    `}}function Js(n){const{inputs:e,backend:t}=n,r=e;if(r.length===1)return Rt({inputs:{x:r[0]},backend:t});if(r.length>H().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const i=Math.floor(r.length/2),u=Js({inputs:r.slice(0,i),backend:t}),l=Js({inputs:r.slice(i),backend:t});return Js({inputs:[u,l],backend:t})}const a=r.map(i=>i.dtype).reduce((i,u)=>Sn(i,u)),s=r.map(i=>i.shape),o=H().getBool("WEBGL_PACK")?new HT(r[0].shape,s):new jT(r[0].shape,s);return t.runWebGLProgram(o,r,a)}const XT={kernelName:qc,backendName:"webgl",kernelFunc:Js};function qT(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,keepDims:o}=r,i=a.shape.length,u=rt(s,a.shape);let l=u;const c=Qt(l,i);let p=a;c!=null&&(p=yt({inputs:{x:a},backend:t,attrs:{perm:c}}),l=en(l.length,i)),hn("all",l,i);const[h,d]=kn(p.shape,l),m=ae(d),y=oe({inputs:{x:p},backend:t,attrs:{shape:[-1,m]}}),b=Wr(y,y.dtype,"all",t);let x;if(o){const T=Bt(h,u);x=oe({inputs:{x:b},backend:t,attrs:{shape:T}})}else x=oe({inputs:{x:b},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(b),c!=null&&t.disposeIntermediateTensorInfo(p),x}const KT={kernelName:Kc,backendName:"webgl",kernelFunc:qT};function YT(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,keepDims:o}=r,i=a.shape.length,u=rt(s,a.shape);let l=u;const c=Qt(l,i);let p=a;c!=null&&(p=yt({inputs:{x:a},backend:t,attrs:{perm:c}}),l=en(l.length,i)),hn("any",l,i);const[h,d]=kn(p.shape,l),m=ae(d),y=oe({inputs:{x:p},backend:t,attrs:{shape:[-1,m]}}),b=Wr(y,y.dtype,"any",t);let x;if(o){const T=Bt(h,u);x=oe({inputs:{x:b},backend:t,attrs:{shape:T}})}else x=oe({inputs:{x:b},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(b),c!=null&&t.disposeIntermediateTensorInfo(p),x}const ZT={kernelName:Yc,backendName:"webgl",kernelFunc:YT};class JT{constructor(e,t,r){this.variableNames=["A"];const{windowSize:a,batchSize:s,outSize:o}=e;r||this.variableNames.push("bestIndicesA"),this.outputShape=[s,o];const i=t==="max"?">":"<",u=r?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${a};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${a}; i++) {
          int inIdx = ${u};
          float candidate = getA(batch, inIdx);
          if (candidate ${i} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class QT{constructor(e,t,r,a){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,R(e.length>2,()=>`Packed arg${r.charAt(0).toUpperCase()+r.slice(1)} supports only inputs with rank above 2.`);const s=e[e.length-1],o=Math.ceil(s/t);this.outputShape=e.slice(0,-1),o>1&&this.outputShape.push(o),a||this.variableNames.push("bestIndicesA");const i=this.outputShape,u=i.length,l=Be(u),c=ft("coords",u);let p,h;if(o===1){h=u+1;const z=Be(h);p=`
        ${z} sourceLocR = ${z}(${c.join()}, 0);
        ++${c[u-1]};
        ${z} sourceLocG = ${z}(${c.join()}, 0);
        ++${c[u-2]};
        ${z} sourceLocA = ${z}(${c.join()}, 0);
        --${c[u-1]};
        ${z} sourceLocB = ${z}(${c.join()}, 0);
        --${c[u-2]};`}else h=u,p=`
        ${l} sourceLocR = coords;
        ++${c[u-1]};
        ${l} sourceLocG = coords;
        ++${c[u-2]};
        ${l} sourceLocA = coords;
        --${c[u-1]};
        ${l} sourceLocB = coords;
        --${c[u-2]};`;const d=["x","y","z","w","u","v"].slice(0,h),m="."+d[h-1],y=d.map(z=>"int "+z),b=ft("sourceLocR",h-1).concat("inIdx.r"),x=ft("sourceLocG",h-1).concat("inIdx.g"),T=ft("sourceLocB",h-1).concat("inIdx.b"),$=ft("sourceLocA",h-1).concat("inIdx.a"),F=r==="max"?"greaterThan":"lessThan",M=a?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${T.join()}),
                             getBestIndicesAChannel(${$.join()})));`,U=`vec4(
            getAChannel(${b.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${T.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${$.join()}) : 0.)`,X=a?"":`
      float getBestIndicesAChannel(${y.join()}) {
        return getChannel(getBestIndicesA(${d.join()}),
                                          vec2(${d.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${y.join()}) {
        return getChannel(getA(${d.join()}),
                               vec2(${d.slice(-2).join()}));
      }
      ${X}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${c[u-1]} < ${i[u-1]-1};
        bool hasNextRow = ${c[u-2]} < ${i[u-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${m}, sourceLocG${m},
          sourceLocB${m}, sourceLocA${m}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${U};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${M}
          vec4 candidate = ${U};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${F}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function wm(n,e,t,r=null){let a=e.shape[0],s=e.shape[1];r!=null&&(a=r.shape[0],s=r.shape[1]);const o=Do(s),i={windowSize:o,inSize:s,batchSize:a,outSize:Math.ceil(s/o)},u=new JT(i,t,r==null),l=[e];r!=null&&l.push(r);const c=n.runWebGLProgram(u,l,"int32");if(c.shape[1]===1)return c;const p=wm(n,e,t,c);return n.disposeIntermediateTensorInfo(c),p}function Sm(n,e,t,r=null){const a=r!=null?r.shape:e.shape,s=a[a.length-1],o=Do(s),i=new QT(a,o,t,r==null),u=r==null?[e]:[e,r],l=n.runWebGLProgram(i,u,"int32");if(l.shape.length===e.shape.length){const c=Sm(n,e,t,l);return n.disposeIntermediateTensorInfo(l),c}return l}function km(n,e,t,r){const a=[t];if(hn("arg"+r.charAt(0).toUpperCase()+r.slice(1),a,e.shape.length),!H().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const s=[],o=n.texData.get(e.dataId),i=o!==null&&o.isPacked;let u=e;i&&(u=n.unpackTensor(e),s.push(u));const[l,c]=kn(u.shape,a),p=ae(c),h=oe({inputs:{x:u},backend:n,attrs:{shape:[-1,p]}});s.push(h);const d=wm(n,h,r);s.push(d);const m=oe({inputs:{x:d},backend:n,attrs:{shape:l}});return s.forEach(y=>n.disposeIntermediateTensorInfo(y)),m}return Sm(n,e,r)}function eE(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s}=r;let o=rt(s,a.shape);const i=Qt(o,a.shape.length);let u=a;const l=[];i!=null&&(u=yt({inputs:{x:a},backend:t,attrs:{perm:i}}),l.push(u),o=en(o.length,u.shape.length)),hn("argMax",[o[0]],u.shape.length);const c=km(t,u,o[0],"max");return l.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}const tE={kernelName:Zc,backendName:"webgl",kernelFunc:eE};function nE(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s}=r;let o=rt(s,a.shape);const i=Qt(o,a.shape.length);let u=a;const l=[];i!=null&&(u=yt({inputs:{x:a},backend:t,attrs:{perm:i}}),l.push(u),o=en(o.length,u.shape.length)),hn("argMin",[o[0]],u.shape.length);const c=km(t,u,o[0],"min");return l.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}const rE={kernelName:Jc,backendName:"webgl",kernelFunc:nE};const aE=tn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,sE=Ie({opSnippet:aE}),oE={kernelName:Qc,backendName:"webgl",kernelFunc:sE};const iE=tn+"return log(x + sqrt(x * x + 1.0));",uE=Ie({opSnippet:iE}),lE={kernelName:ep,backendName:"webgl",kernelFunc:uE};const cE=tn+`
  return atan(x);
`,pE=Ie({opSnippet:cE}),hE={kernelName:tp,backendName:"webgl",kernelFunc:pE};const dE=ul+`
  return atan(a, b);
`,fE=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+bs+`
  return result;
`,mE=ut({opSnippet:dE,packedOpSnippet:fE}),gE={kernelName:rp,backendName:"webgl",kernelFunc:mE};const yE=tn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,xE=Ie({opSnippet:yE}),bE={kernelName:np,backendName:"webgl",kernelFunc:xE};class cs{constructor(e,t,r,a=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&r)throw new Error("Cannot compute positions for average pool.");const o=e.filterWidth,i=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterHeight,h=e.effectiveFilterWidth,d=e.padInfo.top,m=e.padInfo.left;this.outputShape=e.outShape;const y=t==="avg",b=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let T="0.0";if(y||(T="-1.0 / 1e-20"),r){this.userCode=`
        const ivec2 strides = ivec2(${i}, ${u});
        const ivec2 pads = ivec2(${d}, ${m});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${p};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h};
                wC += ${c}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${a?s?b:x:`wR * ${h} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const $="max";let F=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(F="avgValue / count");const M=Math.floor(o/4)*4,U=o%4,X=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${$}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${u});
      const ivec2 pads = ivec2(${d}, ${m});
      const float initializationValue = ${T};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${T});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${M}; wC += 4) {
            int xC = xCCorner + wC * ${c};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              getValue(batch, xR, xC + 3 * ${c}, d)
            );

            ${X}
          }

          int xC = xCCorner + ${M};
          if (${U===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${X}
          } else if (${U===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              initializationValue,
              initializationValue
            );

            ${X}
          } else if (${U===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              initializationValue
            );

            ${X}
          }
        }
        setOutput(${F});
      }
    `}}class cl{constructor(e,t,r,a=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&r)throw new Error("Cannot compute positions for average pool.");const o=e.filterWidth,i=e.strideDepth,u=e.strideHeight,l=e.strideWidth,c=e.dilationDepth,p=e.dilationHeight,h=e.dilationWidth,d=e.effectiveFilterDepth,m=e.effectiveFilterHeight,y=e.effectiveFilterWidth,b=e.padInfo.front,x=e.padInfo.top,T=e.padInfo.left;this.outputShape=e.outShape;const $=t==="avg";let F="0.0";if($||(F="-1.0 / 1e-20"),r){this.userCode=`
        const ivec3 strides =
            ivec3(${i}, ${u}, ${l});
        const ivec3 pads = ivec3(${b}, ${x}, ${T});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${d};
              wD += ${c}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${m};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${y};
                  wC += ${h}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${a?s?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${m} * ${y} +
                      wR * ${y} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const M="max";let U=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(U="avgValue / count");const X=Math.floor(o/4)*4,z=o%4,L=`
      if (${$}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${M}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${i}, ${u}, ${l});
      const ivec3 pads = ivec3(${b}, ${x}, ${T});
      const float initializationValue = ${F};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${F});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${c}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${m};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${X}; wC += 4) {
              int xC = xCCorner + wC * ${h};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                getValue(batch, xD, xR, xC + 3 * ${h}, ch)
              );

              ${L}
            }

            int xC = xCCorner + ${X};
            if (${z===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${L}
            } else if (${z===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                initializationValue,
                initializationValue
              );

              ${L}
            } else if (${z===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                initializationValue
              );

              ${L}
            }
          }
          setOutput(${U});
        }
      }
    `}}function vE(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e;ys(a,"avgPool");const{filterSize:s,strides:o,pad:i,dimRoundingMode:u}=r,l=1;R(_t(o,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${l}'`);const c=Pr(a.shape,s,o,l,i,u);if(c.filterWidth===1&&c.filterHeight===1&&qe(c.inShape,c.outShape))return Rt({inputs:{x:a},backend:t});const p=new cs(c,"avg",!1);return t.runWebGLProgram(p,[a],"float32")}const wE={kernelName:ap,backendName:"webgl",kernelFunc:vE};function SE(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{filterSize:s,strides:o,pad:i,dimRoundingMode:u,dataFormat:l}=r,c=[1,1,1],p=ds(a.shape,s,o,c,i,u,l),h=new cl(p,"avg",!1);return t.runWebGLProgram(h,[a],"float32")}const kE={kernelName:sp,backendName:"webgl",kernelFunc:SE};class TE{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,s=e.strideWidth,o=e.dilationHeight,i=e.dilationWidth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=u-1-e.padInfo.top,p=l-1-e.padInfo.left,h=1/(t*r);this.userCode=`
      const ivec2 pads = ivec2(${c}, ${p});
      const float avgMultiplier = float(${h});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${u};
            wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${i}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class EE{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,r=e.filterHeight,a=e.filterWidth,s=e.strideDepth,o=e.strideHeight,i=e.strideWidth,u=e.dilationDepth,l=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,d=e.effectiveFilterWidth,m=p-1-e.padInfo.front,y=h-1-e.padInfo.top,b=d-1-e.padInfo.left,x=1/(t*r*a);this.userCode=`
      const ivec3 pads = ivec3(${m}, ${y}, ${b});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${h};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${d};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function CE(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s}=e,o=s,{filterSize:i,strides:u,pad:l,dimRoundingMode:c}=r,p=[1,1,1],h=ds(o.shape,i,u,p,l,c),d=new EE(h);return t.runWebGLProgram(d,[a],o.dtype)}const IE={kernelName:R2,backendName:"webgl",kernelFunc:CE};function NE(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s}=e,o=s;ys([a,s],"avgPoolGrad");const{filterSize:i,strides:u,pad:l}=r,c=Pr(o.shape,i,u,1,l),p=new TE(c);return t.runWebGLProgram(p,[a],o.dtype)}const $E={kernelName:$2,backendName:"webgl",kernelFunc:NE};function RE(n){const{inputs:e,backend:t,attrs:r}=n,{a,b:s}=e,{transposeA:o,transposeB:i}=r;return po({a,b:s,transposeA:o,transposeB:i,backend:t})}const _E={kernelName:op,backendName:"webgl",kernelFunc:RE};class AE{constructor(e,t,r,a,s,o){this.outputShape=[],this.variableNames=["x","mean","variance"],$e(e,t),$e(e,r);let i="0.0";a!=null&&($e(e,a),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="1.0";s!=null&&($e(e,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${i};
        float scale = ${u};
        float inv = scale * inversesqrt(variance + float(${o}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class OE{constructor(e,t,r,a,s,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],$e(e,t),$e(e,r);let i="vec4(0.0)";a!=null&&($e(e,a),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="vec4(1.0)";s!=null&&($e(e,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${i};
        vec4 scale = ${u};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${o}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const FE=({inputs:n,backend:e,attrs:t})=>{const{x:r,mean:a,variance:s,offset:o,scale:i}=n;R(a.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),R(o==null||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),R(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:u}=t;u==null&&(u=.001);const l=[r,a,s];let c=null;o!=null&&(c=o.shape,l.push(o));let p=null;i!=null&&(p=i.shape,l.push(i));const h=H().getBool("WEBGL_PACK_NORMALIZATION")?new OE(r.shape,a.shape,s.shape,c,p,u):new AE(r.shape,a.shape,s.shape,c,p,u);return e.runWebGLProgram(h,l,l[0].dtype)},DE={kernelName:jp,backendName:"webgl",kernelFunc:FE};class ME{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=Be(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const r=LE(this.rank);let a;const s=e.map((o,i)=>`sourceLoc.${uu[i]} = start[${i}] + coords.${uu[i]};`);a=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${a}
        setOutput(getSource(${r}));
      }
    `}}const uu=["x","y","z","w","u","v"];function LE(n){if(n===1)return"sourceLoc";if(n<=6)return uu.slice(0,n).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class PE{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=Be(this.rank),r=ft("coords",this.rank),a=ft("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${a.slice(-2).join()})`,o=`getChannel(getSource(${a.join()}), ${s})`,i=`
      result.x = ${o};
      if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
        ++${a[this.rank-1]};
        result.y = ${o};
        --${a[this.rank-1]};
      }
    `,u=this.rank===1?"":`
      --${r[this.rank-1]};
      if (++${r[this.rank-2]} < ${e[this.rank-2]}) {
        ++${a[this.rank-2]};
        result.z = ${o};
        if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
          ++${a[this.rank-1]};
          result.w = ${o};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((c,p)=>`start[${p}]`).join()});`:e.map((c,p)=>`${a[p]} = ${r[p]} + start[${p}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${i}
        ${u}
        setOutput(result);
      }
    `}}function BE(n,e,t,r){const a=r.texData.get(n.dataId),s=r.makeTensorInfo(t,n.dtype),o=r.texData.get(s.dataId);Object.assign(o,a),o.refCount=1,o.shape=t,o.dtype=n.dtype;let i=Pu(e,ot(n.shape));a.slice&&(i+=a.slice.flatOffset),o.slice={flatOffset:i,origDataId:a.slice&&a.slice.origDataId||n.dataId};const u=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,u+1),s}function Ia(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{begin:s,size:o}=r,[i,u]=Ef(a,s,o);if(mf(a,i,u),ae(u)===0)return t.makeTensorInfo(u,a.dtype,[]);if(t.shouldExecuteOnCPU([a])||a.dtype==="string"){const p=t.texData.get(a.dataId),h=Ak(p.values,i,u,a.shape,a.dtype);return t.makeTensorInfo(u,a.dtype,h)}const{isPacked:l}=t.texData.get(a.dataId),c=Lu(a.shape,i,u);if(l||!c){const p=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new PE(u):new ME(u),h=[i];return t.runWebGLProgram(p,[a],a.dtype,h)}return t.uploadToGPU(a.dataId),BE(a,i,u,t)}const UE={kernelName:Jh,backendName:"webgl",kernelFunc:Ia};const VE=n=>{const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{blockShape:s,crops:o}=r;R(a.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const i=s.reduce((T,$)=>T*$),u=el(a.shape,s,i),l=tl(u.length,s.length),c=nl(a.shape,s,i),p=v1(o,s.length),h=w1(c,o,s.length),d=[],m=oe({inputs:{x:a},backend:t,attrs:{shape:u}}),y=yt({inputs:{x:m},backend:t,attrs:{perm:l}}),b=oe({inputs:{x:y},backend:t,attrs:{shape:c}}),x=Ia({inputs:{x:b},backend:t,attrs:{begin:p,size:h}});return d.push(m),d.push(y),d.push(b),d.forEach(T=>t.disposeIntermediateTensorInfo(T)),x},WE={kernelName:ip,backendName:"webgl",kernelFunc:VE};function zE(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,weights:s}=e,{size:o}=r,i=t.readSync(a.dataId),u=t.readSync(s.dataId),l=cm(i,u,s.dtype,s.shape,o);return t.makeTensorInfo([o],s.dtype,l)}const GE={kernelName:up,backendName:"webgl",kernelFunc:zE};function jE(n){const{inputs:e,backend:t}=n,{s0:r,s1:a}=e,s=t.readSync(r.dataId),o=t.readSync(a.dataId),i=$e(Array.from(s),Array.from(o));return t.makeTensorInfo([i.length],"int32",Int32Array.from(i))}const HE={kernelName:lp,backendName:"webgl",kernelFunc:jE};const XE="return float(a != b);",Tm=ut({opSnippet:XE,cpuKernelImpl:Tk,dtype:"bool"}),qE={kernelName:Th,backendName:"webgl",kernelFunc:Tm};function ws(n){const{inputs:e,backend:t}=n,{input:r}=e,a=t.texData.get(r.dataId);return Rt({inputs:{x:a.complexTensorInfos.real},backend:t})}const KE={kernelName:Ph,backendName:"webgl",kernelFunc:ws};const YE="return float(int(x));";function ZE(n,e){const t=new $n(n.shape,YE),r=e.runWebGLProgram(t,[n],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}function lu(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{dtype:s}=r;if(s==="complex64"){if(a.dtype==="complex64")return Rt({inputs:{x:a},backend:t});const o=Fr(a.shape),i=lu({inputs:{x:a},backend:t,attrs:{dtype:"float32"}}),u=ir({inputs:{real:i,imag:o},backend:t});return o.dispose(),t.disposeIntermediateTensorInfo(i),u}if(a.dtype==="complex64"){const o=ws({inputs:{input:a},backend:t}),i=lu({inputs:{x:o},backend:t,attrs:{dtype:s}});return t.disposeIntermediateTensorInfo(o),i}if(!b2(a.dtype,s)){const o=Rt({inputs:{x:a},backend:t});return{dataId:o.dataId,shape:o.shape,dtype:s}}if(t.shouldExecuteOnCPU([a])){const o=t.texData.get(a.dataId).values,[i,u,l]=ak(o,a.shape,a.dtype,s);return t.makeTensorInfo(i,u,l)}if(s==="int32")return ZE(a,t);if(s==="bool"){const o=t.makeTensorInfo([],"bool",On("bool",1)),i=Tm({inputs:{a,b:o},backend:t});return t.disposeIntermediateTensorInfo(o),i}throw new Error(`Error in Cast: failed to cast ${a.dtype} to ${s}`)}const JE={kernelName:Iu,backendName:"webgl",kernelFunc:lu};const uc="return ceil(x);",QE=Ie({opSnippet:uc,packedOpSnippet:uc,cpuKernelImpl:sk}),eC={kernelName:cp,backendName:"webgl",kernelFunc:QE};class tC{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class nC{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function rC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{clipValueMin:s,clipValueMax:o}=r;let i;H().getBool("WEBGL_PACK_CLIP")?i=new nC(a.shape):i=new tC(a.shape);const u=[[s],[o]];return t.runWebGLProgram(i,[a],a.dtype,u)}const aC={kernelName:pp,backendName:"webgl",kernelFunc:rC};class sC{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function lc(n,e){return{dataId:e.dataId,dtype:e.dtype,shape:n.shape}}function oC(n){const{inputs:e,backend:t}=n,{x:r}=e,a=t.texData.get(r.dataId),s=new sC(r.shape),o=[lc(r,a.complexTensorInfos.real),lc(r,a.complexTensorInfos.imag)];return t.runWebGLProgram(s,o,o[0].dtype)}const iC={kernelName:dp,backendName:"webgl",kernelFunc:oC};class uC{constructor(e){this.outputShape=[],this.outputShape=Mr(e,1),this.variableNames=e.map((o,i)=>`T${i}`);const t=new Array(e.length-1);t[0]=e[0][1];for(let o=1;o<t.length;o++)t[o]=t[o-1]+e[o][1];const r=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let o=1;o<t.length;o++){const i=t[o-1];r.push(`else if (yC < ${t[o]}) setOutput(getT${o}(yR, yC-${i}));`)}const a=t.length,s=t[t.length-1];r.push(`else setOutput(getT${a}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${r.join(`
        `)}
      }
    `}}class lC{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Mr(e,t);const r=this.outputShape,a=r.length,s=Be(a),o=ft("coords",a),i=["x","y","z","w","u","v"].slice(0,a);this.variableNames=e.map((y,b)=>`T${b}`);const u=new Array(e.length-1);u[0]=e[0][t];for(let y=1;y<u.length;y++)u[y]=u[y-1]+e[y][t];const l=i[t],c=i.slice(-2),p=i.join();let h=`if (${l} < ${u[0]}) {
        return getChannel(
            getT0(${p}), vec2(${c.join()}));
        }`;for(let y=1;y<u.length;y++){const b=u[y-1];h+=`
        if (${l} < ${u[y]}  && ${l} >= ${u[y-1]}) {
          return getChannel(
            getT${y}(${qs(i,l,b)}),
            vec2(${qs(c,l,b)}));
        }`}const d=u.length,m=u[u.length-1];h+=`
        return getChannel(
          getT${d}(${qs(i,l,m)}),
          vec2(${qs(c,l,m)}));`,this.userCode=`
      float getValue(${i.map(y=>"int "+y)}) {
        ${h}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${o}), 0., 0., 0.);

        ${o[a-1]} = ${o[a-1]} + 1;
        if (${o[a-1]} < ${r[a-1]}) {
          result.g = getValue(${o});
        }

        ${o[a-2]} = ${o[a-2]} + 1;
        if (${o[a-2]} < ${r[a-2]}) {
          result.a = getValue(${o});
        }

        ${o[a-1]} = ${o[a-1]} - 1;
        if (${o[a-2]} < ${r[a-2]} &&
            ${o[a-1]} < ${r[a-1]}) {
          result.b = getValue(${o});
        }
        setOutput(result);
      }
    `}}function qs(n,e,t){const r=n.indexOf(e);return n.map((a,s)=>s===r?`${a} - ${t}`:a).join()}function Uo(n){const{inputs:e,backend:t}=n,{input:r}=e,a=t.texData.get(r.dataId);return Rt({inputs:{x:a.complexTensorInfos.imag},backend:t})}const cC={kernelName:Zp,backendName:"webgl",kernelFunc:Uo};function Ja(n,e,t){const r=n[0].dtype;if(r==="complex64"){const p=n.map(b=>ws({inputs:{input:b},backend:t})),h=n.map(b=>Uo({inputs:{input:b},backend:t})),d=Ja(p,e,t),m=Ja(h,e,t),y=ir({inputs:{real:d,imag:m},backend:t});return p.forEach(b=>t.disposeIntermediateTensorInfo(b)),h.forEach(b=>t.disposeIntermediateTensorInfo(b)),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(m),y}let a=t.shouldExecuteOnCPU(n);if(r==="string"&&(a=!0),a){const p=n.map(T=>{const $=[-1,ae(T.shape.slice(e))];return oe({inputs:{x:T},backend:t,attrs:{shape:$}})}),h=p.map(T=>({vals:t.readSync(T.dataId),shape:T.shape})),d=Mr(p.map(T=>T.shape),1),m=p[0].shape[0]===1,y=ok(h,d,r,m),b=Mr(n.map(T=>T.shape),e),x=t.makeTensorInfo(b,r,y);return p.forEach(T=>t.disposeIntermediateTensorInfo(T)),x}const s=H().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(n.length>s){const p=[];for(let d=0;d<n.length;d+=s){const m=n.slice(d,d+s);p.push(Ja(m,e,t))}const h=Ja(p,e,t);for(const d of p)t.disposeIntermediateTensorInfo(d);return h}if(H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&n[0].shape.length>1){const p=new lC(n.map(h=>h.shape),e);return t.runWebGLProgram(p,n,r)}const{tensors2D:o,outShape:i}=pC(n,e,t),u=new uC(o.map(p=>p.shape)),l=t.runWebGLProgram(u,o,r);o.forEach(p=>t.disposeIntermediateTensorInfo(p));const c=oe({inputs:{x:l},attrs:{shape:i},backend:t});return t.disposeIntermediateTensorInfo(l),c}function pC(n,e,t){const r=Mr(n.map(a=>a.shape),e);return{tensors2D:n.map(a=>oe({inputs:{x:a},attrs:{shape:[-1,ae(a.shape.slice(e))]},backend:t})),outShape:r}}function Em(n){const{inputs:e,backend:t,attrs:r}=n,{axis:a}=r,s=rt(a,e[0].shape)[0],o=e.map(l=>l.shape);f1(o,s);const i=Mr(e.map(l=>l.shape),s);if(ae(i)===0)return t.makeTensorInfo(i,e[0].dtype,[]);const u=e.filter(l=>ae(l.shape)>0);return u.length===1?Rt({inputs:{x:u[0]},backend:t}):Ja(u,s,t)}const hC={kernelName:fp,backendName:"webgl",kernelFunc:Em};class Cm{constructor(e,t=!1,r=null,a=!1,s=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const o=e.padInfo.top,i=e.padInfo.left,u=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,p=e.dilationWidth,h=e.filterHeight,d=e.filterWidth,m=Math.floor(e.inChannels/4)*4,y=e.inChannels%4,b=e.dataFormat==="channelsLast",x=b?1:2,T=b?2:3,$=b?3:1;let F="",M="";r&&(a?F=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:s?F=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:F=`
          float activation(float x) {
            ${r}
          }
        `,M="result = activation(result);");const U=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${F}

      const ivec2 strides = ivec2(${u}, ${l});
      const ivec2 pads = ivec2(${o}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${$}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${T}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${h}; wR++) {
          int xR = xRCorner + wR * ${c};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${d}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${m}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${b}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${y===1}) {

              if (${b}) {
                dotProd +=
                    getX(batch, xR, xC, ${m}) *
                    getW(wR, wC, ${m}, d2);
              } else {
                dotProd +=
                    getX(batch, ${m}, xR, xC) *
                    getW(wR, wC, ${m}, d2);
              }

            } else if (${y===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${m}, d2),
                getW(wR, wC, ${m} + 1, d2)
              );

              if (${b}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${m}),
                  getX(batch, xR, xC, ${m} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${m}, xR, xC),
                  getX(batch, ${m} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${y===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${m}, d2),
                getW(wR, wC, ${m} + 1, d2),
                getW(wR, wC, ${m} + 2, d2)
              );

              if (${b}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${m}),
                  getX(batch, xR, xC, ${m} + 1),
                  getX(batch, xR, xC, ${m} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${m}, xR, xC),
                  getX(batch, ${m} + 1, xR, xC),
                  getX(batch, ${m} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${U}
        ${M}
        setOutput(result);
      }
    `}}class dC{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,r=e.padInfo.top,a=e.padInfo.left,s=e.strideDepth,o=e.strideHeight,i=e.strideWidth,u=e.dilationDepth,l=e.dilationHeight,c=e.dilationWidth,p=e.filterDepth,h=e.filterHeight,d=e.filterWidth,m=Math.floor(e.inChannels/4)*4,y=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${o}, ${i});
      const ivec3 pads = ivec3(${t}, ${r}, ${a});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${p}; wF++) {
          int xF = xFCorner + wF * ${u};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d}; wC++) {
              int xC = xCCorner + wC * ${c};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${m}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${y===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${m}) *
                  getW(wF, wR, wC, ${m}, d2);
              } else if (${y===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${m}),
                  getX(batch, xF, xR, xC, ${m} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${m}, d2),
                  getW(wF, wR, wC, ${m} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${y===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${m}),
                  getX(batch, xF, xR, xC, ${m} + 1),
                  getX(batch, xF, xR, xC, ${m} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${m}, d2),
                  getW(wF, wR, wC, ${m} + 1, d2),
                  getW(wF, wR, wC, ${m} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Im{constructor(e,t=!1,r=null,a=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=bt(this.outputShape.length);const o=e.padInfo.left,i=e.strideWidth,u=e.dilationWidth,l=e.filterHeight,c=e.filterWidth,p=c;let h=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let b=0;b<c;b++)h+=`
           vec4 xTexelC${b*2};
           int xTexelC${b*2}Ready;
           vec4 xTexelC${b*2+1};
           int xTexelC${b*2+1}Ready;
           vec4 xC${b};`;h+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let b=0;b<c;b++)h+=`
           xTexelC${b*2} = vec4(0.0);
           xTexelC${b*2}Ready = 0;
           xTexelC${b*2+1} = vec4(0.0);
           xTexelC${b*2+1}Ready = 0;
           xC${b} = vec4(0.0);`;h+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let b=0;b<(p+1)/2;b++){const x=b*2;if(h+=`
           xC = xCCorner + ${x*u};
           `,i===1){if(x<c&&(o%2===1?(h+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,u===1&&x>0?h+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:h+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):h+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<c)){const T=o%2===0?ku(u):u;u%2===0&&o%2===1||u%2!==0&&o%2!==1?(h+=`
                   xCOffset = xC + imod(pads[1], 2) + ${T};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,u>1?h+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:h+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):T===1?h+=`
                     xC${x+1} = xTexelC${x};
                     `:h+=`
                     xCOffset = xC + ${T};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<c&&(o%2===1?(h+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<c&&(h+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(h+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<c&&(h+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<c&&(h+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<c&&(h+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}h+=`
     }
   `,h+=`
     }
   `,h+=`
     }
   `;let d="",m="";r&&(a?d=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${r}
         }`:s?d=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${r}
         }`:d=`vec4 activation(vec4 x) {
           ${r}
         }`,m="result = activation(result);");const y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${d}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${h}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${y}
         ${m}
         setOutput(result);
       }
     `}}class fC{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=bt(this.outputShape.length);const{dataFormat:r}=t,a=xt(),s=r==="channelsLast",o=s?1:2,i=s?2:3,u=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let l="";for(let c=0;c<=1;c++)for(let p=0;p<=1;p++)l+=`
          blockIndex = rc.z + ${p};
          pos = rc.y + ${c};

          ${u}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${o}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${i}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${a.output} = result;
      }
    `}}function ho(n,e){const t=n.length;return t>=3?e?[...n.slice(0,-3),n[t-3]*n[t-2],n[t-1]]:[...n.slice(0,-3),n[t-3],n[t-2]*n[t-1]]:!e&&t===1&&n[0]>1?[n[0],1]:null}function Nm({x:n,filter:e,convInfo:t,backend:r,bias:a=null,preluActivationWeights:s=null,leakyreluAlpha:o=0,activation:i=null}){const u=n.shape,l=r.texData.get(n.dataId),c=t.inChannels,p=u[0]*u[1]*u[2],h=t.outChannels,d=t.dataFormat==="channelsLast",m=!1,y=!1;let b;const x=[];if(s!=null){const T=ho(s.shape,d);T!=null&&(s=oe({inputs:{x:s},backend:r,attrs:{shape:T}}),x.push(s))}if(a!=null){const T=ho(a.shape,d);T!=null&&(a=oe({inputs:{x:a},backend:r,attrs:{shape:T}}),x.push(a))}if(!((p===1||h===1)&&c>vm)&&l.isPacked&&d&&l.texture!=null&&u[2]%2!==0&&qe(l.shape.slice(-3),u.slice(-3))){const T=u[0]*u[1]*(u[2]+1),$={dataId:n.dataId,shape:[1,T,t.inChannels],dtype:n.dtype},F=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,R(lo(l.shape,$.shape),()=>`packed reshape ${l.shape} to ${$.shape} isn't free`);const M=oe({inputs:{x:e},backend:r,attrs:{shape:[1,t.inChannels,t.outChannels]}});x.push(M);const U=po({a:$,b:M,backend:r,transposeA:m,transposeB:y,bias:a,activation:i,preluActivationWeights:s,leakyreluAlpha:o}),X=r.texData.get(U.dataId);R(X.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=F,X.shape=t.outShape,b=Rt({inputs:{x:U},backend:r}),b.shape=t.outShape,x.push(U)}else{const T=t.outHeight*t.outWidth,$=oe({inputs:{x:n},backend:r,attrs:{shape:d?[t.batchSize,T,t.inChannels]:[t.batchSize,t.inChannels,T]}}),F=oe({inputs:{x:e},backend:r,attrs:{shape:[1,t.inChannels,t.outChannels]}}),M=po({a:d?$:F,b:d?F:$,transposeA:!d,transposeB:y,backend:r,bias:a,activation:i,preluActivationWeights:s,leakyreluAlpha:o});b=oe({inputs:{x:M},backend:r,attrs:{shape:t.outShape}}),x.push($),x.push(F),x.push(M)}for(const T of x)r.disposeIntermediateTensorInfo(T);return b}function $m({x:n,filter:e,convInfo:t,backend:r,bias:a=null,preluActivationWeights:s=null,leakyreluAlpha:o=0,activation:i=null}){const{filterWidth:u,filterHeight:l,inChannels:c,outWidth:p,outHeight:h,dataFormat:d}=t,m=d==="channelsLast",y=u*l*c,b=h*p,x=[t.batchSize,y,b],T=!0,$=!1,F=[];if(s!=null){const ge=ho(s.shape,m);ge!=null&&(s=oe({inputs:{x:s},backend:r,attrs:{shape:ge}}),F.push(s))}if(a!=null){const ge=ho(a.shape,m);ge!=null&&(a=oe({inputs:{x:a},backend:r,attrs:{shape:ge}}),F.push(a))}const M=oe({inputs:{x:e},backend:r,attrs:{shape:[1,y,ae(e.shape)/y]}});F.push(M);const U=new fC(x,t),X=[n.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],z=r.runWebGLProgram(U,[n],"float32",X),L=oe({inputs:{x:z},backend:r,attrs:{shape:x}});F.push(z),F.push(L);const C=a!=null,q=s!=null,ee=i==="leakyrelu",te=i?ls(i,!0):null,le=new bm(m?L.shape:M.shape,m?M.shape:L.shape,m?[t.batchSize,b,t.outChannels]:[t.batchSize,t.outChannels,b],T,$,C,te,q,ee),de=m?[L,M]:[M,L];if(a&&de.push(a),q&&de.push(s),ee){const ge=r.makeTensorInfo([],"float32",ya(o,"float32"));de.push(ge),F.push(ge)}const fe=r.runWebGLProgram(le,de,"float32"),Re=oe({inputs:{x:fe},backend:r,attrs:{shape:t.outShape}});F.push(fe);for(const ge of F)r.disposeIntermediateTensorInfo(ge);return Re}function mC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s}=e,{strides:o,pad:i,dataFormat:u,dilations:l,dimRoundingMode:c}=r,p=xa(u),h=Pt(a.shape,s.shape,o,l,i,c,!1,p);let d;if(h.filterHeight===1&&h.filterWidth===1&&h.dilationHeight===1&&h.dilationWidth===1&&h.strideHeight===1&&h.strideWidth===1&&(h.padInfo.type==="SAME"||h.padInfo.type==="VALID"))d=Nm({x:a,filter:s,convInfo:h,backend:t});else if(h.strideWidth<=2&&p==="channelsLast"&&H().getBool("WEBGL_EXP_CONV")){const y=new Im(h),b=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];d=t.runWebGLProgram(y,[a,s],"float32",b)}else if(H().getBool("WEBGL_CONV_IM2COL"))d=$m({x:a,filter:s,convInfo:h,backend:t});else{const y=new Cm(h);d=t.runWebGLProgram(y,[a,s],"float32")}const m=oe({inputs:{x:d},backend:t,attrs:{shape:h.outShape}});return t.disposeIntermediateTensorInfo(d),m}const gC={kernelName:mp,backendName:"webgl",kernelFunc:mC};class yC{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,r=e.strideWidth,a=e.padInfo.top,s=e.padInfo.left,o=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${a};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${o}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class xC{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,s=e.strideWidth,o=e.dataFormat==="channelsLast",i=t-1-e.padInfo.top,u=r-1-e.padInfo.left,l=o?1:2,c=o?2:3,p=o?3:1;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${u});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${p}];

        ivec2 dyCorner = ivec2(coords[${l}], coords[${c}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${o}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class bC{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,r=e.strideHeight,a=e.strideWidth,s=e.padInfo.front,o=e.padInfo.top,i=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${s};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${r} - ${o};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${a} - ${i};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class vC{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,r=e.filterHeight,a=e.filterWidth,s=e.strideDepth,o=e.strideHeight,i=e.strideWidth,u=t-1-e.padInfo.front,l=r-1-e.padInfo.top,c=a-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${l}, ${c});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${r}; wR++) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${r} - 1 - wR;

            for (int wC = 0; wC < ${a}; wC++) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${a} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function wC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,dy:s}=e,{strides:o,pad:i,dataFormat:u,dimRoundingMode:l,filterShape:c}=r,p=xa(u),h=Pt(a.shape,c,o,1,i,l,!1,p),d=new yC(h);return t.runWebGLProgram(d,[a,s],"float32")}const SC={kernelName:gp,backendName:"webgl",kernelFunc:wC};function kC(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,filter:s}=e,{inputShape:o,strides:i,pad:u,dataFormat:l,dimRoundingMode:c}=r,p=xa(l),h=Pt(o,s.shape,i,1,u,c,!1,p),d=new xC(h);return t.runWebGLProgram(d,[a,s],"float32")}const TC={kernelName:yp,backendName:"webgl",kernelFunc:kC};function EC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s}=e,{strides:o,pad:i,dilations:u}=r,l=fs(a.shape,s.shape,o,u,i),c=new dC(l);return t.runWebGLProgram(c,[a,s],"float32")}const CC={kernelName:xp,backendName:"webgl",kernelFunc:EC};function IC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,dy:s}=e,{strides:o,pad:i,filterShape:u}=r,l=fs(a.shape,u,o,1,i),c=new bC(l);return t.runWebGLProgram(c,[a,s],"float32")}const NC={kernelName:_2,backendName:"webgl",kernelFunc:IC};function $C(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,filter:s}=e,{pad:o,strides:i,inputShape:u}=r,l=fs(u,s.shape,i,1,o),c=new vC(l);return t.runWebGLProgram(c,[a,s],"float32")}const RC={kernelName:bp,backendName:"webgl",kernelFunc:$C};const _C=Ca+`
  return cos(x);
`,AC=Ie({opSnippet:_C}),OC={kernelName:vp,backendName:"webgl",kernelFunc:AC};const FC=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,DC=Ie({opSnippet:FC}),MC={kernelName:wp,backendName:"webgl",kernelFunc:DC};class LC{constructor(e,t,r,a,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[o,i,u,l]=e,[c]=t,[p,h]=r;this.outputShape=[c,p,h,l];const d=a==="bilinear"?1:0,[m,y]=[`${i-1}.0`,`${u-1}.0`],[b,x,T]=p>1?[`${(i-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${m} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${m}`],[$,F,M]=h>1?[`${(u-1)/(h-1)}`,"(x2-x1) * width_ratio",`x1*${y} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${y}`];this.userCode=`
      const float height_ratio = float(${b});
      const float width_ratio = float(${$});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${o}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${F};

        float in_y = ${T};
        if( in_y < 0.0 || in_y > ${m} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${M};
        if( in_x < 0.0 || in_x > ${y} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${d} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const PC=n=>{const{inputs:e,backend:t,attrs:r}=n,{image:a,boxes:s,boxInd:o}=e,{cropSize:i,method:u,extrapolationValue:l}=r,c=new LC(a.shape,s.shape,i,u,l);return t.runWebGLProgram(c,[a,s,o],"float32")},BC={kernelName:Tp,backendName:"webgl",kernelFunc:PC};var ps;(function(n){n.Prod="*",n.Sum="+"})(ps||(ps={}));class cc{constructor(e,t,r,a){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const s=this.outputShape.length,o=this.op===ps.Prod?"1.0":"0.0",i=r?o:`getX(${pc(s,"coords",this.op)})`,u=this.outputShape[this.outputShape.length-1];let l="",c="";r?(l=a?`end != ${u-1}`:"end != 0",c=a?"end + 1":"end - 1"):(l=a?`end + pow2 < ${u}`:"end >= pow2",c=a?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${Be(s)} coords = getOutputCoords();
        int end = ${hc(s,"coords",this.op)};
        float val = ${i};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${c};
          ${hc(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${pc(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function pc(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.x, ${e}.y`;if(n===3)return`${e}.x, ${e}.y, ${e}.z`;if(n===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function hc(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.y`;if(n===3)return`${e}.z`;if(n===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function Rm(n,e,t,r,a,s){const o=e.shape.length,i=Qt([r],o);let u=e;i!=null&&(u=yt({inputs:{x:e},backend:t,attrs:{perm:i}}));const l=en(1,o)[0];if(l!==o-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${r}`);const c=u.shape[l];let p=Rt({inputs:{x:u},backend:t});for(let h=0;h<=Math.ceil(Math.log2(c))-1;h++){const d=new cc(n,u.shape,!1,s),m=[[h]],y=p;p=t.runWebGLProgram(d,[p],p.dtype,m),t.disposeIntermediateTensorInfo(y)}if(a){const h=new cc(n,u.shape,a,s),d=p;p=t.runWebGLProgram(h,[p],p.dtype),t.disposeIntermediateTensorInfo(d)}if(i!=null){const h=zu(i),d=yt({inputs:{x:p},backend:t,attrs:{perm:h}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(u),d}return p}function UC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,exclusive:o,reverse:i}=r;return Rm(ps.Prod,a,t,s,o,i)}const VC={kernelName:Sp,backendName:"webgl",kernelFunc:UC};function WC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,exclusive:o,reverse:i}=r;return Rm(ps.Sum,a,t,s,o,i)}const zC={kernelName:kp,backendName:"webgl",kernelFunc:WC};function GC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,weights:s}=e,{size:o,binaryOutput:i}=r;if(a.shape.length===1){const u=t.readSync(a.dataId),l=t.readSync(s.dataId),c=cm(u,l,s.dtype,s.shape,o);return t.makeTensorInfo([o],s.dtype,c)}else if(a.shape.length===2){const u=t.bufferSync(a),l=t.bufferSync(s),c=rk(u,l,o,i);return t.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${a.shape.length}.`)}const jC={kernelName:Ep,backendName:"webgl",kernelFunc:GC};class HC{constructor(e,t,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function XC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{blockSize:s,dataFormat:o}=r,i=a.shape[0],u=o==="NHWC"?a.shape[1]:a.shape[2],l=o==="NHWC"?a.shape[2]:a.shape[3],c=o==="NHWC"?a.shape[3]:a.shape[1],p=u*s,h=l*s,d=c/(s*s),m=o==="NHWC"?[i,p,h,d]:[i,d,p,h],y=new HC(m,s,o);return t.runWebGLProgram(y,[a],a.dtype)}const qC={kernelName:Cp,backendName:"webgl",kernelFunc:XC};class _m{constructor(e,t=!1,r=null,a=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=bt(this.outputShape.length);const o=e.filterHeight,i=e.filterWidth,u=e.outChannels/e.inChannels;let l="",c="";r&&(a?l=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:s?l=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:l=`
          float activation(float x) {
            ${r}
          }
        `,c="result = activation(result);");const p=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${u};
        int q = d2 - d1 * ${u};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${o}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${i}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${p}
        ${c}
        setOutput(result);
      }
    `}}class Am{constructor(e,t=!1,r=null,a=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=bt(this.outputShape.length);const o=e.outChannels/e.inChannels,i=e.padInfo.left,u=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,p=e.filterWidth,h=p;let d=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<p;x++)d+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;d+=`
    for (int r = 0; r < ${c}; r++) {
      `;for(let x=0;x<p;x++)d+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;d+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(h+1)/2;x++){const T=x*2;if(d+=`
          xC = xCCorner + ${T*l};
          `,u===1){if(T<p&&(i%2===1?(d+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T}Ready == 0) {
                  xTexelC${T} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${T}.zw = vec2(0.0);
                  }
                  xTexelC${T}Ready = 1;
                }
              `,l===1&&T>0?d+=`
                xC${T} = vec4(xTexelC${T-2}.zw, xTexelC${T}.xy);
                `:d+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${T} = vec4(previous.zw, xTexelC${T}.xy);
                  } else {
                    xC${T} = vec4(0.0, 0.0, xTexelC${T}.xy);
                  }
                  `):d+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${T}Ready == 0) {
                  xTexelC${T} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${T}.zw = vec2(0.0);
                  }
                  xTexelC${T}Ready = 1;
                }

                xC${T} = xTexelC${T};
                `,T+1<p)){const $=i%2===0?ku(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
                  xCOffset = xC + imod(pads[1], 2) + ${$};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T+1}Ready == 0) {
                    xTexelC${T+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${T+1}.zw = vec2(0.0);
                    }
                    xTexelC${T+1}Ready = 1;
                  }
                  `,l>1?d+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${T+1} = vec4(previous.zw, xTexelC${T+1}.xy);
                    } else {
                     xC${T+1} = vec4(0.0, 0.0, xTexelC${T+1}.xy);
                    }
                    `:d+=`
                    xC${T+1} = vec4(xTexelC${T}.zw, xTexelC${T+1}.xy);
                    `):$===1?d+=`
                    xC${T+1} = xTexelC${T};
                    `:d+=`
                    xCOffset = xC + ${$};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T+1}Ready == 0) {
                      xTexelC${T+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${T+1}.zw = vec2(0.0);
                      }
                      xTexelC${T+1}Ready = 1;
                    }

                    xC${T+1} = xTexelC${T+1};
                    `}}else T<p&&(i%2===1?(d+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T}Ready == 0) {
                  xTexelC${T} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${T}.zw = vec2(0.0);
                  }
                  xTexelC${T}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${T+1}Ready == 0) {
                  xTexelC${T+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${T+1}.zw = vec2(0.0);
                  }
                  xTexelC${T+1}Ready = 1;
                }

                xC${T} = vec4(xTexelC${T}.zw, xTexelC${T+1}.zw);
              `,T+1<p&&(d+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${T+1} = vec4(xTexelC${T+1}.xy, final.xy);
                `)):(d+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${T}Ready == 0) {
                  xTexelC${T} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${T}.zw = vec2(0.0);
                  }
                  xTexelC${T}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${T+1}Ready == 0) {
                  xTexelC${T+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${T+1}.zw = vec2(0.);
                  }
                  xTexelC${T+1}Ready = 1;
                }

                xC${T} = vec4(
                  xTexelC${T}.xy, xTexelC${T+1}.xy);
              `,T+1<p&&(d+=`
                  xC${T+1} = vec4(xTexelC${T}.zw, xTexelC${T+1}.zw);
                `)));T<p&&(d+=`
            wTexel = getW(r, ${T}, d1, q);
            dotProd += xC${T} * vec4(wTexel.xz, wTexel.xz);
          `,T+1<p&&(d+=`
              wTexel = getW(r, ${T+1}, d1, q);
              dotProd += xC${T+1} * vec4(wTexel.xz, wTexel.xz);
            `))}d+=`
    }
  `,d+=`
      }
    `;let m="",y="";r&&(a?m=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:s?m=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:m=`vec4 activation(vec4 x) {
          ${r}
        }`,y="result = activation(result);");const b=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${m}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${o};
        int q = d2 - d1 * ${o};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${d}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${b}
        ${y}
        setOutput(result);
      }
    `}}function KC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s}=e,{strides:o,pad:i,dilations:u,dimRoundingMode:l}=r;let c=u;c==null&&(c=[1,1]),R(_t(o,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`);const p=Pt(a.shape,s.shape,o,c,i,l,!0);let h;H().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?h=new Am(p):h=new _m(p);const d=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return t.runWebGLProgram(h,[a,s],"float32",d)}const YC={kernelName:Ip,backendName:"webgl",kernelFunc:KC};class ZC{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,r=e.strideWidth,a=e.padInfo.top,s=e.padInfo.left,o=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${o} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${a};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class JC{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,s=e.strideWidth,o=t-1-e.padInfo.top,i=r-1-e.padInfo.left,u=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${u}; dm++) {
              int d2 = d1 * ${u} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function QC(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,dy:s}=e,{strides:o,dilations:i,pad:u,dimRoundingMode:l,filterShape:c}=r,p=Pt(a.shape,c,o,i,u,l,!0),h=new ZC(p);return t.runWebGLProgram(h,[a,s],"float32")}const eI={kernelName:Np,backendName:"webgl",kernelFunc:QC};function tI(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,filter:s}=e,{strides:o,dilations:i,pad:u,dimRoundingMode:l,inputShape:c}=r,p=Pt(c,s.shape,o,i,u,l,!0),h=new JC(p);return t.runWebGLProgram(h,[a,s],"float32")}const nI={kernelName:$p,backendName:"webgl",kernelFunc:tI};class rI{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function aI(n){const{inputs:e,backend:t}=n,{x:r}=e,a=[...r.shape,...r.shape],s=ae(r.shape),o=oe({inputs:{x:r},backend:t,attrs:{shape:[s]}}),i=new rI(s),u=t.runWebGLProgram(i,[o],o.dtype),l=oe({inputs:{x:u},backend:t,attrs:{shape:a}});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(u),l}const sI={kernelName:Rp,backendName:"webgl",kernelFunc:aI};class oI{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:r,padInfo:a,strideHeight:s,strideWidth:o,filterHeight:i,filterWidth:u,dilationHeight:l,dilationWidth:c}=e,{top:p,left:h}=a;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${o});
      const ivec2 pads = ivec2(${p}, ${h});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${i}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${u}; w++) {
              int wIn = wBeg + w * ${c};

              if (wIn >= 0 && wIn < ${r}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function iI(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s}=e,{strides:o,pad:i,dilations:u}=r,l=Nf(a.shape,s.shape,o,i,"NHWC",u);let c;const p=new oI(l);c=t.runWebGLProgram(p,[a,s],"float32");const h=oe({inputs:{x:c},backend:t,attrs:{shape:l.outShape}});return t.disposeIntermediateTensorInfo(c),h}const uI={kernelName:_p,backendName:"webgl",kernelFunc:iI};function lI(n){const{inputs:e,backend:t,attrs:r}=n,{equation:a}=r,s=e,{allDims:o,summedDims:i,idDims:u}=R1(a,s.length);A1(o.length,u,s);const{path:l,steps:c}=O1(i,u),p=c.length;let h=null,d=o.length;const m=[];for(let y=0;y<p;++y){for(const b of c[y]){const{permutationIndices:x,expandDims:T}=_1(d,u[b]);let $;F1(x)?$=s[b]:($=yt({inputs:{x:s[b]},backend:t,attrs:{perm:x}}),m.push($));const F=$.shape.slice();for(let M=0;M<T.length;++M)F.splice(T[M],0,1);qe($.shape,F)||($=oe({inputs:{x:$},backend:t,attrs:{shape:F}}),m.push($)),h===null?h=$:(h=ll({inputs:{a:$,b:h},backend:t}),m.push(h))}y<p-1&&(l[y]>=0&&(h=Bo({inputs:{x:h},backend:t,attrs:{axis:l[y]-(o.length-d),keepDims:!1}}),m.push(h)),d--)}for(const y of m)y!==h&&t.disposeIntermediateTensorInfo(y);return h}const cI={kernelName:Op,backendName:"webgl",kernelFunc:lI};const pI="return (x >= 0.0) ? x : (exp(x) - 1.0);",hI=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,dI=Ie({opSnippet:pI,packedOpSnippet:hI}),fI={kernelName:Fp,backendName:"webgl",kernelFunc:dI};const mI="return (b >= 1.0) ? a : a * (b + 1.0);",gI=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,yI=n=>{const{inputs:e,backend:t}=n,{dy:r,y:a}=e,s=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new vs(gI,r.shape,a.shape):new ma(mI,r.shape,a.shape);return t.runWebGLProgram(s,[r,a],r.dtype)},xI={kernelName:A2,backendName:"webgl",kernelFunc:yI};const bI=`
  return vec4(equal(a, b));
`,vI="return float(a == b);",wI=ut({opSnippet:vI,packedOpSnippet:bI,dtype:"bool",cpuKernelImpl:ik}),SI={kernelName:Mp,backendName:"webgl",kernelFunc:wI};const kI=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${T1};
  float a1 = ${E1};
  float a2 = ${C1};
  float a3 = ${I1};
  float a4 = ${N1};
  float a5 = ${$1};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,TI=Ie({opSnippet:kI}),EI={kernelName:Dp,backendName:"webgl",kernelFunc:TI};const CI=Ca+`
  return exp(x);
`,II=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Om=Ie({opSnippet:CI,packedOpSnippet:II,cpuKernelImpl:uk,dtype:"float32"}),NI={kernelName:Lp,backendName:"webgl",kernelFunc:Om};function cu(n){const{inputs:e,attrs:t,backend:r}=n,{dim:a}=t,{input:s}=e,o=s.shape.length,i=s.shape.slice();let u=a;return a<0&&(R(-(o+1)<=a,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),u=o+a+1),i.splice(u,0,1),oe({inputs:{x:s},backend:r,attrs:{shape:i}})}const $I={kernelName:Pp,backendName:"webgl",kernelFunc:cu};const dc="return exp(x) - 1.0;",RI=Ie({opSnippet:dc,packedOpSnippet:dc,cpuKernelImpl:lk}),_I={kernelName:Bp,backendName:"webgl",kernelFunc:RI};class fc{constructor(e,t,r){this.variableNames=["real","imag"];const a=t[1];this.outputShape=t;const s=r?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,o=r?`${a}.0`:"1.0";let i;if(e==="real")i="return real * expR - imag * expI;";else if(e==="imag")i="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${i}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${a});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${a}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${o};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function Fm(n,e,t){const r=t.texData.get(n.dataId),a=ae(n.shape),s=n.shape[n.shape.length-1],o=a/s,i=oe({inputs:{x:n},backend:t,attrs:{shape:[o,s]}}),u=i.shape,l=new fc("real",u,e),c=new fc("imag",u,e),p=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:u},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:u}],h=t.runWebGLProgram(l,p,"float32"),d=t.runWebGLProgram(c,p,"float32"),m=ir({inputs:{real:h,imag:d},backend:t});t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d);const y=oe({inputs:{x:m},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(m),y}function AI(n){const{inputs:e,backend:t}=n,{input:r}=e;return Fm(r,!1,t)}const OI={kernelName:Up,backendName:"webgl",kernelFunc:AI};class FI{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Ss(n){const{backend:e,attrs:t}=n,{shape:r,value:a}=t;let{dtype:s}=t;if(s=s||vo(a),s==="string"){const o=kt(s,ae(r));return o.fill(a),e.makeTensorInfo(r,s,o)}else{const o=new FI(r,a),i=[[a]];return e.runWebGLProgram(o,[],s,i)}}const DI={kernelName:Vp,backendName:"webgl",kernelFunc:Ss};class MI{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const LI={kernelName:Wp,backendName:"webgl",kernelFunc:({inputs:n,backend:e})=>{const{image:t}=n,r=e,a=new MI(t.shape);return r.runWebGLProgram(a,[t],t.dtype)}};const mc="return floor(x);",PI=Ie({opSnippet:mc,packedOpSnippet:mc,cpuKernelImpl:ck}),BI={kernelName:zp,backendName:"webgl",kernelFunc:PI};const UI=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,VI=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,WI=ut({opSnippet:UI,packedOpSnippet:VI,dtype:"int32"}),zI={kernelName:Gp,backendName:"webgl",kernelFunc:WI};class GI{constructor(e){this.variableNames=["A"];const t=xt(),[r,a]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${a}.0, ${r}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class jI{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=xt(),[r,a]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${a}.0, ${r}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}const HI={kernelName:Ri,backendName:"webgl",kernelFunc:XI};let ea,fi=H().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function XI(n){const{inputs:e,backend:t,attrs:r}=n;let{pixels:a}=e;const{numChannels:s}=r,o=typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement,i=typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement,[u,l]=o?[a.videoWidth,a.videoHeight]:[a.width,a.height],c=[l,u],p=[l,u,s];if(i||o){const y=H().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(ea==null||y!==fi)&&(fi=y,ea=document.createElement("canvas").getContext("2d",{willReadFrequently:fi})),ea.canvas.width=u,ea.canvas.height=l,ea.drawImage(a,0,0,u,l),a=ea.canvas}const h=t.makeTensorInfo(c,"int32");t.texData.get(h.dataId).usage=Mt.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(h.dataId),a);const d=H().getBool("WEBGL_PACK")?new jI(p):new GI(p),m=t.runWebGLProgram(d,[h],"int32");return t.disposeData(h.dataId),m}function qI(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s,bias:o,preluActivationWeights:i}=e,{strides:u,pad:l,dataFormat:c,dilations:p,dimRoundingMode:h,activation:d,leakyreluAlpha:m}=r,y=xa(c),b=Pt(a.shape,s.shape,u,p,l,h,!1,y);let x;const T=[],$=o!=null,F=i!=null,M=d==="leakyrelu",U=()=>{const z=[a,s],L=(C,q)=>{if(q==="NCHW"&&C.shape.length===1&&C.shape[0]!==1){const ee=oe({inputs:{x:C},backend:t,attrs:{shape:[C.shape[0],1,1]}});return T.push(ee),ee}return C};if($&&z.push(L(o,c)),F&&z.push(L(i,c)),M){const C=t.makeTensorInfo([],"float32",ya(m,"float32"));z.push(C),T.push(C)}return z};if(b.filterHeight===1&&b.filterWidth===1&&b.dilationHeight===1&&b.dilationWidth===1&&b.strideHeight===1&&b.strideWidth===1&&(b.padInfo.type==="SAME"||b.padInfo.type==="VALID"))x=Nm({x:a,filter:s,convInfo:b,backend:t,bias:o,activation:d,preluActivationWeights:i,leakyreluAlpha:m});else if(b.strideWidth<=2&&y==="channelsLast"&&H().getBool("WEBGL_EXP_CONV")){const z=d?ls(d,!0):null,L=new Im(b,$,z,F,M),C=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],q=U();x=t.runWebGLProgram(L,q,"float32",C)}else if(H().getBool("WEBGL_CONV_IM2COL"))x=$m({x:a,filter:s,convInfo:b,backend:t,bias:o,activation:d,preluActivationWeights:i,leakyreluAlpha:m});else{const z=d?ls(d,!1):null,L=new Cm(b,$,z,F,M),C=U();x=t.runWebGLProgram(L,C,"float32")}const X=oe({inputs:{x},backend:t,attrs:{shape:b.outShape}});return T.push(x),T.forEach(z=>t.disposeIntermediateTensorInfo(z)),X}const KI={kernelName:Ai,backendName:"webgl",kernelFunc:qI};function YI(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s,bias:o,preluActivationWeights:i}=e,{strides:u,pad:l,dilations:c,dimRoundingMode:p,activation:h,leakyreluAlpha:d}=r,m=[];let y=c;y==null&&(y=[1,1]),R(_t(u,y),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${y}'`);const b=Pt(a.shape,s.shape,u,y,l,p,!0),x=H().getBool("WEBGL_PACK_DEPTHWISECONV")&&b.strideWidth<=2&&b.outChannels/b.inChannels===1,T=h?ls(h,x):null,$=[a,s],F=o!=null,M=i!=null,U=h==="leakyrelu";if(F&&$.push(o),M&&$.push(i),U){const C=t.makeTensorInfo([],"float32",ya(d,"float32"));$.push(C),m.push(C)}let X;x?X=new Am(b,F,T,M,U):X=new _m(b,F,T,M,U);const z=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],L=t.runWebGLProgram(X,$,"float32",z);return m.forEach(C=>t.disposeIntermediateTensorInfo(C)),L}const ZI={kernelName:Oi,backendName:"webgl",kernelFunc:YI};class JI{constructor(e,t,r,a){this.sliceDim=e,this.strides=t,this.paramsShape=a,this.variableNames=["x","indices"],this.outputShape=r;const s=Be(r.length);let o=`
    int index;`;for(let i=0;i<this.sliceDim;i++)o+=`
          index = round(getIndices(coords[0], ${i}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[i]};
          flattenIndex += index * ${this.strides[i]};`;this.userCode=`
         void main() {
          ${s} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${o}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function QI(n){const{inputs:e,backend:t}=n,{params:r,indices:a}=e,s=a.shape,o=s[s.length-1],i=ae(r.shape),[u,l,c,p]=hf(r,a),h=oe({inputs:{x:a},backend:t,attrs:{shape:[l,o]}}),d=oe({inputs:{x:r},backend:t,attrs:{shape:[ae(r.shape)/c,c]}});if(t.shouldExecuteOnCPU([r,a])||r.dtype==="string"){const x=t.readSync(a.dataId),T=t.bufferSync(r),$=pk(x,T,r.dtype,l,o,c,p,r.shape,i);return t.makeTensorInfo(u,r.dtype,$.values)}const m=new JI(o,p,[l,c],r.shape),y=t.runWebGLProgram(m,[d,h],d.dtype),b=oe({inputs:{x:y},backend:t,attrs:{shape:u}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(y),b}const eN={kernelName:Xp,backendName:"webgl",kernelFunc:QI};class tN{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const r=Be(this.rank),a=nN(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${a}));
      }
    `}}function nN(n,e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let a=0;a<n.length;a++)a===2?r.push("index"):r.push(`${t[a]}`);return r.join()}function Dm(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,indices:s}=e,{axis:o,batchDims:i}=r,u=rt(o,a.shape)[0];if(H().get("DEBUG")){const T=t.readSync(s.dataId),$=a.shape[u];for(let F=0;F<T.length;++F){const M=T[F];R(M<=$-1&&M>=0,()=>`GatherV2: the index value ${M} is not in [0, ${$-1}]`)}}const l=K1(a,s,u,i),c=ae(s.shape),p=[],h=oe({inputs:{x:a},backend:t,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),d=oe({inputs:{x:s},backend:t,attrs:{shape:[l.batchSize,c/l.batchSize]}});p.push(h),p.push(d);const m=[l.batchSize,l.outerSize,c/l.batchSize,l.sliceSize];if(t.shouldExecuteOnCPU([a,s])||a.dtype==="string"){const T=t.bufferSync(d),$=t.bufferSync(h),F=hk($,T,m);return p.forEach(M=>t.disposeIntermediateTensorInfo(M)),t.makeTensorInfo(l.outputShape,F.dtype,F.values)}const y=new tN(h.shape,m),b=t.runWebGLProgram(y,[h,d],h.dtype);p.push(b);const x=oe({inputs:{x:b},backend:t,attrs:{shape:l.outputShape}});return p.forEach(T=>t.disposeIntermediateTensorInfo(T)),x}const rN={kernelName:Hp,backendName:"webgl",kernelFunc:Dm};const aN="return float(a > b);",sN=`
  return vec4(greaterThan(a, b));
`,oN=ut({opSnippet:aN,packedOpSnippet:sN,cpuKernelImpl:dk,dtype:"bool"}),iN={kernelName:qp,backendName:"webgl",kernelFunc:oN};const uN="return float(a >= b);",lN=`
  return vec4(greaterThanEqual(a, b));
`,cN=ut({opSnippet:uN,packedOpSnippet:lN,dtype:"bool",cpuKernelImpl:fk}),pN={kernelName:Kp,backendName:"webgl",kernelFunc:cN};function hN(n){const{inputs:e,backend:t}=n,{input:r}=e;return Fm(r,!0,t)}const dN={kernelName:Yp,backendName:"webgl",kernelFunc:hN};const fN="return float(!isnan(x) && !isinf(x));",mN=Ie({opSnippet:fN,dtype:"bool"}),gN={kernelName:Jp,backendName:"webgl",kernelFunc:mN};const yN="return float(isinf(x));",xN=Ie({opSnippet:yN,dtype:"bool"}),bN={kernelName:Qp,backendName:"webgl",kernelFunc:xN};const vN="return float(isnan(x));",wN=Ie({opSnippet:vN,dtype:"bool"}),SN={kernelName:eh,backendName:"webgl",kernelFunc:wN};const kN="return float(a < b);",TN=`
  return vec4(lessThan(a, b));
`,EN=ut({opSnippet:kN,packedOpSnippet:TN,cpuKernelImpl:mk,dtype:"bool"}),CN={kernelName:nh,backendName:"webgl",kernelFunc:EN};const IN="return float(a <= b);",NN=`
  return vec4(lessThanEqual(a, b));
`,$N=ut({opSnippet:IN,packedOpSnippet:NN,cpuKernelImpl:gk,dtype:"bool"}),RN={kernelName:rh,backendName:"webgl",kernelFunc:$N};function _N(n){const{backend:e,attrs:t}=n,{start:r,stop:a,num:s}=t,o=yk(r,a,s);return e.makeTensorInfo([o.length],"float32",o)}const AN={kernelName:ah,backendName:"webgl",kernelFunc:_N};const ON=Ca+`
  return x < 0.0 ? 0./0. : log(x);
`,FN=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,DN=Ie({opSnippet:ON,packedOpSnippet:FN,cpuKernelImpl:xk}),MN={kernelName:sh,backendName:"webgl",kernelFunc:DN};const LN=Ca+`
  return log(1.0 + x);
`,PN=Ie({opSnippet:LN}),BN={kernelName:oh,backendName:"webgl",kernelFunc:PN};const UN="return float(a >= 1.0 && b >= 1.0);",VN=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,WN=ut({opSnippet:UN,packedOpSnippet:VN,dtype:"bool"}),zN={kernelName:ih,backendName:"webgl",kernelFunc:WN};const GN="return float(!(x >= 1.0));",jN=Ie({opSnippet:GN}),HN={kernelName:uh,backendName:"webgl",kernelFunc:jN};const XN="return float(a >= 1.0 || b >= 1.0);",qN=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,KN=ut({opSnippet:XN,packedOpSnippet:qN,dtype:"bool"}),YN={kernelName:lh,backendName:"webgl",kernelFunc:KN};class ZN{constructor(e,t,r,a,s){this.variableNames=["x"],this.outputShape=[];const o=t,i=e[3]-1;this.outputShape=e;let u;const l=`float(${r}) + float(${a}) * sum`;s===.5?u=`inversesqrt(${l})`:s===1?u=`1.0/(${l})`:u=`exp(log(${l}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${o}; j <= ${o}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${i}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${u};
        setOutput(val);
      }
    `}}class JN{constructor(e,t,r,a,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const o=t,i=e[3]-1;this.outputShape=e;let u;const l=`float(${r}) + float(${a}) * sum`;s===.5?u=`inversesqrt(${l})`:s===1?u=`1.0/(${l})`:u=`exp(log(${l}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${o};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${o}; j <= ${o}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${i}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${u};
        setOutput(result);
      }
    `}}const QN=n=>{const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{depthRadius:s,bias:o,alpha:i,beta:u}=r,l=H().getBool("WEBGL_PACK_NORMALIZATION")?new JN(a.shape,s,o,i,u):new ZN(a.shape,s,o,i,u);return t.runWebGLProgram(l,[a],a.dtype)},e$={kernelName:ch,backendName:"webgl",kernelFunc:QN};class t${constructor(e,t,r,a,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=r,this.alpha=a,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${a}) * norm + float(${r});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${a})
                * float(${s})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const n$=n=>{const{inputs:e,backend:t,attrs:r}=n,{x:a,y:s,dy:o}=e,{depthRadius:i,bias:u,alpha:l,beta:c}=r,p=new t$(a.shape,i,u,l,c);return t.runWebGLProgram(p,[a,s,o],a.dtype)},r$={kernelName:O2,backendName:"webgl",kernelFunc:n$};function a$(n,e,t,r){const a=ae(e),s=ae(n.shape)/a,o=oe({inputs:{x:n},attrs:{shape:[s,a]},backend:r}),i=Wr(o,n.dtype,"max",r),u=oe({inputs:{x:i},attrs:{shape:t},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),u}function Mm(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{reductionIndices:s,keepDims:o}=r,i=a.shape.length,u=rt(s,a.shape);let l=u;const c=Qt(l,i),p=c!=null,h=t.shouldExecuteOnCPU([a]);let d=a;if(p){if(h){const T=t.texData.get(d.dataId).values,$=new Array(i);for(let U=0;U<$.length;U++)$[U]=a.shape[c[U]];const F=il(T,a.shape,a.dtype,c,$);d=t.makeTensorInfo($,a.dtype);const M=t.texData.get(d.dataId);M.values=F}else d=Po(a,c,t);l=en(l.length,i)}hn("max",l,i);const[m,y]=kn(d.shape,l);let b=m;o&&(b=Bt(m,u));let x;if(h){const T=t.texData.get(d.dataId).values,$=bk(T,ae(y),b,a.dtype);x=t.makeTensorInfo(b,a.dtype);const F=t.texData.get(x.dataId);F.values=$}else x=a$(d,y,b,t);return p&&t.disposeIntermediateTensorInfo(d),x}const s$={kernelName:ph,backendName:"webgl",kernelFunc:Mm};const o$=ul+`
  return max(a, b);
`,i$=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+bs+`
  return result;
`,u$=ut({opSnippet:o$,packedOpSnippet:i$,cpuKernelImpl:vk}),l$={kernelName:hh,backendName:"webgl",kernelFunc:u$};function c$(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e;ys(a,"maxPool");const{filterSize:s,strides:o,pad:i,dimRoundingMode:u}=r,l=1;R(_t(o,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${l}'`);const c=Pr(a.shape,s,o,l,i,u);if(c.filterWidth===1&&c.filterHeight===1&&qe(c.inShape,c.outShape))return Rt({inputs:{x:a},backend:t});const p=new cs(c,"max",!1);return t.runWebGLProgram(p,[a],a.dtype)}const p$={kernelName:dh,backendName:"webgl",kernelFunc:c$};function h$(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{filterSize:s,strides:o,pad:i,dataFormat:u,dimRoundingMode:l}=r,c=[1,1,1],p=ds(a.shape,s,o,c,i,l,u),h=new cl(p,"max",!1);return t.runWebGLProgram(h,[a],a.dtype)}const d$={kernelName:fh,backendName:"webgl",kernelFunc:h$};class f${constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,r=e.strideWidth,a=e.dilationHeight,s=e.effectiveFilterHeight,o=e.effectiveFilterWidth,i=s-1-e.padInfo.top,u=o-1-e.padInfo.left,l=s*o-1;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${u});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${l} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${o} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class m${constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,r=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,o=e.dilationHeight,i=e.dilationWidth,u=e.effectiveFilterDepth,l=e.effectiveFilterHeight,c=e.effectiveFilterWidth,p=u-1-e.padInfo.front,h=l-1-e.padInfo.top,d=c-1-e.padInfo.left,m=u*l*c-1;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${h}, ${d});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${o}) {
            float dyR = float(dyRCorner + wR) / ${r}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${c};
                wC += ${i}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${m} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${c} +
                  wR * ${c} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function g$(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s}=e,o=s,{filterSize:i,strides:u,pad:l,dimRoundingMode:c}=r,p=[1,1,1],h=ds(o.shape,i,u,p,l,c),d=new cl(h,"max",!0),m=t.runWebGLProgram(d,[o],o.dtype),y=new m$(h),b=t.runWebGLProgram(y,[a,m],o.dtype);return t.disposeIntermediateTensorInfo(m),b}const y$={kernelName:D2,backendName:"webgl",kernelFunc:g$};function x$(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s,output:o}=e,i=s;ys([s,o],"maxPoolGrad");const{filterSize:u,strides:l,pad:c,dimRoundingMode:p}=r,h=Pr(i.shape,u,l,1,c,p),d=!0,m=new cs(h,"max",d),y=t.runWebGLProgram(m,[i],i.dtype),b=new f$(h),x=t.runWebGLProgram(b,[a,y],i.dtype);return t.disposeIntermediateTensorInfo(y),x}const b$={kernelName:F2,backendName:"webgl",kernelFunc:x$};function v$(n,e,t,r){let a=new cs(t,"max",!1);const s=r.runWebGLProgram(a,[n],"float32");a=new cs(t,"max",!0,!0,e);const o=r.runWebGLProgram(a,[n],"float32");return[s,o]}const w$={kernelName:mh,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:r}=n,{filterSize:a,strides:s,pad:o,includeBatchInIndex:i}=e,u=t;R(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);const l=[1,1];R(_t(s,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${l}'`);const c=Pr(r.shape,a,s,l,o),[p,h]=v$(r,i,c,u);return[p,h]}};function S$(n,e,t,r){const a=ae(e),s=ae(n.shape)/a,o=oe({inputs:{x:n},attrs:{shape:[s,a]},backend:r}),i=Wr(o,"float32","mean",r),u=oe({inputs:{x:i},attrs:{shape:t},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(i),u}const k$={kernelName:gh,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:r}=n,{keepDims:a,axis:s}=e,o=t,i=r.shape.length,u=rt(s,r.shape);let l=u;const c=Qt(l,i),p=c!=null,h=o.shouldExecuteOnCPU([r]),d=[];let m=r;if(p){if(h){const $=o.texData.get(m.dataId).values,F=new Array(i);for(let X=0;X<F.length;X++)F[X]=r.shape[c[X]];const M=il($,r.shape,r.dtype,c,F);m=o.makeTensorInfo(F,r.dtype);const U=o.texData.get(m.dataId);U.values=M}else m=Po(r,c,o);d.push(m),l=en(l.length,i)}hn("sum",l,i);const[y,b]=kn(m.shape,l);let x=y;a&&(x=Bt(y,u));const T=S$(m,b,x,o);for(const $ of d)o.disposeIntermediateTensorInfo($);return T}};function T$(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,keepDims:o}=r,i=a.shape.length,u=rt(s,a.shape);let l=u;const c=Qt(l,i);let p=a;c!=null&&(p=yt({inputs:{x:a},backend:t,attrs:{perm:c}}),l=en(l.length,a.shape.length)),hn("min",l,i);const[h,d]=kn(p.shape,l),m=ae(d),y=oe({inputs:{x:p},backend:t,attrs:{shape:[-1,m]}}),b=Wr(y,y.dtype,"min",t);let x;if(o){const T=Bt(h,u);x=oe({inputs:{x:b},backend:t,attrs:{shape:T}})}else x=oe({inputs:{x:b},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(b),c!=null&&t.disposeIntermediateTensorInfo(p),x}const E$={kernelName:yh,backendName:"webgl",kernelFunc:T$};const C$=ul+`
  return min(a, b);
`,I$=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+bs+`
  return result;
`,N$=ut({opSnippet:C$,packedOpSnippet:I$,cpuKernelImpl:wk}),$$={kernelName:xh,backendName:"webgl",kernelFunc:N$};class R${constructor(e,t,r){this.variableNames=["x"],this.outputShape=t.map((c,p)=>c[0]+e[p]+c[1]);const a=e.length,s=Be(a),o=t.map(c=>c[0]).join(","),i=t.map((c,p)=>c[0]+e[p]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a),l=r==="reflect"?0:1;if(a===1){this.userCode=`
        int start = ${o};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${o});
      ${s} end = ${s}(${i});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${a}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${u}));
      }
    `}}class _${constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((m,y)=>m[0]+e[y]+m[1]);const a=e.length,s=Be(a),o=t.map(m=>m[0]).join(","),i=t.map((m,y)=>m[0]+e[y]).join(","),u=ft("rc",a),l=ft("source",a),c=`${u[a-1]} < ${this.outputShape[a-1]}`,p=a===1?"source":`vec2(${l.slice(-2).join()})`,h=r==="reflect"?0:1;let d="";if(a===1){const m=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${h};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${h};
        }
        source -= start;
      `;d=`
        ${s} rc = outputLoc;
        ${m}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${u[a-1]} += 1;
        if(${c}) {
          ${m}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
      `}else{const m=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${h}) +
                gte * ((end - 1) * 2 - source + ${h});
        source -= start;
      `;d=`
        ${s} rc = outputLoc;
        ${m}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${u[a-1]} += 1;
        if(${c}) {
          ${m}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
        rc = outputLoc;
        ${u[a-2]} += 1;
        if(${u[a-2]} < ${this.outputShape[a-2]}) {
          ${m}
          result[2] = getChannel(getX(${l.join()}), ${p});
          ${u[a-1]} += 1;
          if(${c}) {
            ${m}
            result[3] = getChannel(getX(${l.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${o});
      const ${s} end = ${s}(${i});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}}const A$=({inputs:n,backend:e,attrs:t})=>{const{x:r}=n,{paddings:a,mode:s}=t,o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _$(r.shape,a,s):new R$(r.shape,a,s);return e.runWebGLProgram(o,[r],r.dtype)},O$={kernelName:bh,backendName:"webgl",kernelFunc:A$};const F$=`if (b == 0.0) return NAN;
  return mod(a, b);`,D$=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+bs+`
  return result;
`,M$=ut({opSnippet:F$,packedOpSnippet:D$}),L$={kernelName:vh,backendName:"webgl",kernelFunc:M$};class P${constructor(e,t,r){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}const B$=`
if (a == b) {
  return 1.0;
};
return a / b;`,U$=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Lm=ut({opSnippet:B$,packedOpSnippet:U$,checkOutOfBounds:!0}),V$={kernelName:Ap,backendName:"webgl",kernelFunc:Lm};const gc="return a - b;",Pm=ut({opSnippet:gc,packedOpSnippet:gc,supportsComplex:!0,cpuKernelImpl:Uk}),W$={kernelName:bd,backendName:"webgl",kernelFunc:Pm};function Bm(n){const{inputs:e,backend:t,attrs:r}=n,{logits:a}=e,{dim:s}=r,o=rt([s],a.shape),i=Mm({inputs:{x:a},backend:t,attrs:{reductionIndices:o,keepDims:!1}}),u=Bt(i.shape,o),l=oe({inputs:{x:i},backend:t,attrs:{shape:u}}),c=Pm({inputs:{a,b:l},backend:t}),p=Om({inputs:{x:c},backend:t}),h=Bo({inputs:{x:p},backend:t,attrs:{axis:o,keepDims:!1}}),d=oe({inputs:{x:h},backend:t,attrs:{shape:u}}),m=Lm({inputs:{a:p,b:d},backend:t});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),m}const z$={kernelName:ud,backendName:"webgl",kernelFunc:Bm};function G$(n){const{inputs:e,backend:t,attrs:r}=n,{logits:a}=e,{numSamples:s,seed:o,normalized:i}=r,u=i?a:Bm({inputs:{logits:a},backend:t,attrs:{dim:a.shape.length-1}}),l=u.shape[0],c=u.shape[1],p=new P$(l,c,s),h=[[o]],d=t.runWebGLProgram(p,[u],"int32",h);return i||t.disposeIntermediateTensorInfo(u),d}const j$={kernelName:wh,backendName:"webgl",kernelFunc:G$};const H$=tn+`
  return -x;
`,X$=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function q$(n){const{inputs:e,backend:t}=n,{x:r}=e;if(t.shouldExecuteOnCPU([r])){const s=t.texData.get(r.dataId),[o,i]=kk(s.values,r.shape,r.dtype);return t.makeTensorInfo(i,r.dtype,o)}let a;return H().getBool("WEBGL_PACK_UNARY_OPERATIONS")?a=new Ir(r.shape,X$):a=new $n(r.shape,H$),t.runWebGLProgram(a,[r],r.dtype)}const K$={kernelName:kh,backendName:"webgl",kernelFunc:q$};const Y$=p1;function Z$(n){ln("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:r}=n,{boxes:a,scores:s}=e,{maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=r,l=t.readSync(a.dataId),c=t.readSync(s.dataId),{selectedIndices:p}=Y$(l,c,o,i,u);return t.makeTensorInfo([p.length],"int32",new Int32Array(p))}const J$={kernelName:Eh,backendName:"webgl",kernelFunc:Z$};const Q$=h1;function e7(n){ln("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:r}=n,{boxes:a,scores:s}=e,{maxOutputSize:o,iouThreshold:i,scoreThreshold:u,padToMaxOutputSize:l}=r,c=t.readSync(a.dataId),p=t.readSync(s.dataId),{selectedIndices:h,validOutputs:d}=Q$(c,p,o,i,u,l);return[t.makeTensorInfo([h.length],"int32",new Int32Array(h)),t.makeTensorInfo([],"int32",new Int32Array([d]))]}const t7={kernelName:Ch,backendName:"webgl",kernelFunc:e7};const n7=d1;function r7(n){ln("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:r}=n,{boxes:a,scores:s}=e,{maxOutputSize:o,iouThreshold:i,scoreThreshold:u,softNmsSigma:l}=r,c=t.readSync(a.dataId),p=t.readSync(s.dataId),h=o,d=i,m=u,y=l,{selectedIndices:b,selectedScores:x}=n7(c,p,h,d,m,y);return[t.makeTensorInfo([b.length],"int32",new Int32Array(b)),t.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const a7={kernelName:Ih,backendName:"webgl",kernelFunc:r7};class s7{constructor(e,t,r,a){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${a}), float(${r}),
                      float(index == coords.y)));
      }
    `}}const o7=n=>{const{inputs:e,backend:t,attrs:r}=n,{indices:a}=e,{dtype:s,depth:o,onValue:i,offValue:u}=r,l=ae(a.shape),c=new s7(l,o,i,u),p=oe({inputs:{x:a},backend:t,attrs:{shape:[l]}}),h=t.runWebGLProgram(c,[p],s);t.disposeIntermediateTensorInfo(p);const d=[...a.shape,o],m=oe({inputs:{x:h},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(h),m},i7={kernelName:$h,backendName:"webgl",kernelFunc:o7};function fo(n){const{inputs:e,backend:t}=n,{x:r}=e;if(r.dtype==="complex64"){const a=ws({inputs:{input:r},backend:t}),s=fo({inputs:{x:a},backend:t}),o=Uo({inputs:{input:r},backend:t}),i=fo({inputs:{x:o},backend:t}),u=ir({inputs:{real:s,imag:i},backend:t});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),u}else return Ss({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype==="string"?"":0},backend:t})}const u7={kernelName:Id,backendName:"webgl",kernelFunc:fo};function Um(n){const{inputs:e,backend:t}=n,{x:r}=e;if(r.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(r.dtype==="complex64"){const a=ws({inputs:{input:r},backend:t}),s=Um({inputs:{x:a},backend:t}),o=Uo({inputs:{input:r},backend:t}),i=fo({inputs:{x:o},backend:t}),u=ir({inputs:{real:s,imag:i},backend:t});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),u}else return Ss({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:t})}const l7={kernelName:Nh,backendName:"webgl",kernelFunc:Um};function c7(n){const{inputs:e,backend:t,attrs:r}=n,{axis:a}=r;if(e.length===1)return cu({inputs:{input:e[0]},backend:t,attrs:{dim:a}});const s=e[0].shape,o=e[0].dtype;e.forEach(c=>{Lt(s,c.shape,"All tensors passed to stack must have matching shapes"),R(o===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});const i=[],u=e.map(c=>{const p=cu({inputs:{input:c},backend:t,attrs:{dim:a}});return i.push(p),p}),l=Em({inputs:u,backend:t,attrs:{axis:a}});return i.forEach(c=>t.disposeIntermediateTensorInfo(c)),l}const p7={kernelName:Rh,backendName:"webgl",kernelFunc:c7};class h7{constructor(e,t,r){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((l,c)=>l[0]+e[c]+l[1]);const a=e.length,s=Be(a),o=t.map(l=>l[0]).join(","),i=t.map((l,c)=>l[0]+e[c]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a);if(a===1){this.userCode=`
        int start = ${o};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${o});
      ${s} end = ${s}(${i});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${u}));
        }
      }
    `}}class d7{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((y,b)=>y[0]+e[b]+y[1]);const a=e.length,s=Be(a),o=t.map(y=>y[0]).join(","),i=t.map((y,b)=>y[0]+e[b]).join(","),u=ft("rc",a),l=ft("source",a),c=`${u[a-1]} < ${this.outputShape[a-1]}`,p=a===1?"source":`vec2(${l.slice(-2).join()})`,h=[`${s} rc = outputLoc;`,`${u[a-1]} += 1;
       if(${c}) {
      `,a===1?"":`}
       rc = outputLoc;
       ${u[a-2]} += 1;
       if(${u[a-2]} < ${this.outputShape[a-2]}) {`,a===1?"":`  ${u[a-1]} += 1;
         if(${c}) {`],d=a===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let m="";for(let y=0,b=a===1?2:4;y<b;y++)m+=`
        ${h[y]}
        if (${d}) {
          result[${y}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${y}] = getChannel(getX(${l.join()}), ${p});
        }
      `;m+=a===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${o});
      const ${s} end = ${s}(${i});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${m}
        setOutput(result);
      }
    `}}const Vm=n=>{const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{paddings:s,constantValue:o}=r;if(ae(a.shape)===0){const l=s.map((c,p)=>c[0]+a.shape[p]+c[1]);return Ss({backend:t,attrs:{shape:l,value:o,dtype:a.dtype}})}const i=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new d7(a.shape,s,o):new h7(a.shape,s,o),u=[[o]];return t.runWebGLProgram(i,[a],a.dtype,u)},f7={kernelName:_h,backendName:"webgl",kernelFunc:Vm};const m7=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,g7=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+bs+`
  return result;
`,y7=ut({opSnippet:m7,packedOpSnippet:g7}),x7={kernelName:Ah,backendName:"webgl",kernelFunc:y7};function b7(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,keepDims:o}=r,i=a.shape.length,u=[],l=rt(s,a.shape);let c=l;const p=Qt(c,i);let h=a;p!=null&&(h=yt({inputs:{x:a},backend:t,attrs:{perm:p}}),c=en(c.length,i),u.push(h)),hn("prod",c,i);let d;if(t.shouldExecuteOnCPU([h])){const m=t.texData.get(h.dataId).values,{outVals:y,outShape:b,outDtype:x}=Ek(h.shape,h.dtype,m,c);d=t.makeTensorInfo(b,x,y)}else{const[m,y]=kn(h.shape,c),b=ae(y),x=oe({inputs:{x:h},backend:t,attrs:{shape:[-1,b]}}),T=Ru(a.dtype),$=Wr(x,T,"prod",t);d=oe({inputs:{x:$},backend:t,attrs:{shape:m}}),u.push(x),u.push($)}if(o){u.push(d);const m=Bt(d.shape,l);d=oe({inputs:{x:d},backend:t,attrs:{shape:m}})}return u.forEach(m=>t.disposeIntermediateTensorInfo(m)),d}const v7={kernelName:Fh,backendName:"webgl",kernelFunc:b7};function w7(n){const{inputs:e,backend:t,attrs:r}=n,{paramsNestedSplits:a,paramsDenseValues:s,indices:o}=e,{outputRaggedRank:i}=r,u=a.map(x=>t.readSync(x.dataId)),l=a.map(x=>x.shape),c=t.readSync(s.dataId),p=t.readSync(o.dataId),[h,d,m]=Ck(u,l,c,s.shape,s.dtype,p,o.shape,i),y=h.map(x=>t.makeTensorInfo([x.length],"int32",x)),b=t.makeTensorInfo(m,s.dtype,d);return y.concat([b])}const S7={kernelName:Dh,backendName:"webgl",kernelFunc:w7};function k7(n){const{inputs:e,backend:t,attrs:r}=n,{shape:a,values:s,defaultValue:o,rowPartitionTensors:i}=e,{rowPartitionTypes:u}=r,l=t.readSync(a.dataId),c=t.readSync(s.dataId),p=t.readSync(o.dataId),h=i.map(b=>t.readSync(b.dataId)),d=i.map(b=>b.shape),[m,y]=Ik(l,a.shape,c,s.shape,s.dtype,p,o.shape,h,d,u);return t.makeTensorInfo(m,s.dtype,y)}const T7={kernelName:Mh,backendName:"webgl",kernelFunc:k7};const Wm=n=>{const{backend:e,attrs:t}=n,{start:r,stop:a,step:s,dtype:o}=t,i=Nk(r,a,s,o);return e.makeTensorInfo([i.length],o,i)},E7={kernelName:Lh,backendName:"webgl",kernelFunc:Wm};const C7="return 1.0 / x;",I7=Ie({opSnippet:C7}),N7={kernelName:Bh,backendName:"webgl",kernelFunc:I7};const $7=tn+`
  return (x < 0.0) ? 0.0 : x;
`,R7=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,_7=Ie({opSnippet:$7,packedOpSnippet:R7}),A7={kernelName:Uh,backendName:"webgl",kernelFunc:_7};const O7=tn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,F7=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,D7=Ie({opSnippet:O7,packedOpSnippet:F7}),M7={kernelName:Gh,backendName:"webgl",kernelFunc:D7};class L7{constructor(e,t,r,a,s){this.variableNames=["A"],this.outputShape=[];const[o,i,u,l]=e;this.outputShape=[o,t,r,l];const c=[a&&t>1?i-1:i,a&&r>1?u-1:u],p=[a&&t>1?t-1:t,a&&r>1?r-1:r];let h;s?h="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${i}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class P7{constructor(e,t,r,a,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[o,i,u,l]=e;this.outputShape=[o,t,r,l];const c=[a&&t>1?i-1:i,a&&r>1?u-1:u],p=[a&&t>1?t-1:t,a&&r>1?r-1:r];let h;s?h="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${i}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function B7(n){const{inputs:e,backend:t,attrs:r}=n,{images:a}=e,{alignCorners:s,halfPixelCenters:o,size:i}=r,[u,l]=i,c=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new P7(a.shape,u,l,s,o):new L7(a.shape,u,l,s,o);return t.runWebGLProgram(c,[a],"float32")}const U7={kernelName:zh,backendName:"webgl",kernelFunc:B7};class V7{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,a,s]=t,[,o,i]=e,u=[r&&o>1?a-1:a,r&&i>1?s-1:s],l=[r&&o>1?o-1:o,r&&i>1?i-1:i],c=u[0]/l[0],p=u[1]/l[1],h=1/c,d=1/p,m=Math.ceil(h)*2+2,y=Math.ceil(d)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${d});

        const int winHeight = int(${m});
        const int winWidth = int(${y});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${o}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${a-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function W7(n){const{inputs:e,backend:t,attrs:r}=n,{images:a,dy:s}=e,{alignCorners:o}=r,i=new V7(s.shape,a.shape,o);return t.runWebGLProgram(i,[s],s.dtype)}const z7={kernelName:L2,backendName:"webgl",kernelFunc:W7};class G7{constructor(e,t,r,a,s){this.variableNames=["A"],this.outputShape=[];const[o,i,u,l]=e;this.outputShape=[o,t,r,l];const c=[a&&t>1?i-1:i,a&&r>1?u-1:u],p=[a&&t>1?t-1:t,a&&r>1?r-1:r],h=a?"0.5":"0.0";let d;s?d="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${i}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class j7{constructor(e,t,r,a,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[o,i,u,l]=e;this.outputShape=[o,t,r,l];const c=[a&&t>1?i-1:i,a&&r>1?u-1:u],p=[a&&t>1?t-1:t,a&&r>1?r-1:r],h=a?"0.5":"0.0";let d;s?d="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${i}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function H7(n){const{inputs:e,backend:t,attrs:r}=n,{images:a}=e,{alignCorners:s,halfPixelCenters:o,size:i}=r,[u,l]=i,c=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new j7(a.shape,u,l,s,o):new G7(a.shape,u,l,s,o);return t.runWebGLProgram(c,[a],a.dtype)}const X7={kernelName:Wh,backendName:"webgl",kernelFunc:H7};class q7{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,a,s]=t,[,o,i]=e,u=[r&&o>1?a-1:a,r&&i>1?s-1:s],l=[r&&o>1?o-1:o,r&&i>1?i-1:i],c=u[0]/l[0],p=u[1]/l[1],h=1/c,d=1/p,m=Math.ceil(h)*2+2,y=Math.ceil(d)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${d});

        const int winHeight = int(${m});
        const int winWidth = int(${y});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${o}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float sourceFracRow =
              float(${u[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${u[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${a}) - 1),
                ${r} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${r} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function K7(n){const{inputs:e,backend:t,attrs:r}=n,{images:a,dy:s}=e,{alignCorners:o}=r,i=new q7(s.shape,a.shape,o);return t.runWebGLProgram(i,[s],s.dtype)}const Y7={kernelName:M2,backendName:"webgl",kernelFunc:K7};class Z7{constructor(e,t){this.variableNames=["x"];const r=e.length;if(r>4)throw new Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);if(this.outputShape=e,r===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const a=i=>t.indexOf(i)!==-1&&e[i]!==1?`${e[i]} - coords[${i}] - 1`:`coords[${i}]`,s=e.map((i,u)=>a(u)).join(","),o=Be(r);this.userCode=`
      void main() {
        ${o} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}}class J7{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const r=e.length;if(r>4)throw new Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);this.outputShape=e;const a=ft("rc",r),s=`${a[r-1]} + 1 < ${this.outputShape[r-1]}`,o=`${a[r-2]} + 1 < ${this.outputShape[r-2]}`,i=Be(r);r===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${i} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${u(a.slice())};
          if(${s}){
            result.g = ${l(a.slice())};
          }
          if(${o}) {
            result.b = ${c(a.slice())};
            if(${s}) {
              result.a = ${p(a.slice())};
            }
          }
          setOutput(result);
        }
    `;function u(m){return h(m)}function l(m){return m[r-1]="("+m[r-1]+" + 1)",h(m)}function c(m){return m[r-2]="("+m[r-2]+" + 1)",h(m)}function p(m){return m[r-1]="("+m[r-1]+" + 1)",m[r-2]="("+m[r-2]+" + 1)",h(m)}function h(m){const y=e.map((T,$)=>d($,m)),b=y.join(","),x=y.slice(-2).join(",");return`getChannel(getX(${b}), vec2(${x}))`}function d(m,y){return t.indexOf(m)!==-1&&e[m]!==1?`${e[m]} - ${y[m]} - 1`:`${y[m]}`}}}function Q7(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{dims:s}=r,o=a.shape.length,i=rt(s,a.shape);if(o===0)return Rt({inputs:{x:a},backend:t});const u=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new J7(a.shape,i):new Z7(a.shape,i);return t.runWebGLProgram(u,[a],a.dtype)}const e8={kernelName:jh,backendName:"webgl",kernelFunc:Q7};class t8{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const r=e[1],a=e[2];this.outputShape=e;let s="";typeof t=="number"?s=`float outputValue = ${t.toFixed(2)};`:s=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${a} && coordY >= 0 && coordY < ${r}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const n8={kernelName:$d,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:r}=n,{radians:a,fillValue:s,center:o}=e,i=t,u=new t8(r.shape,s),[l,c]=b1(o,r.shape[1],r.shape[2]),p=[[l,c,Math.sin(a),Math.cos(a)]];return i.runWebGLProgram(u,[r],r.dtype,p)}};const r8=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,a8=Ie({opSnippet:r8}),s8={kernelName:Hh,backendName:"webgl",kernelFunc:a8};const o8="return inversesqrt(x);",i8=Ie({opSnippet:o8,cpuKernelImpl:$k}),u8={kernelName:Xh,backendName:"webgl",kernelFunc:i8};class zm{constructor(e,t,r,a,s,o,i=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=o;const u=Be(s.length),l=Be(o.length);let c="";r===1?c="i":r===2&&(c="i, j");const p=`getIndices(${c})`;let h="";a===1?h="i":a===2&&(h="i, coords[1]");const d=`getUpdates(${h})`,m=t>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${p});
              flattenedIndex += index * ${m};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${d};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}}function l8(n){const{inputs:e,backend:t,attrs:r}=n,{indices:a,updates:s}=e,{shape:o}=r,{sliceRank:i,numUpdates:u,sliceSize:l,strides:c,outputSize:p}=Mu(s,a,o),h=[p/l,l];if(p===0)return t.makeTensorInfo(o,a.dtype);const d=oe({inputs:{x:a},backend:t,attrs:{shape:[u,i]}}),m=oe({inputs:{x:s},backend:t,attrs:{shape:[u,l]}}),y=t.makeTensorInfo([],"float32",new Float32Array([0])),b=new zm(u,i,d.shape.length,m.shape.length,c,h),x=t.runWebGLProgram(b,[m,d,y],m.dtype),T=oe({inputs:{x},backend:t,attrs:{shape:o}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(y),T}const c8={kernelName:qh,backendName:"webgl",kernelFunc:l8};class p8{constructor(e,t,r,a){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,r];const s="while (left < right) {",o=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,i=H().getNumber("WEBGL_VERSION")===2?s:o,u=a==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${i}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${u} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function h8(n){const{inputs:e,backend:t,attrs:r}=n,{sortedSequence:a,values:s}=e,{side:o}=r,i=new p8(a.shape[0],a.shape[1],s.shape[1],o),u=[[a.shape[1]]];return t.runWebGLProgram(i,[a,s],"int32",u)}const d8={kernelName:Kh,backendName:"webgl",kernelFunc:h8};class f8{constructor(e,t,r){this.variableNames=["c","a","b"],this.outputShape=t;let a,s;if(r>4)throw Error(`Where for rank ${r} is not yet supported`);if(r===1)s="resRC",a="resRC";else{const i=["resRC.x","resRC.y","resRC.z","resRC.w"],u=[],l=[];for(let c=0;c<t.length;c++)l.push(`${i[c]}`),c<e&&u.push(`${i[c]}`);a=u.join(),s=l.join()}const o=Be(r);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        float cVal = getC(${a});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}}function m8(n){const{inputs:e,backend:t}=n,{condition:r,t:a,e:s}=e,o=new f8(r.shape.length,a.shape,a.shape.length);return t.runWebGLProgram(o,[r,a,s],Sn(a.dtype,s.dtype))}const g8={kernelName:Yh,backendName:"webgl",kernelFunc:m8};const y8=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${S1};
  float scale = ${k1};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,x8=Ie({opSnippet:y8}),b8={kernelName:Zh,backendName:"webgl",kernelFunc:x8};const v8=Ca+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,w8=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,S8=Ie({opSnippet:v8,packedOpSnippet:w8,cpuKernelImpl:_k}),k8={kernelName:nd,backendName:"webgl",kernelFunc:S8};const T8=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,E8=Ie({opSnippet:T8}),C8={kernelName:td,backendName:"webgl",kernelFunc:E8};const I8=Ca+`
  return sin(x);
`,N8=Ie({opSnippet:I8}),$8={kernelName:Qh,backendName:"webgl",kernelFunc:N8};const R8=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,_8=Ie({opSnippet:R8}),A8={kernelName:ed,backendName:"webgl",kernelFunc:_8};const O8=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,F8=Ie({opSnippet:O8}),D8={kernelName:rd,backendName:"webgl",kernelFunc:F8};const M8=n=>{const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{blockShape:s,paddings:o}=r;R(a.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const i=s.reduce((x,T)=>x*T),u=[[0,0]];u.push(...o);for(let x=1+s.length;x<a.shape.length;++x)u.push([0,0]);const l=[],c=Vm({inputs:{x:a},backend:t,attrs:{paddings:u,constantValue:0}}),p=el(c.shape,s,i,!1),h=tl(p.length,s.length,!1),d=nl(c.shape,s,i,!1),m=oe({inputs:{x:c},backend:t,attrs:{shape:p}}),y=yt({inputs:{x:m},backend:t,attrs:{perm:h}}),b=oe({inputs:{x:y},backend:t,attrs:{shape:d}});return l.push(c),l.push(m),l.push(y),l.forEach(x=>t.disposeIntermediateTensorInfo(x)),b},L8={kernelName:od,backendName:"webgl",kernelFunc:M8};function P8(n){const{inputs:e,backend:t}=n,{indices:r,values:a,denseShape:s,defaultValue:o}=e;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(r.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(a.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${a.shape}`);if(o.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${o.shape}`);const i=t.readSync(r.dataId),u=t.readSync(a.dataId),l=t.readSync(s.dataId),c=t.readSync(o.dataId)[0],[p,h,d,m,y]=Ok(i,r.shape,r.dtype,u,a.dtype,l,c);return[t.makeTensorInfo(h,r.dtype,p),t.makeTensorInfo([h[0]],a.dtype,d),t.makeTensorInfo([m.length],"bool",new Uint8Array(m.map(b=>Number(b)))),t.makeTensorInfo([y.length],r.dtype,new Int32Array(y))]}const B8={kernelName:ld,backendName:"webgl",kernelFunc:P8};function U8(n){const{inputs:e,backend:t}=n,{inputIndices:r,inputShape:a,newShape:s}=e;if(r.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${r.shape}`);if(a.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${a.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const o=Array.from(t.readSync(a.dataId)),i=t.readSync(r.dataId),u=Array.from(t.readSync(s.dataId)),[l,c,p]=Fk(i,r.shape,r.dtype,o,u);return[t.makeTensorInfo(c,r.dtype,l),t.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}const V8={kernelName:cd,backendName:"webgl",kernelFunc:U8};function W8(n){const{inputs:e,backend:t}=n,{data:r,indices:a,segmentIds:s}=e;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(a.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${a.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);const o=t.readSync(r.dataId),i=t.readSync(a.dataId),u=t.readSync(s.dataId),[l,c]=hm(o,r.shape,r.dtype,i,u,!0);return t.makeTensorInfo(c,r.dtype,l)}const z8={kernelName:pd,backendName:"webgl",kernelFunc:W8};function G8(n){const{inputs:e,backend:t}=n,{data:r,indices:a,segmentIds:s}=e;if(r.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(a.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${a.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);const o=t.readSync(r.dataId),i=t.readSync(a.dataId),u=t.readSync(s.dataId),[l,c]=hm(o,r.shape,r.dtype,i,u);return t.makeTensorInfo(c,r.dtype,l)}const j8={kernelName:hd,backendName:"webgl",kernelFunc:G8};function H8(n){const{inputs:e,backend:t,attrs:r}=n,{sparseIndices:a,sparseValues:s,defaultValue:o}=e,{outputShape:i}=r,{sliceRank:u,numUpdates:l,sliceSize:c,strides:p,outputSize:h}=Mu(s,a,i),d=!1;if(s.dtype==="string"){const x=t.bufferSync(a),T=t.bufferSync(s),$=ca(t.readSync(o.dataId)[0]),F=Rk(x,T,i,h,c,l,u,p,$,d);return t.makeTensorInfo(i,F.dtype,F.values)}const m=new zm(l,u,a.shape.length,s.shape.length,p,[h,1],d),y=t.runWebGLProgram(m,[s,a,o],s.dtype),b=oe({inputs:{x:y},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(y),b}const X8={kernelName:dd,backendName:"webgl",kernelFunc:H8};function q8(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{numOrSizeSplits:s,axis:o}=r,i=rt(o,a.shape)[0],u=D1(a,s,i),l=a.shape.length,c=new Array(l).fill(0),p=a.shape.slice();return u.map(h=>{const d=[...p];d[i]=h;const m=Ia({inputs:{x:a},backend:t,attrs:{begin:c,size:d}});return c[i]+=h,m})}const K8={kernelName:id,backendName:"webgl",kernelFunc:q8};const yc="return sqrt(x);",Y8=Ie({opSnippet:yc,packedOpSnippet:yc,cpuKernelImpl:Dk}),Z8={kernelName:ad,backendName:"webgl",kernelFunc:Y8};const J8="return x * x;",Q8=Ie({opSnippet:J8}),e9={kernelName:P2,backendName:"webgl",kernelFunc:Q8};const xc="return (a - b) * (a - b);",t9=ut({opSnippet:xc,packedOpSnippet:xc}),n9={kernelName:fd,backendName:"webgl",kernelFunc:t9};function r9({inputs:n,attrs:e,backend:t}){const{x:r}=n,a=tn+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,s=new $n(r.shape,a);return t.runWebGLProgram(s,[r],r.dtype)}const a9={kernelName:Nd,backendName:"webgl",kernelFunc:r9};class s9{constructor(e,t,r){this.variableNames=["x"],this.outputShape=r;const a=r.length,s=Be(r.length),o=Be(r.length);let i="";if(a===1)i="coords * strides + begin";else{let u=0;i=r.map((l,c)=>(u++,r.length===1?`coords * strides[${c}] + begin[${c}]`:`coords[${u-1}] * strides[${c}] + begin[${c}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${e});
      ${s} strides = ${s}(${t});

      void main() {
        ${o} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}}function o9(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{begin:s,end:o,strides:i,beginMask:u,endMask:l,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:h}=r,{finalShapeSparse:d,finalShape:m,isIdentity:y,sliceDim0:b,isSimpleSlice:x,begin:T,end:$,strides:F}=Cf(a.shape,s,o,i,u,l,c,p,h);let M;if(y)M=oe({inputs:{x:a},backend:t,attrs:{shape:m}});else if(b||x){R(a.shape.length>=1,()=>`Input must have rank at least 1, got: ${a.shape.length}`);const X=gf(T,$,F),z=Ia({inputs:{x:a},backend:t,attrs:{begin:T,size:X}});M=oe({inputs:{x:z},backend:t,attrs:{shape:m}}),t.disposeIntermediateTensorInfo(z)}else if(t.shouldExecuteOnCPU([a])){const X=t.readSync(a.dataId),z=He(a.shape,a.dtype,X),L=Mk(d,z,F,T);M=t.makeTensorInfo(m,a.dtype,L.values)}else{const X=new s9(T,F,d);M=t.runWebGLProgram(X,[a],a.dtype)}const U=oe({inputs:{x:M},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(M),U}const i9={kernelName:md,backendName:"webgl",kernelFunc:o9};function u9(n){const{inputs:e,backend:t,attrs:r}=n,{separator:a,nGramWidths:s,leftPad:o,rightPad:i,padWidth:u,preserveShortSequences:l}=r,{data:c,dataSplits:p}=e,h=t.readSync(c.dataId),d=t.readSync(p.dataId),[m,y]=Lk(h,d,a,s,o,i,u,l);return[t.makeTensorInfo([m.length],"string",m),t.makeTensorInfo(p.shape,"int32",y)]}const l9={kernelName:gd,backendName:"webgl",kernelFunc:u9};function c9(n){const{inputs:e,backend:t,attrs:r}=n,{skipEmpty:a}=r,{input:s,delimiter:o}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(o.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);const i=t.readSync(s.dataId),u=t.readSync(o.dataId)[0],[l,c,p]=Pk(i,u,a),h=c.length;return[t.makeTensorInfo([h,2],"int32",l),t.makeTensorInfo([h],"string",c),t.makeTensorInfo([2],"int32",new Int32Array(p))]}const p9={kernelName:yd,backendName:"webgl",kernelFunc:c9};function h9(n){const{inputs:e,backend:t,attrs:r}=n,{numBuckets:a}=r,{input:s}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(a<=0)throw new Error("Number of buckets must be at least 1");const o=t.readSync(s.dataId),i=Bk(o,a);return t.makeTensorInfo(s.shape,"int32",i)}const d9={kernelName:xd,backendName:"webgl",kernelFunc:h9};const f9="return tan(x);",m9=Ie({opSnippet:f9}),g9={kernelName:vd,backendName:"webgl",kernelFunc:m9};const y9=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,x9=Ie({opSnippet:y9}),b9={kernelName:wd,backendName:"webgl",kernelFunc:x9};class v9{constructor(e,t){this.variableNames=["A"];const r=new Array(e.length);for(let o=0;o<r.length;o++)r[o]=e[o]*t[o];this.outputShape=r,this.rank=r.length;const a=Be(this.rank),s=w9(e);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}}function w9(n){const e=n.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${n[0]})`;const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[];for(let a=0;a<n.length;a++)r.push(`imod(${t[a]}, ${n[a]})`);return r.join()}function Gm(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{reps:s}=r;if(a.dtype==="string"||a.shape.length>5){const i=t.readSync(a.dataId),u=a.dtype==="string"?i.map(p=>ca(p)):i,l=He(a.shape,a.dtype,u),c=Vk(l,s);return t.makeTensorInfo(c.shape,c.dtype,c.values)}const o=new v9(a.shape,s);return t.runWebGLProgram(o,[a],a.dtype)}const S9={kernelName:$u,backendName:"webgl",kernelFunc:Gm};class k9{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class T9{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function vr(n,e){e!==null&&n.disposeIntermediateTensorInfo(e)}function bc(n){let e=1;for(;e<n;)e*=2;return e}function E9(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{k:s,sorted:o}=r,i=H().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),u=H().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=a.shape,c=l[l.length-1];if(t.shouldExecuteOnCPU([a])||c<i||s>u){const L=t.readSync(a.dataId),[C,q]=Wk(L,l,a.dtype,s,o);return[t.makeTensorInfo(C.shape,C.dtype,C.values),t.makeTensorInfo(q.shape,q.dtype,q.values)]}if(s===0)return l[l.length-1]=0,[t.makeTensorInfo(l,a.dtype,[]),t.makeTensorInfo(l,"int32",[])];if(c===1)return[a,Ss({attrs:{shape:l,dtype:"int32",value:0},backend:t})];const p=t.texData.get(a.dataId),h=p!==null&&p.isPacked,d=h?t.unpackTensor(a):a,m=ae(l)/c,y=oe({inputs:{x:d},attrs:{shape:[m,c]},backend:t});h&&vr(t,d);const b=bc(s),x=bc(c);let T=null;const $=()=>T===null?[y,y]:[y,T],F=(L,C,q)=>{const ee=$(),te=new k9(q),le=[[c],[T===null?1:0],[Number.NEGATIVE_INFINITY],[L],[C]],de=T;T=t.runWebGLProgram(te,ee,"int32",le),vr(t,de)};for(let L=1;L<b;L*=2){const C=L*2;for(let q=L;q>=1;q/=2)F(C,q,[m,x])}for(let L=x;L>b;L/=2){const C=$(),q=new T9([m,L/2]),ee=[[c],[T===null?1:0],[b]],te=T;T=t.runWebGLProgram(q,C,"int32",ee),vr(t,te);const le=b/2,de=le*2;for(let fe=le;fe>=1;fe/=2)F(de,fe,T.shape)}let M=T;T=Ia({inputs:{x:T},backend:t,attrs:{begin:0,size:[m,s]}}),vr(t,M);let U=Dm({inputs:{x:y,indices:T},backend:t,attrs:{axis:1,batchDims:1}});vr(t,y);const X=l.slice(0,-1);X.push(s),M=T,T=oe({inputs:{x:T},attrs:{shape:X},backend:t}),vr(t,M);const z=U;return U=oe({inputs:{x:U},attrs:{shape:X},backend:t}),vr(t,z),[U,T]}const C9={kernelName:Sd,backendName:"webgl",kernelFunc:E9};class I9{constructor(e,t,r,a,s,o){this.variableNames=["Image","Transforms"],this.outputShape=o;const i=r==="nearest"?1:2;let u;switch(a){case"constant":u=1;break;case"reflect":u=2;break;case"wrap":u=3;break;case"nearest":u=4;break;default:u=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${u} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${u} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${u} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${i} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function N9(n){const{inputs:e,backend:t,attrs:r}=n,{image:a,transforms:s}=e,{interpolation:o,fillMode:i,fillValue:u,outputShape:l}=r,[c,p,h,d]=a.shape,[m,y]=l??[p,h],b=[c,m,y,d],x=new I9(p,h,o,i,u,b);return t.runWebGLProgram(x,[a,s],"float32")}const $9={kernelName:kd,backendName:"webgl",kernelFunc:N9};function R9(n){const{inputs:e,attrs:t,backend:r}=n,{axis:a}=t,{x:s}=e;ys(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const o=r.readSync(s.dataId),{outputValues:i,outputShape:u,indices:l}=zk(o,a,s.shape,s.dtype);return[r.makeTensorInfo(u,s.dtype,i),r.makeTensorInfo([l.length],"int32",l)]}const _9={kernelName:Td,backendName:"webgl",kernelFunc:R9};function A9(n){const{inputs:e,backend:t,attrs:r}=n,{value:a}=e;let{axis:s}=r;s<0&&(s+=a.shape.length);const o=a,i=o.shape.length,u=a.shape[s],l=new Array(i-1);let c=0;for(let y=0;y<i;y++)y!==s&&(l[c++]=o.shape[y]);const p=[],h=new Array(i).fill(0),d=o.shape.slice();d[s]=1;const m=new Array(u);for(let y=0;y<m.length;y++){h[s]=y;const b=Ia({inputs:{x:o},backend:t,attrs:{begin:h,size:d}}),x=oe({inputs:{x:b},backend:t,attrs:{shape:l}});m[y]=x,p.push(b)}return p.forEach(y=>t.disposeIntermediateTensorInfo(y)),m}const O9={kernelName:Ed,backendName:"webgl",kernelFunc:A9};class F9{constructor(e,t){this.variableNames=["x","segmentIds"];const r=e.windowSize,a=e.batchSize,s=e.inSize,o=e.numSegments,i=o*Math.ceil(s/r);this.outputShape=[a,i];const u="0.0",l="sumValue",c=Math.floor(r/4)*4,p=r%4,h=`
        sumValue += dot(values, segFilter);
    `;let d="";s%r>0&&(d=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let m="";s%r>0&&(m=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${u};

      float getValue(int batch, int inIdx) {
        ${d}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${m}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${o})) * float(${r}));
        int currentSeg = int(mod(float(outIdx), float(${o})));

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${h}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${h}
        } else if (${p===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${h}
        } else if (${p===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}function D9(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,segmentIds:s}=e,{numSegments:o}=r,i=a.shape.length,u=[];let l=0;const c=Qt([l],i);let p=a;c!=null&&(p=yt({inputs:{x:a},backend:t,attrs:{perm:c}}),u.push(p),l=en(1,i)[0]);const h=q1(p.shape,l,o),d=ae([p.shape[l]]),m=oe({inputs:{x:p},backend:t,attrs:{shape:[-1,d]}});u.push(m);const y=Ru(a.dtype),b=(F,M,U,X,z)=>{const L=F.shape[0],C=F.shape[1],q=X1(C,z),ee={windowSize:q,inSize:C,batchSize:L,numSegments:z},te=new F9(ee,M),le=t.compileAndRun(te,[F,U],X);if(u.push(le),le.shape[1]===z)return le;const de=Wm({backend:t,attrs:{start:0,stop:z,step:1,dtype:"float32"}}),fe=Gm({inputs:{x:de},backend:t,attrs:{reps:[C/q]}});return u.push(de),u.push(fe),b(le,M,fe,X,z)},x=b(m,"unsortedSegmentSum",s,y,o),T=oe({inputs:{x},backend:t,attrs:{shape:h}});let $=T;if(c!=null){u.push(T);const F=zu(c);$=yt({inputs:{x:$},backend:t,attrs:{perm:F}})}return u.forEach(F=>t.disposeIntermediateTensorInfo(F)),$}const M9={kernelName:Cd,backendName:"webgl",kernelFunc:D9};const L9=[FT,MT,BT,WT,GT,XT,KT,ZT,tE,rE,oE,lE,hE,gE,bE,wE,kE,IE,$E,_E,DE,WE,GE,HE,JE,eC,aC,yT,iC,hC,gC,SC,TC,CC,NC,RC,OC,MC,BC,VC,zC,jC,qC,YC,eI,nI,sI,uI,cI,fI,xI,SI,EI,NI,$I,_I,OI,DI,LI,BI,zI,HI,KI,ZI,eN,rN,iN,pN,gT,dN,cC,gN,bN,SN,bT,CN,RN,AN,MN,BN,zN,HN,YN,e$,r$,s$,l$,p$,d$,y$,b$,w$,k$,E$,$$,O$,L$,j$,ST,K$,J$,t7,a7,qE,i7,l7,p7,f7,x7,wT,v7,S7,T7,E7,KE,V$,N7,A7,M7,TT,U7,z7,X7,Y7,e8,n8,s8,u8,c8,d8,g8,b8,k8,C8,$8,A8,UE,z$,D8,L8,B8,V8,z8,j8,X8,K8,Z8,e9,n9,a9,i9,l9,p9,d9,W$,_T,g9,b9,S9,C9,$9,AT,_9,O9,M9,u7];for(const n of L9)V2(n);const P9=H();P9.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var qt;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(qt||(qt={}));var vc;(function(n){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(vc||(vc={}));const B9={};function jm(n){return B9[n]}function w(n,e,t,r,a){const s=e.inputParams[n];if(s&&s.inputIndexStart!==void 0){const i=s.inputIndexStart,u=s.inputIndexEnd===0?void 0:s.inputIndexEnd===void 0?i+1:s.inputIndexEnd;if(s.type==="tensor")return mt(e.inputNames[s.inputIndexStart],t,r,a);if(s.type==="tensors")return e.inputNames.slice(i,u).map(p=>mt(p,t,r,a));const l=mt(e.inputNames.slice(i)[0],t,r,a),c=l.dataSync();return s.type==="number"?c[0]:Ni(l.shape,c)}const o=e.attrParams[n];return o&&o.value}function mt(n,e,t,r){const[a,s]=Nt(n);if(r!=null){const i=r.getHashTableHandleByName(a);if(i!=null)return i}const o=t.currentContextIds.find(i=>!!e[mo(a,i)]);return o!==void 0?e[mo(a,o)][s]:void 0}function U9(n,e,t){return e[mo(n,t.currentContextId)]}function xn(n,e){const[t,r,a]=Nt(n);return[mo(t,e&&e.currentContextId),r,a]}function mo(n,e){return e?`${n}-${e}`:n}function Nt(n){const e=n.split(":");if(e.length===1)return[n,0,void 0];const t=e[0],r=e.length===3?e[1]:void 0,a=Number(e[e.length-1]);return[t,a,r]}function Qs(n,e,t){let r=w("pad",n,e,t);if(r==="explicit"){r=w("explicitPaddings",n,e,t);const a=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)a[s][0]=r[s*2],a[s][1]=r[s*2+1];return a}return r}function In(n){return n.kept?n:Jn(n)}const V9=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],W9=Object.freeze(Object.defineProperty({__proto__:null,json:V9},Symbol.toStringTag,{value:"Module"}));const z9=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],G9=Object.freeze(Object.defineProperty({__proto__:null,json:z9},Symbol.toStringTag,{value:"Module"}));const j9=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],H9=Object.freeze(Object.defineProperty({__proto__:null,json:j9},Symbol.toStringTag,{value:"Module"}));const X9=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],q9=Object.freeze(Object.defineProperty({__proto__:null,json:X9},Symbol.toStringTag,{value:"Module"}));const K9=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],Y9=Object.freeze(Object.defineProperty({__proto__:null,json:K9},Symbol.toStringTag,{value:"Module"}));const Z9=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],J9=Object.freeze(Object.defineProperty({__proto__:null,json:Z9},Symbol.toStringTag,{value:"Module"}));const Q9=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],eR=Object.freeze(Object.defineProperty({__proto__:null,json:Q9},Symbol.toStringTag,{value:"Module"}));const tR=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],nR=Object.freeze(Object.defineProperty({__proto__:null,json:tR},Symbol.toStringTag,{value:"Module"}));const rR=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}],aR=Object.freeze(Object.defineProperty({__proto__:null,json:rR},Symbol.toStringTag,{value:"Module"}));const sR=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],oR=Object.freeze(Object.defineProperty({__proto__:null,json:sR},Symbol.toStringTag,{value:"Module"}));const iR=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],uR=Object.freeze(Object.defineProperty({__proto__:null,json:iR},Symbol.toStringTag,{value:"Module"}));const lR=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}],cR=Object.freeze(Object.defineProperty({__proto__:null,json:lR},Symbol.toStringTag,{value:"Module"}));const pR=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],hR=Object.freeze(Object.defineProperty({__proto__:null,json:pR},Symbol.toStringTag,{value:"Module"}));const dR=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],fR=Object.freeze(Object.defineProperty({__proto__:null,json:dR},Symbol.toStringTag,{value:"Module"}));const mR=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],gR=Object.freeze(Object.defineProperty({__proto__:null,json:mR},Symbol.toStringTag,{value:"Module"}));const yR=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],xR=Object.freeze(Object.defineProperty({__proto__:null,json:yR},Symbol.toStringTag,{value:"Module"}));const bR=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],vR=Object.freeze(Object.defineProperty({__proto__:null,json:bR},Symbol.toStringTag,{value:"Module"}));const wR=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],SR=Object.freeze(Object.defineProperty({__proto__:null,json:wR},Symbol.toStringTag,{value:"Module"}));const kR=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],TR=Object.freeze(Object.defineProperty({__proto__:null,json:kR},Symbol.toStringTag,{value:"Module"}));class wc{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[W9,G9,H9,q9,Y9,J9,eR,nR,aR,oR,uR,cR,hR,fR,gR,xR,vR,SR,TR],t=[].concat(...e.map(r=>r.json));this.opMappers=t.reduce((r,a)=>(r[a.tfOpName]=a,r),{})}transformGraph(e,t={}){const r=e.node,a=[],s=[],o=[],i=r.reduce((y,b)=>(y[b.name]=this.mapNode(b),b.op.startsWith("Placeholder")?a.push(y[b.name]):b.op==="Const"?s.push(y[b.name]):(b.input==null||b.input.length===0)&&o.push(y[b.name]),y),{});let u=[];const l=[];let c={},p={};t!=null&&(c=this.mapSignatureEntries(t.inputs),p=this.mapSignatureEntries(t.outputs));const h=Object.keys(i);h.forEach(y=>{const b=i[y];b.inputNames.forEach((x,T)=>{const[$,,F]=xn(x),M=i[$];if(M.outputs!=null){const U=M.outputs.indexOf(F);if(U!==-1){const X=`${$}:${U}`;b.inputNames[T]=X}}b.inputs.push(M),M.children.push(b)})}),Object.keys(p).length===0?h.forEach(y=>{const b=i[y];b.children.length===0&&l.push(b)}):Object.keys(p).forEach(y=>{const[b]=xn(y),x=i[b];x!=null&&(x.signatureKey=p[y],l.push(x))}),Object.keys(c).length>0?Object.keys(c).forEach(y=>{const[b]=xn(y),x=i[b];x&&(x.signatureKey=c[y],u.push(x))}):u=a;let d={};e.library!=null&&e.library.function!=null&&(d=e.library.function.reduce((y,b)=>(y[b.signature.name]=this.mapFunction(b),y),{}));const m={nodes:i,inputs:u,outputs:l,weights:s,placeholders:a,signature:t,functions:d};return o.length>0&&(m.initNodes=o),m}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,r)=>(t[e[r].name]=r,t),{})}mapNode(e){const t=jm(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(a=>a.startsWith("^")?a.slice(1):a),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(r.inputParams=t.inputs.reduce((a,s)=>(a[s.name]={type:s.type,inputIndexStart:s.start,inputIndexEnd:s.end},a),{})),t.attrs!=null&&(r.attrParams=t.attrs.reduce((a,s)=>{const o=s.type;let i;switch(s.type){case"string":i=pu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=pu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"string[]":i=xu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=xu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number":i=du(e.attr,s.tfName,s.defaultValue||0),i===void 0&&s.tfDeprecatedName&&(i=du(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number[]":i=yu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=yu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool":i=hu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=hu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool[]":i=vu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=vu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape":i=gu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=gu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape[]":i=bu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=bu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype":i=fu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=fu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype[]":i=mu(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=mu(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"func":i=Sc(e.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Sc(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${s.type} for op: ${e.op}`)}return a[s.name]={value:i,type:o},a},{})),r}mapFunction(e){const t=e.nodeDef,r=[],a=[];let s={};t!=null&&(s=t.reduce((c,p)=>(c[p.name]=this.mapNode(p),p.op==="Const"&&a.push(c[p.name]),c),{}));const o=[],i=[];e.signature.inputArg.forEach(c=>{const[p]=xn(c.name),h={name:p,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:pl(c.type),type:"dtype"}},children:[]};h.signatureKey=c.name,o.push(h),s[p]=h}),Object.keys(s).forEach(c=>{const p=s[c];p.inputNames.forEach((h,d)=>{const[m,,y]=xn(h),b=s[m];if(b.outputs!=null){const x=b.outputs.indexOf(y);if(x!==-1){const T=`${m}:${x}`;p.inputNames[d]=T}}p.inputs.push(b),b.children.push(p)})});const u=e.ret;e.signature.outputArg.forEach(c=>{const[p,h]=xn(u[c.name]),d=s[p];d!=null&&(d.defaultOutput=h,i.push(d))});const l=this.mapArgsToSignature(e);return{nodes:s,inputs:o,outputs:i,weights:a,placeholders:r,signature:l}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r),t),{}),outputs:e.signature.outputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r,e.ret),t),{})}}mapArgToTensorInfo(e,t){let r=e.name;return t!=null&&(r=t[r]),{name:r,dtype:e.type}}}function ER(n){const e=H().global;if(typeof e.atob<"u")return e.atob(n);if(typeof Buffer<"u")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Hm(n,e){const t=Array.isArray(n)?String.fromCharCode.apply(null,n):ER(n);return e?t:t.toLowerCase()}function pu(n,e,t,r=!1){const a=n[e];return a!=null?Hm(a.s,r):t}function hu(n,e,t){const r=n[e];return r?r.b:t}function du(n,e,t){const r=n[e]||{},a=r.i!=null?r.i:r.f!=null?r.f:t;return typeof a=="number"?a:parseInt(a,10)}function pl(n){switch(typeof n=="string"&&(n=qt[n]),n){case qt.DT_FLOAT:case qt.DT_HALF:return"float32";case qt.DT_INT32:case qt.DT_INT64:case qt.DT_INT8:case qt.DT_UINT8:return"int32";case qt.DT_BOOL:return"bool";case qt.DT_DOUBLE:return"float32";case qt.DT_STRING:return"string";default:return null}}function Sc(n,e,t){const r=n[e];return r&&r.func?r.func.name:t}function fu(n,e,t){const r=n[e];return r&&r.type?pl(r.type):t}function mu(n,e,t){const r=n[e];return r&&r.list&&r.list.type?r.list.type.map(a=>pl(a)):t}function Xm(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function gu(n,e,t){const r=n[e];return r&&r.shape?Xm(r.shape):t}function yu(n,e,t){const r=n[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(a=>typeof a=="number"?a:parseInt(a,10)):t}function xu(n,e,t,r=!1){const a=n[e];return a&&a.list&&a.list.s?a.list.s.map(s=>Hm(s,r)):t}function bu(n,e,t){const r=n[e];return r&&r.list&&r.list.shape?r.list.shape.map(a=>Xm(a)):t}function vu(n,e,t){const r=n[e];return r&&r.list&&r.list.b?r.list.b:t}class CR{constructor(e,t,r){this.node=e,this.tensorMap=t,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(a=>this.getInput(a)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((a,s)=>(a[s]=this.getAttr(s),a),{}))}getInput(e){return mt(e,this.tensorMap,this.context)}getAttr(e,t){const r=this.node.rawAttrs[e];if(r.tensor!=null)return mt(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return du(this.node.rawAttrs,e,t);if(r.s!=null)return pu(this.node.rawAttrs,e,t);if(r.b!=null)return hu(this.node.rawAttrs,e,t);if(r.shape!=null)return gu(this.node.rawAttrs,e,t);if(r.type!=null)return fu(this.node.rawAttrs,e,t);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return yu(this.node.rawAttrs,e,t);if(r.list.s!=null)return xu(this.node.rawAttrs,e,t);if(r.list.shape!=null)return bu(this.node.rawAttrs,e,t);if(r.list.b!=null)return vu(this.node.rawAttrs,e,t);if(r.list.type!=null)return mu(this.node.rawAttrs,e,t)}return t}}const pt=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Wd,abs:Kt,acos:N0,acosh:R0,add:Pe,addN:A0,all:F0,any:M0,argMax:P0,argMin:U0,asin:W0,asinh:G0,atan:H0,atan2:q0,atanh:Y0,avgPool:$f,avgPool3d:a3,basicLSTMCell:c3,batchNorm:To,batchNorm2d:m3,batchNorm3d:y3,batchNorm4d:b3,batchToSpaceND:Rf,bincount:_f,booleanMaskAsync:Hb,broadcastArgs:S3,broadcastTo:Qa,buffer:He,cast:je,ceil:E3,clipByValue:Af,clone:Jn,complex:tr,concat:it,concat1d:N3,concat2d:R3,concat3d:A3,concat4d:F3,conv1d:L3,conv2d:Co,conv2dTranspose:U3,conv3d:W3,conv3dTranspose:H3,cos:q3,cosh:Y3,cosineWindow:Zu,cumprod:J3,cumsum:ey,denseBincount:ny,depthToSpace:ay,depthwiseConv2d:Uu,diag:iy,dilation2d:ly,div:De,divNoNan:fy,dot:gy,dropout:av,einsum:xy,elu:Df,enclosingPowerOfTwo:u1,equal:Ff,erf:wy,euclideanNorm:Ry,exp:Fn,expandDims:on,expm1:Fy,eye:Pf,fft:Ku,fill:Eo,floor:Bf,floorDiv:If,fused:bv,gather:Uf,gatherND:tv,greater:$o,greaterEqual:Vf,ifft:uo,imag:ko,image:va,inTopKAsync:ov,irfft:r1,isFinite:Wy,isInf:Gy,isNaN:Hy,leakyRelu:Wf,less:Ky,lessEqual:ju,linalg:qw,linspace:Zy,localResponseNormalization:Qy,log:as,log1p:zf,logSigmoid:ax,logSoftmax:ix,logSumExp:jf,logicalAnd:oo,logicalNot:Hf,logicalOr:Xf,logicalXor:dx,losses:Kw,lowerBound:mx,matMul:Oe,max:oa,maxPool:qf,maxPool3d:xx,maxPoolWithArgmax:vx,maximum:Sx,mean:io,meshgrid:Tx,min:Yi,minimum:Kf,mirrorPad:Ix,mod:$x,moments:_x,movingAverage:qb,mul:me,multiRNNCell:Ox,multinomial:Dx,neg:An,norm:No,notEqual:Yf,oneHot:c0,ones:Cr,onesLike:Px,op:P,outerProduct:Ux,pad:ms,pad1d:zx,pad2d:jx,pad3d:Xx,pad4d:Kx,pool:e4,pow:Gu,prelu:Jf,print:ef,prod:r4,raggedGather:s4,raggedTensorToTensor:i4,rand:l4,randomGamma:N4,randomNormal:Qf,randomStandardNormal:_4,randomUniform:e1,range:ss,real:ns,reciprocal:F4,relu:Ro,relu6:t1,reshape:Z,reverse:Dr,reverse1d:B4,reverse2d:V4,reverse3d:z4,reverse4d:j4,rfft:Yu,round:n1,rsqrt:q4,scalar:Ae,scatterND:Yb,searchSorted:Hu,selu:Y4,separableConv2d:J4,setdiff1dAsync:eb,sigmoid:Rr,sign:nb,signal:Xw,sin:ab,sinh:ob,slice:we,slice1d:ub,slice2d:cb,slice3d:hb,slice4d:fb,softmax:gb,softplus:Gf,spaceToBatchND:Zf,sparse:Yw,sparseToDense:Qb,spectral:Hw,split:os,sqrt:Zi,square:Io,squaredDifference:a1,squeeze:tt,stack:Mn,step:s1,stridedSlice:Ib,string:Zw,sub:Ce,sum:Ve,tan:$b,tanh:Ki,tensor:vn,tensor1d:gt,tensor2d:Qn,tensor3d:lf,tensor4d:Rb,tensor5d:_b,tensor6d:Ab,tile:es,topk:Fb,transpose:Hi,truncatedNormal:Mb,unique:Pb,unsortedSegmentSum:Ub,unstack:Br,upperBound:Wb,variable:zb,where:ha,whereAsync:i1,zeros:Fr,zerosLike:Vu},Symbol.toStringTag,{value:"Module"}));const IR=(n,e,t,r=pt)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(w("a",n,e,t),w("b",n,e,t))];case"AddN":return[r.addN(w("tensors",n,e,t))];case"FloorMod":case"Mod":return[r.mod(w("a",n,e,t),w("b",n,e,t))];case"Mul":return[r.mul(w("a",n,e,t),w("b",n,e,t))];case"RealDiv":case"Div":return[r.div(w("a",n,e,t),w("b",n,e,t))];case"DivNoNan":return[r.divNoNan(w("a",n,e,t),w("b",n,e,t))];case"FloorDiv":return[r.floorDiv(w("a",n,e,t),w("b",n,e,t))];case"Sub":return[r.sub(w("a",n,e,t),w("b",n,e,t))];case"Minimum":return[r.minimum(w("a",n,e,t),w("b",n,e,t))];case"Maximum":return[r.maximum(w("a",n,e,t),w("b",n,e,t))];case"Pow":return[r.pow(w("a",n,e,t),w("b",n,e,t))];case"SquaredDifference":return[r.squaredDifference(w("a",n,e,t),w("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const NR=(n,e,t,r=pt)=>{switch(n.op){case"Abs":case"ComplexAbs":return[r.abs(w("x",n,e,t))];case"Acos":return[r.acos(w("x",n,e,t))];case"Acosh":return[r.acosh(w("x",n,e,t))];case"Asin":return[r.asin(w("x",n,e,t))];case"Asinh":return[r.asinh(w("x",n,e,t))];case"Atan":return[r.atan(w("x",n,e,t))];case"Atan2":return[r.atan2(w("x",n,e,t),w("y",n,e,t))];case"Atanh":return[r.atanh(w("x",n,e,t))];case"Ceil":return[r.ceil(w("x",n,e,t))];case"Complex":return[r.complex(w("real",n,e,t),w("imag",n,e,t))];case"Cos":return[r.cos(w("x",n,e,t))];case"Cosh":return[r.cosh(w("x",n,e,t))];case"Elu":return[r.elu(w("x",n,e,t))];case"Erf":return[r.erf(w("x",n,e,t))];case"Exp":return[r.exp(w("x",n,e,t))];case"Expm1":return[r.expm1(w("x",n,e,t))];case"Floor":return[r.floor(w("x",n,e,t))];case"Log":return[r.log(w("x",n,e,t))];case"Log1p":return[r.log1p(w("x",n,e,t))];case"Imag":return[r.imag(w("x",n,e,t))];case"Neg":return[r.neg(w("x",n,e,t))];case"Reciprocal":return[r.reciprocal(w("x",n,e,t))];case"Real":return[r.real(w("x",n,e,t))];case"Relu":return[r.relu(w("x",n,e,t))];case"Round":return[r.round(w("x",n,e,t))];case"Selu":return[r.selu(w("x",n,e,t))];case"Sigmoid":return[r.sigmoid(w("x",n,e,t))];case"Sin":return[r.sin(w("x",n,e,t))];case"Sign":return[r.sign(w("x",n,e,t))];case"Sinh":return[r.sinh(w("x",n,e,t))];case"Softplus":return[r.softplus(w("x",n,e,t))];case"Sqrt":return[r.sqrt(w("x",n,e,t))];case"Square":return[r.square(w("x",n,e,t))];case"Tanh":return[r.tanh(w("x",n,e,t))];case"Tan":return[r.tan(w("x",n,e,t))];case"ClipByValue":return[r.clipByValue(w("x",n,e,t),w("clipValueMin",n,e,t),w("clipValueMax",n,e,t))];case"Relu6":return[r.relu6(w("x",n,e,t))];case"Rsqrt":return[r.rsqrt(mt(n.inputNames[0],e,t))];case"Prod":return[r.prod(w("x",n,e,t),w("axes",n,e,t))];case"LeakyRelu":return[r.leakyRelu(w("x",n,e,t),w("alpha",n,e,t))];case"Prelu":return[r.prelu(w("x",n,e,t),w("alpha",n,e,t))];case"IsNan":return[r.isNaN(mt(n.inputNames[0],e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};function Yt(n,e,t=""){if(!(typeof n=="number"||typeof e=="number")){R(n.length===e.length,()=>t+` Shapes ${n} and ${e} must match`);for(let r=0;r<n.length;r++){const a=n[r],s=e[r];R(a<0||s<0||a===s,()=>t+` Shapes ${n} and ${e} must match`)}}}function kc(n){return!(typeof n=="number"||n.some(e=>e<0))}function qa(n,e,t){let r=wu(n,t);const a=!kc(r);if(a&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(a&&e.forEach(s=>{r=wu(s.shape,r)}),!kc(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function wu(n,e){if(typeof n=="number")return e;if(typeof e=="number")return n;if(n.length!==e.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${e}`);const t=[];for(let r=0;r<n.length;++r){const a=n[r],s=e[r];if(a>=0&&s>=0&&a!==s)throw new Error(`Incompatible shape during merge: ${n} vs. ${e}`);t[r]=a>=0?a:s}return t}class $R{constructor(e,t,r,a,s,o,i){this.name=e,this.dtype=t,this.maxSize=r,this.elementShape=a,this.identicalElementShapes=s,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=Ae(0),Yn(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),Yt(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=t,Yn(t),r.written=!0,this.tensors[e]=r}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((r,a)=>this.write(r,t[a]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let a=0;a<this.size();a++)e.push(a)}if(e.length===0)return vn([],[0].concat(this.elementShape));const r=this.readMany(e);return Yt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),Mn(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return vn([],[0].concat(this.elementShape));const t=[];for(let a=0;a<this.size();a++)t.push(a);const r=this.readMany(t);return Yt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),it(r,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,Br(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let r=0;const a=e.map(u=>(r+=u,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const s=r===0?0:t.size/r,o=[];Xe(()=>{t=Z(t,[1,r,s]);for(let u=0;u<e.length;++u){const l=[0,u===0?0:a[u-1],0],c=[1,e[u],s];o[u]=Z(we(t,l,c),this.elementShape)}return o});const i=[];for(let u=0;u<e.length;u++)i[u]=u;this.writeMany(i,o)}}class Lr{constructor(e,t,r,a=-1){this.tensors=e,this.elementShape=t,this.elementDtype=r,e?.forEach(s=>{if(r!==s.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${s.dtype}`);Yt(t,s.shape,"TensorList shape mismatch: "),Yn(s)}),this.idTensor=Ae(0),this.maxNumElements=a,Yn(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Lr([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,r=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Yt(e,this.elementShape,"TensorList shape mismatch: ");const a=qa(this.elementShape,this.tensors,e);return Xe(()=>{const s=this.tensors.map(o=>Z(o,a));return Mn(s,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=qa(this.elementShape,this.tensors,e),a=this.tensors.pop();return a.kept=!1,Yt(a.shape,e,"TensorList shape mismatch: "),Z(a,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(Yt(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Yn(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new Lr([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)t.tensors[r]=this.tensors[r];return t}getItem(e,t,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);Yt(this.tensors[e].shape,t,"TensorList shape mismatch: ");const a=qa(this.elementShape,this.tensors,t);return Z(this.tensors[e],a)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);Yt(this.elementShape,t.shape,"TensorList shape mismatch: "),Yn(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,r){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);Yt(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const a=qa(this.elementShape,this.tensors,r);return e.length===0?vn([],[0].concat(a)):Xe(()=>{const s=e.map(o=>Z(this.tensors[o],a));return Mn(s,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);Yt(this.elementShape,t,"TensorList shape mismatch: ");const r=qa(this.elementShape,this.tensors,t);return this.size()===0?vn([],[0].concat(r)):Xe(()=>{const a=this.tensors.map(s=>Z(s,r));return it(a,0)})}}function RR(n,e,t){const r=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==t)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${t}`);const a=n.shape.slice(1);Yt(a,e,"TensorList shape mismatch: ");const s=Br(n);return new Lr(s,e,r)}function _R(n,e,t,r){return new Lr([],n,e,r)}function AR(n,e,t,r){if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const a=Math.max(...e);if(r!=null&&r!==-1&&a>=r)throw new Error(`Max index must be < array size (${a}  vs. ${r})`);const s=new Lr([],t,n.dtype,r),o=Br(n,0);return e.forEach((i,u)=>{s.setItem(i,o[u])}),s}function OR(n,e,t){let r=0;const a=e.map(c=>(r+=c,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);const s=n.shape.slice(1),o=wu(s,t),i=r===0?0:n.size/r,u=Xe(()=>{const c=[];n=Z(n,[1,r,i]);for(let p=0;p<e.length;++p){const h=[0,p===0?0:a[p-1],0],d=[1,e[p],i];c[p]=Z(we(n,h,d),o)}return n.dispose(),c}),l=new Lr([],t,n.dtype,e.length);for(let c=0;c<u.length;c++)l.setItem(c,u[c]);return l}const FR=async(n,e,t)=>{switch(n.op){case"If":case"StatelessIf":{const r=w("thenBranch",n,e,t),a=w("elseBranch",n,e,t),s=w("cond",n,e,t),o=w("args",n,e,t);return(await s.data())[0]?t.functionMap[r].executeFunctionAsync(o,t.tensorArrayMap,t.tensorListMap):t.functionMap[a].executeFunctionAsync(o,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const r=w("body",n,e,t),a=w("cond",n,e,t),s=w("args",n,e,t),o=await t.functionMap[a].executeFunctionAsync(s,t.tensorArrayMap,t.tensorListMap),i=s.map(c=>c.id);let u=await o[0].data();o.forEach(c=>{!c.kept&&i.indexOf(c.id)===-1&&c.dispose()});let l=s;for(;u[0];){const c=l;l=await t.functionMap[r].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);const p=l.map(d=>d.id);c.forEach(d=>{!d.kept&&i.indexOf(d.id)===-1&&p.indexOf(d.id)===-1&&d.dispose()});const h=await t.functionMap[a].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);u=await h[0].data(),h.forEach(d=>{!d.kept&&i.indexOf(d.id)===-1&&p.indexOf(d.id)===-1&&d.dispose()})}return l}case"LoopCond":{const r=w("pred",n,e,t);return[In(r)]}case"Switch":{const r=w("pred",n,e,t);let a=w("data",n,e,t);return a.kept||(a=In(a)),(await r.data())[0]?[void 0,a]:[a,void 0]}case"Merge":{const r=n.inputNames.find(a=>mt(a,e,t)!==void 0);if(r){const a=mt(r,e,t);return[In(a)]}return}case"Enter":{const r=w("frameName",n,e,t),a=w("tensor",n,e,t);return t.enterFrame(r),[In(a)]}case"Exit":{const r=w("tensor",n,e,t);return t.exitFrame(),[In(r)]}case"NextIteration":{const r=w("tensor",n,e,t);return t.nextIteration(),[In(r)]}case"TensorArrayV3":{const r=w("size",n,e,t),a=w("dtype",n,e,t),s=w("elementShape",n,e,t),o=w("dynamicSize",n,e,t),i=w("clearAfterRead",n,e,t),u=w("identicalElementShapes",n,e,t),l=w("name",n,e,t),c=new $R(l,a,r,s,u,o,i);return t.addTensorArray(c),[c.idTensor,Ae(1)]}case"TensorArrayWriteV3":{const r=w("tensorArrayId",n,e,t),a=w("index",n,e,t),s=w("tensor",n,e,t),o=t.getTensorArray(r.id);return o.write(a,s),[o.idTensor]}case"TensorArrayReadV3":{const r=w("tensorArrayId",n,e,t),a=w("index",n,e,t);return[t.getTensorArray(r.id).read(a)]}case"TensorArrayGatherV3":{const r=w("tensorArrayId",n,e,t),a=w("indices",n,e,t),s=w("dtype",n,e,t);return[t.getTensorArray(r.id).gather(a,s)]}case"TensorArrayScatterV3":{const r=w("tensorArrayId",n,e,t),a=w("indices",n,e,t),s=w("tensor",n,e,t),o=t.getTensorArray(r.id);return o.scatter(a,s),[o.idTensor]}case"TensorArrayConcatV3":{const r=w("tensorArrayId",n,e,t),a=t.getTensorArray(r.id),s=w("dtype",n,e,t);return[a.concat(s)]}case"TensorArraySplitV3":{const r=w("tensorArrayId",n,e,t),a=w("tensor",n,e,t),s=w("lengths",n,e,t),o=t.getTensorArray(r.id);return o.split(s,a),[o.idTensor]}case"TensorArraySizeV3":{const r=w("tensorArrayId",n,e,t),a=t.getTensorArray(r.id);return[Ae(a.size(),"int32")]}case"TensorArrayCloseV3":{const r=w("tensorArrayId",n,e,t),a=t.getTensorArray(r.id);return a.clearAndClose(),[a.idTensor]}case"TensorListSetItem":{const r=w("tensorListId",n,e,t),a=w("index",n,e,t),s=w("tensor",n,e,t),o=t.getTensorList(r.id);return o.setItem(a,s),[o.idTensor]}case"TensorListGetItem":{const r=w("tensorListId",n,e,t),a=w("index",n,e,t),s=w("elementShape",n,e,t),o=w("elementDType",n,e,t);return[t.getTensorList(r.id).getItem(a,s,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=w("indices",n,e,t),a=w("tensor",n,e,t),s=w("elementShape",n,e,t),o=w("numElements",n,e,t),i=AR(a,r,s,o);return t.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=w("elementShape",n,e,t),a=w("elementDType",n,e,t);let s;n.op==="TensorListReserve"?s="numElements":s="maxNumElements";const o=w(s,n,e,t),i=n.op==="TensorListReserve"?-1:o,u=_R(r,a,o,i);return t.addTensorList(u),[u.idTensor]}case"TensorListGather":{const r=w("tensorListId",n,e,t),a=w("indices",n,e,t),s=w("elementShape",n,e,t),o=w("elementDType",n,e,t);return[t.getTensorList(r.id).gather(a,o,s)]}case"TensorListStack":{const r=w("tensorListId",n,e,t),a=w("elementShape",n,e,t),s=w("elementDType",n,e,t),o=w("numElements",n,e,t);return[t.getTensorList(r.id).stack(a,s,o)]}case"TensorListFromTensor":{const r=w("tensor",n,e,t),a=w("elementShape",n,e,t),s=w("elementDType",n,e,t),o=RR(r,a,s);return t.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=w("tensorListId",n,e,t),a=t.getTensorList(r.id),s=w("dtype",n,e,t),o=w("elementShape",n,e,t);return[a.concat(s,o)]}case"TensorListPushBack":{const r=w("tensorListId",n,e,t),a=w("tensor",n,e,t),s=t.getTensorList(r.id);return s.pushBack(a),[s.idTensor]}case"TensorListPopBack":{const r=w("tensorListId",n,e,t),a=w("elementShape",n,e,t),s=w("elementDType",n,e,t);return[t.getTensorList(r.id).popBack(a,s)]}case"TensorListSplit":{const r=w("tensor",n,e,t),a=w("elementShape",n,e,t),s=w("lengths",n,e,t),o=OR(r,s,a);return t.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=w("tensorListId",n,e,t),a=t.getTensorList(r.id);return[Ae(a.size(),"int32")]}case"TensorListResize":{const r=w("tensorListId",n,e,t),a=w("size",n,e,t),s=t.getTensorList(r.id).resize(a);return t.addTensorList(s),[s.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};function Tc(n,e,t){const[r,a]=w("fusedOps",n,e,t),s=r==="biasadd",o=!s,i=a==="prelu",u=r==="fusedbatchnorm",l=w("numArgs",n,e,t);if(s){if(i&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=w("strides",n,e,t),p=Qs(n,e,t),h=w("dataFormat",n,e,t).toUpperCase(),d=w("dilations",n,e,t);let[m,y]=w("args",n,e,t);o&&(y=m,m=void 0);const b=w("leakyreluAlpha",n,e,t);return{stride:c,pad:p,dataFormat:h,dilations:d,biasArg:m,preluArg:y,activationFunc:a,leakyreluAlpha:b}}const DR=(n,e,t,r=pt)=>{switch(n.op){case"Conv1D":{const a=w("stride",n,e,t),s=w("pad",n,e,t),o=w("dataFormat",n,e,t).toUpperCase(),i=w("dilation",n,e,t);return[r.conv1d(w("x",n,e,t),w("filter",n,e,t),a,s,o,i)]}case"Conv2D":{const a=w("strides",n,e,t),s=Qs(n,e,t),o=w("dataFormat",n,e,t).toUpperCase(),i=w("dilations",n,e,t);return[r.conv2d(w("x",n,e,t),w("filter",n,e,t),[a[1],a[2]],s,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:a,pad:s,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=Tc(n,e,t);return[r.fused.conv2d({x:w("x",n,e,t),filter:w("filter",n,e,t),strides:[a[1],a[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:a,pad:s,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=Tc(n,e,t);return[r.fused.depthwiseConv2d({x:w("x",n,e,t),filter:w("filter",n,e,t),strides:[a[1],a[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const a=w("outputShape",n,e,t),s=w("strides",n,e,t),o=Qs(n,e,t);return[r.conv2dTranspose(w("x",n,e,t),w("filter",n,e,t),a,[s[1],s[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const a=w("strides",n,e,t),s=Qs(n,e,t),o=w("dilations",n,e,t),i=w("dataFormat",n,e,t).toUpperCase();return[r.depthwiseConv2d(w("input",n,e,t),w("filter",n,e,t),[a[1],a[2]],s,i,[o[1],o[2]])]}case"Conv3D":{const a=w("strides",n,e,t),s=w("pad",n,e,t),o=w("dataFormat",n,e,t).toUpperCase(),i=w("dilations",n,e,t);return[r.conv3d(w("x",n,e,t),w("filter",n,e,t),[a[1],a[2],a[3]],s,o,[i[1],i[2],i[3]])]}case"AvgPool":{const a=w("strides",n,e,t),s=w("pad",n,e,t),o=w("kernelSize",n,e,t);return[r.avgPool(w("x",n,e,t),[o[1],o[2]],[a[1],a[2]],s)]}case"MaxPool":{const a=w("strides",n,e,t),s=w("pad",n,e,t),o=w("kernelSize",n,e,t);return[r.maxPool(w("x",n,e,t),[o[1],o[2]],[a[1],a[2]],s)]}case"MaxPoolWithArgmax":{const a=w("strides",n,e,t),s=w("pad",n,e,t),o=w("kernelSize",n,e,t),i=w("includeBatchInIndex",n,e,t),{result:u,indexes:l}=r.maxPoolWithArgmax(w("x",n,e,t),[o[1],o[2]],[a[1],a[2]],s,i);return[u,l]}case"AvgPool3D":{const a=w("strides",n,e,t),s=w("pad",n,e,t),o=w("kernelSize",n,e,t);return[r.avgPool3d(w("x",n,e,t),[o[1],o[2],o[3]],[a[1],a[2],a[3]],s)]}case"MaxPool3D":{const a=w("strides",n,e,t),s=w("pad",n,e,t),o=w("kernelSize",n,e,t);return[r.maxPool3d(w("x",n,e,t),[o[1],o[2],o[3]],[a[1],a[2],a[3]],s)]}case"Dilation2D":{const a=w("strides",n,e,t),s=w("pad",n,e,t),o=w("dilations",n,e,t),i=a[1],u=a[2],l=o[1],c=o[2];return[r.dilation2d(w("x",n,e,t),w("filter",n,e,t),[i,u],s,[l,c],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const MR=(n,e,t,r=pt)=>{switch(n.op){case"Fill":{const a=w("shape",n,e,t),s=w("dtype",n,e,t),o=w("value",n,e,t);return[r.fill(a,o,s)]}case"LinSpace":{const a=w("start",n,e,t),s=w("stop",n,e,t),o=w("num",n,e,t);return[r.linspace(a,s,o)]}case"Multinomial":{const a=w("logits",n,e,t),s=w("numSamples",n,e,t),o=w("seed",n,e,t);return[r.multinomial(a,s,o)]}case"OneHot":{const a=w("indices",n,e,t),s=w("depth",n,e,t),o=w("onValue",n,e,t),i=w("offValue",n,e,t),u=w("dtype",n,e,t);return[r.oneHot(a,s,o,i,u)]}case"Ones":return[r.ones(w("shape",n,e,t),w("dtype",n,e,t))];case"OnesLike":return[r.onesLike(w("x",n,e,t))];case"RandomStandardNormal":return[r.randomStandardNormal(w("shape",n,e,t),w("dtype",n,e,t),w("seed",n,e,t))];case"RandomUniform":return[r.randomUniform(w("shape",n,e,t),w("minval",n,e,t),w("maxval",n,e,t),w("dtype",n,e,t))];case"Range":{const a=w("start",n,e,t),s=w("stop",n,e,t),o=w("step",n,e,t);return[r.range(a,s,o,w("dtype",n,e,t))]}case"TruncatedNormal":{const a=w("shape",n,e,t),s=w("mean",n,e,t),o=w("stdDev",n,e,t),i=w("seed",n,e,t);return[r.truncatedNormal(a,s,o,w("dtype",n,e,t),i)]}case"Zeros":return[r.zeros(w("shape",n,e,t),w("dtype",n,e,t))];case"ZerosLike":return[r.zerosLike(w("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};function mi(n,e,t){const r=w("boxes",n,e,t),a=w("scores",n,e,t),s=w("maxOutputSize",n,e,t),o=w("iouThreshold",n,e,t),i=w("scoreThreshold",n,e,t),u=w("softNmsSigma",n,e,t);return{boxes:r,scores:a,maxOutputSize:s,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}}const LR=async(n,e,t,r,a=pt)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:s,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=mi(n,e,t),p=await a.image.nonMaxSuppressionWithScoreAsync(s,o,i,u,l,c);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:s,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=mi(n,e,t),c=w("padToMaxOutputSize",n,e,t),p=await a.image.nonMaxSuppressionPaddedAsync(s,o,i,u,l,c);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:s,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=mi(n,e,t);return[await a.image.nonMaxSuppressionAsync(s,o,i,u,l)]}case"Where":{const s=a.cast(w("condition",n,e,t),"bool"),o=[await a.whereAsync(s)];return s.dispose(),o}case"ListDiff":return a.setdiff1dAsync(w("x",n,e,t),w("y",n,e,t));default:throw TypeError(`Node type ${n.op} is not implemented`)}};const PR=(n,e,t,r=pt)=>{switch(n.op){case"LowerBound":{const a=w("sortedSequence",n,e,t),s=w("values",n,e,t);return[r.lowerBound(a,s)]}case"TopKV2":{const a=w("x",n,e,t),s=w("k",n,e,t),o=w("sorted",n,e,t),i=r.topk(a,s,o);return[i.values,i.indices]}case"UpperBound":{const a=w("sortedSequence",n,e,t),s=w("values",n,e,t);return[r.upperBound(a,s)]}case"Unique":{const a=w("x",n,e,t),s=r.unique(a);return[s.values,s.indices]}case"UniqueV2":{const a=w("x",n,e,t),s=w("axis",n,e,t),o=r.unique(a,s);return[o.values,o.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const BR=(n,e,t,r=pt)=>{switch(n.op){case"Const":return e[n.name];case"PlaceholderWithDefault":const a=w("default",n,e,t);return[mt(n.name,e,t)||a];case"Placeholder":return[mt(n.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const c=w("x",n,e,t);return[In(c)]}case"IdentityN":return w("x",n,e,t).map(c=>In(c));case"Snapshot":const s=w("x",n,e,t);return[In(s)];case"Shape":return[r.tensor1d(w("x",n,e,t).shape,"int32")];case"ShapeN":return w("x",n,e,t).map(c=>r.tensor1d(c.shape));case"Size":return[r.scalar(w("x",n,e,t).size,"int32")];case"Rank":return[r.scalar(w("x",n,e,t).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=w("x",n,e,t),i=w("data",n,e,t),u=w("message",n,e,t),l=w("summarize",n,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let c=0;c<i.length;c++)console.log(Array.prototype.slice.call(i[c].dataSync()).slice(0,l));return[o];default:throw TypeError(`Node type ${n.op} is not implemented`)}};class UR{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=Ae(0),this.tensorMap=new Map,Yn(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return Ae(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return this.tensorMap.forEach(a=>a.dispose()),this.tensorMap.clear(),Xe(()=>{const a=Br(t),s=r.length,o=a.length;R(s===o,()=>`The number of elements doesn't match, keys has ${s} elements, the values has ${o} elements.`);for(let i=0;i<s;i++){const u=r[i],l=a[i];Yn(l),this.tensorMap.set(u,l)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return Xe(()=>{const a=[];for(let s=0;s<r.length;s++){const o=r[s],i=this.findWithDefault(o,t);a.push(i)}return Mn(a)})}findWithDefault(e,t){return this.tensorMap.get(e)??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}const VR=async(n,e,t,r)=>{switch(n.op){case"HashTable":case"HashTableV2":{const a=w("keyDType",n,e,t),s=w("valueDType",n,e,t),o=new UR(a,s);return r.addHashTable(n.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const a=w("tableHandle",n,e,t,r),s=w("keys",n,e,t),o=w("values",n,e,t);return[await r.getHashTableById(a.id).import(s,o)]}case"LookupTableFind":case"LookupTableFindV2":{const a=w("tableHandle",n,e,t,r),s=w("keys",n,e,t),o=w("defaultValue",n,e,t);return[await r.getHashTableById(a.id).find(s,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const a=w("tableHandle",n,e,t,r);return[r.getHashTableById(a.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const WR=(n,e,t,r=pt)=>{switch(n.op){case"ResizeBilinear":{const a=w("images",n,e,t),s=w("size",n,e,t),o=w("alignCorners",n,e,t),i=w("halfPixelCenters",n,e,t);return[r.image.resizeBilinear(a,[s[0],s[1]],o,i)]}case"ResizeNearestNeighbor":{const a=w("images",n,e,t),s=w("size",n,e,t),o=w("alignCorners",n,e,t),i=w("halfPixelCenters",n,e,t);return[r.image.resizeNearestNeighbor(a,[s[0],s[1]],o,i)]}case"CropAndResize":{const a=w("image",n,e,t),s=w("boxes",n,e,t),o=w("boxInd",n,e,t),i=w("cropSize",n,e,t),u=w("method",n,e,t),l=w("extrapolationValue",n,e,t);return[r.image.cropAndResize(a,s,o,i,u,l)]}case"ImageProjectiveTransformV3":{const a=w("images",n,e,t),s=w("transforms",n,e,t),o=w("outputShape",n,e,t),i=w("fillValue",n,e,t),u=w("interpolation",n,e,t),l=w("fillMode",n,e,t);return[r.image.transform(a,s,u.toLowerCase(),l.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const zR=(n,e,t,r=pt)=>{switch(n.op){case"Equal":return[r.equal(w("a",n,e,t),w("b",n,e,t))];case"NotEqual":return[r.notEqual(w("a",n,e,t),w("b",n,e,t))];case"Greater":return[r.greater(w("a",n,e,t),w("b",n,e,t))];case"GreaterEqual":return[r.greaterEqual(w("a",n,e,t),w("b",n,e,t))];case"Less":return[r.less(w("a",n,e,t),w("b",n,e,t))];case"LessEqual":return[r.lessEqual(w("a",n,e,t),w("b",n,e,t))];case"LogicalAnd":return[r.logicalAnd(w("a",n,e,t),w("b",n,e,t))];case"LogicalNot":return[r.logicalNot(w("a",n,e,t))];case"LogicalOr":return[r.logicalOr(w("a",n,e,t),w("b",n,e,t))];case"Select":case"SelectV2":return[r.where(w("condition",n,e,t),w("a",n,e,t),w("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const GR=(n,e,t,r=pt)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(w("a",n,e,t),w("b",n,e,t),w("transposeA",n,e,t),w("transposeB",n,e,t))];case"Einsum":return[r.einsum(w("equation",n,e,t),...w("tensors",n,e,t))];case"Transpose":return[r.transpose(w("x",n,e,t),w("perm",n,e,t))];case"_FusedMatMul":const[a,s]=w("fusedOps",n,e,t),o=a==="biasadd",i=s==="prelu",u=w("numArgs",n,e,t),l=w("leakyreluAlpha",n,e,t);if(o){if(i&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,p]=w("args",n,e,t);return[r.fused.matMul({a:w("a",n,e,t),b:w("b",n,e,t),transposeA:w("transposeA",n,e,t),transposeB:w("transposeB",n,e,t),bias:c,activation:s,preluActivationWeights:p,leakyreluAlpha:l})];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const jR=(n,e,t,r=pt)=>{switch(n.op){case"EuclideanNorm":return[r.euclideanNorm(w("x",n,e,t),w("axis",n,e,t),w("keepDims",n,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(w("x",n,e,t),w("mean",n,e,t),w("variance",n,e,t),w("offset",n,e,t),w("scale",n,e,t),w("epsilon",n,e,t))];case"FusedBatchNormV3":return[r.batchNorm(w("x",n,e,t),w("mean",n,e,t),w("variance",n,e,t),w("offset",n,e,t),w("scale",n,e,t),w("epsilon",n,e,t))];case"LRN":return[r.localResponseNormalization(w("x",n,e,t),w("radius",n,e,t),w("bias",n,e,t),w("alpha",n,e,t),w("beta",n,e,t))];case"Softmax":return[r.softmax(w("x",n,e,t))];case"LogSoftmax":return[r.logSoftmax(w("x",n,e,t))];case"SparseToDense":return[r.sparseToDense(w("sparseIndices",n,e,t),w("outputShape",n,e,t),w("sparseValues",n,e,t),w("defaultValue",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const HR=(n,e,t,r=pt)=>{switch(n.op){case"Max":{const i=w("axis",n,e,t),u=w("keepDims",n,e,t);return[r.max(w("x",n,e,t),i,u)]}case"Mean":{const i=w("axis",n,e,t),u=w("keepDims",n,e,t);return[r.mean(w("x",n,e,t),i,u)]}case"Min":{const i=w("axis",n,e,t),u=w("keepDims",n,e,t);return[r.min(w("x",n,e,t),i,u)]}case"Sum":{const i=w("axis",n,e,t),u=w("keepDims",n,e,t);return[r.sum(w("x",n,e,t),i,u)]}case"All":{const i=w("axis",n,e,t),u=w("keepDims",n,e,t);return[r.all(w("x",n,e,t),i,u)]}case"Any":{const i=w("axis",n,e,t),u=w("keepDims",n,e,t);return[r.any(w("x",n,e,t),i,u)]}case"ArgMax":{const i=w("axis",n,e,t);return[r.argMax(w("x",n,e,t),i)]}case"ArgMin":{const i=w("axis",n,e,t);return[r.argMin(w("x",n,e,t),i)]}case"Prod":{const i=w("axis",n,e,t),u=w("keepDims",n,e,t);return[r.prod(w("x",n,e,t),i,u)]}case"Cumprod":{const i=w("axis",n,e,t),u=w("exclusive",n,e,t),l=w("reverse",n,e,t);return[r.cumprod(w("x",n,e,t),i,u,l)]}case"Cumsum":{const i=w("axis",n,e,t),u=w("exclusive",n,e,t),l=w("reverse",n,e,t);return[r.cumsum(w("x",n,e,t),i,u,l)]}case"Bincount":const a=w("x",n,e,t),s=w("weights",n,e,t),o=w("size",n,e,t);return[r.bincount(a,s,o)];case"DenseBincount":{const i=w("x",n,e,t),u=w("weights",n,e,t),l=w("size",n,e,t),c=w("binaryOutput",n,e,t);return[r.denseBincount(i,u,l,c)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const XR=(n,e,t,r=pt)=>{switch(n.op){case"ConcatV2":case"Concat":{const a=w("n",n,e,t),s=w("axis",n,e,t);let o=w("tensors",n,e,t);return o=o.slice(0,a),[r.concat(o,s)]}case"Gather":{const a=w("x",n,e,t),s=w("indices",n,e,t);return[r.gather(a,r.cast(s,"int32"),0)]}case"GatherV2":{const a=w("axis",n,e,t),s=w("batchDims",n,e,t),o=w("x",n,e,t),i=w("indices",n,e,t);return[r.gather(o,r.cast(i,"int32"),a,s)]}case"Reverse":{const a=w("dims",n,e,t),s=[];for(let i=0;i<a.length;i++)a[i]&&s.push(i);const o=w("x",n,e,t);return[r.reverse(o,s)]}case"ReverseV2":{const a=w("axis",n,e,t),s=w("x",n,e,t);return[r.reverse(s,a)]}case"Slice":{const a=w("begin",n,e,t),s=w("size",n,e,t);return[r.slice(w("x",n,e,t),a,s)]}case"StridedSlice":{const a=w("begin",n,e,t),s=w("end",n,e,t),o=w("strides",n,e,t),i=w("beginMask",n,e,t),u=w("endMask",n,e,t),l=w("ellipsisMask",n,e,t),c=w("newAxisMask",n,e,t),p=w("shrinkAxisMask",n,e,t),h=w("x",n,e,t);return[r.stridedSlice(h,a,s,o,i,u,l,c,p)]}case"Pack":return Xe(()=>{const a=w("axis",n,e,t),s=w("tensors",n,e,t),o=s[0].shape,i=r.squeeze(s[0]).shape,u=s.map(l=>{const c=qe(l.shape,o);if(!c&&!qe(r.squeeze(l).shape,i))throw new Error("the input tensors shape does not match");return c?l:r.reshape(l,o)});return[r.stack(u,a)]});case"Unpack":{const a=w("axis",n,e,t),s=w("tensor",n,e,t);return r.unstack(s,a)}case"Tile":{const a=w("reps",n,e,t);return[r.tile(w("x",n,e,t),a)]}case"Split":case"SplitV":{const a=w("axis",n,e,t),s=w("numOrSizeSplits",n,e,t),o=w("x",n,e,t);return r.split(o,s,a)}case"ScatterNd":{const a=w("indices",n,e,t),s=w("values",n,e,t),o=w("shape",n,e,t);return[r.scatterND(a,s,o)]}case"GatherNd":{const a=w("x",n,e,t),s=w("indices",n,e,t);return[r.gatherND(a,s)]}case"SparseToDense":{const a=w("sparseIndices",n,e,t),s=w("outputShape",n,e,t),o=w("sparseValues",n,e,t),i=w("defaultValue",n,e,t);return[r.sparseToDense(a,o,s,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};const qR=(n,e,t,r=pt)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:a,outputValues:s,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(w("indices",n,e,t),w("values",n,e,t),w("denseShape",n,e,t),w("defaultValue",n,e,t));return[a,s,o,i]}case"SparseReshape":{const{outputIndices:a,outputShape:s}=r.sparse.sparseReshape(w("inputIndices",n,e,t),w("inputShape",n,e,t),w("newShape",n,e,t));return[a,s]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(w("data",n,e,t),w("indices",n,e,t),w("segmentIds",n,e,t))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(w("data",n,e,t),w("indices",n,e,t),w("segmentIds",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const KR=(n,e,t,r=pt)=>{switch(n.op){case"FFT":return[r.fft(w("x",n,e,t))];case"IFFT":return[r.ifft(w("x",n,e,t))];case"RFFT":return[r.rfft(w("x",n,e,t))];case"IRFFT":return[r.irfft(w("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const YR=(n,e,t,r=pt)=>{switch(n.op){case"StringNGrams":{const{nGrams:a,nGramsSplits:s}=r.string.stringNGrams(w("data",n,e,t),w("dataSplits",n,e,t),w("separator",n,e,t),w("nGramWidths",n,e,t),w("leftPad",n,e,t),w("rightPad",n,e,t),w("padWidth",n,e,t),w("preserveShortSequences",n,e,t));return[a,s]}case"StringSplit":{const{indices:a,values:s,shape:o}=r.string.stringSplit(w("input",n,e,t),w("delimiter",n,e,t),w("skipEmpty",n,e,t));return[a,s,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(w("input",n,e,t),w("numBuckets",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};const ZR=(n,e,t,r=pt)=>{switch(n.op){case"Cast":return[r.cast(w("x",n,e,t),w("dtype",n,e,t))];case"ExpandDims":{const a=w("axis",n,e,t);return[r.expandDims(w("x",n,e,t),a)]}case"Squeeze":{const a=w("axis",n,e,t);return[r.squeeze(w("x",n,e,t),a)]}case"Reshape":return[r.reshape(w("x",n,e,t),w("shape",n,e,t))];case"MirrorPad":return[r.mirrorPad(w("x",n,e,t),w("padding",n,e,t),w("mode",n,e,t))];case"PadV2":case"Pad":return[r.pad(w("x",n,e,t),w("padding",n,e,t),w("constantValue",n,e,t))];case"SpaceToBatchND":{const a=w("blockShape",n,e,t),s=w("paddings",n,e,t);return[r.spaceToBatchND(w("x",n,e,t),a,s)]}case"BatchToSpaceND":{const a=w("blockShape",n,e,t),s=w("crops",n,e,t);return[r.batchToSpaceND(w("x",n,e,t),a,s)]}case"DepthToSpace":{const a=w("blockSize",n,e,t),s=w("dataFormat",n,e,t).toUpperCase();return[r.depthToSpace(w("x",n,e,t),a,s)]}case"BroadcastTo":return[r.broadcastTo(w("x",n,e,t),w("shape",n,e,t))];case"BroadcastArgs":return[r.broadcastArgs(w("s0",n,e,t),w("s1",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};function Ec(n,e,t,r,a=Xe){const s=((o,i,u)=>{switch(o.category){case"arithmetic":return a(()=>IR(o,i,u));case"basic_math":return a(()=>NR(o,i,u));case"control":return FR(o,i,u);case"convolution":return a(()=>DR(o,i,u));case"creation":return a(()=>MR(o,i,u));case"dynamic":return LR(o,i,u);case"evaluation":return a(()=>PR(o,i,u));case"image":return a(()=>WR(o,i,u));case"graph":return a(()=>BR(o,i,u));case"logical":return a(()=>zR(o,i,u));case"matrices":return a(()=>GR(o,i,u));case"normalization":return a(()=>jR(o,i,u));case"reduction":return a(()=>HR(o,i,u));case"slice_join":return a(()=>XR(o,i,u));case"sparse":return a(()=>qR(o,i,u));case"spectral":return a(()=>KR(o,i,u));case"string":return a(()=>YR(o,i,u));case"transformation":return a(()=>ZR(o,i,u));case"hash_table":return VR(o,i,u,r);case"custom":const l=jm(o.op);if(l&&l.customExecutor)return l.customExecutor(new CR(o,i,u));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,e,t);return la(s)?s.then(o=>[].concat(o)):[].concat(s)}class Cc{constructor(e={},t={},r={},a={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=r,this.functionMap=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const r=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}function Ic(n,e,t,r){const a=new Set,s=[];let o=null,i=null;const u=new Set,l=Object.keys(n).map(h=>Nt(h)[0]);let c=[];r!=null&&(c=r.map(h=>Nt(h.name)[0]));const p=[...e];for(;p.length>0;){const h=p.pop();if((qm(h)||n_(h)||r_(h))&&o==null&&(o=h,i=o.children.map(d=>d.name).filter(d=>a.has(d))),a.add(h.name),t[h.name]==null&&l.indexOf(h.name)===-1&&c.indexOf(h.name)===-1){if(h.inputs.length===0){s.push(h.name);continue}h.inputs.forEach(d=>{u.has(d.name)||(u.add(d.name),p.push(d))})}}return{inputs:n,outputs:e,usedNodes:a,missingInputs:s,dynamicNode:o,syncInputs:i}}function JR(n,e,t){const{usedNodes:r,inputs:a}=t,s=[],o=Object.keys(a).map(c=>Nt(c)[0]).map(c=>n.nodes[c]),i=n.initNodes;o.forEach(c=>{r.has(c.name)&&s.push(c)}),n.weights.forEach(c=>{r.has(c.name)&&s.push(c)}),i?.forEach(c=>{r.has(c.name)&&s.push(c)});const u=new Set,l=[];for(;s.length>0;){const c=s.pop();u.add(c.name),e[c.name]||l.push(c),c.children.forEach(p=>{!u.has(p.name)&&r.has(p.name)&&p.inputs.every(h=>u.has(h.name))&&s.push(p)})}return l}const QR=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],e_=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],t_=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function qm(n){return QR.indexOf(n.op)>=0}function n_(n){return e_.indexOf(n.op)>=0}function r_(n){return t_.indexOf(n.op)>=0}class go{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new go(e.functions[r],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(r=>e[r].map(a=>a.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}getCompilationKey(e,t){const r=e.map(s=>s.name).sort(),a=t.map(s=>s.name).sort();return r.join(this.SEPERATOR)+"--"+a.join(this.SEPERATOR)}compile(e,t){const r=Ic(e,t,this.weightMap,this._initNodes),{missingInputs:a,dynamicNode:s,syncInputs:o}=r;if(s!=null)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(a.length>0){const i=t.map(l=>l.name),u=Object.keys(e);throw new Error(`Cannot compute the outputs [${i}] from the provided inputs [${u}]. Missing the following inputs: [${a}]`)}return JR(this.graph,this.weightMap,r)}execute(e,t){e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const a=r.map(p=>this.graph.nodes[Nt(p)[0]]),s=t.map(p=>Nt(p)[0]);let o=s.map(p=>this.graph.nodes[p]);this.resetIntermediateTensors(),o.length===0&&(o=this._outputs);const i=this.getCompilationKey(a,o);let u=this.compiledMap.get(i);u==null&&(u=this.compile(e,o),this.compiledMap.set(i,u));const l={},c={};return Xe(()=>{const p=new Cc(this.weightMap,l,c,this.functionExecutorMap),h=Object.assign({},this.weightMap);Object.keys(e).forEach(y=>{const[b,x]=Nt(y),T=[];T[x]=e[y],h[b]=T});const d=this.getFrozenTensorIds(h),m={};for(let y=0;y<u.length;y++){const b=u[y];if(!h[b.name]){const x=Ec(b,h,p,this._resourceManager);if(la(x))throw new Error(`The execution of the op '${b.op}' returned a promise. Please use model.executeAsync() instead.`);h[b.name]=x,this.checkTensorForDisposal(b.name,b,h,p,d,s,m)}}return this.parent==null&&p.dispose(d),t.map(y=>mt(y,h,p))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(a=>a.id)));return new Set(t)}checkTensorForDisposal(e,t,r,a,s,o,i){t.category==="control"||o.indexOf(e)!==-1||(r[e].forEach(u=>{u!=null&&(i[u.id]=(i[u.id]||0)+t.children.length)}),t.inputs.forEach(u=>{if(u.category!=="control"){const l=U9(u.name,r,a);l?.forEach(c=>{if(c&&!c.kept&&!s.has(c.id)){const p=i[c.id];if(p===1){if(!this.keepTensorForDebug)c.dispose();else{const[h,d]=xn(t.name,a);this.intermediateTensors[h]?this.intermediateTensors[h][d]=c:(this.intermediateTensors[h]=[],this.intermediateTensors[h][d]=c)}delete i[c.id]}else p!=null&&i[c.id]--}})}}))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach(e=>this.intermediateTensors[e].forEach(t=>t.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach(e=>{this.tensorsMap[e].forEach(t=>{t&&!t.kept&&!t.isDisposed&&!this.keepIds.has(t.id)&&t.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const e in this.intermediateTensors)this.intermediateTensors[e].forEach(t=>t.dispose()),delete this.intermediateTensors[e]}async _executeAsync(e,t,r=!1,a={},s={}){r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepTensorForDebug=H().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(c){console.warn(c.message)}this.resetIntermediateTensors();const o=new Cc(this.weightMap,a,s,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(e,o,t,r);const i=t.map(c=>mt(c,this.tensorsMap,o)),u=i.map(c=>c.id),l=Object.keys(e).map(c=>e[c].id);return this.keepIds=new Set([...u,...l,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&o.dispose(this.keepIds),i}async executeFunctionAsync(e,t,r){const a=e.reduce((s,o,i)=>(s[this.inputs[i].name]=o,s),{});return this._executeAsync(a,this.outputNodes,!0,t,r)}async executeWithControlFlow(e,t,r,a){const s=Object.keys(e),o=s.map($=>this.graph.nodes[Nt($)[0]]),i=r.map($=>Nt($)[0]);let u=i.map($=>this.graph.nodes[$]);u.length===0&&(u=this._outputs);const{usedNodes:l,missingInputs:c,dynamicNode:p,syncInputs:h}=Ic(e,u,this.weightMap,this._initNodes),d=[...o,...this.graph.weights,...this._initNodes||[]].map($=>({node:$,contexts:t.currentContext})),m=Object.assign({},this.weightMap);Object.keys(e).forEach($=>{const[F,M]=Nt($),U=[];U[M]=e[$],m[F]=U});const y={},b=this.getFrozenTensorIds(m),x={};for(;d.length>0;){const $=this.processStack(o,d,t,m,x,b,i,y,l);await Promise.all($)}p==null&&!a&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const T=u.filter($=>!qm($)&&!mt($.name,m,t)).map($=>$.name);if(T.length>0){let $="";throw p!=null&&($=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${h}]`),new Error(`Cannot compute the outputs [${T}] from the provided inputs [${s}]. Consider providing the following inputs: [${c}]. ${$}`)}return m}processStack(e,t,r,a,s,o,i,u,l){const c=[];for(;t.length>0;){const p=t.pop();r.currentContext=p.contexts;let h="";if(p.node.op==="Enter"&&w("isConstant",p.node,a,r)&&([h]=xn(p.node.name,r)),a[p.node.name]==null){const d=Ec(p.node,a,r,this._resourceManager);h||([h]=xn(p.node.name,r));const m=r.currentContext;la(d)?c.push(d.then(y=>(a[h]=y,r.currentContext=m,this.checkTensorForDisposal(h,p.node,a,r,o,i,u),this.processChildNodes(p.node,t,r,a,s,l),y))):(a[h]=d,this.checkTensorForDisposal(h,p.node,a,r,o,i,u),this.processChildNodes(p.node,t,r,a,s,l))}else this.processChildNodes(p.node,t,r,a,s,l)}return c}processChildNodes(e,t,r,a,s,o){e.children.forEach(i=>{const[u]=xn(i.name,r);s[u]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(l=>!!mt(l,a,r))&&(s[u]=!0,t.push({contexts:r.currentContext,node:i})):i.inputNames.every(l=>!!mt(l,a,r))&&(s[u]=!0,t.push({contexts:r.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const r=e[t],[a]=Nt(t),s=this.graph.nodes[a];if(s.attrParams.shape&&s.attrParams.shape.value){const o=s.attrParams.shape.value,i=o.length===r.shape.length&&r.shape.every((u,l)=>o[l]===-1||o[l]===u);R(i,()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}s.attrParams.dtype&&s.attrParams.dtype.value&&R(r.dtype===s.attrParams.dtype.value,()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){const t={};for(const r in e)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null){const a=this._signature.inputs[r];t[a.name]=e[r]}else t[r]=e[r];return t}checkInputs(e){const t=Object.keys(e).filter(r=>{const[a]=Nt(r);return this.graph.nodes[a]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[t]!=null?this._signature.outputs[t].name:t,{})}checkOutputs(e){e.forEach(t=>{const[r]=Nt(t);if(!this.graph.nodes[r])throw new Error(`The output '${t}' is not found in the graph`)})}}class a_{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}const s_="?tfjs-format=file",o_="model.json";class i_{constructor(e,t={},r=of){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=r,t==null&&(this.loadOptions={}),this.resourceManager=new a_}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return la(e)?e.then(t=>this.loadSync(t)):this.loadSync(e)}loadSync(e){this.artifacts=e;const t=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const s=this.artifacts.userDefinedMetadata;s.signature!=null&&(r=s.signature),s.structuredOutputKeys!=null&&(this.structuredOutputKeys=s.structuredOutputKeys)}this.signature=r,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;const a=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new go(wc.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(a),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const s=wc.Instance.transformGraph(e.modelInitializer);this.initializer=new go(s),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){const r=this.execute(e,this.outputNodes);if(this.structuredOutputKeys){const a=r instanceof Ge?[r]:r,s={};return a.forEach((o,i)=>s[this.structuredOutputKeys[i]]=o),s}return r}normalizeInputs(e){if(!(e instanceof Ge)&&!Array.isArray(e))return e;if(e=Array.isArray(e)?e:[e],e.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce((t,r,a)=>(t[r]=e[a],t),{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=this.executor.execute(e,t);return r.length>1?r:r[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=await this.executor.executeAsync(e,t);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,r)=>(t[r]=[e[r]],t),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function Km(n,e={},t=of){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof n=="string"&&(n=u_(n));const r=new i_(n,e,t);return await r.load(),r}function u_(n){return n.endsWith("/")||(n=n+"/"),`${n}${o_}${s_}`}var cn=function(){return cn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},cn.apply(this,arguments)};function Rn(n,e,t,r){return new(t||(t=Promise))((function(a,s){function o(l){try{u(r.next(l))}catch(c){s(c)}}function i(l){try{u(r.throw(l))}catch(c){s(c)}}function u(l){var c;l.done?a(l.value):(c=l.value,c instanceof t?c:new t((function(p){p(c)}))).then(o,i)}u((r=r.apply(n,[])).next())}))}function _n(n,e){var t,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(u){return function(l){return(function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!((a=a.length>0&&a[a.length-1])||c[0]!==6&&c[0]!==2)){o=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(c[0]===6&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(n,o)}catch(p){c=[6,p],r=0}finally{t=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}})([u,l])}}}function qn(n){var e=n.map((function(t){return t[0]}));return e.push(n[n.length-1][1]),e}var l_={lips:qn([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:qn([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:qn([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:qn([[474,475],[475,476],[476,477],[477,474]]),rightEye:qn([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:qn([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:qn([[469,470],[470,471],[471,472],[472,469]]),faceOval:qn([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},c_=Object.entries(l_).map((function(n){var e=n[0];return n[1].map((function(t){return[t,e]}))})).flat(),Ym=new Map(c_);function Su(n){for(var e={locationData:{relativeKeypoints:[]}},t=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,a=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,o=0;o<n.length;++o){var i=n[o];t=Math.min(t,i.x),r=Math.max(r,i.x),a=Math.min(a,i.y),s=Math.max(s,i.y),e.locationData.relativeKeypoints.push({x:i.x,y:i.y})}return e.locationData.relativeBoundingBox={xMin:t,yMin:a,xMax:r,yMax:s,width:r-t,height:s-a},e}var gi={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},p_=(function(){function n(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new p2.FaceMesh({locateFile:function(r,a){return e.solutionPath?e.solutionPath.replace(/\/+$/,"")+"/"+r:a+"/"+r}}),this.faceMeshSolution.setOptions({refineLandmarks:e.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:e.maxFaces}),this.faceMeshSolution.onResults((function(r){if(t.height=r.image.height,t.width=r.image.width,t.faces=[],r.multiFaceLandmarks!==null)for(var a=r.multiFaceLandmarks,s=0;s<a.length;s++){var o=t.translateOutput(a[s]);t.faces.push({keypoints:o,box:Su(o).locationData.relativeBoundingBox})}}))}return n.prototype.translateOutput=function(e){var t=this;return e.map((function(r,a){var s={x:r.x*t.width,y:r.y*t.height,z:r.z*t.width},o=Ym.get(a);return o!=null&&(s.name=o),s}))},n.prototype.estimateFaces=function(e,t){return Rn(this,void 0,void 0,(function(){var r,a;return _n(this,(function(s){switch(s.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Ge?(a=ImageData.bind,[4,cf(e)]):[3,2];case 1:return r=new(a.apply(ImageData,[void 0,s.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:r=e,s.label=3;case 3:return e=r,[4,this.faceMeshSolution.send({image:e})];case 4:return s.sent(),[2,this.faces]}}))}))},n.prototype.dispose=function(){this.faceMeshSolution.close()},n.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.faceMeshSolution.initialize()},n})();function h_(n){return Rn(this,void 0,void 0,(function(){var e,t;return _n(this,(function(r){switch(r.label){case 0:return e=(function(a){if(a==null)return cn({},gi);var s=cn({},a);return s.runtime="mediapipe",s.maxFaces==null&&(s.maxFaces=gi.maxFaces),s.refineLandmarks==null&&(s.refineLandmarks=gi.refineLandmarks),s})(n),[4,(t=new p_(e)).initialize()];case 1:return r.sent(),[2,t]}}))}))}var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d_={};(function(){var n;function e(f){var S=0;return function(){return S<f.length?{done:!1,value:f[S++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,S,E){return f==Array.prototype||f==Object.prototype||(f[S]=E.value),f},r=(function(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var S=0;S<f.length;++S){var E=f[S];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")})(this);function a(f,S){if(S)e:{var E=r;f=f.split(".");for(var I=0;I<f.length-1;I++){var A=f[I];if(!(A in E))break e;E=E[A]}(S=S(I=E[f=f[f.length-1]]))!=I&&S!=null&&t(E,f,{configurable:!0,writable:!0,value:S})}}function s(f){return(f={next:f})[Symbol.iterator]=function(){return this},f}function o(f){var S=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return S?S.call(f):{next:e(f)}}function i(f){if(!(f instanceof Array)){f=o(f);for(var S,E=[];!(S=f.next()).done;)E.push(S.value);f=E}return f}a("Symbol",(function(f){function S(A,_){this.g=A,t(this,"description",{configurable:!0,writable:!0,value:_})}if(f)return f;S.prototype.toString=function(){return this.g};var E="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",I=0;return function A(_){if(this instanceof A)throw new TypeError("Symbol is not a constructor");return new S(E+(_||"")+"_"+I++,_)}})),a("Symbol.iterator",(function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var S="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),E=0;E<S.length;E++){var I=r[S[E]];typeof I=="function"&&typeof I.prototype[f]!="function"&&t(I.prototype,f,{configurable:!0,writable:!0,value:function(){return s(e(this))}})}return f}));var u,l=typeof Object.create=="function"?Object.create:function(f){function S(){}return S.prototype=f,new S};if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var c;e:{var p={};try{p.__proto__={a:!0},c=p.a;break e}catch{}c=!1}u=c?function(f,S){if(f.__proto__=S,f.__proto__!==S)throw new TypeError(f+" is not extensible");return f}:null}var h=u;function d(f,S){if(f.prototype=l(S.prototype),f.prototype.constructor=f,h)h(f,S);else for(var E in S)if(E!="prototype")if(Object.defineProperties){var I=Object.getOwnPropertyDescriptor(S,E);I&&Object.defineProperty(f,E,I)}else f[E]=S[E];f.na=S.prototype}function m(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function y(f){if(f.l)throw new TypeError("Generator is already running");f.l=!0}function b(f,S){f.j={da:S,ea:!0},f.g=f.o||f.u}function x(f,S,E){return f.g=E,{value:S}}function T(f){this.g=new m,this.h=f}function $(f,S,E,I){try{var A=S.call(f.g.i,E);if(!(A instanceof Object))throw new TypeError("Iterator result "+A+" is not an object");if(!A.done)return f.g.l=!1,A;var _=A.value}catch(D){return f.g.i=null,b(f.g,D),F(f)}return f.g.i=null,I.call(f.g,_),F(f)}function F(f){for(;f.g.g;)try{var S=f.h(f.g);if(S)return f.g.l=!1,{value:S.value,done:!1}}catch(E){f.g.h=void 0,b(f.g,E)}if(f.g.l=!1,f.g.j){if(S=f.g.j,f.g.j=null,S.ea)throw S.da;return{value:S.return,done:!0}}return{value:void 0,done:!0}}function M(f){this.next=function(S){return y(f.g),f.g.i?S=$(f,f.g.i.next,S,f.g.s):(f.g.s(S),S=F(f)),S},this.throw=function(S){return y(f.g),f.g.i?S=$(f,f.g.i.throw,S,f.g.s):(b(f.g,S),S=F(f)),S},this.return=function(S){return(function(E,I){y(E.g);var A=E.g.i;return A?$(E,"return"in A?A.return:function(_){return{value:_,done:!0}},I,E.g.return):(E.g.return(I),F(E))})(f,S)},this[Symbol.iterator]=function(){return this}}function U(f){return(function(S){function E(A){return S.next(A)}function I(A){return S.throw(A)}return new Promise((function(A,_){(function D(B){B.done?A(B.value):Promise.resolve(B.value).then(E,I).then(D,_)})(S.next())}))})(new M(new T(f)))}m.prototype.s=function(f){this.h=f},m.prototype.return=function(f){this.j={return:f},this.g=this.u},a("Promise",(function(f){function S(D){this.h=0,this.i=void 0,this.g=[],this.s=!1;var B=this.j();try{D(B.resolve,B.reject)}catch(j){B.reject(j)}}function E(){this.g=null}function I(D){return D instanceof S?D:new S((function(B){B(D)}))}if(f)return f;E.prototype.h=function(D){if(this.g==null){this.g=[];var B=this;this.i((function(){B.l()}))}this.g.push(D)};var A=r.setTimeout;E.prototype.i=function(D){A(D,0)},E.prototype.l=function(){for(;this.g&&this.g.length;){var D=this.g;this.g=[];for(var B=0;B<D.length;++B){var j=D[B];D[B]=null;try{j()}catch(Y){this.j(Y)}}}this.g=null},E.prototype.j=function(D){this.i((function(){throw D}))},S.prototype.j=function(){function D(Y){return function(Q){j||(j=!0,Y.call(B,Q))}}var B=this,j=!1;return{resolve:D(this.D),reject:D(this.l)}},S.prototype.D=function(D){if(D===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof S)this.H(D);else{e:switch(typeof D){case"object":var B=D!=null;break e;case"function":B=!0;break e;default:B=!1}B?this.A(D):this.o(D)}},S.prototype.A=function(D){var B=void 0;try{B=D.then}catch(j){return void this.l(j)}typeof B=="function"?this.I(B,D):this.o(D)},S.prototype.l=function(D){this.u(2,D)},S.prototype.o=function(D){this.u(1,D)},S.prototype.u=function(D,B){if(this.h!=0)throw Error("Cannot settle("+D+", "+B+"): Promise already settled in state"+this.h);this.h=D,this.i=B,this.h===2&&this.G(),this.B()},S.prototype.G=function(){var D=this;A((function(){if(D.C()){var B=r.console;B!==void 0&&B.error(D.i)}}),1)},S.prototype.C=function(){if(this.s)return!1;var D=r.CustomEvent,B=r.Event,j=r.dispatchEvent;return j===void 0||(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof B=="function"?D=new B("unhandledrejection",{cancelable:!0}):(D=r.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,D),D.promise=this,D.reason=this.i,j(D))},S.prototype.B=function(){if(this.g!=null){for(var D=0;D<this.g.length;++D)_.h(this.g[D]);this.g=null}};var _=new E;return S.prototype.H=function(D){var B=this.j();D.M(B.resolve,B.reject)},S.prototype.I=function(D,B){var j=this.j();try{D.call(B,j.resolve,j.reject)}catch(Y){j.reject(Y)}},S.prototype.then=function(D,B){function j(se,ie){return typeof se=="function"?function(xe){try{Y(se(xe))}catch(ve){Q(ve)}}:ie}var Y,Q,re=new S((function(se,ie){Y=se,Q=ie}));return this.M(j(D,Y),j(B,Q)),re},S.prototype.catch=function(D){return this.then(void 0,D)},S.prototype.M=function(D,B){function j(){switch(Y.h){case 1:D(Y.i);break;case 2:B(Y.i);break;default:throw Error("Unexpected state: "+Y.h)}}var Y=this;this.g==null?_.h(j):this.g.push(j),this.s=!0},S.resolve=I,S.reject=function(D){return new S((function(B,j){j(D)}))},S.race=function(D){return new S((function(B,j){for(var Y=o(D),Q=Y.next();!Q.done;Q=Y.next())I(Q.value).M(B,j)}))},S.all=function(D){var B=o(D),j=B.next();return j.done?I([]):new S((function(Y,Q){function re(xe){return function(ve){se[xe]=ve,--ie==0&&Y(se)}}var se=[],ie=0;do se.push(void 0),ie++,I(j.value).M(re(se.length-1),Q),j=B.next();while(!j.done)}))},S}));var X=typeof Object.assign=="function"?Object.assign:function(f,S){for(var E=1;E<arguments.length;E++){var I=arguments[E];if(I)for(var A in I)Object.prototype.hasOwnProperty.call(I,A)&&(f[A]=I[A])}return f};a("Object.assign",(function(f){return f||X})),a("Object.is",(function(f){return f||function(S,E){return S===E?S!==0||1/S==1/E:S!=S&&E!=E}})),a("Array.prototype.includes",(function(f){return f||function(S,E){var I=this;I instanceof String&&(I=String(I));var A=I.length;for(0>(E=E||0)&&(E=Math.max(E+A,0));E<A;E++){var _=I[E];if(_===S||Object.is(_,S))return!0}return!1}})),a("String.prototype.includes",(function(f){return f||function(S,E){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(S instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(S,E||0)!==-1}})),a("Array.prototype.keys",(function(f){return f||function(){return(function(S,E){S instanceof String&&(S+="");var I=0,A=!1,_={next:function(){if(!A&&I<S.length){var D=I++;return{value:E(D,S[D]),done:!1}}return A=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_})(this,(function(S){return S}))}}));var z=this||self;function L(f,S){f=f.split(".");var E,I=z;for((f[0]in I)||I.execScript===void 0||I.execScript("var "+f[0]);f.length&&(E=f.shift());)f.length||S===void 0?I=I[E]&&I[E]!==Object.prototype[E]?I[E]:I[E]={}:I[E]=S}function C(){throw Error("Invalid UTF8")}function q(f,S){return S=String.fromCharCode.apply(null,S),f==null?S:f+S}var ee,te,le=typeof TextDecoder<"u",de=typeof TextEncoder<"u",fe={},Re=null;function ge(f){var S;S===void 0&&(S=0),We(),S=fe[S];for(var E=Array(Math.floor(f.length/3)),I=S[64]||"",A=0,_=0;A<f.length-2;A+=3){var D=f[A],B=f[A+1],j=f[A+2],Y=S[D>>2];D=S[(3&D)<<4|B>>4],B=S[(15&B)<<2|j>>6],j=S[63&j],E[_++]=Y+D+B+j}switch(Y=0,j=I,f.length-A){case 2:j=S[(15&(Y=f[A+1]))<<2]||I;case 1:f=f[A],E[_]=S[f>>2]+S[(3&f)<<4|Y>>4]+j+I}return E.join("")}function Te(f){var S=f.length,E=3*S/4;E%3?E=Math.floor(E):"=.".indexOf(f[S-1])!=-1&&(E="=.".indexOf(f[S-2])!=-1?E-2:E-1);var I=new Uint8Array(E),A=0;return(function(_,D){function B(ie){for(;j<_.length;){var xe=_.charAt(j++),ve=Re[xe];if(ve!=null)return ve;if(!/^[\s\xa0]*$/.test(xe))throw Error("Unknown base64 encoding at char: "+xe)}return ie}We();for(var j=0;;){var Y=B(-1),Q=B(0),re=B(64),se=B(64);if(se===64&&Y===-1)break;D(Y<<2|Q>>4),re!=64&&(D(Q<<4&240|re>>2),se!=64&&D(re<<6&192|se))}})(f,(function(_){I[A++]=_})),A!==E?I.subarray(0,A):I}function We(){if(!Re){Re={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),S=["+/=","+/","-_=","-_.","-_"],E=0;5>E;E++){var I=f.concat(S[E].split(""));fe[E]=I;for(var A=0;A<I.length;A++){var _=I[A];Re[_]===void 0&&(Re[_]=A)}}}}var Ne,Ye=typeof Uint8Array=="function";function Vt(f){return Ye&&f!=null&&f instanceof Uint8Array}function Vn(f){if(this.L=f,f!==null&&f.length===0)throw Error("ByteString should be constructed with non-empty values")}var ur=typeof Uint8Array.prototype.slice=="function",dn=0;function Na(f,S){return Error("Invalid wire type: "+f+" (at position "+S+")")}function zr(){return Error("Failed to read varint, encoding is invalid.")}function Wt(f,S){S=(S=S===void 0?{}:S).v!==void 0&&S.v,this.h=null,this.g=this.i=this.j=0,this.v=S,f&&zt(this,f)}function zt(f,S){f.h=(function(E,I){if(E.constructor===Uint8Array)return E;if(E.constructor===ArrayBuffer)return new Uint8Array(E);if(E.constructor===Array)return new Uint8Array(E);if(E.constructor===String)return Te(E);if(E.constructor===Vn)return!I&&(I=E.L)&&I.constructor===Uint8Array?I:(I=(I=E.L)==null||Vt(I)?I:typeof I=="string"?Te(I):null,(E=E.L=I)?new Uint8Array(E):Ne||(Ne=new Uint8Array(0)));if(E instanceof Uint8Array)return new Uint8Array(E.buffer,E.byteOffset,E.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")})(S,f.v),f.j=0,f.i=f.h.length,f.g=f.j}function Ze(f){if(f.g>f.i)throw Error("Tried to read past the end of the data "+f.g+" > "+f.i)}function Wn(f){var S=f.h,E=S[f.g],I=127&E;if(128>E)return f.g+=1,Ze(f),I;if(I|=(127&(E=S[f.g+1]))<<7,128>E)return f.g+=2,Ze(f),I;if(I|=(127&(E=S[f.g+2]))<<14,128>E)return f.g+=3,Ze(f),I;if(I|=(127&(E=S[f.g+3]))<<21,128>E)return f.g+=4,Ze(f),I;if(E=S[f.g+4],f.g+=5,I|=(15&E)<<28,128>E)return Ze(f),I;if(128<=S[f.g++]&&128<=S[f.g++]&&128<=S[f.g++]&&128<=S[f.g++]&&128<=S[f.g++])throw zr();return Ze(f),I}Wt.prototype.reset=function(){this.g=this.j};var lr=[];function Gr(){this.g=[]}function Gt(f,S){for(;127<S;)f.g.push(127&S|128),S>>>=7;f.g.push(S)}function nn(f){var S={},E=S.W!==void 0&&S.W;this.l={v:S.v!==void 0&&S.v},this.W=E,S=this.l,lr.length?(E=lr.pop(),S&&(E.v=S.v),f&&zt(E,f),f=E):f=new Wt(f,S),this.g=f,this.j=this.g.g,this.h=this.i=-1}function zn(f){var S=f.g;if(S.g==S.i)return!1;f.j=f.g.g;var E=Wn(f.g)>>>0;if(S=E>>>3,!(0<=(E&=7)&&5>=E))throw Na(E,f.j);if(1>S)throw Error("Invalid field number: "+S+" (at position "+f.j+")");return f.i=S,f.h=E,!0}function Tt(f){switch(f.h){case 0:if(f.h!=0)Tt(f);else e:{for(var S=(f=f.g).g,E=S+10;S<E;)if((128&f.h[S++])==0){f.g=S,Ze(f);break e}throw zr()}break;case 1:(f=f.g).g+=8,Ze(f);break;case 2:f.h!=2?Tt(f):(S=Wn(f.g)>>>0,(f=f.g).g+=S,Ze(f));break;case 5:(f=f.g).g+=4,Ze(f);break;case 3:for(S=f.i;;){if(!zn(f))throw Error("Unmatched start-group tag: stream EOF");if(f.h==4){if(f.i!=S)throw Error("Unmatched end-group tag");break}Tt(f)}break;default:throw Na(f.h,f.j)}}Gr.prototype.length=function(){return this.g.length},Gr.prototype.end=function(){var f=this.g;return this.g=[],f},nn.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var rn=[];function jr(){this.i=[],this.h=0,this.g=new Gr}function et(f,S){S.length!==0&&(f.i.push(S),f.h+=S.length)}var cr=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function $a(f,S){Object.isFrozen(f)||(cr?f[cr]|=S:f.N!==void 0?f.N|=S:Object.defineProperties(f,{N:{value:S,configurable:!0,writable:!0,enumerable:!1}}))}function Ra(f){var S;return(S=cr?f[cr]:f.N)==null?0:S}function Tn(f){return $a(f,1),f}function jt(f){return!!Array.isArray(f)&&!!(2&Ra(f))}function pr(f){if(!Array.isArray(f))throw Error("cannot mark non-array as immutable");$a(f,2)}function Et(f){return f!==null&&typeof f=="object"&&!Array.isArray(f)&&f.constructor===Object}var hr=Object.freeze(Tn([]));function _a(f){if(jt(f.m))throw Error("Cannot mutate an immutable Message")}var Aa,ks=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function Ts(f){return{value:f,configurable:!1,writable:!1,enumerable:!1}}function lt(f,S,E){return S===-1?null:S>=f.i?f.g?f.g[S]:void 0:E!==void 0&&E&&f.g&&(E=f.g[S])!=null?E:f.m[S+f.h]}function Je(f,S,E,I){I=I!==void 0&&I,_a(f),S<f.i&&!I?f.m[S+f.h]=E:(f.g||(f.g=f.m[f.i+f.h]={}))[S]=E}function Qe(f,S,E,I){E=E===void 0||E;var A=lt(f,S,I=I!==void 0&&I);return A==null&&(A=hr),jt(f.m)?E&&(pr(A),Object.freeze(A)):(A===hr||jt(A))&&Je(f,S,A=Tn(A.slice()),I),A}function vt(f,S,E){return(f=(f=lt(f,S))==null?f:+f)==null?E===void 0?0:E:f}function dr(f,S,E,I){f.j||(f.j={});var A=jt(f.m),_=f.j[E];if(!_){I=Qe(f,E,!0,I!==void 0&&I),_=[],A=A||jt(I);for(var D=0;D<I.length;D++)_[D]=new S(I[D]),A&&pr(_[D].m);A&&(pr(_),Object.freeze(_)),f.j[E]=_}return _}function Me(f,S,E,I,A){var _=_!==void 0&&_;return _a(f),_=dr(f,E,S,_),E=I||new E,f=Qe(f,S),A!=null?(_.splice(A,0,E),f.splice(A,0,E.m)):(_.push(E),f.push(E.m)),E}function fr(f,S){return(f=lt(f,S))==null?0:f}function Oa(f,S){return(f=lt(f,S))==null?"":f}function fn(f){var S=Es;return ke(f,S=S===void 0?Hr:S)}function At(f,S){if(f!=null){if(Array.isArray(f))f=ke(f,S);else if(Et(f)){var E,I={};for(E in f)I[E]=At(f[E],S);f=I}else f=S(f);return f}}function ke(f,S){for(var E=f.slice(),I=0;I<E.length;I++)E[I]=At(E[I],S);return Array.isArray(f)&&1&Ra(f)&&Tn(E),E}function Es(f){return f&&typeof f=="object"&&f.toJSON?f.toJSON():(f=(function(S){switch(typeof S){case"number":return isFinite(S)?S:String(S);case"object":if(S&&!Array.isArray(S)){if(Vt(S))return ge(S);if(S instanceof Vn){var E=S.L;return E=E==null||typeof E=="string"?E:Ye&&E instanceof Uint8Array?ge(E):null,(S.L=E)||""}}}return S})(f),Array.isArray(f)?fn(f):f)}function Hr(f){return Vt(f)?new Uint8Array(f):f}function mr(f,S,E){f||(f=Aa),Aa=null;var I=this.constructor.h;if(f||(f=I?[I]:[]),this.h=(I?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=f,f=(I=this.m.length)-1,I&&Et(I=this.m[f])?(this.i=f-this.h,this.g=I):S!==void 0&&-1<S?(this.i=Math.max(S,f+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,E)for(S=0;S<E.length;S++)if((f=E[S])<this.i)f+=this.h,(I=this.m[f])?Array.isArray(I)&&Tn(I):this.m[f]=hr;else{var A=(I=this.g||(this.g=this.m[this.i+this.h]={}))[f];A?Array.isArray(A)&&Tn(A):I[f]=hr}}function gr(){mr.apply(this,arguments)}if(mr.prototype.toJSON=function(){return fn(this.m)},mr.prototype.toString=function(){return this.m.toString()},d(gr,mr),ks){var mn={};Object.defineProperties(gr,(mn[Symbol.hasInstance]=Ts((function(){throw Error("Cannot perform instanceof checks for MutableMessage")})),mn))}function Xr(f,S,E){if(E){var I,A={};for(I in E){var _=E[I],D=_.ha;D||(A.F=_.la||_.fa.P,_.aa?(A.U=Is(_.aa),D=(function(B){return function(j,Y,Q){return B.F(j,Y,Q,B.U)}})(A)):_.ca?(A.T=qr(_.X.g,_.ca),D=(function(B){return function(j,Y,Q){return B.F(j,Y,Q,B.T)}})(A)):D=A.F,_.ha=D),D(S,f,_.X),A={F:A.F,U:A.U,T:A.T}}}(function(B,j){if(j=j.ba){et(B,B.g.end());for(var Y=0;Y<j.length;Y++)et(B,j[Y])}})(S,f)}var Ot=Symbol();function gn(f,S,E){return f[Ot]||(f[Ot]=function(I,A){return S(I,A,E)})}function Cs(f){var S=f[Ot];if(!S){var E=As(f);S=function(I,A){return Fa(I,A,E)},f[Ot]=S}return S}function Vo(f){var S=(function(A){var _=A.aa;return _?Cs(_):(_=A.ka)?gn(A.X.g,_,A.ca):void 0})(f),E=f.X,I=f.fa.O;return S?function(A,_){return I(A,_,E,S)}:function(A,_){return I(A,_,E)}}function at(f,S,E,I,A,_){var D=0;for((f=f()).length&&typeof f[0]!="number"&&(E(S,f[0]),D++);D<f.length;){E=f[D++];for(var B=D+1;B<f.length&&typeof f[B]!="number";)B++;var j=f[D++];switch(B-=D){case 0:I(S,E,j);break;case 1:I(S,E,j,f[D++]);break;case 2:A(S,E,j,f[D++],f[D++]);break;case 3:B=f[D++];var Y=f[D++],Q=f[D++];Array.isArray(Q)?A(S,E,j,B,Y,Q):_(S,E,j,B,Y,Q);break;case 4:_(S,E,j,f[D++],f[D++],f[D++],f[D++]);break;default:throw Error("unexpected number of binary field arguments: "+B)}}return S}var yn=Symbol();function Is(f){var S=f[yn];if(!S){var E=_s(f);S=function(I,A){return Ma(I,A,E)},f[yn]=S}return S}function qr(f,S){var E=f[yn];return E||(E=function(I,A){return Xr(I,A,S)},f[yn]=E),E}var Ns=Symbol();function Gn(f,S){f.push(S)}function Wo(f,S,E){f.push(S,E.P)}function $s(f,S,E,I,A){var _=Is(A),D=E.P;f.push(S,(function(B,j,Y){return D(B,j,Y,I,_)}))}function Rs(f,S,E,I,A,_){var D=qr(I,_),B=E.P;f.push(S,(function(j,Y,Q){return B(j,Y,Q,I,D)}))}function _s(f){var S=f[Ns];return S||at(f,f[Ns]=[],Gn,Wo,$s,Rs)}var Kr=Symbol();function En(f,S){f[0]=S}function zo(f,S,E,I){var A=E.O;f[S]=I?function(_,D,B){return A(_,D,B,I)}:A}function Go(f,S,E,I,A,_){var D=E.O,B=Cs(A);f[S]=function(j,Y,Q){return D(j,Y,Q,I,B,_)}}function Yr(f,S,E,I,A,_,D){var B=E.O,j=gn(I,A,_);f[S]=function(Y,Q,re){return B(Y,Q,re,I,j,D)}}function As(f){var S=f[Kr];return S||at(f,f[Kr]={},En,zo,Go,Yr)}function Fa(f,S,E){for(;zn(S)&&S.h!=4;){var I=S.i,A=E[I];if(!A){var _=E[0];_&&(_=_[I])&&(A=E[I]=Vo(_))}if(!(A&&A(S,f,I)||(A=S,I=f,_=A.j,Tt(A),A.W))){var D=A.g.h;A=_===(A=A.g.g)?Ne||(Ne=new Uint8Array(0)):ur?D.slice(_,A):new Uint8Array(D.subarray(_,A)),(_=I.ba)?_.push(A):I.ba=[A]}}return f}function Da(f,S,E){if(rn.length){var I=rn.pop();f&&(zt(I.g,f),I.i=-1,I.h=-1),f=I}else f=new nn(f);try{return Fa(new S,f,As(E))}finally{(S=f.g).h=null,S.j=0,S.i=0,S.g=0,S.v=!1,f.i=-1,f.h=-1,100>rn.length&&rn.push(f)}}function Ma(f,S,E){for(var I=E.length,A=I%2==1,_=A?1:0;_<I;_+=2)(0,E[_+1])(S,f,E[_]);Xr(f,S,A?E[0]:void 0)}function yr(f,S){var E=new jr;Ma(f,E,_s(S)),et(E,E.g.end()),f=new Uint8Array(E.h);for(var I=(S=E.i).length,A=0,_=0;_<I;_++){var D=S[_];f.set(D,A),A+=D.length}return E.i=[f],f}function jn(f,S){return{O:f,P:S}}var Ft=jn((function(f,S,E){if(f.h!==5)return!1;var I=(f=f.g).h[f.g],A=f.h[f.g+1],_=f.h[f.g+2],D=f.h[f.g+3];return f.g+=4,Ze(f),f=2*((A=(I<<0|A<<8|_<<16|D<<24)>>>0)>>31)+1,I=A>>>23&255,A&=8388607,Je(S,E,I==255?A?NaN:1/0*f:I==0?f*Math.pow(2,-149)*A:f*Math.pow(2,I-150)*(A+Math.pow(2,23))),!0}),(function(f,S,E){if((S=lt(S,E))!=null){Gt(f.g,8*E+5),f=f.g;var I=S;(I=(E=0>I?1:0)?-I:I)===0?0<1/I?dn=0:dn=2147483648:isNaN(I)?dn=2147483647:34028234663852886e22<I?dn=(E<<31|2139095040)>>>0:11754943508222875e-54>I?(I=Math.round(I/Math.pow(2,-149)),dn=(E<<31|I)>>>0):(S=Math.floor(Math.log(I)/Math.LN2),I*=Math.pow(2,-S),16777216<=(I=Math.round(8388608*I))&&++S,dn=(E<<31|S+127<<23|8388607&I)>>>0),E=dn,f.g.push(E>>>0&255),f.g.push(E>>>8&255),f.g.push(E>>>16&255),f.g.push(E>>>24&255)}})),jo=jn((function(f,S,E){if(f.h!==0)return!1;for(var I=f.g,A=128,_=0,D=f=0;4>D&&128<=A;D++)A=I.h[I.g++],Ze(I),_|=(127&A)<<7*D;if(128<=A&&(A=I.h[I.g++],Ze(I),_|=(127&A)<<28,f|=(127&A)>>4),128<=A)for(D=0;5>D&&128<=A;D++)A=I.h[I.g++],Ze(I),f|=(127&A)<<7*D+3;if(!(128>A))throw zr();return I=_>>>0,(f=2147483648&(A=f>>>0))&&(A=~A>>>0,(I=1+~I>>>0)==0&&(A=A+1>>>0)),I=4294967296*A+(I>>>0),Je(S,E,f?-I:I),!0}),(function(f,S,E){if((S=lt(S,E))!=null&&S!=null){Gt(f.g,8*E),f=f.g;var I=S;for(E=0>I,S=(I=Math.abs(I))>>>0,I=Math.floor((I-S)/4294967296),I>>>=0,E&&(I=~I>>>0,4294967295<(S=1+(~S>>>0))&&(S=0,4294967295<++I&&(I=0))),E=dn=S,S=I;0<S||127<E;)f.g.push(127&E|128),E=(E>>>7|S<<25)>>>0,S>>>=7;f.g.push(E)}})),Ho=jn((function(f,S,E){return f.h===0&&(Je(S,E,Wn(f.g)),!0)}),(function(f,S,E){if((S=lt(S,E))!=null&&S!=null)if(Gt(f.g,8*E),f=f.g,0<=(E=S))Gt(f,E);else{for(S=0;9>S;S++)f.g.push(127&E|128),E>>=7;f.g.push(1)}})),Os=jn((function(f,S,E){if(f.h!==2)return!1;var I,A=Wn(f.g)>>>0,_=(f=f.g).g;if(f.g+=A,Ze(f),f=f.h,le)(I=ee)||(I=ee=new TextDecoder("utf-8",{fatal:!0})),I=I.decode(f.subarray(_,_+A));else{A=_+A;for(var D,B,j,Y=[],Q=null;_<A;)128>(D=f[_++])?Y.push(D):224>D?_>=A?C():(B=f[_++],194>D||(192&B)!=128?(_--,C()):Y.push((31&D)<<6|63&B)):240>D?_>=A-1?C():(192&(B=f[_++]))!=128||D===224&&160>B||D===237&&160<=B||(192&(I=f[_++]))!=128?(_--,C()):Y.push((15&D)<<12|(63&B)<<6|63&I):244>=D?_>=A-2?C():(192&(B=f[_++]))!=128||B-144+(D<<28)>>30!=0||(192&(I=f[_++]))!=128||(192&(j=f[_++]))!=128?(_--,C()):(D=(7&D)<<18|(63&B)<<12|(63&I)<<6|63&j,D-=65536,Y.push(55296+(D>>10&1023),56320+(1023&D))):C(),8192<=Y.length&&(Q=q(Q,Y),Y.length=0);I=q(Q,Y)}return Je(S,E,I),!0}),(function(f,S,E){if((S=lt(S,E))!=null){var I=!1;if(I=I!==void 0&&I,de){if(I&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(S))throw Error("Found an unpaired surrogate");S=(te||(te=new TextEncoder)).encode(S)}else{for(var A=0,_=new Uint8Array(3*S.length),D=0;D<S.length;D++){var B=S.charCodeAt(D);if(128>B)_[A++]=B;else{if(2048>B)_[A++]=B>>6|192;else{if(55296<=B&&57343>=B){if(56319>=B&&D<S.length){var j=S.charCodeAt(++D);if(56320<=j&&57343>=j){B=1024*(B-55296)+j-56320+65536,_[A++]=B>>18|240,_[A++]=B>>12&63|128,_[A++]=B>>6&63|128,_[A++]=63&B|128;continue}D--}if(I)throw Error("Found an unpaired surrogate");B=65533}_[A++]=B>>12|224,_[A++]=B>>6&63|128}_[A++]=63&B|128}}S=_.subarray(0,A)}Gt(f.g,8*E+2),Gt(f.g,S.length),et(f,f.g.end()),et(f,S)}})),La=jn((function(f,S,E,I,A){if(f.h!==2)return!1;S=Me(S,E,I),E=f.g.i,I=Wn(f.g)>>>0;var _=f.g.g+I,D=_-E;if(0>=D&&(f.g.i=_,A(S,f),D=_-f.g.g),D)throw Error("Message parsing ended unexpectedly. Expected to read "+I+" bytes, instead read "+(I-D)+" bytes, either the data ended unexpectedly or the message misreported its own length");return f.g.g=_,f.g.i=E,!0}),(function(f,S,E,I,A){if((S=dr(S,I,E))!=null)for(I=0;I<S.length;I++){var _=f;Gt(_.g,8*E+2);var D=_.g.end();et(_,D),D.push(_.h),_=D,A(S[I],f),D=f;var B=_.pop();for(B=D.h+D.g.length()-B;127<B;)_.push(127&B|128),B>>>=7,D.h++;_.push(B),D.h++}}));function Ct(){gr.apply(this,arguments)}if(d(Ct,gr),ks){var Fs={};Object.defineProperties(Ct,(Fs[Symbol.hasInstance]=Ts(Object[Symbol.hasInstance]),Fs))}function Cn(f){Ct.call(this,f)}function Ds(){return[1,Ho,2,Ft,3,Os,4,Os]}function Pa(f){Ct.call(this,f,-1,qo)}function Xo(){return[1,La,Cn,Ds]}d(Cn,Ct),d(Pa,Ct),Pa.prototype.addClassification=function(f,S){return Me(this,1,Cn,f,S),this};var qo=[1];function Hn(f){Ct.call(this,f)}function Ms(){return[1,Ft,2,Ft,3,Ft,4,Ft,5,Ft]}function Ls(f){Ct.call(this,f,-1,Yo)}function Ko(){return[1,La,Hn,Ms]}d(Hn,Ct),d(Ls,Ct);var Yo=[1];function Ba(f){Ct.call(this,f)}function Ua(){return[1,Ft,2,Ft,3,Ft,4,Ft,5,Ft,6,jo]}d(Ba,Ct);var Va=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Wa=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],za=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Ga=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],ja=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Ps=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Bs=[].concat(i(Va),i(Wa),i(za),i(Ga),i(ja),i(Ps));function g(f,S,E){if(E=f.createShader(E===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(E,S),f.compileShader(E),!f.getShaderParameter(E,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(E));return E}function v(f){return dr(f,Cn,1).map((function(S){return{index:fr(S,1),ga:vt(S,2),label:lt(S,3)!=null?Oa(S,3):void 0,displayName:lt(S,4)!=null?Oa(S,4):void 0}}))}function k(f){return{x:vt(f,1),y:vt(f,2),z:vt(f,3),visibility:lt(f,4)!=null?vt(f,4):void 0}}function O(f,S){this.h=f,this.g=S,this.l=0}function W(f,S,E){return(function(I,A){var _=I.g;if(I.o===void 0){var D=g(_,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),B=g(_,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),j=_.createProgram();if(_.attachShader(j,D),_.attachShader(j,B),_.linkProgram(j),!_.getProgramParameter(j,_.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+_.getProgramInfoLog(j));D=I.o=j,_.useProgram(D),B=_.getUniformLocation(D,"sampler0"),I.j={K:_.getAttribLocation(D,"aVertex"),J:_.getAttribLocation(D,"aTex"),ma:B},I.u=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,I.u),_.enableVertexAttribArray(I.j.K),_.vertexAttribPointer(I.j.K,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),I.s=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,I.s),_.enableVertexAttribArray(I.j.J),_.vertexAttribPointer(I.j.J,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),_.uniform1i(B,0)}D=I.j,_.useProgram(I.o),_.canvas.width=A.width,_.canvas.height=A.height,_.viewport(0,0,A.width,A.height),_.activeTexture(_.TEXTURE0),I.h.bindTexture2d(A.glName),_.enableVertexAttribArray(D.K),_.bindBuffer(_.ARRAY_BUFFER,I.u),_.vertexAttribPointer(D.K,2,_.FLOAT,!1,0,0),_.enableVertexAttribArray(D.J),_.bindBuffer(_.ARRAY_BUFFER,I.s),_.vertexAttribPointer(D.J,2,_.FLOAT,!1,0,0),_.bindFramebuffer(_.DRAW_FRAMEBUFFER?_.DRAW_FRAMEBUFFER:_.FRAMEBUFFER,null),_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),_.colorMask(!0,!0,!0,!0),_.drawArrays(_.TRIANGLE_FAN,0,4),_.disableVertexAttribArray(D.K),_.disableVertexAttribArray(D.J),_.bindBuffer(_.ARRAY_BUFFER,null),I.h.bindTexture2d(0)})(f,S),typeof f.g.canvas.transferToImageBitmap=="function"?Promise.resolve(f.g.canvas.transferToImageBitmap()):E?Promise.resolve(f.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.g.canvas):(f.i===void 0&&(f.i=document.createElement("canvas")),new Promise((function(I){f.i.height=f.g.canvas.height,f.i.width=f.g.canvas.width,f.i.getContext("2d",{}).drawImage(f.g.canvas,0,0,f.g.canvas.width,f.g.canvas.height),I(f.i)})))}function K(f){this.g=f}var G=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function J(f,S){return S+f}function ne(f,S){window[f]=S}function ue(f){if(this.g=f,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=f&&f.locateFile||J,typeof window=="object")var S=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");S=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=S,f.options)for(var E=(S=o(Object.keys(f.options))).next();!E.done;E=S.next()){E=E.value;var I=f.options[E].default;I!==void 0&&(this.j[E]=typeof I=="function"?I():I)}}function ye(f){var S,E,I,A,_,D,B,j,Y,Q,re;return U((function(se){switch(se.g){case 1:return f.Z?(S=f.g.files===void 0?[]:typeof f.g.files=="function"?f.g.files(f.j):f.g.files,x(se,U((function(ie){switch(ie.g){case 1:return ie.o=2,x(ie,WebAssembly.instantiate(G),4);case 4:ie.g=3,ie.o=0;break;case 2:return ie.o=0,ie.j=null,ie.return(!1);case 3:return ie.return(!0)}})),2)):se.return();case 2:if(E=se.h,typeof window=="object")return ne("createMediapipeSolutionsWasm",{locateFile:f.locateFile}),ne("createMediapipeSolutionsPackedAssets",{locateFile:f.locateFile}),D=S.filter((function(ie){return ie.data!==void 0})),B=S.filter((function(ie){return ie.data===void 0})),j=Promise.all(D.map((function(ie){var xe=Ee(f,ie.url);if(ie.path!==void 0){var ve=ie.path;xe=xe.then((function(Fe){return f.overrideFile(ve,Fe),Promise.resolve(Fe)}))}return xe}))),Y=Promise.all(B.map((function(ie){return ie.simd===void 0||ie.simd&&E||!ie.simd&&!E?(function(xe){var ve=document.createElement("script");return ve.setAttribute("src",xe),ve.setAttribute("crossorigin","anonymous"),new Promise((function(Fe){ve.addEventListener("load",(function(){Fe()}),!1),ve.addEventListener("error",(function(){Fe()}),!1),document.body.appendChild(ve)}))})(f.locateFile(ie.url,f.$)):Promise.resolve()}))).then((function(){var ie,xe,ve;return U((function(Fe){if(Fe.g==1)return ie=window.createMediapipeSolutionsWasm,xe=window.createMediapipeSolutionsPackedAssets,ve=f,x(Fe,ie(xe),2);ve.h=Fe.h,Fe.g=0}))})),Q=U((function(ie){return f.g.graph&&f.g.graph.url?ie=x(ie,Ee(f,f.g.graph.url),0):(ie.g=0,ie=void 0),ie})),x(se,Promise.all([Y,j,Q]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return I=S.filter((function(ie){return ie.simd===void 0||ie.simd&&E||!ie.simd&&!E})).map((function(ie){return f.locateFile(ie.url,f.$)})),importScripts.apply(null,i(I)),A=f,x(se,createMediapipeSolutionsWasm(Module),6);case 6:A.h=se.h,f.l=new OffscreenCanvas(1,1),f.h.canvas=f.l,_=f.h.GL.createContext(f.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),f.h.GL.makeContextCurrent(_),se.g=4;break;case 7:if(f.l=document.createElement("canvas"),!(re=f.l.getContext("webgl2",{}))&&!(re=f.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),se.return();f.G=re,f.h.canvas=f.l,f.h.createContext(f.l,!0,!0,{});case 4:f.i=new f.h.SolutionWasm,f.Z=!1,se.g=0}}))}function Ee(f,S){var E,I;return U((function(A){return S in f.H?A.return(f.H[S]):(E=f.locateFile(S,""),I=fetch(E).then((function(_){return _.arrayBuffer()})),f.H[S]=I,A.return(I))}))}function Se(f,S,E){var I,A,_,D,B,j,Y,Q,re,se,ie,xe,ve,Fe;return U((function(Ue){switch(Ue.g){case 1:if(!E)return Ue.return(S);for(I={},A=0,_=o(Object.keys(E)),D=_.next();!D.done;D=_.next())B=D.value,typeof(j=E[B])!="string"&&j.type==="texture"&&S[j.stream]!==void 0&&++A;1<A&&(f.I=!1),Y=o(Object.keys(E)),D=Y.next();case 2:if(D.done){Ue.g=4;break}if(Q=D.value,typeof(re=E[Q])=="string")return ve=I,Fe=Q,x(Ue,(function(xr,hl,Zr){var Us;return U((function(Zo){return typeof Zr=="number"||Zr instanceof Uint8Array||Zr instanceof xr.h.Uint8BlobList?Zo.return(Zr):Zr instanceof xr.h.Texture2dDataOut?((Us=xr.u[hl])||(Us=new O(xr.h,xr.G),xr.u[hl]=Us),Zo.return(W(Us,Zr,xr.I))):Zo.return(void 0)}))})(f,Q,S[re]),14);if(se=S[re.stream],re.type==="detection_list"){if(se){for(var wt=se.getRectList(),Ht=se.getLandmarksList(),It=se.getClassificationsList(),_e=[],ct=0;ct<wt.size();++ct){var Xn=Da(wt.get(ct),Ba,Ua);Xn={boundingBox:{xCenter:vt(Xn,1),yCenter:vt(Xn,2),height:vt(Xn,3),width:vt(Xn,4),rotation:vt(Xn,5,0),rectId:fr(Xn,6)},landmarks:dr(Da(Ht.get(ct),Ls,Ko),Hn,1).map(k),V:v(Da(It.get(ct),Pa,Xo))},_e.push(Xn)}wt=_e}else wt=[];I[Q]=wt,Ue.g=7;break}if(re.type==="proto_list"){if(se){for(wt=Array(se.size()),Ht=0;Ht<se.size();Ht++)wt[Ht]=se.get(Ht);se.delete()}else wt=[];I[Q]=wt,Ue.g=7;break}if(se===void 0){Ue.g=3;break}if(re.type==="float_list"){I[Q]=se,Ue.g=7;break}if(re.type==="proto"){I[Q]=se,Ue.g=7;break}if(re.type!=="texture")throw Error("Unknown output config type: '"+re.type+"'");return(ie=f.u[Q])||(ie=new O(f.h,f.G),f.u[Q]=ie),x(Ue,W(ie,se,f.I),13);case 13:xe=Ue.h,I[Q]=xe;case 7:re.transform&&I[Q]&&(I[Q]=re.transform(I[Q])),Ue.g=3;break;case 14:ve[Fe]=Ue.h;case 3:D=Y.next(),Ue.g=2;break;case 4:return Ue.return(I)}}))}function be(f,S){for(var E=S.name||"$",I=[].concat(i(S.wants)),A=new f.h.StringList,_=o(S.wants),D=_.next();!D.done;D=_.next())A.push_back(D.value);_=f.h.PacketListener.implement({onResults:function(B){for(var j={},Y=0;Y<S.wants.length;++Y)j[I[Y]]=B.get(Y);var Q=f.listeners[E];Q&&(f.D=Se(f,j,S.outs).then((function(re){re=Q(re);for(var se=0;se<S.wants.length;++se){var ie=j[I[se]];typeof ie=="object"&&ie.hasOwnProperty&&ie.hasOwnProperty("delete")&&ie.delete()}re&&(f.D=re)})))}}),f.i.attachMultiListener(A,_),A.delete()}function pe(f){var S=this;f=f||{};var E={url:"face_detection_short.binarypb"},I={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new ue({locateFile:f.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:E,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(A){var _,D,B,j,Y;return U((function(Q){switch(Q.g){case 1:_=o(A==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),D=_.next();case 2:if(D.done){Q.g=4;break}return B=D.value,j="third_party/mediapipe/modules/face_detection/"+B,x(Q,Ee(S.g,B),5);case 5:Y=Q.h,S.g.overrideFile(j,Y),D=_.next(),Q.g=2;break;case 4:return E.url=A==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",I.graphOptionXref.calculatorName=A==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",Q.return(!0)}}))}},minDetectionConfidence:I}})}(n=ue.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},n.reset=function(){var f=this;return U((function(S){f.i&&(f.i.reset(),f.o={},f.u={}),S.g=0}))},n.setOptions=function(f,S){var E=this;if(S=S||this.g.options){for(var I=[],A=[],_={},D=o(Object.keys(f)),B=D.next();!B.done;_={R:_.R,S:_.S},B=D.next()){var j=B.value;j in this.j&&this.j[j]===f[j]||(this.j[j]=f[j],(B=S[j])!==void 0&&(B.onChange&&(_.R=B.onChange,_.S=f[j],I.push((function(Y){return function(){return U((function(Q){if(Q.g==1)return x(Q,Y.R(Y.S),2);Q.h===!0&&(E.s=!0),Q.g=0}))}})(_))),B.graphOptionXref&&(j={valueNumber:B.type===1?f[j]:0,valueBoolean:B.type===0&&f[j],valueString:B.type===2?f[j]:""},B=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),B.graphOptionXref),j),A.push(B))))}I.length===0&&A.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(A),this.A=(this.A===void 0?[]:this.A).concat(I))}},n.initialize=function(){var f=this;return U((function(S){return S.g==1?x(S,ye(f),2):S.g!=3?x(S,(function(E){var I,A,_,D,B,j,Y,Q;return U((function(re){if(re.g==1)return E.g.graph&&E.g.graph.url&&E.Y===E.g.graph.url?re.return():(E.s=!0,E.g.graph&&E.g.graph.url?(E.Y=E.g.graph.url,x(re,Ee(E,E.g.graph.url),3)):void(re.g=2));for(re.g!=2&&(I=re.h,E.i.loadGraph(I)),A=o(Object.keys(E.C)),_=A.next();!_.done;_=A.next())D=_.value,E.i.overrideFile(D,E.C[D]);if(E.C={},E.g.listeners)for(B=o(E.g.listeners),j=B.next();!j.done;j=B.next())Y=j.value,be(E,Y);Q=E.j,E.j={},E.setOptions(Q),re.g=0}))})(f),3):x(S,(function(E){var I,A,_,D,B,j;return U((function(Y){switch(Y.g){case 1:if(!E.s)return Y.return();if(!E.A){Y.g=2;break}I=o(E.A),A=I.next();case 3:if(A.done){Y.g=5;break}return x(Y,(0,A.value)(),4);case 4:A=I.next(),Y.g=3;break;case 5:E.A=void 0;case 2:if(E.B){for(_=new E.h.GraphOptionChangeRequestList,D=o(E.B),B=D.next();!B.done;B=D.next())j=B.value,_.push_back(j);E.i.changeOptions(_),_.delete(),E.B=void 0}E.s=!1,Y.g=0}}))})(f),0)}))},n.overrideFile=function(f,S){this.i?this.i.overrideFile(f,S):this.C[f]=S},n.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},n.send=function(f,S){var E,I,A,_,D,B,j,Y,Q,re=this;return U((function(se){switch(se.g){case 1:return re.g.inputs?(E=1e3*(S??performance.now()),x(se,re.D,2)):se.return();case 2:return x(se,re.initialize(),3);case 3:for(I=new re.h.PacketDataList,A=o(Object.keys(f)),_=A.next();!_.done;_=A.next())if(D=_.value,B=re.g.inputs[D]){e:{var ie=f[D];switch(B.type){case"video":var xe=re.o[B.stream];if(xe||(xe=new O(re.h,re.G),re.o[B.stream]=xe),xe.l===0&&(xe.l=xe.h.createTexture()),typeof HTMLVideoElement<"u"&&ie instanceof HTMLVideoElement)var ve=ie.videoWidth,Fe=ie.videoHeight;else typeof HTMLImageElement<"u"&&ie instanceof HTMLImageElement?(ve=ie.naturalWidth,Fe=ie.naturalHeight):(ve=ie.width,Fe=ie.height);Fe={glName:xe.l,width:ve,height:Fe},(ve=xe.g).canvas.width=Fe.width,ve.canvas.height=Fe.height,ve.activeTexture(ve.TEXTURE0),xe.h.bindTexture2d(xe.l),ve.texImage2D(ve.TEXTURE_2D,0,ve.RGBA,ve.RGBA,ve.UNSIGNED_BYTE,ie),xe.h.bindTexture2d(0),xe=Fe;break e;case"detections":for((xe=re.o[B.stream])||(xe=new K(re.h),re.o[B.stream]=xe),xe.data||(xe.data=new xe.g.DetectionListData),xe.data.reset(ie.length),Fe=0;Fe<ie.length;++Fe){ve=ie[Fe];var Ue=xe.data,wt=Ue.setBoundingBox,Ht=Fe,It=ve.boundingBox,_e=new Ba;if(Je(_e,1,It.xCenter),Je(_e,2,It.yCenter),Je(_e,3,It.height),Je(_e,4,It.width),Je(_e,5,It.rotation),Je(_e,6,It.rectId),It=yr(_e,Ua),wt.call(Ue,Ht,It),ve.landmarks)for(Ue=0;Ue<ve.landmarks.length;++Ue){var ct=!!(_e=ve.landmarks[Ue]).visibility;Ht=(wt=xe.data).addNormalizedLandmark,It=Fe,_e=Object.assign(Object.assign({},_e),{visibility:ct?_e.visibility:0}),Je(ct=new Hn,1,_e.x),Je(ct,2,_e.y),Je(ct,3,_e.z),_e.visibility&&Je(ct,4,_e.visibility),_e=yr(ct,Ms),Ht.call(wt,It,_e)}if(ve.V)for(Ue=0;Ue<ve.V.length;++Ue)Ht=(wt=xe.data).addClassification,It=Fe,_e=ve.V[Ue],Je(ct=new Cn,2,_e.ga),_e.index&&Je(ct,1,_e.index),_e.label&&Je(ct,3,_e.label),_e.displayName&&Je(ct,4,_e.displayName),_e=yr(ct,Ds),Ht.call(wt,It,_e)}xe=xe.data;break e;default:xe={}}}switch(j=xe,Y=B.stream,B.type){case"video":I.pushTexture2d(Object.assign(Object.assign({},j),{stream:Y,timestamp:E}));break;case"detections":(Q=j).stream=Y,Q.timestamp=E,I.pushDetectionList(Q);break;default:throw Error("Unknown input config type: '"+B.type+"'")}}return re.i.send(I),x(se,re.D,4);case 4:I.delete(),se.g=0}}))},n.onResults=function(f,S){this.listeners[S||"$"]=f},L("Solution",ue),L("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(n=pe.prototype).close=function(){return this.g.close(),Promise.resolve()},n.onResults=function(f){this.g.onResults(f)},n.initialize=function(){var f=this;return U((function(S){return x(S,f.g.initialize(),0)}))},n.reset=function(){this.g.reset()},n.send=function(f){var S=this;return U((function(E){return x(E,S.g.send(f),0)}))},n.setOptions=function(f){this.g.setOptions(f)},L("FaceDetection",pe),L("FACEDETECTION_LIPS",Va),L("FACEDETECTION_LEFT_EYE",Wa),L("FACEDETECTION_LEFT_EYEBROW",za),L("FACEDETECTION_RIGHT_EYE",Ga),L("FACEDETECTION_RIGHT_EYEBROW",ja),L("FACEDETECTION_FACE_OVAL",Ps),L("FACEDETECTION_CONTOURS",Bs),L("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),L("VERSION","0.4.1646425229")}).call(yi);var nr=function(){return nr=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},nr.apply(this,arguments)};function Ln(n,e,t,r){return new(t||(t=Promise))((function(a,s){function o(l){try{u(r.next(l))}catch(c){s(c)}}function i(l){try{u(r.throw(l))}catch(c){s(c)}}function u(l){var c;l.done?a(l.value):(c=l.value,c instanceof t?c:new t((function(p){p(c)}))).then(o,i)}u((r=r.apply(n,[])).next())}))}function Pn(n,e){var t,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(u){return function(l){return(function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||c[0]!==6&&c[0]!==2)){o=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(c[0]===6&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(n,o)}catch(p){c=[6,p],r=0}finally{t=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}})([u,l])}}}var Zm=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],xi={modelType:"short",runtime:"mediapipe",maxFaces:1},f_=(function(){function n(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new d_.FaceDetection({locateFile:function(r,a){return e.solutionPath?e.solutionPath.replace(/\/+$/,"")+"/"+r:a+"/"+r}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:e.modelType}),this.faceDetectorSolution.onResults((function(r){if(t.height=r.image.height,t.width=r.image.width,t.faces=[],r.detections!==null)for(var a=0,s=r.detections;a<s.length;a++){var o=s[a];t.faces.push(t.normalizedToAbsolute(o.landmarks,{xMin:u=(i=o.boundingBox).xCenter-i.width/2,xMax:u+i.width,yMin:l=i.yCenter-i.height/2,yMax:l+i.height,width:i.width,height:i.height}))}var i,u,l}))}return n.prototype.normalizedToAbsolute=function(e,t){var r=this;return{keypoints:e.map((function(a,s){return{x:a.x*r.width,y:a.y*r.height,name:Zm[s]}})),box:{xMin:t.xMin*this.width,yMin:t.yMin*this.height,xMax:t.xMax*this.width,yMax:t.yMax*this.height,width:t.width*this.width,height:t.height*this.height}}},n.prototype.estimateFaces=function(e,t){return Ln(this,void 0,void 0,(function(){var r,a;return Pn(this,(function(s){switch(s.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Ge?(a=ImageData.bind,[4,cf(e)]):[3,2];case 1:return r=new(a.apply(ImageData,[void 0,s.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:r=e,s.label=3;case 3:return e=r,[4,this.faceDetectorSolution.send({image:e})];case 4:return s.sent(),[2,this.faces]}}))}))},n.prototype.dispose=function(){this.faceDetectorSolution.close()},n.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},n})();function m_(n){return Ln(this,void 0,void 0,(function(){var e,t;return Pn(this,(function(r){switch(r.label){case 0:return e=(function(a){if(a==null)return nr({},xi);var s=nr({},a);return s.runtime="mediapipe",s.modelType==null&&(s.modelType=xi.modelType),s.maxFaces==null&&(s.maxFaces=xi.maxFaces),s})(n),[4,(t=new f_(e)).initialize()];case 1:return r.sent(),[2,t]}}))}))}function Jm(n){return n instanceof Ge?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function Qm(n){return n instanceof Ge?n:pf(n)}function bi(n,e){R(n.width!==0,(function(){return e+" width cannot be 0."})),R(n.height!==0,(function(){return e+" height cannot be 0."}))}function g_(n,e,t){var r=e.outputTensorSize,a=e.keepAspectRatio,s=e.borderMode,o=e.outputTensorFloatRange,i=Jm(n),u=(function(h,d){return{xCenter:.5*h.width,yCenter:.5*h.height,width:h.width,height:h.height,rotation:0}})(i),l=(function(h,d,m){if(m===void 0&&(m=!1),!m)return{top:0,left:0,right:0,bottom:0};var y=d.height,b=d.width;bi(d,"targetSize"),bi(h,"roi");var x,T,$=y/b,F=h.height/h.width,M=0,U=0;return $>F?(x=h.width,T=h.width*$,U=(1-F/$)/2):(x=h.height/$,T=h.height,M=(1-$/F)/2),h.width=x,h.height=T,{top:U,left:M,right:M,bottom:U}})(u,r,a),c=(function(h,d,m,y){var b=h.width,x=h.height,T=1,$=Math.cos(h.rotation),F=Math.sin(h.rotation),M=h.xCenter,U=h.yCenter,X=1/d,z=1/m,L=new Array(16);return L[0]=b*$*T*X,L[1]=-x*F*X,L[2]=0,L[3]=(-.5*b*$*T+.5*x*F+M)*X,L[4]=b*F*T*z,L[5]=x*$*z,L[6]=0,L[7]=(-.5*x*$-.5*b*F*T+U)*z,L[8]=0,L[9]=0,L[10]=b*X,L[11]=0,L[12]=0,L[13]=0,L[14]=0,L[15]=1,(function(C){if(C.length!==16)throw new Error("Array length must be 16 but got "+C.length);return[[C[0],C[1],C[2],C[3]],[C[4],C[5],C[6],C[7]],[C[8],C[9],C[10],C[11]],[C[12],C[13],C[14],C[15]]]})(L)})(u,i.width,i.height),p=Xe((function(){var h=Qm(n),d=Qn((function(b,x,T){return bi(T,"inputResolution"),[1/T.width*b[0][0]*x.width,1/T.height*b[0][1]*x.width,b[0][3]*x.width,1/T.width*b[1][0]*x.height,1/T.height*b[1][1]*x.height,b[1][3]*x.height,0,0]})(c,i,r),[1,8]),m=s==="zero"?"constant":"nearest",y=va.transform(on(je(h,"float32")),d,"bilinear",m,0,[r.height,r.width]);return o!=null?(function(b,x){var T=(function($,F,M,U){var X=(U-M)/255;return{scale:X,offset:M-0*X}})(0,0,x[0],x[1]);return Xe((function(){return Pe(me(b,T.scale),T.offset)}))})(y,o):y}));return{imageTensor:p,padding:l,transformationMatrix:c}}function Nc(n){n.reduceBoxesInLowestLayer==null&&(n.reduceBoxesInLowestLayer=!1),n.interpolatedScaleAspectRatio==null&&(n.interpolatedScaleAspectRatio=1),n.fixedAnchorSize==null&&(n.fixedAnchorSize=!1);for(var e=[],t=0;t<n.numLayers;){for(var r=[],a=[],s=[],o=[],i=t;i<n.strides.length&&n.strides[i]===n.strides[t];){var u=$c(n.minScale,n.maxScale,i,n.strides.length);if(i===0&&n.reduceBoxesInLowestLayer)s.push(1),s.push(2),s.push(.5),o.push(.1),o.push(u),o.push(u);else{for(var l=0;l<n.aspectRatios.length;++l)s.push(n.aspectRatios[l]),o.push(u);if(n.interpolatedScaleAspectRatio>0){var c=i===n.strides.length-1?1:$c(n.minScale,n.maxScale,i+1,n.strides.length);o.push(Math.sqrt(u*c)),s.push(n.interpolatedScaleAspectRatio)}}i++}for(var p=0;p<s.length;++p){var h=Math.sqrt(s[p]);r.push(o[p]/h),a.push(o[p]*h)}var d=0,m=0;if(n.featureMapHeight.length>0)d=n.featureMapHeight[t],m=n.featureMapWidth[t];else{var y=n.strides[t];d=Math.ceil(n.inputSizeHeight/y),m=Math.ceil(n.inputSizeWidth/y)}for(var b=0;b<d;++b)for(var x=0;x<m;++x)for(var T=0;T<r.length;++T){var $={xCenter:(x+n.anchorOffsetX)/m,yCenter:(b+n.anchorOffsetY)/d,width:0,height:0};n.fixedAnchorSize?($.width=1,$.height=1):($.width=a[T],$.height=r[T]),e.push($)}t=i}return e}function $c(n,e,t,r){return r===1?.5*(n+e):n+(e-n)*t/(r-1)}function Rc(n,e){var t=e[0],r=e[1];return[t*n[0]+r*n[1]+n[3],t*n[4]+r*n[5]+n[7]]}function y_(n,e,t,r){return Ln(this,void 0,void 0,(function(){var a,s,o,i,u;return Pn(this,(function(l){switch(l.label){case 0:return n.sort((function(c,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,c.score)})),a=Qn(n.map((function(c){return[c.locationData.relativeBoundingBox.yMin,c.locationData.relativeBoundingBox.xMin,c.locationData.relativeBoundingBox.yMax,c.locationData.relativeBoundingBox.xMax]}))),s=gt(n.map((function(c){return c.score[0]}))),[4,va.nonMaxSuppressionAsync(a,s,e,t)];case 1:return[4,(o=l.sent()).array()];case 2:return i=l.sent(),u=n.filter((function(c,p){return i.indexOf(p)>-1})),bn([a,s,o]),[2,u]}}))}))}function x_(n,e,t){return Ln(this,void 0,void 0,(function(){var r,a,s,o,i;return Pn(this,(function(u){switch(u.label){case 0:return r=n[0],a=n[1],s=(function(l,c,p){return Xe((function(){var h,d,m,y;p.reverseOutputOrder?(d=tt(we(l,[0,p.boxCoordOffset+0],[-1,1])),h=tt(we(l,[0,p.boxCoordOffset+1],[-1,1])),y=tt(we(l,[0,p.boxCoordOffset+2],[-1,1])),m=tt(we(l,[0,p.boxCoordOffset+3],[-1,1]))):(h=tt(we(l,[0,p.boxCoordOffset+0],[-1,1])),d=tt(we(l,[0,p.boxCoordOffset+1],[-1,1])),m=tt(we(l,[0,p.boxCoordOffset+2],[-1,1])),y=tt(we(l,[0,p.boxCoordOffset+3],[-1,1]))),d=Pe(me(De(d,p.xScale),c.w),c.x),h=Pe(me(De(h,p.yScale),c.h),c.y),p.applyExponentialOnBoxSize?(m=me(Fn(De(m,p.hScale)),c.h),y=me(Fn(De(y,p.wScale)),c.w)):(m=me(De(m,p.hScale),c.h),y=me(De(y,p.wScale),c.h));var b=Ce(h,De(m,2)),x=Ce(d,De(y,2)),T=Pe(h,De(m,2)),$=Pe(d,De(y,2)),F=it([Z(b,[p.numBoxes,1]),Z(x,[p.numBoxes,1]),Z(T,[p.numBoxes,1]),Z($,[p.numBoxes,1])],1);if(p.numKeypoints)for(var M=0;M<p.numKeypoints;++M){var U=p.keypointCoordOffset+M*p.numValuesPerKeypoint,X=void 0,z=void 0;p.reverseOutputOrder?(X=tt(we(l,[0,U],[-1,1])),z=tt(we(l,[0,U+1],[-1,1]))):(z=tt(we(l,[0,U],[-1,1])),X=tt(we(l,[0,U+1],[-1,1])));var L=Pe(me(De(X,p.xScale),c.w),c.x),C=Pe(me(De(z,p.yScale),c.h),c.y);F=it([F,Z(L,[p.numBoxes,1]),Z(C,[p.numBoxes,1])],1)}return F}))})(a,e,t),o=Xe((function(){var l=r;return t.sigmoidScore?(t.scoreClippingThresh!=null&&(l=Af(r,-t.scoreClippingThresh,t.scoreClippingThresh)),l=Rr(l)):l})),[4,b_(s,o,t)];case 1:return i=u.sent(),bn([s,o]),[2,i]}}))}))}function b_(n,e,t){return Ln(this,void 0,void 0,(function(){var r,a,s,o,i,u,l,c,p,h,d,m;return Pn(this,(function(y){switch(y.label){case 0:return r=[],[4,n.data()];case 1:return a=y.sent(),[4,e.data()];case 2:for(s=y.sent(),o=0;o<t.numBoxes;++o)if(!(t.minScoreThresh!=null&&s[o]<t.minScoreThresh||(i=o*t.numCoords,u=v_(a[i+0],a[i+1],a[i+2],a[i+3],s[o],t.flipVertically,o),(l=u.locationData.relativeBoundingBox).width<0||l.height<0))){if(t.numKeypoints>0)for((c=u.locationData).relativeKeypoints=[],p=t.numKeypoints*t.numValuesPerKeypoint,h=0;h<p;h+=t.numValuesPerKeypoint)d=i+t.keypointCoordOffset+h,m={x:a[d+0],y:t.flipVertically?1-a[d+1]:a[d+1]},c.relativeKeypoints.push(m);r.push(u)}return[2,r]}}))}))}function v_(n,e,t,r,a,s,o){return{score:[a],ind:o,locationData:{relativeBoundingBox:{xMin:e,yMin:s?1-t:n,xMax:r,yMax:s?1-n:t,width:r-e,height:t-n}}}}var yo,w_={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},S_={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},vi={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},k_={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},T_={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},E_={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},C_={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},I_=(function(){function n(e,t,r){this.detectorModel=t,this.maxFaces=r,e==="full"?(this.imageToTensorConfig=C_,this.tensorsToDetectionConfig=T_,this.anchors=Nc(S_)):(this.imageToTensorConfig=E_,this.tensorsToDetectionConfig=k_,this.anchors=Nc(w_));var a=gt(this.anchors.map((function(u){return u.width}))),s=gt(this.anchors.map((function(u){return u.height}))),o=gt(this.anchors.map((function(u){return u.xCenter}))),i=gt(this.anchors.map((function(u){return u.yCenter})));this.anchorTensor={x:o,y:i,w:a,h:s}}return n.prototype.dispose=function(){this.detectorModel.dispose(),bn([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},n.prototype.reset=function(){},n.prototype.detectFaces=function(e,t){return t===void 0&&(t=!1),Ln(this,void 0,void 0,(function(){var r,a,s,o,i,u,l,c,p,h,d;return Pn(this,(function(m){switch(m.label){case 0:return e==null?(this.reset(),[2,[]]):(r=Xe((function(){var y=je(Qm(e),"float32");return t&&(y=tt(va.flipLeftRight(on(y,0)),[0])),y})),a=g_(r,this.imageToTensorConfig),s=a.imageTensor,o=a.transformationMatrix,i=this.detectorModel.execute(s,"Identity:0"),u=(function(y){return Xe((function(){var b=(function($){return Xe((function(){return[we($,[0,0,0],[1,-1,1]),we($,[0,0,1],[1,-1,-1])]}))})(y),x=b[0],T=b[1];return{boxes:tt(T),logits:tt(x)}}))})(i),l=u.boxes,[4,x_([c=u.logits,l],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=m.sent()).length===0?(bn([r,s,i,c,l]),[2,p]):[4,y_(p,this.maxFaces,.3)];case 2:return h=m.sent(),d=(function(y,b){y===void 0&&(y=[]);var x,T=(x=b,[].concat.apply([],x));return y.forEach((function($){var F=$.locationData;F.relativeKeypoints.forEach((function(C){var q=Rc(T,[C.x,C.y]),ee=q[0],te=q[1];C.x=ee,C.y=te}));var M=F.relativeBoundingBox,U=Number.MAX_VALUE,X=Number.MAX_VALUE,z=Number.MIN_VALUE,L=Number.MIN_VALUE;[[M.xMin,M.yMin],[M.xMin+M.width,M.yMin],[M.xMin+M.width,M.yMin+M.height],[M.xMin,M.yMin+M.height]].forEach((function(C){var q=Rc(T,C),ee=q[0],te=q[1];U=Math.min(U,ee),z=Math.max(z,ee),X=Math.min(X,te),L=Math.max(L,te)})),F.relativeBoundingBox={xMin:U,xMax:z,yMin:X,yMax:L,width:z-U,height:L-X}})),y})(h,o),bn([r,s,i,c,l]),[2,d]}}))}))},n.prototype.estimateFaces=function(e,t){return Ln(this,void 0,void 0,(function(){var r,a;return Pn(this,(function(s){return r=Jm(e),a=!!t&&t.flipHorizontal,[2,this.detectFaces(e,a).then((function(o){return o.map((function(i){for(var u=i.locationData.relativeKeypoints.map((function(m,y){return nr(nr({},m),{x:m.x*r.width,y:m.y*r.height,name:Zm[y]})})),l=i.locationData.relativeBoundingBox,c=0,p=["width","xMax","xMin"];c<p.length;c++)l[p[c]]*=r.width;for(var h=0,d=["height","yMax","yMin"];h<d.length;h++)l[d[h]]*=r.height;return{keypoints:u,box:l}}))}))]}))}))},n})();function N_(n){return Ln(this,void 0,void 0,(function(){var e,t,r;return Pn(this,(function(a){switch(a.label){case 0:return e=(function(s){if(s==null)return nr({},vi);var o=nr({},s);return o.modelType==null&&(o.modelType=vi.modelType),o.maxFaces==null&&(o.maxFaces=vi.maxFaces),o.detectorModelUrl==null&&(o.modelType==="full"?o.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":o.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),o})(n),t=typeof e.detectorModelUrl=="string"&&e.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,Km(e.detectorModelUrl,{fromTFHub:t})];case 1:return r=a.sent(),[2,new I_(e.modelType,r,e.maxFaces)]}}))}))}function $_(n,e){return Ln(this,void 0,void 0,(function(){var t,r;return Pn(this,(function(a){if(n===yo.MediaPipeFaceDetector){if(r=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,N_(t)];if(t.runtime==="mediapipe")return[2,m_(t)];r=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(n+" is not a supported model name.")}))}))}function wi(n){return n.width*n.height}function _c(n){var e=n.xCenter-n.width/2,t=e+n.width,r=n.yCenter-n.height/2;return{xMin:e,xMax:t,yMin:r,yMax:r+n.height,width:n.width,height:n.height}}function R_(n,e){var t=_c(n),r=_c(e);if(!(function(o,i){return!(o.xMax<i.xMin||i.xMax<o.xMin||o.yMax<i.yMin||i.yMax<o.yMin)})(t,r))return 0;var a=wi((function(o,i){var u=Math.max(o.xMin,i.xMin),l=Math.min(o.xMax,i.xMax),c=Math.max(o.yMin,i.yMin),p=Math.min(o.yMax,i.yMax);return{xMin:u,xMax:l,yMin:c,yMax:p,width:Math.max(l-u,0),height:Math.max(p-c,0)}})(t,r)),s=wi(t)+wi(r)-a;return s>0?a/s:0}function __(n,e,t,r){var a=n.width,s=n.height,o=1,i=Math.cos(n.rotation),u=Math.sin(n.rotation),l=n.xCenter,c=n.yCenter,p=1/e,h=1/t,d=new Array(16);return d[0]=a*i*o*p,d[1]=-s*u*p,d[2]=0,d[3]=(-.5*a*i*o+.5*s*u+l)*p,d[4]=a*u*o*h,d[5]=s*i*h,d[6]=0,d[7]=(-.5*s*i-.5*a*u*o+c)*h,d[8]=0,d[9]=0,d[10]=a*p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,(function(m){if(m.length!==16)throw new Error("Array length must be 16 but got "+m.length);return[[m[0],m[1],m[2],m[3]],[m[4],m[5],m[6],m[7]],[m[8],m[9],m[10],m[11]],[m[12],m[13],m[14],m[15]]]})(d)}function e2(n){return n instanceof Ge?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function t2(n){return n-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}function n2(n){return n instanceof Ge?n:pf(n)}function Si(n,e){R(n.width!==0,(function(){return e+" width cannot be 0."})),R(n.height!==0,(function(){return e+" height cannot be 0."}))}function A_(n,e){var t=(function(r,a,s,o){var i=a-r,u=o-s,l=u/i;return{scale:l,offset:s-r*l}})(0,255,e[0],e[1]);return Xe((function(){return Pe(me(n,t.scale),t.offset)}))}function O_(n,e,t){var r=e.outputTensorSize,a=e.keepAspectRatio,s=e.outputTensorFloatRange,o=e2(n),i=(function(p,h){return h?{xCenter:h.xCenter*p.width,yCenter:h.yCenter*p.height,width:h.width*p.width,height:h.height*p.height,rotation:h.rotation}:{xCenter:.5*p.width,yCenter:.5*p.height,width:p.width,height:p.height,rotation:0}})(o,t),u=(function(p,h,d){if(d===void 0&&(d=!1),!d)return{top:0,left:0,right:0,bottom:0};var m=h.height,y=h.width;Si(h,"targetSize"),Si(p,"roi");var b,x,T=m/y,$=p.height/p.width,F=0,M=0;return T>$?(b=p.width,x=p.width*T,M=(1-$/T)/2):(b=p.height/T,x=p.height,F=(1-T/$)/2),p.width=b,p.height=x,{top:M,left:F,right:F,bottom:M}})(i,r,a),l=__(i,o.width,o.height),c=Xe((function(){var p=n2(n),h=Qn((function(y,b,x){return Si(x,"inputResolution"),[1/x.width*y[0][0]*b.width,1/x.height*y[0][1]*b.width,y[0][3]*b.width,1/x.width*y[1][0]*b.height,1/x.height*y[1][1]*b.height,y[1][3]*b.height,0,0]})(l,o,r),[1,8]),d="nearest",m=va.transform(on(je(p,"float32")),h,"bilinear",d,0,[r.height,r.width]);return s!=null?A_(m,s):m}));return{imageTensor:c,padding:u,transformationMatrix:l}}function Ac(n){return{xCenter:n.xMin+n.width/2,yCenter:n.yMin+n.height/2,width:n.width,height:n.height}}function F_(n){var e=n.relativeKeypoints;if(e.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var t=Number.MAX_VALUE,r=Number.MAX_VALUE,a=Number.MIN_VALUE,s=Number.MIN_VALUE;return e.forEach((function(o){t=Math.min(t,o.x),a=Math.max(a,o.x),r=Math.min(r,o.y),s=Math.max(s,o.y)})),{xCenter:(t+a)/2,yCenter:(r+s)/2,width:a-t,height:s-r}}function Oc(n,e,t,r,a){var s=t==="rect"?(function(o,i,u){var l,c=o.locationData;return l=Ac(c.boundingBox),l})(n):(function(o,i){var u=o.locationData;return i==="boundingbox"?Ac(u.relativeBoundingBox):F_(u)})(n,e);return a&&(s.rotation=(function(o,i,u){var l,c=o.locationData,p=u.rotationVectorStartKeypointIndex,h=u.rotationVectorEndKeypointIndex;l=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var d=c.relativeKeypoints[p].x*i.width,m=c.relativeKeypoints[p].y*i.height,y=c.relativeKeypoints[h].x*i.width,b=c.relativeKeypoints[h].y*i.height;return t2(l-Math.atan2(-(b-m),y-d))})(n,r,a)),s}function D_(n,e,t){for(var r=0;r<e.length;++r){var a=e[r],s=t[n[r]];s.x=a.x,s.y=a.y}}function M_(n,e,t,r){if(typeof e=="string"){if(e==="copy")for(var a=0;a<t.length;++a)r[n[a]].z=t[a].z}else{var s=(function(o,i){for(var u=0,l=0;l<i.length;++l)u+=o[i[l]].z;return u/i.length})(r,e);for(a=0;a<n.length;++a)r[n[a]].z=s}}function L_(n,e){for(var t=(function(i){var u=[].concat.apply([],i.map((function(d){return d.indexesMapping})));if(u.length===0)throw new Error("There should be at least one landmark in indexes mapping");var l=u[0],c=u[0],p=new Set(u);p.forEach((function(d){l=Math.min(l,d),c=Math.max(c,d)}));var h=p.size;if(l!==0)throw new Error("Indexes are expected to start with 0 instead of "+l);if(c+1!==h)throw new Error("Indexes should have no gaps but "+(c-h+1)+" indexes are missing");return h})(e),r=new Array(t).fill(null).map(Object),a=0;a<n.length;++a){var s=n[a],o=e[a];if(s.length!==o.indexesMapping.length)throw new Error("There are "+s.length+" refinement landmarks while mapping has "+o.indexesMapping.length);D_(o.indexesMapping,s,r),M_(o.indexesMapping,o.zRefinement,s,r)}return r}function P_(n,e){return n.map((function(t){var r=cn(cn({},t),{x:t.x*e.width,y:t.y*e.height});return t.z!=null&&(r.z=t.z*e.width),r}))}function B_(n,e){return n==="none"?e:(function(t){return 1/(1+Math.exp(-t))})(e)}function wr(n,e,t,r){return Rn(this,void 0,void 0,(function(){var a,s,o,i,u,l,c,p;return _n(this,(function(h){switch(h.label){case 0:return t=t||e.flipHorizontally||!1,r=r||e.flipVertically||!1,a=n.size,s=a/e.numLandmarks,[4,n.data()];case 1:for(o=h.sent(),i=[],u=0;u<e.numLandmarks;++u)l=u*s,(p={x:0,y:0}).x=t?e.inputImageWidth-o[l]:o[l],s>1&&(p.y=r?e.inputImageHeight-o[l+1]:o[l+1]),s>2&&(p.z=o[l+2]),s>3&&(p.score=B_(e.visibilityActivation,o[l+3])),i.push(p);for(c=0;c<i.length;++c)(p=i[c]).x=p.x/e.inputImageWidth,p.y=p.y/e.inputImageHeight,p.z=p.z/e.inputImageWidth/(e.normalizeZ||1);return[2,i]}}))}))}function Fc(n,e,t){var r=n.width,a=n.height,s=n.rotation;if(t.rotation==null&&t.rotationDegree==null||(s=(function(l,c){return c.rotation!=null?l+=c.rotation:c.rotationDegree!=null&&(l+=Math.PI*c.rotationDegree/180),t2(l)})(s,t)),s===0)n.xCenter=n.xCenter+r*t.shiftX,n.yCenter=n.yCenter+a*t.shiftY;else{var o=(e.width*r*t.shiftX*Math.cos(s)-e.height*a*t.shiftY*Math.sin(s))/e.width,i=(e.width*r*t.shiftX*Math.sin(s)+e.height*a*t.shiftY*Math.cos(s))/e.height;n.xCenter=n.xCenter+o,n.yCenter=n.yCenter+i}{var u=Math.max(r*e.width,a*e.height);r=u/e.width,a=u/e.height}return n.width=r*t.scaleX,n.height=a*t.scaleY,n}(yo||(yo={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var ki={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},Ti={flipHorizontal:!1,staticImageMode:!1},Dc={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5},U_={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1]},Mc={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},V_={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Lc={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Pc={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},W_={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},z_={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},G_={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},j_={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},H_={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},X_={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},xo,q_=(function(){function n(e,t,r,a){this.detector=e,this.landmarkModel=t,this.maxFaces=r,this.withAttention=a,this.prevFaceRectsFromLandmarks=null}return n.prototype.estimateFaces=function(e,t){return Rn(this,void 0,void 0,(function(){var r,a,s,o,i,u,l,c,p,h,d,m,y,b=this;return _n(this,(function(x){switch(x.label){case 0:return r=(function(F){if(F==null)return cn({},Ti);var M=cn({},F);return M.flipHorizontal==null&&(M.flipHorizontal=Ti.flipHorizontal),M.staticImageMode==null&&(M.staticImageMode=Ti.staticImageMode),M})(t),e==null?(this.reset(),[2,[]]):(a=e2(e),s=Xe((function(){var F=je(n2(e),"float32");return r.flipHorizontal&&(F=tt(va.flipLeftRight(on(F,0)),[0])),F})),o=this.prevFaceRectsFromLandmarks,r.staticImageMode||o==null||o.length<this.maxFaces?[4,this.detector.detectFaces(s,!1)]:[3,2]);case 1:return(u=x.sent()).length===0?(this.reset(),s.dispose(),[2,[]]):(i=u.map((function(F){return b.faceDetectionFrontDetectionToRoi(F,a)})),[3,3]);case 2:i=[],x.label=3;case 3:return T=.5,$=[],[i,o||[]].forEach((function(F){return F.forEach((function(M){($=$.filter((function(U){return R_(M,U)<=T}))).push(M)}))})),l=$,[4,Promise.all(l.map((function(F){return b.faceLandmark(F,s)})))];case 4:for(c=x.sent(),p=[],this.prevFaceRectsFromLandmarks=[],h=0;h<c.length;++h)(d=c[h])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(d,a)),(m=P_(d,a))!=null&&m.forEach((function(F,M){var U=Ym.get(M);U!=null&&(F.name=U)})),y=Su(m),p.push({keypoints:m,box:y.locationData.relativeBoundingBox}));return s.dispose(),[2,p]}var T,$}))}))},n.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},n.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},n.prototype.faceDetectionFrontDetectionToRoi=function(e,t){return Fc(Oc(e,"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),t,Dc)},n.prototype.faceLandmark=function(e,t){return Rn(this,void 0,void 0,(function(){var r,a,s,o,i,u,l;return _n(this,(function(c){switch(c.label){case 0:return r=O_(t,U_,e).imageTensor,a=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),s=this.landmarkModel.execute(r,a),o=s[0],i=s.slice(1),[4,o.data()];case 1:return c.sent()[0]<.5?(bn(s),bn(r),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(i)]:[3,3];case 2:return u=c.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(i)];case 4:u=c.sent(),c.label=5;case 5:return l=(function(p,h,d){d===void 0&&(d={ignoreRotation:!1});for(var m=[],y=0,b=p;y<b.length;y++){var x=b[y],T=x.x-.5,$=x.y-.5,F=d.ignoreRotation?0:h.rotation,M=Math.cos(F)*T-Math.sin(F)*$,U=Math.sin(F)*T+Math.cos(F)*$;M=M*h.width+h.xCenter,U=U*h.height+h.yCenter;var X=x.z*h.width,z=cn({},x);z.x=M,z.y=U,z.z=X,m.push(z)}return m})(u,e),bn(s),bn(r),[2,l]}}))}))},n.prototype.tensorsToFaceLandmarks=function(e){return Rn(this,void 0,void 0,(function(){return _n(this,(function(t){return[2,wr(e[0],Mc)]}))}))},n.prototype.tensorsToFaceLandmarksWithAttention=function(e){return Rn(this,void 0,void 0,(function(){var t,r,a,s,o,i;return _n(this,(function(u){switch(u.label){case 0:return[4,wr(e[0],Mc)];case 1:return t=u.sent(),[4,wr(e[1],V_)];case 2:return r=u.sent(),[4,wr(e[3],Lc)];case 3:return a=u.sent(),[4,wr(e[5],Lc)];case 4:return s=u.sent(),[4,wr(e[4],Pc)];case 5:return o=u.sent(),[4,wr(e[2],Pc)];case 6:return i=u.sent(),[2,L_([t,r,a,s,o,i],[W_,z_,G_,j_,H_,X_])]}}))}))},n.prototype.faceLandmarksToRoi=function(e,t){return Fc(Oc(Su(e),"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),t,Dc)},n})();function K_(n){return Rn(this,void 0,void 0,(function(){var e,t,r,a;return _n(this,(function(s){switch(s.label){case 0:return e=(function(o){if(o==null)return cn({},ki);var i=cn({},o);return i.runtime="tfjs",i.maxFaces==null&&(i.maxFaces=ki.maxFaces),i.refineLandmarks==null&&(i.refineLandmarks=ki.refineLandmarks),i.landmarkModelUrl==null&&(i.landmarkModelUrl=i.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),i})(n),t=typeof e.landmarkModelUrl=="string"&&e.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Km(e.landmarkModelUrl,{fromTFHub:t})];case 1:return r=s.sent(),[4,$_(yo.MediaPipeFaceDetector,{modelType:"short",maxFaces:e.maxFaces,detectorModelUrl:e.detectorModelUrl,runtime:e.runtime})];case 2:return a=s.sent(),[2,new q_(a,r,e.maxFaces,e.refineLandmarks)]}}))}))}function Y_(n,e){return Rn(this,void 0,void 0,(function(){var t,r;return _n(this,(function(a){if(n===xo.MediaPipeFaceMesh){if(r=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,K_(t)];if(t.runtime==="mediapipe")return[2,h_(t)];r=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(n+" is not a supported model name.")}))}))}(function(n){n.MediaPipeFaceMesh="MediaPipeFaceMesh"})(xo||(xo={}));class Q_{constructor(){fl(this,"detector"),fl(this,"modelLocation",Jo.CDN)}async loadModels(e){const t=xo.MediaPipeFaceMesh,r=e||this.modelLocation,a={runtime:"mediapipe",solutionPath:(()=>{switch(r){case Jo.CDN:return"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh";case Jo.SelfHosted:const{protocol:o,host:i}=location;return`${o}//${i}/models/mediapipe/`}})(),refineLandmarks:!0},s=await Y_(t,a);this.detector=s}async _detect(e){if(this.detector===void 0)return;const t={flipHorizontal:!1},r=await this.detector.estimateFaces(e,t);return r.length===0?void 0:r[0].keypoints}async detect(e){let t=r2(e);if(t.width===0||t.height===0)return{faceBox:void 0,landmarks:[],videoFrame:t};const r=await this._detect(t);if(r===void 0)return{faceBox:void 0,landmarks:[],videoFrame:t};const{width:a,height:s}=t,o=r.map(i=>({x:i.x/a,y:i.y/s,z:i.z||0}));return{faceBox:a2(o),landmarks:o,videoFrame:t}}}export{Q_ as TFMediaPipeFaceDetector};
