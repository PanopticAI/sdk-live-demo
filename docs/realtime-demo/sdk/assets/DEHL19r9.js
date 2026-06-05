var z = Object.defineProperty;
var H = (r, t, e) => t in r ? z(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var h = (r, t, e) => H(r, typeof t != "symbol" ? t + "" : t, e);
import * as f from "onnxruntime-web";
var w = /* @__PURE__ */ ((r) => (r.Downloading = "downloading", r.Caching = "caching", r.Ready = "ready", r))(w || {});
const M = class M {
  constructor(t = {}) {
    h(this, "originalFetch", null);
    h(this, "isIntercepting", !1);
    h(this, "fetchIntercepted", !1);
    h(this, "progressTimeout");
    h(this, "options");
    // 24 hours
    // Progress tracking for multiple concurrent downloads
    h(this, "activeDownloads", /* @__PURE__ */ new Map());
    h(this, "totalFiles", 0);
    h(this, "completedFiles", 0);
    // Model file indicators
    h(this, "modelFileIndicators");
    // Module name
    h(this, "module");
    this.options = {
      cacheDetectionTimeout: 1e3,
      ...t
    }, this.modelFileIndicators = t.modelFileIndicators || [], this.module = t.module;
  }
  /**
   * Calculate and update overall progress for multiple concurrent downloads
   */
  updateOverallProgress() {
    if (!this.options.onProgress) return;
    let t = 0, e = 0;
    for (const n of this.activeDownloads.values())
      t += n.loaded, e += n.total;
    if (e === 0 && this.totalFiles > 0) {
      const n = this.completedFiles / this.totalFiles * 70 + 30;
      this.options.onProgress({
        percentage: Math.min(Math.round(n), 100),
        loaded: this.completedFiles,
        total: this.totalFiles,
        stage: { type: w.Downloading, fromCache: !1 },
        module: this.module
      });
      return;
    }
    const s = 30, o = e > 0 ? t / e * 70 : 0, a = Math.min(s + o, 100);
    this.options.onProgress({
      percentage: Math.round(a),
      loaded: t,
      total: e,
      stage: { type: w.Downloading, fromCache: !1 },
      module: this.module
    });
  }
  /**
   * Check if models are cached using the browser Cache API
   */
  static async isModelCached() {
    try {
      if (!("caches" in (typeof window < "u" ? window : self)))
        return !1;
      const t = await caches.open(this.CACHE_NAME), e = await t.keys(), s = Date.now();
      for (const o of e) {
        const a = await t.match(o);
        if (a) {
          const n = a.headers.get("x-cached-time");
          if (n && s - parseInt(n) < this.CACHE_EXPIRY_MS)
            return console.log("[ModelFetchInterceptor] Found cached model:", o.url), !0;
        }
      }
      return !1;
    } catch (t) {
      return console.error("[ModelFetchInterceptor] Error checking cache:", t), !1;
    }
  }
  /**
   * Store model response in cache with timestamp and progress tracking
   */
  static async cacheModel(t, e) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      console.log("[ModelFetchInterceptor] Attempting to cache model:", t);
      const s = await caches.open(this.CACHE_NAME), o = e.clone(), a = new Headers(o.headers);
      a.set("x-cached-time", Date.now().toString());
      const n = new Response(o.body, {
        status: o.status,
        statusText: o.statusText,
        headers: a
      });
      await s.put(t, n), console.log("[ModelFetchInterceptor] ✅ Model cached successfully:", t);
    } catch (s) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model:", s);
    }
  }
  /**
   * Store model response in cache with progress tracking
   */
  static async cacheModelWithProgress(t, e, s, o) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      if (!e.body) {
        console.log("[ModelFetchInterceptor] No response body to cache");
        return;
      }
      const a = e.headers.get("content-encoding");
      let n = s;
      if (a && s > 0) {
        const y = {
          gzip: 2.5,
          // WASM files typically compress 2.5-3x
          br: 3,
          // Brotli typically compresses 3x
          deflate: 2
          // Deflate typically compresses 2x
        }[a] || 2;
        n = Math.round(s * y), console.log(
          "[ModelFetchInterceptor] 📦 Caching model with progress:",
          t,
          "reported:",
          s,
          "encoding:",
          a,
          "estimated actual:",
          n
        );
      } else
        console.log("[ModelFetchInterceptor] 📦 Caching model with progress:", t, "reported size:", s);
      const c = await caches.open(this.CACHE_NAME);
      let i = 0, l = 0;
      const d = e.body.getReader(), p = [];
      for (; ; ) {
        const { done: I, value: y } = await d.read();
        if (I) break;
        p.push(y), i += y.length, l += y.length;
        const F = Math.max(n, l), R = Math.min(i, F * 0.99);
        o == null || o(R, F);
      }
      const u = new Headers(e.headers);
      u.set("x-cached-time", Date.now().toString()), u.set("x-actual-size", l.toString());
      const g = new Response(new Blob(p), {
        status: e.status,
        statusText: e.statusText,
        headers: u
      });
      await c.put(t, g), o == null || o(l, l), console.log("[ModelFetchInterceptor] ✅ Model cached with progress:", t, "actual size:", l);
    } catch (a) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model with progress:", a);
    }
  }
  /**
   * Get cached model response if available and not expired
   */
  static async getCachedModel(t) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self)))
        return console.log("[ModelFetchInterceptor] Cache API not available"), null;
      console.log("[ModelFetchInterceptor] 🔍 Checking cache for:", t);
      const e = await caches.open(this.CACHE_NAME), s = await e.match(t);
      if (!s)
        return console.log("[ModelFetchInterceptor] ❌ Not found in cache"), null;
      const o = s.headers.get("x-cached-time");
      return !o || Date.now() - parseInt(o) > this.CACHE_EXPIRY_MS ? (await e.delete(t), console.log("[ModelFetchInterceptor] ⏰ Cached model expired, removing:", t), null) : (console.log("[ModelFetchInterceptor] ✅ Serving model from cache:", t), s);
    } catch (e) {
      return console.error("[ModelFetchInterceptor] ❌ Error getting cached model:", e), null;
    }
  }
  /**
   * Get the appropriate fetch function for the current environment
   */
  getFetchGlobal() {
    return typeof self < "u" && typeof window > "u" ? self.fetch : typeof window < "u" ? window.fetch : fetch;
  }
  /**
   * Set the fetch function in the current environment
   */
  setFetchGlobal(t) {
    typeof self < "u" && typeof window > "u" ? self.fetch = t : typeof window < "u" ? window.fetch = t : console.warn("[ModelFetchInterceptor] Unable to set fetch in this environment");
  }
  /**
   * Check if a URL is a model-related file
   */
  isModelFile(t) {
    return this.modelFileIndicators.some((e) => t.includes(e));
  }
  /**
   * Automatically detect if a model URL is local/self-hosted or from a CDN
   * Local models: relative paths, absolute paths without protocol
   * CDN models: full URLs starting with http:// or https://
   */
  isLocalModelUrl(t) {
    const e = !t.startsWith("http");
    return console.log("[ModelFetchInterceptor] URL detection:", t, "→", e ? "LOCAL" : "CDN"), e;
  }
  /**
   * Create a progress tracking wrapper for local model downloads
   */
  createLocalProgressWrapper(t, e) {
    if (!t.body || !this.options.onProgress)
      return t;
    const s = t.headers.get("content-length"), o = s ? parseInt(s) : 0;
    let a = 0;
    this.totalFiles++, this.activeDownloads.set(e, { loaded: 0, total: o }), console.log("[ModelFetchInterceptor] Local model download started, total:", o, "bytes"), this.updateOverallProgress();
    const n = t.body.getReader(), c = this, i = new ReadableStream({
      start(l) {
        function d() {
          return n.read().then(({ done: p, value: u }) => {
            if (p) {
              console.log("[ModelFetchInterceptor] Local model download complete");
              const g = c.activeDownloads.get(e);
              g && (g.loaded = o || a, c.activeDownloads.set(e, g)), c.completedFiles++, c.updateOverallProgress(), c.completedFiles === c.totalFiles && c.options.onProgress({
                percentage: 100,
                loaded: c.completedFiles,
                total: c.totalFiles,
                stage: { type: w.Ready, fromCache: !1 }
              }), l.close();
              return;
            }
            if (u) {
              a += u.length;
              const g = c.activeDownloads.get(e);
              g && (g.loaded = a, c.activeDownloads.set(e, g)), c.updateOverallProgress();
            }
            return l.enqueue(u), d();
          });
        }
        return d();
      }
    });
    return new Response(i, {
      headers: t.headers,
      status: t.status,
      statusText: t.statusText
    });
  }
  /**
   * Handle CDN model downloads with basic progress tracking
   */
  async handleCDNDownload(t, e, s) {
    const o = typeof e == "string" ? e : e.toString();
    if (!this.options.onProgress)
      return t.call(globalThis, e, s);
    this.totalFiles++, this.activeDownloads.set(o, { loaded: 0, total: 1 }), console.log("[ModelFetchInterceptor] CDN model file detected, basic progress tracking"), this.updateOverallProgress();
    const a = Date.now();
    try {
      const n = await t.call(globalThis, e, s), c = Date.now();
      console.log("[ModelFetchInterceptor] CDN model download completed in", c - a, "ms");
      const i = this.activeDownloads.get(o);
      return i && (i.loaded = 1, this.activeDownloads.set(o, i)), this.completedFiles++, this.updateOverallProgress(), n;
    } catch (n) {
      throw console.error("[ModelFetchInterceptor] CDN download error:", n), this.completedFiles++, this.updateOverallProgress(), n;
    }
  }
  /**
   * Start intercepting fetch requests for progress tracking
   */
  start() {
    if (this.isIntercepting) {
      console.warn("[ModelFetchInterceptor] Already intercepting");
      return;
    }
    console.log("[ModelFetchInterceptor] Starting fetch interception..."), this.fetchIntercepted = !1, this.isIntercepting = !0, this.activeDownloads.clear(), this.totalFiles = 0, this.completedFiles = 0, this.originalFetch = this.getFetchGlobal(), this.options.onProgress && M.isModelCached().then((e) => {
      e ? (console.log("[ModelFetchInterceptor] Models likely cached from previous session"), this.options.onProgress({
        percentage: 30,
        loaded: 0,
        total: 1,
        stage: { type: w.Downloading, fromCache: !0 }
      })) : console.log("[ModelFetchInterceptor] No cache found");
    }), this.options.onProgress && (this.progressTimeout = setTimeout(() => {
      console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:", this.fetchIntercepted), !this.fetchIntercepted && this.options.onProgress && (console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"), this.options.onProgress({
        percentage: 100,
        loaded: 1,
        total: 1,
        stage: { type: w.Ready, fromCache: !0 },
        module: this.module
      }));
    }, this.options.cacheDetectionTimeout));
    const t = this.originalFetch;
    this.setFetchGlobal(async (e, s) => {
      const o = typeof e == "string" ? e : e.toString();
      if (!this.isIntercepting)
        return t.call(globalThis, e, s);
      if (console.log("[ModelFetchInterceptor] 🌐 Fetch intercepted:", o), this.isModelFile(o)) {
        const l = this.isLocalModelUrl(o);
        console.log("[ModelFetchInterceptor] 📦 Model file detected:", l ? "local" : "CDN"), this.fetchIntercepted = !0, this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0);
        const d = await M.getCachedModel(o);
        if (d)
          return console.log("[ModelFetchInterceptor] Serving model from cache:", o), this.totalFiles++, this.completedFiles++, this.options.onProgress && (this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress({
            percentage: 100,
            loaded: this.completedFiles,
            total: this.totalFiles,
            stage: { type: w.Ready, fromCache: !0 },
            module: this.module
          })), d;
      }
      if (!this.isModelFile(o))
        return t.call(globalThis, e, s);
      if (this.isLocalModelUrl(o)) {
        const l = await t.call(globalThis, e, s), d = l.clone();
        return M.cacheModel(o, d), this.createLocalProgressWrapper(l, o);
      }
      const a = await this.handleCDNDownload(t, e, s), n = a.clone(), c = a.headers.get("content-length"), i = c ? parseInt(c) : 0;
      return M.cacheModelWithProgress(
        o,
        n,
        i,
        (l, d) => {
          if (this.options.onProgress) {
            const p = d > 0 ? l / d * 100 : 0, g = l === d ? 100 : Math.min(Math.round(p), 98);
            this.options.onProgress({
              percentage: g,
              loaded: l,
              total: d,
              stage: { type: w.Caching, fromCache: !1 },
              module: this.module
            });
          }
        }
      ).catch((l) => {
        console.error("[ModelFetchInterceptor] Background caching failed:", l);
      }), a;
    });
  }
  /**
   * Stop intercepting fetch requests and restore original fetch
   */
  stop() {
    this.isIntercepting && (console.log("[ModelFetchInterceptor] Stopping fetch interception..."), this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0), this.originalFetch && this.setFetchGlobal(this.originalFetch), this.isIntercepting = !1, this.fetchIntercepted = !1);
  }
  /**
   * Check if currently intercepting
   */
  isActive() {
    return this.isIntercepting;
  }
  /**
   * Check if any fetch requests were intercepted
   */
  wasIntercepted() {
    return this.fetchIntercepted;
  }
};
h(M, "CACHE_NAME", "vital-sign-models"), h(M, "CACHE_EXPIRY_MS", 1440 * 60 * 1e3);
let E = M;
class S {
  constructor(t, e, s, o) {
    h(this, "processNoise");
    h(this, "measurementNoise");
    h(this, "estimate");
    h(this, "estimateError");
    this.processNoise = t, this.measurementNoise = e, this.estimate = s, this.estimateError = o;
  }
  update(t) {
    const e = this.estimate, s = this.estimateError + this.processNoise, o = s / (s + this.measurementNoise);
    return this.estimate = e + o * (t - e), this.estimateError = (1 - o) * s, this.estimate;
  }
  getEstimate() {
    return this.estimate;
  }
}
let m = null, A = null, N = null, k = {}, T = null, W = 1, v = null, C = null, P = 0.04, D = !1, x = null, b = null;
function L(r) {
  const t = [];
  let e = r;
  for (; Array.isArray(e); )
    t.push(e.length), e = e[0];
  return t;
}
function O(r) {
  return Array.isArray(r) ? r.reduce((t, e) => t.concat(O(e)), []) : [r];
}
async function j(r, t) {
  if (D) {
    self.postMessage({ result: { type: "ready" }, hash: t });
    return;
  }
  try {
    const e = new E({
      onProgress: (s) => {
        self.postMessage({
          result: { type: "progress" },
          progress: s,
          hash: t
        });
      },
      module: "realtime-estimator",
      modelFileIndicators: [".onnx", ".json"]
    });
    e.start(), f.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/", f.env.wasm.numThreads = 1, f.env.wasm.simd = !0;
    try {
      console.log("[MeRppgWorker] Loading ONNX models..."), m = await f.InferenceSession.create(r.modelPath, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all"
      }), console.log("[MeRppgWorker] Main model loaded");
      const o = await (await fetch(r.statePath)).json();
      for (const [a, n] of Object.entries(o)) {
        const c = L(n), i = new Float32Array(O(n));
        k[a] = new f.Tensor("float32", i, c);
      }
      console.log("[MeRppgWorker] Initial state loaded"), A = await f.InferenceSession.create(r.welchPath, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all"
      }), console.log("[MeRppgWorker] Welch PSD model loaded"), N = await f.InferenceSession.create(r.hrPath, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all"
      }), console.log("[MeRppgWorker] HR extraction model loaded"), r.lambda !== void 0 && (W = r.lambda), x = new OffscreenCanvas(36, 36), b = x.getContext("2d"), D = !0, console.log("[MeRppgWorker] All models initialized successfully"), self.postMessage({ result: { type: "ready" }, hash: t });
    } finally {
      e.stop();
    }
  } catch (e) {
    console.error("[MeRppgWorker] Failed to initialize:", e), self.postMessage({
      result: { type: "error", error: e instanceof Error ? e.message : String(e) },
      hash: t
    });
  }
}
function U(r) {
  if (!x || !b)
    return null;
  try {
    b.clearRect(0, 0, 36, 36);
    const t = new OffscreenCanvas(r.width, r.height), e = t.getContext("2d");
    if (!e)
      return null;
    e.putImageData(r, 0, 0), b.drawImage(t, 0, 0, r.width, r.height, 0, 0, 36, 36);
    const o = b.getImageData(0, 0, 36, 36).data, a = new Float32Array(1296 * 3);
    for (let n = 0; n < o.length; n += 4) {
      const c = n / 4;
      a[c * 3] = o[n] / 255, a[c * 3 + 1] = o[n + 1] / 255, a[c * 3 + 2] = o[n + 2] / 255;
    }
    return a;
  } catch (t) {
    return console.warn("[MeRppgWorker] Failed to extract face image:", t), null;
  }
}
async function q(r, t) {
  if (!D || !m || !r.imageData || r.timestamp === void 0) {
    self.postMessage({
      result: { type: "error", error: "Worker not initialized or invalid input" },
      hash: t
    });
    return;
  }
  try {
    const e = U(r.imageData);
    if (!e) {
      self.postMessage({
        result: { type: "error", error: "Failed to extract face image" },
        hash: t
      });
      return;
    }
    const s = r.timestamp, o = new f.Tensor("float32", e, [1, 1, 36, 36, 3]), a = T ? Math.max((s - T) / W, 1 / 90) : 1 / 30, n = new f.Tensor("float32", [a], []);
    T = s;
    const c = {};
    c[m.inputNames[0]] = o;
    for (const [p, u] of Object.entries(k))
      c[p] = u;
    c[m.inputNames[37]] = n;
    const i = await m.run(c), l = i[m.outputNames[0]].data[0];
    for (let p = 1; p < m.outputNames.length; p++)
      k[m.inputNames[p]] = i[m.outputNames[p]];
    v ? v.update(l) : v = new S(1, 0.5, l, 1);
    const d = v.getEstimate();
    self.postMessage({
      result: { type: "processed", bvpValue: d },
      hash: t
    });
  } catch (e) {
    console.warn("[MeRppgWorker] Failed to process frame:", e), self.postMessage({
      result: { type: "error", error: e instanceof Error ? e.message : String(e) },
      hash: t
    });
  }
}
async function G(r, t) {
  if (!D || !A || !N || !r.welchArray) {
    self.postMessage({
      result: { type: "error", error: "Worker not initialized or invalid input" },
      hash: t
    });
    return;
  }
  try {
    const e = new Float32Array(r.welchArray), s = new f.Tensor("float32", e, [1, 1, e.length]), o = await A.run({ input: s }), a = o.freqs, n = o.psd;
    let i = (await N.run({ freqs: a, psd: n })).hr.data[0];
    if (r.timestamps && r.timestamps.length >= 2) {
      const u = r.timestamps.slice(-301);
      let g = 0, I = 0;
      for (let F = 1; F < u.length; F++) {
        const R = (u[F] - u[F - 1]) / 1e3;
        R <= 0.5 && (g += R, I++);
      }
      const y = g > 0 ? I / g : 30;
      i = i / 30 * y;
    }
    C ? C.update(i) : C = new S(1, 2, i, 1);
    const l = C.getEstimate();
    P = 0.8 * P + 0.2 * Math.abs(l - i) / i;
    const d = P < 0.02, p = Math.max(0, Math.min(1, 1 - P * 10));
    self.postMessage({
      result: {
        type: "welch",
        heartRate: l,
        confidence: p,
        isStable: d,
        signalQuality: p * 100
      },
      hash: t
    });
  } catch (e) {
    console.warn("[MeRppgWorker] Failed to process Welch:", e), self.postMessage({
      result: { type: "error", error: e instanceof Error ? e.message : String(e) },
      hash: t
    });
  }
}
async function _(r, t) {
  if (T = null, v = null, C = null, P = 0.04, D && r.statePath)
    try {
      const s = await (await fetch(r.statePath)).json();
      for (const [o, a] of Object.entries(s)) {
        const n = L(a), c = new Float32Array(O(a));
        k[o] = new f.Tensor("float32", c, n);
      }
      self.postMessage({ result: { type: "reset" }, hash: t });
    } catch (e) {
      console.warn("[MeRppgWorker] Failed to reset state:", e), self.postMessage({
        result: { type: "error", error: e instanceof Error ? e.message : String(e) },
        hash: t
      });
    }
  else
    self.postMessage({ result: { type: "reset" }, hash: t });
}
self.onmessage = async (r) => {
  const { inputData: t, hash: e } = r.data, s = t;
  try {
    switch (s.type) {
      case "init":
        await j(s, e);
        break;
      case "process":
        await q(s, e);
        break;
      case "welch":
        await G(s, e);
        break;
      case "reset":
        await _(s, e);
        break;
      default:
        console.warn("[MeRppgWorker] Unknown message type:", s.type), self.postMessage({
          result: { type: "error", error: `Unknown message type: ${s.type}` },
          hash: e
        });
    }
  } catch (o) {
    console.error("[MeRppgWorker] Error handling message:", o), self.postMessage({
      result: { type: "error", error: o instanceof Error ? o.message : String(o) },
      hash: e
    });
  }
};
