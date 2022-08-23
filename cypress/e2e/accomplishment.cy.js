/// <reference types="Cypress" />

describe("Accomplishment Form", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("Should showcase error if information is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My basketball accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 10 threes in a row"
    );
    cy.contains("Submit Accomplishment").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("Should display validation component if all info is input", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My basketball accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 10 threes in a row"
    );
    cy.get("[type='checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });

  it("Should return back to accomplishment dashboard with empty input fields", () => {
    cy.get("[data-cy='accomplishment-title-input']").type(
      "My basketball accomplishment"
    );
    cy.get("[data-cy='accomplishment-input']").type(
      "I made 10 threes in a row"
    );
    cy.get("[type='checkbox']").click();
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
    cy.contains("button", "Go Back").click();

    cy.contains("h2", "Accomplishment").should("be.visible");
    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
    cy.get("[type='checkbox']").should("not.be.checked");
  });
});
