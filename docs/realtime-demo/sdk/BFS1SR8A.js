var d = Object.defineProperty;
var l = (a, e, t) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var s = (a, e, t) => l(a, typeof e != "symbol" ? e + "" : e, t);
import { F as n, l as h, t as m } from "./CePhNDLN.js";
import { C as f, $ as g } from "./DNiMR7Uc.js";
class w {
  constructor() {
    s(this, "faceDetector");
    s(this, "runningMode", "IMAGE");
    s(this, "modelLocation", n.CDN);
    console.log("[MPFaceDetector] Created.");
  }
  modelAssetPath(e) {
    switch (e || this.modelLocation) {
      case n.CDN:
        return "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite";
      case n.SelfHosted:
        const { protocol: i, host: o } = window.location;
        return `${i}//${o}/models/mpvision/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`;
    }
  }
  async initializefaceDetector(e) {
    const t = e || this.modelLocation, i = (() => {
      switch (t) {
        case n.CDN:
          return "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9/wasm";
        case n.SelfHosted:
          const { protocol: c, host: r } = location;
          return `${c}//${r}/models/mpvision/tasks-vision@0.10.9/wasm`;
      }
    })(), o = await f.forVisionTasks(
      i
    );
    this.faceDetector = await g.createFromOptions(o, {
      baseOptions: {
        modelAssetPath: this.modelAssetPath(e),
        delegate: "GPU"
      },
      runningMode: this.runningMode
    });
  }
  async loadModels(e) {
    await this.initializefaceDetector(e);
    const t = await h();
    await this.detect({ image: t });
  }
  async detect(e) {
    const t = m(e);
    if (this.faceDetector === void 0)
      return { faceBox: void 0, landmarks: [], videoFrame: t };
    const i = this.faceDetector.detect(t).detections;
    if (i.length === 0)
      return { faceBox: void 0, landmarks: [], videoFrame: t };
    const o = i[0];
    return o.boundingBox === void 0 ? { faceBox: void 0, landmarks: [], videoFrame: t } : { faceBox: {
      xCenter: (o.boundingBox.originX + o.boundingBox.width / 2) / t.width,
      yCenter: (o.boundingBox.originY + o.boundingBox.height / 2) / t.height,
      width: o.boundingBox.width / t.width,
      height: o.boundingBox.height / t.height
    }, landmarks: [], videoFrame: t };
  }
}
export {
  w as MPVisionFaceDetector
};
