var fn = typeof self < "u" ? self : {};
function ei(e, t) {
  e: {
    for (var r = ["CLOSURE_FLAGS"], n = fn, s = 0; s < r.length; s++) if ((n = n[r[s]]) == null) {
      r = null;
      break e;
    }
    r = n;
  }
  return (e = r && r[e]) != null ? e : t;
}
function Je() {
  throw Error("Invalid UTF8");
}
function es(e, t) {
  return t = String.fromCharCode.apply(null, t), e == null ? t : e + t;
}
let Yt, Dr;
const fa = typeof TextDecoder < "u";
let da;
const pa = typeof TextEncoder < "u";
function ti(e) {
  if (pa) e = (da || (da = new TextEncoder())).encode(e);
  else {
    let r = 0;
    const n = new Uint8Array(3 * e.length);
    for (let s = 0; s < e.length; s++) {
      var t = e.charCodeAt(s);
      if (128 > t) n[r++] = t;
      else {
        if (2048 > t) n[r++] = t >> 6 | 192;
        else {
          if (55296 <= t && 57343 >= t) {
            if (56319 >= t && s < e.length) {
              const i = e.charCodeAt(++s);
              if (56320 <= i && 57343 >= i) {
                t = 1024 * (t - 55296) + i - 56320 + 65536, n[r++] = t >> 18 | 240, n[r++] = t >> 12 & 63 | 128, n[r++] = t >> 6 & 63 | 128, n[r++] = 63 & t | 128;
                continue;
              }
              s--;
            }
            t = 65533;
          }
          n[r++] = t >> 12 | 224, n[r++] = t >> 6 & 63 | 128;
        }
        n[r++] = 63 & t | 128;
      }
    }
    e = r === n.length ? n : n.subarray(0, r);
  }
  return e;
}
var Ft, ri = ei(610401301, !1), dn = ei(572417392, !0);
const ts = fn.navigator;
function Yr(e) {
  return !!ri && !!Ft && Ft.brands.some((({ brand: t }) => t && t.indexOf(e) != -1));
}
function le(e) {
  var t;
  return (t = fn.navigator) && (t = t.userAgent) || (t = ""), t.indexOf(e) != -1;
}
function je() {
  return !!ri && !!Ft && 0 < Ft.brands.length;
}
function Br() {
  return je() ? Yr("Chromium") : (le("Chrome") || le("CriOS")) && !(!je() && le("Edge")) || le("Silk");
}
Ft = ts && ts.userAgentData || null;
var ga = !je() && (le("Trident") || le("MSIE"));
!le("Android") || Br(), Br(), le("Safari") && (Br() || !je() && le("Coast") || !je() && le("Opera") || !je() && le("Edge") || (je() ? Yr("Microsoft Edge") : le("Edg/")) || je() && Yr("Opera"));
var ni = {}, bt = null;
function ma(e) {
  var t = e.length, r = 3 * t / 4;
  r % 3 ? r = Math.floor(r) : "=.".indexOf(e[t - 1]) != -1 && (r = "=.".indexOf(e[t - 2]) != -1 ? r - 2 : r - 1);
  var n = new Uint8Array(r), s = 0;
  return (function(i, o) {
    function c(R) {
      for (; a < i.length; ) {
        var T = i.charAt(a++), b = bt[T];
        if (b != null) return b;
        if (!/^[\s\xa0]*$/.test(T)) throw Error("Unknown base64 encoding at char: " + T);
      }
      return R;
    }
    si();
    for (var a = 0; ; ) {
      var u = c(-1), l = c(0), y = c(64), d = c(64);
      if (d === 64 && u === -1) break;
      o(u << 2 | l >> 4), y != 64 && (o(l << 4 & 240 | y >> 2), d != 64 && o(y << 6 & 192 | d));
    }
  })(e, (function(i) {
    n[s++] = i;
  })), s !== r ? n.subarray(0, s) : n;
}
function si() {
  if (!bt) {
    bt = {};
    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"], r = 0; 5 > r; r++) {
      var n = e.concat(t[r].split(""));
      ni[r] = n;
      for (var s = 0; s < n.length; s++) {
        var i = n[s];
        bt[i] === void 0 && (bt[i] = s);
      }
    }
  }
}
var ii = typeof Uint8Array < "u", oi = !ga && typeof btoa == "function";
function rs(e) {
  if (!oi) {
    var t;
    t === void 0 && (t = 0), si(), t = ni[t];
    var r = Array(Math.floor(e.length / 3)), n = t[64] || "";
    let a = 0, u = 0;
    for (; a < e.length - 2; a += 3) {
      var s = e[a], i = e[a + 1], o = e[a + 2], c = t[s >> 2];
      s = t[(3 & s) << 4 | i >> 4], i = t[(15 & i) << 2 | o >> 6], o = t[63 & o], r[u++] = c + s + i + o;
    }
    switch (c = 0, o = n, e.length - a) {
      case 2:
        o = t[(15 & (c = e[a + 1])) << 2] || n;
      case 1:
        e = e[a], r[u] = t[e >> 2] + t[(3 & e) << 4 | c >> 4] + o + n;
    }
    return r.join("");
  }
  for (t = "", r = 0, n = e.length - 10240; r < n; ) t += String.fromCharCode.apply(null, e.subarray(r, r += 10240));
  return t += String.fromCharCode.apply(null, r ? e.subarray(r) : e), btoa(t);
}
const ns = /[-_.]/g, ya = { "-": "+", _: "/", ".": "=" };
function va(e) {
  return ya[e] || "";
}
function ai(e) {
  if (!oi) return ma(e);
  ns.test(e) && (e = e.replace(ns, va)), e = atob(e);
  const t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
  return t;
}
function wr(e) {
  return ii && e != null && e instanceof Uint8Array;
}
let _a;
function Tr() {
  return _a || (_a = new Uint8Array(0));
}
var ot = {};
let wa;
function ci(e) {
  if (e !== ot) throw Error("illegal external caller");
}
function at() {
  return wa || (wa = new Ve(null, ot));
}
function pn(e) {
  ci(ot);
  var t = e.Z;
  return (t = t == null || wr(t) ? t : typeof t == "string" ? ai(t) : null) == null ? t : e.Z = t;
}
var Ve = class {
  constructor(e, t) {
    if (ci(t), this.Z = e, e != null && e.length === 0) throw Error("ByteString should be constructed with non-empty values");
  }
  wa() {
    const e = pn(this);
    return e ? new Uint8Array(e) : Tr();
  }
};
function ui(e, t) {
  return Error(`Invalid wire type: ${e} (at position ${t})`);
}
function gn() {
  return Error("Failed to read varint, encoding is invalid.");
}
function hi(e, t) {
  return Error(`Tried to read past the end of the data ${t} > ${e}`);
}
function li(e) {
  return e.length == 0 ? at() : new Ve(e, ot);
}
function mn(e) {
  if (typeof e == "string") return { buffer: ai(e), L: !1 };
  if (Array.isArray(e)) return { buffer: new Uint8Array(e), L: !1 };
  if (e.constructor === Uint8Array) return { buffer: e, L: !1 };
  if (e.constructor === ArrayBuffer) return { buffer: new Uint8Array(e), L: !1 };
  if (e.constructor === Ve) return { buffer: pn(e) || Tr(), L: !0 };
  if (e instanceof Uint8Array) return { buffer: new Uint8Array(e.buffer, e.byteOffset, e.byteLength), L: !1 };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function yn() {
  return typeof BigInt == "function";
}
var $r = !dn;
let ss = !dn;
const Ta = typeof Uint8Array.prototype.slice == "function";
let fi, A = 0, G = 0;
function et(e) {
  const t = 0 > e;
  let r = (e = Math.abs(e)) >>> 0;
  if (e = Math.floor((e - r) / 4294967296), t) {
    const [n, s] = wn(r, e);
    e = s, r = n;
  }
  A = r >>> 0, G = e >>> 0;
}
function vn(e) {
  const t = fi || (fi = new DataView(new ArrayBuffer(8)));
  t.setFloat32(0, +e, !0), G = 0, A = t.getUint32(0, !0);
}
function Kr(e, t) {
  return 4294967296 * t + (e >>> 0);
}
function _n(e, t) {
  const r = 2147483648 & t;
  return r && (t = ~t >>> 0, (e = 1 + ~e >>> 0) == 0 && (t = t + 1 >>> 0)), e = Kr(e, t), r ? -e : e;
}
function ar(e, t) {
  if (e >>>= 0, 2097151 >= (t >>>= 0)) var r = "" + (4294967296 * t + e);
  else yn() ? r = "" + (BigInt(t) << BigInt(32) | BigInt(e)) : (e = (16777215 & e) + 6777216 * (r = 16777215 & (e >>> 24 | t << 8)) + 6710656 * (t = t >> 16 & 65535), r += 8147497 * t, t *= 2, 1e7 <= e && (r += Math.floor(e / 1e7), e %= 1e7), 1e7 <= r && (t += Math.floor(r / 1e7), r %= 1e7), r = t + is(r) + is(e));
  return r;
}
function is(e) {
  return e = String(e), "0000000".slice(e.length) + e;
}
function di() {
  var e = A, t = G;
  if (2147483648 & t) if (yn()) e = "" + (BigInt(0 | t) << BigInt(32) | BigInt(e >>> 0));
  else {
    const [r, n] = wn(e, t);
    e = "-" + ar(r, n);
  }
  else e = ar(e, t);
  return e;
}
function Er(e) {
  if (16 > e.length) et(Number(e));
  else if (yn()) e = BigInt(e), A = Number(e & BigInt(4294967295)) >>> 0, G = Number(e >> BigInt(32) & BigInt(4294967295));
  else {
    const t = +(e[0] === "-");
    G = A = 0;
    const r = e.length;
    for (let n = t, s = (r - t) % 6 + t; s <= r; n = s, s += 6) {
      const i = Number(e.slice(n, s));
      G *= 1e6, A = 1e6 * A + i, 4294967296 <= A && (G += Math.trunc(A / 4294967296), G >>>= 0, A >>>= 0);
    }
    if (t) {
      const [n, s] = wn(A, G);
      A = n, G = s;
    }
  }
}
function wn(e, t) {
  return t = ~t, e ? e = 1 + ~e : t += 1, [e, t];
}
function Tn(e, t) {
  let r, n = 0, s = 0, i = 0;
  const o = e.h;
  let c = e.g;
  do
    r = o[c++], n |= (127 & r) << i, i += 7;
  while (32 > i && 128 & r);
  for (32 < i && (s |= (127 & r) >> 4), i = 3; 32 > i && 128 & r; i += 7) r = o[c++], s |= (127 & r) << i;
  if (tt(e, c), 128 > r) return t(n >>> 0, s >>> 0);
  throw gn();
}
function En(e) {
  let t = 0, r = e.g;
  const n = r + 10, s = e.h;
  for (; r < n; ) {
    const i = s[r++];
    if (t |= i, (128 & i) == 0) return tt(e, r), !!(127 & t);
  }
  throw gn();
}
function ze(e) {
  const t = e.h;
  let r = e.g, n = t[r++], s = 127 & n;
  if (128 & n && (n = t[r++], s |= (127 & n) << 7, 128 & n && (n = t[r++], s |= (127 & n) << 14, 128 & n && (n = t[r++], s |= (127 & n) << 21, 128 & n && (n = t[r++], s |= n << 28, 128 & n && 128 & t[r++] && 128 & t[r++] && 128 & t[r++] && 128 & t[r++] && 128 & t[r++]))))) throw gn();
  return tt(e, r), s;
}
function We(e) {
  return ze(e) >>> 0;
}
function qr(e) {
  var t = e.h;
  const r = e.g, n = t[r], s = t[r + 1], i = t[r + 2];
  return t = t[r + 3], tt(e, e.g + 4), (n << 0 | s << 8 | i << 16 | t << 24) >>> 0;
}
function Jr(e) {
  var t = qr(e);
  e = 2 * (t >> 31) + 1;
  const r = t >>> 23 & 255;
  return t &= 8388607, r == 255 ? t ? NaN : 1 / 0 * e : r == 0 ? e * Math.pow(2, -149) * t : e * Math.pow(2, r - 150) * (t + Math.pow(2, 23));
}
function Ea(e) {
  return ze(e);
}
function Nr(e, t, { aa: r = !1 } = {}) {
  e.aa = r, t && (t = mn(t), e.h = t.buffer, e.m = t.L, e.j = 0, e.l = e.h.length, e.g = e.j);
}
function tt(e, t) {
  if (e.g = t, t > e.l) throw hi(e.l, t);
}
function pi(e, t) {
  if (0 > t) throw Error(`Tried to read a negative byte length: ${t}`);
  const r = e.g, n = r + t;
  if (n > e.l) throw hi(t, e.l - r);
  return e.g = n, r;
}
function gi(e, t) {
  if (t == 0) return at();
  var r = pi(e, t);
  return e.aa && e.m ? r = e.h.subarray(r, r + t) : (e = e.h, r = r === (t = r + t) ? Tr() : Ta ? e.slice(r, t) : new Uint8Array(e.subarray(r, t))), li(r);
}
var os = [];
function mi(e) {
  var t = e.g;
  if (t.g == t.l) return !1;
  e.l = e.g.g;
  var r = We(e.g);
  if (t = r >>> 3, !(0 <= (r &= 7) && 5 >= r)) throw ui(r, e.l);
  if (1 > t) throw Error(`Invalid field number: ${t} (at position ${e.l})`);
  return e.m = t, e.h = r, !0;
}
function Zt(e) {
  switch (e.h) {
    case 0:
      e.h != 0 ? Zt(e) : En(e.g);
      break;
    case 1:
      tt(e = e.g, e.g + 8);
      break;
    case 2:
      if (e.h != 2) Zt(e);
      else {
        var t = We(e.g);
        tt(e = e.g, e.g + t);
      }
      break;
    case 5:
      tt(e = e.g, e.g + 4);
      break;
    case 3:
      for (t = e.m; ; ) {
        if (!mi(e)) throw Error("Unmatched start-group tag: stream EOF");
        if (e.h == 4) {
          if (e.m != t) throw Error("Unmatched end-group tag");
          break;
        }
        Zt(e);
      }
      break;
    default:
      throw ui(e.h, e.l);
  }
}
function Bt(e, t, r) {
  const n = e.g.l, s = We(e.g), i = e.g.g + s;
  let o = i - n;
  if (0 >= o && (e.g.l = i, r(t, e, void 0, void 0, void 0), o = i - e.g.g), o) throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s - o} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return e.g.g = i, e.g.l = n, t;
}
function bn(e) {
  var t = We(e.g), r = pi(e = e.g, t);
  if (e = e.h, fa) {
    var n, s = e;
    (n = Dr) || (n = Dr = new TextDecoder("utf-8", { fatal: !0 })), t = r + t, s = r === 0 && t === s.length ? s : s.subarray(r, t);
    try {
      var i = n.decode(s);
    } catch (c) {
      if (Yt === void 0) {
        try {
          n.decode(new Uint8Array([128]));
        } catch {
        }
        try {
          n.decode(new Uint8Array([97])), Yt = !0;
        } catch {
          Yt = !1;
        }
      }
      throw !Yt && (Dr = void 0), c;
    }
  } else {
    t = (i = r) + t, r = [];
    let c, a = null;
    for (; i < t; ) {
      var o = e[i++];
      128 > o ? r.push(o) : 224 > o ? i >= t ? Je() : (c = e[i++], 194 > o || (192 & c) != 128 ? (i--, Je()) : r.push((31 & o) << 6 | 63 & c)) : 240 > o ? i >= t - 1 ? Je() : (c = e[i++], (192 & c) != 128 || o === 224 && 160 > c || o === 237 && 160 <= c || (192 & (n = e[i++])) != 128 ? (i--, Je()) : r.push((15 & o) << 12 | (63 & c) << 6 | 63 & n)) : 244 >= o ? i >= t - 2 ? Je() : (c = e[i++], (192 & c) != 128 || c - 144 + (o << 28) >> 30 != 0 || (192 & (n = e[i++])) != 128 || (192 & (s = e[i++])) != 128 ? (i--, Je()) : (o = (7 & o) << 18 | (63 & c) << 12 | (63 & n) << 6 | 63 & s, o -= 65536, r.push(55296 + (o >> 10 & 1023), 56320 + (1023 & o)))) : Je(), 8192 <= r.length && (a = es(a, r), r.length = 0);
    }
    i = es(a, r);
  }
  return i;
}
function yi(e) {
  const t = We(e.g);
  return gi(e.g, t);
}
function br(e, t, r) {
  var n = We(e.g);
  for (n = e.g.g + n; e.g.g < n; ) r.push(t(e.g));
}
var $t = [];
function as(e) {
  return e ? /^\d+$/.test(e) ? (Er(e), new cs(A, G)) : null : ba || (ba = new cs(0, 0));
}
var cs = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let ba;
function us(e) {
  return e ? /^-?\d+$/.test(e) ? (Er(e), new hs(A, G)) : null : Aa || (Aa = new hs(0, 0));
}
var hs = class {
  constructor(e, t) {
    this.h = e >>> 0, this.g = t >>> 0;
  }
};
let Aa;
function cr(e, t, r) {
  for (; 0 < r || 127 < t; ) e.g.push(127 & t | 128), t = (t >>> 7 | r << 25) >>> 0, r >>>= 7;
  e.g.push(t);
}
function Nt(e, t) {
  for (; 127 < t; ) e.g.push(127 & t | 128), t >>>= 7;
  e.g.push(t);
}
function Ar(e, t) {
  if (0 <= t) Nt(e, t);
  else {
    for (let r = 0; 9 > r; r++) e.g.push(127 & t | 128), t >>= 7;
    e.g.push(1);
  }
}
function Ot(e, t) {
  e.g.push(t >>> 0 & 255), e.g.push(t >>> 8 & 255), e.g.push(t >>> 16 & 255), e.g.push(t >>> 24 & 255);
}
function ct(e, t) {
  t.length !== 0 && (e.l.push(t), e.h += t.length);
}
function me(e, t, r) {
  Nt(e.g, 8 * t + r);
}
function An(e, t) {
  return me(e, t, 2), t = e.g.end(), ct(e, t), t.push(e.h), t;
}
function xn(e, t) {
  var r = t.pop();
  for (r = e.h + e.g.length() - r; 127 < r; ) t.push(127 & r | 128), r >>>= 7, e.h++;
  t.push(r), e.h++;
}
function xr(e, t, r) {
  me(e, t, 2), Nt(e.g, r.length), ct(e, e.g.end()), ct(e, r);
}
function Zr(e, t, r, n) {
  r != null && (t = An(e, t), n(r, e), xn(e, t));
}
class pt {
  constructor(t, r, n, s) {
    this.g = t, this.h = r, this.l = n, this.qa = s;
  }
}
function Z(e) {
  return Array.prototype.slice.call(e);
}
function vi(e) {
  return typeof Symbol == "function" && typeof Symbol() == "symbol" ? Symbol() : e;
}
var Le = vi(), ls = vi("0di"), kr = Le ? (e, t) => {
  e[Le] |= t;
} : (e, t) => {
  e.D !== void 0 ? e.D |= t : Object.defineProperties(e, { D: { value: t, configurable: !0, writable: !0, enumerable: !1 } });
};
function fs(e) {
  const t = U(e);
  (1 & t) != 1 && (Object.isFrozen(e) && (e = Z(e)), P(e, 1 | t));
}
var ur = Le ? (e, t) => {
  e[Le] &= ~t;
} : (e, t) => {
  e.D !== void 0 && (e.D &= ~t);
};
function H(e, t, r) {
  return r ? e | t : e & ~t;
}
var U = Le ? (e) => 0 | e[Le] : (e) => 0 | e.D, w = Le ? (e) => e[Le] : (e) => e.D, P = Le ? (e, t) => {
  e[Le] = t;
} : (e, t) => {
  e.D !== void 0 ? e.D = t : Object.defineProperties(e, { D: { value: t, configurable: !0, writable: !0, enumerable: !1 } });
};
function ds() {
  var e = [];
  return kr(e, 1), e;
}
function gt(e) {
  return kr(e, 34), e;
}
function xa(e, t) {
  P(t, -14591 & (0 | e));
}
function Qr(e, t) {
  P(t, -14557 & (34 | e));
}
function hr(e) {
  return (e = e >> 14 & 1023) === 0 ? 536870912 : e;
}
var Gt = {}, _i = {};
function ps(e) {
  return !(!e || typeof e != "object" || e.Na !== _i);
}
function kt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && e.constructor === Object;
}
let wi = !dn;
function Ti(e, t, r) {
  if (e != null) {
    if (typeof e == "string") e = e ? new Ve(e, ot) : at();
    else if (e.constructor !== Ve) if (wr(e)) e = r ? li(e) : e.length ? new Ve(new Uint8Array(e), ot) : at();
    else {
      if (!t) throw Error();
      e = void 0;
    }
  }
  return e;
}
function en(e, t, r) {
  if (!Array.isArray(e) || e.length) return !1;
  const n = U(e);
  return !!(1 & n) || !(!t || !(Array.isArray(t) ? t.includes(r) : t.has(r))) && (P(e, 1 | n), !0);
}
var Qe;
const gs = [];
function Me(e) {
  if (2 & e) throw Error();
}
P(gs, 55), Qe = Object.freeze(gs);
class lr {
  constructor(t, r, n) {
    this.l = 0, this.g = t, this.h = r, this.m = n;
  }
  next() {
    if (this.l < this.g.length) {
      const t = this.g[this.l++];
      return { done: !1, value: this.h ? this.h.call(this.m, t) : t };
    }
    return { done: !0, value: void 0 };
  }
  [Symbol.iterator]() {
    return new lr(this.g, this.h, this.m);
  }
}
var ka = {};
let Xe, Mt;
function Ei(e, t) {
  (t = Xe ? t[Xe] : void 0) && (e[Xe] = Z(t));
}
function tn(e) {
  return (e = Error(e)).__closure__error__context__984382 || (e.__closure__error__context__984382 = {}), e.__closure__error__context__984382.severity = "warning", e;
}
function Ke(e) {
  return e == null || typeof e == "number" ? e : e === "NaN" || e === "Infinity" || e === "-Infinity" ? Number(e) : void 0;
}
function bi(e) {
  return e == null || typeof e == "boolean" ? e : typeof e == "number" ? !!e : void 0;
}
Object.freeze(new class {
}()), Object.freeze(new class {
}());
const Sa = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Sr(e) {
  const t = typeof e;
  return t === "number" ? Number.isFinite(e) : t === "string" && Sa.test(e);
}
function mt(e) {
  if (e == null) return e;
  if (typeof e == "string") {
    if (!e) return;
    e = +e;
  }
  return typeof e == "number" && Number.isFinite(e) ? 0 | e : void 0;
}
function La(e) {
  if (e == null) return e;
  if (typeof e == "string") {
    if (!e) return;
    e = +e;
  }
  return typeof e == "number" && Number.isFinite(e) ? e >>> 0 : void 0;
}
function ms(e) {
  return e[0] !== "-" && (20 > e.length || e.length === 20 && 184467 > Number(e.substring(0, 6)));
}
function Ai(e) {
  return e[0] === "-" ? 20 > e.length || e.length === 20 && -922337 < Number(e.substring(0, 7)) : 19 > e.length || e.length === 19 && 922337 > Number(e.substring(0, 6));
}
function kn(e) {
  return e = Math.trunc(e), Number.isSafeInteger(e) || (et(e), e = _n(A, G)), e;
}
function Sn(e) {
  var t = Math.trunc(Number(e));
  return Number.isSafeInteger(t) ? String(t) : ((t = e.indexOf(".")) !== -1 && (e = e.substring(0, t)), Ai(e) || (Er(e), e = di()), e);
}
function fr(e) {
  return e == null ? e : Sr(e) ? typeof e == "number" ? kn(e) : Sn(e) : void 0;
}
function jt(e) {
  if (typeof e != "string") throw Error();
  return e;
}
function Vt(e) {
  if (e != null && typeof e != "string") throw Error();
  return e;
}
function It(e) {
  return e == null || typeof e == "string" ? e : void 0;
}
function Ln(e, t, r, n) {
  if (e != null && typeof e == "object" && e.W === Gt) return e;
  if (!Array.isArray(e)) return r ? 2 & n ? (e = t[ls]) ? t = e : (gt((e = new t()).s), t = t[ls] = e) : t = new t() : t = void 0, t;
  let s = r = U(e);
  return s === 0 && (s |= 32 & n), s |= 2 & n, s !== r && P(e, s), new t(e);
}
function Ra(e, t, r) {
  if (t) {
    var n = !!n;
    if (!Sr(t = e)) throw tn("int64");
    typeof t == "string" ? n = Sn(t) : n ? (n = Math.trunc(t), Number.isSafeInteger(n) ? n = String(n) : Ai(t = String(n)) ? n = t : (et(n), n = di())) : n = kn(t);
  } else n = fr(e);
  return typeof (r = (e = n) == null ? r ? 0 : void 0 : e) == "string" && (n = +r, Number.isSafeInteger(n)) ? n : r;
}
let dr, Rn, Fa;
function pr(e) {
  switch (typeof e) {
    case "boolean":
      return Rn || (Rn = [0, void 0, !0]);
    case "number":
      return 0 < e ? void 0 : e === 0 ? Fa || (Fa = [0, void 0]) : [-e, void 0];
    case "string":
      return [0, e];
    case "object":
      return e;
  }
}
function rt(e, t) {
  return xi(e, t[0], t[1]);
}
function xi(e, t, r) {
  if (e == null && (e = dr), dr = void 0, e == null) {
    var n = 96;
    r ? (e = [r], n |= 512) : e = [], t && (n = -16760833 & n | (1023 & t) << 14);
  } else {
    if (!Array.isArray(e)) throw Error();
    if (64 & (n = U(e))) return Mt && delete e[Mt], e;
    if (n |= 64, r && (n |= 512, r !== e[0])) throw Error();
    e: {
      const s = (r = e).length;
      if (s) {
        const i = s - 1;
        if (kt(r[i])) {
          if (1024 <= (t = i - (+!!(512 & (n |= 256)) - 1))) throw Error();
          n = -16760833 & n | (1023 & t) << 14;
          break e;
        }
      }
      if (t) {
        if (1024 < (t = Math.max(t, s - (+!!(512 & n) - 1)))) throw Error();
        n = -16760833 & n | (1023 & t) << 14;
      }
    }
  }
  return P(e, n), e;
}
let Oa = (function() {
  try {
    return new class extends Map {
      constructor() {
        super();
      }
    }(), !1;
  } catch {
    return !0;
  }
})();
class Gr {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.g.get(t);
  }
  set(t, r) {
    return this.g.set(t, r), this.size = this.g.size, this;
  }
  delete(t) {
    return t = this.g.delete(t), this.size = this.g.size, t;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t) {
    return this.g.has(t);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t, r) {
    return this.g.forEach(t, r);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
const Ma = Oa ? (Object.setPrototypeOf(Gr.prototype, Map.prototype), Object.defineProperties(Gr.prototype, { size: { value: 0, configurable: !0, enumerable: !0, writable: !0 } }), Gr) : class extends Map {
  constructor() {
    super();
  }
};
function Kt(e) {
  return e;
}
function jr(e) {
  if (2 & e.O) throw Error("Cannot mutate an immutable Map");
}
var de = class extends Ma {
  constructor(e, t, r = Kt, n = Kt) {
    super();
    let s = U(e);
    s |= 64, P(e, s), this.O = s, this.V = t, this.R = r || Kt, this.Y = this.V ? Ia : n || Kt;
    for (let i = 0; i < e.length; i++) {
      const o = e[i], c = r(o[0], !1, !0);
      let a = o[1];
      t ? a === void 0 && (a = null) : a = n(o[1], !1, !0, void 0, void 0, s), super.set(c, a);
    }
  }
  pa(e = ys) {
    return this.X(e);
  }
  X(e = ys) {
    const t = [], r = super.entries();
    for (var n; !(n = r.next()).done; ) (n = n.value)[0] = e(n[0]), n[1] = e(n[1]), t.push(n);
    return t;
  }
  clear() {
    jr(this), super.clear();
  }
  delete(e) {
    return jr(this), super.delete(this.R(e, !0, !1));
  }
  entries() {
    var e = this.ma();
    return new lr(e, Ca, this);
  }
  keys() {
    return this.Ma();
  }
  values() {
    var e = this.ma();
    return new lr(e, de.prototype.get, this);
  }
  forEach(e, t) {
    super.forEach(((r, n) => {
      e.call(t, this.get(n), n, this);
    }));
  }
  set(e, t) {
    return jr(this), (e = this.R(e, !0, !1)) == null ? this : t == null ? (super.delete(e), this) : super.set(e, this.Y(t, !0, !0, this.V, !1, this.O));
  }
  Ta(e) {
    const t = this.R(e[0], !1, !0);
    e = e[1], e = this.V ? e === void 0 ? null : e : this.Y(e, !1, !0, void 0, !1, this.O), super.set(t, e);
  }
  has(e) {
    return super.has(this.R(e, !1, !1));
  }
  get(e) {
    e = this.R(e, !1, !1);
    const t = super.get(e);
    if (t !== void 0) {
      var r = this.V;
      return r ? ((r = this.Y(t, !1, !0, r, this.xa, this.O)) !== t && super.set(e, r), r) : t;
    }
  }
  ma() {
    return Array.from(super.keys());
  }
  Ma() {
    return super.keys();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function Ia(e, t, r, n, s, i) {
  return e = Ln(e, n, r, i), s && (e = Lr(e)), e;
}
function ys(e) {
  return e;
}
function Ca(e) {
  return [e, this.get(e)];
}
function Fn(e, t, r, n, s, i) {
  if (e != null) {
    if (Array.isArray(e)) e = i && 2 & U(e) ? e : On(e, t, r, n !== void 0, s, i);
    else if (kt(e)) {
      const o = {};
      for (let c in e) o[c] = Fn(e[c], t, r, n, s, i);
      e = o;
    } else e = t(e, n);
    return e;
  }
}
function On(e, t, r, n, s, i) {
  const o = n || r ? U(e) : 0;
  n = n ? !!(32 & o) : void 0;
  const c = Z(e);
  for (let a = 0; a < c.length; a++) c[a] = Fn(c[a], t, r, n, s, i);
  return r && (Ei(c, e), r(o, c)), c;
}
function Pa(e) {
  return Fn(e, ki, void 0, void 0, !1, !1);
}
function ki(e) {
  return e.W === Gt ? e.toJSON() : e instanceof de ? e.pa(Pa) : (function(t) {
    switch (typeof t) {
      case "number":
        return isFinite(t) ? t : String(t);
      case "boolean":
        return t ? 1 : 0;
      case "object":
        if (t) {
          if (Array.isArray(t)) return wi || !en(t, void 0, 9999) ? t : void 0;
          if (wr(t)) return rs(t);
          if (t instanceof Ve) {
            const r = t.Z;
            return r == null ? "" : typeof r == "string" ? r : t.Z = rs(r);
          }
          if (t instanceof de) return t = t.pa(), $r || t.length !== 0 ? t : void 0;
        }
    }
    return t;
  })(e);
}
function rn(e, t, r = Qr) {
  if (e != null) {
    if (ii && e instanceof Uint8Array) return t ? e : new Uint8Array(e);
    if (Array.isArray(e)) {
      var n = U(e);
      return 2 & n ? e : (t && (t = n === 0 || !!(32 & n) && !(64 & n || !(16 & n))), t ? (P(e, -12293 & (34 | n)), e) : On(e, rn, 4 & n ? Qr : r, !0, !1, !0));
    }
    return e.W === Gt ? (r = e.s, e = 2 & (n = w(r)) ? e : Mn(e, r, n, !0)) : e instanceof de && (r = gt(e.X(rn)), e = new de(r, e.V, e.R, e.Y)), e;
  }
}
function Mn(e, t, r, n) {
  return e = e.constructor, dr = t = Si(t, r, n), t = new e(t), dr = void 0, t;
}
function Si(e, t, r) {
  const n = r || 2 & t ? Qr : xa, s = !!(32 & t);
  return e = (function(i, o, c) {
    const a = Z(i);
    var u = a.length;
    const l = 256 & o ? a[u - 1] : void 0;
    for (u += l ? -1 : 0, o = 512 & o ? 1 : 0; o < u; o++) a[o] = c(a[o]);
    if (l) {
      o = a[o] = {};
      for (const y in l) o[y] = c(l[y]);
    }
    return Ei(a, i), a;
  })(e, t, ((i) => rn(i, s, n))), kr(e, 32 | (r ? 2 : 0)), e;
}
function Lr(e) {
  const t = e.s, r = w(t);
  return 2 & r ? Mn(e, t, r, !1) : e;
}
function ut(e, t) {
  return Ie(e = e.s, w(e), t);
}
function Ie(e, t, r, n) {
  if (r === -1) return null;
  if (r >= hr(t)) {
    if (256 & t) return e[e.length - 1][r];
  } else {
    var s = e.length;
    if (n && 256 & t && (n = e[s - 1][r]) != null) return n;
    if ((t = r + (+!!(512 & t) - 1)) < s) return e[t];
  }
}
function x(e, t, r, n) {
  const s = e.s;
  let i = w(s);
  return Me(i), k(s, i, t, r, n), e;
}
function k(e, t, r, n, s) {
  var i = hr(t);
  if (r >= i || s) {
    if (s = t, 256 & t) i = e[e.length - 1];
    else {
      if (n == null) return s;
      i = e[i + (+!!(512 & t) - 1)] = {}, s |= 256;
    }
    return i[r] = n, s !== t && P(e, s), s;
  }
  return e[r + (+!!(512 & t) - 1)] = n, 256 & t && r in (e = e[e.length - 1]) && delete e[r], t;
}
function yt(e, t, r, n, s) {
  var i = 2 & t;
  let o = Ie(e, t, r, s);
  Array.isArray(o) || (o = Qe);
  const c = !(2 & n);
  n = !(1 & n);
  const a = !!(32 & t);
  let u = U(o);
  return u !== 0 || !a || i || c ? 1 & u || (u |= 1, P(o, u)) : (u |= 33, P(o, u)), i ? (e = !1, 2 & u || (gt(o), e = !!(4 & u)), (n || e) && Object.freeze(o)) : (i = !!(2 & u) || !!(2048 & u), n && i ? (o = Z(o), n = 1, a && !c && (n |= 32), P(o, n), k(e, t, r, o, s)) : c && 32 & u && !i && ur(o, 32)), o;
}
function Qt(e, t) {
  e = e.s;
  let r = w(e);
  const n = Ie(e, r, t), s = Ke(n);
  return s != null && s !== n && k(e, r, t, s), s;
}
function Li(e) {
  e = e.s;
  let t = w(e);
  const r = Ie(e, t, 1), n = Ti(r, !0, !!(34 & t));
  return n != null && n !== r && k(e, t, 1, n), n;
}
function it(e, t, r) {
  e = e.s;
  let n = w(e);
  const s = 2 & n ? 1 : 2;
  let i = Ri(e, n, t);
  var o = U(i);
  if (!(4 & o)) {
    (4 & o || Object.isFrozen(i)) && (i = Z(i), o = nt(o, n, !1), n = k(e, n, t, i));
    var c = 0;
    let a = 0;
    for (; c < i.length; c++) {
      const u = r(i[c]);
      u != null && (i[a++] = u);
    }
    a < c && (i.length = a), o = H(o = Fi(o, n, !1), 20, !0), o = H(o, 4096, !1), o = H(o, 8192, !1), P(i, o), 2 & o && Object.freeze(i);
  }
  return St(o) || (r = o, (o = (c = s === 1) ? H(o, 2, !0) : H(o, 32, !1)) !== r && P(i, o), c && Object.freeze(i)), s === 2 && St(o) && (i = Z(i), o = nt(o, n, !1), P(i, o), k(e, n, t, i)), i;
}
function Ri(e, t, r) {
  return e = Ie(e, t, r), Array.isArray(e) ? e : Qe;
}
function Fi(e, t, r) {
  return e === 0 && (e = nt(e, t, r)), H(e, 1, !0);
}
function St(e) {
  return !!(2 & e) && !!(4 & e) || !!(2048 & e);
}
let Ua;
function vs() {
  return Ua ?? (Ua = new de(gt([]), void 0, void 0, void 0, ka));
}
function Oi(e) {
  e = Z(e);
  for (let t = 0; t < e.length; t++) {
    const r = e[t] = Z(e[t]);
    Array.isArray(r[1]) && (r[1] = gt(r[1]));
  }
  return e;
}
function gr(e, t, r) {
  {
    const o = e.s;
    let c = w(o);
    if (Me(c), r == null) k(o, c, t);
    else {
      var n, s = e = U(r), i = !!(2 & e) || Object.isFrozen(r);
      if ((n = !i) && (n = !1), !(4 & e)) for (e = 21, i && (r = Z(r), s = 0, e = nt(e, c, !0)), i = 0; i < r.length; i++) r[i] = jt(r[i]);
      n && (r = Z(r), s = 0, e = nt(e, c, !0)), e !== s && P(r, e), k(o, c, t, r);
    }
  }
}
function Xt(e, t, r, n) {
  const s = w(e);
  Me(s), e = yt(e, s, t, 2), n = r(n, !!(4 & (t = U(e))) && !!(4096 & t)), e.push(n);
}
function Da(e) {
  return e;
}
function Vr(e, t) {
  return In(e = e.s, w(e), mo) === t ? t : -1;
}
function In(e, t, r) {
  let n = 0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    Ie(e, t, i) != null && (n !== 0 && (t = k(e, t, n)), n = i);
  }
  return n;
}
function Cn(e, t, r, n) {
  let s = w(e);
  Me(s);
  const i = Ie(e, s, r, n);
  let o;
  if (i != null && i.W === Gt) return (t = Lr(i)) !== i && k(e, s, r, t, n), t.s;
  if (Array.isArray(i)) {
    const c = U(i);
    o = 2 & c ? Si(i, c, !1) : i, o = rt(o, t);
  } else o = rt(void 0, t);
  return o !== i && k(e, s, r, o, n), o;
}
function Mi(e, t, r, n) {
  e = e.s;
  let s = w(e);
  const i = Ie(e, s, r, n);
  return (t = Ln(i, t, !1, s)) !== i && t != null && k(e, s, r, t, n), t;
}
function _(e, t, r, n = !1) {
  if ((t = Mi(e, t, r, n)) == null) return t;
  e = e.s;
  let s = w(e);
  if (!(2 & s)) {
    const i = Lr(t);
    i !== t && k(e, s, r, t = i, n);
  }
  return t;
}
function Ii(e, t, r, n, s, i) {
  var o = !!(2 & t), c = o ? 1 : 2;
  const a = c === 1;
  c = c === 2, s = !!s, i && (i = !o), o = Ri(e, t, n);
  var u = U(o);
  const l = !!(4 & u);
  if (!l) {
    var y = o, d = t;
    const R = !!(2 & (u = Fi(u, t, s)));
    R && (d = H(d, 2, !0));
    let T = !R, b = !0, _e = 0, Tt = 0;
    for (; _e < y.length; _e++) {
      const Ge = Ln(y[_e], r, !1, d);
      if (Ge instanceof r) {
        if (!R) {
          const Ht = !!(2 & U(Ge.s));
          T && (T = !Ht), b && (b = Ht);
        }
        y[Tt++] = Ge;
      }
    }
    Tt < _e && (y.length = Tt), u = H(u, 4, !0), u = H(u, 16, b), u = H(u, 8, T), P(y, u), R && Object.freeze(y);
  }
  if (r = !!(8 & u) || a && !o.length, i && !r) {
    for (St(u) && (o = Z(o), u = nt(u, t, s), t = k(e, t, n, o)), i = o, r = u, y = 0; y < i.length; y++) (u = i[y]) !== (d = Lr(u)) && (i[y] = d);
    r = H(r, 8, !0), r = H(r, 16, !i.length), P(i, r), u = r;
  }
  return St(u) || (i = u, a ? u = H(u, !o.length || 16 & u && (!l || 32 & u) ? 2 : 2048, !0) : s || (u = H(u, 32, !1)), u !== i && P(o, u), a && Object.freeze(o)), c && St(u) && (o = Z(o), u = nt(u, t, s), P(o, u), k(e, t, n, o)), o;
}
function Be(e, t, r) {
  e = e.s;
  const n = w(e);
  return Ii(e, n, t, r, !1, !(2 & n));
}
function g(e, t, r, n, s) {
  return n == null && (n = void 0), x(e, r, n, s);
}
function Lt(e, t, r, n) {
  n == null && (n = void 0), e = e.s;
  let s = w(e);
  Me(s), (r = In(e, s, r)) && r !== t && n != null && (s = k(e, s, r)), k(e, s, t, n);
}
function nt(e, t, r) {
  return e = H(e, 2, !!(2 & t)), e = H(e, 32, !!(32 & t) && r), H(e, 2048, !1);
}
function nn(e, t, r) {
  e = e.s;
  const n = w(e);
  Me(n), e = Ii(e, n, t, 1, !0), t = r ?? new t(), e.push(t), 2 & U(t.s) ? ur(e, 8) : ur(e, 16);
}
function fe(e, t) {
  return mt(ut(e, t));
}
function pe(e, t) {
  return It(ut(e, t));
}
function Re(e) {
  return e ?? 0;
}
function Y(e, t) {
  return Re(Qt(e, t));
}
function Ct(e, t, r) {
  if (r != null && typeof r != "boolean") throw e = typeof r, Error(`Expected boolean but got ${e != "object" ? e : r ? Array.isArray(r) ? "array" : e : "null"}: ${r}`);
  x(e, t, r);
}
function Fe(e, t, r) {
  if (r != null) {
    if (typeof r != "number" || !Number.isFinite(r)) throw tn("int32");
    r |= 0;
  }
  x(e, t, r);
}
function m(e, t, r) {
  if (r != null && typeof r != "number") throw Error(`Value of float/double field must be a number, found ${typeof r}: ${r}`);
  x(e, t, r);
}
function Ee(e, t, r) {
  t.g ? t.m(e, t.g, t.h, r, !0) : t.m(e, t.h, r, !0);
}
de.prototype.toJSON = void 0, de.prototype.Na = _i;
var h = class {
  constructor(e, t) {
    this.s = xi(e, t);
  }
  toJSON() {
    return Ci(this, On(this.s, ki, void 0, void 0, !1, !1), !0);
  }
  l() {
    var e = V2;
    return e.g ? e.l(this, e.g, e.h, !0) : e.l(this, e.h, e.defaultValue, !0);
  }
  clone() {
    const e = this.s;
    return Mn(this, e, w(e), !1);
  }
  L() {
    return !!(2 & U(this.s));
  }
};
function Ci(e, t, r) {
  const n = e.constructor.A;
  var s = w(r ? e.s : t), i = hr(s), o = !1;
  if (n && wi) {
    if (!r) {
      var c;
      if ((t = Z(t)).length && kt(c = t[t.length - 1])) {
        for (o = 0; o < n.length; o++) if (n[o] >= i) {
          Object.assign(t[t.length - 1] = {}, c);
          break;
        }
      }
      o = !0;
    }
    var a;
    i = t, r = !r, e = hr(c = w(e.s)), c = +!!(512 & c) - 1;
    for (let _e = 0; _e < n.length; _e++) {
      var u = n[_e];
      if (u < e) {
        var l = i[u += c];
        l == null ? i[u] = r ? Qe : ds() : r && l !== Qe && fs(l);
      } else {
        if (!a) {
          var y = void 0;
          i.length && kt(y = i[i.length - 1]) ? a = y : i.push(a = {});
        }
        l = a[u], a[u] == null ? a[u] = r ? Qe : ds() : r && l !== Qe && fs(l);
      }
    }
  }
  if (!(a = t.length)) return t;
  let d, R;
  if (kt(y = t[a - 1])) {
    e: {
      var T = y;
      for (var b in i = {}, r = !1, T) e = T[b], Array.isArray(e) && (c = e, (!ss && en(e, n, +b) || !$r && ps(e) && e.size === 0) && (e = null), e != c && (r = !0)), e != null ? i[b] = e : r = !0;
      if (r) {
        for (let _e in i) {
          T = i;
          break e;
        }
        T = null;
      }
    }
    T != y && (d = !0), a--;
  }
  for (s = +!!(512 & s) - 1; 0 < a && ((y = t[b = a - 1]) == null || !ss && en(y, n, b - s) || !$r && ps(y) && y.size === 0); a--) R = !0;
  return (d || R) && (t = o ? t : Array.prototype.slice.call(t, 0, a), o && (t.length = a), T && t.push(T)), t;
}
function Pi(e) {
  return Array.isArray(e) ? e[0] instanceof pt ? e : [$a, e] : [e, void 0];
}
function vt(e, t) {
  if (Array.isArray(t)) {
    var r = U(t);
    if (4 & r) return t;
    for (var n = 0, s = 0; n < t.length; n++) {
      const i = e(t[n]);
      i != null && (t[s++] = i);
    }
    return s < n && (t.length = s), P(t, -12289 & (5 | r)), 2 & r && Object.freeze(t), t;
  }
}
h.prototype.W = Gt, h.prototype.toString = function() {
  return Ci(this, this.s, !1).toString();
};
const _s = Symbol();
function Pn(e) {
  let t = e[_s];
  if (!t) {
    const r = Bi(e), n = Dn(e), s = n.g;
    t = s ? (i, o) => s(i, o, n) : (i, o) => {
      for (; mi(o) && o.h != 4; ) {
        var c = o.m, a = n[c];
        if (!a) {
          var u = n.ha;
          u && (u = u[c]) && (a = n[c] = Ba(u));
        }
        a && a(o, i, c) || (c = (a = o).l, Zt(a), a.ga ? a = void 0 : (u = a.g.g - c, a.g.g = c, a = gi(a.g, u)), c = i, a && (Xe || (Xe = Symbol()), (u = c[Xe]) ? u.push(a) : c[Xe] = [a]));
      }
      r === Ui || r === Di || r.Oa || (i[Mt || (Mt = Symbol())] = r);
    }, e[_s] = t;
  }
  return t;
}
function Ba(e) {
  const t = (e = Pi(e))[0].g;
  if (e = e[1]) {
    const r = Pn(e), n = Dn(e).S;
    return (s, i, o) => t(s, i, o, n, r);
  }
  return t;
}
let Ui, Di;
const er = Symbol();
function Na(e, t, r) {
  const n = r[1];
  let s;
  if (n) {
    const i = n[er];
    s = i ? i.S : pr(n[0]), e[t] = i ?? n;
  }
  s && s === Rn ? (e.na || (e.na = [])).push(t) : r[0] && (e.oa || (e.oa = [])).push(t);
}
function ws(e, t) {
  return [e.l, !t || 0 < t[0] ? void 0 : t];
}
function Bi(e) {
  var t = e[er];
  if (t) return t;
  if (!(t = Un(e, e[er] = {}, ws, ws, Na)).oa && !t.na) {
    let r = !0;
    for (let n in t) {
      isNaN(n) || (r = !1);
      break;
    }
    r ? (t = pr(e[0]) === Rn, t = e[er] = t ? Di || (Di = { S: pr(!0) }) : Ui || (Ui = {})) : t.Oa = !0;
  }
  return t;
}
function Ga(e, t, r) {
  e[t] = r;
}
function Un(e, t, r, n, s = Ga) {
  t.S = pr(e[0]);
  let i = 0;
  var o = e[++i];
  o && o.constructor === Object && (t.ha = o, typeof (o = e[++i]) == "function" && (t.g = o, t.h = e[++i], o = e[++i]));
  const c = {};
  for (; Array.isArray(o) && typeof o[0] == "number" && 0 < o[0]; ) {
    for (var a = 0; a < o.length; a++) c[o[a]] = o;
    o = e[++i];
  }
  for (a = 1; o !== void 0; ) {
    let y;
    typeof o == "number" && (a += o, o = e[++i]);
    var u = void 0;
    if (o instanceof pt ? y = o : (y = Ka, i--), y.qa) {
      o = e[++i], u = e;
      var l = i;
      typeof o == "function" && (o = o(), u[l] = o), u = o;
    }
    for (l = a + 1, typeof (o = e[++i]) == "number" && 0 > o && (l -= o, o = e[++i]); a < l; a++) {
      const d = c[a];
      s(t, a, u ? n(y, u, d) : r(y, d));
    }
  }
  return t;
}
const Ts = Symbol();
function Ni(e) {
  let t = e[Ts];
  if (!t) {
    const r = Rr(e);
    t = (n, s) => Gi(n, s, r), e[Ts] = t;
  }
  return t;
}
const tr = Symbol();
function ja(e) {
  return e.h;
}
function Va(e, t) {
  let r, n;
  const s = e.h;
  return (i, o, c) => s(i, o, c, n || (n = Rr(t).S), r || (r = Ni(t)));
}
function Rr(e) {
  let t = e[tr];
  return t || (t = Un(e, e[tr] = {}, ja, Va), rr in e && tr in e && (e.length = 0), t);
}
const rr = Symbol();
function Xa(e, t) {
  const r = e.g;
  return t ? (n, s, i) => r(n, s, i, t) : r;
}
function za(e, t, r) {
  const n = e.g;
  let s, i;
  return (o, c, a) => n(o, c, a, i || (i = Dn(t).S), s || (s = Pn(t)), r);
}
function Dn(e) {
  let t = e[rr];
  return t || (Bi(e), t = Un(e, e[rr] = {}, Xa, za), rr in e && tr in e && (e.length = 0), t);
}
function Es(e, t) {
  var r = e[t];
  if (r) return r;
  if ((r = e.ha) && (r = r[t])) {
    var n = (r = Pi(r))[0].h;
    if (r = r[1]) {
      const s = Ni(r), i = Rr(r).S;
      r = (r = e.h) ? r(i, s) : (o, c, a) => n(o, c, a, i, s);
    } else r = n;
    return e[t] = r;
  }
}
function Gi(e, t, r) {
  for (var n = w(e), s = +!!(512 & n) - 1, i = e.length, o = 512 & n ? 1 : 0, c = i + (256 & n ? -1 : 0); o < c; o++) {
    const a = e[o];
    if (a == null) continue;
    const u = o - s, l = Es(r, u);
    l && l(t, a, u);
  }
  if (256 & n) {
    n = e[i - 1];
    for (let a in n) s = +a, Number.isNaN(s) || (i = n[a]) != null && (c = Es(r, s)) && c(t, i, s);
  }
  if (e = Xe ? e[Xe] : void 0) for (ct(t, t.g.end()), r = 0; r < e.length; r++) ct(t, pn(e[r]) || Tr());
}
function ie(e, t) {
  return new pt(e, t, !1, !1);
}
function _t(e, t) {
  return new pt(e, t, !0, !1);
}
function Fr(e, t) {
  return new pt(e, t, !1, !0);
}
function oe(e, t, r) {
  k(e, w(e), t, r);
}
var Wa = Fr((function(e, t, r, n, s) {
  return e.h === 2 && (e = Bt(e, rt([void 0, void 0], n), s), Me(n = w(t)), (s = Ie(t, n, r)) instanceof de ? (2 & s.O) != 0 ? ((s = s.X()).push(e), k(t, n, r, s)) : s.Ta(e) : Array.isArray(s) ? (2 & U(s) && k(t, n, r, s = Oi(s)), s.push(e)) : k(t, n, r, [e]), !0);
}), (function(e, t, r, n, s) {
  if (t instanceof de) t.forEach(((i, o) => {
    Zr(e, r, rt([o, i], n), s);
  }));
  else if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
    const o = t[i];
    Array.isArray(o) && Zr(e, r, rt(o, n), s);
  }
}));
function ji(e, t, r) {
  e: if (t != null) {
    if (Sr(t)) {
      if (typeof t == "string") {
        t = Sn(t);
        break e;
      }
      if (typeof t == "number") {
        t = kn(t);
        break e;
      }
    }
    t = void 0;
  }
  t != null && (typeof t == "string" && us(t), t != null && (me(e, r, 0), typeof t == "number" ? (e = e.g, et(t), cr(e, A, G)) : (r = us(t), cr(e.g, r.h, r.g))));
}
function Vi(e, t, r) {
  (t = mt(t)) != null && t != null && (me(e, r, 0), Ar(e.g, t));
}
function Xi(e, t, r) {
  (t = bi(t)) != null && (me(e, r, 0), e.g.g.push(t ? 1 : 0));
}
function zi(e, t, r) {
  (t = It(t)) != null && xr(e, r, ti(t));
}
function Or(e, t, r, n, s) {
  Zr(e, r, t instanceof h ? t.s : Array.isArray(t) ? rt(t, n) : void 0, s);
}
function Wi(e, t, r) {
  (t = t == null || typeof t == "string" || wr(t) || t instanceof Ve ? t : void 0) != null && xr(e, r, mn(t).buffer);
}
function Hi(e, t, r) {
  return (e.h === 5 || e.h === 2) && (t = yt(t, w(t), r, 2, !1), e.h == 2 ? br(e, Jr, t) : t.push(Jr(e.g)), !0);
}
var X, De = ie((function(e, t, r) {
  if (e.h !== 1) return !1;
  var n = e.g;
  e = qr(n);
  const s = qr(n);
  n = 2 * (s >> 31) + 1;
  const i = s >>> 20 & 2047;
  return e = 4294967296 * (1048575 & s) + e, oe(t, r, i == 2047 ? e ? NaN : 1 / 0 * n : i == 0 ? n * Math.pow(2, -1074) * e : n * Math.pow(2, i - 1075) * (e + 4503599627370496)), !0;
}), (function(e, t, r) {
  (t = Ke(t)) != null && (me(e, r, 1), e = e.g, (r = fi || (fi = new DataView(new ArrayBuffer(8)))).setFloat64(0, +t, !0), A = r.getUint32(0, !0), G = r.getUint32(4, !0), Ot(e, A), Ot(e, G));
})), z = ie((function(e, t, r) {
  return e.h === 5 && (oe(t, r, Jr(e.g)), !0);
}), (function(e, t, r) {
  (t = Ke(t)) != null && (me(e, r, 5), e = e.g, vn(t), Ot(e, A));
})), Ha = _t(Hi, (function(e, t, r) {
  if ((t = vt(Ke, t)) != null) for (let o = 0; o < t.length; o++) {
    var n = e, s = r, i = t[o];
    i != null && (me(n, s, 5), n = n.g, vn(i), Ot(n, A));
  }
})), Bn = _t(Hi, (function(e, t, r) {
  if ((t = vt(Ke, t)) != null && t.length) {
    me(e, r, 2), Nt(e.g, 4 * t.length);
    for (let n = 0; n < t.length; n++) r = e.g, vn(t[n]), Ot(r, A);
  }
})), He = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, Tn(e.g, _n)), !0);
}), ji), Xr = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, (e = Tn(e.g, _n)) === 0 ? void 0 : e), !0);
}), ji), Ya = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, Tn(e.g, Kr)), !0);
}), (function(e, t, r) {
  e: if (t != null) {
    if (Sr(t)) {
      if (typeof t == "string") {
        var n = Math.trunc(Number(t));
        Number.isSafeInteger(n) && 0 <= n ? t = String(n) : ((n = t.indexOf(".")) !== -1 && (t = t.substring(0, n)), ms(t) || (Er(t), t = ar(A, G)));
        break e;
      }
      if (typeof t == "number") {
        t = 0 <= (t = Math.trunc(t)) && Number.isSafeInteger(t) ? t : (function(s) {
          if (0 > s) {
            et(s);
            const i = ar(A, G);
            return s = Number(i), Number.isSafeInteger(s) ? s : i;
          }
          return ms(String(s)) ? s : (et(s), Kr(A, G));
        })(t);
        break e;
      }
    }
    t = void 0;
  }
  t != null && (typeof t == "string" && as(t), t != null && (me(e, r, 0), typeof t == "number" ? (e = e.g, et(t), cr(e, A, G)) : (r = as(t), cr(e.g, r.h, r.g))));
})), B = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, ze(e.g)), !0);
}), Vi), Nn = _t((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = yt(t, w(t), r, 2, !1), e.h == 2 ? br(e, ze, t) : t.push(ze(e.g)), !0);
}), (function(e, t, r) {
  if ((t = vt(mt, t)) != null && t.length) {
    r = An(e, r);
    for (let n = 0; n < t.length; n++) Ar(e.g, t[n]);
    xn(e, r);
  }
})), ht = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, (e = ze(e.g)) === 0 ? void 0 : e), !0);
}), Vi), j = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, En(e.g)), !0);
}), Xi), Rt = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, (e = En(e.g)) === !1 ? void 0 : e), !0);
}), Xi), q = _t((function(e, t, r) {
  return e.h === 2 && (Xt(t, r, Da, e = bn(e)), !0);
}), (function(e, t, r) {
  if ((t = vt(It, t)) != null) for (let o = 0; o < t.length; o++) {
    var n = e, s = r, i = t[o];
    i != null && xr(n, s, ti(i));
  }
})), Ye = ie((function(e, t, r) {
  return e.h === 2 && (oe(t, r, (e = bn(e)) === "" ? void 0 : e), !0);
}), zi), L = ie((function(e, t, r) {
  return e.h === 2 && (oe(t, r, bn(e)), !0);
}), zi), $a = Fr((function(e, t, r, n, s) {
  return e.h === 2 && (Bt(e, Cn(t, n, r, !0), s), !0);
}), Or), Ka = Fr((function(e, t, r, n, s) {
  return e.h === 2 && (Bt(e, Cn(t, n, r), s), !0);
}), Or);
X = new pt((function(e, t, r, n, s) {
  if (e.h !== 2) return !1;
  n = rt(void 0, n);
  let i = w(t);
  Me(i);
  let o = yt(t, i, r, 3);
  return i = w(t), 4 & U(o) && (o = Z(o), P(o, -2079 & (1 | U(o))), k(t, i, r, o)), o.push(n), Bt(e, n, s), !0;
}), (function(e, t, r, n, s) {
  if (Array.isArray(t)) for (let i = 0; i < t.length; i++) Or(e, t[i], r, n, s);
}), !0, !0);
var F = Fr((function(e, t, r, n, s, i) {
  if (e.h !== 2) return !1;
  let o = w(t);
  return Me(o), (i = In(t, o, i)) && r !== i && k(t, o, i), Bt(e, t = Cn(t, n, r), s), !0;
}), Or), Yi = ie((function(e, t, r) {
  return e.h === 2 && (oe(t, r, yi(e)), !0);
}), Wi), qa = _t((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = yt(t, w(t), r, 2, !1), e.h == 2 ? br(e, We, t) : t.push(We(e.g)), !0);
}), (function(e, t, r) {
  if ((t = vt(La, t)) != null) for (let o = 0; o < t.length; o++) {
    var n = e, s = r, i = t[o];
    i != null && (me(n, s, 0), Nt(n.g, i));
  }
})), Oe = ie((function(e, t, r) {
  return e.h === 0 && (oe(t, r, ze(e.g)), !0);
}), (function(e, t, r) {
  (t = mt(t)) != null && (t = parseInt(t, 10), me(e, r, 0), Ar(e.g, t));
})), Ja = _t((function(e, t, r) {
  return (e.h === 0 || e.h === 2) && (t = yt(t, w(t), r, 2, !1), e.h == 2 ? br(e, Ea, t) : t.push(ze(e.g)), !0);
}), (function(e, t, r) {
  if ((t = vt(mt, t)) != null && t.length) {
    r = An(e, r);
    for (let n = 0; n < t.length; n++) Ar(e.g, t[n]);
    xn(e, r);
  }
}));
class Za {
  constructor(t, r) {
    this.h = t, this.g = r, this.l = _, this.m = g, this.defaultValue = void 0;
  }
}
function be(e, t) {
  return new Za(e, t);
}
function qe(e, t) {
  return (r, n) => {
    e: {
      if ($t.length) {
        const i = $t.pop();
        i.o(n), Nr(i.g, r, n), r = i;
      } else r = new class {
        constructor(i, o) {
          if (os.length) {
            const c = os.pop();
            Nr(c, i, o), i = c;
          } else i = new class {
            constructor(c, a) {
              this.h = null, this.m = !1, this.g = this.l = this.j = 0, Nr(this, c, a);
            }
            clear() {
              this.h = null, this.m = !1, this.g = this.l = this.j = 0, this.aa = !1;
            }
          }(i, o);
          this.g = i, this.l = this.g.g, this.h = this.m = -1, this.o(o);
        }
        o({ ga: i = !1 } = {}) {
          this.ga = i;
        }
      }(r, n);
      try {
        const i = new e(), o = i.s;
        Pn(t)(o, r), Mt && delete o[Mt];
        var s = i;
        break e;
      } finally {
        r.g.clear(), r.m = -1, r.h = -1, 100 > $t.length && $t.push(r);
      }
      s = void 0;
    }
    return s;
  };
}
function Gn(e) {
  return function() {
    const t = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const o = this.g;
            return this.g = [], o;
          }
        }();
      }
    }();
    Gi(this.s, t, Rr(e)), ct(t, t.g.end());
    const r = new Uint8Array(t.h), n = t.l, s = n.length;
    let i = 0;
    for (let o = 0; o < s; o++) {
      const c = n[o];
      r.set(c, i), i += c.length;
    }
    return t.l = [r], r;
  };
}
var $i = [0, Ye, ie((function(e, t, r) {
  return e.h === 2 && (oe(t, r, (e = yi(e)) === at() ? void 0 : e), !0);
}), (function(e, t, r) {
  if (t != null) {
    if (t instanceof h) {
      const n = t.Va;
      return void (n && (t = n(t), t != null && xr(e, r, mn(t).buffer)));
    }
    if (Array.isArray(t)) return;
  }
  Wi(e, t, r);
}))], Qa = [0, L], Ki = [0, B, Oe, j, -1, Nn, Oe, -1], e2 = [0, j, -1], qi = class extends h {
  constructor() {
    super();
  }
};
qi.A = [6];
var Ji = [0, j, L, j, Oe, -1, Ja, L, -1, e2, Oe], Zi = [0, L, -2], bs = class extends h {
  constructor() {
    super();
  }
}, Qi = [0], eo = [0, B, j, -2], ge = class extends h {
  constructor(e) {
    super(e, 2);
  }
}, M = {}, t2 = [-2, M, j];
M[336783863] = [0, L, j, -1, B, [0, [1, 2, 3, 4, 5], F, Qi, F, Ji, F, Zi, F, eo, F, Ki], Qa];
var r2 = [0, Ye, Rt], to = [0, Xr, -1, Rt, -3, Xr, Nn, Ye, ht, Xr, -1, Rt, ht, Rt, -2, Ye], zt = [-1, {}], ro = [0, L, 1, zt], no = [0, L, q, zt];
function ye(e, t) {
  t = Vt(t), e = e.s;
  let r = w(e);
  Me(r), k(e, r, 2, t === "" ? void 0 : t);
}
function S(e, t) {
  Xt(e.s, 3, jt, t);
}
function E(e, t) {
  Xt(e.s, 4, jt, t);
}
var Q = class extends h {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return g(this, 0, 7, e);
  }
};
Q.A = [3, 4, 5, 6, 8, 13, 17, 1005];
var n2 = [-500, Ye, -1, q, -3, t2, X, $i, ht, -1, ro, no, X, r2, Ye, to, ht, q, 987, q], s2 = [0, Ye, -1, zt], i2 = [-500, L, -1, [-1, {}], 998, L], o2 = [-500, L, q, -1, [-2, {}, j], 997, q, -1], a2 = [-500, L, q, zt, 998, q];
function ve(e, t) {
  nn(e, Q, t);
}
function I(e, t) {
  Xt(e.s, 10, jt, t);
}
function O(e, t) {
  Xt(e.s, 15, jt, t);
}
var ae = class extends h {
  constructor(e) {
    super(e, 500);
  }
  o(e) {
    return g(this, 0, 1001, e);
  }
};
ae.A = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
var so = [-500, X, n2, 4, X, i2, X, o2, ht, X, a2, q, ht, ro, no, X, s2, q, -2, to, Ye, -1, Rt, 979, zt, X, $i], c2 = qe(ae, so);
ae.prototype.g = Gn(so);
var u2 = [0, X, [0, B, -2]], h2 = class extends h {
  constructor(e) {
    super(e);
  }
}, l2 = [0, B, z, L, -1], jn = class extends h {
  constructor(e) {
    super(e);
  }
  g() {
    return Be(this, h2, 1);
  }
};
jn.A = [1];
var io = [0, X, l2], Vn = qe(jn, io), f2 = [0, B, z], d2 = [0, B, -1, u2], p2 = class extends h {
  constructor(e) {
    super(e);
  }
}, g2 = [0, B, -3], m2 = [0, z, -3], y2 = class extends h {
  constructor(e) {
    super(e);
  }
}, v2 = [0, z, -1, L, z], nr = class extends h {
  constructor(e) {
    super(e);
  }
  h() {
    return _(this, p2, 2);
  }
  g() {
    return Be(this, y2, 5);
  }
};
nr.A = [5];
var _2 = [0, Oe, g2, m2, d2, X, v2], oo = class extends h {
  constructor(e) {
    super(e);
  }
};
oo.A = [1, 2, 3, 8, 9];
var ao = qe(oo, [0, q, Nn, Bn, _2, L, -1, He, X, f2, q, He]), co = class extends h {
  constructor(e) {
    super(e);
  }
}, w2 = [0, z, -4], uo = class extends h {
  constructor(e) {
    super(e);
  }
};
uo.A = [1];
var Xn = qe(uo, [0, X, w2]), ho = class extends h {
  constructor(e) {
    super(e);
  }
}, T2 = [0, z, -4], lo = class extends h {
  constructor(e) {
    super(e);
  }
};
lo.A = [1];
var Mr = qe(lo, [0, X, T2]), fo = class extends h {
  constructor(e) {
    super(e);
  }
};
fo.A = [3];
var E2 = [0, B, -1, Bn, Oe], po = class extends h {
  constructor() {
    super();
  }
};
po.prototype.g = Gn([0, z, -4, He]);
var b2 = class extends h {
  constructor(e) {
    super(e);
  }
}, A2 = [0, 1, B, L, io], go = class extends h {
  constructor(e) {
    super(e);
  }
};
go.A = [1];
var x2 = qe(go, [0, X, A2, He]), sn = class extends h {
  constructor(e) {
    super(e);
  }
};
sn.A = [1];
var k2 = class extends h {
  constructor(e) {
    super(e);
  }
  ua() {
    const e = Li(this);
    return e ?? at();
  }
}, S2 = class extends h {
  constructor(e) {
    super(e);
  }
}, mo = [1, 2], L2 = [0, mo, F, [0, Bn], F, [0, Yi], B, L], yo = class extends h {
  constructor(e) {
    super(e);
  }
};
yo.A = [1];
var R2 = qe(yo, [0, X, L2, He]), Ir = class extends h {
  constructor(e) {
    super(e);
  }
};
Ir.A = [4, 5];
var vo = [0, L, B, z, q, -1], As = class extends h {
  constructor(e) {
    super(e);
  }
}, F2 = [0, j, -1], xs = class extends h {
  constructor(e) {
    super(e);
  }
}, sr = [1, 2, 3, 4, 5], mr = class extends h {
  constructor(e) {
    super(e);
  }
  g() {
    return Li(this) != null;
  }
  h() {
    return pe(this, 2) != null;
  }
}, _o = [0, Yi, L, [0, B, He, -1], [0, Ya, He]], D = class extends h {
  constructor(e) {
    super(e);
  }
  g() {
    return bi(ut(this, 2)) ?? !1;
  }
}, W = [0, _o, j, [0, sr, F, eo, F, Ji, F, Ki, F, Qi, F, Zi], Oe], zn = class extends h {
  constructor(e) {
    super(e);
  }
}, wo = [0, W, z, -1, B], O2 = be(502141897, zn);
M[502141897] = wo;
var To = [0, _o];
M[512499200] = To;
var Eo = [0, To];
M[515723506] = Eo;
var M2 = qe(class extends h {
  constructor(e) {
    super(e);
  }
}, [0, [0, Oe, -1, Ha, qa], E2]), bo = [0, W];
M[508981768] = bo;
var I2 = class extends h {
  constructor(e) {
    super(e);
  }
}, Ao = [0, W, z, bo, j], xo = class extends h {
  constructor(e) {
    super(e);
  }
}, ko = [0, W, wo, Ao, z, Eo];
M[508968149] = Ao;
var C2 = be(508968150, xo);
M[508968150] = ko;
var So = class extends h {
  constructor(e) {
    super(e);
  }
}, P2 = be(513916220, So);
M[513916220] = [0, W, ko, B];
var st = class extends h {
  constructor(e) {
    super(e);
  }
  h() {
    return _(this, Ir, 2);
  }
  g() {
    x(this, 2);
  }
}, Lo = [0, W, vo];
M[478825465] = Lo;
var Ro = [0, W];
M[478825422] = Ro;
var U2 = class extends h {
  constructor(e) {
    super(e);
  }
}, Fo = [0, W, Ro, Lo, -1], Oo = class extends h {
  constructor(e) {
    super(e);
  }
}, Mo = [0, W, z, B], Io = class extends h {
  constructor(e) {
    super(e);
  }
}, Co = [0, W, z], Wn = class extends h {
  constructor(e) {
    super(e);
  }
}, Po = [0, W, Mo, Co, z], Uo = class extends h {
  constructor(e) {
    super(e);
  }
}, D2 = [0, W, Po, Fo];
M[463370452] = Fo, M[464864288] = Mo, M[474472470] = Co;
var B2 = be(462713202, Wn);
M[462713202] = Po;
var N2 = be(479097054, Uo);
M[479097054] = D2;
var Do = class extends h {
  constructor(e) {
    super(e);
  }
}, G2 = be(456383383, Do);
M[456383383] = [0, W, vo];
var Bo = class extends h {
  constructor(e) {
    super(e);
  }
}, j2 = be(476348187, Bo);
M[476348187] = [0, W, F2];
var No = class extends h {
  constructor(e) {
    super(e);
  }
}, Go = [0, Oe, -1], on = class extends h {
  constructor(e) {
    super(e);
  }
};
on.A = [3];
var V2 = be(458105876, class extends h {
  constructor(e) {
    super(e);
  }
  g() {
    var e = this.s;
    const t = w(e);
    var r = 2 & t;
    return e = (function(n, s, i) {
      var o = on;
      const c = 2 & s;
      let a = !1;
      if (i == null) {
        if (c) return vs();
        i = [];
      } else if (i.constructor === de) {
        if ((2 & i.O) == 0 || c) return i;
        i = i.X();
      } else Array.isArray(i) ? a = !!(2 & U(i)) : i = [];
      if (c) {
        if (!i.length) return vs();
        a || (a = !0, gt(i));
      } else a && (a = !1, i = Oi(i));
      return a || (64 & U(i) ? ur(i, 32) : 32 & s && kr(i, 32)), k(n, s, 2, o = new de(i, o, Ra, void 0), !1), o;
    })(e, t, Ie(e, t, 2)), e == null || !r && on && (e.xa = !0), r = e;
  }
});
M[458105876] = [0, Go, Wa, [!0, He, [0, L, -1, q]]];
var Hn = class extends h {
  constructor(e) {
    super(e);
  }
}, jo = be(458105758, Hn);
M[458105758] = [0, W, L, Go];
var Yn = class extends h {
  constructor(e) {
    super(e);
  }
};
Yn.A = [5, 6];
var X2 = be(443442058, Yn);
M[443442058] = [0, W, L, B, z, q, -1];
var z2 = class extends h {
  constructor(e) {
    super(e);
  }
}, Vo = [0, W, z, -1, B];
M[514774813] = Vo;
var W2 = class extends h {
  constructor(e) {
    super(e);
  }
}, Xo = [0, W, z, j], zo = class extends h {
  constructor(e) {
    super(e);
  }
}, H2 = [0, W, Vo, Xo, z];
M[518928384] = Xo;
var Y2 = be(516587230, zo);
function an(e, t) {
  return t = t ? t.clone() : new Ir(), e.displayNamesLocale !== void 0 ? x(t, 1, Vt(e.displayNamesLocale)) : e.displayNamesLocale === void 0 && x(t, 1), e.maxResults !== void 0 ? Fe(t, 2, e.maxResults) : "maxResults" in e && x(t, 2), e.scoreThreshold !== void 0 ? m(t, 3, e.scoreThreshold) : "scoreThreshold" in e && x(t, 3), e.categoryAllowlist !== void 0 ? gr(t, 4, e.categoryAllowlist) : "categoryAllowlist" in e && x(t, 4), e.categoryDenylist !== void 0 ? gr(t, 5, e.categoryDenylist) : "categoryDenylist" in e && x(t, 5), t;
}
function Wo(e, t = -1, r = "") {
  return { categories: e.map(((n) => ({ index: Re(fe(n, 1)) ?? -1, score: Y(n, 2) ?? 0, categoryName: pe(n, 3) ?? "" ?? "", displayName: pe(n, 4) ?? "" ?? "" }))), headIndex: t, headName: r };
}
function Ho(e) {
  var o, c;
  var t = it(e, 3, Ke), r = it(e, 2, mt), n = it(e, 1, It), s = it(e, 9, It);
  const i = { categories: [], keypoints: [] };
  for (let a = 0; a < t.length; a++) i.categories.push({ score: t[a], index: r[a] ?? -1, categoryName: n[a] ?? "", displayName: s[a] ?? "" });
  if ((t = (o = _(e, nr, 4)) == null ? void 0 : o.h()) && (i.boundingBox = { originX: fe(t, 1) ?? 0, originY: fe(t, 2) ?? 0, width: fe(t, 3) ?? 0, height: fe(t, 4) ?? 0, angle: 0 }), (c = _(e, nr, 4)) == null ? void 0 : c.g().length) for (const a of _(e, nr, 4).g()) i.keypoints.push({ x: Qt(a, 1) ?? 0, y: Qt(a, 2) ?? 0, score: Qt(a, 4) ?? 0, label: pe(a, 3) ?? "" });
  return i;
}
function $n(e) {
  const t = [];
  for (const r of Be(e, ho, 1)) t.push({ x: Y(r, 1) ?? 0, y: Y(r, 2) ?? 0, z: Y(r, 3) ?? 0 });
  return t;
}
function Yo(e) {
  const t = [];
  for (const r of Be(e, co, 1)) t.push({ x: Y(r, 1) ?? 0, y: Y(r, 2) ?? 0, z: Y(r, 3) ?? 0 });
  return t;
}
function ks(e) {
  return Array.from(e, ((t) => 127 < t ? t - 256 : t));
}
function Ss(e, t) {
  if (e.length !== t.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);
  let r = 0, n = 0, s = 0;
  for (let i = 0; i < e.length; i++) r += e[i] * t[i], n += e[i] * e[i], s += t[i] * t[i];
  if (0 >= n || 0 >= s) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return r / Math.sqrt(n * s);
}
let qt;
M[516587230] = H2;
const $2 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
async function $o() {
  if (qt === void 0) try {
    await WebAssembly.instantiate($2), qt = !0;
  } catch {
    qt = !1;
  }
  return qt;
}
async function zr(e, t = "") {
  const r = await $o() ? "wasm_internal" : "wasm_nosimd_internal";
  return { wasmLoaderPath: `${t}/${e}_${r}.js`, wasmBinaryPath: `${t}/${e}_${r}.wasm` };
}
var At = class {
};
function Ko() {
  const e = navigator.userAgent;
  return e.includes("Safari") && !e.includes("Chrome");
}
async function Ls(e) {
  if (typeof importScripts != "function") {
    const t = document.createElement("script");
    return t.src = e.toString(), t.crossOrigin = "anonymous", new Promise(((r, n) => {
      t.addEventListener("load", (() => {
        r();
      }), !1), t.addEventListener("error", ((s) => {
        n(s);
      }), !1), document.body.appendChild(t);
    }));
  }
  importScripts(e.toString());
}
function f(e, t, r) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), r(t = e.i.stringToNewUTF8(t)), e.i._free(t);
}
function Rs(e, t, r) {
  if (!e.i.canvas) throw Error("No OpenGL canvas configured.");
  if (r ? e.i._bindTextureToStream(r) : e.i._bindTextureToCanvas(), !(r = e.i.canvas.getContext("webgl2") || e.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  return e.i.gpuOriginForWebTexturesIsBottomLeft && r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), e.i.gpuOriginForWebTexturesIsBottomLeft && r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1), t.videoWidth ? (r = t.videoWidth, t = t.videoHeight) : t.naturalWidth ? (r = t.naturalWidth, t = t.naturalHeight) : (r = t.width, t = t.height), !e.l || r === e.i.canvas.width && t === e.i.canvas.height || (e.i.canvas.width = r, e.i.canvas.height = t), [r, t];
}
function Fs(e, t, r) {
  e.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const n = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) n[s] = e.i.stringToNewUTF8(t[s]);
  t = e.i._malloc(4 * n.length), e.i.HEAPU32.set(n, t >> 2), r(t);
  for (const s of n) e.i._free(s);
  e.i._free(t);
}
function Ce(e, t, r) {
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = r;
}
function Ze(e, t, r) {
  let n = [];
  e.i.simpleListeners = e.i.simpleListeners || {}, e.i.simpleListeners[t] = (s, i, o) => {
    i ? (r(n, o), n = []) : n.push(s);
  };
}
At.forVisionTasks = function(e) {
  return zr("vision", e);
}, At.forTextTasks = function(e) {
  return zr("text", e);
}, At.forAudioTasks = function(e) {
  return zr("audio", e);
}, At.isSimdSupported = function() {
  return $o();
};
async function K2(e, t, r, n) {
  return e = await (async (s, i, o, c, a) => {
    if (i && await Ls(i), !self.ModuleFactory || o && (await Ls(o), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
    return self.Module && a && ((i = self.Module).locateFile = a.locateFile, a.mainScriptUrlOrBlob && (i.mainScriptUrlOrBlob = a.mainScriptUrlOrBlob)), a = await self.ModuleFactory(self.Module || a), self.ModuleFactory = self.Module = void 0, new s(a, c);
  })(e, r.wasmLoaderPath, r.assetLoaderPath, t, { locateFile: (s) => s.endsWith(".wasm") ? r.wasmBinaryPath.toString() : r.assetBinaryPath && s.endsWith(".data") ? r.assetBinaryPath.toString() : s }), await e.o(n), e;
}
function Os(e, t) {
  const r = _(e.baseOptions, mr, 1) || new mr();
  typeof t == "string" ? (x(r, 2, Vt(t)), x(r, 1)) : t instanceof Uint8Array && (x(r, 1, Ti(t, !1, !1)), x(r, 2)), g(e.baseOptions, 0, 1, r);
}
function Ms(e) {
  try {
    const t = e.F.length;
    if (t === 1) throw Error(e.F[0].message);
    if (1 < t) throw Error("Encountered multiple errors: " + e.F.map(((r) => r.message)).join(", "));
  } finally {
    e.F = [];
  }
}
function p(e, t) {
  e.I = Math.max(e.I, t);
}
function Kn(e, t) {
  e.C = new Q(), ye(e.C, "PassThroughCalculator"), S(e.C, "free_memory"), E(e.C, "free_memory_unused_out"), I(t, "free_memory"), ve(t, e.C);
}
function Pt(e, t) {
  S(e.C, t), E(e.C, t + "_unused_out");
}
function qn(e) {
  e.g.addBoolToStream(!0, "free_memory", e.I);
}
var yr = class {
  constructor(e) {
    this.g = e, this.F = [], this.I = 0, this.g.setAutoRenderToScreen(!1);
  }
  l(e, t = !0) {
    var r, n, s, i, o, c;
    if (t) {
      const a = e.baseOptions || {};
      if ((r = e.baseOptions) != null && r.modelAssetBuffer && ((n = e.baseOptions) != null && n.modelAssetPath)) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!((s = _(this.baseOptions, mr, 1)) != null && s.g() || (i = _(this.baseOptions, mr, 1)) != null && i.h() || (o = e.baseOptions) != null && o.modelAssetBuffer || (c = e.baseOptions) != null && c.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if ((function(u, l) {
        let y = _(u.baseOptions, xs, 3);
        if (!y) {
          var d = y = new xs(), R = new bs();
          Lt(d, 4, sr, R);
        }
        "delegate" in l && (l.delegate === "GPU" ? (l = y, d = new qi(), Lt(l, 2, sr, d)) : (l = y, d = new bs(), Lt(l, 4, sr, d))), g(u.baseOptions, 0, 3, y);
      })(this, a), a.modelAssetPath) return fetch(a.modelAssetPath.toString()).then(((u) => {
        if (u.ok) return u.arrayBuffer();
        throw Error(`Failed to fetch model: ${a.modelAssetPath} (${u.status})`);
      })).then(((u) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(u), !0, !1, !1), Os(this, "/model.dat"), this.m(), this.N();
      }));
      Os(this, a.modelAssetBuffer);
    }
    return this.m(), this.N(), Promise.resolve();
  }
  N() {
  }
  da() {
    let e;
    if (this.g.da(((t) => {
      e = c2(t);
    })), !e) throw Error("Failed to retrieve CalculatorGraphConfig");
    return e;
  }
  setGraph(e, t) {
    this.g.attachErrorListener(((r, n) => {
      this.F.push(Error(n));
    })), this.g.Ra(), this.g.setGraph(e, t), this.C = void 0, Ms(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), Ms(this);
  }
  close() {
    this.C = void 0, this.g.closeGraph();
  }
};
function J(e, t) {
  if (e === null) throw Error(`Unable to obtain required WebGL resource: ${t}`);
  return e;
}
yr.prototype.close = yr.prototype.close;
class q2 {
  constructor(t, r, n, s) {
    this.g = t, this.h = r, this.m = n, this.l = s;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
}
function Is(e, t, r) {
  const n = e.g;
  if (r = J(n.createShader(r), "Failed to create WebGL shader"), n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(r)}`);
  return n.attachShader(e.h, r), r;
}
function Cs(e, t) {
  const r = e.g, n = J(r.createVertexArray(), "Failed to create vertex array");
  r.bindVertexArray(n);
  const s = J(r.createBuffer(), "Failed to create buffer");
  r.bindBuffer(r.ARRAY_BUFFER, s), r.enableVertexAttribArray(e.N), r.vertexAttribPointer(e.N, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), r.STATIC_DRAW);
  const i = J(r.createBuffer(), "Failed to create buffer");
  return r.bindBuffer(r.ARRAY_BUFFER, i), r.enableVertexAttribArray(e.M), r.vertexAttribPointer(e.M, 2, r.FLOAT, !1, 0, 0), r.bufferData(r.ARRAY_BUFFER, new Float32Array(t ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), r.STATIC_DRAW), r.bindBuffer(r.ARRAY_BUFFER, null), r.bindVertexArray(null), new q2(r, n, s, i);
}
function Jn(e, t) {
  if (e.g) {
    if (t !== e.g) throw Error("Cannot change GL context once initialized");
  } else e.g = t;
}
function Wt(e, t, r, n) {
  return Jn(e, t), e.h || (e.m(), e.F()), r ? (e.u || (e.u = Cs(e, !0)), r = e.u) : (e.v || (e.v = Cs(e, !1)), r = e.v), t.useProgram(e.h), r.bind(), e.l(), e = n(), r.g.bindVertexArray(null), e;
}
function $e(e, t, r) {
  return Jn(e, t), e = J(t.createTexture(), "Failed to create texture"), t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, r ?? t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, r ?? t.LINEAR), t.bindTexture(t.TEXTURE_2D, null), e;
}
function Cr(e, t, r) {
  Jn(e, t), e.C || (e.C = J(t.createFramebuffer(), "Failed to create framebuffe.")), t.bindFramebuffer(t.FRAMEBUFFER, e.C), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0);
}
function Zn(e) {
  var t;
  (t = e.g) == null || t.bindFramebuffer(e.g.FRAMEBUFFER, null);
}
var wt = class {
  I() {
    return `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `;
  }
  m() {
    const e = this.g;
    if (this.h = J(e.createProgram(), "Failed to create WebGL program"), this.ta = Is(this, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, e.VERTEX_SHADER), this.sa = Is(this, this.I(), e.FRAGMENT_SHADER), e.linkProgram(this.h), !e.getProgramParameter(this.h, e.LINK_STATUS)) throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);
    this.N = e.getAttribLocation(this.h, "aVertex"), this.M = e.getAttribLocation(this.h, "aTex");
  }
  F() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const e = this.g;
      e.deleteProgram(this.h), e.deleteShader(this.ta), e.deleteShader(this.sa);
    }
    this.C && this.g.deleteFramebuffer(this.C), this.v && this.v.close(), this.u && this.u.close();
  }
}, J2 = class extends wt {
  I() {
    return `
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `;
  }
  F() {
    const e = this.g;
    e.activeTexture(e.TEXTURE1), this.B = $e(this, e, e.LINEAR), e.activeTexture(e.TEXTURE2), this.j = $e(this, e, e.NEAREST);
  }
  m() {
    super.m();
    const e = this.g;
    this.U = J(e.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.ra = J(e.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.T = J(e.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const e = this.g;
    e.uniform1i(this.T, 0), e.uniform1i(this.U, 1), e.uniform1i(this.ra, 2);
  }
  close() {
    this.B && this.g.deleteTexture(this.B), this.j && this.g.deleteTexture(this.j), super.close();
  }
}, Z2 = class extends wt {
  I() {
    return `
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `;
  }
  F() {
    const e = this.g;
    e.activeTexture(e.TEXTURE1), this.j = $e(this, e), e.activeTexture(e.TEXTURE2), this.B = $e(this, e);
  }
  m() {
    super.m();
    const e = this.g;
    this.T = J(e.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.U = J(e.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.J = J(e.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const e = this.g;
    e.uniform1i(this.J, 0), e.uniform1i(this.T, 1), e.uniform1i(this.U, 2);
  }
  close() {
    this.j && this.g.deleteTexture(this.j), this.B && this.g.deleteTexture(this.B), super.close();
  }
};
function Ue(e, t) {
  switch (t) {
    case 0:
      return e.g.find(((r) => r instanceof Uint8Array));
    case 1:
      return e.g.find(((r) => r instanceof Float32Array));
    case 2:
      return e.g.find(((r) => typeof WebGLTexture < "u" && r instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${t}`);
  }
}
function cn(e) {
  var t = Ue(e, 1);
  if (!t) {
    if (t = Ue(e, 0)) t = new Float32Array(t).map(((n) => n / 255));
    else {
      t = new Float32Array(e.width * e.height);
      const n = lt(e);
      var r = Qn(e);
      if (Cr(r, n, qo(e)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
        r = new Float32Array(e.width * e.height * 4), n.readPixels(0, 0, e.width, e.height, n.RGBA, n.FLOAT, r);
        for (let s = 0, i = 0; s < t.length; ++s, i += 4) t[s] = r[i];
      } else n.readPixels(0, 0, e.width, e.height, n.RED, n.FLOAT, t);
    }
    e.g.push(t);
  }
  return t;
}
function qo(e) {
  let t = Ue(e, 2);
  if (!t) {
    const r = lt(e);
    t = Zo(e);
    const n = cn(e), s = Jo(e);
    r.texImage2D(r.TEXTURE_2D, 0, s, e.width, e.height, 0, r.RED, r.FLOAT, n), un(e);
  }
  return t;
}
function lt(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return e.h || (e.h = J(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function Jo(e) {
  if (e = lt(e), !Jt) if (e.getExtension("EXT_color_buffer_float") && e.getExtension("OES_texture_float_linear") && e.getExtension("EXT_float_blend")) Jt = e.R32F;
  else {
    if (!e.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    Jt = e.R16F;
  }
  return Jt;
}
function Qn(e) {
  return e.l || (e.l = new wt()), e.l;
}
function Zo(e) {
  const t = lt(e);
  t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0);
  let r = Ue(e, 2);
  return r || (r = $e(Qn(e), t, e.m ? t.LINEAR : t.NEAREST), e.g.push(r), e.j = !0), t.bindTexture(t.TEXTURE_2D, r), r;
}
function un(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
var Jt, N = class {
  constructor(e, t, r, n, s, i, o) {
    this.g = e, this.m = t, this.j = r, this.canvas = n, this.l = s, this.width = i, this.height = o, this.j && --Ps === 0 && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
  }
  La() {
    return !!Ue(this, 0);
  }
  ka() {
    return !!Ue(this, 1);
  }
  P() {
    return !!Ue(this, 2);
  }
  ja() {
    return (t = Ue(e = this, 0)) || (t = cn(e), t = new Uint8Array(t.map(((r) => 255 * r))), e.g.push(t)), t;
    var e, t;
  }
  ia() {
    return cn(this);
  }
  K() {
    return qo(this);
  }
  clone() {
    const e = [];
    for (const t of this.g) {
      let r;
      if (t instanceof Uint8Array) r = new Uint8Array(t);
      else if (t instanceof Float32Array) r = new Float32Array(t);
      else {
        if (!(t instanceof WebGLTexture)) throw Error(`Type is not supported: ${t}`);
        {
          const n = lt(this), s = Qn(this);
          n.activeTexture(n.TEXTURE1), r = $e(s, n, this.m ? n.LINEAR : n.NEAREST), n.bindTexture(n.TEXTURE_2D, r);
          const i = Jo(this);
          n.texImage2D(n.TEXTURE_2D, 0, i, this.width, this.height, 0, n.RED, n.FLOAT, null), n.bindTexture(n.TEXTURE_2D, null), Cr(s, n, r), Wt(s, n, !1, (() => {
            Zo(this), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLE_FAN, 0, 4), un(this);
          })), Zn(s), un(this);
        }
      }
      e.push(r);
    }
    return new N(e, this.m, this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && lt(this).deleteTexture(Ue(this, 2)), Ps = -1;
  }
};
N.prototype.close = N.prototype.close, N.prototype.clone = N.prototype.clone, N.prototype.getAsWebGLTexture = N.prototype.K, N.prototype.getAsFloat32Array = N.prototype.ia, N.prototype.getAsUint8Array = N.prototype.ja, N.prototype.hasWebGLTexture = N.prototype.P, N.prototype.hasFloat32Array = N.prototype.ka, N.prototype.hasUint8Array = N.prototype.La;
var Ps = 250;
const Q2 = { color: "white", lineWidth: 4, radius: 6 };
function Wr(e) {
  return { ...Q2, fillColor: (e = e || {}).color, ...e };
}
function Pe(e, t) {
  return e instanceof Function ? e(t) : e;
}
function Us(e, t, r) {
  return Math.max(Math.min(t, r), Math.min(Math.max(t, r), e));
}
function Et(e) {
  if (!e.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
  return e.l;
}
function Ut(e) {
  if (!e.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
  return e.j;
}
function Ds(e, t, r) {
  if (t.P()) r(t.K());
  else {
    const n = t.ka() ? t.ia() : t.ja();
    e.m = e.m ?? new wt();
    const s = Ut(e);
    r((e = new N([n], t.m, !1, s.canvas, e.m, t.width, t.height)).K()), e.close();
  }
}
function Bs(e, t, r, n) {
  const s = (function(c) {
    return c.g || (c.g = new J2()), c.g;
  })(e), i = Ut(e), o = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r;
  Wt(s, i, !0, (() => {
    (function(a, u, l, y) {
      const d = a.g;
      if (d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, u), d.activeTexture(d.TEXTURE1), d.bindTexture(d.TEXTURE_2D, a.B), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, l), a.J && (function(R, T) {
        if (R !== T) return !1;
        R = R.entries(), T = T.entries();
        for (const [_e, Tt] of R) {
          R = _e;
          const Ge = Tt;
          var b = T.next();
          if (b.done) return !1;
          const [Ht, la] = b.value;
          if (b = la, R !== Ht || Ge[0] !== b[0] || Ge[1] !== b[1] || Ge[2] !== b[2] || Ge[3] !== b[3]) return !1;
        }
        return !!T.next().done;
      })(a.J, y)) d.activeTexture(d.TEXTURE2), d.bindTexture(d.TEXTURE_2D, a.j);
      else {
        a.J = y;
        const R = Array(1024).fill(0);
        y.forEach(((T, b) => {
          if (T.length !== 4) throw Error(`Color at index ${b} is not a four-channel value.`);
          R[4 * b] = T[0], R[4 * b + 1] = T[1], R[4 * b + 2] = T[2], R[4 * b + 3] = T[3];
        })), d.activeTexture(d.TEXTURE2), d.bindTexture(d.TEXTURE_2D, a.j), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 256, 1, 0, d.RGBA, d.UNSIGNED_BYTE, new Uint8Array(R));
      }
    })(s, t, o, n), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.drawArrays(i.TRIANGLE_FAN, 0, 4);
    const c = s.g;
    c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, null), c.activeTexture(c.TEXTURE2), c.bindTexture(c.TEXTURE_2D, null);
  }));
}
function Ns(e, t, r, n) {
  const s = Ut(e), i = (function(a) {
    return a.h || (a.h = new Z2()), a.h;
  })(e), o = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r, c = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n;
  Wt(i, s, !0, (() => {
    var a = i.g;
    a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, t), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, i.j), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, o), a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, i.B), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c), s.clearColor(0, 0, 0, 0), s.clear(s.COLOR_BUFFER_BIT), s.drawArrays(s.TRIANGLE_FAN, 0, 4), s.bindTexture(s.TEXTURE_2D, null), (a = i.g).activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, null);
  }));
}
var $ = class {
  constructor(e, t) {
    e instanceof CanvasRenderingContext2D || e instanceof OffscreenCanvasRenderingContext2D ? (this.l = e, this.j = t) : this.j = e;
  }
  Ea(e, t) {
    if (e) {
      var r = Et(this);
      t = Wr(t), r.save();
      var n = r.canvas, s = 0;
      for (const i of e) r.fillStyle = Pe(t.fillColor, { index: s, from: i }), r.strokeStyle = Pe(t.color, { index: s, from: i }), r.lineWidth = Pe(t.lineWidth, { index: s, from: i }), (e = new Path2D()).arc(i.x * n.width, i.y * n.height, Pe(t.radius, { index: s, from: i }), 0, 2 * Math.PI), r.fill(e), r.stroke(e), ++s;
      r.restore();
    }
  }
  Da(e, t, r) {
    if (e && t) {
      var n = Et(this);
      r = Wr(r), n.save();
      var s = n.canvas, i = 0;
      for (const o of t) {
        n.beginPath(), t = e[o.start];
        const c = e[o.end];
        t && c && (n.strokeStyle = Pe(r.color, { index: i, from: t, to: c }), n.lineWidth = Pe(r.lineWidth, { index: i, from: t, to: c }), n.moveTo(t.x * s.width, t.y * s.height), n.lineTo(c.x * s.width, c.y * s.height)), ++i, n.stroke();
      }
      n.restore();
    }
  }
  Aa(e, t) {
    const r = Et(this);
    t = Wr(t), r.save(), r.beginPath(), r.lineWidth = Pe(t.lineWidth, {}), r.strokeStyle = Pe(t.color, {}), r.fillStyle = Pe(t.fillColor, {}), r.moveTo(e.originX, e.originY), r.lineTo(e.originX + e.width, e.originY), r.lineTo(e.originX + e.width, e.originY + e.height), r.lineTo(e.originX, e.originY + e.height), r.lineTo(e.originX, e.originY), r.stroke(), r.fill(), r.restore();
  }
  Ba(e, t, r = [0, 0, 0, 255]) {
    this.l ? (function(n, s, i, o) {
      const c = Ut(n);
      Ds(n, s, ((a) => {
        Bs(n, a, i, o), (a = Et(n)).drawImage(c.canvas, 0, 0, a.canvas.width, a.canvas.height);
      }));
    })(this, e, r, t) : Bs(this, e.K(), r, t);
  }
  Ca(e, t, r) {
    this.l ? (function(n, s, i, o) {
      const c = Ut(n);
      Ds(n, s, ((a) => {
        Ns(n, a, i, o), (a = Et(n)).drawImage(c.canvas, 0, 0, a.canvas.width, a.canvas.height);
      }));
    })(this, e, t, r) : Ns(this, e.K(), t, r);
  }
  close() {
    var e, t, r;
    (e = this.g) == null || e.close(), this.g = void 0, (t = this.h) == null || t.close(), this.h = void 0, (r = this.m) == null || r.close(), this.m = void 0;
  }
};
function Se(e, t) {
  switch (t) {
    case 0:
      return e.g.find(((r) => r instanceof ImageData));
    case 1:
      return e.g.find(((r) => typeof ImageBitmap < "u" && r instanceof ImageBitmap));
    case 2:
      return e.g.find(((r) => typeof WebGLTexture < "u" && r instanceof WebGLTexture));
    default:
      throw Error(`Type is not supported: ${t}`);
  }
}
function Qo(e) {
  var t = Se(e, 0);
  if (!t) {
    t = ft(e);
    const r = Pr(e), n = new Uint8Array(e.width * e.height * 4);
    Cr(r, t, ir(e)), t.readPixels(0, 0, e.width, e.height, t.RGBA, t.UNSIGNED_BYTE, n), Zn(r), t = new ImageData(new Uint8ClampedArray(n.buffer), e.width, e.height), e.g.push(t);
  }
  return t;
}
function ir(e) {
  let t = Se(e, 2);
  if (!t) {
    const r = ft(e);
    t = or(e);
    const n = Se(e, 1) || Qo(e);
    r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, n), xt(e);
  }
  return t;
}
function ft(e) {
  if (!e.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
  return e.h || (e.h = J(e.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), e.h;
}
function Pr(e) {
  return e.l || (e.l = new wt()), e.l;
}
function or(e) {
  const t = ft(e);
  t.viewport(0, 0, e.width, e.height), t.activeTexture(t.TEXTURE0);
  let r = Se(e, 2);
  return r || (r = $e(Pr(e), t), e.g.push(r), e.m = !0), t.bindTexture(t.TEXTURE_2D, r), r;
}
function xt(e) {
  e.h.bindTexture(e.h.TEXTURE_2D, null);
}
function Gs(e) {
  const t = ft(e);
  return Wt(Pr(e), t, !0, (() => (function(r, n) {
    const s = r.canvas;
    if (s.width === r.width && s.height === r.height) return n();
    const i = s.width, o = s.height;
    return s.width = r.width, s.height = r.height, r = n(), s.width = i, s.height = o, r;
  })(e, (() => {
    if (t.bindFramebuffer(t.FRAMEBUFFER, null), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), !(e.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
    return e.canvas.transferToImageBitmap();
  }))));
}
$.prototype.close = $.prototype.close, $.prototype.drawConfidenceMask = $.prototype.Ca, $.prototype.drawCategoryMask = $.prototype.Ba, $.prototype.drawBoundingBox = $.prototype.Aa, $.prototype.drawConnectors = $.prototype.Da, $.prototype.drawLandmarks = $.prototype.Ea, $.lerp = function(e, t, r, n, s) {
  return Us(n * (1 - (e - t) / (r - t)) + s * (1 - (r - e) / (r - t)), n, s);
}, $.clamp = Us;
var V = class {
  constructor(e, t, r, n, s, i, o) {
    this.g = e, this.j = t, this.m = r, this.canvas = n, this.l = s, this.width = i, this.height = o, (this.j || this.m) && --js === 0 && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.");
  }
  Ka() {
    return !!Se(this, 0);
  }
  la() {
    return !!Se(this, 1);
  }
  P() {
    return !!Se(this, 2);
  }
  Ia() {
    return Qo(this);
  }
  Ha() {
    var e = Se(this, 1);
    return e || (ir(this), or(this), e = Gs(this), xt(this), this.g.push(e), this.j = !0), e;
  }
  K() {
    return ir(this);
  }
  clone() {
    const e = [];
    for (const t of this.g) {
      let r;
      if (t instanceof ImageData) r = new ImageData(t.data, this.width, this.height);
      else if (t instanceof WebGLTexture) {
        const n = ft(this), s = Pr(this);
        n.activeTexture(n.TEXTURE1), r = $e(s, n), n.bindTexture(n.TEXTURE_2D, r), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, this.width, this.height, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.bindTexture(n.TEXTURE_2D, null), Cr(s, n, r), Wt(s, n, !1, (() => {
          or(this), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.TRIANGLE_FAN, 0, 4), xt(this);
        })), Zn(s), xt(this);
      } else {
        if (!(t instanceof ImageBitmap)) throw Error(`Type is not supported: ${t}`);
        ir(this), or(this), r = Gs(this), xt(this);
      }
      e.push(r);
    }
    return new V(e, this.la(), this.P(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Se(this, 1).close(), this.m && ft(this).deleteTexture(Se(this, 2)), js = -1;
  }
};
V.prototype.close = V.prototype.close, V.prototype.clone = V.prototype.clone, V.prototype.getAsWebGLTexture = V.prototype.K, V.prototype.getAsImageBitmap = V.prototype.Ha, V.prototype.getAsImageData = V.prototype.Ia, V.prototype.hasWebGLTexture = V.prototype.P, V.prototype.hasImageBitmap = V.prototype.la, V.prototype.hasImageData = V.prototype.Ka;
var js = 250;
function Ae(...e) {
  return e.map((([t, r]) => ({ start: t, end: r })));
}
const e1 = /* @__PURE__ */ (function(e) {
  return class extends e {
    Ra() {
      this.i._registerModelResourcesGraphService();
    }
  };
})((Vs = class {
  constructor(e, t) {
    this.l = !0, this.i = e, this.g = null, this.h = 0, this.m = typeof this.i._addIntToInputStream == "function", t !== void 0 ? this.i.canvas = t : typeof OffscreenCanvas > "u" || Ko() ? (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas")) : this.i.canvas = new OffscreenCanvas(1, 1);
  }
  async initializeGraph(e) {
    const t = await (await fetch(e)).arrayBuffer();
    e = !(e.endsWith(".pbtxt") || e.endsWith(".textproto")), this.setGraph(new Uint8Array(t), e);
  }
  setGraphFromString(e) {
    this.setGraph(new TextEncoder().encode(e), !1);
  }
  setGraph(e, t) {
    const r = e.length, n = this.i._malloc(r);
    this.i.HEAPU8.set(e, n), t ? this.i._changeBinaryGraph(r, n) : this.i._changeTextGraph(r, n), this.i._free(n);
  }
  configureAudio(e, t, r, n, s) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), f(this, n || "input_audio", ((i) => {
      f(this, s = s || "audio_header", ((o) => {
        this.i._configureAudio(i, o, e, t, r);
      }));
    }));
  }
  setAutoResizeCanvas(e) {
    this.l = e;
  }
  setAutoRenderToScreen(e) {
    this.i._setAutoRenderToScreen(e);
  }
  setGpuBufferVerticalFlip(e) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = e;
  }
  da(e) {
    Ce(this, "__graph_config__", ((t) => {
      e(t);
    })), f(this, "__graph_config__", ((t) => {
      this.i._getGraphConfig(t, void 0);
    })), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(e) {
    this.i.errorListener = e;
  }
  attachEmptyPacketListener(e, t) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[e] = t;
  }
  addAudioToStream(e, t, r) {
    this.addAudioToStreamWithShape(e, 0, 0, t, r);
  }
  addAudioToStreamWithShape(e, t, r, n, s) {
    const i = 4 * e.length;
    this.h !== i && (this.g && this.i._free(this.g), this.g = this.i._malloc(i), this.h = i), this.i.HEAPF32.set(e, this.g / 4), f(this, n, ((o) => {
      this.i._addAudioToInputStream(this.g, t, r, o, s);
    }));
  }
  addGpuBufferToStream(e, t, r) {
    f(this, t, ((n) => {
      const [s, i] = Rs(this, e, n);
      this.i._addBoundTextureToStream(n, s, i, r);
    }));
  }
  addBoolToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addBoolToInputStream(e, n, r);
    }));
  }
  addDoubleToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addDoubleToInputStream(e, n, r);
    }));
  }
  addFloatToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addFloatToInputStream(e, n, r);
    }));
  }
  addIntToStream(e, t, r) {
    f(this, t, ((n) => {
      this.i._addIntToInputStream(e, n, r);
    }));
  }
  addStringToStream(e, t, r) {
    f(this, t, ((n) => {
      f(this, e, ((s) => {
        this.i._addStringToInputStream(s, n, r);
      }));
    }));
  }
  addStringRecordToStream(e, t, r) {
    f(this, t, ((n) => {
      Fs(this, Object.keys(e), ((s) => {
        Fs(this, Object.values(e), ((i) => {
          this.i._addFlatHashMapToInputStream(s, i, Object.keys(e).length, n, r);
        }));
      }));
    }));
  }
  addProtoToStream(e, t, r, n) {
    f(this, r, ((s) => {
      f(this, t, ((i) => {
        const o = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, o), this.i._addProtoToInputStream(o, e.length, i, s, n), this.i._free(o);
      }));
    }));
  }
  addEmptyPacketToStream(e, t) {
    f(this, e, ((r) => {
      this.i._addEmptyPacketToInputStream(r, t);
    }));
  }
  addBoolVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateBoolVector(e.length);
      if (!s) throw Error("Unable to allocate new bool vector on heap.");
      for (const i of e) this.i._addBoolVectorEntry(s, i);
      this.i._addBoolVectorToInputStream(s, n, r);
    }));
  }
  addDoubleVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateDoubleVector(e.length);
      if (!s) throw Error("Unable to allocate new double vector on heap.");
      for (const i of e) this.i._addDoubleVectorEntry(s, i);
      this.i._addDoubleVectorToInputStream(s, n, r);
    }));
  }
  addFloatVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateFloatVector(e.length);
      if (!s) throw Error("Unable to allocate new float vector on heap.");
      for (const i of e) this.i._addFloatVectorEntry(s, i);
      this.i._addFloatVectorToInputStream(s, n, r);
    }));
  }
  addIntVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateIntVector(e.length);
      if (!s) throw Error("Unable to allocate new int vector on heap.");
      for (const i of e) this.i._addIntVectorEntry(s, i);
      this.i._addIntVectorToInputStream(s, n, r);
    }));
  }
  addStringVectorToStream(e, t, r) {
    f(this, t, ((n) => {
      const s = this.i._allocateStringVector(e.length);
      if (!s) throw Error("Unable to allocate new string vector on heap.");
      for (const i of e) f(this, i, ((o) => {
        this.i._addStringVectorEntry(s, o);
      }));
      this.i._addStringVectorToInputStream(s, n, r);
    }));
  }
  addBoolToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addBoolToInputSidePacket(e, r);
    }));
  }
  addDoubleToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addDoubleToInputSidePacket(e, r);
    }));
  }
  addFloatToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addFloatToInputSidePacket(e, r);
    }));
  }
  addIntToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      this.i._addIntToInputSidePacket(e, r);
    }));
  }
  addStringToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      f(this, e, ((n) => {
        this.i._addStringToInputSidePacket(n, r);
      }));
    }));
  }
  addProtoToInputSidePacket(e, t, r) {
    f(this, r, ((n) => {
      f(this, t, ((s) => {
        const i = this.i._malloc(e.length);
        this.i.HEAPU8.set(e, i), this.i._addProtoToInputSidePacket(i, e.length, s, n), this.i._free(i);
      }));
    }));
  }
  addBoolVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateBoolVector(e.length);
      if (!n) throw Error("Unable to allocate new bool vector on heap.");
      for (const s of e) this.i._addBoolVectorEntry(n, s);
      this.i._addBoolVectorToInputSidePacket(n, r);
    }));
  }
  addDoubleVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateDoubleVector(e.length);
      if (!n) throw Error("Unable to allocate new double vector on heap.");
      for (const s of e) this.i._addDoubleVectorEntry(n, s);
      this.i._addDoubleVectorToInputSidePacket(n, r);
    }));
  }
  addFloatVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateFloatVector(e.length);
      if (!n) throw Error("Unable to allocate new float vector on heap.");
      for (const s of e) this.i._addFloatVectorEntry(n, s);
      this.i._addFloatVectorToInputSidePacket(n, r);
    }));
  }
  addIntVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateIntVector(e.length);
      if (!n) throw Error("Unable to allocate new int vector on heap.");
      for (const s of e) this.i._addIntVectorEntry(n, s);
      this.i._addIntVectorToInputSidePacket(n, r);
    }));
  }
  addStringVectorToInputSidePacket(e, t) {
    f(this, t, ((r) => {
      const n = this.i._allocateStringVector(e.length);
      if (!n) throw Error("Unable to allocate new string vector on heap.");
      for (const s of e) f(this, s, ((i) => {
        this.i._addStringVectorEntry(n, i);
      }));
      this.i._addStringVectorToInputSidePacket(n, r);
    }));
  }
  attachBoolListener(e, t) {
    Ce(this, e, t), f(this, e, ((r) => {
      this.i._attachBoolListener(r);
    }));
  }
  attachBoolVectorListener(e, t) {
    Ze(this, e, t), f(this, e, ((r) => {
      this.i._attachBoolVectorListener(r);
    }));
  }
  attachIntListener(e, t) {
    Ce(this, e, t), f(this, e, ((r) => {
      this.i._attachIntListener(r);
    }));
  }
  attachIntVectorListener(e, t) {
    Ze(this, e, t), f(this, e, ((r) => {
      this.i._attachIntVectorListener(r);
    }));
  }
  attachDoubleListener(e, t) {
    Ce(this, e, t), f(this, e, ((r) => {
      this.i._attachDoubleListener(r);
    }));
  }
  attachDoubleVectorListener(e, t) {
    Ze(this, e, t), f(this, e, ((r) => {
      this.i._attachDoubleVectorListener(r);
    }));
  }
  attachFloatListener(e, t) {
    Ce(this, e, t), f(this, e, ((r) => {
      this.i._attachFloatListener(r);
    }));
  }
  attachFloatVectorListener(e, t) {
    Ze(this, e, t), f(this, e, ((r) => {
      this.i._attachFloatVectorListener(r);
    }));
  }
  attachStringListener(e, t) {
    Ce(this, e, t), f(this, e, ((r) => {
      this.i._attachStringListener(r);
    }));
  }
  attachStringVectorListener(e, t) {
    Ze(this, e, t), f(this, e, ((r) => {
      this.i._attachStringVectorListener(r);
    }));
  }
  attachProtoListener(e, t, r) {
    Ce(this, e, t), f(this, e, ((n) => {
      this.i._attachProtoListener(n, r || !1);
    }));
  }
  attachProtoVectorListener(e, t, r) {
    Ze(this, e, t), f(this, e, ((n) => {
      this.i._attachProtoVectorListener(n, r || !1);
    }));
  }
  attachAudioListener(e, t, r) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Ce(this, e, ((n, s) => {
      n = new Float32Array(n.buffer, n.byteOffset, n.length / 4), t(n, s);
    })), f(this, e, ((n) => {
      this.i._attachAudioListener(n, r || !1);
    }));
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Vs {
  get fa() {
    return this.i;
  }
  va(e, t, r) {
    f(this, t, ((n) => {
      const [s, i] = Rs(this, e, n);
      this.fa._addBoundTextureAsImageToStream(n, s, i, r);
    }));
  }
  ba(e, t) {
    Ce(this, e, t), f(this, e, ((r) => {
      this.fa._attachImageListener(r);
    }));
  }
  ca(e, t) {
    Ze(this, e, t), f(this, e, ((r) => {
      this.fa._attachImageVectorListener(r);
    }));
  }
}));
var Vs, xe = class extends e1 {
};
async function v(e, t, r) {
  return (async function(n, s, i, o) {
    return K2(n, s, i, o);
  })(e, r.canvas ?? (typeof OffscreenCanvas > "u" || Ko() ? document.createElement("canvas") : void 0), t, r);
}
function ea(e, t, r, n) {
  if (e.J) {
    const i = new po();
    if (r != null && r.regionOfInterest) {
      if (!e.U) throw Error("This task doesn't support region-of-interest.");
      var s = r.regionOfInterest;
      if (s.left >= s.right || s.top >= s.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (0 > s.left || 0 > s.top || 1 < s.right || 1 < s.bottom) throw Error("Expected RectF values to be in [0,1].");
      m(i, 1, (s.left + s.right) / 2), m(i, 2, (s.top + s.bottom) / 2), m(i, 4, s.right - s.left), m(i, 3, s.bottom - s.top);
    } else m(i, 1, 0.5), m(i, 2, 0.5), m(i, 4, 1), m(i, 3, 1);
    if (r != null && r.rotationDegrees) {
      if ((r == null ? void 0 : r.rotationDegrees) % 90 != 0) throw Error("Expected rotation to be a multiple of 90°.");
      if (m(i, 5, -Math.PI * r.rotationDegrees / 180), (r == null ? void 0 : r.rotationDegrees) % 180 != 0) {
        const [o, c] = t.videoWidth !== void 0 ? [t.videoWidth, t.videoHeight] : t.naturalWidth !== void 0 ? [t.naturalWidth, t.naturalHeight] : [t.width, t.height];
        r = Y(i, 3) * c / o, s = Y(i, 4) * o / c, m(i, 4, r), m(i, 3, s);
      }
    }
    e.g.addProtoToStream(i.g(), "mediapipe.NormalizedRect", e.J, n);
  }
  e.g.va(t, e.T, n ?? performance.now()), e.finishProcessing();
}
function ke(e, t, r) {
  var n;
  if ((n = e.baseOptions) != null && n.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  ea(e, t, r, e.I + 1);
}
function Ne(e, t, r, n) {
  var s;
  if (!((s = e.baseOptions) != null && s.g())) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  ea(e, t, r, n);
}
function Dt(e, t, r, n) {
  var s = t.data;
  const i = t.width, o = i * (t = t.height);
  if ((s instanceof Uint8Array || s instanceof Float32Array) && s.length !== o) throw Error("Unsupported channel count: " + s.length / o);
  return e = new N([s], r, !1, e.g.i.canvas, e.M, i, t), n ? e.clone() : e;
}
var se = class extends yr {
  constructor(e, t, r, n) {
    super(e), this.g = e, this.T = t, this.J = r, this.U = n, this.M = new wt();
  }
  l(e, t = !0) {
    if ("runningMode" in e && Ct(this.baseOptions, 2, !!e.runningMode && e.runningMode !== "IMAGE"), e.canvas !== void 0 && this.g.i.canvas !== e.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(e, t);
  }
  close() {
    this.M.close(), super.close();
  }
};
se.prototype.close = se.prototype.close;
var ce = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect_in", !1), this.j = { detections: [] }, g(e = this.h = new zn(), 0, 1, t = new D()), m(this.h, 2, 0.5), m(this.h, 3, 0.3);
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    return "minDetectionConfidence" in e && m(this.h, 2, e.minDetectionConfidence ?? 0.5), "minSuppressionThreshold" in e && m(this.h, 3, e.minSuppressionThreshold ?? 0.3), this.l(e);
  }
  G(e, t) {
    return this.j = { detections: [] }, ke(this, e, t), this.j;
  }
  H(e, t, r) {
    return this.j = { detections: [] }, Ne(this, e, r, t), this.j;
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect_in"), O(e, "detections");
    const t = new ge();
    Ee(t, O2, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect_in"), E(r, "DETECTIONS:detections"), r.o(t), ve(e, r), this.g.attachProtoVectorListener("detections", ((n, s) => {
      for (const i of n) n = ao(i), this.j.detections.push(Ho(n));
      p(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((n) => {
      p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ce.prototype.detectForVideo = ce.prototype.H, ce.prototype.detect = ce.prototype.G, ce.prototype.setOptions = ce.prototype.o, ce.createFromModelPath = async function(e, t) {
  return v(ce, e, { baseOptions: { modelAssetPath: t } });
}, ce.createFromModelBuffer = function(e, t) {
  return v(ce, e, { baseOptions: { modelAssetBuffer: t } });
}, ce.createFromOptions = function(e, t) {
  return v(ce, e, t);
};
var ta = Ae([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]), ra = Ae([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]), na = Ae([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]), t1 = Ae([474, 475], [475, 476], [476, 477], [477, 474]), sa = Ae([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]), ia = Ae([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]), r1 = Ae([469, 470], [470, 471], [471, 472], [472, 469]), oa = Ae([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]), n1 = [...ta, ...ra, ...na, ...sa, ...ia, ...oa], s1 = Ae([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function Xs(e) {
  e.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var C = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect", !1), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, g(e = this.h = new xo(), 0, 1, t = new D()), this.v = new I2(), g(this.h, 0, 3, this.v), this.u = new zn(), g(this.h, 0, 2, this.u), Fe(this.u, 4, 1), m(this.u, 2, 0.5), m(this.v, 2, 0.5), m(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    return "numFaces" in e && Fe(this.u, 4, e.numFaces ?? 1), "minFaceDetectionConfidence" in e && m(this.u, 2, e.minFaceDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && m(this.h, 4, e.minTrackingConfidence ?? 0.5), "minFacePresenceConfidence" in e && m(this.v, 2, e.minFacePresenceConfidence ?? 0.5), "outputFaceBlendshapes" in e && (this.outputFaceBlendshapes = !!e.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in e && (this.outputFacialTransformationMatrixes = !!e.outputFacialTransformationMatrixes), this.l(e);
  }
  G(e, t) {
    return Xs(this), ke(this, e, t), this.j;
  }
  H(e, t, r) {
    return Xs(this), Ne(this, e, r, t), this.j;
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect"), O(e, "face_landmarks");
    const t = new ge();
    Ee(t, C2, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect"), E(r, "NORM_LANDMARKS:face_landmarks"), r.o(t), ve(e, r), this.g.attachProtoVectorListener("face_landmarks", ((n, s) => {
      for (const i of n) n = Mr(i), this.j.faceLandmarks.push($n(n));
      p(this, s);
    })), this.g.attachEmptyPacketListener("face_landmarks", ((n) => {
      p(this, n);
    })), this.outputFaceBlendshapes && (O(e, "blendshapes"), E(r, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", ((n, s) => {
      if (this.outputFaceBlendshapes) for (const i of n) n = Vn(i), this.j.faceBlendshapes.push(Wo(n.g() ?? []));
      p(this, s);
    })), this.g.attachEmptyPacketListener("blendshapes", ((n) => {
      p(this, n);
    }))), this.outputFacialTransformationMatrixes && (O(e, "face_geometry"), E(r, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", ((n, s) => {
      if (this.outputFacialTransformationMatrixes) for (const i of n) (n = _(M2(i), fo, 2)) && this.j.facialTransformationMatrixes.push({ rows: Re(fe(n, 1)) ?? 0, columns: Re(fe(n, 2)) ?? 0, data: it(n, 3, Ke) ?? [] });
      p(this, s);
    })), this.g.attachEmptyPacketListener("face_geometry", ((n) => {
      p(this, n);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
C.prototype.detectForVideo = C.prototype.H, C.prototype.detect = C.prototype.G, C.prototype.setOptions = C.prototype.o, C.createFromModelPath = function(e, t) {
  return v(C, e, { baseOptions: { modelAssetPath: t } });
}, C.createFromModelBuffer = function(e, t) {
  return v(C, e, { baseOptions: { modelAssetBuffer: t } });
}, C.createFromOptions = function(e, t) {
  return v(C, e, t);
}, C.FACE_LANDMARKS_LIPS = ta, C.FACE_LANDMARKS_LEFT_EYE = ra, C.FACE_LANDMARKS_LEFT_EYEBROW = na, C.FACE_LANDMARKS_LEFT_IRIS = t1, C.FACE_LANDMARKS_RIGHT_EYE = sa, C.FACE_LANDMARKS_RIGHT_EYEBROW = ia, C.FACE_LANDMARKS_RIGHT_IRIS = r1, C.FACE_LANDMARKS_FACE_OVAL = oa, C.FACE_LANDMARKS_CONTOURS = n1, C.FACE_LANDMARKS_TESSELATION = s1;
var we = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect", !0), g(e = this.j = new So(), 0, 1, t = new D());
  }
  get baseOptions() {
    return _(this.j, D, 1);
  }
  set baseOptions(e) {
    g(this.j, 0, 1, e);
  }
  o(e) {
    return super.l(e);
  }
  Ua(e, t, r) {
    const n = typeof t != "function" ? t : {};
    if (this.h = typeof t == "function" ? t : r, ke(this, e, n ?? {}), !this.h) return this.u;
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect"), O(e, "stylized_image");
    const t = new ge();
    Ee(t, P2, this.j);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect"), E(r, "STYLIZED_IMAGE:stylized_image"), r.o(t), ve(e, r), this.g.ba("stylized_image", ((n, s) => {
      var i = !this.h, o = n.data, c = n.width;
      const a = c * (n = n.height);
      if (o instanceof Uint8Array) if (o.length === 3 * a) {
        const u = new Uint8ClampedArray(4 * a);
        for (let l = 0; l < a; ++l) u[4 * l] = o[3 * l], u[4 * l + 1] = o[3 * l + 1], u[4 * l + 2] = o[3 * l + 2], u[4 * l + 3] = 255;
        o = new ImageData(u, c, n);
      } else {
        if (o.length !== 4 * a) throw Error("Unsupported channel count: " + o.length / a);
        o = new ImageData(new Uint8ClampedArray(o.buffer, o.byteOffset, o.length), c, n);
      }
      else if (!(o instanceof WebGLTexture)) throw Error(`Unsupported format: ${o.constructor.name}`);
      c = new V([o], !1, !1, this.g.i.canvas, this.M, c, n), this.u = i = i ? c.clone() : c, this.h && this.h(i), p(this, s);
    })), this.g.attachEmptyPacketListener("stylized_image", ((n) => {
      this.u = null, this.h && this.h(null), p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
we.prototype.stylize = we.prototype.Ua, we.prototype.setOptions = we.prototype.o, we.createFromModelPath = function(e, t) {
  return v(we, e, { baseOptions: { modelAssetPath: t } });
}, we.createFromModelBuffer = function(e, t) {
  return v(we, e, { baseOptions: { modelAssetBuffer: t } });
}, we.createFromOptions = function(e, t) {
  return v(we, e, t);
};
var aa = Ae([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function zs(e) {
  e.gestures = [], e.landmarks = [], e.worldLandmarks = [], e.handedness = [];
}
function Ws(e) {
  return e.gestures.length === 0 ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: e.gestures, landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handedness: e.handedness, handednesses: e.handedness };
}
function Hs(e, t = !0) {
  const r = [];
  for (const s of e) {
    var n = Vn(s);
    e = [];
    for (const i of n.g()) n = t && fe(i, 1) != null ? Re(fe(i, 1)) : -1, e.push({ score: Y(i, 2) ?? 0, index: n, categoryName: pe(i, 3) ?? "" ?? "", displayName: pe(i, 4) ?? "" ?? "" });
    r.push(e);
  }
  return r;
}
var ee = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], g(e = this.v = new Uo(), 0, 1, t = new D()), this.B = new Wn(), g(this.v, 0, 2, this.B), this.u = new Io(), g(this.B, 0, 3, this.u), this.h = new Oo(), g(this.B, 0, 2, this.h), this.j = new U2(), g(this.v, 0, 3, this.j), m(this.h, 2, 0.5), m(this.B, 4, 0.5), m(this.u, 2, 0.5);
  }
  get baseOptions() {
    return _(this.v, D, 1);
  }
  set baseOptions(e) {
    g(this.v, 0, 1, e);
  }
  o(e) {
    var s, i, o, c;
    if (Fe(this.h, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && m(this.h, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && m(this.B, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && m(this.u, 2, e.minHandPresenceConfidence ?? 0.5), e.cannedGesturesClassifierOptions) {
      var t = new st(), r = t, n = an(e.cannedGesturesClassifierOptions, (s = _(this.j, st, 3)) == null ? void 0 : s.h());
      g(r, 0, 2, n), g(this.j, 0, 3, t);
    } else e.cannedGesturesClassifierOptions === void 0 && ((i = _(this.j, st, 3)) == null || i.g());
    return e.customGesturesClassifierOptions ? (g(r = t = new st(), 0, 2, n = an(e.customGesturesClassifierOptions, (o = _(this.j, st, 4)) == null ? void 0 : o.h())), g(this.j, 0, 4, t)) : e.customGesturesClassifierOptions === void 0 && ((c = _(this.j, st, 4)) == null || c.g()), this.l(e);
  }
  Pa(e, t) {
    return zs(this), ke(this, e, t), Ws(this);
  }
  Qa(e, t, r) {
    return zs(this), Ne(this, e, r, t), Ws(this);
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect"), O(e, "hand_gestures"), O(e, "hand_landmarks"), O(e, "world_hand_landmarks"), O(e, "handedness");
    const t = new ge();
    Ee(t, N2, this.v);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect"), E(r, "HAND_GESTURES:hand_gestures"), E(r, "LANDMARKS:hand_landmarks"), E(r, "WORLD_LANDMARKS:world_hand_landmarks"), E(r, "HANDEDNESS:handedness"), r.o(t), ve(e, r), this.g.attachProtoVectorListener("hand_landmarks", ((n, s) => {
      for (const i of n) {
        n = Mr(i);
        const o = [];
        for (const c of Be(n, ho, 1)) o.push({ x: Y(c, 1) ?? 0, y: Y(c, 2) ?? 0, z: Y(c, 3) ?? 0 });
        this.landmarks.push(o);
      }
      p(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((n) => {
      p(this, n);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((n, s) => {
      for (const i of n) {
        n = Xn(i);
        const o = [];
        for (const c of Be(n, co, 1)) o.push({ x: Y(c, 1) ?? 0, y: Y(c, 2) ?? 0, z: Y(c, 3) ?? 0 });
        this.worldLandmarks.push(o);
      }
      p(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((n) => {
      p(this, n);
    })), this.g.attachProtoVectorListener("hand_gestures", ((n, s) => {
      this.gestures.push(...Hs(n, !1)), p(this, s);
    })), this.g.attachEmptyPacketListener("hand_gestures", ((n) => {
      p(this, n);
    })), this.g.attachProtoVectorListener("handedness", ((n, s) => {
      this.handedness.push(...Hs(n)), p(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((n) => {
      p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
function Ys(e) {
  return { landmarks: e.landmarks, worldLandmarks: e.worldLandmarks, handednesses: e.handedness, handedness: e.handedness };
}
ee.prototype.recognizeForVideo = ee.prototype.Qa, ee.prototype.recognize = ee.prototype.Pa, ee.prototype.setOptions = ee.prototype.o, ee.createFromModelPath = function(e, t) {
  return v(ee, e, { baseOptions: { modelAssetPath: t } });
}, ee.createFromModelBuffer = function(e, t) {
  return v(ee, e, { baseOptions: { modelAssetBuffer: t } });
}, ee.createFromOptions = function(e, t) {
  return v(ee, e, t);
}, ee.HAND_CONNECTIONS = aa;
var te = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], g(e = this.j = new Wn(), 0, 1, t = new D()), this.u = new Io(), g(this.j, 0, 3, this.u), this.h = new Oo(), g(this.j, 0, 2, this.h), Fe(this.h, 3, 1), m(this.h, 2, 0.5), m(this.u, 2, 0.5), m(this.j, 4, 0.5);
  }
  get baseOptions() {
    return _(this.j, D, 1);
  }
  set baseOptions(e) {
    g(this.j, 0, 1, e);
  }
  o(e) {
    return "numHands" in e && Fe(this.h, 3, e.numHands ?? 1), "minHandDetectionConfidence" in e && m(this.h, 2, e.minHandDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && m(this.j, 4, e.minTrackingConfidence ?? 0.5), "minHandPresenceConfidence" in e && m(this.u, 2, e.minHandPresenceConfidence ?? 0.5), this.l(e);
  }
  G(e, t) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], ke(this, e, t), Ys(this);
  }
  H(e, t, r) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], Ne(this, e, r, t), Ys(this);
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect"), O(e, "hand_landmarks"), O(e, "world_hand_landmarks"), O(e, "handedness");
    const t = new ge();
    Ee(t, B2, this.j);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect"), E(r, "LANDMARKS:hand_landmarks"), E(r, "WORLD_LANDMARKS:world_hand_landmarks"), E(r, "HANDEDNESS:handedness"), r.o(t), ve(e, r), this.g.attachProtoVectorListener("hand_landmarks", ((n, s) => {
      for (const i of n) n = Mr(i), this.landmarks.push($n(n));
      p(this, s);
    })), this.g.attachEmptyPacketListener("hand_landmarks", ((n) => {
      p(this, n);
    })), this.g.attachProtoVectorListener("world_hand_landmarks", ((n, s) => {
      for (const i of n) n = Xn(i), this.worldLandmarks.push(Yo(n));
      p(this, s);
    })), this.g.attachEmptyPacketListener("world_hand_landmarks", ((n) => {
      p(this, n);
    })), this.g.attachProtoVectorListener("handedness", ((n, s) => {
      var i = this.handedness, o = i.push;
      const c = [];
      for (const a of n) {
        n = Vn(a);
        const u = [];
        for (const l of n.g()) u.push({ score: Y(l, 2) ?? 0, index: Re(fe(l, 1)) ?? -1, categoryName: pe(l, 3) ?? "" ?? "", displayName: pe(l, 4) ?? "" ?? "" });
        c.push(u);
      }
      o.call(i, ...c), p(this, s);
    })), this.g.attachEmptyPacketListener("handedness", ((n) => {
      p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
te.prototype.detectForVideo = te.prototype.H, te.prototype.detect = te.prototype.G, te.prototype.setOptions = te.prototype.o, te.createFromModelPath = function(e, t) {
  return v(te, e, { baseOptions: { modelAssetPath: t } });
}, te.createFromModelBuffer = function(e, t) {
  return v(te, e, { baseOptions: { modelAssetBuffer: t } });
}, te.createFromOptions = function(e, t) {
  return v(te, e, t);
}, te.HAND_CONNECTIONS = aa;
var ue = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "input_image", "norm_rect", !0), this.j = { classifications: [] }, g(e = this.h = new Do(), 0, 1, t = new D());
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    return g(this.h, 0, 2, an(e, _(this.h, Ir, 2))), this.l(e);
  }
  ya(e, t) {
    return this.j = { classifications: [] }, ke(this, e, t), this.j;
  }
  za(e, t, r) {
    return this.j = { classifications: [] }, Ne(this, e, r, t), this.j;
  }
  m() {
    var e = new ae();
    I(e, "input_image"), I(e, "norm_rect"), O(e, "classifications");
    const t = new ge();
    Ee(t, G2, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), S(r, "IMAGE:input_image"), S(r, "NORM_RECT:norm_rect"), E(r, "CLASSIFICATIONS:classifications"), r.o(t), ve(e, r), this.g.attachProtoListener("classifications", ((n, s) => {
      this.j = (function(i) {
        const o = { classifications: Be(i, b2, 1).map(((c) => {
          var a;
          return Wo(((a = _(c, jn, 4)) == null ? void 0 : a.g()) ?? [], Re(fe(c, 2)), pe(c, 3) ?? "");
        })) };
        return fr(ut(i, 2)) != null && (o.timestampMs = Re(fr(ut(i, 2)))), o;
      })(x2(n)), p(this, s);
    })), this.g.attachEmptyPacketListener("classifications", ((n) => {
      p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ue.prototype.classifyForVideo = ue.prototype.za, ue.prototype.classify = ue.prototype.ya, ue.prototype.setOptions = ue.prototype.o, ue.createFromModelPath = function(e, t) {
  return v(ue, e, { baseOptions: { modelAssetPath: t } });
}, ue.createFromModelBuffer = function(e, t) {
  return v(ue, e, { baseOptions: { modelAssetBuffer: t } });
}, ue.createFromOptions = function(e, t) {
  return v(ue, e, t);
};
var re = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect", !0), this.h = new Bo(), this.embeddings = { embeddings: [] }, g(e = this.h, 0, 1, t = new D());
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    var t = this.h, r = _(this.h, As, 2);
    return r = r ? r.clone() : new As(), e.l2Normalize !== void 0 ? Ct(r, 1, e.l2Normalize) : "l2Normalize" in e && x(r, 1), e.quantize !== void 0 ? Ct(r, 2, e.quantize) : "quantize" in e && x(r, 2), g(t, 0, 2, r), this.l(e);
  }
  Fa(e, t) {
    return ke(this, e, t), this.embeddings;
  }
  Ga(e, t, r) {
    return Ne(this, e, r, t), this.embeddings;
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect"), O(e, "embeddings_out");
    const t = new ge();
    Ee(t, j2, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect"), E(r, "EMBEDDINGS:embeddings_out"), r.o(t), ve(e, r), this.g.attachProtoListener("embeddings_out", ((n, s) => {
      n = R2(n), this.embeddings = (function(i) {
        return { embeddings: Be(i, S2, 1).map(((o) => {
          var a, u;
          const c = { headIndex: Re(fe(o, 3)) ?? -1, headName: pe(o, 4) ?? "" ?? "" };
          if (Mi(o, sn, Vr(o, 1)) !== void 0) o = it(o = _(o, sn, Vr(o, 1)), 1, Ke), c.floatEmbedding = o;
          else {
            const l = new Uint8Array(0);
            c.quantizedEmbedding = ((u = (a = _(o, k2, Vr(o, 2))) == null ? void 0 : a.ua()) == null ? void 0 : u.wa()) ?? l;
          }
          return c;
        })), timestampMs: Re(fr(ut(i, 2))) };
      })(n), p(this, s);
    })), this.g.attachEmptyPacketListener("embeddings_out", ((n) => {
      p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
re.cosineSimilarity = function(e, t) {
  if (e.floatEmbedding && t.floatEmbedding) e = Ss(e.floatEmbedding, t.floatEmbedding);
  else {
    if (!e.quantizedEmbedding || !t.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    e = Ss(ks(e.quantizedEmbedding), ks(t.quantizedEmbedding));
  }
  return e;
}, re.prototype.embedForVideo = re.prototype.Ga, re.prototype.embed = re.prototype.Fa, re.prototype.setOptions = re.prototype.o, re.createFromModelPath = function(e, t) {
  return v(re, e, { baseOptions: { modelAssetPath: t } });
}, re.createFromModelBuffer = function(e, t) {
  return v(re, e, { baseOptions: { modelAssetBuffer: t } });
}, re.createFromOptions = function(e, t) {
  return v(re, e, t);
};
var vr = class {
  constructor(e, t, r) {
    this.confidenceMasks = e, this.categoryMask = t, this.qualityScores = r;
  }
  close() {
    var e, t;
    (e = this.confidenceMasks) == null || e.forEach(((r) => {
      r.close();
    })), (t = this.categoryMask) == null || t.close();
  }
};
function $s(e) {
  e.categoryMask = void 0, e.confidenceMasks = void 0, e.qualityScores = void 0;
}
function Ks(e) {
  try {
    const t = new vr(e.confidenceMasks, e.categoryMask, e.qualityScores);
    if (!e.j) return t;
    e.j(t);
  } finally {
    qn(e);
  }
}
vr.prototype.close = vr.prototype.close;
var K = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new Hn(), this.v = new No(), g(this.h, 0, 3, this.v), g(e = this.h, 0, 1, t = new D());
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? x(this.h, 2, Vt(e.displayNamesLocale)) : "displayNamesLocale" in e && x(this.h, 2), "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  N() {
    (function(e) {
      var r, n;
      const t = Be(e.da(), Q, 1).filter(((s) => (pe(s, 1) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));
      if (e.u = [], 1 < t.length) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      t.length === 1 && (((n = (r = _(t[0], ge, 7)) == null ? void 0 : r.l()) == null ? void 0 : n.g()) ?? /* @__PURE__ */ new Map()).forEach(((s, i) => {
        e.u[Number(i)] = pe(s, 1) ?? "";
      }));
    })(this);
  }
  ea(e, t, r) {
    const n = typeof t != "function" ? t : {};
    return this.j = typeof t == "function" ? t : r, $s(this), ke(this, e, n), Ks(this);
  }
  Sa(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    return this.j = typeof r == "function" ? r : n, $s(this), Ne(this, e, s, t), Ks(this);
  }
  Ja() {
    return this.u;
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect");
    const t = new ge();
    Ee(t, jo, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect"), r.o(t), ve(e, r), Kn(this, e), this.outputConfidenceMasks && (O(e, "confidence_masks"), E(r, "CONFIDENCE_MASKS:confidence_masks"), Pt(this, "confidence_masks"), this.g.ca("confidence_masks", ((n, s) => {
      this.confidenceMasks = n.map(((i) => Dt(this, i, !0, !this.j))), p(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((n) => {
      this.confidenceMasks = [], p(this, n);
    }))), this.outputCategoryMask && (O(e, "category_mask"), E(r, "CATEGORY_MASK:category_mask"), Pt(this, "category_mask"), this.g.ba("category_mask", ((n, s) => {
      this.categoryMask = Dt(this, n, !1, !this.j), p(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((n) => {
      this.categoryMask = void 0, p(this, n);
    }))), O(e, "quality_scores"), E(r, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((n, s) => {
      this.qualityScores = n, p(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((n) => {
      this.categoryMask = void 0, p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
K.prototype.getLabels = K.prototype.Ja, K.prototype.segmentForVideo = K.prototype.Sa, K.prototype.segment = K.prototype.ea, K.prototype.setOptions = K.prototype.o, K.createFromModelPath = function(e, t) {
  return v(K, e, { baseOptions: { modelAssetPath: t } });
}, K.createFromModelBuffer = function(e, t) {
  return v(K, e, { baseOptions: { modelAssetBuffer: t } });
}, K.createFromOptions = function(e, t) {
  return v(K, e, t);
};
var _r = class {
  constructor(e, t, r) {
    this.confidenceMasks = e, this.categoryMask = t, this.qualityScores = r;
  }
  close() {
    var e, t;
    (e = this.confidenceMasks) == null || e.forEach(((r) => {
      r.close();
    })), (t = this.categoryMask) == null || t.close();
  }
};
_r.prototype.close = _r.prototype.close;
var i1 = class extends h {
  constructor(e) {
    super(e);
  }
}, dt = [0, B, -2], o1 = [0, De, -3, j], Ur = [0, De, -3, j, De, -1], ca = [0, Ur], a1 = [0, ca, dt], c1 = [0, Ur, dt], ua = [0, Ur, B, -1], u1 = [0, ua, dt], h1 = [0, De, -3, j, dt, -1], l1 = [0, De, -3, j, Oe], Hr = class extends h {
  constructor(e) {
    super(e);
  }
}, qs = [0, De, -1, j], ha = class extends h {
  constructor() {
    super();
  }
};
ha.A = [1];
var Js = class extends h {
  constructor(e) {
    super(e);
  }
}, hn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15], f1 = [0, hn, F, Ur, F, c1, F, ca, F, a1, F, qs, F, l1, F, o1, F, [0, L, De, -2, j, B, j, -1, 2, De, dt], F, ua, F, u1, De, dt, L, F, h1, F, [0, X, qs]], d1 = [0, L, B, -1, j], ln = class extends h {
  constructor() {
    super();
  }
};
ln.A = [1], ln.prototype.g = Gn([0, X, f1, L, d1]);
var Te = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new Hn(), this.v = new No(), g(this.h, 0, 3, this.v), g(e = this.h, 0, 1, t = new D());
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    return "outputCategoryMask" in e && (this.outputCategoryMask = e.outputCategoryMask ?? !1), "outputConfidenceMasks" in e && (this.outputConfidenceMasks = e.outputConfidenceMasks ?? !0), super.l(e);
  }
  ea(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    this.j = typeof r == "function" ? r : n, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, r = this.I + 1, n = new ln();
    const i = new Js();
    var o = new i1();
    if (Fe(o, 1, 255), g(i, 0, 12, o), t.keypoint && t.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (t.keypoint) {
      var c = new Hr();
      Ct(c, 3, !0), m(c, 1, t.keypoint.x), m(c, 2, t.keypoint.y), Lt(i, 5, hn, c);
    } else {
      if (!t.scribble) throw Error("Must provide either a keypoint or a scribble.");
      for (c of (o = new ha(), t.scribble)) Ct(t = new Hr(), 3, !0), m(t, 1, c.x), m(t, 2, c.y), nn(o, Hr, t);
      Lt(i, 15, hn, o);
    }
    nn(n, Js, i), this.g.addProtoToStream(n.g(), "drishti.RenderData", "roi_in", r), ke(this, e, s);
    e: {
      try {
        const u = new _r(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var a = u;
          break e;
        }
        this.j(u);
      } finally {
        qn(this);
      }
      a = void 0;
    }
    return a;
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "roi_in"), I(e, "norm_rect_in");
    const t = new ge();
    Ee(t, jo, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), S(r, "IMAGE:image_in"), S(r, "ROI:roi_in"), S(r, "NORM_RECT:norm_rect_in"), r.o(t), ve(e, r), Kn(this, e), this.outputConfidenceMasks && (O(e, "confidence_masks"), E(r, "CONFIDENCE_MASKS:confidence_masks"), Pt(this, "confidence_masks"), this.g.ca("confidence_masks", ((n, s) => {
      this.confidenceMasks = n.map(((i) => Dt(this, i, !0, !this.j))), p(this, s);
    })), this.g.attachEmptyPacketListener("confidence_masks", ((n) => {
      this.confidenceMasks = [], p(this, n);
    }))), this.outputCategoryMask && (O(e, "category_mask"), E(r, "CATEGORY_MASK:category_mask"), Pt(this, "category_mask"), this.g.ba("category_mask", ((n, s) => {
      this.categoryMask = Dt(this, n, !1, !this.j), p(this, s);
    })), this.g.attachEmptyPacketListener("category_mask", ((n) => {
      this.categoryMask = void 0, p(this, n);
    }))), O(e, "quality_scores"), E(r, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", ((n, s) => {
      this.qualityScores = n, p(this, s);
    })), this.g.attachEmptyPacketListener("quality_scores", ((n) => {
      this.categoryMask = void 0, p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
Te.prototype.segment = Te.prototype.ea, Te.prototype.setOptions = Te.prototype.o, Te.createFromModelPath = function(e, t) {
  return v(Te, e, { baseOptions: { modelAssetPath: t } });
}, Te.createFromModelBuffer = function(e, t) {
  return v(Te, e, { baseOptions: { modelAssetBuffer: t } });
}, Te.createFromOptions = function(e, t) {
  return v(Te, e, t);
};
var he = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "input_frame_gpu", "norm_rect", !1), this.j = { detections: [] }, g(e = this.h = new Yn(), 0, 1, t = new D());
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    return e.displayNamesLocale !== void 0 ? x(this.h, 2, Vt(e.displayNamesLocale)) : "displayNamesLocale" in e && x(this.h, 2), e.maxResults !== void 0 ? Fe(this.h, 3, e.maxResults) : "maxResults" in e && x(this.h, 3), e.scoreThreshold !== void 0 ? m(this.h, 4, e.scoreThreshold) : "scoreThreshold" in e && x(this.h, 4), e.categoryAllowlist !== void 0 ? gr(this.h, 5, e.categoryAllowlist) : "categoryAllowlist" in e && x(this.h, 5), e.categoryDenylist !== void 0 ? gr(this.h, 6, e.categoryDenylist) : "categoryDenylist" in e && x(this.h, 6), this.l(e);
  }
  G(e, t) {
    return this.j = { detections: [] }, ke(this, e, t), this.j;
  }
  H(e, t, r) {
    return this.j = { detections: [] }, Ne(this, e, r, t), this.j;
  }
  m() {
    var e = new ae();
    I(e, "input_frame_gpu"), I(e, "norm_rect"), O(e, "detections");
    const t = new ge();
    Ee(t, X2, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.ObjectDetectorGraph"), S(r, "IMAGE:input_frame_gpu"), S(r, "NORM_RECT:norm_rect"), E(r, "DETECTIONS:detections"), r.o(t), ve(e, r), this.g.attachProtoVectorListener("detections", ((n, s) => {
      for (const i of n) n = ao(i), this.j.detections.push(Ho(n));
      p(this, s);
    })), this.g.attachEmptyPacketListener("detections", ((n) => {
      p(this, n);
    })), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
he.prototype.detectForVideo = he.prototype.H, he.prototype.detect = he.prototype.G, he.prototype.setOptions = he.prototype.o, he.createFromModelPath = async function(e, t) {
  return v(he, e, { baseOptions: { modelAssetPath: t } });
}, he.createFromModelBuffer = function(e, t) {
  return v(he, e, { baseOptions: { modelAssetBuffer: t } });
}, he.createFromOptions = function(e, t) {
  return v(he, e, t);
};
function Zs(e) {
  e.landmarks = [], e.worldLandmarks = [], e.v = void 0;
}
function Qs(e) {
  try {
    const t = new class {
      constructor(r, n, s) {
        this.landmarks = r, this.worldLandmarks = n, this.g = s;
      }
      close() {
        var r;
        (r = this.g) == null || r.forEach(((n) => {
          n.close();
        }));
      }
    }(e.landmarks, e.worldLandmarks, e.v);
    if (!e.u) return t;
    e.u(t);
  } finally {
    qn(e);
  }
}
var ne = class extends se {
  constructor(e, t) {
    super(new xe(e, t), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, g(e = this.h = new zo(), 0, 1, t = new D()), this.B = new W2(), g(this.h, 0, 3, this.B), this.j = new z2(), g(this.h, 0, 2, this.j), Fe(this.j, 4, 1), m(this.j, 2, 0.5), m(this.B, 2, 0.5), m(this.h, 4, 0.5);
  }
  get baseOptions() {
    return _(this.h, D, 1);
  }
  set baseOptions(e) {
    g(this.h, 0, 1, e);
  }
  o(e) {
    return "numPoses" in e && Fe(this.j, 4, e.numPoses ?? 1), "minPoseDetectionConfidence" in e && m(this.j, 2, e.minPoseDetectionConfidence ?? 0.5), "minTrackingConfidence" in e && m(this.h, 4, e.minTrackingConfidence ?? 0.5), "minPosePresenceConfidence" in e && m(this.B, 2, e.minPosePresenceConfidence ?? 0.5), "outputSegmentationMasks" in e && (this.outputSegmentationMasks = e.outputSegmentationMasks ?? !1), this.l(e);
  }
  G(e, t, r) {
    const n = typeof t != "function" ? t : {};
    return this.u = typeof t == "function" ? t : r, Zs(this), ke(this, e, n), Qs(this);
  }
  H(e, t, r, n) {
    const s = typeof r != "function" ? r : {};
    return this.u = typeof r == "function" ? r : n, Zs(this), Ne(this, e, s, t), Qs(this);
  }
  m() {
    var e = new ae();
    I(e, "image_in"), I(e, "norm_rect"), O(e, "normalized_landmarks"), O(e, "world_landmarks"), O(e, "segmentation_masks");
    const t = new ge();
    Ee(t, Y2, this.h);
    const r = new Q();
    ye(r, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), S(r, "IMAGE:image_in"), S(r, "NORM_RECT:norm_rect"), E(r, "NORM_LANDMARKS:normalized_landmarks"), E(r, "WORLD_LANDMARKS:world_landmarks"), r.o(t), ve(e, r), Kn(this, e), this.g.attachProtoVectorListener("normalized_landmarks", ((n, s) => {
      this.landmarks = [];
      for (const i of n) n = Mr(i), this.landmarks.push($n(n));
      p(this, s);
    })), this.g.attachEmptyPacketListener("normalized_landmarks", ((n) => {
      this.landmarks = [], p(this, n);
    })), this.g.attachProtoVectorListener("world_landmarks", ((n, s) => {
      this.worldLandmarks = [];
      for (const i of n) n = Xn(i), this.worldLandmarks.push(Yo(n));
      p(this, s);
    })), this.g.attachEmptyPacketListener("world_landmarks", ((n) => {
      this.worldLandmarks = [], p(this, n);
    })), this.outputSegmentationMasks && (E(r, "SEGMENTATION_MASK:segmentation_masks"), Pt(this, "segmentation_masks"), this.g.ca("segmentation_masks", ((n, s) => {
      this.v = n.map(((i) => Dt(this, i, !0, !this.u))), p(this, s);
    })), this.g.attachEmptyPacketListener("segmentation_masks", ((n) => {
      this.v = [], p(this, n);
    }))), e = e.g(), this.setGraph(new Uint8Array(e), !0);
  }
};
ne.prototype.detectForVideo = ne.prototype.H, ne.prototype.detect = ne.prototype.G, ne.prototype.setOptions = ne.prototype.o, ne.createFromModelPath = function(e, t) {
  return v(ne, e, { baseOptions: { modelAssetPath: t } });
}, ne.createFromModelBuffer = function(e, t) {
  return v(ne, e, { baseOptions: { modelAssetBuffer: t } });
}, ne.createFromOptions = function(e, t) {
  return v(ne, e, t);
}, ne.POSE_CONNECTIONS = Ae([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
const p1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DrawingUtils: $,
  FaceDetector: ce,
  FaceLandmarker: C,
  FaceStylizer: we,
  FilesetResolver: At,
  GestureRecognizer: ee,
  HandLandmarker: te,
  ImageClassifier: ue,
  ImageEmbedder: re,
  ImageSegmenter: K,
  ImageSegmenterResult: vr,
  InteractiveSegmenter: Te,
  InteractiveSegmenterResult: _r,
  MPImage: V,
  MPMask: N,
  ObjectDetector: he,
  PoseLandmarker: ne,
  TaskRunner: yr,
  VisionTaskRunner: se
}, Symbol.toStringTag, { value: "Module" }));
export {
  ce as $,
  At as C,
  p1 as v
};
