const { defineConfig } = require('cypress')
const cyAwaitPreprocessor = require('cypress-await/src/preprocessor')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cyAwaitPreprocessor)
    },
  },
})
