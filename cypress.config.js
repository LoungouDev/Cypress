const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    baseUrl: 'https://staging.lemlist.com/login',
    browsers: [
      {
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        version: '108.0.5359.98',
        path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        minSupportedVersion: 64,
        majorVersion: '108'
      }],
    chromeWebSecurity: false,
    viewportHeight: 768,
    viewportWidth: 1024,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
