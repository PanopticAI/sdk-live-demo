const O = [1, 9, 57, 130, 287, 359], D = [
  [285, 528, 200],
  [285, 371, 152],
  [203.5, 574, 128],
  [176, 425, 108],
  [366.5, 574, 128],
  [394, 425, 108]
], u = 180 / Math.PI;
function R(t, e, n, r) {
  if (e.length <= 359 || !(n > 0) || !(r > 0)) return;
  const i = n, M = r, f = [], h = [];
  for (let s = 0; s < D.length; s++) {
    const a = D[s], o = e[O[s]];
    if (!o) return;
    f.push(a[0], a[1], a[2]), h.push(o.x * i, o.y * M);
  }
  const y = t.matFromArray(6, 3, t.CV_64F, f), _ = t.matFromArray(6, 2, t.CV_64F, h), p = t.matFromArray(3, 3, t.CV_64F, [i, 0, i / 2, 0, i, M / 2, 0, 0, 1]), A = t.matFromArray(4, 1, t.CV_64F, [0, 0, 0, 0]), c = new t.Mat(), g = new t.Mat(), l = new t.Mat();
  try {
    if (!t.solvePnP(y, _, p, A, c, g)) return;
    t.Rodrigues(c, l);
    const a = l.data64F, o = a[0], d = a[3], E = a[6], F = a[7], P = a[8], w = Math.atan2(F, P) * u, C = Math.atan2(-E, Math.sqrt(o * o + d * d)) * u, I = Math.atan2(d, o) * u;
    return { x: w, y: C, z: I };
  } finally {
    y.delete(), _.delete(), p.delete(), A.delete(), c.delete(), g.delete(), l.delete();
  }
}
let m = null;
function H() {
  return m || (m = import("./DOXKBKHK.js").then(function(t) {
    return t.o;
  }).then((t) => {
    const e = t.default ?? t;
    return new Promise((n) => {
      e && e.Mat ? n(e) : e.onRuntimeInitialized = () => n(e);
    });
  })), m;
}
self.onmessage = async (t) => {
  const e = t.data;
  if (e.type === "estimate")
    try {
      const n = await H(), r = R(n, e.landmarks, e.frameWidthPx, e.frameHeightPx);
      self.postMessage({ type: "result", id: e.id, headEulerAngle: r });
    } catch (n) {
      self.postMessage({ type: "result", id: e.id }), console.warn("[HeadPoseEstimatorWorker] estimate failed:", n);
    }
};
