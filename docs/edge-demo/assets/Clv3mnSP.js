var D = Object.defineProperty;
var T = (h, e, t) => e in h ? D(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var d = (h, e, t) => T(h, typeof e != "symbol" ? e + "" : e, t);
import * as F from "onnxruntime-web";
var u = /* @__PURE__ */ ((h) => (h.Downloading = "downloading", h.Caching = "caching", h.Ready = "ready", h))(u || {});
const m = class m {
  constructor(e = {}) {
    d(this, "originalFetch", null);
    d(this, "isIntercepting", !1);
    d(this, "fetchIntercepted", !1);
    d(this, "progressTimeout");
    d(this, "options");
    // 24 hours
    // Progress tracking for multiple concurrent downloads
    d(this, "activeDownloads", /* @__PURE__ */ new Map());
    d(this, "totalFiles", 0);
    d(this, "completedFiles", 0);
    // Model file indicators
    d(this, "modelFileIndicators");
    // Module name
    d(this, "module");
    this.options = {
      cacheDetectionTimeout: 1e3,
      ...e
    }, this.modelFileIndicators = e.modelFileIndicators || [], this.module = e.module;
  }
  /**
   * Calculate and update overall progress for multiple concurrent downloads
   */
  updateOverallProgress() {
    if (!this.options.onProgress) return;
    let e = 0, t = 0;
    for (const n of this.activeDownloads.values())
      e += n.loaded, t += n.total;
    if (t === 0 && this.totalFiles > 0) {
      const n = this.completedFiles / this.totalFiles * 70 + 30;
      this.options.onProgress({
        percentage: Math.min(Math.round(n), 100),
        loaded: this.completedFiles,
        total: this.totalFiles,
        stage: { type: u.Downloading, fromCache: !1 },
        module: this.module
      });
      return;
    }
    const s = 30, o = t > 0 ? e / t * 70 : 0, c = Math.min(s + o, 100);
    this.options.onProgress({
      percentage: Math.round(c),
      loaded: e,
      total: t,
      stage: { type: u.Downloading, fromCache: !1 },
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
      const e = await caches.open(this.CACHE_NAME), t = await e.keys(), s = Date.now();
      for (const o of t) {
        const c = await e.match(o);
        if (c) {
          const n = c.headers.get("x-cached-time");
          if (n && s - parseInt(n) < this.CACHE_EXPIRY_MS)
            return console.log("[ModelFetchInterceptor] Found cached model:", o.url), !0;
        }
      }
      return !1;
    } catch (e) {
      return console.error("[ModelFetchInterceptor] Error checking cache:", e), !1;
    }
  }
  /**
   * Store model response in cache with timestamp and progress tracking
   */
  static async cacheModel(e, t) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      console.log("[ModelFetchInterceptor] Attempting to cache model:", e);
      const s = await caches.open(this.CACHE_NAME), o = t.clone(), c = new Headers(o.headers);
      c.set("x-cached-time", Date.now().toString());
      const n = new Response(o.body, {
        status: o.status,
        statusText: o.statusText,
        headers: c
      });
      await s.put(e, n), console.log("[ModelFetchInterceptor] ✅ Model cached successfully:", e);
    } catch (s) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model:", s);
    }
  }
  /**
   * Store model response in cache with progress tracking
   */
  static async cacheModelWithProgress(e, t, s, o) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      if (!t.body) {
        console.log("[ModelFetchInterceptor] No response body to cache");
        return;
      }
      const c = t.headers.get("content-encoding");
      let n = s;
      if (c && s > 0) {
        const w = {
          gzip: 2.5,
          // WASM files typically compress 2.5-3x
          br: 3,
          // Brotli typically compresses 3x
          deflate: 2
          // Deflate typically compresses 2x
        }[c] || 2;
        n = Math.round(s * w), console.log(
          "[ModelFetchInterceptor] 📦 Caching model with progress:",
          e,
          "reported:",
          s,
          "encoding:",
          c,
          "estimated actual:",
          n
        );
      } else
        console.log("[ModelFetchInterceptor] 📦 Caching model with progress:", e, "reported size:", s);
      const r = await caches.open(this.CACHE_NAME);
      let l = 0, a = 0;
      const i = t.body.getReader(), f = [];
      for (; ; ) {
        const { done: y, value: w } = await i.read();
        if (y) break;
        f.push(w), l += w.length, a += w.length;
        const C = Math.max(n, a), P = Math.min(l, C * 0.99);
        o == null || o(P, C);
      }
      const g = new Headers(t.headers);
      g.set("x-cached-time", Date.now().toString()), g.set("x-actual-size", a.toString());
      const p = new Response(new Blob(f), {
        status: t.status,
        statusText: t.statusText,
        headers: g
      });
      await r.put(e, p), o == null || o(a, a), console.log("[ModelFetchInterceptor] ✅ Model cached with progress:", e, "actual size:", a);
    } catch (c) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model with progress:", c);
    }
  }
  /**
   * Get cached model response if available and not expired
   */
  static async getCachedModel(e) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self)))
        return console.log("[ModelFetchInterceptor] Cache API not available"), null;
      console.log("[ModelFetchInterceptor] 🔍 Checking cache for:", e);
      const t = await caches.open(this.CACHE_NAME), s = await t.match(e);
      if (!s)
        return console.log("[ModelFetchInterceptor] ❌ Not found in cache"), null;
      const o = s.headers.get("x-cached-time");
      return !o || Date.now() - parseInt(o) > this.CACHE_EXPIRY_MS ? (await t.delete(e), console.log("[ModelFetchInterceptor] ⏰ Cached model expired, removing:", e), null) : (console.log("[ModelFetchInterceptor] ✅ Serving model from cache:", e), s);
    } catch (t) {
      return console.error("[ModelFetchInterceptor] ❌ Error getting cached model:", t), null;
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
  setFetchGlobal(e) {
    typeof self < "u" && typeof window > "u" ? self.fetch = e : typeof window < "u" ? window.fetch = e : console.warn("[ModelFetchInterceptor] Unable to set fetch in this environment");
  }
  /**
   * Check if a URL is a model-related file
   */
  isModelFile(e) {
    return this.modelFileIndicators.some((t) => e.includes(t));
  }
  /**
   * Automatically detect if a model URL is local/self-hosted or from a CDN
   * Local models: relative paths, absolute paths without protocol
   * CDN models: full URLs starting with http:// or https://
   */
  isLocalModelUrl(e) {
    const t = !e.startsWith("http");
    return console.log("[ModelFetchInterceptor] URL detection:", e, "→", t ? "LOCAL" : "CDN"), t;
  }
  /**
   * Create a progress tracking wrapper for local model downloads
   */
  createLocalProgressWrapper(e, t) {
    if (!e.body || !this.options.onProgress)
      return e;
    const s = e.headers.get("content-length"), o = s ? parseInt(s) : 0;
    let c = 0;
    this.totalFiles++, this.activeDownloads.set(t, { loaded: 0, total: o }), console.log("[ModelFetchInterceptor] Local model download started, total:", o, "bytes"), this.updateOverallProgress();
    const n = e.body.getReader(), r = this, l = new ReadableStream({
      start(a) {
        function i() {
          return n.read().then(({ done: f, value: g }) => {
            if (f) {
              console.log("[ModelFetchInterceptor] Local model download complete");
              const p = r.activeDownloads.get(t);
              p && (p.loaded = o || c, r.activeDownloads.set(t, p)), r.completedFiles++, r.updateOverallProgress(), r.completedFiles === r.totalFiles && r.options.onProgress({
                percentage: 100,
                loaded: r.completedFiles,
                total: r.totalFiles,
                stage: { type: u.Ready, fromCache: !1 }
              }), a.close();
              return;
            }
            if (g) {
              c += g.length;
              const p = r.activeDownloads.get(t);
              p && (p.loaded = c, r.activeDownloads.set(t, p)), r.updateOverallProgress();
            }
            return a.enqueue(g), i();
          });
        }
        return i();
      }
    });
    return new Response(l, {
      headers: e.headers,
      status: e.status,
      statusText: e.statusText
    });
  }
  /**
   * Handle CDN model downloads with basic progress tracking
   */
  async handleCDNDownload(e, t, s) {
    const o = typeof t == "string" ? t : t.toString();
    if (!this.options.onProgress)
      return e.call(globalThis, t, s);
    this.totalFiles++, this.activeDownloads.set(o, { loaded: 0, total: 1 }), console.log("[ModelFetchInterceptor] CDN model file detected, basic progress tracking"), this.updateOverallProgress();
    const c = Date.now();
    try {
      const n = await e.call(globalThis, t, s), r = Date.now();
      console.log("[ModelFetchInterceptor] CDN model download completed in", r - c, "ms");
      const l = this.activeDownloads.get(o);
      return l && (l.loaded = 1, this.activeDownloads.set(o, l)), this.completedFiles++, this.updateOverallProgress(), n;
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
    console.log("[ModelFetchInterceptor] Starting fetch interception..."), this.fetchIntercepted = !1, this.isIntercepting = !0, this.activeDownloads.clear(), this.totalFiles = 0, this.completedFiles = 0, this.originalFetch = this.getFetchGlobal(), this.options.onProgress && m.isModelCached().then((t) => {
      t ? (console.log("[ModelFetchInterceptor] Models likely cached from previous session"), this.options.onProgress({
        percentage: 30,
        loaded: 0,
        total: 1,
        stage: { type: u.Downloading, fromCache: !0 },
        module: this.module
      })) : console.log("[ModelFetchInterceptor] No cache found");
    }), this.options.onProgress && (this.progressTimeout = setTimeout(() => {
      console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:", this.fetchIntercepted), !this.fetchIntercepted && this.options.onProgress && (console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"), this.options.onProgress({
        percentage: 100,
        loaded: 1,
        total: 1,
        stage: { type: u.Ready, fromCache: !0 },
        module: this.module
      }));
    }, this.options.cacheDetectionTimeout));
    const e = this.originalFetch;
    this.setFetchGlobal(async (t, s) => {
      const o = typeof t == "string" ? t : t.toString();
      if (!this.isIntercepting)
        return e.call(globalThis, t, s);
      if (console.log("[ModelFetchInterceptor] 🌐 Fetch intercepted:", o), this.isModelFile(o)) {
        const a = this.isLocalModelUrl(o);
        console.log("[ModelFetchInterceptor] 📦 Model file detected:", a ? "local" : "CDN"), this.fetchIntercepted = !0, this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0);
        const i = await m.getCachedModel(o);
        if (i)
          return console.log("[ModelFetchInterceptor] Serving model from cache:", o), this.totalFiles++, this.completedFiles++, this.options.onProgress && (this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress({
            percentage: 100,
            loaded: this.completedFiles,
            total: this.totalFiles,
            stage: { type: u.Ready, fromCache: !0 },
            module: this.module
          })), i;
      }
      if (!this.isModelFile(o))
        return e.call(globalThis, t, s);
      if (this.isLocalModelUrl(o)) {
        const a = await e.call(globalThis, t, s), i = a.clone();
        return m.cacheModel(o, i), this.createLocalProgressWrapper(a, o);
      }
      const c = await this.handleCDNDownload(e, t, s), n = c.clone(), r = c.headers.get("content-length"), l = r ? parseInt(r) : 0;
      return m.cacheModelWithProgress(
        o,
        n,
        l,
        (a, i) => {
          if (this.options.onProgress) {
            const f = i > 0 ? a / i * 100 : 0, p = a === i ? 100 : Math.min(Math.round(f), 98);
            this.options.onProgress({
              percentage: p,
              loaded: a,
              total: i,
              stage: { type: u.Caching, fromCache: !1 },
              module: this.module
            });
          }
        }
      ).catch((a) => {
        console.error("[ModelFetchInterceptor] Background caching failed:", a);
      }), c;
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
d(m, "CACHE_NAME", "vital-sign-models"), d(m, "CACHE_EXPIRY_MS", 1440 * 60 * 1e3);
let I = m;
const v = 128;
let M = null;
self.onmessage = async (h) => {
  const { inputData: e, hash: t } = h.data, { type: s } = e;
  try {
    if (s === "init") {
      const { modelPath: o, wasmPaths: c } = e, n = new I({
        onProgress: (r) => self.postMessage({ progress: r, hash: t }),
        module: "liveness",
        modelFileIndicators: [".onnx"]
      });
      n.start(), F.env.wasm.wasmPaths = c ?? "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/", F.env.wasm.numThreads = 1, F.env.wasm.simd = !0, M = await F.InferenceSession.create(o, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all"
      }), n.stop(), self.postMessage({ result: { type: "ready" }, hash: t });
      return;
    }
    if (s === "infer") {
      if (!M)
        throw new Error("session not initialized");
      const o = e.tensor, c = new F.Tensor("float32", o, [1, 3, v, v]), n = {};
      n[M.inputNames[0]] = c;
      const l = (await M.run(n))[M.outputNames[0]].data, a = l[0], i = l[1], f = a - i, g = 1 / (1 + Math.exp(f));
      self.postMessage({ result: { type: "infer", spoofProb: g, diff: f }, hash: t });
      return;
    }
  } catch (o) {
    self.postMessage({ result: { type: "error", error: `${o}` }, hash: t });
  }
};
