var Ea = Object.defineProperty;
var ba = (e, t, r) => t in e ? Ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var H = (e, t, r) => ba(e, typeof t != "symbol" ? t + "" : t, r);
var Xe = /* @__PURE__ */ ((e) => (e.SelfHosted = "self-hosted", e.CDN = "cdn", e))(Xe || {}), fe = /* @__PURE__ */ ((e) => (e.Downloading = "downloading", e.Caching = "caching", e.Ready = "ready", e))(fe || {});
function Aa(e) {
  let t = document.createElement("canvas");
  return t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0), t;
}
function ka(e) {
  if (e instanceof HTMLCanvasElement)
    return e;
  let t = document.createElement("canvas");
  return t.width = e.width, t.height = e.width, t.getContext("2d").drawImage(e, 0, 0), t;
}
function xa(e) {
  let t;
  return e.image instanceof HTMLVideoElement ? t = Aa(e.image) : e.image instanceof HTMLImageElement ? t = ka(e.image) : t = e.image, t;
}
async function Fa() {
  const e = new ImageData(1, 1);
  return e.data[0] = 255, e.data[1] = 255, e.data[2] = 255, e.data[3] = 255, e;
}
function cs(e) {
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
const ze = class ze {
  constructor(t = {}) {
    H(this, "originalFetch", null);
    H(this, "isIntercepting", !1);
    H(this, "fetchIntercepted", !1);
    H(this, "progressTimeout");
    H(this, "options");
    // 24 hours
    // Progress tracking for multiple concurrent downloads
    H(this, "activeDownloads", /* @__PURE__ */ new Map());
    H(this, "totalFiles", 0);
    H(this, "completedFiles", 0);
    // Model file indicators
    H(this, "modelFileIndicators");
    // Module name
    H(this, "module");
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
    let t = 0, r = 0;
    for (const i of this.activeDownloads.values())
      t += i.loaded, r += i.total;
    if (r === 0 && this.totalFiles > 0) {
      const i = this.completedFiles / this.totalFiles * 70 + 30;
      this.options.onProgress({
        percentage: Math.min(Math.round(i), 100),
        loaded: this.completedFiles,
        total: this.totalFiles,
        stage: { type: fe.Downloading, fromCache: !1 },
        module: this.module
      });
      return;
    }
    const n = 30, s = r > 0 ? t / r * 70 : 0, o = Math.min(n + s, 100);
    this.options.onProgress({
      percentage: Math.round(o),
      loaded: t,
      total: r,
      stage: { type: fe.Downloading, fromCache: !1 },
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
      const l = r.body.getReader(), f = [];
      for (; ; ) {
        const { done: b, value: T } = await l.read();
        if (b) break;
        f.push(T), a += T.length, h += T.length;
        const te = Math.max(i, h), tt = Math.min(a, te * 0.99);
        s == null || s(tt, te);
      }
      const d = new Headers(r.headers);
      d.set("x-cached-time", Date.now().toString()), d.set("x-actual-size", h.toString());
      const v = new Response(new Blob(f), {
        status: r.status,
        statusText: r.statusText,
        headers: d
      });
      await c.put(t, v), s == null || s(h, h), console.log("[ModelFetchInterceptor] ✅ Model cached with progress:", t, "actual size:", h);
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
   * Automatically detect if a model URL is local/self-hosted or from a CDN
   * Local models: relative paths, absolute paths without protocol
   * CDN models: full URLs starting with http:// or https://
   */
  isLocalModelUrl(t) {
    const r = !t.startsWith("http");
    return console.log("[ModelFetchInterceptor] URL detection:", t, "→", r ? "LOCAL" : "CDN"), r;
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
          return i.read().then(({ done: f, value: d }) => {
            if (f) {
              console.log("[ModelFetchInterceptor] Local model download complete");
              const v = c.activeDownloads.get(r);
              v && (v.loaded = s || o, c.activeDownloads.set(r, v)), c.completedFiles++, c.updateOverallProgress(), c.completedFiles === c.totalFiles && c.options.onProgress({
                percentage: 100,
                loaded: c.completedFiles,
                total: c.totalFiles,
                stage: { type: fe.Ready, fromCache: !1 }
              }), h.close();
              return;
            }
            if (d) {
              o += d.length;
              const v = c.activeDownloads.get(r);
              v && (v.loaded = o, c.activeDownloads.set(r, v)), c.updateOverallProgress();
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
  async handleCDNDownload(t, r, n) {
    const s = typeof r == "string" ? r : r.toString();
    if (!this.options.onProgress)
      return t.call(globalThis, r, n);
    this.totalFiles++, this.activeDownloads.set(s, { loaded: 0, total: 1 }), console.log("[ModelFetchInterceptor] CDN model file detected, basic progress tracking"), this.updateOverallProgress();
    const o = Date.now();
    try {
      const i = await t.call(globalThis, r, n), c = Date.now();
      console.log("[ModelFetchInterceptor] CDN model download completed in", c - o, "ms");
      const a = this.activeDownloads.get(s);
      return a && (a.loaded = 1, this.activeDownloads.set(s, a)), this.completedFiles++, this.updateOverallProgress(), i;
    } catch (i) {
      throw console.error("[ModelFetchInterceptor] CDN download error:", i), this.completedFiles++, this.updateOverallProgress(), i;
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
    console.log("[ModelFetchInterceptor] Starting fetch interception..."), this.fetchIntercepted = !1, this.isIntercepting = !0, this.activeDownloads.clear(), this.totalFiles = 0, this.completedFiles = 0, this.originalFetch = this.getFetchGlobal(), this.options.onProgress && ze.isModelCached().then((r) => {
      r ? (console.log("[ModelFetchInterceptor] Models likely cached from previous session"), this.options.onProgress({
        percentage: 30,
        loaded: 0,
        total: 1,
        stage: { type: fe.Downloading, fromCache: !0 }
      })) : console.log("[ModelFetchInterceptor] No cache found");
    }), this.options.onProgress && (this.progressTimeout = setTimeout(() => {
      console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:", this.fetchIntercepted), !this.fetchIntercepted && this.options.onProgress && (console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"), this.options.onProgress({
        percentage: 100,
        loaded: 1,
        total: 1,
        stage: { type: fe.Ready, fromCache: !0 },
        module: this.module
      }));
    }, this.options.cacheDetectionTimeout));
    const t = this.originalFetch;
    this.setFetchGlobal(async (r, n) => {
      const s = typeof r == "string" ? r : r.toString();
      if (!this.isIntercepting)
        return t.call(globalThis, r, n);
      if (console.log("[ModelFetchInterceptor] 🌐 Fetch intercepted:", s), this.isModelFile(s)) {
        const h = this.isLocalModelUrl(s);
        console.log("[ModelFetchInterceptor] 📦 Model file detected:", h ? "local" : "CDN"), this.fetchIntercepted = !0, this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0);
        const l = await ze.getCachedModel(s);
        if (l)
          return console.log("[ModelFetchInterceptor] Serving model from cache:", s), this.totalFiles++, this.completedFiles++, this.options.onProgress && (this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress({
            percentage: 100,
            loaded: this.completedFiles,
            total: this.totalFiles,
            stage: { type: fe.Ready, fromCache: !0 },
            module: this.module
          })), l;
      }
      if (!this.isModelFile(s))
        return t.call(globalThis, r, n);
      if (this.isLocalModelUrl(s)) {
        const h = await t.call(globalThis, r, n), l = h.clone();
        return ze.cacheModel(s, l), this.createLocalProgressWrapper(h, s);
      }
      const o = await this.handleCDNDownload(t, r, n), i = o.clone(), c = o.headers.get("content-length"), a = c ? parseInt(c) : 0;
      return ze.cacheModelWithProgress(
        s,
        i,
        a,
        (h, l) => {
          if (this.options.onProgress) {
            const f = l > 0 ? h / l * 100 : 0, v = h === l ? 100 : Math.min(Math.round(f), 98);
            this.options.onProgress({
              percentage: v,
              loaded: h,
              total: l,
              stage: { type: fe.Caching, fromCache: !1 },
              module: this.module
            });
          }
        }
      ).catch((h) => {
        console.error("[ModelFetchInterceptor] Background caching failed:", h);
      }), o;
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
H(ze, "CACHE_NAME", "vital-sign-models"), H(ze, "CACHE_EXPIRY_MS", 1440 * 60 * 1e3);
let Zr = ze;
var _n = typeof self < "u" ? self : {};
function lo(e, t) {
  e: {
    for (var r = ["CLOSURE_FLAGS"], n = _n, s = 0; s < r.length; s++) if ((n = n[r[s]]) == null) {
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
function hs(e, t) {
  return t = String.fromCharCode.apply(null, t), e == null ? t : e + t;
}
let Jt, Vr;
const Ma = typeof TextDecoder < "u";
let Ia;
const Sa = typeof TextEncoder < "u";
function uo(e) {
  if (Sa) e = (Ia || (Ia = new TextEncoder())).encode(e);
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
var Ot, fo = lo(610401301, !1), Tn = lo(572417392, !0);
const ls = _n.navigator;
function Qr(e) {
  return !!fo && !!Ot && Ot.brands.some((({ brand: t }) => t && t.indexOf(e) != -1));
}
function pe(e) {
  var t;
  return (t = _n.navigator) && (t = t.userAgent) || (t = ""), t.indexOf(e) != -1;
}
function We() {
  return !!fo && !!Ot && 0 < Ot.brands.length;
}
function Xr() {
  return We() ? Qr("Chromium") : (pe("Chrome") || pe("CriOS")) && !(!We() && pe("Edge")) || pe("Silk");
}
Ot = ls && ls.userAgentData || null;
var Ca = !We() && (pe("Trident") || pe("MSIE"));
!pe("Android") || Xr(), Xr(), pe("Safari") && (Xr() || !We() && pe("Coast") || !We() && pe("Opera") || !We() && pe("Edge") || (We() ? Qr("Microsoft Edge") : pe("Edg/")) || We() && Qr("Opera"));
var po = {}, Ft = null;
function La(e) {
  var t = e.length, r = 3 * t / 4;
  r % 3 ? r = Math.floor(r) : "=.".indexOf(e[t - 1]) != -1 && (r = "=.".indexOf(e[t - 2]) != -1 ? r - 2 : r - 1);
  var n = new Uint8Array(r), s = 0;
  return (function(o, i) {
    function c(v) {
      for (; a < o.length; ) {
        var b = o.charAt(a++), T = Ft[b];
        if (T != null) return T;
        if (!/^[\s\xa0]*$/.test(b)) throw Error("Unknown base64 encoding at char: " + b);
      }
      return v;
    }
    go();
    for (var a = 0; ; ) {
      var h = c(-1), l = c(0), f = c(64), d = c(64);
      if (d === 64 && h === -1) break;
      i(h << 2 | l >> 4), f != 64 && (i(l << 4 & 240 | f >> 2), d != 64 && i(f << 6 & 192 | d));
    }
  })(e, (function(o) {
    n[s++] = o;
  })), s !== r ? n.subarray(0, s) : n;
}
function go() {
  if (!Ft) {
    Ft = {};
    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++) {
      var n = e.concat(t[r].split(""));
      po[r] = n;
      for (var s = 0; s < n.length; s++) {
        var o = n[s];
        Ft[o] === void 0 && (Ft[o] = s);
      }
    }
  }
}
var mo = typeof Uint8Array < "u", yo = !Ca && typeof btoa == "function";
function us(e) {
  if (!yo) {
    var t;
    t === void 0 && (t = 0), go(), t = po[t];
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
const ds = /[-_.]/g, Ra = { "-": "+", _: "/", ".": "=" };
function Oa(e) {
  return Ra[e] || "";
}
function vo(e) {
  if (!yo) return La(e);
  ds.test(e) && (e = e.replace(ds, Oa)), e = atob(e);
  const t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
  return t;
}
function kr(e) {
  return mo && e != null && e instanceof Uint8Array;
}
let Da;
function xr() {
  return Da || (Da = new Uint8Array(0));
}
var ut = {};
let Pa;
function wo(e) {
  if (e !== ut) throw Error("illegal external caller");
}
function dt() {
  return Pa || (Pa = new He(null, ut));
}
function En(e) {
  wo(ut);
  var t = e.Z;
  return (t = t == null || kr(t) ? t : typeof t == "string" ? vo(t) : null) == null ? t : e.Z = t;
}
var He = class {
  constructor(e, t) {
    if (wo(t), this.Z = e, e != null && e.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
  wa() {
    const e = En(this);
    return e ? new Uint8Array(e) : xr();
  }
};
function _o(e, t) {
  return Error(`Invalid wire type: ${e} (at position ${t})`);
}
function bn() {
  return Error("Failed to read varint, encoding is invalid.");
}
function To(e, t) {
  return Error(`Tried to read past the end of the data ${t} > ${e}`);
}
function Eo(e) {
  return e.length == 0 ? dt() : new He(e, ut);
}
function An(e) {
  if (typeof e == "string") return { buffer: vo(e), L: !1 };
  if (Array.isArray(e)) return { buffer: new Uint8Array(e), L: !1 };
  if (e.constructor === Uint8Array) return { buffer: e, L: !1 };
  if (e.constructor === ArrayBuffer) return { buffer: new Uint8Array(e), L: !1 };
  if (e.constructor === He) return { buffer: En(e) || xr(), L: !0 };
  if (e instanceof Uint8Array) return { buffer: new Uint8Array(e.buffer, e.byteOffset, e.byteLength), L: !1 };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function kn() {
  return typeof BigInt == "function";
}
var en = !Tn;
let fs = !Tn;
const Ua = typeof Uint8Array.prototype.slice == "function";
let bo, k = 0, G = 0;
function ot(e) {
  const t = 0 > e;
  let r = (e = Math.abs(e)) >>> 0;
  if (e = Math.floor((e - r) / 4294967296), t) {
    const [n, s] = Mn(r, e);
    e = s, r = n;
  }
  k = r >>> 0, G = e >>> 0;
}
function xn(e) {
  const t = bo || (bo = new DataView(new ArrayBuffer(8)));
  t.setFloat32(0, +e, !0), G = 0, k = t.getUint32(0, !0);
}
function tn(e, t) {
  return 4294967296 * t + (e >>> 0);
}
function Fn(e, t) {
  const r = 2147483648 & t;
  return r && (t = ~t >>> 0, (e = 1 + ~e >>> 0) == 0 && (t = t + 1 >>> 0)), e = tn(e, t), r ? -e : e;
}
function ur(e, t) {
  if (e >>>= 0, 2097151 >= (t >>>= 0)) var r = "" + (4294967296 * t + e);
  else kn() ? r = "" + (BigInt(t) << BigInt(32) | BigInt(e)) : (e = (16777215 & e) + 6777216 * (r = 16777215 & (e >>> 24 | t << 8)) + 6710656 * (t = t >> 16 & 65535), r += 8147497 * t, t *= 2, 1e7 <= e && (r += Math.floor(e / 1e7), e %= 1e7), 1e7 <= r && (t += Math.floor(r / 1e7), r %= 1e7), r = t + ps(r) + ps(e));
  return r;
}
function ps(e) {
  return e = String(e), "0000000".slice(e.length) + e;
}
function Ao() {
  var e = k, t = G;
  if (2147483648 & t) if (kn()) e = "" + (BigInt(0 | t) << BigInt(32) | BigInt(e >>> 0));
  else {
    const [r, n] = Mn(e, t);
    e = "-" + ur(r, n);
  }
  else e = ur(e, t);
  return e;
}
function Fr(e) {
  if (16 > e.length) ot(Number(e));
  else if (kn()) e = BigInt(e), k = Number(e & BigInt(4294967295)) >>> 0, G = Number(e >> BigInt(32) & BigInt(4294967295));
  else {
    const t = +(e[0] === "-");
    G = k = 0;
    const r = e.length;
    for (let n = t, s = (r - t) % 6 + t; s <= r; n = s, s += 6) {
      const o = Number(e.slice(n, s));
      G *= 1e6, k = 1e6 * k + o, 4294967296 <= k && (G += Math.trunc(k / 4294967296), G >>>= 0, k >>>= 0);
    }
    if (t) {
      const [n, s] = Mn(k, G);
      k = n, G = s;
    }
  }
}
function Mn(e, t) {
  return t = ~t, e ? e = 1 + ~e : t += 1, [e, t];
}
function In(e, t) {
  let r, n = 0, s = 0, o = 0;
  const i = e.h;
  let c = e.g;
  do
    r = i[c++], n |= (127 & r) << o, o += 7;
  while (32 > o && 128 & r);
  for (32 < o && (s |= (127 & r) >> 4), o = 3; 32 > o && 128 & r; o += 7) r = i[c++], s |= (127 & r) << o;
  if (it(e, c), 128 > r) return t(n >>> 0, s >>> 0);
  throw bn();
}
function Sn(e) {
  let t = 0, r = e.g;
  const n = r + 10, s = e.h;
  for (; r < n; ) {
    const o = s[r++];
    if (t |= o, (128 & o) == 0) return it(e, r), !!(127 & t);
  }
  throw bn();
}
function $e(e) {
  const t = e.h;
  let r = e.g, n = t[r++], s = 127 & n;
  if (128 & n && (n = t[r++], s |= (127 & n) << 7, 128 & n && (n = t[r++], s |= (127 & n) << 14, 128 & n && (n = t[r++], s |= (127 & n) << 21, 128 & n && (n = t[r++], s |= n << 28, 128 & n && 128 & t[r++] && 128 & t[r++] && 128 & t[r++] && 128 & t[r++] && 128 & t[r++]))))) throw bn();
  return it(e, r), s;
}
function qe(e) {
  return $e(e) >>> 0;
}
function rn(e) {
  var t = e.h;
  const r = e.g, n = t[r], s = t[r + 1], o = t[r + 2];
  return t = t[r + 3], it(e, e.g + 4), (n << 0 | s << 8 | o << 16 | t << 24) >>> 0;
}
function nn(e) {
  var t = rn(e);
  e = 2 * (t >> 31) + 1;
  const r = t >>> 23 & 255;
  return t &= 8388607, r == 255 ? t ? NaN : 1 / 0 * e : r == 0 ? e * Math.pow(2, -149) * t : e * Math.pow(2, r - 150) * (t + Math.pow(2, 23));
}
function Na(e) {
  return $e(e);
}
function zr(e, t, { aa: r = !1 } = {}) {
  e.aa = r, t && (t = An(t), e.h = t.buffer, e.m = t.L, e.j = 0, e.l = e.h.length, e.g = e.j);
}
function it(e, t) {
  if (e.g = t, t > e.l) throw To(e.l, t);
}
function ko(e, t) {
  if (0 > t) throw Error(`Tried to read a negative byte length: ${t}`);
  const r = e.g, n = r + t;
  if (n > e.l) throw To(t, e.l - r);
  return e.g = n, r;
}
function xo(e, t) {
  if (t == 0) return dt();
  var r = ko(e, t);
  return e.aa && e.m ? r = e.h.subarray(r, r + t) : (e = e.h, r = r === (t = r + t) ? xr() : Ua ? e.slice(r, t) : new Uint8Array(e.subarray(r, t))), Eo(r);
}
var gs = [];
function Fo(e) {
  var t = e.g;
  if (t.g == t.l) return !1;
  e.l = e.g.g;
  var r = qe(e.g);
  if (t = r >>> 3, !(0 <= (r &= 7) && 5 >= r)) throw _o(r, e.l);
  if (1 > t) throw Error(`Invalid field number: ${t} (at position ${e.l})`);
  return e.m = t, e.h = r, !0;
}
function rr(e) {
  switch (e.h) {
    case 0:
      e.h != 0 ? rr(e) : Sn(e.g);
      break;
    case 1:
      it(e = e.g, e.g + 8);
      break;
    case 2:
      if (e.h != 2) rr(e);
      else {
        var t = qe(e.g);
        it(e = e.g, e.g + t);
      }
      break;
    case 5:
      it(e = e.g, e.g + 4);
      break;
    case 3:
      for (t = e.m; ; ) {
        if (!Fo(e)) throw Error("Unmatched start-group tag: stream EOF");
        if (e.h == 4) {
          if (e.m != t) throw Error("Unmatched end-group tag");
          break;
        }
        rr(e);
      }
      break;
    default:
      throw _o(e.h, e.l);
  }
}
function Vt(e, t, r) {
  const n = e.g.l, s = qe(e.g), o = e.g.g + s;
  let i = o - n;
  if (0 >= i && (e.g.l = o, r(t, e, void 0, void 0, void 0), i = o - e.g.g), i) throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s - i} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return e.g.g = o, e.g.l = n, t;
}
function Cn(e) {
  var t = qe(e.g), r = ko(e = e.g, t);
  if (e = e.h, Ma) {
    var n, s = e;
    (n = Vr) || (n = Vr = new TextDecoder("utf-8", { fatal: !0 })), t = r + t, s = r === 0 && t === s.length ? s : s.subarray(r, t);
    try {
      var o = n.decode(s);
    } catch (c) {
      if (Jt === void 0) {
        try {
          n.decode(new Uint8Array([128]));
        } catch {
        }
        try {
          n.decode(new Uint8Array([97])), Jt = !0;
        } catch {
          Jt = !1;
        }
      }
      throw !Jt && (Vr = void 0), c;
    }
  } else {
    t = (o = r) + t, r = [];
    let c, a = null;
    for (; o < t; ) {
      var i = e[o++];
      128 > i ? r.push(i) : 224 > i ? o >= t ? rt() : (c = e[o++], 194 > i || (192 & c) != 128 ? (o--, rt()) : r.push((31 & i) << 6 | 63 & c)) : 240 > i ? o >= t - 1 ? rt() : (c = e[o++], (192 & c) != 128 || i === 224 && 160 > c || i === 237 && 160 <= c || (192 & (n = e[o++])) != 128 ? (o--, rt()) : r.push((15 & i) << 12 | (63 & c) << 6 | 63 & n)) : 244 >= i ? o >= t - 2 ? rt() : (c = e[o++], (192 & c) != 128 || c - 144 + (i << 28) >> 30 != 0 || (192 & (n = e[o++])) != 128 || (192 & (s = e[o++])) != 128 ? (o--, rt()) : (i = (7 & i) << 18 | (63 & c) << 12 | (63 & n) << 6 | 63 & s, i -= 65536, r.push(55296 + (i >> 10 & 1023), 56320 + (1023 & i)))) : rt(), 8192 <= r.length && (a = hs(a, r), r.length = 0);
    }
    o = hs(a, r);
  }
  return o;
}
function Mo(e) {
  const t = qe(e.g);
  return xo(e.g, t);
}
function Mr(e, t, r) {
  var n = qe(e.g);
  for (n = e.g.g + n; e.g.g < n; ) r.push(t(e.g));
}
var Zt = [];
function ms(e) {
  return e ? /^\d+$/.test(e) ? (Fr(e), new ys(k, G)) : null : Ba || (Ba = new ys(0, 0));
}
var ys = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let Ba;
function vs(e) {
  return e ? /^-?\d+$/.test(e) ? (Fr(e), new ws(k, G)) : null : Ga || (Ga = new ws(0, 0));
}
var ws = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let Ga;
function dr(e, t, r) {
  for (; 0 < r || 127 < t; ) e.g.push(127 & t | 128), t = (t >>> 7 | r << 25) >>> 0, r >>>= 7;
  e.g.push(t);
}
function Xt(e, t) {
  for (; 127 < t; ) e.g.push(127 & t | 128), t >>>= 7;
  e.g.push(t);
}
function Ir(e, t) {
  if (0 <= t) Xt(e, t);
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
function we(e, t, r) {
  Xt(e.g, 8 * t + r);
}
function Ln(e, t) {
  return we(e, t, 2), t = e.g.end(), ft(e, t), t.push(e.h), t;
}
function Rn(e, t) {
  var r = t.pop();
  for (r = e.h + e.g.length() - r; 127 < r; ) t.push(127 & r | 128), r >>>= 7, e.h++;
  t.push(r), e.h++;
}
function Sr(e, t, r) {
  we(e, t, 2), Xt(e.g, r.length), ft(e, e.g.end()), ft(e, r);
}
function sn(e, t, r, n) {
  r != null && (t = Ln(e, t), n(r, e), Rn(e, t));
}
class wt {
  constructor(t, r, n, s) {
    this.g = t, this.h = r, this.l = n, this.qa = s;
  }
}
function Q(e) {
  return Array.prototype.slice.call(e);
}
function Io(e) {
  return typeof Symbol == "function" && typeof Symbol() == "symbol" ? Symbol() : e;
}
var Se = Io(), _s = Io("0di"), Cr = Se ? (e, t) => {
  e[Se] |= t;
} : (e, t) => {
  e.D !== void 0 ? e.D |= t : Object.defineProperties(e, { D: { value: t, configurable: !0, writable: !0, enumerable: !1 } });
};
function Ts(e) {
  const t = P(e);
  (1 & t) != 1 && (Object.isFrozen(e) && (e = Q(e)), D(e, 1 | t));
}
var fr = Se ? (e, t) => {
  e[Se] &= ~t;
} : (e, t) => {
  e.D !== void 0 && (e.D &= ~t);
};
function Y(e, t, r) {
  return r ? e | t : e & ~t;
}
var P = Se ? (e) => 0 | e[Se] : (e) => 0 | e.D, E = Se ? (e) => e[Se] : (e) => e.D, D = Se ? (e, t) => {
  e[Se] = t;
} : (e, t) => {
  e.D !== void 0 ? e.D = t : Object.defineProperties(e, { D: { value: t, configurable: !0, writable: !0, enumerable: !1 } });
};
function Es() {
  var e = [];
  return Cr(e, 1), e;
}
function _t(e) {
  return Cr(e, 34), e;
}
function ja(e, t) {
  D(t, -14591 & (0 | e));
}
function on(e, t) {
  D(t, -14557 & (34 | e));
}
function pr(e) {
  return (e = e >> 14 & 1023) === 0 ? 536870912 : e;
}
var zt = {}, So = {};
function bs(e) {
  return !(!e || typeof e != "object" || e.Na !== So);
}
function St(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && e.constructor === Object;
}
let Co = !Tn;
function Lo(e, t, r) {
  if (e != null) {
    if (typeof e == "string") e = e ? new He(e, ut) : dt();
    else if (e.constructor !== He) if (kr(e)) e = r ? Eo(e) : e.length ? new He(new Uint8Array(e), ut) : dt();
    else {
      if (!t) throw Error();
      e = void 0;
    }
  }
  return e;
}
function an(e, t, r) {
  if (!Array.isArray(e) || e.length) return !1;
  const n = P(e);
  return !!(1 & n) || !(!t || !(Array.isArray(t) ? t.includes(r) : t.has(r))) && (D(e, 1 | n), !0);
}
var st;
const As = [];
function Oe(e) {
  if (2 & e) throw Error();
}
D(As, 55), st = Object.freeze(As);
class gr {
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
    return new gr(this.g, this.h, this.m);
  }
}
var Va = {};
let Ye, Pt;
function Ro(e, t) {
  (t = Ye ? t[Ye] : void 0) && (e[Ye] = Q(t));
}
function cn(e) {
  return (e = Error(e)).__closure__error__context__984382 || (e.__closure__error__context__984382 = {}), e.__closure__error__context__984382.severity = "warning", e;
}
function Qe(e) {
  return e == null || typeof e == "number" ? e : e === "NaN" || e === "Infinity" || e === "-Infinity" ? Number(e) : void 0;
}
function Oo(e) {
  return e == null || typeof e == "boolean" ? e : typeof e == "number" ? !!e : void 0;
}
Object.freeze(new class {
}()), Object.freeze(new class {
}());
const Xa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Lr(e) {
  const t = typeof e;
  return t === "number" ? Number.isFinite(e) : t === "string" && Xa.test(e);
}
function Tt(e) {
  if (e == null) return e;
  if (typeof e == "string") {
    if (!e) return;
    e = +e;
  }
  return typeof e == "number" && Number.isFinite(e) ? 0 | e : void 0;
}
function za(e) {
  if (e == null) return e;
  if (typeof e == "string") {
    if (!e) return;
    e = +e;
  }
  return typeof e == "number" && Number.isFinite(e) ? e >>> 0 : void 0;
}
function ks(e) {
  return e[0] !== "-" && (20 > e.length || e.length === 20 && 184467 > Number(e.substring(0, 6)));
}
function Do(e) {
  return e[0] === "-" ? 20 > e.length || e.length === 20 && -922337 < Number(e.substring(0, 7)) : 19 > e.length || e.length === 19 && 922337 > Number(e.substring(0, 6));
}
function On(e) {
  return e = Math.trunc(e), Number.isSafeInteger(e) || (ot(e), e = Fn(k, G)), e;
}
function Dn(e) {
  var t = Math.trunc(Number(e));
  return Number.isSafeInteger(t) ? String(t) : ((t = e.indexOf(".")) !== -1 && (e = e.substring(0, t)), Do(e) || (Fr(e), e = Ao()), e);
}
function mr(e) {
  return e == null ? e : Lr(e) ? typeof e == "number" ? On(e) : Dn(e) : void 0;
}
function Wt(e) {
  if (typeof e != "string") throw Error();
  return e;
}
function Ht(e) {
  if (e != null && typeof e != "string") throw Error();
  return e;
}
function Ut(e) {
  return e == null || typeof e == "string" ? e : void 0;
}
function Pn(e, t, r, n) {
  if (e != null && typeof e == "object" && e.W === zt) return e;
  if (!Array.isArray(e)) return r ? 2 & n ? (e = t[_s]) ? t = e : (_t((e = new t()).s), t = t[_s] = e) : t = new t() : t = void 0, t;
  let s = r = P(e);
  return s === 0 && (s |= 32 & n), s |= 2 & n, s !== r && D(e, s), new t(e);
}
function Wa(e, t, r) {
  if (t) {
    var n = !!n;
    if (!Lr(t = e)) throw cn("int64");
    typeof t == "string" ? n = Dn(t) : n ? (n = Math.trunc(t), Number.isSafeInteger(n) ? n = String(n) : Do(t = String(n)) ? n = t : (ot(n), n = Ao())) : n = On(t);
  } else n = mr(e);
  return typeof (r = (e = n) == null ? r ? 0 : void 0 : e) == "string" && (n = +r, Number.isSafeInteger(n)) ? n : r;
}
let yr, Un, Ha;
function vr(e) {
  switch (typeof e) {
    case "boolean":
      return Un || (Un = [0, void 0, !0]);
    case "number":
      return 0 < e ? void 0 : e === 0 ? Ha || (Ha = [0, void 0]) : [-e, void 0];
    case "string":
      return [0, e];
    case "object":
      return e;
  }
}
function at(e, t) {
  return Po(e, t[0], t[1]);
}
function Po(e, t, r) {
  if (e == null && (e = yr), yr = void 0, e == null) {
    var n = 96;
    r ? (e = [r], n |= 512) : e = [], t && (n = -16760833 & n | (1023 & t) << 14);
  } else {
    if (!Array.isArray(e)) throw Error();
    if (64 & (n = P(e))) return Pt && delete e[Pt], e;
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
  return D(e, n), e;
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
class Wr {
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
const $a = Ya ? (Object.setPrototypeOf(Wr.prototype, Map.prototype), Object.defineProperties(Wr.prototype, { size: { value: 0, configurable: !0, enumerable: !0, writable: !0 } }), Wr) : class extends Map {
  constructor() {
    super();
  }
};
function Qt(e) {
  return e;
}
function Hr(e) {
  if (2 & e.O) throw Error("Cannot mutate an immutable Map");
}
var me = class extends $a {
  constructor(e, t, r = Qt, n = Qt) {
    super();
    let s = P(e);
    s |= 64, D(e, s), this.O = s, this.V = t, this.R = r || Qt, this.Y = this.V ? qa : n || Qt;
    for (let o = 0; o < e.length; o++) {
      const i = e[o], c = r(i[0], !1, !0);
      let a = i[1];
      t ? a === void 0 && (a = null) : a = n(i[1], !1, !0, void 0, void 0, s), super.set(c, a);
    }
  }
  pa(e = xs) {
    return this.X(e);
  }
  X(e = xs) {
    const t = [], r = super.entries();
    for (var n; !(n = r.next()).done; ) (n = n.value)[0] = e(n[0]), n[1] = e(n[1]), t.push(n);
    return t;
  }
  clear() {
    Hr(this), super.clear();
  }
  delete(e) {
    return Hr(this), super.delete(this.R(e, !0, !1));
  }
  entries() {
    var e = this.ma();
    return new gr(e, Ka, this);
  }
  keys() {
    return this.Ma();
  }
  values() {
    var e = this.ma();
    return new gr(e, me.prototype.get, this);
  }
  forEach(e, t) {
    super.forEach(((r, n) => {
      e.call(t, this.get(n), n, this);
    }));
  }
  set(e, t) {
    return Hr(this), (e = this.R(e, !0, !1)) == null ? this : t == null ? (super.delete(e), this) : super.set(e, this.Y(t, !0, !0, this.V, !1, this.O));
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
function qa(e, t, r, n, s, o) {
  return e = Pn(e, n, r, o), s && (e = Rr(e)), e;
}
function xs(e) {
  return e;
}
function Ka(e) {
  return [e, this.get(e)];
}
function Nn(e, t, r, n, s, o) {
  if (e != null) {
    if (Array.isArray(e)) e = o && 2 & P(e) ? e : Bn(e, t, r, n !== void 0, s, o);
    else if (St(e)) {
      const i = {};
      for (let c in e) i[c] = Nn(e[c], t, r, n, s, o);
      e = i;
    } else e = t(e, n);
    return e;
  }
}
function Bn(e, t, r, n, s, o) {
  const i = n || r ? P(e) : 0;
  n = n ? !!(32 & i) : void 0;
  const c = Q(e);
  for (let a = 0; a < c.length; a++) c[a] = Nn(c[a], t, r, n, s, o);
  return r && (Ro(c, e), r(i, c)), c;
}
function Ja(e) {
  return Nn(e, Uo, void 0, void 0, !1, !1);
}
function Uo(e) {
  return e.W === zt ? e.toJSON() : e instanceof me ? e.pa(Ja) : (function(t) {
    switch (typeof t) {
      case "number":
        return isFinite(t) ? t : String(t);
      case "boolean":
        return t ? 1 : 0;
      case "object":
        if (t) {
          if (Array.isArray(t)) return Co || !an(t, void 0, 9999) ? t : void 0;
          if (kr(t)) return us(t);
          if (t instanceof He) {
            const r = t.Z;
            return r == null ? "" : typeof r == "string" ? r : t.Z = us(r);
          }
          if (t instanceof me) return t = t.pa(), en || t.length !== 0 ? t : void 0;
        }
    }
    return t;
  })(e);
}
function hn(e, t, r = on) {
  if (e != null) {
    if (mo && e instanceof Uint8Array) return t ? e : new Uint8Array(e);
    if (Array.isArray(e)) {
      var n = P(e);
      return 2 & n ? e : (t && (t = n === 0 || !!(32 & n) && !(64 & n || !(16 & n))), t ? (D(e, -12293 & (34 | n)), e) : Bn(e, hn, 4 & n ? on : r, !0, !1, !0));
    }
    return e.W === zt ? (r = e.s, e = 2 & (n = E(r)) ? e : Gn(e, r, n, !0)) : e instanceof me && (r = _t(e.X(hn)), e = new me(r, e.V, e.R, e.Y)), e;
  }
}
function Gn(e, t, r, n) {
  return e = e.constructor, yr = t = No(t, r, n), t = new e(t), yr = void 0, t;
}
function No(e, t, r) {
  const n = r || 2 & t ? on : ja, s = !!(32 & t);
  return e = (function(o, i, c) {
    const a = Q(o);
    var h = a.length;
    const l = 256 & i ? a[h - 1] : void 0;
    for (h += l ? -1 : 0, i = 512 & i ? 1 : 0; i < h; i++) a[i] = c(a[i]);
    if (l) {
      i = a[i] = {};
      for (const f in l) i[f] = c(l[f]);
    }
    return Ro(a, o), a;
  })(e, t, ((o) => hn(o, s, n))), Cr(e, 32 | (r ? 2 : 0)), e;
}
function Rr(e) {
  const t = e.s, r = E(t);
  return 2 & r ? Gn(e, t, r, !1) : e;
}
function pt(e, t) {
  return De(e = e.s, E(e), t);
}
function De(e, t, r, n) {
  if (r === -1) return null;
  if (r >= pr(t)) {
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
  var o = pr(t);
  if (r >= o || s) {
    if (s = t, 256 & t) o = e[e.length - 1];
    else {
      if (n == null) return s;
      o = e[o + (+!!(512 & t) - 1)] = {}, s |= 256;
    }
    return o[r] = n, s !== t && D(e, s), s;
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
  let h = P(i);
  return h !== 0 || !a || o || c ? 1 & h || (h |= 1, D(i, h)) : (h |= 33, D(i, h)), o ? (e = !1, 2 & h || (_t(i), e = !!(4 & h)), (n || e) && Object.freeze(i)) : (o = !!(2 & h) || !!(2048 & h), n && o ? (i = Q(i), n = 1, a && !c && (n |= 32), D(i, n), F(e, t, r, i, s)) : c && 32 & h && !o && fr(i, 32)), i;
}
function nr(e, t) {
  e = e.s;
  let r = E(e);
  const n = De(e, r, t), s = Qe(n);
  return s != null && s !== n && F(e, r, t, s), s;
}
function Bo(e) {
  e = e.s;
  let t = E(e);
  const r = De(e, t, 1), n = Lo(r, !0, !!(34 & t));
  return n != null && n !== r && F(e, t, 1, n), n;
}
function lt(e, t, r) {
  e = e.s;
  let n = E(e);
  const s = 2 & n ? 1 : 2;
  let o = Go(e, n, t);
  var i = P(o);
  if (!(4 & i)) {
    (4 & i || Object.isFrozen(o)) && (o = Q(o), i = ct(i, n, !1), n = F(e, n, t, o));
    var c = 0;
    let a = 0;
    for (; c < o.length; c++) {
      const h = r(o[c]);
      h != null && (o[a++] = h);
    }
    a < c && (o.length = a), i = Y(i = jo(i, n, !1), 20, !0), i = Y(i, 4096, !1), i = Y(i, 8192, !1), D(o, i), 2 & i && Object.freeze(o);
  }
  return Ct(i) || (r = i, (i = (c = s === 1) ? Y(i, 2, !0) : Y(i, 32, !1)) !== r && D(o, i), c && Object.freeze(o)), s === 2 && Ct(i) && (o = Q(o), i = ct(i, n, !1), D(o, i), F(e, n, t, o)), o;
}
function Go(e, t, r) {
  return e = De(e, t, r), Array.isArray(e) ? e : st;
}
function jo(e, t, r) {
  return e === 0 && (e = ct(e, t, r)), Y(e, 1, !0);
}
function Ct(e) {
  return !!(2 & e) && !!(4 & e) || !!(2048 & e);
}
let Za;
function Fs() {
  return Za ?? (Za = new me(_t([]), void 0, void 0, void 0, Va));
}
function Vo(e) {
  e = Q(e);
  for (let t = 0; t < e.length; t++) {
    const r = e[t] = Q(e[t]);
    Array.isArray(r[1]) && (r[1] = _t(r[1]));
  }
  return e;
}
function wr(e, t, r) {
  {
    const i = e.s;
    let c = E(i);
    if (Oe(c), r == null) F(i, c, t);
    else {
      var n, s = e = P(r), o = !!(2 & e) || Object.isFrozen(r);
      if ((n = !o) && (n = !1), !(4 & e)) for (e = 21, o && (r = Q(r), s = 0, e = ct(e, c, !0)), o = 0; o < r.length; o++) r[o] = Wt(r[o]);
      n && (r = Q(r), s = 0, e = ct(e, c, !0)), e !== s && D(r, e), F(i, c, t, r);
    }
  }
}
function Yt(e, t, r, n) {
  const s = E(e);
  Oe(s), e = Et(e, s, t, 2), n = r(n, !!(4 & (t = P(e))) && !!(4096 & t)), e.push(n);
}
function Qa(e) {
  return e;
}
function Yr(e, t) {
  return jn(e = e.s, E(e), xi) === t ? t : -1;
}
function jn(e, t, r) {
  let n = 0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    De(e, t, o) != null && (n !== 0 && (t = F(e, t, n)), n = o);
  }
  return n;
}
function Vn(e, t, r, n) {
  let s = E(e);
  Oe(s);
  const o = De(e, s, r, n);
  let i;
  if (o != null && o.W === zt) return (t = Rr(o)) !== o && F(e, s, r, t, n), t.s;
  if (Array.isArray(o)) {
    const c = P(o);
    i = 2 & c ? No(o, c, !1) : o, i = at(i, t);
  } else i = at(void 0, t);
  return i !== o && F(e, s, r, i, n), i;
}
function Xo(e, t, r, n) {
  e = e.s;
  let s = E(e);
  const o = De(e, s, r, n);
  return (t = Pn(o, t, !1, s)) !== o && t != null && F(e, s, r, t, n), t;
}
function _(e, t, r, n = !1) {
  if ((t = Xo(e, t, r, n)) == null) return t;
  e = e.s;
  let s = E(e);
  if (!(2 & s)) {
    const o = Rr(t);
    o !== t && F(e, s, r, t = o, n);
  }
  return t;
}
function zo(e, t, r, n, s, o) {
  var i = !!(2 & t), c = i ? 1 : 2;
  const a = c === 1;
  c = c === 2, s = !!s, o && (o = !i), i = Go(e, t, n);
  var h = P(i);
  const l = !!(4 & h);
  if (!l) {
    var f = i, d = t;
    const v = !!(2 & (h = jo(h, t, s)));
    v && (d = Y(d, 2, !0));
    let b = !v, T = !0, te = 0, tt = 0;
    for (; te < f.length; te++) {
      const Ve = Pn(f[te], r, !1, d);
      if (Ve instanceof r) {
        if (!v) {
          const Kt = !!(2 & P(Ve.s));
          b && (b = !Kt), T && (T = Kt);
        }
        f[tt++] = Ve;
      }
    }
    tt < te && (f.length = tt), h = Y(h, 4, !0), h = Y(h, 16, T), h = Y(h, 8, b), D(f, h), v && Object.freeze(f);
  }
  if (r = !!(8 & h) || a && !i.length, o && !r) {
    for (Ct(h) && (i = Q(i), h = ct(h, t, s), t = F(e, t, n, i)), o = i, r = h, f = 0; f < o.length; f++) (h = o[f]) !== (d = Rr(h)) && (o[f] = d);
    r = Y(r, 8, !0), r = Y(r, 16, !o.length), D(o, r), h = r;
  }
  return Ct(h) || (o = h, a ? h = Y(h, !i.length || 16 & h && (!l || 32 & h) ? 2 : 2048, !0) : s || (h = Y(h, 32, !1)), h !== o && D(i, h), a && Object.freeze(i)), c && Ct(h) && (i = Q(i), h = ct(h, t, s), D(i, h), F(e, t, n, i)), i;
}
function Ge(e, t, r) {
  e = e.s;
  const n = E(e);
  return zo(e, n, t, r, !1, !(2 & n));
}
function m(e, t, r, n, s) {
  return n == null && (n = void 0), x(e, r, n, s);
}
function Lt(e, t, r, n) {
  n == null && (n = void 0), e = e.s;
  let s = E(e);
  Oe(s), (r = jn(e, s, r)) && r !== t && n != null && (s = F(e, s, r)), F(e, s, t, n);
}
function ct(e, t, r) {
  return e = Y(e, 2, !!(2 & t)), e = Y(e, 32, !!(32 & t) && r), Y(e, 2048, !1);
}
function ln(e, t, r) {
  e = e.s;
  const n = E(e);
  Oe(n), e = zo(e, n, t, 1, !0), t = r ?? new t(), e.push(t), 2 & P(t.s) ? fr(e, 8) : fr(e, 16);
}
function ge(e, t) {
  return Tt(pt(e, t));
}
function ye(e, t) {
  return Ut(pt(e, t));
}
function Ce(e) {
  return e ?? 0;
}
function $(e, t) {
  return Ce(nr(e, t));
}
function Nt(e, t, r) {
  if (r != null && typeof r != "boolean") throw e = typeof r, Error(`Expected boolean but got ${e != "object" ? e : r ? Array.isArray(r) ? "array" : e : "null"}: ${r}`);
  x(e, t, r);
}
function Le(e, t, r) {
  if (r != null) {
    if (typeof r != "number" || !Number.isFinite(r)) throw cn("int32");
    r |= 0;
  }
  x(e, t, r);
}
function y(e, t, r) {
  if (r != null && typeof r != "number") throw Error(`Value of float/double field must be a number, found ${typeof r}: ${r}`);
  x(e, t, r);
}
function Ae(e, t, r) {
  t.g ? t.m(e, t.g, t.h, r, !0) : t.m(e, t.h, r, !0);
}
me.prototype.toJSON = void 0, me.prototype.Na = So;
var u = class {
  constructor(e, t) {
    this.s = Po(e, t);
  }
  toJSON() {
    return Wo(this, Bn(this.s, Uo, void 0, void 0, !1, !1), !0);
  }
  l() {
    var e = s1;
    return e.g ? e.l(this, e.g, e.h, !0) : e.l(this, e.h, e.defaultValue, !0);
  }
  clone() {
    const e = this.s;
    return Gn(this, e, E(e), !1);
  }
  L() {
    return !!(2 & P(this.s));
  }
};
function Wo(e, t, r) {
  const n = e.constructor.A;
  var s = E(r ? e.s : t), o = pr(s), i = !1;
  if (n && Co) {
    if (!r) {
      var c;
      if ((t = Q(t)).length && St(c = t[t.length - 1])) {
        for (i = 0; i < n.length; i++) if (n[i] >= o) {
          Object.assign(t[t.length - 1] = {}, c);
          break;
        }
      }
      i = !0;
    }
    var a;
    o = t, r = !r, e = pr(c = E(e.s)), c = +!!(512 & c) - 1;
    for (let te = 0; te < n.length; te++) {
      var h = n[te];
      if (h < e) {
        var l = o[h += c];
        l == null ? o[h] = r ? st : Es() : r && l !== st && Ts(l);
      } else {
        if (!a) {
          var f = void 0;
          o.length && St(f = o[o.length - 1]) ? a = f : o.push(a = {});
        }
        l = a[h], a[h] == null ? a[h] = r ? st : Es() : r && l !== st && Ts(l);
      }
    }
  }
  if (!(a = t.length)) return t;
  let d, v;
  if (St(f = t[a - 1])) {
    e: {
      var b = f;
      for (var T in o = {}, r = !1, b) e = b[T], Array.isArray(e) && (c = e, (!fs && an(e, n, +T) || !en && bs(e) && e.size === 0) && (e = null), e != c && (r = !0)), e != null ? o[T] = e : r = !0;
      if (r) {
        for (let te in o) {
          b = o;
          break e;
        }
        b = null;
      }
    }
    b != f && (d = !0), a--;
  }
  for (s = +!!(512 & s) - 1; 0 < a && ((f = t[T = a - 1]) == null || !fs && an(f, n, T - s) || !en && bs(f) && f.size === 0); a--) v = !0;
  return (d || v) && (t = i ? t : Array.prototype.slice.call(t, 0, a), i && (t.length = a), b && t.push(b)), t;
}
function Ho(e) {
  return Array.isArray(e) ? e[0] instanceof wt ? e : [l2, e] : [e, void 0];
}
function bt(e, t) {
  if (Array.isArray(t)) {
    var r = P(t);
    if (4 & r) return t;
    for (var n = 0, s = 0; n < t.length; n++) {
      const o = e(t[n]);
      o != null && (t[s++] = o);
    }
    return s < n && (t.length = s), D(t, -12289 & (5 | r)), 2 & r && Object.freeze(t), t;
  }
}
u.prototype.W = zt, u.prototype.toString = function() {
  return Wo(this, this.s, !1).toString();
};
const Ms = Symbol();
function Xn(e) {
  let t = e[Ms];
  if (!t) {
    const r = qo(e), n = Wn(e), s = n.g;
    t = s ? (o, i) => s(o, i, n) : (o, i) => {
      for (; Fo(i) && i.h != 4; ) {
        var c = i.m, a = n[c];
        if (!a) {
          var h = n.ha;
          h && (h = h[c]) && (a = n[c] = e2(h));
        }
        a && a(i, o, c) || (c = (a = i).l, rr(a), a.ga ? a = void 0 : (h = a.g.g - c, a.g.g = c, a = xo(a.g, h)), c = o, a && (Ye || (Ye = Symbol()), (h = c[Ye]) ? h.push(a) : c[Ye] = [a]));
      }
      r === Yo || r === $o || r.Oa || (o[Pt || (Pt = Symbol())] = r);
    }, e[Ms] = t;
  }
  return t;
}
function e2(e) {
  const t = (e = Ho(e))[0].g;
  if (e = e[1]) {
    const r = Xn(e), n = Wn(e).S;
    return (s, o, i) => t(s, o, i, n, r);
  }
  return t;
}
let Yo, $o;
const sr = Symbol();
function t2(e, t, r) {
  const n = r[1];
  let s;
  if (n) {
    const o = n[sr];
    s = o ? o.S : vr(n[0]), e[t] = o ?? n;
  }
  s && s === Un ? (e.na || (e.na = [])).push(t) : r[0] && (e.oa || (e.oa = [])).push(t);
}
function Is(e, t) {
  return [e.l, !t || 0 < t[0] ? void 0 : t];
}
function qo(e) {
  var t = e[sr];
  if (t) return t;
  if (!(t = zn(e, e[sr] = {}, Is, Is, t2)).oa && !t.na) {
    let r = !0;
    for (let n in t) {
      isNaN(n) || (r = !1);
      break;
    }
    r ? (t = vr(e[0]) === Un, t = e[sr] = t ? $o || ($o = { S: vr(!0) }) : Yo || (Yo = {})) : t.Oa = !0;
  }
  return t;
}
function r2(e, t, r) {
  e[t] = r;
}
function zn(e, t, r, n, s = r2) {
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
    let f;
    typeof i == "number" && (a += i, i = e[++o]);
    var h = void 0;
    if (i instanceof wt ? f = i : (f = u2, o--), f.qa) {
      i = e[++o], h = e;
      var l = o;
      typeof i == "function" && (i = i(), h[l] = i), h = i;
    }
    for (l = a + 1, typeof (i = e[++o]) == "number" && 0 > i && (l -= i, i = e[++o]); a < l; a++) {
      const d = c[a];
      s(t, a, h ? n(f, h, d) : r(f, d));
    }
  }
  return t;
}
const Ss = Symbol();
function Ko(e) {
  let t = e[Ss];
  if (!t) {
    const r = Or(e);
    t = (n, s) => Jo(n, s, r), e[Ss] = t;
  }
  return t;
}
const or = Symbol();
function n2(e) {
  return e.h;
}
function s2(e, t) {
  let r, n;
  const s = e.h;
  return (o, i, c) => s(o, i, c, n || (n = Or(t).S), r || (r = Ko(t)));
}
function Or(e) {
  let t = e[or];
  return t || (t = zn(e, e[or] = {}, n2, s2), ir in e && or in e && (e.length = 0), t);
}
const ir = Symbol();
function o2(e, t) {
  const r = e.g;
  return t ? (n, s, o) => r(n, s, o, t) : r;
}
function i2(e, t, r) {
  const n = e.g;
  let s, o;
  return (i, c, a) => n(i, c, a, o || (o = Wn(t).S), s || (s = Xn(t)), r);
}
function Wn(e) {
  let t = e[ir];
  return t || (qo(e), t = zn(e, e[ir] = {}, o2, i2), ir in e && or in e && (e.length = 0), t);
}
function Cs(e, t) {
  var r = e[t];
  if (r) return r;
  if ((r = e.ha) && (r = r[t])) {
    var n = (r = Ho(r))[0].h;
    if (r = r[1]) {
      const s = Ko(r), o = Or(r).S;
      r = (r = e.h) ? r(o, s) : (i, c, a) => n(i, c, a, o, s);
    } else r = n;
    return e[t] = r;
  }
}
function Jo(e, t, r) {
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
  if (e = Ye ? e[Ye] : void 0) for (ft(t, t.g.end()), r = 0; r < e.length; r++) ft(t, En(e[r]) || xr());
}
function ae(e, t) {
  return new wt(e, t, !1, !1);
}
function At(e, t) {
  return new wt(e, t, !0, !1);
}
function Dr(e, t) {
  return new wt(e, t, !1, !0);
}
function ce(e, t, r) {
  F(e, E(e), t, r);
}
var a2 = Dr((function(e, t, r, n, s) {
  return e.h === 2 && (e = Vt(e, at([void 0, void 0], n), s), Oe(n = E(t)), (s = De(t, n, r)) instanceof me ? (2 & s.O) != 0 ? ((s = s.X()).push(e), F(t, n, r, s)) : s.Ta(e) : Array.isArray(s) ? (2 & P(s) && F(t, n, r, s = Vo(s)), s.push(e)) : F(t, n, r, [e]), !0);
}), (function(e, t, r, n, s) {
  if (t instanceof me) t.forEach(((o, i) => {
    sn(e, r, at([i, o], n), s);
  }));
  else if (Array.isArray(t)) for (let o = 0; o < t.length; o++) {
    const i = t[o];
    Array.isArray(i) && sn(e, r, at(i, n), s);
  }
}));
function Zo(e, t, r) {
  e: if (t != null) {
    if (Lr(t)) {
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
  t != null && (typeof t == "string" && vs(t), t != null && (we(e, r, 0), typeof t == "number" ? (e = e.g, ot(t), dr(e, k, G)) : (r = vs(t), dr(e.g, r.h, r.g))));
}
function Qo(e, t, r) {
  (t = Tt(t)) != null && t != null && (we(e, r, 0), Ir(e.g, t));
}
function ei(e, t, r) {
  (t = Oo(t)) != null && (we(e, r, 0), e.g.g.push(t ? 1 : 0));
}
function ti(e, t, r) {
  (t = Ut(t)) != null && Sr(e, r, uo(t));
}
function Pr(e, t, r, n, s) {
  sn(e, r, t instanceof u ? t.s : Array.isArray(t) ? at(t, n) : void 0, s);
}
function ri(e, t, r) {
  (t = t == null || typeof t == "string" || kr(t) || t instanceof He ? t : void 0) != null && Sr(e, r, An(t).buffer);
}
function ni(e, t, r) {
  return (e.h === 5 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Mr(e, nn, t) : t.push(nn(e.g)), !0);
}
var X, Be = ae((function(e, t, r) {
  if (e.h !== 1) return !1;
  var n = e.g;
  e = rn(n);
  const s = rn(n);
  n = 2 * (s >> 31) + 1;
  const o = s >>> 20 & 2047;
  return e = 4294967296 * (1048575 & s) + e, ce(t, r, o == 2047 ? e ? NaN : 1 / 0 * n : o == 0 ? n * Math.pow(2, -1074) * e : n * Math.pow(2, o - 1075) * (e + 4503599627370496)), !0;
}), (function(e, t, r) {
  (t = Qe(t)) != null && (we(e, r, 1), e = e.g, (r = bo || (bo = new DataView(new ArrayBuffer(8)))).setFloat64(0, +t, !0), k = r.getUint32(0, !0), G = r.getUint32(4, !0), Dt(e, k), Dt(e, G));
})), z = ae((function(e, t, r) {
  return e.h === 5 && (ce(t, r, nn(e.g)), !0);
}), (function(e, t, r) {
  (t = Qe(t)) != null && (we(e, r, 5), e = e.g, xn(t), Dt(e, k));
})), c2 = At(ni, (function(e, t, r) {
  if ((t = bt(Qe, t)) != null) for (let i = 0; i < t.length; i++) {
    var n = e, s = r, o = t[i];
    o != null && (we(n, s, 5), n = n.g, xn(o), Dt(n, k));
  }
})), Hn = At(ni, (function(e, t, r) {
  if ((t = bt(Qe, t)) != null && t.length) {
    we(e, r, 2), Xt(e.g, 4 * t.length);
    for (let n = 0; n < t.length; n++) r = e.g, xn(t[n]), Dt(r, k);
  }
})), Ke = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, In(e.g, Fn)), !0);
}), Zo), $r = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, (e = In(e.g, Fn)) === 0 ? void 0 : e), !0);
}), Zo), h2 = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, In(e.g, tn)), !0);
}), (function(e, t, r) {
  e: if (t != null) {
    if (Lr(t)) {
      if (typeof t == "string") {
        var n = Math.trunc(Number(t));
        Number.isSafeInteger(n) && 0 <= n ? t = String(n) : ((n = t.indexOf(".")) !== -1 && (t = t.substring(0, n)), ks(t) || (Fr(t), t = ur(k, G)));
        break e;
      }
      if (typeof t == "number") {
        t = 0 <= (t = Math.trunc(t)) && Number.isSafeInteger(t) ? t : (function(s) {
          if (0 > s) {
            ot(s);
            const o = ur(k, G);
            return s = Number(o), Number.isSafeInteger(s) ? s : o;
          }
          return ks(String(s)) ? s : (ot(s), tn(k, G));
        })(t);
        break e;
      }
    }
    t = void 0;
  }
  t != null && (typeof t == "string" && ms(t), t != null && (we(e, r, 0), typeof t == "number" ? (e = e.g, ot(t), dr(e, k, G)) : (r = ms(t), dr(e.g, r.h, r.g))));
})), N = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, $e(e.g)), !0);
}), Qo), Yn = At((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Mr(e, $e, t) : t.push($e(e.g)), !0);
}), (function(e, t, r) {
  if ((t = bt(Tt, t)) != null && t.length) {
    r = Ln(e, r);
    for (let n = 0; n < t.length; n++) Ir(e.g, t[n]);
    Rn(e, r);
  }
})), gt = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, (e = $e(e.g)) === 0 ? void 0 : e), !0);
}), Qo), j = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, Sn(e.g)), !0);
}), ei), Rt = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, (e = Sn(e.g)) === !1 ? void 0 : e), !0);
}), ei), J = At((function(e, t, r) {
  return e.h === 2 && (Yt(t, r, Qa, e = Cn(e)), !0);
}), (function(e, t, r) {
  if ((t = bt(Ut, t)) != null) for (let i = 0; i < t.length; i++) {
    var n = e, s = r, o = t[i];
    o != null && Sr(n, s, uo(o));
  }
})), Je = ae((function(e, t, r) {
  return e.h === 2 && (ce(t, r, (e = Cn(e)) === "" ? void 0 : e), !0);
}), ti), I = ae((function(e, t, r) {
  return e.h === 2 && (ce(t, r, Cn(e)), !0);
}), ti), l2 = Dr((function(e, t, r, n, s) {
  return e.h === 2 && (Vt(e, Vn(t, n, r, !0), s), !0);
}), Pr), u2 = Dr((function(e, t, r, n, s) {
  return e.h === 2 && (Vt(e, Vn(t, n, r), s), !0);
}), Pr);
X = new wt((function(e, t, r, n, s) {
  if (e.h !== 2) return !1;
  n = at(void 0, n);
  let o = E(t);
  Oe(o);
  let i = Et(t, o, r, 3);
  return o = E(t), 4 & P(i) && (i = Q(i), D(i, -2079 & (1 | P(i))), F(t, o, r, i)), i.push(n), Vt(e, n, s), !0;
}), (function(e, t, r, n, s) {
  if (Array.isArray(t)) for (let o = 0; o < t.length; o++) Pr(e, t[o], r, n, s);
}), !0, !0);
var S = Dr((function(e, t, r, n, s, o) {
  if (e.h !== 2) return !1;
  let i = E(t);
  return Oe(i), (o = jn(t, i, o)) && r !== o && F(t, i, o), Vt(e, t = Vn(t, n, r), s), !0;
}), Pr), si = ae((function(e, t, r) {
  return e.h === 2 && (ce(t, r, Mo(e)), !0);
}), ri), d2 = At((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Mr(e, qe, t) : t.push(qe(e.g)), !0);
}), (function(e, t, r) {
  if ((t = bt(za, t)) != null) for (let i = 0; i < t.length; i++) {
    var n = e, s = r, o = t[i];
    o != null && (we(n, s, 0), Xt(n.g, o));
  }
})), Re = ae((function(e, t, r) {
  return e.h === 0 && (ce(t, r, $e(e.g)), !0);
}), (function(e, t, r) {
  (t = Tt(t)) != null && (t = parseInt(t, 10), we(e, r, 0), Ir(e.g, t));
})), f2 = At((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = Et(t, E(t), r, 2, !1), e.h == 2 ? Mr(e, Na, t) : t.push($e(e.g)), !0);
}), (function(e, t, r) {
  if ((t = bt(Tt, t)) != null && t.length) {
    r = Ln(e, r);
    for (let n = 0; n < t.length; n++) Ir(e.g, t[n]);
    Rn(e, r);
  }
}));
class p2 {
  constructor(t, r) {
    this.h = t, this.g = r, this.l = _, this.m = m, this.defaultValue = void 0;
  }
}
function ke(e, t) {
  return new p2(e, t);
}
function et(e, t) {
  return (r, n) => {
    e: {
      if (Zt.length) {
        const o = Zt.pop();
        o.o(n), zr(o.g, r, n), r = o;
      } else r = new class {
        constructor(o, i) {
          if (gs.length) {
            const c = gs.pop();
            zr(c, o, i), o = c;
          } else o = new class {
            constructor(c, a) {
              this.h = null, this.m = !1, this.g = this.l = this.j = 0, zr(this, c, a);
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
        Xn(t)(i, r), Pt && delete i[Pt];
        var s = o;
        break e;
      } finally {
        r.g.clear(), r.m = -1, r.h = -1, 100 > Zt.length && Zt.push(r);
      }
      s = void 0;
    }
    return s;
  };
}
function $n(e) {
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
    Jo(this.s, t, Or(e)), ft(t, t.g.end());
    const r = new Uint8Array(t.h), n = t.l, s = n.length;
    let o = 0;
    for (let i = 0; i < s; i++) {
      const c = n[i];
      r.set(c, o), o += c.length;
    }
    return t.l = [r], r;
  };
}
var oi = [0, Je, ae((function(e, t, r) {
  return e.h === 2 && (ce(t, r, (e = Mo(e)) === dt() ? void 0 : e), !0);
}), (function(e, t, r) {
  if (t != null) {
    if (t instanceof u) {
      const n = t.Va;
      return void (n && (t = n(t), t != null && Sr(e, r, An(t).buffer)));
    }
    if (Array.isArray(t)) return;
  }
  ri(e, t, r);
}))], g2 = [0, I], ii = [0, N, Re, j, -1, Yn, Re, -1], m2 = [0, j, -1], ai = class extends u {
  constructor() {
    super();
  }
};
ai.A = [6];
var ci = [0, j, I, j, Re, -1, f2, I, -1, m2, Re], hi = [0, I, -2], Ls = class extends u {
  constructor() {
    super();
  }
}, li = [0], ui = [0, N, j, -2], ve = class extends u {
  constructor(e) {
    super(e, 2);
  }
}, L = {}, y2 = [-2, L, j];
L[336783863] = [0, I, j, -1, N, [0, [1, 2, 3, 4, 5], S, li, S, ci, S, hi, S, ui, S, ii], g2];
var v2 = [0, Je, Rt], di = [0, $r, -1, Rt, -3, $r, Yn, Je, gt, $r, -1, Rt, gt, Rt, -2, Je], $t = [-1, {}], fi = [0, I, 1, $t], pi = [0, I, J, $t];
function _e(e, t) {
  t = Ht(t), e = e.s;
  let r = E(e);
  Oe(r), F(e, r, 2, t === "" ? void 0 : t);
}
function M(e, t) {
  Yt(e.s, 3, Wt, t);
}
function A(e, t) {
  Yt(e.s, 4, Wt, t);
}
var ee = class extends u {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return m(this, 0, 7, e);
  }
};
ee.A = [3, 4, 5, 6, 8, 13, 17, 1005];
var w2 = [-500, Je, -1, J, -3, y2, X, oi, gt, -1, fi, pi, X, v2, Je, di, gt, J, 987, J], _2 = [0, Je, -1, $t], T2 = [-500, I, -1, [-1, {}], 998, I], E2 = [-500, I, J, -1, [-2, {}, j], 997, J, -1], b2 = [-500, I, J, $t, 998, J];
function Te(e, t) {
  ln(e, ee, t);
}
function R(e, t) {
  Yt(e.s, 10, Wt, t);
}
function C(e, t) {
  Yt(e.s, 15, Wt, t);
}
var he = class extends u {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return m(this, 0, 1001, e);
  }
};
he.A = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
var gi = [-500, X, w2, 4, X, T2, X, E2, gt, X, b2, J, gt, fi, pi, X, _2, J, -2, di, Je, -1, Rt, 979, $t, X, oi], A2 = et(he, gi);
he.prototype.g = $n(gi);
var k2 = [0, X, [0, N, -2]], x2 = class extends u {
  constructor(e) {
    super(e);
  }
}, F2 = [0, N, z, I, -1], qn = class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    return Ge(this, x2, 1);
  }
};
qn.A = [1];
var mi = [0, X, F2], Kn = et(qn, mi), M2 = [0, N, z], I2 = [0, N, -1, k2], S2 = class extends u {
  constructor(e) {
    super(e);
  }
}, C2 = [0, N, -3], L2 = [0, z, -3], R2 = class extends u {
  constructor(e) {
    super(e);
  }
}, O2 = [0, z, -1, I, z], ar = class extends u {
  constructor(e) {
    super(e);
  }
  h() {
    return _(this, S2, 2);
  }
  g() {
    return Ge(this, R2, 5);
  }
};
ar.A = [5];
var D2 = [0, Re, C2, L2, I2, X, O2], yi = class extends u {
  constructor(e) {
    super(e);
  }
};
yi.A = [1, 2, 3, 8, 9];
var vi = et(yi, [0, J, Yn, Hn, D2, I, -1, Ke, X, M2, J, Ke]), wi = class extends u {
  constructor(e) {
    super(e);
  }
}, P2 = [0, z, -4], _i = class extends u {
  constructor(e) {
    super(e);
  }
};
_i.A = [1];
var Jn = et(_i, [0, X, P2]), Ti = class extends u {
  constructor(e) {
    super(e);
  }
}, U2 = [0, z, -4], Ei = class extends u {
  constructor(e) {
    super(e);
  }
};
Ei.A = [1];
var Ur = et(Ei, [0, X, U2]), bi = class extends u {
  constructor(e) {
    super(e);
  }
};
bi.A = [3];
var N2 = [0, N, -1, Hn, Re], Ai = class extends u {
  constructor() {
    super();
  }
};
Ai.prototype.g = $n([0, z, -4, Ke]);
var B2 = class extends u {
  constructor(e) {
    super(e);
  }
}, G2 = [0, 1, N, I, mi], ki = class extends u {
  constructor(e) {
    super(e);
  }
};
ki.A = [1];
var j2 = et(ki, [0, X, G2, Ke]), un = class extends u {
  constructor(e) {
    super(e);
  }
};
un.A = [1];
var V2 = class extends u {
  constructor(e) {
    super(e);
  }
  ua() {
    const e = Bo(this);
    return e ?? dt();
  }
}, X2 = class extends u {
  constructor(e) {
    super(e);
  }
}, xi = [1, 2], z2 = [0, xi, S, [0, Hn], S, [0, si], N, I], Fi = class extends u {
  constructor(e) {
    super(e);
  }
};
Fi.A = [1];
var W2 = et(Fi, [0, X, z2, Ke]), Nr = class extends u {
  constructor(e) {
    super(e);
  }
};
Nr.A = [4, 5];
var Mi = [0, I, N, z, J, -1], Rs = class extends u {
  constructor(e) {
    super(e);
  }
}, H2 = [0, j, -1], Os = class extends u {
  constructor(e) {
    super(e);
  }
}, cr = [1, 2, 3, 4, 5], _r = class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    return Bo(this) != null;
  }
  h() {
    return ye(this, 2) != null;
  }
}, Ii = [0, si, I, [0, N, Ke, -1], [0, h2, Ke]], U = class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    return Oo(pt(this, 2)) ?? !1;
  }
}, W = [0, Ii, j, [0, cr, S, ui, S, ci, S, ii, S, li, S, hi], Re], Zn = class extends u {
  constructor(e) {
    super(e);
  }
}, Si = [0, W, z, -1, N], Y2 = ke(502141897, Zn);
L[502141897] = Si;
var Ci = [0, Ii];
L[512499200] = Ci;
var Li = [0, Ci];
L[515723506] = Li;
var $2 = et(class extends u {
  constructor(e) {
    super(e);
  }
}, [0, [0, Re, -1, c2, d2], N2]), Ri = [0, W];
L[508981768] = Ri;
var q2 = class extends u {
  constructor(e) {
    super(e);
  }
}, Oi = [0, W, z, Ri, j], Di = class extends u {
  constructor(e) {
    super(e);
  }
}, Pi = [0, W, Si, Oi, z, Li];
L[508968149] = Oi;
var K2 = ke(508968150, Di);
L[508968150] = Pi;
var Ui = class extends u {
  constructor(e) {
    super(e);
  }
}, J2 = ke(513916220, Ui);
L[513916220] = [0, W, Pi, N];
var ht = class extends u {
  constructor(e) {
    super(e);
  }
  h() {
    return _(this, Nr, 2);
  }
  g() {
    x(this, 2);
  }
}, Ni = [0, W, Mi];
L[478825465] = Ni;
var Bi = [0, W];
L[478825422] = Bi;
var Z2 = class extends u {
  constructor(e) {
    super(e);
  }
}, Gi = [0, W, Bi, Ni, -1], ji = class extends u {
  constructor(e) {
    super(e);
  }
}, Vi = [0, W, z, N], Xi = class extends u {
  constructor(e) {
    super(e);
  }
}, zi = [0, W, z], Qn = class extends u {
  constructor(e) {
    super(e);
  }
}, Wi = [0, W, Vi, zi, z], Hi = class extends u {
  constructor(e) {
    super(e);
  }
}, Q2 = [0, W, Wi, Gi];
L[463370452] = Gi, L[464864288] = Vi, L[474472470] = zi;
var e1 = ke(462713202, Qn);
L[462713202] = Wi;
var t1 = ke(479097054, Hi);
L[479097054] = Q2;
var Yi = class extends u {
  constructor(e) {
    super(e);
  }
}, r1 = ke(456383383, Yi);
L[456383383] = [0, W, Mi];
var $i = class extends u {
  constructor(e) {
    super(e);
  }
}, n1 = ke(476348187, $i);
L[476348187] = [0, W, H2];
var qi = class extends u {
  constructor(e) {
    super(e);
  }
}, Ki = [0, Re, -1], dn = class extends u {
  constructor(e) {
    super(e);
  }
};
dn.A = [3];
var s1 = ke(458105876, class extends u {
  constructor(e) {
    super(e);
  }
  g() {
    var e = this.s;
    const t = E(e);
    var r = 2 & t;
    return e = (function(n, s, o) {
      var i = dn;
      const c = 2 & s;
      let a = !1;
      if (o == null) {
        if (c) return Fs();
        o = [];
      } else if (o.constructor === me) {
        if ((2 & o.O) == 0 || c) return o;
        o = o.X();
      } else Array.isArray(o) ? a = !!(2 & P(o)) : o = [];
      if (c) {
        if (!o.length) return Fs();
        a || (a = !0, _t(o));
      } else a && (a = !1, o = Vo(o));
      return a || (64 & P(o) ? fr(o, 32) : 32 & s && Cr(o, 32)), F(n, s, 2, i = new me(o, i, Wa, void 0), !1), i;
    })(e, t, De(e, t, 2)), e == null || !r && dn && (e.xa = !0), r = e;
  }
});
L[458105876] = [0, Ki, a2, [!0, Ke, [0, I, -1, J]]];
var es = class extends u {
  constructor(e) {
    super(e);
  }
}, Ji = ke(458105758, es);
L[458105758] = [0, W, I, Ki];
var ts = class extends u {
  constructor(e) {
    super(e);
  }
};
ts.A = [5, 6];
var o1 = ke(443442058, ts);
L[443442058] = [0, W, I, N, z, J, -1];
var i1 = class extends u {
  constructor(e) {
    super(e);
  }
}, Zi = [0, W, z, -1, N];
L[514774813] = Zi;
var a1 = class extends u {
  constructor(e) {
    super(e);
  }
}, Qi = [0, W, z, j], ea = class extends u {
  constructor(e) {
    super(e);
  }
}, c1 = [0, W, Zi, Qi, z];
L[518928384] = Qi;
var h1 = ke(516587230, ea);
function fn(e, t) {
  return t = t ? t.clone() : new Nr(), e.displayNamesLocale !== void 0 ? x(t, 1, Ht(e.displayNamesLocale)) : e.displayNamesLocale === void 0 && x(t, 1), e.maxResults !== void 0 ? Le(t, 2, e.maxResults) : "maxResults" in e && x(t, 2), e.scoreThreshold !== void 0 ? y(t, 3, e.scoreThreshold) : "scoreThreshold" in e && x(t, 3), e.categoryAllowlist !== void 0 ? wr(t, 4, e.categoryAllowlist) : "categoryAllowlist" in e && x(t, 4), e.categoryDenylist !== void 0 ? wr(t, 5, e.categoryDenylist) : "categoryDenylist" in e && x(t, 5), t;
}
function ta(e, t = -1, r = "") {
  return { categories: e.map(((n) => ({ index: Ce(ge(n, 1)) ?? -1, score: $(n, 2) ?? 0, categoryName: ye(n, 3) ?? "" ?? "", displayName: ye(n, 4) ?? "" ?? "" }))), headIndex: t, headName: r };
}
function ra(e) {
  var i, c;
  var t = lt(e, 3, Qe), r = lt(e, 2, Tt), n = lt(e, 1, Ut), s = lt(e, 9, Ut);
  const o = { categories: [], keypoints: [] };
  for (let a = 0; a < t.length; a++) o.categories.push({ score: t[a], index: r[a] ?? -1, categoryName: n[a] ?? "", displayName: s[a] ?? "" });
  if ((t = (i = _(e, ar, 4)) == null ? void 0 : i.h()) && (o.boundingBox = { originX: ge(t, 1) ?? 0, originY: ge(t, 2) ?? 0, width: ge(t, 3) ?? 0, height: ge(t, 4) ?? 0, angle: 0 }), (c = _(e, ar, 4)) == null ? void 0 : c.g().length) for (const a of _(e, ar, 4).g()) o.keypoints.push({ x: nr(a, 1) ?? 0, y: nr(a, 2) ?? 0, score: nr(a, 4) ?? 0, label: ye(a, 3) ?? "" });
  return o;
}
function rs(e) {
  const t = [];
  for (const r of Ge(e, Ti, 1)) t.push({ x: $(r, 1) ?? 0, y: $(r, 2) ?? 0, z: $(r, 3) ?? 0 });
  return t;
}
function na(e) {
  const t = [];
  for (const r of Ge(e, wi, 1)) t.push({ x: $(r, 1) ?? 0, y: $(r, 2) ?? 0, z: $(r, 3) ?? 0 });
  return t;
}
function Ds(e) {
  return Array.from(e, ((t) => 127 < t ? t - 256 : t));
}
function Ps(e, t) {
  if (e.length !== t.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);
  let r = 0, n = 0, s = 0;
  for (let o = 0; o < e.length; o++) r += e[o] * t[o], n += e[o] * e[o], s += t[o] * t[o];
  if (0 >= n || 0 >= s) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return r / Math.sqrt(n * s);
}
let er;
L[516587230] = c1;
const l1 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function sa() {
  if (er === void 0) try {
    await WebAssembly.instantiate(l1), er = !0;
  } catch {
    er = !1;
  }
  return er;
}
async function qr(e, t = "") {
  const r = await sa() ? "wasm_internal" : "wasm_nosimd_internal";
  return { wasmLoaderPath: `${t}/${e}_${r}.js`, wasmBinaryPath: `${t}/${e}_${r}.wasm` };
}
var Mt = class {
};
function oa() {
  const e = navigator.userAgent;
  return e.includes("Safari") && !e.includes("Chrome");
}
async function Us(e) {
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
function p(e, t, r) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), r(t = e.i.stringToNewUTF8(t)), e.i._free(t);
}
function Ns(e, t, r) {
  if (!e.i.canvas) throw Error("No OpenGL canvas configured.");
  if (r ? e.i._bindTextureToStream(r) : e.i._bindTextureToCanvas(), !(r = e.i.canvas.getContext("webgl2") || e.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  return e.i.gpuOriginForWebTexturesIsBottomLeft && r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), e.i.gpuOriginForWebTexturesIsBottomLeft && r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1), t.videoWidth ? (r = t.videoWidth, t = t.videoHeight) : t.naturalWidth ? (r = t.naturalWidth, t = t.naturalHeight) : (r = t.width, t = t.height), !e.l || r === e.i.canvas.width && t === e.i.canvas.height || (e.i.canvas.width = r, e.i.canvas.height = t), [r, t];
}
function Bs(e, t, r) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) n[s] = e.i.stringToNewUTF8(t[s]);
  t = e.i._malloc(4 * n.length), e.i.HEAPU32.set(n, t >> 2), r(t);
  for (const s of n) e.i._free(s);
  e.i._free(t);
}
function Pe(e, t, r) {
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = r;
}
function nt(e, t, r) {
  let n = [];
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = (s, o, i) => {
    o ? (r(n, i), n = []) : n.push(s);
  };
}
Mt.forVisionTasks = function(e) {
  return qr("vision", e);
}, Mt.forTextTasks = function(e) {
  return qr("text", e);
}, Mt.forAudioTasks = function(e) {
  return qr("audio", e);
}, Mt.isSimdSupported = function() {
  return sa();
};
async function u1(e, t, r, n) {
  return e = await (async (s, o, i, c, a) => {
    if (o && await Us(o), !self.ModuleFactory || i && (await Us(i), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
    return self.Module && a && ((o = self.Module).locateFile = a.locateFile, a.mainScriptUrlOrBlob && (o.mainScriptUrlOrBlob = a.mainScriptUrlOrBlob)), a = await self.ModuleFactory(self.Module || a), self.ModuleFactory = self.Module = void 0, new s(a, c);
  })(e, r.wasmLoaderPath, r.assetLoaderPath, t, { locateFile: (s) => s.endsWith(".wasm") ? r.wasmBinaryPath.toString() : r.assetBinaryPath && s.endsWith(".data") ? r.assetBinaryPath.toString() : s }), await e.o(n), e;
}
function Gs(e, t) {
  const r = _(e.baseOptions, _r, 1) || new _r();
  typeof t == "string" ? (x(r, 2, Ht(t)), x(r, 1)) : t instanceof Uint8Array && (x(r, 1, Lo(t, !1, !1)), x(r, 2)), m(e.baseOptions, 0, 1, r);
}
function js(e) {
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
function ns(e, t) {
  e.C = new ee(), _e(e.C, "PassThroughCalculator"), M(e.C, "free_memory"), A(e.C, "free_memory_unused_out"), R(t, "free_memory"), Te(t, e.C);
}
function Bt(e, t) {
  M(e.C, t), A(e.C, t + "_unused_out");
}
function ss(e) {
  e.g.addBoolToStream(!0, "free_memory", e.I);
}
var Tr = class {
  constructor(e) {
    this.g = e, this.F = [], this.I = 0, this.g.setAutoRenderToScreen(!1);
  }
  l(e, t = !0) {
    var r, n, s, o, i, c;
    if (t) {
      const a = e.baseOptions || {};
      if ((r = e.baseOptions) != null && r.modelAssetBuffer && ((n = e.baseOptions) != null && n.modelAssetPath)) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!((s = _(this.baseOptions, _r, 1)) != null && s.g() || (o = _(this.baseOptions, _r, 1)) != null && o.h() || (i = e.baseOptions) != null && i.modelAssetBuffer || (c = e.baseOptions) != null && c.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if ((function(h, l) {
        let f = _(h.baseOptions, Os, 3);
        if (!f) {
          var d = f = new Os(), v = new Ls();
          Lt(d, 4, cr, v);
        }
        "delegate" in l && (l.delegate === "GPU" ? (l = f, d = new ai(), Lt(l, 2, cr, d)) : (l = f, d = new Ls(), Lt(l, 4, cr, d))), m(h.baseOptions, 0, 3, f);
      })(this, a), a.modelAssetPath) return fetch(a.modelAssetPath.toString()).then(((h) => {
        if (h.ok) return h.arrayBuffer();
        throw Error(`Failed to fetch model: ${a.modelAssetPath} (${h.status})`);
      })).then(((h) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(h), !0, !1, !1), Gs(this, "/model.dat"), this.m(), this.N();
      }));
      Gs(this, a.modelAssetBuffer);
    }
    return this.m(), this.N(), Promise.resolve();
  }
  N() {
  }
  da() {
    let e;
    if (this.g.da(((t) => {
      e = A2(t);
    })), !e) throw Error("Failed to retrieve CalculatorGraphConfig");
    return e;
  }
  setGraph(e, t) {
    this.g.attachErrorListener(((r, n) => {
      this.F.push(Error(n));
    })), this.g.Ra(), this.g.setGraph(e, t), this.C = void 0, js(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), js(this);
  }
  close() {
    this.C = void 0, this.g.closeGraph();
  }
};
function Z(e, t) {
  if (e === null) throw Error(`Unable to obtain required WebGL resource: ${t}`);
  return e;
}
Tr.prototype.close = Tr.prototype.close;
class d1 {
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
function Vs(e, t, r) {
  const n = e.g;
  if (r = Z(n.createShader(r), "Failed to create WebGL shader"), n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(r)}`);
  return n.attachShader(e.h, r), r;
}
function Xs(e, t) {
  const r = e.g, n = Z(r.createVertexArray(), "Failed to create vertex array");
  r.bindVertexArray(n);
  const s = Z(r.createBuffer(), "Failed to create buffer");
  r.bindBuffer(r.ARRAY_BUFFER, s), r.enableVertexAttribArray(e.N), r.vertexAttribPointer(e.N, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), r.STATIC_DRAW);
  const o = Z(r.createBuffer(), "Failed to create buffer");
  return r.bindBuffer(r.ARRAY_BUFFER, o), r.enableVertexAttribArray(e.M), r.vertexAttribPointer(e.M, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array(t ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), r.bindVertexArray(null), new d1(r, n, s, o);
}
function os(e, t) {
  if (e.g) {
    if (t !== e.g) throw Error("Cannot change GL context once initialized");
  } else e.g = t;
}
function qt(e, t, r, n) {
  return os(e, t), e.h || (e.m(), e.F()), r ? (e.u || (e.u = Xs(e, !0)), r = e.u) : (e.v || (e.v = Xs(e, !1)), r = e.v), t.useProgram(e.h), r.bind(), e.l(), e = n(), r.g.bindVertexArray(null), e;
}
function Ze(e, t, r) {
  return os(e, t), e = Z(t.createTexture(), "Failed to create texture"), t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, r ?? t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, r ?? t.LINEAR), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Br(e, t, r) {
  os(e, t), e.C || (e.C = Z(t.createFramebuffer(), "Failed to create framebuffe.")), t.bindFramebuffer(t.FRAMEBUFFER, e.C), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0);
}
function is(e) {
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
    if (this.h = Z(e.createProgram(), "Failed to create WebGL program"), this.ta = Vs(this, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, e.VERTEX_SHADER), this.sa = Vs(this, this.I(), e.FRAGMENT_SHADER), e.linkProgram(this.h), !e.getProgramParameter(this.h, e.LINK_STATUS)) throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);
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
}, f1 = class extends kt {
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
    e.activeTexture(e.TEXTURE1), this.B = Ze(this, e, e.LINEAR), e.activeTexture(e.TEXTURE2), this.j = Ze(this, e, e.NEAREST);
  }
  m() {
    super.m();
    const e = this.g;
    this.U = Z(e.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.ra = Z(e.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.T = Z(e.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const e = this.g;
    e.uniform1i(this.T, 0), e.uniform1i(this.U, 1), e.uniform1i(this.ra, 2);
  }
  close() {
    this.B && this.g.deleteTexture(this.B), this.j && this.g.deleteTexture(this.j), super.close();
  }
}, p1 = class extends kt {
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
    e.activeTexture(e.TEXTURE1), this.j = Ze(this, e), e.activeTexture(e.TEXTURE2), this.B = Ze(this, e);
  }
  m() {
    super.m();
    const e = this.g;
    this.T = Z(e.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.U = Z(e.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.J = Z(e.getUniformLocation(this.h, "maskTexture"), "Uniform location");
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
function Ne(e, t) {
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
function pn(e) {
  var t = Ne(e, 1);
  if (!t) {
    if (t = Ne(e, 0)) t = new Float32Array(t).map(((n) => n / 255));
    else {
      t = new Float32Array(e.width * e.height);
      const n = mt(e);
      var r = as(e);
      if (Br(r, n, ia(e)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
        r = new Float32Array(e.width * e.height * 4), n.readPixels(0, 0, e.width, e.height, n.RGBA, n.FLOAT, r);
        for (let s = 0, o = 0; s < t.length; ++s, o += 4) t[s] = r[o];
      } else n.readPixels(0, 0, e.width, e.height, n.RED, n.FLOAT, t);
    }
    e.g.push(t);
  }
  return t;
}
function ia(e) {
  let t = Ne(e, 2);
  if (!t) {
    const r = mt(e);
    t = ca(e);
    const n = pn(e), s = aa(e);
    r.texImage2D(r.TEXTURE_2D, 0, s, e.width, e.height, 0, r.RED, r.FLOAT, n), gn(e);
  }
  return t;
}
function mt(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return e.h || (e.h = Z(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function aa(e) {
  if (e = mt(e), !tr) if (e.getExtension("EXT_color_buffer_float") && e.getExtension("OES_texture_float_linear") && e.getExtension("EXT_float_blend")) tr = e.R32F;
  else {
    if (!e.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    tr = e.R16F;
  }
  return tr;
}
function as(e) {
  return e.l || (e.l = new kt()), e.l;
}
function ca(e) {
  const t = mt(e);
  t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0);
  let r = Ne(e, 2);
  return r || (r = Ze(as(e), t, e.m ? t.LINEAR : t.NEAREST), e.g.push(r), e.j = !0), t.bindTexture(t.TEXTURE_2D, r), r;
}
function gn(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
var tr, B = class {
  constructor(e, t, r, n, s, o, i) {
    this.g = e, this.m = t, this.j = r, this.canvas = n, this.l = s, this.width = o, this.height = i, this.j && --zs === 0 && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  La() {
    return !!Ne(this, 0);
  }
  ka() {
    return !!Ne(this, 1);
  }
  P() {
    return !!Ne(this, 2);
  }
  ja() {
    return (t = Ne(e = this, 0)) || (t = pn(e), t = new Uint8Array(t.map(((r) => 255 * r))), e.g.push(t)), t;
    var e, t;
  }
  ia() {
    return pn(this);
  }
  K() {
    return ia(this);
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
          const n = mt(this), s = as(this);
          n.activeTexture(n.TEXTURE1), r = Ze(s, n, this.m ? n.LINEAR : n.NEAREST), n.bindTexture(n.TEXTURE_2D, r);
          const o = aa(this);
          n.texImage2D(n.TEXTURE_2D, 0, o, this.width, this.height, 0, n.RED, n.FLOAT, null), n.bindTexture(n.TEXTURE_2D, null), Br(s, n, r), qt(s, n, !1, (() => {
            ca(this), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLE_FAN, 0, 4), gn(this);
          })), is(s), gn(this);
        }
      }
      e.push(r);
    }
    return new B(e, this.m, this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && mt(this).deleteTexture(Ne(this, 2)), zs = -1;
  }
};
B.prototype.close = B.prototype.close, B.prototype.clone = B.prototype.clone, B.prototype.getAsWebGLTexture = B.prototype.K, B.prototype.getAsFloat32Array = B.prototype.ia, B.prototype.getAsUint8Array = B.prototype.ja, B.prototype.hasWebGLTexture = B.prototype.P, B.prototype.hasFloat32Array = B.prototype.ka, B.prototype.hasUint8Array = B.prototype.La;
var zs = 250;
const g1 = { color: "white", lineWidth: 4, radius: 6 };
function Kr(e) {
  return { ...g1, fillColor: (e = e || {}).color, ...e };
}
function Ue(e, t) {
  return e instanceof Function ? e(t) : e;
}
function Ws(e, t, r) {
  return Math.max(Math.min(t, r), Math.min(Math.max(t, r), e));
}
function xt(e) {
  if (!e.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
  return e.l;
}
function Gt(e) {
  if (!e.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
  return e.j;
}
function Hs(e, t, r) {
  if (t.P()) r(t.K());
  else {
    const n = t.ka() ? t.ia() : t.ja();
    e.m = e.m ?? new kt();
    const s = Gt(e);
    r((e = new B([n], t.m, !1, s.canvas, e.m, t.width, t.height)).K()), e.close();
  }
}
function Ys(e, t, r, n) {
  const s = (function(c) {
    return c.g || (c.g = new f1()), c.g;
  })(e), o = Gt(e), i = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r;
  qt(s, o, !0, (() => {
    (function(a, h, l, f) {
      const d = a.g;
      if (d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, h), d.activeTexture(d.TEXTURE1), d.bindTexture(d.TEXTURE_2D, a.B), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, l), a.J && (function(v, b) {
        if (v !== b) return !1;
        v = v.entries(), b = b.entries();
        for (const [te, tt] of v) {
          v = te;
          const Ve = tt;
          var T = b.next();
          if (T.done) return !1;
          const [Kt, Ta] = T.value;
          if (T = Ta, v !== Kt || Ve[0] !== T[0] || Ve[1] !== T[1] || Ve[2] !== T[2] || Ve[3] !== T[3]) return !1;
        }
        return !!b.next().done;
      })(a.J, f)) d.activeTexture(d.TEXTURE2), d.bindTexture(d.TEXTURE_2D, a.j);
      else {
        a.J = f;
        const v = Array(1024).fill(0);
        f.forEach(((b, T) => {
          if (b.length !== 4) throw Error(`Color at index ${T} is not a four-channel value.`);
          v[4 * T] = b[0], v[4 * T + 1] = b[1], v[4 * T + 2] = b[2], v[4 * T + 3] = b[3];
        })), d.activeTexture(d.TEXTURE2), d.bindTexture(d.TEXTURE_2D, a.j), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 256, 1, 0, d.RGBA, d.UNSIGNED_BYTE, new Uint8Array(v));
      }
    })(s, t, i, n), o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT), o.drawArrays(o.TRIANGLE_FAN, 0, 4);
    const c = s.g;
    c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE2), c.bindTexture(c.TEXTURE_2D, null);
  }));
}
function $s(e, t, r, n) {
  const s = Gt(e), o = (function(a) {
    return a.h || (a.h = new p1()), a.h;
  })(e), i = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r, c = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n;
  qt(o, s, !0, (() => {
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
      var r = xt(this);
      t = Kr(t), r.save();
      var n = r.canvas, s = 0;
      for (const o of e) r.fillStyle = Ue(t.fillColor, { index: s, from: o }), r.strokeStyle = Ue(t.color, { index: s, from: o }), r.lineWidth = Ue(t.lineWidth, { index: s, from: o }), (e = new Path2D()).arc(o.x * n.width, o.y * n.height, Ue(t.radius, { index: s, from: o }), 0, 2 * Math.PI), r.fill(e), r.stroke(e), ++s;
      r.restore();
    }
  }
  Da(e, t, r) {
    if (e && t) {
      var n = xt(this);
      r = Kr(r), n.save();
      var s = n.canvas, o = 0;
      for (const i of t) {
        n.beginPath(), t = e[i.start];
        const c = e[i.end];
        t && c && (n.strokeStyle = Ue(r.color, { index: o, from: t, to: c }), n.lineWidth = Ue(r.lineWidth, { index: o, from: t, to: c }), n.moveTo(t.x * s.width, t.y * s.height), n.lineTo(c.x * s.width, c.y * s.height)), ++o, n.stroke();
      }
      n.restore();
    }
  }
  Aa(e, t) {
    const r = xt(this);
    t = Kr(t), r.save(), r.beginPath(), r.lineWidth = Ue(t.lineWidth, {}), r.strokeStyle = Ue(t.color, {}), r.fillStyle = Ue(t.fillColor, {}), r.moveTo(e.originX, e.originY), r.lineTo(e.originX + e.width, e.originY), r.lineTo(e.originX + e.width, e.originY + e.height), r.lineTo(e.originX, e.originY + e.height), r.lineTo(e.originX, e.originY), r.stroke(), r.fill(), r.restore();
  }
  Ba(e, t, r = [0, 0, 0, 255]) {
    this.l ? (function(n, s, o, i) {
      const c = Gt(n);
      Hs(n, s, ((a) => {
        Ys(n, a, o, i), (a = xt(n)).drawImage(c.canvas, 0, 0, a.canvas.width, a.canvas.height);
      }));
    })(this, e, r, t) : Ys(this, e.K(), r, t);
  }
  Ca(e, t, r) {
    this.l ? (function(n, s, o, i) {
      const c = Gt(n);
      Hs(n, s, ((a) => {
        $s(n, a, o, i), (a = xt(n)).drawImage(c.canvas, 0, 0, a.canvas.width, a.canvas.height);
      }));
    })(this, e, t, r) : $s(this, e.K(), t, r);
  }
  close() {
    var e, t, r;
    (e = this.g) == null || e.close(), this.g = void 0, (t = this.h) == null || t.close(), this.h = void 0, (r = this.m) == null || r.close(), this.m = void 0;
  }
};
function Ie(e, t) {
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
function ha(e) {
  var t = Ie(e, 0);
  if (!t) {
    t = yt(e);
    const r = Gr(e), n = new Uint8Array(e.width * e.height * 4);
    Br(r, t, hr(e)), t.readPixels(0, 0, e.width, e.height, t.RGBA, t.UNSIGNED_BYTE, n), is(r), t = new ImageData(new Uint8ClampedArray(n.buffer), e.width, e.height), e.g.push(t);
  }
  return t;
}
function hr(e) {
  let t = Ie(e, 2);
  if (!t) {
    const r = yt(e);
    t = lr(e);
    const n = Ie(e, 1) || ha(e);
    r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, n), It(e);
  }
  return t;
}
function yt(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
  return e.h || (e.h = Z(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function Gr(e) {
  return e.l || (e.l = new kt()), e.l;
}
function lr(e) {
  const t = yt(e);
  t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0);
  let r = Ie(e, 2);
  return r || (r = Ze(Gr(e), t), e.g.push(r), e.m = !0), t.bindTexture(t.TEXTURE_2D, r), r;
}
function It(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
function qs(e) {
  const t = yt(e);
  return qt(Gr(e), t, !0, (() => (function(r, n) {
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
  return Ws(n * (1 - (e - t) / (r - t)) + s * (1 - (r - e) / (r - t)), n, s);
}, q.clamp = Ws;
var V = class {
  constructor(e, t, r, n, s, o, i) {
    this.g = e, this.j = t, this.m = r, this.canvas = n, this.l = s, this.width = o, this.height = i, (this.j || this.m) && --Ks === 0 && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.");
  }
  Ka() {
    return !!Ie(this, 0);
  }
  la() {
    return !!Ie(this, 1);
  }
  P() {
    return !!Ie(this, 2);
  }
  Ia() {
    return ha(this);
  }
  Ha() {
    var e = Ie(this, 1);
    return e || (hr(this), lr(this), e = qs(this), It(this), this.g.push(e), this.j = !0), e;
  }
  K() {
    return hr(this);
  }
  clone() {
    const e = [];
    for (const t of this.g) {
      let r;
      if (t instanceof ImageData) r = new ImageData(t.data, this.width, this.height);
      else if (t instanceof WebGLTexture) {
        const n = yt(this), s = Gr(this);
        n.activeTexture(n.TEXTURE1), r = Ze(s, n), n.bindTexture(n.TEXTURE_2D, r), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, this.width, this.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.bindTexture(n.TEXTURE_2D, null), Br(s, n, r), qt(s, n, !1, (() => {
          lr(this), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLE_FAN, 0, 4), It(this);
        })), is(s), It(this);
      } else {
        if (!(t instanceof ImageBitmap)) throw Error(`Type is not supported: ${t}`);
        hr(this), lr(this), r = qs(this), It(this);
      }
      e.push(r);
    }
    return new V(e, this.la(), this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Ie(this, 1).close(), this.m && yt(this).deleteTexture(Ie(this, 2)), Ks = -1;
  }
};
V.prototype.close = V.prototype.close, V.prototype.clone = V.prototype.clone, V.prototype.getAsWebGLTexture = V.prototype.K, V.prototype.getAsImageBitmap = V.prototype.Ha, V.prototype.getAsImageData = V.prototype.Ia, V.prototype.hasWebGLTexture = V.prototype.P, V.prototype.hasImageBitmap = V.prototype.la, V.prototype.hasImageData = V.prototype.Ka;
var Ks = 250;
function xe(...e) {
  return e.map((([t, r]) => ({ start: t, end: r })));
}
const m1 = /* @__PURE__ */ (function(e) {
  return class extends e {
    Ra() {
      this.i._registerModelResourcesGraphService();
    }
  };
})((Js = class {
  constructor(e, t) {
    this.l = !0, this.i = e, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", t !== void 0 ? this.i.canvas = t : typeof OffscreenCanvas > "u" || oa() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
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
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), p(this, n || "input_audio", ((o) => {
      p(this, s = s || "audio_header", ((i) => {
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
    Pe(this, "__graph_config__", ((t) => {
      e(t);
    })), p(this, "__graph_config__", ((t) => {
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
    this.h !== o && (this.g && this.i._free(this.g), this.g = this.i._malloc(o), this.h = o), this.i.HEAPF32.set(e, this.g / 4), p(this, n, ((i) => {
      this.i._addAudioToInputStream(this.g, t, r, i, s);
    }));
  }
  addGpuBufferToStream(e, t, r) {
    p(this, t, ((n) => {
      const [s, o] = Ns(this, e, n);
      this.i._addBoundTextureToStream(n, s, o, r);
    }));
  }
  addBoolToStream(e, t, r) {
    p(this, t, ((n) => {
      this.i._addBoolToInputStream(e, n, r);
    }));
  }
  addDoubleToStream(e, t, r) {
    p(this, t, ((n) => {
      this.i._addDoubleToInputStream(e, n, r);
    }));
  }
  addFloatToStream(e, t, r) {
    p(this, t, ((n) => {
      this.i._addFloatToInputStream(e, n, r);
    }));
  }
  addIntToStream(e, t, r) {
    p(this, t, ((n) => {
      this.i._addIntToInputStream(e, n, r);
    }));
  }
  addStringToStream(e, t, r) {
    p(this, t, ((n) => {
      p(this, e, ((s) => {
        this.i._addStringToInputStream(s, n, r);
      }));
    }));
  }
  addStringRecordToStream(e, t, r) {
    p(this, t, ((n) => {
      Bs(this, Object.keys(e), ((s) => {
        Bs(this, Object.values(e), ((o) => {
          this.i._addFlatHashMapToInputStream(s, o, Object.keys(e).length, n, r);
        }));
      }));
    }));
  }
  addProtoToStream(e, t, r, n) {
    p(this, r, ((s) => {
      p(this, t, ((o) => {
        const i = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, i), this.i._addProtoToInputStream(i, e.length, o, s, n), this.i._free(i);
      }));
    }));
  }
  addEmptyPacketToStream(e, t) {
    p(this, e, ((r) => {
      this.i._addEmptyPacketToInputStream(r, t);
    }));
  }
  addBoolVectorToStream(e, t, r) {
    p(this, t, ((n) => {
      const s = this.i._allocateBoolVector(e.length);
      if (!s) throw Error("Unable to allocate new bool vector on heap.");
      for (const o of e) this.i._addBoolVectorEntry(s, o);
      this.i._addBoolVectorToInputStream(s, n, r);
    }));
  }
  addDoubleVectorToStream(e, t, r) {
    p(this, t, ((n) => {
      const s = this.i._allocateDoubleVector(e.length);
      if (!s) throw Error("Unable to allocate new double vector on heap.");
      for (const o of e) this.i._addDoubleVectorEntry(s, o);
      this.i._addDoubleVectorToInputStream(s, n, r);
    }));
  }
  addFloatVectorToStream(e, t, r) {
    p(this, t, ((n) => {
      const s = this.i._allocateFloatVector(e.length);
      if (!s) throw Error("Unable to allocate new float vector on heap.");
      for (const o of e) this.i._addFloatVectorEntry(s, o);
      this.i._addFloatVectorToInputStream(s, n, r);
    }));
  }
  addIntVectorToStream(e, t, r) {
    p(this, t, ((n) => {
      const s = this.i._allocateIntVector(e.length);
      if (!s) throw Error("Unable to allocate new int vector on heap.");
      for (const o of e) this.i._addIntVectorEntry(s, o);
      this.i._addIntVectorToInputStream(s, n, r);
    }));
  }
  addStringVectorToStream(e, t, r) {
    p(this, t, ((n) => {
      const s = this.i._allocateStringVector(e.length);
      if (!s) throw Error("Unable to allocate new string vector on heap.");
      for (const o of e) p(this, o, ((i) => {
        this.i._addStringVectorEntry(s, i);
      }));
      this.i._addStringVectorToInputStream(s, n, r);
    }));
  }
  addBoolToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      this.i._addBoolToInputSidePacket(e, r);
    }));
  }
  addDoubleToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      this.i._addDoubleToInputSidePacket(e, r);
    }));
  }
  addFloatToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      this.i._addFloatToInputSidePacket(e, r);
    }));
  }
  addIntToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      this.i._addIntToInputSidePacket(e, r);
    }));
  }
  addStringToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      p(this, e, ((n) => {
        this.i._addStringToInputSidePacket(n, r);
      }));
    }));
  }
  addProtoToInputSidePacket(e, t, r) {
    p(this, r, ((n) => {
      p(this, t, ((s) => {
        const o = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, o), this.i._addProtoToInputSidePacket(o, e.length, s, n), this.i._free(o);
      }));
    }));
  }
  addBoolVectorToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      const n = this.i._allocateBoolVector(e.length);
      if (!n) throw Error("Unable to allocate new bool vector on heap.");
      for (const s of e) this.i._addBoolVectorEntry(n, s);
      this.i._addBoolVectorToInputSidePacket(n, r);
    }));
  }
  addDoubleVectorToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      const n = this.i._allocateDoubleVector(e.length);
      if (!n) throw Error("Unable to allocate new double vector on heap.");
      for (const s of e) this.i._addDoubleVectorEntry(n, s);
      this.i._addDoubleVectorToInputSidePacket(n, r);
    }));
  }
  addFloatVectorToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      const n = this.i._allocateFloatVector(e.length);
      if (!n) throw Error("Unable to allocate new float vector on heap.");
      for (const s of e) this.i._addFloatVectorEntry(n, s);
      this.i._addFloatVectorToInputSidePacket(n, r);
    }));
  }
  addIntVectorToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      const n = this.i._allocateIntVector(e.length);
      if (!n) throw Error("Unable to allocate new int vector on heap.");
      for (const s of e) this.i._addIntVectorEntry(n, s);
      this.i._addIntVectorToInputSidePacket(n, r);
    }));
  }
  addStringVectorToInputSidePacket(e, t) {
    p(this, t, ((r) => {
      const n = this.i._allocateStringVector(e.length);
      if (!n) throw Error("Unable to allocate new string vector on heap.");
      for (const s of e) p(this, s, ((o) => {
        this.i._addStringVectorEntry(n, o);
      }));
      this.i._addStringVectorToInputSidePacket(n, r);
    }));
  }
  attachBoolListener(e, t) {
    Pe(this, e, t), p(this, e, ((r) => {
      this.i._attachBoolListener(r);
    }));
  }
  attachBoolVectorListener(e, t) {
    nt(this, e, t), p(this, e, ((r) => {
      this.i._attachBoolVectorListener(r);
    }));
  }
  attachIntListener(e, t) {
    Pe(this, e, t), p(this, e, ((r) => {
      this.i._attachIntListener(r);
    }));
  }
  attachIntVectorListener(e, t) {
    nt(this, e, t), p(this, e, ((r) => {
      this.i._attachIntVectorListener(r);
    }));
  }
  attachDoubleListener(e, t) {
    Pe(this, e, t), p(this, e, ((r) => {
      this.i._attachDoubleListener(r);
    }));
  }
  attachDoubleVectorListener(e, t) {
    nt(this, e, t), p(this, e, ((r) => {
      this.i._attachDoubleVectorListener(r);
    }));
  }
  attachFloatListener(e, t) {
    Pe(this, e, t), p(this, e, ((r) => {
      this.i._attachFloatListener(r);
    }));
  }
  attachFloatVectorListener(e, t) {
    nt(this, e, t), p(this, e, ((r) => {
      this.i._attachFloatVectorListener(r);
    }));
  }
  attachStringListener(e, t) {
    Pe(this, e, t), p(this, e, ((r) => {
      this.i._attachStringListener(r);
    }));
  }
  attachStringVectorListener(e, t) {
    nt(this, e, t), p(this, e, ((r) => {
      this.i._attachStringVectorListener(r);
    }));
  }
  attachProtoListener(e, t, r) {
    Pe(this, e, t), p(this, e, ((n) => {
      this.i._attachProtoListener(n, r || !1);
    }));
  }
  attachProtoVectorListener(e, t, r) {
    nt(this, e, t), p(this, e, ((n) => {
      this.i._attachProtoVectorListener(n, r || !1);
    }));
  }
  attachAudioListener(e, t, r) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Pe(this, e, ((n, s) => {
      n = new Float32Array(n.buffer, n.byteOffset, n.length / 4), t(n, s);
    })), p(this, e, ((n) => {
      this.i._attachAudioListener(n, r || !1);
    }));
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Js {
  get fa() {
    return this.i;
  }
  va(e, t, r) {
    p(this, t, ((n) => {
      const [s, o] = Ns(this, e, n);
      this.fa._addBoundTextureAsImageToStream(n, s, o, r);
    }));
  }
  ba(e, t) {
    Pe(this, e, t), p(this, e, ((r) => {
      this.fa._attachImageListener(r);
    }));
  }
  ca(e, t) {
    nt(this, e, t), p(this, e, ((r) => {
      this.fa._attachImageVectorListener(r);
    }));
  }
}));
var Js, Fe = class extends m1 {
};
async function w(e, t, r) {
  return (async function(n, s, o, i) {
    return u1(n, s, o, i);
  })(e, r.canvas ?? (typeof OffscreenCanvas > "u" || oa() ? document.createElement("canvas") : void 0), t, r);
}
function la(e, t, r, n) {
  if (e.J) {
    const o = new Ai();
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
        r = $(o, 3) * c / i, s = $(o, 4) * i / c, y(o, 4, r), y(o, 3, s);
      }
    }
    e.g.addProtoToStream(o.g(), "mediapipe.NormalizedRect", e.J, n);
  }
  e.g.va(t, e.T, n ?? performance.now()), e.finishProcessing();
}
function Me(e, t, r) {
  var n;
  if ((n = e.baseOptions) != null && n.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  la(e, t, r, e.I + 1);
}
function je(e, t, r, n) {
  var s;
  if (!((s = e.baseOptions) != null && s.g())) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  la(e, t, r, n);
}
function jt(e, t, r, n) {
  var s = t.data;
  const o = t.width, i = o * (t = t.height);
  if ((s instanceof Uint8Array || s instanceof Float32Array) && s.length !== i) throw Error("Unsupported channel count: " + s.length / i);
  return e = new B([s], r, !1, e.g.i.canvas, e.M, o, t), n ? e.clone() : e;
}
var ie = class extends Tr {
  constructor(e, t, r, n) {
    super(e), this.g = e, this.T = t, this.J = r, this.U = n, this.M = new kt();
  }
  l(e, t = !0) {
    if ("runningMode" in e && Nt(this.baseOptions, 2, !!e.runningMode && e.runningMode !== "IMAGE"), e.canvas !== void 0 && this.g.i.canvas !== e.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(e, t);
  }
  close() {
    this.M.close(), super.close();
  }
};
ie.prototype.close = ie.prototype.close;
var le = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect_in", !1), this.j = { detections: [] }, m(e = this.h = new Zn(), 0, 1, t = new U()), y(this.h, 2, 0.5), y(this.h, 3, 0.3);
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "minDetectionConfidence" in e && y(this.h, 2, e.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in e && y(this.h, 3, e.minSuppressionThreshold ?? 0.3), this.l(e);
  }
  G(e, t) {
    return this.j = { detections: [] }, Me(this, e, t), this.j;
  }
  H(e, t, r) {
    return this.j = { detections: [] }, je(this, e, r, t), this.j;
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect_in"), C(e, "detections");
    const t = new ve();
    Ae(t, Y2, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect_in"), A(r, "DETECTIONS:detections"), r.o(t), Te(e, r), this.g.attachProtoVectorListener("detections", ((n, s) => {
      for (const o of n) n = vi(o), this.j.detections.push(ra(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
le.prototype.detectForVideo = le.prototype.H, le.prototype.detect = le.prototype.G, le.prototype.setOptions = le.prototype.o, le.createFromModelPath = async function(e, t) {
  return w(le, e, { baseOptions: { modelAssetPath: t } });
}, le.createFromModelBuffer = function(e, t) {
  return w(le, e, { baseOptions: { modelAssetBuffer: t } });
}, le.createFromOptions = function(e, t) {
  return w(le, e, t);
};
var ua = xe([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]), da = xe([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]), fa = xe([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]), y1 = xe([474, 475], [475, 476], [476, 477], [477, 474]), pa = xe([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]), ga = xe([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]), v1 = xe([469, 470], [470, 471], [471, 472], [472, 469]), ma = xe([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]), w1 = [...ua, ...da, ...fa, ...pa, ...ga, ...ma], _1 = xe([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function Zs(e) {
  e.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var O = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect", !1), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, m(e = this.h = new Di(), 0, 1, t = new U()), this.v = new q2(), m(this.h, 0, 3, this.v), this.u = new Zn(), m(this.h, 0, 2, this.u), Le(this.u, 4, 1), y(this.u, 2, 0.5), y(this.v, 2, 0.5), y(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "numFaces" in e && Le(this.u, 4, e.numFaces ?? 1), "minFaceDetectionConfidence" in e && y(this.u, 2, e.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.h, 4, e.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in e && y(this.v, 2, e.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in e && (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in e && (this.outputFacialTransformationMatrixes = !!e.outputFacialTransformationMatrixes), this.l(e);
  }
  G(e, t) {
    return Zs(this), Me(this, e, t), this.j;
  }
  H(e, t, r) {
    return Zs(this), je(this, e, r, t), this.j;
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect"), C(e, "face_landmarks");
    const t = new ve();
    Ae(t, K2, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "NORM_LANDMARKS:face_landmarks"), r.o(t), Te(e, r), this.g.attachProtoVectorListener("face_landmarks", ((n, s) => {
      for (const o of n) n = Ur(o), this.j.faceLandmarks.push(rs(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("face_landmarks", ((n) => {
      g(this, n);
    })), this.outputFaceBlendshapes && (C(e, "blendshapes"), A(r, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", ((n, s) => {
      if (this.outputFaceBlendshapes) for (const o of n) n = Kn(o), this.j.faceBlendshapes.push(ta(n.g() ?? []));
      g(this, s);
    })), this.g.attachEmptyPacketListener("blendshapes", ((n) => {
      g(this, n);
    }))), this.outputFacialTransformationMatrixes && (C(e, "face_geometry"), A(r, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", ((n, s) => {
      if (this.outputFacialTransformationMatrixes) for (const o of n) (n = _($2(o), bi, 2)) && this.j.facialTransformationMatrixes.push({ rows: Ce(ge(n, 1)) ?? 0, columns: Ce(ge(n, 2)) ?? 0, data: lt(n, 3, Qe) ?? [] });
      g(this, s);
    })), this.g.attachEmptyPacketListener("face_geometry", ((n) => {
      g(this, n);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
O.prototype.detectForVideo = O.prototype.H, O.prototype.detect = O.prototype.G, O.prototype.setOptions = O.prototype.o, O.createFromModelPath = function(e, t) {
  return w(O, e, { baseOptions: { modelAssetPath: t } });
}, O.createFromModelBuffer = function(e, t) {
  return w(O, e, { baseOptions: { modelAssetBuffer: t } });
}, O.createFromOptions = function(e, t) {
  return w(O, e, t);
}, O.FACE_LANDMARKS_LIPS = ua, O.FACE_LANDMARKS_LEFT_EYE = da, O.FACE_LANDMARKS_LEFT_EYEBROW = fa, O.FACE_LANDMARKS_LEFT_IRIS = y1, O.FACE_LANDMARKS_RIGHT_EYE = pa, O.FACE_LANDMARKS_RIGHT_EYEBROW = ga, O.FACE_LANDMARKS_RIGHT_IRIS = v1, O.FACE_LANDMARKS_FACE_OVAL = ma, O.FACE_LANDMARKS_CONTOURS = w1, O.FACE_LANDMARKS_TESSELATION = _1;
var Ee = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect", !0), m(e = this.j = new Ui(), 0, 1, t = new U());
  }
  get baseOptions() {
    return _(this.j, U, 1);
  }
  set baseOptions(e) {
    m(this.j, 0, 1, e);
  }
  o(e) {
    return super.l(e);
  }
  Ua(e, t, r) {
    const n = typeof t != "function" ? t : {};
    if (this.h = typeof t == "function" ? t : r, Me(this, e, n ?? {}), !this.h) return this.u;
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect"), C(e, "stylized_image");
    const t = new ve();
    Ae(t, J2, this.j);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "STYLIZED_IMAGE:stylized_image"), r.o(t), Te(e, r), this.g.ba("stylized_image", ((n, s) => {
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
      c = new V([i], !1, !1, this.g.i.canvas, this.M, c, n), this.u = o = o ? c.clone() : c, this.h && this.h(o), g(this, s);
    })), this.g.attachEmptyPacketListener("stylized_image", ((n) => {
      this.u = null, this.h && this.h(null), g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Ee.prototype.stylize = Ee.prototype.Ua, Ee.prototype.setOptions = Ee.prototype.o, Ee.createFromModelPath = function(e, t) {
  return w(Ee, e, { baseOptions: { modelAssetPath: t } });
}, Ee.createFromModelBuffer = function(e, t) {
  return w(Ee, e, { baseOptions: { modelAssetBuffer: t } });
}, Ee.createFromOptions = function(e, t) {
  return w(Ee, e, t);
};
var ya = xe([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function Qs(e) {
  e.gestures = [], e.landmarks = [], e.worldLandmarks = [], e.handedness = [];
}
function eo(e) {
  return e.gestures.length === 0 ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: e.gestures, landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handedness: e.handedness, handednesses: e.handedness };
}
function to(e, t = !0) {
  const r = [];
  for (const s of e) {
    var n = Kn(s);
    e = [];
    for (const o of n.g()) n = t && ge(o, 1) != null ? Ce(ge(o, 1)) : -1, e.push({ score: $(o, 2) ?? 0, index: n, categoryName: ye(o, 3) ?? "" ?? "", displayName: ye(o, 4) ?? "" ?? "" });
    r.push(e);
  }
  return r;
}
var re = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], m(e = this.v = new Hi(), 0, 1, t = new U()), this.B = new Qn(), m(this.v, 0, 2, this.B), this.u = new Xi(), m(this.B, 0, 3, this.u), this.h = new ji(), m(this.B, 0, 2, this.h), this.j = new Z2(), m(this.v, 0, 3, this.j), y(this.h, 2, 0.5), y(this.B, 4, 0.5), y(this.u, 2, 0.5);
  }
  get baseOptions() {
    return _(this.v, U, 1);
  }
  set baseOptions(e) {
    m(this.v, 0, 1, e);
  }
  o(e) {
    var s, o, i, c;
    if (Le(this.h, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && y(this.h, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.B, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && y(this.u, 2, e.minHandPresenceConfidence ?? 0.5), e.cannedGesturesClassifierOptions) {
      var t = new ht(), r = t, n = fn(e.cannedGesturesClassifierOptions, (s = _(this.j, ht, 3)) == null ? void 0 : s.h());
      m(r, 0, 2, n), m(this.j, 0, 3, t);
    } else e.cannedGesturesClassifierOptions === void 0 && ((o = _(this.j, ht, 3)) == null || o.g());
    return e.customGesturesClassifierOptions ? (m(r = t = new ht(), 0, 2, n = fn(e.customGesturesClassifierOptions, (i = _(this.j, ht, 4)) == null ? void 0 : i.h())), m(this.j, 0, 4, t)) : e.customGesturesClassifierOptions === void 0 && ((c = _(this.j, ht, 4)) == null || c.g()), this.l(e);
  }
  Pa(e, t) {
    return Qs(this), Me(this, e, t), eo(this);
  }
  Qa(e, t, r) {
    return Qs(this), je(this, e, r, t), eo(this);
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect"), C(e, "hand_gestures"), C(e, "hand_landmarks"), C(e, "world_hand_landmarks"), C(e, "handedness");
    const t = new ve();
    Ae(t, t1, this.v);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "HAND_GESTURES:hand_gestures"), A(r, "LANDMARKS:hand_landmarks"), A(r, "WORLD_LANDMARKS:world_hand_landmarks"), A(r, "HANDEDNESS:handedness"), r.o(t), Te(e, r), this.g.attachProtoVectorListener("hand_landmarks", ((n, s) => {
      for (const o of n) {
        n = Ur(o);
        const i = [];
        for (const c of Ge(n, Ti, 1)) i.push({ x: $(c, 1) ?? 0, y: $(c, 2) ?? 0, z: $(c, 3) ?? 0 });
        this.landmarks.push(i);
      }
      g(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((n, s) => {
      for (const o of n) {
        n = Jn(o);
        const i = [];
        for (const c of Ge(n, wi, 1)) i.push({ x: $(c, 1) ?? 0, y: $(c, 2) ?? 0, z: $(c, 3) ?? 0 });
        this.worldLandmarks.push(i);
      }
      g(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("hand_gestures", ((n, s) => {
      this.gestures.push(...to(n, !1)), g(this, s);
    })), this.g.attachEmptyPacketListener("hand_gestures", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("handedness", ((n, s) => {
      this.handedness.push(...to(n)), g(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
function ro(e) {
  return { landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handednesses: e.handedness, handedness: e.handedness };
}
re.prototype.recognizeForVideo = re.prototype.Qa, re.prototype.recognize = re.prototype.Pa, re.prototype.setOptions = re.prototype.o, re.createFromModelPath = function(e, t) {
  return w(re, e, { baseOptions: { modelAssetPath: t } });
}, re.createFromModelBuffer = function(e, t) {
  return w(re, e, { baseOptions: { modelAssetBuffer: t } });
}, re.createFromOptions = function(e, t) {
  return w(re, e, t);
}, re.HAND_CONNECTIONS = ya;
var ne = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], m(e = this.j = new Qn(), 0, 1, t = new U()), this.u = new Xi(), m(this.j, 0, 3, this.u), this.h = new ji(), m(this.j, 0, 2, this.h), Le(this.h, 3, 1), y(this.h, 2, 0.5), y(this.u, 2, 0.5), y(this.j, 4, 0.5);
  }
  get baseOptions() {
    return _(this.j, U, 1);
  }
  set baseOptions(e) {
    m(this.j, 0, 1, e);
  }
  o(e) {
    return "numHands" in e && Le(this.h, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && y(this.h, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.j, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && y(this.u, 2, e.minHandPresenceConfidence ?? 0.5), this.l(e);
  }
  G(e, t) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Me(this, e, t), ro(this);
  }
  H(e, t, r) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], je(this, e, r, t), ro(this);
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect"), C(e, "hand_landmarks"), C(e, "world_hand_landmarks"), C(e, "handedness");
    const t = new ve();
    Ae(t, e1, this.j);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "LANDMARKS:hand_landmarks"), A(r, "WORLD_LANDMARKS:world_hand_landmarks"), A(r, "HANDEDNESS:handedness"), r.o(t), Te(e, r), this.g.attachProtoVectorListener("hand_landmarks", ((n, s) => {
      for (const o of n) n = Ur(o), this.landmarks.push(rs(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((n, s) => {
      for (const o of n) n = Jn(o), this.worldLandmarks.push(na(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((n) => {
      g(this, n);
    })), this.g.attachProtoVectorListener("handedness", ((n, s) => {
      var o = this.handedness, i = o.push;
      const c = [];
      for (const a of n) {
        n = Kn(a);
        const h = [];
        for (const l of n.g()) h.push({ score: $(l, 2) ?? 0, index: Ce(ge(l, 1)) ?? -1, categoryName: ye(l, 3) ?? "" ?? "", displayName: ye(l, 4) ?? "" ?? "" });
        c.push(h);
      }
      i.call(o, ...c), g(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ne.prototype.detectForVideo = ne.prototype.H, ne.prototype.detect = ne.prototype.G, ne.prototype.setOptions = ne.prototype.o, ne.createFromModelPath = function(e, t) {
  return w(ne, e, { baseOptions: { modelAssetPath: t } });
}, ne.createFromModelBuffer = function(e, t) {
  return w(ne, e, { baseOptions: { modelAssetBuffer: t } });
}, ne.createFromOptions = function(e, t) {
  return w(ne, e, t);
}, ne.HAND_CONNECTIONS = ya;
var ue = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "input_image", "norm_rect", !0), this.j = { classifications: [] }, m(e = this.h = new Yi(), 0, 1, t = new U());
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return m(this.h, 0, 2, fn(e, _(this.h, Nr, 2))), this.l(e);
  }
  ya(e, t) {
    return this.j = { classifications: [] }, Me(this, e, t), this.j;
  }
  za(e, t, r) {
    return this.j = { classifications: [] }, je(this, e, r, t), this.j;
  }
  m() {
    var e = new he();
    R(e, "input_image"), R(e, "norm_rect"), C(e, "classifications");
    const t = new ve();
    Ae(t, r1, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), M(r, "IMAGE:input_image"), M(r, "NORM_RECT:norm_rect"), A(r, "CLASSIFICATIONS:classifications"), r.o(t), Te(e, r), this.g.attachProtoListener("classifications", ((n, s) => {
      this.j = (function(o) {
        const i = { classifications: Ge(o, B2, 1).map(((c) => {
          var a;
          return ta(((a = _(c, qn, 4)) == null ? void 0 : a.g()) ?? [], Ce(ge(c, 2)), ye(c, 3) ?? "");
        })) };
        return mr(pt(o, 2)) != null && (i.timestampMs = Ce(mr(pt(o, 2)))), i;
      })(j2(n)), g(this, s);
    })), this.g.attachEmptyPacketListener("classifications", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ue.prototype.classifyForVideo = ue.prototype.za, ue.prototype.classify = ue.prototype.ya, ue.prototype.setOptions = ue.prototype.o, ue.createFromModelPath = function(e, t) {
  return w(ue, e, { baseOptions: { modelAssetPath: t } });
}, ue.createFromModelBuffer = function(e, t) {
  return w(ue, e, { baseOptions: { modelAssetBuffer: t } });
}, ue.createFromOptions = function(e, t) {
  return w(ue, e, t);
};
var se = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect", !0), this.h = new $i(), this.embeddings = { embeddings: [] }, m(e = this.h, 0, 1, t = new U());
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    var t = this.h, r = _(this.h, Rs, 2);
    return r = r ? r.clone() : new Rs(), e.l2Normalize !== void 0 ? Nt(r, 1, e.l2Normalize) : "l2Normalize" in e && x(r, 1), e.quantize !== void 0 ? Nt(r, 2, e.quantize) : "quantize" in e && x(r, 2), m(t, 0, 2, r), this.l(e);
  }
  Fa(e, t) {
    return Me(this, e, t), this.embeddings;
  }
  Ga(e, t, r) {
    return je(this, e, r, t), this.embeddings;
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect"), C(e, "embeddings_out");
    const t = new ve();
    Ae(t, n1, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "EMBEDDINGS:embeddings_out"), r.o(t), Te(e, r), this.g.attachProtoListener("embeddings_out", ((n, s) => {
      n = W2(n), this.embeddings = (function(o) {
        return { embeddings: Ge(o, X2, 1).map(((i) => {
          var a, h;
          const c = { headIndex: Ce(ge(i, 3)) ?? -1, headName: ye(i, 4) ?? "" ?? "" };
          if (Xo(i, un, Yr(i, 1)) !== void 0) i = lt(i = _(i, un, Yr(i, 1)), 1, Qe), c.floatEmbedding = i;
          else {
            const l = new Uint8Array(0);
            c.quantizedEmbedding = ((h = (a = _(i, V2, Yr(i, 2))) == null ? void 0 : a.ua()) == null ? void 0 : h.wa()) ?? l;
          }
          return c;
        })), timestampMs: Ce(mr(pt(o, 2))) };
      })(n), g(this, s);
    })), this.g.attachEmptyPacketListener("embeddings_out", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
se.cosineSimilarity = function(e, t) {
  if (e.floatEmbedding && t.floatEmbedding) e = Ps(e.floatEmbedding, t.floatEmbedding);
  else {
    if (!e.quantizedEmbedding || !t.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    e = Ps(Ds(e.quantizedEmbedding), Ds(t.quantizedEmbedding));
  }
  return e;
}, se.prototype.embedForVideo = se.prototype.Ga, se.prototype.embed = se.prototype.Fa, se.prototype.setOptions = se.prototype.o, se.createFromModelPath = function(e, t) {
  return w(se, e, { baseOptions: { modelAssetPath: t } });
}, se.createFromModelBuffer = function(e, t) {
  return w(se, e, { baseOptions: { modelAssetBuffer: t } });
}, se.createFromOptions = function(e, t) {
  return w(se, e, t);
};
var Er = class {
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
function no(e) {
  e.categoryMask = void 0, e.confidenceMasks = void 0, e.qualityScores = void 0;
}
function so(e) {
  try {
    const t = new Er(e.confidenceMasks, e.categoryMask, e.qualityScores);
    if (!e.j) return t;
    e.j(t);
  } finally {
    ss(e);
  }
}
Er.prototype.close = Er.prototype.close;
var K = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new es(), this.v = new qi(), m(this.h, 0, 3, this.v), m(e = this.h, 0, 1, t = new U());
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? x(this.h, 2, Ht(e.displayNamesLocale)) : "displayNamesLocale" in e && x(this.h, 2), "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  N() {
    (function(e) {
      var r, n;
      const t = Ge(e.da(), ee, 1).filter(((s) => (ye(s, 1) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));
      if (e.u = [], 1 < t.length) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      t.length === 1 && (((n = (r = _(t[0], ve, 7)) == null ? void 0 : r.l()) == null ? void 0 : n.g()) ?? /* @__PURE__ */ new Map()).forEach(((s, o) => {
        e.u[Number(o)] = ye(s, 1) ?? "";
      }));
    })(this);
  }
  ea(e, t, r) {
    const n = typeof t != "function" ? t : {};
    return this.j = typeof t == "function" ? t : r, no(this), Me(this, e, n), so(this);
  }
  Sa(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    return this.j = typeof r == "function" ? r : n, no(this), je(this, e, s, t), so(this);
  }
  Ja() {
    return this.u;
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect");
    const t = new ve();
    Ae(t, Ji, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), r.o(t), Te(e, r), ns(this, e), this.outputConfidenceMasks && (C(e, "confidence_masks"), A(r, "CONFIDENCE_MASKS:confidence_masks"), Bt(this, "confidence_masks"), this.g.ca("confidence_masks", ((n, s) => {
      this.confidenceMasks = n.map(((o) => jt(this, o, !0, !this.j))), g(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((n) => {
      this.confidenceMasks = [], g(this, n);
    }))), this.outputCategoryMask && (C(e, "category_mask"), A(r, "CATEGORY_MASK:category_mask"), Bt(this, "category_mask"), this.g.ba("category_mask", ((n, s) => {
      this.categoryMask = jt(this, n, !1, !this.j), g(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((n) => {
      this.categoryMask = void 0, g(this, n);
    }))), C(e, "quality_scores"), A(r, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((n, s) => {
      this.qualityScores = n, g(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((n) => {
      this.categoryMask = void 0, g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
K.prototype.getLabels = K.prototype.Ja, K.prototype.segmentForVideo = K.prototype.Sa, K.prototype.segment = K.prototype.ea, K.prototype.setOptions = K.prototype.o, K.createFromModelPath = function(e, t) {
  return w(K, e, { baseOptions: { modelAssetPath: t } });
}, K.createFromModelBuffer = function(e, t) {
  return w(K, e, { baseOptions: { modelAssetBuffer: t } });
}, K.createFromOptions = function(e, t) {
  return w(K, e, t);
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
br.prototype.close = br.prototype.close;
var T1 = class extends u {
  constructor(e) {
    super(e);
  }
}, vt = [0, N, -2], E1 = [0, Be, -3, j], jr = [0, Be, -3, j, Be, -1], va = [0, jr], b1 = [0, va, vt], A1 = [0, jr, vt], wa = [0, jr, N, -1], k1 = [0, wa, vt], x1 = [0, Be, -3, j, vt, -1], F1 = [0, Be, -3, j, Re], Jr = class extends u {
  constructor(e) {
    super(e);
  }
}, oo = [0, Be, -1, j], _a = class extends u {
  constructor() {
    super();
  }
};
_a.A = [1];
var io = class extends u {
  constructor(e) {
    super(e);
  }
}, mn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15], M1 = [0, mn, S, jr, S, A1, S, va, S, b1, S, oo, S, F1, S, E1, S, [0, I, Be, -2, j, N, j, -1, 2, Be, vt], S, wa, S, k1, Be, vt, I, S, x1, S, [0, X, oo]], I1 = [0, I, N, -1, j], yn = class extends u {
  constructor() {
    super();
  }
};
yn.A = [1], yn.prototype.g = $n([0, X, M1, I, I1]);
var be = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new es(), this.v = new qi(), m(this.h, 0, 3, this.v), m(e = this.h, 0, 1, t = new U());
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  ea(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    this.j = typeof r == "function" ? r : n, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, r = this.I + 1, n = new yn();
    const o = new io();
    var i = new T1();
    if (Le(i, 1, 255), m(o, 0, 12, i), t.keypoint && t.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (t.keypoint) {
      var c = new Jr();
      Nt(c, 3, !0), y(c, 1, t.keypoint.x), y(c, 2, t.keypoint.y), Lt(o, 5, mn, c);
    } else {
      if (!t.scribble) throw Error("Must provide either a keypoint or a scribble.");
      for (c of (i = new _a(), t.scribble)) Nt(t = new Jr(), 3, !0), y(t, 1, c.x), y(t, 2, c.y), ln(i, Jr, t);
      Lt(o, 15, mn, i);
    }
    ln(n, io, o), this.g.addProtoToStream(n.g(), "drishti.RenderData", "roi_in", r), Me(this, e, s);
    e: {
      try {
        const h = new br(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var a = h;
          break e;
        }
        this.j(h);
      } finally {
        ss(this);
      }
      a = void 0;
    }
    return a;
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "roi_in"), R(e, "norm_rect_in");
    const t = new ve();
    Ae(t, Ji, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), M(r, "IMAGE:image_in"), M(r, "ROI:roi_in"), M(r, "NORM_RECT:norm_rect_in"), r.o(t), Te(e, r), ns(this, e), this.outputConfidenceMasks && (C(e, "confidence_masks"), A(r, "CONFIDENCE_MASKS:confidence_masks"), Bt(this, "confidence_masks"), this.g.ca("confidence_masks", ((n, s) => {
      this.confidenceMasks = n.map(((o) => jt(this, o, !0, !this.j))), g(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((n) => {
      this.confidenceMasks = [], g(this, n);
    }))), this.outputCategoryMask && (C(e, "category_mask"), A(r, "CATEGORY_MASK:category_mask"), Bt(this, "category_mask"), this.g.ba("category_mask", ((n, s) => {
      this.categoryMask = jt(this, n, !1, !this.j), g(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((n) => {
      this.categoryMask = void 0, g(this, n);
    }))), C(e, "quality_scores"), A(r, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((n, s) => {
      this.qualityScores = n, g(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((n) => {
      this.categoryMask = void 0, g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
be.prototype.segment = be.prototype.ea, be.prototype.setOptions = be.prototype.o, be.createFromModelPath = function(e, t) {
  return w(be, e, { baseOptions: { modelAssetPath: t } });
}, be.createFromModelBuffer = function(e, t) {
  return w(be, e, { baseOptions: { modelAssetBuffer: t } });
}, be.createFromOptions = function(e, t) {
  return w(be, e, t);
};
var de = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "input_frame_gpu", "norm_rect", !1), this.j = { detections: [] }, m(e = this.h = new ts(), 0, 1, t = new U());
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? x(this.h, 2, Ht(e.displayNamesLocale)) : "displayNamesLocale" in e && x(this.h, 2), e.maxResults !== void 0 ? Le(this.h, 3, e.maxResults) : "maxResults" in e && x(this.h, 3), e.scoreThreshold !== void 0 ? y(this.h, 4, e.scoreThreshold) : "scoreThreshold" in e && x(this.h, 4), e.categoryAllowlist !== void 0 ? wr(this.h, 5, e.categoryAllowlist) : "categoryAllowlist" in e && x(this.h, 5), e.categoryDenylist !== void 0 ? wr(this.h, 6, e.categoryDenylist) : "categoryDenylist" in e && x(this.h, 6), this.l(e);
  }
  G(e, t) {
    return this.j = { detections: [] }, Me(this, e, t), this.j;
  }
  H(e, t, r) {
    return this.j = { detections: [] }, je(this, e, r, t), this.j;
  }
  m() {
    var e = new he();
    R(e, "input_frame_gpu"), R(e, "norm_rect"), C(e, "detections");
    const t = new ve();
    Ae(t, o1, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.ObjectDetectorGraph"), M(r, "IMAGE:input_frame_gpu"), M(r, "NORM_RECT:norm_rect"), A(r, "DETECTIONS:detections"), r.o(t), Te(e, r), this.g.attachProtoVectorListener("detections", ((n, s) => {
      for (const o of n) n = vi(o), this.j.detections.push(ra(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((n) => {
      g(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
de.prototype.detectForVideo = de.prototype.H, de.prototype.detect = de.prototype.G, de.prototype.setOptions = de.prototype.o, de.createFromModelPath = async function(e, t) {
  return w(de, e, { baseOptions: { modelAssetPath: t } });
}, de.createFromModelBuffer = function(e, t) {
  return w(de, e, { baseOptions: { modelAssetBuffer: t } });
}, de.createFromOptions = function(e, t) {
  return w(de, e, t);
};
function ao(e) {
  e.landmarks = [], e.worldLandmarks = [], e.v = void 0;
}
function co(e) {
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
    ss(e);
  }
}
var oe = class extends ie {
  constructor(e, t) {
    super(new Fe(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, m(e = this.h = new ea(), 0, 1, t = new U()), this.B = new a1(), m(this.h, 0, 3, this.B), this.j = new i1(), m(this.h, 0, 2, this.j), Le(this.j, 4, 1), y(this.j, 2, 0.5), y(this.B, 2, 0.5), y(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _(this.h, U, 1);
  }
  set baseOptions(e) {
    m(this.h, 0, 1, e);
  }
  o(e) {
    return "numPoses" in e && Le(this.j, 4, e.numPoses ?? 1), "minPoseDetectionConfidence" in e && y(this.j, 2, e.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && y(this.h, 4, e.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in e && y(this.B, 2, e.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in e && (this.outputSegmentationMasks = e.outputSegmentationMasks ?? !1), this.l(e);
  }
  G(e, t, r) {
    const n = typeof t != "function" ? t : {};
    return this.u = typeof t == "function" ? t : r, ao(this), Me(this, e, n), co(this);
  }
  H(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    return this.u = typeof r == "function" ? r : n, ao(this), je(this, e, s, t), co(this);
  }
  m() {
    var e = new he();
    R(e, "image_in"), R(e, "norm_rect"), C(e, "normalized_landmarks"), C(e, "world_landmarks"), C(e, "segmentation_masks");
    const t = new ve();
    Ae(t, h1, this.h);
    const r = new ee();
    _e(r, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), M(r, "IMAGE:image_in"), M(r, "NORM_RECT:norm_rect"), A(r, "NORM_LANDMARKS:normalized_landmarks"), A(r, "WORLD_LANDMARKS:world_landmarks"), r.o(t), Te(e, r), ns(this, e), this.g.attachProtoVectorListener("normalized_landmarks", ((n, s) => {
      this.landmarks = [];
      for (const o of n) n = Ur(o), this.landmarks.push(rs(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("normalized_landmarks", ((n) => {
      this.landmarks = [], g(this, n);
    })), this.g.attachProtoVectorListener("world_landmarks", ((n, s) => {
      this.worldLandmarks = [];
      for (const o of n) n = Jn(o), this.worldLandmarks.push(na(n));
      g(this, s);
    })), this.g.attachEmptyPacketListener("world_landmarks", ((n) => {
      this.worldLandmarks = [], g(this, n);
    })), this.outputSegmentationMasks && (A(r, "SEGMENTATION_MASK:segmentation_masks"), Bt(this, "segmentation_masks"), this.g.ca("segmentation_masks", ((n, s) => {
      this.v = n.map(((o) => jt(this, o, !0, !this.u))), g(this, s);
    })), this.g.attachEmptyPacketListener("segmentation_masks", ((n) => {
      this.v = [], g(this, n);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
oe.prototype.detectForVideo = oe.prototype.H, oe.prototype.detect = oe.prototype.G, oe.prototype.setOptions = oe.prototype.o, oe.createFromModelPath = function(e, t) {
  return w(oe, e, { baseOptions: { modelAssetPath: t } });
}, oe.createFromModelBuffer = function(e, t) {
  return w(oe, e, { baseOptions: { modelAssetBuffer: t } });
}, oe.createFromOptions = function(e, t) {
  return w(oe, e, t);
}, oe.POSE_CONNECTIONS = xe([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
var S1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DrawingUtils: q,
  FaceDetector: le,
  FaceLandmarker: O,
  FaceStylizer: Ee,
  FilesetResolver: Mt,
  GestureRecognizer: re,
  HandLandmarker: ne,
  ImageClassifier: ue,
  ImageEmbedder: se,
  ImageSegmenter: K,
  ImageSegmenterResult: Er,
  InteractiveSegmenter: be,
  InteractiveSegmenterResult: br,
  MPImage: V,
  MPMask: B,
  ObjectDetector: de,
  PoseLandmarker: oe,
  TaskRunner: Tr,
  VisionTaskRunner: ie
});
const vn = (() => {
  const e = {
    loadModelsFromRoot: !1
  };
  return typeof window < "u" ? (window.__vital_sign_camera_global_options__ === void 0 && (window.__vital_sign_camera_global_options__ = e), window.__vital_sign_camera_global_options__) : typeof self < "u" ? (self.__vital_sign_camera_global_options__ === void 0 && (self.__vital_sign_camera_global_options__ = e), self.__vital_sign_camera_global_options__) : e;
})(), { FaceLandmarker: C1, FilesetResolver: L1 } = S1, Ar = class Ar {
  constructor() {
    H(this, "faceLandmarker");
    H(this, "runningMode", "IMAGE");
    H(this, "modelLocation", Xe.CDN);
  }
  get location() {
    return typeof window < "u" && window ? window.location : typeof self < "u" && self ? self.location : { protocol: "http:", host: "localhost" };
  }
  getModelAssetPath(t) {
    switch (t) {
      case Xe.CDN:
        return "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
      case Xe.SelfHosted:
        const { protocol: r, host: n } = this.location, s = "models/mpvision/face_landmarker/face_landmarker/float16/1/face_landmarker.task", o = vn.loadModelsFromRoot ? `${r}//${n}/` : document.baseURI;
        return new URL(s, o).href;
    }
  }
  getWasmPath(t) {
    switch (t) {
      case Xe.CDN:
        return "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9/wasm";
      case Xe.SelfHosted:
        const { protocol: r, host: n } = this.location, s = "models/mpvision/tasks-vision@0.10.9/wasm", o = vn.loadModelsFromRoot ? `${r}//${n}/` : document.baseURI;
        return new URL(s, o).href;
    }
  }
  async createFaceLandmarker(t, r) {
    const n = this.getWasmPath(t || Xe.SelfHosted), s = this.getModelAssetPath(t || Xe.SelfHosted);
    console.log("[MPVisionFaceMeshDetector] WASM path:", n), console.log("[MPVisionFaceMeshDetector] Model asset path:", s), r && r({
      percentage: 10,
      loaded: 0,
      total: 0,
      stage: { type: fe.Downloading, fromCache: !1 }
    });
    let o = null;
    r && (o = new Zr({
      onProgress: r,
      cacheDetectionTimeout: 1e3,
      modelFileIndicators: Ar.MODEL_FILE_INDICATORS,
      module: "mp-vision-face-mesh"
    }), o.start());
    const i = await L1.forVisionTasks(n);
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
      return o && !o.wasIntercepted() && r && (console.log("[MPVisionFaceMeshDetector] Model loaded successfully without network requests - using cached models"), r({
        percentage: 90,
        loaded: 1,
        total: 1,
        stage: { type: fe.Ready, fromCache: !0 }
      })), r && r({
        percentage: 100,
        loaded: 100,
        total: 100,
        stage: { type: fe.Ready, fromCache: !0 }
      }), c;
    } finally {
      o && o.stop();
    }
  }
  async loadModels(t, r) {
    if (console.log("[MPVisionFaceMeshDetector] loadModels called with progress callback:", !!r), this.faceLandmarker && r) {
      console.log("[MPVisionFaceMeshDetector] FaceLandmarker already exists, providing cached progress"), r({
        percentage: 90,
        loaded: 1,
        total: 1,
        stage: { type: fe.Ready, fromCache: !0 }
      }), r({
        percentage: 100,
        loaded: 100,
        total: 100,
        stage: { type: fe.Ready, fromCache: !0 }
      });
      return;
    }
    this.modelLocation = t || this.modelLocation, this.faceLandmarker = await this.createFaceLandmarker(this.modelLocation, r), this.faceLandmarker.detect(await Fa());
  }
  async detect(t) {
    const r = xa(t);
    if (this.faceLandmarker === void 0)
      return { faceBox: void 0, landmarks: [], videoFrame: r };
    const n = this.faceLandmarker.detect(r);
    if (n.faceLandmarks.length === 0)
      return { faceBox: void 0, landmarks: [], videoFrame: r };
    const s = n.faceLandmarks[0];
    return { faceBox: cs(s), landmarks: s, videoFrame: r };
  }
  async detectInWorker(t) {
    if (this.faceLandmarker === void 0)
      return { faceBox: void 0, landmarks: [], videoFrame: t };
    const r = this.faceLandmarker.detect(t);
    if (r.faceLandmarks.length === 0)
      return { faceBox: void 0, landmarks: [], videoFrame: t };
    const n = r.faceLandmarks[0];
    return { faceBox: cs(n), landmarks: n, videoFrame: t };
  }
};
// Model file indicators for MediaPipe Vision
H(Ar, "MODEL_FILE_INDICATORS", [
  ".tflite",
  "face_landmarker",
  ".task",
  ".wasm",
  "mediapipe-models",
  "tasks-vision",
  "cdn.jsdelivr.net",
  "storage.googleapis.com"
]);
let wn = Ar;
const ho = new wn();
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
      await ho.loadModels(s, a);
      const h = { type: "modelsLoaded" };
      self.postMessage({ result: h, hash: r });
    } catch (a) {
      self.postMessage({ error: `${a}`, hash: r });
    }
  }
  if (n === "detect") {
    const { buffer: s, width: o, height: i } = t, c = new ImageData(new Uint8ClampedArray(s), o, i), a = await ho.detectInWorker(c);
    self.postMessage({ result: a, hash: r });
  }
};
