package demo.com.tutorialninja.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.com.tutorialninja.pages.MyAccountPage;
import org.junit.Assert;

public class MyAccountSteps {
    @When("^I click On MyAccount Link$")
    public void iClickOnMyAccountLink() {
        new MyAccountPage().clickOnMyAccountLink();
    }

    @And("^I select My Account Options \"([^\"]*)\"$")
    public void iSelectMyAccountOptions(String register) {
        new MyAccountPage().selectMyAccountOptions(register);

    }

    @Then("^I verify Register Account Message$")
    public void iVerifyRegisterAccountMessage() {
        Assert.assertEquals("Message not displayed", "Register Account",
                new MyAccountPage().getRegisterAccountMessage());
    }

    @And("^I select My Account Option \"([^\"]*)\"$")
    public void iSelectMyAccountOption(String login) {
        new MyAccountPage().selectMyAccountOptions(login);

    }

    @Then("^I verify Returning Customer Message$")
    public void iVerifyReturningCustomerMessage() {
        Assert.assertEquals("Message not displayed", "Returning Customer",
                new MyAccountPage().getReturningCustomerMessage());

    }

    @And("^I select My Accounts Options \"([^\"]*)\"$")
    public void iSelectMyAccountsOptions(String register) {
        new MyAccountPage().selectMyAccountOptions(register);

    }

    @And("^I enter First Name \"([^\"]*)\"$")
    public void iEnterFirstName(String name) {
        new MyAccountPage().enterFirstName(name);
    }

    @And("^I enter Last Name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName) {
        new MyAccountPage().enterLastName(lastName);
    }

    @And("^I enter Email Id \"([^\"]*)\"$")
    public void iEnterEmailId(String email) {
        new MyAccountPage().enterEmailId(email);
    }

    @And("^I enter Phone Number \"([^\"]*)\"$")
    public void iEnterPhoneNumber(String phone) {
        new MyAccountPage().enterPhoneNumber(phone);
    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new MyAccountPage().enterPassword(password);
    }

    @And("^I enter Confirm Password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confPassword) {
        new MyAccountPage().enterConfirmPassword(confPassword);
    }

    @And("^I click Subscribe On Yes Radio Button$")
    public void iClickSubscribeOnYesRadioButton() {
        new MyAccountPage().clickSubscribeOnYesRadioButton();
    }

    @And("^I click On Privacy Policy CheckBox$")
    public void iClickOnPrivacyPolicyCheckBox() {
        new MyAccountPage().clickOnPrivacyPolicyCheckBox();
    }

    @And("^I click On Continue one$")
    public void iClickOnContinueOne() {
        new MyAccountPage().clickOnContinue1();
    }


    @Then("^I get Account Created Message$")
    public void iGetAccountCreatedMessage() {
Assert.assertEquals("Message not displayed","Your Account Has Been Created!",
        new MyAccountPage().getAccountCreatedMessage());
    }

    @And("^I click On Continue Button two$")
    public void iClickOnContinueButtonTwo() {
        new MyAccountPage().clickOnContinueButton2();
    }

    @And("^I click On MyAccount Tab$")
    public void iClickOnMyAccountTab() {
        new MyAccountPage().clickOnMyAccountTab();
    }

    @And("^I select my Accounts Option \"([^\"]*)\"$")
    public void iSelectMyAccountsOption(String logOut) {
        new MyAccountPage().selectMyAccountOptions(logOut);
    }

    @Then("^I get Account Logout Message$")
    public void iGetAccountLogoutMessage() {
       Assert.assertEquals("Message not displayed","Account Logout",
               new MyAccountPage().getAccountLogoutMessage());
    }

    @And("^I click On Continue Button Three$")
    public void iClickOnContinueButtonThree() {
        new MyAccountPage().clickOnContinueButton3();
    }

    @And("^I click On Login$")
    public void iClickOnLogin() {
        new MyAccountPage().clickOnLogin();
    }
}
