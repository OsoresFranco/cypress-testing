/// <reference types="Cypress" />

describe("Accomplishment Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("Should display innapropiate content error when text includes giraffe", () => {
    cy.get("[placeholder='Title']").type("This is my accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe");
    cy.get("[data-cy=accomplishment-checkbox]").click();
    cy.get(".Accomplishment-btn").click();
    cy.get("[data-cy=accomplishment-checkbox]").should("be.visible");
  });

  it("Should display innapropiate content error when text includes giraffe with MOCK data", () => {
    cy.intercept("POST", "http://localhost:4000", (req)=>{
    req.reply((res)=>{
        res.send({
            msg:"Your content is not appropiate"
        })
    })
    })

    cy.get("[placeholder='Title']").type("This is my accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe");
    cy.get("[data-cy=accomplishment-checkbox]").click();
    cy.get(".Accomplishment-btn").click();
    cy.get("[data-cy=accomplishment-checkbox]").should("be.visible");
  });
});
