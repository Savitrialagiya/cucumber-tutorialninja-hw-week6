package demo.com.tutorialninja.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.com.tutorialninja.pages.LaptopsAndNotebooksPage;
import org.junit.Assert;

public class LaptopSteps {
    @When("^I mouseHover On Laptops And Desktop Tab$")
    public void iMouseHoverOnLaptopsAndDesktopTab() {
        new LaptopsAndNotebooksPage().mouseHoverOnLaptopsAndDesktopTab();
    }

    @And("^I click On Show All Laptops And Notebooks$")
    public void iClickOnShowAllLaptopsAndNotebooks() {
        new LaptopsAndNotebooksPage().clickOnShowAllLaptopsAndNotebooks();
    }

    @And("^I sort By Price HighToLow$")
    public void iSortByPriceHighToLow() {
        new LaptopsAndNotebooksPage().sortByPriceHighToLow();
    }

    @Then("^I Verify Sort By HighToLow Order$")
    public void iVerifySortByHighToLowOrder() {
        new LaptopsAndNotebooksPage().GetSortByHighToLowOrder();
    }


    @And("^I click On MacBook Tab$")
    public void iClickOnMacBookTab() {
        new LaptopsAndNotebooksPage().clickOnMacBookTab();
    }

    @And("^I click On Add To Cart Button$")
    public void iClickOnAddToCartButton() {
        new LaptopsAndNotebooksPage().clickOnAddToCartButton();
    }

    @Then("^I verify get Success Text From Link$")
    public void iVerifyGetSuccessTextFromLink() {
        String expectedText = "Success: You have added MacBook to your shopping cart!\n"+"×";
        Assert.assertEquals("Error Message not displayed",expectedText,
                new LaptopsAndNotebooksPage().getSuccessTextFromLink());
    }

    @And("^I click On Shoppings Cart$")
    public void iClickOnShoppingsCart() {
        new LaptopsAndNotebooksPage().clickOnShoppingCart();
    }
    @Then("^I get Shopping Cart Message$")
    public void iGetShoppingCartMessage() {
        Assert.assertEquals("Message not displayed","Shopping Cart",
                new LaptopsAndNotebooksPage().getShoppingCartMessage());
    }

    @Then("^I Verify Product Macbook$")
    public void iVerifyProductMacbook() {
        Assert.assertEquals("Message not displayed","MacBook",
                new LaptopsAndNotebooksPage().getVerifyProductMacbook());
    }

    @And("^I send Text Change Quantity To two$")
    public void iSendTextChangeQuantityToTwo() {
        new LaptopsAndNotebooksPage().sendTextChangeQuantityTo2("2");
    }

    @And("^I click On Update Cart$")
    public void iClickOnUpdateCart() {
        new LaptopsAndNotebooksPage().clickOnUpdateCart();
    }

    @And("^I get Success Modified Cart Message$")
    public void iGetSuccessModifiedCartMessage() {
        String expectedMessage = "Success: You have modified your shopping cart!\n"+"×";
        Assert.assertEquals("Message not displayed",expectedMessage,
                new LaptopsAndNotebooksPage().getSuccessModifiedCartMessage());
    }

    @And("^I get Verify Total$")
    public void iGetVerifyTotal() {
        Assert.assertEquals("Price Not displayed","£737.45",
                new LaptopsAndNotebooksPage().getVerifyTotal());
    }

    @And("^I click On Checkout Button$")
    public void iClickOnCheckoutButton() {
        new LaptopsAndNotebooksPage().clickOnCheckoutButton();
    }

    @And("^I get Checkout Text$")
    public void iGetCheckoutText() {
        Assert.assertEquals("Message not displayed","Checkout",
                new LaptopsAndNotebooksPage().getCheckoutText());
    }

    @And("^I get New Customer Text$")
    public void iGetNewCustomerText() throws InterruptedException {
        Thread.sleep(2000);
       Assert.assertEquals("Message not displayed","New Customer",
               new LaptopsAndNotebooksPage().getNewCustomerText());
    }

    @And("^I click On Guest Checkout Radio Button$")
    public void iClickOnGuestCheckoutRadioButton() {
        new LaptopsAndNotebooksPage().clickOnGuestCheckoutRadioButton();
    }

    @And("^click On Continue Tab$")
    public void clickOnContinueTab() {
        new LaptopsAndNotebooksPage().clickOnContinueTab();
    }

    @And("^enter Name \"([^\"]*)\"$")
    public void enterName(String name)  {
        new LaptopsAndNotebooksPage().enterName(name);
    }

    @And("^enter Last Name\"([^\"]*)\"$")
    public void enterLastName(String lastName)  {
        new LaptopsAndNotebooksPage().enterLastName(lastName);
    }

    @And("^enter Email \"([^\"]*)\"$")
    public void enterEmail(String email)  {
        new LaptopsAndNotebooksPage().enterEmail(email);
    }

    @And("^enter Telephone\"([^\"]*)\"$")
    public void enterTelephone(String phone)  {
        new LaptopsAndNotebooksPage().enterTelephone(phone);
    }

    @And("^enter Address\"([^\"]*)\"$")
    public void enterAddress(String address)  {
        new LaptopsAndNotebooksPage().enterAddress(address);
    }

    @And("^enter City \"([^\"]*)\"$")
    public void enterCity(String city)  {
        new LaptopsAndNotebooksPage().enterCity(city);

    }

    @And("^enter Postcode\"([^\"]*)\"$")
    public void enterPostcode(String postCode)  {
        new LaptopsAndNotebooksPage().enterPostcode(postCode);
    }

    @And("^enter Country \"([^\"]*)\"$")
    public void enterCountry(String country)  {
        new LaptopsAndNotebooksPage().enterCountry(country);
    }

    @And("^enter Zone \"([^\"]*)\"$")
    public void enterZone(String zone)  {
        new LaptopsAndNotebooksPage().enterZone(zone);
    }

    @And("^click On Continue Button$")
    public void clickOnContinueButton() {
        new LaptopsAndNotebooksPage().clickOnContinueButton();
    }

    @And("^enter Text To Text Area \"([^\"]*)\"$")
    public void enterTextToTextArea(String text)  {
        new LaptopsAndNotebooksPage().enterTextToTextArea(text);

    }

    @And("^click On TermsAndConditions Checkbox$")
    public void clickOnTermsAndConditionsCheckbox() {
        new LaptopsAndNotebooksPage().clickOnTermsAndConditionsCheckbox();
    }

    @And("^click On Final Continue Button$")
    public void clickOnFinalContinueButton() {
        new LaptopsAndNotebooksPage().clickOnFinalContinueButton();
    }

    @Then("^I get Warning Payment Method Required Text$")
    public void iGetWarningPaymentMethodRequiredText() {
        String expectedPaymentText = "Warning: Payment method required!\n"+"×";
        Assert.assertEquals("Message not displayed",expectedPaymentText,
                new LaptopsAndNotebooksPage().getWarningPaymentMethodRequiredText());
    }

}
