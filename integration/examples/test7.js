        /// <reference types= "cypress"/>

        describe('my third test', function()
        {
            it('first test case ', function() {

                //checkbox
                cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

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

        