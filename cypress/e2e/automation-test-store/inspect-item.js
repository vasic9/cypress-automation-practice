/// <reference types = "cypress" />

describe("Inspecting items with chain of commands", () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })
    it('click on the first item using text', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function (itemHeaderText) {
            console.log("Item selected: " + itemHeaderText.text())
        }) //added promise to log the item name after clicking on element
    })
    it("click on the first item using text", () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click(); //clicks on elements based on class and order
    })
})