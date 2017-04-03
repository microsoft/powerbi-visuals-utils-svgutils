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

module powerbi.extensibility.utils.svg.test {
    // powerbi.extensibility.utils.svg
    import parseTranslateTransform = powerbi.extensibility.utils.svg.parseTranslateTransform;
    import getTransformScaleRatios = powerbi.extensibility.utils.svg.getTransformScaleRatios;

    // powerbi.extensibility.utils.test
    import testDom = powerbi.extensibility.utils.test.helpers.testDom;

    describe("SvgUtil tests", () => {
        it("validate the pie chart transform parsing logic for Chrome", () => {
            let transform = "translate(110.21,46.5)";
            let parsedTransform = parseTranslateTransform(transform);

            expect(parsedTransform.x).toBe("110.21");
            expect(parsedTransform.y).toBe("46.5");
        });

        it("validate the pie chart transform parsing logic for IE", () => {
            let transform = "translate(110.6 34.56)";
            let parsedTransform = parseTranslateTransform(transform);

            expect(parsedTransform.x).toBe("110.6");
            expect(parsedTransform.y).toBe("34.56");
        });

        it("validate transform parsing logic with no y value", () => {
            let transform = "translate(110.6)";
            let parsedTransform = parseTranslateTransform(transform);

            expect(parsedTransform.x).toBe("110.6");
            expect(parsedTransform.y).toBe("0");
        });

        it("get transform scale ratios under parent scope", (done) => {
            let jqDiv = testDom("500", "500");
            jqDiv.css("transform", "scale(0.75,0.5)");
            let svg = d3.select(jqDiv[0]).append("svg").attr({
                width: 350,
                height: 200,
            }).style("position", "absolute");
            let g = svg.append("g"); // the axisGraphicsContext
            g.append("rect").attr({
                x: 0, y: 200, width: 350, height: 80,
            }).style("fill", "red"); // this rect is simulating the x-axis which fills the <svg> parent
            g.append("rect").attr({
                x: 0, y: 200, width: 80, height: 200,
            }).style("fill", "red"); // this rect is simulating the y-axis...

            setTimeout(() => {
                let ratios = getTransformScaleRatios(<SVGSVGElement>svg.node());
                expect(ratios.x).toBe(0.75);
                expect(ratios.y).toBe(0.5);

                done();
            }, 10);
        });
    });
}
