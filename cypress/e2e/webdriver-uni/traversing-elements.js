/// <reference types = "cypress" />

describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("/");
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

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1'); //filters active button, checks text
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

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3'); //Looking at next elements using nextAll()
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('#coffee').nextUntil('#sugar'); //Selecting all elements until the specified one
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled'); //removes element with 'disabled' class from selected and asserts other elements don't have 'disabled' class
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'); //checks text of a parent element
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get('.traversal-cite').parents().should('match', 'blockquote'); //checks one of the parents to be blockquote tag
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    cy.get('#sugar').prev().contains('Espresso'); //checks previous element's text
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get('.sales').prevAll().should('have.length', 2); //checks length of all elements prior to selected element
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5); //checks lenght of all elements until selected id
  });

  it("siblings() To get all sibling DOM elements of elements", () => {
    cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3); //checks length of sibling elements of a selected element
  });
});
