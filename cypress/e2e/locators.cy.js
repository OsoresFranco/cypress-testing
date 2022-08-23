/// <reference types="Cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating elements with get command", () => {
    //Get all elements by tag name: It specifies quantity
    cy.get("button");

    //Get all elements by class
    cy.get(".btn-with-class")

    //Get all elements by specific classes (attributes)
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

    // Get elements by ID
    cy.get("#btn-with-id")

    //Get elements by Attribute
    cy.get("[type='submit']")

    //Get elements by tag name AND class
    cy.get("button.Elements-btn")

    //Get elements by tag name AND class AND id
    cy.get("button.Elements-btn#btn-with-id")

    //Get elements by tag name AND class AND type attribute
    cy.get("button.Elements-btn[type='submit']")

    //Get all elements by specific data test id
    cy.get("[data-cy='btn-id-1']")

    
  });
});
