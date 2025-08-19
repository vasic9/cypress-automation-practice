/// <reference types = "cypress" />

describe("Validate homepage links", () => {
    it.only("Confirm links redirect to correct pages", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'contactus');
        cy.go('back');

        cy.reload();
        cy.url().should('include', 'webdriveruniversity.com');

        cy.go('forward');
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'Login-Portal');
        
        cy.go('back');
        cy.get('#to-do-list').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'To-Do');

        cy.go('back');
    })
})