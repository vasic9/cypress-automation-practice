class Autostore_Books_PO {
    addBooksToBasket() {
        globalThis.data.productName.forEach((element) => {
            cy.addToBasket(element);
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}

export default Autostore_Books_PO;