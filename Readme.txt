Steps to Run the code:
1. Go to cypress_test folder
2. Terminal command:.\node_modules\.bin\cypress open
3. Select E2E testing
4. Select browser
3. Run each test in Specs

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

error1. > process is not defined
const env = process.env
soltn: Javascript keyword import cypress line defaultly added.
