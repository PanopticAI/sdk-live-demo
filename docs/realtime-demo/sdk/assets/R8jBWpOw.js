function b(t) {
  let o = 0, e = 0, s = 0, n = 0;
  for (let c = 0; c < t.height; c++)
    for (let i = 0; i < t.width; i++) {
      let f = i * c * 4, d = t.data[f], N = t.data[f + 1], a = t.data[f + 2];
      (d !== 0 || N !== 0 || a !== 0) && (o += d, e += N, s += a, n++);
    }
  if (n === 0)
    return;
  const r = o / n, l = e / n, u = s / n;
  if (!(isNaN(r) || isNaN(l) || isNaN(u)))
    return [r, l, u];
}
function h(t) {
  const o = b(t);
  if (!o)
    return null;
  const [e, s, n] = o, r = 0.299 * e + 0.587 * s + 0.114 * n, l = -0.14713 * e - 0.28886 * s + 0.436 * n, u = 0.615 * e - 0.51499 * s - 0.10001 * n;
  return [r, l, u];
}
self.onmessage = (t) => {
  const { inputData: o, hash: e } = t.data, s = h(o);
  self.postMessage({ result: s, hash: e });
};
