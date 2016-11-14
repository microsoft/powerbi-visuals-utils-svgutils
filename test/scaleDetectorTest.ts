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

/// <reference path="_references.ts" />

module powerbi.extensibility.utils.svg.test {
    // d3
    import Selection = d3.Selection;

    // powerbi.extensibility.utils.svg
    import SVGScaleDetector = powerbi.extensibility.utils.svg.SVGScaleDetector;

    // powerbi.extensibility.utils.test
    import testDom = powerbi.extensibility.utils.test.helpers.testDom;

    describe("SVGScaleDetector", () => {
        let scaleDetector: SVGScaleDetector;
        let element: JQuery;
        let svg: Selection<any>;

        const tolerance = 4;  // decimal points of precision

        beforeEach(() => {
            element = testDom("100", "100");
            svg = d3.select(element.get(0)).append("svg");
        });

        it("no scale", () => {
            scaleDetector = new SVGScaleDetector(svg);

            let scale = scaleDetector.getScale();
            expect(scale.x).toBeCloseTo(1.0, tolerance);
            expect(scale.y).toBeCloseTo(1.0, tolerance);
        });

        it("tiny scale", () => {
            element.css("transform", "scale(0.0001)");
            scaleDetector = new SVGScaleDetector(svg);

            let scale = scaleDetector.getScale();
            expect(scale.x).toBeCloseTo(0.0001, tolerance);
            expect(scale.y).toBeCloseTo(0.0001, tolerance);
        });

        it("huge scale", () => {
            element.css("transform", "scale(1000.0)");
            scaleDetector = new SVGScaleDetector(svg);

            let scale = scaleDetector.getScale();
            expect(scale.x).toBeCloseTo(1000.0, tolerance);
            expect(scale.y).toBeCloseTo(1000.0, tolerance);
        });
    });
}
