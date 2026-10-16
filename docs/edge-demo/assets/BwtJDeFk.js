var k = Object.defineProperty;
var z = (e, t, n) => t in e ? k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var F = (e, t, n) => z(e, typeof t != "symbol" ? t + "" : t, n);
function w(e, t, n) {
  const r = e.createShader(t);
  if (!r)
    throw new Error("Failed to create shader");
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const o = e.getShaderInfoLog(r);
    throw e.deleteShader(r), new Error(`Shader compilation failed: ${o}`);
  }
  return r;
}
function Y(e, t, n) {
  const r = e.createProgram();
  if (!r)
    throw new Error("Failed to create program");
  if (e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r), !e.getProgramParameter(r, e.LINK_STATUS)) {
    const o = e.getProgramInfoLog(r);
    throw e.deleteProgram(r), new Error(`Program linking failed: ${o}`);
  }
  return r;
}
function y(e, t, n) {
  const r = w(e, e.VERTEX_SHADER, t), o = w(e, e.FRAGMENT_SHADER, n), i = Y(e, r, o);
  return e.deleteShader(r), e.deleteShader(o), i;
}
function H(e) {
  const t = e.createBuffer();
  if (!t)
    throw new Error("Failed to create buffer");
  e.bindBuffer(e.ARRAY_BUFFER, t);
  const n = new Float32Array([
    -1,
    -1,
    // bottom-left
    1,
    -1,
    // bottom-right
    -1,
    1,
    // top-left
    1,
    1
    // top-right
  ]);
  return e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, null), t;
}
const U = `
attribute vec2 a_position;
varying vec2 v_texCoord;

void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`, j = `
precision mediump float;

uniform sampler2D u_sourceTexture;
uniform vec4 u_rect;
uniform vec2 u_sourceSize;

varying vec2 v_texCoord;

void main() {
  vec2 sourceCoord = u_rect.xy + v_texCoord * u_rect.zw;
  gl_FragColor = texture2D(u_sourceTexture, sourceCoord);
}
`, Q = `
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
`;
function S(e, t) {
  const n = e.createTexture();
  if (!n)
    throw new Error("Failed to create texture");
  return e.bindTexture(e.TEXTURE_2D, n), e.texImage2D(
    e.TEXTURE_2D,
    0,
    e.RGBA,
    e.RGBA,
    e.UNSIGNED_BYTE,
    t
  ), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), n;
}
function C(e, t, n) {
  const r = e.createFramebuffer();
  if (!r)
    throw new Error("Failed to create framebuffer");
  const o = e.createTexture();
  if (!o)
    throw new Error("Failed to create texture");
  e.bindTexture(e.TEXTURE_2D, o), e.texImage2D(
    e.TEXTURE_2D,
    0,
    e.RGBA,
    t,
    n,
    0,
    e.RGBA,
    e.UNSIGNED_BYTE,
    null
  ), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.bindFramebuffer(e.FRAMEBUFFER, r), e.framebufferTexture2D(
    e.FRAMEBUFFER,
    e.COLOR_ATTACHMENT0,
    e.TEXTURE_2D,
    o,
    0
  );
  const i = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (i !== e.FRAMEBUFFER_COMPLETE)
    throw new Error(e.isContextLost() ? "WebGL context lost" : `Framebuffer incomplete: ${i}`);
  return e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindTexture(e.TEXTURE_2D, null), { framebuffer: r, texture: o };
}
class q {
  constructor(t) {
    F(this, "gl");
    F(this, "rectProgram", null);
    F(this, "polygonProgram", null);
    F(this, "quadBuffer", null);
    this.gl = t, this.initializePrograms();
  }
  initializePrograms() {
    this.rectProgram = y(this.gl, U, j), this.polygonProgram = y(this.gl, U, Q), this.quadBuffer = H(this.gl);
  }
  getRectProgram() {
    if (!this.rectProgram)
      throw new Error("Rect program not initialized");
    return this.rectProgram;
  }
  getPolygonProgram() {
    if (!this.polygonProgram)
      throw new Error("Polygon program not initialized");
    return this.polygonProgram;
  }
  getQuadBuffer() {
    if (!this.quadBuffer)
      throw new Error("Quad buffer not initialized");
    return this.quadBuffer;
  }
  getGL() {
    return this.gl;
  }
}
function G(e, t, n) {
  const r = Math.floor(t), o = Math.floor(n), i = new Uint8Array(r * o * 4);
  e.readPixels(0, 0, r, o, e.RGBA, e.UNSIGNED_BYTE, i);
  const a = new Uint8Array(r * o * 4);
  for (let u = 0; u < o; u++)
    for (let c = 0; c < r; c++) {
      const s = (u * r + c) * 4, d = ((o - 1 - u) * r + c) * 4;
      a[d] = i[s], a[d + 1] = i[s + 1], a[d + 2] = i[s + 2], a[d + 3] = i[s + 3];
    }
  return new ImageData(new Uint8ClampedArray(a), r, o);
}
function $(e, t, n, r) {
  const { width: o, height: i } = n, a = Math.floor(r.w), u = Math.floor(r.h), c = S(e, n), { framebuffer: s, texture: d } = C(e, a, u), x = t.getRectProgram();
  e.useProgram(x);
  const _ = e.getUniformLocation(x, "u_rect"), h = e.getUniformLocation(x, "u_sourceSize");
  e.uniform4f(_, r.x / o, r.y / i, r.w / o, r.h / i), e.uniform2f(h, o, i), e.bindFramebuffer(e.FRAMEBUFFER, s), e.viewport(0, 0, a, u), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.bindBuffer(e.ARRAY_BUFFER, t.getQuadBuffer());
  const b = e.getAttribLocation(x, "a_position");
  e.enableVertexAttribArray(b), e.vertexAttribPointer(b, 2, e.FLOAT, !1, 0, 0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, c), e.uniform1i(e.getUniformLocation(x, "u_sourceTexture"), 0), e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
  const p = G(e, a, u);
  return e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteTexture(c), e.deleteTexture(d), e.deleteFramebuffer(s), p;
}
function V(e, t, n, r) {
  if (r.length === 0)
    throw new Error("No polygon points provided");
  const { width: o, height: i } = n;
  let a = r[0].x, u = r[0].y, c = r[0].x, s = r[0].y;
  for (let f = 1; f < r.length; f++) {
    const m = r[f];
    m.x < a && (a = m.x), m.y < u && (u = m.y), m.x > c && (c = m.x), m.y > s && (s = m.y);
  }
  const d = (c - a) * o, x = (s - u) * i, _ = Math.floor(d), h = Math.floor(x), b = S(e, n), { framebuffer: p, texture: M } = C(e, _, h), R = t.getPolygonProgram();
  e.useProgram(R);
  const D = e.getUniformLocation(R, "u_points"), X = e.getUniformLocation(R, "u_pointCount"), O = e.getUniformLocation(R, "u_boundingBox"), l = e.getUniformLocation(R, "u_sourceSize"), L = new Float32Array(64);
  for (let f = 0; f < Math.min(r.length, 32); f++)
    L[f * 2] = r[f].x, L[f * 2 + 1] = r[f].y;
  e.uniform2fv(D, L), e.uniform1i(X, Math.min(r.length, 32)), e.uniform4f(O, a, u, c - a, s - u), e.uniform2f(l, o, i), e.bindFramebuffer(e.FRAMEBUFFER, p), e.viewport(0, 0, _, h), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.bindBuffer(e.ARRAY_BUFFER, t.getQuadBuffer());
  const v = e.getAttribLocation(R, "a_position");
  e.enableVertexAttribArray(v), e.vertexAttribPointer(v, 2, e.FLOAT, !1, 0, 0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, b), e.uniform1i(e.getUniformLocation(R, "u_sourceTexture"), 0), e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
  const N = G(e, _, h);
  return e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteTexture(b), e.deleteTexture(M), e.deleteFramebuffer(p), N;
}
let A = null, E = null, T = null;
function P() {
  E = null, T = null, A = null;
}
function W() {
  if (E && T && !E.isContextLost()) return !0;
  (E || T || A) && P();
  try {
    const e = new OffscreenCanvas(1, 1), t = e.getContext("webgl") || e.getContext("experimental-webgl");
    return !t || t.isContextLost() ? (console.error("[WebGLROIExtractorWorker] WebGL not available in worker"), !1) : (e.addEventListener("webglcontextlost", () => {
      A === e && (console.warn("[WebGLROIExtractorWorker] WebGL context lost; reinitializing on the next frame"), P());
    }), A = e, E = t, T = new q(E), console.log("[WebGLROIExtractorWorker] WebGL initialized in worker"), !0);
  } catch (e) {
    return console.error("[WebGLROIExtractorWorker] Failed to initialize WebGL:", e), !1;
  }
}
function B(e, t) {
  if (!E || !T)
    throw new Error("WebGL not initialized");
  return $(E, T, e, t);
}
function I(e, t) {
  if (!E || !T)
    throw new Error("WebGL not initialized");
  return V(E, T, e, t);
}
W();
async function K(e) {
  if (!W())
    throw new Error("WebGL initialization failed");
  if (e.type === "batch") {
    const { videoFrame: t, tasks: n } = e, r = [];
    for (const o of n)
      o.type === "rect" && o.rect ? r.push({
        id: o.id,
        data: B(t, o.rect)
      }) : o.type === "polygon" && o.normalizedPoints && r.push({
        id: o.id,
        data: I(t, o.normalizedPoints)
      });
    return t instanceof ImageBitmap && t.close(), r;
  }
  if (e.type === "rect") {
    const { videoFrame: t, rect: n } = e, r = B(t, n);
    return t instanceof ImageBitmap && t.close(), r;
  } else if (e.type === "polygon") {
    const { videoFrame: t, normalizedPoints: n } = e, r = I(t, n);
    return t instanceof ImageBitmap && t.close(), r;
  } else
    throw new Error("Unknown operation type");
}
self.onmessage = async (e) => {
  const { inputData: t, hash: n } = e.data;
  try {
    const r = await K(t), o = [];
    Array.isArray(r) ? r.forEach((i) => {
      i.data && i.data.data && i.data.data.buffer && o.push(i.data.data.buffer);
    }) : r.data && r.data.buffer && o.push(r.data.buffer), self.postMessage({ result: r, hash: n }, o);
  } catch (r) {
    console.error(`[WebGLROIExtractorWorker] Error processing message ${n}:`, r), self.postMessage({
      error: r instanceof Error ? r.message : String(r),
      hash: n
    });
  }
};
