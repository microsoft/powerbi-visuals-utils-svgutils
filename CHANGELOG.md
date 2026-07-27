## 7.1.0

### Changed
* Unit tests migrated from `happy-dom` to Vitest browser mode (Playwright, headless Chromium).
* Restored real CSS `transform`-based measurements in scale/manipulation tests instead of mocked `getBBox`/`getBoundingClientRect`.

### Infrastructure
* CI workflows install the Playwright Chromium browser before running tests.

## 7.0.0

### Breaking changes
* Test runner migrated from Karma + Jasmine to Vitest.
* Development/build TypeScript upgraded to 6.x.

### Changed
* `powerbi-visuals-api` updated to ^5.11.0.
* CI/development baseline updated to Node.js 20.x.

### Infrastructure
* Lint stack migrated to ESLint 10 flat config.
* CI workflows modernized to `actions/*@v6` and Node 20/22 matrix.
* Custom CodeQL workflow updated to Node 20 and modern action versions.

## 6.0.4
* powerbi-visuals-api update to 5.9.0

## 6.0.3
* Update powerbi-visuals-utils-testutils to 6.0.3

## 6.0.2
* Vulnerabilities patched
* Packages update
* Update build.yml to use node 18, 20

## 6.0.1
* Packages update
* Removed coveralls

## 6.0.0
* Packages update
* Vulnerabilities patched

## 3.0.0
* Migrated to ESlint
* Migrated to Playwright
* Packages update
* Vulnerabilities fixes

## 2.3.2
* splitted d3 libriary

## 2.3.1
* Packages update
* Vulnerabilities fixes

## 2.3.0
* Packages update
* Vulnerabilities fixes
* Tests adapted to v.2.3.1 of testutils

## 2.2.1
* Packages update

## 2.2.0
* Update packages to fix vulnerabilities
* Update powerbi-visual-api to 2.6.0

## 2.1.0
* Update packages to fix vulnerabilities

## 2.0.0
* Moved to webpack 3
* Moved to commonjs style

## 1.1.0
* Removed `typings`
* Unified dependencies versions
