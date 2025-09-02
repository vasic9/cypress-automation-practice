/// <reference types = "cypress" />

describe("Test datepicker", () => {
    it("Select date from the datepicker", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#datepicker').invoke('removeAttr', 'target').click();
        cy.get('#datepicker').click();

        let date = new Date();
        date.setDate(date.getDate() + 30) //sets date depending on x(=30)

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default", { month: "long" }); //get month in correct format
        let futureDay = date.getDate();

        const selectMonthYear = () => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first()
                .then(currentDate => {
                    if (!currentDate.text().includes(futureYear)) {
                        cy.get('.next').first().click(); //clicks next until year is different from current date
                        selectMonthYear();
                    }
                }).then(() => {
                    cy.get('.datepicker-dropdown').find('.datepicker-switch').first()
                        .then(currentDate => {
                            if (!currentDate.text().includes(futureMonth)) {
                                cy.get('.next').first().click(); //clicks next until month is different from current date
                                selectMonthYear();
                            }
                        })
                })
        }

        const selectFutureDay = () => {
            cy.get('[class = "day"]').contains(futureDay).click();
        }

        selectMonthYear();
        selectFutureDay();
    })
})