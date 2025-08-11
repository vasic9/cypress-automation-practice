/// <reference types = "Cypress" />

describe('Inspecting items with chain of commands', () => {
    it('click on the first item using text', () => {
        cy.visit('https://automationteststore.com/')
       cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click(); //clicks on element based on class and text
    })
    it.only('click on the first item using text', () => {
        cy.visit('https://automationteststore.com/')
       cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click(); //clicks on elements based on class and order
    })
})