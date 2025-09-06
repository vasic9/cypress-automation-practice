/// <reference types = "cypress" />

describe("Test for Contact Us form", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            globalThis.data = data
        })
    })
    
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click(); //removing attr 'target' to prevent opening new tab due to cypress limitations
    })

    it("should submit the contact form successfully", () => {
        cy.url().should('include', 'Contact-Us/contactus'); //url check
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); //charset check
        cy.title().should('include', 'WebDriver');
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('[name="message"]').type("Lambert, Lambert, what a ...jolly nice chap!");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
        cy.log("Test has completed!");
    })

    //negative test case
    it("should not be able to submit the contact form successfully", () => {
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="message"]').type("Lambert, Lambert, what a ...jolly nice chap!");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    })
})