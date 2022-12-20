$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktop.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Page Test",
  "description": "As a user I would like to go to Desktop page into Tutorial Ninja website",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6627547600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Products Price Display HighToLow Successfully",
  "description": "",
  "id": "desktop-page-test;verify-products-price-display-hightolow-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click On Currency Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse Hover On Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click On Show All Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I sort By Position NameZtoA(\"Name (Z - A)\")",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I get Products Arrange In Descending Order Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 135026800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 739705200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iMouseHoverOnDesktop()"
});
formatter.result({
  "duration": 222272300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 915302900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 29
    }
  ],
  "location": "DesktopSteps.iSortByPositionNameZtoA(String)"
});
formatter.result({
  "duration": 628206100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iGetProductsArrangeInDescendingOrderText()"
});
formatter.result({
  "duration": 735622000,
  "status": "passed"
});
formatter.after({
  "duration": 795453400,
  "status": "passed"
});
formatter.before({
  "duration": 4379218600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "desktop-page-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click On Currency Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I mouse Hover On Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click On Show All Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I sort By Position Name AtoZ \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click On Product HPLP",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify HPLP Text From List",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click On Delivery Date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Quantity One",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click On Ad To Cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify Product Added To Shopping Cart Text",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click On Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify Text Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify Text Product Name HPLP",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify Delivery Date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify The Model Product Text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify The Total Price Text",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 856860500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iMouseHoverOnDesktop()"
});
formatter.result({
  "duration": 193061600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 984513400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 30
    }
  ],
  "location": "DesktopSteps.iSortByPositionNameAtoZ(String)"
});
formatter.result({
  "duration": 626381000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnProductHPLP()"
});
formatter.result({
  "duration": 1835669400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyHPLPTextFromList()"
});
formatter.result({
  "duration": 62853200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnDeliveryDate()"
});
formatter.result({
  "duration": 15717719900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iEnterQuantityOne()"
});
formatter.result({
  "duration": 205588900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnAdToCart()"
});
formatter.result({
  "duration": 109781600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyProductAddedToShoppingCartText()"
});
formatter.result({
  "duration": 2075548700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnShoppingCart()"
});
formatter.result({
  "duration": 467187100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTextShoppingCart()"
});
formatter.result({
  "duration": 2076264100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTextProductNameHPLP()"
});
formatter.result({
  "duration": 68674600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyDeliveryDate()"
});
formatter.result({
  "duration": 2064225400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTheModelProductText()"
});
formatter.result({
  "duration": 37637800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTheTotalPriceText()"
});
formatter.result({
  "duration": 42295600,
  "status": "passed"
});
formatter.after({
  "duration": 820276500,
  "status": "passed"
});
formatter.uri("laptopandnotebook.feature");
formatter.feature({
  "line": 1,
  "name": "laptops And Note books Page Test",
  "description": "As a user I would like to go to laptops And Note books Page into Tutorial Ninja website",
  "id": "laptops-and-note-books-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5291792500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify Products Price Display HighToLow Successfully",
  "description": "",
  "id": "laptops-and-note-books-page-test;verify-products-price-display-hightolow-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouseHover On Laptops And Desktop Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click On Show All Laptops And Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sort By Price HighToLow",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Verify Sort By HighToLow Order",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iMouseHoverOnLaptopsAndDesktopTab()"
});
formatter.result({
  "duration": 182963200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnShowAllLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 662623700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iSortByPriceHighToLow()"
});
formatter.result({
  "duration": 661568700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iVerifySortByHighToLowOrder()"
});
formatter.result({
  "duration": 829765500,
  "status": "passed"
});
formatter.after({
  "duration": 693862000,
  "status": "passed"
});
formatter.before({
  "duration": 5047729000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify That User Place Order Successfully",
  "description": "",
  "id": "laptops-and-note-books-page-test;verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click On Currency Link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I mouseHover On Laptops And Desktop Tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click On Show All Laptops And Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I sort By Price HighToLow",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click On MacBook Tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click On Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify get Success Text From Link",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click On Shoppings Cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I get Shopping Cart Message",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Verify Product Macbook",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I send Text Change Quantity To two",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click On Update Cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I get Success Modified Cart Message",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I get Verify Total",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click On Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I get Checkout Text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I get New Customer Text",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click On Guest Checkout Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click On Continue Tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "enter Name \"Dev\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "enter Last Name\"Coldo\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "enter Email \"dev123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "enter Telephone\"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "enter Address\"1,kancha road\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "enter City \"Harrow\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "enter Postcode\"HA8 5NN\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "enter Country \"Andorra\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "enter Zone \"Angus\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "click On Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "enter Text To Text Area \"Please confirm delivery date\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click On TermsAndConditions Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click On Final Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I get Warning Payment Method Required Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 691271900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iMouseHoverOnLaptopsAndDesktopTab()"
});
formatter.result({
  "duration": 179316100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnShowAllLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 621059500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iSortByPriceHighToLow()"
});
formatter.result({
  "duration": 492011500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnMacBookTab()"
});
formatter.result({
  "duration": 1684011700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 119051300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iVerifyGetSuccessTextFromLink()"
});
formatter.result({
  "duration": 216048500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnShoppingsCart()"
});
formatter.result({
  "duration": 437488100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetShoppingCartMessage()"
});
formatter.result({
  "duration": 67202300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iVerifyProductMacbook()"
});
formatter.result({
  "duration": 62240200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iSendTextChangeQuantityToTwo()"
});
formatter.result({
  "duration": 216300700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnUpdateCart()"
});
formatter.result({
  "duration": 659592000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetSuccessModifiedCartMessage()"
});
formatter.result({
  "duration": 97201400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetVerifyTotal()"
});
formatter.result({
  "duration": 63041200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 476358800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetCheckoutText()"
});
formatter.result({
  "duration": 73787500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetNewCustomerText()"
});
formatter.result({
  "duration": 2072300300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "duration": 97189400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnContinueTab()"
});
formatter.result({
  "duration": 70957500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev",
      "offset": 12
    }
  ],
  "location": "LaptopSteps.enterName(String)"
});
formatter.result({
  "duration": 341258300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coldo",
      "offset": 16
    }
  ],
  "location": "LaptopSteps.enterLastName(String)"
});
formatter.result({
  "duration": 105008600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev123@gmail.com",
      "offset": 13
    }
  ],
  "location": "LaptopSteps.enterEmail(String)"
});
formatter.result({
  "duration": 154622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 16
    }
  ],
  "location": "LaptopSteps.enterTelephone(String)"
});
formatter.result({
  "duration": 123028600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,kancha road",
      "offset": 14
    }
  ],
  "location": "LaptopSteps.enterAddress(String)"
});
formatter.result({
  "duration": 136836100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 12
    }
  ],
  "location": "LaptopSteps.enterCity(String)"
});
formatter.result({
  "duration": 102060600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA8 5NN",
      "offset": 15
    }
  ],
  "location": "LaptopSteps.enterPostcode(String)"
});
formatter.result({
  "duration": 130523900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andorra",
      "offset": 15
    }
  ],
  "location": "LaptopSteps.enterCountry(String)"
});
formatter.result({
  "duration": 122409200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Angus",
      "offset": 12
    }
  ],
  "location": "LaptopSteps.enterZone(String)"
});
formatter.result({
  "duration": 119700300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnContinueButton()"
});
formatter.result({
  "duration": 105353200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please confirm delivery date",
      "offset": 25
    }
  ],
  "location": "LaptopSteps.enterTextToTextArea(String)"
});
formatter.result({
  "duration": 585218400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnTermsAndConditionsCheckbox()"
});
formatter.result({
  "duration": 115574600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnFinalContinueButton()"
});
formatter.result({
  "duration": 93987200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetWarningPaymentMethodRequiredText()"
});
formatter.result({
  "duration": 288098400,
  "status": "passed"
});
formatter.after({
  "duration": 827274200,
  "status": "passed"
});
formatter.uri("myaccount.feature");
formatter.feature({
  "line": 1,
  "name": "MyAccount Page Test",
  "description": "As a user I would like to go to MyAccount Page into Tutorial Ninja website",
  "id": "myaccount-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5056927900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select My Account Options \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify Register Account Message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 91791700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 29
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountOptions(String)"
});
formatter.result({
  "duration": 21305723000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iVerifyRegisterAccountMessage()"
});
formatter.result({
  "duration": 62684100,
  "status": "passed"
});
formatter.after({
  "duration": 738950200,
  "status": "passed"
});
formatter.before({
  "duration": 4246154200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User Should Navigate To Login Page Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select My Account Option \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Returning Customer Message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 110830200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 28
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountOption(String)"
});
formatter.result({
  "duration": 446725100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iVerifyReturningCustomerMessage()"
});
formatter.result({
  "duration": 67549200,
  "status": "passed"
});
formatter.after({
  "duration": 716227200,
  "status": "passed"
});
formatter.before({
  "duration": 4354666900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify That User Register Account Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-that-user-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select My Accounts Options \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter First Name \"Dev\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Last Name \"Coldo\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Email Id \"dev@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Phone Number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Password \"Dev123\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Confirm Password \"Dev123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click Subscribe On Yes Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click On Privacy Policy CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click On Continue one",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I get Account Created Message",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I click On Continue Button two",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click On MyAccount Tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select my Accounts Option \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I get Account Logout Message",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click On Continue Button Three",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 101772500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 30
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountsOptions(String)"
});
formatter.result({
  "duration": 21254235900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev",
      "offset": 20
    }
  ],
  "location": "MyAccountSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 140788000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coldo",
      "offset": 19
    }
  ],
  "location": "MyAccountSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 132842200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev@gmail.com",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 127354000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 22
    }
  ],
  "location": "MyAccountSteps.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 127362500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev123",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 141528100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev123",
      "offset": 26
    }
  ],
  "location": "MyAccountSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 140982400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickSubscribeOnYesRadioButton()"
});
formatter.result({
  "duration": 114795600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 110175400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueOne()"
});
formatter.result({
  "duration": 659319100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iGetAccountCreatedMessage()"
});
formatter.result({
  "duration": 6872111100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueButtonTwo()"
});
formatter.result({
  "duration": 470225000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 101307800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 29
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountsOption(String)"
});
formatter.result({
  "duration": 769003500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iGetAccountLogoutMessage()"
});
formatter.result({
  "duration": 70155100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueButtonThree()"
});
formatter.result({
  "duration": 497248400,
  "status": "passed"
});
formatter.after({
  "duration": 853425300,
  "status": "passed"
});
formatter.before({
  "duration": 4449509400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify That User Should Login And Logout Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-that-user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I select My Account Option \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Email Id \"dev123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter Password \"Dev123\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click On MyAccount Tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select my Accounts Option \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I get Account Logout Message",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click On Continue Button Three",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 102593400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 28
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountOption(String)"
});
formatter.result({
  "duration": 494061100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dev123@gmail.com",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 150953400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dev123",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 126396300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnLogin()"
});
formatter.result({
  "duration": 580246600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 79208300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 29
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountsOption(String)"
});
formatter.result({
  "duration": 772868800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iGetAccountLogoutMessage()"
});
formatter.result({
  "duration": 66730900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueButtonThree()"
});
formatter.result({
  "duration": 448239000,
  "status": "passed"
});
formatter.after({
  "duration": 720586700,
  "status": "passed"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Topmenu Page Test",
  "description": "As a user I would like to select top menu into Tutorial Ninja website",
  "id": "topmenu-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4317206600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "topmenu-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse Hover To Element And Click On Desktop",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select Menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I get Desktop Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverToElementAndClickOnDesktop()"
});
formatter.result({
  "duration": 178276100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 1045255200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iGetDesktopText()"
});
formatter.result({
  "duration": 57420600,
  "status": "passed"
});
formatter.after({
  "duration": 701192300,
  "status": "passed"
});
formatter.before({
  "duration": 4563089800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify User Should Navigate To Laptops And Notebooks Page Successfully",
  "description": "",
  "id": "topmenu-page-test;verify-user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I mouse Hover To Laptops And Notebooks Tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select Menus \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get Laptops And Notebooks Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37000,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverToLaptopsAndNotebooksTab()"
});
formatter.result({
  "duration": 182966200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 16
    }
  ],
  "location": "TopMenuSteps.iSelectMenus(String)"
});
formatter.result({
  "duration": 730255500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iGetLaptopsAndNotebooksText()"
});
formatter.result({
  "duration": 42065800,
  "status": "passed"
});
formatter.after({
  "duration": 705657800,
  "status": "passed"
});
formatter.before({
  "duration": 3984012400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify User Should Navigate To Components Page Successfully",
  "description": "",
  "id": "topmenu-page-test;verify-user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I mouse Hover To Components Tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select menuc \"Show All Components\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I get Components Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 46500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverToComponentsTab()"
});
formatter.result({
  "duration": 197903800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 16
    }
  ],
  "location": "TopMenuSteps.iSelectMenuc(String)"
});
formatter.result({
  "duration": 704136600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iGetComponentsText()"
});
formatter.result({
  "duration": 46736900,
  "status": "passed"
});
formatter.after({
  "duration": 689666000,
  "status": "passed"
});
});