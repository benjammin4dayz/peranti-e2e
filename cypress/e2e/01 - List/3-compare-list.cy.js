import { Main } from "./../../support/peranti/pages";

beforeEach(() => {
  cy.openApplet("Compare List");
});

afterEach(() => {
  cy.closeApplet();
});

describe("List A", () => {
  it("Allows direct text entry", () => {
    cy.get(Main.InputCodeMirror).eq(0).type("test");
    cy.contains("test").should("be.visible");
  });
});

describe("List B", () => {
  it("Allows direct text entry", () => {
    cy.get(Main.InputCodeMirror).eq(1).type("test");
    cy.contains("test").should("be.visible");
  });
});
