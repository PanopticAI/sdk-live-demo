var O = Object.defineProperty;
var D = (r, e, t) => e in r ? O(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var a = (r, e, t) => D(r, typeof e != "symbol" ? e + "" : e, t);
import { h as C, g as U, G as B } from "./CePhNDLN.js";
import { M as _ } from "./CDwJdcmq.js";
import * as h from "onnxruntime-web";
class A {
  constructor(e, t, s, i) {
    a(this, "processNoise");
    a(this, "measurementNoise");
    a(this, "estimate");
    a(this, "estimateError");
    this.processNoise = e, this.measurementNoise = t, this.estimate = s, this.estimateError = i;
  }
  update(e) {
    const t = this.estimate, s = this.estimateError + this.processNoise, i = s / (s + this.measurementNoise);
    return this.estimate = t + i * (e - t), this.estimateError = (1 - i) * s, this.estimate;
  }
  getEstimate() {
    return this.estimate;
  }
}
let p = null, F = null, W = null, M = {}, v = null, E = 1, d = null, g = null, w = 0.04, P = !1, I = null, y = null;
function T(r) {
  const e = [];
  let t = r;
  for (; Array.isArray(t); )
    e.push(t.length), t = t[0];
  return e;
}
function z(r) {
  return Array.isArray(r) ? r.reduce((e, t) => e.concat(z(t)), []) : [r];
}
async function j(r, e) {
  if (P) {
    self.postMessage({ result: { type: "ready" }, hash: e });
    return;
  }
  try {
    const t = new _({
      onProgress: (s) => {
        self.postMessage({
          result: { type: "progress" },
          progress: s,
          hash: e
        });
      },
      module: "realtime-estimator",
      modelFileIndicators: [".onnx", ".json"]
    });
    t.start(), h.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/", h.env.wasm.numThreads = 1, h.env.wasm.simd = !0;
    try {
      console.log("[MeRppgWorker] Loading ONNX models..."), p = await h.InferenceSession.create(r.modelPath, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all"
      }), console.log("[MeRppgWorker] Main model loaded");
      const i = await (await fetch(r.statePath)).json();
      for (const [n, o] of Object.entries(i)) {
        const l = T(o), c = new Float32Array(z(o));
        M[n] = new h.Tensor("float32", c, l);
      }
      console.log("[MeRppgWorker] Initial state loaded"), F = await h.InferenceSession.create(r.welchPath, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all"
      }), console.log("[MeRppgWorker] Welch PSD model loaded"), W = await h.InferenceSession.create(r.hrPath, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all"
      }), console.log("[MeRppgWorker] HR extraction model loaded"), r.lambda !== void 0 && (E = r.lambda), I = new OffscreenCanvas(36, 36), y = I.getContext("2d"), P = !0, console.log("[MeRppgWorker] All models initialized successfully"), self.postMessage({ result: { type: "ready" }, hash: e });
    } finally {
      t.stop();
    }
  } catch (t) {
    console.error("[MeRppgWorker] Failed to initialize:", t), self.postMessage({
      result: { type: "error", error: t instanceof Error ? t.message : String(t) },
      hash: e
    });
  }
}
function L(r) {
  if (!I || !y)
    return null;
  try {
    y.clearRect(0, 0, 36, 36);
    const e = new OffscreenCanvas(r.width, r.height), t = e.getContext("2d");
    if (!t)
      return null;
    t.putImageData(r, 0, 0), y.drawImage(e, 0, 0, r.width, r.height, 0, 0, 36, 36);
    const i = y.getImageData(0, 0, 36, 36).data, n = new Float32Array(1296 * 3);
    for (let o = 0; o < i.length; o += 4) {
      const l = o / 4;
      n[l * 3] = i[o] / 255, n[l * 3 + 1] = i[o + 1] / 255, n[l * 3 + 2] = i[o + 2] / 255;
    }
    return n;
  } catch (e) {
    return console.warn("[MeRppgWorker] Failed to extract face image:", e), null;
  }
}
async function H(r, e) {
  if (!P || !p || !r.imageData || r.timestamp === void 0) {
    self.postMessage({
      result: { type: "error", error: "Worker not initialized or invalid input" },
      hash: e
    });
    return;
  }
  try {
    const t = L(r.imageData);
    if (!t) {
      self.postMessage({
        result: { type: "error", error: "Failed to extract face image" },
        hash: e
      });
      return;
    }
    const s = r.timestamp, i = new h.Tensor("float32", t, [1, 1, 36, 36, 3]), n = v ? Math.max((s - v) / E, 1 / 90) : 1 / 30, o = new h.Tensor("float32", [n], []);
    v = s;
    const l = {};
    l[p.inputNames[0]] = i;
    for (const [m, u] of Object.entries(M))
      l[m] = u;
    l[p.inputNames[37]] = o;
    const c = await p.run(l), f = c[p.outputNames[0]].data[0];
    for (let m = 1; m < p.outputNames.length; m++)
      M[p.inputNames[m]] = c[p.outputNames[m]];
    d ? d.update(f) : d = new A(1, 0.5, f, 1);
    const R = d.getEstimate();
    self.postMessage({
      result: { type: "processed", bvpValue: R },
      hash: e
    });
  } catch (t) {
    console.warn("[MeRppgWorker] Failed to process frame:", t), self.postMessage({
      result: { type: "error", error: t instanceof Error ? t.message : String(t) },
      hash: e
    });
  }
}
async function $(r, e) {
  if (!P || !F || !W || !r.welchArray) {
    self.postMessage({
      result: { type: "error", error: "Worker not initialized or invalid input" },
      hash: e
    });
    return;
  }
  try {
    const t = new Float32Array(r.welchArray), s = new h.Tensor("float32", t, [1, 1, t.length]), i = await F.run({ input: s }), n = i.freqs, o = i.psd;
    let c = (await W.run({ freqs: n, psd: o })).hr.data[0];
    if (r.timestamps && r.timestamps.length >= 2) {
      const u = r.timestamps.slice(-301);
      let b = 0, x = 0;
      for (let k = 1; k < u.length; k++) {
        const S = (u[k] - u[k - 1]) / 1e3;
        S <= 0.5 && (b += S, x++);
      }
      const N = b > 0 ? x / b : 30;
      c = c / 30 * N;
    }
    g ? g.update(c) : g = new A(1, 2, c, 1);
    const f = g.getEstimate();
    w = 0.8 * w + 0.2 * Math.abs(f - c) / c;
    const R = w < 0.02, m = Math.max(0, Math.min(1, 1 - w * 10));
    self.postMessage({
      result: {
        type: "welch",
        heartRate: f,
        confidence: m,
        isStable: R,
        signalQuality: m * 100
      },
      hash: e
    });
  } catch (t) {
    console.warn("[MeRppgWorker] Failed to process Welch:", t), self.postMessage({
      result: { type: "error", error: t instanceof Error ? t.message : String(t) },
      hash: e
    });
  }
}
async function V(r, e) {
  if (v = null, d = null, g = null, w = 0.04, P && r.statePath)
    try {
      const s = await (await fetch(r.statePath)).json();
      for (const [i, n] of Object.entries(s)) {
        const o = T(n), l = new Float32Array(z(n));
        M[i] = new h.Tensor("float32", l, o);
      }
      self.postMessage({ result: { type: "reset" }, hash: e });
    } catch (t) {
      console.warn("[MeRppgWorker] Failed to reset state:", t), self.postMessage({
        result: { type: "error", error: t instanceof Error ? t.message : String(t) },
        hash: e
      });
    }
  else
    self.postMessage({ result: { type: "reset" }, hash: e });
}
function X(r) {
  return { type: "ready" };
}
self.onmessage = async (r) => {
  const { inputData: e, hash: t } = r.data, s = e;
  try {
    switch (s.type) {
      case "init":
        await j(s, t);
        break;
      case "process":
        await H(s, t);
        break;
      case "welch":
        await $(s, t);
        break;
      case "reset":
        await V(s, t);
        break;
      default:
        console.warn("[MeRppgWorker] Unknown message type:", s.type), self.postMessage({
          result: { type: "error", error: `Unknown message type: ${s.type}` },
          hash: t
        });
    }
  } catch (i) {
    console.error("[MeRppgWorker] Error handling message:", i), self.postMessage({
      result: { type: "error", error: i instanceof Error ? i.message : String(i) },
      hash: t
    });
  }
};
class K {
  constructor(e) {
    a(this, "config", {
      earlyEstimation: !1,
      minDuration: 3,
      minConfidence: 0.6,
      debug: !1
    });
    a(this, "estimation_", null);
    a(this, "signalBuffer", []);
    a(this, "timestamps", []);
    a(this, "maxBufferSize", 512);
    // Buffer for visualization
    // Welch processing
    a(this, "welchArray", new Array(300).fill(0));
    a(this, "welchCount", 210);
    // Start closer to trigger (300 - 90)
    a(this, "welchBufferSize", 300);
    // 10 seconds at 30 FPS
    // Initialization flags
    a(this, "isInitialized", !1);
    a(this, "isInitializing", !1);
    // Model paths
    a(this, "modelPath", "models/me-rppg/model.onnx");
    a(this, "statePath", "models/me-rppg/state.json");
    a(this, "welchPath", "models/me-rppg/welch_psd.onnx");
    a(this, "hrPath", "models/me-rppg/get_hr.onnx");
    a(this, "lambda", 1);
    // Worker pool
    a(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/DEHL19r9.js",
      import.meta.url
    ), { type: "module" }));
    a(this, "workerPool");
    // Frame rate limiting for processing (30fps)
    a(this, "maxProcessFrameRate", 30);
    // 30 FPS processing
    a(this, "minProcessInterval", 1e3 / this.maxProcessFrameRate);
    // ~33.33ms
    a(this, "processTimer", null);
    a(this, "pendingFrame", null);
    a(this, "isProcessing", !1);
    e && (this.configure(e), e.modelPath && (this.modelPath = e.modelPath), e.statePath && (this.statePath = e.statePath), e.welchPath && (this.welchPath = e.welchPath), e.hrPath && (this.hrPath = e.hrPath), e.lambda !== void 0 && (this.lambda = e.lambda)), this.workerPool = C(
      this.workerFactory,
      X,
      "MeRppgWorker",
      300 * 1e3,
      // 5 minutes timeout for model loading
      1,
      // Single worker since we have stateful models
      void 0,
      10
      // Allow up to 10 pending frames in queue
    );
  }
  async loadModels(e) {
    await this.initializeModels(e);
  }
  log(e, ...t) {
    this.config.debug && console.log(`[MeRppgRealtimeEstimator] ${e}`, ...t);
  }
  resolveUrl(e) {
    if (e.startsWith("http") || e.startsWith("/") || !U.loadModelsFromRoot) {
      const t = new URL(document.baseURI);
      return new URL(e, t).href;
    }
    return `/${e}`;
  }
  async initializeModels(e) {
    if (!(this.isInitializing || this.isInitialized)) {
      this.isInitializing = !0;
      try {
        this.log("Initializing ONNX models in worker...");
        const t = {
          type: "init",
          modelPath: this.resolveUrl(this.modelPath),
          statePath: this.resolveUrl(this.statePath),
          welchPath: this.resolveUrl(this.welchPath),
          hrPath: this.resolveUrl(this.hrPath),
          lambda: this.lambda
        }, s = await this.workerPool.callWorker(t, void 0, e);
        if (s && s.type === "ready")
          this.isInitialized = !0, this.log("ONNX models initialized successfully");
        else
          throw new Error("Worker initialization failed: unexpected response");
      } catch (t) {
        throw this.config.debug && console.error("Failed to initialize ONNX models:", t), this.isInitialized = !1, t;
      } finally {
        this.isInitializing = !1;
      }
    }
  }
  get estimation() {
    return this.estimation_;
  }
  get signalData() {
    return this.signalBuffer.length === 0 ? null : {
      values: [...this.signalBuffer],
      timestamps: [...this.timestamps],
      sampleRate: this.getSampleRate()
    };
  }
  get signal2Data() {
    return null;
  }
  configure(e) {
    e && (this.config = { ...this.config, ...e });
  }
  processFrame(e, t, s, i) {
    t !== B.Idle && (!i || !i.face || (this.pendingFrame = { videoFrame: e, roi: i.face }, this.processTimer === null && !this.isProcessing && this.startProcessTimer()));
  }
  startProcessTimer() {
    this.processTimer = window.setInterval(() => {
      if (!this.isProcessing && this.pendingFrame) {
        const e = this.pendingFrame;
        this.pendingFrame = null, this.isProcessing = !0, this.processFrameAsync(e.videoFrame, e.roi).finally(() => {
          this.isProcessing = !1;
        });
      }
    }, this.minProcessInterval);
  }
  async processFrameAsync(e, t) {
    if (this.isInitialized)
      try {
        const s = await t.imageData;
        if (!s)
          return;
        const i = Date.now() / 1e3, n = {
          type: "process",
          imageData: s,
          timestamp: i
        };
        this.workerPool.callWorker(n, {
          transfer: []
          // ImageData is cloned, not transferred
        }).then((o) => {
          o && (o.type === "processed" && o.bvpValue !== void 0 ? (this.signalBuffer.push(o.bvpValue), this.timestamps.push(Date.now()), this.signalBuffer.length > this.maxBufferSize && (this.signalBuffer.shift(), this.timestamps.shift()), this.welchArray.push(o.bvpValue), this.welchArray.length > this.welchBufferSize && this.welchArray.shift(), this.welchCount++, this.welchCount >= 300 && (this.processWelch(), this.welchCount = 270)) : o.type === "error" && this.config.debug && console.warn("Worker error:", o.error));
        }).catch((o) => {
          this.config.debug && console.warn("Failed to process frame in worker:", o);
        });
      } catch (s) {
        this.config.debug && console.warn("Failed to process frame:", s);
      }
  }
  async processWelch() {
    var e;
    if (this.isInitialized)
      try {
        const t = {
          type: "welch",
          welchArray: [...this.welchArray],
          timestamps: [...this.timestamps]
        }, s = await this.workerPool.callWorker(t);
        s.type === "welch" && s.heartRate !== void 0 ? (this.estimation_ = {
          heartRate: s.heartRate,
          confidence: s.confidence || 0,
          isStable: s.isStable || !1,
          signalQuality: s.signalQuality || 0
        }, this.log(`Estimated HR: ${s.heartRate.toFixed(1)} BPM, Confidence: ${(e = s.confidence) == null ? void 0 : e.toFixed(2)}, Stable: ${s.isStable}`)) : s.type === "error" && this.config.debug && console.warn("Worker error during Welch processing:", s.error);
      } catch (t) {
        this.config.debug && console.warn("Failed to process Welch:", t);
      }
  }
  getSampleRate() {
    if (this.timestamps.length < 2) return 30;
    const e = this.timestamps[this.timestamps.length - 1] - this.timestamps[0];
    return (this.timestamps.length - 1) * 1e3 / e;
  }
  updateWithServerResult(e, t, s) {
    this.estimation_ = {
      heartRate: Math.round(e),
      confidence: 1,
      isStable: !0,
      snr: t,
      signalQuality: s
    };
  }
  reset() {
    if (this.estimation_ = null, this.signalBuffer = [], this.timestamps = [], this.welchArray = new Array(300).fill(0), this.welchCount = 210, this.pendingFrame = null, this.isProcessing = !1, this.processTimer !== null && (clearInterval(this.processTimer), this.processTimer = null), this.isInitialized) {
      const e = {
        type: "reset",
        statePath: this.resolveUrl(this.statePath)
      };
      this.workerPool.callWorker(e).catch((t) => {
        this.config.debug && console.warn("Failed to reset worker:", t);
      });
    }
  }
  /**
   * Set the lambda parameter for temporal normalization
   * @param lambda Half-life of the state (default: 1.0)
   */
  setLambda(e) {
    this.lambda = e;
  }
  /**
   * Cleanup worker resources
   */
  dispose() {
    this.processTimer && clearInterval(this.processTimer), this.workerPool.terminateAll();
  }
}
export {
  K as MeRppgRealtimeEstimator
};
