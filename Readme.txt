1. Javascript - asynchronous but cypress makes it synchronous
2. .then(): waits for current line to execute
3. cypress support jquery - text()
4. If jquery, first resolve it using .then(function(price))
5. Navigating to URL -visit
6. Through command line, cypress runs in headless mode in electron
7. command run: npx Cypress run --spec C:\Users\lijom\Cypress\cypress_test\integration\examples\Test10framework.js --headed --browser chrome --env url="https://google.com"

error1. > process is not defined
const env = process.env
soltn: Javascript keyword import cypress line defaultly added.
