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
export var Rect;
(function (Rect) {
    function getOffset(rect) {
        return { x: rect.left, y: rect.top };
    }
    Rect.getOffset = getOffset;
    function getSize(rect) {
        return { width: rect.width, height: rect.height };
    }
    Rect.getSize = getSize;
    function setSize(rect, value) {
        rect.width = value.width;
        rect.height = value.height;
    }
    Rect.setSize = setSize;
    function right(rect) {
        return rect.left + rect.width;
    }
    Rect.right = right;
    function bottom(rect) {
        return rect.top + rect.height;
    }
    Rect.bottom = bottom;
    function topLeft(rect) {
        return { x: rect.left, y: rect.top };
    }
    Rect.topLeft = topLeft;
    function topRight(rect) {
        return { x: rect.left + rect.width, y: rect.top };
    }
    Rect.topRight = topRight;
    function bottomLeft(rect) {
        return { x: rect.left, y: rect.top + rect.height };
    }
    Rect.bottomLeft = bottomLeft;
    function bottomRight(rect) {
        return { x: rect.left + rect.width, y: rect.top + rect.height };
    }
    Rect.bottomRight = bottomRight;
    function equals(rect, other) {
        return other !== undefined && other !== null &&
            rect.left === other.left && rect.top === other.top && rect.width === other.width && rect.height === other.height;
    }
    Rect.equals = equals;
    function clone(rect) {
        return (rect !== null) ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null;
    }
    Rect.clone = clone;
    function toString(rect) {
        return "{left:" + rect.left + ", top:" + rect.top + ", width:" + rect.width + ", height:" + rect.height + "}";
    }
    Rect.toString = toString;
    function offset(rect, offsetX, offsetY) {
        let newLeft = ((rect.left + offsetX) >= 0) ? rect.left + offsetX : 0;
        let newTop = ((rect.top + offsetY) >= 0) ? rect.top + offsetY : 0;
        return { left: newLeft, top: newTop, width: rect.width, height: rect.height };
    }
    Rect.offset = offset;
    function add(rect, rect2) {
        return {
            left: rect.left + rect2.left,
            top: rect.top + rect2.top,
            height: rect.height + rect2.height,
            width: rect.width + rect2.width
        };
    }
    Rect.add = add;
    function subtract(rect, rect2) {
        return {
            left: rect.left - rect2.left,
            top: rect.top - rect2.top,
            height: rect.height - rect2.height,
            width: rect.width - rect2.width
        };
    }
    Rect.subtract = subtract;
    function inflate(rect, padding) {
        let result = clone(rect);
        if (padding) {
            result.left -= padding.left;
            result.top -= padding.top;
            result.width += padding.left + padding.right;
            result.height += padding.top + padding.bottom;
        }
        return result;
    }
    Rect.inflate = inflate;
    function deflate(rect, padding) {
        let result = clone(rect);
        if (padding) {
            result.left += padding.left;
            result.top += padding.top;
            result.width -= padding.left + padding.right;
            result.height -= padding.top + padding.bottom;
        }
        return result;
    }
    Rect.deflate = deflate;
    function inflateBy(rect, padding) {
        return { left: rect.left - padding, top: rect.top - padding, width: rect.width + padding + padding, height: rect.height + padding + padding };
    }
    Rect.inflateBy = inflateBy;
    function deflateBy(rect, padding) {
        return { left: rect.left + padding, top: rect.top + padding, width: rect.width - padding - padding, height: rect.height - padding - padding };
    }
    Rect.deflateBy = deflateBy;
    /**
     * Get closest point.
     *
     * @return the closest point on the rect to the (x,y) point given.
     * In case the (x,y) given is inside the rect, (x,y) will be returned.
     * Otherwise, a point on a border will be returned.
     */
    function getClosestPoint(rect, x, y) {
        return {
            x: Math.min(Math.max(rect.left, x), rect.left + rect.width),
            y: Math.min(Math.max(rect.top, y), rect.top + rect.height)
        };
    }
    Rect.getClosestPoint = getClosestPoint;
    function equal(rect1, rect2) {
        return rect1 === rect2 ||
            (rect1 !== undefined && rect2 !== undefined && rect1.left === rect2.left && rect1.top === rect2.top && rect1.width === rect2.width && rect1.height === rect2.height);
    }
    Rect.equal = equal;
    function equalWithPrecision(rect1, rect2) {
        return rect1 === rect2 ||
            (rect1 !== undefined && rect2 !== undefined &&
                Double.equalWithPrecision(rect1.left, rect2.left) && Double.equalWithPrecision(rect1.top, rect2.top) &&
                Double.equalWithPrecision(rect1.width, rect2.width) && Double.equalWithPrecision(rect1.height, rect2.height));
    }
    Rect.equalWithPrecision = equalWithPrecision;
    function isEmpty(rect) {
        return rect === undefined || rect === null || (rect.width === 0 && rect.height === 0);
    }
    Rect.isEmpty = isEmpty;
    function containsPoint(rect, point) {
        if ((rect === null) || (point === null)) {
            return false;
        }
        return Double.lessOrEqualWithPrecision(rect.left, point.x) &&
            Double.lessOrEqualWithPrecision(point.x, rect.left + rect.width) &&
            Double.lessOrEqualWithPrecision(rect.top, point.y) &&
            Double.lessOrEqualWithPrecision(point.y, rect.top + rect.height);
    }
    Rect.containsPoint = containsPoint;
    function isIntersecting(rect1, rect2) {
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
    Rect.isIntersecting = isIntersecting;
    function intersect(rect1, rect2) {
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
        }
        else {
            return { left: 0, top: 0, width: 0, height: 0 };
        }
    }
    Rect.intersect = intersect;
    function combine(rect1, rect2) {
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
    Rect.combine = combine;
    function getCentroid(rect) {
        return {
            x: rect.left + (rect.width / 2),
            y: rect.top + (rect.height / 2)
        };
    }
    Rect.getCentroid = getCentroid;
})(Rect || (Rect = {}));
//# sourceMappingURL=shapes.js.map