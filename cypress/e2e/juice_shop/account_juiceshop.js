/// <reference types = "cypress" />

describe("Juice Shop Account", () => {
    let randomString = Math.random().toString(36).substring(2);
    const email = "auto_" + randomString + "@gmail.com";
    const password = "Password1"

    it("Create account", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#navbarAccount").click();
        cy.get("#navbarLoginButton").click();
        cy.get("#newCustomerLink").contains("Not yet a customer?").click();
        cy.get('#emailControl').type(email);
        cy.get('#passwordControl').type(password);
        cy.get('#repeatPasswordControl').type(password);
        cy.get('#mat-mdc-form-field-label-8 mat-label').click();
        cy.get('#mat-option-3 span.mdc-list-item__primary-text').click();
        cy.get('#securityAnswerControl').type('HelloWorld');
        cy.get('#registerButton').click();
    })
})