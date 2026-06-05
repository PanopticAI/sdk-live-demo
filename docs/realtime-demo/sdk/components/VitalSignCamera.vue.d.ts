/**
 * Vue component for performing vital sign scanning using computer vision and AI.
 *
 * This component provides a high-level interface for capturing and analyzing vital signs
 * such as heart rate, blood pressure, respiratory rate, and other health metrics from
 * video streams. It integrates with the PanopticAI Vital Sign Camera SDK to provide
 * real-time health analysis through facial video analysis.
 *
 * The component automatically handles camera access, face detection, condition checking,
 * and health result computation. It emits events for real-time monitoring of the scanning
 * process and provides methods to control the scanning lifecycle.
 *
 * @example
 * ```javascript
 * import { VitalSignCamera } from 'vue-vital-sign-camera'
 *
 * // In your Vue component
 * <VitalSignCamera
 *   :is-active="isScanning"
 *   :user-info="userInfo"
 *   :config="engineConfig"
 *   @on-video-frame-processed="handleFrameProcessed"
 *   @on-initialized="handleInitialized"
 *   @on-error="handleError"
 * />
 * ```
 */
import { PropType } from "vue";
import { type UserInfo, type VitalSignEngineConfig, FaceDetectorType, PresetFormat, type VisualizationOptions, type CustomConditionRange, type FaceDetectionRegion, FaceDetectionModelLocation, type SdkCredentials, PrecisionMode, type VideoFrameProcessedEvent, type VideoSettingsUpdatedEvent, type PrecisionModeUpdatedEvent, type PrecisionModeWillUpdateEvent, type CameraDevicesUpdatedEvent, type FrameGrabberConfig, type ModelLoadingProgressEvent, type RealtimeEstimationConfig, type ConditionCheckerConfig } from "ts-vital-sign-camera";
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    precisionMode: PropType<PrecisionMode>;
    isActive: {
        type: BooleanConstructor;
        required: true;
    };
    userInfo: {
        type: PropType<UserInfo>;
        required: true;
    };
    config: {
        type: PropType<VitalSignEngineConfig>;
    };
    sdkCredentials: {
        type: PropType<SdkCredentials>;
    };
    device: StringConstructor;
    faceDetectorType: PropType<FaceDetectorType>;
    presetFormat: PropType<PresetFormat>;
    checkBrightness: {
        type: BooleanConstructor;
        default: undefined;
    };
    maxFps: NumberConstructor;
    maxFaceDetectionFps: NumberConstructor;
    faceDetectionSamplingInterval: NumberConstructor;
    preferredCamera: StringConstructor;
    disableAgeEstimation: {
        type: BooleanConstructor;
        default: undefined;
    };
    enableBeautyAnalysis: {
        type: BooleanConstructor;
        default: undefined;
    };
    visualizationOptions: PropType<VisualizationOptions>;
    customConditionRange: PropType<CustomConditionRange>;
    faceDetectionRegion: PropType<FaceDetectionRegion>;
    faceDetectionModelLocation: {
        type: PropType<FaceDetectionModelLocation>;
        default: undefined;
    };
    frameGrabberConfig: PropType<FrameGrabberConfig>;
    realtimeEstimationConfig: PropType<RealtimeEstimationConfig>;
    conditionCheckerConfig: PropType<ConditionCheckerConfig>;
    videoSrc: StringConstructor;
}>, {}, {
    vscam: import("vue").Raw<import("ts-vital-sign-camera").VitalSignCameraInterface>;
}, {}, {
    /**
     * Starts the vital sign scanning process.
     * Initiates the measurement sequence where video frames are captured and analyzed
     * for health metrics. The component must be initialized and active before calling this method.
     *
     * @example
     * ```javascript
     * const cameraComponent = // reference to VitalSignCamera component
     * cameraComponent.startScanning();
     * ```
     */
    startScanning(): void;
    /**
     * Stops the currently running vital sign scanning process.
     * Halts frame capture and analysis. The camera remains active but stops processing
     * health data. Call this when the user wants to pause or end the measurement.
     *
     * @example
     * ```javascript
     * const cameraComponent = // reference to VitalSignCamera component
     * cameraComponent.stopScanning();
     * ```
     */
    stopScanning(): void;
    /**
     * Waits for the camera to completely stop all operations.
     * Returns a promise that resolves when the camera has finished stopping.
     * Useful for ensuring clean shutdown before unmounting the component or
     * performing other operations that require the camera to be idle.
     *
     * @param timeoutMS - Optional timeout in milliseconds. If not provided, waits indefinitely.
     * @returns Promise that resolves to true when camera has stopped, false if timeout occurred
     *
     * @example
     * ```javascript
     * const cameraComponent = // reference to VitalSignCamera component
     * await cameraComponent.waitCameraToStop();
     * console.log('Camera has stopped');
     * ```
     */
    waitCameraToStop(): Promise<boolean>;
    /**
     * Returns the last HTTP request payload sent to the V2 backend.
     * Useful for debugging or logging the exact request payload being used.
     */
    getLastRequestV2(): string | undefined;
    /**
     * Returns the last HTTP response payload received from the V2 backend.
     * Useful for debugging or logging the raw backend response.
     */
    getLastResponseV2(): string | undefined;
    /**
     * Upload saved request data to S3 using a developer-provided presign callback.
     * See SDK docs for server-side presign example and security requirements.
     */
    saveScanDataToS3(bucket: string, requestDirectory?: string, responseDirectory?: string, shouldEncrypt?: boolean): Promise<{
        request: any;
        response?: any;
    }>;
    /**
     * Sets the face detection region for limiting face detection to a specific area.
     * This can improve performance by focusing detection on a particular part of the frame,
     * or exclude unwanted areas. Pass undefined to reset to full frame detection.
     *
     * @param faceDetectionRegion - The region definition, or undefined to use full frame
     *
     * @example
     * ```javascript
     * const cameraComponent = // reference to VitalSignCamera component
     * // Limit detection to center 50% of frame
     * cameraComponent.setFaceDetectionRegion({
     *   x: 0.25, y: 0.25, width: 0.5, height: 0.5
     * });
     * ```
     */
    setFaceDetectionRegion(faceDetectionRegion: FaceDetectionRegion | undefined): void;
    /**
     * Sets custom condition ranges for scan validation.
     * Allows customization of acceptable face distance and position ranges during scanning.
     * Pass undefined to use default ranges.
     *
     * @param customConditionRange - Custom ranges for distance and boundary conditions, or undefined for defaults
     * @deprecated This method is deprecated. Use conditionCheckerConfig instead.
     *
     * @example
     * ```javascript
     * const cameraComponent = // reference to VitalSignCamera component
     * cameraComponent.setCustomConditionRange({
     *   distanceRange: [20, 100], // 20-100 cm
     *   boundaryRangeX: { min: 0.1, max: 0.9 } // 10%-90% of frame width
     * });
     * ```
     */
    setCustomConditionRange(customConditionRange: CustomConditionRange | undefined): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onVideoFrameProcessed: (_event: VideoFrameProcessedEvent) => true;
    onVideoSettingsUpdated: (_event: VideoSettingsUpdatedEvent) => true;
    onCameraDevicesUpdated: (_event: CameraDevicesUpdatedEvent) => true;
    onPrecisionModeUpdated: (_event: PrecisionModeUpdatedEvent) => true;
    onPrecisionModeWillUpdate: (_event: PrecisionModeWillUpdateEvent) => true;
    onInitialized: () => true;
    onError: (_error: unknown) => true;
    onModelLoadingProgress: (_progress: ModelLoadingProgressEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    precisionMode: PropType<PrecisionMode>;
    isActive: {
        type: BooleanConstructor;
        required: true;
    };
    userInfo: {
        type: PropType<UserInfo>;
        required: true;
    };
    config: {
        type: PropType<VitalSignEngineConfig>;
    };
    sdkCredentials: {
        type: PropType<SdkCredentials>;
    };
    device: StringConstructor;
    faceDetectorType: PropType<FaceDetectorType>;
    presetFormat: PropType<PresetFormat>;
    checkBrightness: {
        type: BooleanConstructor;
        default: undefined;
    };
    maxFps: NumberConstructor;
    maxFaceDetectionFps: NumberConstructor;
    faceDetectionSamplingInterval: NumberConstructor;
    preferredCamera: StringConstructor;
    disableAgeEstimation: {
        type: BooleanConstructor;
        default: undefined;
    };
    enableBeautyAnalysis: {
        type: BooleanConstructor;
        default: undefined;
    };
    visualizationOptions: PropType<VisualizationOptions>;
    customConditionRange: PropType<CustomConditionRange>;
    faceDetectionRegion: PropType<FaceDetectionRegion>;
    faceDetectionModelLocation: {
        type: PropType<FaceDetectionModelLocation>;
        default: undefined;
    };
    frameGrabberConfig: PropType<FrameGrabberConfig>;
    realtimeEstimationConfig: PropType<RealtimeEstimationConfig>;
    conditionCheckerConfig: PropType<ConditionCheckerConfig>;
    videoSrc: StringConstructor;
}>> & Readonly<{
    onOnVideoFrameProcessed?: ((_event: VideoFrameProcessedEvent) => any) | undefined;
    onOnVideoSettingsUpdated?: ((_event: VideoSettingsUpdatedEvent) => any) | undefined;
    onOnCameraDevicesUpdated?: ((_event: CameraDevicesUpdatedEvent) => any) | undefined;
    onOnPrecisionModeUpdated?: ((_event: PrecisionModeUpdatedEvent) => any) | undefined;
    onOnPrecisionModeWillUpdate?: ((_event: PrecisionModeWillUpdateEvent) => any) | undefined;
    onOnInitialized?: (() => any) | undefined;
    onOnError?: ((_error: unknown) => any) | undefined;
    onOnModelLoadingProgress?: ((_progress: ModelLoadingProgressEvent) => any) | undefined;
}>, {
    checkBrightness: boolean;
    disableAgeEstimation: boolean;
    enableBeautyAnalysis: boolean;
    faceDetectionModelLocation: FaceDetectionModelLocation;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
