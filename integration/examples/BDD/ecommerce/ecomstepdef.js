    /// <reference types= "cypress"/>
    import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
    import Homepage from "C:/Users/lijom/Cypress/cypresstest/cypress_test/integration/Pageobjects/Homepage"    
    import Productpage from "C:/Users/lijom/Cypress/cypresstest/cypress_test/integration/Pageobjects/Productpage"
    import Checkoutpage from "C:/Users/lijom/Cypress/cypresstest/cypress_test/integration/Pageobjects/Checkoutpage"
    import Purchasepage from "C:/Users/lijom/Cypress/cypresstest/cypress_test/integration/Pageobjects/Purchasepage"

    var sum = 0
    var total = 0
    const homepage = new Homepage()
    const productpage = new Productpage()
    const checkoutpage = new Checkoutpage()
    const purchasepage = new Purchasepage()

    Given('i open ecommerce page', function ()
    {
        cy.visit(Cypress.env('url') + "/angularpractice/")  
    })
    When('i add the items to cart',function ()
    {
        homepage.getshoptab().click()
                
        this.data.productname.forEach(function(element)
        {
            cy.selectprod(element)
        });

        productpage.getkart().click()
    })
    When('validate the total price',function ()
    {
        checkoutpage.getindividualamount().each(($el, index, $list)=>
            {
                const value = $el.text()
                var res = value.split(" ")
                res = res[1].trim()
                sum = Number(sum) + Number(res)
            }).then(function()
        {
            cy.log(sum)

        })
        checkoutpage.gettotalamount().each(($el, index, $list)=>
            {
                const value = $el.text()
                var res = value.split(" ")
                res = res[1].trim()
                total = Number(res)
                expect(total).to.equal(sum)
            })
            
            checkoutpage.getcheckout().click()
        })
            
    Then('select country submit and verify thank you',function ()
    {
        purchasepage.getcountry().type('India')
                
        purchasepage.getcountryselect().click()
        purchasepage.getterm().click({force: true})
        purchasepage.getpurchase().click()
        purchasepage.getsuccess().then(function(successtext)
    {
        const success_text = successtext.text()
        expect(success_text.includes('Success')).to.be.true

    })

    })
    When('i fill the form details', function ()
    {
        homepage.getnamebox().type(this.data.name)
        homepage.getgender().select(this.data.gender)
    })

    Then('validate the forms behaviour',function ()
    {
                    //assert minlength : 2
                    homepage.gettwoway().should('have.value', this.data.name)
                    homepage.gettwoway().should('have.attr', 'minlength', 2)
                    homepage.getenterpreneur().should('be.disabled')
    })

    Then('select the shops page',function ()
    {
        homepage.getshoptab().click()
    })