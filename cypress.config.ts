import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    viewportHeight: 768,
    viewportWidth: 1366,
    specPattern: 'cypress/**/*.test.{jsx,tsx}',
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  video: false,
  screenshotOnRunFailure: false
});
