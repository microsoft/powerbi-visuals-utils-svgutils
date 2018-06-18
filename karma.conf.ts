/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

const webpackConfig = require("./webpack.config.js");
const tsconfig = require("./tsconfig.json");

import { Config, ConfigOptions } from "karma";

const testRecursivePath = "test/**/*.ts"
    , srcOriginalRecursivePath = "src/**/*.ts"
    , srcRecursivePath = "lib/**/*.js"
    , srcCssRecursivePath = "lib/**/*.css"
    , coverageFolder = "coverage";

module.exports = (config: Config) => {
    let browsers = [];

    if (process.env.TRAVIS) {
        browsers.push("ChromeTravisCI");
    } else {
        browsers.push("Chrome");
    }

    config.set(<ConfigOptions>{
        customLaunchers: {
            ChromeTravisCI: {
                base: "Chrome",
                flags: ["--no-sandbox"]
            }
        },
        browsers: browsers,
        colors: true,
        frameworks: ["jasmine"],
        reporters: [
            "progress",
            "coverage",
            "karma-remap-istanbul"
        ],
        singleRun: true,
        plugins: [
            "karma-remap-istanbul",
            "karma-coverage",
            "karma-typescript",
            "karma-webpack",
            "karma-jasmine",
            "karma-sourcemap-loader",
            "karma-chrome-launcher"
        ],
        files: [
            "node_modules/jquery/dist/jquery.min.js", 
            "node_modules/jasmine-jquery/lib/jasmine-jquery.js", 
            srcCssRecursivePath,
            srcRecursivePath,
            testRecursivePath,
            {
                pattern: srcOriginalRecursivePath,
                included: false,
                served: true
            }
        ],
        preprocessors: {
            [testRecursivePath]: ["webpack"],
            [srcRecursivePath]: ["webpack", "coverage"]
        },
        typescriptPreprocessor: {
            options: tsconfig.compilerOptions
        },
        coverageReporter: {
            dir: coverageFolder,
            reporters: [
                { type: "html" },
                { type: "lcov" }
            ]
        },
        remapIstanbulReporter: {
            reports: {
                lcovonly: coverageFolder + "/lcov.info",
                html: coverageFolder,
                "text-summary": null
            }
        },
        mime: {
            "text/x-typescript": ["ts", "tsx"]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "errors-only"
          }
    });
};
