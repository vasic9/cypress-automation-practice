class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriver_url"), { timeout: 6000 });
    }
    clickOn_ContactUs() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ timeout: 8000 });
    }
}

export default HomePage_PO;