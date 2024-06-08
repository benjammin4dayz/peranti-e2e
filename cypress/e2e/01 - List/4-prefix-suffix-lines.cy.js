beforeEach(() => {
  cy.openApplet("Prefix Suffix Lines");
});

afterEach(() => {
  cy.closeApplet();
});

describe("Input", () => {
  it("Allows direct text entry", () => {
    cy.writeCodeMirror("test");
    cy.readCodeMirror((line) => {
      expect(line).to.eq("test");
    });
  });
});
