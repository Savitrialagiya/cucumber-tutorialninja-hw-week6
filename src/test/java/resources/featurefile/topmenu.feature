Feature:  Topmenu Page Test
  As a user I would like to select top menu into Tutorial Ninja website

  @smoke
  @regression
  Scenario: Verify User Should Navigate To Desktops Page Successfully
    Given I am on Homepage
    When I mouse Hover To Element And Click On Desktop
    And I select Menu "Show All Desktops"
    Then I get Desktop Text

  @sanity
  @regression
  Scenario: Verify User Should Navigate To Laptops And Notebooks Page Successfully
    Given I am on Homepage
    When I mouse Hover To Laptops And Notebooks Tab
    And I select Menus "Show All Laptops & Notebooks"
    Then I get Laptops And Notebooks Text

  @regression
  Scenario: Verify User Should Navigate To Components Page Successfully
    Given I am on Homepage
    When I mouse Hover To Components Tab
    And I select menuc "Show All Components"
    Then I get Components Text

















