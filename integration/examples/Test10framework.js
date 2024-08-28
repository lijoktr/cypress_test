    /// <reference types= "cypress"/>
    import Homepage from "../Pageobjects/Homepage"    
    import Productpage from "../Pageobjects/Productpage"
    import Checkoutpage from "../Pageobjects/Checkoutpage"
    import Purchasepage from "../Pageobjects/Purchasepage"
  
    

            describe('framework', function()
            {
                before(function() {
                    cy.fixture('example').then(function(data) {
                        this.data=data

            })
        })

        it('framwework part ', function() {

            var sum = 0
            var total = 0
            const homepage = new Homepage()
            const productpage = new Productpage()
            const checkoutpage = new Checkoutpage()
            const purchasepage = new Purchasepage()

            cy.visit(Cypress.env('url') + "/angularpractice/")   
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
            cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>
            {
                const value = $el.text()
                var res = value.split(" ")
                res = res[1].trim()
                sum = Number(sum) + Number(res)
            }).then(function()
        {
            cy.log(sum)

        })
        cy.get('h3 strong').each(($el, index, $list)=>
            {
                const value = $el.text()
                var res = value.split(" ")
                res = res[1].trim()
                total = Number(res)
                expect(total).to.equal(sum)
            })
            
            checkoutpage.getcheckout().click()
            
            purchasepage.getcountry().type('India')
            
            purchasepage.getcountryselect().click()
            purchasepage.getterm().click()
            purchasepage.getpurchase().click()
            purchasepage.getsuccess().then(function(successtext)
        {
            const success_text = successtext.text()
            expect(success_text.includes('Success')).to.be.true

        })


        })
        })
                                            
                                                
                                                
                                    

                                            
                                        
                                        
                                

                                    
                                                    
                                            


                                    