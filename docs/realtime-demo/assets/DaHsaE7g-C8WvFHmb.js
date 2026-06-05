import{t as e}from"./chunk-C4N-s-pu.js";import{a as t,h as n,p as r,r as i,s as a}from"./index-_2I1jTg8.js";import{t as o}from"./BH7tr9ha-mFT7xVrQ.js";var s=e(((e,t)=>{var n=function(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`unable to locate global object`)}();t.exports=e=n.fetch,n.fetch&&(e.default=n.fetch.bind(n)),e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response})),c=e(((e,t)=>{t.exports={}})),l=Object.defineProperty,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t,n)=>u(e,typeof t==`symbol`?t:t+``,n);function f(e,t){for(var n=0;n<t.length;n++){let r=t[n];if(typeof r!=`string`&&!Array.isArray(r)){for(let t in r)if(t!=="default"&&!(t in e)){let n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}))}var p={},m;function h(){return m||(m=1,(function(){var e;function n(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var r=typeof Object.defineProperties==`function`?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function i(e){e=[typeof globalThis==`object`&&globalThis,e,typeof window==`object`&&window,typeof self==`object`&&self,typeof t==`object`&&t];for(var n=0;n<e.length;++n){var r=e[n];if(r&&r.Math==Math)return r}throw Error(`Cannot find global object`)}var a=i(this);function o(e,t){if(t)e:{var n=a;e=e.split(`.`);for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in n))break e;n=n[o]}e=e[e.length-1],i=n[e],t=t(i),t!=i&&t!=null&&r(n,e,{configurable:!0,writable:!0,value:t})}}o(`Symbol`,function(e){function t(e){if(this instanceof t)throw TypeError(`Symbol is not a constructor`);return new n(i+(e||``)+`_`+ a++,e)}function n(e,t){this.g=e,r(this,`description`,{configurable:!0,writable:!0,value:t})}if(e)return e;n.prototype.toString=function(){return this.g};var i=`jscomp_symbol_`+(1e9*Math.random()>>>0)+`_`,a=0;return t}),o(`Symbol.iterator`,function(e){if(e)return e;e=Symbol(`Symbol.iterator`);for(var t=`Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array`.split(` `),i=0;i<t.length;i++){var o=a[t[i]];typeof o==`function`&&typeof o.prototype[e]!=`function`&&r(o.prototype,e,{configurable:!0,writable:!0,value:function(){return s(n(this))}})}return e});function s(e){return e={next:e},e[Symbol.iterator]=function(){return this},e}function c(e){var t=typeof Symbol<`u`&&Symbol.iterator&&e[Symbol.iterator];return t?t.call(e):{next:n(e)}}function l(e){if(!(e instanceof Array)){e=c(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);e=n}return e}var u=typeof Object.create==`function`?Object.create:function(e){function t(){}return t.prototype=e,new t},d;if(typeof Object.setPrototypeOf==`function`)d=Object.setPrototypeOf;else{var f;e:{var p={a:!0},m={};try{m.__proto__=p,f=m.a;break e}catch{}f=!1}d=f?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw TypeError(e+` is not extensible`);return e}:null}var h=d;function g(e,t){if(e.prototype=u(t.prototype),e.prototype.constructor=e,h)h(e,t);else for(var n in t)if(n!=`prototype`)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.ea=t.prototype}function _(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function v(e){if(e.l)throw TypeError(`Generator is already running`);e.l=!0}_.prototype.o=function(e){this.h=e};function y(e,t){e.j={U:t,V:!0},e.g=e.m||e.s}_.prototype.return=function(e){this.j={return:e},this.g=this.s};function b(e,t,n){return e.g=n,{value:t}}function x(e){this.g=new _,this.h=e}function S(e,t){v(e.g);var n=e.g.i;return n?C(e,`return`in n?n.return:function(e){return{value:e,done:!0}},t,e.g.return):(e.g.return(t),w(e))}function C(e,t,n,r){try{var i=t.call(e.g.i,n);if(!(i instanceof Object))throw TypeError(`Iterator result `+i+` is not an object`);if(!i.done)return e.g.l=!1,i;var a=i.value}catch(t){return e.g.i=null,y(e.g,t),w(e)}return e.g.i=null,r.call(e.g,a),w(e)}function w(e){for(;e.g.g;)try{var t=e.h(e.g);if(t)return e.g.l=!1,{value:t.value,done:!1}}catch(t){e.g.h=void 0,y(e.g,t)}if(e.g.l=!1,e.g.j){if(t=e.g.j,e.g.j=null,t.V)throw t.U;return{value:t.return,done:!0}}return{value:void 0,done:!0}}function T(e){this.next=function(t){return v(e.g),e.g.i?t=C(e,e.g.i.next,t,e.g.o):(e.g.o(t),t=w(e)),t},this.throw=function(t){return v(e.g),e.g.i?t=C(e,e.g.i.throw,t,e.g.o):(y(e.g,t),t=w(e)),t},this.return=function(t){return S(e,t)},this[Symbol.iterator]=function(){return this}}function E(e,t){return t=new T(new x(t)),h&&e.prototype&&h(t,e.prototype),t}function D(e,t){e instanceof String&&(e+=``);var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}var O=typeof Object.assign==`function`?Object.assign:function(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e};o(`Object.assign`,function(e){return e||O}),o(`Promise`,function(e){function t(e){this.h=0,this.i=void 0,this.g=[],this.o=!1;var t=this.j();try{e(t.resolve,t.reject)}catch(e){t.reject(e)}}function n(){this.g=null}function r(e){return e instanceof t?e:new t(function(t){t(e)})}if(e)return e;n.prototype.h=function(e){if(this.g==null){this.g=[];var t=this;this.i(function(){t.l()})}this.g.push(e)};var i=a.setTimeout;n.prototype.i=function(e){i(e,0)},n.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var t=0;t<e.length;++t){var n=e[t];e[t]=null;try{n()}catch(e){this.j(e)}}}this.g=null},n.prototype.j=function(e){this.i(function(){throw e})},t.prototype.j=function(){function e(e){return function(r){n||(n=!0,e.call(t,r))}}var t=this,n=!1;return{resolve:e(this.C),reject:e(this.l)}},t.prototype.C=function(e){if(e===this)this.l(TypeError(`A Promise cannot resolve to itself`));else if(e instanceof t)this.F(e);else{e:switch(typeof e){case`object`:var n=e!=null;break e;case`function`:n=!0;break e;default:n=!1}n?this.u(e):this.m(e)}},t.prototype.u=function(e){var t=void 0;try{t=e.then}catch(e){this.l(e);return}typeof t==`function`?this.G(t,e):this.m(e)},t.prototype.l=function(e){this.s(2,e)},t.prototype.m=function(e){this.s(1,e)},t.prototype.s=function(e,t){if(this.h!=0)throw Error(`Cannot settle(`+e+`, `+t+`): Promise already settled in state`+this.h);this.h=e,this.i=t,this.h===2&&this.D(),this.A()},t.prototype.D=function(){var e=this;i(function(){if(e.B()){var t=a.console;typeof t<`u`&&t.error(e.i)}},1)},t.prototype.B=function(){if(this.o)return!1;var e=a.CustomEvent,t=a.Event,n=a.dispatchEvent;return typeof n>`u`?!0:(typeof e==`function`?e=new e(`unhandledrejection`,{cancelable:!0}):typeof t==`function`?e=new t(`unhandledrejection`,{cancelable:!0}):(e=a.document.createEvent(`CustomEvent`),e.initCustomEvent(`unhandledrejection`,!1,!0,e)),e.promise=this,e.reason=this.i,n(e))},t.prototype.A=function(){if(this.g!=null){for(var e=0;e<this.g.length;++e)o.h(this.g[e]);this.g=null}};var o=new n;return t.prototype.F=function(e){var t=this.j();e.J(t.resolve,t.reject)},t.prototype.G=function(e,t){var n=this.j();try{e.call(t,n.resolve,n.reject)}catch(e){n.reject(e)}},t.prototype.then=function(e,n){function r(e,t){return typeof e==`function`?function(t){try{i(e(t))}catch(e){a(e)}}:t}var i,a,o=new t(function(e,t){i=e,a=t});return this.J(r(e,i),r(n,a)),o},t.prototype.catch=function(e){return this.then(void 0,e)},t.prototype.J=function(e,t){function n(){switch(r.h){case 1:e(r.i);break;case 2:t(r.i);break;default:throw Error(`Unexpected state: `+r.h)}}var r=this;this.g==null?o.h(n):this.g.push(n),this.o=!0},t.resolve=r,t.reject=function(e){return new t(function(t,n){n(e)})},t.race=function(e){return new t(function(t,n){for(var i=c(e),a=i.next();!a.done;a=i.next())r(a.value).J(t,n)})},t.all=function(e){var n=c(e),i=n.next();return i.done?r([]):new t(function(e,t){function a(t){return function(n){o[t]=n,s--,s==0&&e(o)}}var o=[],s=0;do o.push(void 0),s++,r(i.value).J(a(o.length-1),t),i=n.next();while(!i.done)})},t}),o(`Object.is`,function(e){return e||function(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}}),o(`Array.prototype.includes`,function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var r=n.length;for(t||=0,0>t&&(t=Math.max(t+r,0));t<r;t++){var i=n[t];if(i===e||Object.is(i,e))return!0}return!1}}),o(`String.prototype.includes`,function(e){return e||function(e,t){if(this==null)throw TypeError(`The 'this' value for String.prototype.includes must not be null or undefined`);if(e instanceof RegExp)throw TypeError(`First argument to String.prototype.includes must not be a regular expression`);return this.indexOf(e,t||0)!==-1}}),o(`Array.prototype.keys`,function(e){return e||function(){return D(this,function(e){return e})}});var ee=this||self;function k(e,t){e=e.split(`.`);var n=ee;e[0]in n||typeof n.execScript>`u`||n.execScript(`var `+e[0]);for(var r;e.length&&(r=e.shift());)e.length||t===void 0?n=n[r]&&n[r]!==Object.prototype[r]?n[r]:n[r]={}:n[r]=t}function A(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var te,ne=typeof TextDecoder<`u`,re,ie=typeof TextEncoder<`u`;function ae(e){if(ie)e=(re||=new TextEncoder).encode(e);else{var t=void 0;t=t===void 0?!1:t;for(var n=0,r=new Uint8Array(3*e.length),i=0;i<e.length;i++){var a=e.charCodeAt(i);if(128>a)r[n++]=a;else{if(2048>a)r[n++]=a>>6|192;else{if(55296<=a&&57343>=a){if(56319>=a&&i<e.length){var o=e.charCodeAt(++i);if(56320<=o&&57343>=o){a=1024*(a-55296)+o-56320+65536,r[n++]=a>>18|240,r[n++]=a>>12&63|128,r[n++]=a>>6&63|128,r[n++]=a&63|128;continue}else i--}if(t)throw Error(`Found an unpaired surrogate`);a=65533}r[n++]=a>>12|224,r[n++]=a>>6&63|128}r[n++]=a&63|128}}e=r.subarray(0,n)}return e}var oe={},se=null;function ce(e,t){t===void 0&&(t=0),de(),t=oe[t];for(var n=Array(Math.floor(e.length/3)),r=t[64]||``,i=0,a=0;i<e.length-2;i+=3){var o=e[i],s=e[i+1],c=e[i+2],l=t[o>>2];o=t[(o&3)<<4|s>>4],s=t[(s&15)<<2|c>>6],c=t[c&63],n[a++]=l+o+s+c}switch(l=0,c=r,e.length-i){case 2:l=e[i+1],c=t[(l&15)<<2]||r;case 1:e=e[i],n[a]=t[e>>2]+t[(e&3)<<4|l>>4]+c+r}return n.join(``)}function le(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):`=.`.indexOf(e[t-1])!=-1&&(n=`=.`.indexOf(e[t-2])==-1?n-1:n-2);var r=new Uint8Array(n),i=0;return ue(e,function(e){r[i++]=e}),r.subarray(0,i)}function ue(e,t){function n(t){for(;r<e.length;){var n=e.charAt(r++),i=se[n];if(i!=null)return i;if(!/^[\s\xa0]*$/.test(n))throw Error(`Unknown base64 encoding at char: `+n)}return t}de();for(var r=0;;){var i=n(-1),a=n(0),o=n(64),s=n(64);if(s===64&&i===-1)break;t(i<<2|a>>4),o!=64&&(t(a<<4&240|o>>2),s!=64&&t(o<<6&192|s))}}function de(){if(!se){se={};for(var e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(``),t=[`+/=`,`+/`,`-_=`,`-_.`,`-_`],n=0;5>n;n++){var r=e.concat(t[n].split(``));oe[n]=r;for(var i=0;i<r.length;i++){var a=r[i];se[a]===void 0&&(se[a]=i)}}}}var fe=typeof Uint8Array.prototype.slice==`function`,pe;function me(e,t,n){return t===n?pe||=new Uint8Array:fe?e.slice(t,n):new Uint8Array(e.subarray(t,n))}var he=0,j=0;function ge(e,t){t=t===void 0?{}:t,t=t.v===void 0?!1:t.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=t,e&&_e(this,e)}function _e(e,t){t=t.constructor===Uint8Array?t:t.constructor===ArrayBuffer||t.constructor===Array?new Uint8Array(t):t.constructor===String?le(t):t instanceof Uint8Array?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array,e.h=t,e.l=0,e.j=e.h.length,e.g=e.l}ge.prototype.reset=function(){this.g=this.l};function ve(e){for(var t=128,n=0,r=0,i=0;4>i&&128<=t;i++)t=e.h[e.g++],n|=(t&127)<<7*i;if(128<=t&&(t=e.h[e.g++],n|=(t&127)<<28,r|=(t&127)>>4),128<=t)for(i=0;5>i&&128<=t;i++)t=e.h[e.g++],r|=(t&127)<<7*i+3;if(128>t)return e=n>>>0,t=r>>>0,(r=t&2147483648)&&(e=~e+1>>>0,t=~t>>>0,e==0&&(t=t+1>>>0)),e=4294967296*t+(e>>>0),r?-e:e;e.m=!0}ge.prototype.i=function(){var e=this.h,t=e[this.g],n=t&127;return 128>t?(this.g+=1,n):(t=e[this.g+1],n|=(t&127)<<7,128>t?(this.g+=2,n):(t=e[this.g+2],n|=(t&127)<<14,128>t?(this.g+=3,n):(t=e[this.g+3],n|=(t&127)<<21,128>t?(this.g+=4,n):(t=e[this.g+4],n|=(t&15)<<28,128>t?(this.g+=5,n>>>0):(this.g+=5,128<=e[this.g++]&&128<=e[this.g++]&&128<=e[this.g++]&&128<=e[this.g++]&&this.g++,n)))))},ge.prototype.o=function(){var e=this.h[this.g],t=this.h[this.g+1],n=this.h[this.g+2],r=this.h[this.g+3];return this.g+=4,n=(e<<0|t<<8|n<<16|r<<24)>>>0,e=2*(n>>31)+1,t=n>>>23&255,n&=8388607,t==255?n?NaN:1/0*e:t==0?e*2**-149*n:e*2**(t-150)*(n+2**23)};var ye=[];function be(){this.g=new Uint8Array(64),this.h=0}be.prototype.push=function(e){if(!(this.h+1<this.g.length)){var t=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(t)}this.g[this.h++]=e},be.prototype.length=function(){return this.h},be.prototype.end=function(){var e=this.g,t=this.h;return this.h=0,me(e,0,t)};function M(e,t){for(;127<t;)e.push(t&127|128),t>>>=7;e.push(t)}function xe(e){var t={},n=t.N===void 0?!1:t.N;this.o={v:t.v===void 0?!1:t.v},this.N=n,t=this.o,ye.length?(n=ye.pop(),t&&(n.v=t.v),e&&_e(n,e),e=n):e=new ge(e,t),this.g=e,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}xe.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function Se(e){var t=e.g;if((t=t.g==t.j)||(t=e.j)||(t=e.g,t=t.m||0>t.g||t.g>t.j),t)return!1;e.m=e.g.g,t=e.g.i();var n=t&7;return n!=0&&n!=5&&n!=1&&n!=2&&n!=3&&n!=4?(e.j=!0,!1):(e.i=t,e.l=t>>>3,e.h=n,!0)}function Ce(e){switch(e.h){case 0:if(e.h!=0)Ce(e);else{for(e=e.g;e.h[e.g]&128;)e.g++;e.g++}break;case 1:e.h==1?(e=e.g,e.g+=8):Ce(e);break;case 2:if(e.h!=2)Ce(e);else{var t=e.g.i();e=e.g,e.g+=t}break;case 5:e.h==5?(e=e.g,e.g+=4):Ce(e);break;case 3:t=e.l;do{if(!Se(e)){e.j=!0;break}if(e.h==4){e.l!=t&&(e.j=!0);break}Ce(e)}while(!0);break;default:e.j=!0}}function we(e,t,n){var r=e.g.j,i=e.g.i(),a=e.g.g+i;if(e.g.j=a,n(t,e),n=a-e.g.g,n!==0)throw Error(`Message parsing ended unexpectedly. Expected to read `+i+` bytes, instead read `+(i-n)+` bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=a,e.g.j=r,t}function Te(e){return e.g.o()}function Ee(e){var t=e.g.i();e=e.g;var n=e.g;e.g+=t,e=e.h;var r;if(ne)(r=te)||(r=te=new TextDecoder(`utf-8`,{fatal:!1})),r=r.decode(e.subarray(n,n+t));else{t=n+t;for(var i=[],a=null,o,s,c;n<t;)o=e[n++],128>o?i.push(o):224>o?n>=t?i.push(65533):(s=e[n++],194>o||(s&192)!=128?(n--,i.push(65533)):i.push((o&31)<<6|s&63)):240>o?n>=t-1?i.push(65533):(s=e[n++],(s&192)!=128||o===224&&160>s||o===237&&160<=s||((r=e[n++])&192)!=128?(n--,i.push(65533)):i.push((o&15)<<12|(s&63)<<6|r&63)):244>=o?n>=t-2?i.push(65533):(s=e[n++],(s&192)!=128||(o<<28)+(s-144)>>30||((r=e[n++])&192)!=128||((c=e[n++])&192)!=128?(n--,i.push(65533)):(o=(o&7)<<18|(s&63)<<12|(r&63)<<6|c&63,o-=65536,i.push((o>>10&1023)+55296,(o&1023)+56320))):i.push(65533),8192<=i.length&&(a=A(a,i),i.length=0);r=A(a,i)}return r}function De(e,t,n){var r=e.g.i();for(r=e.g.g+r;e.g.g<r;)n.push(t.call(e.g))}function Oe(e,t){e.h==2?De(e,ge.prototype.o,t):t.push(Te(e))}function ke(){this.h=[],this.i=0,this.g=new be}function Ae(e,t){t.length!==0&&(e.h.push(t),e.i+=t.length)}function je(e){var t=e.i+e.g.length();if(t===0)return new Uint8Array;t=new Uint8Array(t);for(var n=e.h,r=n.length,i=0,a=0;a<r;a++){var o=n[a];o.length!==0&&(t.set(o,i),i+=o.length)}return n=e.g,r=n.h,r!==0&&(t.set(n.g.subarray(0,r),i),n.h=0),e.h=[t],t}function Me(e,t,n){if(n!=null){M(e.g,8*t+5),e=e.g;var r=n;r=(n=+(0>r))?-r:r,r===0?0<1/r?he=j=0:(j=0,he=2147483648):isNaN(r)?(j=0,he=2147483647):34028234663852886e22<r?(j=0,he=(n<<31|2139095040)>>>0):11754943508222875e-54>r?(r=Math.round(r/2**-149),j=0,he=(n<<31|r)>>>0):(t=Math.floor(Math.log(r)/Math.LN2),r*=2**-t,r=Math.round(8388608*r),16777216<=r&&++t,j=0,he=(n<<31|t+127<<23|r&8388607)>>>0),n=he,e.push(n>>>0&255),e.push(n>>>8&255),e.push(n>>>16&255),e.push(n>>>24&255)}}var Ne=typeof Uint8Array==`function`;function N(e,t,n){if(e!=null)return typeof e==`object`?Ne&&e instanceof Uint8Array?n(e):Pe(e,t,n):t(e)}function Pe(e,t,n){if(Array.isArray(e)){for(var r=Array(e.length),i=0;i<e.length;i++)r[i]=N(e[i],t,n);return Array.isArray(e)&&e.W&&Le(r),r}for(i in r={},e)r[i]=N(e[i],t,n);return r}function Fe(e){return typeof e==`number`?isFinite(e)?e:String(e):e}var Ie={W:{value:!0,configurable:!0}};function Le(e){return Array.isArray(e)&&!Object.isFrozen(e)&&Object.defineProperties(e,Ie),e}var Re;function P(e,t,n){var r=Re;Re=null,e||=r,r=this.constructor.ca,e||=r?[r]:[],this.j=r?0:-1,this.m=this.g=null,this.h=e;e:{if(r=this.h.length,e=r-1,r&&(r=this.h[e],!(typeof r!=`object`||!r||Array.isArray(r)||Ne&&r instanceof Uint8Array))){this.l=e-this.j,this.i=r;break e}t!==void 0&&-1<t?(this.l=Math.max(t,e+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(n)for(t=0;t<n.length;t++)e=n[t],e<this.l?(e+=this.j,(r=this.h[e])?Le(r):this.h[e]=ze):(Be(this),(r=this.i[e])?Le(r):this.i[e]=ze)}var ze=Object.freeze(Le([]));function Be(e){var t=e.l+e.j;e.h[t]||(e.i=e.h[t]={})}function F(e,t,n){return t===-1?null:n!==void 0&&n||t>=e.l?e.i?e.i[t]:void 0:e.h[t+e.j]}function Ve(e,t){var n=n===void 0?!1:n,r=F(e,t,n);return r??=ze,r===ze&&(r=Le([]),I(e,t,r,n)),r}function He(e){var t=Ve(e,3);if(e.m||={},!e.m[3]){for(var n=0;n<t.length;n++)t[n]=+t[n];e.m[3]=!0}return t}function Ue(e,t,n){return e=F(e,t),e??n}function We(e,t,n){return e=F(e,t),e=e==null?e:+e,e??(n===void 0?0:n)}function I(e,t,n,r){r!==void 0&&r||t>=e.l?(Be(e),e.i[t]=n):e.h[t+e.j]=n}function Ge(e,t,n){if(n===-1)return null;if(e.g||={},!e.g[n]){var r=F(e,n,!1);r&&(e.g[n]=new t(r))}return e.g[n]}function Ke(e,t){e.g||={};var n=e.g[1];if(!n){var r=Ve(e,1);n=[];for(var i=0;i<r.length;i++)n[i]=new t(r[i]);e.g[1]=n}return n}function qe(e,t,n){var r=r===void 0?!1:r;e.g||={};var i=n&&Ye(n);e.g[t]=n,I(e,t,i,r)}function Je(e,t,n,r){var i=Ke(e,n);t||=new n,e=Ve(e,1),r==null?(i.push(t),e.push(Ye(t))):(i.splice(r,0,t),e.splice(r,0,Ye(t)))}P.prototype.toJSON=function(){return Pe(Ye(this),Fe,ce)};function Ye(e,t){if(e.g)for(var n in e.g){var r=e.g[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)r[i]&&Ye(r[i]);else r&&Ye(r)}return e.h}P.prototype.toString=function(){return Ye(this).toString()};function Xe(e,t){if(e=e.o){Ae(t,t.g.end());for(var n=0;n<e.length;n++)Ae(t,e[n])}}function Ze(e,t){if(t.h==4)return!1;var n=t.m;return Ce(t),t.N||(t=me(t.g.h,n,t.g.g),(n=e.o)?n.push(t):e.o=[t]),!0}function Qe(e){P.call(this,e,-1,et)}g(Qe,P),Qe.prototype.getRows=function(){return F(this,1)},Qe.prototype.getCols=function(){return F(this,2)},Qe.prototype.getPackedDataList=function(){return He(this)},Qe.prototype.getLayout=function(){return Ue(this,4,0)};function $e(e,t){for(;Se(t);)switch(t.i){case 8:var n=t.g.i();I(e,1,n);break;case 16:n=t.g.i(),I(e,2,n);break;case 29:case 26:Oe(t,e.getPackedDataList());break;case 32:n=ve(t.g),I(e,4,n);break;default:if(!Ze(e,t))return e}return e}var et=[3];function tt(e,t){var n=void 0;return new(n||=Promise)(function(r,i){function a(e){try{s(t.next(e))}catch(e){i(e)}}function o(e){try{s(t.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,o)}s((t=t.apply(e,void 0)).next())})}function nt(e){P.call(this,e)}g(nt,P);function rt(e,t){for(;Se(t);)switch(t.i){case 8:var n=t.g.i();I(e,1,n);break;case 21:n=Te(t),I(e,2,n);break;case 26:n=Ee(t),I(e,3,n);break;case 34:n=Ee(t),I(e,4,n);break;default:if(!Ze(e,t))return e}return e}function it(e){P.call(this,e,-1,at)}g(it,P),it.prototype.addClassification=function(e,t){return Je(this,e,nt,t),this};var at=[1];function ot(e){P.call(this,e)}g(ot,P);function st(e,t){for(;Se(t);)switch(t.i){case 13:var n=Te(t);I(e,1,n);break;case 21:n=Te(t),I(e,2,n);break;case 29:n=Te(t),I(e,3,n);break;case 37:n=Te(t),I(e,4,n);break;case 45:n=Te(t),I(e,5,n);break;default:if(!Ze(e,t))return e}return e}function ct(e){P.call(this,e,-1,ut)}g(ct,P);function lt(e){e:{var t=new ct;for(e=new xe(e);Se(e);)switch(e.i){case 10:Je(t,we(e,new ot,st),ot,void 0);break;default:if(!Ze(t,e))break e}}return t}var ut=[1];function dt(e){P.call(this,e)}g(dt,P);function ft(e){P.call(this,e,-1,mt)}g(ft,P),ft.prototype.getVertexType=function(){return Ue(this,1,0)},ft.prototype.getPrimitiveType=function(){return Ue(this,2,0)},ft.prototype.getVertexBufferList=function(){return He(this)},ft.prototype.getIndexBufferList=function(){return Ve(this,4)};function pt(e,t){for(;Se(t);)switch(t.i){case 8:var n=ve(t.g);I(e,1,n);break;case 16:n=ve(t.g),I(e,2,n);break;case 29:case 26:Oe(t,e.getVertexBufferList());break;case 32:case 34:n=t;var r=e.getIndexBufferList();n.h==2?De(n,ge.prototype.i,r):r.push(n.g.i());break;default:if(!Ze(e,t))return e}return e}var mt=[3,4];function ht(e){P.call(this,e)}g(ht,P),ht.prototype.getMesh=function(){return Ge(this,ft,1)},ht.prototype.getPoseTransformMatrix=function(){return Ge(this,Qe,2)};function gt(e){e:{var t=new ht;for(e=new xe(e);Se(e);)switch(e.i){case 10:var n=we(e,new ft,pt);qe(t,1,n);break;case 18:n=we(e,new Qe,$e),qe(t,2,n);break;default:if(!Ze(t,e))break e}}return t}function _t(e,t,n){if(n=e.createShader(n===0?e.VERTEX_SHADER:e.FRAGMENT_SHADER),e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+e.getShaderInfoLog(n));return n}function vt(e){return Ke(e,nt).map(function(e){return{index:Ue(e,1,0),Y:We(e,2),label:F(e,3)==null?void 0:Ue(e,3,``),displayName:F(e,4)==null?void 0:Ue(e,4,``)}})}function yt(e){return{x:We(e,1),y:We(e,2),z:We(e,3),visibility:F(e,4)==null?void 0:We(e,4)}}function bt(e,t){this.h=e,this.g=t,this.l=0}function xt(e,t,n){return St(e,t),typeof e.g.canvas.transferToImageBitmap==`function`?Promise.resolve(e.g.canvas.transferToImageBitmap()):n?Promise.resolve(e.g.canvas):typeof createImageBitmap==`function`?createImageBitmap(e.g.canvas):(e.i===void 0&&(e.i=document.createElement(`canvas`)),new Promise(function(t){e.i.height=e.g.canvas.height,e.i.width=e.g.canvas.width,e.i.getContext(`2d`,{}).drawImage(e.g.canvas,0,0,e.g.canvas.width,e.g.canvas.height),t(e.i)}))}function St(e,t){var n=e.g;if(e.m===void 0){var r=_t(n,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),i=_t(n,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),a=n.createProgram();if(n.attachShader(a,r),n.attachShader(a,i),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+n.getProgramInfoLog(a));r=e.m=a,n.useProgram(r),i=n.getUniformLocation(r,`sampler0`),e.j={I:n.getAttribLocation(r,`aVertex`),H:n.getAttribLocation(r,`aTex`),da:i},e.s=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.s),n.enableVertexAttribArray(e.j.I),n.vertexAttribPointer(e.j.I,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),e.o=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.o),n.enableVertexAttribArray(e.j.H),n.vertexAttribPointer(e.j.H,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.uniform1i(i,0)}r=e.j,n.useProgram(e.m),n.canvas.width=t.width,n.canvas.height=t.height,n.viewport(0,0,t.width,t.height),n.activeTexture(n.TEXTURE0),e.h.bindTexture2d(t.glName),n.enableVertexAttribArray(r.I),n.bindBuffer(n.ARRAY_BUFFER,e.s),n.vertexAttribPointer(r.I,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(r.H),n.bindBuffer(n.ARRAY_BUFFER,e.o),n.vertexAttribPointer(r.H,2,n.FLOAT,!1,0,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER?n.DRAW_FRAMEBUFFER:n.FRAMEBUFFER,null),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.colorMask(!0,!0,!0,!0),n.drawArrays(n.TRIANGLE_FAN,0,4),n.disableVertexAttribArray(r.I),n.disableVertexAttribArray(r.H),n.bindBuffer(n.ARRAY_BUFFER,null),e.h.bindTexture2d(0)}function Ct(e){this.g=e}var wt=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Tt(e,t){return t+e}function Et(e,t){window[e]=t}function Dt(e){var t=document.createElement(`script`);return t.setAttribute(`src`,e),t.setAttribute(`crossorigin`,`anonymous`),new Promise(function(e){t.addEventListener(`load`,function(){e()},!1),t.addEventListener(`error`,function(){e()},!1),document.body.appendChild(t)})}function Ot(){return tt(this,function e(){return E(e,function(e){switch(e.g){case 1:return e.m=2,b(e,WebAssembly.instantiate(wt),4);case 4:e.g=3,e.m=0;break;case 2:return e.m=0,e.j=null,e.return(!1);case 3:return e.return(!0)}})})}function kt(e){if(this.g=e,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P=``,this.B={},this.locateFile=e&&e.locateFile||Tt,typeof window==`object`)var t=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf(`/`))+`/`;else if(typeof location<`u`)t=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf(`/`))+`/`;else throw Error(`solutions can only be loaded on a web page or in a web worker`);if(this.S=t,e.options){t=c(Object.keys(e.options));for(var n=t.next();!n.done;n=t.next()){n=n.value;var r=e.options[n].default;r!==void 0&&(this.j[n]=typeof r==`function`?r():r)}}}e=kt.prototype,e.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function At(e,t){return e.g.files===void 0?[]:typeof e.g.files==`function`?e.g.files(t):e.g.files}function jt(e){return tt(e,function e(){var t=this,n,r,i,a,o,s,c,u,d,f,p;return E(e,function(e){switch(e.g){case 1:return n=t,t.R?(r=At(t,t.j),b(e,Ot(),2)):e.return();case 2:if(i=e.h,typeof window==`object`)return Et(`createMediapipeSolutionsWasm`,{locateFile:t.locateFile}),Et(`createMediapipeSolutionsPackedAssets`,{locateFile:t.locateFile}),s=r.filter(function(e){return e.data!==void 0}),c=r.filter(function(e){return e.data===void 0}),u=Promise.all(s.map(function(e){var t=Pt(n,e.url);if(e.path!==void 0){var r=e.path;t=t.then(function(e){return n.overrideFile(r,e),Promise.resolve(e)})}return t})),d=Promise.all(c.map(function(e){return e.simd===void 0||e.simd&&i||!e.simd&&!i?Dt(n.locateFile(e.url,n.S)):Promise.resolve()})).then(function(){return tt(n,function e(){var t,n,r=this;return E(e,function(e){if(e.g==1)return t=window.createMediapipeSolutionsWasm,n=window.createMediapipeSolutionsPackedAssets,b(e,t(n),2);r.h=e.h,e.g=0})})}),f=(function(){return tt(n,function e(){var t=this;return E(e,function(e){return t.g.graph&&t.g.graph.url?e=b(e,Pt(t,t.g.graph.url),0):(e.g=0,e=void 0),e})})})(),b(e,Promise.all([d,u,f]),7);if(typeof importScripts!=`function`)throw Error(`solutions can only be loaded on a web page or in a web worker`);return a=r.filter(function(e){return e.simd===void 0||e.simd&&i||!e.simd&&!i}).map(function(e){return n.locateFile(e.url,n.S)}),importScripts.apply(null,l(a)),b(e,createMediapipeSolutionsWasm(Module),6);case 6:t.h=e.h,t.l=new OffscreenCanvas(1,1),t.h.canvas=t.l,o=t.h.GL.createContext(t.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<`u`?2:1}),t.h.GL.makeContextCurrent(o),e.g=4;break;case 7:if(t.l=document.createElement(`canvas`),p=t.l.getContext(`webgl2`,{}),!p&&(p=t.l.getContext(`webgl`,{}),!p))return alert(`Failed to create WebGL canvas context when passing video frame.`),e.return();t.D=p,t.h.canvas=t.l,t.h.createContext(t.l,!0,!0,{});case 4:t.i=new t.h.SolutionWasm,t.R=!1,e.g=0}})})}function Mt(e){return tt(e,function e(){var t=this,n,r,i,a,o,s,l,u;return E(e,function(e){if(e.g==1){if(t.g.graph&&t.g.graph.url&&t.P===t.g.graph.url)return e.return();if(t.o=!0,!t.g.graph||!t.g.graph.url){e.g=2;return}return t.P=t.g.graph.url,b(e,Pt(t,t.g.graph.url),3)}for(e.g!=2&&(n=e.h,t.i.loadGraph(n)),r=c(Object.keys(t.B)),i=r.next();!i.done;i=r.next())a=i.value,t.i.overrideFile(a,t.B[a]);if(t.B={},t.g.listeners)for(o=c(t.g.listeners),s=o.next();!s.done;s=o.next())l=s.value,Lt(t,l);u=t.j,t.j={},t.setOptions(u),e.g=0})})}e.reset=function(){return tt(this,function e(){var t=this;return E(e,function(e){t.i&&(t.i.reset(),t.m={},t.s={}),e.g=0})})},e.setOptions=function(e,t){var n=this;if(t||=this.g.options){for(var r=[],i=[],a={},o=c(Object.keys(e)),s=o.next();!s.done;a={K:a.K,L:a.L},s=o.next()){var l=s.value;l in this.j&&this.j[l]===e[l]||(this.j[l]=e[l],s=t[l],s!==void 0&&(s.onChange&&(a.K=s.onChange,a.L=e[l],r.push((function(e){return function(){return tt(n,function t(){var n,r=this;return E(t,function(t){if(t.g==1)return b(t,e.K(e.L),2);n=t.h,n===!0&&(r.o=!0),t.g=0})})}})(a))),s.graphOptionXref&&(l={valueNumber:s.type===1?e[l]:0,valueBoolean:s.type===0?e[l]:!1,valueString:s.type===2?e[l]:``},s=Object.assign(Object.assign(Object.assign({},{calculatorName:``,calculatorIndex:0}),s.graphOptionXref),l),i.push(s))))}(r.length!==0||i.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(i),this.u=(this.u===void 0?[]:this.u).concat(r))}};function Nt(e){return tt(e,function e(){var t=this,n,r,i,a,o,s,l;return E(e,function(e){switch(e.g){case 1:if(!t.o)return e.return();if(!t.u){e.g=2;break}n=c(t.u),r=n.next();case 3:if(r.done){e.g=5;break}return i=r.value,b(e,i(),4);case 4:r=n.next(),e.g=3;break;case 5:t.u=void 0;case 2:if(t.A){for(a=new t.h.GraphOptionChangeRequestList,o=c(t.A),s=o.next();!s.done;s=o.next())l=s.value,a.push_back(l);t.i.changeOptions(a),a.delete(),t.A=void 0}t.o=!1,e.g=0}})})}e.initialize=function(){return tt(this,function e(){var t=this;return E(e,function(e){return e.g==1?b(e,jt(t),2):e.g==3?b(e,Nt(t),0):b(e,Mt(t),3)})})};function Pt(e,t){return tt(e,function e(){var n=this,r,i;return E(e,function(e){return t in n.F?e.return(n.F[t]):(r=n.locateFile(t,``),i=fetch(r).then(function(e){return e.arrayBuffer()}),n.F[t]=i,e.return(i))})})}e.overrideFile=function(e,t){this.i?this.i.overrideFile(e,t):this.B[e]=t},e.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},e.send=function(e,t){return tt(this,function n(){var r=this,i,a,o,s,l,u,d,f,p;return E(n,function(n){switch(n.g){case 1:return r.g.inputs?(i=1e3*(t??performance.now()),b(n,r.C,2)):n.return();case 2:return b(n,r.initialize(),3);case 3:for(a=new r.h.PacketDataList,o=c(Object.keys(e)),s=o.next();!s.done;s=o.next())if(l=s.value,u=r.g.inputs[l]){e:{var m=r,h=e[l];switch(u.type){case`video`:var g=m.m[u.stream];if(g||(g=new bt(m.h,m.D),m.m[u.stream]=g),m=g,m.l===0&&(m.l=m.h.createTexture()),typeof HTMLVideoElement<`u`&&h instanceof HTMLVideoElement){var _=h.videoWidth;g=h.videoHeight}else typeof HTMLImageElement<`u`&&h instanceof HTMLImageElement?(_=h.naturalWidth,g=h.naturalHeight):(_=h.width,g=h.height);g={glName:m.l,width:_,height:g},_=m.g,_.canvas.width=g.width,_.canvas.height=g.height,_.activeTexture(_.TEXTURE0),m.h.bindTexture2d(m.l),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,_.RGBA,_.UNSIGNED_BYTE,h),m.h.bindTexture2d(0),m=g;break e;case`detections`:for(g=m.m[u.stream],g||(g=new Ct(m.h),m.m[u.stream]=g),m=g,m.data||=new m.g.DetectionListData,m.data.reset(h.length),g=0;g<h.length;++g){_=h[g];var v=m.data,y=v.setBoundingBox,x=g,S=_.T,C=new dt;I(C,1,S.Z),I(C,2,S.$),I(C,3,S.height),I(C,4,S.width),I(C,5,S.rotation),I(C,6,S.X);var w=S=new ke;Me(w,1,F(C,1)),Me(w,2,F(C,2)),Me(w,3,F(C,3)),Me(w,4,F(C,4)),Me(w,5,F(C,5));var T=F(C,6);if(T!=null&&T!=null){M(w.g,48);var E=w.g,D=T;T=0>D,D=Math.abs(D);var O=D>>>0;for(D=Math.floor((D-O)/4294967296),D>>>=0,T&&(D=~D>>>0,O=(~O>>>0)+1,4294967295<O&&(O=0,D++,4294967295<D&&(D=0))),he=O,j=D,T=he,O=j;0<O||127<T;)E.push(T&127|128),T=(T>>>7|O<<25)>>>0,O>>>=7;E.push(T)}if(Xe(C,w),S=je(S),y.call(v,x,S),_.O)for(v=0;v<_.O.length;++v)C=_.O[v],w=!!C.visibility,y=m.data,x=y.addNormalizedLandmark,S=g,C=Object.assign(Object.assign({},C),{visibility:w?C.visibility:0}),w=new ot,I(w,1,C.x),I(w,2,C.y),I(w,3,C.z),C.visibility&&I(w,4,C.visibility),E=C=new ke,Me(E,1,F(w,1)),Me(E,2,F(w,2)),Me(E,3,F(w,3)),Me(E,4,F(w,4)),Me(E,5,F(w,5)),Xe(w,E),C=je(C),x.call(y,S,C);if(_.M)for(v=0;v<_.M.length;++v){if(y=m.data,x=y.addClassification,S=g,C=_.M[v],w=new nt,I(w,2,C.Y),C.index&&I(w,1,C.index),C.label&&I(w,3,C.label),C.displayName&&I(w,4,C.displayName),E=C=new ke,O=F(w,1),O!=null&&O!=null)if(M(E.g,8),T=E.g,0<=O)M(T,O);else{for(D=0;9>D;D++)T.push(O&127|128),O>>=7;T.push(1)}Me(E,2,F(w,2)),T=F(w,3),T!=null&&(T=ae(T),M(E.g,26),M(E.g,T.length),Ae(E,E.g.end()),Ae(E,T)),T=F(w,4),T!=null&&(T=ae(T),M(E.g,34),M(E.g,T.length),Ae(E,E.g.end()),Ae(E,T)),Xe(w,E),C=je(C),x.call(y,S,C)}}m=m.data;break e;default:m={}}}switch(d=m,f=u.stream,u.type){case`video`:a.pushTexture2d(Object.assign(Object.assign({},d),{stream:f,timestamp:i}));break;case`detections`:p=d,p.stream=f,p.timestamp=i,a.pushDetectionList(p);break;default:throw Error(`Unknown input config type: '`+u.type+`'`)}}return r.i.send(a),b(n,r.C,4);case 4:a.delete(),n.g=0}})})};function Ft(e,t,n){return tt(e,function e(){var r,i,a,o,s,l,u=this,d,f,p,m,h,g,_,v;return E(e,function(e){switch(e.g){case 1:if(!n)return e.return(t);for(r={},i=0,a=c(Object.keys(n)),o=a.next();!o.done;o=a.next())s=o.value,l=n[s],typeof l!=`string`&&l.type===`texture`&&t[l.stream]!==void 0&&++i;1<i&&(u.G=!1),d=c(Object.keys(n)),o=d.next();case 2:if(o.done){e.g=4;break}if(f=o.value,p=n[f],typeof p==`string`)return _=r,v=f,b(e,It(u,f,t[p]),14);if(m=t[p.stream],p.type===`detection_list`){if(m){for(var y=m.getRectList(),x=m.getLandmarksList(),S=m.getClassificationsList(),C=[],w=0;w<y.size();++w){var T=y.get(w);e:{var E=new dt;for(T=new xe(T);Se(T);)switch(T.i){case 13:var D=Te(T);I(E,1,D);break;case 21:D=Te(T),I(E,2,D);break;case 29:D=Te(T),I(E,3,D);break;case 37:D=Te(T),I(E,4,D);break;case 45:D=Te(T),I(E,5,D);break;case 48:D=ve(T.g),I(E,6,D);break;default:if(!Ze(E,T))break e}}E={Z:We(E,1),$:We(E,2),height:We(E,3),width:We(E,4),rotation:We(E,5,0),X:Ue(E,6,0)},T=Ke(lt(x.get(w)),ot).map(yt);var O=S.get(w);e:for(D=new it,O=new xe(O);Se(O);)switch(O.i){case 10:D.addClassification(we(O,new nt,rt));break;default:if(!Ze(D,O))break e}E={T:E,O:T,M:vt(D)},C.push(E)}y=C}else y=[];r[f]=y,e.g=7;break}if(p.type===`proto_list`){if(m){for(y=Array(m.size()),x=0;x<m.size();x++)y[x]=m.get(x);m.delete()}else y=[];r[f]=y,e.g=7;break}if(m===void 0){e.g=3;break}if(p.type===`float_list`){r[f]=m,e.g=7;break}if(p.type===`proto`){r[f]=m,e.g=7;break}if(p.type!==`texture`)throw Error(`Unknown output config type: '`+p.type+`'`);return h=u.s[f],h||(h=new bt(u.h,u.D),u.s[f]=h),b(e,xt(h,m,u.G),13);case 13:g=e.h,r[f]=g;case 7:p.transform&&r[f]&&(r[f]=p.transform(r[f])),e.g=3;break;case 14:_[v]=e.h;case 3:o=d.next(),e.g=2;break;case 4:return e.return(r)}})})}function It(e,t,n){return tt(e,function e(){var r=this,i;return E(e,function(e){return typeof n==`number`||n instanceof Uint8Array||n instanceof r.h.Uint8BlobList?e.return(n):n instanceof r.h.Texture2dDataOut?(i=r.s[t],i||(i=new bt(r.h,r.D),r.s[t]=i),e.return(xt(i,n,r.G))):e.return(void 0)})})}function Lt(e,t){for(var n=t.name||`$`,r=[].concat(l(t.wants)),i=new e.h.StringList,a=c(t.wants),o=a.next();!o.done;o=a.next())i.push_back(o.value);a=e.h.PacketListener.implement({onResults:function(i){for(var a={},o=0;o<t.wants.length;++o)a[r[o]]=i.get(o);var s=e.listeners[n];s&&(e.C=Ft(e,a,t.outs).then(function(n){n=s(n);for(var i=0;i<t.wants.length;++i){var o=a[r[i]];typeof o==`object`&&o.hasOwnProperty&&o.hasOwnProperty(`delete`)&&o.delete()}n&&(e.C=n)}))}}),e.i.attachMultiListener(i,a),i.delete()}e.onResults=function(e,t){this.listeners[t||`$`]=e},k(`Solution`,kt),k(`OptionType`,{BOOL:0,NUMBER:1,aa:2,0:`BOOL`,1:`NUMBER`,2:`STRING`});function Rt(e){e=gt(e);var t=e.getMesh();if(!t)return e;var n=new Float32Array(t.getVertexBufferList());t.getVertexBufferList=function(){return n};var r=new Uint32Array(t.getIndexBufferList());return t.getIndexBufferList=function(){return r},e}var zt={files:[{url:`face_mesh_solution_packed_assets_loader.js`},{simd:!0,url:`face_mesh_solution_simd_wasm_bin.js`},{simd:!1,url:`face_mesh_solution_wasm_bin.js`}],graph:{url:`face_mesh.binarypb`},listeners:[{wants:[`multi_face_geometry`,`image_transformed`,`multi_face_landmarks`],outs:{image:`image_transformed`,multiFaceGeometry:{type:`proto_list`,stream:`multi_face_geometry`,transform:function(e){return e.map(Rt)}},multiFaceLandmarks:{type:`proto_list`,stream:`multi_face_landmarks`,transform:function(e){return e.map(function(e){return Ke(lt(e),ot).map(yt)})}}}}],inputs:{image:{type:`video`,stream:`input_frames_gpu`}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:`InferenceCalculator`,fieldName:`use_cpu_inference`},default:`iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod`.split(`;`).includes(navigator.platform)||navigator.userAgent.includes(`Mac`)&&`ontouchend`in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:`EnableFaceGeometryConstant`,calculatorType:`ConstantSidePacketCalculator`,fieldName:`bool_value`}},selfieMode:{type:0,graphOptionXref:{calculatorType:`GlScalerCalculator`,calculatorIndex:1,fieldName:`flip_horizontal`}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:`ConstantSidePacketCalculator`,calculatorName:`ConstantSidePacketCalculatorNumFaces`,fieldName:`int_value`}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:`ConstantSidePacketCalculator`,calculatorName:`ConstantSidePacketCalculatorRefineLandmarks`,fieldName:`bool_value`}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:`TensorsToDetectionsCalculator`,calculatorName:`facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator`,fieldName:`min_score_thresh`}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:`ThresholdingCalculator`,calculatorName:`facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator`,fieldName:`threshold`}},cameraNear:{type:1,graphOptionXref:{calculatorType:`FaceGeometryEnvGeneratorCalculator`,fieldName:`near`}},cameraFar:{type:1,graphOptionXref:{calculatorType:`FaceGeometryEnvGeneratorCalculator`,fieldName:`far`}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:`FaceGeometryEnvGeneratorCalculator`,fieldName:`vertical_fov_degrees`}}}},Bt=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Vt=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Ht=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Ut=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Wt=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Gt=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Kt=[].concat(l(Bt),l(Vt),l(Ht),l(Ut),l(Wt),l(Gt));function qt(e){e||={},e=Object.assign(Object.assign({},zt),e),this.g=new kt(e)}e=qt.prototype,e.close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(e){this.g.onResults(e)},e.initialize=function(){return tt(this,function e(){var t=this;return E(e,function(e){return b(e,t.g.initialize(),0)})})},e.reset=function(){this.g.reset()},e.send=function(e){return tt(this,function t(){var n=this;return E(t,function(t){return b(t,n.g.send(e),0)})})},e.setOptions=function(e){this.g.setOptions(e)},k(`FACE_GEOMETRY`,{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:`COLUMN_MAJOR`,1:`ROW_MAJOR`},PrimitiveType:{TRIANGLE:0,0:`TRIANGLE`},VertexType:{VERTEX_PT:0,0:`VERTEX_PT`},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),k(`FaceMesh`,qt),k(`FACEMESH_LIPS`,Bt),k(`FACEMESH_LEFT_EYE`,Vt),k(`FACEMESH_LEFT_EYEBROW`,Ht),k(`FACEMESH_LEFT_IRIS`,[[474,475],[475,476],[476,477],[477,474]]),k(`FACEMESH_RIGHT_EYE`,Ut),k(`FACEMESH_RIGHT_EYEBROW`,Wt),k(`FACEMESH_RIGHT_IRIS`,[[469,470],[470,471],[471,472],[472,469]]),k(`FACEMESH_FACE_OVAL`,Gt),k(`FACEMESH_CONTOURS`,Kt),k(`FACEMESH_TESSELATION`,[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),k(`matrixDataToMatrix`,function(e){for(var t=e.getCols(),n=e.getRows(),r=e.getPackedDataList(),i=[],a=0;a<n;a++)i.push(Array(t));for(a=0;a<n;a++)for(var o=0;o<t;o++){var s=e.getLayout()===1?a*t+o:o*n+a;i[a][o]=r[s]}return i}),k(`VERSION`,`0.4.1633559619`)}).call(p)),p}var g=h(),_=1e-7,v=1e-4,y=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},b=class{refCount(e){return x(`refCount`)}incRef(e){return x(`incRef`)}timerAvailable(){return!0}time(e){return x(`time`)}read(e){return x(`read`)}readSync(e){return x(`readSync`)}readToGPU(e,t){return x(`readToGPU`)}numDataIds(){return x(`numDataIds`)}disposeData(e,t){return x(`disposeData`)}write(e,t,n){return x(`write`)}move(e,t,n,r,i){return x(`move`)}memory(){return x(`memory`)}floatPrecision(){return x(`floatPrecision`)}epsilon(){return this.floatPrecision()===32?_:v}dispose(){return x(`dispose`)}};function x(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function S(e,t,n){return Math.max(e,Math.min(t,n))}function C(e){return e%2==0?e:e+1}function w(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function T(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function E(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function D(e,t,n=``){E(A(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function O(e){E(e!=null,()=>`The input to the tensor constructor must be a non-null value.`)}function ee(e,t=[],n=!1){if(t??=[],Array.isArray(e)||pe(e)&&!n)for(let r=0;r<e.length;++r)ee(e[r],t,n);else t.push(e);return t}function k(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function A(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function te(e){return e%1==0}function ne(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function re(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function ie(e,t=e=>0,n,r=setTimeout){return new Promise((i,a)=>{let o=0,s=()=>{if(e()){i();return}o++;let c=t(o);if(n!=null&&o>=n){a();return}r(s,c)};s()})}function ae(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(e[t]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let i=e.slice();return i[r]=t/n,i}function oe(e,t){let n=t.length;return e=e==null?t.map((e,t)=>t):[].concat(e),E(e.every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),E(e.every(e=>te(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function se(e,t){let n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:oe(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(a!=null){if(a[o]===t&&e[t]!==1)throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(a[o]==null||a[o]>t)&&e[t]===1&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}e[t]!==1&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function ce(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else throw Error(`Unknown data type ${e}`);return n}function le(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else if(e===`string`)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function ue(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function de(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function fe(e,t){return!(t===`complex64`||t===`float32`&&e!==`complex64`||t===`int32`&&e!==`float32`&&e!==`complex64`||t===`bool`&&e===`bool`)}function pe(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function me(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype ${e}`)}function he(e){if(e==null)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function j(e){return typeof e==`string`||e instanceof String}function ge(e){return typeof e==`boolean`}function _e(e){return typeof e==`number`}function ve(e){return Array.isArray(e)?ve(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?`int32`:_e(e)?`float32`:j(e)?`string`:ge(e)?`bool`:`float32`}function ye(e){return!!(e&&e.constructor&&e.call&&e.apply)}function be(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function M(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function xe(e,t,n,r=!1){let i=[];if(t.length===1){let a=t[0]*(r?2:1);for(let t=0;t<a;t++)i[t]=n[e+t]}else{let a=t[0],o=t.slice(1),s=o.reduce((e,t)=>e*t)*(r?2:1);for(let t=0;t<a;t++)i[t]=xe(e+t*s,o,n,r)}return i}function Se(e,t,n=!1){if(e.length===0)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(r===0)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?` for a complex tensor`:``}.`);return xe(0,e,t,n)}function Ce(e,t){let n=we(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function we(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function Te(e){e.forEach(t=>{E(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function Ee(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function De(e,t,n){if(t===0)return[];if(t===1)return[e];let r=Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function Oe(e){return e&&e.then&&typeof e.then==`function`}var ke=`tfjsflags`,Ae=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=je,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(N().getBool(`IS_TEST`)||N().getBool(`PROD`)||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){let t=this.urlFlags[e];N().getBool(`IS_TEST`)||N().getBool(`PROD`)||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(Oe(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>`u`||typeof this.global.location>`u`||typeof this.global.location.search>`u`)return;let e=this.getQueryParams(this.global.location.search);ke in e&&e[ke].split(`,`).forEach(e=>{let[t,n]=e.split(`:`);this.urlFlags[t]=Ne(t,n)})}};function je(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>(Me(t,n[0],n[1]),n.join(`=`))),t}function Me(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}function Ne(e,t){if(t=t.toLowerCase(),t===`true`||t===`false`)return t===`true`;if(`${+t}`===t)return+t;throw Error(`Could not parse value flag value ${t} for flag ${e}.`)}function N(){return Pe}var Pe=null;function Fe(e){Pe=e}var Ie;function Le(){if(Ie==null){let e;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else if(typeof self<`u`)e=self;else throw Error(`Could not find a global object`);Ie=e}return Ie}function Re(){let e=Le();return e._tfGlobals??=new Map,e._tfGlobals}function P(e,t){let n=Re();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}var ze=`Abs`,Be=`Acos`,F=`Acosh`,Ve=`Add`,He=`AddN`,Ue=`All`,We=`Any`,I=`ArgMax`,Ge=`ArgMin`,Ke=`Asin`,qe=`Asinh`,Je=`Atan`,Ye=`Atanh`,Xe=`Atan2`,Ze=`AvgPool`,Qe=`AvgPoolGrad`,$e=`AvgPool3D`,et=`AvgPool3DGrad`,tt=`BatchMatMul`,nt=`BatchToSpaceND`,rt=`Bincount`,it=`BroadcastArgs`,at=`Cast`,ot=`Ceil`,st=`ClipByValue`,ct=`Complex`,lt=`ComplexAbs`,ut=`Concat`,dt=`Conv2D`,ft=`Conv2DBackpropFilter`,pt=`Conv2DBackpropInput`,mt=`Conv3D`,ht=`Conv3DBackpropFilterV2`,gt=`Conv3DBackpropInputV2`,_t=`Cos`,vt=`Cosh`,yt=`Cumprod`,bt=`Cumsum`,xt=`CropAndResize`,St=`DenseBincount`,Ct=`DepthToSpace`,wt=`DepthwiseConv2dNative`,Tt=`DepthwiseConv2dNativeBackpropFilter`,Et=`DepthwiseConv2dNativeBackpropInput`,Dt=`Diag`,Ot=`Dilation2D`,kt=`RealDiv`,At=`Einsum`,jt=`Elu`,Mt=`EluGrad`,Nt=`Erf`,Pt=`Equal`,Ft=`Exp`,It=`ExpandDims`,Lt=`Expm1`,Rt=`FFT`,zt=`Fill`,Bt=`FlipLeftRight`,Vt=`Floor`,Ht=`FloorDiv`,Ut=`FusedBatchNorm`,Wt=`GatherV2`,Gt=`GatherNd`,Kt=`Greater`,qt=`GreaterEqual`,Jt=`Identity`,Yt=`IFFT`,Xt=`Imag`,Zt=`IsFinite`,Qt=`IsInf`,$t=`IsNan`,en=`LeakyRelu`,tn=`Less`,nn=`LessEqual`,rn=`LinSpace`,an=`Log`,on=`Log1p`,sn=`LogicalAnd`,cn=`LogicalNot`,ln=`LogicalOr`,un=`LRN`,dn=`LRNGrad`,fn=`Max`,pn=`Maximum`,mn=`MaxPool`,hn=`MaxPoolGrad`,gn=`MaxPool3D`,_n=`MaxPool3DGrad`,vn=`MaxPoolWithArgmax`,yn=`Mean`,bn=`Min`,xn=`Minimum`,Sn=`MirrorPad`,Cn=`Mod`,wn=`Multinomial`,Tn=`Multiply`,En=`Neg`,Dn=`NotEqual`,On=`NonMaxSuppressionV3`,kn=`NonMaxSuppressionV4`,An=`NonMaxSuppressionV5`,jn=`OnesLike`,Mn=`OneHot`,Nn=`Pack`,Pn=`PadV2`,Fn=`Pow`,In=`Prelu`,Ln=`Prod`,Rn=`RaggedGather`,zn=`RaggedTensorToTensor`,Bn=`Range`,Vn=`Real`,Hn=`Reciprocal`,Un=`Relu`,Wn=`Reshape`,Gn=`ResizeNearestNeighbor`,Kn=`ResizeNearestNeighborGrad`,qn=`ResizeBilinear`,Jn=`ResizeBilinearGrad`,Yn=`Relu6`,Xn=`Reverse`,Zn=`Round`,Qn=`Rsqrt`,$n=`ScatterNd`,er=`SearchSorted`,tr=`Select`,nr=`Selu`,rr=`Slice`,ir=`Sin`,ar=`Sinh`,or=`Sign`,sr=`Sigmoid`,cr=`Softplus`,lr=`Sqrt`,ur=`Sum`,dr=`SpaceToBatchND`,fr=`SplitV`,pr=`Softmax`,mr=`SparseFillEmptyRows`,hr=`SparseReshape`,gr=`SparseSegmentMean`,_r=`SparseSegmentSum`,vr=`SparseToDense`,yr=`SquaredDifference`,br=`Square`,xr=`StridedSlice`,Sr=`StringNGrams`,Cr=`StringSplit`,wr=`StringToHashBucketFast`,Tr=`Sub`,Er=`Tan`,Dr=`Tanh`,Or=`Tile`,kr=`TopK`,Ar=`Transform`,jr=`Transpose`,Mr=`Unique`,Nr=`Unpack`,Pr=`UnsortedSegmentSum`,Fr=`ZerosLike`,Ir=`Step`,Lr=`FromPixels`,Rr=`RotateWithOffset`,zr=`_FusedMatMul`,Br=`FusedConv2D`,Vr=`FusedDepthwiseConv2D`;function Hr(...e){N().getBool(`IS_TEST`)||N().getBool(`PROD`)||console.warn(...e)}function Ur(...e){N().getBool(`IS_TEST`)||N().getBool(`PROD`)||console.log(...e)}var Wr=P(`kernelRegistry`,()=>new Map),Gr=P(`gradRegistry`,()=>new Map);function Kr(e,t){let n=Xr(e,t);return Wr.get(n)}function qr(e){return Gr.get(e)}function Jr(e){let t=Wr.entries(),n=[];for(;;){let{done:r,value:i}=t.next();if(r)break;let[a,o]=i,[s]=a.split(`_`);s===e&&n.push(o)}return n}function Yr(e){let{kernelName:t,backendName:n}=e,r=Xr(t,n);Wr.has(r)&&Hr(`The kernel '${t}' for backend '${n}' is already registered`),Wr.set(r,e)}function Xr(e,t){return`${t}_${e}`}var Zr,Qr;function $r(){if(Qr)return Zr;Qr=1,Zr=t;var e=null;try{e=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function n(e){return(e&&e.__isLong__)===!0}t.isLong=n;var r={},i={};function a(e,t){var n,a,o;return t?(e>>>=0,(o=0<=e&&e<256)&&(a=i[e],a)?a:(n=s(e,(e|0)<0?-1:0,!0),o&&(i[e]=n),n)):(e|=0,(o=-128<=e&&e<128)&&(a=r[e],a)?a:(n=s(e,e<0?-1:0,!1),o&&(r[e]=n),n))}t.fromInt=a;function o(e,t){if(isNaN(e))return t?v:_;if(t){if(e<0)return v;if(e>=m)return C}else{if(e<=-h)return w;if(e+1>=h)return S}return e<0?o(-e,t).neg():s(e%p|0,e/p|0,t)}t.fromNumber=o;function s(e,n,r){return new t(e,n,r)}t.fromBits=s;var c=Math.pow;function l(e,t,n){if(e.length===0)throw Error(`empty string`);if(e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return _;if(typeof t==`number`?(n=t,t=!1):t=!!t,n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return l(e.substring(1),t,n).neg();for(var i=o(c(n,8)),a=_,s=0;s<e.length;s+=8){var u=Math.min(8,e.length-s),d=parseInt(e.substring(s,s+u),n);if(u<8){var f=o(c(n,u));a=a.mul(f).add(o(d))}else a=a.mul(i),a=a.add(o(d))}return a.unsigned=t,a}t.fromString=l;function u(e,t){return typeof e==`number`?o(e,t):typeof e==`string`?l(e,t):s(e.low,e.high,typeof t==`boolean`?t:e.unsigned)}t.fromValue=u;var d=65536,f=1<<24,p=d*d,m=p*p,h=m/2,g=a(f),_=a(0);t.ZERO=_;var v=a(0,!0);t.UZERO=v;var y=a(1);t.ONE=y;var b=a(1,!0);t.UONE=b;var x=a(-1);t.NEG_ONE=x;var S=s(-1,2147483647,!1);t.MAX_VALUE=S;var C=s(-1,-1,!0);t.MAX_UNSIGNED_VALUE=C;var w=s(0,-2147483648,!1);t.MIN_VALUE=w;var T=t.prototype;return T.toInt=function(){return this.unsigned?this.low>>>0:this.low},T.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},T.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative())if(this.eq(w)){var t=o(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}else return`-`+this.neg().toString(e);for(var i=o(c(e,6),this.unsigned),a=this,s=``;;){var l=a.div(i),u=(a.sub(l.mul(i)).toInt()>>>0).toString(e);if(a=l,a.isZero())return u+s;for(;u.length<6;)u=`0`+u;s=``+u+s}},T.getHighBits=function(){return this.high},T.getHighBitsUnsigned=function(){return this.high>>>0},T.getLowBits=function(){return this.low},T.getLowBitsUnsigned=function(){return this.low>>>0},T.getNumBitsAbs=function(){if(this.isNegative())return this.eq(w)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},T.isZero=function(){return this.high===0&&this.low===0},T.eqz=T.isZero,T.isNegative=function(){return!this.unsigned&&this.high<0},T.isPositive=function(){return this.unsigned||this.high>=0},T.isOdd=function(){return(this.low&1)==1},T.isEven=function(){return(this.low&1)==0},T.equals=function(e){return n(e)||(e=u(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},T.eq=T.equals,T.notEquals=function(e){return!this.eq(e)},T.neq=T.notEquals,T.ne=T.notEquals,T.lessThan=function(e){return this.comp(e)<0},T.lt=T.lessThan,T.lessThanOrEqual=function(e){return this.comp(e)<=0},T.lte=T.lessThanOrEqual,T.le=T.lessThanOrEqual,T.greaterThan=function(e){return this.comp(e)>0},T.gt=T.greaterThan,T.greaterThanOrEqual=function(e){return this.comp(e)>=0},T.gte=T.greaterThanOrEqual,T.ge=T.greaterThanOrEqual,T.compare=function(e){if(n(e)||(e=u(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},T.comp=T.compare,T.negate=function(){return!this.unsigned&&this.eq(w)?w:this.not().add(y)},T.neg=T.negate,T.add=function(e){n(e)||(e=u(e));var t=this.high>>>16,r=this.high&65535,i=this.low>>>16,a=this.low&65535,o=e.high>>>16,c=e.high&65535,l=e.low>>>16,d=e.low&65535,f=0,p=0,m=0,h=0;return h+=a+d,m+=h>>>16,h&=65535,m+=i+l,p+=m>>>16,m&=65535,p+=r+c,f+=p>>>16,p&=65535,f+=t+o,f&=65535,s(m<<16|h,f<<16|p,this.unsigned)},T.subtract=function(e){return n(e)||(e=u(e)),this.add(e.neg())},T.sub=T.subtract,T.multiply=function(t){if(this.isZero())return _;if(n(t)||(t=u(t)),e)return s(e.mul(this.low,this.high,t.low,t.high),e.get_high(),this.unsigned);if(t.isZero())return _;if(this.eq(w))return t.isOdd()?w:_;if(t.eq(w))return this.isOdd()?w:_;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(g)&&t.lt(g))return o(this.toNumber()*t.toNumber(),this.unsigned);var r=this.high>>>16,i=this.high&65535,a=this.low>>>16,c=this.low&65535,l=t.high>>>16,d=t.high&65535,f=t.low>>>16,p=t.low&65535,m=0,h=0,v=0,y=0;return y+=c*p,v+=y>>>16,y&=65535,v+=a*p,h+=v>>>16,v&=65535,v+=c*f,h+=v>>>16,v&=65535,h+=i*p,m+=h>>>16,h&=65535,h+=a*f,m+=h>>>16,h&=65535,h+=c*d,m+=h>>>16,h&=65535,m+=r*p+i*f+a*d+c*l,m&=65535,s(v<<16|y,m<<16|h,this.unsigned)},T.mul=T.multiply,T.divide=function(t){if(n(t)||(t=u(t)),t.isZero())throw Error(`division by zero`);if(e)return!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1?this:s((this.unsigned?e.div_u:e.div_s)(this.low,this.high,t.low,t.high),e.get_high(),this.unsigned);if(this.isZero())return this.unsigned?v:_;var r,i,a;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return v;if(t.gt(this.shru(1)))return b;a=v}else{if(this.eq(w))return t.eq(y)||t.eq(x)?w:t.eq(w)?y:(r=this.shr(1).div(t).shl(1),r.eq(_)?t.isNegative()?y:x:(i=this.sub(t.mul(r)),a=r.add(i.div(t)),a));if(t.eq(w))return this.unsigned?v:_;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();a=_}for(i=this;i.gte(t);){r=Math.max(1,Math.floor(i.toNumber()/t.toNumber()));for(var l=Math.ceil(Math.log(r)/Math.LN2),d=l<=48?1:c(2,l-48),f=o(r),p=f.mul(t);p.isNegative()||p.gt(i);)r-=d,f=o(r,this.unsigned),p=f.mul(t);f.isZero()&&(f=y),a=a.add(f),i=i.sub(p)}return a},T.div=T.divide,T.modulo=function(t){return n(t)||(t=u(t)),e?s((this.unsigned?e.rem_u:e.rem_s)(this.low,this.high,t.low,t.high),e.get_high(),this.unsigned):this.sub(this.div(t).mul(t))},T.mod=T.modulo,T.rem=T.modulo,T.not=function(){return s(~this.low,~this.high,this.unsigned)},T.and=function(e){return n(e)||(e=u(e)),s(this.low&e.low,this.high&e.high,this.unsigned)},T.or=function(e){return n(e)||(e=u(e)),s(this.low|e.low,this.high|e.high,this.unsigned)},T.xor=function(e){return n(e)||(e=u(e)),s(this.low^e.low,this.high^e.high,this.unsigned)},T.shiftLeft=function(e){return n(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?s(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):s(0,this.low<<e-32,this.unsigned)},T.shl=T.shiftLeft,T.shiftRight=function(e){return n(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?s(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):s(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},T.shr=T.shiftRight,T.shiftRightUnsigned=function(e){if(n(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var r=this.low;return s(r>>>e|t<<32-e,t>>>e,this.unsigned)}else return s(e===32?t:t>>>e-32,0,this.unsigned)},T.shru=T.shiftRightUnsigned,T.shr_u=T.shiftRightUnsigned,T.toSigned=function(){return this.unsigned?s(this.low,this.high,!1):this},T.toUnsigned=function(){return this.unsigned?this:s(this.low,this.high,!0)},T.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},T.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},T.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},t.fromBytes=function(e,n,r){return r?t.fromBytesLE(e,n):t.fromBytesBE(e,n)},t.fromBytesLE=function(e,n){return new t(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,n)},t.fromBytesBE=function(e,n){return new t(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],n)},Zr}var ei=$r(),ti=a(ei),ni=ti||f({__proto__:null,default:ti},[ei]);function ri(e){return ni.fromString(e,!0,16)}var ii=ri(`c3a5c85c97cb3127`),ai=ri(`b492b66fbe98f273`),oi=ri(`9ae16a3b2f90404f`);function si(e){return e.xor(e.shru(47))}function ci(e,t,n){let r=e.slice(t,t+n);return ni.fromBytes(Array.from(r),!0,!0)}function li(e,t){return ci(e,t,8)}function ui(e,t){return ci(e,t,4)}function di(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function fi(e,t,n=ri(`9ddfea08eb382d69`)){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let i=t.xor(r).mul(n);return i=i.xor(i.shru(47)),i=i.mul(n),i}function pi(e,t,n,r,i,a){i=i.add(e),a=di(a.add(i).add(r),21);let o=i;return i=i.add(t),i=i.add(n),a=a.add(di(i,44)),[i.add(r),a.add(o)]}function mi(e,t,n,r){return pi(li(e,t),li(e,t+8),li(e,t+16),li(e,t+24),n,r)}function hi(e,t=e.length){if(t>=8){let n=oi.add(t*2),r=li(e,0).add(oi),i=li(e,t-8);return fi(di(i,37).mul(n).add(r),di(r,25).add(i).mul(n),n)}if(t>=4){let n=oi.add(t*2);return fi(ui(e,0).shl(3).add(t),ui(e,t-4),n)}if(t>0){let n=e[0],r=e[t>>1],i=e[t-1],a=n+(r<<8),o=t+(i<<2);return si(oi.mul(a).xor(ii.mul(o))).mul(oi)}return oi}function gi(e,t=e.length){let n=oi.add(t*2),r=li(e,0).mul(ai),i=li(e,8),a=li(e,t-8).mul(n),o=li(e,t-16).mul(oi);return fi(di(r.add(i),43).add(di(a,30)).add(o),r.add(di(i.add(oi),18)).add(a),n)}function _i(e,t=e.length){let n=oi.add(t*2),r=li(e,0).mul(oi),i=li(e,8),a=li(e,t-8).mul(n),o=li(e,t-16).mul(oi),s=di(r.add(i),43).add(di(a,30)).add(o),c=fi(s,r.add(di(i.add(oi),18)).add(a),n),l=li(e,16).mul(n),u=li(e,24),d=s.add(li(e,t-32)).mul(n),f=c.add(li(e,t-24)).mul(n);return fi(di(l.add(u),43).add(di(d,30)).add(f),l.add(di(u.add(r),18)).add(d),n)}function vi(e,t=e.length){let n=ni.fromNumber(81,!0);if(t<=32)return t<=16?hi(e,t):gi(e,t);if(t<=64)return _i(e,t);let r=n,i=n.mul(ai).add(113),a=si(i.mul(oi).add(113)).mul(oi),o=[ni.UZERO,ni.UZERO],s=[ni.UZERO,ni.UZERO];r=r.mul(oi).add(li(e,0));let c=0,l=(t-1>>6)*64,u=l+(t-1&63)-63;do r=di(r.add(i).add(o[0]).add(li(e,c+8)),37).mul(ai),i=di(i.add(o[1]).add(li(e,c+48)),42).mul(ai),r=r.xor(s[1]),i=i.add(o[0]).add(li(e,c+40)),a=di(a.add(s[0]),33).mul(ai),o=mi(e,c,o[1].mul(ai),r.add(s[0])),s=mi(e,c+32,a.add(s[1]),i.add(li(e,c+16))),[a,r]=[r,a],c+=64;while(c!==l);let d=ai.add(a.and(255).shl(1));return c=u,s[0]=s[0].add(t-1&63),o[0]=o[0].add(s[0]),s[0]=s[0].add(o[0]),r=di(r.add(i).add(o[0]).add(li(e,c+8)),37).mul(d),i=di(i.add(o[1]).add(li(e,c+48)),42).mul(d),r=r.xor(s[1].mul(9)),i=i.add(o[0].mul(9).add(li(e,c+40))),a=di(a.add(s[0]),33).mul(d),o=mi(e,c,o[1].mul(d),r.add(s[0])),s=mi(e,c+32,a.add(s[1]),i.add(li(e,c+16))),[a,r]=[r,a],fi(fi(o[0],s[0],d).add(si(i).mul(ii)).add(a),fi(o[1],s[1],d).add(r),d)}function yi(e,t){return t===`string`?Ci(e):xi([e],t)}function bi(e,t){return e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`}function xi(e,t){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=ee(e)),N().getBool(`DEBUG`)&&ue(e,t),bi(e,t))return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`){let t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)Math.round(e[n])!==0&&(t[n]=1);return t}else throw Error(`Unknown data type ${t}`)}function Si(){return N().platform.now()}function Ci(e,t=`utf-8`){return t||=`utf-8`,N().platform.encode(e,t)}function wi(e,t=`utf-8`){return t||=`utf-8`,N().platform.decode(e,t)}var Ti=class{constructor(e,t){this.backendTimer=e,this.logger=t,t??(this.logger=new Di)}profileKernel(e,t,n){let r,i=()=>{r=n()},a,o=Si();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(i);else{i();for(let e of r)e.dataSync();a=Promise.resolve({kernelMs:Si()-o})}if(N().getBool(`CHECK_COMPUTATION_FOR_ERRORS`))for(let t=0;t<r.length;t++){let n=r[t];n.data().then(t=>{Ei(t,n.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then(e=>e.kernelMs),extraInfo:a.then(e=>e.getExtraProfileInfo==null?``:e.getExtraProfileInfo())}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:i,extraInfo:a}=e;n.forEach(e=>{Promise.all([e.data(),r,a]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],i,n[2])})})}};function Ei(e,t,n){if(t!==`float32`)return!1;for(let t=0;t<e.length;t++){let r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}var Di=class{logKernelProfile(e,t,n,r,i,a){let o=typeof r==`number`?re(`${r}ms`,9):r.error,s=re(e,25),c=t.rank,l=t.size,u=re(t.shape.toString(),14),d=``;for(let e in i){let n=i[e];if(n!=null){let r=n.shape||t.shape,i=r.length;d+=`${e}: ${i}D ${i>0?r:``} `}}console.log(`%c${s}	%c${o}	%c${c}D ${u}	%c${l}	%c${d}	%c${a}`,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)}};function Oi(e,t,n){let r={},i={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){let a=e[n],o=a.inputs;for(let e in o){let n=o[e],s=!1;for(let e=0;e<t.length;e++)if(r[n.id]){a.outputs.forEach(e=>r[e.id]=!0),s=!0,i[a.id]=!0;break}if(s)break}}let a={};a[n.id]=!0;let o={};for(let t=e.length-1;t>=0;t--){let n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(a[n.outputs[e].id]){for(let e in r)a[r[e].id]=!0,o[n.id]=!0;break}}let s=[];for(let t=0;t<e.length;t++){let n=e[t];if(i[n.id]&&o[n.id]){let e={};for(let t in n.inputs){let i=n.inputs[t];r[i.id]&&(e[t]=i)}let t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,s.push(t)}}return s}function ki(e,t,n,r){for(let i=t.length-1;i>=0;i--){let a=t[i],o=[];if(a.outputs.forEach(t=>{let n=e[t.id];n==null?o.push(null):o.push(n)}),a.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);let s=a.gradient(o);for(let t in a.inputs){if(!(t in s))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(s)}.`);let i=n(()=>s[t]());if(i.dtype!==`float32`)throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${i.dtype}'`);let o=a.inputs[t];if(!A(i.shape,o.shape))throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${i.shape}', which does not match the shape of the input '${o.shape}'`);if(e[o.id]==null)e[o.id]=i;else{let t=e[o.id];e[o.id]=r(t,i),t.dispose()}}}}var Ai=20,ji=3,Mi=7;function Ni(e,t,n,r){let i=M(t),a=Pi(e,t,n,i),o=t.length,s=Li(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${o}`),c.push(`  shape: [${t}]`),c.push(`  values:`)),c.push(s.map(e=>`    `+e).join(`
`)),c.join(`
`)}function Pi(e,t,n,r){let i=k(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?Ri(e):e;if(s>1)for(let e=0;e<i/a;e++){let t=e*a;for(let e=0;e<a;e++)o[e]=Math.max(o[e],Fi(c[t+e],0,n).length)}return o}function Fi(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(Mi))} + ${parseFloat(e[1].toFixed(Mi))}j`:j(e)?`'${e}'`:n===`bool`?Ii(e):parseFloat(e.toFixed(Mi)).toString(),re(r,t)}function Ii(e){return e===0?`false`:`true`}function Li(e,t,n,r,i,a=!0){let o=n===`complex64`?2:1,s=t[0],c=t.length;if(c===0)return n===`complex64`?[Fi(Ri(e)[0],0,n)]:n===`bool`?[Ii(e[0])]:[e[0].toString()];if(c===1){if(s>Ai){let t=ji*o,r=Array.from(e.slice(0,t)),a=Array.from(e.slice((s-ji)*o,s*o));return n===`complex64`&&(r=Ri(r),a=Ri(a)),[`[`+r.map((e,t)=>Fi(e,i[t],n)).join(`, `)+`, ..., `+a.map((e,t)=>Fi(e,i[s-ji+t],n)).join(`, `)+`]`]}return[`[`+(n===`complex64`?Ri(e):Array.from(e)).map((e,t)=>Fi(e,i[t],n)).join(`, `)+`]`]}let l=t.slice(1),u=r.slice(1),d=r[0]*o,f=[];if(s>Ai){for(let t=0;t<ji;t++){let r=t*d,a=r+d;f.push(...Li(e.slice(r,a),l,n,u,i,!1))}f.push(`...`);for(let t=s-ji;t<s;t++){let r=t*d,a=r+d;f.push(...Li(e.slice(r,a),l,n,u,i,t===s-1))}}else for(let t=0;t<s;t++){let r=t*d,a=r+d;f.push(...Li(e.slice(r,a),l,n,u,i,t===s-1))}let p=c===2?`,`:``;f[0]=`[`+f[0]+p;for(let e=1;e<f.length-1;e++)f[e]=` `+f[e]+p;let m=`,
`;for(let e=2;e<c;e++)m+=`
`;return f[f.length-1]=` `+f[f.length-1]+`]`+(a?``:m),f}function Ri(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var zi=class{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=k(e),n!=null){let e=n.length;E(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||le(t,this.size),this.strides=M(e)}set(e,...t){t.length===0&&(t=[0]),E(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Bi().makeTensor(this.values,this.shape,this.dtype)}},Bi=null,Vi=null;function Hi(e){Bi=e}function Ui(e){Vi=e}var Wi=class{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=k(e),this.strides=M(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}get rank(){return this.shape.length}async buffer(){let e=await this.data();return Vi.buffer(this.shape,this.dtype,e)}bufferSync(){return Vi.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return Se(this.shape,e,this.dtype===`complex64`)}arraySync(){return Se(this.shape,this.dataSync(),this.dtype===`complex64`)}async data(){this.throwIfDisposed();let e=Bi().read(this.dataId);if(this.dtype===`string`){let t=await e;try{return t.map(e=>wi(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}}return e}dataToGPU(e){return this.throwIfDisposed(),Bi().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=Bi().readSync(this.dataId);if(this.dtype===`string`)try{return e.map(e=>wi(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e}async bytes(){this.throwIfDisposed();let e=await Bi().read(this.dataId);return this.dtype===`string`?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(Bi().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error(`Tensor is disposed.`)}print(e=!1){return Vi.print(this,e)}clone(){return this.throwIfDisposed(),Vi.clone(this)}toString(e=!1){return Ni(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Vi.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),Bi().makeVariable(this,e,t,n)}};Object.defineProperty(Wi,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function Gi(){return P(`Tensor`,()=>Wi)}Gi();var Ki=class extends Wi{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!A(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Bi().disposeTensor(this),this.dataId=e.dataId,Bi().incRef(this,null)}dispose(){Bi().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Ki,Symbol.hasInstance,{value:e=>e instanceof Wi&&e.assign!=null&&e.assign instanceof Function});var qi;(function(e){e.R0=`R0`,e.R1=`R1`,e.R2=`R2`,e.R3=`R3`,e.R4=`R4`,e.R5=`R5`,e.R6=`R6`})(qi||={});var Ji;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`int32`,e.complex64=`complex64`})(Ji||={});var Yi;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`bool`,e.complex64=`complex64`})(Yi||={});var Xi;(function(e){e.float32=`float32`,e.int32=`float32`,e.bool=`float32`,e.complex64=`complex64`})(Xi||={});var Zi;(function(e){e.float32=`complex64`,e.int32=`complex64`,e.bool=`complex64`,e.complex64=`complex64`})(Zi||={});var Qi={float32:Xi,int32:Ji,bool:Yi,complex64:Zi};function $i(e,t){if(e===`string`||t===`string`){if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast ${e} with ${t}`)}return Qi[e][t]}function ea(e){return $i(e,`int32`)}function ta(e,t){if(e.dtype===t.dtype)return[e,t];let n=$i(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function na(e,t){E(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function ra(e){let t=[];return ia(e,t,new Set),t}function ia(e,t,n){if(e==null)return;if(e instanceof Wi){t.push(e);return}if(!aa(e))return;let r=e;for(let e in r){let i=r[e];n.has(i)||(n.add(i),ia(i,t,n))}}function aa(e){return Array.isArray(e)||typeof e==`object`}function oa(e){return e.kernelName!=null}var sa=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},ca=class e{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new sa}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}get backend(){if(this.pendingBackendInit!=null)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){let{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(Hr(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Ti(this.backendInstance),!0}setupRegisteredKernels(){Jr(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Jr(e).forEach(t=>{t.disposeFunc!=null&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(t==null)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(n&&!(n instanceof b)&&typeof n.then==`function`){let t=++this.pendingBackendInitId,r=n.then(n=>t<this.pendingBackendInitId?!1:(this.registry[e]=n,this.pendingBackendInit=null,!0)).catch(n=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,Hr(`Initialization of backend ${e} failed`),Hr(n.stack||n.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(t){return Hr(`Initialization of backend ${e} failed`),Hr(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:i}=this.initializeBackend(n);if(i||r)return{name:n,asyncInit:i}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);n=e}let r;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),r))}scopedRun(e,t,n){e();try{let e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return e.nextTensorId++}nextVariableId(){return e.nextVariableId++}clone(e){let t=L.runKernel(Jt,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],e=>({x:()=>{let t={x:e};return L.runKernel(at,t,{dtype:`float32`})}}),[],{}),t}runKernel(e,t,n){if(this.backendName??this.backend,Kr(e,this.backendName)==null)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool(`IS_TEST`)}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),i=0;n.forEach(e=>{i+=e.dtype===`complex64`?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[],r=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName??this.backend;let s,c=oa(e)?e.kernelName:this.state.activeScope==null?``:this.state.activeScope.name;if(oa(e)){let{kernelName:t,inputs:i,attrs:a}=e;this.backendName??this.backend;let c=Kr(t,this.backendName);E(c!=null,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),o=()=>{let e=this.backend.numDataIds();s=c.kernelFunc({inputs:i,attrs:a,backend:this.backend});let o=Array.isArray(s)?s:[s];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);let l=o.map(e=>e.rank==null?this.makeTensorFromTensorInfo(e):e);if(r){let e=this.getTensorsForGradient(t,i,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{let{forwardFunc:t}=e,i=e=>{r&&(n=e.map(e=>this.keep(this.clone(e))))};o=()=>{let e=this.backend.numDataIds();s=this.tidy(()=>t(this.backend,i));let n=Array.isArray(s)?s:[s];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,e,n),n}}let{inputs:l,attrs:u}=e,d=oa(e)?null:e.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool(`DEBUG`)&&!this.state.profiling?t=o():(f=this.profiler.profileKernel(c,l,()=>o()),this.ENV.getBool(`DEBUG`)&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(c,l,t,d,n,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map(e=>l[e]==null?null:l[e].shape),outputShapes:t.map(e=>e.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(s)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,n){let r=qr(e);if(r!=null){let e=r.inputsToSave||[],i=r.outputsToSave||[],a;r.saveAllInputs?(E(Array.isArray(t),()=>`saveAllInputs is true, expected inputs to be an array.`),a=Object.keys(t).map(e=>t[e])):a=e.map(e=>t[e]);let o=n.filter((e,t)=>i[t]);return a.concat(o)}return[]}makeTensor(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;let i=e;n===`string`&&j(e[0])&&(i=e.map(e=>Ci(e)));let a=r.write(i,t,n),o=new Wi(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),n===`string`){let e=this.state.tensorInfo.get(a),t=he(i);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){n||=`float32`;let i={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:i}=e,a=new Wi(r,i,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));let i=new Ki(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(e,t){this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++;let n=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(n=e.size*me(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Ki||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype===`string`&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!==`complex64`&&e.dtype!==`string`){let t=e.size*me(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,r,i,a){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=qr(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=e=>(e=e.map((e,t)=>{if(e==null){let e=n[t],r=we(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e}),r(e.length>1?e:e[0],i,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=ra(e),n=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];!t.kept&&!n.has(t.id)&&t.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{!e.kept&&e.scopeId===r.id&&this.track(e)})}gradients(e,t,n,r=!1){if(E(t.length>0,()=>`gradients() received an empty list of xs.`),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy(`forward`,e));E(i instanceof Wi,()=>`The result y returned by f() must be a tensor.`);let a=Oi(this.state.activeTape,t,i);if(!r&&a.length===0&&t.length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,()=>{let e={};e[i.id]=n??la(i.shape),ki(e,a,e=>this.tidy(e),da);let r=t.map(t=>e[t.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:i,grads:r}})}customGrad(e){return E(ye(e),()=>`The f passed in customGrad(f) must be a function.`),(...t)=>{E(t.every(e=>e instanceof Wi),()=>`The args passed in customGrad(f)(x1, x2,...) must all be tensors`);let n,r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc({forwardFunc:(r,i)=>(n=e(...t,i),E(n.value instanceof Wi,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),E(ye(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),backwardsFunc:(e,r)=>{let i=n.gradFunc(e,r),a=Array.isArray(i)?i:[i];E(a.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),E(a.every(e=>e instanceof Wi),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return a.forEach((e,t)=>{o[t]=()=>e}),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=Si(),n=await this.backend.time(e);return n.wallMs=Si()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new sa;for(let e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};ca.nextTensorId=0,ca.nextVariableId=0;function la(e){let t=Ce(k(e),`float32`);return L.makeTensor(t,e,`float32`)}function ua(){let e=Le();return e._tfengine??=new ca(new Ae(e)),Fe(e._tfengine.ENV),Hi(()=>e._tfengine),e._tfengine}var L=ua();function da(e,t){let n={a:e,b:t};return L.runKernel(Ve,n)}function fa(){return typeof navigator<`u`&&navigator!=null}function pa(e){if(e||fa()){if(e||=navigator,e.product===`ReactNative`)return!0;let t=e.userAgent||e.vendor||(typeof window<`u`?window.opera:``);if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function ma(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var ha=N();ha.registerFlag(`DEBUG`,()=>!1,e=>{e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)}),ha.registerFlag(`IS_BROWSER`,()=>ma()),ha.registerFlag(`IS_NODE`,()=>typeof process<`u`&&typeof process.versions<`u`&&typeof process.versions.node<`u`),ha.registerFlag(`IS_CHROME`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),ha.registerFlag(`PROD`,()=>!1),ha.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,()=>ha.getBool(`DEBUG`)),ha.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,()=>!0),ha.registerFlag(`IS_TEST`,()=>!1),ha.registerFlag(`CHECK_COMPUTATION_FOR_ERRORS`,()=>!0),ha.registerFlag(`WRAP_TO_IMAGEBITMAP`,()=>!1),ha.registerFlag(`ENGINE_COMPILE_ONLY`,()=>!1),ha.registerFlag(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`,()=>!1),ha.registerFlag(`USE_SETTIMEOUTCUSTOM`,()=>!1);function ga(e,t){let n=e;if(pe(e))return t===`string`?[]:[e.length];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||pe(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&N().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&_a(e,r,[]),r}function _a(e,t,n){if(n||=[],!Array.isArray(e)&&!pe(e)){E(t.length===0,()=>`Element arr[${n.join(`][`)}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}E(t.length>0,()=>`Element arr[${n.join(`][`)}] should be a primitive, but is an array of ${e.length} elements`),E(e.length===t[0],()=>`Element arr[${n.join(`][`)}] should have ${t[0]} elements, but has ${e.length} elements`);let r=t.slice(1);for(let t=0;t<e.length;++t)_a(e[t],r,n.concat(t))}function va(e,t,n,r){if(e!==`string_or_numeric`){if(e==null)throw Error(`Expected dtype cannot be null.`);if(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function R(e,t,n,r=`numeric`){if(e instanceof Wi)return va(r,e.dtype,t,n),e;let i=ve(e);if(i!==`string`&&[`bool`,`int32`,`float32`].indexOf(r)>=0&&(i=r),va(r,i,t,n),e==null||!pe(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){let r=e==null?`null`:e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}let a=ga(e,i);!pe(e)&&!Array.isArray(e)&&(e=[e]);let o=i===`string`?ee(e,[],!0):xi(e,i);return L.makeTensor(o,a,i)}function ya(e,t,n,r=`numeric`){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,i)=>R(e,`${t}[${i}]`,n,r))}var ba=`__op`;function z(e){let t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1)),n+=ba;let i=(...e)=>{L.startScope(n);try{let t=r(...e);return Oe(t)&&console.error(`Cannot return a Promise inside of tidy.`),L.endScope(t),t}catch(e){throw L.endScope(null),e}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}function xa(e,t){let n=R(e,`real`,`complex`),r=R(t,`imag`,`complex`);D(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);let i={real:n,imag:r};return L.runKernel(ct,i)}var Sa=z({complex_:xa});function Ca(e,t,n,r){if(r??=ve(e),r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(!pe(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){Te(t);let e=k(t),r=k(n);E(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<n.length;++e){let r=n[e],i=e===n.length-1?r!==k(t.slice(e)):!0;E(n[e]===t[e]||!i,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!pe(e)&&!Array.isArray(e)&&(e=[e]),t||=n,e=r===`string`?ee(e,[],!0):xi(e,r),L.makeTensor(e,t,r)}function wa(e,t,n){return Ca(e,t,ga(e,n),n)}var Ta={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8},Ea=4;async function Da(e,t){let n=[],r=[],i=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let a=0;a<i.length;++a){let o=i[a],s=Array.isArray(e)?e[a].tensor:e[o];if(s.dtype!==`float32`&&s.dtype!==`int32`&&s.dtype!==`bool`&&s.dtype!==`string`&&s.dtype!==`complex64`)throw Error(`Unsupported dtype in weight '${o}': ${s.dtype}`);let c={name:o,shape:s.shape,dtype:s.dtype};if(s.dtype===`string`){let e=new Promise(async e=>{let t=await s.bytes(),n=t.reduce((e,t)=>e+t.length,0)+Ea*t.length,r=new Uint8Array(n),i=0;for(let e=0;e<t.length;e++){let n=t[e],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,i),i+=Ea,r.set(n,i),i+=n.length}e(r)});r.push(e)}else r.push(s.data());t!=null&&(c.group=t),n.push(c)}return{data:ka(await Promise.all(r)),specs:n}}function Oa(e,t){let n={},r,i=0;for(let a of t){let t=a.name,o=a.dtype,s=a.shape,c=k(s),l;if(`quantization`in a){let n=a.quantization;if(n.dtype===`uint8`||n.dtype===`uint16`){if(!(`min`in n&&`scale`in n))throw Error(`Weight ${a.name} with quantization ${n.dtype} doesn't have corresponding metadata min and scale.`)}else if(n.dtype===`float16`){if(o!==`float32`)throw Error(`Weight ${a.name} is quantized with ${n.dtype} which only supports weights of type float32 not ${o}.`)}else throw Error(`Weight ${a.name} has unknown quantization dtype ${n.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let s=Ta[n.dtype],u=e.slice(i,i+c*s),d=n.dtype===`uint8`?new Uint8Array(u):new Uint16Array(u);if(o===`float32`)if(n.dtype===`uint8`||n.dtype===`uint16`){l=new Float32Array(d.length);for(let e=0;e<d.length;e++){let t=d[e];l[e]=t*n.scale+n.min}}else if(n.dtype===`float16`)r===void 0&&(r=Wa()),l=r(d);else throw Error(`Unsupported quantization type ${n.dtype} for weight type float32.`);else if(o===`int32`){if(n.dtype!==`uint8`&&n.dtype!==`uint16`)throw Error(`Unsupported quantization type ${n.dtype} for weight type int32.`);l=new Int32Array(d.length);for(let e=0;e<d.length;e++){let t=d[e];l[e]=Math.round(t*n.scale+n.min)}}else throw Error(`Unsupported dtype in weight '${t}': ${o}`);i+=c*s}else if(o===`string`){let t=k(a.shape);l=[];for(let n=0;n<t;n++){let t=new Uint32Array(e.slice(i,i+Ea))[0];i+=Ea;let n=new Uint8Array(e.slice(i,i+t));l.push(n),i+=t}}else{let r=Ta[o],a=e.slice(i,i+c*r);if(o===`float32`)l=new Float32Array(a);else if(o===`int32`)l=new Int32Array(a);else if(o===`bool`)l=new Uint8Array(a);else if(o===`complex64`){l=new Float32Array(a);let e=new Float32Array(l.length/2),r=new Float32Array(l.length/2);for(let t=0;t<e.length;t++)e[t]=l[t*2],r[t]=l[t*2+1];let i=wa(e,s,`float32`),o=wa(r,s,`float32`);n[t]=Sa(i,o),i.dispose(),o.dispose()}else throw Error(`Unsupported dtype in weight '${t}': ${o}`);i+=c*r}o!==`complex64`&&(n[t]=wa(l,s,o))}return n}function ka(e){if(e===null)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),i=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),r.buffer}var Aa=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`);function ja(e){return Aa?Buffer.byteLength(e):new Blob([e]).size}function Ma(e){if(Aa)return Buffer.from(e).toString(`base64`);let t=new Uint8Array(e),n=``;for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function Na(e){if(Aa){let t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function Pa(e){if(e.length===1)return e[0];let t=0;e.forEach(e=>{t+=e.byteLength});let n=new Uint8Array(t),r=0;return e.forEach(e=>{n.set(new Uint8Array(e),r),r+=e.byteLength}),n.buffer}function Fa(e){for(e=e.trim();e.endsWith(`/`);)e=e.slice(0,e.length-1);let t=e.split(`/`);return t[t.length-1]}function Ia(e,t){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function La(e,t,n){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw Error(`modelJSON has weightsManifest but weightSpecs is null`);if(!n)throw Error(`modelJSON has weightsManifest but weightData is null`);r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),r}async function Ra(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),La(e,n,r)}function za(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:ja(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:ja(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function Ba(e){let t=[];for(let n of e)t.push(...n.weights);return t}function Va(){let e=e=>{let t=e<<13,n=0;for(;!(t&8388608);)n-=8388608,t<<=1;return t&=-8388609,n+=947912704,t|n},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function Ha(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Ua(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function Wa(){let e=Va(),t=Ha(),n=Ua();return r=>{let i=new ArrayBuffer(4*r.length),a=new Uint32Array(i);for(let i=0;i<r.length;i++){let o=r[i];a[i]=e[n[o>>10]+(o&1023)]+t[o>>10]}return new Float32Array(i)}}var Ga=class e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return e.instance??=new e,e.instance}static registerSaveRouter(t){e.getInstance().saveRouters.push(t)}static registerLoadRouter(t){e.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return e.getHandlers(t,`save`)}static getLoadHandlers(t,n){return e.getHandlers(t,`load`,n)}static getHandlers(t,n,r){let i=[];return(n===`load`?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(e=>{let n=e(t,r);n!==null&&i.push(n)}),i}},Ka=e=>Ga.registerSaveRouter(e),qa=e=>Ga.registerLoadRouter(e),Ja=e=>Ga.getSaveHandlers(e),Ya=(e,t)=>Ga.getLoadHandlers(e,t),Xa=`tensorflowjs`,Za=1,Qa=`models_store`,$a=`model_info_store`;function eo(){if(!N().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);let e=typeof window>`u`?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function to(e){let t=e.result;t.createObjectStore(Qa,{keyPath:`modelPath`}),t.createObjectStore($a,{keyPath:`modelPath`})}var no=class{constructor(e){if(this.indexedDB=eo(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(Xa,Za);r.onupgradeneeded=()=>to(r),r.onsuccess=()=>{let i=r.result;if(t==null){let t=i.transaction(Qa,`readonly`),r=t.objectStore(Qa).get(this.modelPath);r.onsuccess=()=>{if(r.result==null)return i.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(i.close(),n(r.error)),t.oncomplete=()=>i.close()}else{let r=za(t),a=i.transaction($a,`readwrite`),o=a.objectStore($a),s=o.put({modelPath:this.modelPath,modelArtifactsInfo:r}),c;s.onsuccess=()=>{c=i.transaction(Qa,`readwrite`);let s=c.objectStore(Qa).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r});s.onsuccess=()=>e({modelArtifactsInfo:r}),s.onerror=e=>{o=a.objectStore($a);let t=o.delete(this.modelPath);t.onsuccess=()=>(i.close(),n(s.error)),t.onerror=e=>(i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}}},r.onerror=e=>n(r.error)})}};no.URL_SCHEME=`indexeddb://`;var ro=e=>N().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(no.URL_SCHEME)?io(e.slice(no.URL_SCHEME.length)):null;Ga.registerSaveRouter(ro),Ga.registerLoadRouter(ro);function io(e){return new no(e)}function ao(e){return e.startsWith(no.URL_SCHEME)?e.slice(no.URL_SCHEME.length):e}var oo=class{constructor(){this.indexedDB=eo()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(Xa,Za);n.onupgradeneeded=()=>to(n),n.onsuccess=()=>{let r=n.result,i=r.transaction($a,`readonly`),a=i.objectStore($a).getAll();a.onsuccess=()=>{let t={};for(let e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),i.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){return e=ao(e),new Promise((t,n)=>{let r=this.indexedDB.open(Xa,Za);r.onupgradeneeded=()=>to(r),r.onsuccess=()=>{let i=r.result,a=i.transaction($a,`readwrite`),o=a.objectStore($a),s=o.get(e),c;s.onsuccess=()=>{if(s.result==null)return i.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=o.delete(e),a=()=>{c=i.transaction(Qa,`readwrite`);let r=c.objectStore(Qa).delete(e);r.onsuccess=()=>t(s.result.modelArtifactsInfo),r.onerror=e=>n(s.error)};r.onsuccess=a,r.onerror=e=>(a(),i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}},r.onerror=e=>n(r.error)})}},so=`/`,co=`tensorflowjs_models`,lo=`info`,uo=`model_topology`,fo=`weight_specs`,po=`weight_data`,mo=`model_metadata`;function ho(e){return{info:[co,e,lo].join(so),topology:[co,e,uo].join(so),weightSpecs:[co,e,fo].join(so),weightData:[co,e,po].join(so),modelMetadata:[co,e,mo].join(so)}}function go(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function _o(e){let t=e.split(so);if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(so)}function vo(e){return e.startsWith(yo.URL_SCHEME)?e.slice(yo.URL_SCHEME.length):e}var yo=class{constructor(e){if(!N().getBool(`IS_BROWSER`)||typeof window>`u`||typeof window.localStorage>`u`)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=ho(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=za(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,Ma(e.weightData));let i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature==null?void 0:e.signature,userDefinedMetadata:e.userDefinedMetadata==null?void 0:e.userDefinedMetadata,modelInitializer:e.modelInitializer==null?void 0:e.modelInitializer,trainingConfig:e.trainingConfig==null?void 0:e.trainingConfig};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw go(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let e=JSON.parse(i);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,e.signature!=null&&(t.signature=e.signature),e.userDefinedMetadata!=null&&(t.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(t.modelInitializer=e.modelInitializer),e.trainingConfig!=null&&(t.trainingConfig=e.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=Na(a),t}};yo.URL_SCHEME=`localstorage://`;var bo=e=>N().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(yo.URL_SCHEME)?xo(e.slice(yo.URL_SCHEME.length)):null;Ga.registerSaveRouter(bo),Ga.registerLoadRouter(bo);function xo(e){return new yo(e)}var So=class{constructor(){E(N().getBool(`IS_BROWSER`),()=>`Current environment is not a web browser`),E(typeof window>`u`||typeof window.localStorage<`u`,()=>`Current browser does not appear to support localStorage`),this.LS=window.localStorage}async listModels(){let e={};for(let t=0;t<this.LS.length;++t){let n=this.LS.key(t);if(n.startsWith(`tensorflowjs_models/`)&&n.endsWith(`/info`)){let t=_o(n);e[t]=JSON.parse(this.LS.getItem(n))}}return e}async removeModel(e){e=vo(e);let t=ho(e);if(this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '${e}'`);let n=JSON.parse(this.LS.getItem(t.info));return go(t),n}},Co=`://`,wo=class e{constructor(){this.managers={}}static getInstance(){return e.instance??=new e,e.instance}static registerManager(t,n){E(t!=null,()=>`scheme must not be undefined or null.`),t.endsWith(Co)&&(t=t.slice(0,t.indexOf(Co))),E(t.length>0,()=>`scheme must not be an empty string.`);let r=e.getInstance();E(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){let n=e.getInstance().managers[t];if(n==null)throw Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(e.getInstance().managers)}};function To(e){if(e.indexOf(Co)===-1)throw Error(`The url string provided does not contain a scheme. Supported schemes are: ${wo.getSchemes().join(`,`)}`);return{scheme:e.split(Co)[0],path:e.split(Co)[1]}}async function Eo(e,t,n=!1){E(e!==t,()=>`Old path and new path are the same: '${e}'`);let r=Ga.getLoadHandlers(e);E(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),E(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);let i=r[0],a=Ga.getSaveHandlers(t);E(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),E(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);let o=a[0],s=To(e).scheme,c=To(e).path,l=s===To(e).scheme,u=await i.load();n&&l&&await wo.getManager(s).removeModel(c);let d=await o.save(u);return n&&!l&&await wo.getManager(s).removeModel(c),d.modelArtifactsInfo}async function Do(){let e=wo.getSchemes(),t={};for(let n of e){let e=await wo.getManager(n).listModels();for(let r in e){let i=n+Co+r;t[i]=e[r]}}return t}async function Oo(e){let t=To(e);return wo.getManager(t.scheme).removeModel(t.path)}async function ko(e,t){return Eo(e,t,!1)}async function Ao(e,t){return Eo(e,t,!0)}var jo=class{constructor(){this.messageName=`setTimeoutCustom`,this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(!window||!N().getBool(`USE_SETTIMEOUTCUSTOM`)){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},`*`)},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener(`message`,e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}};if(N().get(`IS_BROWSER`)){N().setPlatform(`browser`,new jo);try{wo.registerManager(yo.URL_SCHEME,new So)}catch{}try{wo.registerManager(no.URL_SCHEME,new oo)}catch{}}var Mo={importFetch:()=>s()},No,Po=class{constructor(){this.util=c(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return N().global.fetch==null?(No??=Mo.importFetch(),No(e,t)):N().global.fetch(e,t)}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)}};N().get(`IS_NODE`)&&!N().get(`IS_BROWSER`)&&N().setPlatform(`node`,new Po);function Fo(e,t=`float32`,n){return t||=`float32`,Te(e),new zi(e,t,n)}function Io(e,t){let n=R(e,`x`,`cast`);if(!de(t))throw Error(`Failed to cast to unknown dtype ${t}`);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);let r={x:n},i={dtype:t};return L.runKernel(at,r,i)}var Lo=z({cast_:Io});function Ro(e){let t={x:R(e,`x`,`clone`,`string_or_numeric`)};return L.runKernel(Jt,t)}var zo=z({clone_:Ro});function Bo(e,t=!1){console.log(e.toString(t))}ua(),Ui({buffer:Fo,cast:Lo,clone:zo,print:Bo});var Vo=`model`,Ho=`.json`,Uo=`.weights.bin`;function Wo(e){return new Promise(e=>setTimeout(e)).then(e)}var Go=class e{constructor(t){if(!N().getBool(`IS_BROWSER`))throw Error(`browserDownloads() cannot proceed because the current environment is not a browser.`);t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Vo),this.modelJsonFileName=t+Ho,this.weightDataFileName=t+Uo}async save(e){if(typeof document>`u`)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=window.URL.createObjectURL(new Blob([e.weightData],{type:`application/octet-stream`}));if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserDownloads.save() does not support saving model topology in binary formats yet.`);{let n=Ia(e,[{paths:[`./`+this.weightDataFileName],weights:e.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:`application/json`})),i=this.modelJsonAnchor==null?document.createElement(`a`):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=r,await Wo(()=>i.dispatchEvent(new MouseEvent(`click`))),e.weightData!=null){let e=this.weightDataAnchor==null?document.createElement(`a`):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=t,await Wo(()=>e.dispatchEvent(new MouseEvent(`click`)))}return{modelArtifactsInfo:za(e)}}}};Go.URL_SCHEME=`downloads://`;var Ko=class{constructor(e){if(e==null||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{let n=new FileReader;n.onload=n=>{let r=JSON.parse(n.target.result),i=r.modelTopology;if(i==null){t(Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(r.weightsManifest==null){t(Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}e(Ra(r,e=>this.loadWeights(e)))},n.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)})}loadWeights(e){let t=[],n=[];for(let r of e)t.push(...r.weights),n.push(...r.paths);let r=this.checkManifestAndWeightFiles(e),i=n.map(e=>this.loadWeightsFile(e,r[e]));return Promise.all(i).then(e=>[t,Pa(e)])}loadWeightsFile(e,t){return new Promise((n,r)=>{let i=new FileReader;i.onload=e=>{let t=e.target.result;n(t)},i.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),i.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],n=this.weightsFiles.map(e=>Fa(e.name)),r={};for(let i of e)i.paths.forEach(e=>{let i=Fa(e);if(t.indexOf(i)!==-1)throw Error(`Duplicate file basename found in weights manifest: '${i}'`);if(t.push(i),n.indexOf(i)===-1)throw Error(`Weight file with basename '${i}' is not provided.`);r[e]=this.weightsFiles[n.indexOf(i)]});if(t.length!==this.weightsFiles.length)throw Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}};Ga.registerSaveRouter(e=>N().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Go.URL_SCHEME)?qo(e.slice(Go.URL_SCHEME.length)):null);function qo(e=`model`){return new Go(e)}function Jo(e){return new Ko(e)}function Yo(e,t,n,r){o(e),n??=0,r??=1,s(n,r);let i=0,a=a=>(a.then(a=>(t(n+ ++i/e.length*(r-n)),a)),a);function o(e){E(e!=null&&Array.isArray(e)&&e.length>0,()=>`promises must be a none empty array`)}function s(e,t){E(e>=0&&e<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`),E(t>=0&&t<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`),E(t>=e,()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`)}return Promise.all(e.map(a))}async function Xo(e,t){t??={};let n=t.fetchFunc==null?N().platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(r):await Yo(r,t.onProgress,0,.5)).map(e=>e.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Yo(i,t.onProgress,.5,1)}async function Zo(e,t=``,n,r){return Qo(e=>Xo(e,{requestInit:r}))(e,t,n)}function Qo(e){return async(t,n=``,r)=>{let i=t.map(()=>!1),a={},o=r==null?[]:r.map(()=>!1),s=[];if(t.forEach((e,t)=>{let n=0;e.weights.forEach(e=>{let c=Ta[`quantization`in e?e.quantization.dtype:e.dtype]*k(e.shape),l=()=>{i[t]=!0,a[t]??(a[t]=[]),a[t].push({manifestEntry:e,groupOffset:n,sizeBytes:c})};r==null?l():r.forEach((t,n)=>{t===e.name&&(l(),o[n]=!0)}),s.push(e.name),n+=c})}),!o.every(e=>e)){let e=r.filter((e,t)=>!o[t]);throw Error(`Could not find weights in manifest with names: ${e.join(`, `)}. 
Manifest JSON has weights with names: ${s.join(`, `)}.`)}let c=i.reduce((e,t,n)=>(t&&e.push(n),e),[]),l=[];c.forEach(e=>{t[e].paths.forEach(e=>{let t=n+(n.endsWith(`/`)?``:`/`)+e;l.push(t)})});let u=await e(l),d={},f=0;return c.forEach(e=>{let n=t[e].paths.length,r=0;for(let e=0;e<n;e++)r+=u[f+e].byteLength;let i=new ArrayBuffer(r),o=new Uint8Array(i),s=0;for(let e=0;e<n;e++){let t=new Uint8Array(u[f+e]);o.set(t,s),s+=t.byteLength}a[e].forEach(e=>{let t=Oa(i.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(let e in t)d[e]=t[e]}),f+=n}),d}}var $o=`application/octet-stream`,es=`application/json`,ts=class{constructor(e,t){if(this.DEFAULT_METHOD=`POST`,t??={},this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc==null?this.fetch=N().platform.fetch:(E(typeof t.fetchFunc==`function`,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc),E(e!=null&&e.length>0,()=>`URL path for http must not be null, undefined or empty.`),Array.isArray(e)&&E(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw Error(`requestInit is expected to have no pre-existing body, but has one.`);this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.`);let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=Ia(e,[{paths:[`./model.weights.bin`],weights:e.weightSpecs}]);t.body.append(`model.json`,new Blob([JSON.stringify(n)],{type:es}),`model.json`),e.weightData!=null&&t.body.append(`model.weights.bin`,new Blob([e.weightData],{type:$o}),`model.weights.bin`);let r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:za(e),responses:[r]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){let e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(`.pb`)?e+=` Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.`:e+=` Please make sure the server is serving valid JSON for this request.`,Error(e)}let n=t.modelTopology,r=t.weightsManifest;if(n==null&&r==null)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Ra(t,e=>this.loadWeights(e))}async loadWeights(e){let[t,n]=ns(Array.isArray(this.path)?this.path[1]:this.path),r=this.weightPathPrefix||t,i=Ba(e),a=[],o=[];for(let t of e)for(let e of t.paths)this.weightUrlConverter==null?a.push(r+e+n):o.push(this.weightUrlConverter(e));return this.weightUrlConverter&&a.push(...await Promise.all(o)),[i,Pa(await Xo(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}};ts.URL_SCHEME_REGEX=/^https?:\/\//;function ns(e){let t=e.lastIndexOf(`/`),n=e.lastIndexOf(`?`),r=e.substring(0,t),i=n>t?e.substring(n):``;return[r+`/`,i]}function rs(e){return e.match(ts.URL_SCHEME_REGEX)!=null}var is=(e,t)=>{if(typeof fetch>`u`&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(n=Array.isArray(e)?e.every(e=>rs(e)):rs(e),n)return as(e,t)}return null};Ga.registerSaveRouter(is),Ga.registerLoadRouter(is);function as(e,t){return new ts(e,t)}function os(e,t){return as(e,t)}var ss=class{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}},cs=class{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}},ls=class{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}};function us(e,t,n,r){return new ls(ds(...arguments))}function ds(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new ss(e):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new ss({modelTopology:e})):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new ss({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function fs(e){return new cs(e)}function ps(e){return new cs(e)}var ms=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:Jo,browserHTTPRequest:os,concatenateArrayBuffers:Pa,copyModel:ko,decodeWeights:Oa,encodeWeights:Da,fromMemory:us,fromMemorySync:ds,getLoadHandlers:Ya,getModelArtifactsForJSON:Ra,getModelArtifactsForJSONSync:La,getModelArtifactsInfoForJSON:za,getSaveHandlers:Ja,getWeightSpecs:Ba,http:as,isHTTPScheme:rs,listModels:Do,loadWeights:Zo,moveModel:Ao,registerLoadRouter:qa,registerSaveRouter:Ka,removeModel:Oo,weightsLoaderFactory:Qo,withSaveHandler:fs,withSaveHandlerSync:ps},Symbol.toStringTag,{value:`Module`}));function hs(e,t,n=!1,r=!1){let i=R(e,`a`,`matMul`),a=R(t,`b`,`matMul`);[i,a]=ta(i,a);let o={a:i,b:a},s={transposeA:n,transposeB:r};return L.runKernel(tt,o,s)}var B=z({matMul_:hs});function gs(e,t,n=1,r=0,i=`int32`){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:R(e,`indices`,`oneHot`,`int32`)},o={dtype:i,depth:t,onValue:n,offValue:r};return L.runKernel(Mn,a,o)}var _s=z({oneHot_:gs});function vs(){return L}function ys(e,t){return L.tidy(e,t)}function bs(e){ra(e).forEach(e=>e.dispose())}function xs(e){return L.keep(e)}function Ss(e,t,n=1){return L.registerBackend(e,t,n)}function Cs(e){let t={input:R(e,`input`,`imag`)};return L.runKernel(Xt,t)}var ws=z({imag_:Cs});function Ts(e){let t={x:R(e,`x`,`neg`)};return L.runKernel(En,t)}var Es=z({neg_:Ts});function Ds(e){let t={input:R(e,`input`,`real`)};return L.runKernel(Vn,t)}var Os=z({real_:Ds});function ks(e,t,n){let r=R(e,`x`,`transpose`);if(t??=r.shape.map((e,t)=>t).reverse(),E(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{E(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let i={x:r},a={perm:t};return r.dtype===`complex64`?ys(()=>{let e=Os(r),t=ws(r);return e=L.runKernel(jr,{x:e},a),t=L.runKernel(jr,{x:t},a),n&&(t=Es(t)),Sa(e,t)}):L.runKernel(jr,i,a)}var As=z({transpose_:ks});function js(e,t){let n=e.length,r=[];for(let i=0;i<n;i++){let a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}function Ms(e,t){let n=[];for(let r=0;r<t.length;r++){let i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&o>1)&&n.unshift(a)}return n}function V(e,t){let n=[],r=Math.max(e.length,t.length);for(let i=0;i<r;i++){let r=e[e.length-i-1];r??=1;let a=t[t.length-i-1];if(a??=1,r===1)n.unshift(a);else if(a===1)n.unshift(r);else if(r!==a){let n=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(n)}else n.unshift(r)}return n}function Ns(e,t,n){if(O(e),t!=null&&t.length!==3)throw Error(`tensor3d() requires shape to have three numbers`);let r=ga(e,n);if(r.length!==3&&r.length!==1)throw Error(`tensor3d() requires values to be number[][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ca(e,t,r,n)}var Ps;function Fs(e,t=3){if(t>4)throw Error(`Cannot construct Tensor with more than 4 channels from pixels.`);if(e==null)throw Error(`pixels passed to tf.browser.fromPixels() can not be null`);let n=!1,r=!1,i=!1,a=!1,o=!1,s=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<`u`&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)i=!0;else if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)a=!0;else if(e.getContext!=null)o=!0;else if(typeof ImageBitmap<`u`&&e instanceof ImageBitmap)s=!0;else throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(Kr(Lr,L.backendName)!=null){let n={pixels:e},r={numChannels:t};return L.runKernel(Lr,n,r)}let[c,l]=i?[e.videoWidth,e.videoHeight]:[e.width,e.height],u;if(o)u=e.getContext(`2d`).getImageData(0,0,c,l).data;else if(r||n)u=e.data;else if(a||i||s){if(Ps==null)if(typeof document>`u`)if(typeof OffscreenCanvas<`u`&&typeof OffscreenCanvasRenderingContext2D<`u`)Ps=new OffscreenCanvas(1,1).getContext(`2d`);else throw Error(`Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.`);else Ps=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0});Ps.canvas.width=c,Ps.canvas.height=l,Ps.drawImage(e,0,0,c,l),u=Ps.getImageData(0,0,c,l).data}let d;if(t===4)d=new Int32Array(u);else{let e=c*l;d=new Int32Array(e*t);for(let n=0;n<e;n++)for(let e=0;e<t;++e)d[n*t+e]=u[n*4+e]}return Ns(d,[l,c,t],`int32`)}async function Is(e,t){let n=R(e,`img`,`toPixels`);if(!(e instanceof Wi)){let e=n;n=Lo(e,`int32`),e.dispose()}if(n.rank!==2&&n.rank!==3)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);let[r,i]=n.shape.slice(0,2),a=n.rank===2?1:n.shape[2];if(a>4||a===2)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got ${a}`);if(n.dtype!==`float32`&&n.dtype!==`int32`)throw Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);let o=await n.data(),s=n.dtype===`float32`?255:1,c=new Uint8ClampedArray(i*r*4);for(let e=0;e<r*i;++e){let t=[0,0,0,255];for(let r=0;r<a;r++){let i=o[e*a+r];if(n.dtype===`float32`){if(i<0||i>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${i}.`)}else if(n.dtype===`int32`&&(i<0||i>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${i}.`);a===1?(t[0]=i*s,t[1]=i*s,t[2]=i*s):t[r]=i*s}let r=e*4;c[r+0]=Math.round(t[0]),c[r+1]=Math.round(t[1]),c[r+2]=Math.round(t[2]),c[r+3]=Math.round(t[3])}return n!==e&&n.dispose(),c}var Ls=z({fromPixels_:Fs});function Rs(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(k(e.shape)===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let i=t.shape,a=i[i.length-1],o=1;for(let e=0;e<i.length-1;++e)o*=i[e];let s=e.shape,c=i.slice();c.pop();let l=1;for(let e=a;e<n;++e)l*=s[e],c.push(s[e]);let u=[...M(e.shape).map(e=>e/l),1].slice(0,a);return[c,o,l,u]}function zs(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${i}.`;if(n.rank<i)throw Error(a+` update.rank < ${i}. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < ${r+(n.rank-i)}`);if(n.rank!==i+e.length-r)throw Error(a+` update.rank != ${i+e.length-r}`);for(let e=0;e<i;++e)if(n.shape[e]!==t.shape[e])throw Error(a+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-i;++t)if(n.shape[t+i]!==e[t+r])throw Error(a+` updates.shape[${t+i}] (${n.shape[t+i]}) != shape[${t+i}] (${e[t+i]})`)}function Bs(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}zs(n,t,e)}function Vs(e,t,n){let r=t.shape.length,i=r>1?t.shape[r-1]:1,a=n.length,o=1;for(let e=i;e<a;++e)o*=n[e];let s=i<1?1:i,c=k(t.shape)/s,l=[...M(n.slice(0,i)),1],u=k(n);return{sliceRank:i,numUpdates:c,sliceSize:o,strides:l,outputSize:u}}var Hs=-2,Us=-1;function Ws(e,t,n){let r=e.shape.length;E(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),E(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)E(t[i]+n[i]<=e.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${t[i]+n[i]}) would overflow input.shape[${i}] (${e.shape[i]})`)}function Gs(e){let t=[],n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function Ks(e,t,n){let r=[];for(let i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function qs(e,t,n,r){let i=[...e];for(let e=i.length;e<r.length;e++)i.push(1);for(let e=0;e<n;e++)e===0?i[t]=1:(i.splice(t,0,1),i.pop());return i}function Js(e,t,n){return n<=e?n:n-(t-1)}function Ys(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function Xs(e,t,n,r,i,a,o,s,c){let l=e.length,u=Array(l),d=Array(l),f=Array(l);if(t.length&&n>0){let c=t[0],l=n+1;u=Zs(o,c,l,r,e),d=Qs(s,c,l,i,e),f=qs(a,c,l,e)}else for(let t=0;t<l;t++)u[t]=ec(o,r,a,e,t,c),d[t]=tc(s,i,a,e,t,c),f[t]=$s(a,t,c);return{begin:u,end:d,strides:f}}function Zs(e,t,n,r,i){let a=[...i],o=Ys(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=0;else{let o=Js(t,n,i),s=r[o];e&1<<o&&(s=0),a[i]=s}return a}function Qs(e,t,n,r,i){let a=[...i],o=Ys(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=2**53-1;else{let o=Js(t,n,i),s=r[o];e&1<<o&&(s=2**53-1),a[i]=s}for(let e=0;e<a.length;e++){let t=i[e];a[e]<0&&(a[e]+=t),a[e]=S(0,a[e],i[e])}return a}function $s(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function ec(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?-(2**53-1):2**53-1);let c=r[i];return o<0&&(o+=c),o=S(0,o,c-1),o}function tc(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?2**53-1:-(2**53-1));let c=r[i];return o<0&&(o+=c),o=s>0?S(0,o,c):S(-1,o,c-1),o}function nc(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let i=r+1;i<n.length;i++)if(t[i]>0||n[i]!==e[i])return!1;return!0}function rc(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function ic(e,t,n){let r,i=e.shape.length;r=typeof t==`number`?[t,...Array(i-1).fill(0)]:t.length<i?t.concat(Array(i-t.length).fill(0)):t.slice(),r.forEach(e=>{E(e!==-1,()=>`slice() does not support negative begin indexing.`)});let a;return a=n==null?Array(i).fill(-1):typeof n==`number`?[n,...Array(i-1).fill(-1)]:n.length<i?n.concat(Array(i-n.length).fill(-1)):n,a=a.map((t,n)=>t>=0?t:(E(t===-1,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function ac(e,t,n,r,i,a,o,s,c){let l;if(r==null?(l=Array(t.length),l.fill(1)):l=r,o!=null&&o&o-1)throw Error(`Multiple ellipses in slice is not allowed.`);let u=!1,d={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};for(let e=0;e<d.dims;e++)u&&1<<e&s&&d.numAddAxisAfterEllipsis++,1<<e&o&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};oc(d,f);let p=!0,m=!0,h=!0,g=[],_=[];for(let t=0;t<e.length;++t){if(f.strides[t]===0)throw Error(`strides[${t}] must be non-zero`);let n=!!(f.shrinkAxisMask&1<<t),r=e[t];if(r===-1){g.push(n?1:-1);continue}let i=[f.beginMask&1<<t,f.endMask&1<<t],a=[f.strides[t]>0?0:-1,f.strides[t]>0?r:r-1];if(n&&f.strides[t]<=0)throw Error(`only stride 1 allowed on non-range indexing.`);h&&=f.strides[t]===1;let o=!!(f.beginMask&1<<t&&f.endMask&1<<t);if(f.beginValid&&f.endValid){if(n){let e=f.begin[t]<0?r+f.begin[t]:f.begin[t];if(f.begin[t]=e,f.end[t]=f.begin[t]+1,e<0||e>=r)throw Error(`slice index ${f.begin[t]} of dimension ${t} out of bounds.`)}else f.begin[t]=sc(f.begin[t],0,f.strides[t],r,i,a),f.end[t]=sc(f.end[t],1,f.strides[t],r,i,a);let e=f.strides[t]===1&&f.begin[t]===0&&f.end[t]===r;p&&=e,m&&=t===0&&f.strides[t]===1||e}else p=p&&f.strides[t]===1&&o,m&&=t===0&&f.strides[t]===1||o;let s,c=!1;if(f.beginValid&&f.endValid?(s=f.end[t]-f.begin[t],c=!0):n?(s=1,c=!0):o&&r>=0&&(s=f.strides[t]<0?-r:r,c=!0),c){let e;e=s===0||s<0!=f.strides[t]<0?0:Math.trunc(s/f.strides[t])+(s%f.strides[t]===0?0:1),g.push(e)}else g.push(-1)}for(let e=0;e<f.finalShapeGatherIndices.length;++e){let t=f.finalShapeGatherIndices[e];t>=0?_.push(g[t]):t===Hs&&_.push(1)}return{finalShapeSparse:_.filter((e,t)=>f.finalShapeGatherIndices[t]!==Hs),finalShape:_,isIdentity:p,sliceDim0:m,isSimpleSlice:h,begin:f.begin,end:f.end,strides:f.strides}}function oc(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){let i=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<i;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(Hs),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(Us),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function sc(e,t,n,r,i,a){if(i[t])return n>0?a[t]:a[t+1&1];{let t=e<0?r+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var cc=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:Ws,computeFlatOffset:rc,computeOutShape:Ks,getNormalizedAxes:Xs,isSliceContinous:nc,maskToAxes:Gs,parseSliceParams:ic,sliceInfo:ac,startForAxis:ec,startIndicesWithElidedDims:Zs,stopForAxis:tc,stopIndicesWithElidedDims:Qs,stridesForAxis:$s,stridesWithElidedDims:qs},Symbol.toStringTag,{value:`Module`}));function lc(e,t){let n=R(e,`a`,`add`),r=R(t,`b`,`add`);[n,r]=ta(n,r);let i={a:n,b:r};return L.runKernel(Ve,i)}var H=z({add_:lc});function uc(e,t){let n=R(e,`a`,`floorDiv`),r=R(t,`b`,`floorDiv`);[n,r]=ta(n,r);let i={a:n,b:r};return L.runKernel(Ht,i)}var dc=z({floorDiv_:uc});function fc(e,t){let n=R(e,`a`,`div`),r=R(t,`b`,`div`);if([n,r]=ta(n,r),n.dtype===`int32`&&r.dtype===`int32`)return dc(n,r);let i={a:n,b:r};return L.runKernel(kt,i,{})}var U=z({div_:fc});function pc(e,t){let n=R(e,`a`,`mul`),r=R(t,`b`,`mul`);[n,r]=ta(n,r);let i={a:n,b:r};return L.runKernel(Tn,i)}var W=z({mul_:pc});function mc(e){let t=R(e,`x`,`abs`);if(t.dtype===`complex64`){let e={x:t};return L.runKernel(lt,e)}else{let e={x:t};return L.runKernel(ze,e)}}var hc=z({abs_:mc});function gc(e){let t={x:R(e,`x`,`acos`)};return L.runKernel(Be,t)}var _c=z({acos_:gc});function vc(e){let t={x:R(e,`x`,`acosh`)};return L.runKernel(F,t)}var yc=z({acosh_:vc});function bc(e){E(Array.isArray(e),()=>`The argument passed to tf.addN() must be a list of tensors`),E(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((e,t)=>R(e,`tensors${t}`,`addN`)),n=t[0];t.forEach(e=>{if(e.dtype!==n.dtype)throw Error(`All tensors passed to tf.addN() must have the same dtype`)}),t.forEach(e=>{if(!A(e.shape,n.shape))throw Error(`All tensors passed to tf.addN() must have the same shape`)});let r=t;return L.runKernel(He,r)}var xc=z({addN_:bc});function Sc(e,t=null,n=!1){let r={x:R(e,`x`,`all`,`bool`)},i={axis:t,keepDims:n};return L.runKernel(Ue,r,i)}var Cc=z({all_:Sc});function wc(e,t=null,n=!1){let r={x:R(e,`x`,`any`,`bool`)},i={axis:t,keepDims:n};return L.runKernel(We,r,i)}var Tc=z({any_:wc});function Ec(e,t=0){let n={x:R(e,`x`,`argMax`)},r={axis:t};return L.runKernel(I,n,r)}var Dc=z({argMax_:Ec});function Oc(e,t=0){let n={x:R(e,`x`,`argMin`)},r={axis:t};return L.runKernel(Ge,n,r)}var kc=z({argMin_:Oc});function Ac(e){let t={x:R(e,`x`,`asin`)};return L.runKernel(Ke,t)}var jc=z({asin_:Ac});function Mc(e){let t={x:R(e,`x`,`asinh`)};return L.runKernel(qe,t)}var Nc=z({asinh_:Mc});function Pc(e){let t={x:R(e,`x`,`atan`)};return L.runKernel(Je,t)}var Fc=z({atan_:Pc});function Ic(e,t){let n=R(e,`a`,`atan2`),r=R(t,`b`,`atan2`);[n,r]=ta(n,r);let i={a:n,b:r};return L.runKernel(Xe,i)}var Lc=z({atan2_:Ic});function Rc(e){let t={x:R(e,`x`,`atanh`)};return L.runKernel(Ye,t)}var zc=z({atanh_:Rc});function Bc(e,t,n,r,i=`NHWC`,a){let o=e[3];return Uc(e,[...t,o],n,a,r,null,null,nl(i))}function Vc(e,t,n,r,i,a,o=`channelsLast`){let[s,c]=Jc(t),l;if(o===`channelsLast`)l=[s,c,e[3],e[3]];else if(o===`channelsFirst`)l=[s,c,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return Uc(e,l,n,r,i,a,!1,o)}function Hc(e,t,n,r,i,a,o=`NDHWC`){let[s,c,l]=Yc(t),u,d;if(o===`NDHWC`)d=`channelsLast`,u=[s,c,l,e[4],e[4]];else if(o===`NCDHW`)d=`channelsFirst`,u=[s,c,l,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return Wc(e,u,n,r,i,!1,d,a)}function Uc(e,t,n,r,i,a,o=!1,s=`channelsLast`){let[c,l,u,d]=[-1,-1,-1,-1];if(s===`channelsLast`)[c,l,u,d]=e;else if(s===`channelsFirst`)[c,d,l,u]=e;else throw Error(`Unknown dataFormat ${s}`);let[f,p,,m]=t,[h,g]=Jc(n),[_,v]=Jc(r),y=Xc(f,_),b=Xc(p,v),{padInfo:x,outHeight:S,outWidth:C}=Zc(i,l,u,h,g,y,b,a,s),w=o?m*d:m,T;return s===`channelsFirst`?T=[c,w,S,C]:s===`channelsLast`&&(T=[c,S,C,w]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:u,inChannels:d,outHeight:S,outWidth:C,outChannels:w,padInfo:x,strideHeight:h,strideWidth:g,filterHeight:f,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:b,dilationHeight:_,dilationWidth:v,inShape:e,outShape:T,filterShape:t}}function Wc(e,t,n,r,i,a=!1,o=`channelsLast`,s){let[c,l,u,d,f]=[-1,-1,-1,-1,-1];if(o===`channelsLast`)[c,l,u,d,f]=e;else if(o===`channelsFirst`)[c,f,l,u,d]=e;else throw Error(`Unknown dataFormat ${o}`);let[p,m,h,,g]=t,[_,v,y]=Yc(n),[b,x,S]=Yc(r),C=Xc(p,b),w=Xc(m,x),T=Xc(h,S),{padInfo:E,outDepth:D,outHeight:O,outWidth:ee}=Qc(i,l,u,d,_,v,y,C,w,T,s),k=a?g*f:g,A;return o===`channelsFirst`?A=[c,k,D,O,ee]:o===`channelsLast`&&(A=[c,D,O,ee,k]),{batchSize:c,dataFormat:o,inDepth:l,inHeight:u,inWidth:d,inChannels:f,outDepth:D,outHeight:O,outWidth:ee,outChannels:k,padInfo:E,strideDepth:_,strideHeight:v,strideWidth:y,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:C,effectiveFilterHeight:w,effectiveFilterWidth:T,dilationDepth:b,dilationHeight:x,dilationWidth:S,inShape:e,outShape:A,filterShape:t}}function Gc(e,t,n,r,i){r??=qc(e,t,n);let a=e[0],o=e[1];return[$c((a-t+2*r)/n+1,i),$c((o-t+2*r)/n+1,i)]}function Kc(e,t,n,r,i,a){i??=qc(e,t,r);let o=e[0],s=e[1],c=e[2];return[$c((o-t+2*i)/r+1,a),$c((s-t+2*i)/r+1,a),$c((c-t+2*i)/r+1,a),n]}function qc(e,t,n,r=1){let i=Xc(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function Jc(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Yc(e){return typeof e==`number`?[e,e,e]:e}function Xc(e,t){return t<=1?e:e+(e-1)*(t-1)}function Zc(e,t,n,r,i,a,o,s,c){let l,u,d;if(typeof e==`number`){l={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};let i=Gc([t,n],a,r,e,s);u=i[0],d=i[1]}else if(e===`same`){u=Math.ceil(t/r),d=Math.ceil(n/i);let e=Math.max(0,(u-1)*r+a-t),s=Math.max(0,(d-1)*i+o-n),c=Math.floor(e/2),f=e-c,p=Math.floor(s/2);l={top:c,bottom:f,left:p,right:s-p,type:`SAME`}}else if(e===`valid`)l={top:0,bottom:0,left:0,right:0,type:`VALID`},u=Math.ceil((t-a+1)/r),d=Math.ceil((n-o+1)/i);else if(typeof e==`object`){let f=c===`channelsLast`?e[1][0]:e[2][0],p=c===`channelsLast`?e[1][1]:e[2][1],m=c===`channelsLast`?e[2][0]:e[3][0],h=c===`channelsLast`?e[2][1]:e[3][1];l={top:f,bottom:p,left:m,right:h,type:f===0&&p===0&&m===0&&h===0?`VALID`:`EXPLICIT`},u=$c((t-a+f+p)/r+1,s),d=$c((n-o+m+h)/i+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:u,outWidth:d}}function Qc(e,t,n,r,i,a,o,s,c,l,u){let d,f,p,m;if(typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};let a=Kc([t,n,r,1],s,1,i,e,u);f=a[0],p=a[1],m=a[2]}else if(e===`same`){f=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let e=(f-1)*i+s-t,u=(p-1)*a+c-n,h=(m-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(u/2),y=u-v,b=Math.floor(h/2);d={top:v,bottom:y,left:b,right:h-b,front:g,back:_,type:`SAME`}}else if(e===`valid`)d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:`VALID`},f=Math.ceil((t-s+1)/i),p=Math.ceil((n-c+1)/a),m=Math.ceil((r-l+1)/o);else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}function $c(e,t){if(!t)return Math.trunc(e);switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function el(e){let[t,n,r]=Jc(e);return t===1&&n===1&&r===1}function tl(e,t){return el(e)||el(t)}function nl(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat ${e}`)}function rl(e,t,n){if(n!=null){if(typeof t==`string`)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t==`number`)E(te(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t==`object`)t.forEach(t=>{t.forEach(t=>{E(te(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function il(e,t){let n={x:R(e,`x`,`reshape`,`string_or_numeric`)},r={shape:t};return L.runKernel(Wn,n,r)}var G=z({reshape_:il});function al(e,t,n,r,i){let a=R(e,`x`,`avgPool`,`float32`);E(tl(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let o=a,s=!1;a.rank===3&&(s=!0,o=G(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),rl(`avgPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=L.runKernel(Ze,c,l);return u=Lo(u,a.dtype),s?G(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var ol=z({avgPool_:al});function sl(e,t,n,r,i,a=`NDHWC`){let o=R(e,`x`,`avgPool3d`,`float32`),s=o,c=!1;o.rank===4&&(c=!0,s=G(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),E(s.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${s.rank}.`),E(a===`NDHWC`,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),rl(`avgPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=L.runKernel($e,l,u);return d=Lo(d,s.dtype),c?G(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var cl=z({avgPool3d_:sl});function ll(e,t=0){E(e.length>=1,()=>`Pass at least one tensor to concat`);let n=ya(e,`tensors`,`concat`,`string_or_numeric`);if(n[0].dtype===`complex64`&&n.forEach(e=>{if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),n.length===1)return zo(n[0]);let r=n,i={axis:t};return L.runKernel(ut,r,i)}var ul=z({concat_:ll});function dl(e){let t={x:R(e,`x`,`sigmoid`,`float32`)};return L.runKernel(sr,t)}var fl=z({sigmoid_:dl});function pl(e,t,n){let r=R(e,`x`,`slice`,`string_or_numeric`);if(r.rank===0)throw Error(`Slicing scalar is not possible`);let i={x:r},a={begin:t,size:n};return L.runKernel(rr,i,a)}var K=z({slice_:pl});function ml(e){let t={x:R(e,`x`,`tanh`,`float32`)};return L.runKernel(Dr,t)}var hl=z({tanh_:ml});function gl(e,t,n,r,i,a){let o=R(e,`forgetBias`,`basicLSTMCell`),s=R(t,`lstmKernel`,`basicLSTMCell`),c=R(n,`lstmBias`,`basicLSTMCell`),l=R(r,`data`,`basicLSTMCell`),u=R(i,`c`,`basicLSTMCell`),d=H(B(ul([l,R(a,`h`,`basicLSTMCell`)],1),s),c),f=d.shape[0],p=d.shape[1]/4,m=[f,p],h=K(d,[0,0],m),g=K(d,[0,p],m),_=K(d,[0,p*2],m),v=K(d,[0,p*3],m),y=H(W(fl(h),hl(g)),W(u,fl(H(o,_))));return[y,W(hl(y),fl(v))]}var _l=z({basicLSTMCell_:gl});function vl(e,t,n){let r=R(e,`x`,`batchToSpaceND`),i=t.reduce((e,t)=>e*t);E(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),E(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),E(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(` * `)} === ${i}`);let a={x:r},o={blockShape:t,crops:n};return L.runKernel(nt,a,o)}var yl=z({batchToSpaceND_:vl});function bl(e){let t;return t=e.rank===0||e.rank===1?G(e,[1,1,1,e.size]):e.rank===2?G(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?G(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}function xl(e,t,n,r,i,a){a??=.001;let o=R(e,`x`,`batchNorm`),s=R(t,`mean`,`batchNorm`),c=R(n,`variance`,`batchNorm`),l;i!=null&&(l=R(i,`scale`,`batchNorm`));let u;r!=null&&(u=R(r,`offset`,`batchNorm`)),E(s.rank===c.rank,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),E(u==null||s.rank===u.rank,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),E(l==null||s.rank===l.rank,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let d={x:bl(o),scale:l,offset:u,mean:s,variance:c},f={varianceEpsilon:a};return G(L.runKernel(Ut,d,f),o.shape)}var Sl=z({batchNorm_:xl});function Cl(e,t,n,r,i,a){let o=R(e,`x`,`batchNorm`),s=R(t,`mean`,`batchNorm`),c=R(n,`variance`,`batchNorm`),l;i!=null&&(l=R(i,`scale`,`batchNorm`));let u;return r!=null&&(u=R(r,`offset`,`batchNorm`)),E(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),E(s.rank===2||s.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${s.rank}.`),E(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&E(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Sl(o,s,c,u,l,a)}var wl=z({batchNorm2d_:Cl});function Tl(e,t,n,r,i,a){let o=R(e,`x`,`batchNorm`),s=R(t,`mean`,`batchNorm`),c=R(n,`variance`,`batchNorm`),l;i!=null&&(l=R(i,`scale`,`batchNorm`));let u;return r!=null&&(u=R(r,`offset`,`batchNorm`)),E(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),E(s.rank===3||s.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${s.rank}.`),E(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&E(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Sl(o,s,c,u,l,a)}var El=z({batchNorm3d_:Tl});function Dl(e,t,n,r,i,a){let o=R(e,`x`,`batchNorm`),s=R(t,`mean`,`batchNorm`),c=R(n,`variance`,`batchNorm`),l;i!=null&&(l=R(i,`scale`,`batchNorm`));let u;return r!=null&&(u=R(r,`offset`,`batchNorm`)),E(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),E(s.rank===4||s.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${s.rank}.`),E(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&E(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Sl(o,s,c,u,l,a)}var Ol=z({batchNorm4d_:Dl});function kl(e,t,n){let r=R(e,`x`,`bincount`),i=R(t,`weights`,`bincount`);E(r.dtype===`int32`,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),E(n>=0,()=>`size must be non-negative, but got ${n}.`),E(i.size===r.size||i.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${i.shape}.`);let a={x:r,weights:i},o={size:n};return L.runKernel(rt,a,o)}var Al=z({bincount_:kl});function jl(e,t){let n=R(e,`s0`,`broadcastArgs`,`int32`),r=R(t,`s1`,`broadcastArgs`,`int32`);if(n.rank!==1)throw Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);let i={s0:n,s1:r};return L.runKernel(it,i)}var Ml=z({broadcastArgs_:jl});function Nl(e,t){let n=R(e,`broadcastTo`,`x`),r=n.shape;if(t.some(e=>!(e>0)||e%1!=0))throw Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=G(n,e)}let i=n.shape,a=Array.from(t);for(let e=t.length-1;e>=0;e--)if(i[e]===t[e])a[e]=1;else if(n.shape[e]!==1)throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length===0)return zo(n);let o={x:n},s={reps:a};return L.runKernel(Or,o,s)}var Pl=z({broadcastTo_:Nl});function Fl(e){let t={x:R(e,`x`,`ceil`,`float32`)};return L.runKernel(ot,t)}var Il=z({ceil_:Fl});function Ll(e,t,n){let r={shape:e,value:t,dtype:n};return L.runKernel(zt,{},r)}function Rl(e,t,n){let r=R(e,`x`,`clipByValue`);if(E(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return Ll(r.shape,t,r.dtype);let i={x:r},a={clipValueMin:t,clipValueMax:n};return L.runKernel(st,i,a)}var zl=z({clipByValue_:Rl});function Bl(e){return ul(e,0)}var Vl=z({concat1d_:Bl});function Hl(e,t){return ul(e,t)}var Ul=z({concat2d_:Hl});function Wl(e,t){return ul(e,t)}var Gl=z({concat3d_:Wl});function Kl(e,t){return ul(e,t)}var ql=z({concat4d_:Kl});function Jl(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=R(e,`x`,`conv2d`,`float32`),c=R(t,`filter`,`conv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),E(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),rl(`conv2d`,r,o);let d=i===`NHWC`?l.shape[3]:l.shape[1];E(d===c.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${c.shape[2]}.`),E(tl(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=L.runKernel(dt,f,p);return u?G(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Yl=z({conv2d_:Jl});function Xl(e,t,n,r,i=`NWC`,a=1,o){let s=R(e,`x`,`conv1d`),c=R(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=G(s,[1,s.shape[0],s.shape[1]])),E(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),E(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),rl(`conv1d`,r,o),E(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),E(tl(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),E(i===`NWC`,()=>`Error in conv1d: got dataFormat of ${i} but only NWC is currently supported.`);let d=G(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=Yl(G(l,[l.shape[0],1,l.shape[1],l.shape[2]]),d,[1,n],r,`NHWC`,[1,a],o);return u?G(f,[f.shape[2],f.shape[3]]):G(f,[f.shape[0],f.shape[2],f.shape[3]])}var Zl=z({conv1d_:Xl});function Ql(e,t,n,r,i,a=`NHWC`,o){E(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,c=t,l=!1;t.rank===3&&(l=!0,c=G(t,[1,t.shape[0],t.shape[1],t.shape[2]]),s=[1,e[0],e[1],e[2]]),E(s.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${s.length}.`),E(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),E(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];E(u===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[2]}.`),E(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),rl(`conv2dDerInput`,i,o);let f={dy:c,filter:n},p={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,inputShape:s},m=L.runKernel(pt,f,p);return l?G(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var $l=z({conv2DBackpropInput_:Ql});function eu(e,t,n,r,i,a){return $l(n,R(e,`x`,`conv2dTranspose`),R(t,`filter`,`conv2dTranspose`),r,i,`NHWC`,a)}var tu=z({conv2dTranspose_:eu});function nu(e,t,n,r,i=`NDHWC`,a=[1,1,1]){let o=R(e,`x`,`conv3d`),s=R(t,`filter`,`conv3d`),c=o,l=!1;o.rank===4&&(l=!0,c=G(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),E(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),E(s.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${s.rank}.`),E(c.shape[4]===s.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${s.shape[3]}.`),E(tl(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),E(i===`NDHWC`,()=>`Error in conv3d: got dataFormat of ${i} but only NDHWC is currently supported.`);let u={x:c,filter:s},d={strides:n,pad:r,dataFormat:i,dilations:a},f=L.runKernel(mt,u,d);return l?G(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var ru=z({conv3d_:nu});function iu(e,t,n,r,i){E(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,s=!1;t.rank===4&&(s=!0,o=G(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);let c=a[4],l=o.shape[4];E(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),E(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),E(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),E(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),E(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);let u={dy:o,filter:n},d={pad:i,strides:r,inputShape:a},f=L.runKernel(gt,u,d);return s?G(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var au=z({conv3DBackpropInput_:iu});function ou(e,t,n,r,i){return au(n,R(e,`x`,`conv3dTranspose`),R(t,`filter`,`conv3dTranspose`),r,i)}var su=z({conv3dTranspose_:ou});function cu(e){let t={x:R(e,`x`,`cos`,`float32`)};return L.runKernel(_t,t)}var lu=z({cos_:cu});function uu(e){let t={x:R(e,`x`,`cosh`,`float32`)};return L.runKernel(vt,t)}var du=z({cosh_:uu});function fu(e,t=0,n=!1,r=!1){let i={x:R(e,`x`,`cumprod`)},a={axis:t,exclusive:n,reverse:r};return L.runKernel(yt,i,a)}var pu=z({cumprod_:fu});function mu(e,t=0,n=!1,r=!1){let i={x:R(e,`x`,`cumsum`)},a={axis:t,exclusive:n,reverse:r};return L.runKernel(bt,i,a)}var hu=z({cumsum_:mu});function gu(e,t,n,r=!1){let i=R(e,`x`,`denseBincount`),a=R(t,`weights`,`denseBincount`);E(i.dtype===`int32`,()=>`Error in denseBincount: input dtype must be int32, but got ${i.dtype}`),E(i.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${i.rank}.`),E(n>=0,()=>`size must be non-negative, but got ${n}.`),E(a.size===i.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${i.shape}, weights shape: ${a.shape}.`);let o={x:i,weights:a},s={size:n,binaryOutput:r};return L.runKernel(St,o,s)}var _u=z({denseBincount_:gu});function vu(e,t,n=`NHWC`){let r=R(e,`x`,`depthToSpace`,`float32`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];E(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),E(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t}  for depthToSpace with input shape
    ${r.shape}`),E(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),E(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);let s={x:r},c={blockSize:t,dataFormat:n};return L.runKernel(Ct,s,c)}var yu=z({depthToSpace_:vu});function bu(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=R(e,`x`,`depthwiseConv2d`,`float32`),c=R(t,`filter`,`depthwiseConv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),E(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let d=i===`NHWC`?l.shape[3]:l.shape[1];E(d===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${c.shape[2]}.`),rl(`depthwiseConv2d`,r,o);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=L.runKernel(wt,f,p);return u?G(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var xu=z({depthwiseConv2d_:bu});function Su(e){let t={x:R(e,`x`,`diag`)};return L.runKernel(Dt,t)}var Cu=z({diag_:Su});function wu(e,t,n,r,i=[1,1],a=`NHWC`){let o=R(e,`x`,`dilation2d`),s=R(t,`filter`,`dilation2d`);E(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),E(s.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${s.rank}.`),E(a===`NHWC`,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let c=o,l=!1;o.rank===3&&(c=G(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0);let u={x:c,filter:s},d={strides:n,pad:r,dilations:i},f=L.runKernel(Ot,u,d);return l?G(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var Tu=z({dilation2d_:wu});function Eu(e,t){let n=R(e,`a`,`equal`,`string_or_numeric`),r=R(t,`b`,`equal`,`string_or_numeric`);[n,r]=ta(n,r),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(Pt,i)}var Du=z({equal_:Eu});function Ou(e,t,n){let r=R(t,`a`,`where`),i=R(n,`b`,`where`),a=R(e,`condition`,`where`,`bool`),o=V(V(a.shape,r.shape),i.shape),s={condition:Pl(a,o),t:Pl(r,o),e:Pl(i,o)};return L.runKernel(tr,s)}var ku=z({where_:Ou});function Au(e){let t={x:R(e,`x`,`zerosLike`)};return L.runKernel(Fr,t)}var ju=z({zerosLike_:Au});function Mu(e,t){let n=R(e,`a`,`div`),r=R(t,`b`,`div`);[n,r]=ta(n,r);let i=U(n,r),a=ju(i);return ku(Du(r,a),a,i)}var Nu=z({divNoNan_:Mu});function Pu(e,t){let n=R(e,`t1`,`dot`),r=R(t,`t2`,`dot`);E((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(E(i===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${a}.`),n.rank===1&&r.rank===1)return G(B(G(n,[1,-1]),G(r,[-1,1])),[]);if(n.rank===1&&r.rank===2){let e=B(G(n,[1,-1]),G(r,[r.shape[0],r.shape[1]]));return G(e,[e.size])}else if(n.rank===2&&r.rank===1){let e=B(n,G(r,[-1,1]));return G(e,[e.size])}else return B(n,G(r,[r.shape[0],r.shape[1]]))}var Fu=z({dot_:Pu});function Iu(e,...t){let n=t.map((e,t)=>R(e,`tensors${t}`,`einsum`)),r={equation:e};return L.runKernel(At,n,r)}var Lu=z({einsum_:Iu});function Ru(e){let t={x:R(e,`x`,`elu`,`float32`)};return L.runKernel(jt,t)}var zu=z({elu_:Ru});function Bu(e){let t=R(e,`x`,`erf`);E(t.dtype===`int32`||t.dtype===`float32`,()=>"Input dtype must be `int32` or `float32`."),t.dtype===`int32`&&(t=Lo(t,`float32`));let n={x:t};return L.runKernel(Nt,n)}var Vu=z({erf_:Bu});function Hu(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Uu(e,t,n){let r=e.length+t.length,i=[],a=0,o=0;for(let s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function Wu(e,t){let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]}function Gu(e,t){return Uu(e,t.map(e=>1),t)}function Ku(e,t,n){E(Hu(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function qu(e,t){if(Hu(e,t))return null;let n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(e=>n.push(e)),n}function Ju(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function Yu(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}function Xu(e,t=null,n=!1){let r={x:R(e,`x`,`max`)},i={reductionIndices:t,keepDims:n};return L.runKernel(fn,r,i)}var Zu=z({max_:Xu});function Qu(e,t=null,n=!1){let r={x:R(e,`x`,`min`)},i={axis:t,keepDims:n};return L.runKernel(bn,r,i)}var $u=z({min_:Qu});function ed(e,t){let n=R(e,`base`,`pow`),r=R(t,`exp`,`pow`);[n,r]=ta(n,r);let i={a:n,b:r};return L.runKernel(Fn,i)}var td=z({pow_:ed});function q(e,t){if((pe(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&pe(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ca(e,[],[],t)}function nd(e){let t={x:R(e,`x`,`sqrt`,`float32`)};return L.runKernel(lr,t)}var rd=z({sqrt_:nd});function id(e){let t=R(e,`x`,`square`);return L.runKernel(`Square`,{x:t},{})}var ad=z({square_:id});function od(e,t=null,n=!1){let r=R(e,`x`,`sum`);r.dtype===`bool`&&(r=Lo(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return L.runKernel(ur,i,a)}var sd=z({sum_:od});function cd(e,t=`euclidean`,n=null,r=!1){e=R(e,`x`,`norm`);let i=ld(e,t,n),a=i.shape;if(r){let t=oe(n,e.shape);a=Gu(i.shape,t)}return G(i,a)}function ld(e,t,n=null){if(e.rank===0)return hc(e);if(e.rank!==1&&n===null)return ld(G(e,[-1]),t,n);if(e.rank===1||typeof n==`number`||Array.isArray(n)&&n.length===1){if(t===1)return sd(hc(e),n);if(t===1/0)return Zu(hc(e),n);if(t===-1/0)return $u(hc(e),n);if(t===`euclidean`||t===2)return rd(sd(td(hc(e),q(2,`int32`)),n));throw Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Zu(sd(hc(e),n[0]),n[1]-1);if(t===1/0)return Zu(sd(hc(e),n[1]),n[0]);if(t===-1/0)return $u(sd(hc(e),n[1]),n[0]);if(t===`fro`||t===`euclidean`)return rd(sd(ad(e),n));throw Error(`Error in norm: invalid ord value: ${t}`)}throw Error(`Error in norm: invalid axis: ${n}`)}var ud=z({norm_:cd});function dd(e,t=null,n=!1){return ud(e,`euclidean`,t,n)}var fd=z({euclideanNorm_:dd});function pd(e){let t={x:R(e,`x`,`exp`)};return L.runKernel(Ft,t)}var md=z({exp_:pd});function hd(e,t=0){let n=R(e,`x`,`expandDims`,`string_or_numeric`);E(t<=n.rank,()=>`Axis must be <= rank of the tensor`);let r={input:n},i={dim:t};return L.runKernel(It,r,i)}var gd=z({expandDims_:hd});function _d(e){let t={x:R(e,`x`,`expm1`)};return L.runKernel(Lt,t)}var vd=z({expm1_:_d});function yd(e,t){let n=R(e,`x`,`tile`,`string_or_numeric`);E(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);let r={x:n},i={reps:t};return L.runKernel(Or,r,i)}var bd=z({tile_:yd});function xd(e,t,n,r=`float32`){t??=e;let i=Fo([e,t],r),a=e<=t?e:t;for(let e=0;e<a;++e)i.set(1,e,e);let o=G(i.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return bd(gd(o,0),[n[0],1,1]);if(n.length===2)return bd(gd(gd(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return bd(gd(gd(gd(o,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}var Sd=z({eye_:xd});function Cd(e){let t={x:R(e,`x`,`floor`,`float32`)};return L.runKernel(Vt,t)}var wd=z({floor_:Cd});function Td(e,t,n=0,r=0){let i={x:R(e,`x`,`gather`),indices:R(t,`indices`,`gather`,`int32`)},a={axis:n,batchDims:r};return L.runKernel(Wt,i,a)}var Ed=z({gather_:Td});function Dd(e,t){let n=R(e,`a`,`greater`,`string_or_numeric`),r=R(t,`b`,`greater`,`string_or_numeric`);[n,r]=ta(n,r),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(Kt,i)}var Od=z({greater_:Dd});function kd(e,t){let n=R(e,`a`,`greaterEqual`,`string_or_numeric`),r=R(t,`b`,`greaterEqual`,`string_or_numeric`);[n,r]=ta(n,r),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(qt,i)}var Ad=z({greaterEqual_:kd});function jd(e){let t={x:R(e,`x`,`isFinite`)};return L.runKernel(Zt,t)}var Md=z({isFinite_:jd});function Nd(e){let t={x:R(e,`x`,`isInf`)};return L.runKernel(Qt,t)}var Pd=z({isInf_:Nd});function Fd(e){let t={x:R(e,`x`,`isNaN`)};return L.runKernel($t,t)}var Id=z({isNaN_:Fd});function Ld(e,t=.2){let n={x:R(e,`x`,`leakyRelu`)},r={alpha:t};return L.runKernel(en,n,r)}var Rd=z({leakyRelu_:Ld});function zd(e,t){let n=R(e,`a`,`less`,`string_or_numeric`),r=R(t,`b`,`less`,`string_or_numeric`);[n,r]=ta(n,r),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(tn,i)}var Bd=z({less_:zd});function Vd(e,t){let n=R(e,`a`,`lessEqual`,`string_or_numeric`),r=R(t,`b`,`lessEqual`,`string_or_numeric`);[n,r]=ta(n,r),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(nn,i)}var Hd=z({lessEqual_:Vd});function Ud(e,t,n){if(n<=0)throw Error(`The number of values should be positive.`);let r={start:e,stop:t,num:n};return L.runKernel(rn,{},r)}function Wd(e,t=5,n=1,r=1,i=.5){let a=R(e,`x`,`localResponseNormalization`);E(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),E(te(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,s=!1;a.rank===3&&(s=!0,o=G(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let c={x:o},l={depthRadius:t,bias:n,alpha:r,beta:i},u=L.runKernel(un,c,l);return s?G(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Gd=z({localResponseNormalization_:Wd});function Kd(e){let t={x:R(e,`x`,`log`,`float32`)};return L.runKernel(an,t)}var qd=z({log_:Kd});function Jd(e){let t={x:R(e,`x`,`log1p`)};return L.runKernel(on,t)}var Yd=z({log1p_:Jd});function Xd(e){return L.customGrad(e)}function Zd(e){let t={x:R(e,`x`,`softplus`)};return L.runKernel(cr,t)}var Qd=z({softplus_:Zd});function $d(e){let t=R(e,`x`,`logSigmoid`);return Xd(e=>({value:Es(Qd(Es(e))),gradFunc:t=>W(t,fl(Es(e)))}))(t)}var ef=z({logSigmoid_:$d});function tf(e,t){let n=R(e,`a`,`sub`),r=R(t,`b`,`sub`);[n,r]=ta(n,r);let i={a:n,b:r};return L.runKernel(Tr,i)}var J=z({sub_:tf});function nf(e,t=-1){let n=R(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Xd((e,n)=>{let r=J(e,Zu(e,t,!0)),i=J(Lo(r,`float32`),qd(sd(md(r),t,!0)));return n([i]),{value:i,gradFunc:(e,n)=>{let[r]=n,i=md(r);return J(e,W(sd(e,t,!0),i))}}})(n)}var rf=z({logSoftmax_:nf});function af(e,t=null,n=!1){let r=R(e,`x`,`logSumExp`),i=oe(t,r.shape),a=Zu(r,i,!0),o=qd(sd(md(J(r,a)),i)),s=H(G(a,o.shape),o);return n?G(s,Gu(s.shape,i)):s}var of=z({logSumExp_:af});function sf(e,t){let n=R(e,`a`,`logicalAnd`,`bool`),r=R(t,`b`,`logicalAnd`,`bool`);V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(sn,i)}var cf=z({logicalAnd_:sf});function lf(e){let t={x:R(e,`x`,`logicalNot`,`bool`)};return L.runKernel(cn,t)}var uf=z({logicalNot_:lf});function df(e,t){let n=R(e,`a`,`logicalOr`,`bool`),r=R(t,`b`,`logicalOr`,`bool`);V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(ln,i)}var ff=z({logicalOr_:df});function pf(e,t){let n=R(e,`a`,`logicalXor`,`bool`),r=R(t,`b`,`logicalXor`,`bool`);return V(n.shape,r.shape),cf(ff(e,t),uf(cf(e,t)))}var mf=z({logicalXor_:pf}),hf=2147483648;function gf(e,t,n=`left`){let r=R(e,`sortedSequence`,`searchSorted`),i=R(t,`values`,`searchSorted`),a=r.shape[r.shape.length-1],o=i.shape[i.shape.length-1],s=G(r,[-1,a]),c=G(i,[-1,o]);if(s.rank<2)throw Error(`Sorted input argument must be at least 2-dimensional`);if(s.shape[0]!==c.shape[0])throw Error(`Leading dimension of 'sortedSequence' and 'values' must match.`);if(k(c.shape)>=hf)throw Error(`values tensor size must less than ${hf}`);if(s.shape[1]>=hf)throw Error(`trailing dim_size must less than ${hf} for int32 output type, was ${s.shape[1]}`);let l={sortedSequence:s,values:c},u={side:n};return L.runKernel(er,l,u)}var _f=z({searchSorted_:gf});function vf(e,t){return _f(e,t,`left`)}function yf(e,t,n,r,i){let a=R(e,`x`,`maxPool`),o=a,s=!1;a.rank===3&&(s=!0,o=G(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),E(tl(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),rl(`maxPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=L.runKernel(mn,c,l);return s?G(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var bf=z({maxPool_:yf});function xf(e,t=[1,1,1],n,r,i,a=`NDHWC`){let o=R(e,`x`,`maxPool3d`),s=o,c=!1;o.rank===4&&(c=!0,s=G(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),E(s.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${s.rank}.`),E(a===`NDHWC`,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),rl(`maxPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=L.runKernel(gn,l,u);return c?G(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var Sf=z({maxPool3d_:xf});function Cf(e,t,n,r,i=!1){let a={x:R(e,`x`,`maxPoolWithArgmax`)},o={filterSize:t,strides:n,pad:r,includeBatchInIndex:i},s=L.runKernel(vn,a,o);return{result:s[0],indexes:s[1]}}var wf=z({maxPoolWithArgmax_:Cf});function Tf(e,t){let n=R(e,`a`,`maximum`),r=R(t,`b`,`maximum`);[n,r]=ta(n,r),n.dtype===`bool`&&(n=Lo(n,`int32`),r=Lo(r,`int32`)),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(pn,i)}var Ef=z({maximum_:Tf});function Df(e,t=null,n=!1){let r={x:R(e,`x`,`mean`)},i={axis:t,keepDims:n};return L.runKernel(yn,r,i)}var Of=z({mean_:Df});function kf(e,t=`float32`){if(t===`complex64`)return Sa(kf(e,`float32`),kf(e,`float32`));let n=we(k(e),t);return L.makeTensor(n,e,t)}function Af(e,t=`float32`){if(t===`complex64`)return Sa(Af(e,`float32`),kf(e,`float32`));let n=Ce(k(e),t);return L.makeTensor(n,e,t)}function jf(e,t,{indexing:n=`xy`}={}){if(n!==`xy`&&n!==`ij`)throw TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=R(e,`x`,`meshgrid`,e instanceof Wi?e.dtype:`float32`);if(t===void 0)return[r];let i=R(t,`y`,`meshgrid`,t instanceof Wi?t.dtype:`float32`),a=k(r.shape),o=k(i.shape);return n===`xy`?(r=G(r,[1,-1]),i=G(i,[-1,1]),[B(Af([o,1],r.dtype),r),B(i,Af([1,a],i.dtype))]):(r=G(r,[-1,1]),i=G(i,[1,-1]),[B(r,Af([1,o],r.dtype)),B(Af([a,1],i.dtype),i)])}function Mf(e,t){let n=R(e,`a`,`minimum`),r=R(t,`b`,`minimum`);[n,r]=ta(n,r),n.dtype===`bool`&&(n=Lo(n,`int32`),r=Lo(r,`int32`)),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(xn,i)}var Nf=z({minimum_:Mf});function Pf(e,t,n){E(n===`reflect`||n===`symmetric`,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=R(e,`x`,`mirrorPad`);if(r.rank===0)throw Error(`mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad`);E(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let i=+(n===`reflect`);for(let e=0;e<r.rank;e++)E(t[e].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),E(t[e][0]>=0&&t[e][0]<=r.shape[e]-i&&t[e][1]>=0&&t[e][1]<=r.shape[e]-i,()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-i} or less than 0 for input of shape ${r.shape}`);let a={paddings:t,mode:n},o={x:r};return L.runKernel(Sn,o,a)}var Ff=z({mirrorPad_:Pf});function If(e,t){let n=R(e,`a`,`mod`),r=R(t,`b`,`mod`);[n,r]=ta(n,r);let i={a:n,b:r};return L.runKernel(Cn,i)}var Lf=z({mod_:If});function Rf(e,t=null,n=!1){e=R(e,`x`,`moments`);let r=oe(t,e.shape),i=Of(e,r,n),a=i.shape;return n||(a=Gu(i.shape,r)),{mean:i,variance:Of(ad(J(Lo(e,`float32`),G(i,a))),r,n)}}var zf=z({moments_:Rf});function Bf(e,t,n,r){let i=R(t,`data`,`multiRNNCell`),a=ya(n,`c`,`multiRNNCell`),o=ya(r,`h`,`multiRNNCell`),s=i,c=[];for(let t=0;t<e.length;t++){let n=e[t](s,a[t],o[t]);c.push(n[0]),c.push(n[1]),s=n[1]}let l=[],u=[];for(let e=0;e<c.length;e+=2)l.push(c[e]),u.push(c[e+1]);return[l,u]}var Vf=z({multiRNNCell_:Bf});function Hf(e,t,n,r=!1){let i=R(e,`logits`,`multinomial`),a=i.size,o=i.rank;if(a<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n||=Math.random();let s={logits:o===1?G(i,[1,-1]):i},c={numSamples:t,seed:n,normalized:r},l=L.runKernel(wn,s,c);return o===1?G(l,[l.size]):l}var Uf=z({multinomial_:Hf});function Wf(e,t){let n=R(e,`a`,`notEqual`,`string_or_numeric`),r=R(t,`b`,`notEqual`,`string_or_numeric`);[n,r]=ta(n,r),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(Dn,i)}var Gf=z({notEqual_:Wf});function Kf(e){let t={x:R(e,`x`,`onesLike`)};return L.runKernel(jn,t)}var qf=z({onesLike_:Kf});function Jf(e,t){let n=R(e,`v1`,`outerProduct`),r=R(t,`v2`,`outerProduct`);return E(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`),B(G(n,[-1,1]),G(r,[1,-1]))}var Yf=z({outerProduct_:Jf});function Xf(e,t,n=0){let r=R(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);let i={paddings:t,constantValue:n},a={x:r};return L.runKernel(Pn,a,i)}var Zf=z({pad_:Xf});function Qf(e,t,n=0){return E(t.length===2,()=>`Invalid number of paddings. Must be length of 2.`),Zf(e,[t],n)}var $f=z({pad1d_:Qf});function ep(e,t,n=0){return E(t.length===2&&t[0].length===2&&t[1].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),Zf(e,t,n)}var tp=z({pad2d_:ep});function np(e,t,n=0){return E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),Zf(e,t,n)}var rp=z({pad3d_:np});function ip(e,t,n=0){return E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),Zf(e,t,n)}var ap=z({pad4d_:ip});function op(e,t,n){let r=R(e,`x`,`spaceToBatchND`);E(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),E(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),E(r.shape.reduce((e,r,i)=>i>0&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]===0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);let i={x:r},a={blockShape:t,paddings:n};return L.runKernel(dr,i,a)}var sp=z({spaceToBatchND_:op});function cp(e,t,n,r,i,a,o){i??=[1,1],a??=1,r===0&&(r=`valid`);let s=R(e,`x`,`maxPool`),c=s,l=!1;s.rank===3&&(l=!0,c=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(tl(a,i),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${i}'`);let u=Vc(c.shape,t,a,i,r),d=[u.dilationHeight,u.dilationWidth],f;f=r===`same`?up([u.filterHeight,u.filterWidth],d):[[0,0],[0,0]];let p=d[0]===1&&d[1]===1,[m,h]=lp([u.inHeight,u.inWidth],d,f),g=p?r:`valid`,_=p?c:sp(c,d,m),v=(n===`avg`?()=>ol(_,t,a,g,o):()=>bf(_,t,a,g,o))(),y=p?v:yl(v,d,h);return l?G(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function lp(e,t,n){let r=n.map(e=>e[0]),i=n.map(e=>e[1]),a=e.concat(r,i),o=t.map((e,t)=>(e-a[t]%e)%e),s=i.map((e,t)=>e+o[t]);return[t.map((e,t)=>[r[t],s[t]]),t.map((e,t)=>[0,o[t]])]}function up(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)).map(e=>e-1),r=n.map(e=>Math.floor(e/2)),i=n.map((e,t)=>e-r[t]);return n.map((e,t)=>[r[t],i[t]])}var dp=z({pool_:cp});function fp(e,t){let n={x:R(e,`x`,`prelu`),alpha:R(t,`alpha`,`prelu`)};return L.runKernel(In,n)}var pp=z({prelu_:fp});function mp(e,t=null,n=!1){let r=R(e,`x`,`prod`);r.dtype===`bool`&&(r=Lo(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return L.runKernel(Ln,i,a)}var hp=z({prod_:mp});function gp(e,t,n,r){let i={paramsNestedSplits:e.map((e,t)=>R(e,`tensors${t}`,`raggedGather`,`int32`)),paramsDenseValues:R(t,`paramsDenseValues`,`raggedGather`),indices:R(n,`indices`,`raggedGather`,`int32`)},a={outputRaggedRank:r},o=L.runKernel(Rn,i,a);return{outputNestedSplits:o.slice(0,o.length-1),outputDenseValues:o[o.length-1]}}var _p=z({raggedGather_:gp});function vp(e,t,n,r,i){let a=R(e,`shape`,`raggedTensorToTensor`,`int32`),o=R(t,`values`,`raggedTensorToTensor`),s={shape:a,values:o,defaultValue:R(n,`defaultValue`,`raggedTensorToTensor`,o.dtype),rowPartitionTensors:r.map((e,t)=>R(e,`tensors${t}`,`raggedTensorToTensor`,`int32`))},c={rowPartitionTypes:i};return L.runKernel(zn,s,c)}var yp=z({raggedTensorToTensor_:vp});function bp(e,t,n){let r=k(e),i=null;if(n==null||n===`float32`)i=new Float32Array(r);else if(n===`int32`)i=new Int32Array(r);else if(n===`bool`)i=new Uint8Array(r);else throw Error(`Unknown data type ${n}`);for(let e=0;e<r;e++)i[e]=t();return L.makeTensor(i,e,n)}var xp=z({rand_:bp}),Sp={exports:{}},Cp=Sp.exports,wp;function Tp(){return wp||(wp=1,(function(e){(function(e,t,n){function r(e){var t=this,n=o();t.next=function(){var e=2091639*t.s0+t.c*23283064365386963e-26;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=e|0)},t.c=1,t.s0=n(` `),t.s1=n(` `),t.s2=n(` `),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return n.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}function o(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}t&&t.exports?t.exports=a:this.alea=a})(Cp,e)})(Sp)),Sp.exports}var Ep={exports:{}},Dp=Ep.exports,Op;function kp(){return Op||(Op=1,(function(e){(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/(1<<21);while(r===0);return r},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xor128=a})(Dp,e)})(Ep)),Ep.exports}var Ap={exports:{}},jp=Ap.exports,Mp;function Np(){return Mp||(Mp=1,(function(e){(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/(1<<21);while(r===0);return r},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xorwow=a})(jp,e)})(Ap)),Ap.exports}var Pp={exports:{}},Fp=Pp.exports,Ip;function Lp(){return Ip||(Ip=1,(function(e){(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.x,n=t.i,r,i;return r=e[n],r^=r>>>7,i=r^r<<24,r=e[n+1&7],i^=r^r>>>10,r=e[n+3&7],i^=r^r>>>3,r=e[n+4&7],i^=r^r<<7,r=e[n+7&7],r^=r<<13,i^=r^r<<9,e[n]=i,t.i=n+1&7,i};function n(e,t){var n,r=[];if(t===(t|0))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[n&7]=r[n&7]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}n(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/(1<<21);while(r===0);return r},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xorshift7=a})(Fp,e)})(Pp)),Pp.exports}var Rp={exports:{}},zp=Rp.exports,Bp;function Vp(){return Bp||(Bp=1,(function(e){(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.w,n=t.X,r=t.i,i,a;return t.w=e=e+1640531527|0,a=n[r+34&127],i=n[r=r+1&127],a^=a<<13,i^=i<<17,a^=a>>>15,i^=i>>>12,a=n[r]=a^i,t.i=r,a+(e^e>>>16)|0};function n(e,t){var n,r,i,a,o,s=[],c=128;for(t===(t|0)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,n=s[a&127]^=r+o,i=n==0?i+1:0);for(i>=128&&(s[(t&&t.length||0)&127]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}n(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/(1<<21);while(r===0);return r},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.xor4096=a})(zp,e)})(Rp)),Rp.exports}var Hp={exports:{}},Up=Hp.exports,Wp;function Gp(){return Wp||(Wp=1,(function(e){(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=e|0):n+=e;for(var r=0;r<n.length+20;r++)t.b^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/(1<<21);while(r===0);return r},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:this.tychei=a})(Up,e)})(Hp)),Hp.exports}var Kp={exports:{}},qp=Kp.exports,Jp;function Yp(){return Jp||(Jp=1,(function(e){(function(t,n,r){var i=256,a=6,s=52,c=`random`,l=r.pow(i,a),u=r.pow(2,s),d=u*2,f=i-1,p;function m(e,t,o){var s=[];t=t==1?{entropy:!0}:t||{};var f=v(_(t.entropy?[e,b(n)]:e??y(),3),s),p=new h(s),m=function(){for(var e=p.g(a),t=l,n=0;e<u;)e=(e+n)*i,t*=i,n=p.g(1);for(;e>=d;)e/=2,t/=2,n>>>=1;return(e+n)/t};return m.int32=function(){return p.g(4)|0},m.quick=function(){return p.g(4)/4294967296},m.double=m,v(b(p.S),n),(t.pass||o||function(e,t,n,i){return i&&(i.S&&g(i,p),e.state=function(){return g(p,{})}),n?(r[c]=e,t):e})(m,f,`global`in t?t.global:this==r,t.state)}function h(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);a<i;)s[a]=a++;for(a=0;a<i;a++)s[a]=s[o=f&o+e[a%n]+(t=s[a])],s[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,s=r.S;e--;)t=s[a=f&a+1],n=n*i+s[f&(s[a]=s[o=f&o+t])+(s[o]=t)];return r.i=a,r.j=o,n})(i)}function g(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function _(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(_(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function v(e,t){for(var n=e+``,r,i=0;i<n.length;)t[f&i]=f&(r^=t[f&i]*19)+n.charCodeAt(i++);return b(t)}function y(){try{var e;return p&&(e=p.randomBytes)?e=e(i):(e=new Uint8Array(i),(t.crypto||t.msCrypto).getRandomValues(e)),b(e)}catch{var r=t.navigator,a=r&&r.plugins;return[+new Date,t,a,t.screen,b(n)]}}function b(e){return String.fromCharCode.apply(0,e)}if(v(r.random(),n),e.exports){e.exports=m;try{p=o}catch{}}else r[`seed`+c]=m})(typeof self<`u`?self:qp,[],Math)})(Kp)),Kp.exports}var Xp,Zp;function Qp(){if(Zp)return Xp;Zp=1;var e=Tp(),t=kp(),n=Np(),r=Lp(),i=Vp(),a=Gp(),o=Yp();return o.alea=e,o.xor128=t,o.xorwow=n,o.xorshift7=r,o.xor4096=i,o.tychei=a,Xp=o,Xp}var $p=Qp(),em=class{constructor(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=i||Math.random();this.random=$p.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,i,a;do r=2*this.random()-1,i=2*this.random()-1,a=r*r+i*i;while(a>=1||a===0);let o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*i*o,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},tm=class{constructor(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;let i=r||Math.random();this.randu=$p.alea(i.toString()),this.randn=new em(0,1,n,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,r,i,a;for(;;){do r=this.randn.nextValue(),a=1+this.c*r;while(a<=0);if(a*=a*a,e=r*r,t=1-.331*e*e,n=.5*e+this.d*(1-a+Math.log(a)),i=this.randu(),i<t||Math.log(i)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=this.randu()**(1/this.alpha)),this.convertValue(a)}convertValue(e){return this.dtype===`float32`?e:Math.round(e)}},nm=class{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype===`float32`,this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=$p.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function rm(e,t,n=1,r=`float32`,i){if(n??=1,r??=`float32`,r!==`float32`&&r!==`int32`)throw Error(`Unsupported data type ${r}`);let a=new tm(t,n,r,i),o=Fo(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var im=z({randomGamma_:rm});function am(e,t=0,n=1,r,i){if(r!=null&&r===`bool`)throw Error(`Unsupported data type ${r}`);let a=new em(t,n,r,!1,i),o=Fo(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var om=z({randomNormal_:am});function sm(e,t,n){if(t!=null&&t===`bool`)throw Error(`Unsupported data type ${t}`);return om(e,0,1,t,n)}var cm=z({randomStandardNormal_:sm});function lm(e,t=0,n=1,r=`float32`,i){let a=Fo(e,r),o=new nm(t,n,null,i);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}var um=z({randomUniform_:lm});function dm(e,t,n=1,r=`float32`){if(n===0)throw Error(`Cannot have a step of zero`);let i={start:e,stop:t,step:n,dtype:r};return L.runKernel(Bn,{},i)}function fm(e){let t={x:R(e,`x`,`reciprocal`)};return L.runKernel(Hn,t)}var pm=z({reciprocal_:fm});function mm(e){let t={x:R(e,`x`,`relu`)};return L.runKernel(Un,t)}var hm=z({relu_:mm});function gm(e){let t={x:R(e,`x`,`relu6`)};return L.runKernel(Yn,t)}var _m=z({relu6_:gm});function vm(e,t){let n={x:R(e,`x`,`reverse`)},r={dims:t};return L.runKernel(Xn,n,r)}var ym=z({reverse_:vm});function bm(e){let t=R(e,`x`,`reverse`);return E(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),ym(t,0)}var xm=z({reverse1d_:bm});function Sm(e,t){let n=R(e,`x`,`reverse`);return E(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),ym(n,t)}var Cm=z({reverse2d_:Sm});function wm(e,t){let n=R(e,`x`,`reverse`);return E(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),ym(n,t)}var Tm=z({reverse3d_:wm});function Em(e,t){let n=R(e,`x`,`reverse`);return E(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),ym(n,t)}var Dm=z({reverse4d_:Em});function Om(e){let t={x:R(e,`x`,`round`)};return L.runKernel(Zn,t)}var km=z({round_:Om});function Am(e){let t={x:R(e,`x`,`rsqrt`,`float32`)};return L.runKernel(Qn,t)}var jm=z({rsqrt_:Am});function Mm(e){let t={x:R(e,`x`,`selu`)};return L.runKernel(nr,t)}var Nm=z({selu_:Mm});function Pm(e,t,n,r,i,a=[1,1],o=`NHWC`){let s=R(e,`x`,`separableConv2d`),c=R(t,`depthwiseFilter`,`separableConv2d`),l=R(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);E(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),E(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),E(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),E(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),E(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let f=c.shape[2],p=c.shape[3];E(l.shape[2]===f*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*p}, but got ${l.shape[2]}.`);let m=Yl(xu(u,c,r,i,o,a),l,1,`valid`,o);return d?G(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Fm=z({separableConv2d_:Pm});async function Im(e,t){let n=R(e,`x`,`setdiff1d`),r=R(t,`y`,`setdiff1d`);E(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),E(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),E(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);let i=await n.data(),a=await r.data(),o=new Set(a),s=0;for(let e=0;e<i.length;e++)o.has(i[e])||s++;let c=new zi([s],n.dtype),l=new zi([s],`int32`);for(let e=0,t=0;e<i.length;e++)o.has(i[e])||(c.values[t]=i[e],l.values[t]=e,t++);return[c.toTensor(),l.toTensor()]}var Lm=Im;function Rm(e){let t={x:R(e,`x`,`sign`)};return L.runKernel(or,t)}var zm=z({sign_:Rm});function Bm(e){let t={x:R(e,`x`,`sin`,`float32`)};return L.runKernel(ir,t)}var Vm=z({sin_:Bm});function Hm(e){let t={x:R(e,`x`,`sinh`)};return L.runKernel(ar,t)}var Um=z({sinh_:Hm});function Wm(e,t,n){let r=R(e,`x`,`slice1d`);return E(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),K(r,[t],[n])}var Gm=z({slice1d_:Wm});function Km(e,t,n){let r=R(e,`x`,`slice2d`);return E(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),K(r,t,n)}var qm=z({slice2d_:Km});function Jm(e,t,n){let r=R(e,`x`,`slice3d`);return E(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),K(r,t,n)}var Ym=z({slice3d_:Jm});function Xm(e,t,n){let r=R(e,`x`,`slice4d`);return E(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),K(r,t,n)}var Zm=z({slice4d_:Xm});function Qm(e,t=-1){let n=R(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={logits:n},i={dim:t};return L.runKernel(pr,r,i)}var $m=z({softmax_:Qm});function eh(e){E(e.dtype===`complex64`,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);let t={input:e};return L.runKernel(Rt,t)}var th=z({fft_:eh});function nh(e){E(e.dtype===`complex64`,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);let t={input:e};return L.runKernel(Yt,t)}var rh=z({ifft_:nh});function ih(e){let t=e.shape[e.shape.length-1],n=e.size/t,r;if(t<=2)r=rh(G(e,[n,t]));else{let i=[n,2*(t-1)],a=G(Os(e),[n,t]),o=G(ws(e),[n,t]),s=ym(K(a,[0,1],[n,t-2]),1),c=W(ym(K(o,[0,1],[n,t-2]),1),q(-1));r=rh(G(Sa(ul([a,s],1),ul([o,c],1)),[i[0],i[1]]))}if(r=Os(r),e.rank===3&&e.shape[0]!==0){let t=r,n=e.shape[0];r=G(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}var ah=z({irfft_:ih});function oh(e,t,n=0){let r={x:R(e,`x`,`split`)},i={numOrSizeSplits:t,axis:n};return L.runKernel(fr,r,i)}var sh=z({split_:oh});function ch(e,t){E(e.dtype===`float32`,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1],r=e.size/n,i;if(t!=null&&t<n){let r=e.shape.map(e=>0),a=e.shape.map(e=>e);a[e.shape.length-1]=t,i=K(e,r,a),n=t}else if(t!=null&&t>n){let r=e.shape.map(e=>e);r[e.shape.length-1]=t-n,i=ul([e,kf(r)],e.shape.length-1),n=t}else i=e;let a=ju(i),o=th(G(Sa(i,a),[r,n])),s=Math.floor(n/2)+1,c=Os(o),l=ws(o),u=sh(c,[s,n-s],c.shape.length-1),d=sh(l,[s,n-s],l.shape.length-1),f=i.shape.slice();return f[i.shape.length-1]=s,G(Sa(u[0],d[0]),f)}var lh=z({rfft_:ch});function uh(e,t){let n=R(e,`a`,`squaredDifference`),r=R(t,`b`,`squaredDifference`);[n,r]=ta(n,r),V(n.shape,r.shape);let i={a:n,b:r};return L.runKernel(yr,i,{})}var dh=z({squaredDifference_:uh});function fh(e,t){let n=R(e,`x`,`squeeze`,`string_or_numeric`);return G(n,se(n.shape,t).newShape)}var ph=z({squeeze_:fh});function mh(e,t=0){let n=ya(e,`tensors`,`stack`,`string_or_numeric`);E(n.length>=1,()=>`Pass at least one tensor to tf.stack`),n.length>0&&E(t<=n[0].rank,()=>`Axis must be <= rank of the tensor`);let r=n,i={axis:t};return L.runKernel(Nn,r,i)}var hh=z({stack_:mh});function gh(e,t=0){let n={x:R(e,`x`,`step`)},r={alpha:t};return L.runKernel(Ir,n,r)}var _h=z({step_:gh});function vh(e,t,n,r,i=0,a=0,o=0,s=0,c=0){let l={x:R(e,`x`,`stridedSlice`,`string_or_numeric`)},u={begin:t,end:n,strides:r,beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};return L.runKernel(xr,l,u)}var yh=z({stridedSlice_:vh});function bh(e){let t={x:R(e,`x`,`tan`,`float32`)};return L.runKernel(Er,t)}var xh=z({tan_:bh});function Sh(e,t){O(e);let n=ga(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return Ca(e,null,n,t)}function Ch(e,t,n){if(O(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);let r=ga(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ca(e,t,r,n)}function wh(e,t,n){if(O(e),t!=null&&t.length!==4)throw Error(`tensor4d() requires shape to have four numbers`);let r=ga(e,n);if(r.length!==4&&r.length!==1)throw Error(`tensor4d() requires values to be number[][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ca(e,t,r,n)}function Th(e,t,n){if(O(e),t!=null&&t.length!==5)throw Error(`tensor5d() requires shape to have five numbers`);let r=ga(e,n);if(r.length!==5&&r.length!==1)throw Error(`tensor5d() requires values to be number[][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ca(e,t,r,n)}function Eh(e,t,n){if(O(e),t!=null&&t.length!==6)throw Error(`tensor6d() requires shape to have six numbers`);let r=ga(e,n);if(r.length!==6&&r.length!==1)throw Error(`tensor6d() requires values to be number[][][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return t||=r,Ca(e,t,r,n)}function Dh(e,t=1,n=!0){let r=R(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);let i=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let a={x:r},o={k:t,sorted:n},[s,c]=L.runKernel(kr,a,o);return{values:s,indices:c}}var Oh=z({topk_:Dh});function kh(e,t=0,n=1,r,i){if(r!=null&&r===`bool`)throw Error(`Unsupported data type $ { dtype }`);let a=new em(t,n,r,!0,i),o=Fo(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var Ah=z({truncatedNormal_:kh});function jh(e,t=0){let n=R(e,`x`,`unique`,`string_or_numeric`);E(n.rank>0,()=>`The input tensor must be at least 1D`);let r={x:n},i={axis:t},[a,o]=L.runKernel(Mr,r,i);return{values:a,indices:o}}var Mh=z({unique_:jh});function Nh(e,t,n){let r=R(e,`x`,`unsortedSegmentSum`),i=R(t,`segmentIds`,`unsortedSegmentSum`,`int32`);E(te(n),()=>`numSegments must be of dtype int`);let a={x:r,segmentIds:i},o={numSegments:n};return L.runKernel(Pr,a,o)}var Ph=z({unsortedSegmentSum_:Nh});function Fh(e,t=0){let n=R(e,`x`,`unstack`,`string_or_numeric`);E(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);let r={value:n},i={axis:t};return L.runKernel(Nr,r,i)}var Ih=z({unstack_:Fh});function Lh(e,t){return _f(e,t,`right`)}function Rh(e,t=!0,n,r){return L.makeVariable(e,t,n,r)}function zh(e,t){let n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);let r=Fo(e,`int32`),i=Fo([n.length,e.length],`int32`);for(let t=0;t<n.length;t++){let a=r.indexToLoc(n[t]),o=t*e.length;i.values.set(a,o)}return i.toTensor()}async function Bh(e){let t=R(e,`condition`,`whereAsync`,`bool`),n=await t.data(),r=zh(t.shape,n);return e!==t&&t.dispose(),r}var Vh=Bh;async function Hh(e,t,n){let r=R(e,`tensor`,`boolMask`),i=R(t,`mask`,`boolMask`,`bool`),a=n??0,o=i.rank,s=r.shape;E(o>0,()=>`mask cannot be scalar`),D(s.slice(a,a+o),i.shape,`mask's shape must match the first K dimensions of tensor's shape,`);let c=1;for(let e=a;e<a+o;e++)c*=s[e];let l=G(r,s.slice(0,a).concat([c],s.slice(a+o))),u=G(i,[-1]),d=await Vh(u),f=ph(d,[1]),p=Ed(l,f,a);return e!==r&&r.dispose(),t!==i&&i.dispose(),f.dispose(),l.dispose(),u.dispose(),d.dispose(),p}var Uh=Hh;function Wh(e,t,n,r,i=!0){let a=R(e,`v`,`movingAverage`),o=R(t,`x`,`movingAverage`),s=R(n,`decay`,`movingAverage`);na(a,o),E(A(a.shape,o.shape),()=>`Shape mismatch in v and x`);let c=q(1),l=J(c,s),u=W(J(o,a),l);if(i){E(r!=null,()=>`When using zeroDebias: true, step is required.`);let e=R(r,`step`,`movingAverage`);u=U(u,J(c,td(s,e)))}return H(a,u)}var Gh=z({movingAverage_:Wh});function Kh(e,t,n){let r=R(e,`indices`,`scatterND`,`int32`),i=R(t,`updates`,`scatterND`);Bs(i,r,n);let a={indices:r,updates:i},o={shape:n};return L.runKernel($n,a,o)}var qh=z({scatterND_:Kh});function Jh(e,t,n,r){if(e.dtype!==`int32`)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);let i=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);let o=t.size;if(!(t.rank===0||t.rank===1&&o===i))throw Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${i}]`);if(t.dtype!==r.dtype)throw Error(`sparseValues.dtype must match defaultValues.dtype`)}function Yh(e,t,n,r=0){let i=R(e,`sparseIndices`,`sparseToDense`,`int32`),a=R(t,`sparseValues`,`sparseToDense`,`string_or_numeric`),o=R(r,`defaultValue`,`sparseToDense`,a.dtype);Jh(i,a,n,o);let s={sparseIndices:i,sparseValues:a,defaultValue:o},c={outputShape:n};return L.runKernel(vr,s,c)}var Xh=z({sparseToDense_:Yh});function Zh(e,t){let n=R(t,`indices`,`gatherND`,`int32`),r={params:R(e,`x`,`gatherND`,`string_or_numeric`),indices:n};return L.runKernel(Gt,r)}var Qh=z({gatherND_:Zh});function $h(e,t){if(t==null)return e.shape.slice();if(A(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}function eg(e,t,n,r){let i=R(e,`x`,`dropout`);if(E(i.dtype===`float32`,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${i.dtype} tensor instead.`),E(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof Wi?i.clone():i;let a=$h(i,n),o=1-t;return W(i,U(wd(H(um(a,0,1,`float32`,r),o)),o))}var tg=z({dropout_:eg});function ng(e){return Math.floor(2**Math.ceil(Math.log(e)/Math.log(2)))}function rg(e,t,n){let r=1-e%2,i=new Float32Array(e);for(let a=0;a<e;++a){let o=2*Math.PI*a/(e+r-1);i[a]=t-n*Math.cos(o)}return Sh(i,`float32`)}async function ig(e,t,n=1){let r=R(e,`predictions`,`inTopK`),i=R(t,`targets`,`inTopK`);E(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),E(r.rank-1===i.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${i.rank}`),D(r.shape.slice(0,r.shape.length-1),i.shape,`predictions's shape should be align with the targets' shape, except the last dimension.`);let a=r.shape[r.shape.length-1];E(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);let o=await r.data(),s=await i.data(),[c,l]=[o.length/a,a],u=ce(`bool`,c);for(let e=0;e<c;e++){let t=e*l,r=o.subarray(t,t+l),i=[];for(let e=0;e<r.length;e++)i.push({value:r[e],index:e});i.sort((e,t)=>t.value-e.value),u[e]=0;for(let t=0;t<n;t++)if(i[t].index===s[e]){u[e]=1;break}}return e!==r&&r.dispose(),t!==i&&i.dispose(),wa(u,i.shape,`bool`)}var ag=ig;function og(e,t,n,r,i,a=`NHWC`,o){let s=e;e.rank===3&&(s=G(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=G(t,[1,t.shape[0],t.shape[1],t.shape[2]])),E(s.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${s.shape}.`),E(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),E(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];E(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),E(u===n[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${n[3]}).`),rl(`conv2dDerFilter`,i,o);let d={x:s,dy:c},f={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,filterShape:n};return L.runKernel(ft,d,f)}var sg=z({conv2DBackpropFilter_:og});function cg(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return W(e,_h(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function lg(e,t){let n=t,r=Ms(e.shape,t.shape);return r.length>0&&(n=sd(n,r)),G(n,e.shape)}function ug(e,t,n,r){if(t===`linear`)return e;if(t===`relu`)return hm(e);if(t===`elu`)return zu(e);if(t===`relu6`)return _m(e);if(t===`prelu`)return pp(e,n);if(t===`leakyrelu`)return Rd(e,r);if(t===`sigmoid`)return fl(e);throw Error(`Unknown fused activation ${t}.`)}var dg=(e,t)=>!(e>0)||t===`linear`;function fg({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(c||=`linear`,dg(L.state.gradientDepth,c)===!1){E(i===`NHWC`,()=>`Error in fused conv2d: got dataFormat of ${i} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let d=Yl(e,t,n,r,i,a,o);return s!=null&&(d=H(d,s)),ug(d,c,l,u)}let d=R(e,`x`,`conv2d`,`float32`),f=R(t,`filter`,`conv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=G(d,[1,d.shape[0],d.shape[1],d.shape[2]])),E(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),E(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),rl(`fused conv2d`,r,o);let h=i===`NHWC`?p.shape[3]:p.shape[1];E(f.shape[2]===h,()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${f.shape[2]}.`),E(tl(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let g=Uc(p.shape,f.shape,n,a,r,o),_;s!=null&&(_=R(s,`bias`,`fused conv2d`),[_]=ta(_,d),i===`NHWC`?V(g.outShape,_.shape):(E(_.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`),E(_.shape.length===0||_.shape[0]===g.outChannels||_.shape[0]===1,()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let v;if(l!=null){let e=l.shape;if(E(e.length<=1||e.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),e.length===1)E(e[0]===1||e[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${g.outChannels}).`);else if(e.length===3)try{V(e,g.outShape)}catch{let t=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(t)}v=R(l,`prelu weights`,`fused conv2d`)}let y=(e,t)=>{E(i===`NHWC`,()=>`Error in gradient of fused conv2D: got dataFormat of ${i} but only NHWC is currently supported.`);let[o,s,l,u]=t,d=cg(e,l,c);E(el(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);let f=[$l(s.shape,d,o,n,r),sg(s,d,o.shape,n,r)];if(u!=null){let e=lg(u,d);f.push(e)}return f},b={x:p,filter:f,bias:_,preluActivationWeights:v},x={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?Xd((e,t,n)=>{let r=L.runKernel(Br,b,x);return n([t,e,r]),m&&(r=G(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:y}})(p,f):Xd((e,t,n,r)=>{let i=L.runKernel(Br,b,x);return r([t,e,i,n]),m&&(i=G(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:y}})(p,f,_)}var pg=z({fusedConv2d_:fg});function mg(e,t,n,r,i,a=[1,1],o){let s=e;e.rank===3&&(s=G(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=G(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:s,dy:c},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,filterShape:n};return L.runKernel(Tt,l,u)}var hg=z({depthwiseConv2dNativeBackpropFilter_:mg});function gg(e,t,n,r,i,a=[1,1],o){let s=t,c=!1;t.rank===3&&(c=!0,s=G(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:s,filter:n},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,inputShape:e},d=L.runKernel(Et,l,u);return c?G(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var _g=z({depthwiseConv2dNativeBackpropInput_:gg});function vg({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(dg(L.state.gradientDepth,c)===!1){let d=xu(e,t,n,r,i,a,o);return s!=null&&(d=H(d,s)),ug(d,c,l,u)}let d=R(e,`x`,`depthwiseConv2d`,`float32`),f=R(t,`filter`,`depthwiseConv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=G(d,[1,d.shape[0],d.shape[1],d.shape[2]])),E(p.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${p.rank}.`),E(f.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),E(p.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${p.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),a??=[1,1],E(tl(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),rl(`fused depthwiseConv2d`,r,o);let h=Uc(p.shape,f.shape,n,a,r,o,!0),g;s!=null&&(g=R(s,`bias`,`fused conv2d`),[g]=ta(g,d),V(h.outShape,g.shape));let _;l!=null&&(_=R(l,`prelu weights`,`fused depthwiseConv2d`));let v=(e,t)=>{E(el(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);let[i,s,l,u]=t,d=cg(e,l,c),f=_g(s.shape,d,i,n,r,a,o),p=hg(s,d,i.shape,n,r,a,o);return u==null?[f,p]:[f,p,lg(g,d)]},y={x:p,filter:f,bias:g,preluActivationWeights:_},b={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?Xd((e,t,n)=>{let r=L.runKernel(Vr,y,b);return n([t,e,r]),m&&(r=G(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}})(p,f):Xd((e,t,n,r)=>{let i=L.runKernel(Vr,y,b);return r([t,e,i,n]),m&&(i=G(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:v}})(p,f,g)}var yg=z({fusedDepthwiseConv2d_:vg});function bg({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:i,activation:a=`linear`,preluActivationWeights:o,leakyreluAlpha:s=.2}){if(dg(L.state.gradientDepth,a)===!1){let c=B(e,t,n,r);return i!=null&&(c=H(c,i)),ug(c,a,o,s)}let c=R(e,`a`,`fused matMul`),l=R(t,`b`,`fused matMul`);[c,l]=ta(c,l);let u=n?c.shape[c.rank-2]:c.shape[c.rank-1],d=r?l.shape[l.rank-1]:l.shape[l.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],p=r?l.shape[l.rank-2]:l.shape[l.rank-1],m=c.shape.slice(0,-2),h=l.shape.slice(0,-2),g=k(m),_=k(h);E(u===d,()=>`Error in fused matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);let v=V(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([f,p]),y=n?G(c,[g,u,f]):G(c,[g,f,u]),b=r?G(l,[_,p,d]):G(l,[_,d,p]),x;i!=null&&(x=R(i,`bias`,`fused matMul`),[x]=ta(x,c),V(v,x.shape));let S;o!=null&&(S=R(o,`prelu weights`,`fused matMul`));let C=(e,t)=>{let[o,s,c,l]=t,u=cg(G(e,c.shape),c,a),d,f;if(!n&&!r?(d=B(u,s,!1,!0),f=B(o,u,!0,!1)):!n&&r?(d=B(u,s,!1,!1),f=B(u,o,!0,!1)):n&&!r?(d=B(s,u,!1,!0),f=B(o,u,!1,!1)):(d=B(s,u,!0,!0),f=B(u,o,!0,!0)),i!=null){let e=lg(l,u);return[d,f,e]}else return[d,f]},w={a:y,b,bias:x,preluActivationWeights:S},T={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:s};return i==null?Xd((e,t,n)=>{let r=L.runKernel(zr,w,T);return n([e,t,r]),{value:G(r,v),gradFunc:C}})(y,b):Xd((e,t,n,r)=>{let i=L.runKernel(zr,w,T);return r([e,t,i,n]),{value:G(i,v),gradFunc:C}})(y,b,x)}var xg=z({fusedMatMul_:bg}),Sg=Object.freeze(Object.defineProperty({__proto__:null,conv2d:pg,depthwiseConv2d:yg,matMul:xg},Symbol.toStringTag,{value:`Module`}));function Cg(e){return rg(e,.54,.46)}var wg=z({hammingWindow_:Cg});function Tg(e){return rg(e,.5,.5)}var Eg=z({hannWindow_:Tg});function Dg(e,t,n,r=!1,i=0){let a=0,o=[];for(;a+t<=e.size;)o.push(K(e,a,t)),a+=n;if(r)for(;a<e.size;){let r=a+t-e.size,s=ul([K(e,a,t-r),Ll([r],i)]);o.push(s),a+=n}return o.length===0?Ch([],[0,t]):G(ul(o),[o.length,t])}var Og=z({frame_:Dg});function kg(e,t,n,r,i=Eg){return r??=ng(t),lh(W(Og(e,t,n),i(t)),r)}var Ag=z({stft_:kg});function jg(e,t,n,r,i=`bilinear`,a=0){let o=R(e,`image`,`cropAndResize`),s=R(t,`boxes`,`cropAndResize`,`float32`),c=R(n,`boxInd`,`cropAndResize`,`int32`),l=s.shape[0];E(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),E(s.rank===2&&s.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${s.shape}.`),E(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${s.shape}.`),E(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),E(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),E(i===`bilinear`||i===`nearest`,()=>`method must be bilinear or nearest, but was ${i}`);let u={image:o,boxes:s,boxInd:c},d={method:i,extrapolationValue:a,cropSize:r};return L.runKernel(xt,u,d)}var Mg=z({cropAndResize_:jg});function Ng(e){let t=R(e,`image`,`flipLeftRight`,`float32`);E(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n={image:t};return L.runKernel(Bt,n,{})}var Pg=z({flipLeftRight_:Ng});function Fg(e){let t=R(e,`image`,`grayscaleToRGB`),n=t.rank-1,r=t.shape[n];E(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),E(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let i=Array(t.rank);return i.fill(1,0,n),i[n]=3,bd(t,i)}var Ig=z({grayscaleToRGB_:Fg});function Lg(e,t,n=0,r=.5){let i=R(e,`image`,`rotateWithOffset`,`float32`);E(i.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);let a={image:i},o={radians:t,fillValue:n,center:r};return L.runKernel(Rr,a,o)}var Rg=z({rotateWithOffset_:Lg});function zg(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;let o=e.shape[0];return n=Math.min(n,o),E(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),E(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),E(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),E(t.rank===1,()=>`scores must be a 1D tensor`),E(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),E(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}function Bg(e,t,n,r=.5,i=-1/0){let a=R(e,`boxes`,`nonMaxSuppression`,`float32`),o=R(t,`scores`,`nonMaxSuppression`,`float32`),s=zg(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return L.runKernel(On,{boxes:a,scores:o},c)}var Vg=z({nonMaxSuppression_:Bg});function Hg(e,t,n){let r=Ug(e,t,n),i=r<0?-(r+1):r;e.splice(i,0,t)}function Ug(e,t,n){return Gg(e,t,n||Wg)}function Wg(e,t){return e>t?1:e<t?-1:0}function Gg(e,t,n){let r=0,i=e.length,a=0,o=!1;for(;r<i;){a=r+(i-r>>>1);let s=n(t,e[a]);s>0?r=a+1:(i=a,o=!s)}return o?r:-r-1}function Kg(e,t,n,r,i){return Yg(e,t,n,r,i,0)}function qg(e,t,n,r,i,a){return Yg(e,t,n,r,i,0,!1,a,!0)}function Jg(e,t,n,r,i,a){return Yg(e,t,n,r,i,a,!0)}function Yg(e,t,n,r,i,a,o=!1,s=!1,c=!1){let l=[];for(let e=0;e<t.length;e++)t[e]>i&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(Qg);let u=a>0?-.5/a:0,d=[],f=[];for(;d.length<n&&l.length>0;){let t=l.pop(),{score:n,boxIndex:a,suppressBeginIndex:o}=t;if(n<i)break;let s=!1;for(let n=d.length-1;n>=o;--n){let o=Xg(e,a,d[n]);if(o>=r){s=!0;break}if(t.score*=Zg(r,u,o),t.score<=i)break}t.suppressBeginIndex=d.length,s||(t.score===n?(d.push(a),f.push(t.score)):t.score>i&&Hg(l,t,Qg))}let p=d.length,m=n-p;s&&m>0&&(d.push(...Array(m).fill(0)),f.push(...Array(m).fill(0)));let h={selectedIndices:d};return o&&(h.selectedScores=f),c&&(h.validOutputs=p),h}function Xg(e,t,n){let r=e.subarray(t*4,t*4+4),i=e.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;let h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function Zg(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}function Qg(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}async function $g(e,t,n,r=.5,i=-1/0){let a=R(e,`boxes`,`nonMaxSuppressionAsync`),o=R(t,`scores`,`nonMaxSuppressionAsync`),s=zg(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c=await Promise.all([a.data(),o.data()]),l=c[0],u=c[1],{selectedIndices:d}=Kg(l,u,n,r,i);return a!==e&&a.dispose(),o!==t&&o.dispose(),Sh(d,`int32`)}var e_=$g;function t_(e,t,n,r=.5,i=-1/0,a=0){let o=R(e,`boxes`,`nonMaxSuppression`),s=R(t,`scores`,`nonMaxSuppression`),c=zg(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l={boxes:o,scores:s},u={maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a},d=L.runKernel(An,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}var n_=z({nonMaxSuppressionWithScore_:t_});async function r_(e,t,n,r=.5,i=-1/0,a=0){let o=R(e,`boxes`,`nonMaxSuppressionAsync`),s=R(t,`scores`,`nonMaxSuppressionAsync`),c=zg(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l=await Promise.all([o.data(),s.data()]),u=l[0],d=l[1],{selectedIndices:f,selectedScores:p}=Jg(u,d,n,r,i,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:Sh(f,`int32`),selectedScores:Sh(p)}}var i_=r_;function a_(e,t,n,r=.5,i=-1/0,a=!1){let o=R(e,`boxes`,`nonMaxSuppression`),s=R(t,`scores`,`nonMaxSuppression`),c=zg(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,f={boxes:o,scores:s},p={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:a},m=L.runKernel(kn,f,p);return{selectedIndices:m[0],validOutputs:m[1]}}var o_=z({nonMaxSuppressionPadded_:a_});async function s_(e,t,n,r=.5,i=-1/0,a=!1){let o=R(e,`boxes`,`nonMaxSuppressionAsync`),s=R(t,`scores`,`nonMaxSuppressionAsync`),c=zg(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,[f,p]=await Promise.all([o.data(),s.data()]),{selectedIndices:m,validOutputs:h}=qg(f,p,l,u,d,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:Sh(m,`int32`),validOutputs:q(h,`int32`)}}var c_=s_;function l_(e,t,n=!1,r=!1){let i=R(e,`images`,`resizeBilinear`);E(i.rank===3||i.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${i.rank}.`),E(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),E(r===!1||n===!1,()=>`Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=G(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=L.runKernel(qn,s,c);return o?G(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var u_=z({resizeBilinear_:l_});function d_(e,t,n=!1,r=!1){let i=R(e,`images`,`resizeNearestNeighbor`);E(i.rank===3||i.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${i.rank}.`),E(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),E(i.dtype===`float32`||i.dtype===`int32`,()=>"`images` must have `int32` or `float32` as dtype"),E(r===!1||n===!1,()=>`Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=G(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=L.runKernel(Gn,s,c);return o?G(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var f_=z({resizeNearestNeighbor_:d_});function p_(e,t=`binary`,n=!1,r=.5){let i=R(e,`image`,`threshold`),a=i.shape[0]*i.shape[1],o=W(Sh([r]),255),s,c,l,u;if(E(i.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${i.rank}.`),E(i.shape[2]===3||i.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${i.shape[2]}.`),E(i.dtype===`int32`||i.dtype===`float32`,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${i.dtype}.`),E(t===`otsu`||t===`binary`,()=>`Method must be binary or otsu, but was ${t}`),i.shape[2]===3){[s,c,l]=sh(i,[1,1,1],-1);let e=W(s,.2989),t=W(c,.587),n=W(l,.114);u=H(H(e,t),n)}else u=e;return t===`otsu`&&(o=m_(Al(Lo(km(u),`int32`),wa([]),256),a)),Lo(W(n?Hd(u,o):Od(u,o),255),`int32`)}function m_(e,t){let n=Sh([-1]),r=Sh([0]),i=Sh([0]),a,o,s,c,l,u;for(let d=0;d<e.size-1;d++){a=K(e,0,d+1),o=K(e,d+1),l=U(sd(a),t),u=U(sd(o),t),s=U(sd(W(a,dm(0,a.size))),sd(a));let f=Ll(o.shape,a.size),p=H(dm(0,o.size),f);c=U(sd(W(o,p)),sd(o));let m=J(s,c),h=J(s,c);i=W(W(W(l,u),m),h);let g=Od(i,r);r=ku(g,i,r),n=ku(g,Sh([d]),n)}return n}var h_=z({threshold_:p_});function g_(e,t,n=`nearest`,r=`constant`,i=0,a){let o=R(e,`image`,`transform`,`float32`),s=R(t,`transforms`,`transform`,`float32`);E(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),E(s.rank===2&&(s.shape[0]===o.shape[0]||s.shape[0]===1)&&s.shape[1]===8,()=>`Error in transform: Input transform should be batch x 8 or 1 x 8`),E(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);let c={image:o,transforms:s},l={interpolation:n,fillMode:r,fillValue:i,outputShape:a};return L.runKernel(Ar,c,l)}var __=z({transform_:g_});function v_(e,t,n){E(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),E(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);let r=R(e,`a`,`bandPart`);E(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let i=r.shape,[a,o]=r.shape.slice(-2);if(!(t<=a))throw Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`);if(!(n<=o))throw Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);t<0&&(t=a),n<0&&(n=o);let s=J(G(dm(0,a,1,`int32`),[-1,1]),dm(0,o,1,`int32`)),c=cf(Hd(s,q(+t,`int32`)),Ad(s,q(-n,`int32`))),l=kf([a,o],r.dtype);return G(hh(Ih(G(r,[-1,a,o])).map(e=>ku(c,e,l))),i)}var y_=z({bandPart_:v_});function b_(e){let t;if(Array.isArray(e)){t=!1,E(e!=null&&e.length>0,()=>`Gram-Schmidt process: input must not be null, undefined, or empty`);let n=e[0].shape[0];for(let t=1;t<e.length;++t)E(e[t].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`)}else t=!0,e=sh(e,e.shape[0],0).map(e=>ph(e,[0]));E(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let n=[],r=e;for(let t=0;t<e.length;++t)n.push(L.tidy(()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){let t=W(sd(W(n[r],e)),n[r]);e=J(e,t)}return U(e,ud(e,`euclidean`))}));return t?hh(n,0):n}var x_=z({gramSchmidt_:b_});function S_(e,t=!1){if(E(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return C_(e,t);{let n=Ih(G(e,[e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],i=[];return n.forEach(e=>{let[n,a]=C_(e,t);r.push(n),i.push(a)}),[G(hh(r,0),e.shape),G(hh(i,0),e.shape)]}}function C_(e,t=!1){return L.tidy(()=>{E(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],i=Sd(n),a=zo(e),o=Ch([[1]],[1,1]),s=zo(o),c=n>=r?r:n;for(let e=0;e<c;++e){let t=a,c=s,l=i;[s,a,i]=L.tidy(()=>{let t=K(a,[e,e],[n-e,1]),c=ud(t),l=K(a,[e,e],[1,1]),u=ku(Od(l,0),Ch([[-1]]),Ch([[1]])),d=J(l,W(u,c)),f=U(t,d);s=f.shape[0]===1?zo(o):ul([o,K(f,[1,0],[f.shape[0]-1,f.shape[1]])],0);let p=Es(U(B(u,d),c)),m=K(a,[e,0],[n-e,r]),h=W(p,s),g=As(s);if(e===0)a=J(m,B(h,B(g,m)));else{let t=J(m,B(h,B(g,m)));a=ul([K(a,[0,0],[e,r]),t],0)}let _=As(h),v=K(i,[0,e],[n,i.shape[1]-e]);if(e===0)i=J(v,B(B(v,s),_));else{let t=J(v,B(B(v,s),_));i=ul([K(i,[0,0],[n,e]),t],1)}return[s,a,i]}),bs([t,c,l])}return!t&&n>r&&(i=K(i,[0,0],[n,r]),a=K(a,[0,0],[r,r])),[i,a]})}var w_=z({qr_:S_}),T_;(function(e){e[e.NONE=0]=`NONE`,e[e.MEAN=1]=`MEAN`,e[e.SUM=2]=`SUM`,e[e.SUM_BY_NONZERO_WEIGHTS=3]=`SUM_BY_NONZERO_WEIGHTS`})(T_||={});function E_(e,t,n=T_.SUM_BY_NONZERO_WEIGHTS){let r=R(e,`losses`,`computeWeightedLoss`),i=null;t!=null&&(i=R(t,`weights`,`computeWeightedLoss`));let a=i==null?r:W(r,i);if(n===T_.NONE)return a;if(n===T_.SUM)return sd(a);if(n===T_.MEAN){if(i==null)return Of(a);{let e=r.size/i.size,t=U(sd(a),sd(i));return e>1?U(t,q(e)):t}}if(n===T_.SUM_BY_NONZERO_WEIGHTS){if(i==null)return U(sd(a),q(r.size));{let e=Lo(sd(Gf(W(i,Af(r.shape)),q(0))),`float32`);return U(sd(a),e)}}throw Error(`Unknown reduction: ${n}`)}var D_=z({computeWeightedLoss_:E_});function O_(e,t,n,r=T_.SUM_BY_NONZERO_WEIGHTS){let i=R(e,`labels`,`absoluteDifference`),a=R(t,`predictions`,`absoluteDifference`),o=null;return n!=null&&(o=R(n,`weights`,`absoluteDifference`)),D(i.shape,a.shape,`Error in absoluteDifference: `),D_(hc(J(i,a)),o,r)}var k_=z({absoluteDifference_:O_});function A_(e,t,n,r,i=T_.SUM_BY_NONZERO_WEIGHTS){let a=R(e,`labels`,`cosineDistance`),o=R(t,`predictions`,`cosineDistance`),s=null;return r!=null&&(s=R(r,`weights`,`cosineDistance`)),D(a.shape,o.shape,`Error in cosineDistance: `),D_(J(q(1),sd(W(a,o),n,!0)),s,i)}var j_=z({cosineDistance_:A_});function M_(e,t,n,r=T_.SUM_BY_NONZERO_WEIGHTS){let i=R(e,`labels`,`hingeLoss`),a=R(t,`predictions`,`hingeLoss`),o=null;n!=null&&(o=R(n,`weights`,`hingeLoss`)),D(i.shape,a.shape,`Error in hingeLoss: `);let s=q(1);return i=J(W(q(2),i),s),D_(hm(J(s,W(i,a))),o,r)}var N_=z({hingeLoss_:M_});function P_(e,t,n,r=1,i=T_.SUM_BY_NONZERO_WEIGHTS){let a=R(e,`labels`,`huberLoss`),o=R(t,`predictions`,`huberLoss`),s=null;n!=null&&(s=R(n,`weights`,`huberLoss`)),D(a.shape,o.shape,`Error in huberLoss: `);let c=q(r),l=hc(J(o,a)),u=Nf(l,c),d=J(l,u);return D_(H(W(q(.5),ad(u)),W(c,d)),s,i)}var F_=z({huberLoss_:P_});function I_(e,t,n,r=1e-7,i=T_.SUM_BY_NONZERO_WEIGHTS){let a=R(e,`labels`,`logLoss`),o=R(t,`predictions`,`logLoss`),s=null;n!=null&&(s=R(n,`weights`,`logLoss`)),D(a.shape,o.shape,`Error in logLoss: `);let c=q(1),l=q(r);return D_(J(Es(W(a,qd(H(o,l)))),W(J(c,a),qd(H(J(c,o),l)))),s,i)}var L_=z({logLoss_:I_});function R_(e,t,n,r=T_.SUM_BY_NONZERO_WEIGHTS){let i=R(e,`labels`,`meanSquaredError`),a=R(t,`predictions`,`meanSquaredError`),o=null;return n!=null&&(o=R(n,`weights`,`meanSquaredError`)),D(i.shape,a.shape,`Error in meanSquaredError: `),D_(dh(i,a),o,r)}var z_=z({meanSquaredError_:R_});function B_(e,t){let n=R(e,`labels`,`sigmoidCrossEntropyWithLogits`),r=R(t,`logits`,`sigmoidCrossEntropyWithLogits`);D(n.shape,r.shape,`Error in sigmoidCrossEntropyWithLogits: `);let i=hm(r),a=W(r,n),o=Yd(md(Es(hc(r))));return H(J(i,a),o)}function V_(e,t,n,r=0,i=T_.SUM_BY_NONZERO_WEIGHTS){let a=R(e,`multiClassLabels`,`sigmoidCrossEntropy`),o=R(t,`logits`,`sigmoidCrossEntropy`),s=null;if(n!=null&&(s=R(n,`weights`,`sigmoidCrossEntropy`)),D(a.shape,o.shape,`Error in sigmoidCrossEntropy: `),r>0){let e=q(r),t=q(1),n=q(.5);a=H(W(a,J(t,e)),W(n,e))}return D_(B_(a,o),s,i)}var H_=z({sigmoidCrossEntropy_:V_});function U_(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Xd((e,t,r)=>{let i=of(t,[n],!0),a=J(Lo(t,`float32`),i);return r([e,a]),{value:sd(Es(W(a,e)),[n]),gradFunc:(e,t)=>{let[r,i]=t,a=Gu(e.shape,[n]);return[W(G(e,a),J(Lo(r,`float32`),md(i))),W(G(e,a),J(md(i),Lo(r,`float32`)))]}}})(e,t)}function W_(e,t,n,r=0,i=T_.SUM_BY_NONZERO_WEIGHTS){let a=R(e,`onehotLabels`,`softmaxCrossEntropy`),o=R(t,`logits`,`softmaxCrossEntropy`),s=null;if(n!=null&&(s=R(n,`weights`,`softmaxCrossEntropy`)),D(a.shape,o.shape,`Error in softmaxCrossEntropy: `),r>0){let e=q(r),t=q(1),n=q(a.shape[1]);a=H(W(a,J(t,e)),U(e,n))}return D_(U_(a,o),s,i)}var G_=z({softmaxCrossEntropy_:W_});function K_(e,t,n,r){let i=R(e,`indices`,`sparseFillEmptyRows`,`int32`),a=R(t,`values`,`sparseFillEmptyRows`),o=R(n,`denseShape`,`sparseFillEmptyRows`,`int32`),s=R(r,`defaultValue`,`sparseFillEmptyRows`,a.dtype);if(i.rank!==2)throw Error(`Indices should be Tensor2D but received shape
        ${i.shape}`);if(a.rank!==1)throw Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(s.rank!==0)throw Error(`Default value should be a scalar but received shape ${s.shape}`);let c={indices:i,values:a,denseShape:o,defaultValue:s},l=L.runKernel(mr,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}var q_=z({sparseFillEmptyRows_:K_});function J_(e,t,n){let r=R(e,`inputIndices`,`sparseReshape`,`int32`),i=R(t,`inputShape`,`sparseReshape`,`int32`),a=R(n,`newShape`,`sparseReshape`,`int32`);if(r.rank!==2)throw Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(i.rank!==1)throw Error(`Input shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==1)throw Error(`New shape should be Tensor1D but received shape ${a.shape}`);let o={inputIndices:r,inputShape:i,newShape:a},s=L.runKernel(hr,o);return{outputIndices:s[0],outputShape:s[1]}}var Y_=z({sparseReshape_:J_});function X_(e,t,n){let r=R(e,`data`,`sparseSegmentMean`),i=R(t,`indices`,`sparseSegmentMean`,`int32`),a=R(n,`segmentIds`,`sparseSegmentMean`,`int32`);if(r.rank<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.rank!==1)throw Error(`Indices should be Tensor1D but received shape
          ${i.shape}`);if(a.rank!==1)throw Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);let o={data:r,indices:i,segmentIds:a};return L.runKernel(gr,o)}var Z_=z({sparseSegmentMean_:X_});function Q_(e,t,n){let r=R(e,`data`,`sparseSegmentSum`),i=R(t,`indices`,`sparseSegmentSum`,`int32`),a=R(n,`segmentIds`,`sparseSegmentSum`,`int32`);if(r.rank<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.rank!==1)throw Error(`Indices should be Tensor1D but received shape
         ${i.shape}`);if(a.rank!==1)throw Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);let o={data:r,indices:i,segmentIds:a};return L.runKernel(_r,o)}var $_=z({sparseSegmentSum_:Q_});function ev(e,t,n,r,i,a,o,s){let c=R(e,`data`,`stringNGrams`,`string`);if(c.dtype!==`string`)throw Error(`Data must be of datatype string`);if(c.shape.length!==1)throw Error(`Data must be a vector, saw: ${c.shape}`);let l=R(t,`dataSplits`,`stringNGrams`);if(l.dtype!==`int32`)throw Error(`Data splits must be of datatype int32`);let u={separator:n,nGramWidths:r,leftPad:i,rightPad:a,padWidth:o,preserveShortSequences:s},d={data:c,dataSplits:l},f=L.runKernel(Sr,d,u);return{nGrams:f[0],nGramsSplits:f[1]}}var tv=z({stringNGrams_:ev});function nv(e,t,n=!0){let r=R(e,`input`,`stringSplit`,`string`),i=R(t,`delimiter`,`stringSplit`,`string`);if(r.rank!==1)throw Error(`Input should be Tensor1D but received shape ${r.shape}`);if(i.rank!==0)throw Error(`Delimiter should be a scalar but received shape ${i.shape}`);let a={skipEmpty:n},o={input:r,delimiter:i},s=L.runKernel(Cr,o,a);return{indices:s[0],values:s[1],shape:s[2]}}var rv=z({stringSplit_:nv});function iv(e,t){let n=R(e,`input`,`stringToHashBucketFast`,`string`),r={numBuckets:t};if(t<=0)throw Error(`Number of buckets must be at least 1`);let i={input:n};return L.runKernel(wr,i,r)}var av=z({stringToHashBucketFast_:iv}),ov={fft:th,ifft:rh,rfft:lh,irfft:ah},sv={hammingWindow:wg,hannWindow:Eg,frame:Og,stft:Ag},cv={flipLeftRight:Pg,grayscaleToRGB:Ig,resizeNearestNeighbor:f_,resizeBilinear:u_,rotateWithOffset:Rg,cropAndResize:Mg,nonMaxSuppression:Vg,nonMaxSuppressionAsync:e_,nonMaxSuppressionWithScore:n_,nonMaxSuppressionWithScoreAsync:i_,nonMaxSuppressionPadded:o_,nonMaxSuppressionPaddedAsync:c_,threshold:h_,transform:__},lv={bandPart:y_,gramSchmidt:x_,qr:w_},uv={absoluteDifference:k_,computeWeightedLoss:D_,cosineDistance:j_,hingeLoss:N_,huberLoss:F_,logLoss:L_,meanSquaredError:z_,sigmoidCrossEntropy:H_,softmaxCrossEntropy:G_},dv={sparseFillEmptyRows:q_,sparseReshape:Y_,sparseSegmentMean:Z_,sparseSegmentSum:$_},fv={stringNGrams:tv,stringSplit:rv,stringToHashBucketFast:av},pv=typeof requestAnimationFrame<`u`?requestAnimationFrame:typeof setImmediate<`u`?setImmediate:e=>e();function mv(){return new Promise(e=>pv(()=>e()))}function hv(e,t){let n=e[0].length;e.forEach((e,t)=>{E(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),E(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,i)=>{for(let a=0;a<n;a++)E(a===t||e[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${i}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${i}.`)})}function gv(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var _v;(function(e){e[e.FIRST_DIM_SIZE=0]=`FIRST_DIM_SIZE`,e[e.VALUE_ROWIDS=1]=`VALUE_ROWIDS`,e[e.ROW_LENGTHS=2]=`ROW_LENGTHS`,e[e.ROW_SPLITS=3]=`ROW_SPLITS`,e[e.ROW_LIMITS=4]=`ROW_LIMITS`,e[e.ROW_STARTS=5]=`ROW_STARTS`})(_v||={});function vv(e,t,n){let r=[];if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let i=1;i<n.length;++i){let a=n[i],o=r[r.length-n.length+i],s=r[o];if(a>=0)if(s>=0){if(s!==a)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${i+e}] = ${a} but shape[${i+e}] = ${s}`)}else r[o]=a}return r}function yv(e){let t={FIRST_DIM_SIZE:_v.FIRST_DIM_SIZE,VALUE_ROWIDS:_v.VALUE_ROWIDS,ROW_LENGTHS:_v.ROW_LENGTHS,ROW_SPLITS:_v.ROW_SPLITS,ROW_LIMITS:_v.ROW_LIMITS,ROW_STARTS:_v.ROW_STARTS},n=[];for(let r of e)if(r in t)n.push(t[r]);else break;return n}function bv(e){return e.length===0?0:e[0]===_v.FIRST_DIM_SIZE?e.length-1:e.length}function xv(e,t){if(e==null||t==null)return;let n=e.length,r=t.length;if(n>=r)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(n,r-1);++i){let n=e[i],r=t[i+1];if(n>=0&&r>=0&&n!==1&&n!==r)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${i-e.length}] = ${n} but ragged tensor input.flatValues.shape[${i-e.length}] = ${r}`)}}var Sv=30;function Cv(e){return e<=Sv?e:be(e,Math.floor(Math.sqrt(e)))}function wv(e,t,n){return[n*(typeof e==`number`?e:e[0]),t*(typeof e==`number`?e:e[1])]}function Tv(e,t,n,r=!0){let i=[];if(r)i=i.concat(t.slice(0)),i.push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);let n=t.length;for(let r=0;r<n;++r)i=i.concat([e[r+1]/t[r],t[r]]);i=i.concat(e.slice(n+1))}return i}function Ev(e,t,n=!0){let r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{let n=[],i=[];for(let r=1;r<e;++r)r>=t*2+1||r%2==1?i.push(r):n.push(r);r.push(...n),r.push(0),r.push(...i)}return r}function Dv(e,t,n,r=!0){let i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?i.push(t[n-1]*e[n]):i.push(e[n]/t[n-1]):i.push(e[n]);return i}function Ov(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function kv(e,t,n){let r=e.slice(0,1);for(let i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}var Av=1.7580993408473768,jv=1.0507009873554805,Mv=.3275911,Nv=.254829592,Pv=-.284496736,Fv=1.421413741,Iv=-1.453152027,Lv=1.061405429;function Rv(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function zv(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function Bv(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Vv(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Hv(e,t){return{real:e[t*2],imag:e[t*2+1]}}function Uv(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function Wv(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let i=0;i<Math.ceil(e/2);i++){let a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}function Gv(e,t,n){let r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}var Kv=`->`,qv=/->/g,Jv=`,`,Yv=`...`;function Xv(e,t){e=e.replace(/\s/g,``);let n=(e.length-e.replace(qv,``).length)/2;if(n<1)throw Error(`Equations without an arrow are not supported.`);if(n>1)throw Error(`Equation must contain exactly one arrow ("${Kv}").`);let[r,i]=e.split(Kv);E(r.indexOf(Yv)===-1,()=>`The ellipsis notation ("${Yv}") is not supported yet.`);let a=r.split(Jv),o=a.length;if(t!==o)throw Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw Error(`Support for more than 2 input tensors is not implemented yet.`);let s=[];for(let e=0;e<i.length;++e){let t=i[e];if(!a.some(e=>e.indexOf(t)!==-1))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);s.indexOf(t)===-1&&s.push(t)}for(let e=0;e<r.length;++e){let t=r[e];s.indexOf(t)===-1&&t!==Jv&&s.push(t)}let c=Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split(``)).size!==a[e].length)throw Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);c[e]=[];for(let t=0;t<a[e].length;++t)c[e].push(s.indexOf(a[e][t]))}let l=s.length,u=i.length,d=[];for(let e=u;e<l;++e)d.push(e);return{allDims:s,summedDims:d,idDims:c}}function Zv(e,t){let n=Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;let r=[];for(let t=0;t<e;++t)n[t]===-1&&r.push(t);return n=n.filter(e=>e!==-1),{permutationIndices:n,expandDims:r}}function Qv(e,t,n){let r=Array(e);for(let e=0;e<n.length;++e){let i=n[e].shape;for(let n=0;n<t[e].length;++n)r[t[e][n]]===void 0?r[t[e][n]]=i[n]:E(r[t[e][n]]===i[n],()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(i)}, but got dimension ${i[n]}`)}}function $v(e,t){let n=e,r=[],i=0;e.length===0&&n.push(-1),i=e.length+1;for(let e=0;e<i;++e)r.push([]);let a=[];for(let e=0;e<n.length;++e){let i=n[e],o=ty(t,i);for(let t of o)a.indexOf(t)===-1&&(r[e].push(t),a.push(t))}return{path:n,steps:r}}function ey(e){return e.every((e,t)=>e===t)}function ty(e,t){let n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function ny(e,t,n=0){let r=[];if(typeof t==`number`)E(e.shape[n]%t===0,()=>`Number of splits must evenly divide the axis.`),r=Array(t).fill(e.shape[n]/t);else{E(t.reduce((e,t)=>(t===-1&&(e+=1),e),0)<=1,()=>`There should be only one negative value in split array.`);let i=t.indexOf(-1);if(i!==-1){let r=t.reduce((e,t)=>t>0?e+t:e);t[i]=e.shape[n]-r}E(e.shape[n]===t.reduce((e,t)=>e+t),()=>`The sum of sizes must match the size of the axis dimension.`),r=t}return r}function ry(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function iy(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function ay(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}function oy(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function sy(e,t){return`size ${e} must be non-negative, not ${t}`}function cy(){return`reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero`}function ly(e,t){return`Input to reshape is a SparseTensor with ${k(e)}
  dense values, but the requested shape requires a multiple of ${k(t)}. inputShape=${e} outputShape= ${t}`}function uy(e,t){return`Input to reshape is a tensor with ${k(e)} dense values, but the requested shape has ${k(t)}. inputShape=${e} outputShape=${t}`}function dy(){return`segment ids must be >= 0`}function fy(){return`segment ids are not increasing`}function py(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function my(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}function hy(e,t){let n=!1,r;for(e<=Sv?(r=e,n=!0):r=be(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=be(e,r+1);return r}function gy(e,t,n){let r=[],i=e.length;for(let a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}function _y(e,t,n,r){let i=t.shape.length,a=e.shape.length;if(r!==0&&(r<-i||r>i))throw Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>a)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${a}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);let o=e.shape[n],s=[],c=1,l=1,u=1;for(let t=0;t<r;++t)s.push(e.shape[t]),c*=e.shape[t];for(let t=r;t<n;t++)s.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<i;e++)s.push(t.shape[e]);for(let t=n+1;t<a;t++)s.push(e.shape[t]),u*=e.shape[t];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:o,outputShape:s}}var vy=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:_y,computeOutShape:gy,segOpComputeOptimalWindowSize:hy},Symbol.toStringTag,{value:`Module`}));function yy(e){try{return e.map(e=>wi(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function by(e){return e.map(e=>Ci(e))}var xy=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:Nv,ERF_A2:Pv,ERF_A3:Fv,ERF_A4:Iv,ERF_A5:Lv,ERF_P:Mv,PARALLELIZE_THRESHOLD:Sv,get RowPartitionType(){return _v},SELU_SCALE:jv,SELU_SCALEALPHA:Av,applyActivation:ug,assertAndGetBroadcastShape:V,assertAxesAreInnerMostDims:Ku,assertParamsConsistent:hv,assignToTypedArray:Uv,axesAreInnerMostDims:Hu,calculateShapes:Vs,checkEinsumDimSizes:Qv,checkPadOnDimRoundingMode:rl,combineLocations:Uu,combineRaggedTensorToTensorShapes:vv,complexWithEvenIndex:Bv,complexWithOddIndex:Vv,computeConv2DInfo:Uc,computeConv3DInfo:Wc,computeDefaultPad:qc,computeDilation2DInfo:Bc,computeOptimalWindowSize:Cv,computeOutAndReduceShapes:Wu,computeOutShape:gv,computePool2DInfo:Vc,computePool3DInfo:Hc,convertConv2DDataFormat:nl,decodeEinsumEquation:Xv,eitherStridesOrDilationsAreOne:tl,expandShapeToKeepDim:Gu,exponent:Gv,exponents:Wv,fromStringArrayToUint8:by,fromUint8ToStringArray:yy,getAxesPermutation:qu,getBroadcastDims:js,getComplexWithIndex:Hv,getEinsumComputePath:$v,getEinsumPermutation:Zv,getFusedBiasGradient:lg,getFusedDyActivation:cg,getImageCenter:wv,getInnerMostAxes:Yu,getPermuted:Ev,getRaggedRank:bv,getReductionAxes:Ms,getReshaped:Tv,getReshapedPermuted:Dv,getRowPartitionTypesHelper:yv,getSliceBeginCoords:Ov,getSliceSize:kv,getSparseFillEmptyRowsIndicesDenseShapeMismatch:ry,getSparseFillEmptyRowsNegativeIndexErrorMessage:iy,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:ay,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:cy,getSparseReshapeInputOutputMismatchErrorMessage:uy,getSparseReshapeInputOutputMultipleErrorMessage:ly,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:oy,getSparseReshapeNegativeOutputDimErrorMessage:sy,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:my,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:dy,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:fy,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:py,getUndoAxesPermutation:Ju,isIdentityPermutation:ey,log:Ur,mergeRealAndImagArrays:Rv,prepareAndValidate:Rs,prepareSplitSize:ny,segment_util:vy,shouldFuse:dg,slice_util:cc,splitRealAndImagArrays:zv,tupleValuesAreOne:el,upcastType:$i,validateDefaultValueShape:xv,validateInput:Bs,validateUpdateShape:zs,warn:Hr},Symbol.toStringTag,{value:`Module`})),Sy={},Cy={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function wy(e,t){Sy[e]=t}function Ty(e,t){if(!(e in Sy)||t!=null){let n=Dy(e,t);if(n!==null)Sy[e]=n;else return console.log(`Could not get context for WebGL version`,e),null}let n=Sy[e];return n==null||n.isContextLost()?(delete Sy[e],Ty(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Sy[e])}function Ey(e){if(typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}function Dy(e,t){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);let n=t??Ey(e);return n.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),delete Sy[e]},!1),N().getBool(`SOFTWARE_WEBGL_ENABLED`)&&(Cy.failIfMajorPerformanceCaveat=!1),e===1?n.getContext(`webgl`,Cy)||n.getContext(`experimental-webgl`,Cy):n.getContext(`webgl2`,Cy)}var Oy;(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(Oy||={});var ky;(function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`})(ky||={});var Ay;(function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`})(Ay||={});function jy(e,t){return[t,e]}function My(e,t){return e*t}function Ny(e){let t=k(e);return ne(Math.ceil(t/4))}function Py(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Fy(e,t){let[n,r]=Py(e,t);return n*r*4}function Iy(e,t){let n=e,r,i,a,o,s,c,l,u,d,f;return N().getNumber(`WEBGL_VERSION`)===2?(r=n.R32F,i=n.R16F,a=n.RGBA16F,o=n.RGBA32F,s=n.RED,l=4,u=1,d=n.HALF_FLOAT,f=n.FLOAT,c=n.RGBA8):(r=e.RGBA,i=e.RGBA,a=e.RGBA,o=n.RGBA,s=e.RGBA,l=4,u=4,d=t==null?null:t.HALF_FLOAT_OES,f=e.FLOAT,c=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:s,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:f}}function Y(e,t){let n=t();return N().getBool(`DEBUG`)&&Ly(e),n}function Ly(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+Vy(e,t))}var Ry=5.96e-8,zy=65504;function By(e){return!!(N().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||Ry<Math.abs(e)&&Math.abs(e)<zy)}function Vy(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code ${t}`}}function Hy(e,t){return ub(e,()=>e.getExtension(t),`Extension "`+t+`" not supported on this browser.`)}function Uy(e,t){let n=ub(e,()=>e.createShader(e.VERTEX_SHADER),`Unable to create vertex WebGLShader.`);if(Y(e,()=>e.shaderSource(n,t)),Y(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),Error(`Failed to compile vertex shader.`);return n}function Wy(e,t){let n=ub(e,()=>e.createShader(e.FRAGMENT_SHADER),`Unable to create fragment WebGLShader.`);if(Y(e,()=>e.shaderSource(n,t)),Y(e,()=>e.compileShader(n)),N().get(`ENGINE_COMPILE_ONLY`))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw Ky(t,e.getShaderInfoLog(n)),Error(`Failed to compile fragment shader.`);return n}var Gy=/ERROR: [0-9]+:([0-9]+):/g;function Ky(e,t){let n=Gy.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((e,t)=>re((t+1).toString(),a)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let c=o.slice(0,r-1),l=o.slice(r-1,r),u=o.slice(r);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${re(l[0],s)}`,`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(u.join(`
`))}function qy(e){return ub(e,()=>e.createProgram(),`Unable to create WebGLProgram.`)}function Jy(e,t){if(Y(e,()=>e.linkProgram(t)),!N().get(`ENGINE_COMPILE_ONLY`)&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Failed to link vertex and fragment shaders.`)}function Yy(e,t){if(Y(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Shader program validation failed.`)}function Xy(e,t){let n=ub(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Y(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Y(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function Zy(e,t){let n=ub(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Y(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),Y(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function Qy(e){return ub(e,()=>e.createTexture(),`Unable to create WebGLTexture.`)}function $y(e,t){let n=N().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){let n=`[${e}x${t}]`;throw Error(`Requested texture size `+n+` is invalid.`)}if(e>n||t>n){let r=`[${e}x${t}]`,i=`[${n}x${n}]`;throw Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+i+`.`)}}function eb(e){return ub(e,()=>e.createFramebuffer(),`Unable to create WebGLFramebuffer.`)}function tb(e,t,n,r,i,a,o){let s=e.getAttribLocation(t,n);return s===-1?!1:(Y(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),Y(e,()=>e.vertexAttribPointer(s,i,e.FLOAT,!1,a,o)),Y(e,()=>e.enableVertexAttribArray(s)),!0)}function nb(e,t,n){db(e,n),Y(e,()=>e.activeTexture(e.TEXTURE0+n)),Y(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function rb(e,t,n){return ub(e,()=>e.getUniformLocation(t,n),`uniform "`+n+`" not present in program.`)}function ib(e,t,n){return e.getUniformLocation(t,n)}function ab(e,t,n,r){Y(e,()=>nb(e,t,r)),Y(e,()=>e.uniform1i(n,r))}function ob(e,t,n){Y(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),Y(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function sb(e,t){Y(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),Y(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function cb(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+lb(e,t))}function lb(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error ${t}`}}function ub(e,t,n){let r=Y(e,()=>t());if(r==null)throw Error(n);return r}function db(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function fb(e,t=2){return k(e.slice(0,e.length-t))}function pb(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function mb(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[fb(e),...pb(e)]),t}function hb(e,t=!1){let n=N().getNumber(`WEBGL_MAX_TEXTURE_SIZE`),r=N().getNumber(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`);r===1/0&&N().getBool(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`)&&(r=n/2),t&&(n*=2,r*=2,e=e.map((t,n)=>n>=e.length-2?C(e[n]):e[n]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=se(e).newShape);let i=k(e),a=null;e.length<=1&&i<=n?a=[1,i]:e.length===2&&e[0]<=n&&e[1]<=n?a=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?a=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?a=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?a=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(a=[e[0],e[1]*e[2]*e[3]]);let o=a!=null&&Math.max(...a)>r&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(a==null||o)if(t){let t=fb(e),n=2,r=2;e.length&&([n,r]=pb(e)),i=n/2*t*(r/2),a=ne(i).map(e=>e*2)}else a=ne(i);return a}function gb(e){return e%2==0}function _b(e,t){if(e=e.slice(-2),t=t.slice(-2),A(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||gb(n)&&gb(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&gb(e[0])&&gb(t[0])}var vb,yb;function bb(e){if(vb==null){let t=Ty(e);vb=t.getParameter(t.MAX_TEXTURE_SIZE)}return vb}function xb(e){if(yb==null){let t=Ty(e);yb=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,yb)}function Sb(e){if(e===0)return 0;let t,n=Ty(e);return t=Cb(n,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!Cb(n,`EXT_disjoint_timer_query`),t}function Cb(e,t){return e.getExtension(t)!=null}function wb(e){try{if(Ty(e)!=null)return!0}catch(e){return console.log(`Error when getting WebGL context: `,e),!1}return!1}function Tb(e){if(e===0)return!1;let t=Ty(e);if(e===1){if(!Cb(t,`OES_texture_float`))return!1}else if(!Cb(t,`EXT_color_buffer_float`))return!1;return Db(t)}function Eb(e){if(e===0)return!1;let t=Ty(e);if(e===1){if(!Cb(t,`OES_texture_float`)||!Cb(t,`WEBGL_color_buffer_float`))return!1}else{if(Cb(t,`EXT_color_buffer_float`))return Db(t);let e=`EXT_color_buffer_half_float`;return Cb(t,e)?Ob(t,t.getExtension(e)):!1}return Db(t)}function Db(e){let t=Iy(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function Ob(e,t){let n=Iy(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function kb(e){return e===2?Ty(e).fenceSync!=null:!1}function Ab(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&E(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var X=N();X.registerFlag(`HAS_WEBGL`,()=>X.getNumber(`WEBGL_VERSION`)>0),X.registerFlag(`WEBGL_VERSION`,()=>wb(2)?2:+!!wb(1)),X.registerFlag(`WEBGL_CHECK_NUMERICAL_PROBLEMS`,()=>!1),X.registerFlag(`WEBGL_BUFFER_SUPPORTED`,()=>X.get(`WEBGL_VERSION`)===2),X.registerFlag(`WEBGL_CPU_FORWARD`,()=>!0),X.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,()=>!1),X.registerFlag(`WEBGL_PACK`,()=>X.getBool(`HAS_WEBGL`)),X.registerFlag(`WEBGL_PACK_NORMALIZATION`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_PACK_CLIP`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_PACK_REDUCE`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_LAZILY_UNPACK`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_CONV_IM2COL`,()=>X.getBool(`WEBGL_PACK`)),X.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,()=>bb(X.getNumber(`WEBGL_VERSION`))),X.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,()=>xb(X.getNumber(`WEBGL_VERSION`))),X.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,()=>{let e=X.getNumber(`WEBGL_VERSION`);return e===0?0:Sb(e)}),X.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,()=>X.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&!pa()),X.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,()=>Tb(X.getNumber(`WEBGL_VERSION`))),X.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,()=>X.getBool(`WEBGL_FORCE_F16_TEXTURES`)?!1:X.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)),X.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,()=>Eb(X.getNumber(`WEBGL_VERSION`))),X.registerFlag(`WEBGL_FENCE_API_ENABLED`,()=>kb(X.getNumber(`WEBGL_VERSION`))),X.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,()=>X.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0),X.registerFlag(`WEBGL_DELETE_TEXTURE_THRESHOLD`,()=>-1,e=>{if(e<0&&e!==-1)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),X.registerFlag(`WEBGL_FLUSH_THRESHOLD`,()=>pa()?1:-1,e=>{if(e<0&&e!==-1)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),X.registerFlag(`CPU_HANDOFF_SIZE_THRESHOLD`,()=>128),X.registerFlag(`WEBGL_USE_SHAPES_UNIFORMS`,()=>!1),X.registerFlag(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`,()=>1e5),X.registerFlag(`TOPK_K_CPU_HANDOFF_THRESHOLD`,()=>128),X.registerFlag(`WEBGL_EXP_CONV`,()=>!1),X.registerFlag(`SOFTWARE_WEBGL_ENABLED`,()=>X.getBool(`IS_TEST`)),X.registerFlag(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`,()=>1/0),X.registerFlag(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`,()=>!1),X.registerFlag(`WEBGL2_ISNAN_CUSTOM`,()=>!1);function jb(){let e,t,n,r,i,a,o,s,c,l;return N().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=N().getBool(`WEBGL2_ISNAN_CUSTOM`)?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:``,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
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
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function Mb(e,t,n=`index`){let r=M(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${t}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`};`).join(``)}function Nb(e,t,n=`index`){let r=M(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / outShapeStrides[${i}]`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`};`).join(``)}function Pb(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),i=Array(n-1);i[n-2]=r[n-1];for(let e=n-3;e>=0;--e)i[e]=`(${i[e+1]} * ${r[e+1]})`;return i}function Fb(e,t,n=`index`){let r=Pb(e.map((e,t)=>t),t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${r[i]}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${r[i]}`:`index -= ${e[i]} * ${r[i]}`};`).join(``)}function Ib(e){let t=M(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function Lb(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var Rb=`
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
`,{getBroadcastDims:zb}=xy;function Bb(e,t,n){let r=[];if(e.forEach(e=>{let t=k(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:``};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){let{uniformShape:t}=Ox(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`);break}r.push(`uniform ivec2 ${e.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push(`uniform int outShape;`);break;case 2:r.push(`uniform ivec2 outShape;`),r.push(`uniform int outShapeStrides;`);break;case 3:r.push(`uniform ivec3 outShape;`),r.push(`uniform ivec2 outShapeStrides;`);break;case 4:r.push(`uniform ivec4 outShape;`),r.push(`uniform ivec3 outShapeStrides;`);break}r.push(`uniform ivec2 outTexShape;`)}n.customUniforms&&n.customUniforms.forEach(e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:``};`)});let i=r.join(`
`),a=e.map(e=>Ub(e,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),o=t.texShape,s=jb(),c=Kb(s),l,u,d=Yb(s);return t.isPacked?(l=Wb(t.logicalShape,o,n.enableShapeUniforms),u=Jb(s)):(l=Gb(t.logicalShape,o,n.enableShapeUniforms),u=qb(s)),n.packedInputs&&(d+=$b),[d,c,u,i,l,a,n.userCode].join(`
`)}function Vb(e,t=!1){let n=e.shapeInfo.logicalShape;switch(n.length){case 0:return px(e,t);case 1:return hx(e,t);case 2:return _x(e,t);case 3:return yx(e,t);case 4:return xx(e,t);case 5:return Sx(e);case 6:return Cx(e);default:throw Error(`${n.length}-D input sampling is not yet supported`)}}function Hb(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return fx(e);case 1:return mx(e,t);case 2:return gx(e,t);case 3:return vx(e,t);default:return bx(e,t)}}function Ub(e,t,n=!1,r){let i=``;n?i+=Hb(e,r):i+=Vb(e,r);let a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(n?i+=Tx(e,t):i+=Ex(e,t)),i}function Wb(e,t,n){switch(e.length){case 0:return ex();case 1:return tx(e,t,n);case 2:return lx(e,t,n);case 3:return rx(e,t,n);default:return ax(e,t,n)}}function Gb(e,t,n){switch(e.length){case 0:return ex();case 1:return nx(e,t,n);case 2:return ux(e,t,n);case 3:return ix(e,t,n);case 4:return ox(e,t,n);case 5:return sx(e,t);case 6:return cx(e,t);default:throw Error(`${e.length}-D output sampling is not yet supported`)}}function Kb(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function qb(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function Jb(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function Yb(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
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
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

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

    ${Xb}
    ${Zb}
    ${Qb}
  `}var Xb=`
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
`,Zb=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Qb=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,$b=`
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
`;function ex(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function tx(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
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
  `}function nx(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function rx(e,t,n){if(n)return`
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
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[2]/2),a=i*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec3(b, r, c);
    }
  `}function ix(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Nb([`r`,`c`,`d`],e)}
    return ivec3(r, c, d);
  }
`;let r=Mb([`r`,`c`,`d`],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function ax(e,t,n){if(n)return`
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
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[e.length-1]/2),a=i*Math.ceil(e[e.length-2]/2),o=a,s=``,c=`b, r, c`;for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,c=`b${t}, `+c;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${s}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec${e.length}(${c});
    }
  `}function ox(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Nb([`r`,`c`,`d`,`d2`],e)}
      return ivec4(r, c, d, d2);
    }
  `;let r=Mb([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function sx(e,t){let n=Mb([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function cx(e,t){let n=Mb([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function lx(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(A(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;let i=Math.ceil(e[1]/2);return n?`
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
      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec2(r, c);
    }
  `}function ux(e,t,n){return A(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
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
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function dx(e){return`offset${e}`}function fx(e){let t=e.name;return`
    vec4 ${`get`+t.charAt(0).toUpperCase()+t.slice(1)}() {
      return ${jb().texture2D}(${t}, halfCR);
    }
  `}function px(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;let[i,a]=e.shapeInfo.texShape;if(i===1&&a===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;let o=dx(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});
      return sampleTexture(${n}, uv);
    }
  `;let[s,c]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${s}, ${c}, ${o});
      return sampleTexture(${n}, uv);
    }
  `}function mx(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=jb();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${n}, uv);
    }
  `;let o=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${n}, uv);
    }
  `}function hx(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${wx(e)}
      }
    `;let i=e.shapeInfo.texShape,a=i[0],o=i[1];if(o===1&&a===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;let s=dx(n);return o===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${a}.0);
        return sampleTexture(${n}, uv);
      }
    `:a===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${s});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${a}, ${o}, index + ${s});
      return sampleTexture(${n}, uv);
    }
  `}function gx(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=a[0],s=a[1],c=jb();if(a!=null&&A(n,a))return t?`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${c.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${c.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${i}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `;let l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${i}(int row, int col) {
      vec2 uv = packedUVfrom2D(${Math.ceil(n[1]/2)}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `}function _x(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape;if(a!=null&&A(n,a)){if(t)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;let e=a[0];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);
      return sampleTexture(${r}, uv);
    }
  `}let{newShape:o,keptDims:s}=se(n),c=o;if(c.length<n.length)return`
      ${Vb(kx(e,c),t)}
      float ${i}(int row, int col) {
        return ${i}(${Ax([`row`,`col`],s)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${wx(e)}
      }
    `;let l=a[0],u=a[1],d=dx(r);return u===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${r}, uv);
  }
`}function vx(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        ${Hb(kx(e,n.slice(1)),t)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${Ax([`b`,`row`,`col`],[1,2])});
        }
      `;let s=jb();if(t)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `;let c=o[0],l=o[1],u=Math.ceil(n[2]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u*Math.ceil(n[1]/2)}, ${u}, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `}function yx(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],{newShape:s,keptDims:c}=se(n),l=s;if(l.length<n.length)return`
        ${Vb(kx(e,l),t)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${Ax([`row`,`col`,`depth`],c)});
        }
      `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${o}, 1)));
        ${wx(e)}
      }
    `;let u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===a&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===o&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;let m=dx(r);return t?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function bx(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=jb();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${i.texture2D}(${n}, uv);
    }
  `;let a=e.shapeInfo.logicalShape,o=a.length,s=e.shapeInfo.texShape,c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=c[0],u=c[1],d=Math.ceil(a[o-1]/2),f=d*Math.ceil(a[o-2]/2),p=`int b, int row, int col`,m=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)p=`int b${e}, `+p,f*=a[o-e-1],m=`b${e} * ${f} + `+m;return`
    vec4 ${r}(${p}) {
      int index = ${m};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${i.texture2D}(${n}, uv);
    }
  `}function xx(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,{newShape:c,keptDims:l}=se(n);if(c.length<n.length)return`
      ${Vb(kx(e,c),t)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${Ax([`row`,`col`,`depth`,`depth2`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${s}, ${o}, ${a}, 1)));
        ${wx(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1],m=`int stride2 = ${r}Shape[3];`,h=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(p===s&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${h}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(p===a&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let _=dx(r);return t?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${h}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${_});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${f}, ${p}, index + ${_});
      return sampleTexture(${r}, uv);
    }
  `}function Sx(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,{newShape:c,keptDims:l}=se(t);if(c.length<t.length)return`
      ${Vb(kx(e,c))}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${Ax([`row`,`col`,`depth`,`depth2`,`depth3`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${s}, ${o}, ${a}, ${i})) +
          depth3;
        ${wx(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];return p===s&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${a}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:p===i&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} + depth * ${a} +
          depth2 * ${i} + depth3 + ${dx(n)};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function Cx(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),{newShape:i,keptDims:a}=se(t);if(i.length<t.length)return`
      ${Vb(kx(e,i))}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${Ax([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],a)});
      }
    `;let o=t[5],s=t[4]*o,c=t[3]*s,l=t[2]*c,u=t[1]*l;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${s})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${wx(e)}
      }
    `;let d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];return m===u&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${s}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:m===o&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${s} + depth3 * ${o} + depth4 + ${dx(n)};
      vec2 uv = uvFromFlat(${p}, ${m}, index);
      return sampleTexture(${n}, uv);
    }
  `}function wx(e){let t=e.name,n=k(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function Tx(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=zb(e.shapeInfo.logicalShape,t.logicalShape),c=Dx(o),l=o-a,u,d=[`x`,`y`,`z`,`w`,`u`,`v`];u=a===0?``:o<2&&s.length>=1?`coords = 0;`:s.map(e=>`coords.${d[e+l]} = 0;`).join(`
`);let f=``;f=o<2&&a>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+l]}`).join(`, `);let p=`return outputValue;`,m=k(e.shapeInfo.logicalShape)===1,h=k(t.logicalShape)===1;if(a===1&&!m&&!h)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!h)p=o===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=a-2,t=a-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p=`return vec4(outputValue.x);`:s.indexOf(e)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:s.indexOf(t)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}return`
    vec4 ${i}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${r}(${f});
      ${p}
    }
  `}function Ex(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&A(o,a))return`
      float ${i}() {
        return sampleTexture(${n}, resultUV);
      }
    `;let l=Dx(c),u=zb(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f,p=[`x`,`y`,`z`,`w`,`u`,`v`];f=s===0?``:c<2&&u.length>=1?`coords = 0;`:u.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+d]}`).join(`, `),`
    float ${i}() {
      ${l} coords = getOutputCoords();
      ${f}
      return get${r}(${m});
    }
  `}function Dx(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function Ox(e,t,n){let{newShape:r,keptDims:i}=se(t),a=t.length,o=e&&a===3&&t[0]===1,s=o?t.slice(1):r,c=!e&&a>1&&!A(t,n)&&r.length<a||o;return{useSqueezeShape:c,uniformShape:c?s:t,keptDims:i}}function kx(e,t){let n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function Ax(e,t){return t.map(t=>e[t]).join(`, `)}function jx(e,t,n,r){let i=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:e.isUniform?!1:e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),a=i.map(e=>e.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=Bb(i,o,t),c=Wy(e.gl,s),l=e.createProgram(c);return N().get(`ENGINE_COMPILE_ONLY`)?{program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o},Mx(e,t,l))}function Mx(e,t,n){let r={},i={},a={},o=[],s,c,l,u=null,d=null;d=e.getUniformLocation(n,`NAN`,!1),N().getNumber(`WEBGL_VERSION`)===1&&(u=e.getUniformLocation(n,`INFINITY`,!1));for(let o=0;o<t.variableNames.length;o++){let s=t.variableNames[o];r[s]=e.getUniformLocation(n,s,!1),r[`offset${s}`]=e.getUniformLocation(n,`offset${s}`,!1),t.enableShapeUniforms&&(i[`${s}Shape`]=e.getUniformLocation(n,`${s}Shape`,!1),a[`${s}TexShape`]=e.getUniformLocation(n,`${s}TexShape`,!1))}return t.enableShapeUniforms&&(s=e.getUniformLocation(n,`outShape`,!1),l=e.getUniformLocation(n,`outShapeStrides`,!1),c=e.getUniformLocation(n,`outTexShape`,!1)),t.customUniforms&&t.customUniforms.forEach((t,r)=>{o[r]=e.getUniformLocation(n,t.name,!1)}),{uniformLocations:r,customUniformLocations:o,infLoc:u,nanLoc:d,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:s,outShapeStridesLocation:l,outTexShapeLocation:c}}function Nx(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,i=t[n],a=i.shape;if(!A(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${a} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!A(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function Px(e,t,n,r,i){t.program.enableShapeUniforms||(Nx(t.inShapeInfos,n),Nx([t.outShapeInfo],[r]));let a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),N().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach((n,r)=>{let i=t.program.variableNames[r],a=t.uniformLocations[i],o=t.uniformLocations[`offset${i}`],s=t.inShapesLocations[`${i}Shape`],c=t.inTexShapesLocations[`${i}TexShape`];if(s){let{uniformShape:r}=Ox(t.program.packedInputs,n.shape,n.texData.texShape);switch(r.length){case 1:e.gl.uniform1iv(s,new Int32Array(r));break;case 2:e.gl.uniform2iv(s,new Int32Array(r));break;case 3:e.gl.uniform3iv(s,new Int32Array(r));break;case 4:e.gl.uniform4iv(s,new Int32Array(r));break}}if(c&&e.gl.uniform2i(c,n.texData.texShape[0],n.texData.texShape[1]),a!=null){if(n.isUniform){if(k(n.shape)<2)e.gl.uniform1f(a,n.uniformValues[0]);else{let t=n.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}return}n.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture.texture,a,r)}});let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape));break}if(t.outShapeStridesLocation){let n=M(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n));break}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&i&&t.program.customUniforms.forEach((n,r)=>{let a=t.customUniformLocations[r],o=i[r];if(n.type===`float`)e.gl.uniform1fv(a,o);else if(n.type===`vec2`)e.gl.uniform2fv(a,o);else if(n.type===`vec3`)e.gl.uniform3fv(a,o);else if(n.type===`vec4`)e.gl.uniform4fv(a,o);else if(n.type===`int`)e.gl.uniform1iv(a,o);else if(n.type===`ivec2`)e.gl.uniform2iv(a,o);else if(n.type===`ivec3`)e.gl.uniform3iv(a,o);else if(n.type===`ivec4`)e.gl.uniform4iv(a,o);else throw Error(`uniform type ${n.type} is not supported yet.`)}),e.executeProgram()}function Fx(e,t,n){let r=``;t.concat(n).forEach(t=>{let i=t.texData!=null&&t.texData.slice!=null&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:o,uniformShape:s,keptDims:c}=Ox(e.packedInputs,t.shape,a),l=``,u=``,d=``;if(s.length===1&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(s.length===2&&!e.packedInputs)u=`${s[0]>1}_${s[1]>1}`;else if(s.length>2&&!e.packedInputs){let e=M(s);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}let f=t.shape.length,p=s.length===2&&A(t.shape,a),m=k(t.shape)===1,h=js(t.shape,n.shape),g=!e.packedInputs&&f===n.shape.length&&A(a,n.texData.texShape),_=e.packedInputs||s.length>2?``:`${a[0]>1}_${a[1]>1}`;r+=`${f}_${g}_${o?c:``}_${s.length}_${m}_${h}_${p}_${l}_${u}_${d}_${_}_${i}`}else{let e=t.isUniform?`uniform`:t.texData.texShape;r+=`${t.shape}_${e}_${i}`}});let i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i+`${N().getNumber(`WEBGL_VERSION`)}`,a}function Ix(e){return N().getBool(`WEBGL_USE_SHAPES_UNIFORMS`)&&e<=4}var Lx=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Oy.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=jb();this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Nb([`r`,`c`,`d`],e):Mb([`r`,`c`,`d`],e)}
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
    `}},Rx=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Oy.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=jb();this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Nb([`r`,`c`,`d`],e):Mb([`r`,`c`,`d`],e)}
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
    `}},zx=class{constructor(e){this.variableNames=[`A`],this.outTexUsage=ky.DOWNLOAD;let t=jb();this.outputShape=e,this.userCode=`
      ${Rb}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}},Bx=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ky.DOWNLOAD;let t=jb();this.outputShape=e,this.userCode=`
      ${Rb}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}},Vx=class{constructor(e,t=!1){this.variableNames=[`A`],this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=jb();this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length);let r=`result`;t&&(r=`floor(result * 255. + 0.5)`),this.userCode=`
      ${this.enableShapeUniforms?Lb():Ib(e)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${n.texture2D}(A, uv);

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

        ${n.output} = vec4(${r}, 0., 0., 0.);
      }
    `}},Hx=class{constructor(e,t=!1){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=jb();this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length);let r=``,i=`result`;t&&(i=`floor(result * 255. + 0.5)`);for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let a=t*2+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?`outShape[2]`:`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?`outShape[1]`:`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Lb():Ib(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${i};
        }
    `}};function Ux(e){let t=jb();return Uy(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Wx(e){return Xy(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Gx(e){return Zy(e,new Uint16Array([0,1,2,2,1,3]))}function Kx(e,t,n,r,i,a){$y(t,n);let o=Qy(e),s=e.TEXTURE_2D;return Y(e,()=>e.bindTexture(s,o)),Y(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),Y(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),Y(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),Y(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),N().getNumber(`WEBGL_VERSION`)===1?Y(e,()=>e.texImage2D(s,0,r,t,n,0,i,a,null)):Y(e,()=>e.texStorage2D(s,1,r,t,n)),Y(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[n,t]}}function qx(e){return e.internalFormatFloat}function Jx(e,t,n,r){let[i,a]=jy(t,n);return Kx(e,i,a,qx(r),r.textureFormatFloat,e.FLOAT)}function Yx(e){return e.internalFormatHalfFloat}function Xx(e,t,n,r){let[i,a]=jy(t,n);return Kx(e,i,a,Yx(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function Zx(e){return e.downloadTextureFormat}function Qx(e,t,n,r){let[i,a]=jy(t,n);return Kx(e,i,a,Zx(r),e.RGBA,e.UNSIGNED_BYTE)}function $x(e){return e.internalFormatPackedFloat}function eS(e,t,n,r){let[i,a]=Py(t,n);return Kx(e,i,a,$x(r),e.RGBA,e.FLOAT)}function tS(e){return e.internalFormatPackedHalfFloat}function nS(e,t,n,r){let[i,a]=Py(t,n);return Kx(e,i,a,tS(r),e.RGBA,r.textureTypeHalfFloat)}function rS(e,t,n){return Y(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),tb(e,t,`clipSpacePos`,n,3,20,0)&&tb(e,t,`uv`,n,2,20,12)}function iS(e,t,n,r,i,a){Y(e,()=>e.bindTexture(e.TEXTURE_2D,t));let o,s,c;i instanceof Uint8Array?(o=new Uint8Array(n*r*4),s=e.UNSIGNED_BYTE,c=e.RGBA):(o=new Float32Array(n*r*4),s=e.FLOAT,c=a.internalFormatPackedFloat),o.set(i),N().getNumber(`WEBGL_VERSION`)===2?Y(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,s,o)):Y(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,r,0,e.RGBA,s,o)),Y(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function aS(e,t,n){Y(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?N().getNumber(`WEBGL_VERSION`)===2?Y(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):Y(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):N().getNumber(`WEBGL_VERSION`)===2?Y(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):Y(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),Y(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function oS(e,t,n,r){let i=e.createBuffer();Y(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,i));let a=16*t*n;return Y(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),Y(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),Y(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),i}function sS(e,t,n){let r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function cS(e,t,n,r){let[i,a]=jy(t,n),o=new Uint8Array(My(t*n,4));return Y(e,()=>e.readPixels(0,0,i,a,r.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function lS(e,t,n,r,i,a,o,s){let c=e,l=new Float32Array(Fy(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function uS(e,t,n){let r=new Float32Array(t*n*4);return Y(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}var dS=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];let t=N().getNumber(`WEBGL_VERSION`);e==null?this.gl=Ty(t):(this.gl=e,wy(t,e));let n=`WEBGL_color_buffer_float`,r=`EXT_color_buffer_half_float`;if(this.parallelCompilationExtension=this.gl.getExtension(`KHR_parallel_shader_compile`),N().getNumber(`WEBGL_VERSION`)===1){let e=`OES_texture_half_float`;if(this.textureFloatExtension=Hy(this.gl,`OES_texture_float`),Cb(this.gl,e))this.textureHalfFloatExtension=Hy(this.gl,e);else if(N().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),Cb(this.gl,r))this.colorBufferHalfFloatExtension=Hy(this.gl,r);else if(N().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,Cb(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(Cb(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw Error(`GL context does not support color renderable floats`);this.vertexBuffer=Wx(this.gl),this.indexBuffer=Gx(this.gl),this.framebuffer=eb(this.gl),this.textureConfig=Iy(this.gl,this.textureHalfFloatExtension)}get debug(){return N().getBool(`DEBUG`)}dispose(){if(this.disposed)return;this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);let e=this.gl;Y(e,()=>e.finish()),Y(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),Y(e,()=>e.deleteFramebuffer(this.framebuffer)),Y(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),Y(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),Y(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),Jx(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),Xx(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),Qx(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),aS(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),iS(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),nS(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),eS(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(sb(this.gl,this.framebuffer),this.outputTexture=null),Y(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>cS(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,i,a){return lS(this.gl,e,t,n,r,i,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return sS(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=oS(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(N().getBool(`WEBGL_FENCE_API_ENABLED`)){let r=e,i=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let e=r.clientWaitSync(i,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=i}else N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>uS(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader??=Ux(t);let n=qy(t);return Y(t,()=>t.attachShader(n,this.vertexShader)),Y(t,()=>t.attachShader(n,e)),Jy(t,n),this.debug&&Yy(t,n),this.vertexAttrsAreBound||=(this.setProgram(n),rS(t,this.program,this.vertexBuffer)),n}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&Y(this.gl,()=>this.gl.deleteProgram(e))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Yy(this.gl,this.program),Y(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?rb(this.gl,e,t):ib(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),Y(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),ab(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,i]=Py(t,n);this.setOutputMatrixTextureDriver(e,r,i)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)}debugValidate(){this.program!=null&&Yy(this.gl,this.program),cb(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;this.debug&&this.debugValidate(),Y(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),Y(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension??=Hy(this.gl,N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await ie(()=>this.disposed||this.isQueryAvailable(e,N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))),this.getQueryTime(e,N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}getQueryTime(e,t){if(t===0)return null;if(t===2){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}else{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(n.GPU_DISJOINT_EXT),r&&!this.disjoint}else{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint??=this.gl.getParameter(t.GPU_DISJOINT_EXT),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=fS(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;`setTimeoutCustom`in N().platform&&(n=N().platform.setTimeoutCustom.bind(N().platform)),ie(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),ob(this.gl,e,this.framebuffer),this.debug&&cb(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture==null?sb(this.gl,this.framebuffer):(ob(this.gl,this.outputTexture,this.framebuffer),this.debug&&cb(this.gl))}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;ob(r,e,this.framebuffer),this.debug&&cb(r),this.outputTexture=e,Y(r,()=>r.viewport(0,0,t,n)),Y(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),Y(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)}throwIfNoProgram(){if(this.program==null)throw Error(`No GPU program is currently set.`)}};function fS(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}function pS(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}function mS(e){return(t,n,r,i,a)=>{let o=V(t,n),s=o.length,c=M(o),l=ce(a,k(o)),u=t.length,d=n.length,f=M(t),p=M(n),m=js(t,o),h=js(n,o);if(m.length+h.length===0)for(let t=0;t<l.length;++t)l[t]=e(r[t%r.length],i[t%i.length]);else for(let t=0;t<l.length;++t){let n=De(t,s,c),a=n.slice(-u);m.forEach(e=>a[e]=0);let o=Ee(a,u,f),g=n.slice(-d);h.forEach(e=>g[e]=0);let _=Ee(g,d,p);l[t]=e(r[o],i[_])}return[l,o]}}function hS(e,t,n,r){if(r===`int32`)return[t,`int32`,Int32Array.from(e)];if(r===`bool`){let r=xi([0],n),[i,a]=mS((e,t)=>e===t?0:1)(t,[],e,r,`bool`);return[a,`bool`,i]}throw Error(`Error in Cast: failed to cast ${n} to ${r}`)}var gS=mS(((e,t)=>e+t));function _S(e,t,n,r,i){let a=k(r),o=we(i,n);for(let n=0;n<e.length;n++){let r=e[n];if(r<0)throw Error(`Input x must be non-negative!`);r>=i||(a>0?o[r]+=t[n]:o[r]+=1)}return o}function vS(e,t,n,r=!1){let i=e.shape[0],a=e.shape[1],o=Fo([i,n],t.dtype);for(let s=0;s<i;s++)for(let i=0;i<a;i++){let a=e.get(s,i);if(a<0)throw Error(`Input x must be non-negative!`);a>=n||(r?o.set(1,s,a):t.size>0?o.set(o.get(s,a)+t.get(s,i),s,a):o.set(o.get(s,a)+1,s,a))}return o}function yS(e){return(t,n,r)=>{let i=ce(n,t.length);for(let n=0;n<t.length;++n)i[n]=e(t[n],r);return i}}var bS=yS(e=>Math.ceil(e));function xS(e,t,n,r){let i=le(n,k(t));if(r&&n!==`string`){let t=0;e.forEach(e=>{let n=k(e.shape);i.set(e.vals,t),t+=n})}else{let r=0;e.forEach(e=>{let a=n===`string`?yy(e.vals):e.vals,o=0;for(let n=0;n<e.shape[0];++n){let s=n*t[1]+r;for(let t=0;t<e.shape[1];++t)i[s+t]=a[o++]}r+=e.shape[1]})}return i}var SS=mS((e,t)=>+(e===t)),CS=yS(e=>Math.exp(e)),wS=yS(e=>Math.expm1(e)),TS=yS(e=>Math.floor(e));function ES(e,t,n,r,i,a,o,s,c){let l=Fo([r,a],n);for(let n=0;n<r;n++){let r=[],u=0;for(let t=0;t<i;t++){let a=e[n*i+t];u+=a*o[t],r.push(a)}if(u<0||u>=c/a)throw Error(`Invalid indices: ${r} does not index into ${s}`);for(let e=0;e<a;e++)l.values[n*a+e]=t.get(...t.indexToLoc(u*a+e))}return l}function DS(e,t,n){let r=Fo(n,e.dtype);for(let n=0;n<r.size;++n){let i=r.indexToLoc(n).slice(),a=i[0],o=i[2],s=t.locToIndex([a,o]);i[2]=t.values[s];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(r.values[n]=e.values[c])}return r}var OS=mS((e,t)=>+(e>t)),kS=mS((e,t)=>+(e>=t)),AS=mS((e,t)=>+(e<t)),jS=mS((e,t)=>+(e<=t));function MS(e,t,n){let r=(t-e)/(n-1),i=we(n,`float32`);i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+r;return i}var NS=yS(e=>Math.log(e));function PS(e,t,n,r){let i=ce(r,k(n));for(let n=0;n<i.length;++n){let r=n*t,a=e[r];for(let n=0;n<t;++n){let t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}i[n]=a}return i}var FS=mS(((e,t)=>Math.max(e,t))),IS=mS(((e,t)=>Math.min(e,t))),LS=mS(((e,t)=>e*t));function RS(e,t,n){return LS([],t,yi(-1,n),e,n)}var zS=mS(((e,t)=>e===t?0:1));function BS(e,t,n,r,i){let a=t.length,o=k(t),s=M(t),c=M(i),l=ce(n,k(i));for(let t=0;t<o;++t){let n=De(t,a,s),i=Array(n.length);for(let e=0;e<i.length;e++)i[e]=n[r[e]];let o=Ee(i,a,c);l[o]=e[t]}return l}function VS(e,t,n,r){let[i,a]=Wu(e,r),o=$i(t,`int32`),s=we(k(i),o),c=k(a);for(let e=0;e<s.length;++e){let t=e*c,r=1;for(let e=0;e<c;++e)r*=n[t+e];s[e]=r}return{outVals:s,outShape:i,outDtype:o}}function HS(e,t,n){e.forEach((e,r)=>{if(e<0||e>=n){let i=De(r,t.length,M(t)).join(`,`);throw Error(`indices[${i}] = ${e} is not in [0, ${n})`)}})}function US(e,t){for(let n=0;n<e.length;++n){let r=e[n],i=n===e.length-1?t:e[n+1].length;if(r.length===0)throw Error(`Ragged splits may not be empty`);if(r[0]<0)throw Error(`Ragged splits must be non-negative`);if(r[r.length-1]>i)throw Error(`Ragged splits must not point past values`);for(let e=1;e<r.length;++e)if(r[e-1]>r[e])throw Error(`Ragged splits must be sorted in ascending order`)}}function WS(e,t,n,r){let i=[],a=0,o=t.length-1+n.length,s=Array(o).fill(null).map(()=>[0]);US(n,r);let c=1;for(let e=0;e<t.length-1;++e){c*=t[e];let n=t[e+1];for(let t=1;t<c+1;++t)s[e].push(t*n)}for(let r=0;r<e.length;++r){let o=e[r],c=e[r]+1;for(let e=0;e<n.length;++e){let r=n[e],i=e+t.length-1;if(i>=0){let e=s[i],t=e[e.length-1]-r[o];for(let e=o;e<c;++e)s[i].push(r[e+1]+t)}o=r[o],c=r[c]}c!==o&&(i.push([o,c]),a+=c-o)}return{outSplits:s,valueSlices:i,numValues:a}}function GS(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n].length,i=le(`int32`,r);t.push(i),e[n].forEach((e,t)=>i[t]=e)}return t}function KS(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function qS(e,t,n,r,i,a){let o=KS(t,2)[1],s=KS(a,2)[1],c=0;for(let t of n)for(let n=t[0];n<t[1];++n){for(let t=0;t<r;++t)i[c*s+t]=e[n*o+t];++c}}function JS(e,t,n,r,i){let a=t.slice();a[0]=i;let o=le(n,k(a)),s=e.length;return qS(e,t,r,s===0?0:s/t[0],o,a),[o,a]}function YS(e,t,n,r,i,a,o,s){if(e.length===0)throw Error(`paramsNestedSplits must be non empty`);if(t[0].length===0)throw Error(`Split tensors must not be scalars`);if(HS(a,o,t[0][0]-1),r.length===0)throw Error(`params.rank must be nonzero`);let c=r[0],{outSplits:l,valueSlices:u,numValues:d}=WS(a,o,e,c),f=GS(l),p=JS(n,r,i,u,d);return[f,p[0],p[1]]}var XS=_v,ZS=class e{constructor(e,t,n,r,i,a,o,s,c,l){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=i,this.defaultValue=a,this.defaultValueShape=o,this.rowPartitionValues=s,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=yv(l),this.raggedRank=bv(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===XS.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===XS.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(t){let n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case XS.VALUE_ROWIDS:return e.getMaxWidthValueRowID(n);case XS.ROW_SPLITS:return e.getMaxWidthRowSplit(n);default:throw Error(`Cannot handle partition type ${XS[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let n=0;for(let r=0;r<t-1;++r){let t=e[r+1]-e[r];t>n&&(n=t)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let n=0,r=e[0],i=0;for(let a=1;a<t;++a){let t=e[a];t!==r&&(r=t,i=Math.max(a-n,i),n=a)}return Math.max(t-n,i)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw Error(`The only valid scalar shape tensor is the fully unknown shape specified as -1.`)}return $S(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;xv(n,t);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=vv(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let e=1;e<=this.raggedRank;++e)i[e]<0&&(i[e]=this.getMaxWidth(e));return i}calculateFirstParentOutputIndex(e,t,n){let r=Math.min(e,n),i=[],a=0;for(let e=0;e<r;++e,a+=t)i.push(a);for(let t=r;t<e;++t)i.push(-1);return E(i.length===e,()=>`Final length of result must be equal to firstDimension.`),i}calculateOutputIndexRowSplit(e,t,n,r){let i=e.length,a=[];for(let o=0;o<i-1;++o){let i=e[o+1]-e[o],s=Math.min(r,i),c=t[o];c===-1&&(s=0);for(let e=0;e<s;++e)a.push(c),c+=n;for(let e=0;e<i-s;++e)a.push(-1)}if(i>0&&a.length!==e[i-1])throw Error(`Invalid row split size.`);return a}calculateOutputIndexValueRowID(e,t,n,r){let i=e.length,a=[];if(i===0)return[];let o=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let c=t[s];a.push(c);for(let l=1;l<i;++l){let i=e[l];if(i===s)c>=0&&(++o,o<r?c+=n:c=-1);else{if(o=0,s=i,i>=t.length)throw Error(`Got nextValueRowId=${i} which is not less than ${t.length}`);c=t[i]}a.push(c)}if(a.length!==e.length)throw Error(`Invalid row ids.`);return a}calculateOutputIndex(e,t,n,r){let i=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case XS.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,t,n,r);case XS.ROW_SPLITS:if(i.length-1>t.length)throw Error(`Row partition size is greater than output size: ${i.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(i,t,n,r);default:throw Error(`Unsupported partition type: ${XS[a]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw Error(`No row_partition_types given.`);let t=this.rowPartitionTypes[0];switch(t){case XS.FIRST_DIM_SIZE:return e[0];case XS.VALUE_ROWIDS:throw Error(`Cannot handle VALUE_ROWIDS in first dimension.`);case XS.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${XS[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error(`Invalid first partition input. Tensor requires at least one element.`);let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*t[e+1];let r=$S(t,!1),i=le(this.valuesDType,k(r));if(n[0]*t[0]>0){let a=this.calculateFirstParentOutputIndex(e,n[0],t[0]);for(let e=1;e<=this.raggedRank;++e)a=this.calculateOutputIndex(e-1,a,n[e],t[e]);this.setOutput(this.raggedRank,a,i,r)}return[r,i]}setOutput(e,t,n,r){if(n.length===0)return;let i=this.values,a=n,o=r.slice();o=o.slice(e+1);let s=k(o),c=t.length,l=this.defaultValue;if(l.length!==s&&l.length!==1){let e=this.defaultValueShape;ys(()=>{l=Pl(G(l,e),o).dataSync()})}let u=0,d=0,f=0;for(let e=0;e<=c;++e){let r=e<c?t[e]:-1;if(r===f){++f;continue}if(d<f){let e=i.subarray(u*s);QS(a.subarray(d*s),e,(f-d)*s)}if(e>=c){let e=n.length;r=Math.floor(e/s)}if(r>f)if(this.defaultValue.length===1)a.subarray(f*s,r*s).fill(this.defaultValue[0]),f=r;else for(;r>f;)QS(a.slice(f*s),l,s),++f;r<0?(u=e+1,d=f):(u=e,d=f,f=d+1)}}};function QS(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function $S(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function eC(e,t,n,r,i,a,o,s,c,l){return new ZS(e,t,n,r,i,a,o,s,c,l).compute()}function tC(e,t,n,r){if(e===t||e<t&&n<0||t<e&&n>1)return we(0,r);let i=we(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+n;return i}var nC=yS(e=>1/Math.sqrt(e));function rC(e,t,n,r,i,a,o,s,c,l){let u=[r/i,i],d=e.values,f=t.values;if(r===0)return Fo(n,t.dtype);let p=Fo(u,t.dtype);typeof c==`string`||typeof c==`number`?p.values.fill(c):typeof c==`boolean`&&p.values.fill(+c);for(let e=0;e<a;e++){let a=[],c=0;for(let t=0;t<o;t++){let n=d[e*o+t];a.push(n),c+=n*s[t]}if(c<0||c>=r/i)throw Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<i;n++)l?p.values[c*i+n]+=f[e*i+n]:p.values[c*i+n]=t.rank===0?f[0]:f[e*i+n]}return p}var iC=yS(e=>1/(1+Math.exp(-e)));function aC(e,t,n,r,i){let a=nc(r,t,n),o=k(n),s=M(r);if(a){let n=rc(t,s);return i===`string`?e.slice(n,n+o):e.subarray(n,n+o)}let c=Fo(r,i,i===`string`?yy(e):e),l=Fo(n,i);for(let e=0;e<l.size;++e){let n=l.indexToLoc(e),r=n.map((e,n)=>e+t[n]);l.set(c.get(...r),...n)}return i===`string`?by(l.values):l.values}function oC(e,t,n,r,i,a,o){let s=t[0],c=a[0],l=Array(c),u=Array(s),d=t[1];if(c===0){if(s!==0)throw Error(ry(s));let e=le(n,0),t=le(i,0);return[e,[0,d],t,l,u]}let f=!0,p=0,m=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d];if(n<0)throw Error(iy(t,n));if(n>=c)throw Error(ay(t,n,c));++m[n],f&&=n>=p,p=n}let h=!0;for(let e=0;e<c;++e){let t=m[e]===0;l[e]=t,h&&=!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(h&&f){let t=e,n=r;for(let e=0;e<s;++e)u[e]=e;return[t,[s,d],n,l,u]}else{let t=m[c-1],a=le(n,t*d),f=le(i,t),p=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d],i=p[n],o=(n===0?0:m[n-1])+i;p[n]++;for(let n=0;n<d;++n)a[o*d+n]=e[t*d+n];f[o]=r[t],u[t]=o}for(let e=0;e<c;++e)if(p[e]===0){let t=e===0?0:m[e-1];a[t*d+0]=e;for(let e=1;e<d;++e)a[t*d+e]=0;f[t]=o}return[a,[t,d],f,l,u]}}function sC(e,t,n,r,i){let a=k(r),o=t[0],s=i.length,c=[],l=1,u=-1;for(let e=0;e<s;++e){let t=i[e];if(t===-1){if(u!==-1)throw Error(oy(u,e));u=e,c.push(1)}else{if(t<0)throw Error(sy(e,t));l*=t,c.push(t)}}if(u!==-1){if(l<=0)throw Error(cy());let e=Math.trunc(a/l);if(l*e!==a)throw Error(ly(r,c));c[u]=e}if(k(c)!==a)throw Error(uy(r,c));let d=r.length,f=[];if(d>0){f[d-1]=1;for(let e=d-2;e>=0;--e)f[e]=f[e+1]*r[e+1]}let p=[];if(s>0){p[s-1]=1;for(let e=s-2;e>=0;--e)p[e]=p[e+1]*c[e+1]}let m=le(n,o*s);for(let t=0;t<o;++t){let n=0;for(let r=0;r<d;++r)n+=e[t*d+r]*f[r];for(let e=0;e<s;++e)m[t*s+e]=Math.trunc(n/p[e]),n%=p[e]}return[m,[o,s],c]}function cC(e,t,n,r,i,a=!1,o=0){let s=r.length,c=[t[0],e.length/t[0]],l=c[1],u=s>0?i[s-1]+1:0;if(u<0)throw Error(dy());let d=t.slice();d[0]=u;let f=le(n,d.reduce((e,t)=>e*t,1));if(s===0)return u>0&&f.fill(o),[f,d];if(u<=0)throw Error(dy());let p=0,m=1,h=0,g=i[p];for(;;){let t=0;if(m<s){if(t=i[m],g===t){++m;continue}if(g>=t)throw Error(fy())}if(g<0||g>=u)throw Error(py(g,u));g>h&&f.fill(o,h*l,g*l);for(let t=p;t<m;++t){let n=r[t];if(n<0||n>=c[0])throw Error(my(t,r[t],c[0]));for(let t=0;t<l;t++)f[g*l+t]+=e[n*l+t]}if(a)for(let e=0;e<l;e++)f[g*l+e]/=m-p;if(p=m,++m,h=g+1,g=t,m>s)break}return h<u&&f.fill(o,h*l,u*l),[f,d]}var lC=yS(e=>Math.sqrt(e)),uC=mS(((e,t)=>{let n=e-t;return n*n}));function dC(e,t,n,r){let i=Fo(e,t.dtype);for(let e=0;e<i.size;e++){let a=i.indexToLoc(e),o=Array(a.length);for(let e=0;e<o.length;e++)o[e]=a[e]*n[e]+r[e];i.set(t.get(...o),...a)}return i}var fC=class{constructor(e,t,n,r,i,a){this.separator=Ci(e),this.nGramWidths=t,this.leftPad=Ci(n),this.rightPad=Ci(r),this.padWidth=i,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,i,a){for(let o=0;o<i;++o){let s=this.getPadWidth(a),c=Math.max(0,s-o),l=Math.max(0,s-(i-(o+1))),u=a-(c+l),d=t+(c>0?0:o-s),f=0;f+=c*this.leftPad.length;for(let t=0;t<u;++t)f+=e[d+t].length;f+=l*this.rightPad.length;let p=c+l+u-1;f+=p*this.separator.length,n[r+o]=new Uint8Array(f);let m=n[r+o],h=0,g=e=>e.forEach(e=>m[h++]=e);for(let e=0;e<c;++e)g(this.leftPad),g(this.separator);for(let t=0;t<u-1;++t)g(e[d+t]),g(this.separator);if(u>0){g(e[d+u-1]);for(let e=0;e<l;++e)g(this.separator),g(this.rightPad)}else{for(let e=0;e<l-1;++e)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(e,t){let n=e.length,r=t.length;if(r>0){let e=t[0];if(e!==0)throw Error(`First split value must be 0, got ${e}`);for(let i=1;i<r;++i){let r=t[i]>=e;if(r&&=t[i]<=n,!r)throw Error(`Invalid split value ${t[i]}, must be in [${e}, ${n}]`);e=t[i]}if(e!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${e}`)}let i=r-1,a=le(`int32`,r);if(n===0||r===0){let e=Array(n);for(let e=0;e<=i;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=i;++e){let n=t[e]-t[e-1],r=0;this.nGramWidths.forEach(e=>{r+=this.getNumNGrams(n,e)}),this.preserveShort&&n>0&&r===0&&(r=1),a[e]=a[e-1]+r}let o=Array(a[i]);for(let n=0;n<i;++n){let r=t[n],i=a[n];if(this.nGramWidths.forEach(a=>{let s=t[n+1]-t[n],c=this.getNumNGrams(s,a);this.createNGrams(e,r,o,i,c,a),i+=c}),this.preserveShort&&i===a[n]){let a=t[n+1]-t[n];if(a===0)continue;let s=a+2*this.padWidth;this.createNGrams(e,r,o,i,1,s)}}return[o,a]}};function pC(e,t,n,r,i,a,o,s){return new fC(n,r,i,a,o,s).compute(e,t)}function mC(e,t,n,r){if(!e.length)return;if(t.length===0){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(t.length===1){let i=t[0],a=e.indexOf(i);for(;a!==-1;){let t=e.subarray(0,a);(!n||t.length!==0)&&r.push(t),e=e.subarray(a+1),a=e.indexOf(i)}(!n||e.length!==0)&&r.push(e);return}let i=0;for(let a=0;a<e.length+1;a++)if(a===e.length||t.indexOf(e[a])!==-1){let t=e.subarray(i,a);(!n||t.length!==0)&&r.push(t),i=a+1}}function hC(e,t,n){let r=e.length,i=[],a=0,o=0,s=Array(r);for(let c=0;c<r;++c){let r=i.length;mC(e[c],t,n,i);let l=i.length-r;s[c]=l,a+=l,o=Math.max(o,l)}let c=le(`int32`,a*2),l=Array(a),u=[r,o],d=0;for(let e=0;e<r;++e)for(let t=0;t<s[e];++t)c[d*2]=e,c[d*2+1]=t,l[d]=i[d],++d;return[c,l,u]}function gC(e,t){let n=le(`int32`,e.length);for(let r=0;r<e.length;++r)n[r]=vi(e[r]).modulo(t).getLowBitsUnsigned();return n}var _C=mS(((e,t)=>e-t));function vC(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let r=Fo(n,e.dtype);for(let t=0;t<r.values.length;++t){let n=r.indexToLoc(t),i=Array(e.rank);for(let t=0;t<i.length;t++)i[t]=n[t]%e.shape[t];let a=e.locToIndex(i);r.values[t]=e.values[a]}return r}var yC=(e,t)=>{let n=t.value-e.value;return n===0?e.index-t.index:n};function bC(e,t,n=0,r=e.length-1){for(;r>n;){if(r-n>600){let i=r-n+1,a=t-n+1,o=Math.log(i),s=.5*Math.exp(2*o/3),c=.5*Math.sqrt(o*s*(i-s)/i)*Math.sign(a-i/2);bC(e,t,Math.max(n,Math.floor(t-a*s/i+c)),Math.min(r,Math.floor(t+(i-a)*s/i+c)))}let i=e[t],a=n,o=r;for(w(e,n,t),yC(e[r],i)>0&&w(e,n,r);a<o;){for(w(e,a,o),a++,o--;yC(e[a],i)<0;)a+=1;for(;yC(e[o],i)>0;)--o}yC(e[n],i)===0?w(e,n,o):(o+=1,w(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}}function xC(e,t,n,r,i){let a=t[t.length-1],[o,s]=[e.length/a,a],c=ce(n,o*r),l=ce(`int32`,o*r);for(let t=0;t<o;t++){let n=t*s,a=e.subarray(n,n+s),o=Array(a.length);a.forEach((e,t)=>o[t]={value:e,index:t}),r<o.length&&(bC(o,r),o=o.slice(0,r)),i&&o.sort(yC);let u=t*r,d=c.subarray(u,u+r),f=l.subarray(u,u+r);for(let e=0;e<r;e++)d[e]=o[e].value,f[e]=o[e].index}let u=t.slice();return u[u.length-1]=r,[Fo(u,n,c),Fo(u,`int32`,l)]}function SC(e,t,n,r){let i=oe(t,n)[0],a=[1,n[0],1];for(let e=0;e<i;e++)a[0]*=n[e];a[1]=n[i];for(let e=i+1;e<n.length;e++)a[2]*=n[e];let o={},s=new Int32Array(n[i]),c=new zi(a,r,e),l=[],u=a[0]===1&&a[2]===1;for(let t=0;t<n[i];t++){let n;if(u)n=e[t].toString();else{let e=[];for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)e.push(c.get(n,t,r));n=e.join(`,`)}if(o[n]!==void 0)s[t]=o[n];else{let e=Object.keys(o).length;o[n]=e,s[t]=e,l.push(t)}}let d=a.slice();d[1]=Object.keys(o).length;let f=new zi(d,r);l.forEach((e,t)=>{for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)f.set(c.get(n,e,r),n,t,r)});let p=n.slice();return p[i]=d[1],{outputValues:f.values,outputShape:p,indices:s}}var{addImpl:CC,bincountImpl:wC,bincountReduceImpl:TC,castImpl:EC,ceilImpl:DC,concatImpl:OC,equalImpl:kC,expImpl:AC,expm1Impl:jC,floorImpl:MC,gatherNdImpl:NC,gatherV2Impl:PC,greaterImpl:FC,greaterEqualImpl:IC,lessImpl:LC,lessEqualImpl:RC,linSpaceImpl:zC,logImpl:BC,maxImpl:VC,maximumImpl:HC,minimumImpl:UC,multiplyImpl:WC,negImpl:GC,notEqualImpl:KC,prodImpl:qC,raggedGatherImpl:JC,raggedTensorToTensorImpl:YC,rangeImpl:XC,rsqrtImpl:ZC,scatterImpl:QC,sigmoidImpl:$C,simpleAbsImpl:ew,sliceImpl:tw,sparseFillEmptyRowsImpl:nw,sparseReshapeImpl:rw,sparseSegmentReductionImpl:iw,sqrtImpl:aw,stridedSliceImpl:ow,stringNGramsImpl:sw,stringSplitImpl:cw,stringToHashBucketFastImpl:lw,subImpl:uw,tileImpl:dw,topKImpl:fw,transposeImpl:pw,uniqueImpl:mw}=Object.freeze(Object.defineProperty({__proto__:null,addImpl:gS,bincountImpl:_S,bincountReduceImpl:vS,castImpl:hS,ceilImpl:bS,concatImpl:xS,equalImpl:SS,expImpl:CS,expm1Impl:wS,floorImpl:TS,gatherNdImpl:ES,gatherV2Impl:DS,greaterEqualImpl:kS,greaterImpl:OS,lessEqualImpl:jS,lessImpl:AS,linSpaceImpl:MS,logImpl:NS,maxImpl:PS,maximumImpl:FS,minimumImpl:IS,multiplyImpl:LS,negImpl:RS,notEqualImpl:zS,prodImpl:VS,raggedGatherImpl:YS,raggedTensorToTensorImpl:eC,rangeImpl:tC,rsqrtImpl:nC,scatterImpl:rC,sigmoidImpl:iC,simpleAbsImpl:pS,sliceImpl:aC,sparseFillEmptyRowsImpl:oC,sparseReshapeImpl:sC,sparseSegmentReductionImpl:cC,sqrtImpl:lC,squaredDifferenceImpl:uC,stridedSliceImpl:dC,stringNGramsImpl:pC,stringSplitImpl:hC,stringToHashBucketFastImpl:gC,subImpl:_C,tileImpl:vC,topKImpl:xC,transposeImpl:BS,uniqueImpl:SC},Symbol.toStringTag,{value:`Module`}));function hw(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(t=>`${e}.${t}`)}function gw(e,t){return t===1?[e]:hw(e,t)}function _w(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var vw=class{constructor(e){if(this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=Ix(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=gw(`rc`,this.rank),t=Dx(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let i=`${n===0?`r`:`rp1`}, ${r===0?`c`:`cp1`}`;for(let t=2;t<this.rank;t++)i=`${e[e.length-1-t]},`+i;t.push(i)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?`outShape`:this.outputShape[0]}`;let t=``;for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+=`||`);return t}getSetup(e){if(this.rank===1)return``;let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?`outShape`:this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}},yw=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec3`}],this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length);let n=``;for(let e=0;e<4;e++){let t=`thisRC = rc;`;e%2==1&&(t+=`thisRC.z += 1;`),e>1&&(t+=`thisRC.y += 1;`),n+=`
        ${t}
        ${e>0?`if(thisRC.y < rows && thisRC.z < cols){`:``}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?`}`:``}
      `}this.userCode=`
      ${bw(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Lb():Ib(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?`outShape[1]`:e[1]};
        int cols = ${this.enableShapeUniforms?`outShape[2]`:e[2]};

        ${n}

        setOutput(result);
      }
    `}};function bw(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?Fb([`r`,`c`,`d`],`inputShape`):Mb([`r`,`c`,`d`],e)}
      return ivec3(r, c, d);
    }
  `}var xw=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,n){let r=Ew(t,n),i=Dw(e,r,n);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let a=Cw(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let e=this.freeTextures[i].shift();return this.usedTextures[i].push(e),e}let o;return r===Ay.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===Ay.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===Ay.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===Ay.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===Ay.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,n,r){if(this.freeTextures==null)return;let i=Ew(n,r),a=Dw(t,i,r);a in this.freeTextures||(this.freeTextures[a]=[]);let o=Cw(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=N().get(`WEBGL_DELETE_TEXTURE_THRESHOLD`);s!==-1&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let c=this.usedTextures[a],l=c.indexOf(e);if(l<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);c.splice(l,1),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function Sw(e,t){let n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F||t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}function Cw(e,t,n,r,i){let a=ww(t,r),o;if(i){let[t,n]=Py(e[0],e[1]);o=t*n}else{let[t,n]=jy(e[0],e[1]);o=t*n}let s=Sw(n,a);return o*s}function ww(e,t){switch(e){case Ay.PACKED_2X2_FLOAT32:return $x(t);case Ay.PACKED_2X2_FLOAT16:return tS(t);case Ay.UNPACKED_FLOAT32:return qx(t);case Ay.UNPACKED_FLOAT16:return Yx(t);case Ay.PACKED_4X1_UNSIGNED_BYTE:return Zx(t);default:throw Error(`Unknown physical texture type ${e}`)}}function Tw(e){return N().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?Ay.PACKED_2X2_FLOAT32:Ay.UNPACKED_FLOAT32:e?Ay.PACKED_2X2_FLOAT16:Ay.UNPACKED_FLOAT16}function Ew(e,t){if(e===ky.UPLOAD)return Ay.PACKED_2X2_FLOAT32;if(e===ky.RENDER||e==null)return Tw(t);if(e===ky.DOWNLOAD||e===ky.PIXELS)return Ay.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function Dw(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}var Ow=class{constructor(e,t){this.variableNames=[`A`],this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},kw=`return x;`,Aw=`return abs(x);`,jw=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,Mw=`if (isnan(x)) return x;
  return (x < 0.0) ? 0.0 : x;
`,Nw=`if (isnan(x)) return x;
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Pw=`return x;`,Fw=`return 1.0 / (1.0 + exp(-1.0 * x));`,Iw=`return x;`,Lw=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Rw=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,zw=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Bw=`return 1.0 / (1.0 + exp(-1.0 * x));`,Vw=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}},Hw=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length);let t=e.length,n=gw(`rc`,t),r=Dx(t),i=_w(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(${a.join(`,`)})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${i});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}},Uw=zh,Ww=1e-7,Gw=1e-4,Kw={};function qw(e){return e in Kw||(Kw[e]={}),Kw[e]}var Jw=N().getNumber(`CPU_HANDOFF_SIZE_THRESHOLD`),Yw=600;function Xw(){return N().global.screen==null?1024:N().global.screen.height*N().global.screen.width*window.devicePixelRatio*Yw/1024/1024}var Zw=class e extends b{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!N().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);let t;e==null?(t=new dS(Ty(N().getNumber(`WEBGL_VERSION`))),this.binaryCache=qw(N().getNumber(`WEBGL_VERSION`)),this.gpgpuCreatedLocally=!0):(t=e instanceof dS?e:new dS(Ty(N().getNumber(`WEBGL_VERSION`),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new xw(this.gpgpu),this.numMBBeforeWarning=Xw(),this.texData=new y(this,vs())}nextDataId(){return e.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,t,n){if((N().getBool(`WEBGL_CHECK_NUMERICAL_PROBLEMS`)||N().getBool(`DEBUG`))&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:ky.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,i){if(N().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:ky.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let{values:t,dtype:n,complexTensorInfos:r,slice:i,shape:a,isPacked:o}=this.texData.get(e);if(i!=null){let t;t=o?new Vw(a,Pw):new Ow(a,Pw);let r=this.runWebGLProgram(t,[{dataId:e,shape:a,dtype:n}],n),i=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),i}if(t!=null)return this.convertAndCacheOnCPU(e);if(n===`string`)return t;let s=this.activeTimers!=null,c;s&&(c=Si());let l;return l=n===`complex64`?Rv(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.getValuesFromTexture(e),s&&(this.downloadWaitMs+=Si()-c),this.convertAndCacheOnCPU(e,l)}async read(e){if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:t,shape:n,slice:r,dtype:i,complexTensorInfos:a,isPacked:o}=this.texData.get(e);if(r!=null){let t;t=o?new Vw(n,Pw):new Ow(n,Pw);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:i}],i),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(t!=null)return this.convertAndCacheOnCPU(e);if(N().getBool(`DEBUG`)&&!N().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&N().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);let s=null,c;if(i!==`complex64`&&N().get(`WEBGL_BUFFER_SUPPORTED`)){c=this.decode(e);let t=this.texData.get(c.dataId);s=this.gpgpu.createBufferFromTexture(t.texture.texture,...Ny(n))}this.pendingRead.set(e,[]),i!==`complex64`&&await this.gpgpu.createAndWaitForFence();let l;if(i===`complex64`){let e=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),t=e[0],n=e[1];l=Rv(t,n)}else if(s==null)l=this.getValuesFromTexture(e);else{let e=k(n);l=this.gpgpu.downloadFloat32MatrixFromBuffer(s,e)}if(c!=null&&this.disposeIntermediateTensorInfo(c),s!=null){let e=this.gpgpu.gl;Y(e,()=>e.deleteBuffer(s))}let u=this.convertAndCacheOnCPU(e,l),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(e=>e(u)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&vs().removeDataId(e,this),this.pendingDeletes--),u}readToGPU(e,t={}){let{values:n,shape:r,slice:i,dtype:a,isPacked:o,texture:s}=this.texData.get(e);if(a===`complex64`)throw Error(`Does not support reading texture for complex64 dtype.`);if(i!=null){let n;n=o?new Vw(r,Pw):new Ow(r,Pw);let i=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:a}],a),s=this.readToGPU(i,t);return this.disposeIntermediateTensorInfo(i),s}if(s==null)throw Error(n==null?`There is no data on GPU or CPU.`:`Data is not on GPU but on CPU.`);let c=this.decode(e,t.customTexShape),l=vs().makeTensorFromTensorInfo(c),u=this.texData.get(c.dataId);return Object.assign({tensorRef:l},u.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>wi(e));return Fo(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return Fo(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!By(n))throw N().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),i=k(t);if(N().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){let n=this.decode(e),r=this.texData.get(n.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...Ny(t)).subarray(0,i);return this.disposeIntermediateTensorInfo(n),a}let a=N().getBool(`WEBGL_PACK`)&&r===!0,o=a?mb(t):t,s=a?new Bx(o):new zx(o),c=this.runWebGLProgram(s,[{shape:o,dtype:n,dataId:e}],`float32`),l=this.texData.get(c.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),u}timerAvailable(){return N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0}time(e){let t=this.activeTimers,n=[],r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let i=ee(this.activeTimers.map(e=>e.query)).filter(e=>e!=null),a=ee(this.activeTimers.map(e=>e.name)).filter(e=>e!=null);this.activeTimers=t,r&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0){let e=await Promise.all(i);o.kernelMs=T(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:a[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(`, `)}else o.kernelMs={error:`WebGL query timers are not supported in this environment.`};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:Si(),endMs:null}}endTimer(e){return N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=Si(),e)}async getQueryTime(e){if(N().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:i,isPacked:a,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,i,a)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=Jw){return N().getBool(`WEBGL_CPU_FORWARD`)&&e.every(e=>this.texData.get(e.dataId).texture==null&&k(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){Hr(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);let t=e.dataSync();return Uw(e.shape,t)}packedUnaryOp(e,t,n){let r=new Vw(e.shape,t),i=this.compileAndRun(r,[e],n);return vs().makeTensorFromTensorInfo(i)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!==`complex64`){let t=ew(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(N().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,Aw,e.dtype);let t=new Ow(e.shape,Aw),n=this.compileAndRun(t,[e]);return vs().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&j(n[0])){let i=n.map(e=>Ci(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return vs().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new Hw(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new vw(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[fb(e.shape),...pb(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new yw([fb(t),...pb(t)],n),a=[n],o=this.runWebGLProgram(i,[r],e.dtype,a,!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}decode(e,t){let{isPacked:n,shape:r,dtype:i}=this.texData.get(e);t!=null&&E(k(r)<=t[0]*t[1]*4,()=>`customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.`);let a=mb(r),o;o=n?new Rx(a):new Lx(a);let s=[t??Ny(a)];return{dtype:i,shape:r,dataId:this.runWebGLProgram(o,[{shape:a,dtype:i,dataId:e}],i,s,!0,t).dataId}}runWebGLProgram(e,t,n,r,i=!1,a){let o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===Oy.DENSE&&(s.texShape=(a??Ny(e.outputShape)).map(e=>e*2)),e.outTexUsage!=null&&(s.usage=e.outTexUsage),k(o.shape)===0)return s.values=ce(o.dtype,0),o;let c=[],l=t.map(t=>{if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);let n=this.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&k(t.shape)<=N().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!_b(n.shape,t.shape)){let e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),c.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);let u={shape:o.shape,texData:s,isUniform:!1},d=Fx(e,l,u),f=this.getAndSaveBinary(d,()=>jx(this.gpgpu,e,l,u)),p=this.activeTimers!=null,m;p&&(m=this.startTimer()),N().get(`ENGINE_COMPILE_ONLY`)||Px(this.gpgpu,f,l,u,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));let h=N().get(`WEBGL_FLUSH_THRESHOLD`);if(h>0){let e=Si();e-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!N().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&i===!1){let e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,i=!1){return n||=t[0].dtype,this.runWebGLProgram(e,t,n,r,i)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||=(N().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)}floatPrecision(){return this.floatPrecisionValue??=ys(()=>{if(!N().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){let e=N().getBool(`DEBUG`);N().set(`DEBUG`,!1);let t=this.abs(q(1e-8)).dataSync()[0];if(N().set(`DEBUG`,e),t>0)return 32}return 16}),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?Ww:Gw}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:r,values:i,texture:a,usage:o,isPacked:s}=t;if(a!=null)return;let c=this.activeTimers!=null,l;c&&(l=Si());let u=t.texShape;if(u??(u=hb(n,s),t.texShape=u),i!=null){let e=mb(n),a,o=u[1],d=u[0],f=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(s||!f)&&([o,d]=Py(u[0],u[1])),a=s?new Hx(e,f):new Vx(e,f);let p=f?[d,o]:u,m=this.makeTensorInfo(p,r),h=this.texData.get(m.dataId);f?h.usage=ky.PIXELS:h.usage=ky.UPLOAD,h.texShape=p,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),o,d,i);let g=[[d,o]],_=this.runWebGLProgram(a,[m],r,g,!0),v=this.texData.get(_.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,N().get(`ENGINE_COMPILE_ONLY`)?this.disposeData(_.dataId):(t.texture=v.texture,t.values=null,this.texData.delete(_.dataId)),this.disposeIntermediateTensorInfo(m),c&&(this.uploadWaitMs+=Si()-l)}else t.texture=this.acquireTexture(u,o,r,s)}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return this.releaseGPUData(e),t!=null&&(n.values=Qw(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*me(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(n)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await mv(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Ky(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error(`Failed to compile fragment shader.`)):Error(`Failed to link vertex and fragment shaders.`);return!0}getUniformLocations(){for(let[,e]of Object.entries(this.binaryCache)){let{uniformLocations:t,customUniformLocations:n,infLoc:r,nanLoc:i,inShapesLocations:a,inTexShapesLocations:o,outShapeLocation:s,outShapeStridesLocation:c,outTexShapeLocation:l}=Mx(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=i,e.inShapesLocations=a,e.inTexShapesLocations=o,e.outShapeLocation=s,e.outShapeStridesLocation=c,e.outTexShapeLocation=l}}};Zw.nextDataId=0;function Qw(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){let n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}else throw Error(`Unknown dtype ${t}`)}ma()&&Ss(`webgl`,()=>new Zw,2);var $w=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,eT=class{constructor(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=V(t,n),this.enableShapeUniforms=Ix(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}},tT=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,nT=class{constructor(e,t,n,r=!1){this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=V(t,n);let i=this.outputShape.length;this.enableShapeUniforms=Ix(i);let a=``;if(r)if(i===0||k(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${Dx(i)} coords = getOutputCoords();
        `,i===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=gw(`coords`,i);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= outShape[${i} - 2];
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= outShape[${i} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= ${this.outputShape[i-2]};
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= ${this.outputShape[i-1]};
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
        ${a}

        setOutput(result);
      }
    `}};function rT(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var iT={kernelName:Jt,backendName:`webgl`,kernelFunc:rT};function aT(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.makeTensorInfo(r.shape,`complex64`),o=n.texData.get(a.dataId);return o.complexTensorInfos={real:rT({inputs:{x:r},backend:n}),imag:rT({inputs:{x:i},backend:n})},a}var oT={kernelName:ct,backendName:`webgl`,kernelFunc:aT},sT=`return (a < 0.) ? b * a : a;`,cT=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function lT(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r,o=n.makeTensorInfo([],`float32`,yi(a,`float32`)),s=N().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new nT(cT,i.shape,o.shape):new eT(sT,i.shape,o.shape),c=n.runWebGLProgram(s,[i,o],`float32`);return n.disposeIntermediateTensorInfo(o),c}var uT={kernelName:en,backendName:`webgl`,kernelFunc:lT},dT=`return (a < 0.) ? b * a : a;`,fT=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function pT(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t,a=N().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new nT(fT,r.shape,i.shape):new eT(dT,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],`float32`)}var mT={kernelName:In,backendName:`webgl`,kernelFunc:pT};function Z({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:i,backend:a})=>{let{x:o}=i,s=a,c=r||o.dtype;if(s.shouldExecuteOnCPU([o])&&n!=null){let e=n(s.texData.get(o.dataId).values,c);return s.makeTensorInfo(o.shape,c,e)}let l=N().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)&&t!=null,u;return u=l?new Vw(o.shape,t):new Ow(o.shape,e),s.runWebGLProgram(u,[o],c)}}function hT({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:i,dtype:a}){return({inputs:o,backend:s})=>{let{a:c,b:l}=o,u=s;if(r&&c.dtype===`complex64`){let t=u.texData.get(c.dataId),n=u.texData.get(l.dataId),[r,i]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,i={dataId:n.dataId,dtype:n.dtype,shape:c.shape},a={dataId:r.dataId,dtype:r.dtype,shape:l.shape},o=new eT(e,c.shape,l.shape);return u.runWebGLProgram(o,[i,a],$i(n.dtype,r.dtype))}),a=aT({inputs:{real:r,imag:i},backend:u});return u.disposeIntermediateTensorInfo(r),u.disposeIntermediateTensorInfo(i),a}let d=a||$i(c.dtype,l.dtype);if((c.dtype===`string`||l.dtype===`string`||u.shouldExecuteOnCPU([c,l]))&&i!=null){let e=u.texData.get(c.dataId).values,t=u.texData.get(l.dataId).values,n=c.dtype===`string`?yy(e):e,r=c.dtype===`string`?yy(t):t,[a,o]=i(c.shape,l.shape,n,r,d),s=u.makeTensorInfo(o,d),f=u.texData.get(s.dataId);return f.values=a,s}let f=N().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)&&t!=null,p;return p=f?new nT(t,c.shape,l.shape,n):new eT(e,c.shape,l.shape),u.runWebGLProgram(p,[c,l],d)}}function gT(e,t=!1){if(e===`linear`)return t?Iw:kw;if(e===`relu`)return t?Rw:Mw;if(e===`elu`)return t?Lw:jw;if(e===`relu6`)return t?zw:Nw;if(e===`prelu`)return t?fT:dT;if(e===`leakyrelu`)return t?cT:sT;if(e===`sigmoid`)return t?Bw:Fw;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var _T=class{constructor(e,t,n,r=!1,i=!1,a=!1,o=null,s=!1,c=!1){this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=Ix(this.outputShape.length);let l=r?e[1]:e[2],u=Math.ceil(l/2),d=r?`i * 2, rc.y`:`rc.y, i * 2`,f=i?`rc.z, i * 2`:`i * 2, rc.z`,p=r?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],m=i?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],h=``,g=``;o&&(h=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:c?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,g=`result = activation(result);`);let _=a?`result += getBiasAtOutCoords();`:``;a&&this.variableNames.push(`bias`),s&&this.variableNames.push(`preluActivationWeights`),c&&this.variableNames.push(`leakyreluAlpha`);let v=`rc.x`,y=`rc.x`;e[0]<t[0]?v=`int(min(float(rc.x), ${e[0]-1}.))`:t[0]<e[0]&&(y=`int(min(float(rc.x), ${t[0]-1}.))`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${u}; i++) {
          int batchA = ${v};
          int batchB = ${y};
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${_}

        ${g}

        setOutput(result);
      }
    `}},vT={REAL:`return areal * breal - aimag * bimag;`,IMAG:`return areal * bimag + aimag * breal;`},yT=class{constructor(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=V(t,n),this.userCode=`
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
    `}},bT=`return a * b;`;function xT(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=$i(r.dtype,i.dtype);if(r.dtype===`complex64`){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),a=new yT(vT.REAL,r.shape,i.shape),o=new yT(vT.IMAG,r.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],c=n.runWebGLProgram(a,s,`float32`),l=n.runWebGLProgram(o,s,`float32`),u=aT({inputs:{real:c,imag:l},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),u}if(n.shouldExecuteOnCPU([r,i])){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),[o,s]=WC(r.shape,i.shape,e.values,t.values,a),c=n.makeTensorInfo(s,a),l=n.texData.get(c.dataId);return l.values=o,c}let o;return o=N().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new nT(bT,r.shape,i.shape):new eT(bT,r.shape,i.shape),n.runWebGLProgram(o,[r,i],a)}var ST={kernelName:Tn,backendName:`webgl`,kernelFunc:xT};function CT(e,t,n){let r=[fb(e.shape),...pb(e.shape)],i={dtype:e.dtype,shape:r,dataId:e.dataId},a=new yw([fb(t),...pb(t)],r),o=[r],s=n.runWebGLProgram(a,[i],e.dtype,o,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}function Q(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=n,s=k(i.shape),c=ae(a,s),l=k(c);E(s===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=o.texData.get(i.dataId);return u.isPacked&&!_b(i.shape,c)&&!(u.texture!==null&&_b(u.shape,c))?CT(i,c,o):(o.incRef(i.dataId),{dataId:i.dataId,shape:c,dtype:i.dtype})}var wT={kernelName:Wn,backendName:`webgl`,kernelFunc:Q},TT=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=Math.floor(n/4)*4,s=n%4,c=`sumValue += dot(values, ones);`;if(t!=null){let e=1/t;c=`sumValue += dot(values * ${te(e)?e.toPrecision(2):e}, ones);`}let l=``;i%n>0&&(l=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${o};
        if (${s===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${s===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${s===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}},ET=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);let l=Math.floor(n/4)*4,u=n%4,d=`
      if (${t===`sum`}) {
        sumValue += dot(values, ones);
      } else if (${t===`prod`}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${t===`min`} || ${t===`max`}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);let p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${l};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}};function DT(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let n=t.length?t[t.length-1].outSize:e[1],r=Cv(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function OT(e,t,n,r){let i=DT(e.shape),a=e;for(let o=0;o<i.length;o++){let{inSize:s,windowSize:c,outSize:l}=i[o],u,d;u=n===`mean`?o===0?new TT({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},s):new TT({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l}):new ET({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},n),d=a,a=r.runWebGLProgram(u,[a],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return a}var kT=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=Dx(this.rank),i=AT(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${i}));
    }
    `}};function AT(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}var jT=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=Dx(this.rank),i=hw(`rc`,this.rank),a=Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=i[e];let o=`vec2(${a.slice(-2).join()})`,s=`++${i[this.rank-1]} < ${n[this.rank-1]}`,c=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${s}) {
        result[1] = ${c};
      }
      --${i[this.rank-1]};
      if(++${i[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${c};
        if(${s}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};function MT(e,t,n){let r=N().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new jT(e.shape,t):new kT(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}function NT(e,t,n,r){let i=t,a=e.shape.length,o=oe(i,e.shape),s=o,c=qu(s,a),l=c!=null,u=e;l&&(u=MT(e,c,r),s=Yu(s.length,a)),Ku(`sum`,s,a);let[d,f]=Wu(u.shape,s),p=d;n&&(p=Gu(d,o));let m=k(f),h=k(e.shape)/m,g=Q({inputs:{x:u},attrs:{shape:[h,m]},backend:r}),_=OT(g,ea(e.dtype),`sum`,r),v=Q({inputs:{x:_},attrs:{shape:p},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(_),l&&r.disposeIntermediateTensorInfo(u),v}function PT(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;return NT(i,a,o,n)}var FT={kernelName:ur,backendName:`webgl`,kernelFunc:PT};function IT(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{perm:a}=r,o=n,s=i.shape.length,c=Array(s);for(let e=0;e<c.length;e++)c[e]=i.shape[a[e]];let l;if(o.shouldExecuteOnCPU([i])){let e=o.texData.get(i.dataId).values,t=pw(e,i.shape,i.dtype,a,c);l=o.makeTensorInfo(c,i.dtype);let n=o.texData.get(l.dataId);n.values=t}else l=MT(i,a,o);return l}var LT={kernelName:jr,backendName:`webgl`,kernelFunc:IT},RT=1e3;function zT({a:e,b:t,transposeA:n,transposeB:r,backend:i,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:c=null}){let l=e.shape.length,u=t.shape.length,d=n?e.shape[l-2]:e.shape[l-1],f=r?t.shape[u-1]:t.shape[u-2],p=n?e.shape[l-1]:e.shape[l-2],m=r?t.shape[u-2]:t.shape[u-1],h=e.shape.slice(0,-2),g=t.shape.slice(0,-2),_=k(h),v=k(g),y=V(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,m]);E(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let b=n?[_,d,p]:[_,p,d],x=r?[v,m,f]:[v,f,m],S=Q({inputs:{x:e},backend:i,attrs:{shape:b}}),C=Q({inputs:{x:t},backend:i,attrs:{shape:x}}),w=[S,C],T=Math.max(_,v),D=n?S.shape[1]:S.shape[2],O=a!=null,ee=o!=null,A=c===`leakyrelu`,te=c==null?null:gT(c,!0),ne=O||ee||A||te!=null,re;if((p===1||m===1)&&D>RT&&ne===!1){let e=S,t=C;n&&(e=IT({inputs:{x:S},backend:i,attrs:{perm:[0,2,1]}}),w.push(e)),r&&(t=IT({inputs:{x:C},backend:i,attrs:{perm:[0,2,1]}}),w.push(t));let a=m!==1,o=m===1,s=e;a&&(s=Q({inputs:{x:e},backend:i,attrs:{shape:[T,D,1]}}),w.push(s));let c=m===1?2:1,l=t;o&&(l=Q({inputs:{x:t},backend:i,attrs:{shape:[T,1,D]}}),w.push(l));let u=xT({inputs:{a:s,b:l},backend:i});re=PT({inputs:{x:u},backend:i,attrs:{axis:c,keepDims:!0}}),w.push(u)}else{let c=$i(e.dtype,t.dtype),l=new _T(b,x,[T,p,m],n,r,O,te,ee,A),u=[S,C];if(a!=null&&u.push(a),ee&&u.push(o),A){let e=i.makeTensorInfo([],`float32`,yi(s,`float32`));u.push(e),w.push(e)}re=i.runWebGLProgram(l,u,c)}let ie=Q({inputs:{x:re},backend:i,attrs:{shape:y}});w.push(re);for(let e of w)i.disposeIntermediateTensorInfo(e);return ie}function BT(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r;return zT({a:i,b:a,transposeA:c,transposeB:l,backend:n,bias:o,preluActivationWeights:s,leakyreluAlpha:d,activation:u})}var VT={kernelName:zr,backendName:`webgl`,kernelFunc:BT},HT=`return abs(x);`;function UT(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!==`complex64`){let e=ew(n.texData.get(r.dataId).values);return n.makeTensorInfo(r.shape,r.dtype,e)}let i;return i=N().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new Vw(r.shape,HT):new Ow(r.shape,HT),n.runWebGLProgram(i,[r],r.dtype)}var WT={kernelName:ze,backendName:`webgl`,kernelFunc:UT},GT={kernelName:Be,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`})},KT={kernelName:F,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`})},qT=`return a + b;`,JT={kernelName:Ve,backendName:`webgl`,kernelFunc:hT({opSnippet:qT,packedOpSnippet:qT,supportsComplex:!0,cpuKernelImpl:CC})},YT=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}},XT=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}};function ZT(e){let{inputs:t,backend:n}=e,r=t;if(r.length===1)return rT({inputs:{x:r[0]},backend:n});if(r.length>N().get(`WEBGL_MAX_TEXTURES_IN_SHADER`)){let e=Math.floor(r.length/2);return ZT({inputs:[ZT({inputs:r.slice(0,e),backend:n}),ZT({inputs:r.slice(e),backend:n})],backend:n})}let i=r.map(e=>e.dtype).reduce((e,t)=>$i(e,t)),a=r.map(e=>e.shape),o=N().getBool(`WEBGL_PACK`)?new XT(r[0].shape,a):new YT(r[0].shape,a);return n.runWebGLProgram(o,r,i)}var QT={kernelName:He,backendName:`webgl`,kernelFunc:ZT};function $T(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=oe(a,i.shape),l=c,u=qu(l,s),d=i;u!=null&&(d=IT({inputs:{x:i},backend:n,attrs:{perm:u}}),l=Yu(l.length,s)),Ku(`all`,l,s);let[f,p]=Wu(d.shape,l),m=k(p),h=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=OT(h,h.dtype,`all`,n),_;if(o){let e=Gu(f,c);_=Q({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=Q({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var eE={kernelName:Ue,backendName:`webgl`,kernelFunc:$T};function tE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=oe(a,i.shape),l=c,u=qu(l,s),d=i;u!=null&&(d=IT({inputs:{x:i},backend:n,attrs:{perm:u}}),l=Yu(l.length,s)),Ku(`any`,l,s);let[f,p]=Wu(d.shape,l),m=k(p),h=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=OT(h,h.dtype,`any`,n),_;if(o){let e=Gu(f,c);_=Q({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=Q({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var nE={kernelName:We,backendName:`webgl`,kernelFunc:tE},rE=class{constructor(e,t,n){this.variableNames=[`A`];let{windowSize:r,batchSize:i,outSize:a}=e;n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,a];let o=t===`max`?`>`:`<`,s=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${s};
          float candidate = getA(batch, inIdx);
          if (candidate ${o} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}},iE=class{constructor(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,E(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);let o=this.outputShape,s=o.length,c=Dx(s),l=gw(`coords`,s),u,d;if(a===1){d=s+1;let e=Dx(d);u=`
        ${e} sourceLocR = ${e}(${l.join()}, 0);
        ++${l[s-1]};
        ${e} sourceLocG = ${e}(${l.join()}, 0);
        ++${l[s-2]};
        ${e} sourceLocA = ${e}(${l.join()}, 0);
        --${l[s-1]};
        ${e} sourceLocB = ${e}(${l.join()}, 0);
        --${l[s-2]};`}else d=s,u=`
        ${c} sourceLocR = coords;
        ++${l[s-1]};
        ${c} sourceLocG = coords;
        ++${l[s-2]};
        ${c} sourceLocA = coords;
        --${l[s-1]};
        ${c} sourceLocB = coords;
        --${l[s-2]};`;let f=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,d),p=`.`+f[d-1],m=f.map(e=>`int `+e),h=gw(`sourceLocR`,d-1).concat(`inIdx.r`),g=gw(`sourceLocG`,d-1).concat(`inIdx.g`),_=gw(`sourceLocB`,d-1).concat(`inIdx.b`),v=gw(`sourceLocA`,d-1).concat(`inIdx.a`),y=n===`max`?`greaterThan`:`lessThan`,b=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${_.join()}),
                             getBestIndicesAChannel(${v.join()})));`,x=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${_.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,S=r?``:`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${S}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[s-1]} < ${o[s-1]-1};
        bool hasNextRow = ${l[s-2]} < ${o[s-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${x};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${b}
          vec4 candidate = ${x};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function aE(e,t,n,r=null){let i=t.shape[0],a=t.shape[1];r!=null&&(i=r.shape[0],a=r.shape[1]);let o=Cv(a),s=new rE({windowSize:o,inSize:a,batchSize:i,outSize:Math.ceil(a/o)},n,r==null),c=[t];r!=null&&c.push(r);let l=e.runWebGLProgram(s,c,`int32`);if(l.shape[1]===1)return l;let u=aE(e,t,n,l);return e.disposeIntermediateTensorInfo(l),u}function oE(e,t,n,r=null){let i=r==null?t.shape:r.shape,a=i[i.length-1],o=new iE(i,Cv(a),n,r==null),s=r==null?[t]:[t,r],c=e.runWebGLProgram(o,s,`int32`);if(c.shape.length===t.shape.length){let r=oE(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function sE(e,t,n,r){let i=[n];if(Ku(`arg`+r.charAt(0).toUpperCase()+r.slice(1),i,t.shape.length),!N().getBool(`WEBGL_PACK_REDUCE`)||t.shape.length<=2){let n=[],a=e.texData.get(t.dataId),o=a!==null&&a.isPacked,s=t;o&&(s=e.unpackTensor(t),n.push(s));let[c,l]=Wu(s.shape,i),u=k(l),d=Q({inputs:{x:s},backend:e,attrs:{shape:[-1,u]}});n.push(d);let f=aE(e,d,r);n.push(f);let p=Q({inputs:{x:f},backend:e,attrs:{shape:c}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return oE(e,t,r)}function cE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=oe(a,i.shape),s=qu(o,i.shape.length),c=i,l=[];s!=null&&(c=IT({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=Yu(o.length,c.shape.length)),Ku(`argMax`,[o[0]],c.shape.length);let u=sE(n,c,o[0],`max`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var lE={kernelName:I,backendName:`webgl`,kernelFunc:cE};function uE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=oe(a,i.shape),s=qu(o,i.shape.length),c=i,l=[];s!=null&&(c=IT({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=Yu(o.length,c.shape.length)),Ku(`argMin`,[o[0]],c.shape.length);let u=sE(n,c,o[0],`min`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var dE={kernelName:Ge,backendName:`webgl`,kernelFunc:uE},fE={kernelName:Ke,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`})},pE={kernelName:qe,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));`})},mE={kernelName:Je,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return atan(x);
`})},hE={kernelName:Xe,backendName:`webgl`,kernelFunc:hT({opSnippet:$w+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+tT+`
  return result;
`})},gE={kernelName:Ye,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`})},_E=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let m=t===`avg`,h=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,_=`0.0`;if(m||(_=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${f}, ${p});

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

          for (int wR = 0; wR < ${u};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
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
                minMaxPosition = ${r?i?h:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / count`);let y=Math.floor(a/4)*4,b=a%4,x=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${_};
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
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${x}
          }

          int xC = xCCorner + ${y};
          if (${b===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${x}
          }
        }
        setOutput(${v});
      }
    `}},vE=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideDepth,s=e.strideHeight,c=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,h=e.padInfo.front,g=e.padInfo.top,_=e.padInfo.left;this.outputShape=e.outShape;let v=t===`avg`,y=`0.0`;if(v||(y=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${c});
        const ivec3 pads = ivec3(${h}, ${g}, ${_});

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

          for (int wD = 0; wD < ${f};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
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
                  minMaxPosition = ${r?i?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(b=`avgValue / count`);let x=Math.floor(a/4)*4,S=a%4,C=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${c});
      const ivec3 pads = ivec3(${h}, ${g}, ${_});
      const float initializationValue = ${y};
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
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${x};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${C}
            }
          }
          setOutput(${b});
        }
      }
    `}};function yE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;Ab(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;E(tl(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Vc(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&A(l.inShape,l.outShape))return rT({inputs:{x:i},backend:n});let u=new _E(l,`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var bE={kernelName:Ze,backendName:`webgl`,kernelFunc:yE};function xE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r,u=new vE(Hc(i.shape,a,o,[1,1,1],s,c,l),`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var SE={kernelName:$e,backendName:`webgl`,kernelFunc:xE},CE=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${u});
      const float avgMultiplier = float(${d});

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
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

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
    `}},wE=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${h});
      const float avgMultiplier = float(${g});

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

        for (int wD = 0; wD < ${u};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${i}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

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
    `}};function TE(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=new wE(Hc(o.shape,s,c,[1,1,1],l,u));return n.runWebGLProgram(d,[i],o.dtype)}var EE={kernelName:et,backendName:`webgl`,kernelFunc:TE};function DE(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;Ab([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=new CE(Vc(o.shape,s,c,1,l));return n.runWebGLProgram(u,[i],o.dtype)}var OE={kernelName:Qe,backendName:`webgl`,kernelFunc:DE};function kE(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;return zT({a:i,b:a,transposeA:o,transposeB:s,backend:n})}var AE={kernelName:tt,backendName:`webgl`,kernelFunc:kE},jE=class{constructor(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],V(e,t),V(e,n);let o=`0.0`;r!=null&&(V(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`1.0`;i!=null&&(V(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}},ME=class{constructor(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],V(e,t),V(e,n);let o=`vec4(0.0)`;r!=null&&(V(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`vec4(1.0)`;i!=null&&(V(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}},NE={kernelName:Ut,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:i,variance:a,offset:o,scale:s}=e;E(i.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),E(o==null||i.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),E(s==null||i.shape.length===s.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let{varianceEpsilon:c}=n;c??=.001;let l=[r,i,a],u=null;o!=null&&(u=o.shape,l.push(o));let d=null;s!=null&&(d=s.shape,l.push(s));let f=N().getBool(`WEBGL_PACK_NORMALIZATION`)?new ME(r.shape,i.shape,a.shape,u,d,c):new jE(r.shape,i.shape,a.shape,u,d,c);return t.runWebGLProgram(f,l,l[0].dtype)}},PE=class{constructor(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;let t=Dx(this.rank);this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let n=IE(this.rank),r;r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${e.map((e,t)=>`sourceLoc.${FE[t]} = start[${t}] + coords.${FE[t]};`).join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${n}));
      }
    `}},FE=[`x`,`y`,`z`,`w`,`u`,`v`];function IE(e){if(e===1)return`sourceLoc`;if(e<=6)return FE.slice(0,e).map(e=>`sourceLoc.`+e).join(`,`);throw Error(`Slicing for rank ${e} is not yet supported`)}var LE=class{constructor(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let t=Dx(this.rank),n=gw(`coords`,this.rank),r=gw(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(${r.slice(-2).join()})`,a=`getChannel(getSource(${r.join()}), ${i})`,o=`
      result.x = ${a};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${a};
        --${r[this.rank-1]};
      }
    `,s=this.rank===1?``:`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${a};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${a};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}};function RE(e,t,n,r){let i=r.texData.get(e.dataId),a=r.makeTensorInfo(n,e.dtype),o=r.texData.get(a.dataId);Object.assign(o,i),o.refCount=1,o.shape=n,o.dtype=e.dtype;let s=rc(t,M(e.shape));i.slice&&(s+=i.slice.flatOffset),o.slice={flatOffset:s,origDataId:i.slice&&i.slice.origDataId||e.dataId};let c=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,c+1),a}function zE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r,[s,c]=ic(i,a,o);if(Ws(i,s,c),k(c)===0)return n.makeTensorInfo(c,i.dtype,[]);if(n.shouldExecuteOnCPU([i])||i.dtype===`string`){let e=tw(n.texData.get(i.dataId).values,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,e)}let{isPacked:l}=n.texData.get(i.dataId),u=nc(i.shape,s,c);if(l||!u){let e=N().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new LE(c):new PE(c),t=[s];return n.runWebGLProgram(e,[i],i.dtype,t)}return n.uploadToGPU(i.dataId),RE(i,s,c,n)}var BE={kernelName:rr,backendName:`webgl`,kernelFunc:zE},VE={kernelName:nt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;E(i.shape.length<=4,()=>`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=Tv(i.shape,a,s),l=Ev(c.length,a.length),u=Dv(i.shape,a,s),d=Ov(o,a.length),f=kv(u,o,a.length),p=[],m=Q({inputs:{x:i},backend:n,attrs:{shape:c}}),h=IT({inputs:{x:m},backend:n,attrs:{perm:l}}),g=Q({inputs:{x:h},backend:n,attrs:{shape:u}}),_=zE({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(h),p.push(g),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}};function HE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=wC(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,s)}var UE={kernelName:rt,backendName:`webgl`,kernelFunc:HE};function WE(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.readSync(r.dataId),o=n.readSync(i.dataId),s=V(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var GE={kernelName:it,backendName:`webgl`,kernelFunc:WE},KE=hT({opSnippet:`return float(a != b);`,cpuKernelImpl:KC,dtype:`bool`}),qE={kernelName:Dn,backendName:`webgl`,kernelFunc:KE};function JE(e){let{inputs:t,backend:n}=e,{input:r}=t;return rT({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}var YE={kernelName:Vn,backendName:`webgl`,kernelFunc:JE},XE=`return float(int(x));`;function ZE(e,t){let n=new Ow(e.shape,XE),r=t.runWebGLProgram(n,[e],`int32`);return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}function QE(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return rT({inputs:{x:i},backend:n});let e=kf(i.shape),t=QE({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=aT({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=JE({inputs:{input:i},backend:n}),t=QE({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!fe(i.dtype,a)){let e=rT({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(n.shouldExecuteOnCPU([i])){let e=n.texData.get(i.dataId).values,[t,r,o]=EC(e,i.shape,i.dtype,a);return n.makeTensorInfo(t,r,o)}if(a===`int32`)return ZE(i,n);if(a===`bool`){let e=n.makeTensorInfo([],`bool`,ce(`bool`,1)),t=KE({inputs:{a:i,b:e},backend:n});return n.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${a}`)}var $E={kernelName:at,backendName:`webgl`,kernelFunc:QE},eD=`return ceil(x);`,tD={kernelName:ot,backendName:`webgl`,kernelFunc:Z({opSnippet:eD,packedOpSnippet:eD,cpuKernelImpl:DC})},nD=class{constructor(e){this.variableNames=[`A`],this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}},rD=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function iD(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{clipValueMin:a,clipValueMax:o}=r,s;s=N().getBool(`WEBGL_PACK_CLIP`)?new rD(i.shape):new nD(i.shape);let c=[[a],[o]];return n.runWebGLProgram(s,[i],i.dtype,c)}var aD={kernelName:st,backendName:`webgl`,kernelFunc:iD},oD=class{constructor(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
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
    `}};function sD(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function cD(e){let{inputs:t,backend:n}=e,{x:r}=t,i=n.texData.get(r.dataId),a=new oD(r.shape),o=[sD(r,i.complexTensorInfos.real),sD(r,i.complexTensorInfos.imag)];return n.runWebGLProgram(a,o,o[0].dtype)}var lD={kernelName:lt,backendName:`webgl`,kernelFunc:cD},uD=class{constructor(e){this.outputShape=[],this.outputShape=gv(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,i=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${i}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}},dD=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=gv(e,t);let n=this.outputShape,r=n.length,i=Dx(r),a=gw(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let n=1;n<s.length;n++)s[n]=s[n-1]+e[n][t];let c=o[t],l=o.slice(-2),u=o.join(),d=`if (${c} < ${s[0]}) {
        return getChannel(
            getT0(${u}), vec2(${l.join()}));
        }`;for(let e=1;e<s.length;e++){let t=s[e-1];d+=`
        if (${c} < ${s[e]}  && ${c} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${fD(o,c,t)}),
            vec2(${fD(l,c,t)}));
        }`}let f=s.length,p=s[s.length-1];d+=`
        return getChannel(
          getT${f}(${fD(o,c,p)}),
          vec2(${fD(l,c,p)}));`,this.userCode=`
      float getValue(${o.map(e=>`int `+e)}) {
        ${d}
      }

      void main() {
        ${i} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[r-1]} = ${a[r-1]} + 1;
        if (${a[r-1]} < ${n[r-1]}) {
          result.g = getValue(${a});
        }

        ${a[r-2]} = ${a[r-2]} + 1;
        if (${a[r-2]} < ${n[r-2]}) {
          result.a = getValue(${a});
        }

        ${a[r-1]} = ${a[r-1]} - 1;
        if (${a[r-2]} < ${n[r-2]} &&
            ${a[r-1]} < ${n[r-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}};function fD(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}function pD(e){let{inputs:t,backend:n}=e,{input:r}=t;return rT({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}var mD={kernelName:Xt,backendName:`webgl`,kernelFunc:pD};function hD(e,t,n){let r=e[0].dtype;if(r===`complex64`){let r=e.map(e=>JE({inputs:{input:e},backend:n})),i=e.map(e=>pD({inputs:{input:e},backend:n})),a=hD(r,t,n),o=hD(i,t,n),s=aT({inputs:{real:a,imag:o},backend:n});return r.forEach(e=>n.disposeIntermediateTensorInfo(e)),i.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),s}let i=n.shouldExecuteOnCPU(e);if(r===`string`&&(i=!0),i){let i=e.map(e=>{let r=[-1,k(e.shape.slice(t))];return Q({inputs:{x:e},backend:n,attrs:{shape:r}})}),a=OC(i.map(e=>({vals:n.readSync(e.dataId),shape:e.shape})),gv(i.map(e=>e.shape),1),r,i[0].shape[0]===1),o=gv(e.map(e=>e.shape),t),s=n.makeTensorInfo(o,r,a);return i.forEach(e=>n.disposeIntermediateTensorInfo(e)),s}let a=N().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`);if(e.length>a){let r=[];for(let i=0;i<e.length;i+=a){let o=e.slice(i,i+a);r.push(hD(o,t,n))}let i=hD(r,t,n);for(let e of r)n.disposeIntermediateTensorInfo(e);return i}if(N().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&e[0].shape.length>1){let i=new dD(e.map(e=>e.shape),t);return n.runWebGLProgram(i,e,r)}let{tensors2D:o,outShape:s}=gD(e,t,n),c=new uD(o.map(e=>e.shape)),l=n.runWebGLProgram(c,o,r);o.forEach(e=>n.disposeIntermediateTensorInfo(e));let u=Q({inputs:{x:l},attrs:{shape:s},backend:n});return n.disposeIntermediateTensorInfo(l),u}function gD(e,t,n){let r=gv(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>Q({inputs:{x:e},attrs:{shape:[-1,k(e.shape.slice(t))]},backend:n})),outShape:r}}function _D(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=oe(i,t[0].shape)[0];hv(t.map(e=>e.shape),a);let o=gv(t.map(e=>e.shape),a);if(k(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>k(e.shape)>0);return s.length===1?rT({inputs:{x:s[0]},backend:n}):hD(s,a,n)}var vD={kernelName:ut,backendName:`webgl`,kernelFunc:_D},yD=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let a=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,h=e.dataFormat===`channelsLast`,g=h?1:2,_=h?2:3,v=h?3:1,y=``,b=``;n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,b=`result = activation(result);`);let x=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${s}, ${c});
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${_}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
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

            if (${m===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${x}
        ${b}
        setOutput(result);
      }
    `}},bD=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${i}, ${a}, ${o});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

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
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
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

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},xD=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=Ix(this.outputShape.length);let a=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,c=e.filterHeight,l=e.filterWidth,u=l,d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<l;e++)d+=`
           vec4 xTexelC${e*2};
           int xTexelC${e*2}Ready;
           vec4 xTexelC${e*2+1};
           int xTexelC${e*2+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<l;e++)d+=`
           xTexelC${e*2} = vec4(0.0);
           xTexelC${e*2}Ready = 0;
           xTexelC${e*2+1} = vec4(0.0);
           xTexelC${e*2+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=t*2;if(d+=`
           xC = xCCorner + ${n*s};
           `,o===1){if(n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,s===1&&n>0?d+=`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<l)){let e=a%2==0?C(s):s;s%2==0&&a%2==1||s%2!=0&&a%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,s>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:d+=`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):e===1?d+=`
                     xC${n+1} = xTexelC${n};
                     `:d+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<l&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<l&&(d+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<l&&(d+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<l&&(d+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f=``,p=``;n&&(f=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:i?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,p=`result = activation(result);`);let m=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${p}
         setOutput(result);
       }
     `}},SD=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec4`},{name:`pad`,type:`ivec2`},{name:`stride`,type:`ivec2`},{name:`dilation`,type:`ivec2`},{name:`inChannels`,type:`int`},{name:`itemsPerBlockRow`,type:`int`},{name:`outWidth`,type:`int`}],this.outputShape=e,this.enableShapeUniforms=Ix(this.outputShape.length);let{dataFormat:n}=t,r=jb(),i=n===`channelsLast`,a=i?1:2,o=i?2:3,s=this.enableShapeUniforms?`if(blockIndex < outShape[2] && pos < outShape[1]) {`:`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,c=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)c+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${i}) {
                  innerDims = vec2(d1, ch);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${e*2+t}] = getChannel(
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

        ${c}

        ${r.output} = result;
      }
    `}};function CD(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function wD({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let c=e.shape,l=r.texData.get(e.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],f=n.outChannels,p=n.dataFormat===`channelsLast`,m,h=[];if(a!=null){let e=CD(a.shape,p);e!=null&&(a=Q({inputs:{x:a},backend:r,attrs:{shape:e}}),h.push(a))}if(i!=null){let e=CD(i.shape,p);e!=null&&(i=Q({inputs:{x:i},backend:r,attrs:{shape:e}}),h.push(i))}if(!((d===1||f===1)&&u>RT)&&l.isPacked&&p&&l.texture!=null&&c[2]%2!=0&&A(l.shape.slice(-3),c.slice(-3))){let u=c[0]*c[1]*(c[2]+1),d={dataId:e.dataId,shape:[1,u,n.inChannels],dtype:e.dtype},f=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,E(_b(l.shape,d.shape),()=>`packed reshape ${l.shape} to ${d.shape} isn't free`);let p=Q({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});h.push(p);let g=zT({a:d,b:p,backend:r,transposeA:!1,transposeB:!1,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o}),_=r.texData.get(g.dataId);E(_.isPacked,()=>`batchMatMul result is expected to be packed`),l.shape=f,_.shape=n.outShape,m=rT({inputs:{x:g},backend:r}),m.shape=n.outShape,h.push(g)}else{let c=n.outHeight*n.outWidth,l=Q({inputs:{x:e},backend:r,attrs:{shape:p?[n.batchSize,c,n.inChannels]:[n.batchSize,n.inChannels,c]}}),u=Q({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=zT({a:p?l:u,b:p?u:l,transposeA:!p,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o});m=Q({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),h.push(l),h.push(u),h.push(d)}for(let e of h)r.disposeIntermediateTensorInfo(e);return m}function TD({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:f,dataFormat:p}=n,m=p===`channelsLast`,h=c*l*u,g=f*d,_=[n.batchSize,h,g],v=[];if(a!=null){let e=CD(a.shape,m);e!=null&&(a=Q({inputs:{x:a},backend:r,attrs:{shape:e}}),v.push(a))}if(i!=null){let e=CD(i.shape,m);e!=null&&(i=Q({inputs:{x:i},backend:r,attrs:{shape:e}}),v.push(i))}let y=Q({inputs:{x:t},backend:r,attrs:{shape:[1,h,k(t.shape)/h]}});v.push(y);let b=new SD(_,n),x=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(b,[e],`float32`,x),C=Q({inputs:{x:S},backend:r,attrs:{shape:_}});v.push(S),v.push(C);let w=i!=null,T=a!=null,E=s===`leakyrelu`,D=s?gT(s,!0):null,O=new _T(m?C.shape:y.shape,m?y.shape:C.shape,m?[n.batchSize,g,n.outChannels]:[n.batchSize,n.outChannels,g],!0,!1,w,D,T,E),ee=m?[C,y]:[y,C];if(i&&ee.push(i),T&&ee.push(a),E){let e=r.makeTensorInfo([],`float32`,yi(o,`float32`));ee.push(e),v.push(e)}let A=r.runWebGLProgram(O,ee,`float32`),te=Q({inputs:{x:A},backend:r,attrs:{shape:n.outShape}});v.push(A);for(let e of v)r.disposeIntermediateTensorInfo(e);return te}function ED(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r,d=nl(c),f=Uc(i.shape,a.shape,o,l,s,u,!1,d),p;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type===`SAME`||f.padInfo.type===`VALID`))p=wD({x:i,filter:a,convInfo:f,backend:n});else if(f.strideWidth<=2&&d===`channelsLast`&&N().getBool(`WEBGL_EXP_CONV`)){let e=new xD(f),t=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];p=n.runWebGLProgram(e,[i,a],`float32`,t)}else if(N().getBool(`WEBGL_CONV_IM2COL`))p=TD({x:i,filter:a,convInfo:f,backend:n});else{let e=new yD(f);p=n.runWebGLProgram(e,[i,a],`float32`)}let m=Q({inputs:{x:p},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(p),m}var DD={kernelName:dt,backendName:`webgl`,kernelFunc:ED},OD=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
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
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${a}) {
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
    `}},kD=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
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
    `}},AD=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
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
            int xF = wF + yF * ${t} - ${i};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${o};

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
    `}},jD=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${c}, ${l});

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
          float dyF = float(dyFCorner + wF) / ${i}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

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
    `}};function MD(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r,d=nl(c),f=new OD(Uc(i.shape,u,o,1,s,l,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var ND={kernelName:ft,backendName:`webgl`,kernelFunc:MD};function PD(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r,d=nl(l),f=new kD(Uc(o,a.shape,s,1,c,u,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var FD={kernelName:pt,backendName:`webgl`,kernelFunc:PD};function ID(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=new bD(Wc(i.shape,a.shape,o,c,s));return n.runWebGLProgram(l,[i,a],`float32`)}var LD={kernelName:mt,backendName:`webgl`,kernelFunc:ID};function RD(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r,l=new AD(Wc(i.shape,c,o,1,s));return n.runWebGLProgram(l,[i,a],`float32`)}var zD={kernelName:ht,backendName:`webgl`,kernelFunc:RD};function BD(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r,l=new jD(Wc(c,a.shape,s,1,o));return n.runWebGLProgram(l,[i,a],`float32`)}var VD={kernelName:gt,backendName:`webgl`,kernelFunc:BD},HD={kernelName:_t,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return cos(x);
`})},UD={kernelName:vt,backendName:`webgl`,kernelFunc:Z({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`})},WD=class{constructor(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];let[a,o,s,c]=e,[l]=t,[u,d]=n;this.outputShape=[l,u,d,c];let f=+(r===`bilinear`),[p,m]=[`${o-1}.0`,`${s-1}.0`],[h,g,_]=u>1?[`${(o-1)/(u-1)}`,`(y2-y1) * height_ratio`,`y1*${p} + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * ${p}`],[v,y,b]=d>1?[`${(s-1)/(d-1)}`,`(x2-x1) * width_ratio`,`x1*${m} + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${v});
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
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${y};

        float in_y = ${_};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${i}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${i}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
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
    `}},GD={kernelName:xt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,u=new WD(i.shape,a.shape,s,c,l);return n.runWebGLProgram(u,[i,a,o],`float32`)}},KD;(function(e){e.Prod=`*`,e.Sum=`+`})(KD||={});var qD=class{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=[`x`],this.customUniforms=[{name:`index`,type:`float`}];let i=this.outputShape.length,a=this.op===KD.Prod?`1.0`:`0.0`,o=n?a:`getX(${JD(i,`coords`,this.op)})`,s=this.outputShape[this.outputShape.length-1],c=``,l=``;n?(c=r?`end != ${s-1}`:`end != 0`,l=r?`end + 1`:`end - 1`):(c=r?`end + pow2 < ${s}`:`end >= pow2`,l=r?`end + pow2`:`end - pow2`),this.userCode=`
      void main() {
        ${Dx(i)} coords = getOutputCoords();
        int end = ${YD(i,`coords`,this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${YD(i,`coords`,this.op)} = idx;
          val ${this.op}= getX(${JD(i,`coords`,this.op)});
        }
        setOutput(val);
      }
    `}};function JD(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function YD(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function XD(e,t,n,r,i,a){let o=t.shape.length,s=qu([r],o),c=t;s!=null&&(c=IT({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=Yu(1,o)[0];if(l!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let u=c.shape[l],d=rT({inputs:{x:c},backend:n});for(let t=0;t<=Math.ceil(Math.log2(u))-1;t++){let r=new qD(e,c.shape,!1,a),i=[[t]],o=d;d=n.runWebGLProgram(r,[d],d.dtype,i),n.disposeIntermediateTensorInfo(o)}if(i){let t=new qD(e,c.shape,i,a),r=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(r)}if(s!=null){let e=Ju(s),t=IT({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),t}return d}function ZD(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return XD(KD.Prod,i,n,a,o,s)}var QD={kernelName:yt,backendName:`webgl`,kernelFunc:ZD};function $D(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return XD(KD.Sum,i,n,a,o,s)}var eO={kernelName:bt,backendName:`webgl`,kernelFunc:$D};function tO(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=wC(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,e)}else if(i.shape.length===2){let e=TC(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var nO={kernelName:St,backendName:`webgl`,kernelFunc:tO},rO=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
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
  `}getHeightCoordString(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`}getWidthCoordString(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`}getDepthCoordString(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`}getOutputDepthSize(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`}};function iO(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r,s=i.shape[0],c=o===`NHWC`?i.shape[1]:i.shape[2],l=o===`NHWC`?i.shape[2]:i.shape[3],u=o===`NHWC`?i.shape[3]:i.shape[1],d=c*a,f=l*a,p=u/(a*a),m=new rO(o===`NHWC`?[s,d,f,p]:[s,p,d,f],a,o);return n.runWebGLProgram(m,[i],i.dtype)}var aO={kernelName:Ct,backendName:`webgl`,kernelFunc:iO},oO=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=Ix(this.outputShape.length);let a=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels,c=``,l=``;n&&(c=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l=`result = activation(result);`);let u=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
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
        ${u}
        ${l}
        setOutput(result);
      }
    `}},sO=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=Ix(this.outputShape.length);let a=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)f+=`
          vec4 xTexelC${e*2};
          int xTexelC${e*2}Ready;
          vec4 xTexelC${e*2+1};
          int xTexelC${e*2+1}Ready;
          vec4 xC${e};`;f+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let e=0;e<u;e++)f+=`
          xTexelC${e*2} = vec4(0.0);
          xTexelC${e*2}Ready = 0;
          xTexelC${e*2+1} = vec4(0.0);
          xTexelC${e*2+1}Ready = 0;
          xC${e} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){let t=e*2;if(f+=`
          xC = xCCorner + ${t*c};
          `,s===1){if(t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,c===1&&t>0?f+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<u)){let e=o%2==0?C(c):c;c%2==0&&o%2==1||c%2!=0&&o%2!=1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,c>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:f+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):e===1?f+=`
                    xC${t+1} = xTexelC${t};
                    `:f+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<u&&(f+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<u&&(f+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<u&&(f+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p=``,m=``;n&&(p=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,m=`result = activation(result);`);let h=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${h}
        ${m}
        setOutput(result);
      }
    `}};function cO(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r,u=c;u??=[1,1],E(tl(o,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let d=Uc(i.shape,a.shape,o,u,s,l,!0),f;f=N().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new sO(d):new oO(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[i,a],`float32`,p)}var lO={kernelName:wt,backendName:`webgl`,kernelFunc:cO},uO=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

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
    `}},dO=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function fO(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r,d=new uO(Uc(i.shape,u,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var pO={kernelName:Tt,backendName:`webgl`,kernelFunc:fO};function mO(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r,d=new dO(Uc(u,a.shape,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var hO={kernelName:Et,backendName:`webgl`,kernelFunc:mO},gO=class{constructor(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function _O(e){let{inputs:t,backend:n}=e,{x:r}=t,i=[...r.shape,...r.shape],a=k(r.shape),o=Q({inputs:{x:r},backend:n,attrs:{shape:[a]}}),s=new gO(a),c=n.runWebGLProgram(s,[o],o.dtype),l=Q({inputs:{x:c},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),l}var vO={kernelName:Dt,backendName:`webgl`,kernelFunc:_O},yO=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:i,strideWidth:a,filterHeight:o,filterWidth:s,dilationHeight:c,dilationWidth:l}=e,{top:u,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${a});
      const ivec2 pads = ivec2(${u}, ${d});
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
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
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
    `}};function bO(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=Bc(i.shape,a.shape,o,s,`NHWC`,c),u,d=new yO(l);u=n.runWebGLProgram(d,[i,a],`float32`);let f=Q({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),f}var xO={kernelName:Ot,backendName:`webgl`,kernelFunc:bO};function SO(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Xv(i,a.length);Qv(o.length,c,a);let{path:l,steps:u}=$v(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Zv(p,c[t]),i;ey(e)?i=a[t]:(i=IT({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);A(i.shape,o)||(i=Q({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=xT({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=PT({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var CO={kernelName:At,backendName:`webgl`,kernelFunc:SO},wO={kernelName:jt,backendName:`webgl`,kernelFunc:Z({opSnippet:`return (x >= 0.0) ? x : (exp(x) - 1.0);`,packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`})},TO=`return (b >= 1.0) ? a : a * (b + 1.0);`,EO=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,DO={kernelName:Mt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n}=e,{dy:r,y:i}=t,a=N().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new nT(EO,r.shape,i.shape):new eT(TO,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],r.dtype)}},OO={kernelName:Pt,backendName:`webgl`,kernelFunc:hT({opSnippet:`return float(a == b);`,packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:`bool`,cpuKernelImpl:kC})},kO={kernelName:Nt,backendName:`webgl`,kernelFunc:Z({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Mv};
  float a1 = ${Nv};
  float a2 = ${Pv};
  float a3 = ${Fv};
  float a4 = ${Iv};
  float a5 = ${Lv};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`})},AO=Z({opSnippet:`if (isnan(x)) return x;
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:AC,dtype:`float32`}),jO={kernelName:Ft,backendName:`webgl`,kernelFunc:AO};function MO(e){let{inputs:t,attrs:n,backend:r}=e,{dim:i}=n,{input:a}=t,o=a.shape.length,s=a.shape.slice(),c=i;return i<0&&(E(-(o+1)<=i,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+i+1),s.splice(c,0,1),Q({inputs:{x:a},backend:r,attrs:{shape:s}})}var NO={kernelName:It,backendName:`webgl`,kernelFunc:MO},PO=`return exp(x) - 1.0;`,FO={kernelName:Lt,backendName:`webgl`,kernelFunc:Z({opSnippet:PO,packedOpSnippet:PO,cpuKernelImpl:jC})},IO=class{constructor(e,t,n){this.variableNames=[`real`,`imag`];let r=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=n?`${r}.0`:`1.0`,o;if(e===`real`)o=`return real * expR - imag * expI;`;else if(e===`imag`)o=`return real * expI + imag * expR;`;else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${o}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function LO(e,t,n){let r=n.texData.get(e.dataId),i=k(e.shape),a=e.shape[e.shape.length-1],o=i/a,s=Q({inputs:{x:e},backend:n,attrs:{shape:[o,a]}}),c=s.shape,l=new IO(`real`,c,t),u=new IO(`imag`,c,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:c},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:c}],f=n.runWebGLProgram(l,d,`float32`),p=n.runWebGLProgram(u,d,`float32`),m=aT({inputs:{real:f,imag:p},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p);let h=Q({inputs:{x:m},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(m),h}function RO(e){let{inputs:t,backend:n}=e,{input:r}=t;return LO(r,!1,n)}var zO={kernelName:Rt,backendName:`webgl`,kernelFunc:RO},BO=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:`value`,type:`float`}],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function VO(e){let{backend:t,attrs:n}=e,{shape:r,value:i}=n,{dtype:a}=n;if(a||=ve(i),a===`string`){let e=le(a,k(r));return e.fill(i),t.makeTensorInfo(r,a,e)}else{let e=new BO(r,i),n=[[i]];return t.runWebGLProgram(e,[],a,n)}}var HO={kernelName:zt,backendName:`webgl`,kernelFunc:VO},UO=class{constructor(e){this.variableNames=[`Image`],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
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
    `}},WO={kernelName:Bt,backendName:`webgl`,kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=t,i=new UO(n.shape);return r.runWebGLProgram(i,[n],n.dtype)}},GO=`return floor(x);`,KO={kernelName:Vt,backendName:`webgl`,kernelFunc:Z({opSnippet:GO,packedOpSnippet:GO,cpuKernelImpl:MC})},qO={kernelName:Ht,backendName:`webgl`,kernelFunc:hT({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
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
`,dtype:`int32`})},JO=class{constructor(e){this.variableNames=[`A`];let t=jb(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

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
    `}},YO=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;let t=jb(),[n,r]=e;this.outputShape=e,this.userCode=`
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
                       vec2(${r}.0, ${n}.0);
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
    `}},XO={kernelName:Lr,backendName:`webgl`,kernelFunc:$O},ZO,QO=N().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);function $O(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:i}=t,{numChannels:a}=r,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,[c,l]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],u=[l,c],d=[l,c,a];if(s||o){let e=N().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);(ZO==null||e!==QO)&&(QO=e,ZO=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:QO})),ZO.canvas.width=c,ZO.canvas.height=l,ZO.drawImage(i,0,0,c,l),i=ZO.canvas}let f=n.makeTensorInfo(u,`int32`);n.texData.get(f.dataId).usage=ky.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),i);let p=N().getBool(`WEBGL_PACK`)?new YO(d):new JO(d),m=n.runWebGLProgram(p,[f],`int32`);return n.disposeData(f.dataId),m}function ek(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=nl(u),g=Uc(i.shape,a.shape,c,d,l,f,!1,h),_,v=[],y=o!=null,b=s!=null,x=p===`leakyrelu`,S=()=>{let e=[i,a],t=(e,t)=>{if(t===`NCHW`&&e.shape.length===1&&e.shape[0]!==1){let t=Q({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(y&&e.push(t(o,u)),b&&e.push(t(s,u)),x){let t=n.makeTensorInfo([],`float32`,yi(m,`float32`));e.push(t),v.push(t)}return e};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type===`SAME`||g.padInfo.type===`VALID`))_=wD({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else if(g.strideWidth<=2&&h===`channelsLast`&&N().getBool(`WEBGL_EXP_CONV`)){let e=new xD(g,y,p?gT(p,!0):null,b,x),t=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=S();_=n.runWebGLProgram(e,r,`float32`,t)}else if(N().getBool(`WEBGL_CONV_IM2COL`))_=TD({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else{let e=new yD(g,y,p?gT(p,!1):null,b,x),t=S();_=n.runWebGLProgram(e,t,`float32`)}let C=Q({inputs:{x:_},backend:n,attrs:{shape:g.outShape}});return v.push(_),v.forEach(e=>n.disposeIntermediateTensorInfo(e)),C}var tk={kernelName:Br,backendName:`webgl`,kernelFunc:ek};function nk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r,m=[],h=u;h??=[1,1],E(tl(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);let g=Uc(i.shape,a.shape,c,h,l,d,!0),_=N().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,v=f?gT(f,_):null,y=[i,a],b=o!=null,x=s!=null,S=f===`leakyrelu`;if(b&&y.push(o),x&&y.push(s),S){let e=n.makeTensorInfo([],`float32`,yi(p,`float32`));y.push(e),m.push(e)}let C;C=_?new sO(g,b,v,x,S):new oO(g,b,v,x,S);let w=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],T=n.runWebGLProgram(C,y,`float32`,w);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),T}var rk={kernelName:Vr,backendName:`webgl`,kernelFunc:nk},ik=class{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=[`x`,`indices`],this.outputShape=n;let i=Dx(n.length),a=`
    int index;`;for(let e=0;e<this.sliceDim;e++)a+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function ak(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=i.shape,o=a[a.length-1],s=k(r.shape),[c,l,u,d]=Rs(r,i),f=Q({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),p=Q({inputs:{x:r},backend:n,attrs:{shape:[k(r.shape)/u,u]}});if(n.shouldExecuteOnCPU([r,i])||r.dtype===`string`){let e=NC(n.readSync(i.dataId),n.bufferSync(r),r.dtype,l,o,u,d,r.shape,s);return n.makeTensorInfo(c,r.dtype,e.values)}let m=new ik(o,d,[l,u],r.shape),h=n.runWebGLProgram(m,[p,f],p.dtype),g=Q({inputs:{x:h},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),g}var ok={kernelName:Gt,backendName:`webgl`,kernelFunc:ak},sk=class{constructor(e,t){this.variableNames=[`A`,`indices`],this.outputShape=t,this.rank=t.length;let n=Dx(this.rank),r=ck(e);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}};function ck(e,t){let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],r=[];for(let t=0;t<e.length;t++)t===2?r.push(`index`):r.push(`${n[t]}`);return r.join()}function lk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r,c=oe(o,i.shape)[0];if(N().get(`DEBUG`)){let e=n.readSync(a.dataId),t=i.shape[c];for(let n=0;n<e.length;++n){let r=e[n];E(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let l=_y(i,a,c,s),u=k(a.shape),d=[],f=Q({inputs:{x:i},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),p=Q({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(f),d.push(p);let m=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([i,a])||i.dtype===`string`){let e=n.bufferSync(p),t=PC(n.bufferSync(f),e,m);return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(l.outputShape,t.dtype,t.values)}let h=new sk(f.shape,m),g=n.runWebGLProgram(h,[f,p],f.dtype);d.push(g);let _=Q({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}var uk={kernelName:Wt,backendName:`webgl`,kernelFunc:lk},dk={kernelName:Kt,backendName:`webgl`,kernelFunc:hT({opSnippet:`return float(a > b);`,packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:FC,dtype:`bool`})},fk={kernelName:qt,backendName:`webgl`,kernelFunc:hT({opSnippet:`return float(a >= b);`,packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:`bool`,cpuKernelImpl:IC})};function pk(e){let{inputs:t,backend:n}=e,{input:r}=t;return LO(r,!0,n)}var mk={kernelName:Yt,backendName:`webgl`,kernelFunc:pk},hk={kernelName:Zt,backendName:`webgl`,kernelFunc:Z({opSnippet:`return float(!isnan(x) && !isinf(x));`,dtype:`bool`})},gk={kernelName:Qt,backendName:`webgl`,kernelFunc:Z({opSnippet:`return float(isinf(x));`,dtype:`bool`})},_k={kernelName:$t,backendName:`webgl`,kernelFunc:Z({opSnippet:`return float(isnan(x));`,dtype:`bool`})},vk={kernelName:tn,backendName:`webgl`,kernelFunc:hT({opSnippet:`return float(a < b);`,packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:LC,dtype:`bool`})},yk={kernelName:nn,backendName:`webgl`,kernelFunc:hT({opSnippet:`return float(a <= b);`,packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:RC,dtype:`bool`})};function bk(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=zC(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var xk={kernelName:rn,backendName:`webgl`,kernelFunc:bk},Sk={kernelName:an,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:BC})},Ck={kernelName:on,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return log(1.0 + x);
`})},wk={kernelName:sn,backendName:`webgl`,kernelFunc:hT({opSnippet:`return float(a >= 1.0 && b >= 1.0);`,packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:`bool`})},Tk={kernelName:cn,backendName:`webgl`,kernelFunc:Z({opSnippet:`return float(!(x >= 1.0));`})},Ek={kernelName:ln,backendName:`webgl`,kernelFunc:hT({opSnippet:`return float(a >= 1.0 || b >= 1.0);`,packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:`bool`})},Dk=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}},Ok=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
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

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

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
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}},kk={kernelName:un,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r,l=N().getBool(`WEBGL_PACK_NORMALIZATION`)?new Ok(i.shape,a,o,s,c):new Dk(i.shape,a,o,s,c);return n.runWebGLProgram(l,[i],i.dtype)}},Ak=class{constructor(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
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

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${i})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${i});
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
    `}},jk={kernelName:dn,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r,d=new Ak(i.shape,s,c,l,u);return n.runWebGLProgram(d,[i,a,o],i.dtype)}};function Mk(e,t,n,r){let i=k(t),a=k(e.shape)/i,o=Q({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=OT(o,e.dtype,`max`,r),c=Q({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}function Nk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=i.shape.length,c=oe(a,i.shape),l=c,u=qu(l,s),d=u!=null,f=n.shouldExecuteOnCPU([i]),p=i;if(d){if(f){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=i.shape[u[e]];let r=pw(e,i.shape,i.dtype,u,t);p=n.makeTensorInfo(t,i.dtype);let a=n.texData.get(p.dataId);a.values=r}else p=MT(i,u,n);l=Yu(l.length,s)}Ku(`max`,l,s);let[m,h]=Wu(p.shape,l),g=m;o&&(g=Gu(m,c));let _;if(f){let e=n.texData.get(p.dataId).values,t=VC(e,k(h),g,i.dtype);_=n.makeTensorInfo(g,i.dtype);let r=n.texData.get(_.dataId);r.values=t}else _=Mk(p,h,g,n);return d&&n.disposeIntermediateTensorInfo(p),_}var Pk={kernelName:fn,backendName:`webgl`,kernelFunc:Nk},Fk={kernelName:pn,backendName:`webgl`,kernelFunc:hT({opSnippet:$w+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+tT+`
  return result;
`,cpuKernelImpl:HC})};function Ik(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;Ab(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;E(tl(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Vc(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&A(l.inShape,l.outShape))return rT({inputs:{x:i},backend:n});let u=new _E(l,`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var Lk={kernelName:mn,backendName:`webgl`,kernelFunc:Ik};function Rk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dataFormat:c,dimRoundingMode:l}=r,u=new vE(Hc(i.shape,a,o,[1,1,1],s,l,c),`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var zk={kernelName:gn,backendName:`webgl`,kernelFunc:Rk},Bk=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

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
        for (int wR = 0; wR < ${i};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},Vk=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${d}, ${f});

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

        for (int wD = 0; wD < ${s};
           wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function Hk(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=Hc(o.shape,s,c,[1,1,1],l,u),f=new vE(d,`max`,!0),p=n.runWebGLProgram(f,[o],o.dtype),m=new Vk(d),h=n.runWebGLProgram(m,[i,p],o.dtype);return n.disposeIntermediateTensorInfo(p),h}var Uk={kernelName:_n,backendName:`webgl`,kernelFunc:Hk};function Wk(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;Ab([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Vc(s.shape,c,l,1,u,d),p=new _E(f,`max`,!0),m=n.runWebGLProgram(p,[s],s.dtype),h=new Bk(f),g=n.runWebGLProgram(h,[i,m],s.dtype);return n.disposeIntermediateTensorInfo(m),g}var Gk={kernelName:hn,backendName:`webgl`,kernelFunc:Wk};function Kk(e,t,n,r){let i=new _E(n,`max`,!1),a=r.runWebGLProgram(i,[e],`float32`);return i=new _E(n,`max`,!0,!0,t),[a,r.runWebGLProgram(i,[e],`float32`)]}var qk={kernelName:vn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;E(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];E(tl(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let[u,d]=Kk(r,s,Vc(r.shape,i,a,l,o),c);return[u,d]}};function Jk(e,t,n,r){let i=k(t),a=k(e.shape)/i,o=Q({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=OT(o,`float32`,`mean`,r),c=Q({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}var Yk={kernelName:yn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:i,axis:a}=t,o=n,s=r.shape.length,c=oe(a,r.shape),l=c,u=qu(l,s),d=u!=null,f=o.shouldExecuteOnCPU([r]),p=[],m=r;if(d){if(f){let e=o.texData.get(m.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let n=pw(e,r.shape,r.dtype,u,t);m=o.makeTensorInfo(t,r.dtype);let i=o.texData.get(m.dataId);i.values=n}else m=MT(r,u,o);p.push(m),l=Yu(l.length,s)}Ku(`sum`,l,s);let[h,g]=Wu(m.shape,l),_=h;i&&(_=Gu(h,c));let v=Jk(m,g,_,o);for(let e of p)o.disposeIntermediateTensorInfo(e);return v}};function Xk(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=oe(a,i.shape),l=c,u=qu(l,s),d=i;u!=null&&(d=IT({inputs:{x:i},backend:n,attrs:{perm:u}}),l=Yu(l.length,i.shape.length)),Ku(`min`,l,s);let[f,p]=Wu(d.shape,l),m=k(p),h=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=OT(h,h.dtype,`min`,n),_;if(o){let e=Gu(f,c);_=Q({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=Q({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var Zk={kernelName:bn,backendName:`webgl`,kernelFunc:Xk},Qk={kernelName:xn,backendName:`webgl`,kernelFunc:hT({opSnippet:$w+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+tT+`
  return result;
`,cpuKernelImpl:UC})},$k=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=Dx(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r),c=n===`reflect`?0:1;if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${i} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}},eA=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=Dx(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=gw(`rc`,r),c=gw(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=n===`reflect`?0:1,f=``;if(r===1){let e=`
        ${i} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
      `}else{let e=`
        ${i} source = rc;
        ${i} lt = ${i}(lessThan(source, start));
        ${i} gte = ${i}(greaterThanEqual(source, end));
        ${i} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${c.join()}), ${u});
          ${s[r-1]} += 1;
          if(${l}) {
            ${e}
            result[3] = getChannel(getX(${c.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}},tA={kernelName:Sn,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:i,mode:a}=n,o=N().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new eA(r.shape,i,a):new $k(r.shape,i,a);return t.runWebGLProgram(o,[r],r.dtype)}},nA={kernelName:Cn,backendName:`webgl`,kernelFunc:hT({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+tT+`
  return result;
`})},rA=class{constructor(e,t,n){this.variableNames=[`probs`],this.customUniforms=[{name:`seed`,type:`float`}],this.outputShape=[e,n],this.userCode=`
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
    `}},iA=hT({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
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
`,checkOutOfBounds:!0}),aA={kernelName:kt,backendName:`webgl`,kernelFunc:iA},oA=`return a - b;`,sA=hT({opSnippet:oA,packedOpSnippet:oA,supportsComplex:!0,cpuKernelImpl:uw}),cA={kernelName:Tr,backendName:`webgl`,kernelFunc:sA};function lA(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=oe([a],i.shape),s=Nk({inputs:{x:i},backend:n,attrs:{reductionIndices:o,keepDims:!1}}),c=Gu(s.shape,o),l=Q({inputs:{x:s},backend:n,attrs:{shape:c}}),u=sA({inputs:{a:i,b:l},backend:n}),d=AO({inputs:{x:u},backend:n}),f=PT({inputs:{x:d},backend:n,attrs:{axis:o,keepDims:!1}}),p=Q({inputs:{x:f},backend:n,attrs:{shape:c}}),m=iA({inputs:{a:d,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),m}var uA={kernelName:pr,backendName:`webgl`,kernelFunc:lA};function dA(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r,c=s?i:lA({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new rA(l,u,a),f=[[o]],p=n.runWebGLProgram(d,[c],`int32`,f);return s||n.disposeIntermediateTensorInfo(c),p}var fA={kernelName:wn,backendName:`webgl`,kernelFunc:dA},pA=`if (isnan(x)) return x;
  return -x;
`,mA=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function hA(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){let[e,t]=GC(n.texData.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(t,r.dtype,e)}let i;return i=N().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new Vw(r.shape,mA):new Ow(r.shape,pA),n.runWebGLProgram(i,[r],r.dtype)}var gA={kernelName:En,backendName:`webgl`,kernelFunc:hA},_A=Kg;function vA(e){Hr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r,{selectedIndices:l}=_A(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c);return n.makeTensorInfo([l.length],`int32`,new Int32Array(l))}var yA={kernelName:On,backendName:`webgl`,kernelFunc:vA},bA=qg;function xA(e){Hr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r,{selectedIndices:u,validOutputs:d}=bA(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([],`int32`,new Int32Array([d]))]}var SA={kernelName:kn,backendName:`webgl`,kernelFunc:xA},CA=Jg;function wA(e){Hr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r,{selectedIndices:u,selectedScores:d}=CA(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([d.length],`float32`,new Float32Array(d))]}var TA={kernelName:An,backendName:`webgl`,kernelFunc:wA},EA=class{constructor(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}},DA={kernelName:Mn,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r,l=k(i.shape),u=new EA(l,o,s,c),d=Q({inputs:{x:i},backend:n,attrs:{shape:[l]}}),f=n.runWebGLProgram(u,[d],a);n.disposeIntermediateTensorInfo(d);let p=[...i.shape,o],m=Q({inputs:{x:f},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(f),m}};function OA(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`complex64`){let e=JE({inputs:{input:r},backend:n}),t=OA({inputs:{x:e},backend:n}),i=pD({inputs:{input:r},backend:n}),a=OA({inputs:{x:i},backend:n}),o=aT({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return VO({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype===`string`?``:0},backend:n})}var kA={kernelName:Fr,backendName:`webgl`,kernelFunc:OA};function AA(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);if(r.dtype===`complex64`){let e=JE({inputs:{input:r},backend:n}),t=AA({inputs:{x:e},backend:n}),i=pD({inputs:{input:r},backend:n}),a=OA({inputs:{x:i},backend:n}),o=aT({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return VO({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}var jA={kernelName:jn,backendName:`webgl`,kernelFunc:AA};function MA(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return MO({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{D(a,e.shape,`All tensors passed to stack must have matching shapes`),E(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=_D({inputs:t.map(e=>{let t=MO({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var NA={kernelName:Nn,backendName:`webgl`,kernelFunc:MA},PA=class{constructor(e,t,n){this.variableNames=[`x`],this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=Dx(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${i} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}},FA=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=Dx(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=gw(`rc`,r),c=gw(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=[`${i} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,r===1?``:`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,r===1?``:`  ${s[r-1]} += 1;
         if(${l}) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``;for(let e=0,t=r===1?2:4;e<t;e++)p+=`
        ${d[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${i} source = rc - start;
          result[${e}] = getChannel(getX(${c.join()}), ${u});
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}},IA=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;if(k(i.shape)===0)return VO({backend:n,attrs:{shape:a.map((e,t)=>e[0]+i.shape[t]+e[1]),value:o,dtype:i.dtype}});let s=N().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new FA(i.shape,a,o):new PA(i.shape,a,o),c=[[o]];return n.runWebGLProgram(s,[i],i.dtype,c)},LA={kernelName:Pn,backendName:`webgl`,kernelFunc:IA},RA={kernelName:Fn,backendName:`webgl`,kernelFunc:hT({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
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
  `+tT+`
  return result;
`})};function zA(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=[],l=oe(a,i.shape),u=l,d=qu(u,s),f=i;d!=null&&(f=IT({inputs:{x:i},backend:n,attrs:{perm:d}}),u=Yu(u.length,s),c.push(f)),Ku(`prod`,u,s);let p;if(n.shouldExecuteOnCPU([f])){let e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:i}=qC(f.shape,f.dtype,e,u);p=n.makeTensorInfo(r,i,t)}else{let[e,t]=Wu(f.shape,u),r=k(t),a=Q({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),o=OT(a,ea(i.dtype),`prod`,n);p=Q({inputs:{x:o},backend:n,attrs:{shape:e}}),c.push(a),c.push(o)}if(o){c.push(p);let e=Gu(p.shape,l);p=Q({inputs:{x:p},backend:n,attrs:{shape:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var BA={kernelName:Ln,backendName:`webgl`,kernelFunc:zA};function VA(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.readSync(e.dataId)),l=i.map(e=>e.shape),u=n.readSync(a.dataId),d=n.readSync(o.dataId),[f,p,m]=JC(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var HA={kernelName:Rn,backendName:`webgl`,kernelFunc:VA};function UA(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),d=n.readSync(o.dataId),f=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[m,h]=YC(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var WA={kernelName:zn,backendName:`webgl`,kernelFunc:UA},GA=e=>{let{backend:t,attrs:n}=e,{start:r,stop:i,step:a,dtype:o}=n,s=XC(r,i,a,o);return t.makeTensorInfo([s.length],o,s)},KA={kernelName:Bn,backendName:`webgl`,kernelFunc:GA},qA={kernelName:Hn,backendName:`webgl`,kernelFunc:Z({opSnippet:`return 1.0 / x;`})},JA={kernelName:Un,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},YA={kernelName:Yn,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},XA=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

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
    `}},ZA=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

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

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

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
    `}};function QA(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=N().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new ZA(i.shape,c,l,a,o):new XA(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],`float32`)}var $A={kernelName:qn,backendName:`webgl`,kernelFunc:QA},ej=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${i-1}.0));
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
    `}};function tj(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new ej(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var nj={kernelName:Jn,backendName:`webgl`,kernelFunc:tj},rj=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}},ij=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

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
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

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
    `}};function aj(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=N().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new ij(i.shape,c,l,a,o):new rj(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],i.dtype)}var oj={kernelName:Gn,backendName:`webgl`,kernelFunc:aj},sj=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${i}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function cj(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new sj(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var lj={kernelName:Kn,backendName:`webgl`,kernelFunc:cj},uj=class{constructor(e,t){this.variableNames=[`x`];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,i=e.map((e,t)=>r(t)).join(`,`),a=Dx(n);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}},dj=class{constructor(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let r=gw(`rc`,n),i=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,a=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=Dx(n);n===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${i}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${s(r.slice())};
          if(${i}){
            result.g = ${c(r.slice())};
          }
          if(${a}) {
            result.b = ${l(r.slice())};
            if(${i}) {
              result.a = ${u(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function s(e){return d(e)}function c(e){return e[n-1]=`(`+e[n-1]+` + 1)`,d(e)}function l(e){return e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function u(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function d(t){let n=e.map((e,n)=>f(n,t));return`getChannel(getX(${n.join(`,`)}), vec2(${n.slice(-2).join(`,`)}))`}function f(n,r){return t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}}};function fj(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r,o=i.shape.length,s=oe(a,i.shape);if(o===0)return rT({inputs:{x:i},backend:n});let c=N().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new dj(i.shape,s):new uj(i.shape,s);return n.runWebGLProgram(c,[i],i.dtype)}var pj={kernelName:Xn,backendName:`webgl`,kernelFunc:fj},mj=class{constructor(e,t){this.variableNames=[`Image`],this.outputShape=[],this.customUniforms=[{name:`params`,type:`vec4`}];let n=e[1],r=e[2];this.outputShape=e;let i=``;i=typeof t==`number`?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(`,`)});
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
          ${i}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}},hj={kernelName:Rr,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=new mj(r.shape,a),[l,u]=wv(o,r.shape[1],r.shape[2]),d=[[l,u,Math.sin(i),Math.cos(i)]];return s.runWebGLProgram(c,[r],r.dtype,d)}},gj={kernelName:Zn,backendName:`webgl`,kernelFunc:Z({opSnippet:`
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
`})},_j={kernelName:Qn,backendName:`webgl`,kernelFunc:Z({opSnippet:`return inversesqrt(x);`,cpuKernelImpl:ZC})},vj=class{constructor(e,t,n,r,i,a,o=!0){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;let s=Dx(i.length),c=Dx(a.length),l=``;n===1?l=`i`:n===2&&(l=`i, j`);let u=`getIndices(${l})`,d=``;r===1?d=`i`:r===2&&(d=`i, coords[1]`);let f=`getUpdates(${d})`,p=t>1?`strides[j]`:`strides`;this.userCode=`
        ${s} strides = ${s}(${i});

        void main() {
          ${c} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${u});
              flattenedIndex += index * ${p};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}};function yj(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Vs(a,i,o),f=[d/l,l];if(d===0)return n.makeTensorInfo(o,i.dtype);let p=Q({inputs:{x:i},backend:n,attrs:{shape:[c,s]}}),m=Q({inputs:{x:a},backend:n,attrs:{shape:[c,l]}}),h=n.makeTensorInfo([],`float32`,new Float32Array([0])),g=new vj(c,s,p.shape.length,m.shape.length,u,f),_=n.runWebGLProgram(g,[m,p,h],m.dtype),v=Q({inputs:{x:_},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(h),v}var bj={kernelName:$n,backendName:`webgl`,kernelFunc:yj},xj=class{constructor(e,t,n,r){this.variableNames=[`sortedSequence`,`values`],this.customUniforms=[{name:`numInputs`,type:`int`}],this.outputShape=[e,n];let i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=N().getNumber(`WEBGL_VERSION`)===2?`while (left < right) {`:i,o=r===`left`?`<`:`<=`;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${o} value) {
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
     `}};function Sj(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=new xj(i.shape[0],i.shape[1],a.shape[1],o),c=[[i.shape[1]]];return n.runWebGLProgram(s,[i,a],`int32`,c)}var Cj={kernelName:er,backendName:`webgl`,kernelFunc:Sj},wj=class{constructor(e,t,n){this.variableNames=[`c`,`a`,`b`],this.outputShape=t;let r,i;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],a=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&a.push(`${n[r]}`);r=a.join(),i=o.join()}let a=Dx(n);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${i}));
        } else {
          setOutput(getB(${i}));
        }
      }
    `}};function Tj(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t,o=new wj(r.shape.length,i.shape,i.shape.length);return n.runWebGLProgram(o,[r,i,a],$i(i.dtype,a.dtype))}var Ej={kernelName:tr,backendName:`webgl`,kernelFunc:Tj},Dj={kernelName:nr,backendName:`webgl`,kernelFunc:Z({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Av};
  float scale = ${jv};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`})},Oj={kernelName:sr,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:$C})},kj={kernelName:or,backendName:`webgl`,kernelFunc:Z({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`})},Aj={kernelName:ir,backendName:`webgl`,kernelFunc:Z({opSnippet:`if (isnan(x)) return x;
  return sin(x);
`})},jj={kernelName:ar,backendName:`webgl`,kernelFunc:Z({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`})},Mj={kernelName:cr,backendName:`webgl`,kernelFunc:Z({opSnippet:`
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
`})},Nj={kernelName:dr,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;E(i.shape.length<=4,()=>`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=[],u=IA({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),d=Tv(u.shape,a,s,!1),f=Ev(d.length,a.length,!1),p=Dv(u.shape,a,s,!1),m=Q({inputs:{x:u},backend:n,attrs:{shape:d}}),h=IT({inputs:{x:m},backend:n,attrs:{perm:f}}),g=Q({inputs:{x:h},backend:n,attrs:{shape:p}});return l.push(u),l.push(m),l.push(h),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),g}};function Pj(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
         ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.readSync(r.dataId),c=n.readSync(i.dataId),l=n.readSync(a.dataId),u=n.readSync(o.dataId)[0],[d,f,p,m,h]=nw(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var Fj={kernelName:mr,backendName:`webgl`,kernelFunc:Pj};function Ij(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.readSync(i.dataId)),s=n.readSync(r.dataId),c=Array.from(n.readSync(a.dataId)),[l,u,d]=rw(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var Lj={kernelName:hr,backendName:`webgl`,kernelFunc:Ij};function Rj(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
              ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
              ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=iw(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var zj={kernelName:gr,backendName:`webgl`,kernelFunc:Rj};function Bj(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
             ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
             ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=iw(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var Vj={kernelName:_r,backendName:`webgl`,kernelFunc:Bj};function Hj(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=Vs(a,i,s);if(a.dtype===`string`){let e=QC(n.bufferSync(i),n.bufferSync(a),s,f,u,l,c,d,wi(n.readSync(o.dataId)[0]),!1);return n.makeTensorInfo(s,e.dtype,e.values)}let p=new vj(l,c,i.shape.length,a.shape.length,d,[f,1],!1),m=n.runWebGLProgram(p,[a,i,o],a.dtype),h=Q({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(m),h}var Uj={kernelName:vr,backendName:`webgl`,kernelFunc:Hj};function Wj(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=oe(o,i.shape)[0],c=ny(i,a,s),l=i.shape.length,u=Array(l).fill(0),d=i.shape.slice();return c.map(e=>{let t=[...d];t[s]=e;let r=zE({inputs:{x:i},backend:n,attrs:{begin:u,size:t}});return u[s]+=e,r})}var Gj={kernelName:fr,backendName:`webgl`,kernelFunc:Wj},Kj=`return sqrt(x);`,qj={kernelName:lr,backendName:`webgl`,kernelFunc:Z({opSnippet:Kj,packedOpSnippet:Kj,cpuKernelImpl:aw})},Jj={kernelName:br,backendName:`webgl`,kernelFunc:Z({opSnippet:`return x * x;`})},Yj=`return (a - b) * (a - b);`,Xj={kernelName:yr,backendName:`webgl`,kernelFunc:hT({opSnippet:Yj,packedOpSnippet:Yj})};function Zj({inputs:e,attrs:t,backend:n}){let{x:r}=e,i=`if (isnan(x)) return x;
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,a=new Ow(r.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}var Qj={kernelName:Ir,backendName:`webgl`,kernelFunc:Zj},$j=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=n;let r=n.length,i=Dx(n.length),a=Dx(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{let e=0;o=n.map((t,r)=>(e++,n.length===1?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(`,`)}this.userCode=`
      ${i} begin = ${i}(${e});
      ${i} strides = ${i}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}};function eM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=ac(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=Q({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){E(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=Ks(v,y,b),t=zE({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=Q({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else if(n.shouldExecuteOnCPU([i])){let e=n.readSync(i.dataId),t=ow(p,Fo(i.shape,i.dtype,e),b,v);x=n.makeTensorInfo(m,i.dtype,t.values)}else{let e=new $j(v,b,p);x=n.runWebGLProgram(e,[i],i.dtype)}let S=Q({inputs:{x},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(x),S}var tM={kernelName:xr,backendName:`webgl`,kernelFunc:eM};function nM(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,[f,p]=sw(n.readSync(u.dataId),n.readSync(d.dataId),i,a,o,s,c,l);return[n.makeTensorInfo([f.length],`string`,f),n.makeTensorInfo(d.shape,`int32`,p)]}var rM={kernelName:Sr,backendName:`webgl`,kernelFunc:nM};function iM(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.readSync(a.dataId),c=n.readSync(o.dataId)[0],[l,u,d]=cw(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var aM={kernelName:Cr,backendName:`webgl`,kernelFunc:iM};function oM(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=lw(n.readSync(a.dataId),i);return n.makeTensorInfo(a.shape,`int32`,o)}var sM={kernelName:wr,backendName:`webgl`,kernelFunc:oM},cM={kernelName:Er,backendName:`webgl`,kernelFunc:Z({opSnippet:`return tan(x);`})},lM={kernelName:Dr,backendName:`webgl`,kernelFunc:Z({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`})},uM=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=Dx(this.rank),i=dM(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${i}));
      }
    `}};function dM(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}function fM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;if(i.dtype===`string`||i.shape.length>5){let e=n.readSync(i.dataId),t=i.dtype===`string`?e.map(e=>wi(e)):e,r=dw(Fo(i.shape,i.dtype,t),a);return n.makeTensorInfo(r.shape,r.dtype,r.values)}let o=new uM(i.shape,a);return n.runWebGLProgram(o,[i],i.dtype)}var pM={kernelName:Or,backendName:`webgl`,kernelFunc:fM},mM=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`negativeInf`,type:`float`},{name:`dir`,type:`int`},{name:`inc`,type:`int`}],this.outputShape=e,this.userCode=`
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
     `}},hM=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`k`,type:`int`}],this.outputShape=e,this.userCode=`
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
     `}};function gM(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function _M(e){let t=1;for(;t<e;)t*=2;return t}function vM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r,s=N().getNumber(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`),c=N().getNumber(`TOPK_K_CPU_HANDOFF_THRESHOLD`),l=i.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([i])||u<s||a>c){let[e,t]=fw(n.readSync(i.dataId),l,i.dtype,a,o);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(t.shape,t.dtype,t.values)]}if(a===0)return l[l.length-1]=0,[n.makeTensorInfo(l,i.dtype,[]),n.makeTensorInfo(l,`int32`,[])];if(u===1)return[i,VO({attrs:{shape:l,dtype:`int32`,value:0},backend:n})];let d=n.texData.get(i.dataId),f=d!==null&&d.isPacked,p=f?n.unpackTensor(i):i,m=k(l)/u,h=Q({inputs:{x:p},attrs:{shape:[m,u]},backend:n});f&&gM(n,p);let g=_M(a),_=_M(u),v=null,y=()=>v===null?[h,h]:[h,v],b=(e,t,r)=>{let i=y(),a=new mM(r),o=[[u],[+(v===null)],[-1/0],[e],[t]],s=v;v=n.runWebGLProgram(a,i,`int32`,o),gM(n,s)};for(let e=1;e<g;e*=2){let t=e*2;for(let n=e;n>=1;n/=2)b(t,n,[m,_])}for(let e=_;e>g;e/=2){let t=y(),r=new hM([m,e/2]),i=[[u],[+(v===null)],[g]],a=v;v=n.runWebGLProgram(r,t,`int32`,i),gM(n,a);let o=g/2,s=o*2;for(let e=o;e>=1;e/=2)b(s,e,v.shape)}let x=v;v=zE({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,a]}}),gM(n,x);let S=lk({inputs:{x:h,indices:v},backend:n,attrs:{axis:1,batchDims:1}});gM(n,h);let C=l.slice(0,-1);C.push(a),x=v,v=Q({inputs:{x:v},attrs:{shape:C},backend:n}),gM(n,x);let w=S;return S=Q({inputs:{x:S},attrs:{shape:C},backend:n}),gM(n,w),[S,v]}var yM={kernelName:kr,backendName:`webgl`,kernelFunc:vM},bM=class{constructor(e,t,n,r,i,a){this.variableNames=[`Image`,`Transforms`],this.outputShape=a;let o=n===`nearest`?1:2,s;switch(r){case`constant`:s=1;break;case`reflect`:s=2;break;case`wrap`:s=3;break;case`nearest`:s=4;break;default:s=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
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
              } else if (${s} == 3) {
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
              } else if (${s} == 4) {
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
                outputValue = float(${i});
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
                outputValue = float(${i});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${o} == 1) {
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
        `}};function xM(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=r,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=new bM(d,f,o,s,c,[u,m,h,p]);return n.runWebGLProgram(g,[i,a],`float32`)}var SM={kernelName:Ar,backendName:`webgl`,kernelFunc:xM};function CM(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;Ab(a,`unique`),console.warn(`WARNING: `,`UI might be locked temporarily as data is being downloaded`);let{outputValues:o,outputShape:s,indices:c}=mw(r.readSync(a.dataId),i,a.shape,a.dtype);return[r.makeTensorInfo(s,a.dtype,o),r.makeTensorInfo([c.length],`int32`,c)]}var wM={kernelName:Mr,backendName:`webgl`,kernelFunc:CM};function TM(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i,s=o.shape.length,c=i.shape[a],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==a&&(l[u++]=o.shape[e]);let d=[],f=Array(s).fill(0),p=o.shape.slice();p[a]=1;let m=Array(c);for(let e=0;e<m.length;e++){f[a]=e;let t=zE({inputs:{x:o},backend:n,attrs:{begin:f,size:p}});m[e]=Q({inputs:{x:t},backend:n,attrs:{shape:l}}),d.push(t)}return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var EM={kernelName:Nr,backendName:`webgl`,kernelFunc:TM},DM=class{constructor(e,t){this.variableNames=[`x`,`segmentIds`];let n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];let s=Math.floor(n/4)*4,c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `);let d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
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

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${c===1}) {
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

          ${l}
        } else if (${c===2}) {
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

          ${l}
        } else if (${c===3}) {
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

          ${l}
        }
        setOutput(sumValue);
      }
    `}};function OM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r,s=i.shape.length,c=[],l=0,u=qu([l],s),d=i;u!=null&&(d=IT({inputs:{x:i},backend:n,attrs:{perm:u}}),c.push(d),l=Yu(1,s)[0]);let f=gy(d.shape,l,o),p=k([d.shape[l]]),m=Q({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});c.push(m);let h=ea(i.dtype),g=(e,t,r,i,a)=>{let o=e.shape[0],s=e.shape[1],l=hy(s,a),u=new DM({windowSize:l,inSize:s,batchSize:o,numSegments:a},t),d=n.compileAndRun(u,[e,r],i);if(c.push(d),d.shape[1]===a)return d;let f=GA({backend:n,attrs:{start:0,stop:a,step:1,dtype:`float32`}}),p=fM({inputs:{x:f},backend:n,attrs:{reps:[s/l]}});return c.push(f),c.push(p),g(d,t,p,i,a)},_=Q({inputs:{x:g(m,`unsortedSegmentSum`,a,h,o)},backend:n,attrs:{shape:f}}),v=_;if(u!=null){c.push(_);let e=Ju(u);v=IT({inputs:{x:v},backend:n,attrs:{perm:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}var kM=[VT,WT,GT,KT,JT,QT,eE,nE,lE,dE,fE,pE,mE,hE,gE,bE,SE,EE,OE,AE,NE,VE,UE,GE,$E,tD,aD,oT,lD,vD,DD,ND,FD,LD,zD,VD,HD,UD,GD,QD,eO,nO,aO,lO,pO,hO,vO,xO,CO,wO,DO,OO,kO,jO,NO,FO,zO,HO,WO,KO,qO,XO,tk,rk,ok,uk,dk,fk,iT,mk,mD,hk,gk,_k,uT,vk,yk,xk,Sk,Ck,wk,Tk,Ek,kk,jk,Pk,Fk,Lk,zk,Uk,Gk,qk,Yk,Zk,Qk,tA,nA,fA,ST,gA,yA,SA,TA,qE,DA,jA,NA,LA,RA,mT,BA,HA,WA,KA,YE,aA,qA,JA,YA,wT,$A,nj,oj,lj,pj,hj,gj,_j,bj,Cj,Ej,Dj,Oj,kj,Aj,jj,BE,uA,Mj,Nj,Fj,Lj,zj,Vj,Uj,Gj,qj,Jj,Xj,Qj,tM,rM,aM,sM,cA,FT,cM,lM,pM,yM,SM,LT,wM,EM,{kernelName:Pr,backendName:`webgl`,kernelFunc:OM},kA];for(let e of kM)Yr(e);N().registerFlag(`KEEP_INTERMEDIATE_TENSORS`,()=>!1,e=>{e&&console.warn(`Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.`)});var AM;(function(e){e[e.DT_INVALID=0]=`DT_INVALID`,e[e.DT_FLOAT=1]=`DT_FLOAT`,e[e.DT_DOUBLE=2]=`DT_DOUBLE`,e[e.DT_INT32=3]=`DT_INT32`,e[e.DT_UINT8=4]=`DT_UINT8`,e[e.DT_INT16=5]=`DT_INT16`,e[e.DT_INT8=6]=`DT_INT8`,e[e.DT_STRING=7]=`DT_STRING`,e[e.DT_COMPLEX64=8]=`DT_COMPLEX64`,e[e.DT_INT64=9]=`DT_INT64`,e[e.DT_BOOL=10]=`DT_BOOL`,e[e.DT_QINT8=11]=`DT_QINT8`,e[e.DT_QUINT8=12]=`DT_QUINT8`,e[e.DT_QINT32=13]=`DT_QINT32`,e[e.DT_BFLOAT16=14]=`DT_BFLOAT16`,e[e.DT_QINT16=15]=`DT_QINT16`,e[e.DT_QUINT16=16]=`DT_QUINT16`,e[e.DT_UINT16=17]=`DT_UINT16`,e[e.DT_COMPLEX128=18]=`DT_COMPLEX128`,e[e.DT_HALF=19]=`DT_HALF`,e[e.DT_RESOURCE=20]=`DT_RESOURCE`,e[e.DT_VARIANT=21]=`DT_VARIANT`,e[e.DT_UINT32=22]=`DT_UINT32`,e[e.DT_UINT64=23]=`DT_UINT64`,e[e.DT_FLOAT_REF=101]=`DT_FLOAT_REF`,e[e.DT_DOUBLE_REF=102]=`DT_DOUBLE_REF`,e[e.DT_INT32_REF=103]=`DT_INT32_REF`,e[e.DT_UINT8_REF=104]=`DT_UINT8_REF`,e[e.DT_INT16_REF=105]=`DT_INT16_REF`,e[e.DT_INT8_REF=106]=`DT_INT8_REF`,e[e.DT_STRING_REF=107]=`DT_STRING_REF`,e[e.DT_COMPLEX64_REF=108]=`DT_COMPLEX64_REF`,e[e.DT_INT64_REF=109]=`DT_INT64_REF`,e[e.DT_BOOL_REF=110]=`DT_BOOL_REF`,e[e.DT_QINT8_REF=111]=`DT_QINT8_REF`,e[e.DT_QUINT8_REF=112]=`DT_QUINT8_REF`,e[e.DT_QINT32_REF=113]=`DT_QINT32_REF`,e[e.DT_BFLOAT16_REF=114]=`DT_BFLOAT16_REF`,e[e.DT_QINT16_REF=115]=`DT_QINT16_REF`,e[e.DT_QUINT16_REF=116]=`DT_QUINT16_REF`,e[e.DT_UINT16_REF=117]=`DT_UINT16_REF`,e[e.DT_COMPLEX128_REF=118]=`DT_COMPLEX128_REF`,e[e.DT_HALF_REF=119]=`DT_HALF_REF`,e[e.DT_RESOURCE_REF=120]=`DT_RESOURCE_REF`,e[e.DT_VARIANT_REF=121]=`DT_VARIANT_REF`,e[e.DT_UINT32_REF=122]=`DT_UINT32_REF`,e[e.DT_UINT64_REF=123]=`DT_UINT64_REF`})(AM||={});var jM;(function(e){(function(e){e[e.LEGACY=0]=`LEGACY`,e[e.V1=1]=`V1`,e[e.V2=2]=`V2`})(e.CheckpointFormatVersion||={})})(jM||={});var MM={};function NM(e){return MM[e]}function $(e,t,n,r,i){let a=t.inputParams[e];if(a&&a.inputIndexStart!==void 0){let e=a.inputIndexStart,o=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?e+1:a.inputIndexEnd;if(a.type===`tensor`)return PM(t.inputNames[a.inputIndexStart],n,r,i);if(a.type===`tensors`)return t.inputNames.slice(e,o).map(e=>PM(e,n,r,i));let s=PM(t.inputNames.slice(e)[0],n,r,i),c=s.dataSync();return a.type===`number`?c[0]:Se(s.shape,c)}let o=t.attrParams[e];return o&&o.value}function PM(e,t,n,r){let[i,a]=RM(e);if(r!=null){let e=r.getHashTableHandleByName(i);if(e!=null)return e}let o=n.currentContextIds.find(e=>!!t[LM(i,e)]);return o===void 0?void 0:t[LM(i,o)][a]}function FM(e,t,n){return t[LM(e,n.currentContextId)]}function IM(e,t){let[n,r,i]=RM(e);return[LM(n,t&&t.currentContextId),r,i]}function LM(e,t){return t?`${e}-${t}`:e}function RM(e){let t=e.split(`:`);if(t.length===1)return[e,0,void 0];let n=t[0],r=t.length===3?t[1]:void 0;return[n,Number(t[t.length-1]),r]}function zM(e,t,n){let r=$(`pad`,e,t,n);if(r===`explicit`){r=$(`explicitPaddings`,e,t,n);let i=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)i[e][0]=r[e*2],i[e][1]=r[e*2+1];return i}return r}function BM(e){return e.kept?e:zo(e)}var VM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`Add`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`AddV2`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`AddN`,category:`arithmetic`,inputs:[{start:0,end:0,name:`tensors`,type:`tensors`}]},{tfOpName:`BiasAdd`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0}]},{tfOpName:`Sub`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`RealDiv`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Div`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`DivNoNan`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`FloorDiv`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Mul`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Maximum`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Minimum`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Pow`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`SquaredDifference`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Mod`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`FloorMod`,category:`arithmetic`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]}]},Symbol.toStringTag,{value:`Module`})),HM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`Abs`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Acos`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Asin`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Atan`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Atan2`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`y`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Ceil`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`ClipByValue`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`clipValueMin`,type:`number`},{start:2,name:`clipValueMax`,type:`number`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Complex`,category:`basic_math`,inputs:[{start:0,name:`real`,type:`tensor`},{start:1,name:`imag`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`ComplexAbs`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Cos`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Cosh`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Elu`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Exp`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Floor`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Log`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Imag`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`Tout`,name:`outputType`,type:`dtype`,notSupported:!0}]},{tfOpName:`Neg`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Real`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`Tout`,name:`outputType`,type:`dtype`,notSupported:!0}]},{tfOpName:`Prelu`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`alpha`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Relu`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Relu6`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Selu`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Sigmoid`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Sin`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Sinh`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Sqrt`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Rsqrt`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Square`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Tan`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Tanh`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Sign`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Round`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Expm1`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Log1p`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Reciprocal`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Softplus`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Asinh`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Acosh`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Atanh`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Erf`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Prod`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axes`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`,notSupported:!0},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`LeakyRelu`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`alpha`,name:`alpha`,type:`number`,defaultValue:.2},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`IsNan`,category:`basic_math`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]}]},Symbol.toStringTag,{value:`Module`})),UM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`EmptyTensorList`,category:`control`,inputs:[{start:0,name:`elementShape`,type:`shape`},{start:1,name:`maxNumElements`,type:`number`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`LoopCond`,category:`control`,inputs:[{start:0,name:`pred`,type:`tensor`}]},{tfOpName:`Switch`,category:`control`,inputs:[{start:0,name:`data`,type:`tensor`},{start:1,name:`pred`,type:`tensor`}]},{tfOpName:`Merge`,category:`control`,inputs:[{start:0,end:0,name:`tensors`,type:`tensors`}]},{tfOpName:`Enter`,category:`control`,inputs:[{start:0,name:`tensor`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`frame_name`,name:`frameName`,type:`string`},{tfName:`is_constant`,name:`isConstant`,type:`bool`}]},{tfOpName:`Exit`,category:`control`,inputs:[{start:0,name:`tensor`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`NextIteration`,category:`control`,inputs:[{start:0,name:`tensor`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`TensorArrayV3`,category:`control`,inputs:[{start:0,name:`size`,type:`number`}],attrs:[{tfName:`dtype`,name:`dtype`,type:`dtype`},{tfName:`element_shape`,name:`elementShape`,type:`shape`},{tfName:`dynamic_size`,name:`dynamicSize`,type:`bool`},{tfName:`clear_after_read`,name:`clearAfterRead`,type:`bool`},{tfName:`identical_element_shapes`,name:`identicalElementShapes`,type:`bool`},{tfName:`tensor_array_name`,name:`name`,type:`string`}]},{tfOpName:`TensorArrayWriteV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`},{start:1,name:`index`,type:`number`},{start:2,name:`tensor`,type:`tensor`},{start:3,name:`flowIn`,type:`number`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`TensorArrayReadV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`},{start:1,name:`index`,type:`number`},{start:2,name:`flowIn`,type:`number`}],attrs:[{tfName:`dtype`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`TensorArrayGatherV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`},{start:1,name:`indices`,type:`number[]`},{start:2,name:`flowIn`,type:`number`}],attrs:[{tfName:`dtype`,name:`dtype`,type:`dtype`},{tfName:`element_shape`,name:`elementShape`,type:`shape`}]},{tfOpName:`TensorArrayScatterV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`},{start:1,name:`indices`,type:`number[]`},{start:2,name:`tensor`,type:`tensor`},{start:3,name:`flowIn`,type:`number`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`}]},{tfOpName:`TensorArrayConcatV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`},{start:1,name:`flowIn`,type:`number`}],attrs:[{tfName:`dtype`,name:`dtype`,type:`dtype`},{tfName:`element_shape_except0`,name:`elementShapeExcept0`,type:`shape`,notSupported:!0}]},{tfOpName:`TensorArraySplitV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`},{start:1,name:`tensor`,type:`tensor`},{start:2,name:`lengths`,type:`number[]`},{start:3,name:`flowIn`,type:`number`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`}]},{tfOpName:`TensorArraySizeV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`},{start:1,name:`flowIn`,type:`number`}]},{tfOpName:`TensorArrayCloseV3`,category:`control`,inputs:[{start:0,name:`tensorArrayId`,type:`tensor`}]},{tfOpName:`StatelessIf`,category:`control`,inputs:[{start:0,name:`cond`,type:`tensor`},{start:1,end:0,name:`args`,type:`tensors`}],attrs:[{tfName:`then_branch`,name:`thenBranch`,type:`func`},{tfName:`else_branch`,name:`elseBranch`,type:`func`}]},{tfOpName:`If`,category:`control`,inputs:[{start:0,name:`cond`,type:`tensor`},{start:1,end:0,name:`args`,type:`tensors`}],attrs:[{tfName:`then_branch`,name:`thenBranch`,type:`func`},{tfName:`else_branch`,name:`elseBranch`,type:`func`}]},{tfOpName:`StatelessWhile`,category:`control`,inputs:[{start:0,end:0,name:`args`,type:`tensors`}],attrs:[{tfName:`cond`,name:`cond`,type:`func`},{tfName:`body`,name:`body`,type:`func`}]},{tfOpName:`While`,category:`control`,inputs:[{start:0,end:0,name:`args`,type:`tensors`}],attrs:[{tfName:`cond`,name:`cond`,type:`func`},{tfName:`body`,name:`body`,type:`func`}]},{tfOpName:`TensorListScatter`,category:`control`,inputs:[{start:0,name:`tensor`,type:`tensor`},{start:1,name:`indices`,type:`number[]`},{start:2,name:`elementShape`,type:`shape`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListScatterV2`,category:`control`,inputs:[{start:0,name:`tensor`,type:`tensor`},{start:1,name:`indices`,type:`number[]`},{start:2,name:`elementShape`,type:`shape`},{start:3,name:`numElements`,type:`number`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListGather`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`},{start:1,name:`indices`,type:`number[]`},{start:2,name:`elementShape`,type:`shape`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListGetItem`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`},{start:1,name:`index`,type:`number`},{start:2,name:`elementShape`,type:`shape`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListSetItem`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`},{start:1,name:`index`,type:`number`},{start:2,name:`tensor`,type:`tensor`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListReserve`,category:`control`,inputs:[{start:0,name:`elementShape`,type:`shape`},{start:1,name:`numElements`,type:`number`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListFromTensor`,category:`control`,inputs:[{start:0,name:`tensor`,type:`tensor`},{start:1,name:`elementShape`,type:`shape`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListStack`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`},{start:1,name:`elementShape`,type:`shape`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`},{tfName:`num_elements`,name:`numElements`,type:`dtype`}]},{tfOpName:`TensorListSplit`,category:`control`,inputs:[{start:0,name:`tensor`,type:`tensor`},{start:1,name:`elementShape`,type:`shape`},{start:2,name:`lengths`,type:`number[]`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListConcat`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`}],attrs:[{tfName:`element_shape`,name:`elementShape`,type:`shape`},{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListConcatV2`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`}],attrs:[{tfName:`element_shape`,name:`elementShape`,type:`shape`},{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListPopBack`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`},{start:1,name:`elementShape`,type:`shape`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListPushBack`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`},{start:1,name:`tensor`,type:`tensor`}],attrs:[{tfName:`element_dtype`,name:`elementDType`,type:`dtype`}]},{tfOpName:`TensorListLength`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`}]},{tfOpName:`TensorListResize`,category:`control`,inputs:[{start:0,name:`tensorListId`,type:`tensor`},{start:1,name:`size`,type:`number`}]}]},Symbol.toStringTag,{value:`Module`})),WM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`AvgPool`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0},{tfName:`ksize`,name:`kernelSize`,type:`number[]`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`MaxPool`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0},{tfName:`ksize`,name:`kernelSize`,type:`number[]`},{tfName:`explicit_paddings`,name:`explicitPaddings`,type:`number[]`,defaultValue:[],notSupported:!0},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`MaxPoolWithArgmax`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`ksize`,name:`kernelSize`,type:`number[]`},{tfName:`include_batch_in_index`,name:`includeBatchInIndex`,type:`bool`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`AvgPool3D`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0},{tfName:`ksize`,name:`kernelSize`,type:`number[]`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`MaxPool3D`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0},{tfName:`ksize`,name:`kernelSize`,type:`number[]`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Conv1D`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`filter`,type:`tensor`}],attrs:[{tfName:`stride`,name:`stride`,type:`number`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,defaultValue:`NWC`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`dilation`,name:`dilation`,type:`number`,defaultValue:1}]},{tfOpName:`Conv2D`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`filter`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`useCudnnOnGpu`,name:`useCudnnOnGpu`,type:`bool`},{tfName:`data_format`,name:`dataFormat`,type:`string`,defaultValue:`NHWC`},{tfName:`explicit_paddings`,name:`explicitPaddings`,type:`number[]`,defaultValue:[]},{tfName:`dilations`,name:`dilations`,type:`number[]`}]},{tfOpName:`_FusedConv2D`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`filter`,type:`tensor`},{start:2,end:0,name:`args`,type:`tensors`}],attrs:[{tfName:`num_args`,name:`numArgs`,type:`number`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`explicit_paddings`,name:`explicitPaddings`,type:`number[]`,defaultValue:[]},{tfName:`use_cudnn_on_gpu`,name:`useCudnnOnGpu`,type:`bool`,defaultValue:!0},{tfName:`data_format`,name:`dataFormat`,type:`string`,defaultValue:`NHWC`},{tfName:`dilations`,name:`dilations`,type:`number[]`,defaultValue:[1,1,1,1]},{tfName:`fused_ops`,name:`fusedOps`,type:`string[]`,defaultValue:[]},{tfName:`epsilon`,name:`epsilon`,type:`number`,defaultValue:1e-4},{tfName:`leakyrelu_alpha`,name:`leakyreluAlpha`,type:`number`,defaultValue:.2}]},{tfOpName:`Conv2DBackpropInput`,category:`convolution`,inputs:[{start:2,name:`x`,type:`tensor`},{start:1,name:`filter`,type:`tensor`},{start:0,name:`outputShape`,type:`number[]`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0},{tfName:`explicit_paddings`,name:`explicitPaddings`,type:`number[]`,defaultValue:[]},{tfName:`dilations`,name:`dilations`,type:`number[]`,notSupported:!0}]},{tfOpName:`DepthwiseConv2d`,category:`convolution`,inputs:[{start:0,name:`input`,type:`tensor`},{start:1,name:`filter`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,defaultValue:`NHWC`},{tfName:`explicit_paddings`,name:`explicitPaddings`,type:`number[]`,defaultValue:[]},{tfName:`dilations`,name:`dilations`,type:`number[]`}]},{tfOpName:`DepthwiseConv2dNative`,category:`convolution`,inputs:[{start:0,name:`input`,type:`tensor`},{start:1,name:`filter`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,defaultValue:`NHWC`},{tfName:`explicit_paddings`,name:`explicitPaddings`,type:`number[]`,defaultValue:[]},{tfName:`dilations`,name:`dilations`,type:`number[]`}]},{tfOpName:`FusedDepthwiseConv2dNative`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`filter`,type:`tensor`},{start:2,end:0,name:`args`,type:`tensors`}],attrs:[{tfName:`num_args`,name:`numArgs`,type:`number`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,defaultValue:`NHWC`},{tfName:`dilations`,name:`dilations`,type:`number[]`,defaultValue:[1,1,1,1]},{tfName:`fused_ops`,name:`fusedOps`,type:`string[]`,defaultValue:[]},{tfName:`explicit_paddings`,name:`explicitPaddings`,type:`number[]`,defaultValue:[]}]},{tfOpName:`Conv3D`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`filter`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`},{tfName:`data_format`,name:`dataFormat`,type:`string`,defaultValue:`NHWC`},{tfName:`dilations`,name:`dilations`,type:`number[]`}]},{tfOpName:`Dilation2D`,category:`convolution`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`filter`,type:`tensor`}],attrs:[{tfName:`strides`,name:`strides`,type:`number[]`},{tfName:`rates`,name:`dilations`,type:`number[]`},{tfName:`padding`,name:`pad`,type:`string`}]}]},Symbol.toStringTag,{value:`Module`})),GM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`Fill`,category:`creation`,inputs:[{start:0,name:`shape`,type:`number[]`},{start:1,name:`value`,type:`number`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`}]},{tfOpName:`LinSpace`,category:`creation`,inputs:[{start:0,name:`start`,type:`number`},{start:1,name:`stop`,type:`number`},{start:2,name:`num`,type:`number`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`OneHot`,category:`creation`,inputs:[{start:0,name:`indices`,type:`tensor`},{start:1,name:`depth`,type:`number`},{start:2,name:`onValue`,type:`number`,defaultValue:1},{start:3,name:`offValue`,type:`number`,defaultValue:0}],attrs:[{tfName:`axis`,name:`axis`,type:`number`,notSupported:!0},{tfName:`T`,name:`dtype`,type:`dtype`}]},{tfOpName:`Ones`,category:`creation`,inputs:[{start:0,name:`shape`,type:`number[]`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`}]},{tfOpName:`OnesLike`,category:`creation`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`dtype`,name:`dtype`,type:`dtype`}]},{tfOpName:`RandomStandardNormal`,category:`creation`,inputs:[{start:0,name:`shape`,type:`number[]`}],attrs:[{tfName:`seed`,name:`seed`,type:`number`,defaultValue:0},{tfName:`seed2`,name:`seed2`,type:`number`,defaultValue:0,notSupported:!0},{tfName:`dtype`,name:`dtype`,type:`dtype`},{tfName:`T`,name:`T`,type:`number`,notSupported:!0}]},{tfOpName:`RandomUniform`,category:`creation`,inputs:[{start:0,name:`shape`,type:`number[]`}],attrs:[{tfName:`minval`,name:`minval`,type:`number`,defaultValue:0},{tfName:`maxval`,name:`maxval`,type:`number`,defaultValue:1},{tfName:`dtype`,name:`dtype`,type:`dtype`},{tfName:`seed`,name:`seed`,type:`number`,defaultValue:0},{tfName:`seed2`,name:`seed2`,type:`number`,defaultValue:0,notSupported:!0},{tfName:`T`,name:`T`,type:`number`,notSupported:!0}]},{tfOpName:`Range`,category:`creation`,inputs:[{start:0,name:`start`,type:`number`},{start:1,name:`stop`,type:`number`},{start:2,name:`step`,type:`number`,defaultValue:0}],attrs:[{tfName:`Tidx`,name:`dtype`,type:`dtype`}]},{tfOpName:`TruncatedNormal`,category:`creation`,inputs:[{start:0,name:`shape`,type:`number[]`}],attrs:[{tfName:`means`,name:`mean`,type:`number`,defaultValue:0},{tfName:`stddev`,name:`stdDev`,type:`number`,defaultValue:1},{tfName:`seed`,name:`seed`,type:`number`},{tfName:`seed2`,name:`seed2`,type:`number`,defaultValue:0,notSupported:!0},{tfName:`dtype`,name:`dtype`,type:`dtype`},{tfName:`T`,name:`T`,type:`number`,notSupported:!0}]},{tfOpName:`Zeros`,category:`creation`,inputs:[{start:0,name:`shape`,type:`number[]`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`}]},{tfOpName:`ZerosLike`,category:`creation`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`}]},{tfOpName:`Multinomial`,category:`creation`,inputs:[{start:0,name:`logits`,type:`tensor`},{start:1,name:`numSamples`,type:`number`}],attrs:[{tfName:`seed`,name:`seed`,type:`number`},{tfName:`seed2`,name:`seed2`,type:`number`},{tfName:`T`,name:`dtype`,type:`dtype`},{tfName:`output_dtype`,name:`output_dtype`,type:`dtype`}]}]},Symbol.toStringTag,{value:`Module`})),KM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`NonMaxSuppressionV2`,category:`dynamic`,inputs:[{start:0,name:`boxes`,type:`tensor`},{start:1,name:`scores`,type:`tensor`},{start:2,name:`maxOutputSize`,type:`number`},{start:3,name:`iouThreshold`,type:`number`}]},{tfOpName:`NonMaxSuppressionV3`,category:`dynamic`,inputs:[{start:0,name:`boxes`,type:`tensor`},{start:1,name:`scores`,type:`tensor`},{start:2,name:`maxOutputSize`,type:`number`},{start:3,name:`iouThreshold`,type:`number`},{start:4,name:`scoreThreshold`,type:`number`}]},{tfOpName:`NonMaxSuppressionV4`,category:`dynamic`,inputs:[{start:0,name:`boxes`,type:`tensor`},{start:1,name:`scores`,type:`tensor`},{start:2,name:`maxOutputSize`,type:`number`},{start:3,name:`iouThreshold`,type:`number`},{start:4,name:`scoreThreshold`,type:`number`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0},{tfName:`T_threshold`,name:`threshold`,type:`dtype`,notSupported:!0},{tfName:`pad_to_max_output_size`,name:`padToMaxOutputSize`,type:`bool`}]},{tfOpName:`NonMaxSuppressionV5`,category:`dynamic`,inputs:[{start:0,name:`boxes`,type:`tensor`},{start:1,name:`scores`,type:`tensor`},{start:2,name:`maxOutputSize`,type:`number`},{start:3,name:`iouThreshold`,type:`number`},{start:4,name:`scoreThreshold`,type:`number`},{start:5,name:`softNmsSigma`,type:`number`}]},{tfOpName:`Where`,category:`dynamic`,inputs:[{start:0,name:`condition`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`ListDiff`,category:`dynamic`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`y`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]}]},Symbol.toStringTag,{value:`Module`})),qM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`LowerBound`,category:`evaluation`,inputs:[{start:0,name:`sortedSequence`,type:`tensor`},{start:1,name:`values`,type:`tensor`}]},{tfOpName:`TopKV2`,category:`evaluation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`k`,type:`number`}],attrs:[{tfName:`sorted`,name:`sorted`,type:`bool`}]},{tfOpName:`UpperBound`,category:`evaluation`,inputs:[{start:0,name:`sortedSequence`,type:`tensor`},{start:1,name:`values`,type:`tensor`}]},{tfOpName:`Unique`,category:`evaluation`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`UniqueV2`,category:`evaluation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number`}]}]},Symbol.toStringTag,{value:`Module`})),JM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`PlaceholderWithDefault`,category:`graph`,inputs:[{start:0,name:`default`,type:`tensor`}],attrs:[{tfName:`shape`,name:`shape`,type:`shape`},{tfName:`dtype`,name:`dtype`,type:`dtype`}]},{tfOpName:`Placeholder`,category:`graph`,attrs:[{tfName:`shape`,name:`shape`,type:`shape`},{tfName:`dtype`,name:`dtype`,type:`dtype`}]},{tfOpName:`Const`,category:`graph`},{tfOpName:`Identity`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`IdentityN`,category:`graph`,inputs:[{start:0,end:0,name:`x`,type:`tensors`}]},{tfOpName:`Snapshot`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`Rank`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`Size`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`Shape`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`ShapeN`,category:`graph`,inputs:[{start:0,end:0,name:`x`,type:`tensors`}]},{tfOpName:`Print`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`data`,type:`tensors`}],attrs:[{tfName:`message`,name:`message`,type:`string`},{tfName:`first_n`,name:`firstN`,type:`number`,notSupported:!0},{tfName:`summarize`,name:`summarize`,type:`number`,defaultValue:3}]},{tfOpName:`NoOp`,category:`graph`,inputs:[]},{tfOpName:`StopGradient`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`FakeQuantWithMinMaxVars`,category:`graph`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`min`,name:`min`,type:`number`},{tfName:`max`,name:`max`,type:`number`}]}]},Symbol.toStringTag,{value:`Module`})),YM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`HashTable`,category:`hash_table`,inputs:[],attrs:[{tfName:`shared_name`,name:`sharedName`,type:`string`},{tfName:`use_node_name_sharing`,name:`useNodeNameSharing`,type:`bool`},{tfName:`key_dtype`,name:`keyDType`,type:`dtype`},{tfName:`value_dtype`,name:`valueDType`,type:`dtype`}]},{tfOpName:`HashTableV2`,category:`hash_table`,inputs:[],attrs:[{tfName:`shared_name`,name:`sharedName`,type:`string`},{tfName:`use_node_name_sharing`,name:`useNodeNameSharing`,type:`bool`},{tfName:`key_dtype`,name:`keyDType`,type:`dtype`},{tfName:`value_dtype`,name:`valueDType`,type:`dtype`}]},{tfOpName:`LookupTableImport`,category:`hash_table`,inputs:[{start:0,name:`tableHandle`,type:`tensor`},{start:1,name:`keys`,type:`tensor`},{start:2,name:`values`,type:`tensor`}],attrs:[{tfName:`Tin`,name:`tIn`,type:`dtype`,notSupported:!0},{tfName:`Tout`,name:`tOut`,type:`dtype`,notSupported:!0}]},{tfOpName:`LookupTableImportV2`,category:`hash_table`,inputs:[{start:0,name:`tableHandle`,type:`tensor`},{start:1,name:`keys`,type:`tensor`},{start:2,name:`values`,type:`tensor`}],attrs:[{tfName:`Tin`,name:`tIn`,type:`dtype`,notSupported:!0},{tfName:`Tout`,name:`tOut`,type:`dtype`,notSupported:!0}]},{tfOpName:`LookupTableFind`,category:`hash_table`,inputs:[{start:0,name:`tableHandle`,type:`tensor`},{start:1,name:`keys`,type:`tensor`},{start:2,name:`defaultValue`,type:`tensor`}],attrs:[{tfName:`Tin`,name:`tIn`,type:`dtype`,notSupported:!0},{tfName:`Tout`,name:`tOut`,type:`dtype`,notSupported:!0}]},{tfOpName:`LookupTableFindV2`,category:`hash_table`,inputs:[{start:0,name:`tableHandle`,type:`tensor`},{start:1,name:`keys`,type:`tensor`},{start:2,name:`defaultValue`,type:`tensor`}],attrs:[{tfName:`Tin`,name:`tIn`,type:`dtype`,notSupported:!0},{tfName:`Tout`,name:`tOut`,type:`dtype`,notSupported:!0}]},{tfOpName:`LookupTableSize`,category:`hash_table`,inputs:[{start:0,name:`tableHandle`,type:`tensor`}]},{tfOpName:`LookupTableSizeV2`,category:`hash_table`,inputs:[{start:0,name:`tableHandle`,type:`tensor`}]}]},Symbol.toStringTag,{value:`Module`})),XM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`ResizeBilinear`,category:`image`,inputs:[{start:0,name:`images`,type:`tensor`},{start:1,name:`size`,type:`number[]`}],attrs:[{tfName:`align_corners`,name:`alignCorners`,type:`bool`},{tfName:`half_pixel_centers`,name:`halfPixelCenters`,type:`bool`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`ResizeNearestNeighbor`,category:`image`,inputs:[{start:0,name:`images`,type:`tensor`},{start:1,name:`size`,type:`number[]`}],attrs:[{tfName:`align_corners`,name:`alignCorners`,type:`bool`},{tfName:`half_pixel_centers`,name:`halfPixelCenters`,type:`bool`},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`CropAndResize`,category:`image`,inputs:[{start:0,name:`image`,type:`tensor`},{start:1,name:`boxes`,type:`tensor`},{start:2,name:`boxInd`,type:`tensor`},{start:3,name:`cropSize`,type:`number[]`}],attrs:[{tfName:`method`,name:`method`,type:`string`},{tfName:`extrapolation_value`,name:`extrapolationValue`,type:`number`}]},{tfOpName:`ImageProjectiveTransformV3`,category:`image`,inputs:[{start:0,name:`images`,type:`tensor`},{start:1,name:`transforms`,type:`tensor`},{start:2,name:`outputShape`,type:`number[]`},{start:3,name:`fillValue`,type:`number`}],attrs:[{tfName:`interpolation`,name:`interpolation`,type:`string`},{tfName:`fill_mode`,name:`fillMode`,type:`string`}]}]},Symbol.toStringTag,{value:`Module`})),ZM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`Equal`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`NotEqual`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Greater`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`GreaterEqual`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Less`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`LessEqual`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`LogicalAnd`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`LogicalNot`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`LogicalOr`,category:`logical`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Select`,category:`logical`,inputs:[{start:0,name:`condition`,type:`tensor`},{start:1,name:`a`,type:`tensor`},{start:2,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`SelectV2`,category:`logical`,inputs:[{start:0,name:`condition`,type:`tensor`},{start:1,name:`a`,type:`tensor`},{start:2,name:`b`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]}]},Symbol.toStringTag,{value:`Module`})),QM=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`_FusedMatMul`,category:`matrices`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`},{start:2,end:0,name:`args`,type:`tensors`}],attrs:[{tfName:`num_args`,name:`numArgs`,type:`number`},{tfName:`fused_ops`,name:`fusedOps`,type:`string[]`,defaultValue:[]},{tfName:`epsilon`,name:`epsilon`,type:`number`,defaultValue:1e-4},{tfName:`transpose_a`,name:`transposeA`,type:`bool`,defaultValue:!1},{tfName:`transpose_b`,name:`transposeB`,type:`bool`,defaultValue:!1},{tfName:`leakyrelu_alpha`,name:`leakyreluAlpha`,type:`number`,defaultValue:.2},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`MatMul`,category:`matrices`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`transpose_a`,name:`transposeA`,type:`bool`,defaultValue:!1},{tfName:`transpose_b`,name:`transposeB`,type:`bool`,defaultValue:!1},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`BatchMatMul`,category:`matrices`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`adj_x`,name:`transposeA`,type:`bool`,defaultValue:!1},{tfName:`adj_y`,name:`transposeB`,type:`bool`,defaultValue:!1},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`BatchMatMulV2`,category:`matrices`,inputs:[{start:0,name:`a`,type:`tensor`},{start:1,name:`b`,type:`tensor`}],attrs:[{tfName:`adj_x`,name:`transposeA`,type:`bool`,defaultValue:!1},{tfName:`adj_y`,name:`transposeB`,type:`bool`,defaultValue:!1},{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Transpose`,category:`matrices`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`perm`,type:`number[]`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`Einsum`,category:`matrices`,inputs:[{start:0,end:0,name:`tensors`,type:`tensors`}],attrs:[{tfName:`equation`,name:`equation`,type:`string`},{tfName:`N`,name:`n`,type:`number`,defaultValue:2},{tfName:`T`,name:`dtype`,type:`dtype`}]}]},Symbol.toStringTag,{value:`Module`})),$M=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`EuclideanNorm`,category:`normalization`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`,defaultValue:!1}]},{tfOpName:`FusedBatchNorm`,category:`normalization`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`scale`,type:`tensor`},{start:2,name:`offset`,type:`tensor`},{start:3,name:`mean`,type:`tensor`},{start:4,name:`variance`,type:`tensor`}],attrs:[{tfName:`epsilon`,name:`epsilon`,type:`number`,defaultValue:.001},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0}]},{tfOpName:`FusedBatchNormV2`,category:`normalization`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`scale`,type:`tensor`},{start:2,name:`offset`,type:`tensor`},{start:3,name:`mean`,type:`tensor`},{start:4,name:`variance`,type:`tensor`}],attrs:[{tfName:`epsilon`,name:`epsilon`,type:`number`,defaultValue:.001},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0}]},{tfOpName:`FusedBatchNormV3`,category:`normalization`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`scale`,type:`tensor`},{start:2,name:`offset`,type:`tensor`},{start:3,name:`mean`,type:`tensor`},{start:4,name:`variance`,type:`tensor`}],attrs:[{tfName:`epsilon`,name:`epsilon`,type:`number`,defaultValue:.001},{tfName:`data_format`,name:`dataFormat`,type:`string`,notSupported:!0}]},{tfOpName:`LRN`,category:`normalization`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`depth_radius`,name:`radius`,type:`number`,defaultValue:5},{tfName:`bias`,name:`bias`,type:`number`,defaultValue:1},{tfName:`alpha`,name:`alpha`,type:`number`,defaultValue:1},{tfName:`beta`,name:`beta`,type:`number`,defaultValue:.5}]},{tfOpName:`Softmax`,category:`normalization`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`LogSoftmax`,category:`normalization`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`SparseToDense`,category:`normalization`,inputs:[{start:0,name:`sparseIndices`,type:`tensor`},{start:1,name:`outputShape`,type:`number[]`},{start:2,name:`sparseValues`,type:`tensor`},{start:3,name:`defaultValue`,type:`tensor`}],attrs:[{tfName:`validate_indices`,name:`validateIndices`,type:`bool`,defaultValue:!0,notSupported:!0}]}]},Symbol.toStringTag,{value:`Module`})),eN=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`Bincount`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`size`,type:`number`},{start:2,name:`weights`,type:`tensor`}]},{tfOpName:`DenseBincount`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`size`,type:`number`},{start:2,name:`weights`,type:`tensor`}],attrs:[{tfName:`binary_output`,name:`binaryOutput`,type:`bool`}]},{tfOpName:`Max`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`}]},{tfOpName:`Mean`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`}]},{tfOpName:`Min`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`}]},{tfOpName:`Sum`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`}]},{tfOpName:`All`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`}]},{tfOpName:`Any`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`}]},{tfOpName:`ArgMax`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number`}]},{tfOpName:`ArgMin`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number`}]},{tfOpName:`Prod`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}],attrs:[{tfName:`keep_dims`,name:`keepDims`,type:`bool`}]},{tfOpName:`Cumprod`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number`}],attrs:[{tfName:`exclusive`,name:`exclusive`,type:`bool`},{tfName:`reverse`,name:`reverse`,type:`bool`}]},{tfOpName:`Cumsum`,category:`reduction`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number`}],attrs:[{tfName:`exclusive`,name:`exclusive`,type:`bool`},{tfName:`reverse`,name:`reverse`,type:`bool`}]}]},Symbol.toStringTag,{value:`Module`})),tN=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`ConcatV2`,category:`slice_join`,inputs:[{start:0,end:-1,name:`tensors`,type:`tensors`},{start:-1,name:`axis`,type:`number`}],attrs:[{tfName:`N`,name:`n`,type:`number`,defaultValue:2}]},{tfOpName:`Concat`,category:`slice_join`,inputs:[{start:1,end:0,name:`tensors`,type:`tensors`},{start:0,name:`axis`,type:`number`}],attrs:[{tfName:`N`,name:`n`,type:`number`,defaultValue:2}]},{tfOpName:`GatherV2`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`indices`,type:`tensor`},{start:2,name:`axis`,type:`number`,defaultValue:0}],attrs:[{tfName:`batch_dims`,name:`batchDims`,type:`number`,defaultValue:0}]},{tfOpName:`Gather`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`indices`,type:`tensor`}],attrs:[{tfName:`validate_indices`,name:`validateIndices`,type:`bool`,notSupported:!0}]},{tfOpName:`Reverse`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`dims`,type:`bool[]`}]},{tfOpName:`ReverseV2`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number[]`}]},{tfOpName:`Slice`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`begin`,type:`number[]`},{start:2,name:`size`,type:`number[]`}]},{tfOpName:`StridedSlice`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`begin`,type:`number[]`},{start:2,name:`end`,type:`number[]`},{start:3,name:`strides`,type:`number[]`}],attrs:[{tfName:`begin_mask`,name:`beginMask`,type:`number`,defaultValue:0},{tfName:`end_mask`,name:`endMask`,type:`number`,defaultValue:0},{tfName:`new_axis_mask`,name:`newAxisMask`,type:`number`,defaultValue:0},{tfName:`ellipsis_mask`,name:`ellipsisMask`,type:`number`,defaultValue:0},{tfName:`shrink_axis_mask`,name:`shrinkAxisMask`,type:`number`,defaultValue:0}]},{tfOpName:`Pack`,category:`slice_join`,inputs:[{start:0,end:0,name:`tensors`,type:`tensors`}],attrs:[{tfName:`axis`,name:`axis`,type:`number`,defaultValue:0}]},{tfOpName:`Unpack`,category:`slice_join`,inputs:[{start:0,name:`tensor`,type:`tensor`}],attrs:[{tfName:`axis`,name:`axis`,type:`number`,defaultValue:0},{tfName:`num`,name:`num`,type:`number`,defaultValue:0,notSupported:!0}]},{tfOpName:`Tile`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`reps`,type:`number[]`}]},{tfOpName:`Split`,category:`slice_join`,inputs:[{start:0,name:`axis`,type:`number`,defaultValue:0},{start:1,name:`x`,type:`tensor`}],attrs:[{tfName:`num_split`,name:`numOrSizeSplits`,type:`number`,defaultValue:1}]},{tfOpName:`SplitV`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`numOrSizeSplits`,type:`number[]`},{start:2,name:`axis`,type:`number`,defaultValue:0}]},{tfOpName:`ScatterNd`,category:`slice_join`,inputs:[{start:0,name:`indices`,type:`tensor`},{start:1,name:`values`,type:`tensor`},{start:2,name:`shape`,type:`number[]`}]},{tfOpName:`GatherNd`,category:`slice_join`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`indices`,type:`tensor`}]},{tfOpName:`SparseToDense`,category:`slice_join`,inputs:[{start:0,name:`sparseIndices`,type:`tensor`},{start:1,name:`outputShape`,type:`number[]`},{start:2,name:`sparseValues`,type:`tensor`},{start:3,name:`defaultValue`,type:`tensor`}],attrs:[{tfName:`validate_indices`,name:`validateIndices`,type:`bool`,defaultValue:!1,notSupported:!0}]}]},Symbol.toStringTag,{value:`Module`})),nN=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`SparseFillEmptyRows`,category:`sparse`,inputs:[{start:0,name:`indices`,type:`tensor`},{start:1,name:`values`,type:`tensor`},{start:2,name:`denseShape`,type:`tensor`},{start:3,name:`defaultValue`,type:`tensor`}]},{tfOpName:`SparseReshape`,category:`sparse`,inputs:[{start:0,name:`inputIndices`,type:`tensor`},{start:1,name:`inputShape`,type:`tensor`},{start:2,name:`newShape`,type:`tensor`}],attrs:[{tfName:`T`,name:`dtype`,type:`dtype`,notSupported:!0}]},{tfOpName:`SparseSegmentMean`,category:`sparse`,inputs:[{start:0,name:`data`,type:`tensor`},{start:1,name:`indices`,type:`tensor`},{start:2,name:`segmentIds`,type:`tensor`}]},{tfOpName:`SparseSegmentSum`,category:`sparse`,inputs:[{start:0,name:`data`,type:`tensor`},{start:1,name:`indices`,type:`tensor`},{start:2,name:`segmentIds`,type:`tensor`}]}]},Symbol.toStringTag,{value:`Module`})),rN=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`FFT`,category:`spectral`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`IFFT`,category:`spectral`,inputs:[{start:0,name:`x`,type:`tensor`}]},{tfOpName:`RFFT`,category:`spectral`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`fft_length`,type:`number`,notSupported:!0}]},{tfOpName:`IRFFT`,category:`spectral`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`fft_length`,type:`number`,notSupported:!0}]}]},Symbol.toStringTag,{value:`Module`})),iN=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`StringNGrams`,category:`string`,inputs:[{start:0,name:`data`,type:`tensor`},{start:1,name:`dataSplits`,type:`tensor`}],attrs:[{tfName:`separator`,name:`separator`,type:`string`},{tfName:`ngram_widths`,name:`nGramWidths`,type:`number[]`},{tfName:`left_pad`,name:`leftPad`,type:`string`},{tfName:`right_pad`,name:`rightPad`,type:`string`},{tfName:`pad_width`,name:`padWidth`,type:`number`},{tfName:`preserve_short_sequences`,name:`preserveShortSequences`,type:`bool`}],outputs:[`ngrams`,`ngrams_splits`]},{tfOpName:`StringSplit`,category:`string`,inputs:[{start:0,name:`input`,type:`tensor`},{start:1,name:`delimiter`,type:`tensor`}],attrs:[{tfName:`skip_empty`,name:`skipEmpty`,type:`bool`}],outputs:[`indices`,`values`,`shape`]},{tfOpName:`StringToHashBucketFast`,category:`string`,inputs:[{start:0,name:`input`,type:`tensor`}],attrs:[{tfName:`num_buckets`,name:`numBuckets`,type:`number`}]}]},Symbol.toStringTag,{value:`Module`})),aN=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:`Cast`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`SrcT`,name:`sdtype`,type:`dtype`,notSupported:!0},{tfName:`DstT`,name:`dtype`,type:`dtype`}]},{tfOpName:`ExpandDims`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`axis`,type:`number`}]},{tfOpName:`MirrorPad`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`padding`,type:`number[]`}],attrs:[{tfName:`mode`,name:`mode`,type:`string`}]},{tfOpName:`Pad`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`padding`,type:`number[]`}],attrs:[{tfName:`constant_value`,name:`constantValue`,type:`number`,defaultValue:0}]},{tfOpName:`PadV2`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`padding`,type:`number[]`},{start:2,name:`constantValue`,type:`number`,defaultValue:0}]},{tfOpName:`Reshape`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`shape`,type:`number[]`}]},{tfOpName:`Squeeze`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`axis`,tfDeprecatedName:`squeeze_dims`,name:`axis`,type:`number[]`}]},{tfOpName:`SpaceToBatchND`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`blockShape`,type:`number[]`},{start:2,name:`paddings`,type:`number[]`}]},{tfOpName:`BatchToSpaceND`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`blockShape`,type:`number[]`},{start:2,name:`crops`,type:`number[]`}]},{tfOpName:`DepthToSpace`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`}],attrs:[{tfName:`block_size`,name:`blockSize`,type:`number`},{tfName:`data_format`,name:`dataFormat`,type:`string`}]},{tfOpName:`BroadcastTo`,category:`transformation`,inputs:[{start:0,name:`x`,type:`tensor`},{start:1,name:`shape`,type:`number[]`}],attrs:[]},{tfOpName:`BroadcastArgs`,category:`transformation`,inputs:[{start:0,name:`s0`,type:`tensor`},{start:1,name:`s1`,type:`tensor`}],attrs:[]}]},Symbol.toStringTag,{value:`Module`})),oN=class{static get Instance(){return this._instance||=new this}constructor(){let e=[VM,HM,UM,WM,GM,KM,qM,JM,YM,XM,ZM,QM,$M,eN,tN,nN,rN,iN,aN],t=[].concat(...e.map(e=>e.json));this.opMappers=t.reduce((e,t)=>(e[t.tfOpName]=t,e),{})}transformGraph(e,t={}){let n=e.node,r=[],i=[],a=[],o=n.reduce((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith(`Placeholder`)?r.push(e[t.name]):t.op===`Const`?i.push(e[t.name]):(t.input==null||t.input.length===0)&&a.push(e[t.name]),e),{}),s=[],c=[],l={},u={};t!=null&&(l=this.mapSignatureEntries(t.inputs),u=this.mapSignatureEntries(t.outputs));let d=Object.keys(o);d.forEach(e=>{let t=o[e];t.inputNames.forEach((e,n)=>{let[r,,i]=IM(e),a=o[r];if(a.outputs!=null){let e=a.outputs.indexOf(i);if(e!==-1){let i=`${r}:${e}`;t.inputNames[n]=i}}t.inputs.push(a),a.children.push(t)})}),Object.keys(u).length===0?d.forEach(e=>{let t=o[e];t.children.length===0&&c.push(t)}):Object.keys(u).forEach(e=>{let[t]=IM(e),n=o[t];n!=null&&(n.signatureKey=u[e],c.push(n))}),Object.keys(l).length>0?Object.keys(l).forEach(e=>{let[t]=IM(e),n=o[t];n&&(n.signatureKey=l[e],s.push(n))}):s=r;let f={};e.library!=null&&e.library.function!=null&&(f=e.library.function.reduce((e,t)=>(e[t.signature.name]=this.mapFunction(t),e),{}));let p={nodes:o,inputs:s,outputs:c,weights:i,placeholders:r,signature:t,functions:f};return a.length>0&&(p.initNodes=a),p}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,n)=>(t[e[n].name]=n,t),{})}mapNode(e){let t=NM(e.op)||this.opMappers[e.op]||{};e.attr??={};let n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(e=>e.startsWith(`^`)?e.slice(1):e),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(n.inputParams=t.inputs.reduce((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e),{})),t.attrs!=null&&(n.attrParams=t.attrs.reduce((t,n)=>{let r=n.type,i;switch(n.type){case`string`:i=lN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=lN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`string[]`:i=yN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=yN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`number`:i=dN(e.attr,n.tfName,n.defaultValue||0),i===void 0&&n.tfDeprecatedName&&(i=dN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`number[]`:i=vN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=vN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`bool`:i=uN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=uN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`bool[]`:i=xN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=xN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`shape`:i=_N(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=_N(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`shape[]`:i=bN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=bN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`dtype`:i=mN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=mN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`dtype[]`:i=hN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=hN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`func`:i=pN(e.attr,n.tfName,n.defaultValue),i===void 0&&n.tfDeprecatedName&&(i=pN(e.attr,n.tfDeprecatedName,n.defaultValue));break;case`tensor`:case`tensors`:break;default:throw Error(`Unsupported param type: ${n.type} for op: ${e.op}`)}return t[n.name]={value:i,type:r},t},{})),n}mapFunction(e){let t=e.nodeDef,n=[],r=[],i={};t!=null&&(i=t.reduce((e,t)=>(e[t.name]=this.mapNode(t),t.op===`Const`&&r.push(e[t.name]),e),{}));let a=[],o=[];e.signature.inputArg.forEach(e=>{let[t]=IM(e.name),n={name:t,op:`Placeholder`,inputs:[],inputNames:[],category:`graph`,inputParams:{},attrParams:{dtype:{value:fN(e.type),type:`dtype`}},children:[]};n.signatureKey=e.name,a.push(n),i[t]=n}),Object.keys(i).forEach(e=>{let t=i[e];t.inputNames.forEach((e,n)=>{let[r,,a]=IM(e),o=i[r];if(o.outputs!=null){let e=o.outputs.indexOf(a);if(e!==-1){let i=`${r}:${e}`;t.inputNames[n]=i}}t.inputs.push(o),o.children.push(t)})});let s=e.ret;e.signature.outputArg.forEach(e=>{let[t,n]=IM(s[e.name]),r=i[t];r!=null&&(r.defaultOutput=n,o.push(r))});let c=this.mapArgsToSignature(e);return{nodes:i,inputs:a,outputs:o,weights:r,placeholders:n,signature:c}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e),{}),outputs:e.signature.outputArg.reduce((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t),{})}}mapArgToTensorInfo(e,t){let n=e.name;return t!=null&&(n=t[n]),{name:n,dtype:e.type}}};function sN(e){let t=N().global;if(typeof t.atob<`u`)return t.atob(e);if(typeof Buffer<`u`)return new Buffer(e,`base64`).toString();throw Error(`Unable to decode base64 in this environment. Missing built-in atob() or Buffer()`)}function cN(e,t){let n=Array.isArray(e)?String.fromCharCode.apply(null,e):sN(e);return t?n:n.toLowerCase()}function lN(e,t,n,r=!1){let i=e[t];return i==null?n:cN(i.s,r)}function uN(e,t,n){let r=e[t];return r?r.b:n}function dN(e,t,n){let r=e[t]||{},i=r.i==null?r.f==null?n:r.f:r.i;return typeof i==`number`?i:parseInt(i,10)}function fN(e){switch(typeof e==`string`&&(e=AM[e]),e){case AM.DT_FLOAT:case AM.DT_HALF:return`float32`;case AM.DT_INT32:case AM.DT_INT64:case AM.DT_INT8:case AM.DT_UINT8:return`int32`;case AM.DT_BOOL:return`bool`;case AM.DT_DOUBLE:return`float32`;case AM.DT_STRING:return`string`;default:return null}}function pN(e,t,n){let r=e[t];return r&&r.func?r.func.name:n}function mN(e,t,n){let r=e[t];return r&&r.type?fN(r.type):n}function hN(e,t,n){let r=e[t];return r&&r.list&&r.list.type?r.list.type.map(e=>fN(e)):n}function gN(e){if(!e.unknownRank)return e.dim==null?[]:e.dim.map(e=>typeof e.size==`number`?e.size:parseInt(e.size,10))}function _N(e,t,n){let r=e[t];return r&&r.shape?gN(r.shape):n}function vN(e,t,n){let r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(e=>typeof e==`number`?e:parseInt(e,10)):n}function yN(e,t,n,r=!1){let i=e[t];return i&&i.list&&i.list.s?i.list.s.map(e=>cN(e,r)):n}function bN(e,t,n){let r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(e=>gN(e)):n}function xN(e,t,n){let r=e[t];return r&&r.list&&r.list.b?r.list.b:n}var SN=class{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(e=>this.getInput(e)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((e,t)=>(e[t]=this.getAttr(t),e),{}))}getInput(e){return PM(e,this.tensorMap,this.context)}getAttr(e,t){let n=this.node.rawAttrs[e];if(n.tensor!=null)return PM(e,this.tensorMap,this.context);if(n.i!=null||n.f!=null)return dN(this.node.rawAttrs,e,t);if(n.s!=null)return lN(this.node.rawAttrs,e,t);if(n.b!=null)return uN(this.node.rawAttrs,e,t);if(n.shape!=null)return _N(this.node.rawAttrs,e,t);if(n.type!=null)return mN(this.node.rawAttrs,e,t);if(n.list!=null){if(n.list.i!=null||n.list.f!=null)return vN(this.node.rawAttrs,e,t);if(n.list.s!=null)return yN(this.node.rawAttrs,e,t);if(n.list.shape!=null)return bN(this.node.rawAttrs,e,t);if(n.list.b!=null)return xN(this.node.rawAttrs,e,t);if(n.list.type!=null)return hN(this.node.rawAttrs,e,t)}return t}},CN=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:ba,abs:hc,acos:_c,acosh:yc,add:H,addN:xc,all:Cc,any:Tc,argMax:Dc,argMin:kc,asin:jc,asinh:Nc,atan:Fc,atan2:Lc,atanh:zc,avgPool:ol,avgPool3d:cl,basicLSTMCell:_l,batchNorm:Sl,batchNorm2d:wl,batchNorm3d:El,batchNorm4d:Ol,batchToSpaceND:yl,bincount:Al,booleanMaskAsync:Uh,broadcastArgs:Ml,broadcastTo:Pl,buffer:Fo,cast:Lo,ceil:Il,clipByValue:zl,clone:zo,complex:Sa,concat:ul,concat1d:Vl,concat2d:Ul,concat3d:Gl,concat4d:ql,conv1d:Zl,conv2d:Yl,conv2dTranspose:tu,conv3d:ru,conv3dTranspose:su,cos:lu,cosh:du,cosineWindow:rg,cumprod:pu,cumsum:hu,denseBincount:_u,depthToSpace:yu,depthwiseConv2d:xu,diag:Cu,dilation2d:Tu,div:U,divNoNan:Nu,dot:Fu,dropout:tg,einsum:Lu,elu:zu,enclosingPowerOfTwo:ng,equal:Du,erf:Vu,euclideanNorm:fd,exp:md,expandDims:gd,expm1:vd,eye:Sd,fft:th,fill:Ll,floor:wd,floorDiv:dc,fused:Sg,gather:Ed,gatherND:Qh,greater:Od,greaterEqual:Ad,ifft:rh,imag:ws,image:cv,inTopKAsync:ag,irfft:ah,isFinite:Md,isInf:Pd,isNaN:Id,leakyRelu:Rd,less:Bd,lessEqual:Hd,linalg:lv,linspace:Ud,localResponseNormalization:Gd,log:qd,log1p:Yd,logSigmoid:ef,logSoftmax:rf,logSumExp:of,logicalAnd:cf,logicalNot:uf,logicalOr:ff,logicalXor:mf,losses:uv,lowerBound:vf,matMul:B,max:Zu,maxPool:bf,maxPool3d:Sf,maxPoolWithArgmax:wf,maximum:Ef,mean:Of,meshgrid:jf,min:$u,minimum:Nf,mirrorPad:Ff,mod:Lf,moments:zf,movingAverage:Gh,mul:W,multiRNNCell:Vf,multinomial:Uf,neg:Es,norm:ud,notEqual:Gf,oneHot:_s,ones:Af,onesLike:qf,op:z,outerProduct:Yf,pad:Zf,pad1d:$f,pad2d:tp,pad3d:rp,pad4d:ap,pool:dp,pow:td,prelu:pp,print:Bo,prod:hp,raggedGather:_p,raggedTensorToTensor:yp,rand:xp,randomGamma:im,randomNormal:om,randomStandardNormal:cm,randomUniform:um,range:dm,real:Os,reciprocal:pm,relu:hm,relu6:_m,reshape:G,reverse:ym,reverse1d:xm,reverse2d:Cm,reverse3d:Tm,reverse4d:Dm,rfft:lh,round:km,rsqrt:jm,scalar:q,scatterND:qh,searchSorted:_f,selu:Nm,separableConv2d:Fm,setdiff1dAsync:Lm,sigmoid:fl,sign:zm,signal:sv,sin:Vm,sinh:Um,slice:K,slice1d:Gm,slice2d:qm,slice3d:Ym,slice4d:Zm,softmax:$m,softplus:Qd,spaceToBatchND:sp,sparse:dv,sparseToDense:Xh,spectral:ov,split:sh,sqrt:rd,square:ad,squaredDifference:dh,squeeze:ph,stack:hh,step:_h,stridedSlice:yh,string:fv,sub:J,sum:sd,tan:xh,tanh:hl,tensor:wa,tensor1d:Sh,tensor2d:Ch,tensor3d:Ns,tensor4d:wh,tensor5d:Th,tensor6d:Eh,tile:bd,topk:Oh,transpose:As,truncatedNormal:Ah,unique:Mh,unsortedSegmentSum:Ph,unstack:Ih,upperBound:Lh,variable:Rh,where:ku,whereAsync:Vh,zeros:kf,zerosLike:ju},Symbol.toStringTag,{value:`Module`})),wN=(e,t,n,r=CN)=>{switch(e.op){case`BiasAdd`:case`AddV2`:case`Add`:return[r.add($(`a`,e,t,n),$(`b`,e,t,n))];case`AddN`:return[r.addN($(`tensors`,e,t,n))];case`FloorMod`:case`Mod`:return[r.mod($(`a`,e,t,n),$(`b`,e,t,n))];case`Mul`:return[r.mul($(`a`,e,t,n),$(`b`,e,t,n))];case`RealDiv`:case`Div`:return[r.div($(`a`,e,t,n),$(`b`,e,t,n))];case`DivNoNan`:return[r.divNoNan($(`a`,e,t,n),$(`b`,e,t,n))];case`FloorDiv`:return[r.floorDiv($(`a`,e,t,n),$(`b`,e,t,n))];case`Sub`:return[r.sub($(`a`,e,t,n),$(`b`,e,t,n))];case`Minimum`:return[r.minimum($(`a`,e,t,n),$(`b`,e,t,n))];case`Maximum`:return[r.maximum($(`a`,e,t,n),$(`b`,e,t,n))];case`Pow`:return[r.pow($(`a`,e,t,n),$(`b`,e,t,n))];case`SquaredDifference`:return[r.squaredDifference($(`a`,e,t,n),$(`b`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},TN=(e,t,n,r=CN)=>{switch(e.op){case`Abs`:case`ComplexAbs`:return[r.abs($(`x`,e,t,n))];case`Acos`:return[r.acos($(`x`,e,t,n))];case`Acosh`:return[r.acosh($(`x`,e,t,n))];case`Asin`:return[r.asin($(`x`,e,t,n))];case`Asinh`:return[r.asinh($(`x`,e,t,n))];case`Atan`:return[r.atan($(`x`,e,t,n))];case`Atan2`:return[r.atan2($(`x`,e,t,n),$(`y`,e,t,n))];case`Atanh`:return[r.atanh($(`x`,e,t,n))];case`Ceil`:return[r.ceil($(`x`,e,t,n))];case`Complex`:return[r.complex($(`real`,e,t,n),$(`imag`,e,t,n))];case`Cos`:return[r.cos($(`x`,e,t,n))];case`Cosh`:return[r.cosh($(`x`,e,t,n))];case`Elu`:return[r.elu($(`x`,e,t,n))];case`Erf`:return[r.erf($(`x`,e,t,n))];case`Exp`:return[r.exp($(`x`,e,t,n))];case`Expm1`:return[r.expm1($(`x`,e,t,n))];case`Floor`:return[r.floor($(`x`,e,t,n))];case`Log`:return[r.log($(`x`,e,t,n))];case`Log1p`:return[r.log1p($(`x`,e,t,n))];case`Imag`:return[r.imag($(`x`,e,t,n))];case`Neg`:return[r.neg($(`x`,e,t,n))];case`Reciprocal`:return[r.reciprocal($(`x`,e,t,n))];case`Real`:return[r.real($(`x`,e,t,n))];case`Relu`:return[r.relu($(`x`,e,t,n))];case`Round`:return[r.round($(`x`,e,t,n))];case`Selu`:return[r.selu($(`x`,e,t,n))];case`Sigmoid`:return[r.sigmoid($(`x`,e,t,n))];case`Sin`:return[r.sin($(`x`,e,t,n))];case`Sign`:return[r.sign($(`x`,e,t,n))];case`Sinh`:return[r.sinh($(`x`,e,t,n))];case`Softplus`:return[r.softplus($(`x`,e,t,n))];case`Sqrt`:return[r.sqrt($(`x`,e,t,n))];case`Square`:return[r.square($(`x`,e,t,n))];case`Tanh`:return[r.tanh($(`x`,e,t,n))];case`Tan`:return[r.tan($(`x`,e,t,n))];case`ClipByValue`:return[r.clipByValue($(`x`,e,t,n),$(`clipValueMin`,e,t,n),$(`clipValueMax`,e,t,n))];case`Relu6`:return[r.relu6($(`x`,e,t,n))];case`Rsqrt`:return[r.rsqrt(PM(e.inputNames[0],t,n))];case`Prod`:return[r.prod($(`x`,e,t,n),$(`axes`,e,t,n))];case`LeakyRelu`:return[r.leakyRelu($(`x`,e,t,n),$(`alpha`,e,t,n))];case`Prelu`:return[r.prelu($(`x`,e,t,n),$(`alpha`,e,t,n))];case`IsNan`:return[r.isNaN(PM(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function EN(e,t,n=``){if(!(typeof e==`number`||typeof t==`number`)){E(e.length===t.length,()=>n+` Shapes ${e} and ${t} must match`);for(let r=0;r<e.length;r++){let i=e[r],a=t[r];E(i<0||a<0||i===a,()=>n+` Shapes ${e} and ${t} must match`)}}}function DN(e){return!(typeof e==`number`||e.some(e=>e<0))}function ON(e,t,n){let r=kN(e,n),i=!DN(r);if(i&&t.length===0)throw Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(i&&t.forEach(e=>{r=kN(e.shape,r)}),!DN(r))throw Error(`Non-fully-defined elementShape: ${r}`);return r}function kN(e,t){if(typeof e==`number`)return t;if(typeof t==`number`)return e;if(e.length!==t.length)throw Error(`Incompatible ranks during merge: ${e} vs. ${t}`);let n=[];for(let r=0;r<e.length;++r){let i=e[r],a=t[r];if(i>=0&&a>=0&&i!==a)throw Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=i>=0?i:a}return n}var AN=class{constructor(e,t,n,r,i,a,o){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=i,this.dynamicSize=a,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=q(0),xs(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);let t=this.tensors[e];if(t.cleared)throw Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(e=>this.read(e))}write(e,t){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);let n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),EN(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,xs(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((e,n)=>this.write(e,t[n]))}gather(e,t){if(t&&t!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let t=0;t<this.size();t++)e.push(t)}if(e.length===0)return wa([],[0].concat(this.elementShape));let n=this.readMany(e);return EN(this.elementShape,n[0].shape,`TensorArray shape mismatch: `),hh(n,0)}concat(e){if(e&&e!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return wa([],[0].concat(this.elementShape));let t=[];for(let e=0;e<this.size();e++)t.push(e);let n=this.readMany(t);return EN(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),ul(n,0)}scatter(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);let n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,Ih(t,0))}split(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0,r=e.map(e=>(n+=e,n));if(n!==t.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);let i=n===0?0:t.size/n,a=[];ys(()=>{t=G(t,[1,n,i]);for(let n=0;n<e.length;++n){let o=[0,n===0?0:r[n-1],0],s=[1,e[n],i];a[n]=G(K(t,o,s),this.elementShape)}return a});let o=[];for(let t=0;t<e.length;t++)o[t]=t;this.writeMany(o,a)}},jN=class e{constructor(e,t,n,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,e?.forEach(e=>{if(n!==e.dtype)throw Error(`Invalid data types; op elements ${n}, but list elements ${e.dtype}`);EN(t,e.shape,`TensorList shape mismatch: `),xs(e)}),this.idTensor=q(0),this.maxNumElements=r,xs(this.idTensor)}get id(){return this.idTensor.id}copy(){return new e([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(n!==-1&&this.tensors.length!==n)throw Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);EN(e,this.elementShape,`TensorList shape mismatch: `);let r=ON(this.elementShape,this.tensors,e);return ys(()=>hh(this.tensors.map(e=>G(e,r)),0))}popBack(e,t){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw Error(`Trying to pop from an empty list.`);let n=ON(this.elementShape,this.tensors,e),r=this.tensors.pop();return r.kept=!1,EN(r.shape,e,`TensorList shape mismatch: `),G(r,n)}pushBack(e){if(e.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(EN(e.shape,this.elementShape,`TensorList shape mismatch: `),this.maxNumElements===this.size())throw Error(`Trying to push element into a full list.`);xs(e),this.tensors.push(e)}resize(t){if(t<0)throw Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);let n=new e([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let e=0;e<Math.min(this.tensors.length,t);++e)n.tensors[e]=this.tensors[e];return n}getItem(e,t,n){if(n!==this.elementDtype)throw Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw Error(`element at index ${e} is null.`);EN(this.tensors[e].shape,t,`TensorList shape mismatch: `);let r=ON(this.elementShape,this.tensors,t);return G(this.tensors[e],r)}setItem(e,t){if(t.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);EN(this.elementShape,t.shape,`TensorList shape mismatch: `),xs(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);EN(this.elementShape,n,`TensorList shape mismatch: `),e=e.slice(0,this.size());let r=ON(this.elementShape,this.tensors,n);return e.length===0?wa([],[0].concat(r)):ys(()=>hh(e.map(e=>G(this.tensors[e],r)),0))}concat(e,t){if(e&&e!==this.elementDtype)throw Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);EN(this.elementShape,t,`TensorList shape mismatch: `);let n=ON(this.elementShape,this.tensors,t);return this.size()===0?wa([],[0].concat(n)):ys(()=>ul(this.tensors.map(e=>G(e,n)),0))}};function MN(e,t,n){let r=e.dtype;if(e.shape.length<1)throw Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);return EN(e.shape.slice(1),t,`TensorList shape mismatch: `),new jN(Ih(e),t,r)}function NN(e,t,n,r){return new jN([],e,t,r)}function PN(e,t,n,r){if(t.length!==e.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);let i=Math.max(...t);if(r!=null&&r!==-1&&i>=r)throw Error(`Max index must be < array size (${i}  vs. ${r})`);let a=new jN([],n,e.dtype,r),o=Ih(e,0);return t.forEach((e,t)=>{a.setItem(e,o[t])}),a}function FN(e,t,n){let r=0,i=t.map(e=>(r+=e,r));if(r!==e.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);let a=kN(e.shape.slice(1),n),o=r===0?0:e.size/r,s=ys(()=>{let n=[];e=G(e,[1,r,o]);for(let r=0;r<t.length;++r){let s=[0,r===0?0:i[r-1],0],c=[1,t[r],o];n[r]=G(K(e,s,c),a)}return e.dispose(),n}),c=new jN([],n,e.dtype,t.length);for(let e=0;e<s.length;e++)c.setItem(e,s[e]);return c}var IN=async(e,t,n)=>{switch(e.op){case`If`:case`StatelessIf`:{let r=$(`thenBranch`,e,t,n),i=$(`elseBranch`,e,t,n),a=$(`cond`,e,t,n),o=$(`args`,e,t,n);return(await a.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[i].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case`While`:case`StatelessWhile`:{let r=$(`body`,e,t,n),i=$(`cond`,e,t,n),a=$(`args`,e,t,n),o=await n.functionMap[i].executeFunctionAsync(a,n.tensorArrayMap,n.tensorListMap),s=a.map(e=>e.id),c=await o[0].data();o.forEach(e=>{!e.kept&&s.indexOf(e.id)===-1&&e.dispose()});let l=a;for(;c[0];){let e=l;l=await n.functionMap[r].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);let t=l.map(e=>e.id);e.forEach(e=>{!e.kept&&s.indexOf(e.id)===-1&&t.indexOf(e.id)===-1&&e.dispose()});let a=await n.functionMap[i].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);c=await a[0].data(),a.forEach(e=>{!e.kept&&s.indexOf(e.id)===-1&&t.indexOf(e.id)===-1&&e.dispose()})}return l}case`LoopCond`:return[BM($(`pred`,e,t,n))];case`Switch`:{let r=$(`pred`,e,t,n),i=$(`data`,e,t,n);return i.kept||(i=BM(i)),(await r.data())[0]?[void 0,i]:[i,void 0]}case`Merge`:{let r=e.inputNames.find(e=>PM(e,t,n)!==void 0);return r?[BM(PM(r,t,n))]:void 0}case`Enter`:{let r=$(`frameName`,e,t,n),i=$(`tensor`,e,t,n);return n.enterFrame(r),[BM(i)]}case`Exit`:{let r=$(`tensor`,e,t,n);return n.exitFrame(),[BM(r)]}case`NextIteration`:{let r=$(`tensor`,e,t,n);return n.nextIteration(),[BM(r)]}case`TensorArrayV3`:{let r=$(`size`,e,t,n),i=$(`dtype`,e,t,n),a=$(`elementShape`,e,t,n),o=$(`dynamicSize`,e,t,n),s=$(`clearAfterRead`,e,t,n),c=$(`identicalElementShapes`,e,t,n),l=new AN($(`name`,e,t,n),i,r,a,c,o,s);return n.addTensorArray(l),[l.idTensor,q(1)]}case`TensorArrayWriteV3`:{let r=$(`tensorArrayId`,e,t,n),i=$(`index`,e,t,n),a=$(`tensor`,e,t,n),o=n.getTensorArray(r.id);return o.write(i,a),[o.idTensor]}case`TensorArrayReadV3`:{let r=$(`tensorArrayId`,e,t,n),i=$(`index`,e,t,n);return[n.getTensorArray(r.id).read(i)]}case`TensorArrayGatherV3`:{let r=$(`tensorArrayId`,e,t,n),i=$(`indices`,e,t,n),a=$(`dtype`,e,t,n);return[n.getTensorArray(r.id).gather(i,a)]}case`TensorArrayScatterV3`:{let r=$(`tensorArrayId`,e,t,n),i=$(`indices`,e,t,n),a=$(`tensor`,e,t,n),o=n.getTensorArray(r.id);return o.scatter(i,a),[o.idTensor]}case`TensorArrayConcatV3`:{let r=$(`tensorArrayId`,e,t,n),i=n.getTensorArray(r.id),a=$(`dtype`,e,t,n);return[i.concat(a)]}case`TensorArraySplitV3`:{let r=$(`tensorArrayId`,e,t,n),i=$(`tensor`,e,t,n),a=$(`lengths`,e,t,n),o=n.getTensorArray(r.id);return o.split(a,i),[o.idTensor]}case`TensorArraySizeV3`:{let r=$(`tensorArrayId`,e,t,n);return[q(n.getTensorArray(r.id).size(),`int32`)]}case`TensorArrayCloseV3`:{let r=$(`tensorArrayId`,e,t,n),i=n.getTensorArray(r.id);return i.clearAndClose(),[i.idTensor]}case`TensorListSetItem`:{let r=$(`tensorListId`,e,t,n),i=$(`index`,e,t,n),a=$(`tensor`,e,t,n),o=n.getTensorList(r.id);return o.setItem(i,a),[o.idTensor]}case`TensorListGetItem`:{let r=$(`tensorListId`,e,t,n),i=$(`index`,e,t,n),a=$(`elementShape`,e,t,n),o=$(`elementDType`,e,t,n);return[n.getTensorList(r.id).getItem(i,a,o)]}case`TensorListScatterV2`:case`TensorListScatter`:{let r=$(`indices`,e,t,n),i=PN($(`tensor`,e,t,n),r,$(`elementShape`,e,t,n),$(`numElements`,e,t,n));return n.addTensorList(i),[i.idTensor]}case`TensorListReserve`:case`EmptyTensorList`:{let r=$(`elementShape`,e,t,n),i=$(`elementDType`,e,t,n),a;a=e.op===`TensorListReserve`?`numElements`:`maxNumElements`;let o=$(a,e,t,n),s=NN(r,i,o,e.op===`TensorListReserve`?-1:o);return n.addTensorList(s),[s.idTensor]}case`TensorListGather`:{let r=$(`tensorListId`,e,t,n),i=$(`indices`,e,t,n),a=$(`elementShape`,e,t,n),o=$(`elementDType`,e,t,n);return[n.getTensorList(r.id).gather(i,o,a)]}case`TensorListStack`:{let r=$(`tensorListId`,e,t,n),i=$(`elementShape`,e,t,n),a=$(`elementDType`,e,t,n),o=$(`numElements`,e,t,n);return[n.getTensorList(r.id).stack(i,a,o)]}case`TensorListFromTensor`:{let r=MN($(`tensor`,e,t,n),$(`elementShape`,e,t,n),$(`elementDType`,e,t,n));return n.addTensorList(r),[r.idTensor]}case`TensorListConcat`:case`TensorListConcatV2`:{let r=$(`tensorListId`,e,t,n),i=n.getTensorList(r.id),a=$(`dtype`,e,t,n),o=$(`elementShape`,e,t,n);return[i.concat(a,o)]}case`TensorListPushBack`:{let r=$(`tensorListId`,e,t,n),i=$(`tensor`,e,t,n),a=n.getTensorList(r.id);return a.pushBack(i),[a.idTensor]}case`TensorListPopBack`:{let r=$(`tensorListId`,e,t,n),i=$(`elementShape`,e,t,n),a=$(`elementDType`,e,t,n);return[n.getTensorList(r.id).popBack(i,a)]}case`TensorListSplit`:{let r=$(`tensor`,e,t,n),i=$(`elementShape`,e,t,n),a=FN(r,$(`lengths`,e,t,n),i);return n.addTensorList(a),[a.idTensor]}case`TensorListLength`:{let r=$(`tensorListId`,e,t,n);return[q(n.getTensorList(r.id).size(),`int32`)]}case`TensorListResize`:{let r=$(`tensorListId`,e,t,n),i=$(`size`,e,t,n),a=n.getTensorList(r.id).resize(i);return n.addTensorList(a),[a.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};function LN(e,t,n){let[r,i]=$(`fusedOps`,e,t,n),a=r===`biasadd`,o=!a,s=i===`prelu`,c=r===`fusedbatchnorm`,l=$(`numArgs`,e,t,n);if(a){if(s&&l!==2)throw Error(`FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.`);if(!s&&a&&l!==1)throw Error(`FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.`)}if(c)throw Error(`FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported`);let u=$(`strides`,e,t,n),d=zM(e,t,n),f=$(`dataFormat`,e,t,n).toUpperCase(),p=$(`dilations`,e,t,n),[m,h]=$(`args`,e,t,n);o&&(h=m,m=void 0);let g=$(`leakyreluAlpha`,e,t,n);return{stride:u,pad:d,dataFormat:f,dilations:p,biasArg:m,preluArg:h,activationFunc:i,leakyreluAlpha:g}}var RN=(e,t,n,r=CN)=>{switch(e.op){case`Conv1D`:{let i=$(`stride`,e,t,n),a=$(`pad`,e,t,n),o=$(`dataFormat`,e,t,n).toUpperCase(),s=$(`dilation`,e,t,n);return[r.conv1d($(`x`,e,t,n),$(`filter`,e,t,n),i,a,o,s)]}case`Conv2D`:{let i=$(`strides`,e,t,n),a=zM(e,t,n),o=$(`dataFormat`,e,t,n).toUpperCase(),s=$(`dilations`,e,t,n);return[r.conv2d($(`x`,e,t,n),$(`filter`,e,t,n),[i[1],i[2]],a,o,[s[1],s[2]])]}case`_FusedConv2D`:{let{stride:i,pad:a,dataFormat:o,dilations:s,biasArg:c,preluArg:l,activationFunc:u,leakyreluAlpha:d}=LN(e,t,n);return[r.fused.conv2d({x:$(`x`,e,t,n),filter:$(`filter`,e,t,n),strides:[i[1],i[2]],pad:a,dataFormat:o,dilations:[s[1],s[2]],bias:c,activation:u,preluActivationWeights:l,leakyreluAlpha:d})]}case`FusedDepthwiseConv2dNative`:{let{stride:i,pad:a,dataFormat:o,dilations:s,biasArg:c,preluArg:l,activationFunc:u,leakyreluAlpha:d}=LN(e,t,n);return[r.fused.depthwiseConv2d({x:$(`x`,e,t,n),filter:$(`filter`,e,t,n),strides:[i[1],i[2]],pad:a,dataFormat:o,dilations:[s[1],s[2]],bias:c,activation:u,preluActivationWeights:l,leakyreluAlpha:d})]}case`Conv2DBackpropInput`:case`Conv2dTranspose`:{let i=$(`outputShape`,e,t,n),a=$(`strides`,e,t,n),o=zM(e,t,n);return[r.conv2dTranspose($(`x`,e,t,n),$(`filter`,e,t,n),i,[a[1],a[2]],o)]}case`DepthwiseConv2dNative`:case`DepthwiseConv2d`:{let i=$(`strides`,e,t,n),a=zM(e,t,n),o=$(`dilations`,e,t,n),s=$(`dataFormat`,e,t,n).toUpperCase();return[r.depthwiseConv2d($(`input`,e,t,n),$(`filter`,e,t,n),[i[1],i[2]],a,s,[o[1],o[2]])]}case`Conv3D`:{let i=$(`strides`,e,t,n),a=$(`pad`,e,t,n),o=$(`dataFormat`,e,t,n).toUpperCase(),s=$(`dilations`,e,t,n);return[r.conv3d($(`x`,e,t,n),$(`filter`,e,t,n),[i[1],i[2],i[3]],a,o,[s[1],s[2],s[3]])]}case`AvgPool`:{let i=$(`strides`,e,t,n),a=$(`pad`,e,t,n),o=$(`kernelSize`,e,t,n);return[r.avgPool($(`x`,e,t,n),[o[1],o[2]],[i[1],i[2]],a)]}case`MaxPool`:{let i=$(`strides`,e,t,n),a=$(`pad`,e,t,n),o=$(`kernelSize`,e,t,n);return[r.maxPool($(`x`,e,t,n),[o[1],o[2]],[i[1],i[2]],a)]}case`MaxPoolWithArgmax`:{let i=$(`strides`,e,t,n),a=$(`pad`,e,t,n),o=$(`kernelSize`,e,t,n),s=$(`includeBatchInIndex`,e,t,n),{result:c,indexes:l}=r.maxPoolWithArgmax($(`x`,e,t,n),[o[1],o[2]],[i[1],i[2]],a,s);return[c,l]}case`AvgPool3D`:{let i=$(`strides`,e,t,n),a=$(`pad`,e,t,n),o=$(`kernelSize`,e,t,n);return[r.avgPool3d($(`x`,e,t,n),[o[1],o[2],o[3]],[i[1],i[2],i[3]],a)]}case`MaxPool3D`:{let i=$(`strides`,e,t,n),a=$(`pad`,e,t,n),o=$(`kernelSize`,e,t,n);return[r.maxPool3d($(`x`,e,t,n),[o[1],o[2],o[3]],[i[1],i[2],i[3]],a)]}case`Dilation2D`:{let i=$(`strides`,e,t,n),a=$(`pad`,e,t,n),o=$(`dilations`,e,t,n),s=i[1],c=i[2],l=o[1],u=o[2];return[r.dilation2d($(`x`,e,t,n),$(`filter`,e,t,n),[s,c],a,[l,u],`NHWC`)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},zN=(e,t,n,r=CN)=>{switch(e.op){case`Fill`:{let i=$(`shape`,e,t,n),a=$(`dtype`,e,t,n),o=$(`value`,e,t,n);return[r.fill(i,o,a)]}case`LinSpace`:{let i=$(`start`,e,t,n),a=$(`stop`,e,t,n),o=$(`num`,e,t,n);return[r.linspace(i,a,o)]}case`Multinomial`:{let i=$(`logits`,e,t,n),a=$(`numSamples`,e,t,n),o=$(`seed`,e,t,n);return[r.multinomial(i,a,o)]}case`OneHot`:{let i=$(`indices`,e,t,n),a=$(`depth`,e,t,n),o=$(`onValue`,e,t,n),s=$(`offValue`,e,t,n),c=$(`dtype`,e,t,n);return[r.oneHot(i,a,o,s,c)]}case`Ones`:return[r.ones($(`shape`,e,t,n),$(`dtype`,e,t,n))];case`OnesLike`:return[r.onesLike($(`x`,e,t,n))];case`RandomStandardNormal`:return[r.randomStandardNormal($(`shape`,e,t,n),$(`dtype`,e,t,n),$(`seed`,e,t,n))];case`RandomUniform`:return[r.randomUniform($(`shape`,e,t,n),$(`minval`,e,t,n),$(`maxval`,e,t,n),$(`dtype`,e,t,n))];case`Range`:{let i=$(`start`,e,t,n),a=$(`stop`,e,t,n),o=$(`step`,e,t,n);return[r.range(i,a,o,$(`dtype`,e,t,n))]}case`TruncatedNormal`:{let i=$(`shape`,e,t,n),a=$(`mean`,e,t,n),o=$(`stdDev`,e,t,n),s=$(`seed`,e,t,n);return[r.truncatedNormal(i,a,o,$(`dtype`,e,t,n),s)]}case`Zeros`:return[r.zeros($(`shape`,e,t,n),$(`dtype`,e,t,n))];case`ZerosLike`:return[r.zerosLike($(`x`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function BN(e,t,n){return{boxes:$(`boxes`,e,t,n),scores:$(`scores`,e,t,n),maxOutputSize:$(`maxOutputSize`,e,t,n),iouThreshold:$(`iouThreshold`,e,t,n),scoreThreshold:$(`scoreThreshold`,e,t,n),softNmsSigma:$(`softNmsSigma`,e,t,n)}}var VN=async(e,t,n,r,i=CN)=>{switch(e.op){case`NonMaxSuppressionV5`:{let{boxes:r,scores:a,maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=BN(e,t,n),u=await i.image.nonMaxSuppressionWithScoreAsync(r,a,o,s,c,l);return[u.selectedIndices,u.selectedScores]}case`NonMaxSuppressionV4`:{let{boxes:r,scores:a,maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=BN(e,t,n),l=$(`padToMaxOutputSize`,e,t,n),u=await i.image.nonMaxSuppressionPaddedAsync(r,a,o,s,c,l);return[u.selectedIndices,u.validOutputs]}case`NonMaxSuppressionV3`:case`NonMaxSuppressionV2`:{let{boxes:r,scores:a,maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=BN(e,t,n);return[await i.image.nonMaxSuppressionAsync(r,a,o,s,c)]}case`Where`:{let r=i.cast($(`condition`,e,t,n),`bool`),a=[await i.whereAsync(r)];return r.dispose(),a}case`ListDiff`:return i.setdiff1dAsync($(`x`,e,t,n),$(`y`,e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}},HN=(e,t,n,r=CN)=>{switch(e.op){case`LowerBound`:{let i=$(`sortedSequence`,e,t,n),a=$(`values`,e,t,n);return[r.lowerBound(i,a)]}case`TopKV2`:{let i=$(`x`,e,t,n),a=$(`k`,e,t,n),o=$(`sorted`,e,t,n),s=r.topk(i,a,o);return[s.values,s.indices]}case`UpperBound`:{let i=$(`sortedSequence`,e,t,n),a=$(`values`,e,t,n);return[r.upperBound(i,a)]}case`Unique`:{let i=$(`x`,e,t,n),a=r.unique(i);return[a.values,a.indices]}case`UniqueV2`:{let i=$(`x`,e,t,n),a=$(`axis`,e,t,n),o=r.unique(i,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},UN=(e,t,n,r=CN)=>{switch(e.op){case`Const`:return t[e.name];case`PlaceholderWithDefault`:let i=$(`default`,e,t,n);return[PM(e.name,t,n)||i];case`Placeholder`:return[PM(e.name,t,n)];case`Identity`:case`StopGradient`:case`FakeQuantWithMinMaxVars`:return[BM($(`x`,e,t,n))];case`IdentityN`:return $(`x`,e,t,n).map(e=>BM(e));case`Snapshot`:return[BM($(`x`,e,t,n))];case`Shape`:return[r.tensor1d($(`x`,e,t,n).shape,`int32`)];case`ShapeN`:return $(`x`,e,t,n).map(e=>r.tensor1d(e.shape));case`Size`:return[r.scalar($(`x`,e,t,n).size,`int32`)];case`Rank`:return[r.scalar($(`x`,e,t,n).rank,`int32`)];case`NoOp`:return[r.scalar(1)];case`Print`:let a=$(`x`,e,t,n),o=$(`data`,e,t,n),s=$(`message`,e,t,n),c=$(`summarize`,e,t,n);console.warn(`The graph has a tf.print() operation,usually used for debugging, which slows down performance.`),console.log(s);for(let e=0;e<o.length;e++)console.log(Array.prototype.slice.call(o[e].dataSync()).slice(0,c));return[a];default:throw TypeError(`Node type ${e.op} is not implemented`)}},WN=class{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=q(0),this.tensorMap=new Map,xs(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return q(this.size(),`int32`)}async import(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),ys(()=>{let e=Ih(t),r=n.length,i=e.length;E(r===i,()=>`The number of elements doesn't match, keys has ${r} elements, the values has ${i} elements.`);for(let t=0;t<r;t++){let r=n[t],i=e[t];xs(i),this.tensorMap.set(r,i)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return ys(()=>{let e=[];for(let r=0;r<n.length;r++){let i=n[r],a=this.findWithDefault(i,t);e.push(a)}return hh(e)})}findWithDefault(e,t){return this.tensorMap.get(e)??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}},GN=async(e,t,n,r)=>{switch(e.op){case`HashTable`:case`HashTableV2`:{let i=new WN($(`keyDType`,e,t,n),$(`valueDType`,e,t,n));return r.addHashTable(e.name,i),[i.handle]}case`LookupTableImport`:case`LookupTableImportV2`:{let i=$(`tableHandle`,e,t,n,r),a=$(`keys`,e,t,n),o=$(`values`,e,t,n);return[await r.getHashTableById(i.id).import(a,o)]}case`LookupTableFind`:case`LookupTableFindV2`:{let i=$(`tableHandle`,e,t,n,r),a=$(`keys`,e,t,n),o=$(`defaultValue`,e,t,n);return[await r.getHashTableById(i.id).find(a,o)]}case`LookupTableSize`:case`LookupTableSizeV2`:{let i=$(`tableHandle`,e,t,n,r);return[r.getHashTableById(i.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},KN=(e,t,n,r=CN)=>{switch(e.op){case`ResizeBilinear`:{let i=$(`images`,e,t,n),a=$(`size`,e,t,n),o=$(`alignCorners`,e,t,n),s=$(`halfPixelCenters`,e,t,n);return[r.image.resizeBilinear(i,[a[0],a[1]],o,s)]}case`ResizeNearestNeighbor`:{let i=$(`images`,e,t,n),a=$(`size`,e,t,n),o=$(`alignCorners`,e,t,n),s=$(`halfPixelCenters`,e,t,n);return[r.image.resizeNearestNeighbor(i,[a[0],a[1]],o,s)]}case`CropAndResize`:{let i=$(`image`,e,t,n),a=$(`boxes`,e,t,n),o=$(`boxInd`,e,t,n),s=$(`cropSize`,e,t,n),c=$(`method`,e,t,n),l=$(`extrapolationValue`,e,t,n);return[r.image.cropAndResize(i,a,o,s,c,l)]}case`ImageProjectiveTransformV3`:{let i=$(`images`,e,t,n),a=$(`transforms`,e,t,n),o=$(`outputShape`,e,t,n),s=$(`fillValue`,e,t,n),c=$(`interpolation`,e,t,n),l=$(`fillMode`,e,t,n);return[r.image.transform(i,a,c.toLowerCase(),l.toLowerCase(),s,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},qN=(e,t,n,r=CN)=>{switch(e.op){case`Equal`:return[r.equal($(`a`,e,t,n),$(`b`,e,t,n))];case`NotEqual`:return[r.notEqual($(`a`,e,t,n),$(`b`,e,t,n))];case`Greater`:return[r.greater($(`a`,e,t,n),$(`b`,e,t,n))];case`GreaterEqual`:return[r.greaterEqual($(`a`,e,t,n),$(`b`,e,t,n))];case`Less`:return[r.less($(`a`,e,t,n),$(`b`,e,t,n))];case`LessEqual`:return[r.lessEqual($(`a`,e,t,n),$(`b`,e,t,n))];case`LogicalAnd`:return[r.logicalAnd($(`a`,e,t,n),$(`b`,e,t,n))];case`LogicalNot`:return[r.logicalNot($(`a`,e,t,n))];case`LogicalOr`:return[r.logicalOr($(`a`,e,t,n),$(`b`,e,t,n))];case`Select`:case`SelectV2`:return[r.where($(`condition`,e,t,n),$(`a`,e,t,n),$(`b`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},JN=(e,t,n,r=CN)=>{switch(e.op){case`BatchMatMul`:case`BatchMatMulV2`:case`MatMul`:return[r.matMul($(`a`,e,t,n),$(`b`,e,t,n),$(`transposeA`,e,t,n),$(`transposeB`,e,t,n))];case`Einsum`:return[r.einsum($(`equation`,e,t,n),...$(`tensors`,e,t,n))];case`Transpose`:return[r.transpose($(`x`,e,t,n),$(`perm`,e,t,n))];case`_FusedMatMul`:let[i,a]=$(`fusedOps`,e,t,n),o=i===`biasadd`,s=a===`prelu`,c=$(`numArgs`,e,t,n),l=$(`leakyreluAlpha`,e,t,n);if(o){if(s&&c!==2)throw Error(`Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.`);if(!s&&c!==1)throw Error(`Fused MatMul with BiasAdd must have one extra argument: bias.`)}let[u,d]=$(`args`,e,t,n);return[r.fused.matMul({a:$(`a`,e,t,n),b:$(`b`,e,t,n),transposeA:$(`transposeA`,e,t,n),transposeB:$(`transposeB`,e,t,n),bias:u,activation:a,preluActivationWeights:d,leakyreluAlpha:l})];default:throw TypeError(`Node type ${e.op} is not implemented`)}},YN=(e,t,n,r=CN)=>{switch(e.op){case`EuclideanNorm`:return[r.euclideanNorm($(`x`,e,t,n),$(`axis`,e,t,n),$(`keepDims`,e,t,n))];case`FusedBatchNorm`:case`FusedBatchNormV2`:return[r.batchNorm($(`x`,e,t,n),$(`mean`,e,t,n),$(`variance`,e,t,n),$(`offset`,e,t,n),$(`scale`,e,t,n),$(`epsilon`,e,t,n))];case`FusedBatchNormV3`:return[r.batchNorm($(`x`,e,t,n),$(`mean`,e,t,n),$(`variance`,e,t,n),$(`offset`,e,t,n),$(`scale`,e,t,n),$(`epsilon`,e,t,n))];case`LRN`:return[r.localResponseNormalization($(`x`,e,t,n),$(`radius`,e,t,n),$(`bias`,e,t,n),$(`alpha`,e,t,n),$(`beta`,e,t,n))];case`Softmax`:return[r.softmax($(`x`,e,t,n))];case`LogSoftmax`:return[r.logSoftmax($(`x`,e,t,n))];case`SparseToDense`:return[r.sparseToDense($(`sparseIndices`,e,t,n),$(`outputShape`,e,t,n),$(`sparseValues`,e,t,n),$(`defaultValue`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},XN=(e,t,n,r=CN)=>{switch(e.op){case`Max`:{let i=$(`axis`,e,t,n),a=$(`keepDims`,e,t,n);return[r.max($(`x`,e,t,n),i,a)]}case`Mean`:{let i=$(`axis`,e,t,n),a=$(`keepDims`,e,t,n);return[r.mean($(`x`,e,t,n),i,a)]}case`Min`:{let i=$(`axis`,e,t,n),a=$(`keepDims`,e,t,n);return[r.min($(`x`,e,t,n),i,a)]}case`Sum`:{let i=$(`axis`,e,t,n),a=$(`keepDims`,e,t,n);return[r.sum($(`x`,e,t,n),i,a)]}case`All`:{let i=$(`axis`,e,t,n),a=$(`keepDims`,e,t,n);return[r.all($(`x`,e,t,n),i,a)]}case`Any`:{let i=$(`axis`,e,t,n),a=$(`keepDims`,e,t,n);return[r.any($(`x`,e,t,n),i,a)]}case`ArgMax`:{let i=$(`axis`,e,t,n);return[r.argMax($(`x`,e,t,n),i)]}case`ArgMin`:{let i=$(`axis`,e,t,n);return[r.argMin($(`x`,e,t,n),i)]}case`Prod`:{let i=$(`axis`,e,t,n),a=$(`keepDims`,e,t,n);return[r.prod($(`x`,e,t,n),i,a)]}case`Cumprod`:{let i=$(`axis`,e,t,n),a=$(`exclusive`,e,t,n),o=$(`reverse`,e,t,n);return[r.cumprod($(`x`,e,t,n),i,a,o)]}case`Cumsum`:{let i=$(`axis`,e,t,n),a=$(`exclusive`,e,t,n),o=$(`reverse`,e,t,n);return[r.cumsum($(`x`,e,t,n),i,a,o)]}case`Bincount`:let i=$(`x`,e,t,n),a=$(`weights`,e,t,n),o=$(`size`,e,t,n);return[r.bincount(i,a,o)];case`DenseBincount`:{let i=$(`x`,e,t,n),a=$(`weights`,e,t,n),o=$(`size`,e,t,n),s=$(`binaryOutput`,e,t,n);return[r.denseBincount(i,a,o,s)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},ZN=(e,t,n,r=CN)=>{switch(e.op){case`ConcatV2`:case`Concat`:{let i=$(`n`,e,t,n),a=$(`axis`,e,t,n),o=$(`tensors`,e,t,n);return o=o.slice(0,i),[r.concat(o,a)]}case`Gather`:{let i=$(`x`,e,t,n),a=$(`indices`,e,t,n);return[r.gather(i,r.cast(a,`int32`),0)]}case`GatherV2`:{let i=$(`axis`,e,t,n),a=$(`batchDims`,e,t,n),o=$(`x`,e,t,n),s=$(`indices`,e,t,n);return[r.gather(o,r.cast(s,`int32`),i,a)]}case`Reverse`:{let i=$(`dims`,e,t,n),a=[];for(let e=0;e<i.length;e++)i[e]&&a.push(e);let o=$(`x`,e,t,n);return[r.reverse(o,a)]}case`ReverseV2`:{let i=$(`axis`,e,t,n),a=$(`x`,e,t,n);return[r.reverse(a,i)]}case`Slice`:{let i=$(`begin`,e,t,n),a=$(`size`,e,t,n);return[r.slice($(`x`,e,t,n),i,a)]}case`StridedSlice`:{let i=$(`begin`,e,t,n),a=$(`end`,e,t,n),o=$(`strides`,e,t,n),s=$(`beginMask`,e,t,n),c=$(`endMask`,e,t,n),l=$(`ellipsisMask`,e,t,n),u=$(`newAxisMask`,e,t,n),d=$(`shrinkAxisMask`,e,t,n),f=$(`x`,e,t,n);return[r.stridedSlice(f,i,a,o,s,c,l,u,d)]}case`Pack`:return ys(()=>{let i=$(`axis`,e,t,n),a=$(`tensors`,e,t,n),o=a[0].shape,s=r.squeeze(a[0]).shape,c=a.map(e=>{let t=A(e.shape,o);if(!t&&!A(r.squeeze(e).shape,s))throw Error(`the input tensors shape does not match`);return t?e:r.reshape(e,o)});return[r.stack(c,i)]});case`Unpack`:{let i=$(`axis`,e,t,n),a=$(`tensor`,e,t,n);return r.unstack(a,i)}case`Tile`:{let i=$(`reps`,e,t,n);return[r.tile($(`x`,e,t,n),i)]}case`Split`:case`SplitV`:{let i=$(`axis`,e,t,n),a=$(`numOrSizeSplits`,e,t,n),o=$(`x`,e,t,n);return r.split(o,a,i)}case`ScatterNd`:{let i=$(`indices`,e,t,n),a=$(`values`,e,t,n),o=$(`shape`,e,t,n);return[r.scatterND(i,a,o)]}case`GatherNd`:{let i=$(`x`,e,t,n),a=$(`indices`,e,t,n);return[r.gatherND(i,a)]}case`SparseToDense`:{let i=$(`sparseIndices`,e,t,n),a=$(`outputShape`,e,t,n),o=$(`sparseValues`,e,t,n),s=$(`defaultValue`,e,t,n);return[r.sparseToDense(i,o,a,o.dtype===s.dtype?s:r.cast(s,o.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},QN=(e,t,n,r=CN)=>{switch(e.op){case`SparseFillEmptyRows`:{let{outputIndices:i,outputValues:a,emptyRowIndicator:o,reverseIndexMap:s}=r.sparse.sparseFillEmptyRows($(`indices`,e,t,n),$(`values`,e,t,n),$(`denseShape`,e,t,n),$(`defaultValue`,e,t,n));return[i,a,o,s]}case`SparseReshape`:{let{outputIndices:i,outputShape:a}=r.sparse.sparseReshape($(`inputIndices`,e,t,n),$(`inputShape`,e,t,n),$(`newShape`,e,t,n));return[i,a]}case`SparseSegmentMean`:return[r.sparse.sparseSegmentMean($(`data`,e,t,n),$(`indices`,e,t,n),$(`segmentIds`,e,t,n))];case`SparseSegmentSum`:return[r.sparse.sparseSegmentSum($(`data`,e,t,n),$(`indices`,e,t,n),$(`segmentIds`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},$N=(e,t,n,r=CN)=>{switch(e.op){case`FFT`:return[r.fft($(`x`,e,t,n))];case`IFFT`:return[r.ifft($(`x`,e,t,n))];case`RFFT`:return[r.rfft($(`x`,e,t,n))];case`IRFFT`:return[r.irfft($(`x`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},eP=(e,t,n,r=CN)=>{switch(e.op){case`StringNGrams`:{let{nGrams:i,nGramsSplits:a}=r.string.stringNGrams($(`data`,e,t,n),$(`dataSplits`,e,t,n),$(`separator`,e,t,n),$(`nGramWidths`,e,t,n),$(`leftPad`,e,t,n),$(`rightPad`,e,t,n),$(`padWidth`,e,t,n),$(`preserveShortSequences`,e,t,n));return[i,a]}case`StringSplit`:{let{indices:i,values:a,shape:o}=r.string.stringSplit($(`input`,e,t,n),$(`delimiter`,e,t,n),$(`skipEmpty`,e,t,n));return[i,a,o]}case`StringToHashBucketFast`:return[r.string.stringToHashBucketFast($(`input`,e,t,n),$(`numBuckets`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},tP=(e,t,n,r=CN)=>{switch(e.op){case`Cast`:return[r.cast($(`x`,e,t,n),$(`dtype`,e,t,n))];case`ExpandDims`:{let i=$(`axis`,e,t,n);return[r.expandDims($(`x`,e,t,n),i)]}case`Squeeze`:{let i=$(`axis`,e,t,n);return[r.squeeze($(`x`,e,t,n),i)]}case`Reshape`:return[r.reshape($(`x`,e,t,n),$(`shape`,e,t,n))];case`MirrorPad`:return[r.mirrorPad($(`x`,e,t,n),$(`padding`,e,t,n),$(`mode`,e,t,n))];case`PadV2`:case`Pad`:return[r.pad($(`x`,e,t,n),$(`padding`,e,t,n),$(`constantValue`,e,t,n))];case`SpaceToBatchND`:{let i=$(`blockShape`,e,t,n),a=$(`paddings`,e,t,n);return[r.spaceToBatchND($(`x`,e,t,n),i,a)]}case`BatchToSpaceND`:{let i=$(`blockShape`,e,t,n),a=$(`crops`,e,t,n);return[r.batchToSpaceND($(`x`,e,t,n),i,a)]}case`DepthToSpace`:{let i=$(`blockSize`,e,t,n),a=$(`dataFormat`,e,t,n).toUpperCase();return[r.depthToSpace($(`x`,e,t,n),i,a)]}case`BroadcastTo`:return[r.broadcastTo($(`x`,e,t,n),$(`shape`,e,t,n))];case`BroadcastArgs`:return[r.broadcastArgs($(`s0`,e,t,n),$(`s1`,e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function nP(e,t,n,r,i=ys){let a=((e,t,n)=>{switch(e.category){case`arithmetic`:return i(()=>wN(e,t,n));case`basic_math`:return i(()=>TN(e,t,n));case`control`:return IN(e,t,n);case`convolution`:return i(()=>RN(e,t,n));case`creation`:return i(()=>zN(e,t,n));case`dynamic`:return VN(e,t,n);case`evaluation`:return i(()=>HN(e,t,n));case`image`:return i(()=>KN(e,t,n));case`graph`:return i(()=>UN(e,t,n));case`logical`:return i(()=>qN(e,t,n));case`matrices`:return i(()=>JN(e,t,n));case`normalization`:return i(()=>YN(e,t,n));case`reduction`:return i(()=>XN(e,t,n));case`slice_join`:return i(()=>ZN(e,t,n));case`sparse`:return i(()=>QN(e,t,n));case`spectral`:return i(()=>$N(e,t,n));case`string`:return i(()=>eP(e,t,n));case`transformation`:return i(()=>tP(e,t,n));case`hash_table`:return GN(e,t,n,r);case`custom`:let a=NM(e.op);if(a&&a.customExecutor)return a.customExecutor(new SN(e,t,n));throw TypeError(`Custom op ${e.op} is not registered.`);default:throw TypeError(`Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return Oe(a)?a.then(e=>[].concat(e)):[].concat(a)}var rP=class{constructor(e={},t={},n={},r={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=r,this.rootContext={id:0,frameName:``,iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let e=[];for(let t=0;t<this.contexts.length-1;t++){let n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(``),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(e=>e.id===0&&e.iterationId===0?``:`${e.frameName}-${e.iterationId}`).join(`/`):``}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw Error(`Cannot exit frame, the context is empty`)}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw Error(`Cannot increase frame iteration, the context is empty`)}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(let t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(let t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}};function iP(e,t,n,r){let i=new Set,a=[],o=null,s=null,c=new Set,l=Object.keys(e).map(e=>RM(e)[0]),u=[];r!=null&&(u=r.map(e=>RM(e.name)[0]));let d=[...t];for(;d.length>0;){let e=d.pop();if((lP(e)||uP(e)||dP(e))&&o==null&&(o=e,s=o.children.map(e=>e.name).filter(e=>i.has(e))),i.add(e.name),n[e.name]==null&&l.indexOf(e.name)===-1&&u.indexOf(e.name)===-1){if(e.inputs.length===0){a.push(e.name);continue}e.inputs.forEach(e=>{c.has(e.name)||(c.add(e.name),d.push(e))})}}return{inputs:e,outputs:t,usedNodes:i,missingInputs:a,dynamicNode:o,syncInputs:s}}function aP(e,t,n){let{usedNodes:r,inputs:i}=n,a=[],o=Object.keys(i).map(e=>RM(e)[0]).map(t=>e.nodes[t]),s=e.initNodes;o.forEach(e=>{r.has(e.name)&&a.push(e)}),e.weights.forEach(e=>{r.has(e.name)&&a.push(e)}),s?.forEach(e=>{r.has(e.name)&&a.push(e)});let c=new Set,l=[];for(;a.length>0;){let e=a.pop();c.add(e.name),t[e.name]||l.push(e),e.children.forEach(e=>{!c.has(e.name)&&r.has(e.name)&&e.inputs.every(e=>c.has(e.name))&&a.push(e)})}return l}var oP=[`Switch`,`Merge`,`Enter`,`Exit`,`NextIteration`,`StatelessIf`,`StatelessWhile`,`if`,`While`],sP=[`NonMaxSuppressionV2`,`NonMaxSuppressionV3`,`NonMaxSuppressionV5`,`Where`],cP=[`HashTable`,`HashTableV2`,`LookupTableImport`,`LookupTableImportV2`,`LookupTableFind`,`LookupTableFindV2`,`LookupTableSize`,`LookupTableSizeV2`];function lP(e){return oP.indexOf(e.op)>=0}function uP(e){return sP.indexOf(e.op)>=0}function dP(e){return cP.indexOf(e.op)>=0}var fP=class e{constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=`,`,this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(n=>{this._functionExecutorMap[n]=new e(t.functions[n],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){let t=Object.keys(e).map(t=>e[t].map(e=>e.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{let t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}getCompilationKey(e,t){let n=e.map(e=>e.name).sort(),r=t.map(e=>e.name).sort();return n.join(this.SEPERATOR)+`--`+r.join(this.SEPERATOR)}compile(e,t){let n=iP(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:i,syncInputs:a}=n;if(i!=null)throw Error(`This execution contains the node '${i.name}', which has the dynamic op '${i.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${a}]`);if(r.length>0){let n=t.map(e=>e.name);throw Error(`Cannot compute the outputs [${n}] from the provided inputs [${Object.keys(e)}]. Missing the following inputs: [${r}]`)}return aP(this.graph,this.weightMap,n)}execute(e,t){e=this.mapInputs(e);let n=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);let r=n.map(e=>this.graph.nodes[RM(e)[0]]),i=t.map(e=>RM(e)[0]),a=i.map(e=>this.graph.nodes[e]);this.resetIntermediateTensors(),a.length===0&&(a=this._outputs);let o=this.getCompilationKey(r,a),s=this.compiledMap.get(o);s??(s=this.compile(e,a),this.compiledMap.set(o,s));let c={},l={};return ys(()=>{let n=new rP(this.weightMap,c,l,this.functionExecutorMap),r=Object.assign({},this.weightMap);Object.keys(e).forEach(t=>{let[n,i]=RM(t),a=[];a[i]=e[t],r[n]=a});let a=this.getFrozenTensorIds(r),o={};for(let e=0;e<s.length;e++){let t=s[e];if(!r[t.name]){let e=nP(t,r,n,this._resourceManager);if(Oe(e))throw Error(`The execution of the op '${t.op}' returned a promise. Please use model.executeAsync() instead.`);r[t.name]=e,this.checkTensorForDisposal(t.name,t,r,n,a,i,o)}}return this.parent??n.dispose(a),t.map(e=>PM(e,r,n))})}getFrozenTensorIds(e){let t=[].concat.apply([],Object.keys(e).map(t=>e[t]).map(e=>e.map(e=>e.id)));return new Set(t)}checkTensorForDisposal(e,t,n,r,i,a,o){t.category===`control`||a.indexOf(e)!==-1||(n[e].forEach(e=>{e!=null&&(o[e.id]=(o[e.id]||0)+t.children.length)}),t.inputs.forEach(e=>{e.category!==`control`&&FM(e.name,n,r)?.forEach(e=>{if(e&&!e.kept&&!i.has(e.id)){let n=o[e.id];if(n===1){if(!this.keepTensorForDebug)e.dispose();else{let[n,i]=IM(t.name,r);this.intermediateTensors[n]||(this.intermediateTensors[n]=[]),this.intermediateTensors[n][i]=e}delete o[e.id]}else n!=null&&o[e.id]--}})}))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach(e=>this.intermediateTensors[e].forEach(e=>e.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach(e=>{this.tensorsMap[e].forEach(e=>{e&&!e.kept&&!e.isDisposed&&!this.keepIds.has(e.id)&&e.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(let e in this.intermediateTensors)this.intermediateTensors[e].forEach(e=>e.dispose()),delete this.intermediateTensors[e]}async _executeAsync(e,t,n=!1,r={},i={}){n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepTensorForDebug=N().getBool(`KEEP_INTERMEDIATE_TENSORS`)}catch(e){console.warn(e.message)}this.resetIntermediateTensors();let a=new rP(this.weightMap,r,i,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(e,a,t,n);let o=t.map(e=>PM(e,this.tensorsMap,a)),s=o.map(e=>e.id),c=Object.keys(e).map(t=>e[t].id);return this.keepIds=new Set([...s,...c,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent??a.dispose(this.keepIds),o}async executeFunctionAsync(e,t,n){let r=e.reduce((e,t,n)=>(e[this.inputs[n].name]=t,e),{});return this._executeAsync(r,this.outputNodes,!0,t,n)}async executeWithControlFlow(e,t,n,r){let i=Object.keys(e),a=i.map(e=>this.graph.nodes[RM(e)[0]]),o=n.map(e=>RM(e)[0]),s=o.map(e=>this.graph.nodes[e]);s.length===0&&(s=this._outputs);let{usedNodes:c,missingInputs:l,dynamicNode:u,syncInputs:d}=iP(e,s,this.weightMap,this._initNodes),f=[...a,...this.graph.weights,...this._initNodes||[]].map(e=>({node:e,contexts:t.currentContext})),p=Object.assign({},this.weightMap);Object.keys(e).forEach(t=>{let[n,r]=RM(t),i=[];i[r]=e[t],p[n]=i});let m={},h=this.getFrozenTensorIds(p),g={};for(;f.length>0;){let e=this.processStack(a,f,t,p,g,h,o,m,c);await Promise.all(e)}u==null&&!r&&console.warn(`This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.`);let _=s.filter(e=>!lP(e)&&!PM(e.name,p,t)).map(e=>e.name);if(_.length>0){let e=``;throw u!=null&&(e=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`),Error(`Cannot compute the outputs [${_}] from the provided inputs [${i}]. Consider providing the following inputs: [${l}]. ${e}`)}return p}processStack(e,t,n,r,i,a,o,s,c){let l=[];for(;t.length>0;){let e=t.pop();n.currentContext=e.contexts;let u=``;if(e.node.op===`Enter`&&$(`isConstant`,e.node,r,n)&&([u]=IM(e.node.name,n)),r[e.node.name]==null){let d=nP(e.node,r,n,this._resourceManager);u||([u]=IM(e.node.name,n));let f=n.currentContext;Oe(d)?l.push(d.then(l=>(r[u]=l,n.currentContext=f,this.checkTensorForDisposal(u,e.node,r,n,a,o,s),this.processChildNodes(e.node,t,n,r,i,c),l))):(r[u]=d,this.checkTensorForDisposal(u,e.node,r,n,a,o,s),this.processChildNodes(e.node,t,n,r,i,c))}else this.processChildNodes(e.node,t,n,r,i,c)}return l}processChildNodes(e,t,n,r,i,a){e.children.forEach(e=>{let[o]=IM(e.name,n);i[o]||!a.has(e.name)||(e.op===`Merge`?e.inputNames.some(e=>!!PM(e,r,n))&&(i[o]=!0,t.push({contexts:n.currentContext,node:e})):e.inputNames.every(e=>!!PM(e,r,n))&&(i[o]=!0,t.push({contexts:n.currentContext,node:e})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(e=>e.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{let n=e[t],[r]=RM(t),i=this.graph.nodes[r];if(i.attrParams.shape&&i.attrParams.shape.value){let e=i.attrParams.shape.value;E(e.length===n.shape.length&&n.shape.every((t,n)=>e[n]===-1||e[n]===t),()=>`The shape of dict['${i.name}'] provided in model.execute(dict) must be [${e}], but was [${n.shape}]`)}i.attrParams.dtype&&i.attrParams.dtype.value&&E(n.dtype===i.attrParams.dtype.value,()=>`The dtype of dict['${i.name}'] provided in model.execute(dict) must be ${i.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(e){let t={};for(let n in e)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[n]!=null){let r=this._signature.inputs[n];t[r.name]=e[n]}else t[n]=e[n];return t}checkInputs(e){let t=Object.keys(e).filter(e=>{let[t]=RM(e);return this.graph.nodes[t]==null});if(t.length>0)throw Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(e=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[e]!=null?this._signature.outputs[e].name:e,{})}checkOutputs(e){e.forEach(e=>{let[t]=RM(e);if(!this.graph.nodes[t])throw Error(`The output '${e}' is not found in the graph`)})}},pP=class{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(let e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(let e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}},mP=`?tfjs-format=file`,hP=`model.json`,gP=class{constructor(e,t={},n=ms){this.modelUrl=e,this.loadOptions=t,this.version=`n/a`,this.io=n,t??(this.loadOptions={}),this.resourceManager=new pP}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){let e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{let t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let e=this.handler.load();return Oe(e)?e.then(e=>this.loadSync(e)):this.loadSync(e)}loadSync(e){this.artifacts=e;let t=this.artifacts.modelTopology,n=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){let e=this.artifacts.userDefinedMetadata;e.signature!=null&&(n=e.signature),e.structuredOutputKeys!=null&&(this.structuredOutputKeys=e.structuredOutputKeys)}this.signature=n,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;let r=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new fP(oN.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){let t=oN.Instance.transformGraph(e.modelInitializer);this.initializer=new fP(t),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if(typeof e==`string`){let t=this.io.getSaveHandlers(e);if(t.length===0)throw Error(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw Error(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(e.save==null)throw Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){let n=this.execute(e,this.outputNodes);if(this.structuredOutputKeys){let e=n instanceof Wi?[n]:n,t={};return e.forEach((e,n)=>t[this.structuredOutputKeys[n]]=e),t}return n}normalizeInputs(e){if(!(e instanceof Wi)&&!Array.isArray(e))return e;if(e=Array.isArray(e)?e:[e],e.length!==this.inputNodes.length)throw Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce((t,n,r)=>(t[n]=e[r],t),{})}normalizeOutputs(e){return e||=this.outputNodes,Array.isArray(e)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=this.executor.execute(e,t);return n.length>1?n:n[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=await this.executor.executeAsync(e,t);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,n)=>(t[n]=[e[n]],t),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}};async function _P(e,t={},n=ms){if(e==null)throw Error(`modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model`);t??={},t.fromTFHub&&typeof e==`string`&&(e=vP(e));let r=new gP(e,t,n);return await r.load(),r}function vP(e){return e.endsWith(`/`)||(e+=`/`),`${e}${hP}${mP}`}var yP=function(){return yP=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},yP.apply(this,arguments)};function bP(e,t,n,r){return new(n||=Promise)((function(t,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function o(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,o)}s((r=r.apply(e,[])).next())}))}function xP(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return(function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!((i=i.length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}})([a,s])}}}function SP(e){var t=e.map((function(e){return e[0]}));return t.push(e[e.length-1][1]),t}var CP={lips:SP([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:SP([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:SP([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:SP([[474,475],[475,476],[476,477],[477,474]]),rightEye:SP([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:SP([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:SP([[469,470],[470,471],[471,472],[472,469]]),faceOval:SP([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},wP=Object.entries(CP).map((function(e){var t=e[0];return e[1].map((function(e){return[e,t]}))})).flat(),TP=new Map(wP);function EP(e){for(var t={locationData:{relativeKeypoints:[]}},n=2**53-1,r=-(2**53-1),i=2**53-1,a=-(2**53-1),o=0;o<e.length;++o){var s=e[o];n=Math.min(n,s.x),r=Math.max(r,s.x),i=Math.min(i,s.y),a=Math.max(a,s.y),t.locationData.relativeKeypoints.push({x:s.x,y:s.y})}return t.locationData.relativeBoundingBox={xMin:n,yMin:i,xMax:r,yMax:a,width:r-n,height:a-i},t}var DP={runtime:`mediapipe`,maxFaces:1,refineLandmarks:!1},OP=(function(){function e(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new g.FaceMesh({locateFile:function(t,n){return e.solutionPath?e.solutionPath.replace(/\/+$/,``)+`/`+t:n+`/`+t}}),this.faceMeshSolution.setOptions({refineLandmarks:e.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:e.maxFaces}),this.faceMeshSolution.onResults((function(e){if(t.height=e.image.height,t.width=e.image.width,t.faces=[],e.multiFaceLandmarks!==null)for(var n=e.multiFaceLandmarks,r=0;r<n.length;r++){var i=t.translateOutput(n[r]);t.faces.push({keypoints:i,box:EP(i).locationData.relativeBoundingBox})}}))}return e.prototype.translateOutput=function(e){var t=this;return e.map((function(e,n){var r={x:e.x*t.width,y:e.y*t.height,z:e.z*t.width},i=TP.get(n);return i!=null&&(r.name=i),r}))},e.prototype.estimateFaces=function(e,t){return bP(this,void 0,void 0,(function(){var n,r;return xP(this,(function(i){switch(i.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Wi?(r=ImageData.bind,[4,Is(e)]):[3,2];case 1:return n=new(r.apply(ImageData,[void 0,i.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:n=e,i.label=3;case 3:return e=n,[4,this.faceMeshSolution.send({image:e})];case 4:return i.sent(),[2,this.faces]}}))}))},e.prototype.dispose=function(){this.faceMeshSolution.close()},e.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceMeshSolution.initialize()},e})();function kP(e){return bP(this,void 0,void 0,(function(){var t,n;return xP(this,(function(r){switch(r.label){case 0:return t=(function(e){if(e==null)return yP({},DP);var t=yP({},e);return t.runtime=`mediapipe`,t.maxFaces??=DP.maxFaces,t.refineLandmarks??=DP.refineLandmarks,t})(e),[4,(n=new OP(t)).initialize()];case 1:return r.sent(),[2,n]}}))}))}var AP=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},jP={};(function(){var e;function t(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var n=typeof Object.defineProperties==`function`?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},r=(function(e){e=[typeof globalThis==`object`&&globalThis,e,typeof window==`object`&&window,typeof self==`object`&&self,typeof AP==`object`&&AP];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error(`Cannot find global object`)})(this);function i(e,t){if(t)e:{var i=r;e=e.split(`.`);for(var a=0;a<e.length-1;a++){var o=e[a];if(!(o in i))break e;i=i[o]}(t=t(a=i[e=e[e.length-1]]))!=a&&t!=null&&n(i,e,{configurable:!0,writable:!0,value:t})}}function a(e){return(e={next:e})[Symbol.iterator]=function(){return this},e}function o(e){var n=typeof Symbol<`u`&&Symbol.iterator&&e[Symbol.iterator];return n?n.call(e):{next:t(e)}}function s(e){if(!(e instanceof Array)){e=o(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);e=n}return e}i(`Symbol`,(function(e){function t(e,t){this.g=e,n(this,`description`,{configurable:!0,writable:!0,value:t})}if(e)return e;t.prototype.toString=function(){return this.g};var r=`jscomp_symbol_`+(1e9*Math.random()>>>0)+`_`,i=0;return function e(n){if(this instanceof e)throw TypeError(`Symbol is not a constructor`);return new t(r+(n||``)+`_`+ i++,n)}})),i(`Symbol.iterator`,(function(e){if(e)return e;e=Symbol(`Symbol.iterator`);for(var i=`Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array`.split(` `),o=0;o<i.length;o++){var s=r[i[o]];typeof s==`function`&&typeof s.prototype[e]!=`function`&&n(s.prototype,e,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return e}));var c,l=typeof Object.create==`function`?Object.create:function(e){function t(){}return t.prototype=e,new t};if(typeof Object.setPrototypeOf==`function`)c=Object.setPrototypeOf;else{var u;e:{var d={};try{d.__proto__={a:!0},u=d.a;break e}catch{}u=!1}c=u?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw TypeError(e+` is not extensible`);return e}:null}var f=c;function p(e,t){if(e.prototype=l(t.prototype),e.prototype.constructor=e,f)f(e,t);else for(var n in t)if(n!=`prototype`)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.na=t.prototype}function m(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function h(e){if(e.l)throw TypeError(`Generator is already running`);e.l=!0}function g(e,t){e.j={da:t,ea:!0},e.g=e.o||e.u}function _(e,t,n){return e.g=n,{value:t}}function v(e){this.g=new m,this.h=e}function y(e,t,n,r){try{var i=t.call(e.g.i,n);if(!(i instanceof Object))throw TypeError(`Iterator result `+i+` is not an object`);if(!i.done)return e.g.l=!1,i;var a=i.value}catch(t){return e.g.i=null,g(e.g,t),b(e)}return e.g.i=null,r.call(e.g,a),b(e)}function b(e){for(;e.g.g;)try{var t=e.h(e.g);if(t)return e.g.l=!1,{value:t.value,done:!1}}catch(t){e.g.h=void 0,g(e.g,t)}if(e.g.l=!1,e.g.j){if(t=e.g.j,e.g.j=null,t.ea)throw t.da;return{value:t.return,done:!0}}return{value:void 0,done:!0}}function x(e){this.next=function(t){return h(e.g),e.g.i?t=y(e,e.g.i.next,t,e.g.s):(e.g.s(t),t=b(e)),t},this.throw=function(t){return h(e.g),e.g.i?t=y(e,e.g.i.throw,t,e.g.s):(g(e.g,t),t=b(e)),t},this.return=function(t){return(function(e,t){h(e.g);var n=e.g.i;return n?y(e,`return`in n?n.return:function(e){return{value:e,done:!0}},t,e.g.return):(e.g.return(t),b(e))})(e,t)},this[Symbol.iterator]=function(){return this}}function S(e){return(function(e){function t(t){return e.next(t)}function n(t){return e.throw(t)}return new Promise((function(r,i){(function e(a){a.done?r(a.value):Promise.resolve(a.value).then(t,n).then(e,i)})(e.next())}))})(new x(new v(e)))}m.prototype.s=function(e){this.h=e},m.prototype.return=function(e){this.j={return:e},this.g=this.u},i(`Promise`,(function(e){function t(e){this.h=0,this.i=void 0,this.g=[],this.s=!1;var t=this.j();try{e(t.resolve,t.reject)}catch(e){t.reject(e)}}function n(){this.g=null}function i(e){return e instanceof t?e:new t((function(t){t(e)}))}if(e)return e;n.prototype.h=function(e){if(this.g==null){this.g=[];var t=this;this.i((function(){t.l()}))}this.g.push(e)};var a=r.setTimeout;n.prototype.i=function(e){a(e,0)},n.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var t=0;t<e.length;++t){var n=e[t];e[t]=null;try{n()}catch(e){this.j(e)}}}this.g=null},n.prototype.j=function(e){this.i((function(){throw e}))},t.prototype.j=function(){function e(e){return function(r){n||(n=!0,e.call(t,r))}}var t=this,n=!1;return{resolve:e(this.D),reject:e(this.l)}},t.prototype.D=function(e){if(e===this)this.l(TypeError(`A Promise cannot resolve to itself`));else if(e instanceof t)this.H(e);else{e:switch(typeof e){case`object`:var n=e!=null;break e;case`function`:n=!0;break e;default:n=!1}n?this.A(e):this.o(e)}},t.prototype.A=function(e){var t=void 0;try{t=e.then}catch(e){this.l(e);return}typeof t==`function`?this.I(t,e):this.o(e)},t.prototype.l=function(e){this.u(2,e)},t.prototype.o=function(e){this.u(1,e)},t.prototype.u=function(e,t){if(this.h!=0)throw Error(`Cannot settle(`+e+`, `+t+`): Promise already settled in state`+this.h);this.h=e,this.i=t,this.h===2&&this.G(),this.B()},t.prototype.G=function(){var e=this;a((function(){if(e.C()){var t=r.console;t!==void 0&&t.error(e.i)}}),1)},t.prototype.C=function(){if(this.s)return!1;var e=r.CustomEvent,t=r.Event,n=r.dispatchEvent;return n===void 0||(typeof e==`function`?e=new e(`unhandledrejection`,{cancelable:!0}):typeof t==`function`?e=new t(`unhandledrejection`,{cancelable:!0}):(e=r.document.createEvent(`CustomEvent`)).initCustomEvent(`unhandledrejection`,!1,!0,e),e.promise=this,e.reason=this.i,n(e))},t.prototype.B=function(){if(this.g!=null){for(var e=0;e<this.g.length;++e)s.h(this.g[e]);this.g=null}};var s=new n;return t.prototype.H=function(e){var t=this.j();e.M(t.resolve,t.reject)},t.prototype.I=function(e,t){var n=this.j();try{e.call(t,n.resolve,n.reject)}catch(e){n.reject(e)}},t.prototype.then=function(e,n){function r(e,t){return typeof e==`function`?function(t){try{i(e(t))}catch(e){a(e)}}:t}var i,a,o=new t((function(e,t){i=e,a=t}));return this.M(r(e,i),r(n,a)),o},t.prototype.catch=function(e){return this.then(void 0,e)},t.prototype.M=function(e,t){function n(){switch(r.h){case 1:e(r.i);break;case 2:t(r.i);break;default:throw Error(`Unexpected state: `+r.h)}}var r=this;this.g==null?s.h(n):this.g.push(n),this.s=!0},t.resolve=i,t.reject=function(e){return new t((function(t,n){n(e)}))},t.race=function(e){return new t((function(t,n){for(var r=o(e),a=r.next();!a.done;a=r.next())i(a.value).M(t,n)}))},t.all=function(e){var n=o(e),r=n.next();return r.done?i([]):new t((function(e,t){function a(t){return function(n){o[t]=n,--s==0&&e(o)}}var o=[],s=0;do o.push(void 0),s++,i(r.value).M(a(o.length-1),t),r=n.next();while(!r.done)}))},t}));var C=typeof Object.assign==`function`?Object.assign:function(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e};i(`Object.assign`,(function(e){return e||C})),i(`Object.is`,(function(e){return e||function(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}})),i(`Array.prototype.includes`,(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var r=n.length;for(0>(t||=0)&&(t=Math.max(t+r,0));t<r;t++){var i=n[t];if(i===e||Object.is(i,e))return!0}return!1}})),i(`String.prototype.includes`,(function(e){return e||function(e,t){if(this==null)throw TypeError(`The 'this' value for String.prototype.includes must not be null or undefined`);if(e instanceof RegExp)throw TypeError(`First argument to String.prototype.includes must not be a regular expression`);return this.indexOf(e,t||0)!==-1}})),i(`Array.prototype.keys`,(function(e){return e||function(){return(function(e,t){e instanceof String&&(e+=``);var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i})(this,(function(e){return e}))}}));var w=this||self;function T(e,t){e=e.split(`.`);var n,r=w;for((e[0]in r)||r.execScript===void 0||r.execScript(`var `+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?r=r[n]&&r[n]!==Object.prototype[n]?r[n]:r[n]={}:r[n]=t}function E(){throw Error(`Invalid UTF8`)}function D(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var O,ee,k=typeof TextDecoder<`u`,A=typeof TextEncoder<`u`,te={},ne=null;function re(e){var t;t===void 0&&(t=0),ae(),t=te[t];for(var n=Array(Math.floor(e.length/3)),r=t[64]||``,i=0,a=0;i<e.length-2;i+=3){var o=e[i],s=e[i+1],c=e[i+2],l=t[o>>2];o=t[(3&o)<<4|s>>4],s=t[(15&s)<<2|c>>6],c=t[63&c],n[a++]=l+o+s+c}switch(l=0,c=r,e.length-i){case 2:c=t[(15&(l=e[i+1]))<<2]||r;case 1:e=e[i],n[a]=t[e>>2]+t[(3&e)<<4|l>>4]+c+r}return n.join(``)}function ie(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):`=.`.indexOf(e[t-1])!=-1&&(n=`=.`.indexOf(e[t-2])==-1?n-1:n-2);var r=new Uint8Array(n),i=0;return(function(e,t){function n(t){for(;r<e.length;){var n=e.charAt(r++),i=ne[n];if(i!=null)return i;if(!/^[\s\xa0]*$/.test(n))throw Error(`Unknown base64 encoding at char: `+n)}return t}ae();for(var r=0;;){var i=n(-1),a=n(0),o=n(64),s=n(64);if(s===64&&i===-1)break;t(i<<2|a>>4),o!=64&&(t(a<<4&240|o>>2),s!=64&&t(o<<6&192|s))}})(e,(function(e){r[i++]=e})),i===n?r:r.subarray(0,i)}function ae(){if(!ne){ne={};for(var e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(``),t=[`+/=`,`+/`,`-_=`,`-_.`,`-_`],n=0;5>n;n++){var r=e.concat(t[n].split(``));te[n]=r;for(var i=0;i<r.length;i++){var a=r[i];ne[a]===void 0&&(ne[a]=i)}}}}var oe,se=typeof Uint8Array==`function`;function ce(e){return se&&e!=null&&e instanceof Uint8Array}function le(e){if(this.L=e,e!==null&&e.length===0)throw Error(`ByteString should be constructed with non-empty values`)}var ue=typeof Uint8Array.prototype.slice==`function`,de=0;function fe(e,t){return Error(`Invalid wire type: `+e+` (at position `+t+`)`)}function pe(){return Error(`Failed to read varint, encoding is invalid.`)}function me(e,t){t=(t=t===void 0?{}:t).v!==void 0&&t.v,this.h=null,this.g=this.i=this.j=0,this.v=t,e&&he(this,e)}function he(e,t){e.h=(function(e,t){if(e.constructor===Uint8Array)return e;if(e.constructor===ArrayBuffer||e.constructor===Array)return new Uint8Array(e);if(e.constructor===String)return ie(e);if(e.constructor===le)return!t&&(t=e.L)&&t.constructor===Uint8Array?t:(t=(t=e.L)==null||ce(t)?t:typeof t==`string`?ie(t):null,(e=e.L=t)?new Uint8Array(e):oe||=new Uint8Array);if(e instanceof Uint8Array)return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error(`Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers`)})(t,e.v),e.j=0,e.i=e.h.length,e.g=e.j}function j(e){if(e.g>e.i)throw Error(`Tried to read past the end of the data `+e.g+` > `+e.i)}function ge(e){var t=e.h,n=t[e.g],r=127&n;if(128>n)return e.g+=1,j(e),r;if(r|=(127&(n=t[e.g+1]))<<7,128>n)return e.g+=2,j(e),r;if(r|=(127&(n=t[e.g+2]))<<14,128>n)return e.g+=3,j(e),r;if(r|=(127&(n=t[e.g+3]))<<21,128>n)return e.g+=4,j(e),r;if(n=t[e.g+4],e.g+=5,r|=(15&n)<<28,128>n)return j(e),r;if(128<=t[e.g++]&&128<=t[e.g++]&&128<=t[e.g++]&&128<=t[e.g++]&&128<=t[e.g++])throw pe();return j(e),r}me.prototype.reset=function(){this.g=this.j};var _e=[];function ve(){this.g=[]}function ye(e,t){for(;127<t;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function be(e){var t={},n=t.W!==void 0&&t.W;this.l={v:t.v!==void 0&&t.v},this.W=n,t=this.l,_e.length?(n=_e.pop(),t&&(n.v=t.v),e&&he(n,e),e=n):e=new me(e,t),this.g=e,this.j=this.g.g,this.h=this.i=-1}function M(e){var t=e.g;if(t.g==t.i)return!1;e.j=e.g.g;var n=ge(e.g)>>>0;if(t=n>>>3,!(0<=(n&=7)&&5>=n))throw fe(n,e.j);if(1>t)throw Error(`Invalid field number: `+t+` (at position `+e.j+`)`);return e.i=t,e.h=n,!0}function xe(e){switch(e.h){case 0:if(e.h!=0)xe(e);else e:{for(var t=(e=e.g).g,n=t+10;t<n;)if(!(128&e.h[t++])){e.g=t,j(e);break e}throw pe()}break;case 1:(e=e.g).g+=8,j(e);break;case 2:e.h==2?(t=ge(e.g)>>>0,(e=e.g).g+=t,j(e)):xe(e);break;case 5:(e=e.g).g+=4,j(e);break;case 3:for(t=e.i;;){if(!M(e))throw Error(`Unmatched start-group tag: stream EOF`);if(e.h==4){if(e.i!=t)throw Error(`Unmatched end-group tag`);break}xe(e)}break;default:throw fe(e.h,e.j)}}ve.prototype.length=function(){return this.g.length},ve.prototype.end=function(){var e=this.g;return this.g=[],e},be.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var Se=[];function Ce(){this.i=[],this.h=0,this.g=new ve}function we(e,t){t.length!==0&&(e.i.push(t),e.h+=t.length)}var Te=typeof Symbol==`function`&&typeof Symbol()==`symbol`?Symbol(void 0):void 0;function Ee(e,t){Object.isFrozen(e)||(Te?e[Te]|=t:e.N===void 0?Object.defineProperties(e,{N:{value:t,configurable:!0,writable:!0,enumerable:!1}}):e.N|=t)}function De(e){return(Te?e[Te]:e.N)??0}function Oe(e){return Ee(e,1),e}function ke(e){return!!Array.isArray(e)&&!!(2&De(e))}function Ae(e){if(!Array.isArray(e))throw Error(`cannot mark non-array as immutable`);Ee(e,2)}function je(e){return typeof e==`object`&&!!e&&!Array.isArray(e)&&e.constructor===Object}var Me=Object.freeze(Oe([]));function Ne(e){if(ke(e.m))throw Error(`Cannot mutate an immutable Message`)}var N,Pe=typeof Symbol<`u`&&Symbol.hasInstance!==void 0;function Fe(e){return{value:e,configurable:!1,writable:!1,enumerable:!1}}function Ie(e,t,n){return t===-1?null:t>=e.i?e.g?e.g[t]:void 0:n!==void 0&&n&&e.g&&(n=e.g[t])!=null?n:e.m[t+e.h]}function Le(e,t,n,r){r=r!==void 0&&r,Ne(e),t<e.i&&!r?e.m[t+e.h]=n:(e.g||=e.m[e.i+e.h]={})[t]=n}function Re(e,t,n,r){n=n===void 0||n;var i=Ie(e,t,r=r!==void 0&&r);return i??=Me,ke(e.m)?n&&(Ae(i),Object.freeze(i)):(i===Me||ke(i))&&Le(e,t,i=Oe(i.slice()),r),i}function P(e,t,n){return(e=(e=Ie(e,t))==null?e:+e)??(n===void 0?0:n)}function ze(e,t,n,r){e.j||={};var i=ke(e.m),a=e.j[n];if(!a){r=Re(e,n,!0,r!==void 0&&r),a=[],i||=ke(r);for(var o=0;o<r.length;o++)a[o]=new t(r[o]),i&&Ae(a[o].m);i&&(Ae(a),Object.freeze(a)),e.j[n]=a}return a}function Be(e,t,n,r,i){var a=a!==void 0&&a;return Ne(e),a=ze(e,n,t,a),n=r||new n,e=Re(e,t),i==null?(a.push(n),e.push(n.m)):(a.splice(i,0,n),e.splice(i,0,n.m)),n}function F(e,t){return(e=Ie(e,t))??0}function Ve(e,t){return(e=Ie(e,t))??``}function He(e){var t=I;return We(e,t=t===void 0?Ge:t)}function Ue(e,t){if(e!=null){if(Array.isArray(e))e=We(e,t);else if(je(e)){var n,r={};for(n in e)r[n]=Ue(e[n],t);e=r}else e=t(e);return e}}function We(e,t){for(var n=e.slice(),r=0;r<n.length;r++)n[r]=Ue(n[r],t);return Array.isArray(e)&&1&De(e)&&Oe(n),n}function I(e){return e&&typeof e==`object`&&e.toJSON?e.toJSON():(e=(function(e){switch(typeof e){case`number`:return isFinite(e)?e:String(e);case`object`:if(e&&!Array.isArray(e)){if(ce(e))return re(e);if(e instanceof le){var t=e.L;return t=t==null||typeof t==`string`?t:se&&t instanceof Uint8Array?re(t):null,(e.L=t)||``}}}return e})(e),Array.isArray(e)?He(e):e)}function Ge(e){return ce(e)?new Uint8Array(e):e}function Ke(e,t,n){e||=N,N=null;var r=this.constructor.h;if(e||=r?[r]:[],this.h=(r?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=e,e=(r=this.m.length)-1,r&&je(r=this.m[e])?(this.i=e-this.h,this.g=r):t!==void 0&&-1<t?(this.i=Math.max(t,e+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,n)for(t=0;t<n.length;t++)if((e=n[t])<this.i)e+=this.h,(r=this.m[e])?Array.isArray(r)&&Oe(r):this.m[e]=Me;else{var i=(r=this.g||=this.m[this.i+this.h]={})[e];i?Array.isArray(i)&&Oe(i):r[e]=Me}}function qe(){Ke.apply(this,arguments)}if(Ke.prototype.toJSON=function(){return He(this.m)},Ke.prototype.toString=function(){return this.m.toString()},p(qe,Ke),Pe){var Je={};Object.defineProperties(qe,(Je[Symbol.hasInstance]=Fe((function(){throw Error(`Cannot perform instanceof checks for MutableMessage`)})),Je))}function Ye(e,t,n){if(n){var r,i={};for(r in n){var a=n[r],o=a.ha;o||(i.F=a.la||a.fa.P,a.aa?(i.U=nt(a.aa),o=(function(e){return function(t,n,r){return e.F(t,n,r,e.U)}})(i)):a.ca?(i.T=rt(a.X.g,a.ca),o=(function(e){return function(t,n,r){return e.F(t,n,r,e.T)}})(i)):o=i.F,a.ha=o),o(t,e,a.X),i={F:i.F,U:i.U,T:i.T}}}(function(e,t){if(t=t.ba){we(e,e.g.end());for(var n=0;n<t.length;n++)we(e,t[n])}})(t,e)}var Xe=Symbol();function Ze(e,t,n){return e[Xe]||(e[Xe]=function(e,r){return t(e,r,n)})}function Qe(e){var t=e[Xe];if(!t){var n=ht(e);t=function(e,t){return gt(e,t,n)},e[Xe]=t}return t}function $e(e){var t=(function(e){var t=e.aa;return t?Qe(t):(t=e.ka)?Ze(e.X.g,t,e.ca):void 0})(e),n=e.X,r=e.fa.O;return t?function(e,i){return r(e,i,n,t)}:function(e,t){return r(e,t,n)}}function et(e,t,n,r,i,a){var o=0;for((e=e()).length&&typeof e[0]!=`number`&&(n(t,e[0]),o++);o<e.length;){n=e[o++];for(var s=o+1;s<e.length&&typeof e[s]!=`number`;)s++;var c=e[o++];switch(s-=o){case 0:r(t,n,c);break;case 1:r(t,n,c,e[o++]);break;case 2:i(t,n,c,e[o++],e[o++]);break;case 3:s=e[o++];var l=e[o++],u=e[o++];Array.isArray(u)?i(t,n,c,s,l,u):a(t,n,c,s,l,u);break;case 4:a(t,n,c,e[o++],e[o++],e[o++],e[o++]);break;default:throw Error(`unexpected number of binary field arguments: `+s)}}return t}var tt=Symbol();function nt(e){var t=e[tt];if(!t){var n=lt(e);t=function(e,t){return vt(e,t,n)},e[tt]=t}return t}function rt(e,t){var n=e[tt];return n||(n=function(e,n){return Ye(e,n,t)},e[tt]=n),n}var it=Symbol();function at(e,t){e.push(t)}function ot(e,t,n){e.push(t,n.P)}function st(e,t,n,r,i){var a=nt(i),o=n.P;e.push(t,(function(e,t,n){return o(e,t,n,r,a)}))}function ct(e,t,n,r,i,a){var o=rt(r,a),s=n.P;e.push(t,(function(e,t,n){return s(e,t,n,r,o)}))}function lt(e){return e[it]||et(e,e[it]=[],at,ot,st,ct)}var ut=Symbol();function dt(e,t){e[0]=t}function ft(e,t,n,r){var i=n.O;e[t]=r?function(e,t,n){return i(e,t,n,r)}:i}function pt(e,t,n,r,i,a){var o=n.O,s=Qe(i);e[t]=function(e,t,n){return o(e,t,n,r,s,a)}}function mt(e,t,n,r,i,a,o){var s=n.O,c=Ze(r,i,a);e[t]=function(e,t,n){return s(e,t,n,r,c,o)}}function ht(e){return e[ut]||et(e,e[ut]={},dt,ft,pt,mt)}function gt(e,t,n){for(;M(t)&&t.h!=4;){var r=t.i,i=n[r];if(!i){var a=n[0];(a&&=a[r])&&(i=n[r]=$e(a))}if(!(i&&i(t,e,r)||(i=t,r=e,a=i.j,xe(i),i.W))){var o=i.g.h;i=a===(i=i.g.g)?oe||=new Uint8Array:ue?o.slice(a,i):new Uint8Array(o.subarray(a,i)),(a=r.ba)?a.push(i):r.ba=[i]}}return e}function _t(e,t,n){if(Se.length){var r=Se.pop();e&&(he(r.g,e),r.i=-1,r.h=-1),e=r}else e=new be(e);try{return gt(new t,e,ht(n))}finally{(t=e.g).h=null,t.j=0,t.i=0,t.g=0,t.v=!1,e.i=-1,e.h=-1,100>Se.length&&Se.push(e)}}function vt(e,t,n){for(var r=n.length,i=r%2==1,a=+!!i;a<r;a+=2)(0,n[a+1])(t,e,n[a]);Ye(e,t,i?n[0]:void 0)}function yt(e,t){var n=new Ce;vt(e,n,lt(t)),we(n,n.g.end()),e=new Uint8Array(n.h);for(var r=(t=n.i).length,i=0,a=0;a<r;a++){var o=t[a];e.set(o,i),i+=o.length}return n.i=[e],e}function bt(e,t){return{O:e,P:t}}var xt=bt((function(e,t,n){if(e.h!==5)return!1;var r=(e=e.g).h[e.g],i=e.h[e.g+1],a=e.h[e.g+2],o=e.h[e.g+3];return e.g+=4,j(e),e=2*((i=(r<<0|i<<8|a<<16|o<<24)>>>0)>>31)+1,r=i>>>23&255,i&=8388607,Le(t,n,r==255?i?NaN:1/0*e:r==0?e*2**-149*i:e*2**(r-150)*(i+2**23)),!0}),(function(e,t,n){if((t=Ie(t,n))!=null){ye(e.g,8*n+5),e=e.g;var r=t;(r=(n=+(0>r))?-r:r)===0?de=0<1/r?0:2147483648:isNaN(r)?de=2147483647:34028234663852886e22<r?de=(n<<31|2139095040)>>>0:11754943508222875e-54>r?(r=Math.round(r/2**-149),de=(n<<31|r)>>>0):(t=Math.floor(Math.log(r)/Math.LN2),r*=2**-t,16777216<=(r=Math.round(8388608*r))&&++t,de=(n<<31|t+127<<23|8388607&r)>>>0),n=de,e.g.push(n>>>0&255),e.g.push(n>>>8&255),e.g.push(n>>>16&255),e.g.push(n>>>24&255)}})),St=bt((function(e,t,n){if(e.h!==0)return!1;for(var r=e.g,i=128,a=0,o=e=0;4>o&&128<=i;o++)i=r.h[r.g++],j(r),a|=(127&i)<<7*o;if(128<=i&&(i=r.h[r.g++],j(r),a|=(127&i)<<28,e|=(127&i)>>4),128<=i)for(o=0;5>o&&128<=i;o++)i=r.h[r.g++],j(r),e|=(127&i)<<7*o+3;if(!(128>i))throw pe();return r=a>>>0,(e=2147483648&(i=e>>>0))&&(i=~i>>>0,(r=1+~r>>>0)==0&&(i=i+1>>>0)),r=4294967296*i+(r>>>0),Le(t,n,e?-r:r),!0}),(function(e,t,n){if((t=Ie(t,n))!=null&&t!=null){ye(e.g,8*n),e=e.g;var r=t;for(n=0>r,t=(r=Math.abs(r))>>>0,r=Math.floor((r-t)/4294967296),r>>>=0,n&&(r=~r>>>0,4294967295<(t=1+(~t>>>0))&&(t=0,4294967295<++r&&(r=0))),n=de=t,t=r;0<t||127<n;)e.g.push(127&n|128),n=(n>>>7|t<<25)>>>0,t>>>=7;e.g.push(n)}})),Ct=bt((function(e,t,n){return e.h===0&&(Le(t,n,ge(e.g)),!0)}),(function(e,t,n){if((t=Ie(t,n))!=null&&t!=null)if(ye(e.g,8*n),e=e.g,0<=(n=t))ye(e,n);else{for(t=0;9>t;t++)e.g.push(127&n|128),n>>=7;e.g.push(1)}})),wt=bt((function(e,t,n){if(e.h!==2)return!1;var r,i=ge(e.g)>>>0,a=(e=e.g).g;if(e.g+=i,j(e),e=e.h,k)(r=O)||(r=O=new TextDecoder(`utf-8`,{fatal:!0})),r=r.decode(e.subarray(a,a+i));else{i=a+i;for(var o,s,c,l=[],u=null;a<i;)128>(o=e[a++])?l.push(o):224>o?a>=i?E():(s=e[a++],194>o||(192&s)!=128?(a--,E()):l.push((31&o)<<6|63&s)):240>o?a>=i-1?E():(192&(s=e[a++]))!=128||o===224&&160>s||o===237&&160<=s||(192&(r=e[a++]))!=128?(a--,E()):l.push((15&o)<<12|(63&s)<<6|63&r):244>=o?a>=i-2?E():(192&(s=e[a++]))!=128||s-144+(o<<28)>>30||(192&(r=e[a++]))!=128||(192&(c=e[a++]))!=128?(a--,E()):(o=(7&o)<<18|(63&s)<<12|(63&r)<<6|63&c,o-=65536,l.push(55296+(o>>10&1023),56320+(1023&o))):E(),8192<=l.length&&(u=D(u,l),l.length=0);r=D(u,l)}return Le(t,n,r),!0}),(function(e,t,n){if((t=Ie(t,n))!=null){var r=!1;if(r=r!==void 0&&r,A){if(r&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(t))throw Error(`Found an unpaired surrogate`);t=(ee||=new TextEncoder).encode(t)}else{for(var i=0,a=new Uint8Array(3*t.length),o=0;o<t.length;o++){var s=t.charCodeAt(o);if(128>s)a[i++]=s;else{if(2048>s)a[i++]=s>>6|192;else{if(55296<=s&&57343>=s){if(56319>=s&&o<t.length){var c=t.charCodeAt(++o);if(56320<=c&&57343>=c){s=1024*(s-55296)+c-56320+65536,a[i++]=s>>18|240,a[i++]=s>>12&63|128,a[i++]=s>>6&63|128,a[i++]=63&s|128;continue}o--}if(r)throw Error(`Found an unpaired surrogate`);s=65533}a[i++]=s>>12|224,a[i++]=s>>6&63|128}a[i++]=63&s|128}}t=a.subarray(0,i)}ye(e.g,8*n+2),ye(e.g,t.length),we(e,e.g.end()),we(e,t)}})),Tt=bt((function(e,t,n,r,i){if(e.h!==2)return!1;t=Be(t,n,r),n=e.g.i,r=ge(e.g)>>>0;var a=e.g.g+r,o=a-n;if(0>=o&&(e.g.i=a,i(t,e),o=a-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read `+r+` bytes, instead read `+(r-o)+` bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=a,e.g.i=n,!0}),(function(e,t,n,r,i){if((t=ze(t,r,n))!=null)for(r=0;r<t.length;r++){var a=e;ye(a.g,8*n+2);var o=a.g.end();we(a,o),o.push(a.h),a=o,i(t[r],e),o=e;var s=a.pop();for(s=o.h+o.g.length()-s;127<s;)a.push(127&s|128),s>>>=7,o.h++;a.push(s),o.h++}}));function Et(){qe.apply(this,arguments)}if(p(Et,qe),Pe){var Dt={};Object.defineProperties(Et,(Dt[Symbol.hasInstance]=Fe(Object[Symbol.hasInstance]),Dt))}function Ot(e){Et.call(this,e)}function kt(){return[1,Ct,2,xt,3,wt,4,wt]}function At(e){Et.call(this,e,-1,Mt)}function jt(){return[1,Tt,Ot,kt]}p(Ot,Et),p(At,Et),At.prototype.addClassification=function(e,t){return Be(this,1,Ot,e,t),this};var Mt=[1];function Nt(e){Et.call(this,e)}function Pt(){return[1,xt,2,xt,3,xt,4,xt,5,xt]}function Ft(e){Et.call(this,e,-1,Lt)}function It(){return[1,Tt,Nt,Pt]}p(Nt,Et),p(Ft,Et);var Lt=[1];function Rt(e){Et.call(this,e)}function zt(){return[1,xt,2,xt,3,xt,4,xt,5,xt,6,St]}p(Rt,Et);var Bt=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Vt=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Ht=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Ut=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Wt=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Gt=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Kt=[].concat(s(Bt),s(Vt),s(Ht),s(Ut),s(Wt),s(Gt));function qt(e,t,n){if(n=e.createShader(n===0?e.VERTEX_SHADER:e.FRAGMENT_SHADER),e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+e.getShaderInfoLog(n));return n}function Jt(e){return ze(e,Ot,1).map((function(e){return{index:F(e,1),ga:P(e,2),label:Ie(e,3)==null?void 0:Ve(e,3),displayName:Ie(e,4)==null?void 0:Ve(e,4)}}))}function Yt(e){return{x:P(e,1),y:P(e,2),z:P(e,3),visibility:Ie(e,4)==null?void 0:P(e,4)}}function Xt(e,t){this.h=e,this.g=t,this.l=0}function Zt(e,t,n){return(function(e,t){var n=e.g;if(e.o===void 0){var r=qt(n,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),i=qt(n,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),a=n.createProgram();if(n.attachShader(a,r),n.attachShader(a,i),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+n.getProgramInfoLog(a));r=e.o=a,n.useProgram(r),i=n.getUniformLocation(r,`sampler0`),e.j={K:n.getAttribLocation(r,`aVertex`),J:n.getAttribLocation(r,`aTex`),ma:i},e.u=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.u),n.enableVertexAttribArray(e.j.K),n.vertexAttribPointer(e.j.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),e.s=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.s),n.enableVertexAttribArray(e.j.J),n.vertexAttribPointer(e.j.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.uniform1i(i,0)}r=e.j,n.useProgram(e.o),n.canvas.width=t.width,n.canvas.height=t.height,n.viewport(0,0,t.width,t.height),n.activeTexture(n.TEXTURE0),e.h.bindTexture2d(t.glName),n.enableVertexAttribArray(r.K),n.bindBuffer(n.ARRAY_BUFFER,e.u),n.vertexAttribPointer(r.K,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(r.J),n.bindBuffer(n.ARRAY_BUFFER,e.s),n.vertexAttribPointer(r.J,2,n.FLOAT,!1,0,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER?n.DRAW_FRAMEBUFFER:n.FRAMEBUFFER,null),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.colorMask(!0,!0,!0,!0),n.drawArrays(n.TRIANGLE_FAN,0,4),n.disableVertexAttribArray(r.K),n.disableVertexAttribArray(r.J),n.bindBuffer(n.ARRAY_BUFFER,null),e.h.bindTexture2d(0)})(e,t),typeof e.g.canvas.transferToImageBitmap==`function`?Promise.resolve(e.g.canvas.transferToImageBitmap()):n?Promise.resolve(e.g.canvas):typeof createImageBitmap==`function`?createImageBitmap(e.g.canvas):(e.i===void 0&&(e.i=document.createElement(`canvas`)),new Promise((function(t){e.i.height=e.g.canvas.height,e.i.width=e.g.canvas.width,e.i.getContext(`2d`,{}).drawImage(e.g.canvas,0,0,e.g.canvas.width,e.g.canvas.height),t(e.i)})))}function Qt(e){this.g=e}var $t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function en(e,t){return t+e}function tn(e,t){window[e]=t}function nn(e){if(this.g=e,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y=``,this.C={},this.locateFile=e&&e.locateFile||en,typeof window==`object`)var t=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf(`/`))+`/`;else{if(typeof location>`u`)throw Error(`solutions can only be loaded on a web page or in a web worker`);t=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf(`/`))+`/`}if(this.$=t,e.options)for(var n=(t=o(Object.keys(e.options))).next();!n.done;n=t.next()){n=n.value;var r=e.options[n].default;r!==void 0&&(this.j[n]=typeof r==`function`?r():r)}}function rn(e){var t,n,r,i,a,o,c,l,u,d,f;return S((function(p){switch(p.g){case 1:return e.Z?(t=e.g.files===void 0?[]:typeof e.g.files==`function`?e.g.files(e.j):e.g.files,_(p,S((function(e){switch(e.g){case 1:return e.o=2,_(e,WebAssembly.instantiate($t),4);case 4:e.g=3,e.o=0;break;case 2:return e.o=0,e.j=null,e.return(!1);case 3:return e.return(!0)}})),2)):p.return();case 2:if(n=p.h,typeof window==`object`)return tn(`createMediapipeSolutionsWasm`,{locateFile:e.locateFile}),tn(`createMediapipeSolutionsPackedAssets`,{locateFile:e.locateFile}),o=t.filter((function(e){return e.data!==void 0})),c=t.filter((function(e){return e.data===void 0})),l=Promise.all(o.map((function(t){var n=an(e,t.url);if(t.path!==void 0){var r=t.path;n=n.then((function(t){return e.overrideFile(r,t),Promise.resolve(t)}))}return n}))),u=Promise.all(c.map((function(t){return t.simd===void 0||t.simd&&n||!t.simd&&!n?(function(e){var t=document.createElement(`script`);return t.setAttribute(`src`,e),t.setAttribute(`crossorigin`,`anonymous`),new Promise((function(e){t.addEventListener(`load`,(function(){e()}),!1),t.addEventListener(`error`,(function(){e()}),!1),document.body.appendChild(t)}))})(e.locateFile(t.url,e.$)):Promise.resolve()}))).then((function(){var t,n,r;return S((function(i){if(i.g==1)return t=window.createMediapipeSolutionsWasm,n=window.createMediapipeSolutionsPackedAssets,r=e,_(i,t(n),2);r.h=i.h,i.g=0}))})),d=S((function(t){return e.g.graph&&e.g.graph.url?t=_(t,an(e,e.g.graph.url),0):(t.g=0,t=void 0),t})),_(p,Promise.all([u,l,d]),7);if(typeof importScripts!=`function`)throw Error(`solutions can only be loaded on a web page or in a web worker`);return r=t.filter((function(e){return e.simd===void 0||e.simd&&n||!e.simd&&!n})).map((function(t){return e.locateFile(t.url,e.$)})),importScripts.apply(null,s(r)),i=e,_(p,createMediapipeSolutionsWasm(Module),6);case 6:i.h=p.h,e.l=new OffscreenCanvas(1,1),e.h.canvas=e.l,a=e.h.GL.createContext(e.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<`u`?2:1}),e.h.GL.makeContextCurrent(a),p.g=4;break;case 7:if(e.l=document.createElement(`canvas`),!(f=e.l.getContext(`webgl2`,{}))&&!(f=e.l.getContext(`webgl`,{})))return alert(`Failed to create WebGL canvas context when passing video frame.`),p.return();e.G=f,e.h.canvas=e.l,e.h.createContext(e.l,!0,!0,{});case 4:e.i=new e.h.SolutionWasm,e.Z=!1,p.g=0}}))}function an(e,t){var n,r;return S((function(i){return t in e.H?i.return(e.H[t]):(n=e.locateFile(t,``),r=fetch(n).then((function(e){return e.arrayBuffer()})),e.H[t]=r,i.return(r))}))}function on(e,t,n){var r,i,a,s,c,l,u,d,f,p,m,h,g,v;return S((function(y){switch(y.g){case 1:if(!n)return y.return(t);for(r={},i=0,a=o(Object.keys(n)),s=a.next();!s.done;s=a.next())c=s.value,typeof(l=n[c])!=`string`&&l.type===`texture`&&t[l.stream]!==void 0&&++i;1<i&&(e.I=!1),u=o(Object.keys(n)),s=u.next();case 2:if(s.done){y.g=4;break}if(d=s.value,typeof(f=n[d])==`string`)return g=r,v=d,_(y,(function(e,t,n){var r;return S((function(i){return typeof n==`number`||n instanceof Uint8Array||n instanceof e.h.Uint8BlobList?i.return(n):n instanceof e.h.Texture2dDataOut?((r=e.u[t])||(r=new Xt(e.h,e.G),e.u[t]=r),i.return(Zt(r,n,e.I))):i.return(void 0)}))})(e,d,t[f]),14);if(p=t[f.stream],f.type===`detection_list`){if(p){for(var b=p.getRectList(),x=p.getLandmarksList(),C=p.getClassificationsList(),w=[],T=0;T<b.size();++T){var E=_t(b.get(T),Rt,zt);E={boundingBox:{xCenter:P(E,1),yCenter:P(E,2),height:P(E,3),width:P(E,4),rotation:P(E,5,0),rectId:F(E,6)},landmarks:ze(_t(x.get(T),Ft,It),Nt,1).map(Yt),V:Jt(_t(C.get(T),At,jt))},w.push(E)}b=w}else b=[];r[d]=b,y.g=7;break}if(f.type===`proto_list`){if(p){for(b=Array(p.size()),x=0;x<p.size();x++)b[x]=p.get(x);p.delete()}else b=[];r[d]=b,y.g=7;break}if(p===void 0){y.g=3;break}if(f.type===`float_list`){r[d]=p,y.g=7;break}if(f.type===`proto`){r[d]=p,y.g=7;break}if(f.type!==`texture`)throw Error(`Unknown output config type: '`+f.type+`'`);return(m=e.u[d])||(m=new Xt(e.h,e.G),e.u[d]=m),_(y,Zt(m,p,e.I),13);case 13:h=y.h,r[d]=h;case 7:f.transform&&r[d]&&(r[d]=f.transform(r[d])),y.g=3;break;case 14:g[v]=y.h;case 3:s=u.next(),y.g=2;break;case 4:return y.return(r)}}))}function sn(e,t){for(var n=t.name||`$`,r=[].concat(s(t.wants)),i=new e.h.StringList,a=o(t.wants),c=a.next();!c.done;c=a.next())i.push_back(c.value);a=e.h.PacketListener.implement({onResults:function(i){for(var a={},o=0;o<t.wants.length;++o)a[r[o]]=i.get(o);var s=e.listeners[n];s&&(e.D=on(e,a,t.outs).then((function(n){n=s(n);for(var i=0;i<t.wants.length;++i){var o=a[r[i]];typeof o==`object`&&o.hasOwnProperty&&o.hasOwnProperty(`delete`)&&o.delete()}n&&(e.D=n)})))}}),e.i.attachMultiListener(i,a),i.delete()}function cn(e){var t=this;e||={};var n={url:`face_detection_short.binarypb`},r={type:1,graphOptionXref:{calculatorType:`TensorsToDetectionsCalculator`,calculatorName:`facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator`,fieldName:`min_score_thresh`}};this.g=new nn({locateFile:e.locateFile,files:[{data:!0,url:`face_detection_short.binarypb`},{data:!0,url:`face_detection_short_range.tflite`},{simd:!0,url:`face_detection_solution_simd_wasm_bin.js`},{simd:!1,url:`face_detection_solution_wasm_bin.js`}],graph:n,listeners:[{wants:[`detections`,`image_transformed`],outs:{image:`image_transformed`,detections:{type:`detection_list`,stream:`detections`}}}],inputs:{image:{type:`video`,stream:`input_frames_gpu`}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:`InferenceCalculator`,fieldName:`use_cpu_inference`},default:typeof window==`object`&&window.navigator!==void 0&&(`iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod`.split(`;`).includes(navigator.platform)||navigator.userAgent.includes(`Mac`)&&`ontouchend`in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:`GlScalerCalculator`,calculatorIndex:1,fieldName:`flip_horizontal`}},model:{type:0,onChange:function(e){var i,a,s,c,l;return S((function(u){switch(u.g){case 1:i=o(e===`short`?[`face_detection_short_range.tflite`]:[`face_detection_full_range_sparse.tflite`]),a=i.next();case 2:if(a.done){u.g=4;break}return s=a.value,c=`third_party/mediapipe/modules/face_detection/`+s,_(u,an(t.g,s),5);case 5:l=u.h,t.g.overrideFile(c,l),a=i.next(),u.g=2;break;case 4:return n.url=e===`short`?`face_detection_short.binarypb`:`face_detection_full.binarypb`,r.graphOptionXref.calculatorName=e===`short`?`facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator`:`facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator`,u.return(!0)}}))}},minDetectionConfidence:r}})}(e=nn.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},e.reset=function(){var e=this;return S((function(t){e.i&&(e.i.reset(),e.o={},e.u={}),t.g=0}))},e.setOptions=function(e,t){var n=this;if(t||=this.g.options){for(var r=[],i=[],a={},s=o(Object.keys(e)),c=s.next();!c.done;a={R:a.R,S:a.S},c=s.next()){var l=c.value;l in this.j&&this.j[l]===e[l]||(this.j[l]=e[l],(c=t[l])!==void 0&&(c.onChange&&(a.R=c.onChange,a.S=e[l],r.push((function(e){return function(){return S((function(t){if(t.g==1)return _(t,e.R(e.S),2);t.h===!0&&(n.s=!0),t.g=0}))}})(a))),c.graphOptionXref&&(l={valueNumber:c.type===1?e[l]:0,valueBoolean:c.type===0&&e[l],valueString:c.type===2?e[l]:``},c=Object.assign(Object.assign(Object.assign({},{calculatorName:``,calculatorIndex:0}),c.graphOptionXref),l),i.push(c))))}r.length===0&&i.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(i),this.A=(this.A===void 0?[]:this.A).concat(r))}},e.initialize=function(){var e=this;return S((function(t){return t.g==1?_(t,rn(e),2):t.g==3?_(t,(function(e){var t,n,r,i,a,s;return S((function(c){switch(c.g){case 1:if(!e.s)return c.return();if(!e.A){c.g=2;break}t=o(e.A),n=t.next();case 3:if(n.done){c.g=5;break}return _(c,(0,n.value)(),4);case 4:n=t.next(),c.g=3;break;case 5:e.A=void 0;case 2:if(e.B){for(r=new e.h.GraphOptionChangeRequestList,i=o(e.B),a=i.next();!a.done;a=i.next())s=a.value,r.push_back(s);e.i.changeOptions(r),r.delete(),e.B=void 0}e.s=!1,c.g=0}}))})(e),0):_(t,(function(e){var t,n,r,i,a,s,c,l;return S((function(u){if(u.g==1)return e.g.graph&&e.g.graph.url&&e.Y===e.g.graph.url?u.return():(e.s=!0,e.g.graph&&e.g.graph.url?(e.Y=e.g.graph.url,_(u,an(e,e.g.graph.url),3)):void(u.g=2));for(u.g!=2&&(t=u.h,e.i.loadGraph(t)),n=o(Object.keys(e.C)),r=n.next();!r.done;r=n.next())i=r.value,e.i.overrideFile(i,e.C[i]);if(e.C={},e.g.listeners)for(a=o(e.g.listeners),s=a.next();!s.done;s=a.next())c=s.value,sn(e,c);l=e.j,e.j={},e.setOptions(l),u.g=0}))})(e),3)}))},e.overrideFile=function(e,t){this.i?this.i.overrideFile(e,t):this.C[e]=t},e.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},e.send=function(e,t){var n,r,i,a,s,c,l,u,d,f=this;return S((function(p){switch(p.g){case 1:return f.g.inputs?(n=1e3*(t??performance.now()),_(p,f.D,2)):p.return();case 2:return _(p,f.initialize(),3);case 3:for(r=new f.h.PacketDataList,i=o(Object.keys(e)),a=i.next();!a.done;a=i.next())if(s=a.value,c=f.g.inputs[s]){e:{var m=e[s];switch(c.type){case`video`:var h=f.o[c.stream];if(h||(h=new Xt(f.h,f.G),f.o[c.stream]=h),h.l===0&&(h.l=h.h.createTexture()),typeof HTMLVideoElement<`u`&&m instanceof HTMLVideoElement)var g=m.videoWidth,v=m.videoHeight;else typeof HTMLImageElement<`u`&&m instanceof HTMLImageElement?(g=m.naturalWidth,v=m.naturalHeight):(g=m.width,v=m.height);v={glName:h.l,width:g,height:v},(g=h.g).canvas.width=v.width,g.canvas.height=v.height,g.activeTexture(g.TEXTURE0),h.h.bindTexture2d(h.l),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,m),h.h.bindTexture2d(0),h=v;break e;case`detections`:for((h=f.o[c.stream])||(h=new Qt(f.h),f.o[c.stream]=h),h.data||=new h.g.DetectionListData,h.data.reset(m.length),v=0;v<m.length;++v){g=m[v];var y=h.data,b=y.setBoundingBox,x=v,S=g.boundingBox,C=new Rt;if(Le(C,1,S.xCenter),Le(C,2,S.yCenter),Le(C,3,S.height),Le(C,4,S.width),Le(C,5,S.rotation),Le(C,6,S.rectId),S=yt(C,zt),b.call(y,x,S),g.landmarks)for(y=0;y<g.landmarks.length;++y){var w=!!(C=g.landmarks[y]).visibility;x=(b=h.data).addNormalizedLandmark,S=v,C=Object.assign(Object.assign({},C),{visibility:w?C.visibility:0}),Le(w=new Nt,1,C.x),Le(w,2,C.y),Le(w,3,C.z),C.visibility&&Le(w,4,C.visibility),C=yt(w,Pt),x.call(b,S,C)}if(g.V)for(y=0;y<g.V.length;++y)x=(b=h.data).addClassification,S=v,C=g.V[y],Le(w=new Ot,2,C.ga),C.index&&Le(w,1,C.index),C.label&&Le(w,3,C.label),C.displayName&&Le(w,4,C.displayName),C=yt(w,kt),x.call(b,S,C)}h=h.data;break e;default:h={}}}switch(l=h,u=c.stream,c.type){case`video`:r.pushTexture2d(Object.assign(Object.assign({},l),{stream:u,timestamp:n}));break;case`detections`:(d=l).stream=u,d.timestamp=n,r.pushDetectionList(d);break;default:throw Error(`Unknown input config type: '`+c.type+`'`)}}return f.i.send(r),_(p,f.D,4);case 4:r.delete(),p.g=0}}))},e.onResults=function(e,t){this.listeners[t||`$`]=e},T(`Solution`,nn),T(`OptionType`,{BOOL:0,NUMBER:1,ia:2,0:`BOOL`,1:`NUMBER`,2:`STRING`}),(e=cn.prototype).close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(e){this.g.onResults(e)},e.initialize=function(){var e=this;return S((function(t){return _(t,e.g.initialize(),0)}))},e.reset=function(){this.g.reset()},e.send=function(e){var t=this;return S((function(n){return _(n,t.g.send(e),0)}))},e.setOptions=function(e){this.g.setOptions(e)},T(`FaceDetection`,cn),T(`FACEDETECTION_LIPS`,Bt),T(`FACEDETECTION_LEFT_EYE`,Vt),T(`FACEDETECTION_LEFT_EYEBROW`,Ht),T(`FACEDETECTION_RIGHT_EYE`,Ut),T(`FACEDETECTION_RIGHT_EYEBROW`,Wt),T(`FACEDETECTION_FACE_OVAL`,Gt),T(`FACEDETECTION_CONTOURS`,Kt),T(`FACEDETECTION_TESSELATION`,[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),T(`VERSION`,`0.4.1646425229`)}).call(AP);var MP=function(){return MP=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},MP.apply(this,arguments)};function NP(e,t,n,r){return new(n||=Promise)((function(t,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function o(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,o)}s((r=r.apply(e,[])).next())}))}function PP(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return(function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}})([a,s])}}}var FP=[`rightEye`,`leftEye`,`noseTip`,`mouthCenter`,`rightEarTragion`,`leftEarTragion`],IP={modelType:`short`,runtime:`mediapipe`,maxFaces:1},LP=(function(){function e(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new jP.FaceDetection({locateFile:function(t,n){return e.solutionPath?e.solutionPath.replace(/\/+$/,``)+`/`+t:n+`/`+t}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:e.modelType}),this.faceDetectorSolution.onResults((function(e){if(t.height=e.image.height,t.width=e.image.width,t.faces=[],e.detections!==null)for(var n=0,r=e.detections;n<r.length;n++){var i=r[n];t.faces.push(t.normalizedToAbsolute(i.landmarks,{xMin:o=(a=i.boundingBox).xCenter-a.width/2,xMax:o+a.width,yMin:s=a.yCenter-a.height/2,yMax:s+a.height,width:a.width,height:a.height}))}var a,o,s}))}return e.prototype.normalizedToAbsolute=function(e,t){var n=this;return{keypoints:e.map((function(e,t){return{x:e.x*n.width,y:e.y*n.height,name:FP[t]}})),box:{xMin:t.xMin*this.width,yMin:t.yMin*this.height,xMax:t.xMax*this.width,yMax:t.yMax*this.height,width:t.width*this.width,height:t.height*this.height}}},e.prototype.estimateFaces=function(e,t){return NP(this,void 0,void 0,(function(){var n,r;return PP(this,(function(i){switch(i.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Wi?(r=ImageData.bind,[4,Is(e)]):[3,2];case 1:return n=new(r.apply(ImageData,[void 0,i.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:n=e,i.label=3;case 3:return e=n,[4,this.faceDetectorSolution.send({image:e})];case 4:return i.sent(),[2,this.faces]}}))}))},e.prototype.dispose=function(){this.faceDetectorSolution.close()},e.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},e})();function RP(e){return NP(this,void 0,void 0,(function(){var t,n;return PP(this,(function(r){switch(r.label){case 0:return t=(function(e){if(e==null)return MP({},IP);var t=MP({},e);return t.runtime=`mediapipe`,t.modelType??=IP.modelType,t.maxFaces??=IP.maxFaces,t})(e),[4,(n=new LP(t)).initialize()];case 1:return r.sent(),[2,n]}}))}))}function zP(e){return e instanceof Wi?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function BP(e){return e instanceof Wi?e:Ls(e)}function VP(e,t){E(e.width!==0,(function(){return t+` width cannot be 0.`})),E(e.height!==0,(function(){return t+` height cannot be 0.`}))}function HP(e,t,n){var r=t.outputTensorSize,i=t.keepAspectRatio,a=t.borderMode,o=t.outputTensorFloatRange,s=zP(e),c=(function(e,t){return{xCenter:.5*e.width,yCenter:.5*e.height,width:e.width,height:e.height,rotation:0}})(s),l=(function(e,t,n){if(n===void 0&&(n=!1),!n)return{top:0,left:0,right:0,bottom:0};var r=t.height,i=t.width;VP(t,`targetSize`),VP(e,`roi`);var a,o,s=r/i,c=e.height/e.width,l=0,u=0;return s>c?(a=e.width,o=e.width*s,u=(1-c/s)/2):(a=e.height/s,o=e.height,l=(1-s/c)/2),e.width=a,e.height=o,{top:u,left:l,right:l,bottom:u}})(c,r,i),u=(function(e,t,n,r){var i=e.width,a=e.height,o=1,s=Math.cos(e.rotation),c=Math.sin(e.rotation),l=e.xCenter,u=e.yCenter,d=1/t,f=1/n,p=Array(16);return p[0]=i*s*o*d,p[1]=-a*c*d,p[2]=0,p[3]=(-.5*i*s*o+.5*a*c+l)*d,p[4]=i*c*o*f,p[5]=a*s*f,p[6]=0,p[7]=(-.5*a*s-.5*i*c*o+u)*f,p[8]=0,p[9]=0,p[10]=i*d,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,(function(e){if(e.length!==16)throw Error(`Array length must be 16 but got `+e.length);return[[e[0],e[1],e[2],e[3]],[e[4],e[5],e[6],e[7]],[e[8],e[9],e[10],e[11]],[e[12],e[13],e[14],e[15]]]})(p)})(c,s.width,s.height);return{imageTensor:ys((function(){var t=BP(e),n=Ch((function(e,t,n){return VP(n,`inputResolution`),[1/n.width*e[0][0]*t.width,1/n.height*e[0][1]*t.width,e[0][3]*t.width,1/n.width*e[1][0]*t.height,1/n.height*e[1][1]*t.height,e[1][3]*t.height,0,0]})(u,s,r),[1,8]),i=a===`zero`?`constant`:`nearest`,c=cv.transform(gd(Lo(t,`float32`)),n,`bilinear`,i,0,[r.height,r.width]);return o==null?c:(function(e,t){var n=(function(e,t,n,r){var i=(r-n)/255;return{scale:i,offset:n-0*i}})(0,0,t[0],t[1]);return ys((function(){return H(W(e,n.scale),n.offset)}))})(c,o)})),padding:l,transformationMatrix:u}}function UP(e){e.reduceBoxesInLowestLayer??=!1,e.interpolatedScaleAspectRatio??=1,e.fixedAnchorSize??=!1;for(var t=[],n=0;n<e.numLayers;){for(var r=[],i=[],a=[],o=[],s=n;s<e.strides.length&&e.strides[s]===e.strides[n];){var c=WP(e.minScale,e.maxScale,s,e.strides.length);if(s===0&&e.reduceBoxesInLowestLayer)a.push(1),a.push(2),a.push(.5),o.push(.1),o.push(c),o.push(c);else{for(var l=0;l<e.aspectRatios.length;++l)a.push(e.aspectRatios[l]),o.push(c);if(e.interpolatedScaleAspectRatio>0){var u=s===e.strides.length-1?1:WP(e.minScale,e.maxScale,s+1,e.strides.length);o.push(Math.sqrt(c*u)),a.push(e.interpolatedScaleAspectRatio)}}s++}for(var d=0;d<a.length;++d){var f=Math.sqrt(a[d]);r.push(o[d]/f),i.push(o[d]*f)}var p=0,m=0;if(e.featureMapHeight.length>0)p=e.featureMapHeight[n],m=e.featureMapWidth[n];else{var h=e.strides[n];p=Math.ceil(e.inputSizeHeight/h),m=Math.ceil(e.inputSizeWidth/h)}for(var g=0;g<p;++g)for(var _=0;_<m;++_)for(var v=0;v<r.length;++v){var y={xCenter:(_+e.anchorOffsetX)/m,yCenter:(g+e.anchorOffsetY)/p,width:0,height:0};e.fixedAnchorSize?(y.width=1,y.height=1):(y.width=i[v],y.height=r[v]),t.push(y)}n=s}return t}function WP(e,t,n,r){return r===1?.5*(e+t):e+(t-e)*n/(r-1)}function GP(e,t){var n=t[0],r=t[1];return[n*e[0]+r*e[1]+e[3],n*e[4]+r*e[5]+e[7]]}function KP(e,t,n,r){return NP(this,void 0,void 0,(function(){var r,i,a,o,s;return PP(this,(function(c){switch(c.label){case 0:return e.sort((function(e,t){return Math.max.apply(Math,t.score)-Math.max.apply(Math,e.score)})),r=Ch(e.map((function(e){return[e.locationData.relativeBoundingBox.yMin,e.locationData.relativeBoundingBox.xMin,e.locationData.relativeBoundingBox.yMax,e.locationData.relativeBoundingBox.xMax]}))),i=Sh(e.map((function(e){return e.score[0]}))),[4,cv.nonMaxSuppressionAsync(r,i,t,n)];case 1:return[4,(a=c.sent()).array()];case 2:return o=c.sent(),s=e.filter((function(e,t){return o.indexOf(t)>-1})),bs([r,i,a]),[2,s]}}))}))}function qP(e,t,n){return NP(this,void 0,void 0,(function(){var r,i,a,o,s;return PP(this,(function(c){switch(c.label){case 0:return r=e[0],i=e[1],a=(function(e,t,n){return ys((function(){var r,i,a,o;n.reverseOutputOrder?(i=ph(K(e,[0,n.boxCoordOffset+0],[-1,1])),r=ph(K(e,[0,n.boxCoordOffset+1],[-1,1])),o=ph(K(e,[0,n.boxCoordOffset+2],[-1,1])),a=ph(K(e,[0,n.boxCoordOffset+3],[-1,1]))):(r=ph(K(e,[0,n.boxCoordOffset+0],[-1,1])),i=ph(K(e,[0,n.boxCoordOffset+1],[-1,1])),a=ph(K(e,[0,n.boxCoordOffset+2],[-1,1])),o=ph(K(e,[0,n.boxCoordOffset+3],[-1,1]))),i=H(W(U(i,n.xScale),t.w),t.x),r=H(W(U(r,n.yScale),t.h),t.y),n.applyExponentialOnBoxSize?(a=W(md(U(a,n.hScale)),t.h),o=W(md(U(o,n.wScale)),t.w)):(a=W(U(a,n.hScale),t.h),o=W(U(o,n.wScale),t.h));var s=J(r,U(a,2)),c=J(i,U(o,2)),l=H(r,U(a,2)),u=H(i,U(o,2)),d=ul([G(s,[n.numBoxes,1]),G(c,[n.numBoxes,1]),G(l,[n.numBoxes,1]),G(u,[n.numBoxes,1])],1);if(n.numKeypoints)for(var f=0;f<n.numKeypoints;++f){var p=n.keypointCoordOffset+f*n.numValuesPerKeypoint,m=void 0,h=void 0;n.reverseOutputOrder?(m=ph(K(e,[0,p],[-1,1])),h=ph(K(e,[0,p+1],[-1,1]))):(h=ph(K(e,[0,p],[-1,1])),m=ph(K(e,[0,p+1],[-1,1])));var g=H(W(U(m,n.xScale),t.w),t.x),_=H(W(U(h,n.yScale),t.h),t.y);d=ul([d,G(g,[n.numBoxes,1]),G(_,[n.numBoxes,1])],1)}return d}))})(i,t,n),o=ys((function(){var e=r;return n.sigmoidScore?(n.scoreClippingThresh!=null&&(e=zl(r,-n.scoreClippingThresh,n.scoreClippingThresh)),e=fl(e)):e})),[4,JP(a,o,n)];case 1:return s=c.sent(),bs([a,o]),[2,s]}}))}))}function JP(e,t,n){return NP(this,void 0,void 0,(function(){var r,i,a,o,s,c,l,u,d,f,p,m;return PP(this,(function(h){switch(h.label){case 0:return r=[],[4,e.data()];case 1:return i=h.sent(),[4,t.data()];case 2:for(a=h.sent(),o=0;o<n.numBoxes;++o)if(!(n.minScoreThresh!=null&&a[o]<n.minScoreThresh||(s=o*n.numCoords,c=YP(i[s+0],i[s+1],i[s+2],i[s+3],a[o],n.flipVertically,o),(l=c.locationData.relativeBoundingBox).width<0||l.height<0))){if(n.numKeypoints>0)for((u=c.locationData).relativeKeypoints=[],d=n.numKeypoints*n.numValuesPerKeypoint,f=0;f<d;f+=n.numValuesPerKeypoint)p=s+n.keypointCoordOffset+f,m={x:i[p+0],y:n.flipVertically?1-i[p+1]:i[p+1]},u.relativeKeypoints.push(m);r.push(c)}return[2,r]}}))}))}function YP(e,t,n,r,i,a,o){return{score:[i],ind:o,locationData:{relativeBoundingBox:{xMin:t,yMin:a?1-n:e,xMax:r,yMax:a?1-e:n,width:r-t,height:n-e}}}}var XP,ZP={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},QP={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},$P={runtime:`tfjs`,modelType:`short`,maxFaces:1,detectorModelUrl:`https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1`},eF={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},tF={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},nF={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:`zero`},rF={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:`zero`},iF=(function(){function e(e,t,n){this.detectorModel=t,this.maxFaces=n,e===`full`?(this.imageToTensorConfig=rF,this.tensorsToDetectionConfig=tF,this.anchors=UP(QP)):(this.imageToTensorConfig=nF,this.tensorsToDetectionConfig=eF,this.anchors=UP(ZP));var r=Sh(this.anchors.map((function(e){return e.width}))),i=Sh(this.anchors.map((function(e){return e.height}))),a=Sh(this.anchors.map((function(e){return e.xCenter}))),o=Sh(this.anchors.map((function(e){return e.yCenter})));this.anchorTensor={x:a,y:o,w:r,h:i}}return e.prototype.dispose=function(){this.detectorModel.dispose(),bs([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},e.prototype.reset=function(){},e.prototype.detectFaces=function(e,t){return t===void 0&&(t=!1),NP(this,void 0,void 0,(function(){var n,r,i,a,o,s,c,l,u,d,f;return PP(this,(function(p){switch(p.label){case 0:return e==null?(this.reset(),[2,[]]):(n=ys((function(){var n=Lo(BP(e),`float32`);return t&&(n=ph(cv.flipLeftRight(gd(n,0)),[0])),n})),r=HP(n,this.imageToTensorConfig),i=r.imageTensor,a=r.transformationMatrix,o=this.detectorModel.execute(i,`Identity:0`),s=(function(e){return ys((function(){var t=(function(e){return ys((function(){return[K(e,[0,0,0],[1,-1,1]),K(e,[0,0,1],[1,-1,-1])]}))})(e),n=t[0],r=t[1];return{boxes:ph(r),logits:ph(n)}}))})(o),c=s.boxes,[4,qP([l=s.logits,c],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(u=p.sent()).length===0?(bs([n,i,o,l,c]),[2,u]):[4,KP(u,this.maxFaces,.3)];case 2:return d=p.sent(),f=(function(e,t){e===void 0&&(e=[]);var n,r=(n=t,[].concat.apply([],n));return e.forEach((function(e){var t=e.locationData;t.relativeKeypoints.forEach((function(e){var t=GP(r,[e.x,e.y]),n=t[0],i=t[1];e.x=n,e.y=i}));var n=t.relativeBoundingBox,i=Number.MAX_VALUE,a=Number.MAX_VALUE,o=Number.MIN_VALUE,s=Number.MIN_VALUE;[[n.xMin,n.yMin],[n.xMin+n.width,n.yMin],[n.xMin+n.width,n.yMin+n.height],[n.xMin,n.yMin+n.height]].forEach((function(e){var t=GP(r,e),n=t[0],c=t[1];i=Math.min(i,n),o=Math.max(o,n),a=Math.min(a,c),s=Math.max(s,c)})),t.relativeBoundingBox={xMin:i,xMax:o,yMin:a,yMax:s,width:o-i,height:s-a}})),e})(d,a),bs([n,i,o,l,c]),[2,f]}}))}))},e.prototype.estimateFaces=function(e,t){return NP(this,void 0,void 0,(function(){var n,r;return PP(this,(function(i){return n=zP(e),r=!!t&&t.flipHorizontal,[2,this.detectFaces(e,r).then((function(e){return e.map((function(e){for(var t=e.locationData.relativeKeypoints.map((function(e,t){return MP(MP({},e),{x:e.x*n.width,y:e.y*n.height,name:FP[t]})})),r=e.locationData.relativeBoundingBox,i=0,a=[`width`,`xMax`,`xMin`];i<a.length;i++)r[a[i]]*=n.width;for(var o=0,s=[`height`,`yMax`,`yMin`];o<s.length;o++)r[s[o]]*=n.height;return{keypoints:t,box:r}}))}))]}))}))},e})();function aF(e){return NP(this,void 0,void 0,(function(){var t,n,r;return PP(this,(function(i){switch(i.label){case 0:return t=(function(e){if(e==null)return MP({},$P);var t=MP({},e);return t.modelType??=$P.modelType,t.maxFaces??=$P.maxFaces,t.detectorModelUrl??(t.modelType===`full`?t.detectorModelUrl=`https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1`:t.detectorModelUrl=`https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1`),t})(e),n=typeof t.detectorModelUrl==`string`&&t.detectorModelUrl.indexOf(`https://tfhub.dev`)>-1,[4,_P(t.detectorModelUrl,{fromTFHub:n})];case 1:return r=i.sent(),[2,new iF(t.modelType,r,t.maxFaces)]}}))}))}function oF(e,t){return NP(this,void 0,void 0,(function(){var n,r;return PP(this,(function(i){if(e===XP.MediaPipeFaceDetector){if(r=void 0,(n=t)!=null){if(n.runtime===`tfjs`)return[2,aF(n)];if(n.runtime===`mediapipe`)return[2,RP(n)];r=n.runtime}throw Error(`Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got `+r)}throw Error(e+` is not a supported model name.`)}))}))}function sF(e){return e.width*e.height}function cF(e){var t=e.xCenter-e.width/2,n=t+e.width,r=e.yCenter-e.height/2;return{xMin:t,xMax:n,yMin:r,yMax:r+e.height,width:e.width,height:e.height}}function lF(e,t){var n=cF(e),r=cF(t);if(!(function(e,t){return!(e.xMax<t.xMin||t.xMax<e.xMin||e.yMax<t.yMin||t.yMax<e.yMin)})(n,r))return 0;var i=sF((function(e,t){var n=Math.max(e.xMin,t.xMin),r=Math.min(e.xMax,t.xMax),i=Math.max(e.yMin,t.yMin),a=Math.min(e.yMax,t.yMax);return{xMin:n,xMax:r,yMin:i,yMax:a,width:Math.max(r-n,0),height:Math.max(a-i,0)}})(n,r)),a=sF(n)+sF(r)-i;return a>0?i/a:0}function uF(e,t,n,r){var i=e.width,a=e.height,o=1,s=Math.cos(e.rotation),c=Math.sin(e.rotation),l=e.xCenter,u=e.yCenter,d=1/t,f=1/n,p=Array(16);return p[0]=i*s*o*d,p[1]=-a*c*d,p[2]=0,p[3]=(-.5*i*s*o+.5*a*c+l)*d,p[4]=i*c*o*f,p[5]=a*s*f,p[6]=0,p[7]=(-.5*a*s-.5*i*c*o+u)*f,p[8]=0,p[9]=0,p[10]=i*d,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,(function(e){if(e.length!==16)throw Error(`Array length must be 16 but got `+e.length);return[[e[0],e[1],e[2],e[3]],[e[4],e[5],e[6],e[7]],[e[8],e[9],e[10],e[11]],[e[12],e[13],e[14],e[15]]]})(p)}function dF(e){return e instanceof Wi?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function fF(e){return e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}function pF(e){return e instanceof Wi?e:Ls(e)}function mF(e,t){E(e.width!==0,(function(){return t+` width cannot be 0.`})),E(e.height!==0,(function(){return t+` height cannot be 0.`}))}function hF(e,t){var n=(function(e,t,n,r){var i=t-e,a=(r-n)/i;return{scale:a,offset:n-e*a}})(0,255,t[0],t[1]);return ys((function(){return H(W(e,n.scale),n.offset)}))}function gF(e,t,n){var r=t.outputTensorSize,i=t.keepAspectRatio,a=t.outputTensorFloatRange,o=dF(e),s=(function(e,t){return t?{xCenter:t.xCenter*e.width,yCenter:t.yCenter*e.height,width:t.width*e.width,height:t.height*e.height,rotation:t.rotation}:{xCenter:.5*e.width,yCenter:.5*e.height,width:e.width,height:e.height,rotation:0}})(o,n),c=(function(e,t,n){if(n===void 0&&(n=!1),!n)return{top:0,left:0,right:0,bottom:0};var r=t.height,i=t.width;mF(t,`targetSize`),mF(e,`roi`);var a,o,s=r/i,c=e.height/e.width,l=0,u=0;return s>c?(a=e.width,o=e.width*s,u=(1-c/s)/2):(a=e.height/s,o=e.height,l=(1-s/c)/2),e.width=a,e.height=o,{top:u,left:l,right:l,bottom:u}})(s,r,i),l=uF(s,o.width,o.height);return{imageTensor:ys((function(){var t=pF(e),n=Ch((function(e,t,n){return mF(n,`inputResolution`),[1/n.width*e[0][0]*t.width,1/n.height*e[0][1]*t.width,e[0][3]*t.width,1/n.width*e[1][0]*t.height,1/n.height*e[1][1]*t.height,e[1][3]*t.height,0,0]})(l,o,r),[1,8]),i=cv.transform(gd(Lo(t,`float32`)),n,`bilinear`,`nearest`,0,[r.height,r.width]);return a==null?i:hF(i,a)})),padding:c,transformationMatrix:l}}function _F(e){return{xCenter:e.xMin+e.width/2,yCenter:e.yMin+e.height/2,width:e.width,height:e.height}}function vF(e){var t=e.relativeKeypoints;if(t.length<=1)throw Error(`2 or more keypoints required to calculate a rect.`);var n=Number.MAX_VALUE,r=Number.MAX_VALUE,i=Number.MIN_VALUE,a=Number.MIN_VALUE;return t.forEach((function(e){n=Math.min(n,e.x),i=Math.max(i,e.x),r=Math.min(r,e.y),a=Math.max(a,e.y)})),{xCenter:(n+i)/2,yCenter:(r+a)/2,width:i-n,height:a-r}}function yF(e,t,n,r,i){var a=n===`rect`?(function(e,t,n){var r,i=e.locationData;return r=_F(i.boundingBox),r})(e):(function(e,t){var n=e.locationData;return t===`boundingbox`?_F(n.relativeBoundingBox):vF(n)})(e,t);return i&&(a.rotation=(function(e,t,n){var r,i=e.locationData,a=n.rotationVectorStartKeypointIndex,o=n.rotationVectorEndKeypointIndex;r=n.rotationVectorTargetAngle?n.rotationVectorTargetAngle:Math.PI*n.rotationVectorTargetAngleDegree/180;var s=i.relativeKeypoints[a].x*t.width,c=i.relativeKeypoints[a].y*t.height,l=i.relativeKeypoints[o].x*t.width,u=i.relativeKeypoints[o].y*t.height;return fF(r-Math.atan2(-(u-c),l-s))})(e,r,i)),a}function bF(e,t,n){for(var r=0;r<t.length;++r){var i=t[r],a=n[e[r]];a.x=i.x,a.y=i.y}}function xF(e,t,n,r){if(typeof t==`string`){if(t===`copy`)for(var i=0;i<n.length;++i)r[e[i]].z=n[i].z}else{var a=(function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[t[r]].z;return n/t.length})(r,t);for(i=0;i<e.length;++i)r[e[i]].z=a}}function SF(e,t){for(var n=(function(e){var t=[].concat.apply([],e.map((function(e){return e.indexesMapping})));if(t.length===0)throw Error(`There should be at least one landmark in indexes mapping`);var n=t[0],r=t[0],i=new Set(t);i.forEach((function(e){n=Math.min(n,e),r=Math.max(r,e)}));var a=i.size;if(n!==0)throw Error(`Indexes are expected to start with 0 instead of `+n);if(r+1!==a)throw Error(`Indexes should have no gaps but `+(r-a+1)+` indexes are missing`);return a})(t),r=Array(n).fill(null).map(Object),i=0;i<e.length;++i){var a=e[i],o=t[i];if(a.length!==o.indexesMapping.length)throw Error(`There are `+a.length+` refinement landmarks while mapping has `+o.indexesMapping.length);bF(o.indexesMapping,a,r),xF(o.indexesMapping,o.zRefinement,a,r)}return r}function CF(e,t){return e.map((function(e){var n=yP(yP({},e),{x:e.x*t.width,y:e.y*t.height});return e.z!=null&&(n.z=e.z*t.width),n}))}function wF(e,t){return e===`none`?t:(function(e){return 1/(1+Math.exp(-e))})(t)}function TF(e,t,n,r){return bP(this,void 0,void 0,(function(){var i,a,o,s,c,l,u,d;return xP(this,(function(f){switch(f.label){case 0:return n=n||t.flipHorizontally||!1,r=r||t.flipVertically||!1,i=e.size,a=i/t.numLandmarks,[4,e.data()];case 1:for(o=f.sent(),s=[],c=0;c<t.numLandmarks;++c)l=c*a,(d={x:0,y:0}).x=n?t.inputImageWidth-o[l]:o[l],a>1&&(d.y=r?t.inputImageHeight-o[l+1]:o[l+1]),a>2&&(d.z=o[l+2]),a>3&&(d.score=wF(t.visibilityActivation,o[l+3])),s.push(d);for(u=0;u<s.length;++u)(d=s[u]).x=d.x/t.inputImageWidth,d.y/=t.inputImageHeight,d.z=d.z/t.inputImageWidth/(t.normalizeZ||1);return[2,s]}}))}))}function EF(e,t,n){var r=e.width,i=e.height,a=e.rotation;if(n.rotation==null&&n.rotationDegree==null||(a=(function(e,t){return t.rotation==null?t.rotationDegree!=null&&(e+=Math.PI*t.rotationDegree/180):e+=t.rotation,fF(e)})(a,n)),a===0)e.xCenter+=r*n.shiftX,e.yCenter+=i*n.shiftY;else{var o=(t.width*r*n.shiftX*Math.cos(a)-t.height*i*n.shiftY*Math.sin(a))/t.width,s=(t.width*r*n.shiftX*Math.sin(a)+t.height*i*n.shiftY*Math.cos(a))/t.height;e.xCenter+=o,e.yCenter+=s}var c=Math.max(r*t.width,i*t.height);return r=c/t.width,i=c/t.height,e.width=r*n.scaleX,e.height=i*n.scaleY,e}(XP||={}).MediaPipeFaceDetector=`MediaPipeFaceDetector`;var DF={runtime:`tfjs`,maxFaces:1,refineLandmarks:!1,landmarkModelUrl:`https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1`},OF={flipHorizontal:!1,staticImageMode:!1},kF={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5},AF={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1]},jF={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:`none`,flipHorizontally:!1,flipVertically:!1},MF={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:`none`,flipHorizontally:!1,flipVertically:!1},NF={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:`none`,flipHorizontally:!1,flipVertically:!1},PF={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:`none`,flipHorizontally:!1,flipVertically:!1},FF={indexesMapping:Array.from(Array(468).keys()),zRefinement:`copy`},IF={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:`none`},LF={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:`none`},RF={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:`none`},zF={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},BF={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},VF,HF=(function(){function e(e,t,n,r){this.detector=e,this.landmarkModel=t,this.maxFaces=n,this.withAttention=r,this.prevFaceRectsFromLandmarks=null}return e.prototype.estimateFaces=function(e,t){return bP(this,void 0,void 0,(function(){var n,r,i,a,o,s,c,l,u,d,f,p,m,h=this;return xP(this,(function(g){switch(g.label){case 0:return n=(function(e){if(e==null)return yP({},OF);var t=yP({},e);return t.flipHorizontal??=OF.flipHorizontal,t.staticImageMode??=OF.staticImageMode,t})(t),e==null?(this.reset(),[2,[]]):(r=dF(e),i=ys((function(){var t=Lo(pF(e),`float32`);return n.flipHorizontal&&(t=ph(cv.flipLeftRight(gd(t,0)),[0])),t})),a=this.prevFaceRectsFromLandmarks,n.staticImageMode||a==null||a.length<this.maxFaces?[4,this.detector.detectFaces(i,!1)]:[3,2]);case 1:return(s=g.sent()).length===0?(this.reset(),i.dispose(),[2,[]]):(o=s.map((function(e){return h.faceDetectionFrontDetectionToRoi(e,r)})),[3,3]);case 2:o=[],g.label=3;case 3:return _=.5,v=[],[o,a||[]].forEach((function(e){return e.forEach((function(e){(v=v.filter((function(t){return lF(e,t)<=_}))).push(e)}))})),c=v,[4,Promise.all(c.map((function(e){return h.faceLandmark(e,i)})))];case 4:for(l=g.sent(),u=[],this.prevFaceRectsFromLandmarks=[],d=0;d<l.length;++d)(f=l[d])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(f,r)),(p=CF(f,r))!=null&&p.forEach((function(e,t){var n=TP.get(t);n!=null&&(e.name=n)})),m=EP(p),u.push({keypoints:p,box:m.locationData.relativeBoundingBox}));return i.dispose(),[2,u]}var _,v}))}))},e.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},e.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},e.prototype.faceDetectionFrontDetectionToRoi=function(e,t){return EF(yF(e,`boundingbox`,`normRect`,t,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),t,kF)},e.prototype.faceLandmark=function(e,t){return bP(this,void 0,void 0,(function(){var n,r,i,a,o,s,c;return xP(this,(function(l){switch(l.label){case 0:return n=gF(t,AF,e).imageTensor,r=[`output_faceflag`].concat(this.withAttention?[`output_mesh_identity`,`output_lips`,`Identity_6:0`,`Identity_1:0`,`Identity_2:0`,`Identity_5:0`]:[`output_mesh`]),i=this.landmarkModel.execute(n,r),a=i[0],o=i.slice(1),[4,a.data()];case 1:return l.sent()[0]<.5?(bs(i),bs(n),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(o)]:[3,3];case 2:return s=l.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(o)];case 4:s=l.sent(),l.label=5;case 5:return c=(function(e,t,n){n===void 0&&(n={ignoreRotation:!1});for(var r=[],i=0,a=e;i<a.length;i++){var o=a[i],s=o.x-.5,c=o.y-.5,l=n.ignoreRotation?0:t.rotation,u=Math.cos(l)*s-Math.sin(l)*c,d=Math.sin(l)*s+Math.cos(l)*c;u=u*t.width+t.xCenter,d=d*t.height+t.yCenter;var f=o.z*t.width,p=yP({},o);p.x=u,p.y=d,p.z=f,r.push(p)}return r})(s,e),bs(i),bs(n),[2,c]}}))}))},e.prototype.tensorsToFaceLandmarks=function(e){return bP(this,void 0,void 0,(function(){return xP(this,(function(t){return[2,TF(e[0],jF)]}))}))},e.prototype.tensorsToFaceLandmarksWithAttention=function(e){return bP(this,void 0,void 0,(function(){var t,n,r,i,a,o;return xP(this,(function(s){switch(s.label){case 0:return[4,TF(e[0],jF)];case 1:return t=s.sent(),[4,TF(e[1],MF)];case 2:return n=s.sent(),[4,TF(e[3],NF)];case 3:return r=s.sent(),[4,TF(e[5],NF)];case 4:return i=s.sent(),[4,TF(e[4],PF)];case 5:return a=s.sent(),[4,TF(e[2],PF)];case 6:return o=s.sent(),[2,SF([t,n,r,i,a,o],[FF,IF,LF,RF,zF,BF])]}}))}))},e.prototype.faceLandmarksToRoi=function(e,t){return EF(yF(EP(e),`boundingbox`,`normRect`,t,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),t,kF)},e})();function UF(e){return bP(this,void 0,void 0,(function(){var t,n,r,i;return xP(this,(function(a){switch(a.label){case 0:return t=(function(e){if(e==null)return yP({},DF);var t=yP({},e);return t.runtime=`tfjs`,t.maxFaces??=DF.maxFaces,t.refineLandmarks??=DF.refineLandmarks,t.landmarkModelUrl??=t.refineLandmarks?`https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1`:`https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1`,t})(e),n=typeof t.landmarkModelUrl==`string`&&t.landmarkModelUrl.indexOf(`https://tfhub.dev`)>-1,[4,_P(t.landmarkModelUrl,{fromTFHub:n})];case 1:return r=a.sent(),[4,oF(XP.MediaPipeFaceDetector,{modelType:`short`,maxFaces:t.maxFaces,detectorModelUrl:t.detectorModelUrl,runtime:t.runtime})];case 2:return i=a.sent(),[2,new HF(i,r,t.maxFaces,t.refineLandmarks)]}}))}))}function WF(e,t){return bP(this,void 0,void 0,(function(){var n,r;return xP(this,(function(i){if(e===VF.MediaPipeFaceMesh){if(r=void 0,(n=t)!=null){if(n.runtime===`tfjs`)return[2,UF(n)];if(n.runtime===`mediapipe`)return[2,kP(n)];r=n.runtime}throw Error(`Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got `+r)}throw Error(e+` is not a supported model name.`)}))}))}(function(e){e.MediaPipeFaceMesh=`MediaPipeFaceMesh`})(VF||={});var GF=class{constructor(){d(this,`detector`),d(this,`modelLocation`,i.CDN)}async loadModels(e){let t=VF.MediaPipeFaceMesh,n=e||this.modelLocation,r=await WF(t,{runtime:`mediapipe`,solutionPath:(()=>{switch(n){case i.CDN:return`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh`;case i.SelfHosted:let{protocol:e,host:t}=location;return`${e}//${t}/models/mediapipe/`}})(),refineLandmarks:!0});this.detector=r}async _detect(e){if(this.detector===void 0)return;let t=await this.detector.estimateFaces(e,{flipHorizontal:!1});return t.length===0?void 0:t[0].keypoints}async detect(e){let t=r(e);if(t.width===0||t.height===0)return{faceBox:void 0,landmarks:[],videoFrame:t};let i=await this._detect(t);if(i===void 0)return{faceBox:void 0,landmarks:[],videoFrame:t};let{width:a,height:o}=t,s=i.map(e=>({x:e.x/a,y:e.y/o,z:e.z||0}));return{faceBox:n(s),landmarks:s,videoFrame:t}}};export{GF as TFMediaPipeFaceDetector};