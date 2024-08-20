        /// <reference types= "cypress"/>

        describe('my third test', function()
        {
            it('first test case ', function() {

                //checkbox
                cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
                //cy.get('#alertbtn').click()    
                cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
                    var coursetext = $e1.text()
                    if(coursetext.includes('Python'))
                    {
                        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                        {
                            var expprice = price.text()
                            expect(expprice).to.equal('25')
                        })
                    }

                })
                        
                
            }
            )

        })