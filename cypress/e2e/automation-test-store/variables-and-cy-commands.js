/// <reference types = "cypress" />

describe("Verifying variables, cypress commands, jquery commands", () => {
    it("Navigates to specific product pages", () => {
        cy.visit('https://automationteststore.com/');
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    })
    it.only("Validate properties of the contact us page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');

        //Chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');

        //JQuery

        //First Name
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(($text) => {
            const firstNameText = $text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
        })
        //Email
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(($text) => {
            const emailText = $text.find('#field_12').text()
            expect(emailText).to.contain('Email')
        })
        //Enquiry
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(($text) => {
            const enquiryText = $text.find('#field_13').text()
            expect(enquiryText).to.contain('Enquiry')
        })
    })
})