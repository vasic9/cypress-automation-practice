/// <reference types = "cypress"/>

describe("Post Request", () => {

    let postTitles = new Array();
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1); //adding new random strings with each new test

    it("Validate new post via /posts api", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                title: randomTitle,
                author: "Obi Wan"
            }
        }).then(response => {
            expect(response.status).to.eq(201); //confirm post
        })
    });

    it("Confirm latest title", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            body.forEach((item) => {
                postTitles.push(item["title"]); //adding titles to new array
            });
        }).then(() => {
            let latestPost = postTitles[postTitles.length - 1]
            expect(latestPost).to.eq(randomTitle); //validating latest title
        })
    })
});