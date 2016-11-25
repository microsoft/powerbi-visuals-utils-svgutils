# Development workflow
If you would like to contribute an improvement or a fix please pay attention to these items:
* [Requirements](#requirements)
* [Installation](#installation)
* [How to build](#how-to-build)
* [How to lint the source code](#how-to-lint-the-source-code)
* [How to run unit tests locally](#how-to-run-unit-tests-locally)

## Requirements
To start development and improvement of the source code you should have the following things:
* [git](https://git-scm.com)
* [node.js](https://nodejs.org) (we recommend the latest LTS version)
* [npm](https://www.npmjs.com) (the minimal supported version is 3.0.0)
* [Google Chrome browser](https://www.google.com/chrome) (it's necessary to run unit tests locally)

## Installation
Firstly, you should clone a copy of the repository by using one of the following commands:
* HTTPS: ```git clone https://github.com/Microsoft/powerbi-visuals-utils-svgutils.git```
* SSH: ```git clone git@github.com:Microsoft/powerbi-visuals-utils-svgutils.git```

After that, you should change the current working directory to ```powerbi-visuals-utils-svgutils``` by using the following command:

```bash
cd powerbi-visuals-utils-svgutils
```

After that, you should install dependencies by using the following command:

```bash
npm install
```

The final step is installation of necessary type declarations by using the following command:

```bash
npm run typings:install
```

The repository is ready for development now.

## How to build
We use [TypeScript](https://github.com/Microsoft/TypeScript) as a language and a compiler for the repository. To build source code you should run the following command:

```bash
npm run build
```

This command compiles TypeScript code to JavaScript and provides declaration file for the Intellisense. The result of the compilation is available in the ```lib``` directory.

## How to lint the source code
We use [TSLint](https://github.com/palantir/tslint) as a linter for TypeScript code. To check source code you should run the following command:

```bash
npm run lint
```

This command checks style of TypeScript code and provides a list of problems. Please address all of problems reported by TSLint before sending a pull request to the [repository](https://github.com/Microsoft/powerbi-visuals-utils-svgutils).

## How to run unit tests locally
We use [Jasmine](https://github.com/jasmine/jasmine) and [Karma](https://github.com/karma-runner/karma) to run unit tests. Please note, Karma requires Google Chrome to run unit tests.
To run unit tests locally on your machine you should run the following command:

```bash
npm run test
```

## How to debug unit tests locally
To debug unit tests in Google Chrome browser you should run the following command:

```bash
npm run test -- --single-run=false
```

This command runs unit tests in the browser and watches tests files, in other words, you have an ability to run unit tests automatically after any changing.
