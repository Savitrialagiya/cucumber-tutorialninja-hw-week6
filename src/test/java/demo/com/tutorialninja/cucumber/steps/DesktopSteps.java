package demo.com.tutorialninja.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.com.tutorialninja.pages.DesktopPage;
import org.junit.Assert;

public class DesktopSteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click On Currency Link$")
    public void iClickOnCurrencyLink() {
        new DesktopPage().clickOnCurrencyLink();
    }

    @And("^I mouse Hover On Desktop$")
    public void iMouseHoverOnDesktop() {
        new DesktopPage().mouseHoverOnDesktop();
    }

    @And("^I click On Show All Desktop$")
    public void iClickOnShowAllDesktop() {
        new DesktopPage().clickOnShowAllDesktop();
    }

    @And("^I sort By Position NameZtoA\\(\"([^\"]*)\"\\)$")
    public void iSortByPositionNameZtoA(String sort) {
        new DesktopPage().sortByPositionNameZtoA(sort);
    }

    @Then("^I get Products Arrange In Descending Order Text$")
    public void iGetProductsArrangeInDescendingOrderText() {
        new DesktopPage().getProductsArrangeInDescendingOrderText();
    }

    @And("^I sort By Position Name AtoZ \"([^\"]*)\"$")
    public void iSortByPositionNameAtoZ(String sortByAtoZ) {
        new DesktopPage().sortByPositionNameAtoZ(sortByAtoZ);
    }

    @And("^I click On Product HPLP$")
    public void iClickOnProductHPLP() {
        new DesktopPage().clickOnProductHPLP3065();
    }

    @And("^I verify HPLP Text From List$")
    public void iVerifyHPLPTextFromList() {
        Assert.assertEquals("Product not found","HP LP3065",new DesktopPage().getHPLP3065TextFromList());
    }

    @And("^I click On Delivery Date$")
    public void iClickOnDeliveryDate() {
        new DesktopPage().clickOnDeliveryDate();
    }

    @And("^I enter Quantity One$")
    public void iEnterQuantityOne() {
        new DesktopPage().enterQuantity1("1");
    }

    @And("^I click On Ad To Cart$")
    public void iClickOnAdToCart() {
        new DesktopPage().clickOnAdToCart();
    }

    @And("^I verify Product Added To Shopping Cart Text$")
    public void iVerifyProductAddedToShoppingCartText() throws InterruptedException {
        Thread.sleep(2000);
        String expectedMessage = "Success: You have added HP LP3065 to your shopping cart!\n" +
                "×";
        Assert.assertEquals("Error message not displayed",expectedMessage,new DesktopPage().verifyProductAddedToShoppingCartText());
    }

    @And("^I click On Shopping Cart$")
    public void iClickOnShoppingCart() {
        new DesktopPage().clickOnShoppingCart();
    }

    @And("^I verify Text Shopping Cart$")
    public void iVerifyTextShoppingCart() throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("Error message not displayed","Shopping Cart  (1.00kg)",
              new DesktopPage().verifyTextShoppingCart());
    }

    @And("^I verify Text Product Name HPLP$")
    public void iVerifyTextProductNameHPLP() {
        Assert.assertEquals("Product name not displayed","HP LP3065",new DesktopPage().verifyTextProductNameHPLP3065());
    }

    @And("^I verify Delivery Date$")
    public void iVerifyDeliveryDate() throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("Date not displayed","Delivery Date: 2023-11-30",new DesktopPage().verifyDeliveryDate());
    }

    @And("^I verify The Model Product Text$")
    public void iVerifyTheModelProductText() {
        Assert.assertEquals("Message not displayed","Product 21",new DesktopPage().verifyTheModelProduct21Text());
    }

    @And("^I verify The Total Price Text$")
    public void iVerifyTheTotalPriceText() {
        Assert.assertEquals("Price not displayed","£74.73",new DesktopPage().verifyTheTotalPriceText());
    }
}
