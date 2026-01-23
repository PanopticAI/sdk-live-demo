(function(){"use strict";var D=Object.defineProperty,C=(E,s,T)=>s in E?D(E,s,{enumerable:!0,configurable:!0,writable:!0,value:T}):E[s]=T,A=(E,s,T)=>C(E,typeof s!="symbol"?s+"":s,T);(function(){function E(r,o,e){const t=r.createShader(o);if(!t)throw new Error("Failed to create shader");if(r.shaderSource(t,e),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)){const n=r.getShaderInfoLog(t);throw r.deleteShader(t),new Error(`Shader compilation failed: ${n}`)}return t}function s(r,o,e){const t=r.createProgram();if(!t)throw new Error("Failed to create program");if(r.attachShader(t,o),r.attachShader(t,e),r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const n=r.getProgramInfoLog(t);throw r.deleteProgram(t),new Error(`Program linking failed: ${n}`)}return t}function T(r,o,e){const t=E(r,r.VERTEX_SHADER,o),n=E(r,r.FRAGMENT_SHADER,e),i=s(r,t,n);return r.deleteShader(t),r.deleteShader(n),i}function I(r){const o=r.createBuffer();if(!o)throw new Error("Failed to create buffer");r.bindBuffer(r.ARRAY_BUFFER,o);const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),o}const U=`
attribute vec2 a_position;
varying vec2 v_texCoord;

void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`,M=`
precision mediump float;

uniform sampler2D u_sourceTexture;
uniform vec4 u_rect;
uniform vec2 u_sourceSize;

varying vec2 v_texCoord;

void main() {
  vec2 sourceCoord = u_rect.xy + v_texCoord * u_rect.zw;
  gl_FragColor = texture2D(u_sourceTexture, sourceCoord);
}
`,S=`
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
`;function p(r,o){const e=r.createTexture();if(!e)throw new Error("Failed to create texture");return r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),e}function P(r,o,e){const t=r.createFramebuffer();if(!t)throw new Error("Failed to create framebuffer");const n=r.createTexture();if(!n)throw new Error("Failed to create texture");r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,o,e,0,r.RGBA,r.UNSIGNED_BYTE,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindFramebuffer(r.FRAMEBUFFER,t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,n,0);const i=r.checkFramebufferStatus(r.FRAMEBUFFER);if(i!==r.FRAMEBUFFER_COMPLETE)throw new Error(`Framebuffer incomplete: ${i}`);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindTexture(r.TEXTURE_2D,null),{framebuffer:t,texture:n}}class G{constructor(o){A(this,"gl"),A(this,"rectProgram",null),A(this,"polygonProgram",null),A(this,"quadBuffer",null),this.gl=o,this.initializePrograms()}initializePrograms(){this.rectProgram=T(this.gl,U,M),this.polygonProgram=T(this.gl,U,S),this.quadBuffer=I(this.gl)}getRectProgram(){if(!this.rectProgram)throw new Error("Rect program not initialized");return this.rectProgram}getPolygonProgram(){if(!this.polygonProgram)throw new Error("Polygon program not initialized");return this.polygonProgram}getQuadBuffer(){if(!this.quadBuffer)throw new Error("Quad buffer not initialized");return this.quadBuffer}getGL(){return this.gl}}function y(r,o,e){const t=Math.floor(o),n=Math.floor(e),i=new Uint8Array(t*n*4);r.readPixels(0,0,t,n,r.RGBA,r.UNSIGNED_BYTE,i);const a=new Uint8Array(t*n*4);for(let u=0;u<n;u++)for(let f=0;f<t;f++){const c=(u*t+f)*4,g=((n-1-u)*t+f)*4;a[g]=i[c],a[g+1]=i[c+1],a[g+2]=i[c+2],a[g+3]=i[c+3]}return new ImageData(new Uint8ClampedArray(a),t,n)}function X(r,o,e,t){const{width:n,height:i}=e,a=Math.floor(t.w),u=Math.floor(t.h),f=p(r,e),{framebuffer:c,texture:g}=P(r,a,u),_=o.getRectProgram();r.useProgram(_);const x=r.getUniformLocation(_,"u_rect"),F=r.getUniformLocation(_,"u_sourceSize");r.uniform4f(x,t.x/n,t.y/i,t.w/n,t.h/i),r.uniform2f(F,n,i),r.bindFramebuffer(r.FRAMEBUFFER,c),r.viewport(0,0,a,u),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.bindBuffer(r.ARRAY_BUFFER,o.getQuadBuffer());const b=r.getAttribLocation(_,"a_position");r.enableVertexAttribArray(b),r.vertexAttribPointer(b,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,f),r.uniform1i(r.getUniformLocation(_,"u_sourceTexture"),0),r.drawArrays(r.TRIANGLE_STRIP,0,4);const v=y(r,a,u);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(f),r.deleteTexture(g),r.deleteFramebuffer(c),v}function O(r,o,e,t){if(t.length===0)throw new Error("No polygon points provided");const{width:n,height:i}=e;let a=t[0].x,u=t[0].y,f=t[0].x,c=t[0].y;for(let l=1;l<t.length;l++){const d=t[l];d.x<a&&(a=d.x),d.y<u&&(u=d.y),d.x>f&&(f=d.x),d.y>c&&(c=d.y)}const g=(f-a)*n,_=(c-u)*i,x=Math.floor(g),F=Math.floor(_),b=p(r,e),{framebuffer:v,texture:k}=P(r,x,F),R=o.getPolygonProgram();r.useProgram(R);const Y=r.getUniformLocation(R,"u_points"),j=r.getUniformLocation(R,"u_pointCount"),$=r.getUniformLocation(R,"u_boundingBox"),q=r.getUniformLocation(R,"u_sourceSize"),w=new Float32Array(64);for(let l=0;l<Math.min(t.length,32);l++)w[l*2]=t[l].x,w[l*2+1]=t[l].y;r.uniform2fv(Y,w),r.uniform1i(j,Math.min(t.length,32)),r.uniform4f($,a,u,f-a,c-u),r.uniform2f(q,n,i),r.bindFramebuffer(r.FRAMEBUFFER,v),r.viewport(0,0,x,F),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.bindBuffer(r.ARRAY_BUFFER,o.getQuadBuffer());const B=r.getAttribLocation(R,"a_position");r.enableVertexAttribArray(B),r.vertexAttribPointer(B,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,b),r.uniform1i(r.getUniformLocation(R,"u_sourceTexture"),0),r.drawArrays(r.TRIANGLE_STRIP,0,4);const Q=y(r,x,F);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(b),r.deleteTexture(k),r.deleteFramebuffer(v),Q}let m=null,h=null;function L(){if(m&&h)return!0;try{const r=new OffscreenCanvas(1,1),o=r.getContext("webgl")||r.getContext("experimental-webgl");return o?(m=o,h=new G(m),console.log("[WebGLROIExtractorWorker] WebGL initialized in worker"),!0):(console.error("[WebGLROIExtractorWorker] WebGL not available in worker"),!1)}catch(r){return console.error("[WebGLROIExtractorWorker] Failed to initialize WebGL:",r),!1}}function W(r,o){if(!m||!h)throw new Error("WebGL not initialized");return X(m,h,r,o)}function N(r,o){if(!m||!h)throw new Error("WebGL not initialized");return O(m,h,r,o)}L();async function z(r){if(!L())throw new Error("WebGL initialization failed");if(r.type==="rect"){const{videoFrame:o,rect:e}=r;return W(o,e)}else if(r.type==="polygon"){const{videoFrame:o,normalizedPoints:e}=r;return N(o,e)}throw new Error(`Unknown worker input type: ${r.type}`)}self.onmessage=async r=>{const{inputData:o,hash:e}=r.data;try{const t=await z(o);self.postMessage({result:t,hash:e},[t.data.buffer])}catch(t){console.error(`[WebGLROIExtractorWorker] Error processing message ${e}:`,t),self.postMessage({error:t instanceof Error?t.message:String(t),hash:e})}}})()})();
