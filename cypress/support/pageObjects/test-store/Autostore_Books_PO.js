class Autostore_Books_PO {
    addBooksToBasket() {
        globalThis.data.productName.forEach((element) => {
            cy.addToBasket(element).then(() => {
                //debugger; //pauses test while dev tool is opened in browser
            })
        })
        cy.get('.dropdown-toggle > .fa').click().debug();
    }
}

export default Autostore_Books_PO;