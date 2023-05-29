const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  pageLoadTimeout: 90000, // Increase the timeout to 90 seconds (90000 milliseconds)
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile })
    }
  }
});


