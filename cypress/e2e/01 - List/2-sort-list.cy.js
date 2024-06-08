beforeEach(() => {
  cy.openApplet("Sort List");
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

describe("Output", () => {
  it("Does not allow direct text entry", () => {
    cy.writeCodeMirror("test", "output");
    cy.readCodeMirror((line) => {
      expect(line).to.eq("\n");
    });
  });

  it("Sorts the list alphabetically", () => {
    const contents = ["oranges", "apples", "mangos", "bananas"];
    cy.writeCodeMirror(contents.join("\n"));
    cy.readCodeMirror((line, index) => {
      const sorted = contents.sort((a, b) => a.localeCompare(b));
      expect(line).to.eq(sorted[index]);
    });
  });
});
