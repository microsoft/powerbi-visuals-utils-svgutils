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
export var CssConstants;
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
})(CssConstants || (CssConstants = {}));
//# sourceMappingURL=cssConstants.js.map