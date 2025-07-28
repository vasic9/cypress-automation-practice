/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />

describe('Test for Contact Us form', () => {
    it('should submit the contact form successfully', () => {
        cy.visit('https://automationteststore.com/')
       cy.get("a[href$='contact']").click();
       //cy.xpath("//a[contains(@href, 'contact')]").click();
       cy.get('#ContactUsFrm_first_name').type('Geralt');
       cy.get('#ContactUsFrm_email').type('geralt@something.com');
       cy.get('#ContactUsFrm_enquiry').type("Hmmm...");
       cy.get("button[title='Submit']").click();
    })
})