/// <reference types = "cypress" />

describe("Test file upload", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#file-upload').invoke('removeAttr', 'target').click();
    })

    it("Upload", () => {
        cy.get('#myFile').selectFile("cypress/fixtures/hollow.png");
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.eq('Your file has now been uploaded!')  //assertion for alert text
        })
    })

    it("No upload", () => {
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.eq('You need to select a file to upload!')  //assertion for alert text
        })
    })
})