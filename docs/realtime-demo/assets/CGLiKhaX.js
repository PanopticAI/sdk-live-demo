function y(a, t) {
  if (a === void 0)
    return;
  const { data: o, width: s, height: d } = a, u = [], x = [];
  for (let r = 0; r < t; r++)
    for (let e = 0; e < t; e++) {
      const l = Math.floor(e * s / t), c = Math.min(Math.floor((e + 1) * s / t), s), h = Math.floor(r * d / t), g = Math.min(Math.floor((r + 1) * d / t), d);
      x.push({ startX: l, endX: c, startY: h, endY: g });
    }
  for (const r of x) {
    const { startX: e, endX: l, startY: c, endY: h } = r, g = l - e, v = h - c, f = g * v;
    if (f === 0) {
      const n = (c * s + e) * 4;
      u.push([o[n], o[n + 1], o[n + 2]]);
      continue;
    }
    let m = 0, p = 0, M = 0;
    for (let n = c; n < h; n++) {
      const I = (n * s + e) * 4, R = (n * s + l) * 4;
      for (let i = I; i < R; i += 4)
        m += o[i], p += o[i + 1], M += o[i + 2];
    }
    const w = m / f, X = p / f, Y = M / f;
    u.push([w, X, Y]);
  }
  return u;
}
function z(a) {
  const { imageData: t, size: o } = a;
  return y(t, o);
}
self.onmessage = (a) => {
  const { inputData: t, hash: o } = a.data, s = z(t);
  self.postMessage({ result: s, hash: o });
};
