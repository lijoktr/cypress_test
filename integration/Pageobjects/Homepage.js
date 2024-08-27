class Homepage
{
    getnamebox()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }
    getgender()
    {
        return cy.get("#exampleFormControlSelect1")
    }
    getenterpreneur()
    {
        return cy.get("#inlineRadio3")
    }
    gettwoway()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }
    getshoptab()
    {
        return cy.get('a[href="/angularpractice/shop"]')
    }

}
export default Homepage