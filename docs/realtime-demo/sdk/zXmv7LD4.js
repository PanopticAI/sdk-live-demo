var l = Object.defineProperty;
var h = (o, e, s) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s;
var n = (o, e, s) => h(o, typeof e != "symbol" ? e + "" : e, s);
import { F as d, l as p, i as f, g as M, a as u } from "./CePhNDLN.js";
async function w(o, e) {
  const { FaceMesh: s } = await f(), a = new s({
    locateFile: (t) => {
      switch (e) {
        case d.CDN:
          return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${t}`;
        case d.SelfHosted:
          const { protocol: c, host: i } = window.location, r = `models/mediapipe/${t}`, m = M.loadModelsFromRoot ? `${c}//${i}/` : document.baseURI;
          return new URL(r, m).href;
      }
    }
  });
  return a.onResults((t) => {
    const c = t.image;
    if (t.multiFaceLandmarks === void 0)
      return o({ faceBox: void 0, landmarks: [], videoFrame: c });
    const i = t.multiFaceLandmarks[0];
    if (!i || i.length === 0)
      return o({ faceBox: void 0, landmarks: [], videoFrame: c });
    let r = u(i);
    o({ faceBox: r, landmarks: i, videoFrame: c });
  }), a;
}
class P {
  constructor() {
    n(this, "faceMesh");
    n(this, "promise");
    n(this, "modelLocation", d.CDN);
  }
  async loadModels(e) {
    this.faceMesh = await w((a) => {
      this.promise !== void 0 && (this.promise(a), this.promise = void 0);
    }, e || this.modelLocation), await new Promise((a) => setTimeout(a, 1e3));
    const s = await p();
    await this.faceMesh.send({ image: s }), await new Promise((a) => setTimeout(a, 2e3)), console.log("MediaPipe models loaded");
  }
  detect(e) {
    return new Promise((s, a) => {
      if (this.faceMesh === void 0) {
        a(new Error("MediaPipe face mesh detector not ready"));
        return;
      }
      this.promise = s, this.faceMesh.send(e).catch(a);
    });
  }
}
export {
  P as MediaPipeFaceDetector
};
