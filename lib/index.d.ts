/// <reference types="d3" />
declare module powerbi.extensibility.utils.svg {
    interface IMargin {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
}
declare module powerbi.extensibility.utils.svg {
    interface IRect {
        left: number;
        top: number;
        width: number;
        height: number;
    }
}
declare module powerbi.extensibility.utils.svg {
    class Rect implements IRect {
        left: number;
        top: number;
        width: number;
        height: number;
        constructor(left?: number, top?: number, width?: number, height?: number);
    }
}
declare module powerbi.extensibility.utils.svg {
    module shapes {
        interface IPolygon {
            absoluteCentroid: IPoint;
            polygonPoints: IPoint[];
        }
        interface IPoint {
            x: number;
            y: number;
        }
        interface ISize {
            width: number;
            height: number;
        }
        interface IVector {
            x: number;
            y: number;
        }
        interface IThickness {
            top: number;
            left: number;
            right: number;
            bottom: number;
        }
        interface BoundingRect {
            top: number;
            left: number;
            right: number;
            bottom: number;
        }
    }
}
declare module powerbi.extensibility.utils.svg {
    module shapes {
        module Rect {
            function getOffset(rect: IRect): IPoint;
            function getSize(rect: IRect): ISize;
            function setSize(rect: IRect, value: ISize): void;
            function right(rect: IRect): number;
            function bottom(rect: IRect): number;
            function topLeft(rect: IRect): IPoint;
            function topRight(rect: IRect): IPoint;
            function bottomLeft(rect: IRect): IPoint;
            function bottomRight(rect: IRect): IPoint;
            function equals(rect: IRect, other: IRect): boolean;
            function clone(rect: IRect): IRect;
            function toString(rect: IRect): string;
            function offset(rect: IRect, offsetX: number, offsetY: number): IRect;
            function add(rect: IRect, rect2: IRect): IRect;
            function subtract(rect: IRect, rect2: IRect): IRect;
            function inflate(rect: IRect, padding: IThickness): IRect;
            function deflate(rect: IRect, padding: IThickness): IRect;
            function inflateBy(rect: IRect, padding: number): IRect;
            function deflateBy(rect: IRect, padding: number): IRect;
            /**
             * Get closest point.
             *
             * @return the closest point on the rect to the (x,y) point given.
             * In case the (x,y) given is inside the rect, (x,y) will be returned.
             * Otherwise, a point on a border will be returned.
             */
            function getClosestPoint(rect: IRect, x: number, y: number): IPoint;
            function equal(rect1: IRect, rect2: IRect): boolean;
            function equalWithPrecision(rect1: IRect, rect2: IRect): boolean;
            function isEmpty(rect: IRect): boolean;
            function containsPoint(rect: IRect, point: IPoint): boolean;
            function isIntersecting(rect1: IRect, rect2: IRect): boolean;
            function intersect(rect1: IRect, rect2: IRect): IRect;
            function combine(rect1: IRect, rect2: IRect): IRect;
            function getCentroid(rect: IRect): IPoint;
        }
    }
}
declare module powerbi.extensibility.utils.svg {
    class Point implements shapes.IPoint {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
    }
}
declare module powerbi.extensibility.utils.svg {
    /**
     * CSS constants.
     */
    module CssConstants {
        interface ClassAndSelector {
            className: string;
            selectorName: string;
        }
        function createClassAndSelector(className: string): ClassAndSelector;
        const styleAttribute = "style";
        const pixelUnits = "px";
        const heightProperty = "height";
        const widthProperty = "width";
        const topProperty = "top";
        const bottomProperty = "bottom";
        const leftProperty = "left";
        const rightProperty = "right";
        const marginTopProperty = "margin-top";
        const marginLeftProperty = "margin-left";
        const displayProperty = "display";
        const backgroundProperty = "background";
        const backgroundColorProperty = "background-color";
        const backgroundRepeatProperty = "background-repeat";
        const backgroundSizeProperty = "background-size";
        const backgroundImageProperty = "background-image";
        const textShadowProperty = "text-shadow";
        const textAlignProperty = "text-align";
        const borderProperty = "border";
        const borderTopWidthProperty = "border-top-width";
        const borderBottomWidthProperty = "border-bottom-width";
        const borderLeftWidthProperty = "border-left-width";
        const borderRightWidthProperty = "border-right-width";
        const fontSizeProperty = "font-size";
        const fontWeightProperty = "font-weight";
        const colorProperty = "color";
        const opacityProperty = "opacity";
        const paddingLeftProperty = "padding-left";
        const paddingRightProperty = "padding-right";
        const positionProperty = "position";
        const maxWidthProperty = "max-width";
        const minWidthProperty = "min-width";
        const overflowProperty = "overflow";
        const overflowXProperty = "overflow-x";
        const overflowYProperty = "overflow-y";
        const transformProperty = "transform";
        const webkitTransformProperty = "-webkit-transform";
        const cursorProperty = "cursor";
        const visibilityProperty = "visibility";
        const absoluteValue = "absolute";
        const zeroPixelValue = "0px";
        const autoValue = "auto";
        const hiddenValue = "hidden";
        const noneValue = "none";
        const blockValue = "block";
        const inlineBlockValue = "inline-block";
        const transparentValue = "transparent";
        const boldValue = "bold";
        const visibleValue = "visible";
        const tableRowValue = "table-row";
        const coverValue = "cover";
        const pointerValue = "pointer";
        const scrollValue = "scroll";
    }
    interface ExtendedCSSProperties extends CSSStyleDeclaration {
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
}
declare module powerbi.extensibility.utils.svg.touch {
    class Point {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        offset(offsetX: number, offsetY: number): void;
    }
    class Rectangle extends Point {
        width: number;
        height: number;
        constructor(x?: number, y?: number, width?: number, height?: number);
        readonly point: Point;
        contains(p: Point): boolean;
        static contains(rect: Rectangle, p: Point): boolean;
        static isEmpty(rect: Rectangle): boolean;
    }
}
declare module powerbi.extensibility.utils.svg.touch {
    function touchStartEventName(): string;
    function touchMoveEventName(): string;
    function touchEndEventName(): string;
    function usePointerEvents(): boolean;
}
declare module powerbi.extensibility.utils.svg {
    function getCoordinates(rootNode: Element, isPointerEvent: boolean): number[];
}
declare module powerbi.extensibility.utils.svg.animationOptions {
    /** Animation options for visuals. */
    interface AnimationOptions {
        /** Indicates whether all transition frames should be flushed immediately, effectively "disabling" any visual transitions. */
        transitionImmediate: boolean;
    }
}
declare module powerbi.extensibility.utils.svg {
    import AnimationOptions = powerbi.extensibility.utils.svg.animationOptions.AnimationOptions;
    /**
     * Very small values, when stringified, may be converted to scientific notation and cause a temporarily
     * invalid attribute or style property value.
     * For example, the number 0.0000001 is converted to the string "1e-7".
     * This is particularly noticeable when interpolating opacity values.
     * To avoid scientific notation, start or end the transition at 1e-6,
     * which is the smallest value that is not stringified in exponential notation.
     */
    const AlmostZero = 0.000001;
    /**
         * Creates a translate string for use with the SVG transform call.
         */
    function translate(x: number, y: number): string;
    /**
     * Creates a translateX string for use with the SVG transform call.
     */
    function translateXWithPixels(x: number): string;
    function translateWithPixels(x: number, y: number): string;
    /**
     * Creates a translate + rotate string for use with the SVG transform call.
     */
    function translateAndRotate(x: number, y: number, px: number, py: number, angle: number): string;
    /**
     * Creates a scale string for use in a CSS transform property.
     */
    function scale(scale: number): string;
    /**
     * Creates a translate + scale string for use with the SVG transform call.
     */
    function translateAndScale(x: number, y: number, ratio: number): string;
    /**
     * Creates a transform origin string for use in a CSS transform-origin property.
     */
    function transformOrigin(xOffset: string, yOffset: string): string;
    /**
     * Forces all D3 transitions to complete.
     * Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
     * This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
     * then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
     * you can run any zero-delay transitions immediately and avoid the flicker.
     *
     * These flickers are noticable on IE, and with a large number of webviews(not recommend you ever do this) on iOS.
     */
    function flushAllD3Transitions(): void;
    /**
     * Wrapper for flushAllD3Transitions.
     */
    function flushAllD3TransitionsIfNeeded(options: AnimationOptions): void;
    /**
     * There is a known bug in IE10 that causes cryptic crashes for SVG elements with a null "d" attribute:
     * https://github.com/mbostock/d3/issues/1737
     */
    function ensureDAttribute(pathElement: Element): void;
    /**
     * In IE10, it is possible to return SVGPoints with NaN members.
     */
    function ensureValidSVGPoint(point: SVGPoint): void;
    /**
     * Parse the Transform string with value "translate(x,y)".
     * In Chrome for the translate(position) string the delimiter
     * is a comma and in IE it is a spaceso checking for both.
     */
    function parseTranslateTransform(input: string): {
        x: string;
        y: string;
    };
    /**
     * Create an arrow.
     */
    function createArrow(width: number, height: number, rotate: number): {
        path: string;
        transform: string;
    };
    /**
     * Use the ratio of the scaled bounding rect and the SVG DOM bounding box to get the x and y transform scale values
     * @deprecated This function is unreliable across browser implementations, prefer to use SVGScaleDetector if needed.
     */
    function getTransformScaleRatios(svgElement: SVGSVGElement): Point;
}
declare module powerbi.extensibility.utils.svg {
    class SVGScaleDetector {
        private scaleDetectorElement;
        constructor(svgElement: d3.Selection<any>);
        getScale(): Point;
    }
}
