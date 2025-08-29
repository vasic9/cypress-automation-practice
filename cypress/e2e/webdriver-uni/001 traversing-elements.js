/// <reference types = "cypress" />

describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  })
  it("children() to get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').scrollIntoView().children('.active').should('contain', 'Contact Us'); //checking closest child element using children()
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get('.traversal-badge').scrollIntoView().closest('ul').should('have.class', 'list-group'); //checking closest ancestor element using closest()
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk'); //checking text for 3rd element using eq()
  });

  it.skip("filter() to retrieve DOM elements that match a specific selector", () => {
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get('.traversal-pagination').scrollIntoView().find('li').find('a').should('have.length', 7); //ensuring there are 7 link elements using find()
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy'); //verifying first name in the table using first()
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott'); //verifying last name in the table using last()
  });

  it.skip("nextAll() to get all of the next sibling DOM elements within elements", () => {
  });

  it.skip("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
  });

  it.skip("not() to remove DOM element(s) from the set of elements", () => {
  });

  it.skip("parent() To get parent DOM element of elements", () => {
  });

  it.skip("parents() to get parents DOM element of elements", () => {
  });

  it.skip("prev() to get the previous sibling DOM element within elements", () => {
  });

  it.skip("prevAll() to get all previous sibling DOM elements within elements", () => {
  });

  it.skip("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
  });

  it.skip("siblings() To get all sibling DOM elements of elements", () => {
  });
});
