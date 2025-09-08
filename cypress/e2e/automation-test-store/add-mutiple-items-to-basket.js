/// <reference types = "cypress" />

describe("Add multiple items to basket", () => {
    before(() => {
        cy.fixture("products").then(function(data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Books").click();
    })
    it('Add specific items to basket', () => {
        globalThis.data.productName.forEach((element) => {
            cy.addToBasket(element);
        })
        cy.get('.dropdown-toggle > .fa').click();
    })
});