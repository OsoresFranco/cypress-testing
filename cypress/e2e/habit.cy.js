/// <reference types="Cypress" />

describe("Habit Dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("Should display modal when add button is clicked", () => {
    cy.contains("button", "Add").click();
    cy.get(".modal-title").contains("Add a new habit").should("be.visible");
  });

  it("Should display habit card when new habit is added", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("Drink more Water");
    cy.contains("Save Changes").click();
    cy.contains("Drink more Water")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container"); // .and is used for not repetting .should or the last assertion
  });

  it("Should toggle icon when habit card is clicked", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("Drink more Water");
    cy.contains("Save Changes").click();
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible");
    cy.contains("Drink more Water").click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible");
  });

  
});
