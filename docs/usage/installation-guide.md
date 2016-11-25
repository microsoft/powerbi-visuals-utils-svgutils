# How to install
If you would like to install the Power BI visuals SVGUtils to your custom visual please pay attention to these items:
* [Requirements](#requirements)
* [Installation](#installation)
* [Including declarations to the build flow](#including-declarations-to-the-build-flow)
* [Including artifacts to the custom visual](#including-artifacts-to-the-custom-visual)

## Requirements
To use the package you should have the following things:
* [node.js](https://nodejs.org) (we recommend the latest LTS version)
* [npm](https://www.npmjs.com/) (the minimal supported version is 3.0.0)
* The custom visual created by [PowerBI-visuals-tools](https://github.com/Microsoft/PowerBI-visuals-tools)

## Installation
To install the package you should run the following command in the directory with your current custom visual:

```bash
npm install powerbi-visuals-utils-svgutils --save
```

This command installs the package and adds a package as a dependency to your ```package.json```

## Including declarations to the build flow
The package contains ```d.ts``` declarations file, it's necessary for TypeScript compiler and it helps to develop your visuals fast and confident. You should add the following files to the ```files``` property of ```tsconfig.json```:
* ```node_modules/@types/lodash/index.d.ts```
* ```node_modules/powerbi-visuals-utils-svgutils/lib/index.d.ts```

As a result you will have the following file structure:
```json
{
  "compilerOptions": {...},
  "files": [
    "node_modules/@types/lodash/index.d.ts",
    "node_modules/powerbi-visuals-utils-svgutils/lib/index.d.ts"
  ]
}
```

## Including artifacts to the custom visual
To use the package with your custom visuals your should add the following files to the ```externalJS``` property of ```pbiviz.json``` :
* ```node_modules/lodash/lodash.min.js```
* ```node_modules/powerbi-visuals-utils-svgutils/lib/index.js```

As a result you will have the following file structure:
```json
{
  "visual": {...},
  "apiVersion": ...,
  "author": {...},
  "assets": {...},
  "externalJS": [
    "node_modules/lodash/lodash.min.js",
    "node_modules/powerbi-visuals-utils-svgutils/lib/index.js"
  ],
  "style": ...,
  "capabilities": ...
}
```

That's it. :rocket: :metal: That's a good time to read our [Usage Guide](./usage-guide.md).
