/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />

describe('Test for Contact Us form', () => {
    it('should submit the contact form successfully', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_first_name').type('Geralt');
        cy.log("populates the form");
        cy.get('#ContactUsFrm_email').type('geralt@something.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.log("checks validation for email input");
        cy.get('#ContactUsFrm_enquiry').type("Hmmm...");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > p').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("checks text message after submit");
        cy.log("Test has completed!");
    })
})