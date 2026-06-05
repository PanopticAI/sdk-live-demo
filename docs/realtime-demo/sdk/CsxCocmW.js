var u = Object.defineProperty;
var d = (l, t, e) => t in l ? u(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var n = (l, t, e) => d(l, typeof t != "symbol" ? t + "" : t, e);
import { V as c, g as f, G as g } from "./CePhNDLN.js";
import { M as p } from "./CDwJdcmq.js";
const h = 450, w = 30, R = 1e3 / w;
class S {
  constructor(t) {
    n(this, "config", {
      earlyEstimation: !1,
      minDuration: 10,
      minConfidence: 0.6,
      visualSignalType: c.Normalized,
      debug: !1
    });
    n(this, "estimation_", null);
    n(this, "currentPulseRate", 0);
    n(this, "onPulseRateUpdate");
    // WASM module
    n(this, "wasmModule", null);
    n(this, "wasmCore", null);
    n(this, "wasmLoadPromise", null);
    // Timestamp buffer for sample rate computation (TS-side copy)
    n(this, "timestamps", []);
    n(this, "respiratoryTimestamps", []);
    // Frame rate throttling
    n(this, "lastProcessTime", 0);
    t && this.configure(t);
  }
  async loadModels(t) {
    const e = t ? new p({
      onProgress: (s) => t(s),
      module: "FdaRealtimeEstimator",
      modelFileIndicators: [".wasm", ".js"]
    }) : null;
    if (e) {
      e.start();
      try {
        if ("caches" in window) {
          const s = await caches.open("vital-sign-models"), a = await s.keys();
          for (const i of a)
            i.url.includes("fda-estimator") && await s.delete(i);
        }
      } catch {
      }
    }
    try {
      await this.ensureWasmLoaded();
    } finally {
      e && e.stop();
    }
  }
  log(t, ...e) {
    this.config.debug && console.log(`[FdaRealtimeEstimator] ${t}`, ...e);
  }
  resolveModelPath(t) {
    return t.startsWith("http") || t.startsWith("/") || !f.loadModelsFromRoot ? t : `/${t}`;
  }
  async ensureWasmLoaded() {
    if (!(this.wasmModule && this.wasmCore))
      return this.wasmLoadPromise ? this.wasmLoadPromise : (this.wasmLoadPromise = (async () => {
        try {
          this.log("Loading WASM module...");
          const t = this.resolveModelPath("models/fda/fda-estimator.js");
          if (await new Promise((e, s) => {
            const a = document.createElement("script");
            a.src = t, a.onload = () => {
              if (typeof window.createFdaEstimator == "function") {
                const i = window.createFdaEstimator;
                i({
                  locateFile: (r) => r.endsWith(".wasm") ? this.resolveModelPath("models/fda/fda-estimator.wasm") : r
                }).then((r) => {
                  this.wasmModule = r, e();
                }).catch((r) => {
                  s(r);
                });
              } else
                s(new Error("createFdaEstimator function not found after script load"));
            }, a.onerror = () => s(new Error("Failed to load WASM script")), document.head.appendChild(a);
          }), this.wasmModule)
            if (typeof this.wasmModule.FdaEstimatorCore == "function")
              this.wasmCore = new this.wasmModule.FdaEstimatorCore(), this.wasmCore.setVisualSignalType(
                this.config.visualSignalType === c.Raw ? 0 : 1
              );
            else
              throw new Error("FdaEstimatorCore is not a constructor");
          this.log("WASM module loaded successfully");
        } catch (t) {
          throw this.config.debug && console.error("[FdaRealtimeEstimator] Failed to load WASM module:", t), t;
        }
      })(), this.wasmLoadPromise);
  }
  get estimation() {
    return this.estimation_;
  }
  get signalData() {
    if (!this.wasmCore) return null;
    const t = this.wasmCore.getChromSignal();
    return !t || t.length < 10 ? null : {
      values: Array.from(t),
      timestamps: [...this.timestamps],
      sampleRate: this.getSampleRate(this.timestamps)
    };
  }
  get signal2Data() {
    if (!this.wasmCore) return null;
    const t = this.wasmCore.getRespiratorySignal();
    return !t || t.length < 10 ? null : {
      values: Array.from(t),
      timestamps: [...this.respiratoryTimestamps],
      sampleRate: this.getSampleRate(this.respiratoryTimestamps)
    };
  }
  configure(t) {
    t && (this.config = { ...this.config, ...t }, this.wasmCore && this.wasmCore.setVisualSignalType(
      this.config.visualSignalType === c.Raw ? 0 : 1
    ));
  }
  processFrame(t, e, s, a) {
    if (e === g.Idle || !a || !a.face) return;
    const i = Date.now();
    i - this.lastProcessTime < R || (this.lastProcessTime = i, this.processFrameAsync(t, a.face, a.chest));
  }
  async processFrameAsync(t, e, s) {
    var a;
    try {
      if (await this.ensureWasmLoaded(), !this.wasmCore) return;
      const i = await this.extractFaceRgb(e);
      if (i === null) return;
      const r = Date.now();
      if (this.wasmCore.addRgbSample(i.r, i.g, i.b, r), this.timestamps.push(r), this.timestamps.length > h && this.timestamps.shift(), this.wasmCore.hasEnoughData()) {
        const o = this.wasmCore.processSignal();
        o.heartRate > 0 && (this.estimation_ = {
          heartRate: Math.round(o.heartRate * 10) / 10,
          confidence: o.confidence,
          isStable: o.isStable,
          snr: o.snr,
          signalQuality: o.confidence * 100
        }, this.currentPulseRate = o.heartRate, (a = this.onPulseRateUpdate) == null || a.call(this, this.currentPulseRate), this.log(`Estimated HR: ${o.heartRate.toFixed(1)} BPM, SNR: ${o.snr.toFixed(2)}`));
      }
      if (s) {
        const o = await this.extractChestRedChannel(s);
        o !== null && (this.wasmCore.addRespiratorySample(o, r), this.respiratoryTimestamps.push(r), this.respiratoryTimestamps.length > h && this.respiratoryTimestamps.shift());
      }
    } catch (i) {
      this.config.debug && console.warn("[FdaRealtimeEstimator] Failed to process frame:", i);
    }
  }
  async extractFaceRgb(t) {
    try {
      const e = await t.imageData;
      if (!e) return null;
      const s = e.data;
      let a = 0, i = 0, r = 0, o = 0;
      for (let m = 0; m < s.length; m += 4)
        a += s[m], i += s[m + 1], r += s[m + 2], o++;
      return o === 0 ? null : {
        r: a / o,
        g: i / o,
        b: r / o
      };
    } catch (e) {
      return this.config.debug && console.warn("[FdaRealtimeEstimator] Failed to extract face RGB:", e), null;
    }
  }
  async extractChestRedChannel(t) {
    try {
      const e = await t.imageData;
      if (!e) return null;
      const s = e.data;
      let a = 0, i = 0;
      for (let r = 0; r < s.length; r += 4)
        a += s[r], i++;
      return i === 0 ? null : a / i;
    } catch (e) {
      return this.config.debug && console.warn("[FdaRealtimeEstimator] Failed to extract chest red channel:", e), null;
    }
  }
  getSampleRate(t) {
    if (t.length < 2) return 30;
    const e = t[t.length - 1] - t[0];
    return e < 1 ? 30 : (t.length - 1) * 1e3 / e;
  }
  updateWithServerResult(t, e, s) {
    var a;
    this.estimation_ = {
      heartRate: Math.round(t),
      confidence: 1,
      isStable: !0,
      snr: e,
      signalQuality: s
    }, this.currentPulseRate = Math.round(t), (a = this.onPulseRateUpdate) == null || a.call(this, this.currentPulseRate);
  }
  reset() {
    this.estimation_ = null, this.currentPulseRate = 0, this.timestamps = [], this.respiratoryTimestamps = [], this.wasmCore && (this.wasmCore.reset(), this.wasmCore.setVisualSignalType(
      this.config.visualSignalType === c.Raw ? 0 : 1
    ));
  }
  dispose() {
  }
}
export {
  S as FdaRealtimeEstimator
};
