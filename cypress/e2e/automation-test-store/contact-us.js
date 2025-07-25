/// <reference types = "Cypress" />

describe('Test for Contact Us form', () => {
    it('should submit the contact form successfully', () => {
        cy.visit('https://automationteststore.com/')
       cy.get('.info_links_footer > :nth-child(5) > a').click();
       cy.get('#ContactUsFrm_first_name').type('Geralt');
       cy.get('#ContactUsFrm_email').type('geralt@something.com');
       cy.get('#ContactUsFrm_enquiry').type("Hmmm...");
       cy.get('.col-md-6 > .btn').click();
    })
})