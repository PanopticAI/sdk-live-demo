var p = Object.defineProperty;
var u = (o, t, e) => t in o ? p(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var l = (o, t, e) => u(o, typeof t != "symbol" ? t + "" : t, e);
import { G as g } from "./CePhNDLN.js";
async function A(o, t) {
  const e = await o.getCanvas();
  t.yCenter -= t.height * 0.15, t.width *= 1.2, t.height *= 1.3;
  let a = t.width * e.width, n = t.height * e.height, s = (t.xCenter - t.width / 2) * e.width, r = (t.yCenter - t.height / 2) * e.height;
  if (a == 0 || n == 0)
    return;
  let i = document.createElement("canvas");
  const y = 256, h = Math.max(y / a, y / n, 1);
  i.width = a * h, i.height = n * h;
  let c = i.getContext("2d");
  return c == null || c.drawImage(e, s, r, a, n, 0, 0, i.width, i.height), h > 1 && console.log("[Beauty Analyzer] Enlarge face to 256x256 if needed."), i;
}
class m {
  constructor(t) {
    l(this, "config");
    l(this, "state", "ready");
    l(this, "photo");
    l(this, "result");
    this.config = t, this.config.development = t.development || !0, console.log("[Beauty Analyzer] Created.");
  }
  async analyze(t) {
    if (this.photo === void 0) {
      console.log("[Beauty Analyzer] No photo to analyze.");
      return;
    }
    const e = await this.photo;
    if (e === void 0) {
      console.log("[Beauty Analyzer] No face image to analyze.");
      return;
    }
    return await this.callApi({
      faceImage: e,
      apiKey: this.config.apiKey,
      facialSkinAge: t
    });
  }
  async callApi(t) {
    const e = {
      "Content-Type": "application/octet-stream",
      Accept: "application/json"
    }, a = t.apiKey || this.config.apiKey;
    a && (e["X-Api-Key"] = a), t.facialSkinAge !== void 0 && (e["X-Skin-Age"] = t.facialSkinAge.toString());
    const n = t.faceImage.toDataURL("image/jpeg"), s = atob(n.split(",")[1]), r = new ArrayBuffer(s.length), i = new Uint8Array(r);
    for (let d = 0; d < s.length; d++)
      i[d] = s.charCodeAt(d);
    const y = new Blob([i], { type: "image/jpeg" }), h = this.config.development === !0 ? "https://aws-backend.panoptic.ai/beauty-dev/process" : "https://aws-backend.panoptic.ai/beauty/process";
    return await (await fetch(h, {
      method: "POST",
      headers: e,
      body: y
    })).json();
  }
  processFrame(t, e, a, n, s) {
    switch (n) {
      case g.Idle:
        this.state = "ready", this.photo = void 0;
        break;
      case g.CollectingData:
        if (this.state !== "ready" || (this.photo === void 0 && (this.photo = A(t, e), console.log("[Beauty Analyzer] Photo taken.")), a === void 0))
          break;
        this.state = "busy", console.log("[Beauty Analyzer] Analyzing..."), this.analyze(a).then((r) => {
          this.result = r, this.state = "done", console.log("[Beauty Analyzer] Done", this.result);
        });
        break;
      case g.AnalyzingData:
        if (this.state !== "ready" || s < 4 || a === void 0 && s > 1)
          break;
        this.state = "busy", console.log("[Beauty Analyzer] Analyzing..."), this.analyze(a).then((r) => {
          this.result = r, this.state = "done", console.log("[Beauty Analyzer] Done", this.result);
        });
        break;
    }
  }
}
export {
  m as RemoteBeautyAnalyzer
};
