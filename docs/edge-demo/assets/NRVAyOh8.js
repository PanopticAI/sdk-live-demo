function h(t) {
  let n = 0, r = 0, o = 0, e = 0;
  for (let s = 0; s < t.height; s++)
    for (let l = 0; l < t.width; l++) {
      let u = l * s * 4, d = t.data[u], N = t.data[u + 1], a = t.data[u + 2];
      (d !== 0 || N !== 0 || a !== 0) && (n += d, r += N, o += a, e++);
    }
  if (e === 0)
    return;
  const i = n / e, f = r / e, c = o / e;
  if (!(isNaN(i) || isNaN(f) || isNaN(c)))
    return [i, f, c];
}
function b(t) {
  return h(t);
}
self.onmessage = (t) => {
  const { inputData: n, hash: r } = t.data, o = b(n);
  self.postMessage({ result: o, hash: r });
};
