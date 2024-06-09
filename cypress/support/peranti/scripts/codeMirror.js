import { Main } from "../pages";

export function readCodeMirror(
  callback,
  option = "output",
  codeMirrorIndex = 0
) {
  const container =
    option === "output" ? Main.OutputCodeMirror : Main.InputCodeMirror;

  const _readContents = (target) =>
    cy.get(target).each((el) => {
      [...el.children()].forEach((child, index) =>
        callback(child.innerText, index)
      );
    });

  cy.get(container).then((contents) => {
    if (contents.length > 1) {
      cy.log(`Got ${contents.length} elements. Selecting [${codeMirrorIndex}]`);
      cy.wrap(contents)
        .eq(codeMirrorIndex)
        .then((el) => _readContents(el));
    } else {
      cy.wrap(contents)
        .eq(0)
        .then((el) => _readContents(el));
    }
  });
}

export function writeCodeMirror(value, option = "input", codeMirrorIndex = 0) {
  const container =
    option === "input" ? Main.InputCodeMirror : Main.OutputCodeMirror;

  cy.get(container).then((contents) => {
    if (contents.length > 1) {
      cy.log(`Got ${contents.length} elements. Selecting [${codeMirrorIndex}]`);
      cy.wrap(contents).eq(codeMirrorIndex).type(value);
    } else {
      cy.wrap(contents).eq(0).type(value);
    }
  });
}
