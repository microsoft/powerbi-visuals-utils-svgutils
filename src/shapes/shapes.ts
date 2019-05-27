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

// module powerbi.extensibility.utils.svg {

import { double as Double } from "powerbi-visuals-utils-typeutils";

import { IRect } from "./rect/irect";

import { IPoint, ISize, IThickness } from "./shapesInterfaces";

export module Rect {

    export function getOffset(rect: IRect): IPoint {
        return { x: rect.left, y: rect.top };
    }

    export function getSize(rect: IRect): ISize {
        return { width: rect.width, height: rect.height };
    }

    export function setSize(rect: IRect, value: ISize): void {
        rect.width = value.width;
        rect.height = value.height;
    }

    export function right(rect: IRect): number {
        return rect.left + rect.width;
    }

    export function bottom(rect: IRect): number {
        return rect.top + rect.height;
    }

    export function topLeft(rect: IRect): IPoint {
        return { x: rect.left, y: rect.top };
    }

    export function topRight(rect: IRect): IPoint {
        return { x: rect.left + rect.width, y: rect.top };
    }

    export function bottomLeft(rect: IRect): IPoint {
        return { x: rect.left, y: rect.top + rect.height };
    }

    export function bottomRight(rect: IRect): IPoint {
        return { x: rect.left + rect.width, y: rect.top + rect.height };
    }

    export function equals(rect: IRect, other: IRect): boolean {
        return other !== undefined && other !== null &&
            rect.left === other.left && rect.top === other.top && rect.width === other.width && rect.height === other.height;
    }

    export function clone(rect: IRect): IRect {
        return (rect !== null) ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null;
    }

    export function toString(rect: IRect): string {
        return "{left:" + rect.left + ", top:" + rect.top + ", width:" + rect.width + ", height:" + rect.height + "}";
    }

    export function offset(rect: IRect, offsetX: number, offsetY: number): IRect {
        let newLeft = ((rect.left + offsetX) >= 0) ? rect.left + offsetX : 0;
        let newTop = ((rect.top + offsetY) >= 0) ? rect.top + offsetY : 0;

        return { left: newLeft, top: newTop, width: rect.width, height: rect.height };
    }

    export function add(rect: IRect, rect2: IRect): IRect {
        return {
            left: rect.left + rect2.left,
            top: rect.top + rect2.top,
            height: rect.height + rect2.height,
            width: rect.width + rect2.width
        };
    }

    export function subtract(rect: IRect, rect2: IRect): IRect {
        return {
            left: rect.left - rect2.left,
            top: rect.top - rect2.top,
            height: rect.height - rect2.height,
            width: rect.width - rect2.width
        };
    }

    export function inflate(rect: IRect, padding: IThickness): IRect {
        let result = clone(rect);
        if (padding) {
            result.left -= padding.left;
            result.top -= padding.top;
            result.width += padding.left + padding.right;
            result.height += padding.top + padding.bottom;
        }
        return result;
    }

    export function deflate(rect: IRect, padding: IThickness): IRect {
        let result = clone(rect);
        if (padding) {
            result.left += padding.left;
            result.top += padding.top;
            result.width -= padding.left + padding.right;
            result.height -= padding.top + padding.bottom;
        }
        return result;
    }

    export function inflateBy(rect: IRect, padding: number): IRect {
        return { left: rect.left - padding, top: rect.top - padding, width: rect.width + padding + padding, height: rect.height + padding + padding };
    }

    export function deflateBy(rect: IRect, padding: number): IRect {
        return { left: rect.left + padding, top: rect.top + padding, width: rect.width - padding - padding, height: rect.height - padding - padding };
    }

    /**
     * Get closest point.
     *
     * @return the closest point on the rect to the (x,y) point given.
     * In case the (x,y) given is inside the rect, (x,y) will be returned.
     * Otherwise, a point on a border will be returned.
     */
    export function getClosestPoint(rect: IRect, x: number, y: number): IPoint {
        return {
            x: Math.min(Math.max(rect.left, x), rect.left + rect.width),
            y: Math.min(Math.max(rect.top, y), rect.top + rect.height)
        };
    }

    export function equal(rect1: IRect, rect2: IRect): boolean {
        return rect1 === rect2 ||
            (rect1 !== undefined && rect2 !== undefined && rect1.left === rect2.left && rect1.top === rect2.top && rect1.width === rect2.width && rect1.height === rect2.height);
    }

    export function equalWithPrecision(rect1: IRect, rect2: IRect): boolean {
        return rect1 === rect2 ||
            (rect1 !== undefined && rect2 !== undefined &&
            Double.equalWithPrecision(rect1.left, rect2.left) && Double.equalWithPrecision(rect1.top, rect2.top) &&
            Double.equalWithPrecision(rect1.width, rect2.width) && Double.equalWithPrecision(rect1.height, rect2.height));
    }

    export function isEmpty(rect: IRect): boolean {
        return rect === undefined || rect === null || (rect.width === 0 && rect.height === 0);
    }

    export function containsPoint(rect: IRect, point: IPoint): boolean {
        if ((rect === null) || (point === null)) {
            return false;
        }
        return Double.lessOrEqualWithPrecision(rect.left, point.x) &&
            Double.lessOrEqualWithPrecision(point.x, rect.left + rect.width) &&
            Double.lessOrEqualWithPrecision(rect.top, point.y) &&
            Double.lessOrEqualWithPrecision(point.y, rect.top + rect.height);
    }

    export function isIntersecting(rect1: IRect, rect2: IRect): boolean {
        if (!rect1 || !rect2) {
            return false;
        }
        let left = Math.max(rect1.left, rect2.left);
        let right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
        if (left > right) {
            return false;
        }
        let top = Math.max(rect1.top, rect2.top);
        let bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
        return top <= bottom;
    }

    export function intersect(rect1: IRect, rect2: IRect): IRect {
        if (!rect1) {
            return rect2;
        }
        if (!rect2) {
            return rect1;
        }
        let left = Math.max(rect1.left, rect2.left);
        let top = Math.max(rect1.top, rect2.top);
        let right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
        let bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
        if (left <= right && top <= bottom) {
            return { left: left, top: top, width: right - left, height: bottom - top };
        } else {
            return { left: 0, top: 0, width: 0, height: 0 };
        }
    }

    export function combine(rect1: IRect, rect2: IRect): IRect {
        if (!rect1) {
            return rect2;
        }
        if (!rect2) {
            return rect1;
        }
        let left = Math.min(rect1.left, rect2.left);
        let top = Math.min(rect1.top, rect2.top);
        let right = Math.max(rect1.left + rect1.width, rect2.left + rect2.width);
        let bottom = Math.max(rect1.top + rect1.height, rect2.top + rect2.height);

        return { left: left, top: top, width: right - left, height: bottom - top };
    }

    export function getCentroid(rect: IRect): IPoint {
        return {
            x: rect.left + (rect.width / 2),
            y: rect.top + (rect.height / 2)
        };
    }
}