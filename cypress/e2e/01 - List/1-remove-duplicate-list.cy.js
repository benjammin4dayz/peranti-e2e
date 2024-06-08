const SAMPLE_TEXT = "Hello Peranti";

beforeEach(() => {
  cy.openApplet("Remove Duplicate List");
});

afterEach(() => {
  cy.closeApplet();
});

describe("Input", () => {
  it("Allows direct text entry", () => {
    cy.writeCodeMirror(SAMPLE_TEXT);
    cy.readCodeMirror((line) => {
      expect(line).to.eq(SAMPLE_TEXT);
    });
  });
});

describe("Output", () => {
  it("Does not allow direct text entry", () => {
    cy.writeCodeMirror(SAMPLE_TEXT, "output");
    cy.readCodeMirror((line) => {
      expect(line).to.eq("\n");
    }, "input");
  });

  it("Removes duplicate lines from input", () => {
    cy.writeCodeMirror((SAMPLE_TEXT + "\n").repeat(5));

    const existing = new Set();
    cy.readCodeMirror((line) => {
      if (existing.has(line)) {
        cy.wrap(line).should("not.exist");
      } else {
        existing.add(line);
      }
    });
  });
});
