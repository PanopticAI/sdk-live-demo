let x;
async function C(a) {
  if (a.stream)
    x = a.stream.getReader();
  else if (a.track)
    x = new MediaStreamTrackProcessor({ track: a.track }).readable.getReader();
  else
    return { error: "No stream or track provided" };
  return {};
}
async function F(a, t) {
  const s = (M) => {
    const v = { error: M };
    self.postMessage({ result: v, hash: t });
  }, { croppingRegion: f, rotationDegrees: e } = a, w = performance.now();
  if (!x)
    return s("Reader is not initialized");
  const d = await x.read();
  if (!d)
    return s("Stream reader is undefined");
  if (d.done)
    return s("Stream reader is done");
  const { value: r } = d;
  if (!r)
    return s("Frame is null");
  const m = performance.now(), h = await createImageBitmap(r), c = r.timestamp, l = performance.now();
  if (h.width === 0 || h.height === 0)
    return h.close(), r.close(), s("Bitmap has zero width or height");
  const u = P(h, f, e), I = performance.now();
  h.close();
  const y = { data: u, timestamp: c };
  self.postMessage({ result: y, hash: t }, [u.data.buffer]), r.close();
  const k = performance.now();
  k - w > 20 && console.warn(`CaptureFrameWorker: Total: ${(k - w).toFixed(2)}ms, Bitmap: ${(l - m).toFixed(2)}ms, Crop: ${(I - l).toFixed(2)}ms`);
}
function P(a, t, s) {
  const e = new OffscreenCanvas(t.width, t.height).getContext("2d");
  if (!e)
    throw new Error("Could not get OffscreenCanvas context");
  let w, d, r, m;
  switch (s) {
    case 180:
      e.drawImage(
        a,
        t.x,
        t.y,
        t.width,
        t.height,
        0,
        0,
        t.width,
        t.height
      );
      break;
    case 270:
      e.rotate(Math.PI), e.translate(0, -t.height), e.rotate(Math.PI / 2), w = a.width - t.y - t.height, d = t.x, r = t.height, m = t.width, e.drawImage(
        a,
        w,
        d,
        r,
        m,
        0,
        0,
        t.height,
        t.width
      );
      break;
    case 0:
      e.translate(t.width, t.height), e.rotate(Math.PI), e.drawImage(
        a,
        a.width - t.x - t.width,
        a.height - t.y - t.height,
        t.width,
        t.height,
        0,
        0,
        t.width,
        t.height
      );
      break;
    case 90:
      e.translate(t.width, 0), e.rotate(Math.PI / 2), w = a.width - t.y - t.height, d = t.x, r = t.height, m = t.width, e.drawImage(
        a,
        w,
        d,
        r,
        m,
        0,
        0,
        t.height,
        t.width
      );
      break;
    default:
      const h = s * Math.PI / 180;
      e.translate(t.width / 2, t.height / 2), e.rotate(-h);
      const c = Math.cos(h), l = Math.sin(h), u = -t.x * c - t.y * l - t.width / 2, I = t.x * l - t.y * c - t.height / 2;
      e.drawImage(a, u, I);
      break;
  }
  return e.getImageData(0, 0, t.width, t.height);
}
self.onmessage = async (a) => {
  const { inputData: t, hash: s } = a.data, { type: f } = t;
  if (f === "start") {
    const e = await C(t);
    self.postMessage({ result: e, hash: s });
  } else f === "read" && F(t, s);
};
