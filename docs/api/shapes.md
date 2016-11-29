# shapes
> The ```shapes``` module provides some special methods to work with shapes.

The ```powerbi.extensibility.utils.svg``` module provides the following functions and interfaces:

* [getClosestPoint](#getClosestPoint)
* [equal](#equal)
* [equalWithPrecision](#equalWithPrecision)
* [isEmpty](#isEmpty)
* [containsPoint](#containsPoint)
* [isIntersecting](#isIntersecting)
* [intersect](#intersect)
* [combine](#combine)
* [getCentroid](#getCentroid)

## getClosestPoint
Return the closest point on the rect to the (x,y) point given.
In case the (x,y) given is inside the rect, (x,y) will be returned.
Otherwise, a point on a border will be returned.

```typescript
function getClosestPoint(rect: IRect, x: number, y: number): IPoint
```

## equal
Checks whether two rectangles are equal

```typescript
function equal(rect1: IRect, rect2: IRect): boolean
```

## equalWithPrecision
Checks if two rectangles are equal with precision

```typescript
function equalWithPrecision(rect1: IRect, rect2: IRect): boolean
```

## isEmpty
Checks if rectangle is empty

```typescript
function isEmpty(rect: IRect): boolean
```

## containsPoint
Checks if rectangle contains the point

```typescript
function containsPoint(rect: IRect, point: IPoint): boolean
```

## isIntersecting
Checks if two rectangles are intersecting

```typescript
function isIntersecting(rect1: IRect, rect2: IRect): boolean
```

## intersect
Returns an intersection of two rectangles

```typescript
function intersect(rect1: IRect, rect2: IRect): IRect
```

## combine
Returns combination of two rectangles

```typescript
function combine(rect1: IRect, rect2: IRect): IRect
```

## getCentroid
Returns a center point of the rectangle

```typescript
function getCentroid(rect: IRect): IPoint
```



