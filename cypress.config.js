const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  retries: {
    runMode: 1,// runs if failed test
 
  },
  projectId: "q5bj3o", // cloud report
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env:{
    url:'https://rahulshettyacademy.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: './integration/examples/*.js'
  },
});
