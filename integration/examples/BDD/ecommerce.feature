Feature: End to end ecommerce validation

    application regression

    Scenario: ecommerce product delivery
    Given i open ecommerce page
    When i add the items to cart
    And validate the total price 
    Then select country submit and verify thank you

    Scenario: Filling the form to shop
    Given i open ecommerce page
    When i fill the form details
    Then validate the forms behaviour 
    Then select the shops page

    