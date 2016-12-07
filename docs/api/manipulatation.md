# manipulation
> The ```manipulation``` provides some special functions in order to generate strings for using with SVG transform property.

The ```powerbi.extensibility.utils.svg``` module provides the following functions:

* [translate](#translate)
* [translateXWithPixels](#translatexwithpixels)
* [translateWithPixels](#translatewithpixels)
* [translateAndRotate](#translateandrotate)
* [scale](#scale)
* [flushAllD3Transitions](#flushalld3transitions)
* [parseTranslateTransform](#parsetranslatetransform)
* [createArrow](#createarrow)

## translate
This function creates a translate string for using with the SVG transform property.

```typescript
function translate(x: number, y: number): string
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.translate(100, 100);

// returns: translate(100,100)
```

## translateXWithPixels
This function creates a translateX string for using with the SVG transform property.

```typescript
function translateXWithPixels(x: number): string
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.translateXWithPixels(100);

// returns: translateX(100px)
```

## translateWithPixels
This function creates a translate string for using with the SVG transform property.

```typescript
function translateWithPixels(x: number, y: number): string
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.translateWithPixels(100, 100);

// returns: translate(100px,100px)
```

## translateAndRotate
This function creates a translate-rotate string for using with the SVG transform property.

```typescript
function translateAndRotate(x: number, y: number, px: number, py: number, angle: number): string
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.translateAndRotate(100, 100, 50, 50, 35);

// returns: translate(100,100) rotate(35,50,50)
```

## scale
This function creates a scale string for using in a CSS transform property.

```typescript
function scale(scale: number): string
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.scale(50);

// returns: scale(50)
```

## transformOrigin
This function creates a transform-origin string for using in a CSS transform-origin property.

```typescript
function transformOrigin(xOffset: string, yOffset: string): string;
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.transformOrigin(5, 5);

// returns: 5 5
```

## flushAllD3Transitions
This function forces every transition of D3 to complete.

```typescript
function flushAllD3Transitions(): void
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.flushAllD3Transitions();

// forces every transition of D3 to complete
```

## parseTranslateTransform
This function parses the transform string with value "translate(x,y)".

```typescript
function parseTranslateTransform(input: string): { x: string; y: string; };
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.parseTranslateTransform("translate(100px,100px)");

// returns: { "x":"100px", "y":"100px" }
```

## createArrow
This function creates an arrow.

```typescript
function createArrow(width: number, height: number, rotate: number): { path: string; transform: string; };
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

svg.createArrow(10, 20, 5);

/* returns: {
    "path": "M0 0L0 20L10 10 Z",
    "transform": "rotate(5 5 10)"
}*/
```
