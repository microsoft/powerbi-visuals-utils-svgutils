import { AnimationOptions } from "./animation/animationOptions";
import { Point } from "./shapes/point";
/**
 * Very small values, when stringified, may be converted to scientific notation and cause a temporarily
 * invalid attribute or style property value.
 * For example, the number 0.0000001 is converted to the string "1e-7".
 * This is particularly noticeable when interpolating opacity values.
 * To avoid scientific notation, start or end the transition at 1e-6,
 * which is the smallest value that is not stringified in exponential notation.
 */
export declare const AlmostZero = 0.000001;
/**
     * Creates a translate string for use with the SVG transform call.
     */
export declare function translate(x: number, y: number): string;
/**
 * Creates a translateX string for use with the SVG transform call.
 */
export declare function translateXWithPixels(x: number): string;
export declare function translateWithPixels(x: number, y: number): string;
/**
 * Creates a translate + rotate string for use with the SVG transform call.
 */
export declare function translateAndRotate(x: number, y: number, px: number, py: number, angle: number): string;
/**
 * Creates a scale string for use in a CSS transform property.
 */
export declare function scale(scale: number): string;
/**
 * Creates a translate + scale string for use with the SVG transform call.
 */
export declare function translateAndScale(x: number, y: number, ratio: number): string;
/**
 * Creates a transform origin string for use in a CSS transform-origin property.
 */
export declare function transformOrigin(xOffset: string, yOffset: string): string;
/**
 * Forces all D3 transitions to complete.
 * Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
 * This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
 * then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
 * you can run any zero-delay transitions immediately and avoid the flicker.
 *
 * These flickers are noticable on IE, and with a large number of webviews(not recommend you ever do this) on iOS.
 */
export declare function flushAllD3Transitions(): void;
/**
 * Wrapper for flushAllD3Transitions.
 */
export declare function flushAllD3TransitionsIfNeeded(options: AnimationOptions): void;
/**
 * There is a known bug in IE10 that causes cryptic crashes for SVG elements with a null "d" attribute:
 * https://github.com/mbostock/d3/issues/1737
 */
export declare function ensureDAttribute(pathElement: Element): void;
/**
 * In IE10, it is possible to return SVGPoints with NaN members.
 */
export declare function ensureValidSVGPoint(point: SVGPoint): void;
/**
 * Parse the Transform string with value "translate(x,y)".
 * In Chrome for the translate(position) string the delimiter
 * is a comma and in IE it is a spaceso checking for both.
 */
export declare function parseTranslateTransform(input: string): {
    x: string;
    y: string;
};
/**
 * Create an arrow.
 */
export declare function createArrow(width: number, height: number, rotate: number): {
    path: string;
    transform: string;
};
/**
 * Use the ratio of the scaled bounding rect and the SVG DOM bounding box to get the x and y transform scale values
 * @deprecated This function is unreliable across browser implementations, prefer to use SVGScaleDetector if needed.
 */
export declare function getTransformScaleRatios(svgElement: SVGSVGElement): Point;
