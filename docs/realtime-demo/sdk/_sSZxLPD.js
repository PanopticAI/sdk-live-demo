var k = Object.defineProperty;
var u = (c, a, e) => a in c ? k(c, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[a] = e;
var r = (c, a, e) => u(c, typeof a != "symbol" ? a + "" : a, e);
import { F as n, g as i, M as d, f as g, t as L, a as m } from "./CePhNDLN.js";
import { M } from "./CDwJdcmq.js";
import { v as w } from "./DNiMR7Uc.js";
const { FaceLandmarker: y, FilesetResolver: v } = w, l = class l {
  constructor() {
    r(this, "faceLandmarker");
    r(this, "runningMode", "IMAGE");
    r(this, "modelLocation", n.CDN);
  }
  get location() {
    return typeof window < "u" && window ? window.location : typeof self < "u" && self ? self.location : { protocol: "http:", host: "localhost" };
  }
  getModelAssetPath(a) {
    switch (a) {
      case n.CDN:
        return "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
      case n.SelfHosted:
        const { protocol: e, host: t } = this.location, s = "models/mpvision/face_landmarker/face_landmarker/float16/1/face_landmarker.task", o = i.loadModelsFromRoot ? `${e}//${t}/` : document.baseURI;
        return new URL(s, o).href;
    }
  }
  getWasmPath(a) {
    switch (a) {
      case n.CDN:
        return "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9/wasm";
      case n.SelfHosted:
        const { protocol: e, host: t } = this.location, s = "models/mpvision/tasks-vision@0.10.9/wasm", o = i.loadModelsFromRoot ? `${e}//${t}/` : document.baseURI;
        return new URL(s, o).href;
    }
  }
  async createFaceLandmarker(a, e) {
    const t = this.getWasmPath(a || n.SelfHosted), s = this.getModelAssetPath(a || n.SelfHosted);
    console.log("[MPVisionFaceMeshDetector] WASM path:", t), console.log("[MPVisionFaceMeshDetector] Model asset path:", s), e && e({
      percentage: 10,
      loaded: 0,
      total: 0,
      stage: { type: d.Downloading, fromCache: !1 }
    });
    let o = null;
    e && (o = new M({
      onProgress: e,
      cacheDetectionTimeout: 1e3,
      modelFileIndicators: l.MODEL_FILE_INDICATORS,
      module: "mp-vision-face-mesh"
    }), o.start());
    const h = await v.forVisionTasks(t);
    try {
      const p = await y.createFromOptions(h, {
        baseOptions: {
          modelAssetPath: s,
          delegate: "GPU"
        },
        outputFaceBlendshapes: !1,
        runningMode: this.runningMode,
        numFaces: 1
      });
      return o && !o.wasIntercepted() && e && (console.log("[MPVisionFaceMeshDetector] Model loaded successfully without network requests - using cached models"), e({
        percentage: 90,
        loaded: 1,
        total: 1,
        stage: { type: d.Ready, fromCache: !0 }
      })), e && e({
        percentage: 100,
        loaded: 100,
        total: 100,
        stage: { type: d.Ready, fromCache: !0 }
      }), p;
    } finally {
      o && o.stop();
    }
  }
  async loadModels(a, e) {
    if (console.log("[MPVisionFaceMeshDetector] loadModels called with progress callback:", !!e), this.faceLandmarker && e) {
      console.log("[MPVisionFaceMeshDetector] FaceLandmarker already exists, providing cached progress"), e({
        percentage: 90,
        loaded: 1,
        total: 1,
        stage: { type: d.Ready, fromCache: !0 }
      }), e({
        percentage: 100,
        loaded: 100,
        total: 100,
        stage: { type: d.Ready, fromCache: !0 }
      });
      return;
    }
    this.modelLocation = a || this.modelLocation, this.faceLandmarker = await this.createFaceLandmarker(this.modelLocation, e), this.faceLandmarker.detect(await g());
  }
  async detect(a) {
    const e = L(a);
    if (this.faceLandmarker === void 0)
      return { faceBox: void 0, landmarks: [], videoFrame: e };
    const t = this.faceLandmarker.detect(e);
    if (t.faceLandmarks.length === 0)
      return { faceBox: void 0, landmarks: [], videoFrame: e };
    const s = t.faceLandmarks[0];
    return { faceBox: m(s), landmarks: s, videoFrame: e };
  }
  async detectInWorker(a) {
    if (this.faceLandmarker === void 0)
      return { faceBox: void 0, landmarks: [], videoFrame: a };
    const e = this.faceLandmarker.detect(a);
    if (e.faceLandmarks.length === 0)
      return { faceBox: void 0, landmarks: [], videoFrame: a };
    const t = e.faceLandmarks[0];
    return { faceBox: m(t), landmarks: t, videoFrame: a };
  }
};
// Model file indicators for MediaPipe Vision
r(l, "MODEL_FILE_INDICATORS", [
  ".tflite",
  "face_landmarker",
  ".task",
  ".wasm",
  "mediapipe-models",
  "tasks-vision",
  "cdn.jsdelivr.net",
  "storage.googleapis.com"
]);
let f = l;
export {
  f as MPVisionFaceMeshDetector
};
