/// <reference types = "cypress" />

describe("Iterating over elements", () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Log information of hair care products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it("Clicking on element based on text", () => {
    //     cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //         if($el.text().includes("Curls to straight Shampoo")) {
    //             cy.wrap($el).click()
    //         }
    //     })
        cy.selectProduct("Curls to straight Shampoo");
    })

    it("Clicking on anotther element based on text", () => {
        cy.selectProduct("Pantene Pro-V Conditioner, Classic Care");
    })
})