const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    initials: 'JD',
    name: 'Johne Doe'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    video: true,
    videosFolder: 'dist/cypress/apps/coscrad-frontend-e2e/videos',
    screenshotsFolder: 'dist/cypress/apps/coscrad-frontend-e2e/screenshots',
    chromeWebSecurity: false,
    baseUrl: 'http://localhost/comp1080/',
  },
});
