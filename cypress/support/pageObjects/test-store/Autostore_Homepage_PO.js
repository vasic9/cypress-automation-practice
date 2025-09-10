class Autostore_HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("teststore_url"))
    }
    clickOn_Books_Link() {
        cy.get("a[href*='product/category&path=']").contains("Books").click();
    }
}

export default Autostore_HomePage_PO;