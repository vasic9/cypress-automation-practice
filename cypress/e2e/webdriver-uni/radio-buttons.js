/// <reference types = "cypress" />

describe("Verifying radiobuttons", () => {
    it("Check specific radio buttons and validate", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get('#radio-buttons').find("[type='radio']").first().click();
    })

    it("Validate state of specific radio buttons", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        
        cy.get("[value='lettuce']").check().should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');

        cy.get("[value='cabbage']").should('be.disabled');
    })
})