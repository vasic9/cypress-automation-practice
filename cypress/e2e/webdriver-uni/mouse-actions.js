/// <reference types = "cypress" />

describe("Test mouse actions", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
    })

    it("Drag and drop", () => {
        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
    })

    it("Double click", () => {
        cy.get('#double-click').dblclick();
    })

    it("Hold left mouse click on element", () => {
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)');
        })
    })
})