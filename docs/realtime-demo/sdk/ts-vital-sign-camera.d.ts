/**
 * Configuration options for age estimation.
 */
export declare interface AgeEstimationConfig {
    /** Whether to perform early age estimation before full scanning begins. */
    earlyEstimation?: boolean;
}

/**
 * The result of the beauty analysis
 */
export declare interface BeautyAnalysis {
    /** The severity of acne. */
    acne: Severity;
    /** The severity of dark circles. */
    darkCircle: Severity;
    /** The severity of eye bags. */
    eyeBags: Severity;
    /** The shape of the eyes. */
    eyeShape: EyeShape;
    /** The shape of the face. */
    faceShape: FaceShape;
    /** The shape of the lips. */
    lipsShape: LipsShape;
    /** The severity of pigmentation. */
    pigmentation: Severity;
    /** The severity of redness. */
    redness: Severity;
    /** The skin moisture level. */
    skinMoisture: SkinMoisture;
    /** The severity of wrinkles. */
    wrinkles: Severity;
    /** The skin age. */
    skinAge: number;
    /** The skin quality score. */
    skinQualityScore: number;
}

/**
 * Defining the object for configuring the blink detector
 */
export declare interface BlinkDetectorConfig {
    /**
     * Enable or disable the blink detector. Default is true.
     */
    enableBlinkDetector?: boolean;
    /**
     * The minimum framerate for the blink detector. If the actual framerate is lower then
     * the minimum framerate, the blink detector is disabled.
     */
    minFps?: number;
    /**
     * The threshold value of the Eye Aspect Ratio Change. if the EAR change is larger then
     * the threshold, a blink is detected.
     */
    earDiffThreshold?: number;
    /**
     * Enable or disable movement detector. Default is true.
     */
    enableMovementDetection?: boolean;
    /**
     * The threshold value of the movement detector. If the movement is larger then the
     * threshold, the movement started.
     */
    movementThreshold?: number;
    /**
     * The threshold duration of the start of a movement. If the movement started
     * for the threshold duration, it is detected as started moving.
     */
    startMovementDurationThreshold?: number;
    /**
     * The threshold duration of the stop of a movement. If the movement stopped
     * for the threshold duration, it is detected as stopped moving.
     */
    stopMovementDurationThreshold?: number;
    /**
     * The threshold duration for the freezed detection. If movement is zero for the
     * threshold duration. It is detected as freezed.
     */
    freezedTheshold?: number;
}

/**
 * The types of Blink Detector
 */
export declare enum BlinkDetectorType {
    /**
     * The default blink detector
     */
    default = 0,
    /**
     * The dummy blink detector
     */
    dummy = 1
}

export declare interface BoundingBoxOptions {
    enabled?: boolean;
    color?: string;
}

/**
 * Represents a camera device available on the system.
 * Used to identify and select specific cameras for vital sign scanning.
 */
export declare interface CameraDevice {
    /** Human-readable label for the camera device. */
    readonly label: string;
    /** Unique device ID for the camera. */
    readonly id: string;
    /** Index of the device in the list of available cameras. */
    readonly deviceIndex: number;
}

/**
 * Event fired when the list of available camera devices has changed.
 * This can occur when cameras are plugged in or removed.
 */
export declare interface CameraDevicesUpdatedEvent {
    /** Array of currently available camera devices. */
    readonly devices: CameraDevice[];
    /** ID of the currently selected camera device, if any. */
    readonly selected: string | undefined;
}

declare interface CameraOptions {
    onFrame: (videoFrame: CapturedFrame) => void | null;
    facingMode?: 'user' | 'environment';
    croppingRegion?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    width?: number;
    height?: number;
    deviceId?: string;
    preferredCamera?: string;
    callbackFrameRate?: number;
    handleIOS17Bug?: boolean;
    handleIOS17ObjectFitBug?: boolean;
    onVideoPlaying?: () => void;
}

/**
 * Options for creating a VideoSource from a camera
 */
declare type CameraSourceOptions = CameraOptions;

/**
 * Represents a captured video frame with methods to access the image data.
 * Used for processing video frames in the vital sign analysis pipeline.
 */
export declare interface CapturedFrame {
    /** Timestamp when the frame was captured. */
    timestamp: number;
    /** Width of the captured frame in pixels. */
    width: number;
    /** Height of the captured frame in pixels. */
    height: number;
    /** Get the image data of the captured frame. */
    getImageData(): Promise<ImageData>;
    /** Get an ImageBitmap of the captured frame (transferable). */
    getImageBitmap(): Promise<ImageBitmap>;
    /** Get a canvas element containing the captured frame. */
    getCanvas(): Promise<HTMLCanvasElement>;
}

/**
 * The cardiovascular risks result of a scan.
 */
export declare interface CardiovascularRisks {
    /** The general cardiovascular risk percentage. */
    generalRisk: number;
    /** The coronary heart disease risk percentage. */
    coronaryHeartDisease: number;
    /** The congestive heart failure risk percentage. */
    congestiveHeartFailure: number;
    /** The intermittent claudication risk percentage. */
    intermittentClaudication: number;
    /** The stroke risk percentage. */
    stroke: number;
}

export declare type ConditionCheckerConfig = {
    minimumFrameRate?: number;
    validDistanceRange?: NumberRange;
    validXRange?: NumberRange;
    validYRange?: NumberRange;
};

/**
 * The covid risk result of a scan.
 */
export declare interface CovidRisk {
    /** The covid risk percentage. */
    covidRisk: number;
}

/**
 * Create a new Vital Sign Camera instance for performing camera-based vital sign scanning.
 * This is the main entry point for using the SDK to measure vital signs through a webcam.
 * @param props Configuration properties for the camera
 * @returns A VitalSignCameraInterface instance ready for use
 * @example
 * // Basic usage
 * const camera = createVitalSignCamera({
 *   isActive: true,
 *   userInfo: {
 *     age: 30,
 *     gender: Gender.Male,
 *     height: 175,
 *     weight: 70
 *   }
 * });
 *
 * // Bind to video element and start scanning
 * camera.bind(document.getElementById('video'));
 * camera.startScanning();
 */
export declare function createVitalSignCamera(props: VitalSignCameraCreationProps): VitalSignCameraInterface;

/**
 * Create a new instance of the web-based vital sign engine.
 * This function initializes a VitalSignEnginePlugin that can perform
 * camera-based vital sign analysis using web technologies.
 * @returns A new VitalSignEnginePlugin instance
 * @example
 * const engine = createVitalSignEngineWeb();
 * engine.configure({
 *   serverId: ServerId.RemoteProd,
 *   dataCollectionDuration: 30
 * });
 */
export declare function createVitalSignEngineWeb(): VitalSignEnginePlugin;

/**
 * Defines a customized range for condition checking during scanning.
 * This allows fine-tuning the acceptable ranges for face distance and position relative to the camera frame.
 * @deprecated This interface is deprecated and will be removed in a future version. Use ConditionCheckerConfig instead.
 * @example
 * const customRange: CustomConditionRange = {
 *   distanceRange: [30, 80], // Face should be between 30-80 cm
 *   boundaryRangeX: { min: 0.2, max: 0.8 }, // Face center X between 20%-80% of frame
 *   boundaryRangeY: { min: 0.1, max: 0.9 }  // Face center Y between 10%-90% of frame
 * };
 */
export declare interface CustomConditionRange {
    /** Acceptable distance range from camera in cm. */
    distanceRange?: NumberRange;
    /** Acceptable horizontal position range as fraction of frame width. */
    boundaryRangeX?: NumberRange;
    /** Acceptable vertical position range as fraction of frame height. */
    boundaryRangeY?: NumberRange;
}

export declare function deleteSavedRequest(): Promise<void>;

/**
 * The scanner's diabetic medical condition:
 * 0: "No",
 * 1: "Type 1",
 * 2: "Type 2"
 */
export declare enum Diabetic {
    No = 0,
    Type1 = 1,
    Type2 = 2
}

/**
 * Describes the distance condition between the face and the camera during scanning.
 * This enum indicates whether the user's face is at an optimal distance for accurate vital sign measurement.
 */
export declare enum DistanceCondition {
    /** The distance is optimal for scanning. */
    OK = "ok",
    /** The face is too far from the camera, which may reduce accuracy. */
    TooFar = "tooFar",
    /** The face is too close to the camera, which may cause distortion. */
    TooClose = "tooClose"
}

/**
 * The template used for generating emails containing health reports.
 * @deprecated This feature is deprecated and may be removed in future versions.
 */
export declare interface EmailTemplate {
    /** The HTML content of the email body. */
    emailContent: string;
    /** The subject line of the email. */
    emailSubject: string;
    /** The filename for the attached health report. */
    fileName: string;
}

/**
 * The scanner's ethnicity.
 * Used in risk calculations and analysis. Common ethnicities include:
 * Han Chinese, Indo-Aryan, European, African, Arab, Malay, Bengali, Dravidian, Russian, Javanese
 */
declare type Ethnicity = 'Han Chinese' | 'Indo-Aryan' | 'European' | 'African' | 'Arab' | 'Malay' | 'Bengali' | 'Dravidian' | 'Russian' | 'Javanese';

/**
 * The scanner's exercise habit:
 * 0: "Low: <1 hour",
 * 1: "Medium: 1-3 hours",
 * 2: "High: 3-5 hours",
 * 3: "Very High: 5-10 hours",
 * 4: "Athletic (>10 hours)"
 */
export declare enum Exercise {
    Low = 0,
    Medium = 1,
    High = 2,
    VeryHigh = 3,
    Athletic = 4
}

export declare enum EyeShape {
    /** Almond shaped eyes. */
    Almond = 1,
    /** Downturned eyes. */
    Downturned = 2,
    /** Monolid eyes. */
    Monolid = 3,
    /** Round eyes. */
    Round = 4,
    /** Upturned eyes. */
    Upturned = 5,
    /** Hooded eyes. */
    Hooded = 6
}

/**
 * Face detector model location
 */
export declare enum FaceDetectionModelLocation {
    SelfHosted = "self-hosted",
    CDN = "cdn"
}

/**
 * Defines the region of the captured video frame that is to be used for face detection.
 * Can be specified either in absolute pixels or as percentages of frame size.
 */
export declare type FaceDetectionRegion = FaceDetectionRegionAbs | FaceDetectionRegionPercentage;

/**
 * Defines the region (in absolute pixel coordinates) of the captured video frame that is to be used for face detection.
 * This allows restricting face detection to a specific area of the frame, improving performance and accuracy.
 * @example
 * const region: FaceDetectionRegionAbs = {
 *   x: 100,
 *   y: 50,
 *   width: 400,
 *   height: 300
 * };
 */
export declare type FaceDetectionRegionAbs = {
    /** X-coordinate of the top-left corner in pixels. */
    x: number;
    /** Y-coordinate of the top-left corner in pixels. */
    y: number;
    /** Width of the region in pixels. */
    width: number;
    /** Height of the region in pixels. */
    height: number;
};

/**
 * Defines the region (in percentage of frame size) of the captured video frame that is to be used for face detection.
 * This allows defining regions relative to frame size, making it resolution-independent.
 * @example
 * const region: FaceDetectionRegionPercentage = {
 *   x: '25%',
 *   y: '20%',
 *   width: '50%',
 *   height: '60%'
 * };
 */
export declare type FaceDetectionRegionPercentage = {
    /** X-coordinate of the top-left corner as percentage string. */
    x: `${number}%`;
    /** Y-coordinate of the top-left corner as percentage string. */
    y: `${number}%`;
    /** Width of the region as percentage string. */
    width: `${number}%`;
    /** Height of the region as percentage string. */
    height: `${number}%`;
};

/**
 * The built-in face detectors.
 */
export declare enum FaceDetectorType {
    /** Legacy MediaPipe face detector. */
    MediaPipe = 0,
    /** OpenCV face detector. */
    OpenCV = 1,
    /** Dummy face detector. */
    Dummy = 2,
    /** TensorFlow MediaPipe face detector */
    TFMediaPipe = 3,
    /** FaceApi face detector */
    FaceApi = 4,
    /** MediaPipe face landmarker */
    MPFaceMesh = 5,
    /** MediaPipe face detector */
    MPFaceDetector = 6,
    /** MediaPipe face landmarker using multiple threads */
    MPFaceMeshThreaded = 7
}

/**
 * The type of a video frame containing a face image.
 * Can be a base64 encoded data URL, an HTML image element, or an HTML canvas element.
 * Used for passing face images to the health analysis functions.
 */
export declare type FaceImage = string | HTMLImageElement | HTMLCanvasElement;

export declare type FaceMeshAnimationDirection = 'horizontal' | 'vertical' | 'both';

export declare interface FaceMeshOptions {
    enabled?: boolean;
    color?: string;
    lineWidth?: number | `${number}%`;
    animate?: boolean;
    /** Animation speed in seconds (controls the CSS animation duration) */
    animationSpeed?: number;
    /** Animation delay in seconds (controls the CSS animation-delay) */
    animationDelay?: number;
    /** Animation direction: 'horizontal' (default) or 'vertical' */
    animationDirection?: FaceMeshAnimationDirection;
}

/**
 * Describes the face position condition within the camera frame during scanning.
 * This enum indicates whether the user's face is properly centered in the video frame for optimal measurement.
 */
export declare enum FacePositionCondition {
    /** The face is centered in the frame. */
    Centered = "centered",
    /** The face is positioned too high in the frame. */
    TooHigh = "tooHigh",
    /** The face is positioned too low in the frame. */
    TooLow = "tooLow",
    /** The face is positioned too far to the left in the frame. */
    TooLeft = "tooLeft",
    /** The face is positioned too far to the right in the frame. */
    TooRight = "tooRight",
    /** The face position cannot be determined. */
    Unknown = "unknown"
}

/**
 * The shape of the face
 */
export declare enum FaceShape {
    /** Heart shaped face. */
    Heart = 1,
    /** Oblong shaped face. */
    Oblong = 2,
    /** Oval shaped face. */
    Oval = 3,
    /** Round shaped face. */
    Round = 4,
    /** Square shaped face. */
    Square = 5
}

export declare interface FrameGrabberConfig {
    grabbingPoints?: {
        stage: GetHealthStage;
        offset: number;
    }[];
}

/**
 * The gender of the scanner:
 * 0: male
 * 1: female
 */
export declare enum Gender {
    Male = 0,
    Female = 1
}

/**
 * The information needed for the getHealth function to process a video frame.
 * This interface contains all the data required for the vital sign engine to analyze
 * a single frame and update the scanning progress.
 * @see getHealth
 */
export declare interface GetHealthOptions {
    /** Information about the user being scanned, including demographics and health history. */
    userInfo: UserInfo;
    /** Images of different regions of interest (ROI) extracted from the face. */
    images?: {
        [key in PixelROI]?: ROI;
    };
    /** Metadata about the video frame being processed. */
    videoFrameInfo: VideoFrameInfo;
    /** Array of normalized facial landmark coordinates. */
    landmarks: NormalizedLandmark[];
    /** Normalized bounding box coordinates of the detected face. */
    faceBox?: NormalizedFacebox;
}

/**
 * The result of the getHealth function call, providing the current status of the vital sign scanning process.
 * This interface is returned by each call to getHealth() and contains information about the scan progress,
 * timing, and final results when available.
 * @see getHealth
 */
export declare interface GetHealthResult {
    /** The current stage of the scanning process. */
    stage: GetHealthStage;
    /** Time remaining in the current stage in seconds. */
    remainingTime: number;
    /** Total duration of the current stage in seconds, undefined if not known. */
    totalTime: number | undefined;
    /** Warning message about the scan (reserved for future use). */
    message?: string;
    /** Error that occurred during scanning, if any (reserved for future use). */
    error?: any;
    /** The final health analysis results, available when scanning is complete. */
    health?: Health;
}

/**
 * The stages of the vital sign scanning process.
 * The scan progresses through these stages sequentially.
 * @see GetHealthResult
 * @see getHealth
 */
export declare enum GetHealthStage {
    /**
     * Waiting stage: The system is waiting for optimal conditions to start data collection.
     * During this stage, the camera checks lighting, face position, and other conditions.
     */
    WaitingData = 0,
    /**
     * Collecting data stage: The system is actively collecting face data for analysis.
     * Face landmarks and pixel data are being captured and stored.
     */
    CollectingData = 1,
    /**
     * Analyzing data stage: Collected data is being sent to the backend for processing.
     * The server analyzes the data to extract vital signs.
     */
    AnalyzingData = 2,
    /**
     * Idle stage: The scanning process is complete or stopped.
     * No active processing is occurring.
     */
    Idle = 3
}

export declare function getSavedRequest(format: RequestFormat): Promise<string | undefined>;

export declare function getSavedRequestData(): Promise<SavedRequestData | undefined>;

/**
 * Global configuration options for the vital sign camera SDK.
 * These options affect the behavior across all instances.
 */
export declare type GlobalOptions = {
    /** Whether to load AI models from the root directory instead of the default location. */
    loadModelsFromRoot: boolean;
};

export declare const globalOptions: GlobalOptions;

export declare enum GoodSignalPercentage {
    /** Poor signal percentage. */
    Poor = 0,
    /** Good signal percentage. */
    Good = 1,
    /** Excellent signal percentage. */
    Excellent = 2
}

export declare type GrabbedFrame = {
    canvas: Promise<HTMLCanvasElement>;
    stage: GetHealthStage;
    offset: number;
};

export declare function hasSavedRequest(): Promise<boolean>;

/**
 * The Health result of the scanning.
 */
export declare interface Health {
    /** The date and time of the scan. */
    datetime?: Date;
    /** The scan parameters. */
    scanParameters?: ScanParameters;
    /** The vital signs. */
    vitalSigns?: VitalSign;
    /** The health risks. */
    risks?: HealthRisks;
    /** The holistic health analysis. */
    holisticHealth?: HolisticAnalysis;
    /** The server information. */
    serverInfo?: ServerInfo;
    /** The beauty analysis. */
    beautyAnalysis?: BeautyAnalysis;
}

/**
 * The health risks result of a scan.
 */
export declare interface HealthRisks {
    /** The cardiovascular risks. */
    cardiovascularRisks?: CardiovascularRisks;
    /** The covid risk. */
    covidRisk?: CovidRisk;
    /** The diabetes risk percentage. */
    diabetesRisk?: number;
    /** The hypertension risk percentage. */
    hypertensionRisk?: number;
    /** The cholesterol risk percentage. */
    cholesterolRisk?: number;
    /** The version of the result. */
    version?: string;
}

export declare interface HeatmapOptions {
    enabled?: boolean;
    blur?: number;
    opacity?: number;
    regionRadiusFactor?: number;
    ppgHistorySize?: number;
}

/**
 * The scanner's family diabetes medical history:
 * 0: No;
 * 1: Yes - grandparent, aunt, uncle, or first cousin;
 * 2: Yes - parent, brother, sister or own child
 *
 */
export declare enum HistoryFamilyDiabetes {
    No = 0,
    ExtendedFamily = 1,// grandparent, aunt, uncle, or first cousin
    ImmediateFamily = 2
}

/**
 * The holistic analysis result of a scan.
 */
export declare interface HolisticAnalysis {
    /** The general wellness score. */
    generalWellness?: number;
    /** The body mass index. */
    bmi?: number;
    /** The version of the result. */
    version?: string;
    /** The ABSI score. */
    absi?: number;
    /** The ABSI Z-score. */
    absiz?: number;
    /** The cardiac workload. */
    cardiacWorkload?: number;
    /** The pulse respiratory quotient. */
    pulseRespiratoryQuotient?: number;
    /** The waist to height ratio. */
    waistToHeightRatio?: number;
    /** The cardiovascular system wellness score. */
    cardiovascularSystemWellness?: number;
    /** The mental wellness score. */
    mentalWellness?: number;
    /** The physical wellness score. */
    physicalWellness?: number;
    /** The respiratory system wellness score. */
    respiratorySystemWellness?: number;
}

/**
 * The scanner's hypertension medical condition.
 * Affects cardiovascular risk calculations.
 */
export declare enum Hypertension {
    /** No hypertension. */
    No = 0,
    /** Stage 1 hypertension (mild). */
    Stage1 = 1,
    /** Stage 2 hypertension (moderate to severe). */
    Stage2 = 2
}

/**
 * The shape of the lips
 */
export declare enum LipsShape {
    /** Full lips. */
    FullLips = 1,
    /** Normal lips. */
    NormalLips = 2,
    /** Thin lips. */
    ThinLips = 3
}

export declare type LocalizationFunction = (key: LocalizationKey, params?: {
    [key: string]: string | number;
}) => string;

export declare type LocalizationKey = 'loading' | 'preparing' | 'loading_model' | 'loading_age_estimation_model' | 'loading_face_detection_model' | 'loading_realtime_estimator_model' | 'loading_model_with_filename' | 'loading_model_with_module_name' | 'loading_age_estimation_model_with_filename' | 'loading_face_detection_model_with_filename' | 'model_completed' | 'model_completed_with_error';

export declare interface ModelLoadingProgressEvent {
    /** Current progress percentage (0-100) */
    percentage: number;
    /** Bytes loaded */
    loaded: number;
    /** Total bytes to download */
    total: number;
    /** Current stage information with structured data */
    stage: ModelLoadingStageInfo;
    /** Module name that is loading the model */
    module?: string;
}

/**
 * Format the progress into a human-readable string
 */
export declare function ModelLoadingProgressEventToString(progress: ModelLoadingProgressEvent, localize?: LocalizationFunction): string;

export declare interface ModelLoadingProgressOptions {
    enabled?: boolean;
    backgroundColor?: string;
    progressColor?: string;
    textColor?: string;
    showBytes?: boolean;
    localize?: LocalizationFunction;
}

/**
 * Model Loading Progress Types and Classes
 *
 * This file contains types and classes related to tracking model loading progress.
 */
/**
 * Model loading stage types
 */
export declare enum ModelLoadingStage {
    /** Downloading WASM runtime or model file */
    Downloading = "downloading",
    /** Caching model for future use */
    Caching = "caching",
    /** Model is ready for use */
    Ready = "ready"
}

/**
 * Structured stage information for model loading
 */
export declare type ModelLoadingStageInfo = {
    /** The loading stage type */
    type: ModelLoadingStage;
    /** Whether the model was loaded from cache */
    fromCache: boolean;
    /** Optional error information */
    error?: Error;
    /** Filename being processed */
    filename?: string;
};

/**
 * The normalized coordinates of a bounding box of a face.
 * All coordinates are normalized to the range [0, 1] relative to the video frame dimensions.
 */
export declare interface NormalizedFacebox {
    /** The X coordinate of the center of the bounding box (0-1). */
    xCenter: number;
    /** The Y coordinate of the center of the bounding box (0-1). */
    yCenter: number;
    /** The height of the bounding box (0-1). */
    height: number;
    /** The width of the bounding box (0-1). */
    width: number;
}

/**
 * The normalized coordinates of a landmark point of the face.
 * Coordinates are normalized to the range [0, 1] relative to the video frame,
 * with Z representing depth (positive values indicate points closer to the camera).
 */
export declare interface NormalizedLandmark {
    /** The X coordinate (0-1, left to right). */
    x: number;
    /** The Y coordinate (0-1, top to bottom). */
    y: number;
    /** The Z coordinate (depth, positive = closer to camera). */
    z: number;
}

export declare type NormalizedLandmarkList = NormalizedLandmark[];

/**
 * Defines a number range, which can be either an array of two numbers [min, max] or an object with min and max properties.
 * Used for specifying ranges in condition checking, such as distance or boundary ranges.
 * @example
 * // As an array
 * const range: NumberRange = [10, 100];
 * // As an object
 * const range: NumberRange = { min: 10, max: 100 };
 */
export declare type NumberRange = Array<number> | {
    min: number;
    max: number;
};

/**
 * The scanner's parental hypertension medical history:
 * 0: no parental hypertension,
 * 1: 1 parent,
 * 2: both parents
 */
export declare enum ParentalHypertension {
    NoParentalHypertension = 0,
    OneParent = 1,
    BothParents = 2
}

export declare type PixelDataType = "rgb1x1" | "rgb8x8" | "rgb32x32" | "rgb64x64" | "yuv1x1" | "yuv8x8" | "yuv32x32" | "yuv64x64" | "ggg1x1" | "yyy1x1" | "meanRgb1x1";

/**
 * Defines the regions of interest (ROI) on the face and body for pixel extraction.
 * These ROIs are used to collect color data for vital sign analysis.
 */
export declare type PixelROI = 'face' | 'chest' | 'forehead' | 'glabella' | 'leftCheek' | 'rightCheek' | 'rightLowerCheek' | 'leftLowerCheek' | 'rightUpperCheek' | 'leftUpperCheek' | 'chin' | 'neck';

/**
 * Defines the precision mode for the vital sign camera.
 * Relaxed mode allows for more lenient scanning conditions, while strict mode requires optimal conditions for higher accuracy.
 * If precision mode is not set, the SDK falls back to legacy mode, which connects to the V1 server.
 * If set to relaxed or strict, it connects to the V2 server.
 */
export declare enum PrecisionMode {
    /** Relaxed precision mode - more tolerant of suboptimal conditions. */
    relaxed = "relaxed",
    /** Strict precision mode - requires optimal conditions for maximum accuracy. */
    strict = "strict"
}

/**
 * The reason why the precision mode was changed.
 * Used to track what triggered the automatic precision mode adjustment.
 */
export declare type PrecisionModeChangeReason = "manual" | "lowFrameRate" | "response";

export declare interface PrecisionModeUpdatedEvent {
    readonly previousMode?: PrecisionMode;
    readonly currentMode: PrecisionMode;
    readonly reason: PrecisionModeChangeReason;
}

export declare interface PrecisionModeWillUpdateEvent {
    readonly newMode?: PrecisionMode;
    readonly currentMode: PrecisionMode;
    readonly reason: PrecisionModeChangeReason;
    response: (response: 'proceed' | 'wait') => void;
}

export declare enum PresetFormat {
    cif352x288 = 0,
    sd480x360 = 1,
    hd1280x720 = 2,
    hd1920x1080 = 3
}

/**
 * Realtime estimation result.
 */
export declare interface RealtimeEstimation {
    /** The estimated heart rate in BPM. */
    heartRate: number;
    /** Confidence level of the estimation (0-1). */
    confidence: number;
    /** Whether the estimation is stable enough for display. */
    isStable: boolean;
    /** Signal-to-noise ratio of the PPG signal. */
    snr?: number;
    /** Overall signal quality score (0-100). */
    signalQuality?: number;
}

/**
 * Configuration options for realtime estimation.
 */
export declare interface RealtimeEstimationConfig {
    /** Type of estimator to use. */
    estimatorType?: RealtimeEstimatorType;
    /** Whether to perform early realtime estimation before full scanning begins. */
    earlyEstimation?: boolean;
    /** Minimum duration in seconds required for a stable estimation. */
    minDuration?: number;
    /** Minimum confidence threshold for displaying results. */
    minConfidence?: number;
    /** Type of visual signal for the visualization pipeline. Defaults to Normalized. */
    visualSignalType?: VisualSignalType;
    /** Whether to enable debug logging for realtime estimation. */
    debug?: boolean;
    /** ME-rPPG specific: Path to main model (only used if estimatorType is MeRppg) */
    modelPath?: string;
    /** ME-rPPG specific: Path to initial state (only used if estimatorType is MeRppg) */
    statePath?: string;
    /** ME-rPPG specific: Path to Welch PSD model (only used if estimatorType is MeRppg) */
    welchPath?: string;
    /** ME-rPPG specific: Path to HR extraction model (only used if estimatorType is MeRppg) */
    hrPath?: string;
    /** ME-rPPG specific: Lambda parameter for temporal normalization (only used if estimatorType is MeRppg) */
    lambda?: number;
}

/**
 * Type of realtime estimator to use.
 */
export declare enum RealtimeEstimatorType {
    /** FDA-grade spectrogram-based estimator (WebAssembly) */
    Fda = "fda",
    /** ME-rPPG neural network-based estimator (default) */
    MeRppg = "me-rppg"
}

export declare interface RemoteHealthAnalyzerConfig {
    /** The ID of the backend server to use for analysis. */
    serverId?: ServerId;
    /** Custom URL of the backend server. If not provided, uses default URL for serverId. */
    serverUrl?: string;
    /** Full override for the V2 get-health endpoint URL, including path (for example `http://localhost:3000/get-health`). */
    endpointURL?: string;
    /** Duration in seconds of face data to collect in a sliding window. Default is 15. */
    dataWindowDuration?: number;
    /** API key for authenticating requests to the backend. */
    apiKey?: string;
    /** Custom HTTP function to use instead of the built-in fetch. */
    httpCall?: typeof fetch;
    /** Whether to enable saving of requests for debugging purposes. */
    enableSavingRequest?: boolean;
    /** When true, automatically persist request/response payloads to the internal dev S3 bucket (`panopticai-internal-log-bucket`). */
    debugMode?: boolean;
    /** Sample rate in FPS for facial landmarks sent to backend. Default is 10. */
    landmarksSampleRate?: number;
    /** List of enabled regions of interest (ROIs) for data extraction. */
    enabledROIs?: PixelROI[];
}

export declare type RequestFormat = 'json' | 'js';

export declare const RequestSaver: typeof fetch;

/**
 * Represents a region of interest (ROI) extracted from a video frame.
 * Contains the pixel data and bounding box information for a specific facial region.
 */
export declare interface ROI {
    /** The type of ROI (face region). */
    type: PixelROI;
    /** Bounding box coordinates of the ROI in the frame. */
    boundingBox: {
        x: number;
        y: number;
        w: number;
        h: number;
    } | undefined;
    /** Promise that resolves to the image data of the ROI. */
    imageData: Promise<ImageData | undefined>;
}

/**
 * The types of ROI extractors available for processing video frames.
 * Determines which implementation to use for extracting regions of interest from face data.
 */
export declare enum ROIExtractorType {
    /** Use JavaScript-based CPU extraction (fallback, slower but compatible). */
    JS = "js",
    /** Use WebGL-based GPU extraction with automatic implementation selection. */
    WebGL = "webgl",
    /** Automatically select the best available implementation based on device capabilities. */
    Auto = "auto"
}

export declare type SavedRequestData = {
    url: string | undefined;
    body: string | undefined;
    apiKey: string | undefined;
};

/**
 * Defines the required conditions for a successful vital sign scan.
 * All conditions must be met for the scan to proceed and produce accurate results.
 * These conditions are checked in real-time during the scanning process.
 */
export declare interface ScanConditions {
    /** True if the lighting conditions are adequate for accurate measurement. */
    lighting: boolean;
    /** True if the face distance from the camera is within acceptable range. */
    distance: boolean;
    /** True if the face is properly centered in the camera frame. */
    centered: boolean;
    /** True if the face movement is minimal and stable. */
    movement: boolean;
    /** True if the backend server is ready and connected. */
    serverReady: boolean;
    /** True if the camera frame rate meets the minimum requirements. */
    frameRate: boolean;
    /** Detailed description of the current distance condition. */
    distanceCondition: DistanceCondition;
    /** Detailed description of the current face position condition. */
    facePositionCondition: FacePositionCondition;
    /** Current frames per second of the video stream. */
    fps: number;
}

/**
 * Describing the properties of the scanning signals sent to the plugin.
 */
export declare interface ScanParameters {
    /** The conditions array. */
    conditions?: boolean[];
    /** The percentage of invalid pixels. */
    invalidPixelPercentage?: number;
    /** The duration of the signal. */
    signalDuration?: number;
    /** The quality of the signal. */
    signalQuality?: number;
    /** The signal-to-noise ratio. */
    snr?: number;
    /** The signal conditions. */
    signalConditions?: SignalConditions;
    /** Whether there is a warning. */
    warning?: boolean;
}

/**
 * Defines the result of a vital sign scan.
 * This extends GetHealthResult and contains the final health analysis data.
 */
export declare interface ScanResult extends GetHealthResult {
}

/**
 * Defines the SDK credentials required for accessing the backend API.
 * These credentials are used to authenticate requests to the vital sign analysis service.
 */
export declare interface SdkCredentials {
    /** The API key for accessing the service. */
    apiKey?: string;
    /** The user ID associated with the SDK usage. */
    userId?: string;
}

/**
 * The ID of the backend server.
 */
export declare enum ServerId {
    /**
     * The local development server.
     */
    Local = 0,
    /**
     * The local v2 server.
     */
    LocalV2 = 101,
    /**
     * AWS development backend with Firebase database.
     */
    RemoteDev = 1,
    /**
     * AWS production backend with Firebase database.
     */
    RemoteProd = 2,
    /**
     * AWS development backend with AWS database.
     */
    AwsDev = 3,
    /**
     * AWS production backend with AWS database.
     */
    AwsProd = 4,
    /**
     * Enterprise AWS production backend with Firebase database.
     */
    RemoteProdEnterprise = 5,
    /**
     * Alias of `RemoteProdEnterprise`.
     */
    AwsFirebaseEnterpriseProd = 5,
    /**
     * Enterprise AWS production backend with AWS database.
     */
    AwsProdEnterprise = 6,
    /**
     * Alias of `AwsProdEnterprise`.
     */
    AwsEnterpriseProd = 6,
    /**
     * Enterprise AWS development backend with AWS database.
     */
    AwsDevEnterprise = 7,
    /**
     * Alias of `AwsDevEnterprise`.
     */
    AwsEnterpriseDev = 7,
    /**
     * (Internal use) AWS development backend for FDA app.
     */
    FdaDev = 8,
    /**
     * (Internal use) AWS production backend for FDA app.
     */
    FdaProd = 9,
    /**
     * Version 2 AWS development backend.
     */
    Schema2Dev = 10,
    /**
     * Version 2 AWS production backend.
     */
    Schema2Prod = 11
}

/**
 * The information of the server used for scanning.
 */
export declare interface ServerInfo {
    /** The timestamp. */
    datetime?: number;
    /** The datetime string. */
    datetimeStr?: string;
    /** The elapsed time. */
    elapse?: number;
    /** The user ID. */
    userId: string;
    /** The user plan. */
    userPlan: string;
    /** The version. */
    version?: string;
    /** The error codes. */
    errorCode?: number[];
}

/**
 * The severity of a skin condition
 */
export declare enum Severity {
    /** Clear. */
    Clear = 1,
    /** Mild. */
    Mild = 2,
    /** Moderate. */
    Moderate = 3,
    /** Severe. */
    Severe = 4,
    /** Very severe. */
    VerySevere = 5
}

/**
 * The signal conditions of the scan.
 */
export declare interface SignalConditions {
    /**
     * True if the device speed is stable and not jittery.
     */
    noSpeedJitter: boolean;
    /**
     * True if the average speed is good.
     */
    goodAverageSpeed: boolean;
    /**
     * True if the head position is fixed.
     */
    fixedHeadPosition: boolean;
    /**
     * True if the head is not turning.
     */
    noHeadTurning: boolean;
    /**
     * True if the lighting is good.
     */
    adequateBrightness?: boolean;
    /**
     * True if the lighting on face is even.
     */
    evenLightingOnFace?: boolean;
    /**
     * True if the signal quality is good.
     */
    goodSnr: boolean;
    /**
     * True if the signal stability is good.
     */
    signalSteadiness: boolean;
    /**
     * The percentage of good signals.
     */
    goodSignalPercentage: GoodSignalPercentage;
    /**
     * True if the heart rate steadiness is good.
     */
    hrSteadiness: boolean;
    /**
     * True if the heart rate signal quality is good.
     */
    hrSignalQuality: boolean;
    /**
     * True if the respiratory rate signal quality is good.
     */
    rrSignalQuality: boolean;
    /**
     * True if the blood pressure signal quality is good.
     */
    bpSignalQuality?: boolean;
}

/**
 * Signal data for visualization.
 */
export declare interface SignalData {
    /** Raw PPG signal values. */
    values: number[];
    /** Timestamps corresponding to signal values. */
    timestamps: number[];
    /** Sample rate in Hz. */
    sampleRate: number;
}

export declare class SignalVisualizer {
    private canvas;
    private ctx;
    private config;
    private readonly plotMargins;
    constructor(container: HTMLElement, config?: SignalVisualizerConfig);
    private log;
    private ensureCanvasSize;
    private get plotArea();
    updateSignal(signalData: SignalData | null, signal2Data?: SignalData | null): void;
    private clear;
    private drawTitle;
    private drawGrid;
    private drawPlotBorder;
    private drawWaitingForSignal;
    private normalizeWindow;
    private sliceToWindow;
    private filterWindow;
    private drawWaveform;
    private drawPPGSignal;
    private drawInfo;
    resetScale(): void;
    destroy(): void;
}

export declare interface SignalVisualizerConfig {
    width?: number;
    height?: number;
    maxPoints?: number;
    lineColor?: string;
    backgroundColor?: string;
    gridColor?: string;
    debug?: boolean;
    windowSeconds?: number;
    title?: string;
    showBorder?: boolean;
    showInfo?: boolean;
    signal2Color?: string;
}

export declare enum SkinMoisture {
    /** Dry skin. */
    Dry = 1,
    /** Normal skin. */
    Normal = 2,
    /** Oily skin. */
    Oily = 3,
    /** Combination skin. */
    Combination = 4,
    /** Sensitive skin. */
    Sensitive = 5
}

export declare type TransformXStyle = 'none' | 'scaleX(-1)';

declare type TransformXStyle_2 = 'none' | 'scaleX(-1)';

/**
 * The information of the user doing scanning.
 */
export declare interface UserInfo {
    /**
     * Current age.
     * Affected outputs: [cardiovascularRisk, diabetesRisk, hypertensionRisk]
     */
    age?: number;
    /**
     * Gender of birth.
     * Affected outputs: [cardiovascularRisk, diabetesRisk, hypertensionRisk]
     */
    gender?: Gender;
    /**
     * Weight in KG.
     * Affected outputs: [diabetesRisk, hypertensionRisk]
     */
    weight?: number;
    /**
     * Height in CM.
     * Affected outputs: [diabetesRisk, hypertensionRisk]
     */
    height?: number;
    /**
     * Do you smoke on a regular basis?
     * Affected outputs: [cardiovascularRisk, hypertensionRisk]
     */
    smoker?: boolean;
    /**
     * Do you have hypertension?
     * Options: (schema 1: True/False, schema 2: {0: "No", 1: "Stage 1", 2: "Stage 2"})
     */
    hypertension?: boolean | Hypertension;
    /**
     * Are you taking blood pressure medication?
     */
    bpMedication?: boolean;
    /**
     * Are you diabetic?
     * Options: {0: "No", 1: "Type 1", 2: "Type 2"}
     * Affected outputs: [cardiovascularRisk]
     */
    diabetic?: Diabetic;
    /**
     * Waist circumference in CM
     * Affected outputs: [diabetesRisk]
     */
    waistCircumference?: number;
    /**
     * Total cholesterol in mg/dL
     * Affected outputs: [cardiovascularRisk]
     */
    totalCholesterol?: number;
    /**
     * HDL (high-density lipoprotein) cholesterol. Good cholesterol.
     * Affected outputs: [cardiovascularRisk]
     */
    hdl?: number;
    /**
     * Any parents have hypertension?
     * Options: {0: no parental hypertension; 1: 1 parent; 2: both parents}
     * Affected outputs: [hypertensionRisk]
     */
    parentalHypertension?: ParentalHypertension;
    /**
     * Daily physical activity > 30 minutes?
     * Affected outputs: [diabetesRisk]
     */
    physicalActivity?: boolean;
    /**
     * Daily vegetable, fruit, or berries consumption?
     * Options: {True: Every day; False: Not every day}
     * Affected outputs: [diabetesRisk]
     */
    healthyDiet?: boolean;
    /**
     * Taken antihypertensive medication regularly?
     * Options: {True: Yes; False: No}
     * Affected outputs: [diabetesRisk]
     */
    antiHypertensive?: boolean;
    /**
     * History has been found of high blood glucose?
     * Affected outputs: [diabetesRisk]
     */
    historyBloodGlucose?: boolean;
    /**
     * Taken antihypertensive medication regularly?
     * Options: {0: No; 1: Yes - grandparent, aunt, uncle, or first cousin; 2: Yes - parent, brother, sister or own child}
     * Affected outputs: [diabetesRisk]
     */
    historyFamilyDiabetes?: HistoryFamilyDiabetes;
    /**
     * Do you have heart disease?
     */
    heartDisease?: boolean;
    /**
     * Do you have depression?
     */
    depression?: boolean;
    /**
     * What is your occupation?
     */
    occupation?: string;
    /**
     * Do you consume alcohol on a regular basis?
     */
    alcoholic?: boolean;
    /**
     * Weekly physical activity
     */
    exercise?: Exercise;
    /**
     * How many hours of sleep do you get on average?
     */
    sleepDuration?: number;
    /**
     * Do you have asthma?
     */
    asthma?: boolean;
    /**
     * What is your ethnicity?
     */
    ethnicity?: Ethnicity | string;
    /**
     * What is your nationality?
     */
    nationality?: string;
    /**
     * Id assigned by AWS server
     */
    userId?: string;
}

declare interface VideoFileOptions {
    onFrame: (videoFrame: CapturedFrame) => void | null;
    croppingRegion?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    frameRate?: number;
    loop?: boolean;
    callbackFrameRate?: number;
    onVideoPlaying?: () => void;
    onVideoEnded?: () => void;
    onError?: (error: Error) => void;
    onFrameRateDetected?: (frameRate: number) => void;
}

/**
 * Options for creating a VideoSource from a video file
 */
declare type VideoFileSourceOptions = VideoFileOptions;

/**
 * The information of a video frame used in vital sign processing.
 * Contains metadata about the frame dimensions and timing.
 */
export declare interface VideoFrameInfo {
    /** Timestamp when the frame was captured (in milliseconds). */
    timestamp: number;
    /** Original width of the video frame in pixels. */
    width: number;
    /** Original height of the video frame in pixels. */
    height: number;
    /** Scaled width if the frame has been resized for processing. */
    scaledWidth?: number;
    /** Scaled height if the frame has been resized for processing. */
    scaledHeight?: number;
}

/**
 * Event fired when a video frame has been processed during scanning.
 * This event provides real-time information about the current frame analysis,
 * including face detection results, scan conditions, and health data if available.
 * Subscribe to this event to monitor the scanning progress and get intermediate results.
 */
export declare interface VideoFrameProcessedEvent {
    /** Information about the processed video frame. */
    videoFrameInfo: VideoFrameInfo;
    /** The raw video frame data. */
    videoFrame: CapturedFrame;
    /** Normalized bounding box of the detected face, if any. */
    facebox?: NormalizedFacebox;
    /** Current health result, available during and after scanning. */
    healthResult?: ScanResult;
    /** Current scan conditions assessment. */
    scanConditions?: ScanConditions;
    /** Normalized landmarks of the detected face. */
    landmarks?: NormalizedLandmarkList;
    /** Current realtime estimation result. */
    realtimeEstimation?: RealtimeEstimation | null;
    /** Current signal data for visualization. */
    signalData?: SignalData | null;
    /** Secondary signal data for visualization (e.g., respiratory waveform). */
    signal2Data?: SignalData | null;
}

export declare interface VideoSettings {
    videoId: string;
    width: number;
    height: number;
    frameRate?: number;
}

/**
 * Defines the video settings of the attached video element.
 * These settings reflect the current configuration of the camera stream.
 */
declare interface VideoSettings_2 {
    /** Unique identifier for the video element. */
    readonly videoId: string;
    /** Width of the video stream in pixels. */
    readonly width: number;
    /** Height of the video stream in pixels. */
    readonly height: number;
    /** Frame rate of the video stream in frames per second. */
    readonly frameRate?: number;
    /** CSS transform style applied to the video for mirroring/flipping. */
    readonly transformX: TransformXStyle_2;
}

/**
 * Event fired when the video settings have been updated.
 * This occurs when the camera resolution or configuration changes.
 */
export declare interface VideoSettingsUpdatedEvent {
    /** The video element that was updated. */
    readonly video: HTMLVideoElement;
    /** The new video settings. */
    readonly settings: VideoSettings_2;
}

/**
 * VideoSource interface represents any source of video frames for vital sign analysis.
 * This can be a live camera feed or a video file.
 */
export declare interface VideoSource {
    deviceId: string | undefined;
    start(): Promise<void>;
    stop(): Promise<void>;
    waitUntilStopped(timeoutMS?: number): Promise<boolean>;
    croppingRegion?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    getVideoSettings(): VideoSettings | undefined;
    getTransform(): TransformXStyle;
}

/**
 * Factory for creating VideoSource instances.
 * This factory provides a unified way to create either Camera or VideoFile instances.
 */
export declare class VideoSourceFactory {
    /**
     * Create a Camera instance as a VideoSource
     * @param video The HTMLVideoElement to bind the camera to
     * @param options Camera configuration options
     * @returns A VideoSource instance (Camera)
     */
    static createCamera(video: HTMLVideoElement, options: CameraSourceOptions): VideoSource;
    /**
     * Create a VideoFile instance as a VideoSource
     * @param video The HTMLVideoElement to bind the video file to
     * @param options VideoFile configuration options
     * @returns A VideoSource instance (VideoFile)
     */
    static createVideoFile(video: HTMLVideoElement, options: VideoFileSourceOptions): VideoSource;
    /**
     * Create a VideoSource automatically based on whether video.src is set
     * @param video The HTMLVideoElement to bind to
     * @param options Options for configuring the video source
     * @returns A VideoSource instance (Camera or VideoFile)
     */
    static createVideoSource(video: HTMLVideoElement, options: CameraSourceOptions | VideoFileSourceOptions): VideoSource;
}

export declare interface VisualizationOptions {
    boundingBox?: BoundingBoxOptions;
    faceMesh?: FaceMeshOptions;
    modelLoadingProgress?: ModelLoadingProgressOptions;
    heatmap?: HeatmapOptions;
}

/**
 * Type of visual signal to use for realtime estimation visualization.
 */
export declare enum VisualSignalType {
    /** Raw CHROM signal without normalization. */
    Raw = "raw",
    /** Z-normalized CHROM signal with running statistics. */
    Normalized = "znorm"
}

/**
 * The vital signs result of a scan.
 */
export declare interface VitalSign {
    /** The heart rate in BPM. */
    heartRate?: number;
    /** The blood oxygen saturation in percentage. */
    spo2?: number;
    /** The inter-beat interval. */
    ibi?: number;
    /** The stress level. */
    stress?: number;
    /** The stress score. */
    stressScore?: number;
    /** The respiratory rate in breaths per minute. */
    respiratoryRate?: number;
    /** The heart rate variability SDNN. */
    hrvSdnn?: number;
    /** The heart rate variability RMSSD. */
    hrvRmssd?: number;
    /** The body temperature. */
    temperature?: number;
    /** The blood pressure description. */
    bloodPressure?: string;
    /** The systolic blood pressure. */
    bloodPressureSystolic?: number;
    /** The diastolic blood pressure. */
    bloodPressureDiastolic?: number;
    /** The facial skin age. */
    facialSkinAge?: number | string;
    /** The blood alcohol level. */
    bloodAlcohol?: number | string;
    /** The blood sugar level. */
    bloodSugar?: number | string;
    /** The version of the result. */
    version?: string;
}

/**
 * Defines the properties for creating the vital sign camera component.
 * This interface contains all the configuration options needed to initialize a VitalSignCamera instance.
 * @example
 * const camera = createVitalSignCamera({
 *   isActive: true,
 *   userInfo: {
 *     age: 30,
 *     gender: Gender.Male,
 *     height: 175,
 *     weight: 70
 *   },
 *   config: {
 *     dataCollectionDuration: 30,
 *     serverId: ServerId.RemoteProd
 *   },
 *   onVideoFrameProcessed: (event) => {
 *     console.log('Frame processed:', event.scanConditions);
 *   }
 * });
 */
export declare interface VitalSignCameraCreationProps {
    /** Whether the camera should be active immediately after creation. */
    isActive: boolean;
    /** Configuration for the vital sign engine. */
    config?: VitalSignEngineConfig;
    /** Information about the user being scanned. */
    userInfo: UserInfo;
    /** Credentials for accessing the backend API. */
    sdkCredentials?: SdkCredentials;
    /** Device ID of the camera to use. */
    device?: string;
    /** Preferred camera device ID. */
    preferredCamera?: string;
    /** Type of face detector to use. */
    faceDetectorType?: FaceDetectorType;
    /** Precision mode for scanning. If not set, falls back to legacy mode using V1 server. If set, uses V2 server. */
    precisionMode?: PrecisionMode;
    /** Preset camera resolution format. */
    presetFormat?: PresetFormat;
    /** Whether to check brightness conditions. */
    checkBrightness?: boolean;
    /** Maximum camera frame rate. */
    maxFps?: number;
    /** Maximum face detection frame rate. */
    maxFaceDetectionFps?: number;
    /** Interval for sampling face detection results in milliseconds. */
    faceDetectionSamplingInterval?: number;
    /** Whether age estimation is disabled. */
    disableAgeEstimation?: boolean;
    /** Whether beauty analysis is enabled. */
    enableBeautyAnalysis?: boolean;
    /** Options for visual overlays like bounding boxes or face mesh. */
    visualizationOptions?: VisualizationOptions;
    /** @deprecated Custom condition ranges. Use conditionCheckerConfig instead. */
    customConditionRange?: CustomConditionRange;
    /** Configuration for condition checking. */
    conditionCheckerConfig?: ConditionCheckerConfig;
    /** Region of the frame to use for face detection. */
    faceDetectionRegion?: FaceDetectionRegion;
    /** Location of the face detection model. */
    faceDetectionModelLocation?: FaceDetectionModelLocation;
    /** Path to Face API models. */
    faceApiModelPath?: string;
    /** Configuration for age estimation. */
    ageEstimationConfig?: AgeEstimationConfig;
    /** Configuration for realtime estimation. */
    realtimeEstimationConfig?: RealtimeEstimationConfig;
    /** Configuration for frame grabbing. */
    frameGrabberConfig?: FrameGrabberConfig;
    /** Callback for video frame processed events. */
    onVideoFrameProcessed?: (event: VideoFrameProcessedEvent) => void;
    /** Callback for transform updated events. */
    onTransformUpdated?: (transform: TransformXStyle_2) => void;
    /** Callback for video settings updated events. */
    onVideoSettingsUpdated?: (event: VideoSettingsUpdatedEvent) => void;
    /** Callback for camera devices updated events. */
    onCameraDevicesUpdated?: (event: CameraDevicesUpdatedEvent) => void;
    /** Callback for precision mode updated events. */
    onPrecisionModeUpdated?: (event: PrecisionModeUpdatedEvent) => void;
    /** Callback for precision mode will update events. */
    onPrecisionModeWillUpdate?: (event: PrecisionModeWillUpdateEvent) => void;
    /** Callback for initialization completion. */
    onInitialized?: () => void;
    /** Callback for error events. */
    onError?: (error: unknown) => void;
    /** Callback for model loading progress events. */
    onModelLoadingProgress?: (progress: ModelLoadingProgressEvent) => void;
}

/**
 * Defines the Vital Sign Camera, the main component for doing vital sign scanning.
 * This component is created by the function `createVitalSignCamera` and provides
 * the primary interface for controlling camera-based vital sign measurement.
 *
 * @example
 * // Create and setup the camera
 * const camera = createVitalSignCamera({
 *   isActive: true,
 *   userInfo: userData,
 *   onVideoFrameProcessed: handleFrame
 * });
 *
 * // Bind to video element
 * camera.bind(document.getElementById('video'));
 *
 * // Start scanning
 * camera.startScanning();
 */
export declare interface VitalSignCameraInterface {
    /** The version of the component. */
    readonly version: string;
    /** Whether the camera is currently active. */
    isActive: boolean;
    /** The device ID of the currently selected camera. */
    device?: string;
    /** The configuration of the vital sign engine. */
    config: VitalSignEngineConfig;
    /** Information about the user being scanned. */
    userInfo: UserInfo;
    /** The current precision mode. */
    precisionMode?: PrecisionMode;
    /** SDK credentials for API access. */
    sdkCredentials?: SdkCredentials;
    /** Maximum frame rate for processing. */
    maxFps: number;
    /** Current camera resolution preset. */
    presetFormat: PresetFormat;
    /** Maximum frame rate for face detection. */
    readonly maxFaceDetectionFps: number;
    /** Type of face detector being used. */
    readonly faceDetectorType: FaceDetectorType;
    /** Current X-transform style applied to the video. */
    readonly transform: TransformXStyle_2;
    /** Current video settings. */
    readonly videoSettings?: VideoSettings_2;
    /** Visualization options for overlays. */
    visualizationOptions?: VisualizationOptions;
    /** HTML element for bounding box overlay. */
    readonly boundingBoxElement?: HTMLElement;
    /** HTML element for face mesh overlay. */
    readonly faceMeshElement?: HTMLElement;
    /** HTML element for model loading progress overlay. */
    readonly modelLoadingProgressElement?: HTMLElement;
    /** @deprecated Custom condition ranges. */
    customConditionRange?: CustomConditionRange | undefined;
    /** Region used for face detection. */
    faceDetectionRegion?: FaceDetectionRegion;
    /** Sampling interval for face detection results. */
    readonly faceDetectionSamplingInterval?: number;
    /** Frames grabbed by the frame grabber. */
    readonly grabbedFrames?: GrabbedFrame[];
    /** Configuration for realtime estimation. */
    realtimeEstimationConfig?: RealtimeEstimationConfig;
    /** Callback for video frame processed events. */
    onVideoFrameProcessed?: (event: VideoFrameProcessedEvent) => void;
    /** Callback for video settings updated events. */
    onVideoSettingsUpdated?: (event: VideoSettingsUpdatedEvent) => void;
    /** Callback for camera devices updated events. */
    onCameraDevicesUpdated?: (event: CameraDevicesUpdatedEvent) => void;
    /** Callback for initialization completion. */
    onInitialized?: () => void;
    /** Callback for precision mode updated events. */
    onPrecisionModeUpdated?: (event: PrecisionModeUpdatedEvent) => void;
    /** Callback for precision mode will update events. */
    onPrecisionModeWillUpdate?: (event: PrecisionModeWillUpdateEvent) => void;
    /** Callback for error events. */
    onError?: (error: unknown) => void;
    /** Callback for model loading progress events. */
    onModelLoadingProgress?: (progress: ModelLoadingProgressEvent) => void;
    /** Bind the camera to an HTML video element. */
    bind(video: HTMLVideoElement): void;
    /** Start the vital sign scanning process. */
    startScanning(): void;
    /** Stop the scanning process. */
    stopScanning(): void;
    /** Wait for the camera to stop completely. */
    waitCameraToStop(timeoutMS?: number): Promise<boolean>;
    saveScanDataToS3(bucket: string, requestDirectory?: string, responseDirectory?: string, shouldEncrypt?: boolean): Promise<{
        request: any;
        response?: any;
    }>;
    /** Get the last request sent to the backend during scan/analyze flow (encrypted base64 on V2 servers only).
     * Throws "not supported on V1/legacy servers" error if called on V1 mode. */
    getLastRequestV2(): string | undefined;
    /** Get the last response received from the backend during scan/analyze flow (encrypted base64 on V2 servers only).
     * Throws "not supported on V1/legacy servers" error if called on V1 mode. */
    getLastResponseV2(): string | undefined;
    /** Destroy the camera instance and clean up all resources. */
    destroy(): Promise<void>;
}

/**
 * Configuration object for the Vital Sign Engine.
 * Defines all parameters for controlling the vital sign analysis process,
 * including timing, data collection, and processing options.
 * @see configure
 */
export declare interface VitalSignEngineConfig extends RemoteHealthAnalyzerConfig {
    /** Duration in seconds for collecting face data before analysis. Default is 25. */
    dataCollectionDuration?: number;
    /** Duration in seconds for sending collected data to backend. Default is 5. */
    dataSendingDuration?: number;
    /** Rate in Hz for sending face data to backend. Default is 0.3. */
    dataSendingRate?: number;
    /** Timeout in seconds for face lost detection. */
    faceLostTimeout?: number;
    /** Configuration for the blink detector. */
    blinkDetectorConfig?: BlinkDetectorConfig;
    /** Type of blink detector to use. Default is dummy (no detection). */
    blinkDetectorType?: BlinkDetectorType;
    /** @deprecated Use enabledROIs instead. Flag to enable chest ROI. */
    enableChestROI?: boolean;
    /** Pixel format for the main pixel extractor. Default is RGB1x1. */
    pixelDataType?: PixelDataType;
    /** Pixel format for the chest pixel extractor. Default is GGG1x1. */
    chestPixelDataType?: PixelDataType;
    /** Type of ROI extractor to use for processing video frames. Default is Auto. */
    roiExtractorType?: ROIExtractorType;
}

/**
 * The main interface of the Vital Sign Engine Plugin.
 * This interface defines the contract for vital sign analysis engines,
 * providing methods to configure, start, and monitor the scanning process.
 */
export declare interface VitalSignEnginePlugin {
    /** Configure the plugin with the provided settings. */
    configure(config: VitalSignEngineConfig): void;
    /** Check if the plugin is ready to start scanning. */
    isReady(): Promise<boolean>;
    /** Wait until the plugin is fully initialized and ready. */
    waitUntilReady(): Promise<void>;
    /** Start a new scanning session. */
    start(): Promise<void>;
    /** Process a video frame and update scanning progress. Must be called at least 20Hz during scanning. */
    getHealth(options: GetHealthOptions): GetHealthResult;
    /** Stop the current scanning session. */
    stop(): Promise<void>;
    /** @deprecated Send health report via email. For backward compatibility only. */
    sendHealthReport(email: string[], healthReport: string, emailTemplate: EmailTemplate, source: string): Promise<void>;
    /**
     * Save last request/response data to S3 bucket.
     * Matches native SDK behavior.
     * @param bucket - S3 bucket name
     * @param requestDirectory - Directory for request data
     * @param responseDirectory - Directory for response data
     * @param shouldEncrypt - Whether to encrypt the data before upload
     */
    saveScanDataToS3(bucket: string, requestDirectory?: string, responseDirectory?: string, shouldEncrypt?: boolean): Promise<{
        request: any;
        response: any;
    }>;
    /**
     * The last request sent to the server during a scan.
     * Contains the JSON string of the most recent health analysis request.
     * Access via: vitalSignEngine.healthAnalyzer.lastRequest
     */
    lastRequest?: string;
    /**
     * The last response received from the server during a scan.
     * Contains the JSON string of the most recent health analysis response.
     * Access via: vitalSignEngine.healthAnalyzer.lastResponse
     */
    lastResponse?: string;
}

export { }
