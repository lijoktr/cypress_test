const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  
  // implement node event listeners here
  require('cypress-mochawesome-reporter/plugin')(on);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

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
    setupNodeEvents,
    //specPattern: './integration/examples/*.js',
    specPattern: './integration/examples/BDD/*.feature',
    
  },
});
