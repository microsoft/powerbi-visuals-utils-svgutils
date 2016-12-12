# CssConstants
> The ```CssConstants``` module provides the special function and interface to work with class selectors.

The ```powerbi.extensibility.utils.svg.CssConstants``` module provides the following function and interface:

* [ClassAndSelector](#classandselector)
* [createClassAndSelector](#createclassandselector)

## ClassAndSelector

This interface describes common properties of the class selector.

```typescript
interface ClassAndSelector {
    class: string;
    selector: string;
}
```

## createClassAndSelector
This function creates an instance of ClassAndSelector with the given name of the class.

```typescript
function createClassAndSelector(className: string): ClassAndSelector;
```

### Example

```typescript
import ClassAndSelector = powerbi.extensibility.utils.svg.CssConstants.ClassAndSelector;
import createClassAndSelector = powerbi.extensibility.utils.svg.CssConstants.createClassAndSelector;

let divSelector: ClassAndSelector = createClassAndSelector('sample-block');

divSelector.selector === '.sample-block' // returns: true
divSelector.class === 'sample-block' // returns: true
```

You can take a look at the example code of the custom visual [here](https://github.com/Microsoft/powerbi-visuals-sankey/blob/4d544ea145b4e15006083a3610dfead3da5f61a4/src/visual.ts#L92).
