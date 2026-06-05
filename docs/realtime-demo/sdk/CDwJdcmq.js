var y = Object.defineProperty;
var v = (m, e, t) => e in m ? y(m, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[e] = t;
var a = (m, e, t) => v(m, typeof e != "symbol" ? e + "" : e, t);
import { M as f } from "./CePhNDLN.js";
const p = class p {
  constructor(e = {}) {
    a(this, "originalFetch", null);
    a(this, "isIntercepting", !1);
    a(this, "fetchIntercepted", !1);
    a(this, "progressTimeout");
    a(this, "options");
    // 24 hours
    // Progress tracking for multiple concurrent downloads
    a(this, "activeDownloads", /* @__PURE__ */ new Map());
    a(this, "totalFiles", 0);
    a(this, "completedFiles", 0);
    // Model file indicators
    a(this, "modelFileIndicators");
    // Module name
    a(this, "module");
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
        stage: { type: f.Downloading, fromCache: !1 },
        module: this.module
      });
      return;
    }
    const s = 30, o = t > 0 ? e / t * 70 : 0, c = Math.min(s + o, 100);
    this.options.onProgress({
      percentage: Math.round(c),
      loaded: e,
      total: t,
      stage: { type: f.Downloading, fromCache: !1 },
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
      const l = await caches.open(this.CACHE_NAME);
      let h = 0, r = 0;
      const i = t.body.getReader(), u = [];
      for (; ; ) {
        const { done: F, value: w } = await i.read();
        if (F) break;
        u.push(w), h += w.length, r += w.length;
        const M = Math.max(n, r), C = Math.min(h, M * 0.99);
        o == null || o(C, M);
      }
      const g = new Headers(t.headers);
      g.set("x-cached-time", Date.now().toString()), g.set("x-actual-size", r.toString());
      const d = new Response(new Blob(u), {
        status: t.status,
        statusText: t.statusText,
        headers: g
      });
      await l.put(e, d), o == null || o(r, r), console.log("[ModelFetchInterceptor] ✅ Model cached with progress:", e, "actual size:", r);
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
    const n = e.body.getReader(), l = this, h = new ReadableStream({
      start(r) {
        function i() {
          return n.read().then(({ done: u, value: g }) => {
            if (u) {
              console.log("[ModelFetchInterceptor] Local model download complete");
              const d = l.activeDownloads.get(t);
              d && (d.loaded = o || c, l.activeDownloads.set(t, d)), l.completedFiles++, l.updateOverallProgress(), l.completedFiles === l.totalFiles && l.options.onProgress({
                percentage: 100,
                loaded: l.completedFiles,
                total: l.totalFiles,
                stage: { type: f.Ready, fromCache: !1 }
              }), r.close();
              return;
            }
            if (g) {
              c += g.length;
              const d = l.activeDownloads.get(t);
              d && (d.loaded = c, l.activeDownloads.set(t, d)), l.updateOverallProgress();
            }
            return r.enqueue(g), i();
          });
        }
        return i();
      }
    });
    return new Response(h, {
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
      const n = await e.call(globalThis, t, s), l = Date.now();
      console.log("[ModelFetchInterceptor] CDN model download completed in", l - c, "ms");
      const h = this.activeDownloads.get(o);
      return h && (h.loaded = 1, this.activeDownloads.set(o, h)), this.completedFiles++, this.updateOverallProgress(), n;
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
    console.log("[ModelFetchInterceptor] Starting fetch interception..."), this.fetchIntercepted = !1, this.isIntercepting = !0, this.activeDownloads.clear(), this.totalFiles = 0, this.completedFiles = 0, this.originalFetch = this.getFetchGlobal(), this.options.onProgress && p.isModelCached().then((t) => {
      t ? (console.log("[ModelFetchInterceptor] Models likely cached from previous session"), this.options.onProgress({
        percentage: 30,
        loaded: 0,
        total: 1,
        stage: { type: f.Downloading, fromCache: !0 }
      })) : console.log("[ModelFetchInterceptor] No cache found");
    }), this.options.onProgress && (this.progressTimeout = setTimeout(() => {
      console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:", this.fetchIntercepted), !this.fetchIntercepted && this.options.onProgress && (console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"), this.options.onProgress({
        percentage: 100,
        loaded: 1,
        total: 1,
        stage: { type: f.Ready, fromCache: !0 },
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
        const i = await p.getCachedModel(o);
        if (i)
          return console.log("[ModelFetchInterceptor] Serving model from cache:", o), this.totalFiles++, this.completedFiles++, this.options.onProgress && (this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress({
            percentage: 100,
            loaded: this.completedFiles,
            total: this.totalFiles,
            stage: { type: f.Ready, fromCache: !0 },
            module: this.module
          })), i;
      }
      if (!this.isModelFile(o))
        return e.call(globalThis, t, s);
      if (this.isLocalModelUrl(o)) {
        const r = await e.call(globalThis, t, s), i = r.clone();
        return p.cacheModel(o, i), this.createLocalProgressWrapper(r, o);
      }
      const c = await this.handleCDNDownload(e, t, s), n = c.clone(), l = c.headers.get("content-length"), h = l ? parseInt(l) : 0;
      return p.cacheModelWithProgress(
        o,
        n,
        h,
        (r, i) => {
          if (this.options.onProgress) {
            const u = i > 0 ? r / i * 100 : 0, d = r === i ? 100 : Math.min(Math.round(u), 98);
            this.options.onProgress({
              percentage: d,
              loaded: r,
              total: i,
              stage: { type: f.Caching, fromCache: !1 },
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
a(p, "CACHE_NAME", "vital-sign-models"), a(p, "CACHE_EXPIRY_MS", 1440 * 60 * 1e3);
let I = p;
export {
  I as M
};
