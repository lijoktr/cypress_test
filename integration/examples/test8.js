        /// <reference types= "cypress"/>
        /// <reference types= "cypress-iframe"/>
        import 'cypress-iframe'

        describe('my eight test', function()
        {
            it('first test case ', function() {

                //
                
                cy.visit(Cypress.env('url')+"/AutomationPractice/")

                cy.frameLoaded("#courses-iframe")

                cy.iframe().find("a[href*='mentorship']").eq(0).click()

                //cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2 )

                
            })

                })
                        
                


        