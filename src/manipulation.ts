/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */


import { timerFlush } from "d3-timer";
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
export const AlmostZero = 1e-6;

/**
     * Creates a translate string for use with the SVG transform call.
     */
export function translate(x: number, y: number): string {
    return "translate(" + x + "," + y + ")";
}

/**
 * Creates a translateX string for use with the SVG transform call.
 */
export function translateXWithPixels(x: number): string {
    return "translateX(" + x + "px)";
}

export function translateWithPixels(x: number, y: number): string {
    return "translate(" + x + "px," + y + "px)";
}

/**
 * Creates a translate + rotate string for use with the SVG transform call.
 */
export function translateAndRotate(x: number, y: number, px: number, py: number, angle: number): string {
    return "translate("
        + x + "," + y + ")"
        + " rotate(" + angle + "," + px + "," + py + ")";
}

/**
 * Creates a scale string for use in a CSS transform property.
 */
export function scale(scale: number): string {
    return `scale(${scale})`;
}

/**
 * Creates a translate + scale string for use with the SVG transform call.
 */
export function translateAndScale(x: number, y: number, ratio: number): string {
    return "translate("
        + x + "," + y + ")"
        + " scale(" + ratio + ")";
}

/**
 * Creates a transform origin string for use in a CSS transform-origin property.
 */
export function transformOrigin(xOffset: string, yOffset: string): string {
    return `${xOffset} ${yOffset}`;
}

/**
 * Forces all D3 transitions to complete.
 * Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
 * This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
 * then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
 * you can run any zero-delay transitions immediately and avoid the flicker.
 *
 * These flickers are noticable on IE, and with a large number of webviews(not recommend you ever do this) on iOS.
 */
export function flushAllD3Transitions() {
    let now = Date.now;
    Date.now = function () { return Infinity; };
    timerFlush();
    Date.now = now;
}

/**
 * Wrapper for flushAllD3Transitions.
 */
export function flushAllD3TransitionsIfNeeded(options: AnimationOptions) {
    if (!options)
        return;

    let animationOptions: AnimationOptions = <AnimationOptions>options;

    if (animationOptions && animationOptions.transitionImmediate) {
        flushAllD3Transitions();
    }
}

/**
 * There is a known bug in IE10 that causes cryptic crashes for SVG elements with a null "d" attribute:
 * https://github.com/mbostock/d3/issues/1737
 */
export function ensureDAttribute(pathElement: Element) {
    if (!pathElement.getAttribute("d")) {
        pathElement.setAttribute("d", "");
    }
}

/**
 * In IE10, it is possible to return SVGPoints with NaN members.
 */
export function ensureValidSVGPoint(point: SVGPoint) {
    if (isNaN(point.x)) {
        point.x = 0;
    }
    if (isNaN(point.y)) {
        point.y = 0;
    }
}

/**
 * Parse the Transform string with value "translate(x,y)".
 * In Chrome for the translate(position) string the delimiter
 * is a comma and in IE it is a spaceso checking for both.
 */
export function parseTranslateTransform(input: string): { x: string; y: string } {
    if (!input || input.length === 0) { // Interpet falsy and empty string as a no-op translate
        return {
            x: "0",
            y: "0",
        };
    }
    let translateCoordinates = input.split(/[\s,]+/);

    let yValue = "0";
    let xValue: string;
    let xCoord = translateCoordinates[0];

    // Y coordinate is ommited in I.E if it is 0, so need to check against that
    if (translateCoordinates.length === 1) {
        // 10 refers to the length of "translate("
        xValue = xCoord.substring(10, xCoord.length - 1);
    } else {
        let yCoord = translateCoordinates[1];
        yValue = yCoord.substring(0, yCoord.length - 1);
        // 10 refers to the length of "translate("
        xValue = xCoord.substring(10, xCoord.length);
    }

    return {
        x: xValue,
        y: yValue
    };
}

/**
 * Create an arrow.
 */
export function createArrow(width: number, height: number, rotate: number): { path: string; transform: string } {
    let transform = "rotate(" + rotate + " " + width / 2 + " " + height / 2 + ")";
    let path = "M0 0";
    path += "L0 " + height;
    path += "L" + width + " " + height / 2 + " Z";
    return {
        path: path,
        transform: transform
    };
}

/**
 * Use the ratio of the scaled bounding rect and the SVG DOM bounding box to get the x and y transform scale values
 * @deprecated This function is unreliable across browser implementations, prefer to use SVGScaleDetector if needed.
 */
export function getTransformScaleRatios(svgElement: SVGSVGElement): Point {
    if (svgElement != null) {
        let scaledRect = svgElement.getBoundingClientRect();
        let domRect = svgElement.getBBox();
        if (domRect.height > 0 && domRect.width > 0) {
            return {
                x: scaledRect.width / domRect.width,
                y: scaledRect.height / domRect.height
            };
        }
    }
    return { x: 1, y: 1 };
}