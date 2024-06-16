import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('user acessa the Clothing Store website', () => {
    cy.openWebsite();
});

When('user scrolls halfway down the page', () => {
    cy.scrollHalfway();
});

When('selects a product to view its details', () => {
    cy.viewProductDetails();
});

When('specifies the quantity as 30', () => {
    cy.enterQuantity(30);
});

When('adds the product to their cart', () => {
    cy.addToCart();
});

Then('user proceeds to checkout', () => {
    cy.proceedToCheckout();
});

When('user enters their email address and registers', () => {
    cy.fillEmailAndRegister();
});

When('completes all required account details', () => {
    cy.fillRequiredInformation();
});

When('successfully creates their account', () => {
    cy.createAccount();
});

Then('user continues after account creation', () => {
    cy.continueAfterAccountCreation();
});

When('user accesses their cart from the header', () => {
    cy.openCart();
});

When('proceeds to checkout once more', () => {
    cy.proceedToCheckoutAgain();
});

When('adds a comment before placing the order', () => {
    cy.addCommentAndPlaceOrder();
});

When('user provides fake credit card information', () => {
    cy.fillFakeCreditCardInfo();
});

When('completes the payment to confirm the order', () => {
    cy.payAndConfirmOrder();
});

When('proceeds after successful payment', () => {
    cy.continueAfterPayment();
});

Then('user logs out from their account', () => {
    cy.logoutFromHeader();
});

When('user logs in using their existing credentials', () => {
    cy.loginWithCreatedUser();
});

When('navigates to the contact us page', () => {
    cy.openContactUsPage();
});

When('fills out the contact form and submits', () => {
    cy.fillAndSubmitContactForm();
});

Then('confirms the submission pop-up', () => {
    cy.confirmStatus();
});

Then('user logs out once more', () => {
    cy.logoutAgain();
});
