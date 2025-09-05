/// <reference types = "cypress" />

describe("Product title check", () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
    })
    
    it("Chekcs length and accuracy of the title", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').eq(1).invoke('text').as('productTitle');
        cy.get('@productTitle').its('length').should('be.gt', 30);
        cy.get('@productTitle').should('include', 'Eau Parfumee');
    })

    it("Checks number of products and title for cart", () => {
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it("Logs all prices and calculates total amount", () => {
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice'); //getting info through class and storing it into 'var' itemPrice
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('itemSalePrice');

        let itemsTotal = 0;

        cy.get('@itemPrice').then($linkText => {
            let itemPriceTotal = 0;
            let itemPrice = $linkText.split('$'); //spliting text into array based on $ sign
            for (let i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                itemPriceTotal += Number(itemPrice[i]); //converts text into number and adds to total amount
            }
            itemsTotal += itemPriceTotal;
            cy.log('Total of regular prices: ' + itemPriceTotal);
        })

        cy.get('@itemSalePrice').then($linkText => {
            let itemSalePriceTotal = 0;
            let itemSalePrice = $linkText.split('$');
            for (let i = 0; i < itemSalePrice.length; i++) {
                cy.log(itemSalePrice[i]);
                itemSalePriceTotal += Number(itemSalePrice[i])
            }
            itemsTotal += itemSalePriceTotal;
            cy.log('Total of sale items: ' + itemSalePriceTotal);
        })
            .then(() => {
                cy.log('Total amount of all prices: ' + itemsTotal);
                expect(itemsTotal).to.eq(673); //checks total amount
            })
    });
});