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

export class Point {
    public x: number;
    public y: number;

    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    public offset(offsetX: number, offsetY: number) {
        this.x += offsetX;
        this.y += offsetY;
    }
}

export class Rectangle extends Point {
    public width: number;
    public height: number;

    constructor(x?: number, y?: number, width?: number, height?: number) {
        super(x, y);
        this.width = width || 0;
        this.height = height || 0;
    }

    get point(): Point {
        return new Point(this.x, this.y);
    }

    public contains(p: Point): boolean {
        return Rectangle.contains(this, p);
    }

    public static contains(rect: Rectangle, p: Point): boolean {
        if (p && !Rectangle.isEmpty(rect)) {
            return rect.x <= p.x && p.x < rect.x + rect.width && rect.y <= p.y && p.y < rect.y + rect.height;
        }
        return false;
    }

    public static isEmpty(rect: Rectangle): boolean {
        return !(rect !== undefined && rect.width >= 0 && rect.height >= 0);
    }
}