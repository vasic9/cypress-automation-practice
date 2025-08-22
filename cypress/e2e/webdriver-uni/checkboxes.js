/// <reference types = "cypress" />

describe("Verifying checkboxes", () => {
    it("Check box and validate", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.xpath("//input[@type='checkbox' and @value='option-1']").as('option1');
        cy.get('@option1').check().should('be.checked'); //checks box and does assertion
    })

    it("Uncheck a box and validate", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.xpath("//input[@type='checkbox' and @value='option-3']").as('option3');
        cy.get('@option3').uncheck().should('not.be.checked'); //unchecks box and does assertion
    })

    it("Check multible boxes and validate", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();

        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');
    })
})