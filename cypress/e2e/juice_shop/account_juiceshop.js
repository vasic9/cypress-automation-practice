/// <reference types = "cypress" />

describe("Juice Shop Account", () => {
    let randomString = Math.random().toString(36).substring(2);
    const email = "auto_" + randomString + "@gmail.com";
    const password = "Password1"

    describe("UI tests", () => {
        beforeEach(() => {
            cy.visit("http://localhost:3000");
            //cy.get(".cdk-overlay-backdrop").click(-50, -50, {force: true}); //popup is inconsistent
            cy.get("#navbarAccount").click();
            cy.get("#navbarLoginButton").click();
        })

        it("Create account", () => {
            cy.get("#newCustomerLink").contains("Not yet a customer?").click();
            cy.get('#emailControl').type(email);
            cy.get('#passwordControl').type(password);
            cy.get('#repeatPasswordControl').type(password);
            cy.get('#mat-mdc-form-field-label-8 mat-label').click();
            cy.get('#mat-option-3 span.mdc-list-item__primary-text').click();
            cy.get('#securityAnswerControl').type('HelloWorld');
            cy.get('#registerButton').click();
        })
        it("Verify Login", () => {
            cy.get("#email").type(email);
            cy.get("#password").type(password);
            cy.get('#loginButton').click();
            cy.get('.fa-layers-counter').contains(0);
        })
    })
    describe("API tests", () => {
        it("Validate login via post api", () => {
            const userLogin = {
                "email": email,
                "password": password
            }
            cy.request("POST", "http://localhost:3000/rest/user/login", userLogin)
                .then(response => {
                    expect(response.status).to.eq(200);
                })
        });
    })
})