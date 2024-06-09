beforeEach(() => {
  cy.openApplet("Compare List");
});

afterEach(() => {
  cy.closeApplet();
});

describe("List A", () => {
  it("Allows direct text entry", () => {
    cy.writeCodeMirror("test", "input", 0);

    cy.readCodeMirror(
      (line) => {
        expect(line).to.eq("test");
      },
      "input",
      0
    );
  });
});

describe("List B", () => {
  it("Allows direct text entry", () => {
    cy.writeCodeMirror("test", "input", 1);

    cy.readCodeMirror(
      (line) => {
        expect(line).to.eq("test");
      },
      "input",
      1
    );
  });
});
