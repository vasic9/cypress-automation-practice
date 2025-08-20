/// <reference types = "cypress" />

describe("Handle js alerts", () => {
    it("Confirm text in alerts", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        
        cy.get('#button1').click();
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!');
        })
    })
    it("Validate alert box works correctly", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        
        cy.get('#button4').click();
        cy.on('window:confirm', (str) => {
            return true; //false for cancel
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    })
    it("Validate alert box works correctly using stub", () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})