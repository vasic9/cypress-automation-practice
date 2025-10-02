/// <reference types = "cypress"/>

describe("Update Request", () => {

    it("Update existing post via /posts api", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/d438",
            body: {
                title: "Nothing is true, everything is permitted",
                author: "Ezio Auditore"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    });
})