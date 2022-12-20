Feature:  MyAccount Page Test
  As a user I would like to go to MyAccount Page into Tutorial Ninja website

  @smoke
  @regression
  Scenario: Verify User Should Navigate To Register Page Successfully
    Given I am on Homepage
    When I click On MyAccount Link
    And I select My Account Options "Register"
    Then I verify Register Account Message
  @sanity
  @regression
  Scenario: Verify User Should Navigate To Login Page Successfully
    Given I am on Homepage
    When I click On MyAccount Link
    And I select My Account Option "Login"
    Then I verify Returning Customer Message
  @regression
  Scenario: Verify That User Register Account Successfully
    Given I am on Homepage
    When I click On MyAccount Link
    And I select My Accounts Options "Register"
    And I enter First Name "Dev"
    And I enter Last Name "Coldo"
    And I enter Email Id "dev7@gmail.com"
    And I enter Phone Number "1234567890"
    And I enter Password "Dev123"
    And I enter Confirm Password "Dev123"
    And I click Subscribe On Yes Radio Button
    And I click On Privacy Policy CheckBox
    And I click On Continue one
    Then I get Account Created Message
    And I click On Continue Button two
    And I click On MyAccount Tab
    And I select my Accounts Option "Logout"
    Then I get Account Logout Message
    And I click On Continue Button Three
  @regression
  Scenario: Verify That User Should Login And Logout Successfully
    Given I am on Homepage
    When I click On MyAccount Link
    And I select My Account Option "Login"
    And I enter Email Id "dev123@gmail.com"
    And I enter Password "Dev123"
    And I click On Login
    And I click On MyAccount Tab
    And I select my Accounts Option "Logout"
    And I get Account Logout Message
    Then I click On Continue Button Three





















