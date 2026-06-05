var Hr = Object.defineProperty;
var $r = (i, e, t) => e in i ? Hr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var d = (i, e, t) => $r(i, typeof e != "symbol" ? e + "" : e, t);
var qr = /* @__PURE__ */ ((i) => (i[i.Male = 0] = "Male", i[i.Female = 1] = "Female", i))(qr || {}), jr = /* @__PURE__ */ ((i) => (i[i.No = 0] = "No", i[i.Type1 = 1] = "Type1", i[i.Type2 = 2] = "Type2", i))(jr || {}), Yr = /* @__PURE__ */ ((i) => (i[i.NoParentalHypertension = 0] = "NoParentalHypertension", i[i.OneParent = 1] = "OneParent", i[i.BothParents = 2] = "BothParents", i))(Yr || {}), Gr = /* @__PURE__ */ ((i) => (i[i.No = 0] = "No", i[i.ExtendedFamily = 1] = "ExtendedFamily", i[i.ImmediateFamily = 2] = "ImmediateFamily", i))(Gr || {}), Kr = /* @__PURE__ */ ((i) => (i[i.Low = 0] = "Low", i[i.Medium = 1] = "Medium", i[i.High = 2] = "High", i[i.VeryHigh = 3] = "VeryHigh", i[i.Athletic = 4] = "Athletic", i))(Kr || {}), Xr = /* @__PURE__ */ ((i) => (i[i.No = 0] = "No", i[i.Stage1 = 1] = "Stage1", i[i.Stage2 = 2] = "Stage2", i))(Xr || {}), Jr = /* @__PURE__ */ ((i) => (i[i.Poor = 0] = "Poor", i[i.Good = 1] = "Good", i[i.Excellent = 2] = "Excellent", i))(Jr || {}), te = /* @__PURE__ */ ((i) => (i[i.Local = 0] = "Local", i[i.LocalV2 = 101] = "LocalV2", i[i.RemoteDev = 1] = "RemoteDev", i[i.RemoteProd = 2] = "RemoteProd", i[i.AwsDev = 3] = "AwsDev", i[i.AwsProd = 4] = "AwsProd", i[i.RemoteProdEnterprise = 5] = "RemoteProdEnterprise", i[i.AwsFirebaseEnterpriseProd = 5] = "AwsFirebaseEnterpriseProd", i[i.AwsProdEnterprise = 6] = "AwsProdEnterprise", i[i.AwsEnterpriseProd = 6] = "AwsEnterpriseProd", i[i.AwsDevEnterprise = 7] = "AwsDevEnterprise", i[i.AwsEnterpriseDev = 7] = "AwsEnterpriseDev", i[i.FdaDev = 8] = "FdaDev", i[i.FdaProd = 9] = "FdaProd", i[i.Schema2Dev = 10] = "Schema2Dev", i[i.Schema2Prod = 11] = "Schema2Prod", i))(te || {}), Qr = /* @__PURE__ */ ((i) => (i[i.Heart = 1] = "Heart", i[i.Oblong = 2] = "Oblong", i[i.Oval = 3] = "Oval", i[i.Round = 4] = "Round", i[i.Square = 5] = "Square", i))(Qr || {}), Zr = /* @__PURE__ */ ((i) => (i[i.FullLips = 1] = "FullLips", i[i.NormalLips = 2] = "NormalLips", i[i.ThinLips = 3] = "ThinLips", i))(Zr || {}), es = /* @__PURE__ */ ((i) => (i[i.Clear = 1] = "Clear", i[i.Mild = 2] = "Mild", i[i.Moderate = 3] = "Moderate", i[i.Severe = 4] = "Severe", i[i.VerySevere = 5] = "VerySevere", i))(es || {}), ts = /* @__PURE__ */ ((i) => (i[i.Almond = 1] = "Almond", i[i.Downturned = 2] = "Downturned", i[i.Monolid = 3] = "Monolid", i[i.Round = 4] = "Round", i[i.Upturned = 5] = "Upturned", i[i.Hooded = 6] = "Hooded", i))(ts || {}), is = /* @__PURE__ */ ((i) => (i[i.Dry = 1] = "Dry", i[i.Normal = 2] = "Normal", i[i.Oily = 3] = "Oily", i[i.Combination = 4] = "Combination", i[i.Sensitive = 5] = "Sensitive", i))(is || {}), Ye = /* @__PURE__ */ ((i) => (i[i.default = 0] = "default", i[i.dummy = 1] = "dummy", i))(Ye || {}), Y = /* @__PURE__ */ ((i) => (i[i.WaitingData = 0] = "WaitingData", i[i.CollectingData = 1] = "CollectingData", i[i.AnalyzingData = 2] = "AnalyzingData", i[i.Idle = 3] = "Idle", i))(Y || {}), Xe = /* @__PURE__ */ ((i) => (i.JS = "js", i.WebGL = "webgl", i.Auto = "auto", i))(Xe || {});
async function rs(i, e) {
  return new Promise((t) => {
    setTimeout(() => {
      t(e);
    }, i * 1e3);
  });
}
function z(...i) {
  console.log("[VSE Plugin]", ...i);
}
function ss(i) {
  let t = "";
  const r = (i.length - i.length * 0.8) / 2;
  for (let a = 0; a < i.length; a++)
    a >= r && a < i.length - r ? t += "#" : t += i[a];
  return t;
}
let at;
const as = new Uint8Array(16);
function ns() {
  if (!at && (at = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !at))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return at(as);
}
const oe = [];
for (let i = 0; i < 256; ++i)
  oe.push((i + 256).toString(16).slice(1));
function os(i, e = 0) {
  return oe[i[e + 0]] + oe[i[e + 1]] + oe[i[e + 2]] + oe[i[e + 3]] + "-" + oe[i[e + 4]] + oe[i[e + 5]] + "-" + oe[i[e + 6]] + oe[i[e + 7]] + "-" + oe[i[e + 8]] + oe[i[e + 9]] + "-" + oe[i[e + 10]] + oe[i[e + 11]] + oe[i[e + 12]] + oe[i[e + 13]] + oe[i[e + 14]] + oe[i[e + 15]];
}
const cs = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), $t = {
  randomUUID: cs
};
function Ve(i, e, t) {
  if ($t.randomUUID && !i)
    return $t.randomUUID();
  i = i || {};
  const r = i.random || (i.rng || ns)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, os(r);
}
function qt(i, e) {
  return (e.getTime() - i.getTime()) / 1e3;
}
function ls(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t].x != e[t].x || i[t].y != e[t].y)
      return !1;
  return !0;
}
function Ft(i, e) {
  return Math.sqrt((e.x - i.x) * (e.x - i.x) + (e.y - i.y) * (e.y - i.y));
}
function hs(i, e, t = 20) {
  let r = "|";
  for (let a = 0; a < t; a++)
    a / t > e ? r += " " : r += "█";
  return r += `| ${e.toFixed(2)}`, `${i}: ${r}`;
}
function me(...i) {
  console.log("[Blink Detector]", ...i);
}
let Pi = class {
  constructor(e = "", t = !1) {
    d(this, "frameCount", 0);
    d(this, "start", /* @__PURE__ */ new Date());
    d(this, "name", "noname");
    d(this, "enableLog", !1);
    d(this, "lastLogTime", /* @__PURE__ */ new Date());
    d(this, "logInterval", 10);
    this.name = e, this.enableLog = t;
  }
  get averageFps() {
    if (this.frameCount === 0 && (this.start = /* @__PURE__ */ new Date()), !(this.elapsed < 0.5))
      return this.frameCount / this.elapsed;
  }
  get elapsed() {
    return ((/* @__PURE__ */ new Date()).getTime() - this.start.getTime()) / 1e3;
  }
  tick() {
    this.frameCount = this.frameCount + 1;
  }
  reset() {
    this.frameCount = 0, this.start = /* @__PURE__ */ new Date(), this.lastLogTime = /* @__PURE__ */ new Date();
  }
  log() {
    if (this.averageFps == null || ((/* @__PURE__ */ new Date()).getTime() - this.lastLogTime.getTime()) / 1e3 < this.logInterval)
      return;
    const t = this.averageFps.toFixed(2);
    this.enableLog && (console.log(`[FPS ${this.name}] (${this.frameCount}/${this.elapsed})) ${t}fps`), this.lastLogTime = /* @__PURE__ */ new Date());
  }
};
class pt {
  constructor(e, t) {
    d(this, "duration");
    d(this, "name");
    d(this, "observers", []);
    d(this, "startTime", /* @__PURE__ */ new Date());
    d(this, "fps");
    d(this, "signals", []);
    this.name = e, this.fps = new Pi(e), this.duration = t;
  }
  get size() {
    return this.fps.averageFps === void 0 ? 10 : this.fps.averageFps * this.duration;
  }
  clear() {
    this.signals = [], this.fps.reset(), this.startTime = /* @__PURE__ */ new Date();
  }
  add(e) {
    if (this.fps.tick(), this.observers.forEach((t) => {
      var r;
      return (r = t.willAdd) == null ? void 0 : r.call(t, e);
    }), this.signals.length < this.size)
      this.signals.push({ timestamp: /* @__PURE__ */ new Date(), value: e });
    else {
      for (; this.signals.length > this.size; )
        this.signals.shift();
      this.signals.push({ timestamp: /* @__PURE__ */ new Date(), value: e });
    }
    this.observers.forEach((t) => {
      var r;
      return (r = t.onAdded) == null ? void 0 : r.call(t, e);
    });
  }
  get max() {
    return this.signals.length === 0 ? 0 : Math.max(...this.signals.map((e) => e.value));
  }
  get lastEntry() {
    if (this.signals.length !== 0)
      return this.signals[this.signals.length - 1];
  }
  get last() {
    if (this.signals.length != 0)
      return this.signals[this.signals.length - 1].value;
  }
  visualize(e = 0, t = 1, r = 20) {
    const a = this.lastEntry || { timestamp: /* @__PURE__ */ new Date(), value: 0 };
    let c = "|";
    for (let o = 0; o < r; o++) {
      const g = e + o / r * (t - e);
      g >= 0 ? g > a.value ? c += " " : c += "█" : g < a.value ? c += " " : c += "█";
    }
    return c += `| ${a.value.toFixed(2)}`, `${((a.timestamp.getTime() - this.startTime.getTime()) / 1e3).toFixed(2)}s ${this.name}: ${c}`;
  }
  derivative() {
    const e = new pt(`${this.name}'`, this.size), t = this;
    return this.observers.push({
      willAdd(r) {
        t.last !== void 0 && e.add(r - t.last);
      }
    }), e;
  }
  detectPeak(e, t) {
    if (this.fps.averageFps === void 0)
      return !1;
    const r = Math.min(Math.floor(this.fps.averageFps * e), this.signals.length);
    if (r < 2 || this.signals.length < 2)
      return !1;
    const a = this.signals[this.signals.length - 1].value, c = this.signals.slice(this.signals.length - 1 - r, this.signals.length - 2).map((o) => o.value), l = ds(c);
    return a - l > l * t;
  }
}
function ds(i) {
  return i.reduce((e, t) => e + t, 0) / i.length;
}
const us = 0.2, ms = 1 / 20, fs = 0.5, gs = 2, ps = 2;
class vs {
  constructor(e = "No name") {
    d(this, "name");
    d(this, "movement", 0);
    d(this, "debug", !1);
    d(this, "config", {
      movementThreshold: us,
      startMovementDurationThreshold: ms,
      stopMovementDurationThreshold: fs,
      freezedTheshold: gs,
      movementDurationThreshold: ps,
      normalizeValue: 0.02
    });
    d(this, "lastPosition");
    d(this, "startMoveTime");
    d(this, "startStayTime");
    d(this, "lastZeroMovementTime");
    d(this, "_isMoving", !1);
    d(this, "_lastStateChagneTime");
    this.name = e;
  }
  configure(e) {
    e.stopMovementDurationThreshold !== void 0 && (me("Configure Movement Detector stopMovementDurationThreshold: ", e.stopMovementDurationThreshold), this.config.stopMovementDurationThreshold = e.stopMovementDurationThreshold), e.startMovementDurationThreshold !== void 0 && (me("Configure Movement Detector startMovementDurationThreshold: ", e.startMovementDurationThreshold), this.config.startMovementDurationThreshold = e.startMovementDurationThreshold), e.movementThreshold !== void 0 && (me("Configure Movement Detector movementThreshold: ", e.movementThreshold), this.config.movementThreshold = e.movementThreshold), e.freezedTheshold !== void 0 && (me("Configure Movement Detector freezedTheshold: ", e.freezedTheshold), this.config.freezedTheshold = e.freezedTheshold), e.unstableDurationThreshold !== void 0 && (me("Configure Movement Detector unstableDurationThreshold: ", e.unstableDurationThreshold), this.config.movementDurationThreshold = e.unstableDurationThreshold);
  }
  reset() {
    this.lastPosition = void 0, this.startMoveTime = void 0, this.startStayTime = void 0, this.lastZeroMovementTime = void 0, this._lastStateChagneTime = void 0, this._isMoving = !1;
  }
  get movedLongEnough() {
    return this.startMoveTime === void 0 ? !1 : qt(this.startMoveTime, /* @__PURE__ */ new Date()) > this.config.startMovementDurationThreshold;
  }
  get stayStillLongEnough() {
    return this.startStayTime === void 0 ? !1 : qt(this.startStayTime, /* @__PURE__ */ new Date()) > this.config.stopMovementDurationThreshold;
  }
  update(e) {
    if (this.lastPosition === void 0) {
      this.lastPosition = e;
      return;
    }
    this.movement = Ft(e, this.lastPosition) / this.config.normalizeValue, this.lastPosition = e, this.movement > this.config.movementThreshold ? (this.startStayTime = void 0, this.startMoveTime === void 0 && (this.startMoveTime = /* @__PURE__ */ new Date()), this.movedLongEnough && (this.isMoving = !0)) : (this.startMoveTime = void 0, this.startStayTime === void 0 && (this.startStayTime = /* @__PURE__ */ new Date()), this.stayStillLongEnough && (this.isMoving = !1)), this.debugLog(hs("Movement", this.movement)), this.movement === 0 ? this.lastZeroMovementTime === void 0 && (this.lastZeroMovementTime = /* @__PURE__ */ new Date()) : this.lastZeroMovementTime = void 0;
  }
  get isDead() {
    return this.lastZeroMovementTime === void 0 ? !1 : ((/* @__PURE__ */ new Date()).getTime() - this.lastZeroMovementTime.getTime()) / 1e3 > this.config.freezedTheshold;
  }
  get unstable() {
    return this._lastStateChagneTime === void 0 || !this.isMoving ? !1 : ((/* @__PURE__ */ new Date()).getTime() - this._lastStateChagneTime.getTime()) / 1e3 > this.config.movementDurationThreshold;
  }
  get isMoving() {
    return this._isMoving;
  }
  set isMoving(e) {
    this._isMoving !== e && (this._isMoving = e, this._lastStateChagneTime = /* @__PURE__ */ new Date(), this._isMoving ? this.debugLog(`${this.name} is moving.`) : this.debugLog(`${this.name} is not moving`));
  }
  debugLog(...e) {
    this.debug && me(...e);
  }
}
class Ii {
  constructor(e, t) {
    d(this, "landmarks", []);
    d(this, "ltrb");
    d(this, "name");
    d(this, "fps");
    d(this, "ears");
    d(this, "movementDetector");
    this.ltrb = e, this.name = t, this.fps = new Pi(t), this.movementDetector = new vs(t), this.ears = new pt(`${t} EAR`, 2);
  }
  reset() {
    this.movementDetector.reset(), this.fps.reset(), this.ears.clear();
  }
  update(e) {
    ls(this.landmarks, e) || this.fps.tick(), this.fps.log(), this.landmarks = e, this.ears.add(this.aspectRatio), this.movementDetector.update(this.midPoint);
  }
  get maxEar() {
    return this.ears.max;
  }
  get normalizedEar() {
    return this.aspectRatio / this.maxEar;
  }
  get averageFps() {
    return this.fps.averageFps;
  }
  get movement() {
    return this.movementDetector.movement;
  }
  get isMoving() {
    return this.movementDetector.isMoving;
  }
  get detectionLost() {
    return this.movementDetector.isDead;
  }
  get unstable() {
    return this.movementDetector.unstable;
  }
  get leftPoint() {
    return { x: this.landmarks[this.ltrb.left].x, y: this.landmarks[this.ltrb.left].y };
  }
  get rightPoint() {
    return { x: this.landmarks[this.ltrb.right].x, y: this.landmarks[this.ltrb.right].y };
  }
  get topPoint() {
    return { x: this.landmarks[this.ltrb.top].x, y: this.landmarks[this.ltrb.top].y };
  }
  get bottomPoint() {
    return { x: this.landmarks[this.ltrb.bottom].x, y: this.landmarks[this.ltrb.bottom].y };
  }
  get width() {
    return Ft(this.leftPoint, this.rightPoint);
  }
  get height() {
    return Ft(this.topPoint, this.bottomPoint);
  }
  get aspectRatio() {
    return this.height / this.width;
  }
  get midPoint() {
    return {
      x: (this.leftPoint.x + this.rightPoint.x) / 2,
      y: (this.leftPoint.y + this.rightPoint.y) / 2
    };
  }
}
const nt = [
  [263, 249],
  [249, 390],
  [390, 373],
  [373, 374],
  [374, 380],
  [380, 381],
  [381, 382],
  [382, 362],
  [263, 466],
  [466, 388],
  [388, 387],
  [387, 386],
  [386, 385],
  [385, 384],
  [384, 398],
  [398, 362]
], ot = [
  [33, 7],
  [7, 163],
  [163, 144],
  [144, 145],
  [145, 153],
  [153, 154],
  [154, 155],
  [155, 133],
  [33, 246],
  [246, 161],
  [161, 160],
  [160, 159],
  [159, 158],
  [158, 157],
  [157, 173],
  [173, 133]
], ws = {
  left: nt[0][0],
  top: nt[11][1],
  right: nt[15][1],
  bottom: nt[4][0]
}, ys = {
  left: ot[0][0],
  top: ot[11][1],
  right: ot[15][1],
  bottom: ot[4][0]
};
class bs extends Ii {
  constructor() {
    super(ws, "Left Eye");
  }
}
class xs extends Ii {
  constructor() {
    super(ys, "Right Eye");
  }
}
class Es {
  constructor() {
    d(this, "fps", 15);
    d(this, "blinkCount", 5);
    d(this, "noEyes", !1);
    d(this, "unstable", !1);
  }
  configure(e) {
  }
  reset() {
  }
  detect(e) {
    return !0;
  }
}
const Ss = 0.15, Rs = 10;
class ks {
  constructor() {
    d(this, "leftEye", new bs());
    d(this, "rightEye", new xs());
    d(this, "avgEars");
    d(this, "dEars");
    d(this, "debug", !1);
    d(this, "_blinkCount", 0);
    d(this, "_isReset", !1);
    d(this, "config", {
      enableBlinkDetector: !0,
      minFps: Rs,
      earDiffThreshold: Ss,
      enableMovementDetection: !0
    });
    me("Blink detector created"), this.avgEars = new pt("EAR", this.leftEye.ears.duration), this.dEars = this.avgEars.derivative();
  }
  configure(e) {
    e.earDiffThreshold !== void 0 && (me("Configure Blink Detector earDiffThreshold: ", e.earDiffThreshold), this.config.earDiffThreshold = e.earDiffThreshold), e.minFps !== void 0 && (me("Configure Blink Detector minFps: ", e.minFps), this.config.minFps = e.minFps), e.enableMovementDetection && (me("Configure Blink Detector enableMovementDetection: ", e.enableMovementDetection), this.config.enableMovementDetection = e.enableMovementDetection), this.leftEye.movementDetector.configure(e), this.rightEye.movementDetector.configure(e);
  }
  get noEyes() {
    return this.leftEye.detectionLost || this.rightEye.detectionLost;
  }
  get unstable() {
    return this.leftEye.unstable || this.rightEye.unstable;
  }
  get fps() {
    return ((this.leftEye.averageFps || 0) + (this.rightEye.averageFps || 0)) / 2;
  }
  reset() {
    this._isReset = !0, this._blinkCount = 0, this.leftEye.reset(), this.rightEye.reset(), this.avgEars.clear(), this.dEars.clear();
  }
  get blinkCount() {
    return this.leftEye.averageFps !== void 0 && this.rightEye.averageFps !== void 0 && this.leftEye.averageFps < this.config.minFps && this.rightEye.averageFps < this.config.minFps ? (me(`FPS < ${this.config.minFps}, blink detection is unreliable. Always return blink count 1.`), 1) : this._blinkCount;
  }
  detect(e) {
    if (this._isReset || this.reset(), this.leftEye.update(e), this.rightEye.update(e), this.config.enableMovementDetection) {
      if (this.unstable)
        return me("Error: unstable eyes"), !1;
      if (this.leftEye.isMoving || this.rightEye.isMoving)
        return !1;
      if (this.noEyes)
        return me("Error: no eyes"), !1;
    }
    this.avgEars.add(1 - (this.leftEye.normalizedEar + this.rightEye.normalizedEar) / 2);
    const t = this.dEars.last || 0, r = t > this.config.earDiffThreshold;
    if (this.debug && me(this.dEars.visualize(-1, 1, 30)), r) {
      this._blinkCount++;
      const a = ((this.leftEye.averageFps || 0) + (this.rightEye.averageFps || 0)) / 2;
      me(`Blink Detected ${this._blinkCount}. EAR_DIFF=${t.toFixed(2)} FPS=${a.toFixed(1)}`);
    }
    return r;
  }
}
function jt(i) {
  switch (i) {
    case Ye.default:
      return new ks();
    case Ye.dummy:
      return new Es();
  }
}
const Qe = class Qe {
  constructor() {
    d(this, "endpoint", "https://aws-backend.panoptic.ai/s3/");
    d(this, "s3ApiKey", "TJ3CJ2ebRs0YK3HIwopu529q92qAZ1waBI5mWIq5");
  }
  async getDataFromS3(e, t) {
    try {
      const a = { type: "get-json", params: { bucket: e, objectKey: t } }, c = {
        "Content-Type": "application/json",
        "X-Api-Key": this.s3ApiKey
      }, l = await fetch(this.endpoint, {
        method: "POST",
        headers: c,
        body: JSON.stringify(a)
      });
      if (l.status != 200)
        throw new Error(l.statusText);
      return await l.json();
    } catch (r) {
      throw console.error(`${Qe.TAG}: Error fetching data from S3:`, r), r;
    }
  }
  putDataToS3(e, t, r) {
    const a = this.endpoint, c = JSON.stringify({
      type: "save-json",
      params: {
        bucket: e,
        objectKey: t,
        dataToSave: r
      }
    });
    return fetch(a, {
      method: "POST",
      body: c,
      headers: {
        "Content-Type": "application/json",
        ...this.s3ApiKey ? { "X-Api-Key": this.s3ApiKey } : {}
      }
    });
  }
  /**
   * Persist JSON to S3 via backend-presigned PUT (matches native SDKs).
   * Flow:
   *  1) POST to backend `{ type: "custom-method", params: { bucket, objectKey, method: "put_object", expiration } }` to get presigned URL
   *  2) PUT the raw JSON to the returned URL (Content-Type: application/json)
   *
   * This mirrors the native SDK behavior (no base64 encoding, backend returns presigned URL).
   */
  async putDataToS3_v2(e, t, r) {
    try {
      const c = { type: "custom-method", params: { bucket: e, objectKey: t, method: "put_object", expiration: 360 } }, l = {
        "Content-Type": "application/json",
        "X-Api-Key": this.s3ApiKey
      }, o = await fetch(this.endpoint, {
        method: "POST",
        headers: l,
        body: JSON.stringify(c)
      });
      if (o.status != 200) {
        const w = await o.text().catch(() => o.statusText);
        throw new Error(`S3 presign failed: ${o.status} ${w}`);
      }
      let b = await o.text();
      b.startsWith('"') && b.endsWith('"') && (b = b.slice(1, -1));
      const E = new URL(b), T = await fetch(E.toString(), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(r)
      });
      if (!T.ok) {
        const w = await T.text().catch(() => T.statusText);
        throw new Error(`S3 upload failed: ${T.status} ${w}`);
      }
      return { success: !0, detail: null };
    } catch (a) {
      throw console.error(`${Qe.TAG}: Error putting data to S3:`, a), a;
    }
  }
};
d(Qe, "TAG", "AWS S3 Client");
let Ae = Qe;
var Mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ts(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Bn(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var e = i.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(i, r);
    Object.defineProperty(t, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return i[r];
      }
    });
  }), t;
}
var bt = {}, Ke = {}, Yt;
function Cs() {
  if (Yt) return Ke;
  Yt = 1, Ke.byteLength = o, Ke.toByteArray = b, Ke.fromByteArray = w;
  for (var i = [], e = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = r.length; a < c; ++a)
    i[a] = r[a], e[r.charCodeAt(a)] = a;
  e[45] = 62, e[95] = 63;
  function l(f) {
    var p = f.length;
    if (p % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var m = f.indexOf("=");
    m === -1 && (m = p);
    var v = m === p ? 0 : 4 - m % 4;
    return [m, v];
  }
  function o(f) {
    var p = l(f), m = p[0], v = p[1];
    return (m + v) * 3 / 4 - v;
  }
  function g(f, p, m) {
    return (p + m) * 3 / 4 - m;
  }
  function b(f) {
    var p, m = l(f), v = m[0], k = m[1], C = new t(g(f, v, k)), S = 0, D = k > 0 ? v - 4 : v, P;
    for (P = 0; P < D; P += 4)
      p = e[f.charCodeAt(P)] << 18 | e[f.charCodeAt(P + 1)] << 12 | e[f.charCodeAt(P + 2)] << 6 | e[f.charCodeAt(P + 3)], C[S++] = p >> 16 & 255, C[S++] = p >> 8 & 255, C[S++] = p & 255;
    return k === 2 && (p = e[f.charCodeAt(P)] << 2 | e[f.charCodeAt(P + 1)] >> 4, C[S++] = p & 255), k === 1 && (p = e[f.charCodeAt(P)] << 10 | e[f.charCodeAt(P + 1)] << 4 | e[f.charCodeAt(P + 2)] >> 2, C[S++] = p >> 8 & 255, C[S++] = p & 255), C;
  }
  function E(f) {
    return i[f >> 18 & 63] + i[f >> 12 & 63] + i[f >> 6 & 63] + i[f & 63];
  }
  function T(f, p, m) {
    for (var v, k = [], C = p; C < m; C += 3)
      v = (f[C] << 16 & 16711680) + (f[C + 1] << 8 & 65280) + (f[C + 2] & 255), k.push(E(v));
    return k.join("");
  }
  function w(f) {
    for (var p, m = f.length, v = m % 3, k = [], C = 16383, S = 0, D = m - v; S < D; S += C)
      k.push(T(f, S, S + C > D ? D : S + C));
    return v === 1 ? (p = f[m - 1], k.push(
      i[p >> 2] + i[p << 4 & 63] + "=="
    )) : v === 2 && (p = (f[m - 2] << 8) + f[m - 1], k.push(
      i[p >> 10] + i[p >> 4 & 63] + i[p << 2 & 63] + "="
    )), k.join("");
  }
  return Ke;
}
var ct = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Gt;
function Ds() {
  return Gt || (Gt = 1, ct.read = function(i, e, t, r, a) {
    var c, l, o = a * 8 - r - 1, g = (1 << o) - 1, b = g >> 1, E = -7, T = t ? a - 1 : 0, w = t ? -1 : 1, f = i[e + T];
    for (T += w, c = f & (1 << -E) - 1, f >>= -E, E += o; E > 0; c = c * 256 + i[e + T], T += w, E -= 8)
      ;
    for (l = c & (1 << -E) - 1, c >>= -E, E += r; E > 0; l = l * 256 + i[e + T], T += w, E -= 8)
      ;
    if (c === 0)
      c = 1 - b;
    else {
      if (c === g)
        return l ? NaN : (f ? -1 : 1) * (1 / 0);
      l = l + Math.pow(2, r), c = c - b;
    }
    return (f ? -1 : 1) * l * Math.pow(2, c - r);
  }, ct.write = function(i, e, t, r, a, c) {
    var l, o, g, b = c * 8 - a - 1, E = (1 << b) - 1, T = E >> 1, w = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : c - 1, p = r ? 1 : -1, m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, l = E) : (l = Math.floor(Math.log(e) / Math.LN2), e * (g = Math.pow(2, -l)) < 1 && (l--, g *= 2), l + T >= 1 ? e += w / g : e += w * Math.pow(2, 1 - T), e * g >= 2 && (l++, g /= 2), l + T >= E ? (o = 0, l = E) : l + T >= 1 ? (o = (e * g - 1) * Math.pow(2, a), l = l + T) : (o = e * Math.pow(2, T - 1) * Math.pow(2, a), l = 0)); a >= 8; i[t + f] = o & 255, f += p, o /= 256, a -= 8)
      ;
    for (l = l << a | o, b += a; b > 0; i[t + f] = l & 255, f += p, l /= 256, b -= 8)
      ;
    i[t + f - p] |= m * 128;
  }), ct;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Kt;
function Fs() {
  return Kt || (Kt = 1, (function(i) {
    const e = Cs(), t = Ds(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    i.Buffer = o, i.SlowBuffer = C, i.INSPECT_MAX_BYTES = 50;
    const a = 2147483647;
    i.kMaxLength = a, o.TYPED_ARRAY_SUPPORT = c(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function c() {
      try {
        const h = new Uint8Array(1), s = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(h, s), h.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(o.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (o.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(o.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (o.isBuffer(this))
          return this.byteOffset;
      }
    });
    function l(h) {
      if (h > a)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
      const s = new Uint8Array(h);
      return Object.setPrototypeOf(s, o.prototype), s;
    }
    function o(h, s, n) {
      if (typeof h == "number") {
        if (typeof s == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return T(h);
      }
      return g(h, s, n);
    }
    o.poolSize = 8192;
    function g(h, s, n) {
      if (typeof h == "string")
        return w(h, s);
      if (ArrayBuffer.isView(h))
        return p(h);
      if (h == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
        );
      if (ue(h, ArrayBuffer) || h && ue(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ue(h, SharedArrayBuffer) || h && ue(h.buffer, SharedArrayBuffer)))
        return m(h, s, n);
      if (typeof h == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const u = h.valueOf && h.valueOf();
      if (u != null && u !== h)
        return o.from(u, s, n);
      const y = v(h);
      if (y) return y;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
        return o.from(h[Symbol.toPrimitive]("string"), s, n);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    }
    o.from = function(h, s, n) {
      return g(h, s, n);
    }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
    function b(h) {
      if (typeof h != "number")
        throw new TypeError('"size" argument must be of type number');
      if (h < 0)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
    }
    function E(h, s, n) {
      return b(h), h <= 0 ? l(h) : s !== void 0 ? typeof n == "string" ? l(h).fill(s, n) : l(h).fill(s) : l(h);
    }
    o.alloc = function(h, s, n) {
      return E(h, s, n);
    };
    function T(h) {
      return b(h), l(h < 0 ? 0 : k(h) | 0);
    }
    o.allocUnsafe = function(h) {
      return T(h);
    }, o.allocUnsafeSlow = function(h) {
      return T(h);
    };
    function w(h, s) {
      if ((typeof s != "string" || s === "") && (s = "utf8"), !o.isEncoding(s))
        throw new TypeError("Unknown encoding: " + s);
      const n = S(h, s) | 0;
      let u = l(n);
      const y = u.write(h, s);
      return y !== n && (u = u.slice(0, y)), u;
    }
    function f(h) {
      const s = h.length < 0 ? 0 : k(h.length) | 0, n = l(s);
      for (let u = 0; u < s; u += 1)
        n[u] = h[u] & 255;
      return n;
    }
    function p(h) {
      if (ue(h, Uint8Array)) {
        const s = new Uint8Array(h);
        return m(s.buffer, s.byteOffset, s.byteLength);
      }
      return f(h);
    }
    function m(h, s, n) {
      if (s < 0 || h.byteLength < s)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (h.byteLength < s + (n || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let u;
      return s === void 0 && n === void 0 ? u = new Uint8Array(h) : n === void 0 ? u = new Uint8Array(h, s) : u = new Uint8Array(h, s, n), Object.setPrototypeOf(u, o.prototype), u;
    }
    function v(h) {
      if (o.isBuffer(h)) {
        const s = k(h.length) | 0, n = l(s);
        return n.length === 0 || h.copy(n, 0, 0, s), n;
      }
      if (h.length !== void 0)
        return typeof h.length != "number" || ne(h.length) ? l(0) : f(h);
      if (h.type === "Buffer" && Array.isArray(h.data))
        return f(h.data);
    }
    function k(h) {
      if (h >= a)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
      return h | 0;
    }
    function C(h) {
      return +h != h && (h = 0), o.alloc(+h);
    }
    o.isBuffer = function(s) {
      return s != null && s._isBuffer === !0 && s !== o.prototype;
    }, o.compare = function(s, n) {
      if (ue(s, Uint8Array) && (s = o.from(s, s.offset, s.byteLength)), ue(n, Uint8Array) && (n = o.from(n, n.offset, n.byteLength)), !o.isBuffer(s) || !o.isBuffer(n))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (s === n) return 0;
      let u = s.length, y = n.length;
      for (let x = 0, R = Math.min(u, y); x < R; ++x)
        if (s[x] !== n[x]) {
          u = s[x], y = n[x];
          break;
        }
      return u < y ? -1 : y < u ? 1 : 0;
    }, o.isEncoding = function(s) {
      switch (String(s).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, o.concat = function(s, n) {
      if (!Array.isArray(s))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (s.length === 0)
        return o.alloc(0);
      let u;
      if (n === void 0)
        for (n = 0, u = 0; u < s.length; ++u)
          n += s[u].length;
      const y = o.allocUnsafe(n);
      let x = 0;
      for (u = 0; u < s.length; ++u) {
        let R = s[u];
        if (ue(R, Uint8Array))
          x + R.length > y.length ? (o.isBuffer(R) || (R = o.from(R)), R.copy(y, x)) : Uint8Array.prototype.set.call(
            y,
            R,
            x
          );
        else if (o.isBuffer(R))
          R.copy(y, x);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        x += R.length;
      }
      return y;
    };
    function S(h, s) {
      if (o.isBuffer(h))
        return h.length;
      if (ArrayBuffer.isView(h) || ue(h, ArrayBuffer))
        return h.byteLength;
      if (typeof h != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
        );
      const n = h.length, u = arguments.length > 2 && arguments[2] === !0;
      if (!u && n === 0) return 0;
      let y = !1;
      for (; ; )
        switch (s) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;
          case "utf8":
          case "utf-8":
            return Se(h).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return n * 2;
          case "hex":
            return n >>> 1;
          case "base64":
            return He(h).length;
          default:
            if (y)
              return u ? -1 : Se(h).length;
            s = ("" + s).toLowerCase(), y = !0;
        }
    }
    o.byteLength = S;
    function D(h, s, n) {
      let u = !1;
      if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, s >>>= 0, n <= s))
        return "";
      for (h || (h = "utf8"); ; )
        switch (h) {
          case "hex":
            return N(this, s, n);
          case "utf8":
          case "utf-8":
            return le(this, s, n);
          case "ascii":
            return ae(this, s, n);
          case "latin1":
          case "binary":
            return U(this, s, n);
          case "base64":
            return Z(this, s, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return A(this, s, n);
          default:
            if (u) throw new TypeError("Unknown encoding: " + h);
            h = (h + "").toLowerCase(), u = !0;
        }
    }
    o.prototype._isBuffer = !0;
    function P(h, s, n) {
      const u = h[s];
      h[s] = h[n], h[n] = u;
    }
    o.prototype.swap16 = function() {
      const s = this.length;
      if (s % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let n = 0; n < s; n += 2)
        P(this, n, n + 1);
      return this;
    }, o.prototype.swap32 = function() {
      const s = this.length;
      if (s % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let n = 0; n < s; n += 4)
        P(this, n, n + 3), P(this, n + 1, n + 2);
      return this;
    }, o.prototype.swap64 = function() {
      const s = this.length;
      if (s % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let n = 0; n < s; n += 8)
        P(this, n, n + 7), P(this, n + 1, n + 6), P(this, n + 2, n + 5), P(this, n + 3, n + 4);
      return this;
    }, o.prototype.toString = function() {
      const s = this.length;
      return s === 0 ? "" : arguments.length === 0 ? le(this, 0, s) : D.apply(this, arguments);
    }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(s) {
      if (!o.isBuffer(s)) throw new TypeError("Argument must be a Buffer");
      return this === s ? !0 : o.compare(this, s) === 0;
    }, o.prototype.inspect = function() {
      let s = "";
      const n = i.INSPECT_MAX_BYTES;
      return s = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (s += " ... "), "<Buffer " + s + ">";
    }, r && (o.prototype[r] = o.prototype.inspect), o.prototype.compare = function(s, n, u, y, x) {
      if (ue(s, Uint8Array) && (s = o.from(s, s.offset, s.byteLength)), !o.isBuffer(s))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
        );
      if (n === void 0 && (n = 0), u === void 0 && (u = s ? s.length : 0), y === void 0 && (y = 0), x === void 0 && (x = this.length), n < 0 || u > s.length || y < 0 || x > this.length)
        throw new RangeError("out of range index");
      if (y >= x && n >= u)
        return 0;
      if (y >= x)
        return -1;
      if (n >= u)
        return 1;
      if (n >>>= 0, u >>>= 0, y >>>= 0, x >>>= 0, this === s) return 0;
      let R = x - y, _ = u - n;
      const q = Math.min(R, _), H = this.slice(y, x), X = s.slice(n, u);
      for (let $ = 0; $ < q; ++$)
        if (H[$] !== X[$]) {
          R = H[$], _ = X[$];
          break;
        }
      return R < _ ? -1 : _ < R ? 1 : 0;
    };
    function I(h, s, n, u, y) {
      if (h.length === 0) return -1;
      if (typeof n == "string" ? (u = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, ne(n) && (n = y ? 0 : h.length - 1), n < 0 && (n = h.length + n), n >= h.length) {
        if (y) return -1;
        n = h.length - 1;
      } else if (n < 0)
        if (y) n = 0;
        else return -1;
      if (typeof s == "string" && (s = o.from(s, u)), o.isBuffer(s))
        return s.length === 0 ? -1 : F(h, s, n, u, y);
      if (typeof s == "number")
        return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? y ? Uint8Array.prototype.indexOf.call(h, s, n) : Uint8Array.prototype.lastIndexOf.call(h, s, n) : F(h, [s], n, u, y);
      throw new TypeError("val must be string, number or Buffer");
    }
    function F(h, s, n, u, y) {
      let x = 1, R = h.length, _ = s.length;
      if (u !== void 0 && (u = String(u).toLowerCase(), u === "ucs2" || u === "ucs-2" || u === "utf16le" || u === "utf-16le")) {
        if (h.length < 2 || s.length < 2)
          return -1;
        x = 2, R /= 2, _ /= 2, n /= 2;
      }
      function q(X, $) {
        return x === 1 ? X[$] : X.readUInt16BE($ * x);
      }
      let H;
      if (y) {
        let X = -1;
        for (H = n; H < R; H++)
          if (q(h, H) === q(s, X === -1 ? 0 : H - X)) {
            if (X === -1 && (X = H), H - X + 1 === _) return X * x;
          } else
            X !== -1 && (H -= H - X), X = -1;
      } else
        for (n + _ > R && (n = R - _), H = n; H >= 0; H--) {
          let X = !0;
          for (let $ = 0; $ < _; $++)
            if (q(h, H + $) !== q(s, $)) {
              X = !1;
              break;
            }
          if (X) return H;
        }
      return -1;
    }
    o.prototype.includes = function(s, n, u) {
      return this.indexOf(s, n, u) !== -1;
    }, o.prototype.indexOf = function(s, n, u) {
      return I(this, s, n, u, !0);
    }, o.prototype.lastIndexOf = function(s, n, u) {
      return I(this, s, n, u, !1);
    };
    function V(h, s, n, u) {
      n = Number(n) || 0;
      const y = h.length - n;
      u ? (u = Number(u), u > y && (u = y)) : u = y;
      const x = s.length;
      u > x / 2 && (u = x / 2);
      let R;
      for (R = 0; R < u; ++R) {
        const _ = parseInt(s.substr(R * 2, 2), 16);
        if (ne(_)) return R;
        h[n + R] = _;
      }
      return R;
    }
    function J(h, s, n, u) {
      return ke(Se(s, h.length - n), h, n, u);
    }
    function ee(h, s, n, u) {
      return ke(Re(s), h, n, u);
    }
    function j(h, s, n, u) {
      return ke(He(s), h, n, u);
    }
    function K(h, s, n, u) {
      return ke(Fe(s, h.length - n), h, n, u);
    }
    o.prototype.write = function(s, n, u, y) {
      if (n === void 0)
        y = "utf8", u = this.length, n = 0;
      else if (u === void 0 && typeof n == "string")
        y = n, u = this.length, n = 0;
      else if (isFinite(n))
        n = n >>> 0, isFinite(u) ? (u = u >>> 0, y === void 0 && (y = "utf8")) : (y = u, u = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const x = this.length - n;
      if ((u === void 0 || u > x) && (u = x), s.length > 0 && (u < 0 || n < 0) || n > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      y || (y = "utf8");
      let R = !1;
      for (; ; )
        switch (y) {
          case "hex":
            return V(this, s, n, u);
          case "utf8":
          case "utf-8":
            return J(this, s, n, u);
          case "ascii":
          case "latin1":
          case "binary":
            return ee(this, s, n, u);
          case "base64":
            return j(this, s, n, u);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return K(this, s, n, u);
          default:
            if (R) throw new TypeError("Unknown encoding: " + y);
            y = ("" + y).toLowerCase(), R = !0;
        }
    }, o.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function Z(h, s, n) {
      return s === 0 && n === h.length ? e.fromByteArray(h) : e.fromByteArray(h.slice(s, n));
    }
    function le(h, s, n) {
      n = Math.min(h.length, n);
      const u = [];
      let y = s;
      for (; y < n; ) {
        const x = h[y];
        let R = null, _ = x > 239 ? 4 : x > 223 ? 3 : x > 191 ? 2 : 1;
        if (y + _ <= n) {
          let q, H, X, $;
          switch (_) {
            case 1:
              x < 128 && (R = x);
              break;
            case 2:
              q = h[y + 1], (q & 192) === 128 && ($ = (x & 31) << 6 | q & 63, $ > 127 && (R = $));
              break;
            case 3:
              q = h[y + 1], H = h[y + 2], (q & 192) === 128 && (H & 192) === 128 && ($ = (x & 15) << 12 | (q & 63) << 6 | H & 63, $ > 2047 && ($ < 55296 || $ > 57343) && (R = $));
              break;
            case 4:
              q = h[y + 1], H = h[y + 2], X = h[y + 3], (q & 192) === 128 && (H & 192) === 128 && (X & 192) === 128 && ($ = (x & 15) << 18 | (q & 63) << 12 | (H & 63) << 6 | X & 63, $ > 65535 && $ < 1114112 && (R = $));
          }
        }
        R === null ? (R = 65533, _ = 1) : R > 65535 && (R -= 65536, u.push(R >>> 10 & 1023 | 55296), R = 56320 | R & 1023), u.push(R), y += _;
      }
      return se(u);
    }
    const Q = 4096;
    function se(h) {
      const s = h.length;
      if (s <= Q)
        return String.fromCharCode.apply(String, h);
      let n = "", u = 0;
      for (; u < s; )
        n += String.fromCharCode.apply(
          String,
          h.slice(u, u += Q)
        );
      return n;
    }
    function ae(h, s, n) {
      let u = "";
      n = Math.min(h.length, n);
      for (let y = s; y < n; ++y)
        u += String.fromCharCode(h[y] & 127);
      return u;
    }
    function U(h, s, n) {
      let u = "";
      n = Math.min(h.length, n);
      for (let y = s; y < n; ++y)
        u += String.fromCharCode(h[y]);
      return u;
    }
    function N(h, s, n) {
      const u = h.length;
      (!s || s < 0) && (s = 0), (!n || n < 0 || n > u) && (n = u);
      let y = "";
      for (let x = s; x < n; ++x)
        y += Ee[h[x]];
      return y;
    }
    function A(h, s, n) {
      const u = h.slice(s, n);
      let y = "";
      for (let x = 0; x < u.length - 1; x += 2)
        y += String.fromCharCode(u[x] + u[x + 1] * 256);
      return y;
    }
    o.prototype.slice = function(s, n) {
      const u = this.length;
      s = ~~s, n = n === void 0 ? u : ~~n, s < 0 ? (s += u, s < 0 && (s = 0)) : s > u && (s = u), n < 0 ? (n += u, n < 0 && (n = 0)) : n > u && (n = u), n < s && (n = s);
      const y = this.subarray(s, n);
      return Object.setPrototypeOf(y, o.prototype), y;
    };
    function M(h, s, n) {
      if (h % 1 !== 0 || h < 0) throw new RangeError("offset is not uint");
      if (h + s > n) throw new RangeError("Trying to access beyond buffer length");
    }
    o.prototype.readUintLE = o.prototype.readUIntLE = function(s, n, u) {
      s = s >>> 0, n = n >>> 0, u || M(s, n, this.length);
      let y = this[s], x = 1, R = 0;
      for (; ++R < n && (x *= 256); )
        y += this[s + R] * x;
      return y;
    }, o.prototype.readUintBE = o.prototype.readUIntBE = function(s, n, u) {
      s = s >>> 0, n = n >>> 0, u || M(s, n, this.length);
      let y = this[s + --n], x = 1;
      for (; n > 0 && (x *= 256); )
        y += this[s + --n] * x;
      return y;
    }, o.prototype.readUint8 = o.prototype.readUInt8 = function(s, n) {
      return s = s >>> 0, n || M(s, 1, this.length), this[s];
    }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(s, n) {
      return s = s >>> 0, n || M(s, 2, this.length), this[s] | this[s + 1] << 8;
    }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(s, n) {
      return s = s >>> 0, n || M(s, 2, this.length), this[s] << 8 | this[s + 1];
    }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(s, n) {
      return s = s >>> 0, n || M(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
    }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(s, n) {
      return s = s >>> 0, n || M(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
    }, o.prototype.readBigUInt64LE = ce(function(s) {
      s = s >>> 0, pe(s, "offset");
      const n = this[s], u = this[s + 7];
      (n === void 0 || u === void 0) && be(s, this.length - 8);
      const y = n + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, x = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + u * 2 ** 24;
      return BigInt(y) + (BigInt(x) << BigInt(32));
    }), o.prototype.readBigUInt64BE = ce(function(s) {
      s = s >>> 0, pe(s, "offset");
      const n = this[s], u = this[s + 7];
      (n === void 0 || u === void 0) && be(s, this.length - 8);
      const y = n * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], x = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + u;
      return (BigInt(y) << BigInt(32)) + BigInt(x);
    }), o.prototype.readIntLE = function(s, n, u) {
      s = s >>> 0, n = n >>> 0, u || M(s, n, this.length);
      let y = this[s], x = 1, R = 0;
      for (; ++R < n && (x *= 256); )
        y += this[s + R] * x;
      return x *= 128, y >= x && (y -= Math.pow(2, 8 * n)), y;
    }, o.prototype.readIntBE = function(s, n, u) {
      s = s >>> 0, n = n >>> 0, u || M(s, n, this.length);
      let y = n, x = 1, R = this[s + --y];
      for (; y > 0 && (x *= 256); )
        R += this[s + --y] * x;
      return x *= 128, R >= x && (R -= Math.pow(2, 8 * n)), R;
    }, o.prototype.readInt8 = function(s, n) {
      return s = s >>> 0, n || M(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
    }, o.prototype.readInt16LE = function(s, n) {
      s = s >>> 0, n || M(s, 2, this.length);
      const u = this[s] | this[s + 1] << 8;
      return u & 32768 ? u | 4294901760 : u;
    }, o.prototype.readInt16BE = function(s, n) {
      s = s >>> 0, n || M(s, 2, this.length);
      const u = this[s + 1] | this[s] << 8;
      return u & 32768 ? u | 4294901760 : u;
    }, o.prototype.readInt32LE = function(s, n) {
      return s = s >>> 0, n || M(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
    }, o.prototype.readInt32BE = function(s, n) {
      return s = s >>> 0, n || M(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
    }, o.prototype.readBigInt64LE = ce(function(s) {
      s = s >>> 0, pe(s, "offset");
      const n = this[s], u = this[s + 7];
      (n === void 0 || u === void 0) && be(s, this.length - 8);
      const y = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (u << 24);
      return (BigInt(y) << BigInt(32)) + BigInt(n + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
    }), o.prototype.readBigInt64BE = ce(function(s) {
      s = s >>> 0, pe(s, "offset");
      const n = this[s], u = this[s + 7];
      (n === void 0 || u === void 0) && be(s, this.length - 8);
      const y = (n << 24) + // Overflow
      this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
      return (BigInt(y) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + u);
    }), o.prototype.readFloatLE = function(s, n) {
      return s = s >>> 0, n || M(s, 4, this.length), t.read(this, s, !0, 23, 4);
    }, o.prototype.readFloatBE = function(s, n) {
      return s = s >>> 0, n || M(s, 4, this.length), t.read(this, s, !1, 23, 4);
    }, o.prototype.readDoubleLE = function(s, n) {
      return s = s >>> 0, n || M(s, 8, this.length), t.read(this, s, !0, 52, 8);
    }, o.prototype.readDoubleBE = function(s, n) {
      return s = s >>> 0, n || M(s, 8, this.length), t.read(this, s, !1, 52, 8);
    };
    function B(h, s, n, u, y, x) {
      if (!o.isBuffer(h)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (s > y || s < x) throw new RangeError('"value" argument is out of bounds');
      if (n + u > h.length) throw new RangeError("Index out of range");
    }
    o.prototype.writeUintLE = o.prototype.writeUIntLE = function(s, n, u, y) {
      if (s = +s, n = n >>> 0, u = u >>> 0, !y) {
        const _ = Math.pow(2, 8 * u) - 1;
        B(this, s, n, u, _, 0);
      }
      let x = 1, R = 0;
      for (this[n] = s & 255; ++R < u && (x *= 256); )
        this[n + R] = s / x & 255;
      return n + u;
    }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(s, n, u, y) {
      if (s = +s, n = n >>> 0, u = u >>> 0, !y) {
        const _ = Math.pow(2, 8 * u) - 1;
        B(this, s, n, u, _, 0);
      }
      let x = u - 1, R = 1;
      for (this[n + x] = s & 255; --x >= 0 && (R *= 256); )
        this[n + x] = s / R & 255;
      return n + u;
    }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 1, 255, 0), this[n] = s & 255, n + 1;
    }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 2, 65535, 0), this[n] = s & 255, this[n + 1] = s >>> 8, n + 2;
    }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 2, 65535, 0), this[n] = s >>> 8, this[n + 1] = s & 255, n + 2;
    }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 4, 4294967295, 0), this[n + 3] = s >>> 24, this[n + 2] = s >>> 16, this[n + 1] = s >>> 8, this[n] = s & 255, n + 4;
    }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 4, 4294967295, 0), this[n] = s >>> 24, this[n + 1] = s >>> 16, this[n + 2] = s >>> 8, this[n + 3] = s & 255, n + 4;
    };
    function he(h, s, n, u, y) {
      Ue(s, u, y, h, n, 7);
      let x = Number(s & BigInt(4294967295));
      h[n++] = x, x = x >> 8, h[n++] = x, x = x >> 8, h[n++] = x, x = x >> 8, h[n++] = x;
      let R = Number(s >> BigInt(32) & BigInt(4294967295));
      return h[n++] = R, R = R >> 8, h[n++] = R, R = R >> 8, h[n++] = R, R = R >> 8, h[n++] = R, n;
    }
    function W(h, s, n, u, y) {
      Ue(s, u, y, h, n, 7);
      let x = Number(s & BigInt(4294967295));
      h[n + 7] = x, x = x >> 8, h[n + 6] = x, x = x >> 8, h[n + 5] = x, x = x >> 8, h[n + 4] = x;
      let R = Number(s >> BigInt(32) & BigInt(4294967295));
      return h[n + 3] = R, R = R >> 8, h[n + 2] = R, R = R >> 8, h[n + 1] = R, R = R >> 8, h[n] = R, n + 8;
    }
    o.prototype.writeBigUInt64LE = ce(function(s, n = 0) {
      return he(this, s, n, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeBigUInt64BE = ce(function(s, n = 0) {
      return W(this, s, n, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeIntLE = function(s, n, u, y) {
      if (s = +s, n = n >>> 0, !y) {
        const q = Math.pow(2, 8 * u - 1);
        B(this, s, n, u, q - 1, -q);
      }
      let x = 0, R = 1, _ = 0;
      for (this[n] = s & 255; ++x < u && (R *= 256); )
        s < 0 && _ === 0 && this[n + x - 1] !== 0 && (_ = 1), this[n + x] = (s / R >> 0) - _ & 255;
      return n + u;
    }, o.prototype.writeIntBE = function(s, n, u, y) {
      if (s = +s, n = n >>> 0, !y) {
        const q = Math.pow(2, 8 * u - 1);
        B(this, s, n, u, q - 1, -q);
      }
      let x = u - 1, R = 1, _ = 0;
      for (this[n + x] = s & 255; --x >= 0 && (R *= 256); )
        s < 0 && _ === 0 && this[n + x + 1] !== 0 && (_ = 1), this[n + x] = (s / R >> 0) - _ & 255;
      return n + u;
    }, o.prototype.writeInt8 = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[n] = s & 255, n + 1;
    }, o.prototype.writeInt16LE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 2, 32767, -32768), this[n] = s & 255, this[n + 1] = s >>> 8, n + 2;
    }, o.prototype.writeInt16BE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 2, 32767, -32768), this[n] = s >>> 8, this[n + 1] = s & 255, n + 2;
    }, o.prototype.writeInt32LE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 4, 2147483647, -2147483648), this[n] = s & 255, this[n + 1] = s >>> 8, this[n + 2] = s >>> 16, this[n + 3] = s >>> 24, n + 4;
    }, o.prototype.writeInt32BE = function(s, n, u) {
      return s = +s, n = n >>> 0, u || B(this, s, n, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[n] = s >>> 24, this[n + 1] = s >>> 16, this[n + 2] = s >>> 8, this[n + 3] = s & 255, n + 4;
    }, o.prototype.writeBigInt64LE = ce(function(s, n = 0) {
      return he(this, s, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), o.prototype.writeBigInt64BE = ce(function(s, n = 0) {
      return W(this, s, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function de(h, s, n, u, y, x) {
      if (n + u > h.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range");
    }
    function re(h, s, n, u, y) {
      return s = +s, n = n >>> 0, y || de(h, s, n, 4), t.write(h, s, n, u, 23, 4), n + 4;
    }
    o.prototype.writeFloatLE = function(s, n, u) {
      return re(this, s, n, !0, u);
    }, o.prototype.writeFloatBE = function(s, n, u) {
      return re(this, s, n, !1, u);
    };
    function we(h, s, n, u, y) {
      return s = +s, n = n >>> 0, y || de(h, s, n, 8), t.write(h, s, n, u, 52, 8), n + 8;
    }
    o.prototype.writeDoubleLE = function(s, n, u) {
      return we(this, s, n, !0, u);
    }, o.prototype.writeDoubleBE = function(s, n, u) {
      return we(this, s, n, !1, u);
    }, o.prototype.copy = function(s, n, u, y) {
      if (!o.isBuffer(s)) throw new TypeError("argument should be a Buffer");
      if (u || (u = 0), !y && y !== 0 && (y = this.length), n >= s.length && (n = s.length), n || (n = 0), y > 0 && y < u && (y = u), y === u || s.length === 0 || this.length === 0) return 0;
      if (n < 0)
        throw new RangeError("targetStart out of bounds");
      if (u < 0 || u >= this.length) throw new RangeError("Index out of range");
      if (y < 0) throw new RangeError("sourceEnd out of bounds");
      y > this.length && (y = this.length), s.length - n < y - u && (y = s.length - n + u);
      const x = y - u;
      return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(n, u, y) : Uint8Array.prototype.set.call(
        s,
        this.subarray(u, y),
        n
      ), x;
    }, o.prototype.fill = function(s, n, u, y) {
      if (typeof s == "string") {
        if (typeof n == "string" ? (y = n, n = 0, u = this.length) : typeof u == "string" && (y = u, u = this.length), y !== void 0 && typeof y != "string")
          throw new TypeError("encoding must be a string");
        if (typeof y == "string" && !o.isEncoding(y))
          throw new TypeError("Unknown encoding: " + y);
        if (s.length === 1) {
          const R = s.charCodeAt(0);
          (y === "utf8" && R < 128 || y === "latin1") && (s = R);
        }
      } else typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
      if (n < 0 || this.length < n || this.length < u)
        throw new RangeError("Out of range index");
      if (u <= n)
        return this;
      n = n >>> 0, u = u === void 0 ? this.length : u >>> 0, s || (s = 0);
      let x;
      if (typeof s == "number")
        for (x = n; x < u; ++x)
          this[x] = s;
      else {
        const R = o.isBuffer(s) ? s : o.from(s, y), _ = R.length;
        if (_ === 0)
          throw new TypeError('The value "' + s + '" is invalid for argument "value"');
        for (x = 0; x < u - n; ++x)
          this[x + n] = R[x % _];
      }
      return this;
    };
    const ge = {};
    function De(h, s, n) {
      ge[h] = class extends n {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: s.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
        }
        get code() {
          return h;
        }
        set code(y) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${h}]: ${this.message}`;
        }
      };
    }
    De(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(h) {
        return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), De(
      "ERR_INVALID_ARG_TYPE",
      function(h, s) {
        return `The "${h}" argument must be of type number. Received type ${typeof s}`;
      },
      TypeError
    ), De(
      "ERR_OUT_OF_RANGE",
      function(h, s, n) {
        let u = `The value of "${h}" is out of range.`, y = n;
        return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? y = Le(String(n)) : typeof n == "bigint" && (y = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (y = Le(y)), y += "n"), u += ` It must be ${s}. Received ${y}`, u;
      },
      RangeError
    );
    function Le(h) {
      let s = "", n = h.length;
      const u = h[0] === "-" ? 1 : 0;
      for (; n >= u + 4; n -= 3)
        s = `_${h.slice(n - 3, n)}${s}`;
      return `${h.slice(0, n)}${s}`;
    }
    function ze(h, s, n) {
      pe(s, "offset"), (h[s] === void 0 || h[s + n] === void 0) && be(s, h.length - (n + 1));
    }
    function Ue(h, s, n, u, y, x) {
      if (h > n || h < s) {
        const R = typeof s == "bigint" ? "n" : "";
        let _;
        throw s === 0 || s === BigInt(0) ? _ = `>= 0${R} and < 2${R} ** ${(x + 1) * 8}${R}` : _ = `>= -(2${R} ** ${(x + 1) * 8 - 1}${R}) and < 2 ** ${(x + 1) * 8 - 1}${R}`, new ge.ERR_OUT_OF_RANGE("value", _, h);
      }
      ze(u, y, x);
    }
    function pe(h, s) {
      if (typeof h != "number")
        throw new ge.ERR_INVALID_ARG_TYPE(s, "number", h);
    }
    function be(h, s, n) {
      throw Math.floor(h) !== h ? (pe(h, n), new ge.ERR_OUT_OF_RANGE("offset", "an integer", h)) : s < 0 ? new ge.ERR_BUFFER_OUT_OF_BOUNDS() : new ge.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${s}`,
        h
      );
    }
    const xe = /[^+/0-9A-Za-z-_]/g;
    function Ge(h) {
      if (h = h.split("=")[0], h = h.trim().replace(xe, ""), h.length < 2) return "";
      for (; h.length % 4 !== 0; )
        h = h + "=";
      return h;
    }
    function Se(h, s) {
      s = s || 1 / 0;
      let n;
      const u = h.length;
      let y = null;
      const x = [];
      for (let R = 0; R < u; ++R) {
        if (n = h.charCodeAt(R), n > 55295 && n < 57344) {
          if (!y) {
            if (n > 56319) {
              (s -= 3) > -1 && x.push(239, 191, 189);
              continue;
            } else if (R + 1 === u) {
              (s -= 3) > -1 && x.push(239, 191, 189);
              continue;
            }
            y = n;
            continue;
          }
          if (n < 56320) {
            (s -= 3) > -1 && x.push(239, 191, 189), y = n;
            continue;
          }
          n = (y - 55296 << 10 | n - 56320) + 65536;
        } else y && (s -= 3) > -1 && x.push(239, 191, 189);
        if (y = null, n < 128) {
          if ((s -= 1) < 0) break;
          x.push(n);
        } else if (n < 2048) {
          if ((s -= 2) < 0) break;
          x.push(
            n >> 6 | 192,
            n & 63 | 128
          );
        } else if (n < 65536) {
          if ((s -= 3) < 0) break;
          x.push(
            n >> 12 | 224,
            n >> 6 & 63 | 128,
            n & 63 | 128
          );
        } else if (n < 1114112) {
          if ((s -= 4) < 0) break;
          x.push(
            n >> 18 | 240,
            n >> 12 & 63 | 128,
            n >> 6 & 63 | 128,
            n & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return x;
    }
    function Re(h) {
      const s = [];
      for (let n = 0; n < h.length; ++n)
        s.push(h.charCodeAt(n) & 255);
      return s;
    }
    function Fe(h, s) {
      let n, u, y;
      const x = [];
      for (let R = 0; R < h.length && !((s -= 2) < 0); ++R)
        n = h.charCodeAt(R), u = n >> 8, y = n % 256, x.push(y), x.push(u);
      return x;
    }
    function He(h) {
      return e.toByteArray(Ge(h));
    }
    function ke(h, s, n, u) {
      let y;
      for (y = 0; y < u && !(y + n >= s.length || y >= h.length); ++y)
        s[y + n] = h[y];
      return y;
    }
    function ue(h, s) {
      return h instanceof s || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === s.name;
    }
    function ne(h) {
      return h !== h;
    }
    const Ee = (function() {
      const h = "0123456789abcdef", s = new Array(256);
      for (let n = 0; n < 16; ++n) {
        const u = n * 16;
        for (let y = 0; y < 16; ++y)
          s[u + y] = h[n] + h[y];
      }
      return s;
    })();
    function ce(h) {
      return typeof BigInt > "u" ? L : h;
    }
    function L() {
      throw new Error("BigInt not supported");
    }
  })(bt)), bt;
}
var xt = Fs();
const je = class je {
  constructor() {
    d(this, "key", null);
    d(this, "awsS3Service", new Ae());
  }
  async encrypt(e) {
    const t = JSON.stringify(e), r = await this.getKey(), a = window.crypto.getRandomValues(
      new Uint8Array(je.GCM_IV_LENGTH)
    ), c = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: a
      },
      r,
      new TextEncoder().encode(t)
    ), l = new Uint8Array([...a, ...new Uint8Array(c)]);
    return xt.Buffer.from(l).toString("base64");
  }
  async decrypt(e) {
    try {
      const t = await this.getKey(), r = new Uint8Array(xt.Buffer.from(e, "base64")), a = r.slice(0, je.GCM_IV_LENGTH), c = r.slice(je.GCM_IV_LENGTH), l = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: a
        },
        t,
        c
      );
      return new TextDecoder().decode(l);
    } catch (t) {
      return console.error("Decryption error:", t), null;
    }
  }
  async getKey() {
    if (!this.key)
      try {
        const e = await this.awsS3Service.getDataFromS3(
          "fda-app-secure-store",
          "aesKey.json"
        ), t = xt.Buffer.from(e.key, "base64");
        this.key = await window.crypto.subtle.importKey(
          "raw",
          t,
          { name: "AES-GCM" },
          !1,
          ["encrypt", "decrypt"]
        );
      } catch (e) {
        throw new Error(`Key retrieval failed: ${e}`);
      }
    return this.key;
  }
};
d(je, "GCM_IV_LENGTH", 12);
let Oe = je;
const Ps = 15, Is = {
  development: !0,
  serverHost: "http://localhost:5000",
  endPoints: {
    getHealth: "/api/v2/get_health",
    sendHealthReport: void 0
  },
  coldStartDuration: 0,
  schemaVersion: "1.4",
  encrypted: !1
}, _s = {
  development: !0,
  serverHost: "http://localhost:5000",
  endPoints: {
    getHealth: "/vitals-v2/get-health",
    sendHealthReport: void 0
  },
  coldStartDuration: 0,
  schemaVersion: "2.1",
  encrypted: !0
}, As = {
  // Aws backend, Firebase Users
  development: !0,
  serverHost: "https://backend.panoptic.ai",
  endPoints: {
    getHealth: "/v2/dev/get-health",
    sendHealthReport: "/email/dev"
  },
  coldStartDuration: 25,
  schemaVersion: "1.2",
  encrypted: !1
}, Ms = {
  // Aws backend, Firebase Users
  development: !1,
  serverHost: "https://backend.panoptic.ai",
  endPoints: {
    getHealth: "/v2/get-health",
    sendHealthReport: "/email"
  },
  coldStartDuration: 25,
  schemaVersion: "1.2",
  encrypted: !1
}, Bs = {
  // Aws backend & Users
  development: !0,
  serverHost: "https://aws-backend.panoptic.ai",
  endPoints: {
    getHealth: "/v2/dev/get-health",
    sendHealthReport: "/email/dev"
  },
  coldStartDuration: 25,
  schemaVersion: "1.4",
  encrypted: !1
}, _i = {
  // Aws backend & Users
  development: !1,
  serverHost: "https://aws-backend.panoptic.ai",
  endPoints: {
    getHealth: "/v2/get-health",
    sendHealthReport: "/email"
  },
  coldStartDuration: 25,
  schemaVersion: "1.4",
  encrypted: !1
}, Os = {
  // Aws backend, Firebase Users for Enterpise
  development: !1,
  serverHost: "https://aws-backend.panoptic.ai",
  endPoints: {
    getHealth: "/v2/get-health-company",
    sendHealthReport: "/email"
  },
  coldStartDuration: 25,
  schemaVersion: "1.2",
  encrypted: !1
}, Ls = {
  // Aws backend & Users for Enterpise
  development: !0,
  serverHost: "https://aws-backend.panoptic.ai",
  endPoints: {
    getHealth: "/v2/dev/get-health-company",
    sendHealthReport: "/email/dev"
  },
  coldStartDuration: 25,
  schemaVersion: "1.5",
  encrypted: !1
}, Us = {
  // Aws backend & Users for Enterpise
  development: !1,
  serverHost: "https://aws-backend.panoptic.ai",
  endPoints: {
    getHealth: "/v2/get-health-company",
    sendHealthReport: "/email"
  },
  coldStartDuration: 25,
  schemaVersion: "1.5",
  encrypted: !1
}, Vs = {
  // AWS development backend protocol schema V2.
  development: !0,
  serverHost: "https://aws-backend.panoptic.ai",
  endPoints: {
    getHealth: "/vitals-v2-dev/get-health",
    sendHealthReport: void 0
  },
  coldStartDuration: 25,
  schemaVersion: "2.2",
  encrypted: !0
}, Ns = {
  // AWS production backend with protocol schema V2.
  development: !1,
  serverHost: "https://aws-backend.panoptic.ai",
  endPoints: {
    getHealth: "/vitals-v2/get-health",
    sendHealthReport: void 0
  },
  coldStartDuration: 25,
  schemaVersion: "2.2",
  encrypted: !0
};
class Xt {
  constructor(e) {
    d(this, "windowDuration", Ps);
    d(this, "deviceId", Ve());
    d(this, "config", _i);
    d(this, "getHealthUrlOverride");
    d(this, "apiKey");
    d(this, "aesCryptor");
    d(this, "httpCall", (...e) => fetch(...e));
    // Cached encrypted payloads (V2 only)
    d(this, "encryptedLastRequest");
    d(this, "encryptedLastResponse");
    this.config = e;
  }
  setServerUrl(e) {
    this.config.serverHost = e;
  }
  setEndpointUrl(e) {
    this.getHealthUrlOverride = e;
  }
  getUrl() {
    return this.getHealthUrlOverride ? this.getHealthUrlOverride : this.config.serverHost + this.config.endPoints.getHealth;
  }
  get httpHeaders() {
    const e = { "Content-Type": "application/json" };
    return this.apiKey && (e["X-Api-Key"] = this.apiKey), e;
  }
  async wakeUpServer() {
    const e = this.getUrl();
    this.aesCryptor = new Oe();
    let t = { isAlive: !0 };
    this.config.encrypted && (t = {
      data: await this.aesCryptor.encrypt(t)
    }), await this.httpCall(e, {
      method: "POST",
      headers: this.httpHeaders,
      body: JSON.stringify(t)
    });
  }
  async callAPI(e, t) {
    this.aesCryptor = new Oe();
    let r = t;
    const a = t && t.hasOwnProperty("isAlive");
    this.config.encrypted && (r = {
      data: await this.aesCryptor.encrypt(t)
    }, a || (this.encryptedLastRequest = JSON.stringify(r)));
    let c;
    try {
      c = await this.httpCall(e, {
        method: "POST",
        headers: this.httpHeaders,
        body: JSON.stringify(r)
      });
    } catch (o) {
      const g = o instanceof Error ? o.message : String(o);
      throw g.includes("Load failed") || g.includes("Failed to fetch") || g.includes("NetworkError") ? new Error("Internal server error. The server encountered an unexpected error while processing your request.") : new Error(`Network error: ${g}`);
    }
    if (c.status != 200) {
      const o = await c.text();
      throw new Error(`Error: ${c.status} ${o}`);
    }
    let l = await c.json();
    if (this.config.encrypted) {
      a || (this.encryptedLastResponse = JSON.stringify(l));
      const o = await this.aesCryptor.decrypt(l.data);
      o && (l = JSON.parse(o));
    }
    return l;
  }
  /* Deprecated. For backward compatibility only */
  getUrlSES() {
    return this.config.serverHost + this.config.endPoints.sendHealthReport;
  }
  /* Deprecated. For backward compatibility only */
  async sendHealthReport(e, t, r, a) {
    const c = this.getUrlSES(), l = {
      type: "attachment",
      params: {
        Recipients: e,
        EmailContent: r.emailContent,
        EmailSubject: r.emailSubject,
        FileName: r.fileName,
        Attachments: t,
        Source: a
      }
    }, o = await this.httpCall(c, {
      method: "POST",
      headers: this.httpHeaders,
      body: JSON.stringify(l)
    });
    if (o.status != 200)
      throw new Error(o.statusText);
    return o.json();
  }
}
var Je = { exports: {} }, Ws = Je.exports, Jt;
function zs() {
  return Jt || (Jt = 1, (function(i, e) {
    (function(t, r) {
      var a = "1.0.39", c = "", l = "?", o = "function", g = "undefined", b = "object", E = "string", T = "major", w = "model", f = "name", p = "type", m = "vendor", v = "version", k = "architecture", C = "console", S = "mobile", D = "tablet", P = "smarttv", I = "wearable", F = "embedded", V = 500, J = "Amazon", ee = "Apple", j = "ASUS", K = "BlackBerry", Z = "Browser", le = "Chrome", Q = "Edge", se = "Firefox", ae = "Google", U = "Huawei", N = "LG", A = "Microsoft", M = "Motorola", B = "Opera", he = "Samsung", W = "Sharp", de = "Sony", re = "Xiaomi", we = "Zebra", ge = "Facebook", De = "Chromium OS", Le = "Mac OS", ze = " Browser", Ue = function(L, h) {
        var s = {};
        for (var n in L)
          h[n] && h[n].length % 2 === 0 ? s[n] = h[n].concat(L[n]) : s[n] = L[n];
        return s;
      }, pe = function(L) {
        for (var h = {}, s = 0; s < L.length; s++)
          h[L[s].toUpperCase()] = L[s];
        return h;
      }, be = function(L, h) {
        return typeof L === E ? xe(h).indexOf(xe(L)) !== -1 : !1;
      }, xe = function(L) {
        return L.toLowerCase();
      }, Ge = function(L) {
        return typeof L === E ? L.replace(/[^\d\.]/g, c).split(".")[0] : r;
      }, Se = function(L, h) {
        if (typeof L === E)
          return L = L.replace(/^\s\s*/, c), typeof h === g ? L : L.substring(0, V);
      }, Re = function(L, h) {
        for (var s = 0, n, u, y, x, R, _; s < h.length && !R; ) {
          var q = h[s], H = h[s + 1];
          for (n = u = 0; n < q.length && !R && q[n]; )
            if (R = q[n++].exec(L), R)
              for (y = 0; y < H.length; y++)
                _ = R[++u], x = H[y], typeof x === b && x.length > 0 ? x.length === 2 ? typeof x[1] == o ? this[x[0]] = x[1].call(this, _) : this[x[0]] = x[1] : x.length === 3 ? typeof x[1] === o && !(x[1].exec && x[1].test) ? this[x[0]] = _ ? x[1].call(this, _, x[2]) : r : this[x[0]] = _ ? _.replace(x[1], x[2]) : r : x.length === 4 && (this[x[0]] = _ ? x[3].call(this, _.replace(x[1], x[2])) : r) : this[x] = _ || r;
          s += 2;
        }
      }, Fe = function(L, h) {
        for (var s in h)
          if (typeof h[s] === b && h[s].length > 0) {
            for (var n = 0; n < h[s].length; n++)
              if (be(h[s][n], L))
                return s === l ? r : s;
          } else if (be(h[s], L))
            return s === l ? r : s;
        return h.hasOwnProperty("*") ? h["*"] : L;
      }, He = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, ke = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        "8.1": "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
      }, ue = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [v, [f, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [v, [f, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [f, v],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [v, [f, B + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [v, [f, B + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [v, [f, B]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [v, [f, "Baidu"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
            // Avant/IEMobile/SlimBrowser
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio
            /(heytap|ovi)browser\/([\d\.]+)/i,
            // HeyTap/Ovi
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [f, v],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [v, [f, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [v, [f, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [v, [f, "UC" + Z]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [v, [f, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [v, [f, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [v, [f, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [v, [f, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [v, [f, "Smart Lenovo " + Z]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[f, /(.+)/, "$1 Secure " + Z], v],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [v, [f, se + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [v, [f, B + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [v, [f, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [v, [f, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [v, [f, B + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [v, [f, "MIUI " + Z]],
          [
            /fxios\/([-\w\.]+)/i
            // Firefox for iOS
          ],
          [v, [f, se]],
          [
            /\bqihu|(qi?ho?o?|360)browser/i
            // 360
          ],
          [[f, "360" + ze]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[f, /(.+)/, "$1Browser"], v],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[f, /(.+)/, "$1" + ze], v],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [v, [f, he + " Internet"]],
          [
            /(comodo_dragon)\/([\w\.]+)/i
            // Comodo Dragon
          ],
          [[f, /_/g, " "], v],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [v, [f, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[f, "Sogou Mobile"], v],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
            // QQBrowser/2345 Browser
          ],
          [f, v],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [f],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[f, ge], v],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [f, v],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [v, [f, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [v, [f, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [v, [f, le + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[f, le + " WebView"], v],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [v, [f, "Android " + Z]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [f, v],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [v, [f, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [v, f],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [f, [v, Fe, He]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [f, v],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[f, "Netscape"], v],
          [
            /(wolvic)\/([\w\.]+)/i
            // Wolvic
          ],
          [f, v],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [v, [f, se + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i
            // Links
          ],
          [f, [v, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [f, [v, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            // AMD64 (x64)
          ],
          [[k, "amd64"]],
          [
            /(ia32(?=;))/i
            // IA32 (quicktime)
          ],
          [[k, xe]],
          [
            /((?:i[346]|x)86)[;\)]/i
            // IA32 (x86)
          ],
          [[k, "ia32"]],
          [
            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            // ARM64
          ],
          [[k, "arm64"]],
          [
            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[k, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
          ],
          [[k, "arm"]],
          [
            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            // PowerPC
          ],
          [[k, /ower/, c, xe]],
          [
            /(sun4\w)[;\)]/i
            // SPARC
          ],
          [[k, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[k, xe]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [w, [m, he], [p, D]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [w, [m, he], [p, S]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [w, [m, ee], [p, S]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [w, [m, ee], [p, D]],
          [
            /(macintosh);/i
          ],
          [w, [m, ee]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [w, [m, W], [p, S]],
          [
            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
          ],
          [w, [m, U], [p, D]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [w, [m, U], [p, S]],
          [
            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i
            // Xiaomi Mi
          ],
          [[w, /_/g, " "], [m, re], [p, S]],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[w, /_/g, " "], [m, re], [p, D]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [w, [m, "OPPO"], [p, S]],
          [
            /\b(opd2\d{3}a?) bui/i
          ],
          [w, [m, "OPPO"], [p, D]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [w, [m, "Vivo"], [p, S]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [w, [m, "Realme"], [p, S]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [w, [m, M], [p, S]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [w, [m, M], [p, D]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [w, [m, N], [p, D]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [w, [m, N], [p, S]],
          [
            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [w, [m, "Lenovo"], [p, D]],
          [
            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
          ],
          [[w, /_/g, " "], [m, "Nokia"], [p, S]],
          [
            // Google
            /(pixel c)\b/i
            // Google Pixel C
          ],
          [w, [m, ae], [p, D]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [w, [m, ae], [p, S]],
          [
            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [w, [m, de], [p, S]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[w, "Xperia Tablet"], [m, de], [p, D]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [w, [m, "OnePlus"], [p, S]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [w, [m, J], [p, D]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[w, /(.+)/g, "Fire Phone $1"], [m, J], [p, S]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [w, m, [p, D]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [w, [m, K], [p, S]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [w, [m, j], [p, D]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [w, [m, j], [p, S]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [w, [m, "HTC"], [p, D]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [m, [w, /_/g, " "], [p, S]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [w, [m, "TCL"], [p, D]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[m, xe], w, [p, Fe, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [w, [m, "Acer"], [p, D]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [w, [m, "Meizu"], [p, S]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [w, [m, "Ulefone"], [p, S]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [w, [m, "Nothing"], [p, S]],
          [
            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(asus)-?(\w+)/i,
            // Asus
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,
            // Lenovo
            /(jolla)/i,
            // Jolla
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [m, w, [p, S]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(archos) (gamepad2?)/i,
            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [m, w, [p, D]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [w, [m, A], [p, D]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [w, [m, "Fairphone"], [p, S]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [w, [m, "AT&T"], [p, S]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [w, [m, "Siemens"], [p, S]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [w, [m, "RCA"], [p, D]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [w, [m, "Dell"], [p, D]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [w, [m, "Verizon"], [p, D]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [w, [m, "Barnes & Noble"], [p, D]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [w, [m, "NuVision"], [p, D]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [w, [m, "ZTE"], [p, D]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [w, [m, "ZTE"], [p, S]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [w, [m, "Swiss"], [p, S]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [w, [m, "Swiss"], [p, D]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [w, [m, "Zeki"], [p, D]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[m, "Dragon Touch"], w, [p, D]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [w, [m, "Insignia"], [p, D]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [w, [m, "NextBook"], [p, D]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[m, "Voice"], w, [p, S]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[m, "LvTel"], w, [p, S]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [w, [m, "Essential"], [p, S]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [w, [m, "Envizen"], [p, D]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [w, [m, "MachSpeed"], [p, D]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [w, [m, "Rotor"], [p, D]],
          [
            /(shield[\w ]+) b/i
            // Nvidia Shield Tablets
          ],
          [w, [m, "Nvidia"], [p, D]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [m, w, [p, S]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[w, /\./g, " "], [m, A], [p, S]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [w, [m, we], [p, D]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [w, [m, we], [p, S]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [m, [p, P]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[w, /^/, "SmartTV"], [m, he], [p, P]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[m, N], [p, P]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [m, [w, ee + " TV"], [p, P]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[w, le + "cast"], [m, ae], [p, P]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [w, [m, J], [p, P]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [w, [m, W], [p, P]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [w, [m, de], [p, P]],
          [
            /(mitv-\w{5}) bui/i
            // Xiaomi
          ],
          [w, [m, re], [p, P]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [m, w, [p, P]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[m, Se], [w, Se], [p, P]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            // SmartTV from Unidentified Vendors
          ],
          [[p, P]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [m, w, [p, C]],
          [
            /droid.+; (shield) bui/i
            // Nvidia
          ],
          [w, [m, "Nvidia"], [p, C]],
          [
            /(playstation [345portablevi]+)/i
            // Playstation
          ],
          [w, [m, de], [p, C]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [w, [m, A], [p, C]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i
            // Samsung Galaxy Watch
          ],
          [w, [m, he], [p, I]],
          [
            /((pebble))app/i
            // Pebble
          ],
          [m, w, [p, I]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [w, [m, ee], [p, I]],
          [
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [w, [m, ae], [p, I]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [w, [m, we], [p, I]],
          [
            /(quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [w, [m, ge], [p, I]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [m, [p, F]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [w, [m, J], [p, F]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [w, [p, S]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [w, [p, D]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[p, D]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[p, S]],
          [
            /(android[-\w\. ]{0,9});.+buil/i
            // Generic Android Device
          ],
          [w, [m, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [v, [f, Q + "HTML"]],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [v, [f, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
          ],
          [f, v],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [v, f]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [f, v],
          [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [f, [v, Fe, ke]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[v, Fe, ke], [f, "Windows"]],
          [
            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[v, /_/g, "."], [f, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[f, Le], [v, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [v, f],
          [
            // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            // Tizen/KaiOS
            /\((series40);/i
            // Series 40
          ],
          [f, v],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [v, [f, K]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [v, [f, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [v, [f, se + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [v, [f, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [v, [f, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [v, [f, le + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[f, De], v],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [f, v],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[f, "Solaris"], v],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [f, v]
        ]
      }, ne = function(L, h) {
        if (typeof L === b && (h = L, L = r), !(this instanceof ne))
          return new ne(L, h).getResult();
        var s = typeof t !== g && t.navigator ? t.navigator : r, n = L || (s && s.userAgent ? s.userAgent : c), u = s && s.userAgentData ? s.userAgentData : r, y = h ? Ue(ue, h) : ue, x = s && s.userAgent == n;
        return this.getBrowser = function() {
          var R = {};
          return R[f] = r, R[v] = r, Re.call(R, n, y.browser), R[T] = Ge(R[v]), x && s && s.brave && typeof s.brave.isBrave == o && (R[f] = "Brave"), R;
        }, this.getCPU = function() {
          var R = {};
          return R[k] = r, Re.call(R, n, y.cpu), R;
        }, this.getDevice = function() {
          var R = {};
          return R[m] = r, R[w] = r, R[p] = r, Re.call(R, n, y.device), x && !R[p] && u && u.mobile && (R[p] = S), x && R[w] == "Macintosh" && s && typeof s.standalone !== g && s.maxTouchPoints && s.maxTouchPoints > 2 && (R[w] = "iPad", R[p] = D), R;
        }, this.getEngine = function() {
          var R = {};
          return R[f] = r, R[v] = r, Re.call(R, n, y.engine), R;
        }, this.getOS = function() {
          var R = {};
          return R[f] = r, R[v] = r, Re.call(R, n, y.os), x && !R[f] && u && u.platform && u.platform != "Unknown" && (R[f] = u.platform.replace(/chrome os/i, De).replace(/macos/i, Le)), R;
        }, this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        }, this.getUA = function() {
          return n;
        }, this.setUA = function(R) {
          return n = typeof R === E && R.length > V ? Se(R, V) : R, this;
        }, this.setUA(n), this;
      };
      ne.VERSION = a, ne.BROWSER = pe([f, v, T]), ne.CPU = pe([k]), ne.DEVICE = pe([w, m, p, C, S, P, D, I, F]), ne.ENGINE = ne.OS = pe([f, v]), i.exports && (e = i.exports = ne), e.UAParser = ne;
      var Ee = typeof t !== g && (t.jQuery || t.Zepto);
      if (Ee && !Ee.ua) {
        var ce = new ne();
        Ee.ua = ce.getResult(), Ee.ua.get = function() {
          return ce.getUA();
        }, Ee.ua.set = function(L) {
          ce.setUA(L);
          var h = ce.getResult();
          for (var s in h)
            Ee.ua[s] = h[s];
        };
      }
    })(typeof window == "object" ? window : Ws);
  })(Je, Je.exports)), Je.exports;
}
var Hs = zs();
const Pt = (i, e) => e.some((t) => i instanceof t);
let Qt, Zt;
function $s() {
  return Qt || (Qt = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function qs() {
  return Zt || (Zt = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const It = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap();
function js(i) {
  const e = new Promise((t, r) => {
    const a = () => {
      i.removeEventListener("success", c), i.removeEventListener("error", l);
    }, c = () => {
      t(Ne(i.result)), a();
    }, l = () => {
      r(i.error), a();
    };
    i.addEventListener("success", c), i.addEventListener("error", l);
  });
  return vt.set(e, i), e;
}
function Ys(i) {
  if (It.has(i))
    return;
  const e = new Promise((t, r) => {
    const a = () => {
      i.removeEventListener("complete", c), i.removeEventListener("error", l), i.removeEventListener("abort", l);
    }, c = () => {
      t(), a();
    }, l = () => {
      r(i.error || new DOMException("AbortError", "AbortError")), a();
    };
    i.addEventListener("complete", c), i.addEventListener("error", l), i.addEventListener("abort", l);
  });
  It.set(i, e);
}
let _t = {
  get(i, e, t) {
    if (i instanceof IDBTransaction) {
      if (e === "done")
        return It.get(i);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return Ne(i[e]);
  },
  set(i, e, t) {
    return i[e] = t, !0;
  },
  has(i, e) {
    return i instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in i;
  }
};
function Ai(i) {
  _t = i(_t);
}
function Gs(i) {
  return qs().includes(i) ? function(...e) {
    return i.apply(At(this), e), Ne(this.request);
  } : function(...e) {
    return Ne(i.apply(At(this), e));
  };
}
function Ks(i) {
  return typeof i == "function" ? Gs(i) : (i instanceof IDBTransaction && Ys(i), Pt(i, $s()) ? new Proxy(i, _t) : i);
}
function Ne(i) {
  if (i instanceof IDBRequest)
    return js(i);
  if (Et.has(i))
    return Et.get(i);
  const e = Ks(i);
  return e !== i && (Et.set(i, e), vt.set(e, i)), e;
}
const At = (i) => vt.get(i);
function Mi(i, e, { blocked: t, upgrade: r, blocking: a, terminated: c } = {}) {
  const l = indexedDB.open(i, e), o = Ne(l);
  return r && l.addEventListener("upgradeneeded", (g) => {
    r(Ne(l.result), g.oldVersion, g.newVersion, Ne(l.transaction), g);
  }), t && l.addEventListener("blocked", (g) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    g.oldVersion,
    g.newVersion,
    g
  )), o.then((g) => {
    c && g.addEventListener("close", () => c()), a && g.addEventListener("versionchange", (b) => a(b.oldVersion, b.newVersion, b));
  }).catch(() => {
  }), o;
}
const Xs = ["get", "getKey", "getAll", "getAllKeys", "count"], Js = ["put", "add", "delete", "clear"], St = /* @__PURE__ */ new Map();
function ei(i, e) {
  if (!(i instanceof IDBDatabase && !(e in i) && typeof e == "string"))
    return;
  if (St.get(e))
    return St.get(e);
  const t = e.replace(/FromIndex$/, ""), r = e !== t, a = Js.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(a || Xs.includes(t))
  )
    return;
  const c = async function(l, ...o) {
    const g = this.transaction(l, a ? "readwrite" : "readonly");
    let b = g.store;
    return r && (b = b.index(o.shift())), (await Promise.all([
      b[t](...o),
      a && g.done
    ]))[0];
  };
  return St.set(e, c), c;
}
Ai((i) => ({
  ...i,
  get: (e, t, r) => ei(e, t) || i.get(e, t, r),
  has: (e, t) => !!ei(e, t) || i.has(e, t)
}));
const Qs = ["continue", "continuePrimaryKey", "advance"], ti = {}, Mt = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap(), Zs = {
  get(i, e) {
    if (!Qs.includes(e))
      return i[e];
    let t = ti[e];
    return t || (t = ti[e] = function(...r) {
      Mt.set(this, Bi.get(this)[e](...r));
    }), t;
  }
};
async function* ea(...i) {
  let e = this;
  if (e instanceof IDBCursor || (e = await e.openCursor(...i)), !e)
    return;
  e = e;
  const t = new Proxy(e, Zs);
  for (Bi.set(t, e), vt.set(t, At(e)); e; )
    yield t, e = await (Mt.get(t) || e.continue()), Mt.delete(t);
}
function ii(i, e) {
  return e === Symbol.asyncIterator && Pt(i, [IDBIndex, IDBObjectStore, IDBCursor]) || e === "iterate" && Pt(i, [IDBIndex, IDBObjectStore]);
}
Ai((i) => ({
  ...i,
  get(e, t, r) {
    return ii(e, t) ? ea : i.get(e, t, r);
  },
  has(e, t) {
    return ii(e, t) || i.has(e, t);
  }
}));
async function ta(i) {
  let e = { url: void 0, body: void 0, apiKey: void 0 };
  const t = JSON.parse(i);
  console.log("Parsed JSON content:", t);
  const { url: r, request: a } = t;
  if (e.url = r, a != null && a.headers) {
    const l = a.headers["X-Api-Key"];
    l && (e.apiKey = l);
  }
  const c = (a == null ? void 0 : a.body) || i;
  if (c) {
    const l = JSON.parse(c);
    l.data ? (console.log("Body is encrypted."), e.body = await ia(l.data), e.body || console.error("Decryption failed or data is invalid.")) : e.body = c;
  } else
    e.body = i;
  return e;
}
async function ia(i) {
  try {
    return await new Oe().decrypt(i) || void 0;
  } catch (e) {
    console.error("Decryption error:", e);
    return;
  }
}
async function ra(i) {
  const e = JSON.parse(i);
  if (!e)
    return;
  if (e.userInfo)
    return e;
  if (!e.data)
    return;
  const r = await new Oe().decrypt(e.data);
  if (!r)
    return;
  const a = JSON.parse(r);
  if (!(!a || !a.userInfo))
    return a;
}
async function wt() {
  return Mi("ai.panoptic.request", 2, {
    upgrade(i, e, t, r) {
      i.objectStoreNames.contains("requests") || i.createObjectStore("requests", { keyPath: "id" });
    }
  });
}
async function Oi(i, e) {
  const t = e == null ? void 0 : e.body;
  if (typeof t != "string")
    return !1;
  const r = await ra(t);
  if (!r)
    return !1;
  console.log("[Request Saver] Saving request", r);
  const a = await wt();
  try {
    a.transaction("requests", "readwrite").objectStore("requests").put({ id: 1, url: i, request: e });
  } catch (c) {
    if (c instanceof Error && c.message.includes("object stores was not found"))
      console.warn("[Request Saver] Object store missing, recreating database..."), await indexedDB.deleteDatabase("ai.panoptic.request"), (await Mi("ai.panoptic.request", 2, {
        upgrade(b) {
          b.createObjectStore("requests", { keyPath: "id" });
        }
      })).transaction("requests", "readwrite").objectStore("requests").put({ id: 1, url: i, request: e });
    else
      throw c;
  }
  return !0;
}
function sa(i = fetch) {
  return async (t, r) => {
    try {
      await Oi(t, r);
    } catch (a) {
      console.error("[Request Saver] ", a);
    }
    return i(t, r);
  };
}
const Ln = async (i, e) => {
  try {
    await Oi(i, e);
  } catch (t) {
    console.error("[Request Saver] ", t);
  }
  return fetch(i, e);
};
async function aa() {
  const i = await wt();
  try {
    return !!await i.transaction("requests", "readonly").objectStore("requests").get(1);
  } catch (e) {
    if (e instanceof Error && e.message.includes("object stores was not found"))
      return console.warn("[Request Saver] Object store missing in hasSavedRequest"), !1;
    throw e;
  }
}
async function na(i) {
  const e = await wt();
  try {
    const a = await e.transaction("requests", "readonly").objectStore("requests").get(1);
    if (!a)
      return;
    if (i === "js")
      return `fetch("${a.url}", ${JSON.stringify(a.request)}).then(response => console.log(response.statusText))`;
    {
      const { url: c, request: l } = a;
      return JSON.stringify({ url: c, request: l }, null, 2);
    }
  } catch (t) {
    if (t instanceof Error && t.message.includes("object stores was not found")) {
      console.warn("[Request Saver] Object store missing in getSavedRequest");
      return;
    }
    throw t;
  }
}
async function Un() {
  if (!await aa())
    return;
  const i = await na("json");
  if (i)
    return ta(i);
}
async function Vn() {
  const i = await wt();
  try {
    i.transaction("requests", "readwrite").objectStore("requests").delete(1);
  } catch (e) {
    if (e instanceof Error && e.message.includes("object stores was not found"))
      console.warn("[Request Saver] Object store missing in deleteSavedRequest");
    else
      throw e;
  }
}
function Li(i) {
  let e = 0, t = 0, r = 0, a = 0;
  for (let g = 0; g < i.height; g++)
    for (let b = 0; b < i.width; b++) {
      let E = b * g * 4, T = i.data[E], w = i.data[E + 1], f = i.data[E + 2];
      (T !== 0 || w !== 0 || f !== 0) && (e += T, t += w, r += f, a++);
    }
  if (a === 0)
    return;
  const c = e / a, l = t / a, o = r / a;
  if (!(isNaN(c) || isNaN(l) || isNaN(o)))
    return [c, l, o];
}
function oa(i, e) {
  if (i === void 0)
    return;
  const { data: t, width: r, height: a } = i, c = [], l = [];
  for (let o = 0; o < e; o++)
    for (let g = 0; g < e; g++) {
      const b = Math.floor(g * r / e), E = Math.min(Math.floor((g + 1) * r / e), r), T = Math.floor(o * a / e), w = Math.min(Math.floor((o + 1) * a / e), a);
      l.push({ startX: b, endX: E, startY: T, endY: w });
    }
  for (const o of l) {
    const { startX: g, endX: b, startY: E, endY: T } = o, w = b - g, f = T - E, p = w * f;
    if (p === 0) {
      const P = (E * r + g) * 4;
      c.push([t[P], t[P + 1], t[P + 2]]);
      continue;
    }
    let m = 0, v = 0, k = 0;
    for (let P = E; P < T; P++) {
      const I = (P * r + g) * 4, F = (P * r + b) * 4;
      for (let V = I; V < F; V += 4)
        m += t[V], v += t[V + 1], k += t[V + 2];
    }
    const C = m / p, S = v / p, D = k / p;
    c.push([C, S, D]);
  }
  return c;
}
function ca(i, e) {
  if (i === void 0)
    return;
  const { data: t, width: r, height: a } = i, c = [], l = [];
  for (let o = 0; o < e; o++)
    for (let g = 0; g < e; g++) {
      const b = Math.floor(g * r / e), E = Math.min(Math.floor((g + 1) * r / e), r), T = Math.floor(o * a / e), w = Math.min(Math.floor((o + 1) * a / e), a);
      l.push({ startX: b, endX: E, startY: T, endY: w });
    }
  for (const o of l) {
    const { startX: g, endX: b, startY: E, endY: T } = o, w = b - g, f = T - E, p = w * f;
    if (p === 0) {
      const P = (E * r + g) * 4, I = t[P], F = t[P + 1], V = t[P + 2], [J, ee, j] = ri(I, F, V);
      c.push([J, ee, j]);
      continue;
    }
    let m = 0, v = 0, k = 0;
    for (let P = E; P < T; P++)
      for (let I = g; I < b; I++) {
        const F = (P * r + I) * 4, V = t[F], J = t[F + 1], ee = t[F + 2], [j, K, Z] = ri(V, J, ee);
        m += j, v += K, k += Z;
      }
    const C = m / p, S = v / p, D = k / p;
    c.push([C, S, D]);
  }
  return c;
}
function ri(i, e, t) {
  const r = 0.299 * i + 0.587 * e + 0.114 * t, a = -0.14713 * i - 0.28886 * e + 0.436 * t, c = 0.615 * i - 0.51499 * e - 0.10001 * t;
  return [r, a, c];
}
async function si(i, e = 45e3) {
  let t;
  const r = Promise.all(i.map(ha)), a = new Promise((c, l) => {
    t = setTimeout(() => {
      l(new Error(`resolvePixelDataArray timed out after ${e / 1e3}s while resolving ${i.length} frames`));
    }, e);
  });
  try {
    return await Promise.race([r, a]);
  } finally {
    clearTimeout(t);
  }
}
const la = 1e4;
async function ha(i) {
  const e = {}, t = Object.keys(i.pixels);
  return await Promise.all(t.map(async (r) => {
    const a = i.pixels[r];
    if (a)
      try {
        let c;
        const l = new Promise((g) => {
          c = setTimeout(() => g(void 0), la);
        }), o = await Promise.race([a.pixels, l]);
        clearTimeout(c), e[r] = { type: a.type, pixels: o };
      } catch {
        e[r] = { type: a.type, pixels: void 0 };
      }
  })), {
    ...i,
    pixels: e
  };
}
const da = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i, ai = (i) => {
  if (typeof i != "string")
    throw new TypeError("Invalid argument expected string");
  const e = i.match(da);
  if (!e)
    throw new Error(`Invalid argument not valid semver ('${i}' received)`);
  return e.shift(), e;
}, ni = (i) => i === "*" || i === "x" || i === "X", oi = (i) => {
  const e = parseInt(i, 10);
  return isNaN(e) ? i : e;
}, ua = (i, e) => typeof i != typeof e ? [String(i), String(e)] : [i, e], ma = (i, e) => {
  if (ni(i) || ni(e))
    return 0;
  const [t, r] = ua(oi(i), oi(e));
  return t > r ? 1 : t < r ? -1 : 0;
}, ci = (i, e) => {
  for (let t = 0; t < Math.max(i.length, e.length); t++) {
    const r = ma(i[t] || "0", e[t] || "0");
    if (r !== 0)
      return r;
  }
  return 0;
}, it = (i, e) => {
  const t = ai(i), r = ai(e), a = t.pop(), c = r.pop(), l = ci(t, r);
  return l !== 0 ? l : a && c ? ci(a.split("."), c.split(".")) : a || c ? a ? -1 : 1 : 0;
}, Ui = 15, Bt = /* @__PURE__ */ new Map(
  [
    [te.Local, Is],
    [te.LocalV2, _s],
    [te.RemoteDev, As],
    [te.RemoteProd, Ms],
    [te.AwsDev, Bs],
    [te.AwsProd, _i],
    [te.RemoteProdEnterprise, Os],
    [te.AwsDevEnterprise, Ls],
    [te.AwsProdEnterprise, Us],
    [te.Schema2Dev, Vs],
    [te.Schema2Prod, Ns]
  ]
);
class li {
  constructor(e) {
    d(this, "wakeUpRequestTime");
    d(this, "serverAwaken", !1);
    d(this, "scanId");
    // Store last request/response for saveScanDataToS3 (matches native SDKs)
    d(this, "lastRequest");
    d(this, "lastResponse");
    d(this, "client");
    d(this, "cfg", {
      serverId: te.RemoteProd,
      dataWindowDuration: Ui
    });
    // Extra ROIs derived from enabledROIs config (excludes 'face' and 'chest')
    d(this, "extraROIs", []);
    this.client = new Xt(Bt.get(te.AwsProd)), e.dataWindowDuration && (z("Configure dataWindowDuration: " + e.dataWindowDuration), this.client.windowDuration = e.dataWindowDuration), e.serverId !== void 0 && (z("Configure serverId: " + e.serverId), this.client = new Xt(Bt.get(e.serverId)), this.client.apiKey = this.cfg.apiKey), e.serverUrl && (z("Configure serverUrl: " + e.serverUrl), this.client.setServerUrl(e.serverUrl)), e.endpointURL && (z("Configure endpointURL: " + e.endpointURL), this.client.setEndpointUrl(e.endpointURL)), e.apiKey && (z("Configure apiKey: " + ss(e.apiKey)), this.cfg.apiKey = e.apiKey, this.client.apiKey = this.cfg.apiKey), e.httpCall && (z("Configure httpCall"), this.client.httpCall = e.httpCall), e.enableSavingRequest && (z("Configure enableSavingRequest"), this.client.httpCall = sa(this.client.httpCall)), e.debugMode !== void 0 && (z("[RemoteHealthAnalyzer] Configure debugMode: " + e.debugMode), this.cfg.debugMode = e.debugMode), e.landmarksSampleRate !== void 0 && (z("Configure landmarksSampleRate: " + e.landmarksSampleRate), this.cfg.landmarksSampleRate = e.landmarksSampleRate), e.enabledROIs !== void 0 && (z("Configure enabledROIs: " + e.enabledROIs.join(", ")), this.cfg.enabledROIs = e.enabledROIs, this.extraROIs = e.enabledROIs.filter((t) => t !== "face" && t !== "chest"), z("Derived extraROIs: " + this.extraROIs.join(", ")));
  }
  get readyTime() {
    return this.client.config.coldStartDuration - this.client.windowDuration;
  }
  get _isReady() {
    return this.wakeUpRequestTime === void 0 ? !1 : this.serverAwaken ? !0 : ((/* @__PURE__ */ new Date()).getTime() - this.wakeUpRequestTime) / 1e3 > this.readyTime;
  }
  userInfo(e) {
    const t = {}, r = e;
    return Object.keys(r).forEach((a) => {
      r[a] !== void 0 && (t[a] = r[a]);
    }), t;
  }
  async _wakeUpServer() {
    let e = (/* @__PURE__ */ new Date()).getTime();
    return this.serverAwaken = !1, this.wakeUpRequestTime = (/* @__PURE__ */ new Date()).getTime(), z("Wake up server now..."), new Promise((t, r) => {
      this.client.wakeUpServer().then(() => {
        this.serverAwaken = !0, t();
      }).catch((a) => {
        this.serverAwaken = !1, r(a);
      }).finally(() => {
        let a = (/* @__PURE__ */ new Date()).getTime() - e;
        z("Wake up time: ", a);
      });
    });
  }
  async wakeUpServer() {
    return this.wakeUpRequestTime !== void 0 ? this._waitUntilReady() : this._wakeUpServer();
  }
  isReadySync() {
    return this._isReady;
  }
  async isReady() {
    if (this._isReady)
      return !0;
    let e = rs(0.5, "timeout");
    return Promise.race([e, this.waitUntilReady()]).then((t) => t !== "timeout");
  }
  async _waitUntilReady() {
    return new Promise((e) => {
      let t = setInterval(() => {
        this._isReady && (clearInterval(t), e());
      }, 200);
    });
  }
  async waitUntilReady() {
    return this.wakeUpRequestTime == null && this.wakeUpServer(), this._waitUntilReady();
  }
  begin() {
    return this.scanId = Ve(), this._wakeUpServer().catch((e) => console.log(e)), Promise.resolve();
  }
  async analyze(e, t, r) {
    var l;
    const a = (l = e[0].pixels.face) == null ? void 0 : l.type;
    if (it(this.client.config.schemaVersion, "2") > 0)
      var c = await this.getHealthV2(e, t, r);
    else if (a == "rgb1x1")
      c = await this.getHealthRgb1x1(await si(e), t);
    else
      throw new Error("Unsupported pixel Size");
    return this.parseHealthFromJson(c);
  }
  async getHealthRgb1x1(e, t) {
    const r = this.client.getUrl(), a = e.filter((w) => {
      var f;
      return (f = w.pixels.face) == null ? void 0 : f.pixels;
    }), c = a.map((w) => {
      var f;
      return (f = w.pixels.face) == null ? void 0 : f.pixels[0][0];
    }), l = a.map((w) => {
      var f;
      return (f = w.pixels.face) == null ? void 0 : f.pixels[0][1];
    }), o = a.map((w) => {
      var f;
      return (f = w.pixels.face) == null ? void 0 : f.pixels[0][2];
    }), g = a.map((w) => w.timestamp), b = a.filter((w) => {
      var f;
      return (f = w.pixels.chest) == null ? void 0 : f.pixels;
    }).map((w) => {
      var f;
      return (f = w.pixels.chest) == null ? void 0 : f.pixels[0][0];
    }), E = {
      r: c,
      g: l,
      b: o,
      timestamp: g,
      userInfo: this.userInfo(t),
      deviceId: this.client.deviceId,
      windowDuration: this.client.windowDuration,
      deviceType: "web"
    };
    b !== void 0 && b.length > 0 ? b.length >= l.length ? (E.respPixels = b, E.version = "1.3") : console.warn("[HttpEndpointsClient] Too few respiratory pixels. Falling back to schema 1.2.") : console.warn("[HttpEndpointsClient] No respiratory pixels. Falling back to schema 1.2."), this.scanId !== void 0 && (E.scanId = this.scanId), this.lastRequest = E;
    try {
      if (this.cfg.debugMode === !0) {
        const w = new Ae(), f = `http-request-data-during-dev/1.1/${Ve()}.json`;
        w.putDataToS3("panopticai-internal-log-bucket", f, E).catch((p) => {
          console.warn("[RemoteHealthAnalyzer] debug request save failed", p);
        });
      }
    } catch (w) {
      console.warn("[RemoteHealthAnalyzer] debug-mode request save check failed", w);
    }
    const T = await this.client.callAPI(r, E);
    this.lastResponse = T;
    try {
      if (this.cfg.debugMode === !0) {
        const w = new Ae(), f = `http-response-data-during-dev/1.1/${Ve()}.json`;
        w.putDataToS3("panopticai-internal-log-bucket", f, T).catch((p) => {
          console.warn("[RemoteHealthAnalyzer] debug response save failed", p);
        });
      }
    } catch (w) {
      console.warn("[RemoteHealthAnalyzer] debug-mode response save check failed", w);
    }
    return T;
  }
  async getHealthV2(e, t, r) {
    var k, C, S, D, P;
    const a = this.client.getUrl(), c = this.prepareDataV2(await si(e)), l = this.prepareDeviceInfo();
    if (!c.pixels || c.pixels.length === 0)
      throw new Error("No valid face pixel data to send to server");
    const o = c.pixels.length, g = ((k = c.pixels[0]) == null ? void 0 : k.timestamp) || 0, E = (((C = c.pixels[o - 1]) == null ? void 0 : C.timestamp) || 0) - g, T = E > 0 ? o / E : 0;
    if (T > 0 && T < 5)
      throw new Error(`Insufficient frame rate (${T.toFixed(1)} fps). Please ensure stable face detection and try again.`);
    const f = ((S = c.respPixels) == null ? void 0 : S.length) || 0, p = ((D = c.facialMarkers) == null ? void 0 : D.length) || 0;
    console.log(`[RemoteHealthAnalyzer] Sending: version=${c.version}, ${o} face, ${f} resp, ${p} markers, ${T.toFixed(1)} fps`);
    const m = {
      ...c,
      pixelsFormat: (P = e[0].pixels.face) == null ? void 0 : P.type,
      userInfo: this.userInfo(t),
      deviceInfo: l,
      measurementMode: "Resting",
      faceDetectorOption: "mp-face-mesh",
      metadata: {
        requestTime: Date.now(),
        dev: this.client.config.development
      },
      videoFrameInfo: r
    };
    this.scanId !== void 0 && (m.deviceInfo.scanId = this.scanId), this.lastRequest = m;
    try {
      if (this.cfg.debugMode === !0) {
        const I = new Ae(), F = `http-request-data-during-dev/2.0/${Ve()}.json`;
        I.putDataToS3("panopticai-internal-log-bucket", F, m).catch((V) => {
          console.warn("[RemoteHealthAnalyzer] debug request save failed", V);
        });
      }
    } catch (I) {
      console.warn("[RemoteHealthAnalyzer] debug-mode request save check failed", I);
    }
    const v = await this.client.callAPI(a, m);
    this.lastResponse = v;
    try {
      if (this.cfg.debugMode === !0) {
        const I = new Ae(), F = `http-response-data-during-dev/2.0/${Ve()}.json`;
        I.putDataToS3("panopticai-internal-log-bucket", F, v).catch((V) => {
          console.warn("[RemoteHealthAnalyzer] debug response save failed", V);
        });
      }
    } catch (I) {
      console.warn("[RemoteHealthAnalyzer] debug-mode response save check failed", I);
    }
    return v;
  }
  prepareDataV2(e) {
    const t = [], r = [], a = [];
    let c = "2.1";
    const l = e.filter((f) => {
      var p;
      return (p = f.pixels.face) == null ? void 0 : p.pixels;
    }), o = this.extraROIs, g = o.length > 0, b = l;
    if (g) {
      const f = l.filter((m) => o.every((v) => {
        var k;
        return (k = m.pixels[v]) == null ? void 0 : k.pixels;
      })), p = l.filter((m) => o.some((v) => {
        var k;
        return (k = m.pixels[v]) == null ? void 0 : k.pixels;
      }));
      f.length === l.length ? console.log(`[RemoteHealthAnalyzer] All ${l.length} frames have complete extra ROIs (${o.join(", ")})`) : f.length > 0 ? console.log(`[RemoteHealthAnalyzer] ${f.length}/${l.length} frames have complete extra ROIs, ${p.length} have partial data`) : p.length > 0 ? console.log(`[RemoteHealthAnalyzer] ${p.length}/${l.length} frames have partial extra ROI data`) : console.warn("[RemoteHealthAnalyzer] No extra ROI data found in any frame");
    }
    const E = b.filter((f) => {
      var p;
      return (p = f.pixels.chest) == null ? void 0 : p.pixels;
    });
    E.length > 0 && E.length < b.length && console.log(`[RemoteHealthAnalyzer] ${E.length}/${b.length} frames have chest data`);
    let T = 0, w = 0;
    if (b.forEach((f) => {
      var k, C, S, D, P, I;
      const p = (k = f.pixels.face) == null ? void 0 : k.pixels;
      if (p) {
        T++;
        const F = {
          values: p,
          timestamp: f.timestamp
        };
        g && ((C = f.pixels.chin) != null && C.pixels && (F.chin = f.pixels.chin.pixels), (S = f.pixels.leftCheek) != null && S.pixels && (F.leftCheek = f.pixels.leftCheek.pixels), (D = f.pixels.rightCheek) != null && D.pixels && (F.rightCheek = f.pixels.rightCheek.pixels), (P = f.pixels.glabella) != null && P.pixels && (F.glabella = f.pixels.glabella.pixels)), t.push(F);
      }
      const m = (I = f.pixels.chest) == null ? void 0 : I.pixels;
      m && m.length > 0 ? (w++, m[0].length === 1 ? (c = "2.2", r.push(m[0])) : (c = "2.3", m.length == 1 ? r.push(m[0]) : r.push(m))) : (r.length > 0 || E.length > 0) && r.push(null);
      const v = this.getLandmarksV2(f.landmarks);
      if (v) {
        const F = f.facebox, J = {
          bbox: [
            F.xCenter - F.width / 2,
            F.yCenter - F.height / 2,
            F.xCenter + F.width / 2,
            F.yCenter + F.height / 2
          ],
          landmarks: v,
          timestamp: f.timestamp
        };
        a.push(J);
      }
    }), a.length > 1 && this.cfg.landmarksSampleRate !== void 0) {
      const f = this.cfg.landmarksSampleRate, p = a[a.length - 1].timestamp - a[0].timestamp;
      if (a.length / p > f) {
        const v = 1 / f, k = [];
        let C = a[0].timestamp;
        k.push(a[0]);
        for (let S = 1; S < a.length; S++)
          a[S].timestamp - C >= v && (k.push(a[S]), C = a[S].timestamp);
        a.length = 0, a.push(...k);
      }
    }
    return console.log(`[RemoteHealthAnalyzer] prepareDataV2: ${T} face, ${w} resp pixels processed`), {
      version: c,
      pixels: t,
      respPixels: r,
      facialMarkers: a.length == 0 ? null : a
    };
  }
  getLandmarksV2(e) {
    if (!e || e.length == 0)
      return null;
    const t = {};
    return [4, 10, 11, 14, 34, 136, 152, 168, 205, 264, 365, 425].map((a) => {
      t[a] = [e[a].x, e[a].y], e[a].z !== void 0 && t[a].push(e[a].z);
    }), t;
  }
  prepareDeviceInfo() {
    const { device: e } = Hs.UAParser(navigator.userAgent);
    return {
      deviceId: this.client.deviceId,
      deviceBrand: e != null && e.vendor ? e.vendor : "unknown",
      deviceModel: e != null && e.model ? e.model : "unknown",
      deviceType: "web"
    };
  }
  mean(e) {
    if (e.length === 0)
      return [0, 0, 0];
    const t = e[0].length;
    return e.reduce((a, c) => {
      for (let l = 0; l < t; l++)
        a[l] += c[l];
      return a;
    }, Array(t).fill(0)).map((a) => a / e.length);
  }
  end() {
    throw new Error("Method not implemented.");
  }
  reset() {
    this.serverAwaken = !1, this.wakeUpRequestTime = void 0, this.scanId = void 0;
  }
  parseHealthFromJson(e) {
    return z(e), it(this.client.config.schemaVersion, "2") > 0 ? this.parseHealthV2(e) : this.parseHealthV1(e);
  }
  parseHealthV1(e) {
    let t = e.vital_signs, r = e.health_risks, a = e.holistic_health, c = {
      datetime: /* @__PURE__ */ new Date()
    };
    if (a && (c.holisticHealth = {}, a.general_wellness !== void 0 && (c.holisticHealth.generalWellness = a.general_wellness), a.bmi !== void 0 && (c.holisticHealth.bmi = a.bmi), a.hhe_version !== void 0 && (c.holisticHealth.version = a.hhe_version), a.absi !== void 0 && (c.holisticHealth.absi = a.absi), a.cardiac_workload !== void 0 && (c.holisticHealth.cardiacWorkload = a.cardiac_workload), a.pulse_respiratory_quotient !== void 0 && (c.holisticHealth.pulseRespiratoryQuotient = a.pulse_respiratory_quotient), a.waist_to_height_ratio !== void 0 && (c.holisticHealth.waistToHeightRatio = a.waist_to_height_ratio)), t["0_server"].scan_parameters !== void 0) {
      let l = t["0_server"].scan_parameters, o = {
        conditions: l.conditions !== void 0 ? l.conditions : void 0,
        invalidPixelPercentage: l.invalid_pixel_percentage !== void 0 ? l.invalid_pixel_percentage : void 0,
        signalDuration: l.signal_duration !== void 0 ? l.signal_duration : void 0,
        signalQuality: l.signal_quality !== void 0 ? l.signal_quality : void 0,
        snr: l.snr !== void 0 ? l.snr : void 0
      };
      c.scanParameters = o;
    }
    return t && (c.vitalSigns = {
      heartRate: t.heart_rate,
      spo2: t.spo2,
      ibi: t.hrv_ibi
    }, t.respiratory_rate !== void 0 && (c.vitalSigns.respiratoryRate = t.respiratory_rate), t.stress !== void 0 && (c.vitalSigns.stress = t.stress), t.stress_score !== void 0 && (c.vitalSigns.stressScore = t.stress_score), t.hrv_sdnn !== void 0 && (c.vitalSigns.hrvSdnn = t.hrv_sdnn), t.hrv_rmssd !== void 0 && (c.vitalSigns.hrvRmssd = t.hrv_rmssd), t.temperature !== void 0 && (c.vitalSigns.temperature = t.temperature), t.blood_pressure !== void 0 && (c.vitalSigns.bloodPressure = t.blood_pressure), t.blood_pressure_systolic !== void 0 && (c.vitalSigns.bloodPressureSystolic = t.blood_pressure_systolic), t.blood_pressure_diastolic !== void 0 && (c.vitalSigns.bloodPressureDiastolic = t.blood_pressure_diastolic), t.facial_skin_age !== void 0 && (c.vitalSigns.facialSkinAge = t.facial_skin_age), t.blood_alcohol !== void 0 && (c.vitalSigns.bloodAlcohol = t.blood_alcohol), t.blood_sugar !== void 0 && (c.vitalSigns.bloodSugar = t.blood_sugar), t["0_server"].version !== void 0 && (c.vitalSigns.version = t["0_server"].version)), r.cvd_risk_general !== void 0 && (c.risks == null && (c.risks = {}), c.risks.cardiovascularRisks = {
      generalRisk: r.cvd_risk_general,
      coronaryHeartDisease: r.cvd_risk_CHD,
      congestiveHeartFailure: r.cvd_risk_CHF,
      intermittentClaudication: r.cvd_risk_IC,
      stroke: r.cvd_risk_Stroke
    }), r.covid_risk !== void 0 && (c.risks == null && (c.risks = {}), c.risks.covidRisk = {
      covidRisk: r.covid_risk
    }), r.diabetesRisk !== void 0 && (c.risks == null && (c.risks = {}), c.risks.diabetesRisk = r.diabetesRisk), r.hypertensionRisk !== void 0 && (c.risks == null && (c.risks = {}), c.risks.hypertensionRisk = r.hypertensionRisk), r.cholesterolRisk !== void 0 && (c.risks == null && (c.risks = {}), c.risks.cholesterolRisk = r.cholesterolRisk), r.hre_version !== void 0 && c.risks && (c.risks.version = r.hre_version), c;
  }
  parseHealthV2(e) {
    let t = e.vitalSigns, r = e.healthRisks, a = e.wellness, c = e.signalAnalysis, l = e.serverInfo, o = {
      datetime: /* @__PURE__ */ new Date()
    };
    if (a && (o.holisticHealth = {}, a.generalWellness !== void 0 && (o.holisticHealth.generalWellness = a.generalWellness), a.bmi !== void 0 && (o.holisticHealth.bmi = a.bmi), a.absi !== void 0 && (o.holisticHealth.absi = a.absi), a.absiz !== void 0 && (o.holisticHealth.absiz = a.absiz), a.cardiacWorkload !== void 0 && (o.holisticHealth.cardiacWorkload = a.cardiacWorkload), a.pulseRespiratoryQuotient !== void 0 && (o.holisticHealth.pulseRespiratoryQuotient = a.pulseRespiratoryQuotient), a.waistToHeightRatio !== void 0 && (o.holisticHealth.waistToHeightRatio = a.waistToHeightRatio), a.cardiovascularSystemWellness !== void 0 && (o.holisticHealth.cardiovascularSystemWellness = a.cardiovascularSystemWellness), a.mentalWellness !== void 0 && (o.holisticHealth.mentalWellness = a.mentalWellness), a.physicalWellness !== void 0 && (o.holisticHealth.physicalWellness = a.physicalWellness), a.respiratorySystemWellness !== void 0 && (o.holisticHealth.respiratorySystemWellness = a.respiratorySystemWellness)), t && (o.vitalSigns = {}, t.heartRate !== void 0 && (o.vitalSigns.heartRate = t.heartRate), t.spo2 !== void 0 && (o.vitalSigns.spo2 = t.spo2), t.hrvIbi !== void 0 && (o.vitalSigns.ibi = t.hrvIbi), t.respiratoryRate !== void 0 && (o.vitalSigns.respiratoryRate = t.respiratoryRate), t.stress !== void 0 && (o.vitalSigns.stress = t.stress), t.stressScore !== void 0 && (o.vitalSigns.stressScore = t.stressScore), t.hrvSdnn !== void 0 && (o.vitalSigns.hrvSdnn = t.hrvSdnn), t.hrvRmssd !== void 0 && (o.vitalSigns.hrvRmssd = t.hrvRmssd), t.bloodPressure !== void 0 && (o.vitalSigns.bloodPressure = t.bloodPressure), t.bloodPressureSystolic !== void 0 && (o.vitalSigns.bloodPressureSystolic = t.bloodPressureSystolic), t.bloodPressureDiastolic !== void 0 && (o.vitalSigns.bloodPressureDiastolic = t.bloodPressureDiastolic), t.facialSkinAge !== void 0 && (o.vitalSigns.facialSkinAge = t.facialSkinAge)), r && (o.risks = {}, r.cvdRiskGeneral !== void 0 && (o.risks.cardiovascularRisks = {
      generalRisk: r.cvdRiskGeneral,
      coronaryHeartDisease: r.cvdRiskCHD,
      congestiveHeartFailure: r.cvdRiskCHF,
      intermittentClaudication: r.cvdRiskIC,
      stroke: r.cvdRiskStroke
    }), r.covidRisk !== void 0 && (o.risks.covidRisk = {
      covidRisk: r.covidRisk
    }), r.diabetesRisk !== void 0 && (o.risks.diabetesRisk = r.diabetesRisk), r.hypertensionRisk !== void 0 && (o.risks.hypertensionRisk = r.hypertensionRisk), r.cholesterolRisk !== void 0 && (o.risks.cholesterolRisk = r.cholesterolRisk)), c) {
      if (o.scanParameters = {}, c.signalConditions !== void 0) {
        const g = c.signalConditions;
        o.scanParameters.signalConditions = {
          noSpeedJitter: g.noSpeedJitter,
          goodAverageSpeed: g.goodAverageSpeed,
          fixedHeadPosition: g.fixedHeadPosition,
          noHeadTurning: g.noHeadTurning,
          adequateBrightness: g.adequateBrightness,
          evenLightingOnFace: g.evenLightingOnFace,
          goodSnr: g.goodSnr,
          signalSteadiness: g.signalSteadiness,
          goodSignalPercentage: g.goodSignalPercentage,
          hrSteadiness: g.hrSteadiness,
          hrSignalQuality: g.hrSignalQuality,
          rrSignalQuality: g.rrSignalQuality,
          bpSignalQuality: g.bpSignalQuality
        };
      }
      c.signalDuration !== void 0 && (o.scanParameters.signalDuration = c.signalDuration), c.signalQuality !== void 0 && (o.scanParameters.signalQuality = c.signalQuality), c.snr !== void 0 && (o.scanParameters.snr = c.snr), c.warning !== void 0 && (o.scanParameters.warning = c.warning);
    }
    return l && (o.serverInfo = {
      userPlan: l.userPlan,
      userId: l.userId
    }, l.datetime !== void 0 && (o.serverInfo.datetime = l.datetime), l.datetimeStr !== void 0 && (o.serverInfo.datetimeStr = l.datetimeStr), l.elapse !== void 0 && (o.serverInfo.elapse = l.elapse), l.version !== void 0 && (o.serverInfo.version = l.version), l.errorCode !== void 0 && (o.serverInfo.errorCode = l.errorCode)), o;
  }
  /**
   * Save last request/response data to S3 bucket.
   * Matches native SDK behavior (Swift/Kotlin).
   * @param bucket - S3 bucket name
   * @param requestDirectory - Directory for request data (optional)
   * @param responseDirectory - Directory for response data (optional)
   * @param shouldEncrypt - Whether to encrypt the data before upload
   * @returns Promise with upload results for both request and response
   */
  async saveScanDataToS3(e, t, r, a = !1) {
    const c = new Ae(), l = (b) => {
      const E = b ? b.replace(/\/+$/, "") + "/" : "", T = typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.floor(Math.random() * 1e5)}`;
      return `${E}${T}.json`;
    };
    let o;
    if (this.lastRequest === void 0)
      o = { success: !1, reason: "no-saved-request" };
    else
      try {
        let b = this.lastRequest;
        a && (b = { data: await new Oe().encrypt(this.lastRequest) });
        const E = l(t);
        o = await c.putDataToS3(e, E, b), o.success !== !1 && (this.lastRequest = void 0);
      } catch (b) {
        o = { success: !1, error: String(b) };
      }
    let g;
    if (this.lastResponse === void 0)
      g = { success: !1, reason: "no-saved-response" };
    else
      try {
        let b = this.lastResponse;
        a && (b = { data: await new Oe().encrypt(this.lastResponse) });
        const E = l(r);
        g = await c.putDataToS3(e, E, b), g.success !== !1 && (this.lastResponse = void 0);
      } catch (b) {
        g = { success: !1, error: String(b) };
      }
    return { request: o, response: g };
  }
}
class fa {
  constructor(e, t, r, a, c = navigator.hardwareConcurrency * 2, l, o = 2) {
    d(this, "workerManagers", []);
    d(this, "createWorker");
    d(this, "workerName");
    d(this, "timeout");
    d(this, "workerCount");
    d(this, "onCreated");
    d(this, "workerFunction");
    d(this, "isEnabled", !0);
    d(this, "maxQueueSizePerWorker");
    this.onCreated = l, this.createWorker = e, this.workerName = r, this.timeout = a, this.workerCount = c, this.workerFunction = t, this.onCreated = l, this.maxQueueSizePerWorker = Math.max(2, Math.ceil(o / c)), this.isEnabled && this.newWorker();
  }
  async newWorker() {
    const e = this.createWorker(), t = new ga(e, this.workerName, this.timeout, this.maxQueueSizePerWorker);
    return this.onCreated && await this.onCreated(t), this.workerManagers.push(t), t;
  }
  async callWorker(e, t, r) {
    if (!this.isEnabled && this.workerFunction)
      return this.workerFunction(e);
    for (; this.workerManagers.length < this.workerCount; )
      await this.newWorker();
    const a = this.workerManagers.sort((c, l) => c.pendingCount - l.pendingCount)[0];
    return a.pendingCount >= this.maxQueueSizePerWorker ? (console.warn(`[${this.workerName}] Dropping frame: queue full (${a.pendingCount}/${this.maxQueueSizePerWorker})`), Promise.resolve(void 0)) : a.callWorker(e, t, r);
  }
  get hasAvailableWorker() {
    return this.workerManagers.some((e) => !e.isBusy) || this.workerManagers.length < this.workerCount;
  }
  terminateAll() {
    this.workerManagers.forEach((e) => e.terminate()), this.workerManagers = [];
  }
}
class ga {
  constructor(e, t, r, a = 2) {
    d(this, "timeout");
    d(this, "worker");
    d(this, "workerName");
    d(this, "pendingPromises", {});
    this.maxQueueSize = a, this.timeout = r || 1e3, this.worker = e, this.workerName = t || "Worker", this.worker.onmessage = (c) => {
      const { result: l, hash: o, error: g, progress: b } = c.data, E = this.pendingPromises[o];
      if (E) {
        if (b && E.onProgress) {
          E.onProgress(b);
          return;
        }
        clearTimeout(E.timer), g ? E.reject(new Error(`Worker ${this.workerName} Error: ${g}`)) : E.resolve(l), delete this.pendingPromises[o];
      }
    }, this.worker.onerror = (c) => {
      for (const l in this.pendingPromises)
        clearTimeout(this.pendingPromises[l].timer), this.pendingPromises[l].reject(new Error(`Worker ${this.workerName} Error: ${c.message}`)), delete this.pendingPromises[l];
      console.error(`Worker ${t} error: ${c.message}`);
    };
  }
  get isBusy() {
    return Object.keys(this.pendingPromises).length > this.maxQueueSize;
  }
  get pendingCount() {
    return Object.keys(this.pendingPromises).length;
  }
  callWorker(e, t, r) {
    const a = crypto.randomUUID();
    return new Promise((c, l) => {
      const o = setTimeout(() => {
        if (this.pendingPromises[a]) {
          const T = Object.keys(this.pendingPromises).length;
          this.pendingPromises[a].reject(
            new Error(`Worker ${this.workerName} Timeout. ${T > 1 ? `${T} pending promises.` : ""}`)
          );
        }
        delete this.pendingPromises[a];
      }, this.timeout);
      this.pendingPromises[a] && (clearTimeout(this.pendingPromises[a].timer), this.pendingPromises[a].reject(new Error(`Worker ${this.workerName} Duplicate hash: ${a}`)), delete this.pendingPromises[a]), this.pendingPromises[a] = { resolve: c, reject: l, timer: o, onProgress: r };
      const g = performance.now();
      this.worker.postMessage({ inputData: e, hash: a }, t);
      const E = performance.now() - g;
      E > 5 && console.warn(`Worker ${this.workerName} postMessage took ${E} ms, which may cause frame drops.`);
    });
  }
  terminate() {
    this.worker.terminate();
    for (const e in this.pendingPromises)
      clearTimeout(this.pendingPromises[e].timer), this.pendingPromises[e].reject(new Error(`Worker ${this.workerName} terminated.`)), delete this.pendingPromises[e];
  }
}
const lt = {};
function fe(i, e, t, r, a, c, l) {
  return lt[t] || (console.log(`[WorkerPool] Creating pool "${t}" with timeout=${r}, workerCount=${a}, maxQueueSize=${l}`), lt[t] = new fa(i, e, t, r, a, c, l)), lt[t];
}
function We(i) {
  return Li(i);
}
self.onmessage = (i) => {
  const { inputData: e, hash: t } = i.data, r = We(e);
  self.postMessage({ result: r, hash: t });
};
class Rt {
  constructor() {
    d(this, "dataType", "ggg1x1");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/NRVAyOh8.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, We, "Ggg1x1WorkerPool", 1e4, 4));
  }
  // 10s timeout, 4 workers for slow devices
  async extract(e) {
    const t = await e;
    if (!t) return;
    try {
      const a = await this.workerPool.callWorker(t);
      if (a && a[1] !== void 0) return [[a[1]]];
    } catch {
    }
    const r = We(t);
    if (!(!r || r[1] === void 0))
      return [[r[1]]];
  }
}
function Ot(i) {
  const e = Li(i);
  if (!e)
    return null;
  const [t, r, a] = e, c = 0.299 * t + 0.587 * r + 0.114 * a, l = -0.14713 * t - 0.28886 * r + 0.436 * a, o = 0.615 * t - 0.51499 * r - 0.10001 * a;
  return [c, l, o];
}
self.onmessage = (i) => {
  const { inputData: e, hash: t } = i.data, r = Ot(e);
  self.postMessage({ result: r, hash: t });
};
class pa {
  constructor() {
    d(this, "dataType", "yyy1x1");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/R8jBWpOw.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, Ot, "Yuv1x1WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (!t) return;
    try {
      const a = await this.workerPool.callWorker(t);
      if (a) return [[a[0]]];
    } catch {
    }
    const r = Ot(t);
    if (r)
      return [[r[0]]];
  }
}
class kt {
  constructor() {
    d(this, "dataType", "rgb1x1");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/NRVAyOh8.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, We, "Rgb1x1WorkerPool", 1e4, 4, void 0, 64));
  }
  // 10s timeout, 4 workers, queue 64
  async extract(e) {
    const t = await e;
    if (!t) return;
    try {
      const a = await this.workerPool.callWorker(t);
      if (a) return [a];
    } catch {
    }
    const r = We(t);
    if (r)
      return [r];
  }
}
function rt(i) {
  const { imageData: e, size: t } = i;
  return oa(e, t);
}
self.onmessage = (i) => {
  const { inputData: e, hash: t } = i.data, r = rt(e);
  self.postMessage({ result: r, hash: t });
};
class va {
  constructor() {
    d(this, "dataType", "rgb8x8");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/CGLiKhaX.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, rt, "Rgb8x8WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (t) {
      try {
        const r = await this.workerPool.callWorker({ imageData: t, size: 8 });
        if (r) return r;
      } catch {
      }
      return rt({ imageData: t, size: 8 });
    }
  }
}
class wa {
  constructor() {
    d(this, "dataType", "rgb32x32");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/CGLiKhaX.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, rt, "Rgb32x32WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (t) {
      try {
        const r = await this.workerPool.callWorker({ imageData: t, size: 32 });
        if (r) return r;
      } catch {
      }
      return rt({ imageData: t, size: 32 });
    }
  }
}
function Ce(i) {
  const { imageData: e, size: t } = i;
  return ca(e, t);
}
self.onmessage = (i) => {
  const { inputData: e, hash: t } = i.data, r = Ce(e);
  self.postMessage({ result: r, hash: t });
};
class ya {
  constructor() {
    d(this, "dataType", "yuv8x8");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/DnCqOYj3.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, Ce, "Yuv8x8WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (t) {
      try {
        const r = await this.workerPool.callWorker({ imageData: t, size: 8 });
        if (r) return r;
      } catch {
      }
      return Ce({ imageData: t, size: 8 });
    }
  }
}
class ba {
  constructor() {
    d(this, "dataType", "yuv32x32");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/DnCqOYj3.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, Ce, "Yuv32x32WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (t) {
      try {
        const r = await this.workerPool.callWorker({ imageData: t, size: 32 });
        if (r) return r;
      } catch {
      }
      return Ce({ imageData: t, size: 32 });
    }
  }
}
class xa {
  constructor() {
    d(this, "dataType", "yuv64x64");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/DnCqOYj3.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, Ce, "Yuv64x64WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (t) {
      try {
        const r = await this.workerPool.callWorker({ imageData: t, size: 64 });
        if (r) return r;
      } catch {
      }
      return Ce({ imageData: t, size: 64 });
    }
  }
}
class Ea {
  constructor() {
    d(this, "dataType", "yuv1x1");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/DnCqOYj3.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, Ce, "Yuv1x1WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (t) {
      try {
        const r = await this.workerPool.callWorker({ imageData: t, size: 1 });
        if (r) return r;
      } catch {
      }
      return Ce({ imageData: t, size: 1 });
    }
  }
}
class Sa {
  constructor() {
    d(this, "dataType", "meanRgb1x1");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/NRVAyOh8.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, We, "ChestMeanRgb1x1WorkerPool", 5e3));
  }
  async extract(e) {
    const t = await e;
    if (!t) return;
    try {
      const a = await this.workerPool.callWorker(t);
      if (a) return [a];
    } catch {
    }
    const r = We(t);
    if (r)
      return [r];
  }
}
function Tt(i, e = "rgb1x1") {
  if (i === "face")
    switch (e) {
      case "rgb1x1":
        return new kt();
      case "rgb8x8":
        return new va();
      case "rgb32x32":
        return new wa();
      case "yuv1x1":
        return new Ea();
      case "yuv8x8":
        return new ya();
      case "yuv32x32":
        return new ba();
      case "yuv64x64":
        return new xa();
      case "ggg1x1":
        return new Rt();
      default:
        return new kt();
    }
  else if (i === "chest")
    switch (e) {
      case "ggg1x1":
        return new Rt();
      case "yyy1x1":
        return new pa();
      case "meanRgb1x1":
        return new Sa();
      default:
        return new Rt();
    }
  else
    return new kt();
}
function Ct(i) {
  const e = (i == null ? void 0 : i.pixelDataType) ?? "rgb1x1", t = (i == null ? void 0 : i.chestPixelDataType) ?? "ggg1x1";
  return ((i == null ? void 0 : i.enabledROIs) ?? ["face", "chest"]).reduce((c, l) => (l === "face" ? c.face = Tt(l, e) : l === "chest" ? c.chest = Tt(l, t) : c[l] = Tt(l, e), c), {});
}
const Lt = "2.3.0-b2";
class Ra {
  constructor() {
    d(this, "threshold", 1);
    // seconds
    d(this, "lastOKTime", 0);
    d(this, "lastPixels");
    d(this, "detected", !1);
  }
  reset() {
    this.lastOKTime = 0, this.lastPixels = void 0, this.detected = !1;
  }
  diff(e, t) {
    let r = 0;
    for (let a = 0; a < e.length; a++) {
      const c = e[a], l = t[a];
      for (let o = 0; o < c.length; o++)
        r += l[o] - c[o];
    }
    return r;
  }
  detect(e, t) {
    if (e) {
      if (this.lastPixels !== void 0) {
        if (this.diff(e, this.lastPixels) !== 0)
          this.lastOKTime = t;
        else if (t - this.lastOKTime > this.threshold)
          return this.detected = !0, !0;
      }
      return this.lastPixels = e, !1;
    }
  }
}
const hi = 25, di = 5, ui = 1 / 6, mi = 1, ka = 3e4;
class Ta {
  constructor() {
    d(this, "instanceId");
    d(this, "stage", Y.Idle);
    d(this, "startTime", /* @__PURE__ */ new Date());
    d(this, "health");
    d(this, "firstDataTime");
    d(this, "frameData", []);
    d(this, "lastSendTime");
    d(this, "sendingData", !1);
    d(this, "sendingDataStartTime");
    d(this, "error");
    d(this, "cfg", {
      serverId: te.RemoteProd,
      dataCollectionDuration: hi,
      dataSendingRate: ui,
      dataSendingDuration: di,
      dataWindowDuration: Ui,
      faceLostTimeout: mi
    });
    d(this, "blinkDetector", jt(Ye.dummy));
    d(this, "healthAnalyzer");
    d(this, "pixelsExtractors");
    d(this, "duplicatedPixelDetector", new Ra());
    window.__vital_sign_engine_plugin__ = this, this.instanceId = Ve(), z(`VitalSignEngine Plugin InstanceId: ${this.instanceId}`), z(`VitalSignEngine Plugin (TSVitalSignCamera-${Lt})`), this.healthAnalyzer = new li({ serverId: te.AwsProd }), this.pixelsExtractors = Ct(), this.configure({ serverId: te.AwsEnterpriseProd });
  }
  configure(e) {
    z("Configuring. Instance Id = ", this.instanceId), this.healthAnalyzer = new li(e), e.pixelDataType && (z("Configure pixelDataType: " + e.pixelDataType), this.cfg.pixelDataType = e.pixelDataType, this.pixelsExtractors = Ct(e)), e.chestPixelDataType && (z("Configure chestPixelDataType: " + e.chestPixelDataType), this.cfg.chestPixelDataType = e.chestPixelDataType, this.pixelsExtractors = Ct(e)), e.dataCollectionDuration && (z("Configure dataCollectionDuration: " + e.dataCollectionDuration), this.cfg.dataCollectionDuration = e.dataCollectionDuration), e.dataSendingDuration && (z("Configure dataSendingDuration: " + e.dataSendingDuration), this.cfg.dataSendingDuration = e.dataSendingDuration), e.dataSendingRate && (z("Configure dataSendingRate: " + e.dataSendingRate), this.cfg.dataSendingRate = e.dataSendingRate), e.blinkDetectorType !== void 0 && (z("Configure blink detecor type"), this.blinkDetector = jt(e.blinkDetectorType), e.blinkDetectorConfig !== void 0 && this.blinkDetector.configure(e.blinkDetectorConfig)), e.blinkDetectorConfig !== void 0 && (z("Configure blink detector"), this.blinkDetector.configure(e.blinkDetectorConfig)), e.faceLostTimeout !== void 0 && (z("Configure faceLostTimeout"), this.cfg.faceLostTimeout = e.faceLostTimeout);
  }
  get stageTime() {
    switch (this.stage) {
      case Y.WaitingData:
        return -1;
      case Y.CollectingData:
        return this.cfg.dataCollectionDuration || hi;
      case Y.AnalyzingData:
        return this.cfg.dataSendingDuration || di;
      case Y.Idle:
        return -1;
    }
  }
  get elapsedTime() {
    return ((/* @__PURE__ */ new Date()).getTime() - this.startTime.getTime()) / 1e3;
  }
  get remainingTime() {
    return Math.max(this.stageTime - this.elapsedTime, 0);
  }
  get nextStage() {
    return this.elapsedTime <= this.stageTime ? !1 : this.stage !== Y.AnalyzingData ? !0 : !this.sendingData;
  }
  frameDataTimestamp(e) {
    return this.firstDataTime === void 0 ? 0 : (e - this.firstDataTime) / 1e3;
  }
  get healthResult() {
    return {
      stage: this.stage,
      remainingTime: this.remainingTime,
      totalTime: this.stageTime === -1 ? void 0 : this.stageTime,
      health: this.health,
      error: this.error
    };
  }
  async isReady() {
    return this.healthAnalyzer.isReady();
  }
  async waitUntilReady() {
    return this.healthAnalyzer.waitUntilReady();
  }
  reset() {
    this.blinkDetector.reset(), this.frameData = [], this.firstDataTime = void 0, this.lastSendTime = void 0, this.sendingData = !1, this.sendingDataStartTime = void 0, this.healthAnalyzer.reset(), this.duplicatedPixelDetector.reset();
  }
  async start() {
    if (this.stage !== Y.Idle)
      return Promise.reject(new Error("already started"));
    this.health = void 0, this.error = void 0, this.reset(), this.healthAnalyzer.begin(), this.setStage(Y.WaitingData);
  }
  get stageName() {
    switch (this.stage) {
      case Y.Idle:
        return "Idle";
      case Y.AnalyzingData:
        return "Analyzing";
      case Y.CollectingData:
        return "Collecting";
      case Y.WaitingData:
        return "Waiting";
    }
  }
  setStage(e) {
    this.stage = e, this.startTime = /* @__PURE__ */ new Date(), z(this.stageName);
  }
  async stop() {
    this.stage !== Y.Idle && (this.setStage(Y.Idle), this.reset(), this.healthAnalyzer.reset());
  }
  toIdleStage() {
    this.setStage(Y.Idle), this.reset(), this.healthAnalyzer.reset();
  }
  faceLostError() {
    z("Error: face lost"), this.toIdleStage(), this.error = new Error("face lost");
  }
  duplicatedRGBError() {
    z("Error: duplicated RGB values"), this.toIdleStage(), this.error = new Error("duplicated rgb");
  }
  faceLost(e) {
    if (this.frameData.length == 0)
      return !1;
    const t = this.frameData[this.frameData.length - 1], r = this.cfg.faceLostTimeout === void 0 ? mi : this.cfg.faceLostTimeout;
    return !(this.frameDataTimestamp(e) - t.timestamp < r);
  }
  getHealth(e) {
    var r, a;
    const t = e.videoFrameInfo.timestamp;
    if (this.stage === Y.Idle)
      return (r = e.images) != null && r.face && e.faceBox && this.extractPixels(e.images), this.healthResult;
    if (this.stage == Y.WaitingData)
      return this.faceLost(t) || this.blinkDetector.noEyes || this.blinkDetector.unstable ? (this.faceLostError(), this.healthResult) : (this.blinkDetector.detect(e.landmarks), this.healthAnalyzer.isReadySync() ? (this.setStage(Y.CollectingData), this.healthResult) : (z("Waiting server to awake..."), this.healthResult));
    if (this.stage == Y.CollectingData)
      return this.faceLost(t) || this.blinkDetector.noEyes || this.blinkDetector.unstable ? (this.faceLostError(), this.healthResult) : (this.blinkDetector.detect(e.landmarks), (a = e.images) != null && a.face && e.faceBox && (this.addData(e.images, e.faceBox, e.landmarks, t), this.duplicatedPixelDetector.detected) ? (this.duplicatedRGBError(), this.healthResult) : (this.nextStage && this.setStage(Y.AnalyzingData), this.healthResult));
    if (this.stage == Y.AnalyzingData) {
      if (this.blinkDetector.blinkCount == 0)
        return z("Error: no blink"), this.toIdleStage(), this.error = new Error("no blink"), this.healthResult;
      if (this.sendingData && this.sendingDataStartTime) {
        const l = Date.now() - this.sendingDataStartTime;
        if (l > ka)
          return z(`Error: _sendData stuck for ${(l / 1e3).toFixed(1)}s, forcing recovery`), this.sendingData = !1, this.sendingDataStartTime = void 0, this.toIdleStage(), this.error = new Error("send data timeout"), this.healthResult;
      }
      let c = this.cfg.dataSendingRate || ui;
      return e.images && e.faceBox && this.addData(e.images, e.faceBox, e.landmarks, t), this.sendData(1 / c, e.userInfo, e.videoFrameInfo), this.nextStage && this.toIdleStage(), this.healthResult;
    } else
      return this.nextStage && this.setStage(Y.Idle), this.healthResult;
  }
  addData(e, t, r, a) {
    if (e.face === void 0)
      return;
    this.firstDataTime === void 0 && (this.firstDataTime = a);
    let o = {
      pixels: this.extractPixels(e),
      timestamp: this.frameDataTimestamp(a),
      facebox: t,
      landmarks: r
    };
    this.frameData.push(o);
  }
  extractPixels(e) {
    var r;
    let t = {};
    for (const a in this.pixelsExtractors) {
      const c = a, l = this.pixelsExtractors[c];
      if (!l)
        continue;
      const o = e[c];
      if (!o)
        continue;
      const g = (r = this.pixelsExtractors[c]) == null ? void 0 : r.extract(o.imageData);
      g && (t[c] = { type: l.dataType, pixels: g });
    }
    return t;
  }
  handleError(e) {
    z(`Error: ${e}`), this.toIdleStage(), this.error = e;
  }
  sendData(e, t, r) {
    if (this.sendingData)
      return;
    if (this.lastSendTime === void 0) {
      this.lastSendTime = /* @__PURE__ */ new Date(), this._sendData(t, r).catch((l) => this.handleError(l));
      return;
    }
    if (this.elapsedTime >= this.stageTime)
      return;
    let a = /* @__PURE__ */ new Date(), c = this.lastSendTime;
    (a.getTime() - c.getTime()) / 1e3 < e || this._sendData(t, r).catch((l) => this.handleError(l));
  }
  async _sendData(e, t) {
    if (this.sendingData = !0, this.sendingDataStartTime = Date.now(), this.frameData.length === 0)
      throw this.sendingData = !1, this.sendingDataStartTime = void 0, new Error("no pixel data");
    const r = this.frameData.slice();
    z(`Sending ${r.length} frames to server...`);
    const a = await this.healthAnalyzer.analyze(r, e, t);
    this.stage === Y.AnalyzingData && (this.health = a), this.lastSendTime = /* @__PURE__ */ new Date(), this.sendingData = !1, this.sendingDataStartTime = void 0;
  }
  /* Deprecated. For backward compatibility only */
  async sendHealthReport(e, t, r, a) {
    return this.healthAnalyzer.client.sendHealthReport(e, t, r, a);
  }
  /**
   * Save last request/response data to S3 bucket.
   * Delegates to the health analyzer's saveScanDataToS3 method.
   * @param bucket - S3 bucket name
   * @param requestDirectory - Directory for request data
   * @param responseDirectory - Directory for response data
   * @param shouldEncrypt - Whether to encrypt the data before upload
   */
  async saveScanDataToS3(e, t, r, a) {
    return this.healthAnalyzer.saveScanDataToS3(
      e,
      t,
      r,
      a || !1
    );
  }
  /**
   * Get the last request sent to the server during a scan.
   * Returns the JSON string of the most recent health analysis request.
   */
  get lastRequest() {
    const e = this.healthAnalyzer.lastRequest;
    return e ? JSON.stringify(e) : void 0;
  }
  /**
   * Get the last response received from the server during a scan.
   * Returns the JSON string of the most recent health analysis response.
   */
  get lastResponse() {
    const e = this.healthAnalyzer.lastResponse;
    return e ? JSON.stringify(e) : void 0;
  }
}
function Ca() {
  return new Ta();
}
var ie = /* @__PURE__ */ ((i) => (i[i.MediaPipe = 0] = "MediaPipe", i[i.OpenCV = 1] = "OpenCV", i[i.Dummy = 2] = "Dummy", i[i.TFMediaPipe = 3] = "TFMediaPipe", i[i.FaceApi = 4] = "FaceApi", i[i.MPFaceMesh = 5] = "MPFaceMesh", i[i.MPFaceDetector = 6] = "MPFaceDetector", i[i.MPFaceMeshThreaded = 7] = "MPFaceMeshThreaded", i))(ie || {}), Da = /* @__PURE__ */ ((i) => (i.SelfHosted = "self-hosted", i.CDN = "cdn", i))(Da || {}), Ut = /* @__PURE__ */ ((i) => (i.Downloading = "downloading", i.Caching = "caching", i.Ready = "ready", i))(Ut || {}), ye = /* @__PURE__ */ ((i) => (i[i.cif352x288 = 0] = "cif352x288", i[i.sd480x360 = 1] = "sd480x360", i[i.hd1280x720 = 2] = "hd1280x720", i[i.hd1920x1080 = 3] = "hd1920x1080", i))(ye || {});
function Fa(i) {
  switch (i) {
    case 0:
      return { width: 352, height: 288 };
    case 1:
      return { width: 480, height: 360 };
    case 2:
      return { width: 1280, height: 720 };
    case 3:
      return { width: 1920, height: 1080 };
  }
}
function Pa(i) {
  let e = document.createElement("canvas");
  return e.width = i.videoWidth, e.height = i.videoHeight, e.getContext("2d").drawImage(i, 0, 0), e;
}
function Ia(i) {
  if (i instanceof HTMLCanvasElement)
    return i;
  let e = document.createElement("canvas");
  return e.width = i.width, e.height = i.width, e.getContext("2d").drawImage(i, 0, 0), e;
}
function fi(i) {
  let e;
  return i.image instanceof HTMLVideoElement ? e = Pa(i.image) : i.image instanceof HTMLImageElement ? e = Ia(i.image) : e = i.image, e;
}
async function Nn() {
  const i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw";
  return new Promise((e) => {
    const t = document.createElement("img");
    t.src = i, t.onload = () => e(t);
  });
}
async function Wn() {
  const i = new ImageData(1, 1);
  return i.data[0] = 255, i.data[1] = 255, i.data[2] = 255, i.data[3] = 255, i;
}
async function _a(i) {
  return new Promise((e) => setTimeout(e, i));
}
function zn(i) {
  let e = 1, t = 1, r = 0, a = 0;
  return i.forEach((c) => {
    e = Math.min(c.x, e), t = Math.min(c.y, t), r = Math.max(c.x, r), a = Math.max(c.y, a);
  }), {
    xCenter: e + (r - e) / 2,
    yCenter: t + (a - t) / 2,
    width: r - e,
    height: a - t
  };
}
const ve = class ve {
  constructor(e) {
    d(this, "createDetector");
    d(this, "maxFps", 30);
    this.createDetector = e;
  }
  async getFaceDetector() {
    return ve.faceDetector == null && (ve.faceDetector = this.createDetector()), ve.faceDetector;
  }
  get lastSendTime() {
    return ve.lastSendTime;
  }
  set lastSendTime(e) {
    ve.lastSendTime = e;
  }
  get modelState() {
    return ve.modelState;
  }
  set modelState(e) {
    ve.modelState = e;
  }
  async loadModels(e, t) {
    if (this.modelState === "loaded") {
      t && (console.log("[FaceDetectorProxy] Models already loaded, providing cached progress feedback"), t({
        percentage: 90,
        loaded: 1,
        total: 1,
        stage: { type: Ut.Ready, fromCache: !0 }
      }), t({
        percentage: 100,
        loaded: 100,
        total: 100,
        stage: { type: Ut.Ready, fromCache: !0 }
      }));
      return;
    }
    if (this.modelState === void 0) {
      this.modelState = "loading";
      try {
        await (await this.getFaceDetector()).loadModels(e, t);
      } catch (r) {
        throw this.modelState = void 0, r;
      }
      console.log("[FaceDetectorProxy] model loaded."), this.modelState = "loaded";
      return;
    }
    do
      await _a(500);
    while (this.modelState !== "loading");
  }
  timeout(e) {
    return new Promise((t, r) => setTimeout(r, e));
  }
  async detect(e) {
    if (this.modelState !== "loaded") {
      console.log("[FaceDetectorProxy] model not ready");
      const c = fi(e);
      return { faceBox: void 0, landmarks: [], videoFrame: c };
    }
    const t = 1e3 / this.maxFps, r = /* @__PURE__ */ new Date();
    if (this.lastSendTime === void 0 || r.getTime() - this.lastSendTime.getTime() > t)
      return this.lastSendTime = r, Promise.race([this.timeout(1e3), (await this.getFaceDetector()).detect(e)]);
    const a = fi(e);
    return { faceBox: void 0, landmarks: [], videoFrame: a };
  }
};
d(ve, "faceDetector"), d(ve, "modelState"), d(ve, "lastSendTime");
let _e = ve;
const Aa = (() => {
  const i = {
    loadModelsFromRoot: !1
  };
  return typeof window < "u" ? (window.__vital_sign_camera_global_options__ === void 0 && (window.__vital_sign_camera_global_options__ = i), window.__vital_sign_camera_global_options__) : typeof self < "u" ? (self.__vital_sign_camera_global_options__ === void 0 && (self.__vital_sign_camera_global_options__ = i), self.__vital_sign_camera_global_options__) : i;
})();
function Ma(i) {
  return i.startsWith("http") || i.startsWith("/") || !Aa.loadModelsFromRoot ? i : `/${i}`;
}
let ht = null;
async function yt() {
  return ht || (ht = new Promise((i, e) => {
    if (typeof globalThis.FaceMeshUMD < "u") {
      i(globalThis.FaceMeshUMD);
      return;
    }
    const t = Ma("assets/facemesh.umd.cjs"), r = document.querySelector(`script[src="${t}"]`);
    if (r) {
      r.addEventListener("load", () => {
        i(globalThis.FaceMeshUMD);
      }), r.addEventListener("error", (c) => {
        e(c);
      });
      return;
    }
    const a = document.createElement("script");
    a.src = t, document.head.appendChild(a), a.addEventListener("load", () => {
      console.log("[VitalSignCamera] Imported FaceMeshUMD"), i(globalThis.FaceMeshUMD);
    }), a.addEventListener("error", (c) => {
      console.error("[VitalSignCamera] Failed to import FaceMeshUMD", c), e(c);
    });
  }), ht);
}
async function Vi(i) {
  switch (console.log(`[VitalSignCamera] Creating face detector of type ${ie[i]}.`), i) {
    case ie.MediaPipe:
      const { MediaPipeFaceDetector: e } = await import("./zXmv7LD4.js");
      return new _e(() => new e());
    case ie.OpenCV:
      const { OpenCVFaceDetector: t } = await import("./B0JZoLKx.js");
      return new _e(() => new t());
    case ie.Dummy:
      const { DummyFaceDetector: r } = await import("./DmBpyC_L.js");
      return new r();
    case ie.TFMediaPipe:
      const { TFMediaPipeFaceDetector: a } = await import("./DaHsaE7g.js");
      return new _e(() => new a());
    case ie.FaceApi:
      const { FaceApiFaceDetector: c } = await import("./Bzwx-m69.js");
      return new c();
    case ie.MPFaceMesh:
      const { MPVisionFaceMeshDetector: l } = await import("./_sSZxLPD.js");
      return new _e(() => new l());
    case ie.MPFaceDetector:
      const { MPVisionFaceDetector: o } = await import("./BFS1SR8A.js");
      return new _e(() => new o());
    case ie.MPFaceMeshThreaded:
      const { MPVisionFaceMeshDetectorThread: g } = await yt();
      return new _e(() => new g());
  }
}
var Dt = { exports: {} }, gi;
function Ba() {
  return gi || (gi = 1, (function(i) {
    i.exports = /******/
    (function(e) {
      var t = {};
      function r(a) {
        if (t[a])
          return t[a].exports;
        var c = t[a] = {
          /******/
          i: a,
          /******/
          l: !1,
          /******/
          exports: {}
          /******/
        };
        return e[a].call(c.exports, c, c.exports, r), c.l = !0, c.exports;
      }
      return r.m = e, r.c = t, r.d = function(a, c, l) {
        r.o(a, c) || Object.defineProperty(a, c, {
          /******/
          configurable: !1,
          /******/
          enumerable: !0,
          /******/
          get: l
          /******/
        });
      }, r.n = function(a) {
        var c = a && a.__esModule ? (
          /******/
          function() {
            return a.default;
          }
        ) : (
          /******/
          function() {
            return a;
          }
        );
        return r.d(c, "a", c), c;
      }, r.o = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c);
      }, r.p = "", r(r.s = 1);
    })([
      /* 0 */
      /***/
      (function(e, t, r) {
        var a = {
          MOBILE: "mobile",
          TABLET: "tablet",
          SMART_TV: "smarttv",
          CONSOLE: "console",
          WEARABLE: "wearable",
          BROWSER: void 0
        }, c = {
          CHROME: "Chrome",
          FIREFOX: "Firefox",
          OPERA: "Opera",
          YANDEX: "Yandex",
          SAFARI: "Safari",
          INTERNET_EXPLORER: "Internet Explorer",
          EDGE: "Edge",
          CHROMIUM: "Chromium",
          IE: "IE",
          MOBILE_SAFARI: "Mobile Safari",
          EDGE_CHROMIUM: "Edge Chromium"
        }, l = {
          IOS: "iOS",
          ANDROID: "Android",
          WINDOWS_PHONE: "Windows Phone",
          WINDOWS: "Windows",
          MAC_OS: "Mac OS"
        }, o = {
          isMobile: !1,
          isTablet: !1,
          isBrowser: !1,
          isSmartTV: !1,
          isConsole: !1,
          isWearable: !1
        };
        e.exports = { BROWSER_TYPES: c, DEVICE_TYPES: a, OS_TYPES: l, defaultData: o };
      }),
      /* 1 */
      /***/
      (function(e, t, r) {
        var a = r(2), c = r(0), l = c.BROWSER_TYPES, o = c.OS_TYPES, g = c.DEVICE_TYPES, b = r(4), E = b.checkType, T = b.broPayload, w = b.mobilePayload, f = b.wearPayload, p = b.consolePayload, m = b.stvPayload, v = b.getNavigatorInstance, k = b.isIOS13Check, C = new a(), S = C.getBrowser(), D = C.getDevice(), P = C.getEngine(), I = C.getOS(), F = C.getUA(), V = l.CHROME, J = l.CHROMIUM, ee = l.IE, j = l.INTERNET_EXPLORER, K = l.OPERA, Z = l.FIREFOX, le = l.SAFARI, Q = l.EDGE, se = l.YANDEX, ae = l.MOBILE_SAFARI, U = g.MOBILE, N = g.TABLET, A = g.SMART_TV, M = g.BROWSER, B = g.WEARABLE, he = g.CONSOLE, W = o.ANDROID, de = o.WINDOWS_PHONE, re = o.IOS, we = o.WINDOWS, ge = o.MAC_OS, De = function() {
          return D.type === U;
        }, Le = function() {
          return D.type === N;
        }, ze = function() {
          switch (D.type) {
            case U:
            case N:
              return !0;
            default:
              return !1;
          }
        }, Ue = function() {
          return I.name === o.WINDOWS && I.version === "10" ? typeof F == "string" && F.indexOf("Edg/") !== -1 : !1;
        }, pe = function() {
          return D.type === A;
        }, be = function() {
          return D.type === M;
        }, xe = function() {
          return D.type === B;
        }, Ge = function() {
          return D.type === he;
        }, Se = function() {
          return I.name === W;
        }, Re = function() {
          return I.name === we;
        }, Fe = function() {
          return I.name === ge;
        }, He = function() {
          return I.name === de;
        }, ke = function() {
          return I.name === re;
        }, ue = function() {
          return S.name === V;
        }, ne = function() {
          return S.name === Z;
        }, Ee = function() {
          return S.name === J;
        }, ce = function() {
          return S.name === Q;
        }, L = function() {
          return S.name === se;
        }, h = function() {
          return S.name === le || S.name === ae;
        }, s = function() {
          return S.name === ae;
        }, n = function() {
          return S.name === K;
        }, u = function() {
          return S.name === j || S.name === ee;
        }, y = function() {
          var Te = v(), st = Te && Te.userAgent.toLowerCase();
          return typeof st == "string" ? /electron/.test(st) : !1;
        }, x = function() {
          var Te = v();
          return Te && (/iPad|iPhone|iPod/.test(Te.platform) || Te.platform === "MacIntel" && Te.maxTouchPoints > 1) && !window.MSStream;
        }, R = function() {
          return k("iPad");
        }, _ = function() {
          return k("iPhone");
        }, q = function() {
          return k("iPod");
        }, H = function() {
          return S.major;
        }, X = function() {
          return S.version;
        }, $ = function() {
          return I.version ? I.version : "none";
        }, Ki = function() {
          return I.name ? I.name : "none";
        }, Xi = function() {
          return S.name;
        }, Ji = function() {
          return D.vendor ? D.vendor : "none";
        }, Qi = function() {
          return D.model ? D.model : "none";
        }, Zi = function() {
          return P.name;
        }, er = function() {
          return P.version;
        }, tr = function() {
          return F;
        }, ir = function() {
          return D.type;
        }, rr = pe(), sr = Ge(), ar = xe(), nr = s() || R(), or = Ee(), cr = ze() || R(), lr = De(), hr = Le() || R(), dr = be(), ur = Se(), mr = He(), fr = ke() || R(), gr = ue(), pr = ne(), vr = h(), wr = n(), yr = u(), br = $(), xr = Ki(), Er = H(), Sr = X(), Rr = Xi(), kr = Ji(), Tr = Qi(), Cr = Zi(), Dr = er(), Fr = tr(), Pr = ce() || Ue(), Ir = L(), _r = ir(), Ar = x(), Mr = R(), Br = _(), Or = q(), Lr = y(), Ur = Ue(), Vr = ce(), Nr = Re(), Wr = Fe(), Pe = E(D.type);
        function zr() {
          var O = Pe.isBrowser, Te = Pe.isMobile, st = Pe.isTablet, Wt = Pe.isSmartTV, zt = Pe.isConsole, Ht = Pe.isWearable;
          if (O)
            return T(O, S, P, I, F);
          if (Wt)
            return m(Wt, P, I, F);
          if (zt)
            return p(zt, P, I, F);
          if (Te || st)
            return w(Pe, D, I, F);
          if (Ht)
            return f(Ht, P, I, F);
        }
        e.exports = {
          deviceDetect: zr,
          isSmartTV: rr,
          isConsole: sr,
          isWearable: ar,
          isMobileSafari: nr,
          isChromium: or,
          isMobile: cr,
          isMobileOnly: lr,
          isTablet: hr,
          isBrowser: dr,
          isAndroid: ur,
          isWinPhone: mr,
          isIOS: fr,
          isChrome: gr,
          isFirefox: pr,
          isSafari: vr,
          isOpera: wr,
          isIE: yr,
          osVersion: br,
          osName: xr,
          fullBrowserVersion: Er,
          browserVersion: Sr,
          browserName: Rr,
          mobileVendor: kr,
          mobileModel: Tr,
          engineName: Cr,
          engineVersion: Dr,
          getUA: Fr,
          isEdge: Pr,
          isYandex: Ir,
          deviceType: _r,
          isIOS13: Ar,
          isIPad13: Mr,
          isIPhone13: Br,
          isIPod13: Or,
          isElectron: Lr,
          isEdgeChromium: Ur,
          isLegacyEdge: Vr,
          isWindows: Nr,
          isMacOs: Wr
        };
      }),
      /* 2 */
      /***/
      (function(e, t, r) {
        var a;
        /*!
        * UAParser.js v0.7.18
        * Lightweight JavaScript-based User-Agent string parser
        * https://github.com/faisalman/ua-parser-js
        *
        * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
        * Dual licensed under GPLv2 or MIT
        */
        (function(c, l) {
          var o = "0.7.18", g = "", b = "?", E = "function", T = "undefined", w = "object", f = "string", p = "major", m = "model", v = "name", k = "type", C = "vendor", S = "version", D = "architecture", P = "console", I = "mobile", F = "tablet", V = "smarttv", J = "wearable", ee = "embedded", j = { extend: function(U, N) {
            var A = {};
            for (var M in U)
              N[M] && N[M].length % 2 === 0 ? A[M] = N[M].concat(U[M]) : A[M] = U[M];
            return A;
          }, has: function(U, N) {
            return typeof U == "string" ? N.toLowerCase().indexOf(U.toLowerCase()) !== -1 : !1;
          }, lowerize: function(U) {
            return U.toLowerCase();
          }, major: function(U) {
            return typeof U === f ? U.replace(/[^\d\.]/g, "").split(".")[0] : l;
          }, trim: function(U) {
            return U.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          } }, K = { rgx: function(U, N) {
            for (var A = 0, M, B, he, W, de, re; A < N.length && !de; ) {
              var we = N[A], ge = N[A + 1];
              for (M = B = 0; M < we.length && !de; )
                if (de = we[M++].exec(U), de)
                  for (he = 0; he < ge.length; he++)
                    re = de[++B], W = ge[he], typeof W === w && W.length > 0 ? W.length == 2 ? typeof W[1] == E ? this[W[0]] = W[1].call(this, re) : this[W[0]] = W[1] : W.length == 3 ? typeof W[1] === E && !(W[1].exec && W[1].test) ? this[W[0]] = re ? W[1].call(this, re, W[2]) : l : this[W[0]] = re ? re.replace(W[1], W[2]) : l : W.length == 4 && (this[W[0]] = re ? W[3].call(this, re.replace(W[1], W[2])) : l) : this[W] = re || l;
              A += 2;
            }
          }, str: function(U, N) {
            for (var A in N)
              if (typeof N[A] === w && N[A].length > 0) {
                for (var M = 0; M < N[A].length; M++)
                  if (j.has(N[A][M], U))
                    return A === b ? l : A;
              } else if (j.has(N[A], U))
                return A === b ? l : A;
            return U;
          } }, Z = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } }, le = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [v, S], [/(opios)[\/\s]+([\w\.]+)/i], [[v, "Opera Mini"], S], [/\s(opr)\/([\w\.]+)/i], [[v, "Opera"], S], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [v, S], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[v, "IE"], S], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[v, "Edge"], S], [/(yabrowser)\/([\w\.]+)/i], [[v, "Yandex"], S], [/(puffin)\/([\w\.]+)/i], [[v, "Puffin"], S], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[v, "UCBrowser"], S], [/(comodo_dragon)\/([\w\.]+)/i], [[v, /_/g, " "], S], [/(micromessenger)\/([\w\.]+)/i], [[v, "WeChat"], S], [/(qqbrowserlite)\/([\w\.]+)/i], [v, S], [/(QQ)\/([\d\.]+)/i], [v, S], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [v, S], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [v, S], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [v, S], [/(MetaSr)[\/\s]?([\w\.]+)/i], [v], [/(LBBROWSER)/i], [v], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [S, [v, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [S, [v, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [S, [v, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[v, /(.+)/, "$1 WebView"], S], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[v, /(.+(?:g|us))(.+)/, "$1 $2"], S], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [S, [v, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [v, S], [/(dolfin)\/([\w\.]+)/i], [[v, "Dolphin"], S], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[v, "Chrome"], S], [/(coast)\/([\w\.]+)/i], [[v, "Opera Coast"], S], [/fxios\/([\w\.-]+)/i], [S, [v, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [S, [v, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [S, v], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[v, "GSA"], S], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [v, [S, K.str, Z.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [v, S], [/(navigator|netscape)\/([\w\.-]+)/i], [[v, "Netscape"], S], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [v, S]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[D, "amd64"]], [/(ia32(?=;))/i], [[D, j.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[D, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[D, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[D, /ower/, "", j.lowerize]], [/(sun4\w)[;\)]/i], [[D, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[D, j.lowerize]]], device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [m, C, [k, F]], [/applecoremedia\/[\w\.]+ \((ipad)/], [m, [C, "Apple"], [k, F]], [/(apple\s{0,1}tv)/i], [[m, "Apple TV"], [C, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [C, m, [k, F]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [m, [C, "Amazon"], [k, F]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[m, K.str, Z.device.amazon.model], [C, "Amazon"], [k, I]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [m, C, [k, I]], [/\((ip[honed|\s\w*]+);/i], [m, [C, "Apple"], [k, I]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [C, m, [k, I]], [/\(bb10;\s(\w+)/i], [m, [C, "BlackBerry"], [k, I]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [m, [C, "Asus"], [k, F]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[C, "Sony"], [m, "Xperia Tablet"], [k, F]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [m, [C, "Sony"], [k, I]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [C, m, [k, P]], [/android.+;\s(shield)\sbuild/i], [m, [C, "Nvidia"], [k, P]], [/(playstation\s[34portablevi]+)/i], [m, [C, "Sony"], [k, P]], [/(sprint\s(\w+))/i], [[C, K.str, Z.device.sprint.vendor], [m, K.str, Z.device.sprint.model], [k, I]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [C, m, [k, F]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [C, [m, /_/g, " "], [k, I]], [/(nexus\s9)/i], [m, [C, "HTC"], [k, F]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [m, [C, "Huawei"], [k, I]], [/(microsoft);\s(lumia[\s\w]+)/i], [C, m, [k, I]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [m, [C, "Microsoft"], [k, P]], [/(kin\.[onetw]{3})/i], [[m, /\./g, " "], [C, "Microsoft"], [k, I]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [m, [C, "Motorola"], [k, I]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [m, [C, "Motorola"], [k, F]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[C, j.trim], [m, j.trim], [k, V]], [/hbbtv.+maple;(\d+)/i], [[m, /^/, "SmartTV"], [C, "Samsung"], [k, V]], [/\(dtv[\);].+(aquos)/i], [m, [C, "Sharp"], [k, V]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[C, "Samsung"], m, [k, F]], [/smart-tv.+(samsung)/i], [C, [k, V], m], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[C, "Samsung"], m, [k, I]], [/sie-(\w*)/i], [m, [C, "Siemens"], [k, I]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[C, "Nokia"], m, [k, I]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [m, [C, "Acer"], [k, F]], [/android.+([vl]k\-?\d{3})\s+build/i], [m, [C, "LG"], [k, F]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[C, "LG"], m, [k, F]], [/(lg) netcast\.tv/i], [C, m, [k, V]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [m, [C, "LG"], [k, I]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [m, [C, "Lenovo"], [k, F]], [/linux;.+((jolla));/i], [C, m, [k, I]], [/((pebble))app\/[\d\.]+\s/i], [C, m, [k, J]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [C, m, [k, I]], [/crkey/i], [[m, "Chromecast"], [C, "Google"]], [/android.+;\s(glass)\s\d/i], [m, [C, "Google"], [k, J]], [/android.+;\s(pixel c)\s/i], [m, [C, "Google"], [k, F]], [/android.+;\s(pixel xl|pixel)\s/i], [m, [C, "Google"], [k, I]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[m, /_/g, " "], [C, "Xiaomi"], [k, I]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[m, /_/g, " "], [C, "Xiaomi"], [k, F]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [m, [C, "Meizu"], [k, F]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [m, [C, "OnePlus"], [k, I]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [m, [C, "RCA"], [k, F]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [m, [C, "Dell"], [k, F]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [m, [C, "Verizon"], [k, F]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[C, "Barnes & Noble"], m, [k, F]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [m, [C, "NuVision"], [k, F]], [/android.+;\s(k88)\sbuild/i], [m, [C, "ZTE"], [k, F]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [m, [C, "Swiss"], [k, I]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [m, [C, "Swiss"], [k, F]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [m, [C, "Zeki"], [k, F]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[C, "Dragon Touch"], m, [k, F]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [m, [C, "Insignia"], [k, F]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [m, [C, "NextBook"], [k, F]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[C, "Voice"], m, [k, I]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[C, "LvTel"], m, [k, I]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [m, [C, "Envizen"], [k, F]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [C, m, [k, F]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [m, [C, "MachSpeed"], [k, F]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [C, m, [k, F]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [m, [C, "Rotor"], [k, F]], [/android.+(KS(.+))\s+build/i], [m, [C, "Amazon"], [k, F]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [C, m, [k, F]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[k, j.lowerize], C, m], [/(android[\w\.\s\-]{0,9});.+build/i], [m, [C, "Generic"]]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [S, [v, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [v, S], [/rv\:([\w\.]{1,9}).+(gecko)/i], [S, v]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [v, S], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [v, [S, K.str, Z.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[v, "Windows"], [S, K.str, Z.os.windows.version]], [/\((bb)(10);/i], [[v, "BlackBerry"], S], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [v, S], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[v, "Symbian"], S], [/\((series40);/i], [v], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[v, "Firefox OS"], S], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [v, S], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[v, "Chromium OS"], S], [/(sunos)\s?([\w\.\d]*)/i], [[v, "Solaris"], S], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [v, S], [/(haiku)\s(\w+)/i], [v, S], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[S, /_/g, "."], [v, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[v, "Mac OS"], [S, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [v, S]] }, Q = function(U, N) {
            if (typeof U == "object" && (N = U, U = l), !(this instanceof Q))
              return new Q(U, N).getResult();
            var A = U || (c && c.navigator && c.navigator.userAgent ? c.navigator.userAgent : g), M = N ? j.extend(le, N) : le;
            return this.getBrowser = function() {
              var B = { name: l, version: l };
              return K.rgx.call(B, A, M.browser), B.major = j.major(B.version), B;
            }, this.getCPU = function() {
              var B = { architecture: l };
              return K.rgx.call(B, A, M.cpu), B;
            }, this.getDevice = function() {
              var B = { vendor: l, model: l, type: l };
              return K.rgx.call(B, A, M.device), B;
            }, this.getEngine = function() {
              var B = { name: l, version: l };
              return K.rgx.call(B, A, M.engine), B;
            }, this.getOS = function() {
              var B = { name: l, version: l };
              return K.rgx.call(B, A, M.os), B;
            }, this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            }, this.getUA = function() {
              return A;
            }, this.setUA = function(B) {
              return A = B, this;
            }, this;
          };
          Q.VERSION = o, Q.BROWSER = { NAME: v, MAJOR: p, VERSION: S }, Q.CPU = { ARCHITECTURE: D }, Q.DEVICE = { MODEL: m, VENDOR: C, TYPE: k, CONSOLE: P, MOBILE: I, SMARTTV: V, TABLET: F, WEARABLE: J, EMBEDDED: ee }, Q.ENGINE = { NAME: v, VERSION: S }, Q.OS = { NAME: v, VERSION: S }, typeof t !== T ? (typeof e !== T && e.exports && (t = e.exports = Q), t.UAParser = Q) : r(3) ? (a = (function() {
            return Q;
          }).call(t, r, t, e), a !== l && (e.exports = a)) : c && (c.UAParser = Q);
          var se = c && (c.jQuery || c.Zepto);
          if (typeof se !== T) {
            var ae = new Q();
            se.ua = ae.getResult(), se.ua.get = function() {
              return ae.getUA();
            }, se.ua.set = function(U) {
              ae.setUA(U);
              var N = ae.getResult();
              for (var A in N)
                se.ua[A] = N[A];
            };
          }
        })(typeof window == "object" ? window : this);
      }),
      /* 3 */
      /***/
      (function(e, t) {
        (function(r) {
          e.exports = r;
        }).call(t, {});
      }),
      /* 4 */
      /***/
      (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var a = Object.assign || function(v) {
          for (var k = 1; k < arguments.length; k++) {
            var C = arguments[k];
            for (var S in C)
              Object.prototype.hasOwnProperty.call(C, S) && (v[S] = C[S]);
          }
          return v;
        }, c = r(0), l = c.DEVICE_TYPES, o = c.defaultData, g = function(k) {
          switch (k) {
            case l.MOBILE:
              return { isMobile: !0 };
            case l.TABLET:
              return { isTablet: !0 };
            case l.SMART_TV:
              return { isSmartTV: !0 };
            case l.CONSOLE:
              return { isConsole: !0 };
            case l.WEARABLE:
              return { isWearable: !0 };
            case l.BROWSER:
              return { isBrowser: !0 };
            default:
              return o;
          }
        }, b = function(k, C, S, D, P) {
          return {
            isBrowser: k,
            browserMajorVersion: C.major,
            browserFullVersion: C.version,
            browserName: C.name,
            engineName: S.name || !1,
            engineVersion: S.version,
            osName: D.name,
            osVersion: D.version,
            userAgent: P
          };
        }, E = function(k, C, S, D) {
          return a({}, k, {
            vendor: C.vendor,
            model: C.model,
            os: S.name,
            osVersion: S.version,
            ua: D
          });
        }, T = function(k, C, S, D) {
          return {
            isSmartTV: k,
            engineName: C.name,
            engineVersion: C.version,
            osName: S.name,
            osVersion: S.version,
            userAgent: D
          };
        }, w = function(k, C, S, D) {
          return {
            isConsole: k,
            engineName: C.name,
            engineVersion: C.version,
            osName: S.name,
            osVersion: S.version,
            userAgent: D
          };
        }, f = function(k, C, S, D) {
          return {
            isWearable: k,
            engineName: C.name,
            engineVersion: C.version,
            osName: S.name,
            osVersion: S.version,
            userAgent: D
          };
        }, p = t.getNavigatorInstance = function() {
          return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1;
        }, m = t.isIOS13Check = function(k) {
          var C = p();
          return C && C.platform && (C.platform.indexOf(k) !== -1 || C.platform === "MacIntel" && C.maxTouchPoints > 1 && !window.MSStream);
        };
        e.exports = {
          checkType: g,
          broPayload: b,
          mobilePayload: E,
          stvPayload: T,
          consolePayload: w,
          wearPayload: f,
          getNavigatorInstance: p,
          isIOS13Check: m
        };
      })
      /******/
    ]);
  })(Dt)), Dt.exports;
}
var G = Ba();
const Oa = /* @__PURE__ */ Ts(G);
function Ni(i) {
  const { image: e, facebox: t } = i;
  let r = t.width * e.width, a = t.height * e.height, c = (t.xCenter - t.width / 2) * e.width, l = (t.yCenter - t.height / 2) * e.height;
  a = a * 0.7;
  const o = new OffscreenCanvas(e.width, e.height), g = o.getContext("2d");
  g == null || g.putImageData(e, 0, 0);
  const b = new OffscreenCanvas(r, a), E = b.getContext("2d");
  E.drawImage(o, c, l, r, a, 0, 0, r, a);
  let T = E.getImageData(0, 0, b.width, b.height).data, w = 0, f = 0;
  for (let p = 0; p < T.length; p += 4)
    w += Math.max(T[p], T[p + 1], T[p + 2]), f++;
  return w / f;
}
self.onmessage = (i) => {
  const { inputData: e, hash: t } = i.data, r = Ni(e);
  self.postMessage({ result: r, hash: t });
};
const La = 90, Ua = [0.3, 0.9], Va = [0.4, 0.6], Na = [0.3, 0.7], pi = 0.1, Wa = 30, za = G.isMobile && !G.isTablet, Ha = 10, vi = za || G.isAndroid ? Ha : 15;
function $e(i) {
  return Array.isArray(i) ? i : [i.min, i.max];
}
class $a {
  constructor(e, t) {
    d(this, "MOVEMENT_ARRAY", []);
    d(this, "_conditions");
    d(this, "vitalSignEngine");
    d(this, "workerFactory", () => new Worker(new URL(
      /* @vite-ignore */
      "assets/Dlu49HB2.js",
      import.meta.url
    ), { type: "module" }));
    d(this, "workerPool", fe(this.workerFactory, Ni, "CheckBrightness"));
    d(this, "minimumFrameRate", vi);
    d(this, "minimumBrightness", La);
    d(this, "validXRange", Va);
    d(this, "validYRange", Na);
    d(this, "validDistanceRange", Ua);
    this.vitalSignEngine = e, (t == null ? void 0 : t.boundaryRangeX) !== void 0 && (this.validXRange = $e(t.boundaryRangeX)), (t == null ? void 0 : t.boundaryRangeY) !== void 0 && (this.validYRange = $e(t.boundaryRangeY)), (t == null ? void 0 : t.distanceRange) !== void 0 && (this.validDistanceRange = $e(t.distanceRange));
  }
  configure(e) {
    (e == null ? void 0 : e.minimumFrameRate) !== void 0 && (this.minimumFrameRate = e.minimumFrameRate), (e == null ? void 0 : e.validDistanceRange) !== void 0 && (this.validDistanceRange = $e(e.validDistanceRange)), (e == null ? void 0 : e.validXRange) !== void 0 && (this.validXRange = $e(e.validXRange)), (e == null ? void 0 : e.validYRange) !== void 0 && (this.validYRange = $e(e.validYRange));
  }
  get conditions() {
    return this._conditions;
  }
  resetMovementArray() {
    this.MOVEMENT_ARRAY = [];
  }
  reset() {
    this.resetMovementArray(), this._conditions = void 0;
  }
  async getBrightness(e, t) {
    var a;
    const r = (a = e.getContext("2d", { willReadFrequently: !0 })) == null ? void 0 : a.getImageData(0, 0, e.width, e.height);
    return r ? await this.workerPool.callWorker({ image: r, facebox: t }) : 0;
  }
  checkDistance(e) {
    let t = this.validDistanceRange;
    return e.height > t[1] ? qe.TooClose : e.height < t[0] ? qe.TooFar : qe.OK;
  }
  checkFacePosition(e) {
    if (e === void 0)
      return Ie.Unknown;
    let t = this.validXRange, r = this.validYRange, a = Ie.Centered;
    return e.yCenter < r[0] && (a = Ie.TooHigh), e.yCenter > r[1] && (a = Ie.TooLow), e.xCenter < t[0] && (a = Ie.TooRight), e.xCenter > t[1] && (a = Ie.TooLeft), a;
  }
  async checkCondition(e, t, r) {
    let a = !0;
    if (e !== void 0) {
      let E = t ? await this.getBrightness(e, t) : 0;
      a = this.minimumBrightness <= E;
    }
    const c = t ? this.checkDistance(t) : qe.TooFar, l = this.checkFacePosition(t);
    let o = !1;
    if (this.MOVEMENT_ARRAY.length >= Wa) {
      this.MOVEMENT_ARRAY.shift();
      let E = 0, T = 0, w = 1, f = 1;
      for (let v = 0; v < this.MOVEMENT_ARRAY.length; v++)
        E = this.MOVEMENT_ARRAY[v][0] > E ? this.MOVEMENT_ARRAY[v][0] : E, T = this.MOVEMENT_ARRAY[v][1] > T ? this.MOVEMENT_ARRAY[v][1] : T, w = this.MOVEMENT_ARRAY[v][0] < w ? this.MOVEMENT_ARRAY[v][0] : w, f = this.MOVEMENT_ARRAY[v][1] < f ? this.MOVEMENT_ARRAY[v][1] : f;
      const p = E.valueOf() - w.valueOf(), m = T.valueOf() - f.valueOf();
      o = p <= pi && m <= pi;
    }
    t && this.MOVEMENT_ARRAY.push([t.xCenter, t.yCenter]);
    let g = await this.vitalSignEngine.isReady();
    const b = r >= this.minimumFrameRate;
    return {
      lighting: a,
      distance: c === qe.OK,
      centered: l === Ie.Centered,
      movement: o,
      serverReady: g,
      frameRate: b,
      distanceCondition: c,
      facePositionCondition: l,
      fps: r
    };
  }
  async processFrame(e, t, r, a, c) {
    c === "measuring" && (a = Math.max(vi, a)), this._conditions = await this.checkCondition(
      r ? e : void 0,
      t,
      a
    );
  }
}
function qa(i, e, t) {
  const r = new $a(
    i,
    t || void 0
  );
  return r.configure(e), r;
}
async function ja() {
  try {
    let i = await navigator.mediaDevices.enumerateDevices();
    return i = i.filter((e) => e.kind === "videoinput"), i.map((e, t) => ({ label: e.label, id: e.deviceId, deviceIndex: t }));
  } catch {
    return [];
  }
}
function Ya(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t].id !== e[t].id || i[t].label !== e[t].label)
      return !1;
  return !0;
}
class Ga {
  constructor(e, t) {
    d(this, "camera");
    d(this, "devices", []);
    d(this, "timer");
    d(this, "selectedDevice");
    d(this, "onChanged");
    this.camera = e, this.onChanged = t;
  }
  start() {
    this.timer === void 0 && (this.timer = setInterval(async () => {
      const e = await ja();
      (!Ya(e, this.devices) || this.camera.device !== this.selectedDevice) && (this.devices = e, this.selectedDevice = this.camera.device, this.onChanged && this.onChanged(this.devices));
    }, 1e3));
  }
}
async function Ka(i, e) {
  const { DefaultAgeEstimator: t } = await import("./adpbMa5p.js");
  return new Promise((r) => {
    const a = new t(i, () => {
      r(a);
    }, e);
  });
}
class Hn {
  constructor(e, t = {}) {
    d(this, "canvas");
    d(this, "ctx");
    d(this, "config");
    d(this, "plotMargins", { left: 15, top: 12, bottom: 12 });
    const r = e.clientWidth || t.width || 600, a = e.clientHeight || t.height || 200;
    this.config = {
      width: t.width || r,
      height: t.height || a,
      maxPoints: t.maxPoints || 300,
      lineColor: t.lineColor || "#00ff00",
      backgroundColor: t.backgroundColor || "#000000",
      gridColor: t.gridColor || "#333333",
      debug: t.debug || !1,
      windowSeconds: t.windowSeconds ?? 10,
      title: t.title ?? "PPG",
      showBorder: t.showBorder ?? !0,
      showInfo: t.showInfo ?? !0,
      signal2Color: t.signal2Color || "#ffb432",
      ...t
    }, this.canvas = document.createElement("canvas"), this.canvas.style.backgroundColor = this.config.backgroundColor, this.canvas.style.display = "block", e.appendChild(this.canvas), this.ensureCanvasSize();
    const c = this.canvas.getContext("2d");
    if (!c)
      throw new Error("Could not get 2D context from canvas");
    this.ctx = c, this.clear();
  }
  log(e, ...t) {
    this.config.debug && console.log(`[Signal Visualizer] ${e}`, ...t);
  }
  ensureCanvasSize() {
    const e = this.canvas.getBoundingClientRect(), t = Math.max(1, Math.round(e.width)), r = Math.max(1, Math.round(e.height));
    (this.canvas.width !== t || this.canvas.height !== r) && (this.canvas.width = t, this.canvas.height = r, this.log(`Canvas resized to bitmap: ${t}x${r}`));
  }
  get plotArea() {
    const { left: e, top: t, bottom: r } = this.plotMargins, a = this.canvas.width, c = this.canvas.height;
    return {
      left: e,
      top: t,
      width: a - e,
      height: c - t - r
    };
  }
  updateSignal(e, t) {
    var c;
    this.log("updateSignal:", {
      hasData: !!e,
      valuesLength: ((c = e == null ? void 0 : e.values) == null ? void 0 : c.length) || 0,
      sampleRate: e == null ? void 0 : e.sampleRate,
      hasSignal2: !!t
    }), this.ensureCanvasSize(), e = this.sliceToWindow(e), t = this.sliceToWindow(t);
    const r = this.canvas.width, a = this.canvas.height;
    if (this.ctx.clearRect(0, 0, r, a), this.ctx.fillStyle = this.config.backgroundColor, this.ctx.fillRect(0, 0, r, a), !e || e.values.length === 0) {
      this.drawTitle(), this.drawGrid(), this.config.showBorder && this.drawPlotBorder(), this.drawWaitingForSignal();
      return;
    }
    this.drawTitle(), this.drawGrid(), this.config.showBorder && this.drawPlotBorder(), this.drawPPGSignal(e, t), this.config.showInfo && this.drawInfo(e);
  }
  clear() {
    this.ctx.save(), this.ctx.globalAlpha = 1, this.ctx.globalCompositeOperation = "source-over", this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = this.config.backgroundColor, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  drawTitle() {
    this.config.title && (this.ctx.save(), this.ctx.fillStyle = "#cccccc", this.ctx.font = "12px sans-serif", this.ctx.textAlign = "left", this.ctx.fillText(this.config.title, this.plotMargins.left + 5, this.plotMargins.top + 14), this.ctx.restore());
  }
  drawGrid() {
    this.ctx.save(), this.ctx.globalAlpha = 1, this.ctx.globalCompositeOperation = "source-over", this.ctx.strokeStyle = this.config.gridColor, this.ctx.lineWidth = 1, this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0;
    const { left: e, top: t, width: r, height: a } = this.plotArea;
    for (let c = 1; c <= 3; c++) {
      const l = t + Math.round(a * c / 4);
      this.ctx.beginPath(), this.ctx.moveTo(e, l), this.ctx.lineTo(e + r, l), this.ctx.stroke();
    }
    this.ctx.restore();
  }
  drawPlotBorder() {
    const { left: e, top: t, width: r, height: a } = this.plotArea;
    this.ctx.save(), this.ctx.strokeStyle = "#464646", this.ctx.lineWidth = 1, this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.strokeRect(e, t, r, a), this.ctx.restore();
  }
  drawWaitingForSignal() {
    const { left: e, top: t, width: r, height: a } = this.plotArea;
    this.ctx.save(), this.ctx.fillStyle = "#999999", this.ctx.font = "14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText("Waiting for signal...", e + r / 2, t + a / 2), this.ctx.restore();
  }
  normalizeWindow(e) {
    if (e.length === 0) return [];
    const t = e.reduce((c, l) => c + l, 0) / e.length, r = e.map((c) => c - t), a = Math.max(...r.map((c) => Math.abs(c)));
    return a < 1e-10 ? r : r.map((c) => c / a);
  }
  sliceToWindow(e) {
    if (!e || e.values.length === 0 || e.sampleRate <= 0) return e ?? null;
    const t = Math.ceil(this.config.windowSeconds * e.sampleRate);
    return e.values.length <= t ? e : {
      ...e,
      values: e.values.slice(-t),
      timestamps: e.timestamps.slice(-t)
    };
  }
  filterWindow(e, t, r, a) {
    const c = [], l = [];
    for (let o = 0; o < t.length; o++)
      t[o] >= r && t[o] <= a && (c.push(e[o]), l.push(t[o]));
    return { values: c, timestamps: l };
  }
  drawWaveform(e, t, r, a, c, l) {
    if (t.length < 2) return;
    const { left: o, top: g, width: b, height: E } = this.plotArea, T = Math.max(2, E * 0.08);
    this.ctx.save(), this.ctx.strokeStyle = c, this.ctx.lineWidth = l, this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.beginPath();
    let w = !1;
    for (let f = 0; f < t.length; f++) {
      if (isNaN(t[f])) continue;
      const p = o + (e[f] - r) / a * b;
      let m = g + T + (E - 2 * T) - (t[f] + 1) / 2 * (E - 2 * T);
      m = Math.max(g, Math.min(g + E, m)), w ? this.ctx.lineTo(p, m) : (this.ctx.moveTo(p, m), w = !0);
    }
    this.ctx.stroke(), this.ctx.restore();
  }
  drawPPGSignal(e, t) {
    const { values: r, timestamps: a } = e;
    if (a.length === 0) {
      this.drawWaitingForSignal();
      return;
    }
    const c = a[a.length - 1], l = this.config.windowSeconds * 1e3, o = c - l, g = c, b = this.filterWindow(r, a, o, g), T = t && t.values.length > 0 ? this.filterWindow(t.values, t.timestamps, o, g) : null;
    if (b.values.length < 4 && (!T || T.values.length < 4)) {
      this.drawWaitingForSignal();
      return;
    }
    const w = Math.max(g - o, 1);
    if (b.values.length >= 2) {
      const f = this.normalizeWindow(b.values);
      this.drawWaveform(b.timestamps, f, o, w, this.config.lineColor, 2);
    }
    if (T && T.values.length >= 2) {
      const f = this.normalizeWindow(T.values);
      this.drawWaveform(T.timestamps, f, o, w, this.config.signal2Color, 2);
    }
  }
  drawInfo(e) {
    const { values: t, sampleRate: r } = e;
    this.ctx.save(), this.ctx.fillStyle = "#ffffff", this.ctx.font = "12px monospace", this.ctx.textAlign = "right";
    const a = [
      `Samples: ${t.length}`,
      `Rate: ${r.toFixed(1)} Hz`,
      `Duration: ${(t.length / r).toFixed(1)}s`
    ], { left: c, top: l } = this.plotArea;
    a.forEach((o, g) => {
      this.ctx.fillText(o, this.canvas.width - c, l + 14 + g * 15);
    }), this.ctx.restore();
  }
  resetScale() {
    this.log("State reset");
  }
  destroy() {
    this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
  }
}
async function wi(i) {
  const e = (i == null ? void 0 : i.estimatorType) || ut.Fda;
  switch (console.log(`[RealtimeEstimatorFactory] Creating realtime estimator of type: ${e}`), e) {
    case ut.Fda:
      const { FdaRealtimeEstimator: t } = await import("./CsxCocmW.js");
      return new t(i);
    case ut.MeRppg:
    default:
      const { MeRppgRealtimeEstimator: r } = await import("./Bpfo9BJd.js");
      return new r({
        ...i,
        modelPath: (i == null ? void 0 : i.modelPath) || "models/me-rppg/model.onnx",
        statePath: (i == null ? void 0 : i.statePath) || "models/me-rppg/state.json",
        welchPath: (i == null ? void 0 : i.welchPath) || "models/me-rppg/welch_psd.onnx",
        hrPath: (i == null ? void 0 : i.hrPath) || "models/me-rppg/get_hr.onnx",
        lambda: (i == null ? void 0 : i.lambda) || 1
      });
  }
}
var ut = /* @__PURE__ */ ((i) => (i.Fda = "fda", i.MeRppg = "me-rppg", i))(ut || {}), Xa = /* @__PURE__ */ ((i) => (i.Raw = "raw", i.Normalized = "znorm", i))(Xa || {});
function Ja(i) {
  let e = document.createElement("div"), t = document.createElement("div");
  return e.appendChild(t), i.after(e), e.style.pointerEvents = "none", e;
}
function Qa(i, e, t) {
  const r = e.clientWidth / e.clientHeight, a = t.videoWidth / t.videoHeight;
  let c, l;
  a > r ? (c = e.clientHeight, l = c * a) : (l = e.clientWidth, c = l / a);
  const o = (c - e.clientHeight) / 2, g = (l - e.clientWidth) / 2;
  return {
    left: (i.xCenter - i.width / 2) * l - g,
    top: (i.yCenter - i.height / 2) * c - o,
    width: i.width * l,
    height: i.height * c
  };
}
class yi {
  constructor(e, t) {
    d(this, "boundingBox");
    d(this, "video");
    d(this, "color");
    this.video = e, this.color = (t == null ? void 0 : t.color) || "red", this.enabled = !0;
  }
  set enabled(e) {
    var t;
    e && !this.boundingBox && (this.boundingBox = Ja(this.video)), !e && this.boundingBox && ((t = this.boundingBox.parentElement) == null || t.removeChild(this.boundingBox), this.boundingBox = void 0);
  }
  updateOptions(e) {
    e.color && e.color !== this.color && (this.color = e.color);
  }
  update(e) {
    if (!this.boundingBox)
      return;
    this.boundingBox.style.position = "fixed";
    const { x: t, y: r, width: a, height: c } = this.video.getBoundingClientRect();
    this.boundingBox.style.left = `${t}px`, this.boundingBox.style.top = `${r}px`, this.boundingBox.style.width = `${a}px`, this.boundingBox.style.height = `${c}px`, this.boundingBox.style.transform = `${this.video.style.transform}`, this.boundingBox.style.overflow = "clip";
    const l = this.boundingBox.children[0];
    if (e === void 0) {
      l.style.setProperty("display", "none");
      return;
    }
    const o = Qa(e, this.video, this.video);
    l.style.display = "block", l.style.position = "relative", l.style.left = `${o.left}px`, l.style.top = `${o.top}px`, l.style.width = `${o.width}px`, l.style.height = `${o.height}px`, l.style.borderStyle = "solid", l.style.borderColor = this.color || "red";
  }
}
const Za = ".up-down-mask-animation{mask:linear-gradient(to bottom,transparent,black,transparent);-webkit-mask-size:100% 10%;mask-size:100% 10%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;animation:moveMaskUpDown var(--face-mesh-animation-duration, 2s) linear infinite}@keyframes moveMaskUpDown{0%{-webkit-mask-position:0% 0;mask-position:0% 0}50%{-webkit-mask-position:0% 100%;mask-position:0% 100%}to{-webkit-mask-position:0% 0;mask-position:0% 0}}.left-right-mask-animation{mask:linear-gradient(to right,transparent,black,transparent);-webkit-mask-size:10% 100%;mask-size:10% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;animation:moveMaskLeftRight var(--face-mesh-animation-duration, 2s) linear infinite}@keyframes moveMaskLeftRight{0%{-webkit-mask-position:0% 0;mask-position:0% 0}50%{-webkit-mask-position:100% 0;mask-position:100% 0}to{-webkit-mask-position:0% 0;mask-position:0% 0}}.four-way-mask-animation{mask:linear-gradient(to bottom,transparent,black,transparent),linear-gradient(to right,transparent,black,transparent);-webkit-mask-size:100% 10%,10% 100%;mask-size:100% 10%,10% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-composite:source-over;mask-composite:add;animation:moveMaskFourWay var(--face-mesh-animation-duration, 2s) linear infinite}@keyframes moveMaskFourWay{0%{-webkit-mask-position:0% 0,0% 0;mask-position:0% 0,0% 0}25%{-webkit-mask-position:0% 100%,0% 0;mask-position:0% 100%,0% 0}50%{-webkit-mask-position:0% 0%,0% 0;mask-position:0% 0%,0% 0}75%{-webkit-mask-position:0% 0%,100% 0;mask-position:0% 0%,100% 0}to{-webkit-mask-position:0% 0,0% 0;mask-position:0% 0,0% 0}}";
async function en() {
  const { FACEMESH_FACE_OVAL: i } = await yt();
  return i;
}
async function tn(i, e, t, r) {
  if (e === void 0 || t === void 0)
    return;
  i.save();
  const a = i.canvas.width, c = i.canvas.height, l = (r == null ? void 0 : r.lineWidth) || await rn(e, a);
  for (var o = 0; o < t.length; o++) {
    const g = t[o];
    i.beginPath();
    const b = e[g[0]], E = e[g[1]];
    i.moveTo(b.x * a, b.y * c), i.lineTo(E.x * a, E.y * c), i.lineWidth = l, i.strokeStyle = (r == null ? void 0 : r.color) || "lightgreen", i.stroke();
  }
  i.restore();
}
async function rn(i, e) {
  const t = await sn(i) * 0.01 * e;
  return console.log("lineWidth = ", t), t;
}
async function sn(i) {
  const e = (await en()).map(([t]) => i[t].x);
  return Math.abs(Math.max(...e) - Math.min(...e));
}
class bi {
  constructor(e, t) {
    d(this, "faceMesh");
    d(this, "canvas");
    d(this, "video");
    d(this, "color", "lightgreen");
    d(this, "lineWidth");
    d(this, "animateStyle");
    d(this, "animationSpeed");
    d(this, "animationDelay");
    d(this, "animationDirection");
    this.video = e, this.color = (t == null ? void 0 : t.color) || this.color, this.lineWidth = (t == null ? void 0 : t.lineWidth) || this.lineWidth, this.animationSpeed = t == null ? void 0 : t.animationSpeed, this.animationDelay = t == null ? void 0 : t.animationDelay, this.animationDirection = t == null ? void 0 : t.animationDirection, this.enabled = !0, this.animateStyle = document.createElement("style"), this.animateStyle.innerHTML = Za, this.animate = (t == null ? void 0 : t.animate) !== void 0 ? t.animate : !0;
  }
  destroy() {
    console.log("[VitalSignCamera] Trying to destroy face mesh..."), this.faceMesh && this.faceMesh.parentElement && (this.faceMesh.parentElement.removeChild(this.faceMesh), console.log("[VitalSignCamera] Face mesh removed."), this.faceMesh = void 0, this.canvas = void 0), this.animateStyle.parentElement && (this.animateStyle.parentElement.removeChild(this.animateStyle), console.log("[VitalSignCamera] Face mesh animation CSS removed."));
  }
  get animationClass() {
    return this.animationDirection === "vertical" ? "up-down-mask-animation" : this.animationDirection === "horizontal" ? "left-right-mask-animation" : this.animationDirection == "both" ? "four-way-mask-animation" : "up-down-mask-animation";
  }
  set enabled(e) {
    var t;
    e && !this.faceMesh && (this.faceMesh = document.createElement("div"), this.canvas = document.createElement("canvas"), this.canvas.style.setProperty("--face-mesh-animation-duration", `${this.animationSpeed ?? 8}s`), this.canvas.style.setProperty("--face-mesh-animation-delay", `${this.animationDelay ?? -1.5}s`), console.log("Applying animation class", this.animationDirection, this.animationSpeed), this.canvas.className = `face-mesh-canvas ${this.animationClass}`, this.faceMesh.appendChild(this.canvas), this.faceMesh.style.width = "0px", this.faceMesh.style.height = "0px", this.faceMesh.style.pointerEvents = "none", this.faceMesh.style.overflow = "clip", this.video.after(this.faceMesh), console.log("[VitalSignCamera] Face mesh inserted.")), !e && this.faceMesh && ((t = this.faceMesh.parentElement) == null || t.removeChild(this.faceMesh), this.faceMesh = void 0, this.canvas = void 0);
  }
  set animate(e) {
    var t;
    e && !this.animate && (document.body.append(this.animateStyle), console.log("[VitalSignCamera] Face mesh CSS inserted.")), !e && this.animate && ((t = this.animateStyle.parentElement) == null || t.removeChild(this.animateStyle));
  }
  get animate() {
    return this.animateStyle.parentElement !== null;
  }
  get enabled() {
    return this.faceMesh !== void 0;
  }
  updateOptions(e) {
    e.color !== void 0 && e.color !== this.color && (this.color = e.color), e.lineWidth !== void 0 && e.lineWidth !== this.lineWidth && (this.lineWidth = e.lineWidth), e.animate !== void 0 && e.animate !== this.animate && (this.animate = e.animate), e.animationSpeed !== void 0 && e.animationSpeed !== this.animationSpeed && (this.animationSpeed = e.animationSpeed, this.canvas && this.canvas.style.setProperty("--face-mesh-animation-duration", `${this.animationSpeed}s`)), e.animationDelay !== void 0 && e.animationDelay !== this.animationDelay && (this.animationDelay = e.animationDelay, this.canvas && this.canvas.style.setProperty("--face-mesh-animation-delay", `${this.animationDelay}s`)), e.animationDirection !== void 0 && e.animationDirection !== this.animationDirection && (this.animationDirection = e.animationDirection, this.canvas && (this.canvas.className = `face-mesh-canvas ${this.animationClass}`));
  }
  update(e) {
    if (!this.faceMesh || !this.canvas) return;
    this.faceMesh.style.position = "fixed";
    const { x: t, y: r, width: a, height: c } = this.video.getBoundingClientRect();
    this.faceMesh.style.left = `${t}px`, this.faceMesh.style.top = `${r}px`, this.faceMesh.style.width = `${a}px`, this.faceMesh.style.height = `${c}px`, this.faceMesh.style.transform = `${this.video.style.transform}`, this.faceMesh.style.overflow = "clip", this.redraw(e);
    const l = this.computeStyle(this.faceMesh);
    this.canvas.style.left = l.left, this.canvas.style.top = l.top, this.canvas.style.width = l.width, this.canvas.style.height = l.height, this.canvas.style.aspectRatio = l.aspectRatio, this.canvas.style.position = "relative";
  }
  async redraw(e) {
    const { FACEMESH_TESSELATION: t } = await yt();
    if (!this.faceMesh || !this.canvas) {
      console.warn("Undefined canvas or face mesh");
      return;
    }
    this.canvas.width = this.video.videoWidth, this.canvas.height = this.video.videoHeight;
    const r = this.canvas.getContext("2d");
    if (r === null) {
      console.warn("Null Context");
      return;
    }
    if (r.save(), r.clearRect(0, 0, this.canvas.width, this.canvas.height), e !== void 0 && e.length > 0) {
      const a = await this.computeLineWidth(e);
      r.lineTo(this.canvas.width, this.canvas.height), tn(
        r,
        e,
        t,
        {
          color: this.color,
          lineWidth: a
        }
      );
    }
    r.restore();
  }
  computeStyle(e) {
    let t = 0;
    const r = this.video.videoHeight, a = this.video.videoWidth;
    t = a && r ? a / r : 0;
    const c = {
      width: "",
      height: "",
      left: "0%",
      top: "0%",
      aspectRatio: `${t}`
    }, l = e.clientWidth / e.clientHeight;
    return l < t ? (c.left = `${(l - t) / l / 2 * 100}%`, c.height = "100%") : (c.top = `${(1 / l - 1 / t) * l / 2 * 100}%`, c.width = "100%"), c;
  }
  async computeLineWidth(e) {
    const t = this.video.videoWidth, r = this.lineWidth === void 0 ? "1%" : this.lineWidth, a = await an(e);
    var c;
    return typeof r == "string" ? c = parseFloat(r) * 0.01 * a * t : c = r, c;
  }
}
async function an(i) {
  const { FACEMESH_FACE_OVAL: e } = await yt(), t = e.map(([r]) => i[r].x);
  return Math.abs(Math.max(...t) - Math.min(...t));
}
const nn = {
  forehead: [10, 63, 64, 65, 66, 67, 297, 298, 299, 300, 301, 302],
  rightCheek: [117, 118, 119, 120, 121, 126, 50, 101, 100, 99],
  leftCheek: [346, 347, 348, 349, 350, 355, 280, 329, 330, 331]
};
class xi {
  constructor(e, t) {
    d(this, "video");
    d(this, "overlay");
    d(this, "canvas");
    d(this, "_faceBox", null);
    d(this, "_landmarks", null);
    d(this, "_ppgValues", []);
    d(this, "_animFrameId", null);
    d(this, "_blur", 14);
    d(this, "_opacity", 0.7);
    d(this, "_regionRadiusFactor", 0.22);
    d(this, "_ppgHistorySize", 60);
    d(this, "_lastRenderTime", 0);
    d(this, "_renderInterval", 1e3 / 15);
    d(this, "render", () => {
      var w;
      if (!this.canvas || !this.overlay) {
        this._animFrameId = requestAnimationFrame(this.render);
        return;
      }
      const e = performance.now();
      if (e - this._lastRenderTime < this._renderInterval) {
        this._animFrameId = requestAnimationFrame(this.render);
        return;
      }
      if (this._lastRenderTime = e, !this._faceBox) {
        const f = (w = this.canvas) == null ? void 0 : w.getContext("2d");
        f && f.clearRect(0, 0, this.canvas.width, this.canvas.height), this._animFrameId = requestAnimationFrame(this.render);
        return;
      }
      const t = this.video.getBoundingClientRect();
      if (t.width === 0 || t.height === 0) {
        this._animFrameId = requestAnimationFrame(this.render);
        return;
      }
      this.overlay.style.left = `${t.left}px`, this.overlay.style.top = `${t.top}px`, this.overlay.style.width = `${t.width}px`, this.overlay.style.height = `${t.height}px`;
      const r = this.canvas;
      (r.width !== Math.round(t.width * 2) || r.height !== Math.round(t.height * 2)) && (r.width = Math.round(t.width * 2), r.height = Math.round(t.height * 2), r.style.width = t.width + "px", r.style.height = t.height + "px");
      const a = r.getContext("2d");
      if (!a) {
        this._animFrameId = requestAnimationFrame(this.render);
        return;
      }
      a.clearRect(0, 0, r.width, r.height);
      const c = this._faceBox, l = this.isVideoMirrored(), o = this._ppgValues.length > 0 ? this._ppgValues[this._ppgValues.length - 1] : 0, g = this.computeHeatmapColor(o), b = c.height * r.height * this._regionRadiusFactor, E = this._landmarks;
      if (E && Array.isArray(E) && E.length >= 400 && E)
        for (const f of ["rightCheek", "leftCheek", "forehead"]) {
          const p = this.getRegionCentroid(E, nn[f], l);
          p && this.drawRegionGradient(a, p.x * r.width, p.y * r.height, b, b, g);
        }
      else {
        const f = (l ? 1 - c.xCenter : c.xCenter) * r.width, p = c.yCenter * r.height;
        this.drawRegionGradient(a, f, p, b * 1.5, b * 1.5, g);
      }
      this._animFrameId = requestAnimationFrame(this.render);
    });
    this.video = e, t && this.updateOptions(t), (!t || t.enabled !== !1) && (this.enabled = !0);
  }
  set enabled(e) {
    e && !this.overlay && (this.createOverlay(), this.startRendering()), !e && this.overlay && (this.stopRendering(), this.destroyOverlay());
  }
  createOverlay() {
    this.overlay || (this.overlay = document.createElement("div"), this.overlay.style.position = "fixed", this.overlay.style.pointerEvents = "none", this.overlay.style.zIndex = "10", this.overlay.style.overflow = "clip", this.canvas = document.createElement("canvas"), this.canvas.style.position = "absolute", this.canvas.style.top = "0", this.canvas.style.left = "0", this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.filter = `blur(${this._blur}px)`, this.canvas.style.opacity = String(this._opacity), this.canvas.style.mixBlendMode = "screen", this.overlay.appendChild(this.canvas), this.video.after(this.overlay));
  }
  destroyOverlay() {
    this.overlay && this.overlay.parentElement && this.overlay.parentElement.removeChild(this.overlay), this.overlay = void 0, this.canvas = void 0;
  }
  update(e, t, r) {
    if (this._faceBox = e || null, this._landmarks = t || null, r && r.length > 0) {
      const a = r[r.length - 1];
      typeof a == "number" && isFinite(a) && (this._ppgValues.push(a), this._ppgValues.length > this._ppgHistorySize && this._ppgValues.splice(0, this._ppgValues.length - this._ppgHistorySize));
    }
  }
  updateOptions(e) {
    e.blur !== void 0 && (this._blur = e.blur, this.canvas && (this.canvas.style.filter = `blur(${this._blur}px)`)), e.opacity !== void 0 && (this._opacity = e.opacity, this.canvas && (this.canvas.style.opacity = String(this._opacity))), e.regionRadiusFactor !== void 0 && (this._regionRadiusFactor = e.regionRadiusFactor), e.ppgHistorySize !== void 0 && (this._ppgHistorySize = e.ppgHistorySize);
  }
  isVideoMirrored() {
    const e = this.video.style.transform;
    return e.includes("scaleX(-1)") || e.includes("scaleX(-1.0)");
  }
  computeHeatmapColor(e) {
    let t = 0.5;
    if (this._ppgValues.length > 5) {
      const o = [...this._ppgValues].sort((T, w) => T - w), g = o[Math.floor(o.length * 0.05)], E = o[Math.floor(o.length * 0.95)] - g;
      E > 1e-3 && (t = (e - g) / E);
    }
    t = Math.max(0, Math.min(1, t));
    let r, a, c, l;
    if (t < 0.25) {
      const o = t / 0.25;
      r = 80 * o, a = 0, c = 0, l = 0.1 + 0.4 * o;
    } else if (t < 0.55) {
      const o = (t - 0.25) / 0.3;
      r = 80 + 175 * o, a = 0 + 140 * o, c = 0, l = 0.5 + 0.2 * o;
    } else if (t < 0.85) {
      const o = (t - 0.55) / 0.3;
      r = 255, a = 140 + 115 * o, c = 0 + 200 * o, l = 0.7 + 0.15 * o;
    } else {
      const o = (t - 0.85) / 0.15;
      r = 255, a = 255, c = 200 + 55 * o, l = 0.85 + 0.15 * o;
    }
    return [Math.round(r), Math.round(a), Math.round(c), Math.min(l, 1)];
  }
  getRegionCentroid(e, t, r) {
    let a = 0, c = 0, l = 0;
    for (const o of t) {
      const g = e[o];
      if (g && typeof g.x == "number" && typeof g.y == "number") {
        const b = r ? 1 - g.x : g.x;
        a += b, c += g.y, l++;
      }
    }
    return l === 0 ? null : { x: a / l, y: c / l };
  }
  drawRegionGradient(e, t, r, a, c, l) {
    const o = e.createRadialGradient(t, r, 0, t, r, Math.max(a, c));
    o.addColorStop(0, `rgba(${l[0]},${l[1]},${l[2]},${l[3]})`), o.addColorStop(0.5, `rgba(${l[0]},${l[1]},${l[2]},${l[3] * 0.6})`), o.addColorStop(1, "rgba(0,0,0,0)"), e.fillStyle = o, e.beginPath(), e.ellipse(t, r, a, c, 0, 0, Math.PI * 2), e.fill();
  }
  startRendering() {
    this.stopRendering(), this._animFrameId = requestAnimationFrame(this.render);
  }
  stopRendering() {
    this._animFrameId !== null && (cancelAnimationFrame(this._animFrameId), this._animFrameId = null);
  }
  destroy() {
    this.stopRendering(), this.destroyOverlay(), this._faceBox = null, this._landmarks = null, this._ppgValues = [];
  }
}
const on = (i, e) => ({
  loading: "Loading...",
  preparing: "Preparing...",
  loading_model: "Loading model...",
  loading_age_estimation_model: "Loading age estimation model...",
  loading_face_detection_model: "Loading face detection model...",
  loading_realtime_estimator_model: "Loading realtime estimator model...",
  loading_model_with_filename: "Loading {filename}...",
  loading_model_with_module_name: "Loading model for {module}...",
  loading_age_estimation_model_with_filename: "Loading age estimation model {filename}...",
  loading_face_detection_model_with_filename: "Loading face detection model {filename}...",
  model_completed: "Model download completed",
  model_completed_with_error: "Model load completed with error: {error}"
})[i].replace(/\{(\w+)\}/g, (r, a) => e && a in e ? String(e[a]) : `{${a}}`);
function Ei(i, e, t) {
  return i ? i(e, t) : on(e, t);
}
function cn(i, e) {
  if (!i || !i.stage)
    return Ei(e, "loading");
  const t = (r, a) => Ei(e, r, a);
  switch (i.stage.type) {
    case "downloading":
    case "caching":
      if (i.module) {
        const r = i.module.toLowerCase();
        return r.includes("face-api") || r.includes("age") ? t("loading_age_estimation_model") : r.includes("face") || r.includes("mesh") || r.includes("detection") ? t("loading_face_detection_model") : r.includes("realtime-estimator") ? t("loading_realtime_estimator_model") : i.stage.filename ? t(
          "loading_model_with_filename",
          { filename: i.stage.filename }
        ) : t("loading_model_with_module_name", { module: i.module });
      } else if (i.stage.filename) {
        const r = i.stage.filename.toLowerCase();
        return r.includes("age") || r.includes("age_") || r.includes("age-detection") ? t(
          "loading_age_estimation_model_with_filename",
          { filename: i.stage.filename }
        ) : r.includes("face") || r.includes("detection") || r.includes("mesh") ? t(
          "loading_face_detection_model_with_filename",
          { filename: i.stage.filename }
        ) : t(
          "loading_model_with_filename",
          { filename: i.stage.filename }
        );
      } else
        return t("loading_model");
    case "ready":
      return i.stage.error ? t(
        "model_completed_with_error",
        { error: i.stage.error.message }
      ) : t("model_completed");
    default:
      return t("loading");
  }
}
function Si(i) {
  let e = document.createElement("div"), t = document.createElement("div"), r = document.createElement("div"), a = document.createElement("div"), c = document.createElement("div"), l = document.createElement("span"), o = document.createElement("span"), g = document.createElement("span");
  return r.appendChild(a), c.appendChild(l), c.appendChild(o), c.appendChild(g), t.appendChild(r), t.appendChild(c), e.appendChild(t), e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", e.style.backgroundColor = "rgba(0, 0, 0, 0.7)", e.style.display = "none", e.style.alignItems = "center", e.style.justifyContent = "center", e.style.zIndex = "9999", e.style.pointerEvents = "none", e.style.opacity = "0", e.style.transition = "opacity 0.3s ease-in-out", t.style.backgroundColor = "transparent", t.style.padding = "1.5em", t.style.borderRadius = "6px", t.style.minWidth = "250px", t.style.maxWidth = "350px", r.style.width = "100%", r.style.height = "8px", r.style.backgroundColor = "rgba(255, 255, 255, 0.3)", r.style.borderRadius = "4px", r.style.overflow = "hidden", r.style.marginBottom = "0.5em", a.style.height = "100%", a.style.backgroundColor = "#4CAF50", a.style.width = "0%", a.style.transition = "width 0.3s ease", c.style.display = "flex", c.style.justifyContent = "space-between", c.style.alignItems = "center", c.style.fontSize = "0.75em", c.style.fontWeight = "300", c.style.fontFamily = "Helvetica, Arial, sans-serif", l.style.fontWeight = "400", l.style.flex = "1", l.style.marginRight = "1em", l.style.fontSize = "0.75em", o.style.fontWeight = "400", o.style.minWidth = "50px", o.style.textAlign = "right", o.style.fontSize = "0.75em", g.style.fontSize = "0.75em", g.style.minWidth = "120px", g.style.textAlign = "right", i.after(e), e;
}
class Wi {
  constructor(e, t) {
    d(this, "overlay");
    d(this, "video");
    d(this, "backgroundColor");
    d(this, "progressColor");
    d(this, "textColor");
    d(this, "showBytes");
    d(this, "localize");
    d(this, "_enabled");
    d(this, "isVisible", !1);
    d(this, "fadeTimeout");
    d(this, "handleResize", () => {
      this.isVisible && this.updateOverlayPosition();
    });
    var r, a;
    console.log("[ModelLoadingProgress] Constructor called with video:", e, "options:", t), this.video = e, this.backgroundColor = (t == null ? void 0 : t.backgroundColor) || "rgba(0, 0, 0, 0.7)", this.progressColor = (t == null ? void 0 : t.progressColor) || "#4CAF50", this.textColor = (t == null ? void 0 : t.textColor) || "#4CAF50", this.showBytes = (t == null ? void 0 : t.showBytes) !== void 0 ? t.showBytes : !0, this.localize = t == null ? void 0 : t.localize, this._enabled = !0, this.overlay = Si(this.video), this.updateStyles(), this.handleResize = this.handleResize.bind(this), window.addEventListener("resize", this.handleResize), console.log("[ModelLoadingProgress] Constructor completed, overlay created:", !!this.overlay), console.log("[ModelLoadingProgress] Initial overlay state - display:", (r = this.overlay) == null ? void 0 : r.style.display, "opacity:", (a = this.overlay) == null ? void 0 : a.style.opacity);
  }
  set enabled(e) {
    var t;
    e && !this.overlay && (this.overlay = Si(this.video), this.updateStyles()), !e && this.overlay && (this.hide(), (t = this.overlay.parentElement) == null || t.removeChild(this.overlay), this.overlay = void 0), this._enabled = e;
  }
  get enabled() {
    return this._enabled;
  }
  updateOptions(e) {
    e.backgroundColor && e.backgroundColor !== this.backgroundColor && (this.backgroundColor = e.backgroundColor), e.progressColor && e.progressColor !== this.progressColor && (this.progressColor = e.progressColor), e.textColor && e.textColor !== this.textColor && (this.textColor = e.textColor), e.showBytes !== void 0 && e.showBytes !== this.showBytes && (this.showBytes = e.showBytes), e.localize !== void 0 && e.localize !== this.localize && (this.localize = e.localize), this.updateStyles();
  }
  updateStyles() {
    if (!this.overlay) return;
    const e = this.overlay, t = e.firstElementChild, r = t == null ? void 0 : t.querySelector("div"), a = r == null ? void 0 : r.querySelector("div"), c = e.querySelectorAll("span");
    e.style.backgroundColor = this.backgroundColor, t && (t.style.backgroundColor = "transparent"), r && (r.style.width = "100%"), a && (a.style.backgroundColor = this.progressColor), c.forEach((l) => {
      const o = l;
      o.style.color = this.textColor;
    });
  }
  update(e) {
    if (!this.overlay) return;
    const t = this.overlay.querySelector("div"), a = t.querySelector("div").querySelector("div"), c = t.querySelector("div:nth-child(2)"), l = c.querySelector("span:nth-child(1)"), o = c.querySelector("span:nth-child(2)"), g = c.querySelector("span:nth-child(3)");
    if (e && (a && (a.style.width = `${e.percentage}%`), l && (l.textContent = cn(e, this.localize)), o && (this.showBytes, o.textContent = "", o.style.minWidth = "50px"), g))
      if (this.showBytes) {
        if (e.total > 0) {
          const b = (e.loaded / 1048576).toFixed(2), E = (e.total / (1024 * 1024)).toFixed(2);
          g.textContent = `${b} MB / ${E} MB`;
        } else
          g.textContent = this.localize ? this.localize("preparing") : "Preparing...";
        g.style.minWidth = "120px";
      } else
        g.textContent = `${e.percentage}%`, g.style.minWidth = "120px";
  }
  updateOverlayPosition() {
    if (!this.overlay) return;
    const e = this.video.getBoundingClientRect();
    this.overlay.style.left = `${e.left}px`, this.overlay.style.top = `${e.top}px`, this.overlay.style.width = `${e.width}px`, this.overlay.style.height = `${e.height}px`;
  }
  // Show overlay independently of model loading progress (when video becomes visible)
  show() {
    !this.overlay || this.isVisible || (console.log("[ModelLoadingProgress] Showing overlay on video ready"), this.isVisible = !0, this.updateOverlayPosition(), this.overlay.style.display = "flex", this.overlay.style.opacity = "1");
  }
  hide() {
    var e, t, r, a;
    !this.overlay || !this.isVisible || (console.log("[ModelLoadingProgress] Current overlay state before hide - display:", (e = this.overlay) == null ? void 0 : e.style.display, "opacity:", (t = this.overlay) == null ? void 0 : t.style.opacity), this.isVisible = !1, this.overlay.style.opacity = "0", this.fadeTimeout && (clearTimeout(this.fadeTimeout), this.fadeTimeout = void 0), this.fadeTimeout = setTimeout(() => {
      this.overlay && (this.overlay.style.display = "none"), this.fadeTimeout = void 0;
    }, 300), console.log("[ModelLoadingProgress] Overlay state after hide - display:", (r = this.overlay) == null ? void 0 : r.style.display, "opacity:", (a = this.overlay) == null ? void 0 : a.style.opacity));
  }
  destroy() {
    window.removeEventListener("resize", this.handleResize), this.enabled = !1;
  }
}
async function ln(i) {
  const { RemoteBeautyAnalyzer: e } = await import("./CZUgT329.js");
  return new e(i);
}
const mt = G.isMobile && !G.isTablet, hn = mt ? ye.sd480x360 : G.isTablet ? ye.hd1280x720 : ye.hd1920x1080, dn = mt || G.isTablet ? ye.hd1280x720 : ye.hd1920x1080, Ri = {
  engineConfig: {
    serverId: te.Schema2Prod,
    dataCollectionDuration: 25,
    dataSendingDuration: 5,
    enabledROIs: ["face", "chest", "leftCheek", "rightCheek", "chin", "glabella"],
    pixelDataType: "rgb1x1",
    chestPixelDataType: "ggg1x1",
    landmarksSampleRate: 10
  },
  conditionCheckerConfig: {
    minimumFrameRate: mt || G.isAndroid ? 10 : 15
  },
  presetFormat: hn,
  maxFaceDetectionFps: mt || G.isAndroid ? 2 : 5,
  maxFps: 30
}, un = {
  engineConfig: {
    serverId: te.Schema2Prod,
    dataCollectionDuration: 15,
    dataSendingDuration: 10,
    enabledROIs: ["face", "chest", "leftCheek", "rightCheek", "chin", "glabella"],
    pixelDataType: "rgb8x8",
    chestPixelDataType: "meanRgb1x1",
    landmarksSampleRate: 10
  },
  conditionCheckerConfig: {
    minimumFrameRate: 25
  },
  presetFormat: dn,
  maxFaceDetectionFps: G.isMobile ? 5 : 15,
  maxFps: 60
};
function zi(i) {
  switch (i) {
    case Me.relaxed:
      return Ri;
    case Me.strict:
      return un;
    default:
      return Ri;
  }
}
class mn {
  constructor(e) {
    d(this, "lastFramerateOKTime", /* @__PURE__ */ new Date());
    d(this, "requiredStableDuration", 1e4);
    // milliseconds
    d(this, "waitingResponse", !1);
    this.camera = e;
  }
  reset() {
    this.lastFramerateOKTime = /* @__PURE__ */ new Date();
  }
  process(e, t) {
    var c;
    if (this.camera.precisionMode === void 0)
      return;
    const r = (c = zi(this.camera.precisionMode).conditionCheckerConfig) == null ? void 0 : c.minimumFrameRate;
    if (r === void 0 || (e >= r && (this.lastFramerateOKTime = /* @__PURE__ */ new Date()), !this.lastFramerateOKTime) || this.waitingResponse)
      return;
    if ((/* @__PURE__ */ new Date()).getTime() - this.lastFramerateOKTime.getTime() >= this.requiredStableDuration && this.camera.precisionMode !== Me.relaxed && t === "idle")
      if (this.camera.onPrecisionModeWillUpdate) {
        this.waitingResponse = !0, this.camera.onPrecisionModeWillUpdate({
          currentMode: this.camera.precisionMode,
          newMode: Me.relaxed,
          reason: "lowFrameRate",
          response: (l) => {
            this.waitingResponse = !1, l === "proceed" ? this.updatePrecisionModeToRelaxed("response") : l === "wait" ? this.reset() : this.waitingResponse = !1;
          }
        });
        return;
      } else
        console.log("No onPrecisionModeWillUpdate handler, proceeding to update precision mode."), this.updatePrecisionModeToRelaxed();
  }
  updatePrecisionModeToRelaxed(e = "lowFrameRate") {
    this.camera.precisionMode = Me.relaxed, this.camera.onPrecisionModeUpdated && this.camera.onPrecisionModeUpdated({
      previousMode: Me.strict,
      currentMode: Me.relaxed,
      reason: e
    }), console.log(
      `[VitalSignCamera] Precision mode switched to relaxed after stable frame rate for ${this.requiredStableDuration} ms`
    );
  }
}
class fn {
  constructor() {
    d(this, "config");
    d(this, "currentStage");
    d(this, "currentStageStartTime");
    d(this, "grabbedFrames", []);
    this.config = { grabbingPoints: void 0 };
  }
  configure(e) {
    this.config = e;
  }
  reset() {
    this.currentStage = void 0, this.currentStageStartTime = void 0, this.grabbedFrames = [];
  }
  processFrame(e, t, r) {
    if (!this.config.grabbingPoints || this.config.grabbingPoints.length === 0 || (this.currentStage !== t && (this.currentStage = t, this.currentStageStartTime = Date.now()), !this.currentStageStartTime))
      return;
    const a = Date.now() - this.currentStageStartTime, c = this.config.grabbingPoints || [];
    for (const l of c)
      l.stage === t && (this.grabbedFrames.some((o) => o.stage === l.stage && o.offset === l.offset) || a < l.offset || (console.log(`[Frame Grabber] Grabbing frame at stage ${Y[l.stage]} with offset ${l.offset} ms`), this.grabbedFrames.push({
        canvas: e.getCanvas(),
        stage: l.stage,
        offset: l.offset
      })));
  }
}
function gn() {
  return new fn();
}
class pn {
  constructor(e) {
    d(this, "video");
    d(this, "canvas");
    this.video = e, this.canvas = document.createElement("canvas");
  }
  start() {
    if (!this.video.srcObject && !this.video.src)
      throw new Error("Video element has no srcObject or src");
    return Promise.resolve();
  }
  stop() {
    return Promise.resolve();
  }
  captureFrame(e, t) {
    const r = this.cropFrame(this.video, e);
    let a = null;
    const c = createImageBitmap(r);
    return {
      timestamp: t ?? performance.now(),
      width: r.width,
      height: r.height,
      getImageData: () => (a || (a = Promise.resolve(
        r.getContext("2d", { willReadFrequently: !0 }).getImageData(0, 0, r.width, r.height)
      )), a),
      getImageBitmap: () => c,
      getCanvas: () => Promise.resolve(r)
    };
  }
  cropFrame(e, t) {
    const r = this.canvas;
    return r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(
      e,
      t.x,
      t.y,
      t.width,
      t.height,
      0,
      0,
      r.width,
      r.height
    ), r.getContext("2d").canvas;
  }
}
function Hi(i) {
  return new pn(i);
}
function $i(i, e, t = 60) {
  if (i.srcObject) {
    const c = i.srcObject.getVideoTracks()[0];
    if (c) {
      const l = c.getSettings();
      if (l.frameRate && l.frameRate > 0) {
        console.log(`[FrameRateDetector] Detected from getSettings(): ${l.frameRate} fps`), e({
          frameRate: l.frameRate,
          method: "getSettings",
          confidence: "high"
        });
        return;
      }
    }
  }
  const r = i;
  if (r.captureStream && i.src)
    try {
      const a = r.captureStream(), c = a.getVideoTracks()[0];
      if (c) {
        const l = c.getSettings();
        if (l.frameRate && l.frameRate > 0) {
          console.log(`[FrameRateDetector] Detected from captureStream(): ${l.frameRate} fps`), a.getTracks().forEach((o) => o.stop()), e({
            frameRate: l.frameRate,
            method: "captureStream",
            confidence: "high"
          });
          return;
        }
      }
      a.getTracks().forEach((l) => l.stop());
    } catch (a) {
      console.warn("[FrameRateDetector] captureStream failed:", a);
    }
  if ("requestVideoFrameCallback" in i) {
    console.log("[FrameRateDetector] Using requestVideoFrameCallback analysis...");
    const a = [];
    let c = 0;
    const l = (o, g) => {
      if (c++, g && g.mediaTime !== void 0 && (a.push(g.mediaTime), c >= t)) {
        const b = vn(a);
        console.log(`[FrameRateDetector] Detected from requestVideoFrameCallback: ${b} fps`), e({
          frameRate: b,
          method: "requestVideoFrameCallback",
          confidence: "high"
        });
        return;
      }
      i.requestVideoFrameCallback(l);
    };
    i.requestVideoFrameCallback(l);
    return;
  }
  console.log("[FrameRateDetector] No detection method available, using default: 30 fps"), e({
    frameRate: 30,
    method: "default",
    confidence: "low"
  });
}
function vn(i) {
  const e = [];
  for (let b = 1; b < i.length; b++) {
    const E = i[b] - i[b - 1];
    E > 0 && e.push(E);
  }
  if (e.length === 0)
    return 30;
  e.sort((b, E) => b - E);
  const t = 1e-4;
  let r = e[0], a = 1, c = e[0], l = 1;
  for (let b = 1; b < e.length; b++)
    Math.abs(e[b] - c) < t ? l++ : (l > a && (r = c, a = l), c = e[b], l = 1);
  l > a && (r = c, a = l);
  const o = 1 / r, g = Math.round(o);
  return console.log(`[FrameRateDetector] Most common frame interval: ${(r * 1e3).toFixed(4)}ms (${a}/${e.length} frames)`), console.log(`[FrameRateDetector] Exact FPS: ${o.toFixed(3)}, Rounded: ${g}`), g;
}
class wn {
  constructor(e, t) {
    d(this, "video");
    d(this, "onFrame");
    d(this, "croppingRegion");
    d(this, "width", 1920);
    d(this, "height", 1080);
    d(this, "_deviceId");
    d(this, "callback");
    d(this, "callbackFrameRate", 60);
    d(this, "animationId");
    d(this, "handleIOS17Bug", !0);
    d(this, "handleIOS17ObjectFitBug", !0);
    d(this, "preferredCamera");
    d(this, "objectFit", "cover");
    d(this, "lastFrameTime");
    d(this, "videoFrameCapturer");
    d(this, "onVideoPlaying");
    d(this, "detectedFrameRate");
    this.video = e, this.onFrame = t.onFrame, t.width && (this.width = t.width), t.height && (this.height = t.height), t.croppingRegion && (this.croppingRegion = t.croppingRegion), t.deviceId && (this._deviceId = t.deviceId), t.callbackFrameRate && (this.callbackFrameRate = t.callbackFrameRate), t.handleIOS17Bug !== void 0 && (this.handleIOS17Bug = t.handleIOS17Bug), t.preferredCamera !== void 0 && (this.preferredCamera = t.preferredCamera), this.handleIOS17Bug && this.preferredCamera == null && (this.preferredCamera = "Front Camera"), t.handleIOS17ObjectFitBug !== void 0 && (this.handleIOS17ObjectFitBug = t.handleIOS17ObjectFitBug), t.onVideoPlaying !== void 0 && (this.onVideoPlaying = t.onVideoPlaying), getComputedStyle(this.video).objectFit !== "cover" && (console.warn("[Camera] Forcing the object-fit to 'cover'."), this.video.style.setProperty("object-fit", this.objectFit, "important")), this.callback = (r) => {
      if (this.animationId = requestAnimationFrame(this.callback), this.callbackFrameRate > 0 && this.lastFrameTime !== void 0 && r - this.lastFrameTime < 1e3 / (this.callbackFrameRate * 1.1) || (this.lastFrameTime = r, !this.video.srcObject || !this.videoFrameCapturer || !this.video.videoWidth || !this.video.videoHeight || !this.onFrame))
        return;
      const c = this.croppingRegion ?? { x: 0, y: 0, width: this.video.videoWidth, height: this.video.videoHeight }, l = this.videoFrameCapturer.captureFrame(c, r);
      this.onFrame(l);
    };
  }
  set deviceId(e) {
    this._deviceId !== e && (this._deviceId = e, console.log(`[Camera] setting device id: ${this._deviceId}`), this.initInputDevice());
  }
  async initInputDevice() {
    var e = { ideal: "user" };
    (this.deviceId || this.preferredCamera) && (e = void 0);
    const t = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: this.width },
        height: { ideal: this.height },
        frameRate: { min: 30, ideal: 60 },
        deviceId: this.deviceId,
        facingMode: e
      }
    });
    this.video.srcObject = t, console.log("[Camera] Assigned video source.");
    try {
      await this.video.play(), console.log("[Camera] Video playback started.");
    } catch (r) {
      console.warn("[Camera] Could not start video playback automatically:", r);
    }
    if (t.getVideoTracks().length > 0 && t.getVideoTracks()[0].getSettings().deviceId) {
      const [r] = t.getVideoTracks(), a = r.getSettings();
      if (console.log("[Camera] Device settings: ", a), r.getCapabilities) {
        const c = r.getCapabilities();
        console.log("[Camera] Device capabilities: ", c), c.frameRate && console.log(`[Camera] Supported frame rate range: ${c.frameRate.min} - ${c.frameRate.max} fps`);
      }
      if (this._deviceId = a.deviceId, a.frameRate !== void 0) {
        const c = a.frameRate;
        this.callbackFrameRate = Math.min(c, this.callbackFrameRate), console.log(`[Camera] Callback frame rate set to ${this.callbackFrameRate} fps`);
      }
    }
  }
  get deviceId() {
    return this._deviceId;
  }
  getVideoSettings() {
    if (!this.video.srcObject)
      return;
    const e = this.video.srcObject, t = e.getVideoTracks()[0];
    if (!t)
      return;
    const r = t.getSettings();
    return {
      videoId: e.id,
      width: r.width || this.video.videoWidth,
      height: r.height || this.video.videoHeight,
      frameRate: r.frameRate ?? this.detectedFrameRate
    };
  }
  getTransform() {
    var r;
    if (!this.video.srcObject)
      return "scaleX(-1)";
    const e = (r = this.video.srcObject) == null ? void 0 : r.getVideoTracks()[0];
    if (!e)
      return "scaleX(-1)";
    let t;
    if (e.getCapabilities !== void 0) {
      const a = e.getCapabilities();
      t = a.facingMode && a.facingMode[0];
    } else
      t = e.getSettings().facingMode;
    return t && t === "environment" ? "none" : "scaleX(-1)";
  }
  detectFrameRate() {
    $i(this.video, (e) => {
      this.detectedFrameRate = e.frameRate, console.log(`[Camera] Frame rate detected: ${e.frameRate} fps (method: ${e.method}, confidence: ${e.confidence})`);
    });
  }
  async start() {
    if (this.handleIOS17Bug && (console.log("[Camera] Handling iOS 17 bug..."), this.video.style.opacity = "0"), this.handleIOS17ObjectFitBug) {
      console.log("[Camera] Handling iOS 17.2 object-fit bug...");
      const t = getComputedStyle(this.video).objectFit;
      t && t !== "" && (this.video.style.objectFit = "none");
    }
    this.video.onplaying = async () => {
      this.videoFrameCapturer = Hi(this.video), await this.videoFrameCapturer.start(), this.callback(performance.now()), this.detectFrameRate(), this.onVideoPlaying && this.onVideoPlaying();
    };
    const e = !this.deviceId || this.deviceId === "";
    await this.initInputDevice(), this.preferredCamera && e && await this.selectPreferredCamera(), this.handleIOS17Bug && setTimeout(() => {
      console.log("[Camera] iOS 17 bug handled"), this.video.style.opacity = "1";
    }, 1500), this.handleIOS17ObjectFitBug && setTimeout(() => {
      console.log("[Camera] iOS 17.2 object-fit bug handled"), this.video.style.objectFit = this.objectFit;
    }, 500);
  }
  async selectPreferredCamera(e = 10) {
    const t = async () => {
      console.log("[Camera] Enumerating devices...");
      let l = await navigator.mediaDevices.enumerateDevices();
      return console.log(`[Camera] ${l.length} devices found`), l = l.filter((o) => o.kind === "videoinput"), console.log(`[Camera] ${l.length} camera devices found`), this.preferredCamera && (l = l.filter((o) => o.label === this.preferredCamera), console.log(`[Camera] ${l.length} preferred devices found`)), l.length > 0 ? (this.deviceId = l[0].deviceId, !0) : !1;
    };
    let a = 0, c = !1;
    do {
      try {
        console.log(`[Camera] Trying to set preferred camera "${this.preferredCamera}"...`);
        const l = new Promise((o) => setTimeout(o, e * 1e3)).then(() => !1);
        c = await Promise.race([t(), l]);
      } catch (l) {
        c = !1, console.log(l);
      }
      if (c) {
        console.log(`[Camera] Successfully selected preferred camera "${this.preferredCamera}"`);
        break;
      }
      console.log(`[Camera] No camera found. Retry after ${500 / 1e3} second.`), await new Promise((l) => setTimeout(l, 500)), a += 500;
    } while (!c && a < e * 1e3);
  }
  async stop() {
    return this.videoFrameCapturer && (await this.videoFrameCapturer.stop(), this.videoFrameCapturer = void 0), this.video && this.video.srcObject && (this.video.pause(), this.video.srcObject.getVideoTracks().forEach((e) => {
      e.enabled = !1, e.stop();
    }), this.video.srcObject = null), this.animationId && (cancelAnimationFrame(this.animationId), this.animationId = void 0), this.waitUntilStopped().then(() => {
    });
  }
  async waitUntilStopped(e) {
    return new Promise((t) => {
      let r = 0, a = 100;
      const c = setInterval(() => {
        r += a;
        try {
          this.video.srcObject.getVideoTracks(), e && r >= e && (clearInterval(c), t(!1));
        } catch {
          clearInterval(c), t(!0);
        }
      }, a);
    });
  }
}
class yn {
  constructor(e, t) {
    d(this, "video");
    d(this, "onFrame");
    d(this, "croppingRegion");
    d(this, "videoUri");
    d(this, "frameRate");
    d(this, "loop");
    d(this, "callbackFrameRate", 30);
    d(this, "callback");
    d(this, "animationId");
    d(this, "lastFrameTime");
    d(this, "videoFrameCapturer");
    d(this, "onVideoPlaying");
    d(this, "onVideoEnded");
    d(this, "onError");
    d(this, "onFrameRateDetected");
    d(this, "bufferingTimeoutId");
    d(this, "lastBufferingWarningTime", 0);
    d(this, "bufferingStartTime");
    d(this, "isAborted", !1);
    d(this, "_deviceId", "video-file");
    this.video = e, this.onFrame = t.onFrame, this.videoUri = e.src, this.frameRate = t.frameRate ?? 30, this.loop = t.loop ?? !0, this.onError = t.onError, t.croppingRegion && (this.croppingRegion = t.croppingRegion), t.callbackFrameRate && (this.callbackFrameRate = t.callbackFrameRate), t.onVideoPlaying !== void 0 && (this.onVideoPlaying = t.onVideoPlaying), t.onVideoEnded !== void 0 && (this.onVideoEnded = t.onVideoEnded), t.onFrameRateDetected !== void 0 && (this.onFrameRateDetected = t.onFrameRateDetected), this.video.loop = this.loop, this.video.muted = !0, this.video.playsInline = !0, getComputedStyle(this.video).objectFit !== "cover" && (console.warn("[VideoFile] Forcing the object-fit to 'cover'."), this.video.style.setProperty("object-fit", "cover", "important")), this.setupBufferingDetection(), this.callback = (r) => {
      if (this.animationId = requestAnimationFrame(this.callback), this.callbackFrameRate > 0 && this.lastFrameTime !== void 0 && r - this.lastFrameTime < 1e3 / (this.callbackFrameRate * 1.1) || (this.lastFrameTime = r, !this.videoFrameCapturer || !this.video.videoWidth || !this.video.videoHeight || !this.onFrame))
        return;
      const c = this.croppingRegion ?? {
        x: 0,
        y: 0,
        width: this.video.videoWidth,
        height: this.video.videoHeight
      }, l = this.videoFrameCapturer.captureFrame(c, r);
      this.onFrame(l);
    };
  }
  get deviceId() {
    return this._deviceId;
  }
  set deviceId(e) {
    this._deviceId = e;
  }
  getVideoSettings() {
    if (!(!this.video.src || this.video.videoWidth === 0 || this.video.videoHeight === 0))
      return {
        videoId: "video-file",
        width: this.video.videoWidth,
        height: this.video.videoHeight,
        frameRate: this.frameRate
      };
  }
  getTransform() {
    return "none";
  }
  detectFrameRate() {
    $i(this.video, (e) => {
      this.frameRate = e.frameRate, this.callbackFrameRate = Math.min(this.callbackFrameRate, this.frameRate), console.log(`[VideoFile] Frame rate detected: ${this.frameRate} fps (method: ${e.method}, confidence: ${e.confidence})`), console.log(`[VideoFile] Callback frame rate adjusted to: ${this.callbackFrameRate} fps`), this.onFrameRateDetected && this.onFrameRateDetected(this.frameRate);
    }, 120);
  }
  setupBufferingDetection() {
    this.video.addEventListener("waiting", () => {
      console.log("[VideoFile] Video is waiting for data (buffering)"), this.bufferingStartTime = performance.now(), this.bufferingTimeoutId = window.setTimeout(() => {
        this.handleBufferingError();
      }, 2e3);
    }), this.video.addEventListener("playing", () => {
      console.log("[VideoFile] Video resumed playing"), this.clearBufferingTimeout();
    }), this.video.addEventListener("pause", () => {
      console.log("[VideoFile] Video paused"), this.clearBufferingTimeout();
    }), this.video.addEventListener("ended", () => {
      console.log("[VideoFile] Video ended"), this.clearBufferingTimeout();
    }), this.video.addEventListener("stalled", () => {
      console.log("[VideoFile] Video stalled (network issue)"), this.handleBufferingError();
    }), this.video.addEventListener("progress", () => {
      this.bufferingStartTime && this.checkBufferHealth();
    });
  }
  clearBufferingTimeout() {
    this.bufferingTimeoutId && (clearTimeout(this.bufferingTimeoutId), this.bufferingTimeoutId = void 0), this.bufferingStartTime = void 0;
  }
  handleBufferingError() {
    if (this.video.paused || this.video.ended)
      return;
    const e = performance.now();
    if (e - this.lastBufferingWarningTime < 5e3) return;
    this.lastBufferingWarningTime = e;
    const r = this.video.networkState;
    let a = "";
    switch (r) {
      case HTMLMediaElement.NETWORK_LOADING:
        a = "Video buffering due to slow network download";
        break;
      case HTMLMediaElement.NETWORK_NO_SOURCE:
        a = "Video source not available";
        break;
      case HTMLMediaElement.NETWORK_IDLE:
        a = "Video buffering despite available data";
        break;
      default:
        a = "Video buffering due to network or processing issues";
    }
    const c = this.video.buffered, l = this.video.currentTime;
    if (c.length > 0) {
      const T = c.end(c.length - 1) - l;
      T < 2 && (a += ` (only ${T.toFixed(1)}s buffered ahead)`);
    }
    const o = this.video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), g = this.video.canPlayType('video/mp4; codecs="hvc1"') || this.video.canPlayType('video/mp4; codecs="hev1"');
    console.error(`[VideoFile] Buffering error: ${a}`), console.error(`[VideoFile] currentSrc: ${this.video.currentSrc || this.video.src}`), console.error(`[VideoFile] canPlayType(avc/mp4)=${o}, canPlayType(hevc/mp4)=${g}`);
    const b = new Error(`Video buffering error: ${a} (src=${this.video.currentSrc || this.video.src}, avcSupport=${o || "no"}, hevcSupport=${g || "no"})`);
    if (this.onError)
      this.onError(b);
    else
      throw b;
  }
  checkBufferHealth() {
    if (!this.video.buffered.length) return;
    const e = this.video.currentTime;
    this.video.buffered.end(this.video.buffered.length - 1) - e > 3 && this.bufferingStartTime && (console.log("[VideoFile] Buffer health restored"), this.clearBufferingTimeout());
  }
  async start() {
    return this.isAborted = !1, console.log(`[VideoFile] Loading video from: ${this.videoUri}`), new Promise((e, t) => {
      const r = async () => {
        console.log("[VideoFile] Video can play"), this.video.removeEventListener("canplay", r), this.video.removeEventListener("error", a), this.detectFrameRate();
        try {
          if (this.isAborted) {
            console.log("[VideoFile] start() aborted before capturer initialized");
            return;
          }
          if (this.videoFrameCapturer = Hi(this.video), await this.videoFrameCapturer.start(), this.isAborted) {
            console.log("[VideoFile] start() aborted after capturer initialized"), await this.videoFrameCapturer.stop(), this.videoFrameCapturer = void 0;
            return;
          }
          this.callback(performance.now()), this.onVideoPlaying && this.onVideoPlaying(), e();
        } catch (o) {
          console.error("[VideoFile] Error starting video frame capturer:", o), t(o);
        }
      }, a = (o) => {
        const g = this.video.error;
        let b = "Failed to load video file";
        if (g) {
          switch (g.code) {
            case g.MEDIA_ERR_ABORTED:
              b = "Video loading was aborted";
              break;
            case g.MEDIA_ERR_NETWORK:
              b = "Network error while loading video";
              break;
            case g.MEDIA_ERR_DECODE:
              b = "Video decoding failed - format may not be supported";
              break;
            case g.MEDIA_ERR_SRC_NOT_SUPPORTED:
              b = "Video format not supported or file not found";
              break;
          }
          g.message && (b += ": " + g.message);
        }
        console.error("[VideoFile] Error loading video:", b), console.error("[VideoFile] Video URI:", this.videoUri), console.error("[VideoFile] Error event:", o), this.video.removeEventListener("canplay", r), this.video.removeEventListener("error", a), t(new Error(b));
      }, c = this.video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), l = this.video.canPlayType('video/mp4; codecs="hvc1"') || this.video.canPlayType('video/mp4; codecs="hev1"');
      if (!c && !l) {
        const o = "Video codec/container not supported by this device — try an H.264 (avc1) MP4 build of the file";
        console.error("[VideoFile] Playback capability check failed:", o, "canPlayType(avc)=", c, "canPlayType(hevc)=", l), this.video.removeEventListener("canplay", r), this.video.removeEventListener("error", a), t(new Error(o));
        return;
      }
      this.video.readyState >= this.video.HAVE_FUTURE_DATA ? (console.log("[VideoFile] Video already ready (readyState:", this.video.readyState, ")"), this.video.play().then(() => {
        r();
      }).catch((o) => {
        console.error("[VideoFile] Error playing video:", o), t(o);
      })) : (this.video.addEventListener("canplay", r, { once: !0 }), this.video.addEventListener("error", a, { once: !0 }), this.video.play().catch((o) => {
        console.error("[VideoFile] Error playing video:", o), t(o);
      })), this.onVideoEnded && this.video.addEventListener("ended", () => {
        console.log("[VideoFile] Video ended"), this.onVideoEnded && this.onVideoEnded();
      });
    });
  }
  async stop() {
    return console.log("[VideoFile] Stopping video playback"), this.isAborted = !0, this.videoFrameCapturer && (await this.videoFrameCapturer.stop(), this.videoFrameCapturer = void 0), this.video.pause(), this.clearBufferingTimeout(), this.animationId && (cancelAnimationFrame(this.animationId), this.animationId = void 0), this.waitUntilStopped().then(() => {
    });
  }
  async waitUntilStopped(e) {
    return new Promise((t) => {
      let r = 0;
      const a = 100, c = setInterval(() => {
        r += a, this.video.paused ? (clearInterval(c), t(!0)) : e && r >= e && (clearInterval(c), t(!1));
      }, a);
    });
  }
}
class ft {
  /**
   * Create a Camera instance as a VideoSource
   * @param video The HTMLVideoElement to bind the camera to
   * @param options Camera configuration options
   * @returns A VideoSource instance (Camera)
   */
  static createCamera(e, t) {
    return new wn(e, t);
  }
  /**
   * Create a VideoFile instance as a VideoSource
   * @param video The HTMLVideoElement to bind the video file to
   * @param options VideoFile configuration options
   * @returns A VideoSource instance (VideoFile)
   */
  static createVideoFile(e, t) {
    return new yn(e, t);
  }
  /**
   * Create a VideoSource automatically based on whether video.src is set
   * @param video The HTMLVideoElement to bind to
   * @param options Options for configuring the video source
   * @returns A VideoSource instance (Camera or VideoFile)
   */
  static createVideoSource(e, t) {
    return e.src && e.src !== "" && e.src !== window.location.href ? (console.log("[VideoSourceFactory] Creating VideoFile source (src detected)"), ft.createVideoFile(e, t)) : (console.log("[VideoSourceFactory] Creating Camera source (no src)"), ft.createCamera(e, t));
  }
}
class ki {
  constructor(e) {
    d(this, "name", "noname");
    d(this, "frameCount", 0);
    d(this, "start");
    d(this, "resetInterval", 10);
    d(this, "frameTimes", []);
    d(this, "lastFrameTime", 0);
    this.name = e;
  }
  reset() {
    this.frameCount = 0, this.start = /* @__PURE__ */ new Date();
  }
  tick() {
    const e = Date.now();
    if ((this.start === void 0 || this.elapsed > this.resetInterval) && (this.log(!1), this.reset()), this.lastFrameTime > 0) {
      const t = (e - this.lastFrameTime) / 1e3;
      this.frameTimes.push(t), this.frameTimes.length > 60 && this.frameTimes.shift();
    }
    this.lastFrameTime = e, this.frameCount = this.frameCount + 1;
  }
  get elapsed() {
    return this.start === void 0 ? 0 : ((/* @__PURE__ */ new Date()).getTime() - this.start.getTime()) / 1e3;
  }
  get average() {
    return this.frameTimes.length === 0 ? 0 : 1 / (this.frameTimes.reduce((t, r) => t + r) / this.frameTimes.length);
  }
  get current() {
    return this.average.toFixed(2);
  }
  log(e = !1) {
    e && console.log(`[FPS ${this.name}] ${this.current}fps`);
  }
}
class qi {
  constructor(e, t, r) {
    d(this, "type", "chest");
    d(this, "boundingBox");
    d(this, "imageData");
    d(this, "deferredResolve");
    if (this.boundingBox = this.chestRect(
      { width: e.width, height: e.height },
      t,
      r
    ), this.boundingBox === void 0) {
      this.imageData = Promise.resolve(void 0);
      return;
    }
    this.imageData = this.initializeExtraction(e);
  }
  /**
   * Initialize extraction - can be overridden for deferred/batch processing
   * Default implementation: immediate extraction
   */
  initializeExtraction(e) {
    return e.getImageBitmap().then((t) => {
      if (!(!t || !this.boundingBox))
        return this.extract(t, this.boundingBox);
    });
  }
  chestRect(e, t, r) {
    if (!t || !r)
      return;
    let a = t.width * e.width, c = t.height * e.height, l = (r.xCenter - t.width / 2) * e.width, o = (t.yCenter - t.height / 2) * e.height;
    if (o = o + c, o + c > e.height && (c = e.height - o), !(a <= 0 || c <= 0) && !(c < 0.1 * r.height * e.height))
      return { x: l, y: o, w: a, h: c };
  }
}
let bn = class extends qi {
  initializeExtraction(e) {
    return new Promise((t) => {
      this.deferredResolve = t;
    });
  }
  async extract(e, t) {
  }
};
class ji {
  constructor(e, t, r, a = "rgb1x1", c = te.AwsEnterpriseProd) {
    d(this, "type", "face");
    d(this, "boundingBox");
    d(this, "imageData");
    d(this, "deferredResolve");
    if (this.boundingBox = this.faceRect(
      { width: e.width, height: e.height },
      t,
      r,
      a,
      c
    ), this.boundingBox === void 0) {
      this.imageData = Promise.resolve(void 0);
      return;
    }
    this.imageData = this.initializeExtraction(e);
  }
  /**
   * Initialize extraction - can be overridden for deferred/batch processing
   * Default implementation: immediate extraction
   */
  initializeExtraction(e) {
    return e.getImageBitmap().then((t) => {
      if (!(!t || !this.boundingBox))
        return this.extract(t, this.boundingBox);
    });
  }
  faceRect(e, t, r, a, c) {
    var w;
    if (!t || !r)
      return;
    let l = 1, o = t.width * e.width * l, g = t.height * e.height * l, b = (r.xCenter - t.width / 2 * l) * e.width, E = (r.yCenter - t.height / 2 * l) * e.height;
    if (o == 0 || g == 0)
      return;
    let T = (w = Bt.get(c)) == null ? void 0 : w.schemaVersion;
    return (a == "rgb1x1" || a == "yuv1x1" && T && it(T, "2.0") < 0) && (g = g * 0.7), { x: b, y: E, w: o, h: g };
  }
}
var Be;
let Ti = (Be = class extends ji {
  constructor() {
    super(...arguments);
    d(this, "type", "face");
  }
  static get workerPool() {
    return this._workerPool || (console.log("[JSFaceROI] Creating JS worker pool for ROI extraction"), this._workerPool = fe(
      Be.workerFactory,
      void 0,
      // No fallback function needed for web workers
      "JSROIExtractorWorker_v1",
      // JS-only worker
      3e4,
      // 30 second timeout for very slow devices like iPhone X
      4,
      // Use 4 workers to increase throughput on slow devices
      void 0,
      // onCreated
      48
      // Larger queue (12 per worker) - prevent dropping extra ROIs during bursts
    )), this._workerPool;
  }
  initializeExtraction(t) {
    return new Promise((r) => {
      this.deferredResolve = r;
    });
  }
  async extract(t, r) {
  }
}, // Shared worker pool for all JS ROI extractions
// @ts-ignore - Vite handles import.meta.url
d(Be, "workerFactory", () => new Worker(new URL(
  /* @vite-ignore */
  "assets/BQP-oxmJ.js",
  import.meta.url
), { type: "module" })), d(Be, "_workerPool", null), Be);
function Ci(i) {
  const e = i.map((r) => r.x), t = i.map((r) => r.y);
  return {
    min: { x: Math.min(...e), y: Math.min(...t) },
    max: { x: Math.max(...e), y: Math.max(...t) }
  };
}
function xn(i) {
  const e = i.reduce((t, r) => ({ x: t.x + r.x, y: t.y + r.y }), {
    x: 0,
    y: 0
  });
  return { x: e.x / i.length, y: e.y / i.length };
}
function En(i, e, t) {
  const r = [
    i[0].x,
    i[0].y,
    i[1].x,
    i[1].y
  ], a = [
    e[0].x,
    e[0].y,
    e[1].x,
    e[1].y
  ], [c, l, o, g] = r, b = Math.sqrt(
    Math.pow(Math.abs(c - o), 2) + Math.pow(Math.abs(l - g), 2)
  ), [E, T, w, f] = a, p = E - w, m = T - f, v = [1, 0], k = [o - c, g - l], C = v[0] * k[0] + v[1] * k[1], S = Math.sqrt(v[0] * v[0] + v[1] * v[1]), D = Math.sqrt(k[0] * k[0] + k[1] * k[1]), P = Math.acos(C / (S * D)), I = Math.abs(Math.cos(P) * b / 2), F = Math.abs(Math.sin(P) * b / 2), V = {
    x: t.x - p / 2,
    y: t.y - m / 2 * 0.8
  }, J = { x: t.x - I / 2, y: t.y - F / 2 }, ee = { x: t.x + I / 2, y: t.y + F / 2 }, j = { x: V.x + I / 2, y: V.y + F / 2 }, K = { x: V.x - I / 2, y: V.y - F / 2 };
  return [J, ee, j, K];
}
function Sn(i, e) {
  const t = Ci(e), r = t.min.x, a = t.min.y, c = t.max.x, l = t.max.y, o = [(c - r) * 0.25, (l - a) * 0.25];
  let g, b, E, T;
  switch (i) {
    case "forehead":
      g = e[151].x, b = e[151].y, E = o[0] * 2, T = o[1] * 0.5;
      break;
    case "glabella":
      g = e[8].x, b = e[8].y, E = o[0] * 0.6, T = o[1] * 0.6;
      break;
    case "rightCheek":
      g = e[425].x, b = e[425].y - o[1] * 0.2, E = o[0] * 0.8, T = o[1] * 0.6;
      break;
    case "leftCheek":
      g = e[205].x, b = e[205].y - o[1] * 0.2, E = o[0] * 0.8, T = o[1] * 0.6;
      break;
    case "chin":
      g = e[200].x, b = e[200].y, E = o[0] * 0.8, T = o[1] * 0.4;
      break;
    case "neck":
      const v = [e[205], e[425]], k = [e[168], e[4]], C = e[152], S = En(v, k, C), D = Ci(S), P = xn(S);
      g = P.x, b = P.y, E = D.max.x - D.min.x, T = D.max.y - D.min.y, b += T, T *= 2;
      break;
    case "rightLowerCheek":
      g = e[425].x, b = e[425].y, E = o[0], T = o[1] / 2, b += T / 2;
      break;
    case "rightUpperCheek":
      g = e[425].x, b = e[425].y, E = o[0], T = o[1] / 2, b -= T / 2;
      break;
    case "leftLowerCheek":
      g = e[205].x, b = e[205].y, E = o[0], T = o[1] / 2, b += T / 2;
      break;
    case "leftUpperCheek":
      g = e[205].x, b = e[205].y, E = o[0], T = o[1] / 2, b -= T / 2;
      break;
    default:
      throw new Error(`Unsupported ROI part: ${i}`);
  }
  const w = g - E / 2, f = b - T / 2, p = w + E, m = f + T;
  return [
    { x: w, y: f },
    { x: p, y: f },
    { x: p, y: m },
    { x: w, y: m }
  ];
}
class Yi {
  constructor(e, t) {
    // Props
    d(this, "canvas");
    d(this, "config");
    d(this, "faceDetectionSamplingInterval");
    // States
    d(this, "debug", !1);
    d(this, "sampledFaceDetection");
    d(this, "firstFaceDetection");
    this.canvas = document.createElement("canvas"), this.config = t, this.faceDetectionSamplingInterval = e;
  }
  reset() {
    this.sampledFaceDetection = void 0, this.firstFaceDetection = void 0;
  }
  processFrame(e, t, r) {
    r === "idle" && (this.sampledFaceDetection = void 0, this.firstFaceDetection = void 0);
    const a = (/* @__PURE__ */ new Date()).getTime();
    return (!this.sampledFaceDetection || !this.faceDetectionSamplingInterval || a - this.sampledFaceDetection.timestamp > this.faceDetectionSamplingInterval) && (this.sampledFaceDetection = {
      timestamp: (/* @__PURE__ */ new Date()).getTime(),
      ...t
    }), this.firstFaceDetection === void 0 && (this.firstFaceDetection = t), { images: (this.config.enabledROIs ?? ["face", "chest"]).reduce((o, g) => {
      var b, E, T, w, f, p;
      if (g === "face")
        o.face = this.createFaceROI(e, (b = this.firstFaceDetection) == null ? void 0 : b.faceBox, (E = this.sampledFaceDetection) == null ? void 0 : E.faceBox);
      else if (g === "chest")
        o.chest = this.createChestROI(e, (T = this.firstFaceDetection) == null ? void 0 : T.faceBox, (w = this.sampledFaceDetection) == null ? void 0 : w.faceBox);
      else {
        if (!((f = this.sampledFaceDetection) != null && f.landmarks) || this.sampledFaceDetection.landmarks.length === 0)
          return o;
        const m = Sn(g, (p = this.sampledFaceDetection) == null ? void 0 : p.landmarks);
        o[g] = this.createPolygonROI(e, g, m);
      }
      return this.debug && o[g] && this.debugRoi(o[g]), o;
    }, {}) };
  }
  async debugRoi(e) {
    var o;
    const t = await e.imageData;
    if (t === void 0) {
      console.log("[VitalSignCamera] debugRoi: imageData is undefined");
      return;
    }
    const r = document.createElement("canvas");
    r.width = t.width, r.height = t.height, (o = r.getContext("2d")) == null || o.putImageData(t, 0, 0);
    const a = r.toDataURL(), c = `debug-${e.type}`, l = document.getElementById(c);
    if (l)
      l.setAttribute("src", a);
    else {
      const g = document.createElement("img");
      g.id = c, g.setAttribute("src", a), document.body.appendChild(g);
    }
  }
  /**
   * Execute batch processing for all pending ROI extractions
   * Subclasses that support batch processing should call this method
   */
  async executeBatch(e, t, r, a) {
    const c = [], l = /* @__PURE__ */ new Map();
    let o = 0;
    const g = (T, w) => {
      if (!T || !T.deferredResolve) return;
      const f = T.deferredResolve;
      let p = !1;
      if (w === "rect") {
        if (T.boundingBox) {
          const m = o++;
          c.push({ id: m, type: "rect", rect: T.boundingBox }), l.set(m, f), p = !0;
        }
      } else if (w === "polygon" && T.normalizedPoints) {
        const m = o++;
        c.push({ id: m, type: "polygon", normalizedPoints: T.normalizedPoints }), l.set(m, f), p = !0;
      }
      p || f(void 0);
    }, b = t.images.face;
    b && b.deferredResolve && g(b, "rect");
    const E = t.images.chest;
    E && E.deferredResolve && g(E, "rect");
    for (const T in t.images) {
      if (T === "face" || T === "chest") continue;
      const w = t.images[T];
      w && w.deferredResolve && g(w, w.normalizedPoints ? "polygon" : "rect");
    }
    if (c.length !== 0)
      try {
        let T;
        try {
          if (T = await e.getImageBitmap(), !T) throw new Error("Bitmap is null");
        } catch (p) {
          console.warn(`[${a}] Failed to create bitmap for batch:`, p), l.forEach((m) => m(void 0));
          return;
        }
        const w = {
          type: "batch",
          videoFrame: T,
          tasks: c
        }, f = await r.callWorker(
          w,
          [T]
        );
        if (Array.isArray(f))
          for (const p of f) {
            const m = l.get(p.id);
            m && (m(p.data), l.delete(p.id));
          }
        else f === void 0 || console.warn(`[${a}] Unexpected result format from batch worker:`, f);
      } catch (T) {
        console.error(`[${a}] Batch execution failed:`, T);
      } finally {
        l.forEach((T) => T(void 0));
      }
  }
}
class Gi {
  constructor(e, t, r) {
    d(this, "type");
    d(this, "boundingBox");
    d(this, "imageData");
    d(this, "deferredResolve");
    d(this, "normalizedPoints");
    this.type = t, this.boundingBox = this.polygonToBoundingBox(
      { width: e.width, height: e.height },
      r
    ), this.imageData = this.initializeExtraction(e, r);
  }
  /**
   * Initialize extraction - can be overridden for deferred/batch processing
   * Default implementation: immediate extraction
   */
  initializeExtraction(e, t) {
    return e.getImageBitmap().then((r) => {
      if (!(!r || !this.boundingBox))
        return this.extract(r, t);
    });
  }
  polygonToBoundingBox(e, t) {
    if (t.length === 0)
      return { x: 0, y: 0, w: 0, h: 0 };
    if (t.length === 1) {
      const o = t[0];
      return {
        x: Math.floor(o.x) * e.width,
        y: Math.floor(o.y) * e.height,
        w: 1,
        h: 1
      };
    }
    let r = t[0].x, a = t[0].y, c = t[0].x, l = t[0].y;
    for (let o = 1; o < t.length; o++) {
      const g = t[o];
      g.x < r && (r = g.x), g.y < a && (a = g.y), g.x > c && (c = g.x), g.y > l && (l = g.y);
    }
    return {
      x: r * e.width,
      y: a * e.height,
      w: (c - r) * e.width,
      h: (l - a) * e.height
    };
  }
}
let Rn = class extends Gi {
  initializeExtraction(e, t) {
    return this.normalizedPoints = t, new Promise((r) => {
      this.deferredResolve = r;
    });
  }
  async extract(e, t) {
  }
}, kn = class extends Yi {
  constructor(e, t) {
    super(e, t), console.log("[JSROIExtractor] Initialized with batch processing");
  }
  createFaceROI(e, t, r) {
    return new Ti(e, t, r, this.config.pixelDataType, this.config.serverId);
  }
  createChestROI(e, t, r) {
    return new bn(e, t, r);
  }
  createPolygonROI(e, t, r) {
    return new Rn(e, t, r);
  }
  processFrame(e, t, r) {
    const a = super.processFrame(e, t, r);
    return this.executeBatch(e, a, Ti.workerPool, "JSROIExtractor"), a;
  }
};
function Tn() {
  try {
    const i = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
    return i ? !!(i.getContext("webgl") || i.getContext("experimental-webgl")) : !1;
  } catch {
    return !1;
  }
}
const Cn = [
  /Intel.*HD Graphics 3000/i,
  /Mali-400/i
];
function Dn() {
  try {
    const i = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
    if (!i) return !0;
    const e = i.getContext("webgl") || i.getContext("experimental-webgl");
    if (!e) return !0;
    const t = e.getExtension("WEBGL_debug_renderer_info");
    if (!t) return !1;
    const r = e.getParameter(t.UNMASKED_RENDERER_WEBGL);
    return Cn.some((a) => a.test(r));
  } catch {
    return !0;
  }
}
const Ze = class Ze extends ji {
  static get workerPool() {
    return this._workerPool || (this._workerPool = fe(
      Ze.workerFactory,
      void 0,
      // No fallback function needed for web workers
      "WebGLROIExtractorWorker_v1",
      // WebGL-optimized worker
      3e4,
      // 30 second timeout for very slow devices like iPhone X
      4,
      // Use 4 workers to increase throughput on slow devices
      void 0,
      // onCreated
      48
      // Larger queue (12 per worker) - prevent dropping extra ROIs during bursts
    )), this._workerPool;
  }
  initializeExtraction(e) {
    return new Promise((t) => {
      this.deferredResolve = t;
    });
  }
  async extract(e, t) {
  }
};
// Shared worker pool for all WebGL ROI extractions
// @ts-ignore - import.meta.url is handled by Vite bundler
d(Ze, "workerFactory", () => new Worker(new URL(
  /* @vite-ignore */
  "assets/C9hZCTD6.js",
  import.meta.url
), { type: "module" })), d(Ze, "_workerPool", null);
let gt = Ze;
const et = class et extends qi {
  static get workerPool() {
    return this._workerPool || (this._workerPool = fe(
      et.workerFactory,
      void 0,
      // No fallback function needed for web workers
      "WebGLROIExtractorWorker_v1",
      // WebGL-optimized worker
      3e4,
      // 30 second timeout for very slow devices like iPhone X
      4,
      // Use 4 workers to increase throughput on slow devices
      void 0,
      // onCreated
      48
      // Larger queue (12 per worker) - prevent dropping extra ROIs during bursts
    )), this._workerPool;
  }
  initializeExtraction(e) {
    return new Promise((t) => {
      this.deferredResolve = t;
    });
  }
  async extract(e, t) {
  }
};
// Shared worker pool for all WebGL ROI extractions
// @ts-ignore - import.meta.url is handled by Vite bundler
d(et, "workerFactory", () => new Worker(new URL(
  /* @vite-ignore */
  "assets/C9hZCTD6.js",
  import.meta.url
), { type: "module" })), d(et, "_workerPool", null);
let Vt = et;
const tt = class tt extends Gi {
  static get workerPool() {
    return this._workerPool || (this._workerPool = fe(
      tt.workerFactory,
      void 0,
      // No fallback function needed for web workers
      "WebGLROIExtractorWorker_v1",
      // WebGL-optimized worker
      3e4,
      // 30 second timeout for very slow devices like iPhone X
      4,
      // Use 4 workers to increase throughput on slow devices
      void 0,
      // onCreated
      48
      // Larger queue (12 per worker) - prevent dropping extra ROIs during bursts
    )), this._workerPool;
  }
  initializeExtraction(e, t) {
    return this.normalizedPoints = t, new Promise((r) => {
      this.deferredResolve = r;
    });
  }
  async extract(e, t) {
  }
};
// Shared worker pool for all WebGL ROI extractions
// @ts-ignore - import.meta.url is handled by Vite bundler
d(tt, "workerFactory", () => new Worker(new URL(
  /* @vite-ignore */
  "assets/C9hZCTD6.js",
  import.meta.url
), { type: "module" })), d(tt, "_workerPool", null);
let Nt = tt;
class Di extends Yi {
  constructor(e, t) {
    super(e, t), console.log("[WorkerExtractor] Initialized - using worker WebGL implementation with batch processing");
  }
  createFaceROI(e, t, r) {
    return new gt(e, t, r, this.config.pixelDataType, this.config.serverId);
  }
  createChestROI(e, t, r) {
    return new Vt(e, t, r);
  }
  createPolygonROI(e, t, r) {
    return new Nt(e, t, r);
  }
  processFrame(e, t, r) {
    const a = super.processFrame(e, t, r);
    return this.executeBatch(e, a, gt.workerPool, "WorkerExtractor"), a;
  }
}
class Fn {
  /**
   * Detects the best ROI extraction implementation based on device capabilities
   */
  static detectBestROIExtractor() {
    const e = Tn(), t = Dn();
    return console.log("[ROIExtractorFactory] Detecting best extractor..."), console.log("[ROIExtractorFactory] WebGL available:", e), console.log("[ROIExtractorFactory] WebGL blacklisted:", t), e && !t ? (console.log("[ROIExtractorFactory] Selected: webgl (GPU-accelerated)"), "webgl") : (console.log("[ROIExtractorFactory] Selected: js (CPU-only)"), "js");
  }
  /**
   * Creates a JavaScript-based ROI extractor
   */
  static createJSROIExtractor(e, t) {
    var r;
    return console.log(`[VitalSignCamera] createJSROIExtractor for ${(r = t.enabledROIs) == null ? void 0 : r.join(", ")} ROIs`), new kn(e, t);
  }
  /**
   * Creates a WebGL-based ROI extractor
   */
  static createWebGLROIExtractor(e, t) {
    var r;
    return console.log(`[VitalSignCamera] createWebGLROIExtractor for ${(r = t.enabledROIs) == null ? void 0 : r.join(", ")} ROIs`), console.log("[ROIExtractorFactory] Using WorkerExtractor for WebGL acceleration"), new Di(e, t);
  }
  /**
   * Creates the best available ROI extractor based on device capabilities and configuration
   */
  static createFaceROIExtractor(e, t) {
    switch (t.roiExtractorType || Xe.Auto) {
      case Xe.JS:
        return console.log("[ROIExtractorFactory] Forcing JS ROI extractor implementation"), this.createJSROIExtractor(e, t);
      case Xe.WebGL:
        return console.log("[ROIExtractorFactory] Forcing Worker WebGL ROI Extractor implementation"), new Di(e, t);
      case Xe.Auto:
      default:
        return this.detectBestROIExtractor() === "webgl" ? this.createWebGLROIExtractor(e, t) : this.createJSROIExtractor(e, t);
    }
  }
  /**
   * Get information about the current browser detection for WebGL
   * Useful for debugging and testing
   */
  static getWebGLDetectionInfo() {
    return {
      isIOS: G.isIOS,
      isSafari: G.isSafari,
      browserVersion: G.browserVersion || "unknown",
      osVersion: G.osVersion || "unknown",
      userAgent: typeof navigator < "u" ? navigator.userAgent : "undefined"
    };
  }
}
function Fi(i, e) {
  return Fn.createFaceROIExtractor(i, e);
}
class Pn {
  constructor(e, t, r, a, c, l, o) {
    // Frame processing state - owned by processor
    d(this, "videoFrameInfo", null);
    d(this, "videoFrame");
    d(this, "healthResult");
    d(this, "faceDetectionResult");
    d(this, "realtimeEstimator");
    d(this, "beautyAnalyzer");
    d(this, "ageEstimator");
    // Face detection timing - owned by processor
    d(this, "faceDetectionTimer");
    d(this, "faceDetectionFunction");
    // FPS trackers - owned by processor
    d(this, "cameraFps", new ki("camera"));
    d(this, "faceDetectionFps", new ki("face detection"));
    // Face detection configuration - owned by processor
    d(this, "faceDetectionSamplingInterval");
    // ROI extractor - owned by processor
    d(this, "roiExtractor");
    // Process token to prevent concurrent executions
    d(this, "processIdCounter", 0);
    this.instance = e, this.onVideoFrameProcessed = r, this.realtimeEstimator = a, this.beautyAnalyzer = c, this.ageEstimator = l, this.faceDetectionSamplingInterval = o, this.roiExtractor = Fi(o, t);
  }
  getCallback() {
    return this.onVideoFrameProcessed;
  }
  setCallback(e) {
    this.onVideoFrameProcessed = e;
  }
  setRealtimeEstimator(e) {
    this.realtimeEstimator = e;
  }
  setBeautyAnalyzer(e) {
    this.beautyAnalyzer = e;
  }
  setAgeEstimator(e) {
    this.ageEstimator = e;
  }
  getFaceDetectionResult() {
    return this.faceDetectionResult;
  }
  setFaceDetectionResult(e) {
    this.faceDetectionResult = e, e != null && e.videoFrame.width && (e != null && e.videoFrame.height) && (this.videoFrameInfo = {
      timestamp: performance.now(),
      width: e.videoFrame.width,
      height: e.videoFrame.height
    });
  }
  // FPS accessor methods for external access
  getCameraFpsAverage() {
    return this.cameraFps.average;
  }
  getCameraFpsFrameCount() {
    return this.cameraFps.frameCount;
  }
  // Face detection config accessors
  getFaceDetectionSamplingInterval() {
    return this.faceDetectionSamplingInterval;
  }
  // ROI extractor management
  recreateROIExtractor(e) {
    this.roiExtractor = Fi(this.faceDetectionSamplingInterval, e);
  }
  startFaceDetection() {
    this.faceDetectionFunction !== void 0 && (this.faceDetectionTimer && (clearInterval(this.faceDetectionTimer), this.faceDetectionTimer = void 0), this.faceDetectionTimer = setInterval(
      this.faceDetectionFunction,
      1e3 / this.instance.maxFaceDetectionFps
    ));
  }
  stopFaceDetection() {
    this.faceDetectionTimer && (clearInterval(this.faceDetectionTimer), this.faceDetectionTimer = void 0), this.faceDetectionFunction = void 0;
  }
  reset() {
    this.stopFaceDetection(), this.videoFrameInfo = null, this.videoFrame = void 0, this.healthResult = void 0, this.faceDetectionResult = void 0;
  }
  createProcessedEvent() {
    var t, r, a, c, l, o, g, b, E, T;
    if (this.videoFrameInfo === null || !this.videoFrame)
      return;
    const e = this.healthResult;
    return e != null && e.health && (e.health.beautyAnalysis = (t = this.beautyAnalyzer) == null ? void 0 : t.result, e.health.vitalSigns = {
      ...e.health.vitalSigns,
      facialSkinAge: ((a = (r = this.beautyAnalyzer) == null ? void 0 : r.result) == null ? void 0 : a.skinAge) || ((l = (c = this.ageEstimator) == null ? void 0 : c.estimation) == null ? void 0 : l.age)
    }), {
      videoFrameInfo: this.videoFrameInfo,
      videoFrame: this.videoFrame,
      facebox: (o = this.faceDetectionResult) == null ? void 0 : o.faceBox,
      healthResult: e,
      scanConditions: this.instance.conditionChecker.conditions,
      landmarks: (g = this.faceDetectionResult) == null ? void 0 : g.landmarks,
      realtimeEstimation: ((b = this.realtimeEstimator) == null ? void 0 : b.estimation) || null,
      signalData: ((E = this.realtimeEstimator) == null ? void 0 : E.signalData) || null,
      signal2Data: ((T = this.realtimeEstimator) == null ? void 0 : T.signal2Data) || null
    };
  }
  convertFaceBox(e) {
    if (e === void 0)
      return;
    if (!this.instance.videoSettings || !this.instance.faceDetectionRegionAbs)
      return e;
    const t = (e.xCenter * this.instance.faceDetectionRegionAbs.width + this.instance.faceDetectionRegionAbs.x) / this.instance.videoSettings.width, r = (e.yCenter * this.instance.faceDetectionRegionAbs.height + this.instance.faceDetectionRegionAbs.y) / this.instance.videoSettings.height, a = e.width * this.instance.faceDetectionRegionAbs.width / this.instance.videoSettings.width, c = e.height * this.instance.faceDetectionRegionAbs.height / this.instance.videoSettings.height;
    return { xCenter: t, yCenter: r, width: a, height: c };
  }
  convertLandmarks(e) {
    if (e === void 0)
      return;
    if (this.instance.videoSettings === void 0 || !this.instance.faceDetectionRegionAbs)
      return e;
    const t = this.instance.videoSettings, r = this.instance.faceDetectionRegionAbs;
    return e.map((a) => {
      const c = (a.x * r.width + r.x) / t.width, l = (a.y * r.height + r.y) / t.height, o = a.z;
      return { x: c, y: l, z: o };
    });
  }
  async processVideoFrame() {
    this.processIdCounter++;
    const e = this.processIdCounter, t = this.instance.video;
    if (this.instance.camera) {
      if (await this.instance.camera.stop(), this.processIdCounter !== e) {
        console.warn("[VitalSignFrameProcessor] processVideoFrame aborted (another process started during stop).");
        return;
      }
      this.instance.camera = null;
    }
    const { width: r, height: a } = Fa(
      this.instance.presetFormat || ye.hd1920x1080
    );
    this.instance.precisionModeChecker.reset();
    const c = ft.createVideoSource(t, {
      width: r,
      height: a,
      deviceId: this.instance.device,
      preferredCamera: this.instance.preferredCamera,
      callbackFrameRate: this.instance.maxFps,
      frameRate: 60,
      // Initial guess for video files, will be auto-detected
      handleIOS17Bug: G.isIOS && it(G.browserVersion, "17") >= 0,
      handleIOS17ObjectFitBug: G.isIOS && it(G.browserVersion, "17.2") >= 0,
      onFrameRateDetected: (E) => {
        console.log(`[VitalSignFrameProcessor] Frame rate detected: ${E} fps`), this.instance.updateVideoSettings(t);
      },
      onFrame: (E) => {
        var v, k, C, S, D, P, I, F, V, J, ee, j, K, Z, le, Q, se, ae, U, N;
        if (c.croppingRegion = this.instance.faceDetectionRegionAbs, this.instance.cameraStartTime === void 0)
          return;
        const T = (/* @__PURE__ */ new Date()).getTime() - this.instance.cameraStartTime.getTime();
        if ((((v = this.instance.videoSettings) == null ? void 0 : v.width) != t.videoWidth || ((k = this.instance.videoSettings) == null ? void 0 : k.height) != t.videoHeight) && this.instance.updateVideoSettings(t) !== "ok" && T > 5e3) {
          console.error("[VitalSignCamera] Could not get camera settings."), c.stop(), this.instance.onError && this.instance.onError(new Error("undefined camera dimension"));
          return;
        }
        if (this.cameraFps.tick(), this.faceDetectionResult == null)
          return;
        this.instance.conditionChecker.processFrame(
          this.faceDetectionResult.videoFrame,
          (C = this.faceDetectionResult) == null ? void 0 : C.faceBox,
          this.instance.vsStatus === "idle" ? this.instance.checkBrightness : !1,
          this.cameraFps.average,
          this.instance.vsStatus
        ), this.instance.precisionModeChecker.process(this.cameraFps.average, this.instance.vsStatus);
        const { images: w } = this.roiExtractor.processFrame(E, this.faceDetectionResult, this.instance.vsStatus);
        this.videoFrame = E, this.videoFrameInfo = E;
        const f = this.faceDetectionResult.faceBox, p = {
          faceBox: f,
          landmarks: this.faceDetectionResult.landmarks,
          videoFrameInfo: E,
          images: w,
          userInfo: this.instance.userInfo
        }, m = this.instance.vitalSignEngine.getHealth(p);
        if (this.healthResult = m, this.instance.vsStatus === "measuring" && (m.stage === Y.Idle && (this.instance.vsStatus = "idle", this.instance.vitalSignEngine.stop(), m.error && this.instance.onError && this.instance.onError(m.error)), (D = (S = m.health) == null ? void 0 : S.vitalSigns) != null && D.heartRate && ((F = this.realtimeEstimator) == null || F.updateWithServerResult(
          m.health.vitalSigns.heartRate,
          (P = m.health.scanParameters) == null ? void 0 : P.snr,
          (I = m.health.scanParameters) == null ? void 0 : I.signalQuality
        )), (V = this.ageEstimator) == null || V.processFrame(
          E,
          m.stage,
          m.remainingTime
        ), (J = this.realtimeEstimator) == null || J.processFrame(
          E,
          m.stage,
          m.remainingTime,
          w
        ), (K = this.beautyAnalyzer) == null || K.processFrame(
          E,
          f,
          (j = (ee = this.ageEstimator) == null ? void 0 : ee.estimation) == null ? void 0 : j.age,
          m.stage,
          m.remainingTime
        ), (Z = this.instance.frameGrabber) == null || Z.processFrame(
          E,
          m.stage,
          m.remainingTime
        )), this.instance.boundingBox) {
          const A = this.convertFaceBox((le = this.faceDetectionResult) == null ? void 0 : le.faceBox);
          this.instance.boundingBox.update(A);
        }
        if (this.instance.faceMesh) {
          const A = this.convertLandmarks((Q = this.faceDetectionResult) == null ? void 0 : Q.landmarks);
          this.instance.faceMesh.update(A);
        }
        if (this.instance.heatmap)
          if (this.instance.vsStatus === "measuring") {
            const A = this.convertFaceBox((se = this.faceDetectionResult) == null ? void 0 : se.faceBox), M = this.convertLandmarks((ae = this.faceDetectionResult) == null ? void 0 : ae.landmarks), B = (N = (U = this.realtimeEstimator) == null ? void 0 : U.signalData) == null ? void 0 : N.values;
            this.instance.heatmap.update(A, M, B);
          } else
            this.instance.heatmap.update(void 0, void 0);
        if (this.onVideoFrameProcessed) {
          const A = this.createProcessedEvent();
          A && this.onVideoFrameProcessed(A);
        }
      },
      onVideoPlaying: () => {
        var E;
        this.instance.faceDetector || ((E = this.instance.visualizationOptions) != null && E.modelLoadingProgress && this.instance.visualizationOptions.modelLoadingProgress.enabled !== !1 && !this.instance.modelLoadingProgress && this.instance.video ? (console.log("[VitalSignCamera] Creating model loading progress visualization on video opacity ready"), this.instance.modelLoadingProgress = new Wi(
          this.instance.video,
          this.instance.visualizationOptions.modelLoadingProgress
        ), this.instance.modelLoadingProgress.show()) : this.instance.modelLoadingProgress && this.instance.modelLoadingProgress.show());
      },
      // Forward any VideoFile playback/buffering errors to the camera-level onError
      onError: (E) => {
        console.error("[VitalSignFrameProcessor] Video source reported error:", E), this.instance.onError && this.instance.onError(E);
      }
    });
    try {
      if (this.instance.camera = c, c.croppingRegion = this.instance.faceDetectionRegionAbs, await c.start(), this.processIdCounter !== e) {
        console.warn("[VitalSignFrameProcessor] processVideoFrame aborted due to newer process starting."), c.stop().catch((E) => console.error("[VitalSignFrameProcessor] Error stopping aborted camera:", E));
        return;
      }
      if (this.instance.camera !== c) {
        console.warn("[VitalSignFrameProcessor] Camera changed or stopped during startup, aborting and stopping."), c.stop().catch((E) => console.error("[VitalSignFrameProcessor] Error stopping aborted camera:", E));
        return;
      }
      this.instance.updateVideoSettings(t), this.instance._device = c.deviceId, this.instance.cameraStartTime = /* @__PURE__ */ new Date();
    } catch (E) {
      console.error("[VitalSignCamera] Could not start video source: ", E), this.instance.camera === c && (this.instance.camera = null), this.instance.onError && this.instance.onError(E);
      return;
    }
    let l = !1;
    const o = 3;
    let g = 0;
    const b = document.createElement("canvas");
    this.faceDetectionFunction = async () => {
      if (this.instance.faceDetector === void 0 || !this.faceDetectionTimer || this.cameraFps.frameCount == 0 || l || !t.srcObject && !t.src || this.instance.videoSettings === void 0)
        return;
      const E = this.instance.videoSettings;
      l = !0;
      const T = this.instance.faceDetectionRegionAbs || {
        x: 0,
        y: 0,
        width: E.width,
        height: E.height
      }, w = T.width / T.height;
      if (b.width = w > 1 ? 320 : 320 * w, b.height = b.width / w, this.instance.faceDetectorType !== ie.Dummy) {
        let f = b.getContext("2d", { willReadFrequently: !0 });
        f == null || f.drawImage(
          t,
          T.x,
          T.y,
          T.width,
          T.height,
          0,
          0,
          b.width,
          b.height
        );
      }
      try {
        this.instance.faceDetector.detect({ image: b }).then((f) => {
          this.faceDetectionFps.tick(), this.setFaceDetectionResult({ ...f, faceDetectionRegion: T });
        }).catch((f) => {
          g++, console.error(`Face detector crashed: ${f}`), console.log(`Face detector crash count: ${g}`), g > o && (console.log(
            `Face detector crashed ${g} times, falling back to dummy detector.`
          ), this.instance.faceDetectorType = ie.Dummy, Vi(this.instance.faceDetectorType).then((p) => {
            this.instance.faceDetector = p;
          }));
        }).finally(() => {
          l = !1;
        });
      } catch {
        g++, l = !1;
      }
    }, this.processIdCounter === e && this.startFaceDetection();
  }
}
const dt = G.isMobile && !G.isTablet;
class In {
  constructor(e) {
    d(this, "id", `${Math.floor(Math.random() * 1e4)}`);
    d(this, "deviceCaps", Oa);
    d(this, "version", Lt);
    /* Props */
    d(this, "_isActive");
    d(this, "_userInfo");
    d(this, "_config");
    d(this, "faceDetectorType");
    d(this, "_presetFormat");
    d(this, "checkBrightness", !0);
    d(this, "_device");
    d(this, "preferredCamera");
    d(this, "_maxFps");
    d(this, "maxFaceDetectionFps");
    d(this, "_precisionMode");
    d(this, "disableAgeEstimation");
    d(this, "enableBeautyAnalysis");
    d(this, "_visualizationOptions");
    d(this, "customConditionRange");
    d(this, "faceDetectionRegion");
    d(this, "faceDetectionModelLocation");
    d(this, "_realtimeEstimationConfig");
    /* States */
    d(this, "vsStatus", "idle");
    d(this, "camera", null);
    d(this, "cameraStartTime");
    d(this, "video", null);
    d(this, "transform", "none");
    d(this, "_videoSettings");
    d(this, "activateAfterBound", !1);
    d(this, "boundingBox");
    d(this, "faceMesh");
    d(this, "modelLoadingProgress");
    d(this, "heatmap");
    /* Submodules */
    d(this, "vitalSignEngine");
    d(this, "faceDetector");
    d(this, "ageEstimator");
    d(this, "beautyAnalyzer");
    d(this, "realtimeEstimator");
    d(this, "conditionChecker");
    d(this, "frameGrabber");
    d(this, "precisionModeChecker", new mn(this));
    d(this, "cameraDevices");
    d(this, "frameProcessor");
    d(this, "videoSrcObserver");
    d(this, "onTransformUpdated");
    d(this, "onVideoSettingsUpdated");
    d(this, "onCameraDevicesUpdated");
    d(this, "onInitialized");
    d(this, "onPrecisionModeUpdated");
    d(this, "onPrecisionModeWillUpdate");
    d(this, "onError");
    d(this, "onModelLoadingProgress");
    var c;
    window.__vital_sign_camera_impl__ = this, console.log(`[VitalSignCamera] Welcome to VitalSignCamera ${Lt}`), console.log("[VitalSignCamera] Initializing with props...", e);
    let t = /* @__PURE__ */ new Date();
    this._isActive = !1, this.activateAfterBound = e.isActive, this._config = e.config || {}, this._device = e.device, this.preferredCamera = e.preferredCamera, this._userInfo = e.userInfo, this._visualizationOptions = e.visualizationOptions, this.faceDetectionRegion = e.faceDetectionRegion, this._realtimeEstimationConfig = e.realtimeEstimationConfig, G.isMobile ? dt ? this._presetFormat = ye.sd480x360 : this._presetFormat = ye.hd1280x720 : this._presetFormat = ye.hd1920x1080, e.customConditionRange !== void 0 && (this.customConditionRange = e.customConditionRange), e.checkBrightness !== void 0 ? this.checkBrightness = e.checkBrightness : (G.isAndroid && (console.log(
      "[VitalSignCamera] Android detected. Turn off brightness check."
    ), this.checkBrightness = !1), e.faceDetectorType === ie.Dummy && (console.log(
      "[VitalSignCamera] Dummy face detector being used. Turn off brightness check."
    ), this.checkBrightness = !1)), e.faceDetectorType !== void 0 ? (console.log(
      `[VitalSignCamera] Setting face detector type ${e.faceDetectorType}...`
    ), this.faceDetectorType = e.faceDetectorType) : (console.log("[VitalSignCamera] Auto setting face detector type..."), G.isAndroid ? (console.log("[VitalSignCamera] Android detected"), console.log("[VitalSignCamera] Setting new MediaPipe face detector"), this.faceDetectorType = ie.MPFaceMesh) : (console.log("[VitalSignCamera] Setting new MediaPipe facemesh threaded detector"), this.faceDetectorType = ie.MPFaceMeshThreaded)), e.presetFormat !== void 0 && (this._presetFormat = e.presetFormat), e.maxFps !== void 0 ? (console.log(
      `[VitalSignCamera] Setting max camera fps to ${e.maxFps}`
    ), this._maxFps = e.maxFps) : (this._maxFps = dt ? 30 : 60, console.log(
      `[VitalSignCamera] Auto setting max camera fps to ${this._maxFps}`
    )), e.maxFaceDetectionFps !== void 0 ? (console.log(
      `[VitalSignCamera] Setting max face detection fps to ${e.maxFaceDetectionFps}`
    ), this.maxFaceDetectionFps = e.maxFaceDetectionFps) : dt || G.isAndroid ? (this.maxFaceDetectionFps = 2, console.log(
      `[VitalSignCamera] Mobile phone or Android detected, auto setting max face detection fps to ${this.maxFaceDetectionFps}`
    )) : (this.maxFaceDetectionFps = 5, console.log(
      `[VitalSignCamera] Auto setting max face detection fps to ${this.maxFaceDetectionFps}`
    )), ((c = e.config) == null ? void 0 : c.blinkDetectorType) === Ye.default && (console.log("[VitalSignCamera] Blink detector enabled, forcing face detection fps to 15"), this.maxFaceDetectionFps = Math.max(15, this.maxFaceDetectionFps)), e.disableAgeEstimation !== void 0 ? (console.log(
      `[VitalSignCamera] Setting age estimation: ${!e.disableAgeEstimation}`
    ), this.disableAgeEstimation = e.disableAgeEstimation) : (console.log("[VitalSignCamera] Auto setting age estimation..."), dt ? (console.log("[VitalSignCamera] is phone -> ageEstimation = false"), this.disableAgeEstimation = !0) : (console.log("[VitalSignCamera] Not phone -> ageEstimation = true"), this.disableAgeEstimation = !1)), e.enableBeautyAnalysis !== void 0 ? (console.log(
      `[VitalSignCamera] Setting beauty analysis: ${e.enableBeautyAnalysis}`
    ), this.enableBeautyAnalysis = e.enableBeautyAnalysis, this.enableBeautyAnalysis && this.disableAgeEstimation && (console.log(
      "[VitalSignCamera] Beauty analysis ON -> Forcing ageEstimation = true"
    ), this.disableAgeEstimation = !1)) : this.enableBeautyAnalysis = !1, e.frameGrabberConfig !== void 0 && (this.frameGrabber = gn(), this.frameGrabber.configure(e.frameGrabberConfig));
    const r = this.disableAgeEstimation, a = this.enableBeautyAnalysis;
    this.onVideoSettingsUpdated = e.onVideoSettingsUpdated, this.onCameraDevicesUpdated = e.onCameraDevicesUpdated, this.onInitialized = e.onInitialized, this.onPrecisionModeUpdated = e.onPrecisionModeUpdated, this.onPrecisionModeWillUpdate = e.onPrecisionModeWillUpdate, this.onError = e.onError, this.onModelLoadingProgress = e.onModelLoadingProgress, this.frameProcessor = new Pn(this, this.config, void 0, void 0, void 0, void 0, e.faceDetectionSamplingInterval), this.onVideoFrameProcessed = e.onVideoFrameProcessed, this.vitalSignEngine = Ca(), this.sdkCredentials = e.sdkCredentials, this.conditionChecker = qa(
      this.vitalSignEngine,
      e.conditionCheckerConfig,
      this.customConditionRange
    ), e.precisionMode !== void 0 ? this.precisionMode = e.precisionMode : console.warn(
      "[VitalSignCamera] ⚠️  No precisionMode set — running in legacy V1 mode which is deprecated and will be removed on June 30, 2026. Please set precisionMode to migrate to V2. Migration guide: https://docs.panoptic.ai/migration/v1-to-v2"
    ), this.cameraDevices = new Ga(this, (l) => {
      this.onCameraDevicesUpdated && this.onCameraDevicesUpdated({
        devices: l,
        selected: this.device
      });
    }), this.cameraDevices.start(), (async () => {
      var l;
      try {
        const o = (b) => {
          var E;
          (E = this.modelLoadingProgress) == null || E.update(b), this.onModelLoadingProgress && this.onModelLoadingProgress(b);
        };
        r || (this.ageEstimator = await Ka(e.faceApiModelPath, o), this.ageEstimator.configure(e.ageEstimationConfig), this.frameProcessor.setAgeEstimator(this.ageEstimator)), a && (this.beautyAnalyzer = await ln({ apiKey: (l = e.config) == null ? void 0 : l.apiKey }), this.frameProcessor.setBeautyAnalyzer(this.beautyAnalyzer)), this._realtimeEstimationConfig && (this.realtimeEstimator = await wi(this._realtimeEstimationConfig), await this.realtimeEstimator.loadModels(o), this.frameProcessor.setRealtimeEstimator(this.realtimeEstimator)), this.faceDetector = await this.createFaceDetector(e.faceDetectionModelLocation, o), this.onInitialized && this.onInitialized(), this.modelLoadingProgress && (console.log("[VitalSignCamera] Hiding model loading progress overlay on initialization complete"), this.modelLoadingProgress.hide());
        const g = ((/* @__PURE__ */ new Date()).getTime() - t.getTime()) / 1e3;
        console.log(
          `[VitalSignCamera] initialized. Loading time ${g}s.`
        );
      } catch (o) {
        console.error(o), console.log("[VitalSignCamera] initialization failed."), this.onError && this.onError(o), this.camera && this.cameraStartTime && this.stopCamera();
      }
    })();
  }
  async createFaceDetector(e, t) {
    try {
      console.log("[VitalSignCamera] Model loading location: ", e);
      let r = await Vi(this.faceDetectorType);
      return await r.loadModels(e, t), r;
    } catch (r) {
      if (this.faceDetectorType == ie.MPFaceMeshThreaded)
        return console.warn("[VitalSignCamera] Failed to initialize MediaPipe FaceMesh threaded detector. Falling back to non-threaded version."), this.faceDetectorType = ie.MPFaceMesh, await this.createFaceDetector(e, t);
      if (this.faceDetectorType == ie.MPFaceMesh)
        return console.warn("[VitalSignCamera] Failed to initialize MediaPipe FaceMesh detector (likely WASM issue). Falling back to FaceApi detector."), this.faceDetectorType = ie.FaceApi, await this.createFaceDetector(e, t);
      throw r;
    }
  }
  /*
   * Life cycles
   */
  bind(e) {
    this.video = e, this.video.setAttribute("playsinline", ""), getComputedStyle(this.video).objectFit !== "cover" && (console.info("[Camera] Forcing the object-fit to 'cover'."), this.video.style.setProperty("object-fit", "cover", "important")), this.videoSrcObserver = new MutationObserver((t) => {
      var r;
      for (const a of t)
        if (a.type === "attributes" && a.attributeName === "src") {
          const c = ((r = this.video) == null ? void 0 : r.src) || "";
          console.log("[VitalSignCamera] Video src changed:", c), this._isActive && (console.log("[VitalSignCamera] Restarting camera due to src change"), this.stopCamera().then(() => {
            this.startCamera();
          }).catch((l) => {
            console.error("[VitalSignCamera] Error restarting camera:", l), this.onError && this.onError(l);
          }));
        }
    }), this.videoSrcObserver.observe(e, {
      attributes: !0,
      attributeFilter: ["src"]
    }), this.config && (this.vitalSignEngine.configure(this.config), this.vitalSignEngine.isReady()), this.faceDetectorType === ie.TFMediaPipe && this.vitalSignEngine.configure({
      blinkDetectorType: Ye.default
    }), this.isActive = this.activateAfterBound;
  }
  async destroy() {
    console.log("[VitalSignCamera] Destroying VitalSignCamera instance..."), this.stopScanning(), await this.stopCamera(), this.videoSrcObserver && (this.videoSrcObserver.disconnect(), this.videoSrcObserver = void 0), this.cameraDevices && this.cameraDevices.timer && clearInterval(this.cameraDevices.timer), this.frameProcessor.stopFaceDetection(), this.vsStatus = "idle", this.camera = null, this.cameraStartTime = void 0, this.video = null, this._videoSettings = void 0, this.cameraDevices = void 0, this.onVideoFrameProcessed = void 0, this.onTransformUpdated = void 0, this.onVideoSettingsUpdated = void 0, this.onCameraDevicesUpdated = void 0, this.onInitialized = void 0, this.onPrecisionModeUpdated = void 0, this.onPrecisionModeWillUpdate = void 0, this.onError = void 0, this.onModelLoadingProgress = void 0, window.__vital_sign_camera_impl__ === this && delete window.__vital_sign_camera_impl__, console.log("[VitalSignCamera] VitalSignCamera instance destroyed");
  }
  /*
  * Watchable props
  */
  /*
   * Event Handler
   */
  get onVideoFrameProcessed() {
    return this.frameProcessor.getCallback();
  }
  set onVideoFrameProcessed(e) {
    this.frameProcessor.setCallback(e);
  }
  restartCameraAfterStop(e) {
    this.stopCamera().then(() => {
      e && this.startCamera();
    }).catch((t) => {
      console.error("[VitalSignCamera] Error restarting camera after config change:", t), this.onError && this.onError(t);
    });
  }
  set device(e) {
    const t = this.isActive;
    this._device && this._device.length > 0 && this._device !== e && this.stopCamera(), this._device = e, e ? t && this.startCamera() : this.stopCamera();
  }
  get device() {
    return this._device;
  }
  set isActive(e) {
    e ? this.startCamera() : this.stopCamera();
  }
  get isActive() {
    return this._isActive;
  }
  set presetFormat(e) {
    if (this._presetFormat === e)
      return;
    const t = this.isActive;
    this.restartCameraAfterStop(t), this._presetFormat = e;
  }
  get presetFormat() {
    return this._presetFormat;
  }
  set maxFps(e) {
    if (this._maxFps === e)
      return;
    const t = this.isActive;
    this.restartCameraAfterStop(t), this._maxFps = e;
  }
  get maxFps() {
    return this._maxFps;
  }
  set config(e) {
    this._config = {
      ...this._config
    }, Object.keys(e).forEach((t) => {
      const r = t;
      e[r] !== void 0 && (this._config[r] = e[r]);
    }), this.config && (this.vitalSignEngine.configure(this.config), this.frameProcessor.recreateROIExtractor(this.config));
  }
  get config() {
    let e = { ...this._config };
    const t = new URLSearchParams(location.search).get("PANOPTIC_API_KEY");
    return t && (e.apiKey = t), e;
  }
  set userInfo(e) {
    this._userInfo = {
      ...this._userInfo
    }, Object.keys(e).forEach((t) => {
      const r = t;
      e[r] !== void 0 && (this._userInfo[r] = e[r]);
    });
  }
  get userInfo() {
    let e = { ...this._userInfo };
    const t = new URLSearchParams(location.search).get("PANOPTIC_USER_ID");
    return t && (e.userId = t), e;
  }
  get sdkCredentials() {
    if (!(!this.config.apiKey && !this.userInfo.userId))
      return {
        apiKey: this.config.apiKey,
        userId: this.userInfo.userId
      };
  }
  set sdkCredentials(e) {
    e != null && e.apiKey && (this.config = { apiKey: e == null ? void 0 : e.apiKey }), e != null && e.userId && (this.userInfo = { userId: e == null ? void 0 : e.userId });
  }
  get precisionMode() {
    return this._precisionMode;
  }
  set precisionMode(e) {
    if (!e)
      return;
    this._precisionMode !== e && (this.onPrecisionModeUpdated && this.onPrecisionModeUpdated({
      previousMode: this._precisionMode,
      currentMode: e,
      reason: "manual"
    }), this.precisionModeChecker.reset()), this._precisionMode = e;
    const t = zi(e), r = {
      ...t.engineConfig,
      ...this._config
    };
    this.config = r, this.vitalSignEngine.configure(this.config), t.conditionCheckerConfig && this.conditionChecker.configure(t.conditionCheckerConfig), t.presetFormat && (this.presetFormat = t.presetFormat), t.maxFaceDetectionFps !== void 0 && (this.maxFaceDetectionFps = t.maxFaceDetectionFps, this.frameProcessor.startFaceDetection()), t.maxFps !== void 0 && (this.maxFps = t.maxFps);
  }
  get videoSettings() {
    return this._videoSettings;
  }
  set videoSettings(e) {
    if (this._videoSettings = e, e && this.video) {
      if (!this.onVideoSettingsUpdated)
        return;
      this.onVideoSettingsUpdated({ video: this.video, settings: e });
    }
  }
  get visualizationOptions() {
    return this._visualizationOptions;
  }
  set visualizationOptions(e) {
    var l, o, g, b;
    if (console.log("[VitalSignCamera] set visualizationOptions called with:", e), console.log("[VitalSignCamera] isActive:", this._isActive), console.log("[VitalSignCamera] video available:", !!this.video), this._visualizationOptions = e, !this._isActive) {
      console.log("[VitalSignCamera] Not active, returning");
      return;
    }
    const t = (e == null ? void 0 : e.boundingBox) && e.boundingBox.enabled !== !1;
    t && !this.boundingBox && this.video && (this.boundingBox = new yi(
      this.video,
      (l = this._visualizationOptions) == null ? void 0 : l.boundingBox
    )), !t && this.boundingBox && (this.boundingBox.enabled = !1, this.boundingBox = void 0), this.boundingBox && (e != null && e.boundingBox) && this.boundingBox.updateOptions(e == null ? void 0 : e.boundingBox);
    const r = (e == null ? void 0 : e.faceMesh) && e.faceMesh.enabled !== !1;
    r && !this.faceMesh && this.video && (this.faceMesh = new bi(
      this.video,
      (o = this._visualizationOptions) == null ? void 0 : o.faceMesh
    )), !r && this.faceMesh && (this.faceMesh.destroy(), this.faceMesh = void 0), this.faceMesh && (e != null && e.faceMesh) && this.faceMesh.updateOptions(e == null ? void 0 : e.faceMesh);
    const a = (e == null ? void 0 : e.modelLoadingProgress) && e.modelLoadingProgress.enabled !== !1;
    console.log("[VitalSignCamera] enableModelLoadingProgress:", a), console.log("[VitalSignCamera] modelLoadingProgress exists:", !!this.modelLoadingProgress), console.log("[VitalSignCamera] video exists:", !!this.video), a && !this.modelLoadingProgress && this.video && (console.log("[VitalSignCamera] Creating model loading progress visualization"), this.modelLoadingProgress = new Wi(
      this.video,
      (g = this._visualizationOptions) == null ? void 0 : g.modelLoadingProgress
    )), !a && this.modelLoadingProgress && (console.log("[VitalSignCamera] Destroying model loading progress visualization"), this.modelLoadingProgress.destroy(), this.modelLoadingProgress = void 0), this.modelLoadingProgress && (e != null && e.modelLoadingProgress) && this.modelLoadingProgress.updateOptions(e == null ? void 0 : e.modelLoadingProgress);
    const c = (e == null ? void 0 : e.heatmap) && e.heatmap.enabled !== !1;
    c && !this.heatmap && this.video && (this.heatmap = new xi(
      this.video,
      (b = this._visualizationOptions) == null ? void 0 : b.heatmap
    )), !c && this.heatmap && (this.heatmap.destroy(), this.heatmap = void 0), this.heatmap && (e != null && e.heatmap) && this.heatmap.updateOptions(e == null ? void 0 : e.heatmap);
  }
  get faceMeshElement() {
    var e;
    return (e = this.faceMesh) == null ? void 0 : e.faceMesh;
  }
  get boundingBoxElement() {
    var e;
    return (e = this.boundingBox) == null ? void 0 : e.boundingBox;
  }
  get modelLoadingProgressElement() {
    var e;
    return (e = this.modelLoadingProgress) == null ? void 0 : e.overlay;
  }
  get heatmapElement() {
    var e;
    return (e = this.heatmap) == null ? void 0 : e.overlay;
  }
  /*
   * Computed
   */
  get grabbedFrames() {
    var e;
    return (e = this.frameGrabber) == null ? void 0 : e.grabbedFrames;
  }
  get realtimeEstimationConfig() {
    return this._realtimeEstimationConfig;
  }
  // FPS delegation to frame processor
  get cameraFps() {
    return {
      average: this.frameProcessor.getCameraFpsAverage(),
      frameCount: this.frameProcessor.getCameraFpsFrameCount()
    };
  }
  // Face detection config delegation to frame processor
  get faceDetectionSamplingInterval() {
    return this.frameProcessor.getFaceDetectionSamplingInterval();
  }
  set realtimeEstimationConfig(e) {
    var t;
    ((t = this._realtimeEstimationConfig) == null ? void 0 : t.estimatorType) !== (e == null ? void 0 : e.estimatorType) ? (this._realtimeEstimationConfig = e, e != null && e.estimatorType ? (this.realtimeEstimator = void 0, wi(e).then((r) => {
      this._realtimeEstimationConfig === e && (this.realtimeEstimator = r, this.realtimeEstimator.configure(e));
    }).catch((r) => {
      console.error(`[VitalSignCamera] Failed to create realtime estimator: ${r}`);
    })) : this.realtimeEstimator = void 0) : (this._realtimeEstimationConfig = e, this.realtimeEstimator && this.realtimeEstimator.configure(e));
  }
  get faceDetectionRegionAbs() {
    if (!this.faceDetectionRegion || !this.videoSettings)
      return;
    const { x: e, y: t, width: r, height: a } = this.faceDetectionRegion, c = this.videoSettings.width, l = this.videoSettings.height;
    return {
      x: typeof e == "string" ? parseFloat(e) / 100 * c : e,
      y: typeof t == "string" ? parseFloat(t) / 100 * l : t,
      width: typeof r == "string" ? parseFloat(r) / 100 * c : r,
      height: typeof a == "string" ? parseFloat(a) / 100 * l : a
    };
  }
  updateVideoSettings(e) {
    if (!this.camera)
      return this.videoSettings = void 0, "not-ready";
    const t = this.camera.getVideoSettings();
    return t ? (console.log(
      `[VitalSignCamera] Video Settings in ${G.browserName}: ${t.width}x${t.height} @ ${t.frameRate || "unknown"} fps`
    ), this.transform = this.camera.getTransform(), e.style.transform = this.transform, this.onTransformUpdated && this.onTransformUpdated(this.transform), this.videoSettings = {
      videoId: t.videoId,
      width: t.width,
      height: t.height,
      frameRate: t.frameRate,
      transformX: this.transform
    }, "ok") : (this.videoSettings = void 0, "undefined");
  }
  async startCamera() {
    var e, t, r;
    this._isActive || (this.camera && (console.warn("[VitalSignCamera] startCamera called while camera still exists. Stopping first."), await this.camera.stop(), this.camera = null, this.cameraStartTime = void 0), this._isActive = !0, await this.processVideoFrame(), (e = this.visualizationOptions) != null && e.boundingBox && this.visualizationOptions.boundingBox.enabled !== !1 && !this.boundingBox && this.video && (this.boundingBox = new yi(
      this.video,
      this.visualizationOptions.boundingBox
    )), (t = this.visualizationOptions) != null && t.faceMesh && this.visualizationOptions.faceMesh.enabled !== !1 && !this.faceMesh && this.video && (this.faceMesh = new bi(
      this.video,
      this.visualizationOptions.faceMesh
    )), (r = this.visualizationOptions) != null && r.heatmap && this.visualizationOptions.heatmap.enabled !== !1 && !this.heatmap && this.video && (this.heatmap = new xi(
      this.video,
      this.visualizationOptions.heatmap
    )));
  }
  async stopCamera() {
    var e, t;
    this._isActive && (this._isActive = !1, this.vitalSignEngine.stop(), (e = this.boundingBox) == null || e.update(void 0), (t = this.faceMesh) == null || t.update(void 0), this.boundingBox && (this.boundingBox.enabled = !1, this.boundingBox = void 0), this.faceMesh && (this.faceMesh.destroy(), this.faceMesh = void 0), this.modelLoadingProgress && (this.modelLoadingProgress.destroy(), this.modelLoadingProgress = void 0), this.heatmap && (this.heatmap.destroy(), this.heatmap = void 0), this.video && this.stopVideo(), this.conditionChecker.reset(), this.camera && (await this.camera.stop(), this.camera = null, this.cameraStartTime = void 0), this.frameProcessor.reset());
  }
  async waitCameraToStop(e) {
    return this.camera ? await this.camera.waitUntilStopped(e) : !0;
  }
  async saveScanDataToS3(e, t, r, a) {
    return this._saveScanDataToS3ViaBackend(e, t, r, a);
  }
  getLastRequestV2() {
    var t;
    const e = (t = this.vitalSignEngine.healthAnalyzer) == null ? void 0 : t.client;
    if (e != null && e.encryptedLastRequest) {
      if (!this._precisionMode)
        throw new Error("getLastRequestV2 not supported on V1/legacy servers");
      return e.encryptedLastRequest;
    }
  }
  getLastResponseV2() {
    var t;
    const e = (t = this.vitalSignEngine.healthAnalyzer) == null ? void 0 : t.client;
    if (e != null && e.encryptedLastResponse) {
      if (!this._precisionMode)
        throw new Error("getLastResponseV2 not supported on V1/legacy servers");
      return e.encryptedLastResponse;
    }
  }
  async _saveScanDataToS3ViaBackend(e, t, r, a = !1) {
    return this.vitalSignEngine.saveScanDataToS3(
      e,
      t,
      r,
      a
    );
  }
  async stopVideo() {
    const e = this.video;
    e.srcObject && e.srcObject.getVideoTracks().forEach((t) => t.stop()), this.vitalSignEngine.stop(), this.frameProcessor.stopFaceDetection(), console.log("[VitalSignCamera] stop Camera");
  }
  /*
   * Methods
   */
  startScanning() {
    var e, t;
    if (!this._isActive)
      throw new Error("Camera is not active. Please call startScanning() after the camera is active.");
    console.log("[VitalSignCamera] start scanning..."), this.video && this.video.src && this.video.src !== "" && this.video.src !== window.location.href && (console.log("[VitalSignCamera] Video file detected — seeking to time 0"), this.video.currentTime = 0), this.vsStatus = "measuring", (e = this.frameGrabber) == null || e.reset(), (t = this.realtimeEstimator) == null || t.reset(), this.vitalSignEngine.start();
  }
  stopScanning() {
    console.log("[VitalSignCamera] stop scanning..."), this.vitalSignEngine.stop();
  }
  startFaceDetection() {
    this.frameProcessor.startFaceDetection();
  }
  async processVideoFrame() {
    await this.frameProcessor.processVideoFrame();
  }
}
function Yn(i) {
  return new In(i);
}
var qe = /* @__PURE__ */ ((i) => (i.OK = "ok", i.TooFar = "tooFar", i.TooClose = "tooClose", i))(qe || {}), Ie = /* @__PURE__ */ ((i) => (i.Centered = "centered", i.TooHigh = "tooHigh", i.TooLow = "tooLow", i.TooLeft = "tooLeft", i.TooRight = "tooRight", i.Unknown = "unknown", i))(Ie || {}), Me = /* @__PURE__ */ ((i) => (i.relaxed = "relaxed", i.strict = "strict", i))(Me || {});
export {
  ts as A,
  Qr as B,
  is as C,
  qe as D,
  Kr as E,
  Da as F,
  Y as G,
  Gr as H,
  Jr as I,
  cn as J,
  Ca as K,
  Zr as L,
  Ut as M,
  Ye as N,
  Un as O,
  Me as P,
  Xe as Q,
  ut as R,
  Hn as S,
  Xa as V,
  zn as a,
  Ts as b,
  Mn as c,
  Bn as d,
  Ia as e,
  Wn as f,
  Aa as g,
  fe as h,
  yt as i,
  ft as j,
  Ie as k,
  Nn as l,
  qr as m,
  te as n,
  ie as o,
  ye as p,
  Yn as q,
  Yr as r,
  jr as s,
  fi as t,
  Xr as u,
  Ln as v,
  na as w,
  aa as x,
  Vn as y,
  es as z
};
