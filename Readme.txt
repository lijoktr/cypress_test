Steps to Run the code:
1. Go to cypress_test folder
2. Terminal command:.\node_modules\.bin\cypress open
3. Select E2E testing
4. Select browser
5. Run each test in Specs

Best practice in building cypress framework
1. Setting up test hooks
2. Data driven testing with fixtures
3. Building custom cypress commands
4. Parametrize test with multiple data Sets 
5. Understand the test debugging
6. Build page object design pattern for objects
7. configuration changes in cypress.config.js


Notes
1. Javascript - asynchronous but cypress makes it synchronous 
2. .then(): waits for current line to execute
3. cypress support jquery like text()
4. If jquery, first resolve it using .then(function(price))
5. Through command line, cypress runs in headless mode in electron
6. command run: npx Cypress run --spec C:\Users\lijom\Cypress\cypress_test\integration\examples\Test10framework.js --headed --browser chrome --env url="https://google.com"
7. adding mochawsome reporter locally: https://www.npmjs.com/package/cypress-mochawesome-reporter
8. Report generation Cypress in cloud: 
    a. login cypress cloud
    b. Copy paste project id in cypress.config.js
    c. command: npx Cypress run --record --key c77b3857-35e2-4d93-8410-21130c2e6e64
9.


error1. > process is not defined
const env = process.env
soltn: Javascript keyword import cypress line defaultly added.


cucumber installation (refer: https://github.com/badeball/cypress-cucumber-preprocessor)
1. npm install @badeball/cypress-cucumber-preprocessor
2. Register in setupnodeevents: 
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

3. add setupNodeEvents, in e2e.
4. import browserify and preprocessor: 
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

5. add dependency in package.json: 
   "@cypress/browserify-preprocessor": "latest",

6. change specpattern in config:
specPattern: './integration/examples/BDD/*.feature',

7. download plugin for .feature extension: cucumber gherkin full support from google 

error1: (0 , _cypressCucumberPreprocessor.And) is not a function

Soltn: Replaced And in feature file with 'When'
If you're using And, it's just syntactic sugar and typically you can replace And with Given, When, or Then (whichever is appropriate for your step). 


