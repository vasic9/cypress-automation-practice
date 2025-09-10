import Autostore_HomePage_PO from '../../support/pageObjects/test-store/Autostore_Homepage_PO'
import Autostore_Books_PO from '../../support/pageObjects/test-store/Autostore_Books_PO'

/// <reference types = "cypress" />

describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new Autostore_HomePage_PO();
    const autostore_Books_PO = new Autostore_Books_PO();

    before(() => {
        cy.fixture("products").then(function(data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        autoStore_Homepage_PO.visitHomepage();
        autoStore_Homepage_PO.clickOn_Books_Link();
    })
    it('Add specific items to basket', () => {
        autostore_Books_PO.addBooksToBasket();
    })
});