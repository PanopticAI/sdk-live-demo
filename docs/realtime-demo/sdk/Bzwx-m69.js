var d = Object.defineProperty;
var n = (i, e, a) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : i[e] = a;
var s = (i, e, a) => n(i, typeof e != "symbol" ? e + "" : e, a);
import { F as o } from "./CIKt0pSz.js";
import { F as l, t as m, e as r } from "./CePhNDLN.js";
class h {
  constructor() {
    s(this, "faceApi", o.shared);
  }
  async loadModels(e, a) {
    if (a) {
      const t = e === l.CDN ? "https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/model" : "models/faceapi", c = await o.initializeWithProgress(t, a);
      this.faceApi = c;
    } else
      await this.faceApi.waitUntilReady();
  }
  async detect(e) {
    let a;
    e.image instanceof HTMLVideoElement ? a = m(e) : a = e.image;
    const { faceBox: t, landmarks: c } = await this.faceApi.detectFace(a);
    return { faceBox: t, landmarks: c, videoFrame: r(a) };
  }
}
export {
  h as FaceApiFaceDetector
};
