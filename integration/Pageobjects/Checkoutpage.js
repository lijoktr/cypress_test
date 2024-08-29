class Checkoutpage
{
    getcheckout()
    {
        return cy.get("button.btn.btn-success")
    }
    getindividualamount()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    gettotalamount()
    {
        return cy.get('h3 strong')
    }
}
export default Checkoutpage
