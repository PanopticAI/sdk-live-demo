var z=Object.defineProperty,N=(r,o,n)=>o in r?z(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,b=(r,o,n)=>N(r,typeof o!="symbol"?o+"":o,n);function v(r,o,n){const t=r.createShader(o);if(!t)throw new Error("Failed to create shader");if(r.shaderSource(t,n),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)){const e=r.getShaderInfoLog(t);throw r.deleteShader(t),new Error(`Shader compilation failed: ${e}`)}return t}function k(r,o,n){const t=r.createProgram();if(!t)throw new Error("Failed to create program");if(r.attachShader(t,o),r.attachShader(t,n),r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const e=r.getProgramInfoLog(t);throw r.deleteProgram(t),new Error(`Program linking failed: ${e}`)}return t}function w(r,o,n){const t=v(r,r.VERTEX_SHADER,o),e=v(r,r.FRAGMENT_SHADER,n),i=k(r,t,e);return r.deleteShader(t),r.deleteShader(e),i}function Y(r){const o=r.createBuffer();if(!o)throw new Error("Failed to create buffer");r.bindBuffer(r.ARRAY_BUFFER,o);const n=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return r.bufferData(r.ARRAY_BUFFER,n,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),o}const y=`
attribute vec2 a_position;
varying vec2 v_texCoord;

void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,j=`
precision mediump float;

uniform sampler2D u_sourceTexture;
uniform vec4 u_rect;
uniform vec2 u_sourceSize;

varying vec2 v_texCoord;

void main() {
  vec2 sourceCoord = u_rect.xy + v_texCoord * u_rect.zw;
  gl_FragColor = texture2D(u_sourceTexture, sourceCoord);
}
`,q=`
precision mediump float;

uniform sampler2D u_sourceTexture;
uniform vec2 u_points[32];
uniform int u_pointCount;
uniform vec4 u_boundingBox;
uniform vec2 u_sourceSize;

varying vec2 v_texCoord;

vec2 getPointAt(int index) {
  for (int i = 0; i < 32; i++) {
    if (i == index) {
      return u_points[i];
    }
  }
  return vec2(0.0);
}

bool pointInPolygon(vec2 point, vec2 polygon[32], int count) {
  bool inside = false;
  vec2 vj = getPointAt(count - 1);
  vec2 vi;

  for (int i = 0; i < 32; i++) {
    if (i >= count) break;

    vi = polygon[i];

    if (((vi.y > point.y) != (vj.y > point.y)) &&
        (point.x < (vj.x - vi.x) * (point.y - vi.y) / (vj.y - vi.y) + vi.x)) {
      inside = !inside;
    }

    vj = vi;
  }

  return inside;
}

void main() {
  vec2 sourceCoord = u_boundingBox.xy + v_texCoord * u_boundingBox.zw;

  if (pointInPolygon(sourceCoord, u_points, u_pointCount)) {
    gl_FragColor = texture2D(u_sourceTexture, sourceCoord);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
  }
}
`;function B(r,o){const n=r.createTexture();if(!n)throw new Error("Failed to create texture");return r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),n}function C(r,o,n){const t=r.createFramebuffer();if(!t)throw new Error("Failed to create framebuffer");const e=r.createTexture();if(!e)throw new Error("Failed to create texture");r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,o,n,0,r.RGBA,r.UNSIGNED_BYTE,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindFramebuffer(r.FRAMEBUFFER,t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);const i=r.checkFramebufferStatus(r.FRAMEBUFFER);if(i!==r.FRAMEBUFFER_COMPLETE)throw new Error(r.isContextLost()?"WebGL context lost":`Framebuffer incomplete: ${i}`);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindTexture(r.TEXTURE_2D,null),{framebuffer:t,texture:e}}class Q{constructor(o){b(this,"gl"),b(this,"rectProgram",null),b(this,"polygonProgram",null),b(this,"quadBuffer",null),this.gl=o,this.initializePrograms()}initializePrograms(){this.rectProgram=w(this.gl,y,j),this.polygonProgram=w(this.gl,y,q),this.quadBuffer=Y(this.gl)}getRectProgram(){if(!this.rectProgram)throw new Error("Rect program not initialized");return this.rectProgram}getPolygonProgram(){if(!this.polygonProgram)throw new Error("Polygon program not initialized");return this.polygonProgram}getQuadBuffer(){if(!this.quadBuffer)throw new Error("Quad buffer not initialized");return this.quadBuffer}getGL(){return this.gl}}function I(r,o,n){const t=Math.floor(o),e=Math.floor(n),i=new Uint8Array(t*e*4);r.readPixels(0,0,t,e,r.RGBA,r.UNSIGNED_BYTE,i);const a=new Uint8Array(t*e*4);for(let u=0;u<e;u++)for(let f=0;f<t;f++){const c=(u*t+f)*4,E=((e-1-u)*t+f)*4;a[E]=i[c],a[E+1]=i[c+1],a[E+2]=i[c+2],a[E+3]=i[c+3]}return new ImageData(new Uint8ClampedArray(a),t,e)}function $(r,o,n,t){const{width:e,height:i}=n,a=Math.floor(t.w),u=Math.floor(t.h),f=B(r,n),{framebuffer:c,texture:E}=C(r,a,u),m=o.getRectProgram();r.useProgram(m);const _=r.getUniformLocation(m,"u_rect"),R=r.getUniformLocation(m,"u_sourceSize");r.uniform4f(_,t.x/e,t.y/i,t.w/e,t.h/i),r.uniform2f(R,e,i),r.bindFramebuffer(r.FRAMEBUFFER,c),r.viewport(0,0,a,u),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.bindBuffer(r.ARRAY_BUFFER,o.getQuadBuffer());const h=r.getAttribLocation(m,"a_position");r.enableVertexAttribArray(h),r.vertexAttribPointer(h,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,f),r.uniform1i(r.getUniformLocation(m,"u_sourceTexture"),0),r.drawArrays(r.TRIANGLE_STRIP,0,4);const x=I(r,a,u);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(f),r.deleteTexture(E),r.deleteFramebuffer(c),x}function H(r,o,n,t){if(t.length===0)throw new Error("No polygon points provided");const{width:e,height:i}=n;let a=t[0].x,u=t[0].y,f=t[0].x,c=t[0].y;for(let l=1;l<t.length;l++){const d=t[l];d.x<a&&(a=d.x),d.y<u&&(u=d.y),d.x>f&&(f=d.x),d.y>c&&(c=d.y)}const E=(f-a)*e,m=(c-u)*i,_=Math.floor(E),R=Math.floor(m),h=B(r,n),{framebuffer:x,texture:G}=C(r,_,R),T=o.getPolygonProgram();r.useProgram(T);const M=r.getUniformLocation(T,"u_points"),S=r.getUniformLocation(T,"u_pointCount"),X=r.getUniformLocation(T,"u_boundingBox"),W=r.getUniformLocation(T,"u_sourceSize"),A=new Float32Array(64);for(let l=0;l<Math.min(t.length,32);l++)A[l*2]=t[l].x,A[l*2+1]=t[l].y;r.uniform2fv(M,A),r.uniform1i(S,Math.min(t.length,32)),r.uniform4f(X,a,u,f-a,c-u),r.uniform2f(W,e,i),r.bindFramebuffer(r.FRAMEBUFFER,x),r.viewport(0,0,_,R),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.bindBuffer(r.ARRAY_BUFFER,o.getQuadBuffer());const p=r.getAttribLocation(T,"a_position");r.enableVertexAttribArray(p),r.vertexAttribPointer(p,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,h),r.uniform1i(r.getUniformLocation(T,"u_sourceTexture"),0),r.drawArrays(r.TRIANGLE_STRIP,0,4);const O=I(r,_,R);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(h),r.deleteTexture(G),r.deleteFramebuffer(x),O}let F=null,s=null,g=null;function P(){s=null,g=null,F=null}function D(){if(s&&g&&!s.isContextLost())return!0;(s||g||F)&&P();try{const r=new OffscreenCanvas(1,1),o=r.getContext("webgl")||r.getContext("experimental-webgl");return!o||o.isContextLost()?(console.error("[WebGLROIExtractorWorker] WebGL not available in worker"),!1):(r.addEventListener("webglcontextlost",()=>{F===r&&(console.warn("[WebGLROIExtractorWorker] WebGL context lost; reinitializing on the next frame"),P())}),F=r,s=o,g=new Q(s),console.log("[WebGLROIExtractorWorker] WebGL initialized in worker"),!0)}catch(r){return console.error("[WebGLROIExtractorWorker] Failed to initialize WebGL:",r),!1}}function U(r,o){if(!s||!g)throw new Error("WebGL not initialized");return $(s,g,r,o)}function L(r,o){if(!s||!g)throw new Error("WebGL not initialized");return H(s,g,r,o)}D();async function V(r){if(!D())throw new Error("WebGL initialization failed");if(r.type==="batch"){const{videoFrame:o,tasks:n}=r,t=[];for(const e of n)e.type==="rect"&&e.rect?t.push({id:e.id,data:U(o,e.rect)}):e.type==="polygon"&&e.normalizedPoints&&t.push({id:e.id,data:L(o,e.normalizedPoints)});return o instanceof ImageBitmap&&o.close(),t}if(r.type==="rect"){const{videoFrame:o,rect:n}=r,t=U(o,n);return o instanceof ImageBitmap&&o.close(),t}else if(r.type==="polygon"){const{videoFrame:o,normalizedPoints:n}=r,t=L(o,n);return o instanceof ImageBitmap&&o.close(),t}else throw new Error("Unknown operation type")}self.onmessage=async r=>{const{inputData:o,hash:n}=r.data;try{const t=await V(o),e=[];Array.isArray(t)?t.forEach(i=>{i.data&&i.data.data&&i.data.data.buffer&&e.push(i.data.data.buffer)}):t.data&&t.data.buffer&&e.push(t.data.buffer),self.postMessage({result:t,hash:n},e)}catch(t){console.error(`[WebGLROIExtractorWorker] Error processing message ${n}:`,t),self.postMessage({error:t instanceof Error?t.message:String(t),hash:n})}};
