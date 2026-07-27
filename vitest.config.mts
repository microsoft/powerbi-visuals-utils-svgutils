import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
    test: {
        include: ["test/**/*.ts"],
        globals: true,
        browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            instances: [
                { browser: "chromium" }
            ]
        },
        coverage: {
            provider: "v8",
            include: ["src/**/*.ts"],
            reporter: ["text", "html", "lcov"]
        }
    }
});
