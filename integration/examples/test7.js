        /// <reference types= "cypress"/>

        describe('my third test', function()
        {
            it('first test case ', function() {

                //
                cy.visit(Cypress.env('url')+"/AutomationPractice/")

                cy.get('#opentab').then(function(e1)
            {
                const url = e1.prop('href')
                cy.visit(url)
                cy.origin(url, ()=>{
                    cy.get("#navbarSupportedContent a[href*='about']").click();

                })
            })

                })
                        
                
            }
            )

        