/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />

describe("Test for Contact Us form", () => {
    before(() => {
        // cy.viewport(550,750); //overrides values from config file
        cy.fixture("userDetails").as("user");
    })

    it("should submit the contact form successfully",{
        retries: {
            runMode: 0,
            openMode: 0
        }
    }, () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href$='contact']").click().then(function (itemText) {
            cy.log("Clicked on: " + itemText.text())
        });
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        cy.log("populates the form");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.log("checks validation for email input");
        cy.get('#ContactUsFrm_enquiry').type("Hmmm...");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > p').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("checks text message after submit");
        cy.log("Test has completed!");
    })
})