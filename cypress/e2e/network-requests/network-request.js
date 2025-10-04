/// <reference types = "cypress"/>

describe("Network Requests", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/network-requests");
    })

    it("Get Request", () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*",
        },
            {
                body: {
                    postId: 1,
                    id: 1,
                    name: "test name",
                    email: "example@test.com",
                    body: "hello world"
                } // mocked get request
            }).as("getComment");

        cy.get(".network-btn").click();
        cy.wait("@getComment").its("response.statusCode").should("eq", 200); //Validating status code
    })
})