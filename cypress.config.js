const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: '4tngwg',
  video: false,
  videoUploadOnPasses: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,
    experimentalStudio: true,
    baseUrl: "https://webdriveruniversity.com",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true, //clears screenshots directory before running
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      first_name: "Arthur",
      teststore_url: "https://automationteststore.com",
      webdriver_url: "https://webdriveruniversity.com/"
    }
  },
});
