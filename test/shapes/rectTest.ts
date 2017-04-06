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

/// <reference path="../_references.ts"/>

module powerbi.extensibility.utils.svg.test {
    import Shapes = powerbi.extensibility.utils.svg.shapes;
    import IRect = powerbi.extensibility.utils.svg.IRect;
    import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

    describe("Rect tests", () => {

        let rectA;
        let rectB;
        let isEmpty;
        let isIntersecting;
        let defaultRect: IRect = { left: 110, top: 100, width: 150, height: 117 };

        function AreRectsEqual(rectA, rectB): boolean {
            return (rectB.left === rectA.left && rectB.top === rectA.top && rectB.width === rectA.width && rectB.height === rectA.height);
        }

        it("add", () => {
            let rect1: IRect = {
                left: 10,
                top: 5,
                height: 20,
                width: 30
            };

            let rect2: IRect = {
                left: 1,
                top: 2,
                height: 3,
                width: 4
            };

            expect(Rect.add(rect1, rect2)).toEqual({
                left: 10 + 1,
                top: 5 + 2,
                height: 20 + 3,
                width: 30 + 4
            });
        });

        it("subtract", () => {
            let rect1: IRect = {
                left: 10,
                top: 5,
                height: 20,
                width: 30
            };

            let rect2: IRect = {
                left: 1,
                top: 2,
                height: 3,
                width: 4
            };

            expect(Rect.subtract(rect1, rect2)).toEqual({
                left: 10 - 1,
                top: 5 - 2,
                height: 20 - 3,
                width: 30 - 4
            });
        });

        it("Is Empty - true", () => {
            rectA = { left: 0, top: 0, width: 0, height: 0 };
            let isEmpty = Rect.isEmpty(rectA);
            expect(isEmpty).toBe(true);
        });

        it("Is Empty - false", () => {
            rectA = { left: 0, top: 0, width: 50, height: 20 };
            let isEmpty = Rect.isEmpty(rectA);
            expect(isEmpty).toBe(false);
        });

        it("Is Empty - null", () => {
            rectA = null;
            isEmpty = Rect.isEmpty(rectA);
            expect(isEmpty).toBe(true);
        });

        it("Is Intersecting - true", () => {
            rectA = { left: 0, top: 0, width: 200, height: 300 };
            rectB = { left: 170, top: 30, width: 300, height: 400 };
            isIntersecting = Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(true);
        });

        it("Is Intersecting - false", () => {
            rectA = { left: 0, top: 0, width: 10, height: 10 };
            rectB = { left: 100, top: 200, width: 500, height: 400 };
            isIntersecting = Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(false);
        });

        it("Is Intersecting - first rect is null", () => {
            rectA = { left: 0, top: 0, width: 200, height: 200 };
            rectB = null;
            isIntersecting = Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(false);
        });

        it("Is Intersecting - second rect is null", () => {
            rectA = null;
            rectB = { left: 0, top: 0, width: 200, height: 200 };
            isIntersecting = Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(false);
        });

        it("Get offset", () => {
            rectA = { left: 0, top: 0, width: 200, height: 200 };
            rectB = Rect.getOffset(rectA);
            expect(rectB.x).toBe(0);
            expect(rectB.y).toBe(0);
        });

        it("Get size", () => {
            rectA = { left: 0, top: 0, width: 200, height: 200 };
            rectB = Rect.getSize(rectA);
            expect(rectB.width).toBe(200);
            expect(rectB.height).toBe(200);
        });

        it("Set size", () => {
            rectA = { left: 0, top: 0, width: 200, height: 200 };
            let newSize: Shapes.ISize = { width: 150, height: 170 };
            Rect.setSize(rectA, newSize);
            expect(rectA.width).toBe(150);
            expect(rectA.height).toBe(170);
        });

        it("Get Right (Property)", () => {
            rectA = { left: 120, top: 50, width: 200, height: 200 };
            let right = Rect.right(rectA);
            expect(right).toBe(320);
        });

        it("Get Bottom (Property)", () => {
            rectA = { left: 70, top: 130, width: 200, height: 200 };
            let bottom = Rect.bottom(rectA);
            expect(bottom).toBe(330);
        });

        it("Get TopLeft (Property)", () => {
            rectA = { left: 0, top: 0, width: 200, height: 200 };
            let topLeft = Rect.topLeft(rectA);
            expect(topLeft.x).toBe(0);
            expect(topLeft.y).toBe(0);
        });

        it("Get TopRight (Property)", () => {
            rectA = { left: 80, top: 170, width: 150, height: 220 };
            let topRight = Rect.topRight(rectA);
            expect(topRight.x).toBe(230);
            expect(topRight.y).toBe(170);
        });

        it("Get BottomLeft (Property)", () => {
            rectA = { left: 0, top: 10, width: 30, height: 220 };
            let bottomLeft = Rect.bottomLeft(rectA);
            expect(bottomLeft.x).toBe(rectA.left);
            expect(bottomLeft.y).toEqual(rectA.top + rectA.height);
        });

        it("Get BottomRight (Property)", () => {
            rectA = { left: 50, top: 90, width: 200, height: 270 };
            let bottomRight = Rect.bottomRight(rectA);
            expect(bottomRight.x).toBe(250);
            expect(bottomRight.y).toBe(360);
        });

        it("Check equals - return true", () => {
            rectA = { left: 50, top: 90, width: 200, height: 270 };
            rectB = { left: 50, top: 90, width: 200, height: 270 };
            let rectEquals = Rect.equals(rectA, rectB);
            expect(rectEquals).toBe(true);
        });

        it("Check equals - return false", () => {
            rectA = { left: 50, top: 90, width: 200, height: 270 };
            rectB = { left: 50, top: 90, width: 250, height: 270 };
            let rectEquals = Rect.equals(rectA, rectB);
            expect(rectEquals).toBe(false);
        });

        it("Check equals - null", () => {
            rectA = { left: 70, top: 90, width: 130, height: 270 };
            let rectEquals = Rect.equals(rectA, null);
            expect(rectEquals).toBe(false);
        });

        it("Clone", () => {
            rectA = { left: 70, top: 90, width: 130, height: 270 };
            rectB = Rect.clone(rectA);
            expect(AreRectsEqual(rectA, rectB)).toBe(true);
        });

        it("Rect ToString", () => {
            rectA = { left: 70, top: 90, width: 130, height: 270 };
            let rectToString = "{left:70, top:90, width:130, height:270}";
            expect(Rect.toString(rectA)).toBe(rectToString);
        });

        it("Rect offset - Positive Values", () => {
            rectA = { left: 70, top: 90, width: 130, height: 270 };
            let rectB = Rect.offset(rectA, 30, 30);
            expect(rectB.left).toBe(rectA.left + 30);
            expect(rectB.top).toBe(rectA.top + 30);
            expect(rectB.width).toBe(rectA.width);
            expect(rectB.height).toBe(rectA.height);
        });

        it("Rect offset - Zero Values", () => {
            rectA = { left: 70, top: 90, width: 130, height: 270 };
            let rectB = Rect.offset(rectA, 0, 0);
            expect(rectB.left).toBe(rectA.left);

        });

        it("Rect offset - Negative Values", () => {
            rectA = { left: 70, top: 90, width: 130, height: 270 };
            rectB = Rect.offset(rectA, -30, -60);
            expect(rectB.left).toBe(rectA.left - 30);
            expect(rectB.top).toBe(rectA.top - 60);
            expect(rectB.width).toBe(rectA.width);
            expect(rectB.height).toBe(rectA.height);
        });

        it("Rect offset - Negative Offset Bigger than Top Left", () => {
            rectA = { left: 70, top: 90, width: 130, height: 270 };
            rectB = Rect.offset(rectA, -100, -130);
            expect(rectB.left).toBe(0);
            expect(rectB.top).toBe(0);
            expect(rectB.width).toBe(rectA.width);
            expect(rectB.height).toBe(rectA.height);
        });

        it("Rect inflate", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let thickness: Shapes.IThickness = { left: 30, top: 20, right: 50, bottom: 40 };
            rectB = Rect.inflate(rectA, thickness);
            expect(rectB.left).toBe(40);
            expect(rectB.top).toBe(90);
            expect(rectB.width).toBe(210);
            expect(rectB.height).toBe(330);
        });

        it("Rect inflate - Zero Values", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let thickness: Shapes.IThickness = { left: 0, top: 0, right: 0, bottom: 0 };
            rectB = Rect.inflate(rectA, thickness);
            expect(rectB.left).toBe(70);
            expect(rectB.top).toBe(110);
            expect(rectB.width).toBe(130);
            expect(rectB.height).toBe(270);
        });

        it("Rect deflate", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let thickness: Shapes.IThickness = { left: 30, top: 20, right: 50, bottom: 40 };
            rectB = Rect.deflate(rectA, thickness);
            expect(rectB.left).toBe(100);
            expect(rectB.top).toBe(130);
            expect(rectB.width).toBe(50);
            expect(rectB.height).toBe(210);
        });

        it("Rect deflate - Zero Values", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let thickness: Shapes.IThickness = { left: 0, top: 0, right: 0, bottom: 0 };
            rectB = Rect.deflate(rectA, thickness);
            expect(rectB.left).toBe(70);
            expect(rectB.top).toBe(110);
            expect(rectB.width).toBe(130);
            expect(rectB.height).toBe(270);
        });

        it("Rect inflateBy", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectA = Rect.inflateBy(rectA, 20);
            expect(rectA.left).toBe(50);
            expect(rectA.top).toBe(90);
            expect(rectA.width).toBe(170);
            expect(rectA.height).toBe(310);
        });

        it("Rect inflateBy - Zero Values", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectA = Rect.inflateBy(rectA, 0);
            expect(rectA.left).toBe(70);
            expect(rectA.top).toBe(110);
            expect(rectA.width).toBe(130);
            expect(rectA.height).toBe(270);
        });

        it("Rect deflateBy", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectA = Rect.deflateBy(rectA, 30);
            expect(rectA.left).toBe(100);
            expect(rectA.top).toBe(140);
            expect(rectA.width).toBe(70);
            expect(rectA.height).toBe(210);
        });

        it("Rect deflateBy - Zero Values", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectA = Rect.deflateBy(rectA, 0);
            expect(rectA.left).toBe(70);
            expect(rectA.top).toBe(110);
            expect(rectA.width).toBe(130);
            expect(rectA.height).toBe(270);
        });

        it("Contains Point - Return true", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let newPoint: Shapes.IPoint = { x: 100, y: 140 };
            let isContains = Shapes.Rect.containsPoint(rectA, newPoint);
            expect(isContains).toBe(true);
        });

        it("Contains Point check floating point rounding precision", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let inPoint: Shapes.IPoint = { x: 70.00000001, y: 140 };
            let outPoint: Shapes.IPoint = { x: 69.9999999, y: 140 };
            let containsInner = Shapes.Rect.containsPoint(rectA, inPoint);
            let containsOuter = Shapes.Rect.containsPoint(rectA, outPoint);
            expect(containsInner).toBe(true);
            expect(containsOuter).toBe(false);
        });

        it("Contains Point - Return false", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let newPoint: Shapes.IPoint = { x: 220, y: 170 };
            let isContains = Shapes.Rect.containsPoint(rectA, newPoint);
            expect(isContains).toBe(false);
        });

        it("Contains Point - null", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            let isContains = Shapes.Rect.containsPoint(rectA, null);
            expect(isContains).toBe(false);
        });

        it("Is Intersecting - Return true", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectB = { left: 70, top: 150, width: 130, height: 320 };
            let isIntersecting = Shapes.Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(true);
        });

        it("Is Intersecting - Return false", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectB = { left: 30, top: 20, width: 20, height: 20 };
            let isIntersecting = Shapes.Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(false);
        });

        it("Is Intersecting - first null", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectB = null;
            let isIntersecting = Shapes.Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(false);
        });

        it("Is Intersecting - second null", () => {
            rectA = null;
            rectB = { left: 70, top: 110, width: 130, height: 270 };
            let isIntersecting = Shapes.Rect.isIntersecting(rectA, rectB);
            expect(isIntersecting).toBe(false);
        });

        it("Intersect - Rect A Contains B", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectB = { left: 90, top: 140, width: 20, height: 20 };
            expect(isIntersecting).toBe(false);
        });

        it("Intersect - Rect B Contains A", () => {
            rectA = { left: 110, top: 150, width: 30, height: 25 };
            rectB = { left: 90, top: 140, width: 100, height: 120 };
            expect(isIntersecting).toBe(false);
        });

        it("Intersect - Rect A Intersect B", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectB = { left: 90, top: 130, width: 80, height: 70 };
            expect(isIntersecting).toBe(false);
        });

        it("Intersect - Rect A don't Intersect B", () => {
            rectA = { left: 0, top: 0, width: 20, height: 30 };
            rectB = { left: 70, top: 110, width: 130, height: 270 };
            expect(isIntersecting).toBe(false);
        });

        it("Intersect - Rect A is null", () => {
            rectA = null;
            rectB = { left: 70, top: 110, width: 130, height: 270 };
            expect(isIntersecting).toBe(false);
        });

        it("Intersect - Rect B is null", () => {
            rectA = { left: 70, top: 110, width: 130, height: 270 };
            rectB = null;
            expect(isIntersecting).toBe(false);
        });

        it("Combine 2 rects", () => {
            rectA = { left: 50, top: 50, width: 50, height: 50 };
            rectB = { left: 60, top: 60, width: 60, height: 60 };
            let newRect = Rect.combine(rectA, rectB);
            let newRectCalculated: IRect = { left: 50, top: 50, width: 70, height: 70 };
            expect(AreRectsEqual(newRectCalculated, newRect)).toBe(true);
        });

        it("Combine 2 rects (A contains B)", () => {
            rectA = { left: 150, top: 150, width: 20, height: 20 };
            rectB = { left: 160, top: 160, width: 10, height: 10 };
            let newRect = Rect.combine(rectA, rectB);
            expect(AreRectsEqual(rectA, newRect)).toBe(true);
        });

        it("Combine 2 rects (B contains A)", () => {
            rectA = { left: 150, top: 150, width: 20, height: 20 };
            rectB = { left: 130, top: 130, width: 50, height: 50 };
            let newRect = Rect.combine(rectA, rectB);
            expect(AreRectsEqual(newRect, rectB)).toBe(true);
        });

        it("Combine 2 rects (one empty)", () => {
            rectA = { left: 150, top: 150, width: 20, height: 20 };
            rectB = { left: 0, top: 0, width: 0, height: 0 };
            let newRect = rectA;
            Rect.combine(rectA, rectB);
            expect(AreRectsEqual(rectA, newRect)).toBe(true);
        });

        it("getCentroid", () => {
            let rect: IRect = { left: 70, top: 110, width: 130, height: 270 };

            expect(Rect.getCentroid(rect)).toEqual({
                x: 135,
                y: 245
            });
        });
    });
}
