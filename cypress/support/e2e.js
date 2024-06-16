// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@shelex/cypress-allure-plugin';
import 'cypress-plugin-api'

//     ||
// Automation Exercise ||
//     ||

Cypress.Screenshot.defaults({
    capture: "runner",
    overwrite: true
});

Cypress.Commands.add("openWebsite", () => {
    cy.visit('http://automationexercise.com/');
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#subscribe').should('be.visible');
});

Cypress.Commands.add("scrollHalfway", () => {
    cy.scrollTo('center');
});

Cypress.Commands.add("viewProductDetails", () => {
    cy.get('a[href="/product_details/1"]').click();
});

Cypress.Commands.add("enterQuantity", (quantity) => {
    cy.get('input[name="quantity"]').clear().type(quantity);
});

Cypress.Commands.add("addToCart", () => {
    cy.get('button').contains('Add to cart').click();
    cy.get('u').contains('View Cart').click();
});

Cypress.Commands.add("proceedToCheckout", () => {
    cy.get('.col-sm-6 > .btn').contains('Proceed To Checkout').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
});

Cypress.Commands.add("fillEmailAndRegister", () => {
    // Função para gerar uma string aleatória
    function generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // random email
    const randomEmail = `testklein_${generateRandomString(8)}@example.com`;

    // store random email
    Cypress.env('registeredEmail', randomEmail);

    cy.get('[data-qa="signup-name"]').type('Klein Test');
    cy.get('[data-qa="signup-email"]').type(randomEmail);
    cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add("fillRequiredInformation", () => {
    function generateRandomPassword(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    // random password
    const randomPassword = generateRandomPassword(8);

    // save random pw on env
    Cypress.env('randomPassword', randomPassword);

    cy.get('input[name="password"]').type(randomPassword);
    cy.get('select[name="days"]').select('1');
    cy.get('select[name="months"]').select('January');
    cy.get('select[name="years"]').select('2000');
    cy.get('input[name="first_name"]').type('Klein');
    cy.get('input[name="last_name"]').type('Test');
    cy.get('input[name="company"]').type('TestCompany');
    cy.get('input[name="address1"]').type('123 Test St');
    cy.get('input[name="address2"]').type('Suite 100');
    cy.get('select[name="country"]').select('United States');
    cy.get('input[name="state"]').type('California');
    cy.get('input[name="city"]').type('Los Angeles');
    cy.get('input[name="zipcode"]').type('90001');
    cy.get('input[name="mobile_number"]').type('1234567890');
});


Cypress.Commands.add("createAccount", () => {
    cy.get('button').contains('Create Account').click();
});

Cypress.Commands.add("continueAfterAccountCreation", () => {
    cy.get('[data-qa="continue-button"]').contains('Continue').click();
});

Cypress.Commands.add("openCart", () => {
    cy.get('.shop-menu > .nav > :nth-child(3) > a').contains('Cart').click();
});

Cypress.Commands.add("proceedToCheckoutAgain", () => {
    cy.get('.col-sm-6 > .btn').contains('Proceed To Checkout').click();
});

Cypress.Commands.add("addCommentAndPlaceOrder", () => {
    cy.get('textarea[name="message"]').type('Test order comment');
    cy.get(':nth-child(7) > .btn').contains('Place Order').click();
});

Cypress.Commands.add("fillFakeCreditCardInfo", () => {
    const currentYear = new Date().getFullYear();
    const expiryYear = currentYear + 2;

    cy.get('input[name="name_on_card"]').type('Klein Test');
    cy.get('input[name="card_number"]').type('4111111111111111');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type(expiryYear.toString());
});

Cypress.Commands.add("payAndConfirmOrder", () => {
    cy.get('button').contains('Pay and Confirm Order').click();
    cy.get('[data-qa="order-placed"] > b').should('be.visible');
    cy.screenshot('order-placed');
});

Cypress.Commands.add("continueAfterPayment", () => {
    cy.get('[data-qa="continue-button"]').contains('Continue').click();
});

Cypress.Commands.add("logoutFromHeader", () => {
    cy.get('a[href="/logout"]').click();
});

Cypress.Commands.add("loginWithCreatedUser", () => {
    const registeredEmail = Cypress.env('registeredEmail');
    const randomPassword = Cypress.env('randomPassword');

    if (!registeredEmail) {
        throw new Error('Registered email not found. Make sure to run the registration step before login.');
    }

    cy.get('[data-qa="login-email"]').type(registeredEmail);
    cy.get('[data-qa="login-password"]').type(randomPassword);
    cy.get('[data-qa="login-button"]').contains('Login').click();
});

Cypress.Commands.add("openContactUsPage", () => {
    cy.get('a[href="/contact_us"]').click();
});

Cypress.Commands.add("fillAndSubmitContactForm", () => {
    const registeredEmail = Cypress.env('registeredEmail');

    if (!registeredEmail) {
        throw new Error('Registered email not found. Make sure to run the registration step before filling the contact form.');
    }

    cy.get('input[name="name"]').type('Klein Test');
    cy.get('input[name="email"]').type(registeredEmail);
    cy.get('textarea[name="message"]').type('This is a test message');
    cy.get('[data-qa="submit-button"]').contains('Submit').click();
});

Cypress.Commands.add("confirmStatus", () => {
    cy.get('.status').contains('Success! Your details have been submitted successfully.');
    cy.scrollTo('top');
    cy.screenshot('form_submitted');
});

Cypress.Commands.add("logoutAgain", () => {
    cy.get('a[href="/logout"]').click();
});
