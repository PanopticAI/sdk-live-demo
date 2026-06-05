/**
 * TypeScript definitions and interfaces for the Vue Vital Sign Camera SDK.
 *
 * This module re-exports all TypeScript types, interfaces, enums, and utility functions
 * from the underlying ts-vital-sign-camera SDK. These definitions provide type safety
 * and documentation for working with vital sign analysis, camera configuration,
 * health results, and real-time event handling.
 *
 * Key categories of exported definitions:
 *
 * **User and Health Data:**
 * - `UserInfo`: Demographic information for personalized analysis
 * - `VitalSign`: Individual vital sign measurements (HR, BP, RR, etc.)
 * - `HealthRisks`: Cardiovascular and other health risk assessments
 * - `BeautyAnalysis`: Facial beauty metrics and analysis
 *
 * **Camera and Video:**
 * - `VideoFrameProcessedEvent`: Real-time frame processing events
 * - `VideoSettings`: Current video stream configuration
 * - `CameraDevicesUpdatedEvent`: Camera device change notifications
 *
 * **Configuration:**
 * - `VitalSignEngineConfig`: Engine configuration options
 * - `VisualizationOptions`: UI overlay and visualization settings
 * - `FaceDetectionRegion`: Face detection area constraints
 *
 * **Condition Checking:**
 * - `ScanConditions`: Real-time scan validation states
 * - `DistanceCondition`: Face distance assessment
 * - `FacePositionCondition`: Face positioning validation
 *
 * **Enums and Constants:**
 * - `Gender`: User gender options
 * - `FaceDetectorType`: Available face detection algorithms
 * - `PrecisionMode`: Measurement accuracy modes
 *
 * @example
 * ```typescript
 * import type {
 *   UserInfo,
 *   VitalSignEngineConfig,
 *   VideoFrameProcessedEvent
 * } from 'vue-vital-sign-camera'
 * ```
 *
 * @see {@link https://github.com/PanopticAI/ts-vital-sign-camera} - Source SDK with detailed documentation
 */
export * from 'ts-vital-sign-camera';
