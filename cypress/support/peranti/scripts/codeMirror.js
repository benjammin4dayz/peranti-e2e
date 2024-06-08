import { Main } from "../pages";

export function readCodeMirror(callback, variant = "output") {
  const target =
    variant === "output" ? Main.OutputCodeMirror : Main.InputCodeMirror;

  // new lines in the code mirror are each within their own divs
  cy.get(target).each((el) => {
    [...el.children()].forEach((child, index) =>
      callback(child.innerText, index)
    );
  });
}

export function writeCodeMirror(value, variant = "input") {
  const target =
    variant === "input" ? Main.InputCodeMirror : Main.OutputCodeMirror;

  cy.get(target).type(value);
}
