//cypress - spec
/// <reference types= "cypress"/>

describe('my first test', function()
{
    it('first test case ', function() {
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        

        cy.get('.products').as('productlocator')
        cy.get('.Product:visible').should('have.length',4)
        cy.get('@productlocator').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const textveg = $e1.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
                cy.wrap($e1).contains('ADD TO CART').click()             
            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    }
    )
    cy.get("a[class*='cart-icon']").click()
    cy.get('div.action-block:nth-child(2) button').click()
    cy.contains('Place Order').click()

    })
})
    
