function b(o, t) {
  if (o === void 0)
    return;
  const { data: s, width: n, height: a } = o, u = [], x = [];
  for (let r = 0; r < t; r++)
    for (let c = 0; c < t; c++) {
      const h = Math.floor(c * n / t), i = Math.min(Math.floor((c + 1) * n / t), n), d = Math.floor(r * a / t), g = Math.min(Math.floor((r + 1) * a / t), a);
      x.push({ startX: h, endX: i, startY: d, endY: g });
    }
  for (const r of x) {
    const { startX: c, endX: h, startY: i, endY: d } = r, g = h - c, D = d - i, v = g * D;
    if (v === 0) {
      const e = (i * n + c) * 4, l = s[e], f = s[e + 1], Y = s[e + 2], [m, M, p] = z(l, f, Y);
      u.push([m, M, p]);
      continue;
    }
    let X = 0, y = 0, w = 0;
    for (let e = i; e < d; e++)
      for (let l = c; l < h; l++) {
        const f = (e * n + l) * 4, Y = s[f], m = s[f + 1], M = s[f + 2], [p, U, V] = z(Y, m, M);
        X += p, y += U, w += V;
      }
    const I = X / v, N = y / v, T = w / v;
    u.push([I, N, T]);
  }
  return u;
}
function z(o, t, s) {
  const n = 0.299 * o + 0.587 * t + 0.114 * s, a = -0.14713 * o - 0.28886 * t + 0.436 * s, u = 0.615 * o - 0.51499 * t - 0.10001 * s;
  return [n, a, u];
}
function k(o) {
  const { imageData: t, size: s } = o;
  return b(t, s);
}
self.onmessage = (o) => {
  const { inputData: t, hash: s } = o.data, n = k(t);
  self.postMessage({ result: n, hash: s });
};
