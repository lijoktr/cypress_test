        /// <reference types= "cypress"/>

        describe('my third test', function()
        {
            it('first test case ', function() {

                //checkbox
                cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
                
                //cy.get('div.mouse-hover-content').invoke('show')
                cy.contains('Top').click({force: true})
                cy.url().should('include','top')

                })
                        
                
            }
            )

        