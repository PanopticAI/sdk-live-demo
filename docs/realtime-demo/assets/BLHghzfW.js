var q=Object.defineProperty;var V=(T,E,R)=>E in T?q(T,E,{enumerable:!0,configurable:!0,writable:!0,value:R}):T[E]=R;var w=(T,E,R)=>V(T,typeof E!="symbol"?E+"":E,R);(function(){"use strict";function T(e,t,o){const r=e.createShader(t);if(!r)throw new Error("Failed to create shader");if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const n=e.getShaderInfoLog(r);throw e.deleteShader(r),new Error(`Shader compilation failed: ${n}`)}return r}function E(e,t,o){const r=e.createProgram();if(!r)throw new Error("Failed to create program");if(e.attachShader(r,t),e.attachShader(r,o),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const n=e.getProgramInfoLog(r);throw e.deleteProgram(r),new Error(`Program linking failed: ${n}`)}return r}function R(e,t,o){const r=T(e,e.VERTEX_SHADER,t),n=T(e,e.FRAGMENT_SHADER,o),i=E(e,r,n);return e.deleteShader(r),e.deleteShader(n),i}function C(e){const t=e.createBuffer();if(!t)throw new Error("Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,t);const o=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),t}const y=`
attribute vec2 a_position;
varying vec2 v_texCoord;

void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,G=`
precision mediump float;

uniform sampler2D u_sourceTexture;
uniform vec4 u_rect;
uniform vec2 u_sourceSize;

varying vec2 v_texCoord;

void main() {
  vec2 sourceCoord = u_rect.xy + v_texCoord * u_rect.zw;
  gl_FragColor = texture2D(u_sourceTexture, sourceCoord);
}
`,D=`
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
`;function L(e,t){const o=e.createTexture();if(!o)throw new Error("Failed to create texture");return e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),o}function P(e,t,o){const r=e.createFramebuffer();if(!r)throw new Error("Failed to create framebuffer");const n=e.createTexture();if(!n)throw new Error("Failed to create texture");e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,o,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);const i=e.checkFramebufferStatus(e.FRAMEBUFFER);if(i!==e.FRAMEBUFFER_COMPLETE)throw new Error(`Framebuffer incomplete: ${i}`);return e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),{framebuffer:r,texture:n}}class M{constructor(t){w(this,"gl");w(this,"rectProgram",null);w(this,"polygonProgram",null);w(this,"quadBuffer",null);this.gl=t,this.initializePrograms()}initializePrograms(){this.rectProgram=R(this.gl,y,G),this.polygonProgram=R(this.gl,y,D),this.quadBuffer=C(this.gl)}getRectProgram(){if(!this.rectProgram)throw new Error("Rect program not initialized");return this.rectProgram}getPolygonProgram(){if(!this.polygonProgram)throw new Error("Polygon program not initialized");return this.polygonProgram}getQuadBuffer(){if(!this.quadBuffer)throw new Error("Quad buffer not initialized");return this.quadBuffer}getGL(){return this.gl}}function B(e,t,o){const r=Math.floor(t),n=Math.floor(o),i=new Uint8Array(r*n*4);e.readPixels(0,0,r,n,e.RGBA,e.UNSIGNED_BYTE,i);const a=new Uint8Array(r*n*4);for(let u=0;u<n;u++)for(let c=0;c<r;c++){const f=(u*r+c)*4,d=((n-1-u)*r+c)*4;a[d]=i[f],a[d+1]=i[f+1],a[d+2]=i[f+2],a[d+3]=i[f+3]}return new ImageData(new Uint8ClampedArray(a),r,n)}function X(e,t,o,r){const{width:n,height:i}=o,a=Math.floor(r.w),u=Math.floor(r.h),c=L(e,o),{framebuffer:f,texture:d}=P(e,a,u),x=t.getRectProgram();e.useProgram(x);const b=e.getUniformLocation(x,"u_rect"),p=e.getUniformLocation(x,"u_sourceSize");e.uniform4f(b,r.x/n,r.y/i,r.w/n,r.h/i),e.uniform2f(p,n,i),e.bindFramebuffer(e.FRAMEBUFFER,f),e.viewport(0,0,a,u),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,t.getQuadBuffer());const A=e.getAttribLocation(x,"a_position");e.enableVertexAttribArray(A),e.vertexAttribPointer(A,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,c),e.uniform1i(e.getUniformLocation(x,"u_sourceTexture"),0),e.drawArrays(e.TRIANGLE_STRIP,0,4);const v=B(e,a,u);return e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(c),e.deleteTexture(d),e.deleteFramebuffer(f),v}function W(e,t,o,r){if(r.length===0)throw new Error("No polygon points provided");const{width:n,height:i}=o;let a=r[0].x,u=r[0].y,c=r[0].x,f=r[0].y;for(let s=1;s<r.length;s++){const m=r[s];m.x<a&&(a=m.x),m.y<u&&(u=m.y),m.x>c&&(c=m.x),m.y>f&&(f=m.y)}const d=(c-a)*n,x=(f-u)*i,b=Math.floor(d),p=Math.floor(x),A=L(e,o),{framebuffer:v,texture:z}=P(e,b,p),h=t.getPolygonProgram();e.useProgram(h);const Y=e.getUniformLocation(h,"u_points"),H=e.getUniformLocation(h,"u_pointCount"),j=e.getUniformLocation(h,"u_boundingBox"),Q=e.getUniformLocation(h,"u_sourceSize"),U=new Float32Array(64);for(let s=0;s<Math.min(r.length,32);s++)U[s*2]=r[s].x,U[s*2+1]=r[s].y;e.uniform2fv(Y,U),e.uniform1i(H,Math.min(r.length,32)),e.uniform4f(j,a,u,c-a,f-u),e.uniform2f(Q,n,i),e.bindFramebuffer(e.FRAMEBUFFER,v),e.viewport(0,0,b,p),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindBuffer(e.ARRAY_BUFFER,t.getQuadBuffer());const I=e.getAttribLocation(h,"a_position");e.enableVertexAttribArray(I),e.vertexAttribPointer(I,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,A),e.uniform1i(e.getUniformLocation(h,"u_sourceTexture"),0),e.drawArrays(e.TRIANGLE_STRIP,0,4);const $=B(e,b,p);return e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(A),e.deleteTexture(z),e.deleteFramebuffer(v),$}let _=null,F=null;function S(){if(_&&F)return!0;try{const e=new OffscreenCanvas(1,1),t=e.getContext("webgl")||e.getContext("experimental-webgl");return t?(_=t,F=new M(_),console.log("[WebGLROIExtractorWorker] WebGL initialized in worker"),!0):(console.error("[WebGLROIExtractorWorker] WebGL not available in worker"),!1)}catch(e){return console.error("[WebGLROIExtractorWorker] Failed to initialize WebGL:",e),!1}}function O(e,t){if(!_||!F)throw new Error("WebGL not initialized");return X(_,F,e,t)}function N(e,t){if(!_||!F)throw new Error("WebGL not initialized");return W(_,F,e,t)}S();async function k(e){if(!S())throw new Error("WebGL initialization failed");if(e.type==="rect"){const{videoFrame:t,rect:o}=e;return O(t,o)}else if(e.type==="polygon"){const{videoFrame:t,normalizedPoints:o}=e;return N(t,o)}throw new Error(`Unknown worker input type: ${e.type}`)}self.onmessage=async e=>{const{inputData:t,hash:o}=e.data;try{const r=await k(t);self.postMessage({result:r,hash:o},[r.data.buffer])}catch(r){console.error(`[WebGLROIExtractorWorker] Error processing message ${o}:`,r),self.postMessage({error:r instanceof Error?r.message:String(r),hash:o})}}})();
