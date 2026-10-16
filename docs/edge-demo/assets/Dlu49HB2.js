function C(o) {
  const { image: t, facebox: e } = o;
  let a = e.width * t.width, n = e.height * t.height, w = (e.xCenter - e.width / 2) * t.width, f = (e.yCenter - e.height / 2) * t.height;
  n = n * 0.7;
  const c = new OffscreenCanvas(t.width, t.height), g = c.getContext("2d");
  g == null || g.putImageData(t, 0, 0);
  const i = new OffscreenCanvas(a, n), r = i.getContext("2d");
  r.drawImage(c, w, f, a, n, 0, 0, a, n);
  let s = r.getImageData(0, 0, i.width, i.height).data, d = 0, l = 0;
  for (let h = 0; h < s.length; h += 4)
    d += Math.max(s[h], s[h + 1], s[h + 2]), l++;
  return d / l;
}
self.onmessage = (o) => {
  const { inputData: t, hash: e } = o.data, a = C(t);
  self.postMessage({ result: a, hash: e });
};
