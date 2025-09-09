/// <reference types = "cypress" />

describe("Interact with dropdown list", () => {
    it("Select specific values", () => {
        cy.visit('/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
        cy.get('#dropdowm-menu-3').select('JavaScript');
    })
})