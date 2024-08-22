        /// <reference types= "cypress"/>


        describe('calendar', function()
        {
            it('verify date ', function() {

                const month ='8'
                const day = '24'
                const year = '2022'
                const exp = [month,day,year]
                cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
                cy.get("div[class*='react-date-picker__wrapper'] button:nth-child(3)").click()
                cy.get("span[class*='react-calendar__navigation__label']").click()
                cy.get("span[class*='react-calendar__navigation__label']").click()
                cy.contains("2022").click()
                cy.get(".react-calendar__year-view__months__month").eq(Number(month)-1).click()
                cy.contains("24").click()
                //cy.get("input[name='date']").should('have.value', '2022-08-24')

                cy.get(".react-date-picker__inputGroup__input").each(($e1,index)=>
                {
                    cy.wrap($e1).invoke('val').should('eq',exp[index])
                })




                
            })

        })
                        
                


        