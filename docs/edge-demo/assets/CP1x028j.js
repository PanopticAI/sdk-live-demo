var x = Object.defineProperty;
var S = (i, e, t) => e in i ? x(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var p = (i, e, t) => S(i, typeof e != "symbol" ? e + "" : e, t);
var m = /* @__PURE__ */ ((i) => (i.Downloading = "downloading", i.Caching = "caching", i.Ready = "ready", i))(m || {});
const w = class w {
  constructor(e = {}) {
    p(this, "originalFetch", null);
    p(this, "isIntercepting", !1);
    p(this, "fetchIntercepted", !1);
    p(this, "progressTimeout");
    p(this, "options");
    // 24 hours
    // Progress tracking for multiple concurrent downloads
    p(this, "activeDownloads", /* @__PURE__ */ new Map());
    p(this, "totalFiles", 0);
    p(this, "completedFiles", 0);
    // Model file indicators
    p(this, "modelFileIndicators");
    // Module name
    p(this, "module");
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
        stage: { type: m.Downloading, fromCache: !1 },
        module: this.module
      });
      return;
    }
    const s = 30, o = t > 0 ? e / t * 70 : 0, c = Math.min(s + o, 100);
    this.options.onProgress({
      percentage: Math.round(c),
      loaded: e,
      total: t,
      stage: { type: m.Downloading, fromCache: !1 },
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
        const u = {
          gzip: 2.5,
          // WASM files typically compress 2.5-3x
          br: 3,
          // Brotli typically compresses 3x
          deflate: 2
          // Deflate typically compresses 2x
        }[c] || 2;
        n = Math.round(s * u), console.log(
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
      const a = await caches.open(this.CACHE_NAME);
      let d = 0, r = 0;
      const l = t.body.getReader(), g = [];
      for (; ; ) {
        const { done: F, value: u } = await l.read();
        if (F) break;
        g.push(u), d += u.length, r += u.length;
        const I = Math.max(n, r), v = Math.min(d, I * 0.99);
        o == null || o(v, I);
      }
      const f = new Headers(t.headers);
      f.set("x-cached-time", Date.now().toString()), f.set("x-actual-size", r.toString());
      const h = new Response(new Blob(g), {
        status: t.status,
        statusText: t.statusText,
        headers: f
      });
      await a.put(e, h), o == null || o(r, r), console.log("[ModelFetchInterceptor] ✅ Model cached with progress:", e, "actual size:", r);
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
    const n = e.body.getReader(), a = this, d = new ReadableStream({
      start(r) {
        function l() {
          return n.read().then(({ done: g, value: f }) => {
            if (g) {
              console.log("[ModelFetchInterceptor] Local model download complete");
              const h = a.activeDownloads.get(t);
              h && (h.loaded = o || c, a.activeDownloads.set(t, h)), a.completedFiles++, a.updateOverallProgress(), a.completedFiles === a.totalFiles && a.options.onProgress({
                percentage: 100,
                loaded: a.completedFiles,
                total: a.totalFiles,
                stage: { type: m.Ready, fromCache: !1 }
              }), r.close();
              return;
            }
            if (f) {
              c += f.length;
              const h = a.activeDownloads.get(t);
              h && (h.loaded = c, a.activeDownloads.set(t, h)), a.updateOverallProgress();
            }
            return r.enqueue(f), l();
          });
        }
        return l();
      }
    });
    return new Response(d, {
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
      const n = await e.call(globalThis, t, s), a = Date.now();
      console.log("[ModelFetchInterceptor] CDN model download completed in", a - c, "ms");
      const d = this.activeDownloads.get(o);
      return d && (d.loaded = 1, this.activeDownloads.set(o, d)), this.completedFiles++, this.updateOverallProgress(), n;
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
    console.log("[ModelFetchInterceptor] Starting fetch interception..."), this.fetchIntercepted = !1, this.isIntercepting = !0, this.activeDownloads.clear(), this.totalFiles = 0, this.completedFiles = 0, this.originalFetch = this.getFetchGlobal(), this.options.onProgress && w.isModelCached().then((t) => {
      t ? (console.log("[ModelFetchInterceptor] Models likely cached from previous session"), this.options.onProgress({
        percentage: 30,
        loaded: 0,
        total: 1,
        stage: { type: m.Downloading, fromCache: !0 },
        module: this.module
      })) : console.log("[ModelFetchInterceptor] No cache found");
    }), this.options.onProgress && (this.progressTimeout = setTimeout(() => {
      console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:", this.fetchIntercepted), !this.fetchIntercepted && this.options.onProgress && (console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"), this.options.onProgress({
        percentage: 100,
        loaded: 1,
        total: 1,
        stage: { type: m.Ready, fromCache: !0 },
        module: this.module
      }));
    }, this.options.cacheDetectionTimeout));
    const e = this.originalFetch;
    this.setFetchGlobal(async (t, s) => {
      const o = typeof t == "string" ? t : t.toString();
      if (!this.isIntercepting)
        return e.call(globalThis, t, s);
      if (console.log("[ModelFetchInterceptor] 🌐 Fetch intercepted:", o), this.isModelFile(o)) {
        const r = this.isLocalModelUrl(o);
        console.log("[ModelFetchInterceptor] 📦 Model file detected:", r ? "local" : "CDN"), this.fetchIntercepted = !0, this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0);
        const l = await w.getCachedModel(o);
        if (l)
          return console.log("[ModelFetchInterceptor] Serving model from cache:", o), this.totalFiles++, this.completedFiles++, this.options.onProgress && (this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress({
            percentage: 100,
            loaded: this.completedFiles,
            total: this.totalFiles,
            stage: { type: m.Ready, fromCache: !0 },
            module: this.module
          })), l;
      }
      if (!this.isModelFile(o))
        return e.call(globalThis, t, s);
      if (this.isLocalModelUrl(o)) {
        const r = await e.call(globalThis, t, s), l = r.clone();
        return w.cacheModel(o, l), this.createLocalProgressWrapper(r, o);
      }
      const c = await this.handleCDNDownload(e, t, s), n = c.clone(), a = c.headers.get("content-length"), d = a ? parseInt(a) : 0;
      return w.cacheModelWithProgress(
        o,
        n,
        d,
        (r, l) => {
          if (this.options.onProgress) {
            const g = l > 0 ? r / l * 100 : 0, h = r === l ? 100 : Math.min(Math.round(g), 98);
            this.options.onProgress({
              percentage: h,
              loaded: r,
              total: l,
              stage: { type: m.Caching, fromCache: !1 },
              module: this.module
            });
          }
        }
      ).catch((r) => {
        console.error("[ModelFetchInterceptor] Background caching failed:", r);
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
p(w, "CACHE_NAME", "vital-sign-models"), p(w, "CACHE_EXPIRY_MS", 1440 * 60 * 1e3);
let A = w, P = null, M = null, D = !1, C = {};
self.onmessage = async (i) => {
  const e = i.data;
  try {
    if (e.type === "init") {
      const t = new A({
        onProgress: (r) => self.postMessage({ type: "progress", progress: r }),
        module: "realtime-estimator",
        modelFileIndicators: [".js", ".wasm", ".bin", ".json"]
      });
      t.start();
      const s = await (await fetch(e.jsUrl)).text(), o = { exports: {} };
      new Function("module", "exports", "require", "__dirname", "__filename", s)(
        o,
        o.exports,
        void 0,
        "",
        ""
      );
      const c = o.exports, n = await c({ locateFile: () => e.wasmUrl }), a = new Uint8Array(await (await fetch(e.weightsUrl)).arrayBuffer()), d = new n.RtrppgEstimatorCore();
      if (!n.loadWeightsIntoCore(d, a)) throw new Error("invalid weights");
      if (P = d, M = n, C = e.demographics ?? {}, e.spo2ModelUrl)
        try {
          const r = await (await fetch(e.spo2ModelUrl)).json();
          _(n, r);
        } catch (r) {
          console.warn("[rtRppg] SpO2 model unavailable:", r);
        }
      if (e.bpModelUrls)
        try {
          if (await Promise.all(Object.entries(e.bpModelUrls).map(async ([r, l]) => {
            const g = await (await fetch(l)).json();
            k(n, r, g);
          })), e.bpProScalerUrl) {
            const r = await (await fetch(e.bpProScalerUrl)).json();
            n.setBpProScaler(Float64Array.from(r.mean), Float64Array.from(r.scale));
          }
          D = !0;
        } catch (r) {
          console.warn("[rtRppg] BP model unavailable:", r);
        }
      t.stop(), b({ type: "ready" });
      return;
    }
    if (e.type === "predict") {
      if (!P) throw new Error("cnn worker not initialized");
      const t = Float32Array.from(P.predictWindow(e.input));
      self.postMessage({ type: "segment", startIdx: e.startIdx, gen: e.gen, segment: t }, [t.buffer]);
      return;
    }
    if (e.type === "hrv") {
      if (!M) throw new Error("cnn worker not initialized");
      const t = M.estimateHrv(e.rppg, e.ts, e.expectedHrBpm);
      let s = null;
      const o = t, c = e.ts.length >= 2 ? e.ts[e.ts.length - 1] - e.ts[0] : 0, n = !!o && (o.nPeaks ?? 0) >= 15 && c >= 8;
      if (D && n && o) {
        const a = C.age ?? NaN, d = C.gender ?? NaN, r = C.height ?? NaN, l = C.weight ?? NaN;
        e.glabellaCollected && typeof o.hr == "number" && typeof o.sdnn == "number" && typeof o.rmssd == "number" && (s = M.estimateBpPro(e.rppg, e.ts, o.hr, o.sdnn, o.rmssd, a, d, r, l)), s || (s = M.estimateBpBaseline(e.rppg, e.ts, e.expectedHrBpm, a, d, r, l));
      }
      b({ type: "hrvResult", result: t, bp: s });
      return;
    }
    if (e.type === "spo2") {
      if (!M) throw new Error("cnn worker not initialized");
      const t = M.estimateSpo2(e.ts, e.r, e.g, e.b);
      b({ type: "spo2Result", spo2: t });
      return;
    }
  } catch (t) {
    b({ type: "error", error: `${t}` });
  }
};
function T(i) {
  var g, f, h;
  const e = i == null ? void 0 : i.learner, t = parseFloat(((g = e == null ? void 0 : e.learner_model_param) == null ? void 0 : g.base_score) ?? "NaN"), s = (h = (f = e == null ? void 0 : e.gradient_booster) == null ? void 0 : f.model) == null ? void 0 : h.trees;
  if (!Array.isArray(s) || !isFinite(t)) throw new Error("invalid gbdt model");
  const o = new Int32Array(s.length + 1), c = [], n = [], a = [], d = [], r = [];
  let l = 0;
  for (let F = 0; F < s.length; F++) {
    o[F] = l;
    const u = s[F], I = u.left_children, v = u.right_children, E = u.split_indices, N = u.split_conditions, R = u.base_weights;
    for (let y = 0; y < I.length; y++)
      c.push(I[y]), n.push(v[y]), a.push(E[y]), d.push(N[y]), r.push(R[y]);
    l += I.length;
  }
  return o[s.length] = l, { offsets: o, left: Int32Array.from(c), right: Int32Array.from(n), feature: Int32Array.from(a), threshold: Float32Array.from(d), leaf: Float64Array.from(r), baseScore: t };
}
function _(i, e) {
  const t = T(e);
  i.setSpo2Model(t.offsets, t.left, t.right, t.feature, t.threshold, t.leaf, t.baseScore);
}
function k(i, e, t) {
  const s = T(t);
  i.setBpModel(e, s.offsets, s.left, s.right, s.feature, s.threshold, s.leaf, s.baseScore);
}
function b(i) {
  self.postMessage(i);
}
