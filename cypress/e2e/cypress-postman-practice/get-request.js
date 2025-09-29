/// <reference types = "cypress"/>

describe("Get Request", () => {
    let result;
    it("Validate status code of /posts api", () => {
        result = cy.request("http://localhost:3000/posts"); //request, get HTTP request
        result.its("status").should("equal", 200); //its, get property value on previously yielded subject
    })
    it("Validate correct keys and values", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body)) // converting into correct format for validations
            expect(body[0]).has.property("title", "Example JSON Server");
            expect(body[1]).has.property("author", "New Author");

            body.forEach((item) => {
                expect(item).to.have.all.keys("id", "title", "author");
            });
        })
    })
})