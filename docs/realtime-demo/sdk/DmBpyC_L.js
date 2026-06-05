import { t as r } from "./CePhNDLN.js";
class s {
  async loadModels() {
  }
  async detect(a) {
    let e = r(a), o = 0.7, t = 0.5;
    return {
      faceBox: {
        xCenter: 0.5,
        yCenter: 0.5,
        width: e.height * t * o / e.width,
        height: t
      },
      landmarks: [],
      videoFrame: e
    };
  }
}
export {
  s as DummyFaceDetector
};
