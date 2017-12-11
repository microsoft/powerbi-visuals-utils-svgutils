export declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    offset(offsetX: number, offsetY: number): void;
}
export declare class Rectangle extends Point {
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    readonly point: Point;
    contains(p: Point): boolean;
    static contains(rect: Rectangle, p: Point): boolean;
    static isEmpty(rect: Rectangle): boolean;
}
