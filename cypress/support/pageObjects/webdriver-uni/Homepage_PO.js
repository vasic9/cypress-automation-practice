class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriver_url"));
    }
    clickOn_ContactUs() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    }
}

export default HomePage_PO;