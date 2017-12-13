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

import * as webpack from "webpack";

import { Config, ConfigOptions } from "karma";

const testRecursivePath = "test/**/*.ts"
    , srcOriginalRecursivePath = "src/**/*.ts"
    , srcRecursivePath = "lib/**/*.js"
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
        files: [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/lodash/lodash.min.js",
            "node_modules/jasmine-jquery/lib/jasmine-jquery.js",
            "node_modules/d3-timer/build/d3-timer.js",
            "node_modules/d3-selection/build/d3-selection.js",
            "node_modules/powerbi-visuals-utils-typeutils/lib/**/*.js",
            "node_modules/powerbi-visuals-utils-testutils/lib/**/*.js",
            srcRecursivePath,
            testRecursivePath,
            {
                pattern: srcOriginalRecursivePath,
                included: false,
                served: true
            }
        ],
        preprocessors: {
            "node_modules/powerbi-visuals-utils-testutils/lib/**/*.js": ["webpack"],
            [testRecursivePath]: ["typescript", "webpack", "sourcemap"],
            [srcRecursivePath]: ["webpack", "sourcemap", "coverage"],
        },
        webpack: <webpack.Configuration>{
            target: "web",
            devtool: "inline-source-map",
            resolve: {
                extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
            },
            externals: [
                {
                    sinon: "sinon",
                    chai: "chai"
                },
            ],
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                    },
                    {
                        test: /\.tsx?$/,
                        loader: "ts-loader",
                    }
                ]
            },
            output: {
                filename: "index.build.js",
                // path: path.resolve(__dirname, "lib")
            },
            plugins: [
            ]
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
                html: coverageFolder
            }
        }
    });
};
