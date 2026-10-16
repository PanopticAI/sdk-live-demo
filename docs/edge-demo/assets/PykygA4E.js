var Ce = Object.defineProperty;
var ke = (t, e, s) => e in t ? Ce(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var M = (t, e, s) => ke(t, typeof e != "symbol" ? e + "" : e, s);
const U = {};
let O = !1;
function xe() {
  var t;
  try {
    const e = (t = globalThis == null ? void 0 : globalThis.location) == null ? void 0 : t.search;
    if (e && new URLSearchParams(e).get("telemetry") === "1" || globalThis.__vital_sign_telemetry__ === !0) return !0;
  } catch {
  }
  return !1;
}
O = xe();
function Te(t) {
  O = t;
}
function Y() {
  return O;
}
function ve(t) {
  return U[t] ?? (U[t] = { count: 0, sum: 0, max: 0, overBudget: 0 });
}
function Fe(t) {
  O && ve(t).count++;
}
function q(t, e, s = 16) {
  if (!O) return;
  const o = ve(t);
  o.count++, o.sum += e, e > o.max && (o.max = e), e > s && o.overBudget++;
}
function he(t, e, s = 16) {
  if (!O) return e();
  const o = performance.now();
  try {
    return e();
  } finally {
    q(t, performance.now() - o, s);
  }
}
function Pe() {
  const t = [];
  for (const e of Object.keys(U)) {
    const s = U[e];
    if (s.count === 0) continue;
    const o = s.sum / s.count;
    t.push(`${e} n=${s.count} avg=${o.toFixed(1)}ms max=${s.max.toFixed(1)}ms >16ms=${s.overBudget}`), delete U[e];
  }
  return t.join(" | ");
}
var N = /* @__PURE__ */ ((t) => (t.Downloading = "downloading", t.Caching = "caching", t.Ready = "ready", t))(N || {});
const W = class W {
  constructor(e = {}) {
    M(this, "originalFetch", null);
    M(this, "isIntercepting", !1);
    M(this, "fetchIntercepted", !1);
    M(this, "progressTimeout");
    M(this, "options");
    // 24 hours
    // Progress tracking for multiple concurrent downloads
    M(this, "activeDownloads", /* @__PURE__ */ new Map());
    M(this, "totalFiles", 0);
    M(this, "completedFiles", 0);
    // Model file indicators
    M(this, "modelFileIndicators");
    // Module name
    M(this, "module");
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
    let e = 0, s = 0;
    for (const a of this.activeDownloads.values())
      e += a.loaded, s += a.total;
    if (s === 0 && this.totalFiles > 0) {
      const a = this.completedFiles / this.totalFiles * 70 + 30;
      this.options.onProgress({
        percentage: Math.min(Math.round(a), 100),
        loaded: this.completedFiles,
        total: this.totalFiles,
        stage: { type: N.Downloading, fromCache: !1 },
        module: this.module
      });
      return;
    }
    const o = 30, r = s > 0 ? e / s * 70 : 0, l = Math.min(o + r, 100);
    this.options.onProgress({
      percentage: Math.round(l),
      loaded: e,
      total: s,
      stage: { type: N.Downloading, fromCache: !1 },
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
      const e = await caches.open(this.CACHE_NAME), s = await e.keys(), o = Date.now();
      for (const r of s) {
        const l = await e.match(r);
        if (l) {
          const a = l.headers.get("x-cached-time");
          if (a && o - parseInt(a) < this.CACHE_EXPIRY_MS)
            return console.log("[ModelFetchInterceptor] Found cached model:", r.url), !0;
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
  static async cacheModel(e, s) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      console.log("[ModelFetchInterceptor] Attempting to cache model:", e);
      const o = await caches.open(this.CACHE_NAME), r = s.clone(), l = new Headers(r.headers);
      l.set("x-cached-time", Date.now().toString());
      const a = new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: l
      });
      await o.put(e, a), console.log("[ModelFetchInterceptor] ✅ Model cached successfully:", e);
    } catch (o) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model:", o);
    }
  }
  /**
   * Store model response in cache with progress tracking
   */
  static async cacheModelWithProgress(e, s, o, r) {
    try {
      if (!("caches" in (typeof window < "u" ? window : self))) {
        console.log("[ModelFetchInterceptor] Cache API not available, skipping cache");
        return;
      }
      if (!s.body) {
        console.log("[ModelFetchInterceptor] No response body to cache");
        return;
      }
      const l = s.headers.get("content-encoding");
      let a = o;
      if (l && o > 0) {
        const y = {
          gzip: 2.5,
          // WASM files typically compress 2.5-3x
          br: 3,
          // Brotli typically compresses 3x
          deflate: 2
          // Deflate typically compresses 2x
        }[l] || 2;
        a = Math.round(o * y), console.log(
          "[ModelFetchInterceptor] 📦 Caching model with progress:",
          e,
          "reported:",
          o,
          "encoding:",
          l,
          "estimated actual:",
          a
        );
      } else
        console.log("[ModelFetchInterceptor] 📦 Caching model with progress:", e, "reported size:", o);
      const i = await caches.open(this.CACHE_NAME);
      let n = 0, d = 0;
      const c = s.body.getReader(), f = [];
      for (; ; ) {
        const { done: g, value: y } = await c.read();
        if (g) break;
        f.push(y), n += y.length, d += y.length;
        const p = Math.max(a, d), h = Math.min(n, p * 0.99);
        r == null || r(h, p);
      }
      const m = new Headers(s.headers);
      m.set("x-cached-time", Date.now().toString()), m.set("x-actual-size", d.toString());
      const u = new Response(new Blob(f), {
        status: s.status,
        statusText: s.statusText,
        headers: m
      });
      await i.put(e, u), r == null || r(d, d), console.log("[ModelFetchInterceptor] ✅ Model cached with progress:", e, "actual size:", d);
    } catch (l) {
      console.error("[ModelFetchInterceptor] ❌ Error caching model with progress:", l);
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
      const s = await caches.open(this.CACHE_NAME), o = await s.match(e);
      if (!o)
        return console.log("[ModelFetchInterceptor] ❌ Not found in cache"), null;
      const r = o.headers.get("x-cached-time");
      return !r || Date.now() - parseInt(r) > this.CACHE_EXPIRY_MS ? (await s.delete(e), console.log("[ModelFetchInterceptor] ⏰ Cached model expired, removing:", e), null) : (console.log("[ModelFetchInterceptor] ✅ Serving model from cache:", e), o);
    } catch (s) {
      return console.error("[ModelFetchInterceptor] ❌ Error getting cached model:", s), null;
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
    return this.modelFileIndicators.some((s) => e.includes(s));
  }
  /**
   * Automatically detect if a model URL is local/self-hosted or from a CDN
   * Local models: relative paths, absolute paths without protocol
   * CDN models: full URLs starting with http:// or https://
   */
  isLocalModelUrl(e) {
    const s = !e.startsWith("http");
    return console.log("[ModelFetchInterceptor] URL detection:", e, "→", s ? "LOCAL" : "CDN"), s;
  }
  /**
   * Create a progress tracking wrapper for local model downloads
   */
  createLocalProgressWrapper(e, s) {
    if (!e.body || !this.options.onProgress)
      return e;
    const o = e.headers.get("content-length"), r = o ? parseInt(o) : 0;
    let l = 0;
    this.totalFiles++, this.activeDownloads.set(s, { loaded: 0, total: r }), console.log("[ModelFetchInterceptor] Local model download started, total:", r, "bytes"), this.updateOverallProgress();
    const a = e.body.getReader(), i = this, n = new ReadableStream({
      start(d) {
        function c() {
          return a.read().then(({ done: f, value: m }) => {
            if (f) {
              console.log("[ModelFetchInterceptor] Local model download complete");
              const u = i.activeDownloads.get(s);
              u && (u.loaded = r || l, i.activeDownloads.set(s, u)), i.completedFiles++, i.updateOverallProgress(), i.completedFiles === i.totalFiles && i.options.onProgress({
                percentage: 100,
                loaded: i.completedFiles,
                total: i.totalFiles,
                stage: { type: N.Ready, fromCache: !1 }
              }), d.close();
              return;
            }
            if (m) {
              l += m.length;
              const u = i.activeDownloads.get(s);
              u && (u.loaded = l, i.activeDownloads.set(s, u)), i.updateOverallProgress();
            }
            return d.enqueue(m), c();
          });
        }
        return c();
      }
    });
    return new Response(n, {
      headers: e.headers,
      status: e.status,
      statusText: e.statusText
    });
  }
  /**
   * Handle CDN model downloads with basic progress tracking
   */
  async handleCDNDownload(e, s, o) {
    const r = typeof s == "string" ? s : s.toString();
    if (!this.options.onProgress)
      return e.call(globalThis, s, o);
    this.totalFiles++, this.activeDownloads.set(r, { loaded: 0, total: 1 }), console.log("[ModelFetchInterceptor] CDN model file detected, basic progress tracking"), this.updateOverallProgress();
    const l = Date.now();
    try {
      const a = await e.call(globalThis, s, o), i = Date.now();
      console.log("[ModelFetchInterceptor] CDN model download completed in", i - l, "ms");
      const n = this.activeDownloads.get(r);
      return n && (n.loaded = 1, this.activeDownloads.set(r, n)), this.completedFiles++, this.updateOverallProgress(), a;
    } catch (a) {
      throw console.error("[ModelFetchInterceptor] CDN download error:", a), this.completedFiles++, this.updateOverallProgress(), a;
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
    console.log("[ModelFetchInterceptor] Starting fetch interception..."), this.fetchIntercepted = !1, this.isIntercepting = !0, this.activeDownloads.clear(), this.totalFiles = 0, this.completedFiles = 0, this.originalFetch = this.getFetchGlobal(), this.options.onProgress && W.isModelCached().then((s) => {
      s ? (console.log("[ModelFetchInterceptor] Models likely cached from previous session"), this.options.onProgress({
        percentage: 30,
        loaded: 0,
        total: 1,
        stage: { type: N.Downloading, fromCache: !0 },
        module: this.module
      })) : console.log("[ModelFetchInterceptor] No cache found");
    }), this.options.onProgress && (this.progressTimeout = setTimeout(() => {
      console.log("[ModelFetchInterceptor] Timeout triggered, fetchIntercepted:", this.fetchIntercepted), !this.fetchIntercepted && this.options.onProgress && (console.log("[ModelFetchInterceptor] No fetch requests detected - models likely cached"), this.options.onProgress({
        percentage: 100,
        loaded: 1,
        total: 1,
        stage: { type: N.Ready, fromCache: !0 },
        module: this.module
      }));
    }, this.options.cacheDetectionTimeout));
    const e = this.originalFetch;
    this.setFetchGlobal(async (s, o) => {
      const r = typeof s == "string" ? s : s.toString();
      if (!this.isIntercepting)
        return e.call(globalThis, s, o);
      if (console.log("[ModelFetchInterceptor] 🌐 Fetch intercepted:", r), this.isModelFile(r)) {
        const d = this.isLocalModelUrl(r);
        console.log("[ModelFetchInterceptor] 📦 Model file detected:", d ? "local" : "CDN"), this.fetchIntercepted = !0, this.progressTimeout && (clearTimeout(this.progressTimeout), this.progressTimeout = void 0);
        const c = await W.getCachedModel(r);
        if (c)
          return console.log("[ModelFetchInterceptor] Serving model from cache:", r), this.totalFiles++, this.completedFiles++, this.options.onProgress && (this.updateOverallProgress(), this.completedFiles === this.totalFiles && this.options.onProgress({
            percentage: 100,
            loaded: this.completedFiles,
            total: this.totalFiles,
            stage: { type: N.Ready, fromCache: !0 },
            module: this.module
          })), c;
      }
      if (!this.isModelFile(r))
        return e.call(globalThis, s, o);
      if (this.isLocalModelUrl(r)) {
        const d = await e.call(globalThis, s, o), c = d.clone();
        return W.cacheModel(r, c), this.createLocalProgressWrapper(d, r);
      }
      const l = await this.handleCDNDownload(e, s, o), a = l.clone(), i = l.headers.get("content-length"), n = i ? parseInt(i) : 0;
      return W.cacheModelWithProgress(
        r,
        a,
        n,
        (d, c) => {
          if (this.options.onProgress) {
            const f = c > 0 ? d / c * 100 : 0, u = d === c ? 100 : Math.min(Math.round(f), 98);
            this.options.onProgress({
              percentage: u,
              loaded: d,
              total: c,
              stage: { type: N.Caching, fromCache: !1 },
              module: this.module
            });
          }
        }
      ).catch((d) => {
        console.error("[ModelFetchInterceptor] Background caching failed:", d);
      }), l;
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
M(W, "CACHE_NAME", "vital-sign-models"), M(W, "CACHE_EXPIRY_MS", 1440 * 60 * 1e3);
let Z = W;
const fe = {
  excellent: 100,
  good: 80,
  average: 60,
  poor: 40,
  at_risk: 20
};
class Ae {
  constructor(e) {
    M(this, "ranges");
    this.ranges = e;
  }
  estimate(e) {
    const s = De(e.height, e.weight), o = Ee(e), r = We(e, s), l = $e(e, s), a = {
      cardiovascularRisks: o[0] !== void 0 && o[0] !== null ? {
        generalRisk: o[0],
        coronaryHeartDisease: o[1] ?? NaN,
        congestiveHeartFailure: o[2] ?? NaN,
        intermittentClaudication: o[3] ?? NaN,
        stroke: o[4] ?? NaN
      } : void 0,
      diabetesRisk: r ?? void 0,
      hypertensionRisk: l ?? void 0
    }, i = Ne(e.height, e.weight), n = e.waistCircumference && e.height && e.waistCircumference !== 0 && e.height !== 0 ? e.waistCircumference / e.height : void 0, d = e.waistCircumference && e.height && e.waistCircumference !== 0 && e.height !== 0 && i && i !== 0 ? e.waistCircumference / 100 / (Math.pow(i, 2 / 3) * Math.pow(e.height / 100, 0.5)) : void 0, c = d !== void 0 ? this.absizScore(d, e.age, e.gender) : void 0, f = e.heartRate !== void 0 && e.bloodPressureSystolic !== void 0 ? e.heartRate * e.bloodPressureSystolic : void 0, m = e.heartRate !== void 0 && e.respiratoryRate !== void 0 && e.respiratoryRate !== 0 ? e.heartRate / e.respiratoryRate : void 0, u = e.bloodPressureSystolic !== void 0 && e.bloodPressureDiastolic !== void 0 ? `${pe(e.bloodPressureSystolic)} / ${pe(e.bloodPressureDiastolic)}` : void 0, g = {}, y = e.age, p = e.gender;
    g.stress = this.category("stress", e.stress, y, p), g.respiratoryRate = this.category("respiratoryRate", e.respiratoryRate, y, p), g.spo2 = this.category("spo2", e.spo2, y, p), g.heartRate = this.category("heartRate", e.heartRate, y, p), g.hrvIbi = this.category("hrvIbi", e.hrvIbi, y, p), g.hrvSdnn = this.category("hrvSdnn", e.hrvSdnn, y, p), g.bloodPressure = this.bpCategory(u), g.cardiacWorkload = this.category("cardiacWorkload", f, y, p), g.waistToHeightRatio = this.category("waistToHeightRatio", n, y, p), g.absiz = this.category("absiz", c, y, p), g.bmi = this.category("bmi", i, y, p), g.cvdRiskGeneral = this.category("cvdRisk", o[0] ?? void 0, y, p);
    const h = z(["stress"], g), v = z(["respiratoryRate", "spo2"], g), C = z(["heartRate", "hrvIbi", "hrvSdnn", "bloodPressure", "cardiacWorkload", "cvdRiskGeneral"], g), x = z(["waistToHeightRatio", "absiz", "bmi"], g), w = [
      { key: "mentalWellness", score: h.score, count: h.count },
      { key: "respiratorySystemWellness", score: v.score, count: v.count },
      { key: "cardiovascularSystemWellness", score: C.score, count: C.count },
      { key: "physicalWellness", score: x.score, count: x.count }
    ].filter((I) => I.score !== void 0);
    let R;
    if (w.length > 0) {
      let I = 0, $ = 0;
      for (const H of w)
        I += H.score * H.count, $ += H.count;
      $ > 0 && (R = Me(I / $));
    }
    const A = {
      absi: d,
      absiz: c,
      bmi: i,
      cardiacWorkload: f,
      pulseRespiratoryQuotient: m,
      waistToHeightRatio: n,
      generalWellness: R,
      cardiovascularSystemWellness: C.score,
      mentalWellness: h.score,
      physicalWellness: x.score,
      respiratorySystemWellness: v.score
    };
    return { risks: a, wellness: A };
  }
  absizScore(e, s, o) {
    if (s === void 0 || o === void 0) return;
    const r = this.ranges.absi_mean_sd;
    if (!r) return;
    const l = o === 0 ? "male" : o === 1 ? "female" : void 0;
    if (!l) return;
    const a = r[l];
    if (!a) return;
    const i = a[String(Math.trunc(s))];
    if (i)
      return (e - i[0]) / i[1];
  }
  category(e, s, o, r) {
    if (s === void 0 || !Number.isFinite(s)) return;
    const l = this.selectCriteria(e, o, r);
    if (l)
      return X(s, l);
  }
  selectCriteria(e, s, o) {
    const r = this.ranges[e];
    if (!r) return;
    const l = (a) => {
      const i = o === 0 ? "male" : o === 1 ? "female" : void 0;
      return i && a[i] ? a[i] : a.general ? a.general : a;
    };
    switch (e) {
      case "heartRate": {
        const a = s !== void 0 ? l(r) : void 0;
        if (!a) return r.general;
        for (const i of Object.keys(a))
          if (ge(i, s)) return a[i];
        return r.general;
      }
      case "respiratoryRate": {
        if (s !== void 0 && r.age) {
          for (const a of Object.keys(r.age))
            if (ge(a, s)) return r.age[a];
        }
        return r.general;
      }
      case "waistToHeightRatio":
      case "absiz":
      case "absi":
        return l(r);
      default:
        return r.general ? r.general : r;
    }
  }
  bpCategory(e) {
    if (!e) return;
    const s = this.ranges.bloodPressure;
    if (!s || !s.sbp || !s.dbp) return;
    const o = e.split("/").map((d) => d.trim());
    if (o.length !== 2) return;
    const r = Number(o[0]), l = Number(o[1]);
    if (!Number.isFinite(r) || !Number.isFinite(l)) return;
    const a = ue(X(r, s.sbp)), i = ue(X(l, s.dbp));
    if (a === void 0 && i === void 0) return;
    const n = Math.max(a ?? -1, i ?? -1);
    return _e(n);
  }
}
function De(t, e) {
  if (t === void 0 || e === void 0 || t === 0 || e === 0) return;
  const s = t > 3 ? t / 100 : t;
  return e / (s * s);
}
function Ne(t, e) {
  if (!(t === void 0 || e === void 0 || t === 0 || e === 0))
    return e / Math.pow(t / 100, 2);
}
function Ee(t, e) {
  const s = [void 0, void 0, void 0, void 0, void 0], o = t.gender === 0, r = t.gender === 1;
  if (!o && !r) return s;
  const l = {};
  t.age !== void 0 && t.age > 0 && (l.age = Math.log(t.age)), t.hdl !== void 0 && t.hdl > 0 && (l.hdl = Math.log(t.hdl)), t.totalCholesterol !== void 0 && t.totalCholesterol > 0 && (l.totalCholesterol = Math.log(t.totalCholesterol)), t.bloodPressureSystolic !== void 0 && t.bloodPressureSystolic > 0 && (l.sbpUntreated = Math.log(t.bloodPressureSystolic)), l.sbpTreated = 0, t.smoker !== void 0 && (l.smoking = t.smoker ? 1 : 0), t.diabetic !== void 0 && (l.diabetes = t.diabetic < 1 ? 0 : 1);
  const a = o ? { age: 3.06117, totalCholesterol: 1.1237, hdl: -0.93263, sbpUntreated: 1.93303, sbpTreated: 1.99881, smoking: 0.65451, diabetes: 0.57367 } : { age: 2.32888, totalCholesterol: 1.20904, hdl: -0.70833, sbpUntreated: 2.76157, sbpTreated: 2.82263, smoking: 0.52873, diabetes: 0.69154 }, i = o ? { age: 3.856, totalCholesterol: 5.342, hdl: 3.7686, sbpUntreated: 4.3544, sbpTreated: 0.5019, smoking: 0.3522, diabetes: 0.065 } : { age: 3.8686, totalCholesterol: 5.3504, hdl: 4.0176, sbpUntreated: 4.24, sbpTreated: 0.5826, smoking: 0.3423, diabetes: 0.0376 }, n = o ? 0.88936 : 0.95012;
  let d = 0;
  for (const f of Object.keys(l))
    a[f] !== void 0 && (d += (l[f] - i[f]) * a[f]);
  const c = 1 - Math.pow(n, Math.exp(d));
  return o ? [c, 0.7174 * c, 0.1148 * c, 0.1804 * c, 0.159 * c] : [c, 0.6086 * c, 0.125 * c, 0.1862 * c, 0.2385 * c];
}
function We(t, e) {
  const {
    age: s,
    gender: o,
    waistCircumference: r,
    physicalActivity: l,
    healthyDiet: a,
    antiHypertensive: i,
    historyBloodGlucose: n,
    historyFamilyDiabetes: d
  } = t;
  if (s === void 0 || o === void 0 || e === void 0 || r === void 0 || l === void 0 || a === void 0 || i === void 0 || n === void 0 || d === void 0) return;
  const c = (p, h, v) => {
    const C = h.filter((x) => x <= Math.max(p, 0)).length - 1;
    return v[Math.max(0, Math.min(C, v.length - 1))];
  };
  let f = 0;
  f += c(s, [0, 45, 55, 65], [0, 2, 3, 4]), f += c(e, [0, 23, 25], [0, 1, 3]), f += c(r, o === 1 ? [0, 72, 80.00000000000001] : [0, 82, 90.00000000000001], [0, 3, 4]), f += l ? 0 : 2, f += a ? 0 : 1, f += i ? 2 : 0, f += n ? 5 : 0, f += [0, 3, 5][Math.max(0, Math.min(d, 2))];
  const u = [0, 7, 12, 15, 21], g = [1 / 100, 1 / 25, 1 / 6, 1 / 3, 1 / 2], y = u.filter((p) => p <= f).length - 1;
  return g[Math.max(0, Math.min(y, g.length - 1))];
}
function $e(t, e) {
  const { age: s, gender: o, bloodPressureSystolic: r, bloodPressureDiastolic: l, smoker: a, parentalHypertension: i } = t;
  if (s === void 0 || o === void 0 || r === void 0 || l === void 0 || e === void 0 || a === void 0 || i === void 0) return;
  const n = s * -0.15641 + o * -0.20293 + r * -0.05933 + l * -0.12847 + (a ? 1 : 0) * -0.19073 + i * -0.16612 + e * -0.03388 + s * l * 162e-5;
  return 1 - Math.exp(-Math.exp((Math.log(4) - (22.94954 + n)) / 0.87692));
}
function X(t, e) {
  for (const s of Object.keys(e))
    if (V(t, s)) return e[s];
}
function V(t, e) {
  const s = e.replace(/ /g, "");
  if (s.startsWith("[")) {
    const r = s.slice(1, -1).split(",");
    if (r.length !== 2) return !1;
    const l = Number(r[0]), a = Number(r[1]);
    return !Number.isFinite(l) || !Number.isFinite(a) ? !1 : s.endsWith("]") ? t >= l && t <= a : t >= l && t < a;
  }
  return s.startsWith(">=") ? t >= Number(s.slice(2)) : s.startsWith("<=") ? t <= Number(s.slice(2)) : s.startsWith(">") ? t > Number(s.slice(1)) : s.startsWith("<") ? t < Number(s.slice(1)) : !1;
}
function ge(t, e) {
  const s = t.replace(/ /g, "");
  return s.startsWith("[") || s.startsWith("(") || s.startsWith(">=") || s.startsWith("<") || s.startsWith(">") ? V(e, s) : !1;
}
function ue(t) {
  switch (t) {
    case "excellent":
      return 0;
    case "good":
      return 1;
    case "average":
      return 2;
    case "poor":
      return 3;
    case "at_risk":
      return 4;
    default:
      return;
  }
}
function _e(t) {
  return ["excellent", "good", "average", "poor", "at_risk"][t];
}
function pe(t) {
  const e = Math.floor(t);
  return t - e === 0.5 ? e % 2 === 0 ? e : e + 1 : Math.round(t);
}
function Me(t) {
  const s = t * 1e6, o = Math.floor(s);
  return Math.abs(s - o - 0.5) < 1e-9 ? (o % 2 === 0 ? o : o + 1) / 1e6 : Math.round(s) / 1e6;
}
function z(t, e) {
  const s = [];
  for (const o of t) {
    const r = e[o];
    r !== void 0 && fe[r] !== void 0 && s.push(fe[r]);
  }
  return s.length === 0 ? { score: void 0, count: 0 } : { score: Me(s.reduce((o, r) => o + r, 0) / s.length), count: s.length };
}
class He {
  constructor(e, s) {
    M(this, "xs");
    M(this, "ys");
    M(this, "tangents");
    if (e.length !== s.length || e.length < 2) throw new Error("AkimaInterpolator: bad input");
    this.xs = e, this.ys = s;
    const o = e.length, r = [];
    for (let i = 0; i < o - 1; i++) r.push((s[i + 1] - s[i]) / (e[i + 1] - e[i]));
    const l = new Array(o + 3).fill(0);
    o >= 4 ? (l[0] = 3 * r[0] - 3 * r[1] + r[2], l[1] = 2 * r[0] - r[1]) : (l[0] = r[0], l[1] = r[0]);
    for (let i = 0; i < r.length; i++) l[i + 2] = r[i];
    o >= 4 ? (l[o + 1] = 2 * r[o - 2] - r[o - 3], l[o + 2] = 3 * r[o - 2] - 3 * r[o - 3] + r[o - 4]) : (l[o + 1] = r[o - 2], l[o + 2] = r[o - 2]);
    const a = [];
    for (let i = 0; i < o; i++) {
      const n = l[i], d = l[i + 1], c = l[i + 2], f = l[i + 3], m = Math.abs(f - c), u = Math.abs(d - n), g = m + u;
      a.push(g > 0 ? (m * d + u * c) / g : (d + c) / 2);
    }
    this.tangents = a;
  }
  interpolate(e) {
    const s = [];
    for (const o of e) {
      if (o < this.xs[0] || o > this.xs[this.xs.length - 1]) {
        s.push(0);
        continue;
      }
      const r = this.findSegment(o), l = this.xs[r], i = this.xs[r + 1] - l;
      if (!(i > 0)) {
        s.push(0);
        continue;
      }
      const n = (o - l) / i, d = n * n, c = d * n, f = 2 * c - 3 * d + 1, m = c - 2 * d + n, u = -2 * c + 3 * d, g = c - d, y = this.ys[r], p = this.ys[r + 1];
      s.push(f * y + m * i * this.tangents[r] + u * p + g * i * this.tangents[r + 1]);
    }
    return s;
  }
  findSegment(e) {
    let s = 0, o = this.xs.length - 2;
    for (; s < o; ) {
      const r = s + o + 1 >> 1;
      this.xs[r] <= e ? s = r : o = r - 1;
    }
    return s;
  }
}
const Ue = new He(
  [0, 0.18, 0.39, 0.47, 0.72, 1],
  [0, 1, 0.52, 0.64, 0.18, 0.08]
), G = 0.18, me = 1e3 * 60 / 75;
function Oe(t, e, s) {
  const o = t.length;
  if (o !== e.length || o < 12 || !(s > 0)) return null;
  const r = Math.max(2, Math.floor(s * (60 / 150)));
  let l = t[0], a = t[0];
  for (let h = 1; h < o; h++)
    t[h] < l && (l = t[h]), t[h] > a && (a = t[h]);
  const i = l + (a - l) * 0.35, n = [];
  for (let h = 1; h < o - 1; h++) {
    if (t[h] < i || t[h] < t[h - 1] || t[h] <= t[h + 1]) continue;
    const v = n.length ? n[n.length - 1] : -1;
    v >= 0 && h - v < r ? t[h] > t[v] && (n[n.length - 1] = h) : n.push(h);
  }
  if (!n.length) return null;
  const d = Float64Array.from(t), c = (h, v) => {
    d[v] = Ue.interpolate([h - Math.floor(h)])[0];
  }, f = (h, v, C) => {
    const x = Math.max(C, 1e-6), b = 0.72 - G;
    let w = h;
    for (; w <= v && w < d.length; ) {
      const R = Math.min((e[w] - e[h]) / x, 1);
      if (R <= b)
        c(G + R, w);
      else {
        const A = (R - b) / (1 - b);
        c(0.72 + (1 - 0.72) * A, w);
      }
      w += 1;
    }
  };
  for (let h = 0; h < n.length - 1; h++) {
    const v = n[h], C = n[h + 1];
    if (C <= v) continue;
    const x = h === 0 ? Math.max(1e-6, e[C] - e[v]) : Math.max(1e-6, e[v] - e[n[h - 1]]);
    f(v, C - 1, x);
  }
  const m = n[n.length - 1], u = n.length >= 2 ? Math.max(1e-6, e[m] - e[n[n.length - 2]]) : me;
  f(m, o - 1, u);
  const g = n[0], y = n.length >= 2 ? Math.max(1e-6, e[n[1]] - e[g]) : me;
  let p = g - 1;
  for (; p >= 0; ) {
    const h = (e[g] - e[p]) / y;
    h < G ? c(G - h, p) : d[p] = 0, p -= 1;
  }
  return d;
}
class Be {
  constructor() {
    M(this, "phase", 0);
    M(this, "lastTimestampMs", 0);
    M(this, "smoothedRr", 15);
    M(this, "rrEmaAlpha", 0.15);
  }
  /** Advance one frame; returns the sample at `timestampMs`. */
  tick(e, s) {
    if (e !== void 0 && e > 0 && (this.smoothedRr = this.rrEmaAlpha * e + (1 - this.rrEmaAlpha) * this.smoothedRr), this.lastTimestampMs === 0)
      return this.lastTimestampMs = s, 0;
    const o = (s - this.lastTimestampMs) / 1e3;
    return this.lastTimestampMs = s, this.phase = (this.phase + o * this.smoothedRr / 60) % 1, 0.5 * Math.sin(2 * Math.PI * this.phase);
  }
  reset() {
    this.phase = 0, this.lastTimestampMs = 0, this.smoothedRr = 15;
  }
}
let T = null, P = null, j = !1, ce = 0, ee = 0, te = "", J = 0, S = null, se = -1e18, oe = -1e18, K = !1, D = null, Q = !1, re = -1e18, F = null, ne = -1e18, ie = null, de, k = null, ae = -1e18, B = 0, ye = !1, E = ["rppg", "rsp"];
const Re = new Be(), _ = [], we = 1200;
let be = 0, le = -1e18;
function Se() {
  T == null || T.reset(), ce++, j = !1, te = "", K = !1, S = null, se = -1e18, oe = -1e18, Q = !1, D = null, re = -1e18, F = null, ne = -1e18, k = null, ae = -1e18, le = -1e18, Re.reset(), _.length = 0, B = 0, L({ type: "estimationCleared" });
}
self.onmessage = async (t) => {
  const e = t.data;
  try {
    switch (e.type) {
      case "init":
        await je(e);
        break;
      case "feed":
        Ge(e.yuv, e.ts, e.chest, e.rgb, e.glabella, e.chestChannels);
        break;
      case "reset":
        Se();
        break;
      case "config":
        if (!T) return;
        e.scanDurationSec !== void 0 && T.setScanDurationSec(e.scanDurationSec), e.step !== void 0 && T.setStep(e.step), e.enableTn !== void 0 && T.setEnableTn(e.enableTn), e.rrMode !== void 0 && T.setRrMode(e.rrMode), e.userInfo !== void 0 && (de = e.userInfo), e.signalModes !== void 0 && (E = e.signalModes);
        break;
    }
  } catch (s) {
    L({ type: "error", error: `${s}` });
  }
};
async function je(t) {
  Te(!!t.telemetry), t.telemetry && setInterval(() => {
    const n = Pe();
    n && self.postMessage({ type: "telemetry", line: n });
  }, 1e3);
  const e = new Z({
    onProgress: (n) => self.postMessage({ type: "progress", progress: n }),
    module: "realtime-estimator",
    modelFileIndicators: [".js", ".wasm", ".bin", ".json"]
  });
  e.start();
  const s = await (await fetch(t.jsUrl)).text(), o = { exports: {} };
  new Function("module", "exports", "require", "__dirname", "__filename", s)(
    o,
    o.exports,
    void 0,
    "",
    ""
  );
  const r = o.exports, l = await r({ locateFile: () => t.wasmUrl }), a = new Uint8Array(await (await fetch(t.weightsUrl)).arrayBuffer()), i = new l.RtrppgEstimatorCore();
  if (!l.loadWeightsIntoCore(i, a))
    throw new Error("invalid weights file (rtrppg_weights.bin)");
  i.setScanDurationSec(t.scanDurationSec), i.setStep(t.step), i.setEnableTn(t.enableTn);
  try {
    const n = await (await fetch(t.coeffsUrl)).json(), d = n == null ? void 0 : n.get_hr_fs120;
    Array.isArray(d) && i.setHrSos(d.flat());
    for (const c of Object.keys(n))
      if (c.startsWith("rr_") || c.startsWith("respiratory")) {
        const f = n[c];
        Array.isArray(f) && i.setRrSos(c, f.flat());
      } else if (c.startsWith("rppg_output")) {
        const f = n[c];
        Array.isArray(f) && i.setDisplaySos(c, f.flat());
      }
  } catch {
  }
  if (T = i, de = t.userInfo, t.signalModes !== void 0 && (E = t.signalModes), t.wellnessRangesUrl)
    try {
      const n = await (await fetch(t.wellnessRangesUrl)).json();
      ie = new Ae(n);
    } catch (n) {
      console.warn("[rtRppg] wellness ranges unavailable:", n);
    }
  if (t.rrMode && i.setRrMode(t.rrMode), t.rrSos)
    for (const [n, d] of Object.entries(t.rrSos)) i.setRrSos(n, d);
  if (typeof i.setCnnDelegated != "function" || typeof i.buildNextWindowInput != "function") {
    console.warn("[rtRppg] wasm missing CNN-delegation bindings (stale build?); running CNN inline"), e.stop(), L({ type: "ready" });
    return;
  }
  try {
    const n = new Worker(new URL(
      /* @vite-ignore */
      "/assets/CP1x028j.js",
      import.meta.url
    ), { type: "module" });
    await new Promise((d, c) => {
      const f = setTimeout(() => c(new Error("cnn worker init timeout")), 6e4);
      n.onmessage = (m) => {
        const u = m.data;
        u.type === "ready" ? (clearTimeout(f), d()) : u.type === "error" && (clearTimeout(f), c(new Error(u.error)));
      }, n.onerror = (m) => {
        clearTimeout(f), c(new Error(m.message));
      }, n.postMessage({ type: "init", jsUrl: t.jsUrl, wasmUrl: t.wasmUrl, weightsUrl: t.weightsUrl, spo2ModelUrl: t.spo2ModelUrl, bpModelUrls: t.bpModelUrls, bpProScalerUrl: t.bpProScalerUrl, demographics: t.userInfo });
    }), n.onmessage = (d) => {
      const c = d.data;
      c.type === "segment" ? (j = !1, ee > 0 && q("cnnRoundtrip", performance.now() - ee, 200), c.gen === ce && (i == null || i.submitWindow(c.startIdx, c.segment)), i == null || i.setCnnBusy(!1), Ie()) : c.type === "hrvResult" ? (K = !1, Le(c.result), ze(c.bp)) : c.type === "spo2Result" ? (Q = !1, D = typeof c.spo2 == "number" && isFinite(c.spo2) ? c.spo2 : null, Y() && console.log(`[rtRppg SpO2] value=${D === null ? "nan" : D.toFixed(1)}`)) : c.type === "error" && (P = null, j = !1, i == null || i.setCnnDelegated(!1));
    }, P = n, i.setCnnDelegated(!0);
  } catch (n) {
    console.warn("[rtRppg] CNN worker unavailable, running CNN inline:", n), i.setCnnDelegated(!1);
  }
  e.stop(), L({ type: "ready" });
}
function Le(t) {
  if (!t) return;
  const e = performance.now();
  if (t.valid === !0 && t.nPeaks >= 15 && typeof t.sdnn == "number" && isFinite(t.sdnn) && typeof t.rmssd == "number" && isFinite(t.rmssd) ? (S = { sdnn: t.sdnn, rmssd: t.rmssd, stress: t.stress ?? NaN, stressScore: t.stressScore ?? NaN }, se = e) : S && e - se <= 1e4 || (S = null), Y()) {
    const o = (n) => typeof n == "number" && isFinite(n) ? n.toFixed(1) : "nan", r = (t.peaks ?? []).join(","), l = (t.amps ?? []).map((n) => n.toFixed(1)).join(","), a = (t.ibi ?? []).map((n) => n.toFixed(0)).join(","), i = typeof t.hrHz == "number" && isFinite(t.hrHz) ? t.hrHz.toFixed(3) : "nan";
    console.log(`[rtRppg HRV] DBG5 valid=${t.valid ? 1 : 0} peaks=${t.nPeaks} hrHz=${i} n=${(t.ibi ?? []).length} sdnn=${o(t.sdnn)} rmssd=${o(t.rmssd)} stress=${o(t.stress)} nS=${t.nSamples} cStd=${o(t.cStd)} cMax=${o(t.cMax)} peaks=[${r}] amps=[${l}] ibi=[${a}]`);
  }
}
function ze(t) {
  const e = performance.now();
  t && isFinite(t.systolic) && isFinite(t.diastolic) ? (F = t, ne = e, Y() && console.log(`[rtRppg BP] ${t.systolic.toFixed(0)}/${t.diastolic.toFixed(0)}`)) : F && e - ne > 1e4 && (F = null);
}
function Ie() {
  const t = T;
  if (!t || !P || j) return;
  const e = t.buildNextWindowInput();
  if (!e) return;
  const s = Float32Array.from(e.input);
  j = !0, t.setCnnBusy(!0), ee = performance.now(), Fe("cnnDispatch"), P.postMessage({ type: "predict", startIdx: e.startIdx, gen: ce, input: s }, [s.buffer]);
}
function Ge(t, e, s, o, r, l) {
  var v, C, x;
  const a = T;
  if (!a || e <= B) return;
  B > 0 && e - B > 1500 && Se(), B = e, r !== void 0 && (ye = r);
  const i = performance.now();
  J > 0 && q("gap", i - J, 24), Fe("feed"), he("addSample", () => a.addFaceSample(t, e)), s !== void 0 && a.addChestSample(s, e), l && a.addChestChannels(l, e), o && a.addFaceRgb(o[0], o[1], o[2], e);
  const n = a.process(e);
  isFinite(n) && n >= 35 && n <= 180 && a.updateDisplayFx(n);
  const d = a.getRespiratoryRate();
  if (isFinite(d) && d > 0 && a.updateRrDisplayFx(d), Ke(e, d), isFinite(n) && n >= 35 && n <= 180 && !K && e - oe >= 1e3) {
    const b = a.getInterpSignal();
    if (b.length >= 60) {
      oe = e, K = !0;
      const w = Float64Array.from(b), R = Float64Array.from(a.getInterpTimestamps());
      P == null || P.postMessage({ type: "hrv", rppg: w, ts: R, expectedHrBpm: n, glabellaCollected: ye }, [w.buffer, R.buffer]);
    }
  }
  if (isFinite(n) && !Q && e - re >= 1e3) {
    const b = a.getFaceRgbR();
    if (b.length >= 30) {
      re = e, Q = !0;
      const w = Float64Array.from(a.getFaceRgbTsMs(), ($) => $ / 1e3), R = Float64Array.from(b), A = Float64Array.from(a.getFaceRgbG()), I = Float64Array.from(a.getFaceRgbB());
      P == null || P.postMessage({ type: "spo2", ts: w, r: R, g: A, b: I }, [w.buffer, R.buffer, A.buffer, I.buffer]);
    }
  }
  const c = (b) => isFinite(b) ? b : void 0;
  if (S && ie) {
    if (e - le >= 1e3) {
      le = e;
      const b = {
        ...de ?? {},
        heartRate: isFinite(n) ? Math.round(n * 10) / 10 : void 0,
        bloodPressureSystolic: F == null ? void 0 : F.systolic,
        bloodPressureDiastolic: F == null ? void 0 : F.diastolic,
        respiratoryRate: c(d),
        spo2: D ?? void 0,
        stress: S.stress,
        hrvIbi: isFinite(n) && n > 0 ? 6e4 / (Math.round(n * 10) / 10) : void 0,
        hrvSdnn: S.sdnn
      };
      if (k = ie.estimate(b), ae = performance.now(), Y()) {
        const w = k.wellness, R = (v = k.risks.cardiovascularRisks) == null ? void 0 : v.generalRisk;
        console.log(`[rtRppg RW] well=${w.generalWellness ?? "nil"} cardio=${w.cardiovascularSystemWellness ?? "nil"} mental=${w.mentalWellness ?? "nil"} phys=${w.physicalWellness ?? "nil"} resp=${w.respiratorySystemWellness ?? "nil"} cvd=${R !== void 0 ? R.toFixed(4) : "nil"}`);
      }
    }
  } else k && performance.now() - ae > 1e4 && (k = null);
  const f = `${isFinite(n) ? n.toFixed(1) : "x"}|${((C = S == null ? void 0 : S.sdnn) == null ? void 0 : C.toFixed(1)) ?? "x"}|${((x = c(d)) == null ? void 0 : x.toFixed(1)) ?? "x"}|${(D == null ? void 0 : D.toFixed(1)) ?? "x"}|${F ? F.systolic + "/" + F.diastolic : "x"}|${k ? "rw" : "x"}`;
  isFinite(n) && (f !== te || e - be >= 1e3) && (te = f, be = e, L({
    type: "estimation",
    heartRate: Math.round(n * 10) / 10,
    // iOS parity: stable = HR in the plausible physiological band.
    isStable: isFinite(n) && n > 35 && n < 220,
    hrvIbi: c(n > 0 ? 6e4 / (Math.round(n * 10) / 10) : NaN),
    hrvSdnn: S ? S.sdnn : void 0,
    hrvRmssd: S ? S.rmssd : void 0,
    stress: S ? S.stress : void 0,
    stressScore: S ? S.stressScore : void 0,
    spo2: D ?? void 0,
    bloodPressureSystolic: F == null ? void 0 : F.systolic,
    bloodPressureDiastolic: F == null ? void 0 : F.diastolic,
    bloodPressure: F ? `${F.systolic} / ${F.diastolic}` : void 0,
    healthRisks: k == null ? void 0 : k.risks,
    holisticAnalysis: k == null ? void 0 : k.wellness,
    respiratoryRate: c(d),
    rrSignalQuality: a.getRrValid() ? a.getRrQualityBool() : void 0,
    rrSignalQualityScore: c(a.getRrQualityScore()),
    // 120 Hz interpolated HR input — used by the main-thread SQ SNR (iOS parity).
    interpValues: Float64Array.from(a.getInterpSignal()),
    interpTimestamps: Float64Array.from(a.getInterpTimestamps())
  }));
  const { values: m, timestamps: u, rrValues: g, rrTimestamps: y, modeSignals: p } = he("sigBuild", () => {
    const b = a.getRppgSignal(), w = a.getRppgTimestamps();
    let R = Float64Array.from(b);
    if (b.length >= 12 && w.length === b.length) {
      const $ = qe(w), H = Oe(b, w, $);
      H && (R = H);
    }
    const A = Float64Array.from(a.getRespiratorySignal()), I = {};
    return E.includes("rppg") && (I.rppg = R), E.includes("rsp") && (I.rsp = A), E.includes("face") && (I.face = Float64Array.from(a.getFaceSignal())), E.includes("lockin") && (I.lockin = Float64Array.from(b)), E.includes("chest") && (I.chest = Float64Array.from(a.getChestSignal())), E.includes("rspSimulated") && _.length >= 10 && (I.rspSimulated = Float64Array.from(_)), {
      values: R,
      timestamps: Float64Array.from(w),
      rrValues: A,
      rrTimestamps: Float64Array.from(a.getRespiratoryTimestamps()),
      modeSignals: I
    };
  }), h = [m.buffer, u.buffer, g.buffer, y.buffer];
  for (const b of Object.values(p))
    b.buffer !== m.buffer && b.buffer !== g.buffer && h.push(b.buffer);
  self.postMessage(
    { type: "signal", values: m, timestamps: u, rrValues: g, rrTimestamps: y, modeSignals: p },
    h
  ), q("handler", performance.now() - i, 16), J = performance.now(), Ie();
}
function L(t) {
  self.postMessage(t);
}
function qe(t) {
  const e = t.length;
  if (e < 2) return 30;
  const s = t[e - 1] - t[0];
  return s > 0 ? (e - 1) / s : 30;
}
function Ke(t, e) {
  const s = Re.tick(isFinite(e) && e > 0 ? e : void 0, t);
  if (_.push(s), _.length > we) {
    const o = _.length - we;
    _.splice(0, o);
  }
}
