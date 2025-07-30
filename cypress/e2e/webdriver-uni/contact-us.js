/// <reference types = "Cypress" />

describe('Test for Contact Us form', () => {
    it.only('should submit the contact form successfully', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('[name="first_name"]').type('Geralt');
       cy.get('[name="last_name"]').type('of Rivia');
       cy.get('[name="email"]').type('geralt@something.com');
       cy.get('[name="message"]').type("Lambert, Lambert, what a ...jolly nice chap!");
       cy.get('[type="submit"]').click();
       cy.get('h1').should('have.text', 'Thank You for your Message!');
    })
    it('should not be able to submit the contact form successfully', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('[name="first_name"]').type('Geralt');
       cy.get('[name="last_name"]').type('of Rivia');
       cy.get('[name="message"]').type("Lambert, Lambert, what a ...jolly nice chap!");
       cy.get('[type="submit"]').click();
    })
})