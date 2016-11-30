# manipulation
> The ```manipulation``` provides some special methods to translate string for use with SVG transform calls.

The ```powerbi.extensibility.utils.svg``` module provides the following functions and interfaces:

* [translate](#translate)
* [translateXWithPixels](#translatexwithpixels)
* [translateWithPixels](#translatewithpixels)
* [translateAndRotate](#translateandrotate)
* [scale](#scale)
* [flushAllD3Transitions](#flushalld3transitions)
* [parseTranslateTransform](#parsetranslatetransform)
* [createArrow](#createarrow)
* [getTransformScaleRatios](#gettransformscaleratios)

## translate
Creates a translate string for use with the SVG transform call.

```typescript
function translate(x: number, y: number): string
```

## translateXWithPixels
Creates a translateX string for use with the SVG transform call.

```typescript
function translateXWithPixels(x: number): string
```

## translateWithPixels
Creates a translate string for use with the SVG transform call.

```typescript
function translateWithPixels(x: number, y: number): string
```

## translateAndRotate
Creates a translate + rotate string for use with the SVG transform call.

```typescript
function translateAndRotate(x: number, y: number, px: number, py: number, angle: number): string
```

## scale
Creates a scale string for use in a CSS transform property.

```typescript
function scale(scale: number): string
```

## transformOrigin
Creates a transform origin string for use in a CSS transform-origin property.

```typescript
function transformOrigin(scale: number): string
```

## flushAllD3Transitions
Forces all D3 transitions to complete.
Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
you can run any zero-delay transitions immediately and avoid the flicker.

These flickers are noticable on IE, and with a large number of webviews (not recommend you ever do this) on iOS.

```typescript
function flushAllD3Transitions(): void
```

## parseTranslateTransform
Parse the Transform string with value "translate(x,y)".
The delimiter for the translate(position) string  is a comma in Chrome and a space in IE, so check for both browsers.

```typescript
function parseTranslateTransform(scale: number): string
```

## createArrow
Create an arrow.

```typescript
function createArrow(width: number, height: number, rotate: number): { path: string; transform: string }
```

## getTransformScaleRatios
Use the ratio of the scaled bounding rect and the SVG DOM bounding box to get the x and y transform scale values
@deprecated This function is unreliable across browser implementations, prefer to use SVGScaleDetector if needed.

```typescript
function getTransformScaleRatios(svgElement: SVGSVGElement): Point
```
