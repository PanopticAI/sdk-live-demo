var Yg=Object.defineProperty;var Jg=(e,t,r)=>t in e?Yg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var mo=(e,t,r)=>Jg(e,typeof t!="symbol"?t+"":t,r);/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Va=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,t0=Object.getOwnPropertyNames,r0=Object.prototype.hasOwnProperty,i0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},Zt=(e,t)=>{for(var r in t)Va(e,r,{get:t[r],enumerable:!0})},a0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of t0(t))!r0.call(e,a)&&a!==r&&Va(e,a,{get:()=>t[a],enumerable:!(i=e0(t,a))||i.enumerable});return e},_r=e=>a0(Va({},"__esModule",{value:!0}),e),tr,gt,Gt,go,ip,ap=P(()=>{"use strict";tr=new Map,gt=[],Gt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=tr.get(e);if(i===void 0)tr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=gt.indexOf(e);a!==-1&&gt.splice(a,1);for(let n=0;n<gt.length;n++)if(tr.get(gt[n]).priority<=r){gt.splice(n,0,e);return}gt.push(e)}return}throw new TypeError("not a valid backend")},go=async e=>{let t=tr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ip=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?gt:r,a,n=[],s=new Set;for(let l of i){let p=await go(l);typeof p=="string"?n.push({name:l,err:p}):(a||(a=p),a===p&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:p}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${p}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,p)=>p==="executionProviders"?u:Reflect.get(l,p)})]}}),n0=P(()=>{"use strict";ap()}),np,s0=P(()=>{"use strict";np="1.30.0"}),Ti,Ee,sp=P(()=>{"use strict";s0(),Ti="warning",Ee={wasm:{},webgl:{},webgpu:{},versions:{common:np},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ti=e}},get logLevel(){return Ti}},Object.defineProperty(Ee,"logLevel",{enumerable:!0})}),_e,o0=P(()=>{"use strict";sp(),_e=Ee}),op,up,u0=P(()=>{"use strict";op=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let c=n*a,h=0,g=c,_=c*2,y=-1;s==="RGBA"?(h=0,g=c,_=c*2,y=c*3):s==="RGB"?(h=0,g=c,_=c*2):s==="RBG"&&(h=0,_=c,g=c*2);for(let b=0;b<n;b++)for(let S=0;S<a;S++){let x=(e.data[h++]-p[0])*l[0],w=(e.data[g++]-p[1])*l[1],T=(e.data[_++]-p[2])*l[2],I=y===-1?255:(e.data[y++]-p[3])*l[3];i.fillStyle="rgba("+x+","+w+","+T+","+I+")",i.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},up=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,p,c;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,y=1,b=2,S=3,x=0,w=h,T=h*2,I=-1;u==="RGBA"?(x=0,w=h,T=h*2,I=h*3):u==="RGB"?(x=0,w=h,T=h*2):u==="RBG"&&(x=0,T=h,w=h*2),i=r.createImageData(a,n);for(let E=0;E<n*a;_+=g,y+=g,b+=g,S+=g,E++)i.data[_]=(e.data[x++]-c[0])*p[0],i.data[y]=(e.data[w++]-c[1])*p[1],i.data[b]=(e.data[T++]-c[2])*p[2],i.data[S]=I===-1?255:(e.data[I++]-c[3])*p[3]}else throw new Error("Can not access image data");return i}}),Br,lp,dp,pp,cp,hp,l0=P(()=>{"use strict";Fa(),Br=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,c=l==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),h=4,g=0,_=1,y=2,b=3,S=0,x=p,w=p*2,T=-1;u==="RGB"&&(h=3,g=0,_=1,y=2,b=-1),l==="RGBA"?T=p*3:l==="RBG"?(S=0,w=p,x=p*2):l==="BGR"&&(w=0,x=p,S=p*2);for(let I=0;I<p;I++,g+=h,y+=h,_+=h,b+=h)c[S++]=(e[g]+s[0])/n[0],c[x++]=(e[_]+s[1])/n[1],c[w++]=(e[y]+s[2])/n[2],T!==-1&&b!==-1&&(c[T++]=(e[b]+s[3])/n[3]);return l==="RGBA"?new Pe("float32",c,[1,4,r,i]):new Pe("float32",c,[1,3,r,i])},lp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=p(c);if(h!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=_}else u.tensorFormat="RGBA",u.height=g,u.width=_;h.drawImage(e,0,0),s=h.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let g=l();g.width=h,g.height=c;let _=p(g);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=p(c);if(h!=null){let g=e.height,_=e.width;return h.drawImage(e,0,0,_,g),s=h.getImageData(0,0,_,g).data,u.height=g,u.width=_,Br(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,h)=>{let g=l(),_=p(g);if(!e||!_)return h();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,_.drawImage(y,0,0,g.width,g.height);let b=_.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(Br(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Br(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},dp=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Pe({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},pp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Pe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},cp=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Pe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},hp=(e,t,r)=>new Pe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ot,hr,Ii,fp,d0=P(()=>{"use strict";Ot=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),hr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ii=!1,fp=()=>{if(!Ii){Ii=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Ot.set("int64",BigInt64Array),hr.set(BigInt64Array,"int64")),t&&(Ot.set("uint64",BigUint64Array),hr.set(BigUint64Array,"uint64")),i?(Ot.set("float16",r),hr.set(r,"float16")):Ot.set("float16",Uint16Array)}}}),mp,gp,p0=P(()=>{"use strict";Fa(),mp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},gp=(e,t)=>{switch(e.location){case"cpu":return new Pe(e.type,e.data,t);case"cpu-pinned":return new Pe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Pe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Pe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Pe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Pe,Fa=P(()=>{"use strict";u0(),l0(),d0(),p0(),Pe=class{constructor(e,t,r){fp();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=Ot.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Ot.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=hr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=mp(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return lp(e,t)}static fromTexture(e,t){return dp(e,t)}static fromGpuBuffer(e,t){return pp(e,t)}static fromMLTensor(e,t){return cp(e,t)}static fromPinnedBuffer(e,t,r){return hp(e,t,r)}toDataURL(e){return op(this,e)}toImageData(e){return up(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return gp(this,e)}}}),Qe,yp=P(()=>{"use strict";Fa(),Qe=Pe}),Zr,Ei,it,Ye,Mt,Dt,_p=P(()=>{"use strict";sp(),Zr=(e,t)=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ei=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Zr("CPU",s);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},it=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||Ei("BEGIN",e)},Ye=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||Ei("END",e)},Mt=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||console.time(`ORT::${e}`)},Dt=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||console.timeEnd(`ORT::${e}`)}}),bp,c0=P(()=>{"use strict";ap(),yp(),_p(),bp=class wp{constructor(t){this.handler=t}async run(t,r,i){it(),Mt("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof Qe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Qe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Qe)&&(p=!0,s=!1,a[h]=g)}if(p){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)a[p]=null;let u=await this.handler.run(t,a,n),l={};for(let p in u)if(Object.hasOwnProperty.call(u,p)){let c=u[p];c instanceof Qe?l[p]=c:l[p]=new Qe(c.type,c.data,c.dims)}return Dt("InferenceSession.run"),Ye(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){it(),Mt("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await ip(s),p=await u.createInferenceSessionHandler(n,l);return Dt("InferenceSession.create"),Ye(),new wp(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ga,h0=P(()=>{"use strict";c0(),Ga=bp}),f0=P(()=>{"use strict"}),m0=P(()=>{"use strict"}),g0=P(()=>{"use strict"}),y0=P(()=>{"use strict"}),_0={};Zt(_0,{InferenceSession:()=>Ga,TRACE:()=>Zr,TRACE_EVENT_BEGIN:()=>Mt,TRACE_EVENT_END:()=>Dt,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Ye,Tensor:()=>Qe,env:()=>_e,registerBackend:()=>Gt});var Ve=P(()=>{"use strict";n0(),o0(),h0(),yp(),f0(),m0(),_p(),g0(),y0()}),Ha=P(()=>{"use strict"}),$p={};Zt($p,{default:()=>vp});var Ci,zi,vp,b0=P(()=>{"use strict";var e;Af(),qt(),ja(),Ci="ort-wasm-proxy-worker",zi=((e=globalThis.self)==null?void 0:e.name)===Ci,zi&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":Ka(i.wasm).then(()=>{cn(i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:n}=i;hn(n,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=i,n=ri(a);postMessage({type:r,out:n});break}case"create":{let{model:a,options:n}=i;fn(a,n).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":mn(i),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:n,inputs:s,outputIndices:u,options:l}=i;gn(a,n,s,u,new Array(u.length).fill(null),l).then(p=>{p.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},_n([...s,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":yn(i),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),vp=zi?null:t=>new Worker(t??Ne,{type:"module",name:Ci})}),xp={};Zt(xp,{default:()=>Sp});async function yo(e={}){var ho,fo;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&((ho=self.name)==null?void 0:ho.startsWith("em-pthread"));t.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(t.ad||(t.ad=new Map)).set(o,d)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let n=o=>async(...d)=>{var m;try{if(t.$c)throw Error("Session already started");let f=t.$c={Nd:d[0],errors:[]},$=await o(...d);if(t.$c!==f)throw Error("Session mismatch");(m=t.hd)==null||m.flush();let k=f.errors;if(0<k.length){let z=await Promise.all(k);if(z=z.filter(R=>R),0<z.length)throw Error(z.join(`
`))}return $}finally{t.$c=null}};t.jsepInit=(o,d)=>{if(o==="webgpu"){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=d;let m=t.hd;t.jsepRegisterBuffer=(f,$,k,z)=>m.registerBuffer(f,$,k,z),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,$,k)=>m.createDownloader(f,$,k),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Ld=(f,$)=>{m.upload(f,$)}}else if(o==="webnn"){let m=d[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=d.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,$)=>m.createMLTensorDownloader(f,$),t.webnnRegisterMLTensor=(f,$,k,z)=>m.registerMLTensor(f,$,k,z),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=d=>(...m)=>{let f=et;return m=d(...m),et!=f?new Promise(($,k)=>{hi={resolve:$,reject:k}}):m};(()=>{for(let d of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[d]=o(t[d])})(),n!==void 0&&(t._OrtRun=n(t._OrtRun),t._OrtRunWithBinding=n(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var u,l,p=(o,d)=>{throw d},c=import.meta.url,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),u=async o=>{if(A(o))return new Promise((m,f)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?m($.response):f($.status)},$.onerror=f,$.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)}}var g,_,y,b,S,x,w=console.log.bind(console),T=console.error.bind(console),I=w,E=T,C=!1,A=o=>o.startsWith("file://");function v(){ct.buffer!=N.buffer&&V()}if(a){let o=function(d){try{var m=d.data,f=m.Vc;if(f==="load"){let $=[];self.onmessage=k=>$.push(k),x=()=>{postMessage({Vc:"loaded"});for(let k of $)o(k);self.onmessage=o};for(let k of m.Ad)t[k]&&!t[k].proxy||(t[k]=(...z)=>{postMessage({Vc:"callHandler",yd:k,args:z})},k=="print"&&(I=t[k]),k=="printErr"&&(E=t[k]));ct=m.Rd,V(),_=m.Sd,qe(),Or()}else if(f==="run"){(function($){var k=(v(),Z)[$+52>>>2>>>0];$=(v(),Z)[$+56>>>2>>>0],$s(k,k-$),se(k)})(m.Uc),_i(m.Uc,0,0,1,0,0),$n(),di(m.Uc),D||(ms(),D=!0);try{Vf(m.Pd,m.ed)}catch($){if($!="unwind")throw $}}else m.target!=="setimmediate"&&(f==="checkMailbox"?D&&kr():f&&(E(`worker: received unknown command ${f}`),E(m)))}catch($){throw gs(),$}};var D=!1;self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}var N,H,G,j,B,Z,X,ee,fe,L,le,U=!1;function V(){var o=ct.buffer;t.HEAP8=N=new Int8Array(o),G=new Int16Array(o),t.HEAPU8=H=new Uint8Array(o),j=new Uint16Array(o),t.HEAP32=B=new Int32Array(o),t.HEAPU32=Z=new Uint32Array(o),X=new Float32Array(o),ee=new Float64Array(o),fe=new BigInt64Array(o),L=new BigUint64Array(o)}function Q(){U=!0,a?x():nt.ub()}function q(o){throw E(o="Aborted("+o+")"),C=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function me(){return{a:{ma:cg,hb:pg,g:Ff,J:Gf,f:Hf,o:jf,i:Kf,$:Zf,b:Xf,S:Qf,Ha:In,n:Yf,aa:An,Ya:On,Da:Bn,Fa:Rn,Za:Mn,Wa:Dn,Pa:Nn,Va:Pn,ka:Un,Ea:qn,Ba:Ln,Xa:Wn,Ca:Vn,cb:Jf,fa:em,wa:tm,ua:im,ea:nm,N:sm,H:om,va:um,_:mm,xa:gm,Sa:ym,za:bm,Ia:wm,sa:$m,ga:vm,Ra:di,$a:xm,Q:Im,r:Om,c:ui,ib:Bm,y:Rm,M:Mm,D:Dm,l:Nm,s:Qn,jb:Pm,I:Um,R:qm,j:Lm,u:Wm,q:Vm,k:Fm,Ma:Gm,Na:Hm,Oa:jm,Ka:ts,La:rs,ta:is,eb:Zm,bb:Qm,v:Ym,ba:Jm,ha:eg,ab:Xm,V:tg,_a:rg,Aa:ig,F:Km,U:ag,la:zr,ya:sg,gb:ng,fb:og,Ta:os,Ua:us,Ga:Xt,T:ls,Ja:ds,ja:ps,Qa:cs,ia:hs,lb:Zg,na:Fg,mb:Kg,oa:Vg,G:Og,e:gg,t:fg,w:hg,B:Tg,nb:qg,Z:Ug,x:bg,pa:Lg,X:Gg,ca:Pg,ob:Ng,pb:Dg,O:Ig,qb:Rg,qa:Mg,rb:Bg,L:zg,Y:Wg,d:mg,A:_g,m:yg,kb:Xg,p:$g,z:vg,C:wg,E:xg,K:Eg,ra:Ag,P:Hg,da:Cg,W:jg,sb:kg,tb:Sg,h:lg,a:ct,db:De}}}async function qe(){function o(f,$){var k=nt=f.exports;f={};for(let[z,R]of Object.entries(k))typeof R=="function"?(k=Sm(R),f[z]=k):f[z]=R;return nt=f,nt=(function(){var z=nt,R=F=>ne=>F(ne)>>>0,W=F=>()=>F()>>>0;return(z=Object.assign({},z)).vb=R(z.vb),z.Zb=W(z.Zb),z.$b=R(z.$b),z.nc=R(z.nc),z.oc=W(z.oc),z.sc=R(z.sc),z})(),bn.push(nt.ac),fs=(f=nt).vb,ms=f.wb,t._OrtInit=f.xb,t._OrtGetLastError=f.yb,t._OrtCreateSessionOptions=f.zb,t._OrtAppendExecutionProvider=f.Ab,t._OrtAddFreeDimensionOverride=f.Bb,t._OrtAddSessionConfigEntry=f.Cb,t._OrtReleaseSessionOptions=f.Db,t._OrtCreateSession=f.Eb,t._OrtReleaseSession=f.Fb,t._OrtGetInputOutputCount=f.Gb,t._OrtGetInputOutputMetadata=f.Hb,t._OrtFree=f.Ib,t._OrtCreateTensor=f.Jb,t._OrtGetTensorData=f.Kb,t._OrtReleaseTensor=f.Lb,t._OrtCreateRunOptions=f.Mb,t._OrtAddRunConfigEntry=f.Nb,t._OrtReleaseRunOptions=f.Ob,t._OrtCreateBinding=f.Pb,t._OrtBindInput=f.Qb,t._OrtBindOutput=f.Rb,t._OrtClearBoundOutputs=f.Sb,t._OrtReleaseBinding=f.Tb,t._OrtRunWithBinding=f.Ub,t._OrtRun=f.Vb,t._OrtEndProfiling=f.Wb,t._JsepOutput=f.Xb,t._JsepGetNodeName=f.Yb,Ar=f.Zb,tt=t._free=f._b,Jt=t._malloc=f.$b,_i=f.cc,gs=f.dc,ys=f.ec,_s=f.fc,bi=f.gc,bs=f.hc,ws=f.ic,ue=f.jc,er=f.kc,$s=f.lc,se=f.mc,wi=f.nc,oe=f.oc,vs=f.pc,$i=f.qc,xs=f.rc,Ss=f.sc,ks=f.tc,vi=f.uc,Ts=f.vc,Is=f.wc,Es=f.xc,Cs=f.yc,zs=f.zc,As=f.Ac,Os=f.Bc,Bs=f.Cc,Rs=f.Dc,Ms=f.Ec,Ds=f.Fc,Ns=f.Gc,Ps=f.Hc,Us=f.Ic,qs=f.Jc,Ls=f.Kc,Ws=f.Lc,Vs=f.Mc,Fs=f.Nc,Gs=f.Oc,Hs=f.Pc,js=f.Qc,Ks=f.Sc,Zs=f.Tc,Xs=f.cd,Qs=f.dd,Ys=f.id,Js=f.nd,eo=f.od,to=f.pd,ro=f.qd,io=f.rd,ao=f.sd,no=f.td,so=f.ud,oo=f.zd,uo=f.Zd,lo=f._d,po=f.$d,co=f.ae,_=$,nt}var d,m=me();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,($,k)=>{f(o($,k))})}):a?o(new WebAssembly.Instance(_,me()),_):(le??(le=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/sdk-live-demo/edge-demo/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href),d=await(async function(f){var $=le;if(!g&&!A($))try{var k=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,f)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return(async function(z,R){try{var W=await(async function(F){if(!g)try{var ne=await u(F);return new Uint8Array(ne)}catch{}if(F==le&&g)F=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";F=l(F)}return F})(z);return await WebAssembly.instantiate(W,R)}catch(F){E(`failed to asynchronously prepare wasm: ${F}`),q(F)}})($,f)})(m),o(d.instance,d.module))}class Se{constructor(d){mo(this,"name","ExitStatus");this.message=`Program terminated with exit(${d})`,this.status=d}}var Ae=o=>{o.terminate(),o.onmessage=()=>{}},Oe=[],Me=0,Be=null,dt=o=>{pt.length==0&&(xn(),vn(pt[0]));var d=pt.pop();if(!d)return 6;Qt.push(d),St[o.Uc]=d,d.Uc=o.Uc;var m={Vc:"run",Pd:o.Od,ed:o.ed,Uc:o.Uc};return d.postMessage(m,o.md),0},we=0,re=(o,d,...m)=>{var f,$=16*m.length,k=oe(),z=wi($),R=z>>>3;for(f of m)typeof f=="bigint"?((v(),fe)[R++>>>0]=1n,(v(),fe)[R++>>>0]=f):((v(),fe)[R++>>>0]=0n,(v(),ee)[R++>>>0]=f);return o=ys(o,0,$,z,d),se(k),o};function De(o){if(a)return re(0,1,o);if(y=o,!(0<we)){for(var d of Qt)Ae(d);for(d of pt)Ae(d);pt=[],Qt=[],St={},C=!0}p(0,new Se(o))}function wr(o){if(a)return re(1,0,o);Xt(o)}var Xt=o=>{if(y=o,a)throw wr(o),"unwind";De(o)},pt=[],Qt=[],bn=[],St={},wn=o=>{var d=o.Uc;delete St[d],pt.push(o),Qt.splice(Qt.indexOf(o),1),o.Uc=0,_s(d)};function $n(){bn.forEach(o=>o())}var vn=o=>new Promise(d=>{o.onmessage=$=>{var k=$.data;if($=k.Vc,k.bd&&k.bd!=Ar()){var z=St[k.bd];z?z.postMessage(k,k.md):E(`Internal error! Worker sent a message "${$}" to target pthread ${k.bd}, but that thread no longer exists!`)}else $==="checkMailbox"?kr():$==="spawnThread"?dt(k):$==="cleanupThread"?Sr(()=>{wn(St[k.Qd])}):$==="loaded"?(o.loaded=!0,d(o)):k.target==="setimmediate"?o.postMessage(k):$==="uncaughtException"?o.onerror(k.error):$==="callHandler"?t[k.yd](...k.args):$&&E(`worker sent an unknown command ${$}`)},o.onerror=$=>{throw E(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);o.postMessage({Vc:"load",Ad:f,Rd:ct,Sd:_})});function xn(){var o=new Worker((()=>{let d=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new d("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});pt.push(o)}var ct,Vf=(o,d)=>{we=0,o=vi(o,d),0<we?y=o:bi(o)},$r=[],vr=0;function Ff(o){var d=new ai(o>>>=0);return(v(),N)[d.Wc+12>>>0]==0&&(Sn(d,!0),vr--),kn(d,!1),$r.push(d),Ss(o)}var Wt=0,Gf=()=>{ue(0,0);var o=$r.pop();vs(o.gd),Wt=0};function Sn(o,d){d=d?1:0,(v(),N)[o.Wc+12>>>0]=d}function kn(o,d){d=d?1:0,(v(),N)[o.Wc+13>>>0]=d}class ai{constructor(d){this.gd=d,this.Wc=d-24}}var ni=o=>{var d=Wt;if(!d)return er(0),0;var m=new ai(d);(v(),Z)[m.Wc+16>>>2>>>0]=d;var f=(v(),Z)[m.Wc+4>>>2>>>0];if(!f)return er(0),d;for(var $ of o){if($===0||$===f)break;if(xs($,f,m.Wc+16))return er($),d}return er(f),d};function Hf(){return ni([])}function jf(o){return ni([o>>>0])}function Kf(o,d,m,f){return ni([o>>>0,d>>>0,m>>>0,f>>>0])}var Zf=()=>{var o=$r.pop();o||q("no exception to throw");var d=o.gd;throw(v(),N)[o.Wc+13>>>0]==0&&($r.push(o),kn(o,!0),Sn(o,!1),vr++),$i(d),Wt=d};function Xf(o,d,m){var f=new ai(o>>>=0);throw d>>>=0,m>>>=0,(v(),Z)[f.Wc+16>>>2>>>0]=0,(v(),Z)[f.Wc+4>>>2>>>0]=d,(v(),Z)[f.Wc+8>>>2>>>0]=m,$i(o),vr++,Wt=o}var Qf=()=>vr;function Tn(o,d,m,f){return a?re(2,1,o,d,m,f):In(o,d,m,f)}function In(o,d,m,f){if(o>>>=0,d>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return a&&$.length===0?Tn(o,d,m,f):(o={Od:m,Uc:o,ed:f,md:$},a?(o.Vc="spawnThread",postMessage(o,$),0):dt(o))}function Yf(o){throw Wt||(Wt=o>>>0),Wt}var En=globalThis.TextDecoder&&new TextDecoder,Cn=(o,d,m,f)=>{if(m=d+m,f)return m;for(;o[d]&&!(d>=m);)++d;return d},zn=(o,d=0,m,f)=>{if(16<(m=Cn(o,d>>>=0,m,f))-d&&o.buffer&&En)return En.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,m):o.slice(d,m));for(f="";d<m;){var $=o[d++];if(128&$){var k=63&o[d++];if((224&$)==192)f+=String.fromCharCode((31&$)<<6|k);else{var z=63&o[d++];65536>($=(240&$)==224?(15&$)<<12|k<<6|z:(7&$)<<18|k<<12|z<<6|63&o[d++])?f+=String.fromCharCode($):($-=65536,f+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else f+=String.fromCharCode($)}return f},ke=(o,d,m)=>(o>>>=0)?zn((v(),H),o,d,m):"";function An(o,d,m){return a?re(3,1,o,d,m):0}function On(o,d){if(a)return re(4,1,o,d)}function Bn(o,d){if(a)return re(5,1,o,d)}function Rn(o,d,m){if(a)return re(6,1,o,d,m)}function Mn(o,d,m){return a?re(7,1,o,d,m):0}function Dn(o,d){if(a)return re(8,1,o,d)}function Nn(o,d,m){if(a)return re(9,1,o,d,m)}function Pn(o,d,m,f){if(a)return re(10,1,o,d,m,f)}function Un(o,d,m,f){if(a)return re(11,1,o,d,m,f)}function qn(o,d,m,f){if(a)return re(12,1,o,d,m,f)}function Ln(o){if(a)return re(13,1,o)}function Wn(o,d){if(a)return re(14,1,o,d)}function Vn(o,d,m){if(a)return re(15,1,o,d,m)}var Jf=()=>q(""),Je=o=>{o>>>=0;for(var d="";;){var m=(v(),H)[o++>>>0];if(!m)return d;d+=String.fromCharCode(m)}},si={},oi={},Vt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function at(o,d,m={}){return(function(f,$,k={}){var z=$.name;if(!f)throw new Vt(`type "${z}" must have a positive integer typeid pointer`);if(oi.hasOwnProperty(f)){if(k.Bd)return;throw new Vt(`Cannot register type '${z}' twice`)}oi[f]=$,si.hasOwnProperty(f)&&($=si[f],delete si[f],$.forEach(R=>R()))})(o,d,m)}var Fn=(o,d,m)=>{switch(d){case 1:return m?f=>(v(),N)[f>>>0]:f=>(v(),H)[f>>>0];case 2:return m?f=>(v(),G)[f>>>1>>>0]:f=>(v(),j)[f>>>1>>>0];case 4:return m?f=>(v(),B)[f>>>2>>>0]:f=>(v(),Z)[f>>>2>>>0];case 8:return m?f=>(v(),fe)[f>>>3>>>0]:f=>(v(),L)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function em(o,d,m,f,$){o>>>=0,m>>>=0,d=Je(d>>>0);let k=z=>z;if(f=f===0n){let z=8*m;k=R=>BigInt.asUintN(z,R),$=k($)}at(o,{name:d,Rc:k,Yc:(z,R)=>(typeof R=="number"&&(R=BigInt(R)),R),Xc:Fn(d,m,!f),Zc:null})}function tm(o,d,m,f){at(o>>>=0,{name:d=Je(d>>>0),Rc:function($){return!!$},Yc:function($,k){return k?m:f},Xc:function($){return this.Rc((v(),H)[$>>>0])},Zc:null})}var Gn=[],kt=[0,1,,1,null,1,!0,1,!1,1];function ui(o){9<(o>>>=0)&&--kt[o+1]===0&&(kt[o]=void 0,Gn.push(o))}var Le=o=>{if(!o)throw new Vt(`Cannot use deleted val. handle = ${o}`);return kt[o]},Fe=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=Gn.pop()||kt.length;return kt[d]=o,kt[d+1]=1,d}};function li(o){return this.Rc((v(),Z)[o>>>2>>>0])}var rm={name:"emscripten::val",Rc:o=>{var d=Le(o);return ui(o),d},Yc:(o,d)=>Fe(d),Xc:li,Zc:null};function im(o){return at(o>>>0,rm)}var am=(o,d)=>{switch(d){case 4:return function(m){return this.Rc((v(),X)[m>>>2>>>0])};case 8:return function(m){return this.Rc((v(),ee)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function nm(o,d,m){m>>>=0,at(o>>>=0,{name:d=Je(d>>>0),Rc:f=>f,Yc:(f,$)=>$,Xc:am(d,m),Zc:null})}function sm(o,d,m,f,$){o>>>=0,m>>>=0,d=Je(d>>>0);let k=R=>R;if(f===0){var z=32-8*m;k=R=>R<<z>>>z,$=k($)}at(o,{name:d,Rc:k,Yc:(R,W)=>W,Xc:Fn(d,m,f!==0),Zc:null})}function om(o,d,m){function f(k){var z=(v(),Z)[k>>>2>>>0];return k=(v(),Z)[k+4>>>2>>>0],new $((v(),N).buffer,k,z)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];at(o>>>=0,{name:m=Je(m>>>0),Rc:f,Xc:f},{Bd:!0})}var ht=(o,d,m)=>{var f=(v(),H);if(d>>>=0,0<m){var $=d;m=d+m-1;for(var k=0;k<o.length;++k){var z=o.codePointAt(k);if(127>=z){if(d>=m)break;f[d++>>>0]=z}else if(2047>=z){if(d+1>=m)break;f[d++>>>0]=192|z>>6,f[d++>>>0]=128|63&z}else if(65535>=z){if(d+2>=m)break;f[d++>>>0]=224|z>>12,f[d++>>>0]=128|z>>6&63,f[d++>>>0]=128|63&z}else{if(d+3>=m)break;f[d++>>>0]=240|z>>18,f[d++>>>0]=128|z>>12&63,f[d++>>>0]=128|z>>6&63,f[d++>>>0]=128|63&z,k++}}f[d>>>0]=0,o=d-$}else o=0;return o},xr=o=>{for(var d=0,m=0;m<o.length;++m){var f=o.charCodeAt(m);127>=f?d++:2047>=f?d+=2:55296<=f&&57343>=f?(d+=4,++m):d+=3}return d};function um(o,d){at(o>>>=0,{name:d=Je(d>>>0),Rc(m){var f=(v(),Z)[m>>>2>>>0];return f=ke(m+4,f,!0),tt(m),f},Yc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var $=typeof f=="string";if(!($||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Vt("Cannot pass non-string to std::string");var k=$?xr(f):f.length,z=Jt(4+k+1),R=z+4;return(v(),Z)[z>>>2>>>0]=k,$?ht(f,R,k+1):(v(),H).set(f,R>>>0),m!==null&&m.push(tt,z),z},Xc:li,Zc(m){tt(m)}})}var Hn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,lm=(o,d,m)=>{if(o>>>=1,16<(d=Cn((v(),j),o,d/2,m))-o&&Hn)return Hn.decode((v(),j).slice(o,d));for(m="";o<d;++o){var f=(v(),j)[o>>>0];m+=String.fromCharCode(f)}return m},dm=(o,d,m)=>{if(m??(m=2147483647),2>m)return 0;var f=d;m=(m-=2)<2*o.length?m/2:o.length;for(var $=0;$<m;++$){var k=o.charCodeAt($);(v(),G)[d>>>1>>>0]=k,d+=2}return(v(),G)[d>>>1>>>0]=0,d-f},pm=o=>2*o.length,cm=(o,d,m)=>{var f="";o>>>=2;for(var $=0;!($>=d/4);$++){var k=(v(),Z)[o+$>>>0];if(!k&&!m)break;f+=String.fromCodePoint(k)}return f},hm=(o,d,m)=>{if(d>>>=0,m??(m=2147483647),4>m)return 0;var f=d;m=f+m-4;for(var $=0;$<o.length;++$){var k=o.codePointAt($);if(65535<k&&$++,(v(),B)[d>>>2>>>0]=k,(d+=4)+4>m)break}return(v(),B)[d>>>2>>>0]=0,d-f},fm=o=>{for(var d=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,d+=4;return d};function mm(o,d,m){if(o>>>=0,d>>>=0,m=Je(m>>>=0),d===2)var f=lm,$=dm,k=pm;else f=cm,$=hm,k=fm;at(o,{name:m,Rc:z=>{var R=(v(),Z)[z>>>2>>>0];return R=f(z+4,R*d,!0),tt(z),R},Yc:(z,R)=>{if(typeof R!="string")throw new Vt(`Cannot pass non-string to C++ string type ${m}`);var W=k(R),F=Jt(4+W+d);return(v(),Z)[F>>>2>>>0]=W/d,$(R,F+4,W+d),z!==null&&z.push(tt,F),F},Xc:li,Zc(z){tt(z)}})}function gm(o,d){at(o>>>=0,{Cd:!0,name:d=Je(d>>>0),Rc:()=>{},Yc:()=>{}})}function ym(o){_i(o>>>0,!i,1,!r,131072,!1),$n()}var Sr=o=>{if(!C)try{if(o(),!(0<we))try{a?Ar()&&bi(y):Xt(y)}catch(d){d instanceof Se||d=="unwind"||p(0,d)}}catch(d){d instanceof Se||d=="unwind"||p(0,d)}},_m=!Atomics.waitAsync||((fo=globalThis.navigator)==null?void 0:fo.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function di(o){o>>>=0,_m||(Atomics.waitAsync((v(),B),o>>>2,o).value.then(kr),o+=128,Atomics.store((v(),B),o>>>2,1))}var kr=()=>Sr(()=>{var o=Ar();o&&(di(o),ws())});function bm(o,d){(o>>>=0)==d>>>0?setTimeout(kr):a?postMessage({bd:o,Vc:"checkMailbox"}):(o=St[o])&&o.postMessage({Vc:"checkMailbox"})}var pi=[];function wm(o,d,m,f,$){for(d>>>=0,$>>>=0,pi.length=0,m=$>>>3,f=$+f>>>3;m<f;){var k;k=(v(),fe)[m++>>>0]?(v(),fe)[m++>>>0]:(v(),ee)[m++>>>0],pi.push(k)}return(d?xi[d]:dg[o])(...pi)}var $m=()=>{we=0};function vm(o){o>>>=0,a?postMessage({Vc:"cleanupThread",Qd:o}):wn(St[o])}function xm(o){}var Tr=o=>{try{o()}catch(d){q(d)}};function Sm(o){var d=(...m)=>{Ir.push(o);try{return o(...m)}finally{C||(Ir.pop(),et&&ft===1&&Ir.length===0&&(ft=0,we+=1,Tr(lo),typeof Fibers<"u"&&Fibers.de()))}};return Zn.set(o,d),d}var ft=0,et=null,jn=0,Ir=[],ci=new Map,Kn=new Map,Zn=new Map,km=0,hi=null,Tm=[],Xn=o=>(function(d){if(!C){if(ft===0){var m=!1,f=!1;d(($=0)=>{if(!C&&(jn=$,m=!0,f)){ft=2,Tr(()=>po(et)),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.resume(),$=!1;try{var k=(function(){var W=(v(),B)[et+8>>>2>>>0];return W=Kn.get(W),W=Zn.get(W),--we,W()})()}catch(W){k=W,$=!0}var z=!1;if(!et){var R=hi;R&&(hi=null,($?R.reject:R.resolve)(k),z=!0)}if($&&!z)throw k}}),f=!0,m||(ft=1,et=(function(){var $=Jt(65548),k=$+12;if((v(),Z)[$>>>2>>>0]=k,(v(),Z)[$+4>>>2>>>0]=k+65536,k=Ir[0],!ci.has(k)){var z=km++;ci.set(k,z),Kn.set(z,k)}return k=ci.get(k),(v(),B)[$+8>>>2>>>0]=k,$})(),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.pause(),Tr(()=>uo(et)))}else ft===2?(ft=0,Tr(co),tt(et),et=null,Tm.forEach(Sr)):q(`invalid state: ${ft}`);return jn}})(d=>{o().then(d)});function Im(o){return o>>>=0,Xn(async()=>{var d=await Le(o);return Fe(d)})}var fi=[],Em=o=>{var d=fi.length;return fi.push(o),d},Cm=(o,d)=>{for(var m=Array(o),f=0;f<o;++f){var $=f,k=(v(),Z)[d+4*f>>>2>>>0],z=oi[k];if(z===void 0)throw o=`parameter ${f}`,k=fs(k),d=Je(k),tt(k),new Vt(`${o} has unknown type ${d}`);m[$]=z}return m},zm=(o,d,m)=>{var f=[];return o=o(f,m),f.length&&((v(),Z)[d>>>2>>>0]=Fe(f)),o},Am={},Er=o=>{var d=Am[o];return d===void 0?Je(o):d};function Om(o,d,m){var[f,...$]=Cm(o,d>>>0);d=f.Yc.bind(f);var k=$.map(W=>W.Xc.bind(W));o--;var z={toValue:Le};switch(o=k.map((W,F)=>{var ne=`argFromPtr${F}`;return z[ne]=W,`${ne}(args${F?"+"+8*F:""})`}),m){case 0:var R="toValue(handle)";break;case 2:R="new (toValue(handle))";break;case 3:R="";break;case 1:z.getStringOrSymbol=Er,R="toValue(handle)[getStringOrSymbol(methodName)]"}return R+=`(${o})`,f.Cd||(z.toReturnWire=d,z.emval_returnValue=zm,R=`return emval_returnValue(toReturnWire, destructorsRef, ${R})`),R=`return function (handle, methodName, destructorsRef, args) {
  ${R}
  }`,m=new Function(Object.keys(z),R)(...Object.values(z)),R=`methodCaller<(${$.map(W=>W.name)}) => ${f.name}>`,Em(Object.defineProperty(m,"name",{value:R}))}function Bm(o,d){return d>>>=0,(o=Le(o>>>0))==Le(d)}function Rm(o){return(o>>>=0)?(o=Er(o),Fe(globalThis[o])):Fe(globalThis)}function Mm(o){return o=Er(o>>>0),Fe(t[o])}function Dm(o,d){return d>>>=0,o=Le(o>>>0),d=Le(d),Fe(o[d])}function Nm(o){9<(o>>>=0)&&(kt[o+1]+=1)}function Qn(o,d,m,f,$){return fi[o>>>0](d>>>0,m>>>0,f>>>0,$>>>0)}function Pm(o,d,m,f,$){return Qn(o>>>0,d>>>0,m>>>0,f>>>0,$>>>0)}function Um(){return Fe([])}function qm(o){o=Le(o>>>0);for(var d=Array(o.length),m=0;m<o.length;m++)d[m]=o[m];return Fe(d)}function Lm(o){return Fe(Er(o>>>0))}function Wm(){return Fe({})}function Vm(o){for(var d=Le(o>>>=0);d.length;){var m=d.pop();d.pop()(m)}ui(o)}function Fm(o,d,m){d>>>=0,m>>>=0,o=Le(o>>>0),d=Le(d),m=Le(m),o[d]=m}function Gm(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(v(),B)[d>>>2>>>0]=o.getUTCSeconds(),(v(),B)[d+4>>>2>>>0]=o.getUTCMinutes(),(v(),B)[d+8>>>2>>>0]=o.getUTCHours(),(v(),B)[d+12>>>2>>>0]=o.getUTCDate(),(v(),B)[d+16>>>2>>>0]=o.getUTCMonth(),(v(),B)[d+20>>>2>>>0]=o.getUTCFullYear()-1900,(v(),B)[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),B)[d+28>>>2>>>0]=o}var Yn=o=>o%4==0&&(o%100!=0||o%400==0),Jn=[0,31,60,91,121,152,182,213,244,274,305,335],es=[0,31,59,90,120,151,181,212,243,273,304,334];function Hm(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(v(),B)[d>>>2>>>0]=o.getSeconds(),(v(),B)[d+4>>>2>>>0]=o.getMinutes(),(v(),B)[d+8>>>2>>>0]=o.getHours(),(v(),B)[d+12>>>2>>>0]=o.getDate(),(v(),B)[d+16>>>2>>>0]=o.getMonth(),(v(),B)[d+20>>>2>>>0]=o.getFullYear()-1900,(v(),B)[d+24>>>2>>>0]=o.getDay();var m=(Yn(o.getFullYear())?Jn:es)[o.getMonth()]+o.getDate()-1|0;(v(),B)[d+28>>>2>>>0]=m,(v(),B)[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=f&&o.getTimezoneOffset()==Math.min(f,m)),(v(),B)[d+32>>>2>>>0]=o}function jm(o){o>>>=0;var d=new Date((v(),B)[o+20>>>2>>>0]+1900,(v(),B)[o+16>>>2>>>0],(v(),B)[o+12>>>2>>>0],(v(),B)[o+8>>>2>>>0],(v(),B)[o+4>>>2>>>0],(v(),B)[o>>>2>>>0],0),m=(v(),B)[o+32>>>2>>>0],f=d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset(),k=new Date(d.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(k,$);return 0>m?(v(),B)[o+32>>>2>>>0]=+($!=k&&z==f):0<m!=(z==f)&&($=Math.max(k,$),d.setTime(d.getTime()+6e4*((0<m?z:$)-f))),(v(),B)[o+24>>>2>>>0]=d.getDay(),m=(Yn(d.getFullYear())?Jn:es)[d.getMonth()]+d.getDate()-1|0,(v(),B)[o+28>>>2>>>0]=m,(v(),B)[o>>>2>>>0]=d.getSeconds(),(v(),B)[o+4>>>2>>>0]=d.getMinutes(),(v(),B)[o+8>>>2>>>0]=d.getHours(),(v(),B)[o+12>>>2>>>0]=d.getDate(),(v(),B)[o+16>>>2>>>0]=d.getMonth(),(v(),B)[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function ts(o,d,m,f,$,k,z){return a?re(16,1,o,d,m,f,$,k,z):-52}function rs(o,d,m,f,$,k){if(a)return re(17,1,o,d,m,f,$,k)}var Yt={},Km=()=>performance.timeOrigin+performance.now();function is(o,d){if(a)return re(18,1,o,d);if(Yt[o]&&(clearTimeout(Yt[o].id),delete Yt[o]),!d)return 0;var m=setTimeout(()=>{delete Yt[o],Sr(()=>bs(o,performance.timeOrigin+performance.now()))},d);return Yt[o]={id:m,ce:d},0}function Zm(o,d,m,f){o>>>=0,d>>>=0,m>>>=0,f>>>=0;var $=new Date().getFullYear(),k=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var z=Math.max(k,$);(v(),Z)[o>>>2>>>0]=60*z,(v(),B)[d>>>2>>>0]=+(k!=$),o=(d=R=>{var W=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(W/60)).padStart(2,"0")}${String(W%60).padStart(2,"0")}`})(k),d=d($),$<k?(ht(o,m,17),ht(d,f,17)):(ht(o,f,17),ht(d,m,17))}var Xm=()=>Date.now();function Qm(o,d,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(v(),fe)[m>>>3>>>0]=BigInt(o),0):28}var mi=[],as=(o,d)=>{mi.length=0;for(var m;m=(v(),H)[o++>>>0];){var f=m!=105;d+=(f&=m!=112)&&d%8?4:0,mi.push(m==112?(v(),Z)[d>>>2>>>0]:m==106?(v(),fe)[d>>>3>>>0]:m==105?(v(),B)[d>>>2>>>0]:(v(),ee)[d>>>3>>>0]),d+=f?8:4}return mi};function Ym(o,d,m){return o>>>=0,d=as(d>>>0,m>>>0),xi[o](...d)}function Jm(o,d,m){return o>>>=0,d=as(d>>>0,m>>>0),xi[o](...d)}var eg=()=>{};function tg(o,d){return E(ke(o>>>0,d>>>0))}var rg=()=>{throw we+=1,"unwind"};function ig(){return 4294901760}var ag=()=>navigator.hardwareConcurrency,Tt={},Cr=o=>{var d;return(d=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+d[1]:(d=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+d[1]:0},ns=o=>{for(var d of o)(o=Cr(d))&&(Tt[o]=d)};function ng(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),ns(o),Tt.kd=Cr(o[3]),Tt.Md=o,Tt.kd}function zr(o){if(!(o=Tt[o>>>0]))return 0;var d;if(d=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=d[1];else if(d=/^\s+at (.*) \(.*\)$/.exec(o))o=d[1];else{if(!(d=/^(.+?)@/.exec(o)))return 0;o=d[1]}tt(zr.ld??0),d=xr(o)+1;var m=Jt(d);return m&&ht(o,m,d),zr.ld=m,zr.ld}function sg(o){o>>>=0;var d=(v(),H).length;if(o<=d||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var f=d*(1+.2/m);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-ct.buffer.byteLength+65535)/65536|0;try{ct.grow(f),V();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}function og(o,d,m){if(o>>>=0,d>>>=0,Tt.kd==o)var f=Tt.Md;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),ns(f);for(var $=3;f[$]&&Cr(f[$])!=o;)++$;for(o=0;o<m&&f[o+$];++o)(v(),B)[d+4*o>>>2>>>0]=Cr(f[o+$]);return o}var gi,yi={},ss=()=>{var f;if(!gi){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((f=globalThis.navigator)==null?void 0:f.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in yi)yi[o]===void 0?delete d[o]:d[o]=yi[o];var m=[];for(o in d)m.push(`${o}=${d[o]}`);gi=m}return gi};function os(o,d){if(a)return re(19,1,o,d);o>>>=0,d>>>=0;var m,f=0,$=0;for(m of ss()){var k=d+f;(v(),Z)[o+$>>>2>>>0]=k,f+=ht(m,k,1/0)+1,$+=4}return 0}function us(o,d){if(a)return re(20,1,o,d);o>>>=0,d>>>=0;var m=ss();for(var f of((v(),Z)[o>>>2>>>0]=m.length,o=0,m))o+=xr(f)+1;return(v(),Z)[d>>>2>>>0]=o,0}function ls(o){return a?re(21,1,o):52}function ds(o,d,m,f,$){return a?re(22,1,o,d,m,f,$):52}function ps(o,d,m,f){return a?re(23,1,o,d,m,f):52}function cs(o,d,m,f){return a?re(24,1,o,d,m,f):70}var ug=[null,[],[]];function hs(o,d,m,f){if(a)return re(25,1,o,d,m,f);d>>>=0,m>>>=0,f>>>=0;for(var $=0,k=0;k<m;k++){var z=(v(),Z)[d>>>2>>>0],R=(v(),Z)[d+4>>>2>>>0];d+=8;for(var W=0;W<R;W++){var F=o,ne=(v(),H)[z+W>>>0],pe=ug[F];ne===0||ne===10?((F===1?I:E)(zn(pe)),pe.length=0):pe.push(ne)}$+=R}return(v(),Z)[f>>>2>>>0]=$,0}function lg(o){return o>>>0}a||(function(){for(var o=t.numThreads-1;o--;)xn();Oe.push(async()=>{var d=(async function(){if(!a)return Promise.all(pt.map(vn))})();Me++,await d,--Me==0&&Be&&(d=Be,Be=null,d())})})(),a||(ct=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),V()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>oe(),t.stackRestore=o=>se(o),t.stackAlloc=o=>wi(o),t.setValue=function(o,d,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(v(),N)[o>>>0]=d;break;case"i16":(v(),G)[o>>>1>>>0]=d;break;case"i32":(v(),B)[o>>>2>>>0]=d;break;case"i64":(v(),fe)[o>>>3>>>0]=BigInt(d);break;case"float":(v(),X)[o>>>2>>>0]=d;break;case"double":(v(),ee)[o>>>3>>>0]=d;break;case"*":(v(),Z)[o>>>2>>>0]=d;break;default:q(`invalid type for setValue: ${m}`)}},t.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return(v(),N)[o>>>0];case"i16":return(v(),G)[o>>>1>>>0];case"i32":return(v(),B)[o>>>2>>>0];case"i64":return(v(),fe)[o>>>3>>>0];case"float":return(v(),X)[o>>>2>>>0];case"double":return(v(),ee)[o>>>3>>>0];case"*":return(v(),Z)[o>>>2>>>0];default:q(`invalid type for getValue: ${d}`)}},t.UTF8ToString=ke,t.stringToUTF8=ht,t.lengthBytesUTF8=xr;var fs,ms,Ar,tt,Jt,_i,gs,ys,_s,bi,bs,ws,ue,er,$s,se,wi,oe,vs,$i,xs,Ss,ks,vi,Ts,Is,Es,Cs,zs,As,Os,Bs,Rs,Ms,Ds,Ns,Ps,Us,qs,Ls,Ws,Vs,Fs,Gs,Hs,js,Ks,Zs,Xs,Qs,Ys,Js,eo,to,ro,io,ao,no,so,oo,uo,lo,po,co,nt,dg=[De,wr,Tn,An,On,Bn,Rn,Mn,Dn,Nn,Pn,Un,qn,Ln,Wn,Vn,ts,rs,is,os,us,ls,ds,ps,cs,hs],xi={1086876:(o,d,m,f,$)=>{if(t===void 0||!t.ad)return 1;if((o=ke(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.ad.get(o)))return 2;if(d=Number(d>>>0),m=Number(m>>>0),f=Number(f>>>0),d+m>o.byteLength)return 3;try{let k=o.subarray(d,d+m);switch($){case 0:(v(),H).set(k,f>>>0);break;case 1:t.Td?t.Td(f,k):t.Ld(f,k);break;default:return 4}return 0}catch{return 4}},1087700:(o,d,m)=>{t.wd(o,(v(),H).subarray(d>>>0,d+m>>>0))},1087764:()=>t.Vd(),1087806:o=>{t.vd(o)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:o=>t.Dd(o),1087961:o=>t.Hd(o),1087993:(o,d,m)=>{t.jd(Number(o),Number(d),Number(m),!0)},1088056:(o,d,m)=>{t.jd(Number(o),Number(d),Number(m))},1088113:()=>typeof wasmOffsetConverter<"u",1088170:o=>{t.bc("Abs",o,void 0)},1088221:o=>{t.bc("Neg",o,void 0)},1088272:o=>{t.bc("Floor",o,void 0)},1088325:o=>{t.bc("Ceil",o,void 0)},1088377:o=>{t.bc("Reciprocal",o,void 0)},1088435:o=>{t.bc("Sqrt",o,void 0)},1088487:o=>{t.bc("Exp",o,void 0)},1088538:o=>{t.bc("Erf",o,void 0)},1088589:o=>{t.bc("Sigmoid",o,void 0)},1088644:(o,d,m)=>{t.bc("HardSigmoid",o,{alpha:d,beta:m})},1088723:o=>{t.bc("HardSwish",o,void 0)},1088780:o=>{t.bc("Log",o,void 0)},1088831:o=>{t.bc("Sin",o,void 0)},1088882:o=>{t.bc("Cos",o,void 0)},1088933:o=>{t.bc("Tan",o,void 0)},1088984:o=>{t.bc("Asin",o,void 0)},1089036:o=>{t.bc("Acos",o,void 0)},1089088:o=>{t.bc("Atan",o,void 0)},1089140:o=>{t.bc("Sinh",o,void 0)},1089192:o=>{t.bc("Cosh",o,void 0)},1089244:o=>{t.bc("Asinh",o,void 0)},1089297:o=>{t.bc("Acosh",o,void 0)},1089350:o=>{t.bc("Atanh",o,void 0)},1089403:o=>{t.bc("Tanh",o,void 0)},1089455:o=>{t.bc("Not",o,void 0)},1089506:(o,d,m)=>{t.bc("Clip",o,{min:d,max:m})},1089575:o=>{t.bc("Clip",o,void 0)},1089627:(o,d)=>{t.bc("Elu",o,{alpha:d})},1089685:o=>{t.bc("Gelu",o,void 0)},1089737:o=>{t.bc("Relu",o,void 0)},1089789:(o,d)=>{t.bc("LeakyRelu",o,{alpha:d})},1089853:(o,d)=>{t.bc("ThresholdedRelu",o,{alpha:d})},1089923:(o,d)=>{t.bc("Cast",o,{to:d})},1089981:o=>{t.bc("Add",o,void 0)},1090032:o=>{t.bc("Sub",o,void 0)},1090083:o=>{t.bc("Mul",o,void 0)},1090134:o=>{t.bc("Div",o,void 0)},1090185:o=>{t.bc("Pow",o,void 0)},1090236:o=>{t.bc("Equal",o,void 0)},1090289:o=>{t.bc("Greater",o,void 0)},1090344:o=>{t.bc("GreaterOrEqual",o,void 0)},1090406:o=>{t.bc("Less",o,void 0)},1090458:o=>{t.bc("LessOrEqual",o,void 0)},1090517:(o,d,m,f,$)=>{t.bc("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1090692:(o,d,m,f,$)=>{t.bc("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1090866:(o,d,m,f,$)=>{t.bc("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1091040:(o,d,m,f,$)=>{t.bc("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1091215:(o,d,m,f,$)=>{t.bc("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1091389:(o,d,m,f,$)=>{t.bc("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1091562:(o,d,m,f,$)=>{t.bc("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1091735:(o,d,m,f,$)=>{t.bc("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1091912:(o,d,m,f,$)=>{t.bc("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1092092:(o,d,m,f,$)=>{t.bc("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1092272:o=>{t.bc("Where",o,void 0)},1092325:(o,d,m)=>{t.bc("Transpose",o,{perm:d?Array.from((v(),B).subarray(Number(d)>>>0,Number(m)>>>0)):[]})},1092449:(o,d,m,f)=>{t.bc("DepthToSpace",o,{blocksize:d,mode:ke(m),format:f?"NHWC":"NCHW"})},1092582:(o,d,m,f)=>{t.bc("DepthToSpace",o,{blocksize:d,mode:ke(m),format:f?"NHWC":"NCHW"})},1092715:(o,d,m,f)=>{t.bc("DFT",o,{axis:d,inverse:m,onesided:f})},1092807:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e,mt)=>{t.bc("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:d,dilations:[m],group:f,kernelShape:[$],pads:[k,z],strides:[R],wIsConst:()=>!!(v(),N)[F>>>0],outputPadding:ne?Array.from((v(),B).subarray(Number(ne)>>>0,Number(pe)>>>0)):[],outputShape:ye?Array.from((v(),B).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:ke(mt)})},1093240:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e)=>{t.bc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from((v(),B).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((v(),B).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((v(),B).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),B).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[W>>>0],outputPadding:F?Array.from((v(),B).subarray(Number(F)>>>0,Number(ne)>>>0)):[],outputShape:pe?Array.from((v(),B).subarray(Number(pe)>>>0,Number(ye)>>>0)):[],activation:ke($e)})},1093901:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e,mt)=>{t.bc("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:d,dilations:[m],group:f,kernelShape:[$],pads:[k,z],strides:[R],wIsConst:()=>!!(v(),N)[F>>>0],outputPadding:ne?Array.from((v(),B).subarray(Number(ne)>>>0,Number(pe)>>>0)):[],outputShape:ye?Array.from((v(),B).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:ke(mt)})},1094334:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e)=>{t.bc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from((v(),B).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((v(),B).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((v(),B).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),B).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[W>>>0],outputPadding:F?Array.from((v(),B).subarray(Number(F)>>>0,Number(ne)>>>0)):[],outputShape:pe?Array.from((v(),B).subarray(Number(pe)>>>0,Number(ye)>>>0)):[],activation:ke($e)})},1094995:(o,d)=>{t.bc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1095086:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e)=>{t.bc("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((v(),B).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((v(),B).subarray(Number(R)>>>0,Number(W)>>>0)):[],pads:F?Array.from((v(),B).subarray(Number(F)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((v(),B).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1095565:(o,d)=>{t.bc("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1095656:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e)=>{t.bc("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((v(),B).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((v(),B).subarray(Number(R)>>>0,Number(W)>>>0)):[],pads:F?Array.from((v(),B).subarray(Number(F)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((v(),B).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1096135:(o,d)=>{t.bc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1096222:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e)=>{t.bc("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((v(),B).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((v(),B).subarray(Number(R)>>>0,Number(W)>>>0)):[],pads:F?Array.from((v(),B).subarray(Number(F)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((v(),B).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1096697:(o,d)=>{t.bc("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1096784:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e)=>{t.bc("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:f,storage_order:$,dilations:k?Array.from((v(),B).subarray(Number(k)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((v(),B).subarray(Number(R)>>>0,Number(W)>>>0)):[],pads:F?Array.from((v(),B).subarray(Number(F)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((v(),B).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1097259:(o,d,m,f,$)=>{t.bc("Gemm",o,{alpha:d,beta:m,transA:f,transB:$})},1097363:o=>{t.bc("MatMul",o,void 0)},1097417:(o,d,m,f)=>{t.bc("ArgMax",o,{keepDims:!!d,selectLastIndex:!!m,axis:f})},1097525:(o,d,m,f)=>{t.bc("ArgMin",o,{keepDims:!!d,selectLastIndex:!!m,axis:f})},1097633:(o,d)=>{t.bc("Softmax",o,{axis:d})},1097696:(o,d)=>{t.bc("Concat",o,{axis:d})},1097756:(o,d,m,f,$)=>{t.bc("Split",o,{axis:d,numOutputs:m,splitSizes:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1097912:o=>{t.bc("Expand",o,void 0)},1097966:(o,d)=>{t.bc("Gather",o,{axis:Number(d)})},1098037:(o,d)=>{t.bc("GatherElements",o,{axis:Number(d)})},1098116:(o,d)=>{t.bc("GatherND",o,{batch_dims:Number(d)})},1098195:(o,d,m,f,$,k,z,R,W,F,ne)=>{t.bc("Resize",o,{antialias:d,axes:m?Array.from((v(),B).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:ke($),cubicCoeffA:k,excludeOutside:z,extrapolationValue:R,keepAspectRatioPolicy:ke(W),mode:ke(F),nearestMode:ke(ne)})},1098557:(o,d,m,f,$,k,z)=>{t.bc("Slice",o,{starts:d?Array.from((v(),B).subarray(Number(d)>>>0,Number(m)>>>0)):[],ends:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[],axes:k?Array.from((v(),B).subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1098821:o=>{t.bc("Tile",o,void 0)},1098873:(o,d,m)=>{t.bc("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1098987:(o,d,m)=>{t.bc("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1099101:o=>{t.bc("Range",o,void 0)},1099154:(o,d)=>{t.bc("Einsum",o,{equation:ke(d)})},1099235:(o,d,m,f,$)=>{t.bc("Pad",o,{mode:d,value:m,pads:f?Array.from((v(),B).subarray(Number(f)>>>0,Number($)>>>0)):[]})},1099378:(o,d,m,f,$,k)=>{t.bc("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1099547:(o,d,m,f,$,k)=>{t.bc("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!f,format:k?"NHWC":"NCHW"})},1099716:(o,d,m)=>{t.bc("CumSum",o,{exclusive:Number(d),reverse:Number(m)})},1099813:(o,d,m)=>{t.bc("DequantizeLinear",o,{axis:d,blockSize:m})},1099903:(o,d,m,f,$)=>{t.bc("GridSample",o,{align_corners:d,mode:ke(m),padding_mode:ke(f),format:$?"NHWC":"NCHW"})},1100073:(o,d,m,f,$)=>{t.bc("GridSample",o,{align_corners:d,mode:ke(m),padding_mode:ke(f),format:$?"NHWC":"NCHW"})},1100243:(o,d)=>{t.bc("ScatterND",o,{reduction:ke(d)})},1100328:(o,d,m,f,$,k,z,R,W)=>{t.bc("Attention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:f,scale:$,doRotary:k,qkvHiddenSizes:z?Array.from((v(),B).subarray(Number(R)>>>0,Number(R)+z>>>0)):[],pastPresentShareBuffer:!!W})},1100600:o=>{t.bc("BiasAdd",o,void 0)},1100655:o=>{t.bc("BiasSplitGelu",o,void 0)},1100716:o=>{t.bc("FastGelu",o,void 0)},1100772:(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e,mt,Si)=>{t.bc("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:d,dilations:m?Array.from((v(),B).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:$,kernel_shape:k?Array.from((v(),B).subarray(Number(k)>>>0,Number(z)>>>0)):[],pads:R?Array.from((v(),B).subarray(Number(R)>>>0,Number(W)>>>0)):[],strides:F?Array.from((v(),B).subarray(Number(F)>>>0,Number(ne)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(ye)>>>0],activation:ke($e),activation_params:mt?Array.from((v(),X).subarray(Number(mt)>>>0,Number(Si)>>>0)):[]})},1101356:o=>{t.bc("Gelu",o,void 0)},1101408:(o,d,m,f,$,k,z,R,W)=>{t.bc("GroupQueryAttention",o,{numHeads:d,kvNumHeads:m,scale:f,softcap:$,doRotary:k,rotaryInterleaved:z,smoothSoftmax:R,localWindowSize:W})},1101625:(o,d,m,f)=>{t.bc("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!f})},1101736:(o,d,m,f)=>{t.bc("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!f})},1101847:(o,d,m,f,$,k)=>{t.bc("MatMulNBits",o,{k:d,n:m,accuracyLevel:f,bits:$,blockSize:k})},1101974:(o,d,m,f,$,k)=>{t.bc("MultiHeadAttention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:f,scale:$,doRotary:k})},1102133:(o,d)=>{t.bc("QuickGelu",o,{alpha:d})},1102197:(o,d,m,f,$)=>{t.bc("RotaryEmbedding",o,{interleaved:!!d,numHeads:m,rotaryEmbeddingDim:f,scale:$})},1102336:(o,d,m)=>{t.bc("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1102438:(o,d,m)=>{t.bc("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1102540:(o,d,m,f)=>{t.bc("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:m,blockSize:f})},1102661:o=>{t.Id(o)},1102695:(o,d)=>t.Kd(Number(o),Number(d),t.$c.Nd,t.$c.errors)};function pg(o,d,m){return Xn(async()=>{await t.Gd(Number(o),Number(d),Number(m))})}function cg(){return typeof wasmOffsetConverter<"u"}function hg(o,d,m,f){var $=oe();try{return Bs(o,d,m,f)}catch(k){if(se($),k!==k+0)throw k;ue(1,0)}}function fg(o,d,m){var f=oe();try{return Cs(o,d,m)}catch($){if(se(f),$!==$+0)throw $;ue(1,0)}}function mg(o){var d=oe();try{Ts(o)}catch(m){if(se(d),m!==m+0)throw m;ue(1,0)}}function gg(o,d){var m=oe();try{return vi(o,d)}catch(f){if(se(m),f!==f+0)throw f;ue(1,0)}}function yg(o,d,m){var f=oe();try{ks(o,d,m)}catch($){if(se(f),$!==$+0)throw $;ue(1,0)}}function _g(o,d){var m=oe();try{Rs(o,d)}catch(f){if(se(m),f!==f+0)throw f;ue(1,0)}}function bg(o,d,m,f,$,k,z){var R=oe();try{return As(o,d,m,f,$,k,z)}catch(W){if(se(R),W!==W+0)throw W;ue(1,0)}}function wg(o,d,m,f,$,k){var z=oe();try{Is(o,d,m,f,$,k)}catch(R){if(se(z),R!==R+0)throw R;ue(1,0)}}function $g(o,d,m,f){var $=oe();try{Os(o,d,m,f)}catch(k){if(se($),k!==k+0)throw k;ue(1,0)}}function vg(o,d,m,f,$){var k=oe();try{Es(o,d,m,f,$)}catch(z){if(se(k),z!==z+0)throw z;ue(1,0)}}function xg(o,d,m,f,$,k,z){var R=oe();try{Ds(o,d,m,f,$,k,z)}catch(W){if(se(R),W!==W+0)throw W;ue(1,0)}}function Sg(o,d,m,f,$,k,z){var R=oe();try{Ns(o,d,m,f,$,k,z)}catch(W){if(se(R),W!==W+0)throw W;ue(1,0)}}function kg(o,d,m,f,$,k,z,R){var W=oe();try{Ls(o,d,m,f,$,k,z,R)}catch(F){if(se(W),F!==F+0)throw F;ue(1,0)}}function Tg(o,d,m,f,$){var k=oe();try{return Ms(o,d,m,f,$)}catch(z){if(se(k),z!==z+0)throw z;ue(1,0)}}function Ig(o,d,m){var f=oe();try{return Ws(o,d,m)}catch($){if(se(f),$!==$+0)throw $;ue(1,0)}}function Eg(o,d,m,f,$,k,z,R){var W=oe();try{Vs(o,d,m,f,$,k,z,R)}catch(F){if(se(W),F!==F+0)throw F;ue(1,0)}}function Cg(o,d,m,f,$,k,z,R,W,F,ne,pe){var ye=oe();try{Ps(o,d,m,f,$,k,z,R,W,F,ne,pe)}catch($e){if(se(ye),$e!==$e+0)throw $e;ue(1,0)}}function zg(o,d,m){var f=oe();try{return Fs(o,d,m)}catch($){if(se(f),$!==$+0)throw $;return ue(1,0),0n}}function Ag(o,d,m,f,$,k,z,R,W){var F=oe();try{zs(o,d,m,f,$,k,z,R,W)}catch(ne){if(se(F),ne!==ne+0)throw ne;ue(1,0)}}function Og(o){var d=oe();try{return Gs(o)}catch(m){if(se(d),m!==m+0)throw m;ue(1,0)}}function Bg(o,d){var m=oe();try{return oo(o,d)}catch(f){if(se(m),f!==f+0)throw f;return ue(1,0),0n}}function Rg(o,d,m,f){var $=oe();try{return Hs(o,d,m,f)}catch(k){if(se($),k!==k+0)throw k;ue(1,0)}}function Mg(o){var d=oe();try{return js(o)}catch(m){if(se(d),m!==m+0)throw m;return ue(1,0),0n}}function Dg(o,d,m,f){var $=oe();try{return Js(o,d,m,f)}catch(k){if(se($),k!==k+0)throw k;ue(1,0)}}function Ng(o,d,m,f,$){var k=oe();try{return eo(o,d,m,f,$)}catch(z){if(se(k),z!==z+0)throw z;ue(1,0)}}function Pg(o,d,m,f,$,k){var z=oe();try{return to(o,d,m,f,$,k)}catch(R){if(se(z),R!==R+0)throw R;ue(1,0)}}function Ug(o,d,m,f,$,k){var z=oe();try{return Us(o,d,m,f,$,k)}catch(R){if(se(z),R!==R+0)throw R;ue(1,0)}}function qg(o,d,m,f,$,k){var z=oe();try{return ro(o,d,m,f,$,k)}catch(R){if(se(z),R!==R+0)throw R;ue(1,0)}}function Lg(o,d,m,f,$,k,z,R){var W=oe();try{return qs(o,d,m,f,$,k,z,R)}catch(F){if(se(W),F!==F+0)throw F;ue(1,0)}}function Wg(o,d,m,f,$){var k=oe();try{return io(o,d,m,f,$)}catch(z){if(se(k),z!==z+0)throw z;return ue(1,0),0n}}function Vg(o,d,m,f){var $=oe();try{return ao(o,d,m,f)}catch(k){if(se($),k!==k+0)throw k;ue(1,0)}}function Fg(o,d,m,f){var $=oe();try{return no(o,d,m,f)}catch(k){if(se($),k!==k+0)throw k;ue(1,0)}}function Gg(o,d,m,f,$,k,z,R,W,F,ne,pe){var ye=oe();try{return so(o,d,m,f,$,k,z,R,W,F,ne,pe)}catch($e){if(se(ye),$e!==$e+0)throw $e;ue(1,0)}}function Hg(o,d,m,f,$,k,z,R,W,F,ne){var pe=oe();try{Qs(o,d,m,f,$,k,z,R,W,F,ne)}catch(ye){if(se(pe),ye!==ye+0)throw ye;ue(1,0)}}function jg(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e,mt,Si){var Qg=oe();try{Ys(o,d,m,f,$,k,z,R,W,F,ne,pe,ye,$e,mt,Si)}catch(ki){if(se(Qg),ki!==ki+0)throw ki;ue(1,0)}}function Kg(o,d,m){var f=oe();try{return Ks(o,d,m)}catch($){if(se(f),$!==$+0)throw $;ue(1,0)}}function Zg(o,d,m){var f=oe();try{return Zs(o,d,m)}catch($){if(se(f),$!==$+0)throw $;ue(1,0)}}function Xg(o,d,m,f){var $=oe();try{Xs(o,d,m,f)}catch(k){if(se($),k!==k+0)throw k;ue(1,0)}}function Or(){if(0<Me)Be=Or;else if(a)b==null||b(t),Q();else{for(var o=Oe;0<o.length;)o.shift()(t);0<Me?Be=Or:(t.calledRun=!0,C||(Q(),b==null||b(t)))}}return a||(nt=await qe(),Or()),t.PTR_SIZE=4,U?t:new Promise((o,d)=>{b=o,S=d})}var Sp,_o,w0=P(()=>{"use strict";var e,t;Sp=yo,_o=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),_o&&yo()}),Ai,Ia,bo,Ne,kp,Rr,wo,$o,Oi,vo,Bi,Tp,Ri,Ip,ja=P(()=>{"use strict";Ha(),Ai=typeof location>"u"?void 0:location.origin,Ia=import.meta.url>"file:"&&import.meta.url<"file;",bo=()=>{if(Ia){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Ai).href}return import.meta.url},Ne=bo(),kp=()=>{if(Ne&&!Ne.startsWith("blob:"))return Ne.substring(0,Ne.lastIndexOf("/")+1)},Rr=(e,t)=>{try{let r=t??Ne;return(r?new URL(e,r):new URL(e)).origin===Ai}catch{return!1}},wo=(e,t)=>{let r=t??Ne;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},$o=(e,t)=>`${t??"./"}${e}`,Oi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},vo=async e=>(await import(e)).default,Bi=(b0(),_r($p)).default,Tp=async()=>{if(!Ne)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Rr(Ne))return[void 0,Bi()];let e=await Oi(Ne);return[e,Bi(e)]},Ri=(w0(),_r(xp)).default,Ip=async(e,t,r,i)=>{let a=Ri&&!(e||t);if(a)if(Ne)a=Rr(Ne)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Ri];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??wo(n,t),u=r&&s&&!Rr(s,t),l=u?await Oi(s):s??$o(n,t);return[u?l:void 0,await vo(l)]}}}),Mi,Mr,rr,Di,xo,So,ko,Ka,be,qt=P(()=>{"use strict";ja(),Mr=!1,rr=!1,Di=!1,xo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},So=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ko=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ka=async e=>{if(Mr)return Promise.resolve();if(rr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Di)throw new Error("previous call to 'initializeWebAssembly()' failed.");rr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ko())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!So())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=xo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,u=(s==null?void 0:s.href)??s,l=a==null?void 0:a.wasm,p=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,g]=await Ip(u,n,r>1,!!c||!!p),_=!1,y=[];if(t>0&&y.push(new Promise(b=>{setTimeout(()=>{_=!0,b()},t)})),y.push(new Promise((b,S)=>{let x={numThreads:r};if(c)x.wasmBinary=c,x.locateFile=w=>w;else if(p||n)x.locateFile=w=>p??n+w;else if(u&&u.indexOf("blob:")!==0)x.locateFile=w=>new URL(w,u).href;else if(h){let w=kp();w&&(x.locateFile=T=>w+T)}g(x).then(w=>{rr=!1,Mr=!0,Mi=w,b(),h&&URL.revokeObjectURL(h)},w=>{rr=!1,Di=!0,S(w)})})),await Promise.race(y),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(Mr&&Mi)return Mi;throw new Error("WebAssembly is not initialized yet.")}}),Xe,Xr,ge,Za=P(()=>{"use strict";qt(),Xe=(e,t)=>{let r=be(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Xr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Xr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},ge=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Ep,$0=P(()=>{"use strict";qt(),Za(),Ep=e=>{let t=be(),r=0,i=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let n=0;return(e==null?void 0:e.tag)!==void 0&&(n=Xe(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&ge("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Xr(e.extra,"",new WeakSet,(s,u)=>{let l=Xe(s,i),p=Xe(u,i);t._OrtAddRunConfigEntry(r,l,p)!==0&&ge(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),To,Io,Eo,It,Co,Cp,v0=P(()=>{"use strict";qt(),Za(),To=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Io=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Eo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},It=(e,t,r,i)=>{let a=Xe(t,i),n=Xe(r,i);be()._OrtAddSessionConfigEntry(e,a,n)!==0&&ge(`Can't set a session config entry: ${t} - ${r}.`)},Co=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",It(e,"session.disable_quant_qdq","1",r),It(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let h=a==null?void 0:a.deviceType;h&&It(e,"deviceType",h,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let h=a;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);It(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let u=Xe(n,r),l=s.length,p=0,c=0;if(l>0){p=be()._malloc(l*be().PTR_SIZE),r.push(p),c=be()._malloc(l*be().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)be().setValue(p+h*be().PTR_SIZE,s[h][0],"*"),be().setValue(c+h*be().PTR_SIZE,s[h][1],"*")}await be()._OrtAppendExecutionProvider(e,u,p,c,l)!==0&&ge(`Can't append execution provider: ${n}.`)}},Cp=async e=>{let t=be(),r=0,i=[],a=e||{};Eo(a);try{let n=To(a.graphOptimizationLevel??"all"),s=Io(a.executionMode??"sequential"),u=typeof a.logId=="string"?Xe(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let c=typeof a.optimizedModelFilePath=="string"?Xe(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,p,c),r===0&&ge("Can't create session options."),a.executionProviders&&await Co(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);It(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[h,g]of Object.entries(a.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=Xe(h,i);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&ge(`Can't set a free dimension override: ${h} - ${g}.`)}return a.extra!==void 0&&Xr(a.extra,"",new WeakSet,(h,g)=>{It(r,h,g,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Bt,ut,Rt,ii,Qr,Xa,Qa,Ea,te=P(()=>{"use strict";Bt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ut=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Rt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},ii=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Xa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Qa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ea=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ya,zp=P(()=>{"use strict";Ha(),Ya=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let p=l.byteLength;new Uint8Array(n,s,p).set(l),s+=p}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),zo,Ao,Oo,Bo,Ja,Ro,de,lt=P(()=>{"use strict";te(),zo=["V","I","W","E","F"],Ao=(e,t)=>{console.log(`[${zo[e]},${new Date().toISOString()}]${t}`)},Ja=(e,t)=>{Oo=e,Bo=t},Ro=(e,t)=>{let r=Qr(e),i=Qr(Oo);r>=i&&Ao(r,typeof t=="function"?t():t)},de=(...e)=>{Bo&&Ro(...e)}}),Mo,jt,O,Yr,Ap,Op,Bp,ie=P(()=>{"use strict";Mo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},jt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=Mo.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],p=a-u<0?1:t[a-u];if(l!==p&&l>1&&p>1)return;let c=Math.max(l,p);if(l&&p)s[n-u]=Math.max(l,p);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},O=class jr{static size(t){return jr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Yr=class wt{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)wt.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return wt.computeShapeHelper(t,r,p,i,a,n,s,u,l),p}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return wt.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l,p=0){if(t)for(let c=0;c<r.length-2;c++)i.push(1);else for(let c=0;c<r.length-2;c++)i.push(wt.adjustPadAndReturnShape(r[c+2],a[c],n[c],s[c],u,c,c+r.length-2,l,p))}static computeOutputSize(t,r,i,a,n){let s=Math.floor(t/r)+1;return n===1&&(s=Math.ceil(t/r)+1,(s-1)*r>=i+a&&(s-=1)),s}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l,p=0){let c=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,wt.computeOutputSize(t-c,r,t,0,p);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=(Math.floor((t+r-1)/r)-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),n[u]=h-n[s],wt.computeOutputSize(t+n[s]+n[u]-c,r,t,n[s],p)}default:throw new Error("Unsupported AutoPad type")}else return wt.computeOutputSize(t+n[s]+n[u]-c,r,t,n[s],p)}},Ap=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!jt.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},Op=-34028234663852886e22,Bp=34028234663852886e22}),en,Rp=P(()=>{"use strict";te(),en=(e,t)=>new(ii(t))(e)}),Ni,Do,Pi,No,Ui,Po,qi,Li,Wi,Uo,Mp,x0=P(()=>{"use strict";te(),lt(),Ni=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Do=(e,t)=>{if(t==="int32")return e;let r=Ni.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(ii(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Pi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},No=1,Ui=()=>No++,Po=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),qi=(e,t)=>{let r=Ni.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Li=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return qi(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Pi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Wi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!(n!=null&&n.input.dataTypes.includes(t))){if(s=Po.get(t),!s||!(n!=null&&n.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==qi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Do(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Pi(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Uo=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ui();return this.tensorTrackersById.set(e,new Wi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=Ui(),s=new Li({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Wi(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[p,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(p,1)[0];return h.sessionId=e,h}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Li({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Mp=(...e)=>new Uo(...e)}),ir,qo,Dp,S0=P(()=>{"use strict";te(),qt(),Rp(),x0(),lt(),ir=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),qo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},Dp=class{constructor(e){this.tensorManager=Mp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ja(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>qo(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=ir.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=ir.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return en(r,t)}}registerMLTensor(e,t,r,i){let a=ir.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=ir.get(Bt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(a!=null&&a.input.dataTypes.includes(i)):!!(a!=null&&a.output.dataTypes.includes(i))}flush(){}}}),tn=P(()=>{"use strict"}),Vi,Dr,Nr,Lo,Wo,Fi,Ca,Vo,Np,k0=P(()=>{"use strict";lt(),tn(),Vi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Dr=[],Nr=e=>Math.ceil(Number(e)/16)*16,Lo=e=>{for(let t=0;t<Dr.length;t++){let r=Dr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Wo=1,Fi=()=>Wo++,Ca=async(e,t,r,i)=>{let a=Nr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},Vo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Vi)Dr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Nr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);if(n===a&&i%4===0)this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,r,i,a);else{let u=new Uint8Array(n);u.set(t),this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,u,0,n)}de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Nr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Fi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Lo(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Fi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ca(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Vi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Np=(...e)=>new Vo(...e)}),Fo,he,xe=P(()=>{"use strict";Fo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new Fo(e)}),Kt,Pr,Ie,Te,J,ve,za,Ht,vt,Y,ar,M,K,Pp,rn,Go,Up,ae=P(()=>{"use strict";te(),ie(),Kt=64,Pr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let r=Pr(e,t);return typeof r=="string"?r:r[0]},Te=(e,t=1)=>{let r=Pr(e,t);return typeof r=="string"?r:r[1]},J=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},ve=e=>e%4===0?4:e%2===0?2:1,za=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ht=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,vt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ar=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=Pr(t,a),c=typeof p=="string"?p:p[1],h=typeof p=="string"?p:p[0],g={indices:l,value:c,storage:h,tensor:t},_=U=>typeof U=="string"?U:`${U}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=n?"uniforms.":"",S=`${b}${e}_shape`,x=`${b}${e}_strides`,w="";for(let U=0;U<s-1;U++)w+=`
    let dim${U} = current / ${Y(x,U,s)};
    let rest${U} = current % ${Y(x,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;w+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,I=U=>(y.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),E=[];if(s>=2)for(let U=s-1;U>=0;U--)E.push(`${Y(x,U,s)} * (indices[${U}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,A=U=>(y.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),v=(...U)=>s===0?"0u":`${g.indices}(${U.map(_).join(",")})`,D=(U,V)=>s<2?`${U}`:`${Y(U,V,s)}`,N=(U,V,Q)=>s<2?`${U}=${Q};`:`${Y(U,V,s)}=${Q};`,H={},G=(U,V)=>{y.broadcastedIndicesToOffset=!0;let Q=`${V.name}broadcastedIndicesTo${e}Offset`;if(Q in H)return`${Q}(${U})`;let q=[];for(let me=s-1;me>=0;me--){let qe=V.indicesGet("outputIndices",me+V.rank-s);q.push(`${D(x,me)} * (${qe} % ${D(S,me)})`)}return H[Q]=`fn ${Q}(outputIndices: ${V.type.indices}) -> u32 {
             return ${q.length>0?q.join("+"):"0u"};
           }`,`${Q}(${U})`},j=(U,V)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${V};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${V}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),B=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),Z=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${B(`i2o_${e}(indices)`)};
  }`,X=s<2?"":(()=>{let U=u.map(Q=>`d${Q}: u32`).join(", "),V=u.map(Q=>`d${Q}`).join(", ");return`
  fn get_${e}(${U}) -> ${c} {
    return get_${e}ByIndices(${v(V)});
  }`})(),ee=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let V=U.map(_).join(",");return s===0?B("0u"):s===1?B(V[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${V})`)},fe=U=>s<2?B(U):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${U})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${j(`i2o_${e}(indices)`,"value")}
  }`,le=s<2?"":(()=>{let U=u.map(Q=>`d${Q}: u32`).join(", "),V=u.map(Q=>`d${Q}`).join(", ");return`
  fn set_${e}(${U}, value: ${c}) {
    set_${e}ByIndices(${v(V)}, value);
  }`})();return{impl:()=>{let U=[],V=!1;return y.offsetToIndices&&(U.push(T),V=!0),y.indicesToOffset&&(U.push(C),V=!0),y.broadcastedIndicesToOffset&&(Object.values(H).forEach(Q=>U.push(Q)),V=!0),y.set&&(U.push(le),V=!0),y.setByIndices&&(U.push(L),V=!0),y.get&&(U.push(X),V=!0),y.getByIndices&&(U.push(Z),V=!0),!n&&V&&U.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${x} = ${g.indices}(${O.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:I,indicesToOffset:A,broadcastedIndicesToOffset:G,indices:v,indicesGet:D,indicesSet:N,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let V=U[s];if(typeof V!="string")throw new Error("value must be string");let Q=U.slice(0,s).map(_).join(",");return s===0?j("0u",V):s===1?j(Q[0],V):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Q}, ${V})`)},setByOffset:j,setByIndices:(U,V)=>s<2?j(U,V):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${V});`),get:ee,getByOffset:B,getByIndices:fe,usage:i,name:e,strides:x,shape:S,rank:s}},M=(e,t,r,i=1)=>ar(e,t,r,"input",i),K=(e,t,r,i=1)=>ar(e,t,r,"output",i),Pp=(e,t,r)=>ar(e,t,r,"atomicOutput",1),rn=(e,t,r,i=1)=>ar(e,t,r,"internal",i),Go=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Kt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Up=(e,t)=>new Go(e,t)}),Ho,Gi,jo,Ko,Zo,Xo,Ue,qp,Lp,xt=P(()=>{"use strict";te(),ie(),xe(),ae(),Ho=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Gi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),jo=(e,t)=>O.sortBasedOnPerm(e,Gi(e.length,t)),Ko=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Zo=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Xo=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ue=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Gi(i,t),n=jo(e.dims,a),s=e.dims,u=n,l=i<2||Xo(a,e.dims),p;if(l)return p=y=>{let b=M("input",r,s,4),S=K("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:p};let{newShape:c,newPerm:h}=Zo(e.dims,a),g=O.areEqual(h,[2,3,1]),_=O.areEqual(h,[3,1,2]);if(c.length===2||g||_){s=g?[c[0],c[1]*c[2]]:_?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return p=b=>{let S=M("a",r,s.length),x=K("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${y+1}>, ${y}>;
  ${b.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:b},...J(s,u)]}},getShaderSource:p}}return p=y=>{let b=M("a",r,s.length),S=K("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,S)}

  ${Ko(a,i,b,S)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...J(s,u)]}},getShaderSource:p}},qp=(e,t)=>{Ho(e.inputs,t.perm),e.compute(Ue(e.inputs[0],t.perm))},Lp=e=>he({perm:e.perm})}),Qo,Yo,Jo,eu,tu,ru,iu,au,nu,su,Ge,Wp,Vp,Fp,Gp,Hp,jp,Kp,Zp,Xp,Qp,T0=P(()=>{"use strict";te(),ie(),ae(),an(),xt(),Qo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Yo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Jo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},eu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},tu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},ru=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},iu=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},au=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},nu=(e,t)=>{let r=[];if(!au(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},su=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=O.size(n),p=O.size(s),c=M("_A",r[0].dataType,u),h=K("output",a,n),g=64;l===1&&(g=256);let _=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Jo[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Qo[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Yo[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${eu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:p}]})}},Ge=(e,t,r,i)=>{let a=e.inputs.length===1?r:Aa(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((_,y)=>y));let s=O.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],p=nu(u,e.inputs[0].dims.length);p.length>0&&(l=e.compute(Ue(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],u=tu(u.length,l.dims.length));let[c,h]=ru(l.dims,u),g=c;a.keepDims&&(g=iu(c,s)),e.compute(su(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},Wp=(e,t)=>{Ge(e,"ReduceMeanShared",t,"mean")},Vp=(e,t)=>{Ge(e,"ReduceL1Shared",t,"l1")},Fp=(e,t)=>{Ge(e,"ReduceL2Shared",t,"l2")},Gp=(e,t)=>{Ge(e,"ReduceLogSumExpShared",t,"logSumExp")},Hp=(e,t)=>{Ge(e,"ReduceMaxShared",t,"max")},jp=(e,t)=>{Ge(e,"ReduceMinShared",t,"min")},Kp=(e,t)=>{Ge(e,"ReduceProdShared",t,"prod")},Zp=(e,t)=>{Ge(e,"ReduceSumShared",t,"sum")},Xp=(e,t)=>{Ge(e,"ReduceSumSquareShared",t,"sumSquare")},Qp=(e,t)=>{Ge(e,"ReduceLogSumShared",t,"logSum")}}),He,ou,Jr,Aa,je,uu,lu,du,pu,cu,hu,fu,mu,gu,yu,Ke,Yp,Jp,ec,tc,rc,ic,ac,nc,sc,oc,an=P(()=>{"use strict";te(),ie(),xe(),ae(),T0(),He=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ou=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Jr=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],p=r[0].dims,c=p.length,h=O.normalizeAxes(a,c),g=!u&&h.length===0;p.forEach((b,S)=>{g||h.indexOf(S)>=0?s&&l.push(1):l.push(b)});let _=l.length,y=O.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],x=M("_A",r[0].dataType,c),w=K("output",n,_),T=i(x,w,h),I=T[2];for(let E=0,C=0;E<c;E++)g||h.indexOf(E)>=0?(s&&C++,I=`for(var j${E}: u32 = 0; j${E} < ${p[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${x.indicesSet("input_indices",E,`j${E}`)}
                  ${I}
                }`):(S.push(`${x.indicesSet("input_indices",E,w.indicesGet("output_indices",C))};`),C++);return`

        ${b.registerUniform("output_size","u32").declareVariables(x,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${I}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...J(p,l)]})}},Aa=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},je=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Aa(a,r);e.compute(Jr(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?ou:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},uu=(e,t)=>{He(e.inputs),je(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},lu=(e,t)=>{He(e.inputs),je(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},du=(e,t)=>{He(e.inputs),je(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},pu=(e,t)=>{He(e.inputs),je(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},cu=(e,t)=>{He(e.inputs),je(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},hu=(e,t)=>{He(e.inputs),je(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},fu=(e,t)=>{He(e.inputs),je(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},mu=(e,t)=>{He(e.inputs),je(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},gu=(e,t)=>{He(e.inputs),je(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},yu=(e,t)=>{He(e.inputs),je(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ke=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},Yp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):Wp(e,t)},Jp=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):Vp(e,t)},ec=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Fp(e,t)},tc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pu(e,t):Gp(e,t)},rc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cu(e,t):Hp(e,t)},ic=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fu(e,t):jp(e,t)},ac=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mu(e,t):Kp(e,t)},nc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):Zp(e,t)},sc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):Xp(e,t)},oc=(e,t)=>{Ke(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Qp(e,t)}}),Hi,uc,lc,Oa,I0=P(()=>{"use strict";te(),xe(),an(),Hi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},uc=(e,t)=>{Hi(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Jr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},lc=(e,t)=>{Hi(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Jr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Oa=e=>he(e)}),_u,Ur,bu,wu,$u,br,vu,dc,nn=P(()=>{"use strict";te(),ie(),tn(),ae(),_u=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],p=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=a.dims[0]/3,g=h,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let y=p;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==h+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let S=y+b,x=-1,w=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==p||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:p,pastSequenceLength:b,kvSequenceLength:y,totalSequenceLength:S,maxSequenceLength:x,inputHiddenSize:c,hiddenSize:h,vHiddenSize:_,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ur=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,bu=(e,t,r,i,a,n,s,u)=>{let l=ve(s?1:n),p=64,c=n/l;c<p&&(p=32);let h=Math.ceil(n/l/p),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:h}],_=Ie(e.dataType,l),y=Te(1,l),b=["type"];s&&b.push("type"),u&&b.push("type");let S=x=>{let w=K("x",e.dataType,e.dims,l),T=[w],I=s?M("seq_lens",s.dataType,s.dims):void 0;I&&T.push(I);let E=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;E&&T.push(E);let C=Te(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${x.registerUniforms(A).declareVariables(...T)}
  ${x.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ur(I,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${_};${l}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},wu=(e,t,r,i,a,n,s,u,l)=>{let p=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,p],h=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=h?[n.batchSize,g,p,n.headSize]:void 0,y=n.nReps?n.nReps:1,b=n.scale===0?1/Math.sqrt(n.headSize):n.scale,S=ve(n.headSize),x=n.headSize/S,w=12,T={x:Math.ceil(p/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},I=[{type:12,data:n.sequenceLength},{type:12,data:x},{type:12,data:p},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:y}],E=h&&i&&O.size(i.dims)>0,C=["type","type"];E&&C.push("type"),a&&C.push("type"),u&&C.push("type"),l&&C.push("type");let A=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&A.push({dims:_,dataType:t.dataType,gpuDataType:0});let v=D=>{let N=M("q",t.dataType,t.dims,S),H=M("key",r.dataType,r.dims,S),G=[N,H];if(E){let L=M("past_key",i.dataType,i.dims,S);G.push(L)}a&&G.push(M("attention_bias",a.dataType,a.dims));let j=u?M("seq_lens",u.dataType,u.dims):void 0;j&&G.push(j);let B=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;B&&G.push(B);let Z=K("output",t.dataType,c),X=[Z];h&&X.push(K("present_key",t.dataType,_,S));let ee=Te(1,S),fe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${N.type.storage}, ${w*w}>;
  ${D.registerUniforms(fe).declareVariables(...G,...X)}
  ${D.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ur(j,B,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ee}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ee}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:A,dispatchGroup:T,programUniforms:I}),getShaderSource:v}},$u=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,p=a.nReps?a.nReps:1,c=a.vHiddenSize*p,h=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=h?[a.batchSize,g,l,a.headSize]:void 0,y=[a.batchSize,a.sequenceLength,c],b=12,S={x:Math.ceil(a.vHeadSize/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},x=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:p}],w=h&&i&&O.size(i.dims)>0,T=["type","type"];w&&T.push("type"),s&&T.push("type"),u&&T.push("type");let I=[{dims:y,dataType:t.dataType,gpuDataType:0}];h&&I.push({dims:_,dataType:t.dataType,gpuDataType:0});let E=C=>{let A=M("probs",t.dataType,t.dims),v=M("v",r.dataType,r.dims),D=[A,v];w&&D.push(M("past_value",i.dataType,i.dims));let N=s?M("seq_lens",s.dataType,s.dims):void 0;s&&D.push(N);let H=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(H);let G=[K("output",t.dataType,y)];h&&G.push(K("present_value",t.dataType,_));let j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${A.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${A.type.value}, ${b*b}>;
  ${C.registerUniforms(j).declareVariables(...D,...G)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ur(N,H,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:I,dispatchGroup:S,programUniforms:x}),getShaderSource:E}},br=(e,t,r,i,a,n,s,u,l,p,c=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),_=g>1?s:void 0,y=g>1?u:void 0,b=g>1?p.pastSequenceLength:0,S=b+p.kvSequenceLength,x=l&&O.size(l.dims)>0?l:void 0,w=[t,r];_&&O.size(_.dims)>0&&w.push(_),x&&w.push(x),c&&w.push(c),h&&w.push(h);let T=e.compute(wu(g,t,r,_,x,p,b,c,h),{inputs:w,outputs:g>1?[-1,1]:[-1]})[0];e.compute(bu(T,p.batchSize,p.numHeads,b,p.sequenceLength,S,c,h),{inputs:c&&h?[T,c,h]:[T],outputs:[]});let I=[T,i];y&&O.size(y.dims)>0&&I.push(y),c&&I.push(c),h&&I.push(h),e.compute($u(g,T,i,y,p,b,c,h),{inputs:I,outputs:g>1?[0,2]:[0]})},vu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let g=K("output_q",l[0].dataType,r),_=K("output_k",l[0].dataType,r),y=K("output_v",l[0].dataType,r),b=M("input",l[0].dataType,l[0].dims),S=M("weight",l[1].dataType,l[1].dims),x=M("bias",l[2].dataType,l[2].dims),w=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${h.registerUniforms(T).declareVariables(b,S,x,g,_,y)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:p}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},dc=(e,t)=>{let r=_u(e.inputs,t),[i,a,n]=vu(e,r);return br(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),xu,Su,ku,pc,E0=P(()=>{"use strict";Ve(),te(),ie(),xe(),ae(),xu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Su=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?ve(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=O.size(n)/s,p=i,c=p?n.length:n,h=M("x",e[0].dataType,e[0].dims,s),g=M("scale",e[1].dataType,e[1].dims,u),_=M("bias",e[2].dataType,e[2].dims,u),y=M("inputMean",e[3].dataType,e[3].dims,u),b=M("inputVar",e[4].dataType,e[4].dims,u),S=K("y",e[0].dataType,c,s),x=()=>{let T="";if(i)T=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let I=1;I<g.rank;I++)T+=`cIndices[${I}] = outputIndices[${I}];`;T+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(h,g,_,y,b,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p?[{type:12,data:l},...J(n)]:[{type:12,data:l}]})}},ku=e=>he(e),pc=(e,t)=>{let{inputs:r,outputCount:i}=e,a=ku({...t,outputCount:i});if(_e.webgpu.validateInputContent&&xu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Su(r,a))}}),Tu,Iu,cc,C0=P(()=>{"use strict";ie(),ae(),Tu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Iu=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,a=e[0].dataType,n=M("input",a,t,4),s=M("bias",a,[r],4),u=M("residual",a,t,4),l=K("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(n,s,u,l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},cc=e=>{Tu(e.inputs),e.compute(Iu(e.inputs))}}),Eu,ce,hc,fc,mc,gc,yc,_c,bc,wc,$c,Cu,vc,xc,Sc,kc,fr,Tc,Kr,Ic,Ec,Cc,zc,Ac,Oc,Bc,Rc,Mc,Dc,Nc,Pc,Uc,qc,Lc,Wc,Vc,ji,Fc,Ba,Ra,Gc,Hc,jc,zu,Au,Kc,sn=P(()=>{"use strict";te(),ie(),xe(),ae(),Eu=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let p=M("inputData",r,[u],4),c=K("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(p,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>Eu(p,O.size(e.dims),e.dataType,n,r,i,u),getRunData:p=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(O.size(p[0].dims)/64/4)},programUniforms:l})}},hc=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},fc=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},mc=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},gc=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},yc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},_c=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},bc=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},wc=e=>he(e),$c=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Cu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},vc=(e,t)=>{let r=t||Cu(e.inputs),i=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},xc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Sc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},kc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},fr=e=>he(e),Tc=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Kr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Ic=e=>{let t=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Kr(t)))},Ec=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},Cc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},zc=e=>{let t=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Kr(t)))},Ac=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Oc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},Bc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},Rc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Mc=e=>{let t=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Dc=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Nc=e=>he(e),Pc=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Uc=e=>{let t=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},qc=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},Lc=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},Wc=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},Vc=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},ji=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Fc=e=>{e.compute(ce(e.inputs[0],"Tanh",ji))},Ba=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ji("v")};
}
`,Ra=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Gc=e=>{let t=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Ra,Ba(t),void 0,e.inputs[0].dataType))},Hc=(e,t)=>{let r=Te(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},jc=e=>{e.compute(ce(e.inputs[0],"Log","log"))},zu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Au=e=>`quick_gelu_impl(${e})`,Kc=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",Au,zu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Ou,Bu,Zc,z0=P(()=>{"use strict";ie(),ae(),sn(),Ou=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Bu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),a=K("output",e[0].dataType,t,4),n=O.size(t)/4,s=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${Kr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Zc=e=>{Ou(e.inputs),e.compute(Bu(e.inputs))}}),Ru,Mu,Ze,Xc,Qc,Yc,Jc,eh,th,rh,ih,ah,nh,A0=P(()=>{"use strict";te(),ie(),ae(),Ru=(e,t,r,i,a,n,s,u,l,p,c,h)=>{let g,_;typeof u=="string"?g=_=(w,T)=>`${u}((${w}),(${T}))`:typeof u=="function"?g=_=u:(g=u.scalar,_=u.vector);let y=K("outputData",c,i.length,4),b=M("aData",l,t.length,4),S=M("bData",p,r.length,4),x;if(a)if(n){let w=O.size(t)===1,T=O.size(r)===1,I=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;w||T?x=y.setByOffset("global_idx",_(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):x=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",_(s||I?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=y.setByOffset("global_idx",_(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,I,E="")=>{let C=`aData[indexA${I}][componentA${I}]`,A=`bData[indexB${I}][componentB${I}]`;return`
            let outputIndices${I} = ${y.offsetToIndices(`global_idx * 4u + ${I}u`)};
            let offsetA${I} = ${b.broadcastedIndicesToOffset(`outputIndices${I}`,y)};
            let offsetB${I} = ${S.broadcastedIndicesToOffset(`outputIndices${I}`,y)};
            let indexA${I} = offsetA${I} / 4u;
            let indexB${I} = offsetB${I} / 4u;
            let componentA${I} = offsetA${I} % 4u;
            let componentB${I} = offsetB${I} % 4u;
            ${T}[${I}] = ${E}(${g(C,A)});
          `};c===9?x=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,y)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Mu=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),p=!O.areEqual(u,l),c=u,h=O.size(u),g=!1,_=!1,y=[p];if(p){let b=jt.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),h=O.size(c);let S=O.size(u)===1,x=O.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;y.push(S),y.push(x),y.push(w),y.push(T);let I=1;for(let E=1;E<c.length;E++){let C=u[u.length-E],A=l[l.length-E];if(C===A)I*=C;else break}I%4===0?(_=!0,g=!0):(S||x||w||T)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Ru(b,u,l,c,g,p,_,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(c)/4)},...J(u,l,c)]})}},Ze=(e,t,r,i,a,n)=>{e.compute(Mu(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},Xc=e=>{Ze(e,"Add",(t,r)=>`${t}+${r}`)},Qc=e=>{Ze(e,"Div",(t,r)=>`${t}/${r}`)},Yc=e=>{Ze(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Jc=e=>{Ze(e,"Mul",(t,r)=>`${t}*${r}`)},eh=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ze(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},th=e=>{Ze(e,"Sub",(t,r)=>`${t}-${r}`)},rh=e=>{Ze(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},ih=e=>{Ze(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ah=e=>{Ze(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},nh=e=>{Ze(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Du,Nu,Pu,Uu,sh,oh,O0=P(()=>{"use strict";te(),ie(),xe(),ae(),Du=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,p)=>{if(p!==t&&l!==i.dims[p])throw new Error("non concat dimensions must match")})}})},Nu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Pu=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Uu=(e,t,r,i)=>{let a=O.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],p=[],c=[{type:12,data:a}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],n[b]=u,p.push(e[b].dims.length),s[b]=M(`input${b}`,i,p[b]),l.push("rank"),c.push({type:12,data:n[b]});for(let b=0;b<e.length;++b)c.push(...J(e[b].dims));c.push(...J(r));let h=K("output",i,r.length),g=h.indicesGet("indices",t),_=Array.from(Array(n.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),y=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...s,h)})()}

  ${Nu(n.length,_)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Pu(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:y}},sh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=O.normalizeAxis(t.axis,i.length);Du(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(Uu(s,a,n,r[0].dataType),{inputs:s})},oh=e=>he({axis:e.axis})}),Nt,Pt,Ut,on,Lt=P(()=>{"use strict";te(),ie(),Nt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Pt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ut=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},on=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Op,Bp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,uh,un=P(()=>{"use strict";Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},uh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),lh,B0=P(()=>{"use strict";lh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),yr,ln,dn=P(()=>{"use strict";te(),ie(),ae(),Lt(),yr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${Y(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,Y(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},ln=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],p=u[u.length-1],c=s[s.length-1],h=ve(p),g=ve(c),_=ve(l),y=O.size(r)/h/_,b=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),x=[O.size(S),l,p],w=[{type:12,data:y},{type:12,data:l},{type:12,data:p},{type:12,data:c}];Pt(t,w),w.push(...J(S,s,u)),b&&w.push(...J(e[2].dims)),w.push(...J(x));let T=I=>{let E=rn("batch_dims",e[0].dataType,S.length),C=M("a",e[0].dataType,s.length,g),A=M("b",e[1].dataType,u.length,h),v=K("output",e[0].dataType,x.length,h),D=Ie(v.type.tensor),N=Nt(t,v.type.value,D),H=[C,A],G="";if(b){let Z=a?h:1;H.push(M("bias",e[2].dataType,e[2].dims.length,Z)),G=`${a?`value += bias[col / ${Z}];`:`value += ${v.type.value}(bias[row + i]);`}`}let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ut(t,j);let B=()=>{let Z=`var a_data: ${C.type.value};`;for(let X=0;X<g;X++)Z+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${h}];`;for(let X=0;X<_;X++){Z+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${g}];`;for(let ee=0;ee<g;ee++)Z+=`
            values[${X}] = fma(${A.type.value}(a_data${g===1?"":`[${ee}]`}), b_data${ee}, values[${X}]);
`}return Z};return`
  ${I.registerUniforms(j).registerInternalVariables(E).declareVariables(...H,v)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${yr("a_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${yr("b_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${B()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${G}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${_};${a}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:T}}}),qu,Lu,Ma,Ki,Wu,Da,Vu,ei,pn=P(()=>{"use strict";te(),ie(),ae(),Lt(),dn(),un(),qu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Lu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ma=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],p=t[0]*e[0],c=a?l:n,h=a?n:l,g=c/t[0],_=n/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${qu(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Lu(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ki=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Wu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Da=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let p=e[1]*t[1],c=e[0]*t[0],h=a?p:n,g=a?n:p;if(!(g%t[1]===0&&h%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],y=h/t[0],b=n/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Ki(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ki(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Wu(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Vu=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,p=Ie(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${yr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${yr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ce(e,p)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ei=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),p=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=O.size(c),g=s[s.length-2],_=s[s.length-1],y=u[u.length-1],b=_%4===0&&y%4===0,S=g<=8?[4,1,1]:[4,4,1],x=[8,8,1],w=[Math.ceil(y/x[0]/S[0]),Math.ceil(g/x[1]/S[1]),Math.ceil(h/x[2]/S[2])],T=b?4:1,I=[...l,g,_/T],E=I.length,C=[...p,_,y/T],A=C.length,v=[h,g,y/T],D=[{type:6,data:g},{type:6,data:y},{type:6,data:_}];Pt(t,D),D.push(...J(c,I,C));let N=["rank","rank"],H=e.length>2;H&&(D.push(...J(e[2].dims)),N.push("rank")),D.push(...J(v));let G=j=>{let B=c.length,Z=rn("batchDims",e[0].dataType,B,1),X=Ie(e[0].dataType),ee=M("a",e[0].dataType,E,T),fe=M("b",e[1].dataType,A,T),L=K("result",e[0].dataType,v.length,T),le=[ee,fe];if(H){let me=a?T:1;le.push(M("bias",e[2].dataType,e[2].dims.length,me))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ut(t,U);let V=Ie(L.type.tensor),Q=Nt(t,L.type.value,V),q=Vu(T,H,Q,[Z,ee,fe,L],a);return`
  ${j.registerUniforms(U).registerInternalVariables(Z).declareVariables(...le,L)}
  ${q}
  ${b?Ma(S,x,X,Z):Da(S,x,X,Z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${a}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:D}),getShaderSource:G}}}),Fu,dh,R0=P(()=>{"use strict";te(),lt(),ae(),Lt(),un(),B0(),pn(),Fu=(e,t,r,i,a=!1,n,s=4,u=4,l=4,p="f32")=>{let c=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},h=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",x=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ce(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ce(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ce(s,p)}(0.0);`,I=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ce(u,p)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ce(u,p)}(0.0);`,E=Ce(l,p),C=Ce(e?s:u,p),A=Ce(e?u:s,p),v=Nt(n,E,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:I}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?I:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${uh(a)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},dh=(e,t,r,i,a,n,s,u,l)=>{let p=t.format==="NHWC",c=p?e[0].dims[3]:e[0].dims[1],h=r[0],g=p?r[2]:r[3],_=p?r[1]:r[2],y=p?r[3]:r[1],b=p&&(c%4===0||c%3===0)&&y%4===0,S=p?y:g*_,x=p?g*_:y,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],I=[Math.ceil(S/w[0]/T[0]),Math.ceil(x/w[1]/T[1]),Math.ceil(h/w[2]/T[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${I}`);let E=b?p&&c%4!==0?3:4:1,C=w[1]*T[1],A=w[0]*T[0],v=Math.max(w[0]*E,w[1]),D=i%C===0,N=a%A===0,H=n%v===0,G=b?[E,4,4]:[1,1,1],j=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Pt(t,j),j.push(...J(e[0].dims,e[1].dims));let B=["rank","rank"];s&&(j.push(...J(e[2].dims)),B.push("rank")),j.push(...J(r));let Z=X=>{let ee=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ut(t,ee);let fe=b?4:1,L=Ie(e[0].dataType),le=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${L}>`:L}) {
        result[flatIndex] = ${b?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,U=M("x",e[0].dataType,e[0].dims.length,E===3?1:E),V=M("w",e[1].dataType,e[1].dims.length,fe),Q=[U,V],q=K("result",e[0].dataType,r.length,fe);if(s){let me=M("bias",e[2].dataType,e[2].dims.length,fe);Q.push(me),le+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${L}>`:L} {
          return bias[coords.${p?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${lh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(ee).declareVariables(...Q,q)}
        ${le}
        ${Fu(p,D,N,H,s,t,G[0],G[1],G[2],L)}
        ${b?Ma(T,w,L,void 0,!p,v):Da(T,w,L,void 0,!p,v,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${D};${N};${H};${C};${A};${v}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:j}),getShaderSource:Z}}}),Gu,Zi,nr,Hu,Xi,ju,ph,ch,M0=P(()=>{"use strict";te(),lt(),ie(),ae(),Lt(),un(),Gu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Zi=e=>typeof e=="number"?[e,e,e]:e,nr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Hu=(e,t,r,i=1)=>{let a=nr(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Xi=(e,t,r,i,a)=>{a==null&&(a=Hu(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},ju=(e,t,r,i,a,n,s,u,l,p)=>{let c,h,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Xi([t,r,i,1],[u,l,p],1,[a,n,s],e);h=y[0],g=y[1],_=y[2]}else if(Array.isArray(e)){if(!e.every((b,S,x)=>b===x[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Xi([t,r,i,1],[u,l,p],1,[a,n,s],e[0]);h=y[0],g=y[1],_=y[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/a),g=Math.ceil(r/n),_=Math.ceil(i/s);let y=(h-1)*a+u-t,b=(g-1)*n+l-r,S=(_-1)*s+p-i,x=Math.floor(y/2),w=y-x,T=Math.floor(b/2),I=b-T,E=Math.floor(S/2),C=S-E;c={top:T,bottom:I,left:E,right:C,front:x,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:g,outWidth:_}},ph=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,p,c,h;if(s==="channelsLast")[u,l,p,c,h]=e;else if(s==="channelsFirst")[u,h,l,p,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,_,y,b]=t,[S,x,w]=Zi(r),[T,I,E]=Zi(i),C=nr(_,T),A=nr(y,I),v=nr(b,E),{padInfo:D,outDepth:N,outHeight:H,outWidth:G}=ju(a,l,p,c,S,x,w,C,A,v),j=n?g*h:g,B=[0,0,0,0,0];return s==="channelsFirst"?B=[u,j,N,H,G]:s==="channelsLast"&&(B=[u,N,H,G,j]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:p,inWidth:c,inChannels:h,outDepth:N,outHeight:H,outWidth:G,outChannels:j,padInfo:D,strideDepth:S,strideHeight:x,strideWidth:w,filterDepth:_,filterHeight:y,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:A,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:I,dilationWidth:E,inShape:e,outShape:B,filterShape:t}},ch=(e,t,r,i,a,n)=>{let s=n==="channelsLast",u=s?e[0].dims[3]:e[0].dims[1],l=!1,p=[64,1,1],c={x:r.map((w,T)=>T)},h=[Math.ceil(Gu(c.x.map(w=>r[w]))/p[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${h}`);let g=l?s&&u%4!==0?3:4:1,_=O.size(r),y=[{type:12,data:_},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Pt(t,y),y.push(...J(e[0].dims,e[1].dims));let b=["rank","rank"],S=e.length===3;S&&(y.push(...J(e[2].dims)),b.push("rank")),y.push(...J(r));let x=w=>{let T=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ut(t,T);let I=l?4:1,E=Ie(e[0].dataType),C=M("x",e[0].dataType,e[0].dims.length,g===3?1:g),A=M("W",e[1].dataType,e[1].dims.length,I),v=[C,A],D=K("result",e[0].dataType,r.length,I),N="";if(S){let j=M("bias",e[2].dataType,e[2].dims.length,I);v.push(j),N+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${E}>`:E} {
          return bias[${s?Y("coords",4,5):Y("coords",1,5)}${l?"/ 4":""}];
        }`}let H=Ce(g,E),G=Nt(t,H,E);return`
            ${N}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${E} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${E} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${A.getByIndices("aIndices")};
            }
          ${w.registerUniforms(T).declareVariables(...v,D)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${D.offsetToIndices("global_idx")};
              let batch = ${Y("coords",0,C.rank)};
              let d2 = ${s?Y("coords",C.rank-1,C.rank):Y("coords",1,C.rank)};
              let xFRCCorner = vec3<u32>(${s?Y("coords",1,C.rank):Y("coords",2,C.rank)},
              ${s?Y("coords",2,C.rank):Y("coords",3,C.rank)},
              ${s?Y("coords",3,C.rank):Y("coords",4,C.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Y("uniforms.x_shape",1,C.rank):Y("uniforms.x_shape",2,C.rank)};
              let xShapeZ = ${s?Y("uniforms.x_shape",2,C.rank):Y("uniforms.x_shape",3,C.rank)};
              let xShapeW = ${s?Y("uniforms.x_shape",3,C.rank):Y("uniforms.x_shape",4,C.rank)};
              let xShapeU = ${s?Y("uniforms.x_shape",4,C.rank):Y("uniforms.x_shape",1,C.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${E}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<${E}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${E}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${E}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<${E}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${E}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${E}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<${E}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${E}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${E}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = ${E}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${g};${S}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:h[0],y:h[1],z:h[2]},programUniforms:y}),getShaderSource:x}}}),hh,fh,D0=P(()=>{"use strict";te(),ie(),ae(),Lt(),hh=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",p=l?r[3]:r[1],c=p/t.group,h=l&&c>=4?ve(p):1,g=O.size(r)/h,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Pt(t,_),_.push(...J(s,[u[0],u[1],u[2],u[3]/h]));let y=a?["rank","rank","rank"]:["rank","rank"];_.push(...J([r[0],r[1],r[2],r[3]/h]));let b=S=>{let x=K("output",e[0].dataType,r.length,h),w=Ie(x.type.tensor),T=Nt(t,x.type.value,w),I=M("x",e[0].dataType,s.length),E=M("w",e[1].dataType,u.length,h),C=[I,E];a&&C.push(M("b",e[2].dataType,e[2].dims,h));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ut(t,A);let v=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${I.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${I.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...C,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${v}
    ${n}
    ${T}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b}},fh=(e,t,r,i)=>{let a=e.length>2,n=ve(r[3]),s=ve(r[2]),u=O.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Pt(t,h),h.push(...J(l,p,c));let g=(s-1)*t.strides[1]+p[1],_=y=>{let b=K("output",e[0].dataType,c.length,n),S=Ie(b.type.tensor),x=Nt(t,b.type.value,S),w=M("x",e[0].dataType,l.length,n),T=M("w",e[1].dataType,p.length,n),I=[w,T];a&&I.push(M("b",e[2].dataType,e[2].dims,n));let E=a?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ut(t,C),`
  ${y.registerUniforms(C).declareVariables(...I,b)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${g}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${x}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${g};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:_}}}),Ku,qr,Zu,Lr,Na,Qi,Xu,Qu,Pa,N0=P(()=>{"use strict";ie(),R0(),M0(),pn(),D0(),Lt(),dn(),xt(),Ku=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,p=t[0],c=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),h=u.map((g,_)=>g+i[_]+i[_+l]).map((g,_)=>Math.floor((g-c[_]+a[_])/a[_]));return h.splice(0,0,s),h.splice(n?3:1,0,p),h},qr=[2,3,1,0],Zu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Lr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Yr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Na=e=>{let t=on(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Qi=(e,t,r,i)=>{let a=r.format==="NHWC",n=Ku(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let C=[t[0]];if(a){let A=e.kernelCustomData.wT??e.compute(Ue(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),C.push(A)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(fh(C,r,n,i),{inputs:C}):e.compute(hh(C,r,n,i),{inputs:C});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],p=t[0].dims[a?3:1],c=t[1].dims[2],h=t[1].dims[3],g=n[a?1:2],_=n[a?2:3],y=n[a?3:1],b=a&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=n[0],A,v,D,N=[];if(a){let j=e.kernelCustomData.wT??e.compute(Ue(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j),b){let B=u*l*p;A=t[0].reshape([1,C,B]),v=j.reshape([1,B,y]),D=[1,C,y]}else A=t[0].reshape([C,u*l,p]),v=j.reshape([1,p,y]),D=[C,g*_,y];N.push(A),N.push(v)}else A=t[0].reshape([C,p,u*l]),v=t[1].reshape([1,y,p]),D=[C,y,g*_],N.push(v),N.push(A);s&&N.push(t[2]);let H=D[2],G=N[0].dims[N[0].dims.length-1];H<8&&G<8?e.compute(ln(N,r,n,D,a,i),{inputs:N}):e.compute(ei(N,r,n,D,a,i),{inputs:N});return}let S=!0,x=e.kernelCustomData.wT??e.compute(Ue(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let w=[t[0],x];s&&w.push(t[2]);let T=a?g*_:y,I=a?y:g*_,E=c*h*p;e.compute(dh(w,r,n,T,I,E,s,S,i),{inputs:w})},Xu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Lr({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);Qi(e,i,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Qu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Lr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=ph(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(ch(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Pa=(e,t)=>{if(Zu(e.inputs,t),e.inputs[0].dims.length===3)Xu(e,t);else if(e.inputs[0].dims.length===5)Qu(e,e.inputs,t);else{let r=Lr(t,e.inputs);Qi(e,e.inputs,r)}}}),mh,P0=P(()=>{"use strict";te(),lt(),ie(),ae(),mh=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,p=u[3],c=n?ve(l):1,h=n&&p===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/c)*c,_=l-g,y=n?ve(p):1,b=n?p===1?c:y:1,S=O.size(a)/y,x=[Math.ceil(S/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],I=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],E=[t.dilations[0],t.dilations[1]],C=[I[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),I[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],A=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:S},{type:12,data:T},{type:12,data:I},{type:12,data:E},{type:12,data:C},{type:6,data:A},{type:12,data:g},{type:12,data:l},{type:12,data:p},...J(e[0].dims,e[1].dims)];i&&(v.push(...J(e[2].dims)),w.push("rank")),v.push(...J(a));let D=N=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:I.length},{name:"dilations",type:"u32",length:I.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Ie(e[0].dataType),j=n?1:2,B=n?2:3,Z=n?3:1,X=M("W",e[1].dataType,e[1].dims.length,b),ee=M("Dy",e[0].dataType,e[0].dims.length,c),fe=[ee,X];i&&fe.push(M("bias",e[2].dataType,[a[Z]].length,y));let L=K("result",e[0].dataType,a.length,y),le=()=>{let Q="";if(h)c===4?Q+=`
        let xValue = ${ee.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Q+=`
          dotProd = dotProd + dot(vec4<${G}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Q+=`
          dotProd = dotProd + dot(vec4<${G}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}, ${ee.getByOffset("x_offset + 2u")}, ${ee.getByOffset("x_offset + 3u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Q+=`
                  let xValue = ${n?ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ee.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Q+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let q=0;q<c;q++)Q+=`
            let wValue${q} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${q}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${q}] * wValue${q};`;return Q},U=()=>{if(_===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Q="";if(c===1){Q+="dotProd = dotProd";for(let q=0;q<_;q++)Q+=`
            + ${ee.getByOffset(`x_offset + ${q}`)} * ${X.getByOffset(`w_offset + ${q}`)}`;Q+=";"}else if(c===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);Q+=`
          let xValue = ${ee.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Q},V=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",Z)};
            let r = ${L.indicesGet("outputIndices",j)};
            let c = ${L.indicesGet("outputIndices",B)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${L.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${j}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${B}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${le()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(H).declareVariables(...fe,L)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${V}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${b}${y}${h}${_}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:D}}}),Yu,Ju,el,Yi,gh,tl,Ji,rl,yh,U0=P(()=>{"use strict";P0(),Lt(),xt(),Yu=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Ju=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},el=(e,t,r,i,a,n,s,u,l,p)=>{let c=e.length-2,h=p.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],_=t[u?3:1]*a;for(let y=0,b=e.length-c-(u?1:0);y<c;++y,++b){let S=e[b],x=h?S*s[y]:p[y],w=Yu(S,s[y],n[y],t[b],r[y],x);Ju(w,i,n,y,y+c),h&&p.push(s[y]*(S-1)+l[y]+(t[b]-1)*r[y]+1-n[y]-n[y+c])}p.splice(0,0,g),p.splice(u?3:1,0,_)},Yi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let p=e.strides.slice();if(p.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;p=new Array(h).fill(1)}el(u,r,l,e.autoPad,e.group,a,p,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:p}),c},gh=e=>{let t=on(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,p=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},tl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ji=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Ue(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(mh(n,r,i),{inputs:n})},rl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let p=Yi({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);Ji(e,i,p,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},yh=(e,t)=>{if(tl(e.inputs,t),e.inputs[0].dims.length===3)rl(e,t);else{let r=Yi(t,e.inputs);Ji(e,e.inputs,r)}}}),il,_h,bh,q0=P(()=>{"use strict";te(),ie(),xe(),ae(),il=(e,t,r,i)=>{let a=O.size(t),n=t.length,s=M("input",e,n),u=K("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=O.normalizeAxis(l,n),c=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=Y("uniforms.input_shape","uniforms.axis",n),y=i.reverse?g+(i.exclusive?" + 1":""):"0",b=i.reverse?_:g+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...J(t,t)]}),getShaderSource:c}},_h=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(il(i,r,a,t),{inputs:[0]})},bh=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),al,nl,sl,wh,$h,L0=P(()=>{"use strict";te(),ie(),xe(),ae(),al=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},nl=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},sl=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",p=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,p,p,n/p**2]:[r,i,a,n/p**2,p,p],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,p,p,n/p**2,i,a]:[r,n/p**2,p,p,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,_=e.dataType,y=M("a",_,g),b=K("output",_,g),S=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(y,b)}

  ${nl(u,g,y,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let w=l?[r,i*p,a*p,n/p**2]:[r,n/p**2,i*p,a*p],T=O.size(w),I=h.dims,E=O.sortBasedOnPerm(I,u);return{outputs:[{dims:w,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...J(I,E)]}},getShaderSource:S}},wh=(e,t)=>{al(e.inputs),e.compute(sl(e.inputs[0],t))},$h=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),st,sr,Wr,ea,yt,ol,ul,ll,ta,ra,ia,dl,pl,aa,cl,vh,xh,W0=P(()=>{"use strict";te(),ie(),xe(),ae(),st=256,sr=512,Wr=2*Math.PI,ea=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},yt=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},ol=(e,t,r,i,a)=>{let n=r/e,s=sr-i,u=p=>`smem[${s}u + base + ${p*t}u]`,l=`  for (var t = local_idx; t < ${n}u; t += ${st}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let p=0;p<e;p++){let c=`${i}u + t + ${p*n}u`;if(p===0)l+=`    leg[0] = smem[${c}];
`;else{let h=a*Wr*p/(e*t);l+=`    { let a = ${yt(h)} * angleUnit; leg[${p}] = cmul(smem[${c}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)l+=`    ${u(0)} = leg[0] + leg[1];
    ${u(1)} = leg[0] - leg[1];
`;else if(e===4){let p=a<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${p};
`,l+=`    ${u(0)} = evenSum + oddSum;
    ${u(1)} = evenDiff + oddRot;
`,l+=`    ${u(2)} = evenSum - oddSum;
    ${u(3)} = evenDiff - oddRot;
`}else for(let p=0;p<e;p++){let c=["leg[0]"];for(let h=1;h<e;h++){let g=a*Wr*(h*p)/e,_=yt(Math.cos(g)),y=yt(Math.sin(g));c.push(`vec2<f32>(leg[${h}].x*${_} - leg[${h}].y*${y}, leg[${h}].x*${y} + leg[${h}].y*${_})`)}l+=`    ${u(p)} = ${c.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},ul=(e,t,r)=>{let i="",a=1,n=0;for(let s of e)i+=ol(s,a,t,n,r),a*=s,n=sr-n;return{code:i,resultOffset:n}},ll=(e,t,r,i,a)=>{let n=e.dims,s=n.length,u=n[s-1],l=n[t],p=r&&i?(l-1)*2:l;a!==void 0&&(p=a);let c=r&&i?1:2,h=i&&!r?Math.floor(p/2)+1:p,g=n.slice();g[t]=h,g[s-1]=c;let _=1;for(let b=t+1;b<s-1;b++)_*=n[b];let y=O.size(n)/u/l;return{dataType:e.dataType,outputDims:g,length:p,signalLength:l,inner:_,batch:y,inputComponents:u,outputComponents:c,outputLength:h,inverse:r,onesided:i}},ta=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),ra=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],ia=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),dl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:n,onesided:s}=e,u=Te(t),l=n?1:-1,p=n?1/r:1,c=ea(r),h=g=>{let _=M("x",t,[1]),y=K("y",t,[1]),b=E=>{let C=`inBase + (${E}) * uniforms.inner * ${i}u`,A=`f32(${_.getByOffset(C)})`,v=i===2?`f32(${_.getByOffset(`${C} + 1u`)})`:"0.0";return`vec2<f32>(${A}, ${v})`},S;if(n&&s){let E=Math.floor(r/2)+1,C=r%2===0?`select(provided, provided - 1u, provided == ${E}u)`:"provided";S=`
    let provided = min(uniforms.signalLength, ${E}u);
    for (var i = local_idx; i < ${r}u; i += ${st}u) {
      if (i < provided) { smem[i] = ${b("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${C}; k += ${st}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else S=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${st}u) {
      if (i < loadCount) { smem[i] = ${b("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:x,resultOffset:w}=ul(c,r,l),T=p===1?`smem[${w}u + i]`:`smem[${w}u + i] * ${yt(p)}`,I=a===2?y.setByOffset("off + 1u",`${u}(v.y)`):"";return`
  ${ia(g,_,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*sr}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(st)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    ${S}
${x}    for (var i = local_idx; i < uniforms.outputLength; i += ${st}u) {
      let v = ${T};
      let off = outBase + i * uniforms.inner * ${a}u;
      ${y.setByOffset("off",`${u}(v.x)`)}
      ${I}
    }
  }`};return{name:"DFT",shaderCache:{hint:ta(e,"fft"),inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ra(e),dispatchGroup:{x:e.batch}})}},pl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:n,onesided:s}=e,u=Te(t),l=n?1:-1,p=n?1/r:1,c=h=>{let g=M("x",t,[1]),_=K("y",t,[1]),y=T=>{let I=`inBase + (${T}) * uniforms.inner * ${i}u`,E=`f32(${g.getByOffset(I)})`,C=i===2?`f32(${g.getByOffset(`${I} + 1u`)})`:"0.0";return`vec2<f32>(${E}, ${C})`},b=n&&s?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${y("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${y("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${y("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,S=`
      let angle = ${yt(l*Wr)} * f32(knMod) / ${yt(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,x=a===2?_.setByOffset("off + 1u",`${u}(v.y)`):"",w=p===1?"acc":`acc * ${yt(p)}`;return`
  ${ia(h,g,_)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${b}
  ${h.mainStart(st)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${st}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${S}
      }
      let v = ${w};
      let off = outBase + k * uniforms.inner * ${a}u;
      ${_.setByOffset("off",`${u}(v.x)`)}
      ${x}
    }
  }`};return{name:"DFT",shaderCache:{hint:ta(e,"direct"),inputDependencies:["type"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ra(e),dispatchGroup:{x:e.batch}})}},aa=e=>{if(!e||e.dataType===0)return;if(O.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},cl=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},vh=(e,t)=>{cl(e.inputs);let r=e.inputs[0],i=r.dims.length,a=t.inverse!==0,n=t.onesided!==0,s=aa(e.inputs[1]);if(s!==void 0&&s<=0)throw new Error("dft_length must be greater than zero.");let u=O.normalizeAxis(aa(e.inputs[2])??t.axis,i);if(u===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(a&&n&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=ll(r,u,a,n,s);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let p=l.length<=sr&&ea(l.length)!==void 0?dl(l):pl(l);e.compute(p,{inputs:[0]})},xh=e=>he({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Vr,or,na,hl,fl,ml,gl,sa,yl,Sh,kh,V0=P(()=>{"use strict";te(),ie(),xe(),ae(),Vr="[a-zA-Z]|\\.\\.\\.",or="("+Vr+")+",na="^"+or+"$",hl="("+or+",)*"+or,fl="^"+hl+"$",ml=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},gl=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(fl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,s)=>{let u=e[s].dims.slice();if(!n.match(RegExp(na)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,u,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,s])=>s.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(or)))throw new Error("Invalid RHS");(a=i.match(RegExp(Vr,"g")))==null||a.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(n);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(na))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Vr,"g")),p=new ml(i);return l==null||l.forEach((c,h)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let y=String.fromCharCode(48+_);p.addSymbol(y,h+_),this.addSymbol(y,r[u++],i)}}else p.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),p}},sa=e=>e+"_max",yl=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,c)=>M(`input${c}`,t,p)),n=O.size(i),s=K("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),l=p=>{let c=[],h="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",y=[],b=[],S=[],x=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((I,E)=>{var C;if(r.rhs.symbolToIndices.has(E)){let A=(C=r.rhs.symbolToIndices.get(E))==null?void 0:C[0];A!==void 0&&r.lhs.forEach((v,D)=>{if(I.inputIndices.includes(D)){let N=v.symbolToIndices.get(E);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(H=>{c.push(`${a[D].indicesSet(`input${D}Indices`,H,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,v)=>{if(I.inputIndices.includes(v)){let D=A.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(N=>{y.push(`${a[v].indicesSet(`input${v}Indices`,N,`${E}`)}`)}),x.push(`prod *= ${a[v].getByIndices(`input${v}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${sa(E)}; ${E}++) {`),S.push("}")});let T=w?[...c,`let sum = ${a.map((I,E)=>I.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,g,...b,...y,h,...x,_,...S];return`
            ${p.registerUniforms(u.map(I=>({name:`${sa(I)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((I,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});p.push({type:12,data:n});let c=e.map((h,g)=>[...J(h)]).reduce((h,g)=>h.concat(g),p);return c.push(...J(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},Sh=(e,t)=>{let r=new gl(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(yl(a,e.inputs[0].dataType,r,i))},kh=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),_l,oa,bl,wl,Th,F0=P(()=>{"use strict";te(),ie(),ae(),_l=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},oa=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},bl=(e,t)=>e.length>t.length?oa(e,t):oa(t,e),wl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=bl(t,r),a=e[0].dataType,n=a===9||O.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),p=h=>{let g=M("input",a,t.length,s),_=K("output",a,i.length,u),y;if(a===9){let b=(S,x,w="")=>`
          let outputIndices${x} = ${_.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${g.broadcastedIndicesToOffset(`outputIndices${x}`,_)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${S}[${x}] = ${w}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:l},...J(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Th=e=>{_l(e.inputs),e.compute(wl(e.inputs),{inputs:[0]})}}),$l,Ih,G0=P(()=>{"use strict";te(),ie(),ae(),sn(),$l=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),a=i%4===0,n=s=>{let u=M("x",t,[1],4),l=M("bias",t,[1],4),p=K("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,p)}

    ${Ba(Te(t))}

    ${s.mainStart(Kt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",Ra("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Kt/4)}})}},Ih=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Gc(e):e.compute($l(e.inputs))}}),vl,xl,Eh,Ch,H0=P(()=>{"use strict";te(),ie(),xe(),ae(),vl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},xl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,p=Math.ceil(O.size(s)/l),c=[{type:12,data:p},{type:6,data:u},{type:12,data:n},...J(e[0].dims,e[1].dims,s)],h=g=>{let _=M("data",e[0].dataType,e[0].dims.length,l),y=M("inputIndices",e[1].dataType,e[1].dims.length),b=K("output",e[0].dataType,s.length,l),S=w=>{let T=i.length,I=`var indicesIndices${w}  = ${y.type.indices}(0);`;for(let E=0;E<T;E++)I+=`${T>1?`indicesIndices${w}[${E}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${E}]`:`outputIndices${w}`};`;I+=`
          var idx${w} = ${y.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${_.type.indices};
        `;for(let E=0,C=0;E<a;E++)E===n?(I+=`${a>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = u32(idx${w});`,C+=T):(I+=`${a>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${C}]`:`outputIndices${w}`};`,C++);return I},x;if(e[0].dataType===9){let w=(T,I,E="")=>`
          let outputIndices${I} = ${b.offsetToIndices(`outputOffset + ${I}u`)};
          ${S(I)};
          let offset${I} = ${_.indicesToOffset(`dataIndices${I}`)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${T}[${I}] = ${E}(${_.getByOffset(`index${I}`)}[component${I}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,y,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:h}},Eh=e=>he({axis:e.axis}),Ch=(e,t)=>{let r=e.inputs;vl(r),e.compute(xl(e.inputs,t))}}),Sl,zh,Ah,j0=P(()=>{"use strict";te(),ie(),ae(),Sl=(e,t,r,i,a,n,s,u,l)=>{let p=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];p.push(...J(t.dims,c));let h=g=>{let _=M("indices_data",t.dataType,t.dims.length),y=K("input_slice_offsets_data",12,1,1),b=[_,y],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},zh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=O.sizeToDimension(n,n.length-1),l=O.sizeFromDimension(i,t.batchDims+s),p=O.sizeToDimension(i,t.batchDims),c=O.sizeFromDimension(i,t.batchDims),h=u/p,g=new Array(s),_=l;for(let I=0;I<s;++I)g[s-1-I]=_,_*=i[t.batchDims+s-1-I];let y=Sl(e,r[1],g,t.batchDims,i,u,h,c,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=n.slice(0,-1).concat(i.slice(b)),x=O.size(S),w=[{type:12,data:x},{type:12,data:l},...J(r[0].dims,y.dims,S)],T=I=>{let E=M("data",r[0].dataType,r[0].dims.length),C=M("slice_offsets",12,y.dims.length),A=K("output",r[0].dataType,S.length);return`
          ${I.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,C,A)}
            ${I.mainStart()}
            ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],y]})},Ah=e=>({batchDims:e.batch_dims,cacheKey:""})}),kl,Tl,Oh,Bh,K0=P(()=>{"use strict";te(),ie(),xe(),ae(),kl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Tl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.gatherAxis,a),s=O.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=O.size(u),p=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...J(...e.map((_,y)=>_.dims),u)],g=_=>{let y=M("data",e[0].dataType,e[0].dims.length),b=M("inputIndices",e[1].dataType,e[1].dims.length),S=M("scales",e[2].dataType,e[2].dims.length),x=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=K("output",p,u.length),T=[y,b,S];x&&T.push(x);let I=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(I).declareVariables(...T,w)}
        ${_.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Te(p)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,y)=>y!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:p}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},Oh=(e,t)=>{let r=e.inputs;kl(r,t),e.compute(Tl(e.inputs,t))},Bh=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Il,El,Rh,Mh,Z0=P(()=>{"use strict";te(),ie(),xe(),ae(),Il=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},El=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,a),l=r[u],p=n.slice(0),c=O.size(p),h=M("input",i,a),g=M("indicesInput",s,n.length),_=K("output",i,p.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...J(r,n,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,_)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Rh=e=>he({axis:e.axis}),Mh=(e,t)=>{let r=e.inputs;Il(r),e.compute(El(e.inputs,t))}}),Cl,zl,Dh,Nh,X0=P(()=>{"use strict";te(),ie(),ae(),Cl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},zl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Ap.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,p=Math.ceil(n/l),c=Math.ceil(a/l),h=!0,g=O.size(u),_=[{type:12,data:h?p:g},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(_.push(...J(e[2].dims)),y.push("rank")),_.push(...J(u));let b=x=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",I=M("a",e[0].dataType,e[0].dims),E=M("b",e[1].dataType,e[1].dims),C=I.type.value,A=null,v=[I,E];e.length===3&&(A=M("c",e[2].dataType,e[2].dims.length),v.push(A));let D=K("output",e[0].dataType,u.length);v.push(D);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(N).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${C}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=x=>{let w=M("a",e[0].dataType,e[0].dims),T=M("b",e[1].dataType,e[1].dims),I=null,E=[w,T];e.length===3&&(I=M("c",e[2].dataType,e[2].dims.length),E.push(I));let C=K("output",e[0].dataType,u.length);E.push(C);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(A).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${x.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${N}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:p*c},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b}},Dh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Nh=(e,t)=>{Cl(e.inputs),e.compute(zl(e.inputs,t))}}),rt,ot,Et,Ct,Al,Ol,Bl,Rl,Ml,Dl,Nl,Pl,Ph,Uh,Q0=P(()=>{"use strict";te(),ie(),xe(),ae(),[rt,ot,Et,Ct]=[0,1,2,3],Al=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ol=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Bl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Rl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ml=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Dl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rt}] = batch;
     indices[${ot}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Et}] = u32(r);
            indices[${Ct}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Et}] = u32(clamp(r, 0, H - 1));
          indices[${Ct}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Et}] = gs_reflect(r, border[1], border[3]);
          indices[${Ct}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Nl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rt}], indices[${ot}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rt}], indices[${ot}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rt}], indices[${ot}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rt}], indices[${ot}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rt}], indices[${ot}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rt}], indices[${ot}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Pl=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=M("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rt,ot,Et,Ct]=[0,3,1,2]);let s=K("output",e[0].dataType,n.length),u=r.type.value,l=O.size(n),p=[{type:12,data:l},...J(e[0].dims,i,n)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Ol}
  ${Bl(u)}
  ${Rl(t)}
  ${Ml(t)}
  ${Dl(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Et}]);
      let W_in = i32(uniforms.x_shape[${Ct}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${rt}], indices[${Et}], indices[${Ct}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Nl(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=O.size(n);return{outputs:[{dims:n,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:p}},getShaderSource:c}},Ph=(e,t)=>{Al(e.inputs),e.compute(Pl(e.inputs,t))},Uh=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ze,Ul,qh,ua,ql,mr,Lh,Wh=P(()=>{"use strict";te(),ie(),xe(),tn(),nn(),ae(),xt(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ul=(e,t)=>{let r=e[0],i=ze(e,1),a=ze(e,2),n=ze(e,3),s=ze(e,4),u=ze(e,5),l=ze(e,6),p=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=h,y=0,b=0,S=Math.floor(g/t.numHeads);if(l&&p&&O.size(l.dims)&&O.size(p.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==t.numHeads||p.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],b=l.dims[2]}else if(l&&O.size(l.dims)||p&&O.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(n&&O.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=y+_,T=0;if(s&&O.size(s.dims)>0){T=8;let A=s.dims;throw A.length===1?A[0]===c?T=1:A[0]===3*c+2&&(T=3):A.length===2&&A[0]===c&&A[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let I=!1,E=g;if(a&&O.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],I=!0}}let C=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:C,passPastInKv:I,qkvFormat:x}},qh=e=>he({...e}),ua=he({perm:[0,2,1,3]}),ql=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=O.size(u),p=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=h=>{let g=K("qkv_with_bias",t.dataType,u),_=M("qkv",t.dataType,u),y=M("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(b).declareVariables(_,y,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},mr=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=ql(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Ue(l,ua.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Ue(l,ua.perm),{inputs:[l],outputs:[-1]})[0]},Lh=(e,t)=>{let r=Ul(e.inputs,t),i=e.inputs[0],a=ze(e.inputs,1),n=ze(e.inputs,2),s=ze(e.inputs,3),u=ze(e.inputs,4),l=ze(e.inputs,5),p=ze(e.inputs,6),c=ze(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let h=a&&n&&a.dims.length===4&&n.dims.length===4,g=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return br(e,g,a,n,u,void 0,p,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let _=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),y=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);br(e,g,_,y,u,void 0,p,c,l,r)}}),Ll,Wl,Vl,Fl,Ua,Vh,Fh,Gh=P(()=>{"use strict";te(),ie(),xe(),ae(),Ll=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Wl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},Vl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Fl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ua=(e,t)=>{let r=e[0].dims,i=O.size(r),a=e[0].dataType,n=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=M("input",a,r.length),l=new Array(t.numOutputs),p=[],c=[],h=0,g=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){h+=t.splitSizes[y],l[y]=h;let b=r.slice();b[n]=t.splitSizes[y],c.push(b),s[y]=K(`output${y}`,a,b.length),p.push({dims:c[y],dataType:e[0].dataType})}g.push({type:12,data:l},...J(r,...c));let _=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${Vl(l.length)}
  ${Fl(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},Vh=(e,t)=>{Ll(e.inputs);let r=e.inputs.length===1?t:Wl(e.inputs,t);e.compute(Ua(e.inputs,r),{inputs:[0]})},Fh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),Gl,ti,Hh,jh=P(()=>{"use strict";te(),ie(),xe(),ae(),Gl=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!O.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],p=r.dims[r.dims.length-2],c=a.dims[0],h=O.sizeFromDimension(r.dims,1)/p,g=u===0?a.dims[1]*2:h/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(p>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},ti=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],p=u/l,c=e[2].dims[1],h=a===0?c*2:p/i,g=new Array(s,l,p/h,h-c),_=O.computeStrides(g),y=[{type:1,data:n},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[u,p,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...J(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let x=M("input",e[0].dataType,e[0].dims.length),w=M("position_ids",e[1].dataType,e[1].dims.length),T=M("cos_cache",e[2].dataType,e[2].dims.length),I=M("sin_cache",e[3].dataType,e[3].dims.length),E=K("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(x,w,T,I,E)}

        ${S.mainStart(Kt)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",K("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/Kt)},programUniforms:y})}},Hh=(e,t)=>{Gl(e.inputs,t),e.compute(ti(e.inputs,t))}}),Hl,jl,la,Kl,Kh,Y0=P(()=>{"use strict";xe(),te(),nn(),Wh(),Gh(),xt(),jh(),ae(),Hl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],p=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=p,g=0,_=!i||i.dims.length===0,y=Math.floor(_?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);_&&(c=y*t.numHeads);let b=n&&n.dims.length!==0,S=s&&s.dims.length!==0;if(b&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=n.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let w=0,T=!1,I=t.kvNumHeads?y*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=E.dims.reduce((A,v)=>A*v,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let A=0;A<E.dims.length;A++)if(E.dims[A]!==1&&E.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${E.dims[A]}.`)}return{batchSize:l,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:I,headSize:y,vHeadSize:Math.floor(I/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:x}},jl=he({perm:[0,2,1,3]}),la=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Ue(i,jl.perm),{inputs:[i],outputs:[-1]})[0]),i},Kl=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],p=c=>{let h=M("seq_lens",r.dataType,r.dims),g=M("total_seq_lens",i.dataType,i.dims),_=K("pos_ids",a,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(h,g,_)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p}},Kh=(e,t)=>{var I;if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=Hl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((I=e.inputs[1])==null?void 0:I.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,_,y]=!a&&!n?e.compute(Ua([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],b,S;if(t.doRotary){let E=e.compute(Kl(r.batchSize,r.sequenceLength,l,p),{inputs:[l,p],outputs:[-1]})[0],C=e.inputs[7],A=e.inputs[8],v=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),D=[g,E,C,A],N=[-1];b=e.compute(ti(D,v),{inputs:D,outputs:N})[0],D.splice(0,1,_);let H=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(ti(D,H),{inputs:D,outputs:N})[0]}let x=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:g,void 0,0),w=la(e,t.doRotary?S:_,r),T=la(e,y,r);br(e,x,w,T,void 0,void 0,s,u,void 0,r,l,p)}}),da,Zl,Xl,Zh,J0=P(()=>{"use strict";te(),ie(),xt(),ae(),da=(e,t,r,i,a,n,s,u)=>{let l=ve(n),p=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=a*s,g=64;h===1&&(g=256);let _=[a,s,n/l],y=[a,s,2],b=["rank","type","type"],S=[];S.push(...J(_,y));let x=w=>{let T=M("x",t.dataType,3,l),I=M("scale",r.dataType,r.dims),E=M("bias",i.dataType,i.dims),C=K("output",1,3,2),A=[T,I,E,C];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${w.declareVariables(...A)}
  ${w.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${vt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${vt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},Zl=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=O.sizeFromDimension(i,n),p=ve(l),c=O.size(a)/p,h=da(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/p],_=[s,u],y=["type","none"],b=S=>{let x=M("x",t[0].dataType,g.length,p),w=M("scale_shift",1,_.length,2),T=K("output",t[0].dataType,g.length,p),I=[x,w,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...I)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...J(g,_,g)]}),getShaderSource:b},{inputs:[t[0],h]})},Xl=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=O.sizeFromDimension(i,1)/s,l=ve(s),p=O.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],g=!1,_=[0,i.length-1];for(let x=0;x<i.length-2;x++)g=g||i[x+1]!==1,_.push(x+1);g=g&&i[i.length-1]!==1;let y=g?e.compute(Ue(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,w)=>i[_[w]])),b=da(e,y,t[1],t[2],n,u,s,r.epsilon),S=x=>{let w=Ie(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,I=A=>{let v=A===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${D}(scale.${v}))`;case 2:return`vec2<${w}>(${D}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${w}>(${D}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=M("input",t[0].dataType,t[0].dims,l),C=K("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${I(0)}, ${I(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],b]})},Zh=(e,t)=>{t.format==="NHWC"?Xl(e,e.inputs,t):Zl(e,e.inputs,t)}}),Ql,Yl,Xh,ey=P(()=>{"use strict";te(),ie(),ae(),Ql=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Yl=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=O.normalizeAxis(t.axis,a.length),p=O.sizeToDimension(a,l),c=O.sizeFromDimension(a,l),h=O.size(n.dims),g=s?O.size(s.dims):0;if(h!==c||s&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let _=[];for(let E=0;E<a.length;++E)E<l?_.push(a[E]):_.push(1);let y=ve(c),b=["type","type"],S=[{type:12,data:p},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&b.push("type");let x=r>1,w=r>2,T=E=>{let C=Ie(e[0].dataType),A=[M("x",e[0].dataType,e[0].dims,y),M("scale",n.dataType,n.dims,y)];s&&A.push(M("bias",s.dataType,s.dims,y)),A.push(K("output",e[0].dataType,u,y)),x&&A.push(K("mean_data_output",1,_)),w&&A.push(K("inv_std_output",1,_));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(v).declareVariables(...A)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${za("f32",y)};
    var mean_square_vector = ${za("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ht(C,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vt("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vt("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ht(C,y,"x[j + offset]")};
      let f32scale = ${Ht(C,y,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Ht(C,y,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},I=[{dims:u,dataType:e[0].dataType}];return x&&I.push({dims:_,dataType:1}),w&&I.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:S}),getShaderSource:T}},Xh=(e,t)=>{Ql(e.inputs),e.compute(Yl(e.inputs,t,e.outputCount))}}),Jl,Qh,ty=P(()=>{"use strict";ie(),dn(),pn(),Jl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Qh=e=>{Jl(e.inputs);let t=jt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(ln(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),p=[1,n,r],c=[u,l];e.compute(ei(c,{activation:""},t,p),{inputs:c})}else e.compute(ei(e.inputs,{activation:""},t))}}}),ed,td,rd,Yh,Jh,ry=P(()=>{"use strict";te(),ie(),xe(),ae(),ed=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,p=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(O.size(l)!==p)throw new Error("zeroPoints input size error.")}},td=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),p=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),g=ve(p),_=ve(s),y=u.concat([a,s]),b=a>1&&s/_%2===0?2:1,S=O.size(y)/_/b,x=64,w=[],T=[l,a,n/h],I=O.convertShape(e[1].dims).slice();I.splice(-1,1,p/g),w.push(...J(T)),w.push(...J(I)),w.push(...J(e[2].dims)),e.length===4&&w.push(...J(O.convertShape(e[3].dims)));let E=[l,a,s/_];w.push(...J(E));let C=A=>{let v=T.length,D=M("a",e[0].dataType,v,h),N=M("b",12,I.length,g),H=M("scales",e[2].dataType,e[2].dims.length),G=[D,N,H],j=e.length===4?M("zero_points",12,e[3].dims.length):void 0;j&&G.push(j);let B=E.length,Z=K("output",e[0].dataType,B,_),X=Ie(e[0].dataType),ee=(()=>{switch(h){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${h}-component is not supported.`)}})(),fe=Math.floor(32/t.bits),L=Math.floor(fe/8),le=()=>{let Q="";for(let q=0;q<L;q++){let me=q*t.bits*4,qe=me+t.bits;Q+=`
          // reuse a data (pass ${q})
            var input_offset${q>0?q:""} = ${q===0?D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${q>0?q:""}: ${ee};
            for (var j${q>0?q:""}: u32 = 0; j${q>0?q:""} < ${8/h}; j${q>0?q:""}++) {
              a_data${q>0?q:""}[j${q>0?q:""}] = ${D.getByOffset(`input_offset${q>0?q:""}`)};
              input_offset${q>0?q:""}++;
            }
          `;for(let Se=0;Se<_*b;Se++)Q+=`
            b_value = ${g===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${me}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${qe}u) & b_mask);`}
            b_quantized_values = ${ee}(${Array.from({length:4},(Ae,Oe)=>`${X}(b_value_lower[${Oe}]), ${X}(b_value_upper[${Oe}])`).join(", ")});
            b_dequantized_values = ${h===1?`${ee}(${Array.from({length:8},(Ae,Oe)=>`(b_quantized_values[${Oe}] - ${j?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${ee}(${Array(8).fill(`${j?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Se/_)}]${_>1?`[${Se%_}]`:""} += ${Array.from({length:8/h},(Ae,Oe)=>`${h===1?`a_data${q>0?q:""}[${Oe}] * b_dequantized_values[${Oe}]`:`dot(a_data${q>0?q:""}[${Oe}], b_dequantized_values[${Oe}])`}`).join(" + ")};
          `}return Q},U=()=>{let Q=`
            var col_index = col * ${_};
            ${j?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${X}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let q=0;q<_*b;q++)Q+=`
            let scale${q} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${j?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${j.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${X}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Q},V=()=>{let Q=`col_index = col * ${_};`;for(let q=0;q<_*b;q++)Q+=`
            let b${q}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Q+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ee};
            var b_dequantized_values: ${ee};`,Q};return`
        var<workgroup> workgroup_shared: array<${Z.type.value}, ${b*x}>;
        ${A.declareVariables(...G,Z)}
        ${A.mainStart([x,1,1])}
          let output_indices = ${Z.offsetToIndices(`(global_idx / ${x}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${U()}
            for (var word: u32 = 0; word < ${p}; word += ${g}) {
              ${V()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${le()}
                word_offset += ${fe/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${_};${b};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:C}},rd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),p=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),g=ve(p),_=u.concat([a,s]),y=128,b=s%8===0?8:s%4===0?4:1,S=y/b,x=Math.floor(32/t.bits),w=S*g*x,T=w/h,I=w/t.blockSize,E=O.size(_)/b,C=[],A=[l,a,n/h],v=O.convertShape(e[1].dims).slice();v.splice(-1,1,p/g),C.push(...J(A)),C.push(...J(v)),C.push(...J(e[2].dims)),e.length===4&&C.push(...J(O.convertShape(e[3].dims)));let D=[l,a,s];C.push(...J(D));let N=H=>{let G=A.length,j=M("a",e[0].dataType,G,h),B=M("b",12,v.length,g),Z=M("scales",e[2].dataType,e[2].dims.length),X=[j,B,Z],ee=e.length===4?M("zero_points",12,e[3].dims.length):void 0;ee&&X.push(ee);let fe=D.length,L=K("output",e[0].dataType,fe),le=Ie(e[0].dataType),U=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${le}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${le}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${le}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${le}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${j.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${S}>, ${b}>;
        ${H.declareVariables(...X,L)}
        ${H.mainStart([S,b,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${I} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${j.getByIndices(`${j.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${j.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${I} + local_id.x;
            ${ee?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${le}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${le}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${Z.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${B.getByIndices(`${B.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let V=Math.floor(x/8),Q="";for(let q=0;q<V;q++){let me=q*t.bits*4,qe=me+t.bits;Q+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${me}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${qe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${le}>(${Array.from({length:4},(Se,Ae)=>`${le}(b_value_lower[${Ae}]), ${le}(b_value_upper[${Ae}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${le}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,Ae)=>`${`dot(a_data${Ae}, b_dequantized_values[${Ae}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return Q})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${L.setByIndices(`${L.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:E},programUniforms:C}),getShaderSource:N}},Yh=(e,t)=>{ed(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(rd(e.inputs,t)):e.compute(td(e.inputs,t))},Jh=e=>he(e)}),id,ad,nd,sd,od,ud,ld,dd,ef,iy=P(()=>{"use strict";te(),ie(),ae(),id=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ad=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${Y("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},nd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},sd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
                  k = i32(${Y("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},od=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${Y("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
                  k -= i32(${Y("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ud=(e,t,r)=>{switch(r.mode){case 0:return ad(e,t,r.pads.length);case 1:return nd(e,t,r.pads.length);case 2:return sd(e,t,r.pads.length);case 3:return od(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ld=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=O.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...J(e[0].dims,r));let u=["rank"],l=p=>{let c=K("output",e[0].dataType,r.length),h=M("x",e[0].dataType,i.length),g=h.type.value,_=ud(c,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?g:"f32"}),`
            ${p.registerUniforms(y).declareVariables(h,c)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:n}),getShaderSource:l}},dd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},ef=(e,t)=>{id(e.inputs);let r=dd(e.inputs,t);e.compute(ld(e.inputs,r),{inputs:[0]})}}),ur,pa,ca,ha,fa,pd,cd,ma,ga,tf,rf,ya,af,nf,_a,sf,of,uf,lf,ay=P(()=>{"use strict";Ve(),te(),ie(),ae(),ur=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},pa=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],p=t.pads.slice();Yr.adjustPoolAttributes(r,a,s,u,l,p);let c=Yr.computePoolOutputShape(r,a,u,l,s,p,t.autoPad,t.ceilMode),h=Object.assign({},t);n?Object.assign(h,{kernelShape:s,strides:u,pads:p,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:p,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[h,i?g:c]},ca=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),a=O.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(p+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:p},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(b+S),n.push({type:12,data:_},{type:12,data:y},{type:12,data:b},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((p,c)=>p+c);return[n,s,!!l,!1,!1]}},ha=(e,t,r,i,a,n,s,u,l,p,c,h)=>{let g=a.format==="NHWC",_=t.type.value,y=K("output",t.type.tensor,i);if(a.kernelShape.length<=2){let b="",S="",x="",w=r-(g?2:1);if(c?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let T=r-(g?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${_}(${u});
              var pad = 0;
              ${S}
              ${b}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=a.kernelShape.length,S=a.pads.length,x="";return p?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${_}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${Y("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${Y("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Y("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${Y("uniforms.pads","j - 2u",S)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},fa=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,pd=e=>`${fa(e)};${e.countIncludePad}`,cd=e=>`${fa(e)};${e.storageOrder};${e.dilations}`,ma=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ga=(e,t,r,i)=>{let[a,n]=pa(t,i,r),s=M("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",p="";a.countIncludePad?p+=`value /= ${u}(uniforms.kernelSize);`:p+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,g,_,y]=ca(n,a);c.push(...J(t.dims,n));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:S=>ha(S,s,t.dims.length,n.length,a,l,p,0,h,g,_,y)}},tf=e=>{let t=e.count_include_pad!==0,r=ma(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:pd(i)}},rf=(e,t)=>{ur(e.inputs),e.compute(ga("AveragePool",e.inputs[0],!1,t))},ya={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},af=e=>{let t=e.format;return{format:t,...ya,cacheKey:t}},nf=(e,t)=>{ur(e.inputs),e.compute(ga("GlobalAveragePool",e.inputs[0],!0,t))},_a=(e,t,r,i)=>{let[a,n]=pa(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=M("x",t.dataType,t.dims.length),p=["rank"],[c,h,g,_,y]=ca(n,a);return c.push(...J(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:b=>ha(b,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,h,g,_,y)}},sf=(e,t)=>{ur(e.inputs),e.compute(_a("MaxPool",e.inputs[0],!1,t))},of=e=>{let t=e.storage_order,r=e.dilations,i=ma(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:cd(a)}},uf=e=>{let t=e.format;return{format:t,...ya,cacheKey:t}},lf=(e,t)=>{ur(e.inputs),e.compute(_a("GlobalMaxPool",e.inputs[0],!0,t))}}),hd,fd,df,pf,ny=P(()=>{"use strict";te(),ie(),xe(),ae(),hd=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},fd=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=O.size(n),l=i===3||i===2,p=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(O.size(h.dims)/4)]:h.dims:void 0,_=c.length===0||c.length===1&&c[0]===1,y=_===!1&&c.length===1,b=ve(u),S=_&&(!l||b===4),x=S?b:1,w=S&&!l?b:1,T=M("input",l?12:i,p.length,w),I=M("scale",s,c.length),E=h?M("zero_point",l?12:i,g.length):void 0,C=K("output",s,n.length,x),A=[T,I];E&&A.push(E);let v=[p,c];h&&v.push(g);let D=[{type:12,data:u/x},{type:12,data:r},{type:12,data:t.blockSize},...J(...v,n)],N=H=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${H.registerUniforms(G).declareVariables(...A,C)}
      ${H.mainStart()}
          ${H.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${I.getByOffset("0")}`:y?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${I.getByOffset("scale_index")};`:`
            var scale_indices: ${I.type.indices} = output_indices;
            let index = ${I.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${I.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${I.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?_?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:y?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${I.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/x/64),y:1,z:1},programUniforms:D})}},df=(e,t)=>{hd(e.inputs,t),e.compute(fd(e.inputs,t))},pf=e=>he({axis:e.axis,blockSize:e.blockSize})}),md,gd,cf,sy=P(()=>{"use strict";Ve(),te(),ae(),md=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},gd=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...J(n)],l=p=>{let c=K("output",i,n.length),h=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${p.registerUniforms(g).declareVariables(c)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},cf=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&md(t,r,i),e.compute(gd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),yd,_d,hf,ff,oy=P(()=>{"use strict";te(),ie(),xe(),ae(),yd=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},_d=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(O.sizeToDimension(i,i.length-1)/n),u=i[i.length-1],l=O.sizeFromDimension(r,u),p=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...J(e[1].dims,e[2].dims,a)],c=h=>{let g=M("indices",e[1].dataType,e[1].dims.length),_=M("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?Pp("output",e[0].dataType,a.length):K("output",e[0].dataType,a.length,n);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${yd(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:c}},hf=e=>he({reduction:e.reduction}),ff=(e,t)=>{e.compute(_d(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),bd,wd,$d,ba,vd,xd,Sd,kd,Td,Id,Ed,Cd,wa,zd,Ad,Od,Bd,Rd,mf,gf,uy=P(()=>{"use strict";te(),ie(),xe(),ae(),bd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},wd=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},$d=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");bd(i,t),t.axes.length>0&&wd(i,t.axes,p).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},ba=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,vd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ba("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ba("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",xd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Sd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},kd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Td=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},Id=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Y("uniforms.scales","i",i)};
        var roi_low = ${Y("uniforms.roi","i",a)};
        var roi_hi = ${Y("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ed=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Y("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y("uniforms.roi","i",n)};
          var roi_hi = ${Y("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Cd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Y("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,wa=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",zd=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${wa(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ad=(e,t,r,i,a,n,s,u,l,p)=>{let c=r.length===2,h=!0,[g,_]=c?[0,1]:h?[2,3]:[1,2],y=e.type.value,b=S=>{let x=S===g?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[S]},
        ${i[S]}, ${r[S]}, ${n[S]}, ${n[S]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[S]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${y} = originalIdx + ${y}(i);
          if (${x} < 0 || ${x} >= ${r[S]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${x} = max(0, min(${x}, ${r[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${x})`)};
          data[i + 1] = ${S===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${b(g)};
    ${b(_)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Od=(e,t,r,i,a)=>{let[n,s,u,l,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${wa(e,p,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Bd=(e,t,r,i,a,n)=>{let s=e.dims,u=Sd(n,t.axes,s.length),l=kd(s,i,a,t.axes),p=i.slice();i.length===0&&(p=s.map((w,T)=>w===0?1:l[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Td(s,p,t)));let c=K("output",e.dataType,l.length),h=M("input",e.dataType,s.length),g=O.size(l),_=s.length===l.length&&s.every((w,T)=>w===l[T]),y=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=h.type.value,x=w=>`
      ${_?"":`
      ${vd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Cd(h,s)};
              ${xd(t.nearestMode,r,S)};
              ${Ed(h,c,s,l,p.length,u.length,y)};
              `;case"linear":return`
              ${Id(c,s,l,p.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${zd(h,c,s,y,b)}`;if(s.length===3||s.length===5)return`${Od(h,c,s,y,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Ad(h,c,s,l,p,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:p},{type:1,data:u},...J(s,l)]})}},Rd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},mf=(e,t)=>{let r=[],i=[],a=[],n=Rd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");$d(e.inputs,t,n,r,i,a),e.compute(Bd(e.inputs[0],t,n,r,i,a),{inputs:[0]})},gf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:p})}}),Md,Dd,yf,ly=P(()=>{"use strict";te(),ie(),ae(),Md=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Dd=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=O.size(n),u=n,l=s,p=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],h=!a&&e.length>3,g=e.length>4,_=i&&r>1,y=i&&r>2,b=r>3,S=64,x=ve(p),w=[{type:12,data:l},{type:12,data:x},{type:12,data:p},{type:1,data:t.epsilon}],T=E=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[M("x",e[0].dataType,e[0].dims,x),M("skip",e[1].dataType,e[1].dims,x),M("gamma",e[2].dataType,e[2].dims,x)];h&&A.push(M("beta",e[3].dataType,e[3].dims,x)),g&&A.push(M("bias",e[4].dataType,e[4].dims,x)),A.push(K("output",e[0].dataType,u,x)),_&&A.push(K("mean_output",1,c)),y&&A.push(K("inv_std_output",1,c)),b&&A.push(K("input_skip_bias_sum",e[0].dataType,u,x));let v=Ie(e[0].dataType),D=Ie(1,x);return`

      ${E.registerUniforms(C).declareVariables(...A)}
      var<workgroup> sum_shared : array<${D}, ${S}>;
      var<workgroup> sum_squared_shared : array<${D}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ht(v,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${vt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${vt("square_sum",x)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},I=[{dims:u,dataType:e[0].dataType}];return r>1&&I.push({dims:c,dataType:1}),r>2&&I.push({dims:c,dataType:1}),r>3&&I.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${_};${y};${b}`,inputDependencies:e.map((E,C)=>"type")},getShaderSource:T,getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(l/p)},programUniforms:w})}},yf=(e,t)=>{Md(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Dd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Nd,lr,Pd,$a,Ud,qd,_f,bf,dy=P(()=>{"use strict";te(),ie(),xe(),ae(),Nd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},lr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Pd=(e,t)=>{if(e.length>1){let r=lr(e,1),i=lr(e,2),a=lr(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:a})}else return t},$a=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Ud=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
            let steps_i = ${Y("uniforms.steps","i",r.length)};
            let signs_i = ${Y("uniforms.signs","i",r.length)};
            let starts_i = ${Y("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,qd=(e,t)=>{let r=e[0].dims,i=O.size(r),a=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=lr(e,4);n.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((x,w)=>$a(x,w,r,a,n)),u=t.ends.map((x,w)=>$a(x,w,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let x=0;x<r.length;++x)a.includes(x)||(s.splice(x,0,0),u.splice(x,0,r[x]),n.splice(x,0,1));let l=n.map(x=>Math.sign(x));n.forEach((x,w,T)=>{if(x<0){let I=(u[w]-s[w])/x,E=s[w],C=E+I*n[w];s[w]=C,u[w]=E,T[w]=-x}});let p=r.slice(0);a.forEach((x,w)=>{p[x]=Math.ceil((u[x]-s[x])/n[x])});let c={dims:p,dataType:e[0].dataType},h=K("output",e[0].dataType,p.length),g=M("input",e[0].dataType,e[0].dims.length),_=O.size(p),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],b=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:n},...J(e[0].dims,p)],S=x=>`
      ${x.registerUniforms(y).declareVariables(g,h)}
        ${Ud(g,h,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},_f=(e,t)=>{Nd(e.inputs,t);let r=Pd(e.inputs,t);e.compute(qd(e.inputs,r),{inputs:[0]})},bf=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),Ld,Wd,wf,$f,py=P(()=>{"use strict";te(),ie(),xe(),xt(),ae(),Ld=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Wd=(e,t)=>{let r=e.inputs[0],i=r.dims,a=O.size(i),n=i.length,s=O.normalizeAxis(t.axis,n),u=s<i.length-1,l,p=[];u?(p=Array.from({length:n},(A,v)=>v),p[s]=n-1,p[n-1]=s,l=e.compute(Ue(r,p),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[n-1],g=a/h,_=ve(h),y=h/_,b=64;g===1&&(b=256);let S=(A,v)=>v===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:v===2?`max(${A}.x, ${A}.y)`:v===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,x=M("x",l.dataType,l.dims,_),w=K("result",l.dataType,l.dims,_),T=x.type.value,I=Ie(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=A=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(x,w)}
      ${A.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${I}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${vt("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${_};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ue(C,p),{inputs:[C]})},wf=(e,t)=>{Ld(e.inputs),Wd(e,t)},$f=e=>he({axis:e.axis})}),va,Vd,Fd,Gd,vf,cy=P(()=>{"use strict";te(),ie(),ae(),va=e=>Array.from(e.getBigInt64Array(),Number),Vd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(va(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Fd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Gd=(e,t)=>{let r=e[0].dims,i=t??va(e[1]),a=Fd(r,i),n=O.size(a),s=e[0].dataType,u=M("input",s,r.length),l=K("output",s,a.length),p=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...J(e[0].dims,a)]}),getShaderSource:p}},vf=e=>{Vd(e.inputs),e.compute(Gd(e.inputs),{inputs:[0]})}}),Hd,jd,xf,hy=P(()=>{"use strict";te(),ie(),ae(),Hd=(e,t,r,i,a)=>{let n=K("output_data",a,r.length,4),s=M("a_data",t[1].dataType,t[1].dims.length,4),u=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),p,c=(h,g,_)=>`select(${g}, ${h}, ${_})`;if(!i)p=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,_,y="")=>{let b=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,x=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${n.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_b${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_c${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${g}[${_}] = ${y}(${c(b,S,x)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},jd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,u=O.size(t);if(n){let p=jt.calcShape(jt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,u=O.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Hd(p,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...J(i,t,r,s)]})}},xf=e=>{e.compute(jd(e.inputs))}}),Sf,fy=P(()=>{"use strict";I0(),nn(),E0(),C0(),z0(),A0(),O0(),N0(),U0(),q0(),L0(),W0(),V0(),F0(),G0(),H0(),j0(),K0(),Z0(),X0(),Q0(),Y0(),J0(),ey(),ty(),ry(),Wh(),iy(),ay(),ny(),sy(),oy(),an(),uy(),jh(),ly(),dy(),py(),Gh(),cy(),xt(),sn(),hy(),Sf=new Map([["Abs",[hc]],["Acos",[fc]],["Acosh",[mc]],["Add",[Xc]],["ArgMax",[lc,Oa]],["ArgMin",[uc,Oa]],["Asin",[gc]],["Asinh",[yc]],["Atan",[_c]],["Atanh",[bc]],["Attention",[dc]],["AveragePool",[rf,tf]],["BatchNormalization",[pc]],["BiasAdd",[cc]],["BiasSplitGelu",[Zc]],["Cast",[$c,wc]],["Ceil",[xc]],["Clip",[vc]],["Concat",[sh,oh]],["Conv",[Pa,Na]],["ConvTranspose",[yh,gh]],["Cos",[Sc]],["Cosh",[kc]],["CumSum",[_h,bh]],["DepthToSpace",[wh,$h]],["DequantizeLinear",[df,pf]],["DFT",[vh,xh]],["Div",[Qc]],["Einsum",[Sh,kh]],["Elu",[Tc,fr]],["Equal",[Yc]],["Erf",[Ic]],["Exp",[Ec]],["Expand",[Th]],["FastGelu",[Ih]],["Floor",[Cc]],["FusedConv",[Pa,Na]],["Gather",[Ch,Eh]],["GatherElements",[Mh,Rh]],["GatherBlockQuantized",[Oh,Bh]],["GatherND",[zh,Ah]],["Gelu",[zc]],["Gemm",[Nh,Dh]],["GlobalAveragePool",[nf,af]],["GlobalMaxPool",[lf,uf]],["Greater",[rh]],["GreaterOrEqual",[ah]],["GridSample",[Ph,Uh]],["GroupQueryAttention",[Kh]],["HardSigmoid",[Pc,Nc]],["HardSwish",[Uc]],["InstanceNormalization",[Zh]],["LayerNormalization",[Xh]],["LeakyRelu",[Ac,fr]],["Less",[ih]],["LessOrEqual",[nh]],["Log",[jc]],["MatMul",[Qh]],["MatMulNBits",[Yh,Jh]],["MaxPool",[sf,of]],["Mul",[Jc]],["MultiHeadAttention",[Lh,qh]],["Neg",[Bc]],["Not",[Oc]],["Pad",[ef]],["Pow",[eh]],["QuickGelu",[Kc,fr]],["Range",[cf]],["Reciprocal",[Rc]],["ReduceMin",[ic]],["ReduceMean",[Yp]],["ReduceMax",[rc]],["ReduceSum",[nc]],["ReduceProd",[ac]],["ReduceL1",[Jp]],["ReduceL2",[ec]],["ReduceLogSum",[oc]],["ReduceLogSumExp",[tc]],["ReduceSumSquare",[sc]],["Relu",[Mc]],["Resize",[mf,gf]],["RotaryEmbedding",[Hh]],["ScatterND",[ff,hf]],["Sigmoid",[Dc]],["Sin",[qc]],["Sinh",[Lc]],["Slice",[_f,bf]],["SkipLayerNormalization",[yf]],["Split",[Vh,Fh]],["Sqrt",[Wc]],["Softmax",[wf,$f]],["Sub",[th]],["Tan",[Vc]],["Tanh",[Fc]],["ThresholdedRelu",[Hc,fr]],["Tile",[vf]],["Transpose",[qp,Lp]],["Where",[xf]]])}),kf,my=P(()=>{"use strict";Ve(),lt(),ae(),kf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){it(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let p of t)u.push({binding:u.length,resource:{buffer:p.buffer}});for(let p of r)u.push({binding:u.length,resource:{buffer:p.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ye(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let a=Up(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ye(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Tf={};Zt(Tf,{WebGpuBackend:()=>If});var Kd,Zd,Xd,If,gy=P(()=>{"use strict";Ve(),te(),lt(),Rp(),k0(),fy(),my(),Kd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Zd=(e,t,r)=>{var a,n;let i=e.name;return(a=e.shaderCache)!=null&&a.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Kd(t,((n=e.shaderCache)==null?void 0:n.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Xd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},If=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new Xd(s),this.gpuDataManager=Np(this),this.programManager=new kf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ja(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let n=r[a],s=n.kernelId,u=this.kernels.get(s),l=u.kernelType,p=u.kernelName,c=n.programName,h=n.inputTensorViews,g=n.outputTensorViews,_=t[a*2],y=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let b=Number(_-this.queryTimeBase),S=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(x=>({dims:x.dims,dataType:ut(x.dataType)})),outputsMetadata:g.map(x=>({dims:x.dims,dataType:ut(x.dataType)})),kernelId:s,kernelType:l,kernelName:p,programName:c,startTime:b,endTime:S});else{let x="";h.forEach((T,I)=>{x+=`input[${I}]: [${T.dims}] | ${ut(T.dataType)}, `});let w="";g.forEach((T,I)=>{w+=`output[${I}]: [${T.dims}] | ${ut(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${p}|${c}" ${x}${w}start time: ${b} ns, execution time: ${S-b} ns`)}Zr("GPU",`${c}::${_}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ye()}run(e,t,r,i,a,n){it(e.name);let s=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let I=this.gpuDataManager.get(T);if(!I)throw new Error(`no GPU data for input: ${T}`);s.push(I)}let{outputs:u,dispatchGroup:l,programUniforms:p}=e.getRunData(t),c=r.length===0?u.map((w,T)=>T):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],g=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=n)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let T=c[w]===-1,I=c[w]===-2,E=T||I?a(u[w].dataType,u[w].dims):i(c[w],u[w].dataType,u[w].dims);if(h.push(E),E.data===0)continue;let C=this.gpuDataManager.get(E.data);if(!C)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(C),I){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(C)}g.push(C)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Ye(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(p){let w=0,T=[];p.forEach(A=>{let v=typeof A.data=="number"?[A.data]:A.data;if(v.length===0)return;let D=A.type===10?2:4,N,H;A.type===10?(H=v.length>4?16:v.length>2?8:v.length*D,N=v.length>4?16:D*v.length):(H=v.length<=2?v.length*D:16,N=16),w=Math.ceil(w/H)*H,T.push(w);let G=A.type===10?8:4;w+=v.length>4?Math.ceil(v.length/G)*N:v.length*D});let I=16;w=Math.ceil(w/I)*I;let E=new ArrayBuffer(w);p.forEach((A,v)=>{let D=T[v],N=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(E,D,N.length).set(N);else if(A.type===12)new Uint32Array(E,D,N.length).set(N);else if(A.type===10)new Uint16Array(E,D,N.length).set(N);else if(A.type===1)new Float32Array(E,D,N.length).set(N);else throw new Error(`Unsupported uniform type: ${ut(A.type)}`)});let C=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,E,0,w),this.gpuDataManager.release(C.id),_={offset:0,size:w,buffer:C.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),b=y[1]===1&&y[2]===1,S=Zd(e,t,b),x=this.programManager.getArtifact(S);if(x||(x=this.programManager.build(e,y),this.programManager.setArtifact(S,x),de("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),p&&x.uniformVariablesInfo){if(p.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${p.length} in program "${x.programInfo.name}".`);for(let w=0;w<p.length;w++){let T=p[w],I=T.type,E=typeof T.data=="number"?1:T.data.length,[C,A]=x.uniformVariablesInfo[w];if(I!==C||E!==A)throw new Error(`Uniform variable ${w} mismatch: expect type ${C} with size ${A}, got type ${I} with size ${E} in program "${x.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(x,s,g,y,_),Ye(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Sf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${p}`)),1}finally{l&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${n}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ca(this,e,t);return en(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ef={};Zt(Ef,{init:()=>Cf});var Fr,Qd,Cf,yy=P(()=>{"use strict";te(),lt(),ie(),S0(),Fr=class zf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new zf(this.module,this.dataType,this.data,t)}},Qd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let p=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),h=Number(e.getValue(i*a++,n)),g=[];for(let _=0;_<h;_++)g.push(Number(e.getValue(i*a++,n)));u.push(new Fr(e,p,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],a=(u,l,p)=>new Fr(this.module,l,this.output(u,p),p),n=(u,l)=>{let p=Rt(u,l);if(!p)throw new Error(`Unsupported data type: ${u}`);let c=p>0?this.backend.gpuDataManager.create(p).id:0;return new Fr(this.module,u,c,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Cf=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(gy(),_r(Tf)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,p,c=!1)=>{if(c)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(p)}`),s.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(p)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(p));s.upload(Number(l),h)}},async(u,l,p)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${p}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+p)>>>0))},(u,l,p)=>s.createKernel(u,Number(l),p,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,p,c)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${u}, contextDataOffset=${l}`);let h=new Qd(t,s,Number(l));return s.computeKernel(Number(u),h,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Dp(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,p,c)=>n.ensureTensor(s,u,l,p,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u),(s,u)=>n.registerMLContext(s,u),!!r.trace])}}}),Yd,cn,hn,_t,Jd,xa,ri,fn,mn,Sa,gn,yn,_n,Af=P(()=>{"use strict";Ve(),$0(),v0(),te(),qt(),Za(),zp(),Yd=(e,t)=>{be()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},cn=async e=>{Yd(e.wasm.numThreads,Qr(e.logLevel))},hn=async(e,t)=>{var i,a;(a=(i=be()).asyncInit)==null||a.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(yy(),_r(Ef)).init;t==="webgpu"&&await n("webgpu",be(),e,r),t==="webnn"&&await n("webnn",be(),e)}},_t=new Map,Jd=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&ge("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},xa=(e,t)=>{let r=be(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&ge("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let p=r.HEAPU32[a/4+1],c=[];for(let h=0;h<p;h++){let g=Number(r.getValue(a+8+h*n,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(h+p)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},ri=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},fn=async(e,t)=>{var h,g,_,y;let r,i,a=be();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ri(e);let n=0,s=0,u=0,l=[],p=[],c=[];try{if([s,l]=await Cp(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let v=[];for(let D of t.externalData){let N=typeof D=="string"?D:D.path,H=typeof D=="string"?D:D.data;v.push(Ya(H).then(G=>{a.mountExternalData(N,G)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof v!="string"){let D=v,N=D==null?void 0:D.context,H=D==null?void 0:D.gpuDevice,G=D==null?void 0:D.deviceType,j=D==null?void 0:D.powerPreference;N?a.currentContext=N:H?a.currentContext=await a.webnnCreateMLContext(H):a.currentContext=await a.webnnCreateMLContext({deviceType:G,powerPreference:j})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),(h=a.webgpuOnCreateSession)==null||h.call(a,n),n===0&&ge("Can't create a session."),(g=a.jsepOnCreateSession)==null||g.call(a),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[b,S]=Jd(n),x=!!(t!=null&&t.enableGraphCapture),w=[],T=[],I=[],E=[],C=[];for(let v=0;v<b;v++){let[D,N,H]=xa(n,v);D===0&&ge("Can't get an input name."),p.push(D);let G=a.UTF8ToString(D);w.push(G),I.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:ut(N),shape:H})}for(let v=0;v<S;v++){let[D,N,H]=xa(n,v+b);D===0&&ge("Can't get an output name."),c.push(D);let G=a.UTF8ToString(D);T.push(G),E.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:ut(N),shape:H});{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let j=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[G])??"cpu",B=a.webnnIsGraphOutput;if(j==="cpu"&&B&&B(n,G)){C.push("ml-tensor-cpu-output");continue}if(j!=="cpu"&&j!=="cpu-pinned"&&j!=="gpu-buffer"&&j!=="ml-tensor")throw new Error(`Not supported preferred output location: ${j}.`);if(x&&j!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${j}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(j)}}let A=null;return C.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&ge("Can't create IO binding."),A={handle:u,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Ea(v))}),_t.set(n,[n,p,c,A,x,!1]),[n,w,T,I,E]}catch(b){throw p.forEach(S=>a._OrtFree(S)),c.forEach(S=>a._OrtFree(S)),u!==0&&a._OrtReleaseBinding(u)!==0&&ge("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&ge("Can't release session."),b}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&ge("Can't release session options."),l.forEach(b=>a._free(b)),(y=a.unmountExternalData)==null||y.call(a)}},mn=e=>{var l,p,c;let t=be(),r=_t.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ge("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(p=t.webnnOnReleaseSession)==null||p.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),a.forEach(h=>t._OrtFree(h)),n.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&ge("Can't release session."),_t.delete(e)},Sa=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=be(),l=u.PTR_SIZE,p=e[0],c=e[1],h=e[3],g=h,_,y;if(p==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let x=e[2].gpuBuffer;y=Rt(Bt(p),c);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=w(i,n,x,y)}}else if(h==="ml-tensor"){let x=e[2].mlTensor;y=Rt(Bt(p),c);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=w(i,x,Bt(p),c)}else{let x=e[2];if(Array.isArray(x)){y=l*x.length,_=u._malloc(y),r.push(_);for(let w=0;w<x.length;w++){if(typeof x[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(_+w*l,Xe(x[w],r),"*")}}else{let w=u.webnnIsGraphInput,T=u.webnnIsGraphOutput;if(p!=="string"&&w&&T){let I=u.UTF8ToString(a);if(w(i,I)||T(i,I)){let E=Bt(p);y=Rt(E,c),g="ml-tensor";let C=u.webnnCreateTemporaryTensor,A=u.webnnUploadTensor;if(!C||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await C(i,E,c);A(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),_=v}else y=x.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,y),_)}else y=x.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,y),_)}}let b=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((w,T)=>u.setValue(S+T*l,w,l===4?"i32":"i64"));let x=u._OrtCreateTensor(Bt(p),_,y,S,c.length,Ea(g));x===0&&ge(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(x)}finally{u.stackRestore(b)}},gn=async(e,t,r,i,a,n)=>{var G,j,B,Z;let s=be(),u=s.PTR_SIZE,l=_t.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=l[0],c=l[1],h=l[2],g=l[3],_=l[4],y=l[5],b=t.length,S=i.length,x=0,w=[],T=[],I=[],E=[],C=[],A=s.stackSave(),v=s.stackAlloc(b*u),D=s.stackAlloc(b*u),N=s.stackAlloc(S*u),H=s.stackAlloc(S*u);try{[x,w]=Ep(n),Mt("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)await Sa(r[L],T,E,e,c[t[L]],t[L],_);for(let L=0;L<S;L++)await Sa(a[L],I,E,e,h[i[L]],b+i[L],_);Dt("wasm prepareInputOutputTensor");for(let L=0;L<b;L++)s.setValue(v+L*u,T[L],"*"),s.setValue(D+L*u,c[t[L]],"*");for(let L=0;L<S;L++)s.setValue(N+L*u,I[L],"*"),s.setValue(H+L*u,h[i[L]],"*");if(g&&!y){let{handle:L,outputPreferredLocations:le,outputPreferredLocationsEncoded:U}=g;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);Mt("wasm bindInputsOutputs");for(let V=0;V<b;V++){let Q=t[V];await s._OrtBindInput(L,c[Q],T[V])!==0&&ge(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<S;V++){let Q=i[V];(G=a[V])!=null&&G[3]?(C.push(I[V]),s._OrtBindOutput(L,h[Q],I[V],0)!==0&&ge(`Can't bind pre-allocated output[${V}] for session=${e}.`)):s._OrtBindOutput(L,h[Q],0,U[Q])!==0&&ge(`Can't bind output[${V}] to ${le[V]} for session=${e}.`)}Dt("wasm bindInputsOutputs"),_t.set(e,[p,c,h,g,_,!0])}(j=s.jsepOnRunStart)==null||j.call(s,p),(B=s.webnnOnRunStart)==null||B.call(s,p);let X;g?X=await s._OrtRunWithBinding(p,g.handle,S,N,x):X=await s._OrtRun(p,D,v,b,H,S,N,x),X!==0&&ge("failed to call OrtRun().");let ee=[],fe=[];Mt("wasm ProcessOutputTensor");for(let L=0;L<S;L++){let le=Number(s.getValue(N+L*u,"*"));if(le===I[L]||C.includes(I[L])){ee.push(a[L]),le!==I[L]&&s._OrtReleaseTensor(le)!==0&&ge("Can't release tensor.");continue}let U=s.stackSave(),V=s.stackAlloc(4*u),Q=!1,q,me=0;try{s._OrtGetTensorData(le,V,V+u,V+2*u,V+3*u)!==0&&ge(`Can't access output tensor data on index ${L}.`);let qe=u===4?"i32":"i64",Se=Number(s.getValue(V,qe));me=s.getValue(V+u,"*");let Ae=s.getValue(V+u*2,"*"),Oe=Number(s.getValue(V+u*3,qe)),Me=[];for(let we=0;we<Oe;we++)Me.push(Number(s.getValue(Ae+we*u,qe)));s._OrtFree(Ae)!==0&&ge("Can't free memory for tensor dims.");let Be=Me.reduce((we,re)=>we*re,1);q=ut(Se);let dt=g==null?void 0:g.outputPreferredLocations[i[L]];if(q==="string"){if(dt==="gpu-buffer"||dt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let re=0;re<Be;re++){let De=s.getValue(me+re*u,"*"),wr=s.getValue(me+(re+1)*u,"*"),Xt=re===Be-1?void 0:wr-De;we.push(s.UTF8ToString(De,Xt))}ee.push([q,Me,we,"cpu"])}else if(dt==="gpu-buffer"&&Be>0){let we=s.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let re=we(me),De=Rt(Se,Be);if(De===void 0||!Xa(q))throw new Error(`Unsupported data type: ${q}`);Q=!0,ee.push([q,Me,{gpuBuffer:re,download:s.jsepCreateDownloader(re,De,q),dispose:()=>{s._OrtReleaseTensor(le)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(dt==="ml-tensor"&&Be>0){let we=s.webnnEnsureTensor,re=s.webnnIsGraphInputOutputTypeSupported;if(!we||!re)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Rt(Se,Be)===void 0||!Qa(q))throw new Error(`Unsupported data type: ${q}`);if(!re(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let De=await we(e,me,Se,Me,!1);Q=!0,ee.push([q,Me,{mlTensor:De,download:s.webnnCreateMLTensorDownloader(me,q),dispose:()=>{s.webnnReleaseTensorId(me),s._OrtReleaseTensor(le)}},"ml-tensor"])}else if(dt==="ml-tensor-cpu-output"&&Be>0){let we=s.webnnCreateMLTensorDownloader(me,q)(),re=ee.length;Q=!0,fe.push((async()=>{let De=[re,await we];return s.webnnReleaseTensorId(me),s._OrtReleaseTensor(le),De})()),ee.push([q,Me,[],"cpu"])}else{let we=ii(q),re=new we(Be);new Uint8Array(re.buffer,re.byteOffset,re.byteLength).set(s.HEAPU8.subarray(me,me+re.byteLength)),ee.push([q,Me,re,"cpu"])}}finally{s.stackRestore(U),q==="string"&&me&&s._free(me),Q||s._OrtReleaseTensor(le)}}g&&!_&&(s._OrtClearBoundOutputs(g.handle)!==0&&ge("Can't clear bound outputs."),_t.set(e,[p,c,h,g,_,!1]));for(let[L,le]of await Promise.all(fe))ee[L][2]=le;return Dt("wasm ProcessOutputTensor"),ee}finally{(Z=s.webnnOnRunEnd)==null||Z.call(s,p),s.stackRestore(A),T.forEach(X=>s._OrtReleaseTensor(X)),I.forEach(X=>s._OrtReleaseTensor(X)),E.forEach(X=>s._free(X)),x!==0&&s._OrtReleaseRunOptions(x),w.forEach(X=>s._free(X))}},yn=e=>{let t=be(),r=_t.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&ge("Can't get an profile file name."),t._OrtFree(a)},_n=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),bt,Re,Ft,dr,pr,Gr,ka,Hr,zt,At,ep,Of,Bf,Rf,Mf,Df,Nf,Pf,Uf=P(()=>{"use strict";Ve(),Af(),qt(),ja(),bt=()=>!!_e.wasm.proxy&&typeof document<"u",Ft=!1,dr=!1,pr=!1,Hr=new Map,zt=(e,t)=>{let r=Hr.get(e);r?r.push(t):Hr.set(e,[t])},At=()=>{if(Ft||!dr||pr||!Re)throw new Error("worker not ready")},ep=e=>{switch(e.data.type){case"init-wasm":Ft=!1,e.data.err?(pr=!0,ka[1](e.data.err)):(dr=!0,ka[0]()),Gr&&(URL.revokeObjectURL(Gr),Gr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Hr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Of=async()=>{if(!dr){if(Ft)throw new Error("multiple calls to 'initWasm()' detected.");if(pr)throw new Error("previous call to 'initWasm()' failed.");if(Ft=!0,bt())return new Promise((e,t)=>{Re==null||Re.terminate(),Tp().then(([r,i])=>{try{Re=i,Re.onerror=n=>t(n),Re.onmessage=ep,ka=[e,t];let a={type:"init-wasm",in:_e};!a.in.wasm.wasmPaths&&(r||Ia)&&(a.in.wasm.wasmPaths={wasm:new URL("/sdk-live-demo/edge-demo/assets/ort-wasm-simd-threaded.jsep-MDYUKy93.wasm",import.meta.url).href}),Re.postMessage(a),Gr=r}catch(a){t(a)}},t)});try{await Ka(_e.wasm),await cn(_e),dr=!0}catch(e){throw pr=!0,e}finally{Ft=!1}}},Bf=async e=>{if(bt())return At(),new Promise((t,r)=>{zt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:_e}};Re.postMessage(i)});await hn(_e,e)},Rf=async e=>bt()?(At(),new Promise((t,r)=>{zt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Re.postMessage(i,[e.buffer])})):ri(e),Mf=async(e,t)=>{if(bt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return At(),new Promise((r,i)=>{zt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Re.postMessage(a,n)})}else return fn(e,t)},Df=async e=>{if(bt())return At(),new Promise((t,r)=>{zt("release",[t,r]);let i={type:"release",in:e};Re.postMessage(i)});mn(e)},Nf=async(e,t,r,i,a,n)=>{if(bt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return At(),new Promise((s,u)=>{zt("run",[s,u]);let l=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};Re.postMessage(p,_n(l))})}else return gn(e,t,r,i,a,n)},Pf=async e=>{if(bt())return At(),new Promise((t,r)=>{zt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Re.postMessage(i)});yn(e)}}),Ta,tp,qf,_y=P(()=>{"use strict";Ve(),Uf(),te(),Ha(),zp(),Ta=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},tp=e=>{switch(e[3]){case"cpu":return new Qe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Xa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Qe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Qa(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Qe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},qf=class{async fetchModelAndCopyToWasmMemory(e){return Rf(await Ya(e))}async loadModel(e,t){it();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Mf(r,t),Ye()}async dispose(){return Df(this.sessionId)}async run(e,t,r){it();let i=[],a=[];Object.entries(e).forEach(h=>{let g=h[0],_=h[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);i.push(_),a.push(y)});let n=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],_=h[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);n.push(_),s.push(y)});let u=i.map((h,g)=>Ta(h,()=>`input "${this.inputNames[a[g]]}"`)),l=n.map((h,g)=>h?Ta(h,()=>`output "${this.outputNames[s[g]]}"`):null),p=await Nf(this.sessionId,a,u,s,l,r),c={};for(let h=0;h<p.length;h++)c[this.outputNames[s[h]]]=n[h]??tp(p[h]);return Ye(),c}startProfiling(){}endProfiling(){Pf(this.sessionId)}}}),Lf={};Zt(Lf,{OnnxruntimeWebAssemblyBackend:()=>La,initializeFlags:()=>qa,wasmBackend:()=>Wf});var qa,La,Wf,by=P(()=>{"use strict";Ve(),Uf(),_y(),qa=()=>{(typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0);let e=_e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_e.wasm.simd=!1),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let t=typeof navigator>"u"?i0("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},La=class{async init(e){qa(),await Of(),await Bf(e)}async createInferenceSessionHandler(e,t){let r=new qf;return await r.loadModel(e,t),r}},Wf=new La});Ve();Ve();Ve();var wy="1.30.0";{let e=(by(),_r(Lf)).wasmBackend;Gt("webgpu",e,5),Gt("webnn",e,5),Gt("cpu",e,10),Gt("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:wy,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var $y=Object.defineProperty,vy=(e,t,r)=>t in e?$y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,We=(e,t,r)=>vy(e,typeof t!="symbol"?t+"":t,r),$t=(e=>(e.Downloading="downloading",e.Caching="caching",e.Ready="ready",e))($t||{});const Wa=class gr{constructor(t={}){We(this,"originalFetch",null),We(this,"isIntercepting",!1),We(this,"fetchIntercepted",!1),We(this,"progressTimeout"),We(this,"options"),We(this,"activeDownloads",new Map),We(this,"totalFiles",0),We(this,"completedFiles",0),We(this,"modelFileIndicators"),We(this,"module"),this.options={cacheDetectionTimeout:1e3,...t},this.modelFileIndicators=t.modelFileIndicators||[],this.module=t.module}updateOverallProgress(){if(!this.options.onProgress)return;let t=0,r=0;for(const s of this.activeDownloads.values())t+=s.loaded,r+=s.total;if(r===0&&this.totalFiles>0){const s=this.completedFiles/this.totalFiles*70+30;this.options.onProgress({percentage:Math.min(Math.round(s),100),loaded:this.completedFiles,total:this.totalFiles,stage:{type:$t.Downloading,fromCache:!1},module:this.module});return}const i=30,a=r>0?t/r*70:0,n=Math.min(i+a,100);this.options.onProgress({percentage:Math.round(n),loaded:t,total:r,stage:{type:$t.Downloading,fromCache:!1},module:this.module})}static async isModelCached(){try{if(!("caches"in(typeof window<"u"?window:self)))return!1;const t=await caches.open(this.CACHE_NAME),r=await t.keys(),i=Date.now();for(const a of r){const n=await t.match(a);if(n){const s=n.headers.get("x-cached-time");if(s&&i-parseInt(s)<this.CACHE_EXPIRY_MS)return console.log("[ModelFetchInterceptor] Found cached model:",a.url),!0}}return!1}catch(t){return console.error("[ModelFetchInterceptor] Error checking cache:",t),!1}}static async cacheModel(t,r){try{if(!("caches"in(typeof window<"u"?window:self))){console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");return}console.log("[ModelFetchInterceptor] Attempting to cache model:",t);const i=await caches.open(this.CACHE_NAME),a=r.clone(),n=new Headers(a.headers);n.set("x-cached-time",Date.now().toString());const s=new Response(a.body,{status:a.status,statusText:a.statusText,headers:n});await i.put(t,s),console.log("[ModelFetchInterceptor] ✅ Model cached successfully:",t)}catch(i){console.error("[ModelFetchInterceptor] ❌ Error caching model:",i)}}static async cacheModelWithProgress(t,r,i,a){try{if(!("caches"in(typeof window<"u"?window:self))){console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");return}if(!r.body){console.log("[ModelFetchInterceptor] No response body to cache");return}const n=r.headers.get("content-encoding");let s=i;if(n&&i>0){const y={gzip:2.5,br:3,deflate:2}[n]||2;s=Math.round(i*y),console.log("[ModelFetchInterceptor] 📦 Caching model with progress:",t,"reported:",i,"encoding:",n,"estimated actual:",s)}else console.log("[ModelFetchInterceptor] 📦 Caching model with progress:",t,"reported size:",i);const u=await caches.open(this.CACHE_NAME);let l=0,p=0;const c=r.body.getReader(),h=[];for(;;){const{done:y,value:b}=await c.read();if(y)break;h.push(b),l+=b.length,p+=b.length;const S=Math.max(s,p),x=Math.min(l,S*.99);a==null||a(x,S)}const g=new Headers(r.headers);g.set("x-cached-time",Date.now().toString()),g.set("x-actual-size",p.toString());const _=new Response(new Blob(h),{status:r.status,statusText:r.statusText,headers:g});await u.put(t,_),a==null||a(p,p),console.log("[ModelFetchInterceptor] ✅ Model cached with progress:",t,"actual size:",p)}catch(n){console.error("[ModelFetchInterceptor] ❌ Error caching model with progress:",n)}}static async getCachedModel(t){try{if(!("caches"in(typeof window<"u"?window:self)))return console.log("[ModelFetchInterceptor] Cache API not available"),null;console.log("[ModelFetchInterceptor] 🔍 Checking cache for:",t);const r=await caches.open(this.CACHE_NAME),i=await r.match(t);if(!i)return console.log("[ModelFetchInterceptor] ❌ Not found in cache"),null;const a=i.headers.get("x-cached-time");return!a||Date.now()-parseInt(a)>this.CACHE_EXPIRY_MS?(await r.delete(t),console.log("[ModelFetchInterceptor] ⏰ Cached model expired, removing:",t),null):(console.log("[ModelFetchInterceptor] ✅ Serving model from cache:",t),i)}catch(r){return console.error("[ModelFetchInterceptor] ❌ Error getting cached model:",r),null}}getFetchGlobal(){return typeof self<"u"&&typeof window>"u"?self.fetch:typeof window<"u"?window.fetch:fetch}setFetchGlobal(t){typeof self<"u"&&typeof window>"u"?self.fetch=t:typeof window<"u"?window.fetch=t:console.warn("[ModelFetchInterceptor] Unable to set fetch in this environment")}isModelFile(t){return this.modelFileIndicators.some(r=>t.includes(r))}isLocalModelUrl(t){const r=!t.startsWith("http");return console.log("[ModelFetchInterceptor] URL detection:",t,"→",r?"LOCAL":"CDN"),r}createLocalProgressWrapper(t,r){if(!t.body||!this.options.onProgress)return t;const i=t.headers.get("content-length"),a=i?parseInt(i):0;let n=0;this.totalFiles++,this.activeDownloads.set(r,{loaded:0,total:a}),console.log("[ModelFetchInterceptor] Local model download started, total:",a,"bytes"),this.updateOverallProgress();const s=t.body.getReader(),u=this,l=new ReadableStream({start(p){function c(){return s.read().then(({done:h,value:g})=>{if(h){console.log("[ModelFetchInterceptor] Local model download complete");const _=u.activeDownloads.get(r);_&&(_.loaded=a||n,u.activeDownloads.set(r,_)),u.completedFiles++,u.updateOverallProgress(),u.completedFiles===u.totalFiles&&u.options.onProgress({percentage:100,loaded:u.completedFiles,total:u.totalFiles,stage:{type:$t.Ready,fromCache:!1}}),p.close();return}if(g){n+=g.length;const _=u.activeDownloads.get(r);_&&(_.loaded=n,u.activeDownloads.set(r,_)),u.updateOverallProgress()}return p.enqueue(g),c()})}return c()}});return new Response(l,{headers:t.headers,status:t.status,statusText:t.statusText})}async handleCDNDownload(t,r,i){const a=typeof r=="string"?r:r.toString();if(!this.options.onProgress)return t.call(globalThis,r,i);this.totalFiles++,this.activeDownloads.set(a,{loaded:0,total:1}),console.log("[ModelFetchInterceptor] CDN model file detected, basic progress tracking"),this.updateOverallProgress();const n=Date.now();try{const s=await t.call(globalThis,r,i),u=Date.now();console.log("[ModelFetchInterceptor] CDN model download completed in",u-n,"ms");const l=this.activeDownloads.get(a);return l&&(l.loaded=1,this.activeDownloads.set(a,l)),this.completedFiles++,this.updateOverallProgress(),s}catch(s){throw console.error("[ModelFetchInterceptor] CDN download error:",s),this.completedFiles++,this.updateOverallProgress(),s}}start(){if(this.isIntercepting){console.warn("[ModelFetchInterceptor] Already intercepting");return}console.log("[ModelFetchInterceptor] Starting fetch interception..."),this.fetchIntercepted=!1,this.isIntercepting=!0,this.activeDownloads.clear(),this.totalFiles=0,this.completedFiles=0,this.originalFetch=this.getFetchGlobal(),this.options.onProgress&&gr.isModelCached().then(r=>{r?(console.log("[ModelFetchInterceptor] Models likely cached from previous session"),this.options.onProgress({percentage:30,loaded:0,total:1,stage:{type:$t.Downloading,fromCache:!0},module:this.module})):console.log("[ModelFetchInterceptor] No cache found")}),this.options.onProgress&&(this.progressTimeout=setTimeout(()=>{console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:",this.fetchIntercepted),!this.fetchIntercepted&&this.options.onProgress&&(console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"),this.options.onProgress({percentage:100,loaded:1,total:1,stage:{type:$t.Ready,fromCache:!0},module:this.module}))},this.options.cacheDetectionTimeout));const t=this.originalFetch;this.setFetchGlobal(async(r,i)=>{const a=typeof r=="string"?r:r.toString();if(!this.isIntercepting)return t.call(globalThis,r,i);if(console.log("[ModelFetchInterceptor] 🌐 Fetch intercepted:",a),this.isModelFile(a)){const p=this.isLocalModelUrl(a);console.log("[ModelFetchInterceptor] 📦 Model file detected:",p?"local":"CDN"),this.fetchIntercepted=!0,this.progressTimeout&&(clearTimeout(this.progressTimeout),this.progressTimeout=void 0);const c=await gr.getCachedModel(a);if(c)return console.log("[ModelFetchInterceptor] Serving model from cache:",a),this.totalFiles++,this.completedFiles++,this.options.onProgress&&(this.updateOverallProgress(),this.completedFiles===this.totalFiles&&this.options.onProgress({percentage:100,loaded:this.completedFiles,total:this.totalFiles,stage:{type:$t.Ready,fromCache:!0},module:this.module})),c}if(!this.isModelFile(a))return t.call(globalThis,r,i);if(this.isLocalModelUrl(a)){const p=await t.call(globalThis,r,i),c=p.clone();return gr.cacheModel(a,c),this.createLocalProgressWrapper(p,a)}const n=await this.handleCDNDownload(t,r,i),s=n.clone(),u=n.headers.get("content-length"),l=u?parseInt(u):0;return gr.cacheModelWithProgress(a,s,l,(p,c)=>{if(this.options.onProgress){const h=c>0?p/c*100:0,g=p===c?100:Math.min(Math.round(h),98);this.options.onProgress({percentage:g,loaded:p,total:c,stage:{type:$t.Caching,fromCache:!1},module:this.module})}}).catch(p=>{console.error("[ModelFetchInterceptor] Background caching failed:",p)}),n})}stop(){this.isIntercepting&&(console.log("[ModelFetchInterceptor] Stopping fetch interception..."),this.progressTimeout&&(clearTimeout(this.progressTimeout),this.progressTimeout=void 0),this.originalFetch&&this.setFetchGlobal(this.originalFetch),this.isIntercepting=!1,this.fetchIntercepted=!1)}isActive(){return this.isIntercepting}wasIntercepted(){return this.fetchIntercepted}};We(Wa,"CACHE_NAME","vital-sign-models"),We(Wa,"CACHE_EXPIRY_MS",1440*60*1e3);let xy=Wa;const rp=128;let cr=null;self.onmessage=async e=>{const{inputData:t,hash:r}=e.data,{type:i}=t;try{if(i==="init"){const{modelPath:a,wasmPaths:n}=t,s=new xy({onProgress:u=>self.postMessage({progress:u,hash:r}),module:"liveness",modelFileIndicators:[".onnx"]});s.start(),_e.wasm.wasmPaths=n??"https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/",_e.wasm.numThreads=1,_e.wasm.simd=!0,cr=await Ga.create(a,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),s.stop(),self.postMessage({result:{type:"ready"},hash:r});return}if(i==="infer"){if(!cr)throw new Error("session not initialized");const a=t.tensor,n=new Qe("float32",a,[1,3,rp,rp]),s={};s[cr.inputNames[0]]=n;const u=(await cr.run(s))[cr.outputNames[0]].data,l=u[0],p=u[1],c=l-p,h=1/(1+Math.exp(c));self.postMessage({result:{type:"infer",spoofProb:h,diff:c},hash:r});return}}catch(a){self.postMessage({result:{type:"error",error:`${a}`},hash:r})}};
