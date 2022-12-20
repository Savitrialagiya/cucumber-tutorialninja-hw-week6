Feature:  laptops And Note books Page Test
  As a user I would like to go to laptops And Note books Page into Tutorial Ninja website

  @smoke
  @regression
  Scenario: verify Products Price Display HighToLow Successfully
    Given I am on Homepage
    When I mouseHover On Laptops And Desktop Tab
    And I click On Show All Laptops And Notebooks
    And I sort By Price HighToLow
    Then I Verify Sort By HighToLow Order

  @sanity
  @regression
  Scenario: verify That User Place Order Successfully
    Given I am on Homepage
    When I click On Currency Link
    And I mouseHover On Laptops And Desktop Tab
    And I click On Show All Laptops And Notebooks
    And I sort By Price HighToLow
    And I click On MacBook Tab
    And I click On Add To Cart Button
    Then I verify get Success Text From Link
    And I click On Shoppings Cart
    Then I get Shopping Cart Message
    Then I Verify Product Macbook
    And I send Text Change Quantity To two
    And I click On Update Cart
    And I get Success Modified Cart Message
    And I get Verify Total
    And I click On Checkout Button
    And I get Checkout Text
    And I get New Customer Text
    And I click On Guest Checkout Radio Button
    And click On Continue Tab
    And enter Name "Dev"
    And enter Last Name"Coldo"
    And enter Email "dev123@gmail.com"
    And enter Telephone"1234567890"
    And enter Address"1,kancha road"
    And enter City "Harrow"
    And enter Postcode"HA8 5NN"
    And enter Country "Andorra"
    And enter Zone "Angus"
    And click On Continue Button
    And enter Text To Text Area "Please confirm delivery date"
    And click On TermsAndConditions Checkbox
    And click On Final Continue Button
    Then I get Warning Payment Method Required Text

