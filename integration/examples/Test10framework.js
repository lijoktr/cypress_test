    /// <reference types= "cypress"/>
    import Homepage from "../Pageobjects/Homepage"    
    import Productpage from "../Pageobjects/Productpage"
    import Checkoutpage from "../Pageobjects/Checkoutpage"

            describe('framework', function()
            {
                before(function() {
                    cy.fixture('example').then(function(data) {
                        this.data=data

            })
        })

        it('framwework part ', function() {
            const homepage = new Homepage()
            const productpage = new Productpage()
            const checkoutpage = new Checkoutpage()
            cy.visit("https://rahulshettyacademy.com/angularpractice/")   
            homepage.getnamebox().type(this.data.name)
            homepage.getgender().select(this.data.gender)
            //assert minlength : 2
            homepage.gettwoway().should('have.value', this.data.name)
            homepage.gettwoway().should('have.attr', 'minlength', 2)
            homepage.getenterpreneur().should('be.disabled')
            
            //cy.pause()
            //shop item
            homepage.getshoptab().click()
            
            this.data.productname.forEach(function(element)
            {
                cy.selectprod(element)
            })

            productpage.getkart().click()
            checkoutpage.getcheckout().click()

        })
        })
                                            
                                                
                                                
                                    

                                            
                                        
                                        
                                

                                    
                                                    
                                            


                                    