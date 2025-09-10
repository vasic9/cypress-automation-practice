import HomePage_PO from '../../support/pageObjects/webdriver-uni/homepage_po'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'

/// <reference types = "cypress" />

describe("Test for Contact Us form", () => {
    const homepage_PO = new HomePage_PO(); //creating object using class HomePage_PO
    const contact_Us_PO = new Contact_Us_PO();

    before(function() {
        cy.fixture('example').then(function(data) {
            globalThis.data = data
        })
    })
    
    beforeEach(() => {
        homepage_PO.visitHomepage(); //using function from class
        homepage_PO.clickOn_ContactUs();
        
        // cy.visit('/' + "/Contact-Us/contactus.html");
        // cy.get('#contact-us').invoke('removeAttr', 'target').click(); //removing attr 'target' to prevent opening new tab due to cypress limitations
    })

    it("should submit the contact form successfully", () => {
        cy.url().should('include', 'Contact-Us/contactus'); //url check
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); //charset check
        cy.title().should('include', 'WebDriver');
        contact_Us_PO.contactusForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Just do one thing or the other, don't try to be two people at once.", 'h1', 'Thank You for your Message!');
    })

    //negative test case
    it("should not be able to submit the contact form successfully", () => {
        contact_Us_PO.contactusForm_Submission(data.first_name, data.last_name, " ", "Just do one thing or the other, don't try to be two people at once.", 'body', 'Error: Invalid email address')
    })
})