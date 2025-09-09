/// <reference types = "cypress" />

describe("Verify autocomplete dropdown list", () => {
    it("Select specific product with autocomplete", () => {
        cy.visit('/');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();

        cy.get('#myInput').type('A');

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const selectedProduct = 'Avacado';

            if (prod === selectedProduct) {
                cy.wrap($el).click();
                cy.get('#submit-button').click();
                cy.url().should('include', selectedProduct)
            }
        })
            .then(() => {
                cy.get('#myInput').type('G');

                cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                    const prod = $el.text();
                    const selectedProduct = 'Grapes';

                    if (prod === selectedProduct) {
                        cy.wrap($el).click();
                        cy.get('#submit-button').click();
                        cy.url().should('include', selectedProduct)
                    }
                })
            })
    })
})