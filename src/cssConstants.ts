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

export module CssConstants {
    export interface ClassAndSelector {
        className: string;
        selectorName: string;
    }

    export function createClassAndSelector(className: string): ClassAndSelector {
        return {
            className: className,
            selectorName: "." + className,
        };
    }

    export const styleAttribute = "style";
    export const pixelUnits = "px";

    export const heightProperty = "height";
    export const widthProperty = "width";
    export const topProperty = "top";
    export const bottomProperty = "bottom";
    export const leftProperty = "left";
    export const rightProperty = "right";
    export const marginTopProperty = "margin-top";
    export const marginLeftProperty = "margin-left";
    export const displayProperty = "display";
    export const backgroundProperty = "background";
    export const backgroundColorProperty = "background-color";
    export const backgroundRepeatProperty = "background-repeat";
    export const backgroundSizeProperty = "background-size";
    export const backgroundImageProperty = "background-image";
    export const textShadowProperty = "text-shadow";
    export const textAlignProperty = "text-align";
    export const borderProperty = "border";
    export const borderTopWidthProperty = "border-top-width";
    export const borderBottomWidthProperty = "border-bottom-width";
    export const borderLeftWidthProperty = "border-left-width";
    export const borderRightWidthProperty = "border-right-width";
    export const fontSizeProperty = "font-size";
    export const fontWeightProperty = "font-weight";
    export const colorProperty = "color";
    export const opacityProperty = "opacity";
    export const paddingLeftProperty = "padding-left";
    export const paddingRightProperty = "padding-right";
    export const positionProperty = "position";
    export const maxWidthProperty = "max-width";
    export const minWidthProperty = "min-width";
    export const overflowProperty = "overflow";
    export const overflowXProperty = "overflow-x";
    export const overflowYProperty = "overflow-y";
    export const transformProperty = "transform";
    export const webkitTransformProperty = "-webkit-transform";
    export const cursorProperty = "cursor";
    export const visibilityProperty = "visibility";

    export const absoluteValue = "absolute";
    export const zeroPixelValue = "0px";
    export const autoValue = "auto";
    export const hiddenValue = "hidden";
    export const noneValue = "none";
    export const blockValue = "block";
    export const inlineBlockValue = "inline-block";
    export const transparentValue = "transparent";
    export const boldValue = "bold";
    export const visibleValue = "visible";
    export const tableRowValue = "table-row";
    export const coverValue = "cover";
    export const pointerValue = "pointer";
    export const scrollValue = "scroll";
}

export interface ExtendedCSSProperties extends CSSStyleDeclaration {
    scrollbarShadowColor: string;
    scrollbarHighlightColor: string;
    layoutGridChar: string;
    layoutGridType: string;
    textAutospace: string;
    textKashidaSpace: string;
    writingMode: string;
    scrollbarFaceColor: string;
    backgroundPositionY: string;
    lineBreak: string;
    imeMode: string;
    msBlockProgression: string;
    layoutGridLine: string;
    scrollbarBaseColor: string;
    layoutGrid: string;
    layoutFlow: string;
    textKashida: string;
    filter: string;
    zoom: string;
    scrollbarArrowColor: string;
    behavior: string;
    backgroundPositionX: string;
    accelerator: string;
    layoutGridMode: string;
    textJustifyTrim: string;
    scrollbar3dLightColor: string;
    msInterpolationMode: string;
    scrollbarTrackColor: string;
    scrollbarDarkShadowColor: string;
    styleFloat: string;
    getAttribute(attributeName: string, flags?: number): any;
    setAttribute(attributeName: string, AttributeValue: any, flags?: number): void;
    removeAttribute(attributeName: string, flags?: number): boolean;

    pixelWidth: number;
    posHeight: number;
    posLeft: number;
    pixelTop: number;
    pixelBottom: number;
    textDecorationNone: boolean;
    pixelLeft: number;
    posTop: number;
    posBottom: number;
    textDecorationOverline: boolean;
    posWidth: number;
    textDecorationLineThrough: boolean;
    pixelHeight: number;
    textDecorationBlink: boolean;
    posRight: number;
    pixelRight: number;
    textDecorationUnderline: boolean;

    webkitTransform: string;
}