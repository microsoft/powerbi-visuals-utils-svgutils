# cssConstants
> The ```cssConstants``` module provides some special methods to work with class selectors.

The ```powerbi.extensibility.utils.svg``` module provides the following functions and interfaces:

* [ClassAndSelector](#ClassAndSelector)
* [createClassAndSelector](#createClassAndSelector)

## ClassAndSelector

This interface describes common properties of the class selector.

```typescript
interface ClassAndSelector {
            class: string;
            selector: string;
        }
```

## createClassAndSelector
This function measures the width of the text with the given SVG text properties.

```typescript
function createClassAndSelector(className: string): ClassAndSelector;
```

### Example

```typescript
import ClassAndSelector = powerbi.extensibility.utils.svg.ClassAndSelector;
import createClassAndSelector = powerbi.extensibility.utils.svg.createClassAndSelector;

let divSelector: ClassAndSelector = createClassAndSelector('sample-block');


divSelector.selector === '.sample-block' // returns: True
divSelector.class === 'sample-block' // returns: True

```
