export declare module shapes {
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
