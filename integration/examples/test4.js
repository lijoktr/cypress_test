        /// <reference types= "cypress"/>

        describe('my third test', function()
        {
            it('first test case ', function() {

                //checkbox
                cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
                cy.get('#alertbtn').click()

                    cy.on('window:alert',(str) => {
                        expect(str).to.equal('Hello , share this practice page and share your knowledge')
                    })

                    cy.get("#opentab").invoke('removeAttr','target').click();
 
                    cy.origin("https://www.qaclickacademy.com",()=>
                    {
                     cy.get("#navbarSupportedContent a[href*='about']").click();
                     cy.get(".mt-50 h2").should('contain','QAClick Academy');
                    })                
                        
                
            }
            )

        })