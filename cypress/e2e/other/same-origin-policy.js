/// <reference types = "cypress" />

describe('Cypress web security', () => {
    it('Visiting two different superdomains with user actions', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    })
    it('Origin command', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.origin('https://automationteststore.com', () => {
            cy.visit("/")
        });
    })
})