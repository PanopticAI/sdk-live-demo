async function u(t) {
  if (t instanceof ImageBitmap) {
    const r = new OffscreenCanvas(t.width, t.height).getContext("2d");
    if (!r)
      throw new Error("Failed to get 2D context for ImageBitmap conversion");
    return r.drawImage(t, 0, 0), r.getImageData(0, 0, t.width, t.height);
  }
  return t;
}
function I(t, n) {
  var o;
  const { x: r, y: a, w: s, h: e } = n, f = new OffscreenCanvas(t.width, t.height);
  (o = f.getContext("2d")) == null || o.putImageData(t, 0, 0);
  const d = new OffscreenCanvas(s, e).getContext("2d");
  return d.drawImage(f, r, a, s, e, 0, 0, s, e), d.getImageData(0, 0, s, e);
}
function C(t, n) {
  var p;
  function r(i, c) {
    if (c.length === 0)
      throw new Error("No polygon points provided");
    let h = c[0].x, l = c[0].y, y = c[0].x, x = c[0].y;
    for (let m = 1; m < c.length; m++) {
      const g = c[m];
      g.x < h && (h = g.x), g.y < l && (l = g.y), g.x > y && (y = g.x), g.y > x && (x = g.y);
    }
    return {
      x: h * i.width,
      y: l * i.height,
      w: (y - h) * i.width,
      h: (x - l) * i.height
    };
  }
  const { x: a, y: s, w: e, h: f } = r(t, n), w = new OffscreenCanvas(t.width, t.height);
  (p = w.getContext("2d")) == null || p.putImageData(t, 0, 0);
  const o = new OffscreenCanvas(e, f).getContext("2d");
  o.beginPath();
  for (let i = 0; i < n.length; i++) {
    const c = n[i], h = (c.x - a / t.width) * (t.width / e) * e, l = (c.y - s / t.height) * (t.height / f) * f;
    i === 0 ? o.moveTo(h, l) : o.lineTo(h, l);
  }
  return o.closePath(), o.clip(), o.drawImage(w, a, s, e, f, 0, 0, e, f), o.getImageData(0, 0, e, f);
}
async function v(t) {
  if (t.type === "batch") {
    const { videoFrame: n, tasks: r } = t, a = [], s = await u(n);
    for (const e of r)
      e.type === "rect" && e.rect ? a.push({
        id: e.id,
        data: I(s, e.rect)
      }) : e.type === "polygon" && e.normalizedPoints && a.push({
        id: e.id,
        data: C(s, e.normalizedPoints)
      });
    return n instanceof ImageBitmap && n.close(), a;
  }
  if (t.type === "rect") {
    const { videoFrame: n, rect: r } = t, a = await u(n), s = I(a, r);
    return n instanceof ImageBitmap && n.close(), s;
  } else if (t.type === "polygon") {
    const { videoFrame: n, normalizedPoints: r } = t, a = await u(n), s = C(a, r);
    return n instanceof ImageBitmap && n.close(), s;
  }
  throw new Error(`Unknown worker input type: ${t.type}`);
}
self.onmessage = async (t) => {
  const { inputData: n, hash: r } = t.data;
  try {
    const a = await v(n), s = [];
    Array.isArray(a) ? a.forEach((e) => {
      e.data && e.data.data && e.data.data.buffer && s.push(e.data.data.buffer);
    }) : a.data && a.data.buffer && s.push(a.data.buffer), self.postMessage({ result: a, hash: r }, s);
  } catch (a) {
    console.error(`[JSROIExtractorWorker] Error processing message ${r}:`, a), self.postMessage({
      error: a instanceof Error ? a.message : String(a),
      hash: r
    });
  }
};
