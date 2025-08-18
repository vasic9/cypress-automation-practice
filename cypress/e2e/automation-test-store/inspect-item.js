/// <reference types = "cypress" />

describe('Inspecting items with chain of commands', () => {
    it.only('click on the first item using text', () => {
        cy.visit('https://automationteststore.com/')
       cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
        console.log("Item selected: " + itemHeaderText.text())
       }) //added promise to log the item name after clicking on element
    })
    it('click on the first item using text', () => {
        cy.visit('https://automationteststore.com/')
       cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click(); //clicks on elements based on class and order
    })
})