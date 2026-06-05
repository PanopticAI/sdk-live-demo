import { defineComponent as a, markRaw as s, openBlock as r, createElementBlock as c } from "vue";
import { globalOptions as d, createVitalSignCamera as m } from "ts-vital-sign-camera";
export * from "ts-vital-sign-camera";
const p = a({
  name: "VitalSignCamera",
  props: {
    precisionMode: String,
    isActive: {
      type: Boolean,
      required: !0
    },
    userInfo: {
      type: Object,
      required: !0
    },
    config: {
      type: Object
    },
    sdkCredentials: {
      type: Object
    },
    device: String,
    faceDetectorType: Number,
    presetFormat: Number,
    checkBrightness: {
      type: Boolean,
      default: void 0
    },
    maxFps: Number,
    maxFaceDetectionFps: Number,
    faceDetectionSamplingInterval: Number,
    preferredCamera: String,
    disableAgeEstimation: {
      type: Boolean,
      default: void 0
    },
    enableBeautyAnalysis: {
      type: Boolean,
      default: void 0
    },
    visualizationOptions: Object,
    customConditionRange: Object,
    faceDetectionRegion: Object,
    faceDetectionModelLocation: {
      type: String,
      default: void 0
    },
    frameGrabberConfig: Object,
    realtimeEstimationConfig: Object,
    conditionCheckerConfig: Object,
    videoSrc: String
  },
  emits: {
    onVideoFrameProcessed: (e) => !0,
    onVideoSettingsUpdated: (e) => !0,
    onCameraDevicesUpdated: (e) => !0,
    onPrecisionModeUpdated: (e) => !0,
    onPrecisionModeWillUpdate: (e) => !0,
    onInitialized: () => !0,
    onError: (e) => !0,
    onModelLoadingProgress: (e) => !0
  },
  data() {
    d.loadModelsFromRoot = !1;
    const e = { ...this.$props };
    Object.keys(e).forEach((t) => {
      const i = e[t];
      i && typeof i == "object" && (e[t] = Array.isArray(i) ? [...i] : { ...i });
    }), console.log("[VitalSignCamera] Initializing with props:", e);
    const o = m({
      ...e,
      onVideoFrameProcessed: (t) => {
        this.$emit("onVideoFrameProcessed", t);
      },
      onVideoSettingsUpdated: (t) => {
        this.$emit("onVideoSettingsUpdated", t);
      },
      onCameraDevicesUpdated: (t) => {
        this.$emit("onCameraDevicesUpdated", t);
      },
      onPrecisionModeUpdated: (t) => {
        this.$emit("onPrecisionModeUpdated", t);
      },
      onPrecisionModeWillUpdate: (t) => {
        this.$emit("onPrecisionModeWillUpdate", t);
      },
      onInitialized: () => {
        this.$emit("onInitialized");
      },
      onError: (t) => {
        this.$emit("onError", t);
      },
      onModelLoadingProgress: (t) => {
        this.$emit("onModelLoadingProgress", t);
      }
    });
    return { vscam: s(o) };
  },
  mounted() {
    window.__vital_sign_camera__ = this;
    let e = this.$refs.video;
    this.vscam.bind(e);
  },
  beforeUnmount() {
    this.vscam.destroy();
  },
  watch: {
    device(e) {
      this.vscam.device = e;
    },
    isActive(e) {
      this.vscam.isActive = e;
    },
    config: {
      handler(e) {
        e !== void 0 && (this.vscam.config = e);
      },
      deep: !0
    },
    maxFps(e) {
      e !== void 0 && (this.vscam.maxFps = e);
    },
    userInfo: {
      handler(e) {
        this.vscam.userInfo = e;
      },
      deep: !0
    },
    visualizationOptions: {
      handler(e) {
        this.vscam.visualizationOptions = e;
      },
      deep: !0
    },
    faceDetectionRegion: {
      handler(e) {
        this.vscam.faceDetectionRegion = e;
      },
      deep: !0
    },
    customConditionRange: {
      handler(e) {
        this.vscam.customConditionRange = e;
      },
      deep: !0
    },
    precisionMode(e) {
      this.vscam.precisionMode = e;
    },
    realtimeEstimationConfig: {
      handler(e) {
        this.vscam.realtimeEstimationConfig = { ...e };
      },
      deep: !0
    }
  },
  methods: {
    startScanning() {
      this.vscam.startScanning();
    },
    stopScanning() {
      this.vscam.stopScanning();
    },
    async waitCameraToStop() {
      return this.vscam.waitCameraToStop();
    },
    getLastRequestV2() {
      return this.vscam.getLastRequestV2();
    },
    getLastResponseV2() {
      return this.vscam.getLastResponseV2();
    },
    async saveScanDataToS3(e, o, t, i) {
      return this.vscam.saveScanDataToS3(e, o, t, i);
    },
    setFaceDetectionRegion(e) {
      this.vscam.faceDetectionRegion = e;
    },
    setCustomConditionRange(e) {
      this.vscam.customConditionRange = e;
    }
  }
});
const l = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [i, n] of o)
    t[i] = n;
  return t;
}, v = ["src"];
function g(e, o, t, i, n, u) {
  return r(), c("video", {
    ref: "video",
    autoplay: "true",
    playsinline: "",
    src: e.videoSrc
  }, null, 8, v);
}
const _ = /* @__PURE__ */ l(p, [["render", g], ["__scopeId", "data-v-9d17c8b5"]]);
export {
  _ as VitalSignCamera
};
