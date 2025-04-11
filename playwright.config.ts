import { defineConfig} from "playwright/test";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

export default defineConfig({
    testDir: "./tests/e2e",
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    retries: process.env.CI ? 2: 0,
    workers: process.env.CI ? 1 : undefined,
    use: {
        baseURL: process.env.BASE_URL as string,
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },

    webServer: {
        command: 'npm run dev',
        port: 3000,
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
    }
})