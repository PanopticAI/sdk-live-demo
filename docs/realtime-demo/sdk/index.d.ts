/**
 * Vue Vital Sign Camera SDK
 *
 * This module provides Vue.js components and TypeScript definitions for performing
 * vital sign analysis using computer vision and AI. The SDK enables real-time
 * measurement of health metrics such as heart rate, blood pressure, respiratory rate,
 * and facial beauty analysis through video capture and processing.
 *
 * The main component is `VitalSignCamera`, which provides a high-level interface
 * for integrating vital sign scanning into Vue applications. All TypeScript types,
 * interfaces, and enums are re-exported from the underlying ts-vital-sign-camera SDK.
 *
 * @example
 * ```typescript
 * import { VitalSignCamera, UserInfo, VitalSignEngineConfig } from 'vue-vital-sign-camera'
 * ```
 *
 * @see {@link VitalSignCamera} - The main Vue component for vital sign scanning
 * @see {@link https://github.com/PanopticAI/ts-vital-sign-camera} - Underlying TypeScript SDK
 */
import VitalSignCamera from './components/VitalSignCamera.vue';
/**
 * The main Vue component for performing vital sign scanning.
 * This component handles camera access, video processing, face detection,
 * and health analysis in a Vue-friendly interface.
 */
export { VitalSignCamera };
/**
 * All TypeScript definitions, interfaces, types, and enums from the
 * ts-vital-sign-camera SDK. This includes:
 * - User information types (UserInfo, Gender, etc.)
 * - Health analysis results (VitalSign, HealthRisks, etc.)
 * - Camera and video configuration types
 * - Face detection and visualization options
 * - Event types for real-time monitoring
 * - Condition checking and validation types
 */
export * from "./components/definitions";
