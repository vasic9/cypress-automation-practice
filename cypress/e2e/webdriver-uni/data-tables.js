/// <reference types = "cypress" />

describe("Handling data", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  })
  it("Calculate total age of users, plus assertion", () => {
    let userDetails = [];
    let userAge = 0;
    cy.get('#thumbnail-1 td').each(($el, index, $list) => { //selecting the table
        userDetails[index] = $el.text(); //extracting text into array
    }).then(() => {
        for(let i = 0; i < userDetails.length; i++){ //looping through the array and extracting numbers (age)
            if(Number(userDetails[i])) {
                userAge += Number(userDetails[i]);
            }
            cy.log(userDetails[i]);
        }
        cy.log("Total age: " + userAge);
        expect(userAge).to.eq(322);
    })
  });
  it.only("Assert the age of the user based on the name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => { //n-th(2) child of td are last names
        const text = $el.text(); //extracting text from last names
        if (text.includes('Woods')) { 
            cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next() //using next for age column
            .then(function(age) {
                const userAge = age.text(); //storing age text in const
                expect(userAge).to.equal("80");
            })
        }
    })
  })
})