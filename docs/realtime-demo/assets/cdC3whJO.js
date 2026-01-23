var ba = Object.defineProperty;
var Aa = (e, t, r) => t in e ? ba(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var U = (e, t, r) => Aa(e, typeof t != "symbol" ? t + "" : t, r);
var Be = /* @__PURE__ */ ((e) => (e.SelfHosted = "self-hosted", e.CDN = "cdn", e))(Be || {}), J = /* @__PURE__ */ ((e) => (e.Downloading = "downloading", e.Caching = "caching", e.Ready = "ready", e))(J || {});
class ie {
  constructor(t, r, n, s, o) {
    /** Current progress percentage (0-100) */
    U(this, "percentage");
    /** Bytes loaded */
    U(this, "loaded");
    /** Total bytes to download */
    U(this, "total");
    /** Current stage information with structured data */
    U(this, "stage");
    /** Module name that is loading the model */
    U(this, "module");
    this.percentage = t, this.loaded = r, this.total = n, this.stage = s, this.module = o;
  }
  /**
   * Format the progress into a human-readable string
   */
  static formattedText(t) {
    if (!t || !t.stage)
      return "Loading...";
    switch (t.stage.type) {
      case "downloading":
      case "caching":
        if (t.module) {
          const n = t.module.toLowerCase();
          return n.includes("face-api") || n.includes("age") ? "Loading age estimation model..." : n.includes("face") || n.includes("mesh") || n.includes("detection") ? "Loading face detection model..." : "Loading model...";
        } else if (t.stage.filename) {
          const n = t.stage.filename.toLowerCase();
          return n.includes("age") || n.includes("age_") || n.includes("age-detection") ? `Loading age estimation model "${t.stage.filename}"...` : n.includes("face") || n.includes("detection") || n.includes("mesh") ? `Loading face detection model "${t.stage.filename}"...` : `Loading model "${t.stage.filename}"...`;
        } else
          return "Loading model...";
      case "ready":
        const r = t.stage.fromCache ? "cache" : "download";
        return t.stage.error ? `Model ${r} completed with error: ${t.stage.error.message}` : `Model ${r} complete`;
      default:
        return "Loading...";
    }
  }
}
function ka(e) {
  let t = document.createElement("canvas");
  return t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0), t;
}
function xa(e) {
  if (e instanceof HTMLCanvasElement)
    return e;
  let t = document.createElement("canvas");
  return t.width = e.width, t.height = e.width, t.getContext("2d").drawImage(e, 0, 0), t;
}
function Fa(e) {
  let t;
  return e.image instanceof HTMLVideoElement ? t = ka(e.image) : e.image instanceof HTMLImageElement ? t = xa(e.image) : t = e.image, t;
}
async function Ma() {
  const e = new ImageData(1, 1);
  return e.data[0] = 255, e.data[1] = 255, e.data[2] = 255, e.data[3] = 255, e;
}
function hs(e) {
  let t = 1, r = 1, n = 0, s = 0;
  return e.forEach((o) => {
    t = Math.min(o.x, t), r = Math.min(o.y, r), n = Math.max(o.x, n), s = Math.max(o.y, s);
  }), {
    xCenter: t + (n - t) / 2,
    yCenter: r + (s - r) / 2,
    width: n - t,
    height: s - r
  };
}
const We = class We {
  constructor(t = {}) {
    U(this, "originalFetch", null);
    U(this, "isIntercepting", !1);
    U(this, "fetchIntercepted", !1);
    U(this, "progressTimeout");
    U(this, "options");
    // 24 hours
    // Progress tracking for multiple concurrent downloads
    U(this, "activeDownloads", /* @__PURE__ */ new Map());
    U(this, "totalFiles", 0);
    U(this, "completedFiles", 0);
    // Model file indicators
    U(this, "modelFileIndicators");
    // Module name
    U(this, "module");
    this.options = {
      cacheDetectionTimeout: 1e3,
      isLocalModel: !1,
      ...t
    }, this.modelFileIndicators = t.modelFileIndicators || [], this.module = t.module;
  }
  /**
   * Calculate and update overall progress for multiple concurrent downloads
   */
  updateOverallProgress() {
    if (!this.options.onProgress) return;
    let t = 0, r = 0;
    for (const i of this.activeDownloads.values())
      t += i.loaded, r += i.total;
    if (r === 0 && this.totalFiles > 0) {
      const i = this.completedFiles / this.totalFiles * 70 + 30;
      this.options.onProgress(new ie(
        Math.min(Math.round(i), 100),
        this.completedFiles,
        this.totalFiles,
        { type: J.Downloading, fromCache: !1 },
        this.module
      ));
      return;
    }
    const n = 30, s = r > 0 ? t / r * 70 : 0, o = Math.min(n + s, 100);
    this.options.onProgress(new ie(
      Math.round(o),
      t,
      r,
      { type: J.Downloading, fromCache: !1 },
      this.module
    ));
  }
  /**
   * Check if models are cached using the browser Cache API
   */
  static async isModelCached() {
    try {
      if (!("caches" in (typeof window < "u" ? window : self)))
        return !1;
      const t = await caches.open(this.CACHE_NAME), r = await t.keys(), n = Date.now();
      for (const s of r) {
        const o = await t.match(s);
        if (o) {
          const i = o.headers.get("x-cached-time");
          if (i && n - parseInt(i) < this.CACHE_EXPIRY_MS)
            return console.log("[ModelFetchInterceptor] Found cached model:", s.url), !0;
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
  static async cacheModel(t, r) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      console.log("[ModelFetchInterceptor] Attempting to cache model:", t);
      const n = await caches.open(this.CACHE_NAME), s = r.clone(), o = new Headers(s.headers);
      o.set("x-cached-time", Date.now().toString());
      const i = new Response(s.body, {
        status: s.status,
        statusText: s.statusText,
        headers: o
      });
      await n.put(t, i), console.log("[ModelFetchInterceptor] ✅ Model cached successfully:", t);
    } catch (n) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model:", n);
    }
  }
  /**
   * Store model response in cache with progress tracking
   */
  static async cacheModelWithProgress(t, r, n, s) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      if (!r.body) {
        console.log("[ModelFetchInterceptor] No response body to cache");
        return;
      }
      const o = r.headers.get("content-encoding");
      let i = n;
      if (o && n > 0) {
        const T = {
          gzip: 2.5,
          // WASM files typically compress 2.5-3x
          br: 3,
          // Brotli typically compresses 3x
          deflate: 2
          // Deflate typically compresses 2x
        }[o] || 2;
        i = Math.round(n * T), console.log(
          "[ModelFetchInterceptor] 📦 Caching model with progress:",
          t,
          "reported:",
          n,
          "encoding:",
          o,
          "estimated actual:",
          i
        );
      } else
        console.log("[ModelFetchInterceptor] 📦 Caching model with progress:", t, "reported size:", n);
      const c = await caches.open(this.CACHE_NAME);
      let a = 0, h = 0;
      const l = r.body.getReader(), p = [];
      for (; ; ) {
        const { done: b, value: T } = await l.read();
        if (b) break;
        p.push(T), a += T.length, h += T.length;
        const ue = Math.max(i, h);
        s == null || s(a, ue);
      }
      const d = new Headers(r.headers);
      d.set("x-cached-time", Date.now().toString()), d.set("x-actual-size", h.toString());
      const w = new Response(new Blob(p), {
        status: r.status,
        statusText: r.statusText,
        headers: d
      });
      await c.put(t, w), console.log("[ModelFetchInterceptor] ✅ Model cached with progress:", t, "actual size:", h);
    } catch (o) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model with progress:", o);
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
      const r = await caches.open(this.CACHE_NAME), n = await r.match(t);
      if (!n)
        return console.log("[ModelFetchInterceptor] ❌ Not found in cache"), null;
      const s = n.headers.get("x-cached-time");
      return !s || Date.now() - parseInt(s) > this.CACHE_EXPIRY_MS ? (await r.delete(t), console.log("[ModelFetchInterceptor] ⏰ Cached model expired, removing:", t), null) : (console.log("[ModelFetchInterceptor] ✅ Serving model from cache:", t), n);
    } catch (r) {
      return console.error("[ModelFetchInterceptor] ❌ Error getting cached model:", r), null;
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
    return this.modelFileIndicators.some((r) => t.includes(r));
  }
  /**
   * Create a progress tracking wrapper for local model downloads
   */
  createLocalProgressWrapper(t, r) {
    if (!t.body || !this.options.onProgress)
      return t;
    const n = t.headers.get("content-length"), s = n ? parseInt(n) : 0;
    let o = 0;
    this.totalFiles++, this.activeDownloads.set(r, { loaded: 0, total: s }), console.log("[ModelFetchInterceptor] Local model download started, total:", s, "bytes"), this.updateOverallProgress();
    const i = t.body.getReader(), c = this, a = new ReadableStream({
      start(h) {
        function l() {
          return i.read().then(({ done: p, value: d }) => {
            if (p) {
              console.log("[ModelFetchInterceptor] Local model download complete");
              const w = c.activeDownloads.get(r);
              w && (w.loaded = s || o, c.activeDownloads.set(r, w)), c.completedFiles++, c.updateOverallProgress(), c.completedFiles === c.totalFiles && c.options.onProgress(new ie(
                100,
                c.completedFiles,
                c.totalFiles,
                { type: J.Ready, fromCache: !1 }
              )), h.close();
              return;
            }
            if (d) {
              o += d.length;
              const w = c.activeDownloads.get(r);
              w && (w.loaded = o, c.activeDownloads.set(r, w)), c.updateOverallProgress();
            }
            return h.enqueue(d), l();
          });
        }
        return l();
      }
    });
    return new Response(a, {
      headers: t.headers,
      status: t.status,
      statusText: t.statusText
    });
  }
  /**
   * Handle CDN model downloads with basic progress tracking
   */
  async handleCDNDownload(t, r) {
    const n = typeof t == "string" ? t : t.toString();
    if (!this.options.onProgress)
      return this.originalFetch.call(globalThis, t, r);
    this.totalFiles++, this.activeDownloads.set(n, { loaded: 0, total: 1 }), console.log("[ModelFetchInterceptor] CDN model file detected, basic progress tracking"), this.updateOverallProgress();
    const s = Date.now();
    try {
      const o = await this.originalFetch.call(globalThis, t, r), i = Date.now();
      console.log("[ModelFetchInterceptor] CDN model download completed in", i - s, "ms");
      const c = this.activeDownloads.get(n);
      return c && (c.loaded = 1, this.activeDownloads.set(n, c)), this.completedFiles++, this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress(new ie(
        100,
        this.completedFiles,
        this.totalFiles,
        { type: J.Ready, fromCache: !1 },
        this.module
      )), o;
    } catch (o) {
      throw console.error("[ModelFetchInterceptor] CDN download error:", o), this.completedFiles++, this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress(new ie(
        100,
        this.completedFiles,
        this.totalFiles,
        { type: J.Ready, fromCache: !1, error: o instanceof Error ? o : new Error(String(o)) },
        this.module
      )), o;
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
    console.log("[ModelFetchInterceptor] Starting fetch interception..."), this.fetchIntercepted = !1, this.isIntercepting = !0, this.activeDownloads.clear(), this.totalFiles = 0, this.completedFiles = 0, this.originalFetch = this.getFetchGlobal(), this.options.onProgress && We.isModelCached().then((t) => {
      t ? (console.log("[ModelFetchInterceptor] Models likely cached from previous session"), this.options.onProgress(new ie(
        30,
        0,
        1,
        { type: J.Downloading, fromCache: !0 }
      ))) : console.log("[ModelFetchInterceptor] No cache found");
    }), this.options.onProgress && (this.progressTimeout = setTimeout(() => {
      console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:", this.fetchIntercepted), !this.fetchIntercepted && this.options.onProgress && (console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"), this.options.onProgress(new ie(
        100,
        1,
        1,
        { type: J.Ready, fromCache: !0 },
        this.module
      )));
    }, this.options.cacheDetectionTimeout)), this.setFetchGlobal(async (t, r) => {
      const n = typeof t == "string" ? t : t.toString();
      if (console.log("[ModelFetchInterceptor] 🌐 Fetch intercepted:", n), this.isModelFile(n)) {
        console.log("[ModelFetchInterceptor] 📦 Model file detected:", this.options.isLocalModel ? "local" : "CDN"), this.fetchIntercepted = !0, this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0);
        const s = await We.getCachedModel(n);
        if (s)
          return console.log("[ModelFetchInterceptor] Serving model from cache:", n), this.totalFiles++, this.completedFiles++, this.options.onProgress && (this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress(new ie(
            100,
            this.completedFiles,
            this.totalFiles,
            { type: J.Ready, fromCache: !0 },
            this.module
          ))), s;
      }
      if (this.options.isLocalModel) {
        const s = await this.originalFetch.call(globalThis, t, r), o = s.clone();
        return We.cacheModel(n, o), this.createLocalProgressWrapper(s, n);
      } else {
        const s = await this.handleCDNDownload(t, r), o = s.clone(), i = s.headers.get("content-length"), c = i ? parseInt(i) : 0;
        return We.cacheModelWithProgress(
          n,
          o,
          c,
          (a, h) => {
            if (this.options.onProgress) {
              const l = h > 0 ? a / h * 100 : 0;
              this.options.onProgress(new ie(
                Math.round(l),
                a,
                h,
                { type: J.Caching, fromCache: !1 },
                this.module
              ));
            }
          }
        ).catch((a) => {
          console.error("[ModelFetchInterceptor] Background caching failed:", a);
        }), s;
      }
    });
  }
  /**
   * Stop intercepting fetch requests and restore original fetch
   */
  stop() {
    this.isIntercepting && (console.log("[ModelFetchInterceptor] Stopping fetch interception..."), this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0), this.originalFetch && (this.setFetchGlobal(this.originalFetch), this.originalFetch = null), this.isIntercepting = !1, this.fetchIntercepted = !1);
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
U(We, "CACHE_NAME", "vital-sign-models"), U(We, "CACHE_EXPIRY_MS", 1440 * 60 * 1e3);
let Qr = We;
var Tn = typeof self < "u" ? self : {};
function uo(e, t) {
  e: {
    for (var r = ["CLOSURE_FLAGS"], n = Tn, s = 0; s < r.length; s++) if ((n = n[r[s]]) == null) {
      r = null;
      break e;
    }
    r = n;
  }
  return (e = r && r[e]) != null ? e : t;
}
function rt() {
  throw Error("Invalid UTF8");
}
function ls(e, t) {
  return t = String.fromCharCode.apply(null, t), e == null ? t : e + t;
}
let Zt, Xr;
const Ia = typeof TextDecoder < "u";
let La;
const Sa = typeof TextEncoder < "u";
function fo(e) {
  if (Sa) e = (La || (La = new TextEncoder())).encode(e);
  else {
    let r = 0;
    const n = new Uint8Array(3 * e.length);
    for (let s = 0; s < e.length; s++) {
      var t = e.charCodeAt(s);
      if (128 > t) n[r++] = t;
      else {
        if (2048 > t) n[r++] = t >> 6 | 192;
        else {
          if (55296 <= t && 57343 >= t) {
            if (56319 >= t && s < e.length) {
              const o = e.charCodeAt(++s);
              if (56320 <= o && 57343 >= o) {
                t = 1024 * (t - 55296) + o - 56320 + 65536, n[r++] = t >> 18 | 240, n[r++] = t >> 12 & 63 | 128, n[r++] = t >> 6 & 63 | 128, n[r++] = 63 & t | 128;
                continue;
              }
              s--;
            }
            t = 65533;
          }
          n[r++] = t >> 12 | 224, n[r++] = t >> 6 & 63 | 128;
        }
        n[r++] = 63 & t | 128;
      }
    }
    e = r === n.length ? n : n.subarray(0, r);
  }
  return e;
}
var Ot, po = uo(610401301, !1), En = uo(572417392, !0);
const us = Tn.navigator;
function en(e) {
  return !!po && !!Ot && Ot.brands.some((({ brand: t }) => t && t.indexOf(e) != -1));
}
function ge(e) {
  var t;
  return (t = Tn.navigator) && (t = t.userAgent) || (t = ""), t.indexOf(e) != -1;
}
function He() {
  return !!po && !!Ot && 0 < Ot.brands.length;
}
function zr() {
  return He() ? en("Chromium") : (ge("Chrome") || ge("CriOS")) && !(!He() && ge("Edge")) || ge("Silk");
}
Ot = us && us.userAgentData || null;
var Ca = !He() && (ge("Trident") || ge("MSIE"));
!ge("Android") || zr(), zr(), ge("Safari") && (zr() || !He() && ge("Coast") || !He() && ge("Opera") || !He() && ge("Edge") || (He() ? en("Microsoft Edge") : ge("Edg/")) || He() && en("Opera"));
var go = {}, Mt = null;
function Ra(e) {
  var t = e.length, r = 3 * t / 4;
  r % 3 ? r = Math.floor(r) : "=.".indexOf(e[t - 1]) != -1 && (r = "=.".indexOf(e[t - 2]) != -1 ? r - 2 : r - 1);
  var n = new Uint8Array(r), s = 0;
  return (function(o, i) {
    function c(w) {
      for (; a < o.length; ) {
        var b = o.charAt(a++), T = Mt[b];
        if (T != null) return T;
        if (!/^[\s\xa0]*$/.test(b)) throw Error("Unknown base64 encoding at char: " + b);
      }
      return w;
    }
    mo();
    for (var a = 0; ; ) {
      var h = c(-1), l = c(0), p = c(64), d = c(64);
      if (d === 64 && h === -1) break;
      i(h << 2 | l >> 4), p != 64 && (i(l << 4 & 240 | p >> 2), d != 64 && i(p << 6 & 192 | d));
    }
  })(e, (function(o) {
    n[s++] = o;
  })), s !== r ? n.subarray(0, s) : n;
}
function mo() {
  if (!Mt) {
    Mt = {};
    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++) {
      var n = e.concat(t[r].split(""));
      go[r] = n;
      for (var s = 0; s < n.length; s++) {
        var o = n[s];
        Mt[o] === void 0 && (Mt[o] = s);
      }
    }
  }
}
var yo = typeof Uint8Array < "u", wo = !Ca && typeof btoa == "function";
function ds(e) {
  if (!wo) {
    var t;
    t === void 0 && (t = 0), mo(), t = go[t];
    var r = Array(Math.floor(e.length / 3)), n = t[64] || "";
    let a = 0, h = 0;
    for (; a < e.length - 2; a += 3) {
      var s = e[a], o = e[a + 1], i = e[a + 2], c = t[s >> 2];
      s = t[(3 & s) << 4 | o >> 4], o = t[(15 & o) << 2 | i >> 6], i = t[63 & i], r[h++] = c + s + o + i;
    }
    switch (c = 0, i = n, e.length - a) {
      case 2:
        i = t[(15 & (c = e[a + 1])) << 2] || n;
      case 1:
        e = e[a], r[h] = t[e >> 2] + t[(3 & e) << 4 | c >> 4] + i + n;
    }
    return r.join("");
  }
  for (t = "", r = 0, n = e.length - 10240; r < n; ) t += String.fromCharCode.apply(null, e.subarray(r, r += 10240));
  return t += String.fromCharCode.apply(null, r ? e.subarray(r) : e), btoa(t);
}
const fs = /[-_.]/g, Pa = { "-": "+", _: "/", ".": "=" };
function Oa(e) {
  return Pa[e] || "";
}
function vo(e) {
  if (!wo) return Ra(e);
  fs.test(e) && (e = e.replace(fs, Oa)), e = atob(e);
  const t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
  return t;
}
function xr(e) {
  return yo && e != null && e instanceof Uint8Array;
}
let Da;
function Fr() {
  return Da || (Da = new Uint8Array(0));
}
var ut = {};
let Ua;
function _o(e) {
  if (e !== ut) throw Error("illegal external caller");
}
function dt() {
  return Ua || (Ua = new $e(null, ut));
}
function bn(e) {
  _o(ut);
  var t = e.Z;
  return (t = t == null || xr(t) ? t : typeof t == "string" ? vo(t) : null) == null ? t : e.Z = t;
}
var $e = class {
  constructor(e, t) {
    if (_o(t), this.Z = e, e != null && e.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
  wa() {
    const e = bn(this);
    return e ? new Uint8Array(e) : Fr();
  }
};
function To(e, t) {
  return Error(`Invalid wire type: ${e} (at position ${t})`);
}
function An() {
  return Error("Failed to read varint, encoding is invalid.");
}
function Eo(e, t) {
  return Error(`Tried to read past the end of the data ${t} > ${e}`);
}
function bo(e) {
  return e.length == 0 ? dt() : new $e(e, ut);
}
function kn(e) {
  if (typeof e == "string") return { buffer: vo(e), L: !1 };
  if (Array.isArray(e)) return { buffer: new Uint8Array(e), L: !1 };
  if (e.constructor === Uint8Array) return { buffer: e, L: !1 };
  if (e.constructor === ArrayBuffer) return { buffer: new Uint8Array(e), L: !1 };
  if (e.constructor === $e) return { buffer: bn(e) || Fr(), L: !0 };
  if (e instanceof Uint8Array) return { buffer: new Uint8Array(e.buffer, e.byteOffset, e.byteLength), L: !1 };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function xn() {
  return typeof BigInt == "function";
}
var tn = !En;
let ps = !En;
const Na = typeof Uint8Array.prototype.slice == "function";
let Ao, k = 0, j = 0;
function ot(e) {
  const t = 0 > e;
  let r = (e = Math.abs(e)) >>> 0;
  if (e = Math.floor((e - r) / 4294967296), t) {
    const [n, s] = In(r, e);
    e = s, r = n;
  }
  k = r >>> 0, j = e >>> 0;
}
function Fn(e) {
  const t = Ao || (Ao = new DataView(new ArrayBuffer(8)));
  t.setFloat32(0, +e, !0), j = 0, k = t.getUint32(0, !0);
}
function rn(e, t) {
  return 4294967296 * t + (e >>> 0);
}
function Mn(e, t) {
  const r = 2147483648 & t;
  return r && (t = ~t >>> 0, (e = 1 + ~e >>> 0) == 0 && (t = t + 1 >>> 0)), e = rn(e, t), r ? -e : e;
}
function dr(e, t) {
  if (e >>>= 0, 2097151 >= (t >>>= 0)) var r = "" + (4294967296 * t + e);
  else xn() ? r = "" + (BigInt(t) << BigInt(32) | BigInt(e)) : (e = (16777215 & e) + 6777216 * (r = 16777215 & (e >>> 24 | t << 8)) + 6710656 * (t = t >> 16 & 65535), r += 8147497 * t, t *= 2, 1e7 <= e && (r += Math.floor(e / 1e7), e %= 1e7), 1e7 <= r && (t += Math.floor(r / 1e7), r %= 1e7), r = t + gs(r) + gs(e));
  return r;
}
function gs(e) {
  return e = String(e), "0000000".slice(e.length) + e;
}
function ko() {
  var e = k, t = j;
  if (2147483648 & t) if (xn()) e = "" + (BigInt(0 | t) << BigInt(32) | BigInt(e >>> 0));
  else {
    const [r, n] = In(e, t);
    e = "-" + dr(r, n);
  }
  else e = dr(e, t);
  return e;
}
function Mr(e) {
  if (16 > e.length) ot(Number(e));
  else if (xn()) e = BigInt(e), k = Number(e & BigInt(4294967295)) >>> 0, j = Number(e >> BigInt(32) & BigInt(4294967295));
  else {
    const t = +(e[0] === "-");
    j = k = 0;
    const r = e.length;
    for (let n = t, s = (r - t) % 6 + t; s <= r; n = s, s += 6) {
      const o = Number(e.slice(n, s));
      j *= 1e6, k = 1e6 * k + o, 4294967296 <= k && (j += Math.trunc(k / 4294967296), j >>>= 0, k >>>= 0);
    }
    if (t) {
      const [n, s] = In(k, j);
      k = n, j = s;
    }
  }
}
function In(e, t) {
  return t = ~t, e ? e = 1 + ~e : t += 1, [e, t];
}
function Ln(e, t) {
  let r, n = 0, s = 0, o = 0;
  const i = e.h;
  let c = e.g;
  do
    r = i[c++], n |= (127 & r) << o, o += 7;
  while (32 > o && 128 & r);
  for (32 < o && (s |= (127 & r) >> 4), o = 3; 32 > o && 128 & r; o += 7) r = i[c++], s |= (127 & r) << o;
  if (it(e, c), 128 > r) return t(n >>> 0, s >>> 0);
  throw An();
}
function Sn(e) {
  let t = 0, r = e.g;
  const n = r + 10, s = e.h;
  for (; r < n; ) {
    const o = s[r++];
    if (t |= o, (128 & o) == 0) return it(e, r), !!(127 & t);
  }
  throw An();
}
function qe(e) {
  const t = e.h;
  let r = e.g, n = t[r++], s = 127 & n;
  if (128 & n && (n = t[r++], s |= (127 & n) << 7, 128 & n && (n = t[r++], s |= (127 & n) << 14, 128 & n && (n = t[r++], s |= (127 & n) << 21, 128 & n && (n = t[r++], s |= n << 28, 128 & n && 128 & t[r++] && 128 & t[r++] && 128 & t[r++] && 128 & t[r++] && 128 & t[r++]))))) throw An();
  return it(e, r), s;
}
function Ke(e) {
  return qe(e) >>> 0;
}
function nn(e) {
  var t = e.h;
  const r = e.g, n = t[r], s = t[r + 1], o = t[r + 2];
  return t = t[r + 3], it(e, e.g + 4), (n << 0 | s << 8 | o << 16 | t << 24) >>> 0;
}
function sn(e) {
  var t = nn(e);
  e = 2 * (t >> 31) + 1;
  const r = t >>> 23 & 255;
  return t &= 8388607, r == 255 ? t ? NaN : 1 / 0 * e : r == 0 ? e * Math.pow(2, -149) * t : e * Math.pow(2, r - 150) * (t + Math.pow(2, 23));
}
function Ba(e) {
  return qe(e);
}
function Wr(e, t, { aa: r = !1 } = {}) {
  e.aa = r, t && (t = kn(t), e.h = t.buffer, e.m = t.L, e.j = 0, e.l = e.h.length, e.g = e.j);
}
function it(e, t) {
  if (e.g = t, t > e.l) throw Eo(e.l, t);
}
function xo(e, t) {
  if (0 > t) throw Error(`Tried to read a negative byte length: ${t}`);
  const r = e.g, n = r + t;
  if (n > e.l) throw Eo(t, e.l - r);
  return e.g = n, r;
}
function Fo(e, t) {
  if (t == 0) return dt();
  var r = xo(e, t);
  return e.aa && e.m ? r = e.h.subarray(r, r + t) : (e = e.h, r = r === (t = r + t) ? Fr() : Na ? e.slice(r, t) : new Uint8Array(e.subarray(r, t))), bo(r);
}
var ms = [];
function Mo(e) {
  var t = e.g;
  if (t.g == t.l) return !1;
  e.l = e.g.g;
  var r = Ke(e.g);
  if (t = r >>> 3, !(0 <= (r &= 7) && 5 >= r)) throw To(r, e.l);
  if (1 > t) throw Error(`Invalid field number: ${t} (at position ${e.l})`);
  return e.m = t, e.h = r, !0;
}
function nr(e) {
  switch (e.h) {
    case 0:
      e.h != 0 ? nr(e) : Sn(e.g);
      break;
    case 1:
      it(e = e.g, e.g + 8);
      break;
    case 2:
      if (e.h != 2) nr(e);
      else {
        var t = Ke(e.g);
        it(e = e.g, e.g + t);
      }
      break;
    case 5:
      it(e = e.g, e.g + 4);
      break;
    case 3:
      for (t = e.m; ; ) {
        if (!Mo(e)) throw Error("Unmatched start-group tag: stream EOF");
        if (e.h == 4) {
          if (e.m != t) throw Error("Unmatched end-group tag");
          break;
        }
        nr(e);
      }
      break;
    default:
      throw To(e.h, e.l);
  }
}
function Xt(e, t, r) {
  const n = e.g.l, s = Ke(e.g), o = e.g.g + s;
  let i = o - n;
  if (0 >= i && (e.g.l = o, r(t, e, void 0, void 0, void 0), i = o - e.g.g), i) throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s - i} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return e.g.g = o, e.g.l = n, t;
}
function Cn(e) {
  var t = Ke(e.g), r = xo(e = e.g, t);
  if (e = e.h, Ia) {
    var n, s = e;
    (n = Xr) || (n = Xr = new TextDecoder("utf-8", { fatal: !0 })), t = r + t, s = r === 0 && t === s.length ? s : s.subarray(r, t);
    try {
      var o = n.decode(s);
    } catch (c) {
      if (Zt === void 0) {
        try {
          n.decode(new Uint8Array([128]));
        } catch {
        }
        try {
          n.decode(new Uint8Array([97])), Zt = !0;
        } catch {
          Zt = !1;
        }
      }
      throw !Zt && (Xr = void 0), c;
    }
  } else {
    t = (o = r) + t, r = [];
    let c, a = null;
    for (; o < t; ) {
      var i = e[o++];
      128 > i ? r.push(i) : 224 > i ? o >= t ? rt() : (c = e[o++], 194 > i || (192 & c) != 128 ? (o--, rt()) : r.push((31 & i) << 6 | 63 & c)) : 240 > i ? o >= t - 1 ? rt() : (c = e[o++], (192 & c) != 128 || i === 224 && 160 > c || i === 237 && 160 <= c || (192 & (n = e[o++])) != 128 ? (o--, rt()) : r.push((15 & i) << 12 | (63 & c) << 6 | 63 & n)) : 244 >= i ? o >= t - 2 ? rt() : (c = e[o++], (192 & c) != 128 || c - 144 + (i << 28) >> 30 != 0 || (192 & (n = e[o++])) != 128 || (192 & (s = e[o++])) != 128 ? (o--, rt()) : (i = (7 & i) << 18 | (63 & c) << 12 | (63 & n) << 6 | 63 & s, i -= 65536, r.push(55296 + (i >> 10 & 1023), 56320 + (1023 & i)))) : rt(), 8192 <= r.length && (a = ls(a, r), r.length = 0);
    }
    o = ls(a, r);
  }
  return o;
}
function Io(e) {
  const t = Ke(e.g);
  return Fo(e.g, t);
}
function Ir(e, t, r) {
  var n = Ke(e.g);
  for (n = e.g.g + n; e.g.g < n; ) r.push(t(e.g));
}
var Qt = [];
function ys(e) {
  return e ? /^\d+$/.test(e) ? (Mr(e), new ws(k, j)) : null : Ga || (Ga = new ws(0, 0));
}
var ws = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let Ga;
function vs(e) {
  return e ? /^-?\d+$/.test(e) ? (Mr(e), new _s(k, j)) : null : ja || (ja = new _s(0, 0));
}
var _s = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let ja;
function fr(e, t, r) {
  for (; 0 < r || 127 < t; ) e.g.push(127 & t | 128), t = (t >>> 7 | r << 25) >>> 0, r >>>= 7;
  e.g.push(t);
}
function zt(e, t) {
  for (; 127 < t; ) e.g.push(127 & t | 128), t >>>= 7;
  e.g.push(t);
}
function Lr(e, t) {
  if (0 <= t) zt(e, t);
  else {
    for (let r = 0; 9 > r; r++) e.g.push(127 & t | 128), t >>= 7;
    e.g.push(1);
  }
}
function Dt(e, t) {
  e.g.push(t >>> 0 & 255), e.g.push(t >>> 8 & 255), e.g.push(t >>> 16 & 255), e.g.push(t >>> 24 & 255);
}
function ft(e, t) {
  t.length !== 0 && (e.l.push(t), e.h += t.length);
}
function _e(e, t, r) {
  zt(e.g, 8 * t + r);
}
function Rn(e, t) {
  return _e(e, t, 2), t = e.g.end(), ft(e, t), t.push(e.h), t;
}
function Pn(e, t) {
  var r = t.pop();
  for (r = e.h + e.g.length() - r; 127 < r; ) t.push(127 & r | 128), r >>>= 7, e.h++;
  t.push(r), e.h++;
}
function Sr(e, t, r) {
  _e(e, t, 2), zt(e.g, r.length), ft(e, e.g.end()), ft(e, r);
}
function on(e, t, r, n) {
  r != null && (t = Rn(e, t), n(r, e), Pn(e, t));
}
class vt {
  constructor(t, r, n, s) {
    this.g = t, this.h = r, this.l = n, this.qa = s;
  }
}
function ee(e) {
  return Array.prototype.slice.call(e);
}
function Lo(e) {
  return typeof Symbol == "function" && typeof Symbol() == "symbol" ? Symbol() : e;
}
var Se = Lo(), Ts = Lo("0di"), Cr = Se ? (e, t) => {
  e[Se] |= t;
} : (e, t) => {
  e.D !== void 0 ? e.D |= t : Object.defineProperties(e, { D: { value: t, configurable: !0, writable: !0, enumerable: !1 } });
};
function Es(e) {
  const t = D(e);
  (1 & t) != 1 && (Object.isFrozen(e) && (e = ee(e)), O(e, 1 | t));
}
var pr = Se ? (e, t) => {
  e[Se] &= ~t;
} : (e, t) => {
  e.D !== void 0 && (e.D &= ~t);
};
function $(e, t, r) {
  return r ? e | t : e & ~t;
}
var D = Se ? (e) => 0 | e[Se] : (e) => 0 | e.D, E = Se ? (e) => e[Se] : (e) => e.D, O = Se ? (e, t) => {
  e[Se] = t;
} : (e, t) => {
  e.D !== void 0 ? e.D = t : Object.defineProperties(e, { D: { value: t, configurable: !0, writable: !0, enumerable: !1 } });
};
function bs() {
  var e = [];
  return Cr(e, 1), e;
}
function _t(e) {
  return Cr(e, 34), e;
}
function Va(e, t) {
  O(t, -14591 & (0 | e));
}
function an(e, t) {
  O(t, -14557 & (34 | e));
}
function gr(e) {
  return (e = e >> 14 & 1023) === 0 ? 536870912 : e;
}
var Wt = {}, So = {};
function As(e) {
  return !(!e || typeof e != "object" || e.Na !== So);
}
function St(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && e.constructor === Object;
}
let Co = !En;
function Ro(e, t, r) {
  if (e != null) {
    if (typeof e == "string") e = e ? new $e(e, ut) : dt();
    else if (e.constructor !== $e) if (xr(e)) e = r ? bo(e) : e.length ? new $e(new Uint8Array(e), ut) : dt();
    else {
      if (!t) throw Error();
      e = void 0;
    }
  }
  return e;
}
function cn(e, t, r) {
  if (!Array.isArray(e) || e.length) return !1;
  const n = D(e);
  return !!(1 & n) || !(!t || !(Array.isArray(t) ? t.includes(r) : t.has(r))) && (O(e, 1 | n), !0);
}
var st;
const ks = [];
function Oe(e) {
  if (2 & e) throw Error();
}
O(ks, 55), st = Object.freeze(ks);
class mr {
  constructor(t, r, n) {
    this.l = 0, this.g = t, this.h = r, this.m = n;
  }
  next() {
    if (this.l < this.g.length) {
      const t = this.g[this.l++];
      return { done: !1, value: this.h ? this.h.call(this.m, t) : t };
    }
    return { done: !0, value: void 0 };
  }
  [Symbol.iterator]() {
    return new mr(this.g, this.h, this.m);
  }
}
var Xa = {};
let Ye, Ut;
function Po(e, t) {
  (t = Ye ? t[Ye] : void 0) && (e[Ye] = ee(t));
}
function hn(e) {
  return (e = Error(e)).__closure__error__context__984382 || (e.__closure__error__context__984382 = {}), e.__closure__error__context__984382.severity = "warning", e;
}
function et(e) {
  return e == null || typeof e == "number" ? e : e === "NaN" || e === "Infinity" || e === "-Infinity" ? Number(e) : void 0;
}
function Oo(e) {
  return e == null || typeof e == "boolean" ? e : typeof e == "number" ? !!e : void 0;
}
Object.freeze(new class {
}()), Object.freeze(new class {
}());
const za = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Rr(e) {
  const t = typeof e;
  return t === "number" ? Number.isFinite(e) : t === "string" && za.test(e);
}
function Tt(e) {
  if (e == null) return e;
  if (typeof e == "string") {
    if (!e) return;
    e = +e;
  }
  return typeof e == "number" && Number.isFinite(e) ? 0 | e : void 0;
}
function Wa(e) {
  if (e == null) return e;
  if (typeof e == "string") {
    if (!e) return;
    e = +e;
  }
  return typeof e == "number" && Number.isFinite(e) ? e >>> 0 : void 0;
}
function xs(e) {
  return e[0] !== "-" && (20 > e.length || e.length === 20 && 184467 > Number(e.substring(0, 6)));
}
function Do(e) {
  return e[0] === "-" ? 20 > e.length || e.length === 20 && -922337 < Number(e.substring(0, 7)) : 19 > e.length || e.length === 19 && 922337 > Number(e.substring(0, 6));
}
function On(e) {
  return e = Math.trunc(e), Number.isSafeInteger(e) || (ot(e), e = Mn(k, j)), e;
}
function Dn(e) {
  var t = Math.trunc(Number(e));
  return Number.isSafeInteger(t) ? String(t) : ((t = e.indexOf(".")) !== -1 && (e = e.substring(0, t)), Do(e) || (Mr(e), e = ko()), e);
}
function yr(e) {
  return e == null ? e : Rr(e) ? typeof e == "number" ? On(e) : Dn(e) : void 0;
}
function Ht(e) {
  if (typeof e != "string") throw Error();
  return e;
}
function $t(e) {
  if (e != null && typeof e != "string") throw Error();
  return e;
}
function Nt(e) {
  return e == null || typeof e == "string" ? e : void 0;
}
function Un(e, t, r, n) {
  if (e != null && typeof e == "object" && e.W === Wt) return e;
  if (!Array.isArray(e)) return r ? 2 & n ? (e = t[Ts]) ? t = e : (_t((e = new t()).s), t = t[Ts] = e) : t = new t() : t = void 0, t;
  let s = r = D(e);
  return s === 0 && (s |= 32 & n), s |= 2 & n, s !== r && O(e, s), new t(e);
}
function Ha(e, t, r) {
  if (t) {
    var n = !!n;
    if (!Rr(t = e)) throw hn("int64");
    typeof t == "string" ? n = Dn(t) : n ? (n = Math.trunc(t), Number.isSafeInteger(n) ? n = String(n) : Do(t = String(n)) ? n = t : (ot(n), n = ko())) : n = On(t);
  } else n = yr(e);
  return typeof (r = (e = n) == null ? r ? 0 : void 0 : e) == "string" && (n = +r, Number.isSafeInteger(n)) ? n : r;
}
let wr, Nn, $a;
function vr(e) {
  switch (typeof e) {
    case "boolean":
      return Nn || (Nn = [0, void 0, !0]);
    case "number":
      return 0 < e ? void 0 : e === 0 ? $a || ($a = [0, void 0]) : [-e, void 0];
    case "string":
      return [0, e];
    case "object":
      return e;
  }
}
function at(e, t) {
  return Uo(e, t[0], t[1]);
}
function Uo(e, t, r) {
  if (e == null && (e = wr), wr = void 0, e == null) {
    var n = 96;
    r ? (e = [r], n |= 512) : e = [], t && (n = -16760833 & n | (1023 & t) << 14);
  } else {
    if (!Array.isArray(e)) throw Error();
    if (64 & (n = D(e))) return Ut && delete e[Ut], e;
    if (n |= 64, r && (n |= 512, r !== e[0])) throw Error();
    e: {
      const s = (r = e).length;
      if (s) {
        const o = s - 1;
        if (St(r[o])) {
          if (1024 <= (t = o - (+!!(512 & (n |= 256)) - 1))) throw Error();
          n = -16760833 & n | (1023 & t) << 14;
          break e;
        }
      }
      if (t) {
        if (1024 < (t = Math.max(t, s - (+!!(512 & n) - 1)))) throw Error();
        n = -16760833 & n | (1023 & t) << 14;
      }
    }
  }
  return O(e, n), e;
}
let Ya = (function() {
  try {
    return new class extends Map {
      constructor() {
        super();
      }
    }(), !1;
  } catch {
    return !0;
  }
})();
class Hr {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.g.get(t);
  }
  set(t, r) {
    return this.g.set(t, r), this.size = this.g.size, this;
  }
  delete(t) {
    return t = this.g.delete(t), this.size = this.g.size, t;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t) {
    return this.g.has(t);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t, r) {
    return this.g.forEach(t, r);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
const qa = Ya ? (Object.setPrototypeOf(Hr.prototype, Map.prototype), Object.defineProperties(Hr.prototype, { size: { value: 0, configurable: !0, enumerable: !0, writable: !0 } }), Hr) : class extends Map {
  constructor() {
    super();
  }
};
function er(e) {
  return e;
}
function $r(e) {
  if (2 & e.O) throw Error("Cannot mutate an immutable Map");
}
var ye = class extends qa {
  constructor(e, t, r = er, n = er) {
    super();
    let s = D(e);
    s |= 64, O(e, s), this.O = s, this.V = t, this.R = r || er, this.Y = this.V ? Ka : n || er;
    for (let o = 0; o < e.length; o++) {
      const i = e[o], c = r(i[0], !1, !0);
      let a = i[1];
      t ? a === void 0 && (a = null) : a = n(i[1], !1, !0, void 0, void 0, s), super.set(c, a);
    }
  }
  pa(e = Fs) {
    return this.X(e);
  }
  X(e = Fs) {
    const t = [], r = super.entries();
    for (var n; !(n = r.next()).done; ) (n = n.value)[0] = e(n[0]), n[1] = e(n[1]), t.push(n);
    return t;
  }
  clear() {
    $r(this), super.clear();
  }
  delete(e) {
    return $r(this), super.delete(this.R(e, !0, !1));
  }
  entries() {
    var e = this.ma();
    return new mr(e, Ja, this);
  }
  keys() {
    return this.Ma();
  }
  values() {
    var e = this.ma();
    return new mr(e, ye.prototype.get, this);
  }
  forEach(e, t) {
    super.forEach(((r, n) => {
      e.call(t, this.get(n), n, this);
    }));
  }
  set(e, t) {
    return $r(this), (e = this.R(e, !0, !1)) == null ? this : t == null ? (super.delete(e), this) : super.set(e, this.Y(t, !0, !0, this.V, !1, this.O));
  }
  Ta(e) {
    const t = this.R(e[0], !1, !0);
    e = e[1], e = this.V ? e === void 0 ? null : e : this.Y(e, !1, !0, void 0, !1, this.O), super.set(t, e);
  }
  has(e) {
    return super.has(this.R(e, !1, !1));
  }
  get(e) {
    e = this.R(e, !1, !1);
    const t = super.get(e);
    if (t !== void 0) {
      var r = this.V;
      return r ? ((r = this.Y(t, !1, !0, r, this.xa, this.O)) !== t && super.set(e, r), r) : t;
    }
  }
  ma() {
    return Array.from(super.keys());
  }
  Ma() {
    return super.keys();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function Ka(e, t, r, n, s, o) {
  return e = Un(e, n, r, o), s && (e = Pr(e)), e;
}
function Fs(e) {
  return e;
}
function Ja(e) {
  return [e, this.get(e)];
}
function Bn(e, t, r, n, s, o) {
  if (e != null) {
    if (Array.isArray(e)) e = o && 2 & D(e) ? e : Gn(e, t, r, n !== void 0, s, o);
    else if (St(e)) {
      const i = {};
      for (let c in e) i[c] = Bn(e[c], t, r, n, s, o);
      e = i;
    } else e = t(e, n);
    return e;
  }
}
function Gn(e, t, r, n, s, o) {
  const i = n || r ? D(e) : 0;
  n = n ? !!(32 & i) : void 0;
  const c = ee(e);
  for (let a = 0; a < c.length; a++) c[a] = Bn(c[a], t, r, n, s, o);
  return r && (Po(c, e), r(i, c)), c;
}
function Za(e) {
  return Bn(e, No, void 0, void 0, !1, !1);
}
function No(e) {
  return e.W === Wt ? e.toJSON() : e instanceof ye ? e.pa(Za) : (function(t) {
    switch (typeof t) {
      case "number":
        return isFinite(t) ? t : String(t);
      case "boolean":
        return t ? 1 : 0;
      case "object":
        if (t) {
          if (Array.isArray(t)) return Co || !cn(t, void 0, 9999) ? t : void 0;
          if (xr(t)) return ds(t);
          if (t instanceof $e) {
            const r = t.Z;
            return r == null ? "" : typeof r == "string" ? r : t.Z = ds(r);
          }
          if (t instanceof ye) return t = t.pa(), tn || t.length !== 0 ? t : void 0;
        }
    }
    return t;
  })(e);
}
function ln(e, t, r = an) {
  if (e != null) {
    if (yo && e instanceof Uint8Array) return t ? e : new Uint8Array(e);
    if (Array.isArray(e)) {
      var n = D(e);
      return 2 & n ? e : (t && (t = n === 0 || !!(32 & n) && !(64 & n || !(16 & n))), t ? (O(e, -12293 & (34 | n)), e) : Gn(e, ln, 4 & n ? an : r, !0, !1, !0));
    }
    return e.W === Wt ? (r = e.s, e = 2 & (n = E(r)) ? e : jn(e, r, n, !0)) : e instanceof ye && (r = _t(e.X(ln)), e = new ye(r, e.V, e.R, e.Y)), e;
  }
}
function jn(e, t, r, n) {
  return e = e.constructor, wr = t = Bo(t, r, n), t = new e(t), wr = void 0, t;
}
function Bo(e, t, r) {
  const n = r || 2 & t ? an : Va, s = !!(32 & t);
  return e = (function(o, i, c) {
    const a = ee(o);
    var h = a.length;
    const l = 256 & i ? a[h - 1] : void 0;
    for (h += l ? -1 : 0, i = 512 & i ? 1 : 0; i < h; i++) a[i] = c(a[i]);
    if (l) {
      i = a[i] = {};
      for (const p in l) i[p] = c(l[p]);
    }
    return Po(a, o), a;
  })(e, t, ((o) => ln(o, s, n))), Cr(e, 32 | (r ? 2 : 0)), e;
}
function Pr(e) {
  const t = e.s, r = E(t);
  return 2 & r ? jn(e, t, r, !1) : e;
}
function pt(e, t) {
  return De(e = e.s, E(e), t);
}
function De(e, t, r, n) {
  if (r === -1) return null;
  if (r >= gr(t)) {
    if (256 & t) return e[e.length - 1][r];
  } else {
    var s = e.length;
    if (n && 256 & t && (n = e[s - 1][r]) != null) return n;
    if ((t = r + (+!!(512 & t) - 1)) < s) return e[t];
  }
}
function x(e, t, r, n) {
  const s = e.s;
  let o = E(s);
  return Oe(o), F(s, o, t, r, n), e;
}
function F(e, t, r, n, s) {
  var o = gr(t);
  if (r >= o || s) {
    if (s = t, 256 & t) o = e[e.length - 1];
    else {
      if (n == null) return s;
      o = e[o + (+!!(512 & t) - 1)] = {}, s |= 256;
    }
    return o[r] = n, s !== t && O(e, s), s;
  }
  return e[r + (+!!(512 & t) - 1)] = n, 256 & t && r in (e = e[e.length - 1]) && delete e[r], t;
}
function Et(e, t, r, n, s) {
  var o = 2 & t;
  let i = De(e, t, r, s);
  Array.isArray(i) || (i = st);
  const c = !(2 & n);
  n = !(1 & n);
  const a = !!(32 & t);
  let h = D(i);
  return h !== 0 || !a || o || c ? 1 & h || (h |= 1, O(i, h)) : (h |= 33, O(i, h)), o ? (e = !1, 2 & h || (_t(i), e = !!(4 & h)), (n || e) && Object.freeze(i)) : (o = !!(2 & h) || !!(2048 & h), n && o ? (i = ee(i), n = 1, a && !c && (n |= 32), O(i, n), F(e, t, r, i, s)) : c && 32 & h && !o && pr(i, 32)), i;
}
function sr(e, t) {
  e = e.s;
  let r = E(e);
  const n = De(e, r, t), s = et(n);
  return s != null && s !== n && F(e, r, t, s), s;
}
function Go(e) {
  e = e.s;
  let t = E(e);
  const r = De(e, t, 1), n = Ro(r, !0, !!(34 & t));
  return n != null && n !== r && F(e, t, 1, n), n;
}
function lt(e, t, r) {
  e = e.s;
  let n = E(e);
  const s = 2 & n ? 1 : 2;
  let o = jo(e, n, t);
  var i = D(o);
  if (!(4 & i)) {
    (4 & i || Object.isFrozen(o)) && (o = ee(o), i = ct(i, n, !1), n = F(e, n, t, o));
    var c = 0;
    let a = 0;
    for (; c < o.length; c++) {
      const h = r(o[c]);
      h != null && (o[a++] = h);
    }
    a < c && (o.length = a), i = $(i = Vo(i, n, !1), 20, !0), i = $(i, 4096, !1), i = $(i, 8192, !1), O(o, i), 2 & i && Object.freeze(o);
  }
  return Ct(i) || (r = i, (i = (c = s === 1) ? $(i, 2, !0) : $(i, 32, !1)) !== r && O(o, i), c && Object.freeze(o)), s === 2 && Ct(i) && (o = ee(o), i = ct(i, n, !1), O(o, i), F(e, n, t, o)), o;
}
function jo(e, t, r) {
  return e = De(e, t, r), Array.isArray(e) ? e : st;
}
function Vo(e, t, r) {
  return e === 0 && (e = ct(e, t, r)), $(e, 1, !0);
}
function Ct(e) {
  return !!(2 & e) && !!(4 & e) || !!(2048 & e);
}
let Qa;
function Ms() {
  return Qa ?? (Qa = new ye(_t([]), void 0, void 0, void 0, Xa));
}
function Xo(e) {
  e = ee(e);
  for (let t = 0; t < e.length; t++) {
    const r = e[t] = ee(e[t]);
    Array.isArray(r[1]) && (r[1] = _t(r[1]));
  }
  return e;
}
function _r(e, t, r) {
  {
    const i = e.s;
    let c = E(i);
    if (Oe(c), r == null) F(i, c, t);
    else {
      var n, s = e = D(r), o = !!(2 & e) || Object.isFrozen(r);
      if ((n = !o) && (n = !1), !(4 & e)) for (e = 21, o && (r = ee(r), s = 0, e = ct(e, c, !0)), o = 0; o < r.length; o++) r[o] = Ht(r[o]);
      n && (r = ee(r), s = 0, e = ct(e, c, !0)), e !== s && O(r, e), F(i, c, t, r);
    }
  }
}
function Yt(e, t, r, n) {
  const s = E(e);
  Oe(s), e = Et(e, s, t, 2), n = r(n, !!(4 & (t = D(e))) && !!(4096 & t)), e.push(n);
}
function e2(e) {
  return e;
}
function Yr(e, t) {
  return Vn(e = e.s, E(e), Fi) === t ? t : -1;
}
function Vn(e, t, r) {
  let n = 0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    De(e, t, o) != null && (n !== 0 && (t = F(e, t, n)), n = o);
  }
  return n;
}
function Xn(e, t, r, n) {
  let s = E(e);
  Oe(s);
  const o = De(e, s, r, n);
  let i;
  if (o != null && o.W === Wt) return (t = Pr(o)) !== o && F(e, s, r, t, n), t.s;
  if (Array.isArray(o)) {
    const c = D(o);
    i = 2 & c ? Bo(o, c, !1) : o, i = at(i, t);
  } else i = at(void 0, t);
  return i !== o && F(e, s, r, i, n), i;
}
function zo(e, t, r, n) {
  e = e.s;
  let s = E(e);
  const o = De(e, s, r, n);
  return (t = Un(o, t, !1, s)) !== o && t != null && F(e, s, r, t, n), t;
}
function _(e, t, r, n = !1) {
  if ((t = zo(e, t, r, n)) == null) return t;
  e = e.s;
  let s = E(e);
  if (!(2 & s)) {
    const o = Pr(t);
    o !== t && F(e, s, r, t = o, n);
  }
  return t;
}
function Wo(e, t, r, n, s, o) {
  var i = !!(2 & t), c = i ? 1 : 2;
  const a = c === 1;
  c = c === 2, s = !!s, o && (o = !i), i = jo(e, t, n);
  var h = D(i);
  const l = !!(4 & h);
  if (!l) {
    var p = i, d = t;
    const w = !!(2 & (h = Vo(h, t, s)));
    w && (d = $(d, 2, !0));
    let b = !w, T = !0, ue = 0, xt = 0;
    for (; ue < p.length; ue++) {
      const ze = Un(p[ue], r, !1, d);
      if (ze instanceof r) {
        if (!w) {
          const Jt = !!(2 & D(ze.s));
          b && (b = !Jt), T && (T = Jt);
        }
        p[xt++] = ze;
      }
    }
    xt < ue && (p.length = xt), h = $(h, 4, !0), h = $(h, 16, T), h = $(h, 8, b), O(p, h), w && Object.freeze(p);
  }
  if (r = !!(8 & h) || a && !i.length, o && !r) {
    for (Ct(h) && (i = ee(i), h = ct(h, t, s), t = F(e, t, n, i)), o = i, r = h, p = 0; p < o.length; p++) (h = o[p]) !== (d = Pr(h)) && (o[p] = d);
    r = $(r, 8, !0), r = $(r, 16, !o.length), O(o, r), h = r;
  }
  return Ct(h) || (o = h, a ? h = $(h, !i.length || 16 & h && (!l || 32 & h) ? 2 : 2048, !0) : s || (h = $(h, 32, !1)), h !== o && O(i, h), a && Object.freeze(i)), c && Ct(h) && (i = ee(i), h = ct(h, t, s), O(i, h), F(e, t, n, i)), i;
}
function Ve(e, t, r) {
  e = e.s;
  const n = E(e);
  return Wo(e, n, t, r, !1, !(2 & n));
}
function m(e, t, r, n, s) {
  return n == null && (n = void 0), x(e, r, n, s);
}
function Rt(e, t, r, n) {
  n == null && (n = void 0), e = e.s;
  let s = E(e);
  Oe(s), (r = Vn(e, s, r)) && r !== t && n != null && (s = F(e, s, r)), F(e, s, t, n);
}
function ct(e, t, r) {
  return e = $(e, 2, !!(2 & t)), e = $(e, 32, !!(32 & t) && r), $(e, 2048, !1);
}
function un(e, t, r) {
  e = e.s;
  const n = E(e);
  Oe(n), e = Wo(e, n, t, 1, !0), t = r ?? new t(), e.push(t), 2 & D(t.s) ? pr(e, 8) : pr(e, 16);
}
function me(e, t) {
  return Tt(pt(e, t));
}
function we(e, t) {
  return Nt(pt(e, t));
}
function Ce(e) {
  return e ?? 0;
}
function Y(e, t) {
  return Ce(sr(e, t));
}
function Bt(e, t, r) {
  if (r != null && typeof r != "boolean") throw e = typeof r, Error(`Expected boolean but got ${e != "object" ? e : r ? Array.isArray(r) ? "array" : e : "null"}: ${r}`);
  x(e, t, r);
}
function Re(e, t, r) {
  if (r != null) {
    if (typeof r != "number" || !Number.isFinite(r)) throw hn("int32");
    r |= 0;
  }
  x(e, t, r);
}
function y(e, t, r) {
  if (r != null && typeof r != "number") throw Error(`Value of float/double field must be a number, found ${typeof r}: ${r}`);
  x(e, t, r);
}
function ke(e, t, r) {
  t.g ? t.m(e, t.g, t.h, r, !0) : t.m(e, t.h, r, !0);
}
ye.prototype.toJSON = void 0, ye.prototype.Na = So;
var u = class {
  constructor(e, t) {
    this.s = Uo(e, t);
  }
  toJSON() {
    return Ho(this, Gn(this.s, No, void 0, void 0, !1, !1), !0);
  }
  l() {
    var e = o1;
    return e.g ? e.l(this, e.g, e.h, !0) : e.l(this, e.h, e.defaultValue, !0);
  }
  clone() {
    const e = this.s;
    return jn(this, e, E(e), !1);
  }
  L() {
    return !!(2 & D(this.s));
  }
};
function Ho(e, t, r) {
  const n = e.constructor.A;
  var s = E(r ? e.s : t), o = gr(s), i = !1;
  if (n && Co) {
    if (!r) {
      var c;
      if ((t = ee(t)).length && St(c = t[t.length - 1])) {
        for (i = 0; i < n.length; i++) if (n[i] >= o) {
          Object.assign(t[t.length - 1] = {}, c);
          break;
        }
      }
      i = !0;
    }
    var a;
    o = t, r = !r, e = gr(c = E(e.s)), c = +!!(512 & c) - 1;
    for (let ue = 0; ue < n.length; ue++) {
      var h = n[ue];
      if (h < e) {
        var l = o[h += c];
        l == null ? o[h] = r ? st : bs() : r && l !== st && Es(l);
      } else {
        if (!a) {
          var p = void 0;
          o.length && St(p = o[o.length - 1]) ? a = p : o.push(a = {});
        }
        l = a[h], a[h] == null ? a[h] = r ? st : bs() : r && l !== st && Es(l);
      }
    }
  }
  if (!(a = t.length)) return t;
  let d, w;
  if (St(p = t[a - 1])) {
    e: {
      var b = p;
      for (var T in o = {}, r = !1, b) e = b[T], Array.isArray(e) && (c = e, (!ps && cn(e, n, +T) || !tn && As(e) && e.size === 0) && (e = null), e != c && (r = !0)), e != null ? o[T] = e : r = !0;
      if (r) {
        for (let ue in o) {
          b = o;
          break e;
        }
        b = null;
      }
    }
    b != p && (d = !0), a--;
  }
  for (s = +!!(512 & s) - 1; 0 < a && ((p = t[T = a - 1]) == null || !ps && cn(p, n, T - s) || !tn && As(p) && p.size === 0); a--) w = !0;
  return (d || w) && (t = i ? t : Array.prototype.slice.call(t, 0, a), i && (t.length = a), b && t.push(b)), t;
}
function $o(e) {
  return Array.isArray(e) ? e[0] instanceof vt ? e : [u2, e] : [e, void 0];
}
function bt(e, t) {
  if (Array.isArray(t)) {
    var r = D(t);
    if (4 & r) return t;
    for (var n = 0, s = 0; n < t.length; n++) {
      const o = e(t[n]);
      o != null && (t[s++] = o);
    }
    return s < n && (t.length = s), O(t, -12289 & (5 | r)), 2 & r && Object.freeze(t), t;
  }
}
u.prototype.W = Wt, u.prototype.toString = function() {
  return Ho(this, this.s, !1).toString();
};
const Is = Symbol();
function zn(e) {
  let t = e[Is];
  if (!t) {
    const r = Ko(e), n = Hn(e), s = n.g;
    t = s ? (o, i) => s(o, i, n) : (o, i) => {
      for (; Mo(i) && i.h != 4; ) {
        var c = i.m, a = n[c];
        if (!a) {
          var h = n.ha;
          h && (h = h[c]) && (a = n[c] = t2(h));
        }
        a && a(i, o, c) || (c = (a = i).l, nr(a), a.ga ? a = void 0 : (h = a.g.g - c, a.g.g = c, a = Fo(a.g, h)), c = o, a && (Ye || (Ye = Symbol()), (h = c[Ye]) ? h.push(a) : c[Ye] = [a]));
      }
      r === Yo || r === qo || r.Oa || (o[Ut || (Ut = Symbol())] = r);
    }, e[Is] = t;
  }
  return t;
}
function t2(e) {
  const t = (e = $o(e))[0].g;
  if (e = e[1]) {
    const r = zn(e), n = Hn(e).S;
    return (s, o, i) => t(s, o, i, n, r);
  }
  return t;
}
let Yo, qo;
const or = Symbol();
function r2(e, t, r) {
  const n = r[1];
  let s;
  if (n) {
    const o = n[or];
    s = o ? o.S : vr(n[0]), e[t] = o ?? n;
  }
  s && s === Nn ? (e.na || (e.na = [])).push(t) : r[0] && (e.oa || (e.oa = [])).push(t);
}
function Ls(e, t) {
  return [e.l, !t || 0 < t[0] ? void 0 : t];
}
function Ko(e) {
  var t = e[or];
  if (t) return t;
  if (!(t = Wn(e, e[or] = {}, Ls, Ls, r2)).oa && !t.na) {
    let r = !0;
    for (let n in t) {
      isNaN(n) || (r = !1);
      break;
    }
    r ? (t = vr(e[0]) === Nn, t = e[or] = t ? qo || (qo = { S: vr(!0) }) : Yo || (Yo = {})) : t.Oa = !0;
  }
  return t;
}
function n2(e, t, r) {
  e[t] = r;
}
function Wn(e, t, r, n, s = n2) {
  t.S = vr(e[0]);
  let o = 0;
  var i = e[++o];
  i && i.constructor === Object && (t.ha = i, typeof (i = e[++o]) == "function" && (t.g = i, t.h = e[++o], i = e[++o]));
  const c = {};
  for (; Array.isArray(i) && typeof i[0] == "number" && 0 < i[0]; ) {
    for (var a = 0; a < i.length; a++) c[i[a]] = i;
    i = e[++o];
  }
  for (a = 1; i !== void 0; ) {
    let p;
    typeof i == "number" && (a += i, i = e[++o]);
    var h = void 0;
    if (i instanceof vt ? p = i : (p = d2, o--), p.qa) {
      i = e[++o], h = e;
      var l = o;
      typeof i == "function" && (i = i(), h[l] = i), h = i;
    }
    for (l = a + 1, typeof (i = e[++o]) == "number" && 0 > i && (l -= i, i = e[++o]); a < l; a++) {
      const d = c[a];
      s(t, a, h ? n(p, h, d) : r(p, d));
    }
  }
  return t;
}
const Ss = Symbol();
function Jo(e) {
  let t = e[Ss];
  if (!t) {
    const r = Or(e);
    t = (n, s) => Zo(n, s, r), e[Ss] = t;
  }
  return t;
}
const ir = Symbol();
function s2(e) {
  return e.h;
}
function o2(e, t) {
  let r, n;
  const s = e.h;
  return (o, i, c) => s(o, i, c, n || (n = Or(t).S), r || (r = Jo(t)));
}
function Or(e) {
  let t = e[ir];
  return t || (t = Wn(e, e[ir] = {}, s2, o2), ar in e && ir in e && (e.length = 0), t);
}
const ar = Symbol();
function i2(e, t) {
  const r = e.g;
  return t ? (n, s, o) => r(n, s, o, t) : r;
}
function a2(e, t, r) {
  const n = e.g;
  let s, o;
  return (i, c, a) => n(i, c, a, o || (o = Hn(t).S), s || (s = zn(t)), r);
}
function Hn(e) {
  let t = e[ar];
  return t || (Ko(e), t = Wn(e, e[ar] = {}, i2, a2), ar in e && ir in e && (e.length = 0), t);
}
function Cs(e, t) {
  var r = e[t];
  if (r) return r;
  if ((r = e.ha) && (r = r[t])) {
    var n = (r = $o(r))[0].h;
    if (r = r[1]) {
      const s = Jo(r), o = Or(r).S;
      r = (r = e.h) ? r(o, s) : (i, c, a) => n(i, c, a, o, s);
    } else r = n;
    return e[t] = r;
  }
}
function Zo(e, t, r) {
  for (var n = E(e), s = +!!(512 & n) - 1, o = e.length, i = 512 & n ? 1 : 0, c = o + (256 & n ? -1 : 0); i < c; i++) {
    const a = e[i];
    if (a == null) continue;
    const h = i - s, l = Cs(r, h);
    l && l(t, a, h);
  }
  if (256 & n) {
    n = e[o - 1];
    for (let a in n) s = +a, Number.isNaN(s) || (o = n[a]) != null && (c = Cs(r, s)) && c(t, o, s);
  }
  if (e = Ye ? e[Ye] : void 0) for (ft(t, t.g.end()), r = 0; r < e.length; r++) ft(t, bn(e[r]) || Fr());
}
function ce(e, t) {
  return new vt(e, t, !1, !1);
}
function At(e, t) {
  return new vt(e, t, !0, !1);
}
function Dr(e, t) {
  return new vt(e, t, !1, !0);
}
function he(e, t, r) {
  F(e, E(e), t, r);
}
var c2 = Dr((function(e, t, r, n, s) {
  return e.h === 2 && (e = Xt(e, at([void 0, void 0], n), s), Oe(n = E(t)), (s = De(t, n, r)) instanceof ye ? (2 & s.O) != 0 ? ((s = s.X()).push(e), F(t, n, r, s)) : s.Ta(e) : Array.isArray(s) ? (2 & D(s) && F(t, n, r, s = Xo(s)), s.push(e)) : F(t, n, r, [e]), !0);
}), (function(e, t, r, n, s) {
  if (t instanceof ye) t.forEach(((o, i) => {
    on(e, r, at([i, o], n), s);
  }));
  else if (Array.isArray(t)) for (let o = 0; o < t.length; o++) {
    const i = t[o];
    Array.isArray(i) && on(e, r, at(i, n), s);
  }
}));
function Qo(e, t, r) {
  e: if (t != null) {
    if (Rr(t)) {
      if (typeof t == "string") {
        t = Dn(t);
        break e;
      }
      if (typeof t == "number") {
        t = On(t);
        break e;
      }
    }
    t = void 0;
  }
  t != null && (typeof t == "string" && vs(t), t != null && (_e(e, r, 0), typeof t == "number" ? (e = e.g, ot(t), fr(e, k, j)) : (r = vs(t), fr(e.g, r.h, r.g))));
}
function ei(e, t, r) {
  (t = Tt(t)) != null && t != null && (_e(e, r, 0), Lr(e.g, t));
}
function ti(e, t, r) {
  (t = Oo(t)) != null && (_e(e, r, 0), e.g.g.push(t ? 1 : 0));
}
function ri(e, t, r) {
  (t = Nt(t)) != null && Sr(e, r, fo(t));
}
function Ur(e, t, r, n, s) {
  on(e, r, t instanceof u ? t.s : Array.isArray(t) ? at(t, n) : void 0, s);
}
function ni(e, t, r) {
  (t = t == null || typeof t == "string" || xr(t) || t instanceof $e ? t : void 0) != null && Sr(e, r, kn(t).buffer);
}
function si(e, t, r) {
  return (e.h === 5 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Ir(e, sn, t) : t.push(sn(e.g)), !0);
}
var z, je = ce((function(e, t, r) {
  if (e.h !== 1) return !1;
  var n = e.g;
  e = nn(n);
  const s = nn(n);
  n = 2 * (s >> 31) + 1;
  const o = s >>> 20 & 2047;
  return e = 4294967296 * (1048575 & s) + e, he(t, r, o == 2047 ? e ? NaN : 1 / 0 * n : o == 0 ? n * Math.pow(2, -1074) * e : n * Math.pow(2, o - 1075) * (e + 4503599627370496)), !0;
}), (function(e, t, r) {
  (t = et(t)) != null && (_e(e, r, 1), e = e.g, (r = Ao || (Ao = new DataView(new ArrayBuffer(8)))).setFloat64(0, +t, !0), k = r.getUint32(0, !0), j = r.getUint32(4, !0), Dt(e, k), Dt(e, j));
})), W = ce((function(e, t, r) {
  return e.h === 5 && (he(t, r, sn(e.g)), !0);
}), (function(e, t, r) {
  (t = et(t)) != null && (_e(e, r, 5), e = e.g, Fn(t), Dt(e, k));
})), h2 = At(si, (function(e, t, r) {
  if ((t = bt(et, t)) != null) for (let i = 0; i < t.length; i++) {
    var n = e, s = r, o = t[i];
    o != null && (_e(n, s, 5), n = n.g, Fn(o), Dt(n, k));
  }
})), $n = At(si, (function(e, t, r) {
  if ((t = bt(et, t)) != null && t.length) {
    _e(e, r, 2), zt(e.g, 4 * t.length);
    for (let n = 0; n < t.length; n++) r = e.g, Fn(t[n]), Dt(r, k);
  }
})), Je = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, Ln(e.g, Mn)), !0);
}), Qo), qr = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, (e = Ln(e.g, Mn)) === 0 ? void 0 : e), !0);
}), Qo), l2 = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, Ln(e.g, rn)), !0);
}), (function(e, t, r) {
  e: if (t != null) {
    if (Rr(t)) {
      if (typeof t == "string") {
        var n = Math.trunc(Number(t));
        Number.isSafeInteger(n) && 0 <= n ? t = String(n) : ((n = t.indexOf(".")) !== -1 && (t = t.substring(0, n)), xs(t) || (Mr(t), t = dr(k, j)));
        break e;
      }
      if (typeof t == "number") {
        t = 0 <= (t = Math.trunc(t)) && Number.isSafeInteger(t) ? t : (function(s) {
          if (0 > s) {
            ot(s);
            const o = dr(k, j);
            return s = Number(o), Number.isSafeInteger(s) ? s : o;
          }
          return xs(String(s)) ? s : (ot(s), rn(k, j));
        })(t);
        break e;
      }
    }
    t = void 0;
  }
  t != null && (typeof t == "string" && ys(t), t != null && (_e(e, r, 0), typeof t == "number" ? (e = e.g, ot(t), fr(e, k, j)) : (r = ys(t), fr(e.g, r.h, r.g))));
})), B = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, qe(e.g)), !0);
}), ei), Yn = At((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Ir(e, qe, t) : t.push(qe(e.g)), !0);
}), (function(e, t, r) {
  if ((t = bt(Tt, t)) != null && t.length) {
    r = Rn(e, r);
    for (let n = 0; n < t.length; n++) Lr(e.g, t[n]);
    Pn(e, r);
  }
})), gt = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, (e = qe(e.g)) === 0 ? void 0 : e), !0);
}), ei), V = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, Sn(e.g)), !0);
}), ti), Pt = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, (e = Sn(e.g)) === !1 ? void 0 : e), !0);
}), ti), Z = At((function(e, t, r) {
  return e.h === 2 && (Yt(t, r, e2, e = Cn(e)), !0);
}), (function(e, t, r) {
  if ((t = bt(Nt, t)) != null) for (let i = 0; i < t.length; i++) {
    var n = e, s = r, o = t[i];
    o != null && Sr(n, s, fo(o));
  }
})), Ze = ce((function(e, t, r) {
  return e.h === 2 && (he(t, r, (e = Cn(e)) === "" ? void 0 : e), !0);
}), ri), I = ce((function(e, t, r) {
  return e.h === 2 && (he(t, r, Cn(e)), !0);
}), ri), u2 = Dr((function(e, t, r, n, s) {
  return e.h === 2 && (Xt(e, Xn(t, n, r, !0), s), !0);
}), Ur), d2 = Dr((function(e, t, r, n, s) {
  return e.h === 2 && (Xt(e, Xn(t, n, r), s), !0);
}), Ur);
z = new vt((function(e, t, r, n, s) {
  if (e.h !== 2) return !1;
  n = at(void 0, n);
  let o = E(t);
  Oe(o);
  let i = Et(t, o, r, 3);
  return o = E(t), 4 & D(i) && (i = ee(i), O(i, -2079 & (1 | D(i))), F(t, o, r, i)), i.push(n), Xt(e, n, s), !0;
}), (function(e, t, r, n, s) {
  if (Array.isArray(t)) for (let o = 0; o < t.length; o++) Ur(e, t[o], r, n, s);
}), !0, !0);
var L = Dr((function(e, t, r, n, s, o) {
  if (e.h !== 2) return !1;
  let i = E(t);
  return Oe(i), (o = Vn(t, i, o)) && r !== o && F(t, i, o), Xt(e, t = Xn(t, n, r), s), !0;
}), Ur), oi = ce((function(e, t, r) {
  return e.h === 2 && (he(t, r, Io(e)), !0);
}), ni), f2 = At((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Ir(e, Ke, t) : t.push(Ke(e.g)), !0);
}), (function(e, t, r) {
  if ((t = bt(Wa, t)) != null) for (let i = 0; i < t.length; i++) {
    var n = e, s = r, o = t[i];
    o != null && (_e(n, s, 0), zt(n.g, o));
  }
})), Pe = ce((function(e, t, r) {
  return e.h === 0 && (he(t, r, qe(e.g)), !0);
}), (function(e, t, r) {
  (t = Tt(t)) != null && (t = parseInt(t, 10), _e(e, r, 0), Lr(e.g, t));
})), p2 = At((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Ir(e, Ba, t) : t.push(qe(e.g)), !0);
}), (function(e, t, r) {
  if ((t = bt(Tt, t)) != null && t.length) {
    r = Rn(e, r);
    for (let n = 0; n < t.length; n++) Lr(e.g, t[n]);
    Pn(e, r);
  }
}));
class g2 {
  constructor(t, r) {
    this.h = t, this.g = r, this.l = _, this.m = m, this.defaultValue = void 0;
  }
}
function xe(e, t) {
  return new g2(e, t);
}
function tt(e, t) {
  return (r, n) => {
    e: {
      if (Qt.length) {
        const o = Qt.pop();
        o.o(n), Wr(o.g, r, n), r = o;
      } else r = new class {
        constructor(o, i) {
          if (ms.length) {
            const c = ms.pop();
            Wr(c, o, i), o = c;
          } else o = new class {
            constructor(c, a) {
              this.h = null, this.m = !1, this.g = this.l = this.j = 0, Wr(this, c, a);
            }
            clear() {
              this.h = null, this.m = !1, this.g = this.l = this.j = 0, this.aa = !1;
            }
          }(o, i);
          this.g = o, this.l = this.g.g, this.h = this.m = -1, this.o(i);
        }
        o({ ga: o = !1 } = {}) {
          this.ga = o;
        }
      }(r, n);
      try {
        const o = new e(), i = o.s;
        zn(t)(i, r), Ut && delete i[Ut];
        var s = o;
        break e;
      } finally {
        r.g.clear(), r.m = -1, r.h = -1, 100 > Qt.length && Qt.push(r);
      }
      s = void 0;
    }
    return s;
  };
}
function qn(e) {
  return function() {
    const t = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const i = this.g;
            return this.g = [], i;
          }
        }();
      }
    }();
    Zo(this.s, t, Or(e)), ft(t, t.g.end());
    const r = new Uint8Array(t.h), n = t.l, s = n.length;
    let o = 0;
    for (let i = 0; i < s; i++) {
      const c = n[i];
      r.set(c, o), o += c.length;
    }
    return t.l = [r], r;
  };
}
var ii = [0, Ze, ce((function(e, t, r) {
  return e.h === 2 && (he(t, r, (e = Io(e)) === dt() ? void 0 : e), !0);
}), (function(e, t, r) {
  if (t != null) {
    if (t instanceof u) {
      const n = t.Va;
      return void (n && (t = n(t), t != null && Sr(e, r, kn(t).buffer)));
    }
    if (Array.isArray(t)) return;
  }
  ni(e, t, r);
}))], m2 = [0, I], ai = [0, B, Pe, V, -1, Yn, Pe, -1], y2 = [0, V, -1], ci = class extends u {
  constructor() {
    super();
  }
};
ci.A = [6];
var hi = [0, V, I, V, Pe, -1, p2, I, -1, y2, Pe], li = [0, I, -2], Rs = class extends u {
  constructor() {
    super();
  }
}, ui = [0], di = [0, B, V, -2], ve = class extends u {
  constructor(e) {
    super(e, 2);
  }
}, C = {}, w2 = [-2, C, V];
C[336783863] = [0, I, V, -1, B, [0, [1, 2, 3, 4, 5], L, ui, L, hi, L, li, L, di, L, ai], m2];
var v2 = [0, Ze, Pt], fi = [0, qr, -1, Pt, -3, qr, Yn, Ze, gt, qr, -1, Pt, gt, Pt, -2, Ze], qt = [-1, {}], pi = [0, I, 1, qt], gi = [0, I, Z, qt];
function Te(e, t) {
  t = $t(t), e = e.s;
  let r = E(e);
  Oe(r), F(e, r, 2, t === "" ? void 0 : t);
}
function M(e, t) {
  Yt(e.s, 3, Ht, t);
}
function A(e, t) {
  Yt(e.s, 4, Ht, t);
}
var te = class extends u {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return m(this, 0, 7, e);
  }
};
te.A = [3, 4, 5, 6, 8, 13, 17, 1005];
var _2 = [-500, Ze, -1, Z, -3, w2, z, ii, gt, -1, pi, gi, z, v2, Ze, fi, gt, Z, 987, Z], T2 = [0, Ze, -1, qt], E2 = [-500, I, -1, [-1, {}], 998, I], b2 = [-500, I, Z, -1, [-2, {}, V], 997, Z, -1], A2 = [-500, I, Z, qt, 998, Z];
function Ee(e, t) {
  un(e, te, t);
}
function R(e, t) {
  Yt(e.s, 10, Ht, t);
}
function S(e, t) {
  Yt(e.s, 15, Ht, t);
}
var le = class extends u {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return m(this, 0, 1001, e);
  }
};
le.A = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
var mi = [-500, z, _2, 4, z, E2, z, b2, gt, z, A2, Z, gt, pi, gi, z, T2, Z, -2, fi, Ze, -1, Pt, 979, qt, z, ii], k2 = tt(le, mi);
le.prototype.g = qn(mi);
var x2 = [0, z, [0, B, -2]], F2 = class extends u {
  constructor(e) {
    super(e);
  }
}, M2 = [0, B, W, I, -1], Kn = class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    return Ve(this, F2, 1);
  }
};
Kn.A = [1];
var yi = [0, z, M2], Jn = tt(Kn, yi), I2 = [0, B, W], L2 = [0, B, -1, x2], S2 = class extends u {
  constructor(e) {
    super(e);
  }
}, C2 = [0, B, -3], R2 = [0, W, -3], P2 = class extends u {
  constructor(e) {
    super(e);
  }
}, O2 = [0, W, -1, I, W], cr = class extends u {
  constructor(e) {
    super(e);
  }
  h() {
    return _(this, S2, 2);
  }
  g() {
    return Ve(this, P2, 5);
  }
};
cr.A = [5];
var D2 = [0, Pe, C2, R2, L2, z, O2], wi = class extends u {
  constructor(e) {
    super(e);
  }
};
wi.A = [1, 2, 3, 8, 9];
var vi = tt(wi, [0, Z, Yn, $n, D2, I, -1, Je, z, I2, Z, Je]), _i = class extends u {
  constructor(e) {
    super(e);
  }
}, U2 = [0, W, -4], Ti = class extends u {
  constructor(e) {
    super(e);
  }
};
Ti.A = [1];
var Zn = tt(Ti, [0, z, U2]), Ei = class extends u {
  constructor(e) {
    super(e);
  }
}, N2 = [0, W, -4], bi = class extends u {
  constructor(e) {
    super(e);
  }
};
bi.A = [1];
var Nr = tt(bi, [0, z, N2]), Ai = class extends u {
  constructor(e) {
    super(e);
  }
};
Ai.A = [3];
var B2 = [0, B, -1, $n, Pe], ki = class extends u {
  constructor() {
    super();
  }
};
ki.prototype.g = qn([0, W, -4, Je]);
var G2 = class extends u {
  constructor(e) {
    super(e);
  }
}, j2 = [0, 1, B, I, yi], xi = class extends u {
  constructor(e) {
    super(e);
  }
};
xi.A = [1];
var V2 = tt(xi, [0, z, j2, Je]), dn = class extends u {
  constructor(e) {
    super(e);
  }
};
dn.A = [1];
var X2 = class extends u {
  constructor(e) {
    super(e);
  }
  ua() {
    const e = Go(this);
    return e ?? dt();
  }
}, z2 = class extends u {
  constructor(e) {
    super(e);
  }
}, Fi = [1, 2], W2 = [0, Fi, L, [0, $n], L, [0, oi], B, I], Mi = class extends u {
  constructor(e) {
    super(e);
  }
};
Mi.A = [1];
var H2 = tt(Mi, [0, z, W2, Je]), Br = class extends u {
  constructor(e) {
    super(e);
  }
};
Br.A = [4, 5];
var Ii = [0, I, B, W, Z, -1], Ps = class extends u {
  constructor(e) {
    super(e);
  }
}, $2 = [0, V, -1], Os = class extends u {
  constructor(e) {
    super(e);
  }
}, hr = [1, 2, 3, 4, 5], Tr = class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    return Go(this) != null;
  }
  h() {
    return we(this, 2) != null;
  }
}, Li = [0, oi, I, [0, B, Je, -1], [0, l2, Je]], N = class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    return Oo(pt(this, 2)) ?? !1;
  }
}, H = [0, Li, V, [0, hr, L, di, L, hi, L, ai, L, ui, L, li], Pe], Qn = class extends u {
  constructor(e) {
    super(e);
  }
}, Si = [0, H, W, -1, B], Y2 = xe(502141897, Qn);
C[502141897] = Si;
var Ci = [0, Li];
C[512499200] = Ci;
var Ri = [0, Ci];
C[515723506] = Ri;
var q2 = tt(class extends u {
  constructor(e) {
    super(e);
  }
}, [0, [0, Pe, -1, h2, f2], B2]), Pi = [0, H];
C[508981768] = Pi;
var K2 = class extends u {
  constructor(e) {
    super(e);
  }
}, Oi = [0, H, W, Pi, V], Di = class extends u {
  constructor(e) {
    super(e);
  }
}, Ui = [0, H, Si, Oi, W, Ri];
C[508968149] = Oi;
var J2 = xe(508968150, Di);
C[508968150] = Ui;
var Ni = class extends u {
  constructor(e) {
    super(e);
  }
}, Z2 = xe(513916220, Ni);
C[513916220] = [0, H, Ui, B];
var ht = class extends u {
  constructor(e) {
    super(e);
  }
  h() {
    return _(this, Br, 2);
  }
  g() {
    x(this, 2);
  }
}, Bi = [0, H, Ii];
C[478825465] = Bi;
var Gi = [0, H];
C[478825422] = Gi;
var Q2 = class extends u {
  constructor(e) {
    super(e);
  }
}, ji = [0, H, Gi, Bi, -1], Vi = class extends u {
  constructor(e) {
    super(e);
  }
}, Xi = [0, H, W, B], zi = class extends u {
  constructor(e) {
    super(e);
  }
}, Wi = [0, H, W], es = class extends u {
  constructor(e) {
    super(e);
  }
}, Hi = [0, H, Xi, Wi, W], $i = class extends u {
  constructor(e) {
    super(e);
  }
}, e1 = [0, H, Hi, ji];
C[463370452] = ji, C[464864288] = Xi, C[474472470] = Wi;
var t1 = xe(462713202, es);
C[462713202] = Hi;
var r1 = xe(479097054, $i);
C[479097054] = e1;
var Yi = class extends u {
  constructor(e) {
    super(e);
  }
}, n1 = xe(456383383, Yi);
C[456383383] = [0, H, Ii];
var qi = class extends u {
  constructor(e) {
    super(e);
  }
}, s1 = xe(476348187, qi);
C[476348187] = [0, H, $2];
var Ki = class extends u {
  constructor(e) {
    super(e);
  }
}, Ji = [0, Pe, -1], fn = class extends u {
  constructor(e) {
    super(e);
  }
};
fn.A = [3];
var o1 = xe(458105876, class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    var e = this.s;
    const t = E(e);
    var r = 2 & t;
    return e = (function(n, s, o) {
      var i = fn;
      const c = 2 & s;
      let a = !1;
      if (o == null) {
        if (c) return Ms();
        o = [];
      } else if (o.constructor === ye) {
        if ((2 & o.O) == 0 || c) return o;
        o = o.X();
      } else Array.isArray(o) ? a = !!(2 & D(o)) : o = [];
      if (c) {
        if (!o.length) return Ms();
        a || (a = !0, _t(o));
      } else a && (a = !1, o = Xo(o));
      return a || (64 & D(o) ? pr(o, 32) : 32 & s && Cr(o, 32)), F(n, s, 2, i = new ye(o, i, Ha, void 0), !1), i;
    })(e, t, De(e, t, 2)), e == null || !r && fn && (e.xa = !0), r = e;
  }
});
C[458105876] = [0, Ji, c2, [!0, Je, [0, I, -1, Z]]];
var ts = class extends u {
  constructor(e) {
    super(e);
  }
}, Zi = xe(458105758, ts);
C[458105758] = [0, H, I, Ji];
var rs = class extends u {
  constructor(e) {
    super(e);
  }
};
rs.A = [5, 6];
var i1 = xe(443442058, rs);
C[443442058] = [0, H, I, B, W, Z, -1];
var a1 = class extends u {
  constructor(e) {
    super(e);
  }
}, Qi = [0, H, W, -1, B];
C[514774813] = Qi;
var c1 = class extends u {
  constructor(e) {
    super(e);
  }
}, ea = [0, H, W, V], ta = class extends u {
  constructor(e) {
    super(e);
  }
}, h1 = [0, H, Qi, ea, W];
C[518928384] = ea;
var l1 = xe(516587230, ta);
function pn(e, t) {
  return t = t ? t.clone() : new Br(), e.displayNamesLocale !== void 0 ? x(t, 1, $t(e.displayNamesLocale)) : e.displayNamesLocale === void 0 && x(t, 1), e.maxResults !== void 0 ? Re(t, 2, e.maxResults) : "maxResults" in e && x(t, 2), e.scoreThreshold !== void 0 ? y(t, 3, e.scoreThreshold) : "scoreThreshold" in e && x(t, 3), e.categoryAllowlist !== void 0 ? _r(t, 4, e.categoryAllowlist) : "categoryAllowlist" in e && x(t, 4), e.categoryDenylist !== void 0 ? _r(t, 5, e.categoryDenylist) : "categoryDenylist" in e && x(t, 5), t;
}
function ra(e, t = -1, r = "") {
  return { categories: e.map(((n) => ({ index: Ce(me(n, 1)) ?? -1, score: Y(n, 2) ?? 0, categoryName: we(n, 3) ?? "" ?? "", displayName: we(n, 4) ?? "" ?? "" }))), headIndex: t, headName: r };
}
function na(e) {
  var i, c;
  var t = lt(e, 3, et), r = lt(e, 2, Tt), n = lt(e, 1, Nt), s = lt(e, 9, Nt);
  const o = { categories: [], keypoints: [] };
  for (let a = 0; a < t.length; a++) o.categories.push({ score: t[a], index: r[a] ?? -1, categoryName: n[a] ?? "", displayName: s[a] ?? "" });
  if ((t = (i = _(e, cr, 4)) == null ? void 0 : i.h()) && (o.boundingBox = { originX: me(t, 1) ?? 0, originY: me(t, 2) ?? 0, width: me(t, 3) ?? 0, height: me(t, 4) ?? 0, angle: 0 }), (c = _(e, cr, 4)) == null ? void 0 : c.g().length) for (const a of _(e, cr, 4).g()) o.keypoints.push({ x: sr(a, 1) ?? 0, y: sr(a, 2) ?? 0, score: sr(a, 4) ?? 0, label: we(a, 3) ?? "" });
  return o;
}
function ns(e) {
  const t = [];
  for (const r of Ve(e, Ei, 1)) t.push({ x: Y(r, 1) ?? 0, y: Y(r, 2) ?? 0, z: Y(r, 3) ?? 0 });
  return t;
}
function sa(e) {
  const t = [];
  for (const r of Ve(e, _i, 1)) t.push({ x: Y(r, 1) ?? 0, y: Y(r, 2) ?? 0, z: Y(r, 3) ?? 0 });
  return t;
}
function Ds(e) {
  return Array.from(e, ((t) => 127 < t ? t - 256 : t));
}
function Us(e, t) {
  if (e.length !== t.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);
  let r = 0, n = 0, s = 0;
  for (let o = 0; o < e.length; o++) r += e[o] * t[o], n += e[o] * e[o], s += t[o] * t[o];
  if (0 >= n || 0 >= s) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return r / Math.sqrt(n * s);
}
let tr;
C[516587230] = h1;
const u1 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function oa() {
  if (tr === void 0) try {
    await WebAssembly.instantiate(u1), tr = !0;
  } catch {
    tr = !1;
  }
  return tr;
}
async function Kr(e, t = "") {
  const r = await oa() ? "wasm_internal" : "wasm_nosimd_internal";
  return { wasmLoaderPath: `${t}/${e}_${r}.js`, wasmBinaryPath: `${t}/${e}_${r}.wasm` };
}
var It = class {
};
function ia() {
  const e = navigator.userAgent;
  return e.includes("Safari") && !e.includes("Chrome");
}
async function Ns(e) {
  if (typeof importScripts != "function") {
    const t = document.createElement("script");
    return t.src = e.toString(), t.crossOrigin = "anonymous", new Promise(((r, n) => {
      t.addEventListener("load", (() => {
        r();
      }), !1), t.addEventListener("error", ((s) => {
        n(s);
      }), !1), document.body.appendChild(t);
    }));
  }
  importScripts(e.toString());
}
function f(e, t, r) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), r(t = e.i.stringToNewUTF8(t)), e.i._free(t);
}
function Bs(e, t, r) {
  if (!e.i.canvas) throw Error("No OpenGL canvas configured.");
  if (r ? e.i._bindTextureToStream(r) : e.i._bindTextureToCanvas(), !(r = e.i.canvas.getContext("webgl2") || e.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  return e.i.gpuOriginForWebTexturesIsBottomLeft && r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), e.i.gpuOriginForWebTexturesIsBottomLeft && r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1), t.videoWidth ? (r = t.videoWidth, t = t.videoHeight) : t.naturalWidth ? (r = t.naturalWidth, t = t.naturalHeight) : (r = t.width, t = t.height), !e.l || r === e.i.canvas.width && t === e.i.canvas.height || (e.i.canvas.width = r, e.i.canvas.height = t), [r, t];
}
function Gs(e, t, r) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) n[s] = e.i.stringToNewUTF8(t[s]);
  t = e.i._malloc(4 * n.length), e.i.HEAPU32.set(n, t >> 2), r(t);
  for (const s of n) e.i._free(s);
  e.i._free(t);
}
function Ue(e, t, r) {
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = r;
}
function nt(e, t, r) {
  let n = [];
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = (s, o, i) => {
    o ? (r(n, i), n = []) : n.push(s);
  };
}
It.forVisionTasks = function(e) {
  return Kr("vision", e);
}, It.forTextTasks = function(e) {
  return Kr("text", e);
}, It.forAudioTasks = function(e) {
  return Kr("audio", e);
}, It.isSimdSupported = function() {
  return oa();
};
async function d1(e, t, r, n) {
  return e = await (async (s, o, i, c, a) => {
    if (o && await Ns(o), !self.ModuleFactory || i && (await Ns(i), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
    return self.Module && a && ((o = self.Module).locateFile = a.locateFile, a.mainScriptUrlOrBlob && (o.mainScriptUrlOrBlob = a.mainScriptUrlOrBlob)), a = await self.ModuleFactory(self.Module || a), self.ModuleFactory = self.Module = void 0, new s(a, c);
  })(e, r.wasmLoaderPath, r.assetLoaderPath, t, { locateFile: (s) => s.endsWith(".wasm") ? r.wasmBinaryPath.toString() : r.assetBinaryPath && s.endsWith(".data") ? r.assetBinaryPath.toString() : s }), await e.o(n), e;
}
function js(e, t) {
  const r = _(e.baseOptions, Tr, 1) || new Tr();
  typeof t == "string" ? (x(r, 2, $t(t)), x(r, 1)) : t instanceof Uint8Array && (x(r, 1, Ro(t, !1, !1)), x(r, 2)), m(e.baseOptions, 0, 1, r);
}
function Vs(e) {
  try {
    const t = e.F.length;
    if (t === 1) throw Error(e.F[0].message);
    if (1 < t) throw Error("Encountered multiple errors: " + e.F.map(((r) => r.message)).join(", "));
  } finally {
    e.F = [];
  }
}
function g(e, t) {
  e.I = Math.max(e.I, t);
}
function ss(e, t) {
  e.C = new te(), Te(e.C, "PassThroughCalculator"), M(e.C, "free_memory"), A(e.C, "free_memory_unused_out"), R(t, "free_memory"), Ee(t, e.C);
}
function Gt(e, t) {
  M(e.C, t), A(e.C, t + "_unused_out");
}
function os(e) {
  e.g.addBoolToStream(!0, "free_memory", e.I);
}
var Er = class {
  constructor(e) {
    this.g = e, this.F = [], this.I = 0, this.g.setAutoRenderToScreen(!1);
  }
  l(e, t = !0) {
    var r, n, s, o, i, c;
    if (t) {
      const a = e.baseOptions || {};
      if ((r = e.baseOptions) != null && r.modelAssetBuffer && ((n = e.baseOptions) != null && n.modelAssetPath)) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!((s = _(this.baseOptions, Tr, 1)) != null && s.g() || (o = _(this.baseOptions, Tr, 1)) != null && o.h() || (i = e.baseOptions) != null && i.modelAssetBuffer || (c = e.baseOptions) != null && c.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if ((function(h, l) {
        let p = _(h.baseOptions, Os, 3);
        if (!p) {
          var d = p = new Os(), w = new Rs();
          Rt(d, 4, hr, w);
        }
        "delegate" in l && (l.delegate === "GPU" ? (l = p, d = new ci(), Rt(l, 2, hr, d)) : (l = p, d = new Rs(), Rt(l, 4, hr, d))), m(h.baseOptions, 0, 3, p);
      })(this, a), a.modelAssetPath) return fetch(a.modelAssetPath.toString()).then(((h) => {
        if (h.ok) return h.arrayBuffer();
        throw Error(`Failed to fetch model: ${a.modelAssetPath} (${h.status})`);
      })).then(((h) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(h), !0, !1, !1), js(this, "/model.dat"), this.m(), this.N();
      }));
      js(this, a.modelAssetBuffer);
    }
    return this.m(), this.N(), Promise.resolve();
  }
  N() {
  }
  da() {
    let e;
    if (this.g.da(((t) => {
      e = k2(t);
    })), !e) throw Error("Failed to retrieve CalculatorGraphConfig");
    return e;
  }
  setGraph(e, t) {
    this.g.attachErrorListener(((r, n) => {
      this.F.push(Error(n));
    })), this.g.Ra(), this.g.setGraph(e, t), this.C = void 0, Vs(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), Vs(this);
  }
  close() {
    this.C = void 0, this.g.closeGraph();
  }
};
function Q(e, t) {
  if (e === null) throw Error(`Unable to obtain required WebGL resource: ${t}`);
  return e;
}
Er.prototype.close = Er.prototype.close;
class f1 {
  constructor(t, r, n, s) {
    this.g = t, this.h = r, this.m = n, this.l = s;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
}
function Xs(e, t, r) {
  const n = e.g;
  if (r = Q(n.createShader(r), "Failed to create WebGL shader"), n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(r)}`);
  return n.attachShader(e.h, r), r;
}
function zs(e, t) {
  const r = e.g, n = Q(r.createVertexArray(), "Failed to create vertex array");
  r.bindVertexArray(n);
  const s = Q(r.createBuffer(), "Failed to create buffer");
  r.bindBuffer(r.ARRAY_BUFFER, s), r.enableVertexAttribArray(e.N), r.vertexAttribPointer(e.N, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), r.STATIC_DRAW);
  const o = Q(r.createBuffer(), "Failed to create buffer");
  return r.bindBuffer(r.ARRAY_BUFFER, o), r.enableVertexAttribArray(e.M), r.vertexAttribPointer(e.M, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array(t ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), r.bindVertexArray(null), new f1(r, n, s, o);
}
function is(e, t) {
  if (e.g) {
    if (t !== e.g) throw Error("Cannot change GL context once initialized");
  } else e.g = t;
}
function Kt(e, t, r, n) {
  return is(e, t), e.h || (e.m(), e.F()), r ? (e.u || (e.u = zs(e, !0)), r = e.u) : (e.v || (e.v = zs(e, !1)), r = e.v), t.useProgram(e.h), r.bind(), e.l(), e = n(), r.g.bindVertexArray(null), e;
}
function Qe(e, t, r) {
  return is(e, t), e = Q(t.createTexture(), "Failed to create texture"), t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, r ?? t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, r ?? t.LINEAR), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Gr(e, t, r) {
  is(e, t), e.C || (e.C = Q(t.createFramebuffer(), "Failed to create framebuffe.")), t.bindFramebuffer(t.FRAMEBUFFER, e.C), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0);
}
function as(e) {
  var t;
  (t = e.g) == null || t.bindFramebuffer(e.g.FRAMEBUFFER, null);
}
var kt = class {
  I() {
    return `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `;
  }
  m() {
    const e = this.g;
    if (this.h = Q(e.createProgram(), "Failed to create WebGL program"), this.ta = Xs(this, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, e.VERTEX_SHADER), this.sa = Xs(this, this.I(), e.FRAGMENT_SHADER), e.linkProgram(this.h), !e.getProgramParameter(this.h, e.LINK_STATUS)) throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);
    this.N = e.getAttribLocation(this.h, "aVertex"), this.M = e.getAttribLocation(this.h, "aTex");
  }
  F() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const e = this.g;
      e.deleteProgram(this.h), e.deleteShader(this.ta), e.deleteShader(this.sa);
    }
    this.C && this.g.deleteFramebuffer(this.C), this.v && this.v.close(), this.u && this.u.close();
  }
}, p1 = class extends kt {
  I() {
    return `
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `;
  }
  F() {
    const e = this.g;
    e.activeTexture(e.TEXTURE1), this.B = Qe(this, e, e.LINEAR), e.activeTexture(e.TEXTURE2), this.j = Qe(this, e, e.NEAREST);
  }
  m() {
    super.m();
    const e = this.g;
    this.U = Q(e.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.ra = Q(e.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.T = Q(e.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const e = this.g;
    e.uniform1i(this.T, 0), e.uniform1i(this.U, 1), e.uniform1i(this.ra, 2);
  }
  close() {
    this.B && this.g.deleteTexture(this.B), this.j && this.g.deleteTexture(this.j), super.close();
  }
}, g1 = class extends kt {
  I() {
    return `
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `;
  }
  F() {
    const e = this.g;
    e.activeTexture(e.TEXTURE1), this.j = Qe(this, e), e.activeTexture(e.TEXTURE2), this.B = Qe(this, e);
  }
  m() {
    super.m();
    const e = this.g;
    this.T = Q(e.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.U = Q(e.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.J = Q(e.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const e = this.g;
    e.uniform1i(this.J, 0), e.uniform1i(this.T, 1), e.uniform1i(this.U, 2);
  }
  close() {
    this.j && this.g.deleteTexture(this.j), this.B && this.g.deleteTexture(this.B), super.close();
  }
};
function Ge(e, t) {
  switch (t) {
    case 0:
      return e.g.find(((r) => r instanceof Uint8Array));
    case 1:
      return e.g.find(((r) => r instanceof Float32Array));
    case 2:
      return e.g.find(((r) => typeof WebGLTexture < "u" && r instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${t}`);
  }
}
function gn(e) {
  var t = Ge(e, 1);
  if (!t) {
    if (t = Ge(e, 0)) t = new Float32Array(t).map(((n) => n / 255));
    else {
      t = new Float32Array(e.width * e.height);
      const n = mt(e);
      var r = cs(e);
      if (Gr(r, n, aa(e)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
        r = new Float32Array(e.width * e.height * 4), n.readPixels(0, 0, e.width, e.height, n.RGBA, n.FLOAT, r);
        for (let s = 0, o = 0; s < t.length; ++s, o += 4) t[s] = r[o];
      } else n.readPixels(0, 0, e.width, e.height, n.RED, n.FLOAT, t);
    }
    e.g.push(t);
  }
  return t;
}
function aa(e) {
  let t = Ge(e, 2);
  if (!t) {
    const r = mt(e);
    t = ha(e);
    const n = gn(e), s = ca(e);
    r.texImage2D(r.TEXTURE_2D, 0, s, e.width, e.height, 0, r.RED, r.FLOAT, n), mn(e);
  }
  return t;
}
function mt(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return e.h || (e.h = Q(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function ca(e) {
  if (e = mt(e), !rr) if (e.getExtension("EXT_color_buffer_float") && e.getExtension("OES_texture_float_linear") && e.getExtension("EXT_float_blend")) rr = e.R32F;
  else {
    if (!e.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    rr = e.R16F;
  }
  return rr;
}
function cs(e) {
  return e.l || (e.l = new kt()), e.l;
}
function ha(e) {
  const t = mt(e);
  t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0);
  let r = Ge(e, 2);
  return r || (r = Qe(cs(e), t, e.m ? t.LINEAR : t.NEAREST), e.g.push(r), e.j = !0), t.bindTexture(t.TEXTURE_2D, r), r;
}
function mn(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
var rr, G = class {
  constructor(e, t, r, n, s, o, i) {
    this.g = e, this.m = t, this.j = r, this.canvas = n, this.l = s, this.width = o, this.height = i, this.j && --Ws === 0 && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  La() {
    return !!Ge(this, 0);
  }
  ka() {
    return !!Ge(this, 1);
  }
  P() {
    return !!Ge(this, 2);
  }
  ja() {
    return (t = Ge(e = this, 0)) || (t = gn(e), t = new Uint8Array(t.map(((r) => 255 * r))), e.g.push(t)), t;
    var e, t;
  }
  ia() {
    return gn(this);
  }
  K() {
    return aa(this);
  }
  clone() {
    const e = [];
    for (const t of this.g) {
      let r;
      if (t instanceof Uint8Array) r = new Uint8Array(t);
      else if (t instanceof Float32Array) r = new Float32Array(t);
      else {
        if (!(t instanceof WebGLTexture)) throw Error(`Type is not supported: ${t}`);
        {
          const n = mt(this), s = cs(this);
          n.activeTexture(n.TEXTURE1), r = Qe(s, n, this.m ? n.LINEAR : n.NEAREST), n.bindTexture(n.TEXTURE_2D, r);
          const o = ca(this);
          n.texImage2D(n.TEXTURE_2D, 0, o, this.width, this.height, 0, n.RED, n.FLOAT, null), n.bindTexture(n.TEXTURE_2D, null), Gr(s, n, r), Kt(s, n, !1, (() => {
            ha(this), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLE_FAN, 0, 4), mn(this);
          })), as(s), mn(this);
        }
      }
      e.push(r);
    }
    return new G(e, this.m, this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && mt(this).deleteTexture(Ge(this, 2)), Ws = -1;
  }
};
G.prototype.close = G.prototype.close, G.prototype.clone = G.prototype.clone, G.prototype.getAsWebGLTexture = G.prototype.K, G.prototype.getAsFloat32Array = G.prototype.ia, G.prototype.getAsUint8Array = G.prototype.ja, G.prototype.hasWebGLTexture = G.prototype.P, G.prototype.hasFloat32Array = G.prototype.ka, G.prototype.hasUint8Array = G.prototype.La;
var Ws = 250;
const m1 = { color: "white", lineWidth: 4, radius: 6 };
function Jr(e) {
  return { ...m1, fillColor: (e = e || {}).color, ...e };
}
function Ne(e, t) {
  return e instanceof Function ? e(t) : e;
}
function Hs(e, t, r) {
  return Math.max(Math.min(t, r), Math.min(Math.max(t, r), e));
}
function Ft(e) {
  if (!e.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
  return e.l;
}
function jt(e) {
  if (!e.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
  return e.j;
}
function $s(e, t, r) {
  if (t.P()) r(t.K());
  else {
    const n = t.ka() ? t.ia() : t.ja();
    e.m = e.m ?? new kt();
    const s = jt(e);
    r((e = new G([n], t.m, !1, s.canvas, e.m, t.width, t.height)).K()), e.close();
  }
}
function Ys(e, t, r, n) {
  const s = (function(c) {
    return c.g || (c.g = new p1()), c.g;
  })(e), o = jt(e), i = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r;
  Kt(s, o, !0, (() => {
    (function(a, h, l, p) {
      const d = a.g;
      if (d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, h), d.activeTexture(d.TEXTURE1), d.bindTexture(d.TEXTURE_2D, a.B), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, l), a.J && (function(w, b) {
        if (w !== b) return !1;
        w = w.entries(), b = b.entries();
        for (const [ue, xt] of w) {
          w = ue;
          const ze = xt;
          var T = b.next();
          if (T.done) return !1;
          const [Jt, Ea] = T.value;
          if (T = Ea, w !== Jt || ze[0] !== T[0] || ze[1] !== T[1] || ze[2] !== T[2] || ze[3] !== T[3]) return !1;
        }
        return !!b.next().done;
      })(a.J, p)) d.activeTexture(d.TEXTURE2), d.bindTexture(d.TEXTURE_2D, a.j);
      else {
        a.J = p;
        const w = Array(1024).fill(0);
        p.forEach(((b, T) => {
          if (b.length !== 4) throw Error(`Color at index ${T} is not a four-channel value.`);
          w[4 * T] = b[0], w[4 * T + 1] = b[1], w[4 * T + 2] = b[2], w[4 * T + 3] = b[3];
        })), d.activeTexture(d.TEXTURE2), d.bindTexture(d.TEXTURE_2D, a.j), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 256, 1, 0, d.RGBA, d.UNSIGNED_BYTE, new Uint8Array(w));
      }
    })(s, t, i, n), o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT), o.drawArrays(o.TRIANGLE_FAN, 0, 4);
    const c = s.g;
    c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE2), c.bindTexture(c.TEXTURE_2D, null);
  }));
}
function qs(e, t, r, n) {
  const s = jt(e), o = (function(a) {
    return a.h || (a.h = new g1()), a.h;
  })(e), i = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r, c = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n;
  Kt(o, s, !0, (() => {
    var a = o.g;
    a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, t), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, o.j), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, i), a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, o.B), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c), s.clearColor(0, 0, 0, 0), s.clear(s.COLOR_BUFFER_BIT), s.drawArrays(s.TRIANGLE_FAN, 0, 4), s.bindTexture(s.TEXTURE_2D, null), (a = o.g).activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, null);
  }));
}
var q = class {
  constructor(e, t) {
    e instanceof CanvasRenderingContext2D || e instanceof OffscreenCanvasRenderingContext2D ? (this.l = e, this.j = t) : this.j = e;
  }
  Ea(e, t) {
    if (e) {
      var r = Ft(this);
      t = Jr(t), r.save();
      var n = r.canvas, s = 0;
      for (const o of e) r.fillStyle = Ne(t.fillColor, { index: s, from: o }), r.strokeStyle = Ne(t.color, { index: s, from: o }), r.lineWidth = Ne(t.lineWidth, { index: s, from: o }), (e = new Path2D()).arc(o.x * n.width, o.y * n.height, Ne(t.radius, { index: s, from: o }), 0, 2 * Math.PI), r.fill(e), r.stroke(e), ++s;
      r.restore();
    }
  }
  Da(e, t, r) {
    if (e && t) {
      var n = Ft(this);
      r = Jr(r), n.save();
      var s = n.canvas, o = 0;
      for (const i of t) {
        n.beginPath(), t = e[i.start];
        const c = e[i.end];
        t && c && (n.strokeStyle = Ne(r.color, { index: o, from: t, to: c }), n.lineWidth = Ne(r.lineWidth, { index: o, from: t, to: c }), n.moveTo(t.x * s.width, t.y * s.height), n.lineTo(c.x * s.width, c.y * s.height)), ++o, n.stroke();
      }
      n.restore();
    }
  }
  Aa(e, t) {
    const r = Ft(this);
    t = Jr(t), r.save(), r.beginPath(), r.lineWidth = Ne(t.lineWidth, {}), r.strokeStyle = Ne(t.color, {}), r.fillStyle = Ne(t.fillColor, {}), r.moveTo(e.originX, e.originY), r.lineTo(e.originX + e.width, e.originY), r.lineTo(e.originX + e.width, e.originY + e.height), r.lineTo(e.originX, e.originY + e.height), r.lineTo(e.originX, e.originY), r.stroke(), r.fill(), r.restore();
  }
  Ba(e, t, r = [0, 0, 0, 255]) {
    this.l ? (function(n, s, o, i) {
      const c = jt(n);
      $s(n, s, ((a) => {
        Ys(n, a, o, i), (a = Ft(n)).drawImage(c.canvas, 0, 0, a.canvas.width, a.canvas.height);
      }));
    })(this, e, r, t) : Ys(this, e.K(), r, t);
  }
  Ca(e, t, r) {
    this.l ? (function(n, s, o, i) {
      const c = jt(n);
      $s(n, s, ((a) => {
        qs(n, a, o, i), (a = Ft(n)).drawImage(c.canvas, 0, 0, a.canvas.width, a.canvas.height);
      }));
    })(this, e, t, r) : qs(this, e.K(), t, r);
  }
  close() {
    var e, t, r;
    (e = this.g) == null || e.close(), this.g = void 0, (t = this.h) == null || t.close(), this.h = void 0, (r = this.m) == null || r.close(), this.m = void 0;
  }
};
function Le(e, t) {
  switch (t) {
    case 0:
      return e.g.find(((r) => r instanceof ImageData));
    case 1:
      return e.g.find(((r) => typeof ImageBitmap < "u" && r instanceof ImageBitmap));
    case 2:
      return e.g.find(((r) => typeof WebGLTexture < "u" && r instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${t}`);
  }
}
function la(e) {
  var t = Le(e, 0);
  if (!t) {
    t = yt(e);
    const r = jr(e), n = new Uint8Array(e.width * e.height * 4);
    Gr(r, t, lr(e)), t.readPixels(0, 0, e.width, e.height, t.RGBA, t.UNSIGNED_BYTE, n), as(r), t = new ImageData(new Uint8ClampedArray(n.buffer), e.width, e.height), e.g.push(t);
  }
  return t;
}
function lr(e) {
  let t = Le(e, 2);
  if (!t) {
    const r = yt(e);
    t = ur(e);
    const n = Le(e, 1) || la(e);
    r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, n), Lt(e);
  }
  return t;
}
function yt(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
  return e.h || (e.h = Q(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function jr(e) {
  return e.l || (e.l = new kt()), e.l;
}
function ur(e) {
  const t = yt(e);
  t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0);
  let r = Le(e, 2);
  return r || (r = Qe(jr(e), t), e.g.push(r), e.m = !0), t.bindTexture(t.TEXTURE_2D, r), r;
}
function Lt(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
function Ks(e) {
  const t = yt(e);
  return Kt(jr(e), t, !0, (() => (function(r, n) {
    const s = r.canvas;
    if (s.width === r.width && s.height === r.height) return n();
    const o = s.width, i = s.height;
    return s.width = r.width, s.height = r.height, r = n(), s.width = o, s.height = i, r;
  })(e, (() => {
    if (t.bindFramebuffer(t.FRAMEBUFFER, null), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), !(e.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
    return e.canvas.transferToImageBitmap();
  }))));
}
q.prototype.close = q.prototype.close, q.prototype.drawConfidenceMask = q.prototype.Ca, q.prototype.drawCategoryMask = q.prototype.Ba, q.prototype.drawBoundingBox = q.prototype.Aa, q.prototype.drawConnectors = q.prototype.Da, q.prototype.drawLandmarks = q.prototype.Ea, q.lerp = function(e, t, r, n, s) {
  return Hs(n * (1 - (e - t) / (r - t)) + s * (1 - (r - e) / (r - t)), n, s);
}, q.clamp = Hs;
var X = class {
  constructor(e, t, r, n, s, o, i) {
    this.g = e, this.j = t, this.m = r, this.canvas = n, this.l = s, this.width = o, this.height = i, (this.j || this.m) && --Js === 0 && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.");
  }
  Ka() {
    return !!Le(this, 0);
  }
  la() {
    return !!Le(this, 1);
  }
  P() {
    return !!Le(this, 2);
  }
  Ia() {
    return la(this);
  }
  Ha() {
    var e = Le(this, 1);
    return e || (lr(this), ur(this), e = Ks(this), Lt(this), this.g.push(e), this.j = !0), e;
  }
  K() {
    return lr(this);
  }
  clone() {
    const e = [];
    for (const t of this.g) {
      let r;
      if (t instanceof ImageData) r = new ImageData(t.data, this.width, this.height);
      else if (t instanceof WebGLTexture) {
        const n = yt(this), s = jr(this);
        n.activeTexture(n.TEXTURE1), r = Qe(s, n), n.bindTexture(n.TEXTURE_2D, r), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, this.width, this.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.bindTexture(n.TEXTURE_2D, null), Gr(s, n, r), Kt(s, n, !1, (() => {
          ur(this), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLE_FAN, 0, 4), Lt(this);
        })), as(s), Lt(this);
      } else {
        if (!(t instanceof ImageBitmap)) throw Error(`Type is not supported: ${t}`);
        lr(this), ur(this), r = Ks(this), Lt(this);
      }
      e.push(r);
    }
    return new X(e, this.la(), this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Le(this, 1).close(), this.m && yt(this).deleteTexture(Le(this, 2)), Js = -1;
  }
};
X.prototype.close = X.prototype.close, X.prototype.clone = X.prototype.clone, X.prototype.getAsWebGLTexture = X.prototype.K, X.prototype.getAsImageBitmap = X.prototype.Ha, X.prototype.getAsImageData = X.prototype.Ia, X.prototype.hasWebGLTexture = X.prototype.P, X.prototype.hasImageBitmap = X.prototype.la, X.prototype.hasImageData = X.prototype.Ka;
var Js = 250;
function Fe(...e) {
  return e.map((([t, r]) => ({ start: t, end: r })));
}
const y1 = /* @__PURE__ */ (function(e) {
  return class extends e {
    Ra() {
      this.i._registerModelResourcesGraphService();
    }
  };
})((Zs = class {
  constructor(e, t) {
    this.l = !0, this.i = e, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", t !== void 0 ? this.i.canvas = t : typeof OffscreenCanvas > "u" || ia() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
  }
  async initializeGraph(e) {
    const t = await (await fetch(e)).arrayBuffer();
    e = !(e.endsWith(".pbtxt") || e.endsWith(".textproto")), this.setGraph(new Uint8Array(t), e);
  }
  setGraphFromString(e) {
    this.setGraph(new TextEncoder().encode(e), !1);
  }
  setGraph(e, t) {
    const r = e.length, n = this.i._malloc(r);
    this.i.HEAPU8.set(e, n), t ? this.i._changeBinaryGraph(r, n) : this.i._changeTextGraph(r, n), this.i._free(n);
  }
  configureAudio(e, t, r, n, s) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), f(this, n || "input_audio", ((o) => {
      f(this, s = s || "audio_header", ((i) => {
        this.i._configureAudio(o, i, e, t, r);
      }));
    }));
  }
  setAutoResizeCanvas(e) {
    this.l = e;
  }
  setAutoRenderToScreen(e) {
    this.i._setAutoRenderToScreen(e);
  }
  setGpuBufferVerticalFlip(e) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = e;
  }
  da(e) {
    Ue(this, "__graph_config__", ((t) => {
      e(t);
    })), f(this, "__graph_config__", ((t) => {
      this.i._getGraphConfig(t, void 0);
    })), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(e) {
    this.i.errorListener = e;
  }
  attachEmptyPacketListener(e, t) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[e] = t;
  }
  addAudioToStream(e, t, r) {
    this.addAudioToStreamWithShape(e, 0, 0, t, r);
  }
  addAudioToStreamWithShape(e, t, r, n, s) {
    const o = 4 * e.length;
    this.h !== o && (this.g && this.i._free(this.g), this.g = this.i._malloc(o), this.h = o), this.i.HEAPF32.set(e, this.g / 4), f(this, n, ((i) => {
      this.i._addAudioToInputStream(this.g, t, r, i, s);
    }));
  }
  addGpuBufferToStream(e, t, r) {
    f(this, t, ((n) => {
      const [s, o] = Bs(this, e, n);
      this.i._addBoundTextureToStream(n, s, o, r);
    }));
  }
  addBoolToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addBoolToInputStream(e, n, r);
    }));
  }
  addDoubleToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addDoubleToInputStream(e, n, r);
    }));
  }
  addFloatToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addFloatToInputStream(e, n, r);
    }));
  }
  addIntToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addIntToInputStream(e, n, r);
    }));
  }
  addStringToStream(e, t, r) {
    f(this, t, ((n) => {
      f(this, e, ((s) => {
        this.i._addStringToInputStream(s, n, r);
      }));
    }));
  }
  addStringRecordToStream(e, t, r) {
    f(this, t, ((n) => {
      Gs(this, Object.keys(e), ((s) => {
        Gs(this, Object.values(e), ((o) => {
          this.i._addFlatHashMapToInputStream(s, o, Object.keys(e).length, n, r);
        }));
      }));
    }));
  }
  addProtoToStream(e, t, r, n) {
    f(this, r, ((s) => {
      f(this, t, ((o) => {
        const i = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, i), this.i._addProtoToInputStream(i, e.length, o, s, n), this.i._free(i);
      }));
    }));
  }
  addEmptyPacketToStream(e, t) {
    f(this, e, ((r) => {
      this.i._addEmptyPacketToInputStream(r, t);
    }));
  }
  addBoolVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateBoolVector(e.length);
      if (!s) throw Error("Unable to allocate new bool vector on heap.");
      for (const o of e) this.i._addBoolVectorEntry(s, o);
      this.i._addBoolVectorToInputStream(s, n, r);
    }));
  }
  addDoubleVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateDoubleVector(e.length);
      if (!s) throw Error("Unable to allocate new double vector on heap.");
      for (const o of e) this.i._addDoubleVectorEntry(s, o);
      this.i._addDoubleVectorToInputStream(s, n, r);
    }));
  }
  addFloatVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateFloatVector(e.length);
      if (!s) throw Error("Unable to allocate new float vector on heap.");
      for (const o of e) this.i._addFloatVectorEntry(s, o);
      this.i._addFloatVectorToInputStream(s, n, r);
    }));
  }
  addIntVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateIntVector(e.length);
      if (!s) throw Error("Unable to allocate new int vector on heap.");
      for (const o of e) this.i._addIntVectorEntry(s, o);
      this.i._addIntVectorToInputStream(s, n, r);
    }));
  }
  addStringVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateStringVector(e.length);
      if (!s) throw Error("Unable to allocate new string vector on heap.");
      for (const o of e) f(this, o, ((i) => {
        this.i._addStringVectorEntry(s, i);
      }));
      this.i._addStringVectorToInputStream(s, n, r);
    }));
  }
  addBoolToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addBoolToInputSidePacket(e, r);
    }));
  }
  addDoubleToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addDoubleToInputSidePacket(e, r);
    }));
  }
  addFloatToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addFloatToInputSidePacket(e, r);
    }));
  }
  addIntToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addIntToInputSidePacket(e, r);
    }));
  }
  addStringToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      f(this, e, ((n) => {
        this.i._addStringToInputSidePacket(n, r);
      }));
    }));
  }
  addProtoToInputSidePacket(e, t, r) {
    f(this, r, ((n) => {
      f(this, t, ((s) => {
        const o = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, o), this.i._addProtoToInputSidePacket(o, e.length, s, n), this.i._free(o);
      }));
    }));
  }
  addBoolVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateBoolVector(e.length);
      if (!n) throw Error("Unable to allocate new bool vector on heap.");
      for (const s of e) this.i._addBoolVectorEntry(n, s);
      this.i._addBoolVectorToInputSidePacket(n, r);
    }));
  }
  addDoubleVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateDoubleVector(e.length);
      if (!n) throw Error("Unable to allocate new double vector on heap.");
      for (const s of e) this.i._addDoubleVectorEntry(n, s);
      this.i._addDoubleVectorToInputSidePacket(n, r);
    }));
  }
  addFloatVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateFloatVector(e.length);
      if (!n) throw Error("Unable to allocate new float vector on heap.");
      for (const s of e) this.i._addFloatVectorEntry(n, s);
      this.i._addFloatVectorToInputSidePacket(n, r);
    }));
  }
  addIntVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateIntVector(e.length);
      if (!n) throw Error("Unable to allocate new int vector on heap.");
      for (const s of e) this.i._addIntVectorEntry(n, s);
      this.i._addIntVectorToInputSidePacket(n, r);
    }));
  }
  addStringVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateStringVector(e.length);
      if (!n) throw Error("Unable to allocate new string vector on heap.");
      for (const s of e) f(this, s, ((o) => {
        this.i._addStringVectorEntry(n, o);
      }));
      this.i._addStringVectorToInputSidePacket(n, r);
    }));
  }
  attachBoolListener(e, t) {
    Ue(this, e, t), f(this, e, ((r) => {
      this.i._attachBoolListener(r);
    }));
  }
  attachBoolVectorListener(e, t) {
    nt(this, e, t), f(this, e, ((r) => {
      this.i._attachBoolVectorListener(r);
    }));
  }
  attachIntListener(e, t) {
    Ue(this, e, t), f(this, e, ((r) => {
      this.i._attachIntListener(r);
    }));
  }
  attachIntVectorListener(e, t) {
    nt(this, e, t), f(this, e, ((r) => {
      this.i._attachIntVectorListener(r);
    }));
  }
  attachDoubleListener(e, t) {
    Ue(this, e, t), f(this, e, ((r) => {
      this.i._attachDoubleListener(r);
    }));
  }
  attachDoubleVectorListener(e, t) {
    nt(this, e, t), f(this, e, ((r) => {
      this.i._attachDoubleVectorListener(r);
    }));
  }
  attachFloatListener(e, t) {
    Ue(this, e, t), f(this, e, ((r) => {
      this.i._attachFloatListener(r);
    }));
  }
  attachFloatVectorListener(e, t) {
    nt(this, e, t), f(this, e, ((r) => {
      this.i._attachFloatVectorListener(r);
    }));
  }
  attachStringListener(e, t) {
    Ue(this, e, t), f(this, e, ((r) => {
      this.i._attachStringListener(r);
    }));
  }
  attachStringVectorListener(e, t) {
    nt(this, e, t), f(this, e, ((r) => {
      this.i._attachStringVectorListener(r);
    }));
  }
  attachProtoListener(e, t, r) {
    Ue(this, e, t), f(this, e, ((n) => {
      this.i._attachProtoListener(n, r || !1);
    }));
  }
  attachProtoVectorListener(e, t, r) {
    nt(this, e, t), f(this, e, ((n) => {
      this.i._attachProtoVectorListener(n, r || !1);
    }));
  }
  attachAudioListener(e, t, r) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Ue(this, e, ((n, s) => {
      n = new Float32Array(n.buffer, n.byteOffset, n.length / 4), t(n, s);
    })), f(this, e, ((n) => {
      this.i._attachAudioListener(n, r || !1);
    }));
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Zs {
  get fa() {
    return this.i;
  }
  va(e, t, r) {
    f(this, t, ((n) => {
      const [s, o] = Bs(this, e, n);
      this.fa._addBoundTextureAsImageToStream(n, s, o, r);
    }));
  }
  ba(e, t) {
    Ue(this, e, t), f(this, e, ((r) => {
      this.fa._attachImageListener(r);
    }));
  }
  ca(e, t) {
    nt(this, e, t), f(this, e, ((r) => {
      this.fa._attachImageVectorListener(r);
    }));
  }
}));
var Zs, Me = class extends y1 {
};
async function v(e, t, r) {
  return (async function(n, s, o, i) {
    return d1(n, s, o, i);
  })(e, r.canvas ?? (typeof OffscreenCanvas > "u" || ia() ? document.createElement("canvas") : void 0), t, r);
}
function ua(e, t, r, n) {
  if (e.J) {
    const o = new ki();
    if (r != null && r.regionOfInterest) {
      if (!e.U) throw Error("This task doesn't support region-of-interest.");
      var s = r.regionOfInterest;
      if (s.left >= s.right || s.top >= s.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (0 > s.left || 0 > s.top || 1 < s.right || 1 < s.bottom) throw Error("Expected RectF values to be in [0,1].");
      y(o, 1, (s.left + s.right) / 2), y(o, 2, (s.top + s.bottom) / 2), y(o, 4, s.right - s.left), y(o, 3, s.bottom - s.top);
    } else y(o, 1, 0.5), y(o, 2, 0.5), y(o, 4, 1), y(o, 3, 1);
    if (r != null && r.rotationDegrees) {
      if ((r == null ? void 0 : r.rotationDegrees) % 90 != 0) throw Error("Expected rotation to be a multiple of 90°.");
      if (y(o, 5, -Math.PI * r.rotationDegrees / 180), (r == null ? void 0 : r.rotationDegrees) % 180 != 0) {
        const [i, c] = t.videoWidth !== void 0 ? [t.videoWidth, t.videoHeight] : t.naturalWidth !== void 0 ? [t.naturalWidth, t.naturalHeight] : [t.width, t.height];
        r = Y(o, 3) * c / i, s = Y(o, 4) * i / c, y(o, 4, r), y(o, 3, s);
      }
    }
    e.g.addProtoToStream(o.g(), "mediapipe.NormalizedRect", e.J, n);
  }
  e.g.va(t, e.T, n ?? performance.now()), e.finishProcessing();
}
function Ie(e, t, r) {
  var n;
  if ((n = e.baseOptions) != null && n.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  ua(e, t, r, e.I + 1);
}
function Xe(e, t, r, n) {
  var s;
  if (!((s = e.baseOptions) != null && s.g())) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  ua(e, t, r, n);
}
function Vt(e, t, r, n) {
  var s = t.data;
  const o = t.width, i = o * (t = t.height);
  if ((s instanceof Uint8Array || s instanceof Float32Array) && s.length !== i) throw Error("Unsupported channel count: " + s.length / i);
  return e = new G([s], r, !1, e.g.i.canvas, e.M, o, t), n ? e.clone() : e;
}
var ae = class extends Er {
  constructor(e, t, r, n) {
    super(e), this.g = e, this.T = t, this.J = r, this.U = n, this.M = new kt();
  }
  l(e, t = !0) {
    if ("runningMode" in e && Bt(this.baseOptions, 2, !!e.runningMode && e.runningMode !== "IMAGE"), e.canvas !== void 0 && this.g.i.canvas !== e.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(e, t);
  }
  close() {
    this.M.close(), super.close();
  }
};
ae.prototype.close = ae.prototype.close;
var de = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect_in", !1), this.j = { detections: [] }, m(e = this.h = new Qn(), 0, 1, t = new N()), y(this.h, 2, 0.5), y(this.h, 3, 0.3);
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "minDetectionConfidence" in e && y(this.h, 2, e.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in e && y(this.h, 3, e.minSuppressionThreshold ?? 0.3), this.l(e);
  }
  G(e, t) {
    return this.j = { detections: [] }, Ie(this, e, t), this.j;
  }
  H(e, t, r) {
    return this.j = { detections: [] }, Xe(this, e, r, t), this.j;
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect_in"), S(e, "detections");
    const t = new ve();
    ke(t, Y2, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect_in"), A(r, "DETECTIONS:detections"), r.o(t), Ee(e, r), this.g.attachProtoVectorListener("detections", ((n, s) => {
      for (const o of n) n = vi(o), this.j.detections.push(na(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
de.prototype.detectForVideo = de.prototype.H, de.prototype.detect = de.prototype.G, de.prototype.setOptions = de.prototype.o, de.createFromModelPath = async function(e, t) {
  return v(de, e, { baseOptions: { modelAssetPath: t } });
}, de.createFromModelBuffer = function(e, t) {
  return v(de, e, { baseOptions: { modelAssetBuffer: t } });
}, de.createFromOptions = function(e, t) {
  return v(de, e, t);
};
var da = Fe([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]), fa = Fe([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]), pa = Fe([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]), w1 = Fe([474, 475], [475, 476], [476, 477], [477, 474]), ga = Fe([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]), ma = Fe([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]), v1 = Fe([469, 470], [470, 471], [471, 472], [472, 469]), ya = Fe([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]), _1 = [...da, ...fa, ...pa, ...ga, ...ma, ...ya], T1 = Fe([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function Qs(e) {
  e.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var P = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect", !1), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, m(e = this.h = new Di(), 0, 1, t = new N()), this.v = new K2(), m(this.h, 0, 3, this.v), this.u = new Qn(), m(this.h, 0, 2, this.u), Re(this.u, 4, 1), y(this.u, 2, 0.5), y(this.v, 2, 0.5), y(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "numFaces" in e && Re(this.u, 4, e.numFaces ?? 1), "minFaceDetectionConfidence" in e && y(this.u, 2, e.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.h, 4, e.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in e && y(this.v, 2, e.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in e && (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in e && (this.outputFacialTransformationMatrixes = !!e.outputFacialTransformationMatrixes), this.l(e);
  }
  G(e, t) {
    return Qs(this), Ie(this, e, t), this.j;
  }
  H(e, t, r) {
    return Qs(this), Xe(this, e, r, t), this.j;
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect"), S(e, "face_landmarks");
    const t = new ve();
    ke(t, J2, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "NORM_LANDMARKS:face_landmarks"), r.o(t), Ee(e, r), this.g.attachProtoVectorListener("face_landmarks", ((n, s) => {
      for (const o of n) n = Nr(o), this.j.faceLandmarks.push(ns(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("face_landmarks", ((n) => {
      g(this, n);
    })), this.outputFaceBlendshapes && (S(e, "blendshapes"), A(r, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", ((n, s) => {
      if (this.outputFaceBlendshapes) for (const o of n) n = Jn(o), this.j.faceBlendshapes.push(ra(n.g() ?? []));
      g(this, s);
    })), this.g.attachEmptyPacketListener("blendshapes", ((n) => {
      g(this, n);
    }))), this.outputFacialTransformationMatrixes && (S(e, "face_geometry"), A(r, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", ((n, s) => {
      if (this.outputFacialTransformationMatrixes) for (const o of n) (n = _(q2(o), Ai, 2)) && this.j.facialTransformationMatrixes.push({ rows: Ce(me(n, 1)) ?? 0, columns: Ce(me(n, 2)) ?? 0, data: lt(n, 3, et) ?? [] });
      g(this, s);
    })), this.g.attachEmptyPacketListener("face_geometry", ((n) => {
      g(this, n);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
P.prototype.detectForVideo = P.prototype.H, P.prototype.detect = P.prototype.G, P.prototype.setOptions = P.prototype.o, P.createFromModelPath = function(e, t) {
  return v(P, e, { baseOptions: { modelAssetPath: t } });
}, P.createFromModelBuffer = function(e, t) {
  return v(P, e, { baseOptions: { modelAssetBuffer: t } });
}, P.createFromOptions = function(e, t) {
  return v(P, e, t);
}, P.FACE_LANDMARKS_LIPS = da, P.FACE_LANDMARKS_LEFT_EYE = fa, P.FACE_LANDMARKS_LEFT_EYEBROW = pa, P.FACE_LANDMARKS_LEFT_IRIS = w1, P.FACE_LANDMARKS_RIGHT_EYE = ga, P.FACE_LANDMARKS_RIGHT_EYEBROW = ma, P.FACE_LANDMARKS_RIGHT_IRIS = v1, P.FACE_LANDMARKS_FACE_OVAL = ya, P.FACE_LANDMARKS_CONTOURS = _1, P.FACE_LANDMARKS_TESSELATION = T1;
var be = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect", !0), m(e = this.j = new Ni(), 0, 1, t = new N());
  }
  get baseOptions() {
    return _(this.j, N, 1);
  }
  set baseOptions(e) {
    m(this.j, 0, 1, e);
  }
  o(e) {
    return super.l(e);
  }
  Ua(e, t, r) {
    const n = typeof t != "function" ? t : {};
    if (this.h = typeof t == "function" ? t : r, Ie(this, e, n ?? {}), !this.h) return this.u;
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect"), S(e, "stylized_image");
    const t = new ve();
    ke(t, Z2, this.j);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "STYLIZED_IMAGE:stylized_image"), r.o(t), Ee(e, r), this.g.ba("stylized_image", ((n, s) => {
      var o = !this.h, i = n.data, c = n.width;
      const a = c * (n = n.height);
      if (i instanceof Uint8Array) if (i.length === 3 * a) {
        const h = new Uint8ClampedArray(4 * a);
        for (let l = 0; l < a; ++l) h[4 * l] = i[3 * l], h[4 * l + 1] = i[3 * l + 1], h[4 * l + 2] = i[3 * l + 2], h[4 * l + 3] = 255;
        i = new ImageData(h, c, n);
      } else {
        if (i.length !== 4 * a) throw Error("Unsupported channel count: " + i.length / a);
        i = new ImageData(new Uint8ClampedArray(i.buffer, i.byteOffset, i.length), c, n);
      }
      else if (!(i instanceof WebGLTexture)) throw Error(`Unsupported format: ${i.constructor.name}`);
      c = new X([i], !1, !1, this.g.i.canvas, this.M, c, n), this.u = o = o ? c.clone() : c, this.h && this.h(o), g(this, s);
    })), this.g.attachEmptyPacketListener("stylized_image", ((n) => {
      this.u = null, this.h && this.h(null), g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
be.prototype.stylize = be.prototype.Ua, be.prototype.setOptions = be.prototype.o, be.createFromModelPath = function(e, t) {
  return v(be, e, { baseOptions: { modelAssetPath: t } });
}, be.createFromModelBuffer = function(e, t) {
  return v(be, e, { baseOptions: { modelAssetBuffer: t } });
}, be.createFromOptions = function(e, t) {
  return v(be, e, t);
};
var wa = Fe([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function eo(e) {
  e.gestures = [], e.landmarks = [], e.worldLandmarks = [], e.handedness = [];
}
function to(e) {
  return e.gestures.length === 0 ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: e.gestures, landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handedness: e.handedness, handednesses: e.handedness };
}
function ro(e, t = !0) {
  const r = [];
  for (const s of e) {
    var n = Jn(s);
    e = [];
    for (const o of n.g()) n = t && me(o, 1) != null ? Ce(me(o, 1)) : -1, e.push({ score: Y(o, 2) ?? 0, index: n, categoryName: we(o, 3) ?? "" ?? "", displayName: we(o, 4) ?? "" ?? "" });
    r.push(e);
  }
  return r;
}
var re = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], m(e = this.v = new $i(), 0, 1, t = new N()), this.B = new es(), m(this.v, 0, 2, this.B), this.u = new zi(), m(this.B, 0, 3, this.u), this.h = new Vi(), m(this.B, 0, 2, this.h), this.j = new Q2(), m(this.v, 0, 3, this.j), y(this.h, 2, 0.5), y(this.B, 4, 0.5), y(this.u, 2, 0.5);
  }
  get baseOptions() {
    return _(this.v, N, 1);
  }
  set baseOptions(e) {
    m(this.v, 0, 1, e);
  }
  o(e) {
    var s, o, i, c;
    if (Re(this.h, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && y(this.h, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.B, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && y(this.u, 2, e.minHandPresenceConfidence ?? 0.5), e.cannedGesturesClassifierOptions) {
      var t = new ht(), r = t, n = pn(e.cannedGesturesClassifierOptions, (s = _(this.j, ht, 3)) == null ? void 0 : s.h());
      m(r, 0, 2, n), m(this.j, 0, 3, t);
    } else e.cannedGesturesClassifierOptions === void 0 && ((o = _(this.j, ht, 3)) == null || o.g());
    return e.customGesturesClassifierOptions ? (m(r = t = new ht(), 0, 2, n = pn(e.customGesturesClassifierOptions, (i = _(this.j, ht, 4)) == null ? void 0 : i.h())), m(this.j, 0, 4, t)) : e.customGesturesClassifierOptions === void 0 && ((c = _(this.j, ht, 4)) == null || c.g()), this.l(e);
  }
  Pa(e, t) {
    return eo(this), Ie(this, e, t), to(this);
  }
  Qa(e, t, r) {
    return eo(this), Xe(this, e, r, t), to(this);
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect"), S(e, "hand_gestures"), S(e, "hand_landmarks"), S(e, "world_hand_landmarks"), S(e, "handedness");
    const t = new ve();
    ke(t, r1, this.v);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "HAND_GESTURES:hand_gestures"), A(r, "LANDMARKS:hand_landmarks"), A(r, "WORLD_LANDMARKS:world_hand_landmarks"), A(r, "HANDEDNESS:handedness"), r.o(t), Ee(e, r), this.g.attachProtoVectorListener("hand_landmarks", ((n, s) => {
      for (const o of n) {
        n = Nr(o);
        const i = [];
        for (const c of Ve(n, Ei, 1)) i.push({ x: Y(c, 1) ?? 0, y: Y(c, 2) ?? 0, z: Y(c, 3) ?? 0 });
        this.landmarks.push(i);
      }
      g(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((n, s) => {
      for (const o of n) {
        n = Zn(o);
        const i = [];
        for (const c of Ve(n, _i, 1)) i.push({ x: Y(c, 1) ?? 0, y: Y(c, 2) ?? 0, z: Y(c, 3) ?? 0 });
        this.worldLandmarks.push(i);
      }
      g(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("hand_gestures", ((n, s) => {
      this.gestures.push(...ro(n, !1)), g(this, s);
    })), this.g.attachEmptyPacketListener("hand_gestures", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("handedness", ((n, s) => {
      this.handedness.push(...ro(n)), g(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
function no(e) {
  return { landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handednesses: e.handedness, handedness: e.handedness };
}
re.prototype.recognizeForVideo = re.prototype.Qa, re.prototype.recognize = re.prototype.Pa, re.prototype.setOptions = re.prototype.o, re.createFromModelPath = function(e, t) {
  return v(re, e, { baseOptions: { modelAssetPath: t } });
}, re.createFromModelBuffer = function(e, t) {
  return v(re, e, { baseOptions: { modelAssetBuffer: t } });
}, re.createFromOptions = function(e, t) {
  return v(re, e, t);
}, re.HAND_CONNECTIONS = wa;
var ne = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], m(e = this.j = new es(), 0, 1, t = new N()), this.u = new zi(), m(this.j, 0, 3, this.u), this.h = new Vi(), m(this.j, 0, 2, this.h), Re(this.h, 3, 1), y(this.h, 2, 0.5), y(this.u, 2, 0.5), y(this.j, 4, 0.5);
  }
  get baseOptions() {
    return _(this.j, N, 1);
  }
  set baseOptions(e) {
    m(this.j, 0, 1, e);
  }
  o(e) {
    return "numHands" in e && Re(this.h, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && y(this.h, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.j, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && y(this.u, 2, e.minHandPresenceConfidence ?? 0.5), this.l(e);
  }
  G(e, t) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ie(this, e, t), no(this);
  }
  H(e, t, r) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Xe(this, e, r, t), no(this);
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect"), S(e, "hand_landmarks"), S(e, "world_hand_landmarks"), S(e, "handedness");
    const t = new ve();
    ke(t, t1, this.j);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "LANDMARKS:hand_landmarks"), A(r, "WORLD_LANDMARKS:world_hand_landmarks"), A(r, "HANDEDNESS:handedness"), r.o(t), Ee(e, r), this.g.attachProtoVectorListener("hand_landmarks", ((n, s) => {
      for (const o of n) n = Nr(o), this.landmarks.push(ns(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((n, s) => {
      for (const o of n) n = Zn(o), this.worldLandmarks.push(sa(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("handedness", ((n, s) => {
      var o = this.handedness, i = o.push;
      const c = [];
      for (const a of n) {
        n = Jn(a);
        const h = [];
        for (const l of n.g()) h.push({ score: Y(l, 2) ?? 0, index: Ce(me(l, 1)) ?? -1, categoryName: we(l, 3) ?? "" ?? "", displayName: we(l, 4) ?? "" ?? "" });
        c.push(h);
      }
      i.call(o, ...c), g(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ne.prototype.detectForVideo = ne.prototype.H, ne.prototype.detect = ne.prototype.G, ne.prototype.setOptions = ne.prototype.o, ne.createFromModelPath = function(e, t) {
  return v(ne, e, { baseOptions: { modelAssetPath: t } });
}, ne.createFromModelBuffer = function(e, t) {
  return v(ne, e, { baseOptions: { modelAssetBuffer: t } });
}, ne.createFromOptions = function(e, t) {
  return v(ne, e, t);
}, ne.HAND_CONNECTIONS = wa;
var fe = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "input_image", "norm_rect", !0), this.j = { classifications: [] }, m(e = this.h = new Yi(), 0, 1, t = new N());
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return m(this.h, 0, 2, pn(e, _(this.h, Br, 2))), this.l(e);
  }
  ya(e, t) {
    return this.j = { classifications: [] }, Ie(this, e, t), this.j;
  }
  za(e, t, r) {
    return this.j = { classifications: [] }, Xe(this, e, r, t), this.j;
  }
  m() {
    var e = new le();
    R(e, "input_image"), R(e, "norm_rect"), S(e, "classifications");
    const t = new ve();
    ke(t, n1, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), M(r, "IMAGE:input_image"), M(r, "NORM_RECT:norm_rect"), A(r, "CLASSIFICATIONS:classifications"), r.o(t), Ee(e, r), this.g.attachProtoListener("classifications", ((n, s) => {
      this.j = (function(o) {
        const i = { classifications: Ve(o, G2, 1).map(((c) => {
          var a;
          return ra(((a = _(c, Kn, 4)) == null ? void 0 : a.g()) ?? [], Ce(me(c, 2)), we(c, 3) ?? "");
        })) };
        return yr(pt(o, 2)) != null && (i.timestampMs = Ce(yr(pt(o, 2)))), i;
      })(V2(n)), g(this, s);
    })), this.g.attachEmptyPacketListener("classifications", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
fe.prototype.classifyForVideo = fe.prototype.za, fe.prototype.classify = fe.prototype.ya, fe.prototype.setOptions = fe.prototype.o, fe.createFromModelPath = function(e, t) {
  return v(fe, e, { baseOptions: { modelAssetPath: t } });
}, fe.createFromModelBuffer = function(e, t) {
  return v(fe, e, { baseOptions: { modelAssetBuffer: t } });
}, fe.createFromOptions = function(e, t) {
  return v(fe, e, t);
};
var se = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect", !0), this.h = new qi(), this.embeddings = { embeddings: [] }, m(e = this.h, 0, 1, t = new N());
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    var t = this.h, r = _(this.h, Ps, 2);
    return r = r ? r.clone() : new Ps(), e.l2Normalize !== void 0 ? Bt(r, 1, e.l2Normalize) : "l2Normalize" in e && x(r, 1), e.quantize !== void 0 ? Bt(r, 2, e.quantize) : "quantize" in e && x(r, 2), m(t, 0, 2, r), this.l(e);
  }
  Fa(e, t) {
    return Ie(this, e, t), this.embeddings;
  }
  Ga(e, t, r) {
    return Xe(this, e, r, t), this.embeddings;
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect"), S(e, "embeddings_out");
    const t = new ve();
    ke(t, s1, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "EMBEDDINGS:embeddings_out"), r.o(t), Ee(e, r), this.g.attachProtoListener("embeddings_out", ((n, s) => {
      n = H2(n), this.embeddings = (function(o) {
        return { embeddings: Ve(o, z2, 1).map(((i) => {
          var a, h;
          const c = { headIndex: Ce(me(i, 3)) ?? -1, headName: we(i, 4) ?? "" ?? "" };
          if (zo(i, dn, Yr(i, 1)) !== void 0) i = lt(i = _(i, dn, Yr(i, 1)), 1, et), c.floatEmbedding = i;
          else {
            const l = new Uint8Array(0);
            c.quantizedEmbedding = ((h = (a = _(i, X2, Yr(i, 2))) == null ? void 0 : a.ua()) == null ? void 0 : h.wa()) ?? l;
          }
          return c;
        })), timestampMs: Ce(yr(pt(o, 2))) };
      })(n), g(this, s);
    })), this.g.attachEmptyPacketListener("embeddings_out", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
se.cosineSimilarity = function(e, t) {
  if (e.floatEmbedding && t.floatEmbedding) e = Us(e.floatEmbedding, t.floatEmbedding);
  else {
    if (!e.quantizedEmbedding || !t.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    e = Us(Ds(e.quantizedEmbedding), Ds(t.quantizedEmbedding));
  }
  return e;
}, se.prototype.embedForVideo = se.prototype.Ga, se.prototype.embed = se.prototype.Fa, se.prototype.setOptions = se.prototype.o, se.createFromModelPath = function(e, t) {
  return v(se, e, { baseOptions: { modelAssetPath: t } });
}, se.createFromModelBuffer = function(e, t) {
  return v(se, e, { baseOptions: { modelAssetBuffer: t } });
}, se.createFromOptions = function(e, t) {
  return v(se, e, t);
};
var br = class {
  constructor(e, t, r) {
    this.confidenceMasks = e, this.categoryMask = t, this.qualityScores = r;
  }
  close() {
    var e, t;
    (e = this.confidenceMasks) == null || e.forEach(((r) => {
      r.close();
    })), (t = this.categoryMask) == null || t.close();
  }
};
function so(e) {
  e.categoryMask = void 0, e.confidenceMasks = void 0, e.qualityScores = void 0;
}
function oo(e) {
  try {
    const t = new br(e.confidenceMasks, e.categoryMask, e.qualityScores);
    if (!e.j) return t;
    e.j(t);
  } finally {
    os(e);
  }
}
br.prototype.close = br.prototype.close;
var K = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new ts(), this.v = new Ki(), m(this.h, 0, 3, this.v), m(e = this.h, 0, 1, t = new N());
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? x(this.h, 2, $t(e.displayNamesLocale)) : "displayNamesLocale" in e && x(this.h, 2), "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  N() {
    (function(e) {
      var r, n;
      const t = Ve(e.da(), te, 1).filter(((s) => (we(s, 1) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));
      if (e.u = [], 1 < t.length) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      t.length === 1 && (((n = (r = _(t[0], ve, 7)) == null ? void 0 : r.l()) == null ? void 0 : n.g()) ?? /* @__PURE__ */ new Map()).forEach(((s, o) => {
        e.u[Number(o)] = we(s, 1) ?? "";
      }));
    })(this);
  }
  ea(e, t, r) {
    const n = typeof t != "function" ? t : {};
    return this.j = typeof t == "function" ? t : r, so(this), Ie(this, e, n), oo(this);
  }
  Sa(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    return this.j = typeof r == "function" ? r : n, so(this), Xe(this, e, s, t), oo(this);
  }
  Ja() {
    return this.u;
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect");
    const t = new ve();
    ke(t, Zi, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), r.o(t), Ee(e, r), ss(this, e), this.outputConfidenceMasks && (S(e, "confidence_masks"), A(r, "CONFIDENCE_MASKS:confidence_masks"), Gt(this, "confidence_masks"), this.g.ca("confidence_masks", ((n, s) => {
      this.confidenceMasks = n.map(((o) => Vt(this, o, !0, !this.j))), g(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((n) => {
      this.confidenceMasks = [], g(this, n);
    }))), this.outputCategoryMask && (S(e, "category_mask"), A(r, "CATEGORY_MASK:category_mask"), Gt(this, "category_mask"), this.g.ba("category_mask", ((n, s) => {
      this.categoryMask = Vt(this, n, !1, !this.j), g(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((n) => {
      this.categoryMask = void 0, g(this, n);
    }))), S(e, "quality_scores"), A(r, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((n, s) => {
      this.qualityScores = n, g(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((n) => {
      this.categoryMask = void 0, g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
K.prototype.getLabels = K.prototype.Ja, K.prototype.segmentForVideo = K.prototype.Sa, K.prototype.segment = K.prototype.ea, K.prototype.setOptions = K.prototype.o, K.createFromModelPath = function(e, t) {
  return v(K, e, { baseOptions: { modelAssetPath: t } });
}, K.createFromModelBuffer = function(e, t) {
  return v(K, e, { baseOptions: { modelAssetBuffer: t } });
}, K.createFromOptions = function(e, t) {
  return v(K, e, t);
};
var Ar = class {
  constructor(e, t, r) {
    this.confidenceMasks = e, this.categoryMask = t, this.qualityScores = r;
  }
  close() {
    var e, t;
    (e = this.confidenceMasks) == null || e.forEach(((r) => {
      r.close();
    })), (t = this.categoryMask) == null || t.close();
  }
};
Ar.prototype.close = Ar.prototype.close;
var E1 = class extends u {
  constructor(e) {
    super(e);
  }
}, wt = [0, B, -2], b1 = [0, je, -3, V], Vr = [0, je, -3, V, je, -1], va = [0, Vr], A1 = [0, va, wt], k1 = [0, Vr, wt], _a = [0, Vr, B, -1], x1 = [0, _a, wt], F1 = [0, je, -3, V, wt, -1], M1 = [0, je, -3, V, Pe], Zr = class extends u {
  constructor(e) {
    super(e);
  }
}, io = [0, je, -1, V], Ta = class extends u {
  constructor() {
    super();
  }
};
Ta.A = [1];
var ao = class extends u {
  constructor(e) {
    super(e);
  }
}, yn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15], I1 = [0, yn, L, Vr, L, k1, L, va, L, A1, L, io, L, M1, L, b1, L, [0, I, je, -2, V, B, V, -1, 2, je, wt], L, _a, L, x1, je, wt, I, L, F1, L, [0, z, io]], L1 = [0, I, B, -1, V], wn = class extends u {
  constructor() {
    super();
  }
};
wn.A = [1], wn.prototype.g = qn([0, z, I1, I, L1]);
var Ae = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new ts(), this.v = new Ki(), m(this.h, 0, 3, this.v), m(e = this.h, 0, 1, t = new N());
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  ea(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    this.j = typeof r == "function" ? r : n, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, r = this.I + 1, n = new wn();
    const o = new ao();
    var i = new E1();
    if (Re(i, 1, 255), m(o, 0, 12, i), t.keypoint && t.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (t.keypoint) {
      var c = new Zr();
      Bt(c, 3, !0), y(c, 1, t.keypoint.x), y(c, 2, t.keypoint.y), Rt(o, 5, yn, c);
    } else {
      if (!t.scribble) throw Error("Must provide either a keypoint or a scribble.");
      for (c of (i = new Ta(), t.scribble)) Bt(t = new Zr(), 3, !0), y(t, 1, c.x), y(t, 2, c.y), un(i, Zr, t);
      Rt(o, 15, yn, i);
    }
    un(n, ao, o), this.g.addProtoToStream(n.g(), "drishti.RenderData", "roi_in", r), Ie(this, e, s);
    e: {
      try {
        const h = new Ar(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var a = h;
          break e;
        }
        this.j(h);
      } finally {
        os(this);
      }
      a = void 0;
    }
    return a;
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "roi_in"), R(e, "norm_rect_in");
    const t = new ve();
    ke(t, Zi, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), M(r, "IMAGE:image_in"), M(r, "ROI:roi_in"), M(r, "NORM_RECT:norm_rect_in"), r.o(t), Ee(e, r), ss(this, e), this.outputConfidenceMasks && (S(e, "confidence_masks"), A(r, "CONFIDENCE_MASKS:confidence_masks"), Gt(this, "confidence_masks"), this.g.ca("confidence_masks", ((n, s) => {
      this.confidenceMasks = n.map(((o) => Vt(this, o, !0, !this.j))), g(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((n) => {
      this.confidenceMasks = [], g(this, n);
    }))), this.outputCategoryMask && (S(e, "category_mask"), A(r, "CATEGORY_MASK:category_mask"), Gt(this, "category_mask"), this.g.ba("category_mask", ((n, s) => {
      this.categoryMask = Vt(this, n, !1, !this.j), g(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((n) => {
      this.categoryMask = void 0, g(this, n);
    }))), S(e, "quality_scores"), A(r, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((n, s) => {
      this.qualityScores = n, g(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((n) => {
      this.categoryMask = void 0, g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Ae.prototype.segment = Ae.prototype.ea, Ae.prototype.setOptions = Ae.prototype.o, Ae.createFromModelPath = function(e, t) {
  return v(Ae, e, { baseOptions: { modelAssetPath: t } });
}, Ae.createFromModelBuffer = function(e, t) {
  return v(Ae, e, { baseOptions: { modelAssetBuffer: t } });
}, Ae.createFromOptions = function(e, t) {
  return v(Ae, e, t);
};
var pe = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "input_frame_gpu", "norm_rect", !1), this.j = { detections: [] }, m(e = this.h = new rs(), 0, 1, t = new N());
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? x(this.h, 2, $t(e.displayNamesLocale)) : "displayNamesLocale" in e && x(this.h, 2), e.maxResults !== void 0 ? Re(this.h, 3, e.maxResults) : "maxResults" in e && x(this.h, 3), e.scoreThreshold !== void 0 ? y(this.h, 4, e.scoreThreshold) : "scoreThreshold" in e && x(this.h, 4), e.categoryAllowlist !== void 0 ? _r(this.h, 5, e.categoryAllowlist) : "categoryAllowlist" in e && x(this.h, 5), e.categoryDenylist !== void 0 ? _r(this.h, 6, e.categoryDenylist) : "categoryDenylist" in e && x(this.h, 6), this.l(e);
  }
  G(e, t) {
    return this.j = { detections: [] }, Ie(this, e, t), this.j;
  }
  H(e, t, r) {
    return this.j = { detections: [] }, Xe(this, e, r, t), this.j;
  }
  m() {
    var e = new le();
    R(e, "input_frame_gpu"), R(e, "norm_rect"), S(e, "detections");
    const t = new ve();
    ke(t, i1, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.ObjectDetectorGraph"), M(r, "IMAGE:input_frame_gpu"), M(r, "NORM_RECT:norm_rect"), A(r, "DETECTIONS:detections"), r.o(t), Ee(e, r), this.g.attachProtoVectorListener("detections", ((n, s) => {
      for (const o of n) n = vi(o), this.j.detections.push(na(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
pe.prototype.detectForVideo = pe.prototype.H, pe.prototype.detect = pe.prototype.G, pe.prototype.setOptions = pe.prototype.o, pe.createFromModelPath = async function(e, t) {
  return v(pe, e, { baseOptions: { modelAssetPath: t } });
}, pe.createFromModelBuffer = function(e, t) {
  return v(pe, e, { baseOptions: { modelAssetBuffer: t } });
}, pe.createFromOptions = function(e, t) {
  return v(pe, e, t);
};
function co(e) {
  e.landmarks = [], e.worldLandmarks = [], e.v = void 0;
}
function ho(e) {
  try {
    const t = new class {
      constructor(r, n, s) {
        this.landmarks = r, this.worldLandmarks = n, this.g = s;
      }
      close() {
        var r;
        (r = this.g) == null || r.forEach(((n) => {
          n.close();
        }));
      }
    }(e.landmarks, e.worldLandmarks, e.v);
    if (!e.u) return t;
    e.u(t);
  } finally {
    os(e);
  }
}
var oe = class extends ae {
  constructor(e, t) {
    super(new Me(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, m(e = this.h = new ta(), 0, 1, t = new N()), this.B = new c1(), m(this.h, 0, 3, this.B), this.j = new a1(), m(this.h, 0, 2, this.j), Re(this.j, 4, 1), y(this.j, 2, 0.5), y(this.B, 2, 0.5), y(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _(this.h, N, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "numPoses" in e && Re(this.j, 4, e.numPoses ?? 1), "minPoseDetectionConfidence" in e && y(this.j, 2, e.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.h, 4, e.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in e && y(this.B, 2, e.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in e && (this.outputSegmentationMasks = e.outputSegmentationMasks ?? !1), this.l(e);
  }
  G(e, t, r) {
    const n = typeof t != "function" ? t : {};
    return this.u = typeof t == "function" ? t : r, co(this), Ie(this, e, n), ho(this);
  }
  H(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    return this.u = typeof r == "function" ? r : n, co(this), Xe(this, e, s, t), ho(this);
  }
  m() {
    var e = new le();
    R(e, "image_in"), R(e, "norm_rect"), S(e, "normalized_landmarks"), S(e, "world_landmarks"), S(e, "segmentation_masks");
    const t = new ve();
    ke(t, l1, this.h);
    const r = new te();
    Te(r, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "NORM_LANDMARKS:normalized_landmarks"), A(r, "WORLD_LANDMARKS:world_landmarks"), r.o(t), Ee(e, r), ss(this, e), this.g.attachProtoVectorListener("normalized_landmarks", ((n, s) => {
      this.landmarks = [];
      for (const o of n) n = Nr(o), this.landmarks.push(ns(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("normalized_landmarks", ((n) => {
      this.landmarks = [], g(this, n);
    })), this.g.attachProtoVectorListener("world_landmarks", ((n, s) => {
      this.worldLandmarks = [];
      for (const o of n) n = Zn(o), this.worldLandmarks.push(sa(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("world_landmarks", ((n) => {
      this.worldLandmarks = [], g(this, n);
    })), this.outputSegmentationMasks && (A(r, "SEGMENTATION_MASK:segmentation_masks"), Gt(this, "segmentation_masks"), this.g.ca("segmentation_masks", ((n, s) => {
      this.v = n.map(((o) => Vt(this, o, !0, !this.u))), g(this, s);
    })), this.g.attachEmptyPacketListener("segmentation_masks", ((n) => {
      this.v = [], g(this, n);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
oe.prototype.detectForVideo = oe.prototype.H, oe.prototype.detect = oe.prototype.G, oe.prototype.setOptions = oe.prototype.o, oe.createFromModelPath = function(e, t) {
  return v(oe, e, { baseOptions: { modelAssetPath: t } });
}, oe.createFromModelBuffer = function(e, t) {
  return v(oe, e, { baseOptions: { modelAssetBuffer: t } });
}, oe.createFromOptions = function(e, t) {
  return v(oe, e, t);
}, oe.POSE_CONNECTIONS = Fe([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
var S1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DrawingUtils: q,
  FaceDetector: de,
  FaceLandmarker: P,
  FaceStylizer: be,
  FilesetResolver: It,
  GestureRecognizer: re,
  HandLandmarker: ne,
  ImageClassifier: fe,
  ImageEmbedder: se,
  ImageSegmenter: K,
  ImageSegmenterResult: br,
  InteractiveSegmenter: Ae,
  InteractiveSegmenterResult: Ar,
  MPImage: X,
  MPMask: G,
  ObjectDetector: pe,
  PoseLandmarker: oe,
  TaskRunner: Er,
  VisionTaskRunner: ae
});
const vn = (() => {
  const e = {
    loadModelsFromRoot: !1
  };
  return typeof window < "u" ? (window.__vital_sign_camera_global_options__ === void 0 && (window.__vital_sign_camera_global_options__ = e), window.__vital_sign_camera_global_options__) : typeof self < "u" ? (self.__vital_sign_camera_global_options__ === void 0 && (self.__vital_sign_camera_global_options__ = e), self.__vital_sign_camera_global_options__) : e;
})(), { FaceLandmarker: C1, FilesetResolver: R1 } = S1, kr = class kr {
  constructor() {
    U(this, "faceLandmarker");
    U(this, "runningMode", "IMAGE");
    U(this, "modelLocation", Be.CDN);
  }
  get location() {
    return typeof window < "u" && window ? window.location : typeof self < "u" && self ? self.location : { protocol: "http:", host: "localhost" };
  }
  getModelAssetPath(t) {
    switch (t) {
      case Be.CDN:
        return "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
      case Be.SelfHosted:
        const { protocol: r, host: n } = this.location, s = "models/mpvision/face_landmarker/face_landmarker/float16/1/face_landmarker.task", o = vn.loadModelsFromRoot ? `${r}//${n}/` : document.baseURI;
        return new URL(s, o).href;
    }
  }
  getWasmPath(t) {
    switch (t) {
      case Be.CDN:
        return "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm";
      case Be.SelfHosted:
        const { protocol: r, host: n } = this.location, s = "models/mpvision/tasks-vision@0.10.9/wasm", o = vn.loadModelsFromRoot ? `${r}//${n}/` : document.baseURI;
        return new URL(s, o).href;
    }
  }
  async createFaceLandmarker(t, r) {
    const n = this.getWasmPath(t || Be.SelfHosted), s = this.getModelAssetPath(t || Be.SelfHosted);
    console.log("[MPVisionFaceMeshDetector] WASM path:", n), console.log("[MPVisionFaceMeshDetector] Model asset path:", s), r && r(new ie(
      10,
      0,
      0,
      { type: J.Downloading, fromCache: !1 }
    ));
    let o = null;
    if (r) {
      const c = (t || this.modelLocation) === Be.SelfHosted;
      o = new Qr({
        onProgress: r,
        cacheDetectionTimeout: 1e3,
        isLocalModel: c,
        modelFileIndicators: kr.MODEL_FILE_INDICATORS,
        module: "mp-vision-face-mesh"
      }), o.start();
    }
    const i = await R1.forVisionTasks(n);
    try {
      const c = await C1.createFromOptions(i, {
        baseOptions: {
          modelAssetPath: s,
          delegate: "GPU"
        },
        outputFaceBlendshapes: !1,
        runningMode: this.runningMode,
        numFaces: 1
      });
      return o && !o.wasIntercepted() && r && (console.log("[MPVisionFaceMeshDetector] Model loaded successfully without network requests - using cached models"), r(new ie(
        90,
        1,
        1,
        { type: J.Ready, fromCache: !0 }
      ))), r && r(new ie(
        100,
        100,
        100,
        { type: J.Ready, fromCache: !0 }
      )), c;
    } finally {
      o && o.stop();
    }
  }
  async loadModels(t, r) {
    if (console.log("[MPVisionFaceMeshDetector] loadModels called with progress callback:", !!r), this.faceLandmarker && r) {
      console.log("[MPVisionFaceMeshDetector] FaceLandmarker already exists, providing cached progress"), r(new ie(
        90,
        1,
        1,
        { type: J.Ready, fromCache: !0 }
      )), r(new ie(
        100,
        100,
        100,
        { type: J.Ready, fromCache: !0 }
      ));
      return;
    }
    this.modelLocation = t || this.modelLocation, this.faceLandmarker = await this.createFaceLandmarker(this.modelLocation, r), this.faceLandmarker.detect(await Ma());
  }
  async detect(t) {
    const r = Fa(t);
    if (this.faceLandmarker === void 0)
      return { faceBox: void 0, landmarks: [], videoFrame: r };
    const n = this.faceLandmarker.detect(r);
    if (n.faceLandmarks.length === 0)
      return { faceBox: void 0, landmarks: [], videoFrame: r };
    const s = n.faceLandmarks[0];
    return { faceBox: hs(s), landmarks: s, videoFrame: r };
  }
  async detectInWorker(t) {
    if (this.faceLandmarker === void 0)
      return { faceBox: void 0, landmarks: [], videoFrame: t };
    const r = this.faceLandmarker.detect(t);
    if (r.faceLandmarks.length === 0)
      return { faceBox: void 0, landmarks: [], videoFrame: t };
    const n = r.faceLandmarks[0];
    return { faceBox: hs(n), landmarks: n, videoFrame: t };
  }
};
// Model file indicators for MediaPipe Vision
U(kr, "MODEL_FILE_INDICATORS", [
  ".tflite",
  "face_landmarker",
  ".task",
  ".wasm",
  "mediapipe-models",
  "tasks-vision",
  "cdn.jsdelivr.net",
  "storage.googleapis.com"
]);
let _n = kr;
const lo = new _n();
self.document = {
  createElement: (e) => {
    if (e === "canvas")
      return new OffscreenCanvas(1, 1);
    throw new Error("Not implemented");
  }
};
self.onmessage = async (e) => {
  const { inputData: t, hash: r } = e.data, { type: n } = t;
  if (n === "loadModels") {
    const { modelLocation: s, location: o, baseURI: i, globalOptions: c } = t;
    Object.assign(vn, c), self.document.baseURI = i, self.location = JSON.parse(o);
    try {
      const a = (l) => {
        self.postMessage({ progress: l, hash: r });
      };
      await lo.loadModels(s, a);
      const h = { type: "modelsLoaded" };
      self.postMessage({ result: h, hash: r });
    } catch (a) {
      self.postMessage({ error: `${a}`, hash: r });
    }
  }
  if (n === "detect") {
    const { buffer: s, width: o, height: i } = t, c = new ImageData(new Uint8ClampedArray(s), o, i), a = await lo.detectInWorker(c);
    self.postMessage({ result: a, hash: r });
  }
};
