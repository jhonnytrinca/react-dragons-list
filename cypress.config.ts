import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'cypress/**/*.test.{jsx,tsx}',
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  video: false,
  screenshotOnRunFailure: false
});
