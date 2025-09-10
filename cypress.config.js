const { defineConfig } = require("cypress")

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,
    experimentalStudio: true,
    baseUrl: "https://webdriveruniversity.com",
    env: {
      first_name: "Arthur",
      teststore_url: "https://automationteststore.com",
      webdriver_url: "https://webdriveruniversity.com/"
    }
  },
});
