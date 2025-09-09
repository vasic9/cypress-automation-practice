/// <reference types = "cypress" />

describe("Verifying radio-buttons", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
    })

    it("Check specific radio buttons and validate", () => {
        cy.get('#radio-buttons').find("[type='radio']").first().click();
    })

    it("Validate state of specific radio buttons", () => {
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');

        cy.get("[value='lettuce']").check().should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');

        cy.get("[value='cabbage']").should('be.disabled');
    })
})