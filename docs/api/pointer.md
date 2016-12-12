# pointer
> The ```pointer``` module provides a special function in order to get position of the pointer.

The ```powerbi.extensibility.utils.svg``` module provides the following function:

* [getCoordinates](#getcoordinates)

## getCoordinates
This function returns position of the pointer.

```typescript
function getCoordinates(rootNode: Element, isPointerEvent: boolean): number[]
```

### Example

```typescript
import svg = powerbi.extensibility.utils.svg;

let bodySelection = d3.select("body");

bodySelection
    .append("div")
    .style({
        width: "100px",
        height: "100px",
        "background-color": "green"
    })
    .on("click", () => {
        svg.getCoordinates(bodySelection.node(), true);
    });

// click element, after that you will get position of the pointer
```
