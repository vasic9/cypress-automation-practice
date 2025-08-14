/// <reference types = "Cypress" />

describe('Iterating over elements', () => {
    it('Log information of hair care products', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })
    it('Clicking on element based on text', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes("Curls to straight Shampoo")) {
                cy.wrap($el).click()
            }
        })
    })
})