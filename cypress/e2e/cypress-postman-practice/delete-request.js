/// <reference types = "cypress"/>

describe("Delete Request", () => {

    it("Delete existing post via /posts api", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/5585"
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    });
})