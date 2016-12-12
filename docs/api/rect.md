# Rect
> The ```Rect``` module provides some special functions in order to manipulate rectangles.

The ```powerbi.extensibility.utils.svg.shapes.Rect``` module provides the following functions:

* [getOffset](#getoffset)
* [getSize](#getsize)
* [setSize](#setsize)
* [right](#right)
* [bottom](#bottom)
* [topLeft](#topleft)
* [topRight](#topright)
* [bottomLeft](#bottomleft)
* [bottomRight](#bottomright)
* [clone](#clone)
* [toString](#tostring)
* [offset](#offset)
* [add](#add)
* [getClosestPoint](#getclosestpoint)
* [equal](#equal)
* [equalWithPrecision](#equalwithprecision)
* [isEmpty](#isempty)
* [containsPoint](#containspoint)
* [isIntersecting](#isintersecting)
* [intersect](#intersect)
* [combine](#combine)
* [getCentroid](#getcentroid)

## getOffset
This function returns an offset of the rectangle.

```typescript
function getOffset(rect: IRect): IPoint;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.getOffset({ left: 25, top: 25, width: 100, height: 100 });

/* returns: {
    x: 25,
    y: 25
}*/
```

## getSize
This function returns size of the rectangle.

```typescript
function getSize(rect: IRect): ISize;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.getSize({ left: 25, top: 25, width: 100, height: 100 });

/* returns: {
    width: 100,
    height: 100
}*/
```

### setSize
This function modifies size of the rectangle.

```typescript
function setSize(rect: IRect, value: ISize): void;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

let rectangle = { left: 25, top: 25, width: 100, height: 100 };

Rect.setSize(rectangle, { width: 250, height: 250 });

// rectangle === { left: 25, top: 25, width: 250, height: 250 }
```

## right
This function returns a right position of the rectangle.

```typescript
function right(rect: IRect): number;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.right({ left: 25, top: 25, width: 100, height: 100 });

// returns: 125
```

## bottom
This function returns a bottom position of the rectangle.

```typescript
function bottom(rect: IRect): number;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.bottom({ left: 25, top: 25, width: 100, height: 100 });

// returns: 125
```

## topLeft
This function returns a top-left position of the rectangle.

```typescript
function topLeft(rect: IRect): IPoint;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.topLeft({ left: 25, top: 25, width: 100, height: 100 });

// returns: { x: 25, y: 25 }
```

## topRight
This function returns a top-right position of the rectangle.

```typescript
function topRight(rect: IRect): IPoint;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.topRight({ left: 25, top: 25, width: 100, height: 100 });

// returns: { x: 125, y: 25 }
```

## bottomLeft
This function returns a bottom-left position of the rectangle.

```typescript
function bottomLeft(rect: IRect): IPoint;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.bottomLeft({ left: 25, top: 25, width: 100, height: 100 });

// returns: { x: 25, y: 125 }
```

## bottomRight
This function returns a bottom-right position of the rectangle.

```typescript
function bottomRight(rect: IRect): IPoint;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.bottomRight({ left: 25, top: 25, width: 100, height: 100 });

// returns: { x: 125, y: 125 }
```

## clone
This function creates a copy of the rectangle.

```typescript
function clone(rect: IRect): IRect;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.clone({ left: 25, top: 25, width: 100, height: 100 });

/* returns: {
    left: 25, top: 25, width: 100, height: 100}
*/
```

## toString
This function converts rectangle to string.

```typescript
function toString(rect: IRect): string;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.toString({ left: 25, top: 25, width: 100, height: 100 });

// returns: {left:25, top:25, width:100, height:100}
```

## offset
This function applies given offset to the rectangle.

```typescript
function offset(rect: IRect, offsetX: number, offsetY: number): IRect;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.offset({ left: 25, top: 25, width: 100, height: 100 }, 50, 50);

/* returns: {
    left: 75,
    top: 75,
    width: 100,
    height: 100
}*/
```

## add
This function adds the first rectangle to the second rectangle.

```typescript
function add(rect: IRect, rect2: IRect): IRect;
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.add(
    { left: 25, top: 25, width: 100, height: 100 },
    { left: 50, top: 50, width: 75, height: 75 });

/* returns: {
    left: 75,
    top: 75,
    height: 175,
    width: 175
}*/
```

## getClosestPoint
This function returns the closest point on the rect to the given point.

```typescript
function getClosestPoint(rect: IRect, x: number, y: number): IPoint
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.getClosestPoint({ left: 0, top: 0, width: 100, height: 100 }, 50, 50);

/* returns: {
    x: 50,
    y: 50
}*/
```

## equal
This function compares rectangles and returns true if they're the same.

```typescript
function equal(rect1: IRect, rect2: IRect): boolean
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.equal(
    { left: 0, top: 0, width: 100, height: 100 },
    { left: 50, top: 50, width: 100, height: 100 });

// returns: false
```

## equalWithPrecision
This function compares rectangles by considering precision of the values.

```typescript
function equalWithPrecision(rect1: IRect, rect2: IRect): boolean
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.equalWithPrecision(
    { left: 0, top: 0, width: 100, height: 100 },
    { left: 50, top: 50, width: 100, height: 100 });

// returns: false
```

## isEmpty
This function checks if rectangle is empty.

```typescript
function isEmpty(rect: IRect): boolean
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.isEmpty({ left: 0, top: 0, width: 0, height: 0 });

// returns: true
```

## containsPoint
This function checks if rectangle contains the point.

```typescript
function containsPoint(rect: IRect, point: IPoint): boolean
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.containsPoint({ left: 0, top: 0, width: 100, height: 100 }, { x: 50, y: 50 });

// returns: true
```

## isIntersecting
This function checks if rectangles are intersecting.

```typescript
function isIntersecting(rect1: IRect, rect2: IRect): boolean
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.isIntersecting(
    { left: 0, top: 0, width: 100, height: 100 },
    { left: 0, top: 0, width: 50, height: 50 });

// returns: true
```

## intersect
This function returns an intersection of rectangles.

```typescript
function intersect(rect1: IRect, rect2: IRect): IRect
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.intersect(
    { left: 0, top: 0, width: 100, height: 100 },
    { left: 0, top: 0, width: 50, height: 50 });

/* returns: {
    left: 0,
    top: 0,
    width: 50,
    height: 50
}*/
```

## combine
This function combines rectangles.

```typescript
function combine(rect1: IRect, rect2: IRect): IRect
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.combine(
    { left: 0, top: 0, width: 100, height: 100 },
    { left: 0, top: 0, width: 50, height: 120 });

/* returns: {
    left: 0,
    top: 0,
    width: 100,
    height: 120
}*/
```

## getCentroid
This function returns a center point of the rectangle.

```typescript
function getCentroid(rect: IRect): IPoint
```

### Example

```typescript
import Rect = powerbi.extensibility.utils.svg.shapes.Rect;

Rect.getCentroid({ left: 0, top: 0, width: 100, height: 100 });

/* returns: {
    x: 50,
    y: 50
}*/
```
