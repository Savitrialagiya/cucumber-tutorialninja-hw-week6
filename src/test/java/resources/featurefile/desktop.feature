Feature:  Desktop Page Test
  As a user I would like to go to Desktop page into Tutorial Ninja website

  @smoke
  @regression
  Scenario: Verify Products Price Display HighToLow Successfully
    Given I am on Homepage
    When I click On Currency Link
    And I mouse Hover On Desktop
    And I click On Show All Desktop
    And I sort By Position NameZtoA("Name (Z - A)")
    Then I get Products Arrange In Descending Order Text

    @sanity
    @regression
      Scenario: Verify Product Added To Shopping Cart SuccessFully
      Given I am on Homepage
      When I click On Currency Link
      And I mouse Hover On Desktop
      And I click On Show All Desktop
      And I sort By Position Name AtoZ "Name (A - Z)"
      And I click On Product HPLP
      And I verify HPLP Text From List
      And I click On Delivery Date
      And I enter Quantity One
      And I click On Ad To Cart
      And I verify Product Added To Shopping Cart Text
      And I click On Shopping Cart
      And I verify Text Shopping Cart
      And I verify Text Product Name HPLP
      And I verify Delivery Date
      And I verify The Model Product Text
      And I verify The Total Price Text
















