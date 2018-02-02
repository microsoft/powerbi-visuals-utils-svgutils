var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Rect = (function () {
                    // Constructor
                    function Rect(left, top, width, height) {
                        this.left = left || 0;
                        this.top = top || 0;
                        this.width = width || 0;
                        this.height = height || 0;
                    }
                    return Rect;
                }());
                svg.Rect = Rect;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Double = powerbi.extensibility.utils.type.Double;
                var shapes;
                (function (shapes) {
                    var Polygon = (function () {
                        function Polygon(absolutePoints) {
                            this.polygonPoints = this.convertArrayPathToPoints(absolutePoints);
                        }
                        Polygon.prototype.absoluteCentroid = function () {
                            if (this._absoluteCentroid == null) {
                                this._absoluteCentroid = this.calculatePolygonCentroid();
                            }
                            return this._absoluteCentroid;
                        };
                        Polygon.prototype.absoluteBoundingRect = function () {
                            if (this._absoluteBoundingRect == null) {
                                this._absoluteBoundingRect = this.calculateBoundingRect();
                            }
                            return this._absoluteBoundingRect;
                        };
                        /**
                         * Check if label text contain in polygon shape.
                         *
                         * @return true/false is the label fit in polygon.
                         * measure if rects points are inside the polygon shape
                         * return true if there is at least 3 point inside the polygon
                         */
                        Polygon.prototype.contains = function (rect) {
                            var topLeft = { x: rect.left, y: rect.top };
                            var topRight = { x: rect.left + rect.width, y: rect.top };
                            var bottomLeft = { x: rect.left, y: rect.top + rect.height };
                            var bottomRight = { x: rect.left + rect.width, y: rect.top + rect.height };
                            return (this.inside(topLeft)
                                && this.inside(topRight)
                                && this.inside(bottomLeft)
                                && this.inside(bottomRight));
                        };
                        /**
                        * Check if label text is outside of polygon shape.
                        * It checks 8 points in the label. TopLeft, TopCenter, TopRight, MiddleLeft, MiddleRight, BottomLeft, BottomMiddle, BottomRight
                        * @return true/false is there is any conflict (at least one point inside the shape).
                        */
                        Polygon.prototype.conflicts = function (rect) {
                            if (!this.isConflictWithBoundingBox(rect)) {
                                return false;
                            }
                            var topLeft = { x: rect.left, y: rect.top };
                            var topCenter = { x: rect.left + rect.width / 2, y: rect.top };
                            var topRight = { x: rect.left + rect.width, y: rect.top };
                            var bottomLeft = { x: rect.left, y: rect.top + rect.height };
                            var bottomCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height };
                            var bottomRight = { x: rect.left + rect.width, y: rect.top + rect.height };
                            var middleLeft = { x: rect.left, y: rect.top + rect.height / 2 };
                            var middleRight = { x: rect.left + rect.width, y: rect.top + rect.height / 2 };
                            return (this.inside(topLeft)
                                || this.inside(topCenter)
                                || this.inside(topRight)
                                || this.inside(bottomLeft)
                                || this.inside(bottomCenter)
                                || this.inside(bottomRight)
                                || this.inside(middleLeft)
                                || this.inside(middleRight));
                        };
                        /**
                        * returns intersection point of a line (depicted by two points) and a polygon.
                        *
                        * @return the point of intersection or null if there is no intersection.
                        */
                        Polygon.prototype.lineIntersectionPoint = function (p0, p1) {
                            for (var i = 0; i < this.polygonPoints.length; i++) {
                                var p2 = this.polygonPoints[i];
                                var p3 = (i === this.polygonPoints.length - 1 ? this.polygonPoints[0] : this.polygonPoints[i + 1]);
                                var intersection = this.getLineIntersection(p0, p1, p2, p3);
                                if (intersection !== null) {
                                    return intersection;
                                }
                            }
                            return null;
                        };
                        /**
                         * calculate Polygon Area.
                         *
                         * @return the area of the polygon (as number).
                         */
                        Polygon.calculateAbsolutePolygonArea = function (polygonPoints) {
                            var i, j = 1;
                            var area = 0.0;
                            for (i = 0; i < polygonPoints.length; i++) {
                                area += polygonPoints[i].x * polygonPoints[j].y - polygonPoints[j].x * polygonPoints[i].y;
                                j = (j + 1) % polygonPoints.length;
                            }
                            area *= 0.5;
                            return area;
                        };
                        /**
                        * Check if label text is outside of polygon bounding box.
                        *
                        * @return true/false is there is any conflict (at least one point inside the shape).
                        */
                        Polygon.prototype.isConflictWithBoundingBox = function (rect) {
                            return Rect.isIntersecting(this.absoluteBoundingRect(), rect);
                        };
                        /**
                         * Calculate Polygon Centroid.
                         *
                         * @return 'center' point of the polygon.
                         * calculate the polygon area
                         * calculate the average points of the polygon by x & y axis.
                         * divided the average point by the area
                         */
                        Polygon.prototype.calculatePolygonCentroid = function () {
                            var area, tempPoint, cx, cy, i, j;
                            /* First calculate the polygon's signed area A */
                            area = Polygon.calculateAbsolutePolygonArea(this.polygonPoints);
                            /* Now calculate the centroid coordinates Cx and Cy */
                            cx = cy = 0.0;
                            j = 1;
                            for (i = 0; i < this.polygonPoints.length; i++) {
                                tempPoint = this.polygonPoints[i].x * this.polygonPoints[j].y - this.polygonPoints[j].x * this.polygonPoints[i].y;
                                cx += (this.polygonPoints[i].x + this.polygonPoints[j].x) * tempPoint;
                                cy += (this.polygonPoints[i].y + this.polygonPoints[j].y) * tempPoint;
                                j = (j + 1) % this.polygonPoints.length;
                            }
                            cx = cx / (6.0 * area);
                            cy = cy / (6.0 * area);
                            return {
                                x: cx,
                                y: cy,
                            };
                        };
                        Polygon.prototype.calculateBoundingRect = function () {
                            var minX = Number.POSITIVE_INFINITY;
                            var minY = Number.POSITIVE_INFINITY;
                            var maxX = Number.NEGATIVE_INFINITY;
                            var maxY = Number.NEGATIVE_INFINITY;
                            for (var _i = 0, _a = this.polygonPoints; _i < _a.length; _i++) {
                                var polygonPoint = _a[_i];
                                if (polygonPoint.x < minX) {
                                    minX = polygonPoint.x;
                                }
                                else if (polygonPoint.x > maxX) {
                                    maxX = polygonPoint.x;
                                }
                                if (polygonPoint.y < minY) {
                                    minY = polygonPoint.y;
                                }
                                else if (polygonPoint.y > maxY) {
                                    maxY = polygonPoint.y;
                                }
                            }
                            return {
                                left: minX,
                                top: minY,
                                width: maxX - minX,
                                height: maxY - minY
                            };
                        };
                        /**
                         * Check if point exist inside polygon shape.
                         *
                         * @return true/false if point exist inside shape.
                         * ray-casting algorithm based on:
                         * http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
                         */
                        Polygon.prototype.inside = function (point) {
                            var x = point.x, y = point.y;
                            var insideVar = false;
                            for (var i = 0, j = this.polygonPoints.length - 1; i < this.polygonPoints.length; j = i++) {
                                var xi = this.polygonPoints[i].x, yi = this.polygonPoints[i].y;
                                var xj = this.polygonPoints[j].x, yj = this.polygonPoints[j].y;
                                var intersect = ((yi > y) !== (yj > y))
                                    && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                                if (intersect) {
                                    insideVar = !insideVar;
                                }
                            }
                            return insideVar;
                        };
                        /**
                         * Checks if a line (presented as two points) intersects with a another line
                         */
                        Polygon.prototype.getLineIntersection = function (line0p1, line0p2, line1p1, line1p2) {
                            var p0_x = line0p1.x;
                            var p0_y = line0p1.y;
                            var p1_x = line0p2.x;
                            var p1_y = line0p2.y;
                            var p2_x = line1p1.x;
                            var p2_y = line1p1.y;
                            var p3_x = line1p2.x;
                            var p3_y = line1p2.y;
                            var s1_x = p1_x - p0_x;
                            var s1_y = p1_y - p0_y;
                            var s2_x = p3_x - p2_x;
                            var s2_y = p3_y - p2_y;
                            // Calculating collisions using cross products
                            var s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
                            var t = (s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);
                            // 0<=s<=1 and 0<=t<=1 ensures that the collision is part of the original line
                            if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
                                // Collision detected
                                return { x: (p0_x + (t * s1_x)), y: (p0_y + (t * s1_y)) };
                            }
                            return null; // No collision
                        };
                        Polygon.prototype.convertArrayPathToPoints = function (path) {
                            var pointsRes = [];
                            for (var i = 0; i < path.length; i += 2) {
                                var x = path[i];
                                var y = path[i + 1];
                                var newPoint = {
                                    x: x,
                                    y: y,
                                };
                                pointsRes.push(newPoint);
                            }
                            return pointsRes;
                        };
                        return Polygon;
                    }());
                    shapes.Polygon = Polygon;
                    var Rect;
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
                            var newLeft = ((rect.left + offsetX) >= 0) ? rect.left + offsetX : 0;
                            var newTop = ((rect.top + offsetY) >= 0) ? rect.top + offsetY : 0;
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
                            var result = clone(rect);
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
                            var result = clone(rect);
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
                            var left = Math.max(rect1.left, rect2.left);
                            var right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
                            if (left > right) {
                                return false;
                            }
                            var top = Math.max(rect1.top, rect2.top);
                            var bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
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
                            var left = Math.max(rect1.left, rect2.left);
                            var top = Math.max(rect1.top, rect2.top);
                            var right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
                            var bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
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
                            var left = Math.min(rect1.left, rect2.left);
                            var top = Math.min(rect1.top, rect2.top);
                            var right = Math.max(rect1.left + rect1.width, rect2.left + rect2.width);
                            var bottom = Math.max(rect1.top + rect1.height, rect2.top + rect2.height);
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
                    })(Rect = shapes.Rect || (shapes.Rect = {}));
                })(shapes = svg.shapes || (svg.shapes = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Point = (function () {
                    function Point(x, y) {
                        this.x = x || 0;
                        this.y = y || 0;
                    }
                    return Point;
                }());
                svg.Point = Point;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                /**
                 * CSS constants.
                 */
                var CssConstants;
                (function (CssConstants) {
                    function createClassAndSelector(className) {
                        return {
                            className: className,
                            selectorName: "." + className,
                        };
                    }
                    CssConstants.createClassAndSelector = createClassAndSelector;
                    CssConstants.styleAttribute = "style";
                    CssConstants.pixelUnits = "px";
                    CssConstants.heightProperty = "height";
                    CssConstants.widthProperty = "width";
                    CssConstants.topProperty = "top";
                    CssConstants.bottomProperty = "bottom";
                    CssConstants.leftProperty = "left";
                    CssConstants.rightProperty = "right";
                    CssConstants.marginTopProperty = "margin-top";
                    CssConstants.marginLeftProperty = "margin-left";
                    CssConstants.displayProperty = "display";
                    CssConstants.backgroundProperty = "background";
                    CssConstants.backgroundColorProperty = "background-color";
                    CssConstants.backgroundRepeatProperty = "background-repeat";
                    CssConstants.backgroundSizeProperty = "background-size";
                    CssConstants.backgroundImageProperty = "background-image";
                    CssConstants.textShadowProperty = "text-shadow";
                    CssConstants.textAlignProperty = "text-align";
                    CssConstants.borderProperty = "border";
                    CssConstants.borderTopWidthProperty = "border-top-width";
                    CssConstants.borderBottomWidthProperty = "border-bottom-width";
                    CssConstants.borderLeftWidthProperty = "border-left-width";
                    CssConstants.borderRightWidthProperty = "border-right-width";
                    CssConstants.fontSizeProperty = "font-size";
                    CssConstants.fontWeightProperty = "font-weight";
                    CssConstants.colorProperty = "color";
                    CssConstants.opacityProperty = "opacity";
                    CssConstants.paddingLeftProperty = "padding-left";
                    CssConstants.paddingRightProperty = "padding-right";
                    CssConstants.positionProperty = "position";
                    CssConstants.maxWidthProperty = "max-width";
                    CssConstants.minWidthProperty = "min-width";
                    CssConstants.overflowProperty = "overflow";
                    CssConstants.overflowXProperty = "overflow-x";
                    CssConstants.overflowYProperty = "overflow-y";
                    CssConstants.transformProperty = "transform";
                    CssConstants.webkitTransformProperty = "-webkit-transform";
                    CssConstants.cursorProperty = "cursor";
                    CssConstants.visibilityProperty = "visibility";
                    CssConstants.absoluteValue = "absolute";
                    CssConstants.zeroPixelValue = "0px";
                    CssConstants.autoValue = "auto";
                    CssConstants.hiddenValue = "hidden";
                    CssConstants.noneValue = "none";
                    CssConstants.blockValue = "block";
                    CssConstants.inlineBlockValue = "inline-block";
                    CssConstants.transparentValue = "transparent";
                    CssConstants.boldValue = "bold";
                    CssConstants.visibleValue = "visible";
                    CssConstants.tableRowValue = "table-row";
                    CssConstants.coverValue = "cover";
                    CssConstants.pointerValue = "pointer";
                    CssConstants.scrollValue = "scroll";
                })(CssConstants = svg.CssConstants || (svg.CssConstants = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var touch;
                (function (touch) {
                    var Point = (function () {
                        function Point(x, y) {
                            this.x = x || 0;
                            this.y = y || 0;
                        }
                        Point.prototype.offset = function (offsetX, offsetY) {
                            this.x += offsetX;
                            this.y += offsetY;
                        };
                        return Point;
                    }());
                    touch.Point = Point;
                    var Rectangle = (function (_super) {
                        __extends(Rectangle, _super);
                        function Rectangle(x, y, width, height) {
                            var _this = _super.call(this, x, y) || this;
                            _this.width = width || 0;
                            _this.height = height || 0;
                            return _this;
                        }
                        Object.defineProperty(Rectangle.prototype, "point", {
                            get: function () {
                                return new Point(this.x, this.y);
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Rectangle.prototype.contains = function (p) {
                            return Rectangle.contains(this, p);
                        };
                        Rectangle.contains = function (rect, p) {
                            if (p && !Rectangle.isEmpty(rect)) {
                                return rect.x <= p.x && p.x < rect.x + rect.width && rect.y <= p.y && p.y < rect.y + rect.height;
                            }
                            return false;
                        };
                        Rectangle.isEmpty = function (rect) {
                            return !(rect !== undefined && rect.width >= 0 && rect.height >= 0);
                        };
                        return Rectangle;
                    }(Point));
                    touch.Rectangle = Rectangle;
                })(touch = svg.touch || (svg.touch = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var touch;
                (function (touch) {
                    function touchStartEventName() {
                        var eventName = "touchstart";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerdown";
                        }
                        return eventName;
                    }
                    touch.touchStartEventName = touchStartEventName;
                    function touchMoveEventName() {
                        var eventName = "touchmove";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointermove";
                        }
                        return eventName;
                    }
                    touch.touchMoveEventName = touchMoveEventName;
                    function touchEndEventName() {
                        var eventName = "touchend";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerup";
                        }
                        return eventName;
                    }
                    touch.touchEndEventName = touchEndEventName;
                    function usePointerEvents() {
                        var eventName = touchStartEventName();
                        return eventName === "pointerdown" || eventName === "MSPointerDown";
                    }
                    touch.usePointerEvents = usePointerEvents;
                })(touch = svg.touch || (svg.touch = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                function getCoordinates(rootNode, isPointerEvent) {
                    var coordinates;
                    if (isPointerEvent) {
                        // DO NOT USE - WebKit bug in getScreenCTM with nested SVG results in slight negative coordinate shift
                        // Also, IE will incorporate transform scale but WebKit does not, forcing us to detect browser and adjust appropriately.
                        // Just use non-scaled coordinates for all browsers, and adjust for the transform scale later (see lineChart.findIndex)
                        // coordinates = d3.mouse(rootNode);
                        // copied from d3_eventSource (which is not exposed)
                        var e = d3.event, s = void 0;
                        while (s = e.sourceEvent)
                            e = s;
                        var rect = rootNode.getBoundingClientRect();
                        coordinates = [e.clientX - rect.left - rootNode.clientLeft, e.clientY - rect.top - rootNode.clientTop];
                    }
                    else {
                        var touchCoordinates = d3.touches(rootNode);
                        if (touchCoordinates && touchCoordinates.length > 0) {
                            coordinates = touchCoordinates[0];
                        }
                    }
                    return coordinates;
                }
                svg.getCoordinates = getCoordinates;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                /**
                 * Very small values, when stringified, may be converted to scientific notation and cause a temporarily
                 * invalid attribute or style property value.
                 * For example, the number 0.0000001 is converted to the string "1e-7".
                 * This is particularly noticeable when interpolating opacity values.
                 * To avoid scientific notation, start or end the transition at 1e-6,
                 * which is the smallest value that is not stringified in exponential notation.
                 */
                svg.AlmostZero = 1e-6;
                /**
                     * Creates a translate string for use with the SVG transform call.
                     */
                function translate(x, y) {
                    return "translate(" + x + "," + y + ")";
                }
                svg.translate = translate;
                /**
                 * Creates a translateX string for use with the SVG transform call.
                 */
                function translateXWithPixels(x) {
                    return "translateX(" + x + "px)";
                }
                svg.translateXWithPixels = translateXWithPixels;
                function translateWithPixels(x, y) {
                    return "translate(" + x + "px," + y + "px)";
                }
                svg.translateWithPixels = translateWithPixels;
                /**
                 * Creates a translate + rotate string for use with the SVG transform call.
                 */
                function translateAndRotate(x, y, px, py, angle) {
                    return "translate("
                        + x + "," + y + ")"
                        + " rotate(" + angle + "," + px + "," + py + ")";
                }
                svg.translateAndRotate = translateAndRotate;
                /**
                 * Creates a scale string for use in a CSS transform property.
                 */
                function scale(scale) {
                    return "scale(" + scale + ")";
                }
                svg.scale = scale;
                /**
                 * Creates a translate + scale string for use with the SVG transform call.
                 */
                function translateAndScale(x, y, ratio) {
                    return "translate("
                        + x + "," + y + ")"
                        + " scale(" + ratio + ")";
                }
                svg.translateAndScale = translateAndScale;
                /**
                 * Creates a transform origin string for use in a CSS transform-origin property.
                 */
                function transformOrigin(xOffset, yOffset) {
                    return xOffset + " " + yOffset;
                }
                svg.transformOrigin = transformOrigin;
                /**
                 * Forces all D3 transitions to complete.
                 * Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
                 * This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
                 * then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
                 * you can run any zero-delay transitions immediately and avoid the flicker.
                 *
                 * These flickers are noticable on IE, and with a large number of webviews(not recommend you ever do this) on iOS.
                 */
                function flushAllD3Transitions() {
                    var now = Date.now;
                    Date.now = function () { return Infinity; };
                    d3.timer.flush();
                    Date.now = now;
                }
                svg.flushAllD3Transitions = flushAllD3Transitions;
                /**
                 * Wrapper for flushAllD3Transitions.
                 */
                function flushAllD3TransitionsIfNeeded(options) {
                    if (!options)
                        return;
                    var animationOptions = options;
                    if (animationOptions && animationOptions.transitionImmediate) {
                        flushAllD3Transitions();
                    }
                }
                svg.flushAllD3TransitionsIfNeeded = flushAllD3TransitionsIfNeeded;
                /**
                 * There is a known bug in IE10 that causes cryptic crashes for SVG elements with a null "d" attribute:
                 * https://github.com/mbostock/d3/issues/1737
                 */
                function ensureDAttribute(pathElement) {
                    if (!pathElement.getAttribute("d")) {
                        pathElement.setAttribute("d", "");
                    }
                }
                svg.ensureDAttribute = ensureDAttribute;
                /**
                 * In IE10, it is possible to return SVGPoints with NaN members.
                 */
                function ensureValidSVGPoint(point) {
                    if (isNaN(point.x)) {
                        point.x = 0;
                    }
                    if (isNaN(point.y)) {
                        point.y = 0;
                    }
                }
                svg.ensureValidSVGPoint = ensureValidSVGPoint;
                /**
                 * Parse the Transform string with value "translate(x,y)".
                 * In Chrome for the translate(position) string the delimiter
                 * is a comma and in IE it is a spaceso checking for both.
                 */
                function parseTranslateTransform(input) {
                    if (!input || input.length === 0) {
                        return {
                            x: "0",
                            y: "0",
                        };
                    }
                    var translateCoordinates = input.split(/[\s,]+/);
                    var yValue = "0";
                    var xValue;
                    var xCoord = translateCoordinates[0];
                    // Y coordinate is ommited in I.E if it is 0, so need to check against that
                    if (translateCoordinates.length === 1) {
                        // 10 refers to the length of "translate("
                        xValue = xCoord.substring(10, xCoord.length - 1);
                    }
                    else {
                        var yCoord = translateCoordinates[1];
                        yValue = yCoord.substring(0, yCoord.length - 1);
                        // 10 refers to the length of "translate("
                        xValue = xCoord.substring(10, xCoord.length);
                    }
                    return {
                        x: xValue,
                        y: yValue
                    };
                }
                svg.parseTranslateTransform = parseTranslateTransform;
                /**
                 * Create an arrow.
                 */
                function createArrow(width, height, rotate) {
                    var transform = "rotate(" + rotate + " " + width / 2 + " " + height / 2 + ")";
                    var path = "M0 0";
                    path += "L0 " + height;
                    path += "L" + width + " " + height / 2 + " Z";
                    return {
                        path: path,
                        transform: transform
                    };
                }
                svg.createArrow = createArrow;
                /**
                 * Use the ratio of the scaled bounding rect and the SVG DOM bounding box to get the x and y transform scale values
                 * @deprecated This function is unreliable across browser implementations, prefer to use SVGScaleDetector if needed.
                 */
                function getTransformScaleRatios(svgElement) {
                    if (svgElement != null) {
                        var scaledRect = svgElement.getBoundingClientRect();
                        var domRect = svgElement.getBBox();
                        if (domRect.height > 0 && domRect.width > 0) {
                            return {
                                x: scaledRect.width / domRect.width,
                                y: scaledRect.height / domRect.height
                            };
                        }
                    }
                    return { x: 1, y: 1 };
                }
                svg.getTransformScaleRatios = getTransformScaleRatios;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
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
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var SVGScaleDetector = (function () {
                    function SVGScaleDetector(svgElement) {
                        this.scaleDetectorElement = svgElement
                            .append("rect") // Using a <rect> which should have a reliable bounding box across browser implementations.
                            .classed("scale-detector", true)
                            .attr({
                            width: 1,
                            height: 1,
                            "stroke-width": "0px",
                            fill: "none",
                        })
                            .node();
                    }
                    SVGScaleDetector.prototype.getScale = function () {
                        var scaledRect = this.scaleDetectorElement.getBoundingClientRect();
                        var domRect = this.scaleDetectorElement.getBBox();
                        if (domRect.height > 0 && domRect.width > 0) {
                            return {
                                x: scaledRect.width / domRect.width,
                                y: scaledRect.height / domRect.height
                            };
                        }
                        return {
                            x: 1,
                            y: 1
                        };
                    };
                    return SVGScaleDetector;
                }());
                svg.SVGScaleDetector = SVGScaleDetector;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
