class Purchasepage
{
    getcountry()
    {
        return cy.get('#country')
    }
    getcountryselect()
    {
        return cy.get('a').contains('India')
    }
    getterm()
    {
        return cy.get('label[for=checkbox2]')
    }
    getpurchase()
    {
        return cy.get('input[type="submit"]')
    }
    getsuccess()
    {
        return cy.get('div.alert.alert-success')
    }
}
export default Purchasepage
