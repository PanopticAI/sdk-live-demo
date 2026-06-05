(function(){"use strict";var I=Object.defineProperty,C=(r,o,i)=>o in r?I(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,x=(r,o,i)=>C(r,typeof o!="symbol"?o+"":o,i);function A(r,o,i){const t=r.createShader(o);if(!t)throw new Error("Failed to create shader");if(r.shaderSource(t,i),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)){const e=r.getShaderInfoLog(t);throw r.deleteShader(t),new Error(`Shader compilation failed: ${e}`)}return t}function M(r,o,i){const t=r.createProgram();if(!t)throw new Error("Failed to create program");if(r.attachShader(t,o),r.attachShader(t,i),r.linkProgram(t),!r.getProgramParameter(t,r.LINK_STATUS)){const e=r.getProgramInfoLog(t);throw r.deleteProgram(t),new Error(`Program linking failed: ${e}`)}return t}function p(r,o,i){const t=A(r,r.VERTEX_SHADER,o),e=A(r,r.FRAGMENT_SHADER,i),n=M(r,t,e);return r.deleteShader(t),r.deleteShader(e),n}function S(r){const o=r.createBuffer();if(!o)throw new Error("Failed to create buffer");r.bindBuffer(r.ARRAY_BUFFER,o);const i=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return r.bufferData(r.ARRAY_BUFFER,i,r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),o}const v=`
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
`,X=`
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
`;function w(r,o){const i=r.createTexture();if(!i)throw new Error("Failed to create texture");return r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),i}function y(r,o,i){const t=r.createFramebuffer();if(!t)throw new Error("Failed to create framebuffer");const e=r.createTexture();if(!e)throw new Error("Failed to create texture");r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,o,i,0,r.RGBA,r.UNSIGNED_BYTE,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.bindFramebuffer(r.FRAMEBUFFER,t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);const n=r.checkFramebufferStatus(r.FRAMEBUFFER);if(n!==r.FRAMEBUFFER_COMPLETE)throw new Error(`Framebuffer incomplete: ${n}`);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindTexture(r.TEXTURE_2D,null),{framebuffer:t,texture:e}}class O{constructor(o){x(this,"gl"),x(this,"rectProgram",null),x(this,"polygonProgram",null),x(this,"quadBuffer",null),this.gl=o,this.initializePrograms()}initializePrograms(){this.rectProgram=p(this.gl,v,G),this.polygonProgram=p(this.gl,v,X),this.quadBuffer=S(this.gl)}getRectProgram(){if(!this.rectProgram)throw new Error("Rect program not initialized");return this.rectProgram}getPolygonProgram(){if(!this.polygonProgram)throw new Error("Polygon program not initialized");return this.polygonProgram}getQuadBuffer(){if(!this.quadBuffer)throw new Error("Quad buffer not initialized");return this.quadBuffer}getGL(){return this.gl}}function P(r,o,i){const t=Math.floor(o),e=Math.floor(i),n=new Uint8Array(t*e*4);r.readPixels(0,0,t,e,r.RGBA,r.UNSIGNED_BYTE,n);const a=new Uint8Array(t*e*4);for(let u=0;u<e;u++)for(let f=0;f<t;f++){const c=(u*t+f)*4,l=((e-1-u)*t+f)*4;a[l]=n[c],a[l+1]=n[c+1],a[l+2]=n[c+2],a[l+3]=n[c+3]}return new ImageData(new Uint8ClampedArray(a),t,e)}function z(r,o,i,t){const{width:e,height:n}=i,a=Math.floor(t.w),u=Math.floor(t.h),f=w(r,i),{framebuffer:c,texture:l}=y(r,a,u),m=o.getRectProgram();r.useProgram(m);const _=r.getUniformLocation(m,"u_rect"),R=r.getUniformLocation(m,"u_sourceSize");r.uniform4f(_,t.x/e,t.y/n,t.w/e,t.h/n),r.uniform2f(R,e,n),r.bindFramebuffer(r.FRAMEBUFFER,c),r.viewport(0,0,a,u),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.bindBuffer(r.ARRAY_BUFFER,o.getQuadBuffer());const h=r.getAttribLocation(m,"a_position");r.enableVertexAttribArray(h),r.vertexAttribPointer(h,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,f),r.uniform1i(r.getUniformLocation(m,"u_sourceTexture"),0),r.drawArrays(r.TRIANGLE_STRIP,0,4);const b=P(r,a,u);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(f),r.deleteTexture(l),r.deleteFramebuffer(c),b}function W(r,o,i,t){if(t.length===0)throw new Error("No polygon points provided");const{width:e,height:n}=i;let a=t[0].x,u=t[0].y,f=t[0].x,c=t[0].y;for(let s=1;s<t.length;s++){const E=t[s];E.x<a&&(a=E.x),E.y<u&&(u=E.y),E.x>f&&(f=E.x),E.y>c&&(c=E.y)}const l=(f-a)*e,m=(c-u)*n,_=Math.floor(l),R=Math.floor(m),h=w(r,i),{framebuffer:b,texture:k}=y(r,_,R),g=o.getPolygonProgram();r.useProgram(g);const Y=r.getUniformLocation(g,"u_points"),j=r.getUniformLocation(g,"u_pointCount"),q=r.getUniformLocation(g,"u_boundingBox"),Q=r.getUniformLocation(g,"u_sourceSize"),F=new Float32Array(64);for(let s=0;s<Math.min(t.length,32);s++)F[s*2]=t[s].x,F[s*2+1]=t[s].y;r.uniform2fv(Y,F),r.uniform1i(j,Math.min(t.length,32)),r.uniform4f(q,a,u,f-a,c-u),r.uniform2f(Q,e,n),r.bindFramebuffer(r.FRAMEBUFFER,b),r.viewport(0,0,_,R),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.bindBuffer(r.ARRAY_BUFFER,o.getQuadBuffer());const D=r.getAttribLocation(g,"a_position");r.enableVertexAttribArray(D),r.vertexAttribPointer(D,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,h),r.uniform1i(r.getUniformLocation(g,"u_sourceTexture"),0),r.drawArrays(r.TRIANGLE_STRIP,0,4);const $=P(r,_,R);return r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(h),r.deleteTexture(k),r.deleteFramebuffer(b),$}let d=null,T=null;function U(){if(d&&T)return!0;try{const r=new OffscreenCanvas(1,1),o=r.getContext("webgl")||r.getContext("experimental-webgl");return o?(d=o,T=new O(d),console.log("[WebGLROIExtractorWorker] WebGL initialized in worker"),!0):(console.error("[WebGLROIExtractorWorker] WebGL not available in worker"),!1)}catch(r){return console.error("[WebGLROIExtractorWorker] Failed to initialize WebGL:",r),!1}}function B(r,o){if(!d||!T)throw new Error("WebGL not initialized");return z(d,T,r,o)}function L(r,o){if(!d||!T)throw new Error("WebGL not initialized");return W(d,T,r,o)}U();async function N(r){if(!U())throw new Error("WebGL initialization failed");if(r.type==="batch"){const{videoFrame:o,tasks:i}=r,t=[];for(const e of i)e.type==="rect"&&e.rect?t.push({id:e.id,data:B(o,e.rect)}):e.type==="polygon"&&e.normalizedPoints&&t.push({id:e.id,data:L(o,e.normalizedPoints)});return o instanceof ImageBitmap&&o.close(),t}if(r.type==="rect"){const{videoFrame:o,rect:i}=r,t=B(o,i);return o instanceof ImageBitmap&&o.close(),t}else if(r.type==="polygon"){const{videoFrame:o,normalizedPoints:i}=r,t=L(o,i);return o instanceof ImageBitmap&&o.close(),t}else throw new Error("Unknown operation type")}self.onmessage=async r=>{const{inputData:o,hash:i}=r.data;try{const t=await N(o),e=[];Array.isArray(t)?t.forEach(n=>{n.data&&n.data.data&&n.data.data.buffer&&e.push(n.data.data.buffer)}):t.data&&t.data.buffer&&e.push(t.data.buffer),self.postMessage({result:t,hash:i},e)}catch(t){console.error(`[WebGLROIExtractorWorker] Error processing message ${i}:`,t),self.postMessage({error:t instanceof Error?t.message:String(t),hash:i})}}})();
