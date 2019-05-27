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
import { Selection } from "d3-selection";

import { Point } from "./shapes/point";

export class SVGScaleDetector {
    private scaleDetectorElement: SVGRectElement;

    constructor(svgElement: Selection<SVGRectElement, any, any, any>) {
        this.scaleDetectorElement = <SVGRectElement>svgElement
            .append("rect") // Using a <rect> which should have a reliable bounding box across browser implementations.
            .classed("scale-detector", true)
            .attr("width", 1)
            .attr("height", 1)
            .attr("stroke-width", "0px")
            .attr("fill", "none")
            .node();
    }

    public getScale(): Point {
        let scaledRect = this.scaleDetectorElement.getBoundingClientRect();
        let domRect = this.scaleDetectorElement.getBBox();
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
    }
}