    /// <reference types= "cypress"/>


        describe('framework', function()
        {
            before(function() {
                cy.fixture('example').then(function(data) {
                    this.data=data

        })
    })

    it('framwework part ', function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")   
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get("#exampleFormControlSelect1").select(this.data.gender)
    })
    })
                                        
                                            
                                            
                                

                                        
                                    
                                    
                            

                                
                                                
                                        


                                