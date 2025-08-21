/// <reference types = "cypress" />

describe("Handling iFrame and Modals", () => {
    it.only("iFrame and Modals", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#iframe').invoke('removeAttr', 'target').click();

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe') //wrapping iFrame body to use cypress commands
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        
        cy.get('@iframe').find('#myModal').as('modal') //modal text and buttons
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com');
        })
        cy.get('@modal').contains('Close').click();
    })
})