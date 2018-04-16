export interface IPolygon {
    absoluteCentroid: IPoint;
    polygonPoints: IPoint[];
}
export interface IPoint {
    x: number;
    y: number;
}
export interface ISize {
    width: number;
    height: number;
}
export interface IVector {
    x: number;
    y: number;
}
export interface IThickness {
    top: number;
    left: number;
    right: number;
    bottom: number;
}
export interface BoundingRect {
    top: number;
    left: number;
    right: number;
    bottom: number;
}
