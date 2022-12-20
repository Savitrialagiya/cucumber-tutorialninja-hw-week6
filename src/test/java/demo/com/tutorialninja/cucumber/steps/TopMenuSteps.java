package demo.com.tutorialninja.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.com.tutorialninja.pages.DesktopPage;
import demo.com.tutorialninja.pages.TopMenuPage;
import org.junit.Assert;

public class TopMenuSteps {
    @When("^I mouse Hover To Element And Click On Desktop$")
    public void iMouseHoverToElementAndClickOnDesktop() {
        new TopMenuPage().mouseHoverToElementAndClickOnDesktop();
    }

    @And("^I select Menu \"([^\"]*)\"$")
    public void iSelectMenu(String desktop)  {
        new TopMenuPage().selectMenu(desktop);
    }

    @Then("^I get Desktop Text$")
    public void iGetDesktopText() {
        Assert.assertEquals("Message not displayed","Desktops",
                new TopMenuPage().getTextDesktop());
    }

    @When("^I mouse Hover To Laptops And Notebooks Tab$")
    public void iMouseHoverToLaptopsAndNotebooksTab() {
        new TopMenuPage().mouseHoverOnLaptopsAndNotebooksTab();
    }

    @And("^I select Menus \"([^\"]*)\"$")
    public void iSelectMenus(String laptopAndNotebook)  {
       new TopMenuPage().selectMenu(laptopAndNotebook);
    }

    @Then("^I get Laptops And Notebooks Text$")
    public void iGetLaptopsAndNotebooksText() {
        Assert.assertEquals("Massage not displayed","Laptops & Notebooks",
                new TopMenuPage().getLaptopsAndNotebooksText());
    }

    @When("^I mouse Hover To Components Tab$")
    public void iMouseHoverToComponentsTab() {
        new TopMenuPage().mouseHoverToComponentsTab();
    }

    @And("^I select menuc \"([^\"]*)\"$")
    public void iSelectMenuc(String components)  {
       new TopMenuPage().selectMenu(components);
    }

    @Then("^I get Components Text$")
    public void iGetComponentsText() {
        Assert.assertEquals("Massage not displayed","Components",
                new TopMenuPage().getComponentsText());
    }
}
