import { IRect } from "./rect/irect";
import { IPoint, ISize, IThickness } from "./shapesInterfaces";
export declare module Rect {
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
