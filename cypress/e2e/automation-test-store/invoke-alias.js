/// <reference types = "Cypress" />

describe('Product title check', () => {
    it('Chekcs length and accuracy of the title', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').eq(1).invoke('text').as('productTitle');
        cy.get('@productTitle').its('length').should('be.gt', 30);
        cy.get('@productTitle').should('include', 'Eau Parfumee');
    })
    it('Checks number of products and title for cart', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })
})