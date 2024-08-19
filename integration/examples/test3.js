/// <reference types= "cypress"/>

describe('my third test', function()
{
    it('first test case ', function() {

        //checkbox
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('Aust')
        cy.get('.ui-menu-item div').each(($e1, index, $list)=> {
            if($e1.text() === 'Austria')
                cy.wrap($e1).click()
        }
    
    )
    }
    )

})