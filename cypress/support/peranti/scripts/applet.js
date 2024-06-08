import { APP_URL } from "../env";
import { Main } from "../pages";

/**
 * Find a sidebar button by searching for its label, then click it
 *
 * @param {string} labelText The text as seen on the label
 */
export function openApplet(labelText) {
  cy.visit(APP_URL);
  cy.get(Main.SidebarItem).each((el) => {
    // each element is expected to contain 2 elements, one <img> and one <div>
    // the div contains text that indicates where the button leads to
    [...el.children()].forEach(
      (child) => child.innerText === labelText && cy.wrap(el).click()
    );
  });
}

export function closeApplet() {
  cy.get(Main.CloseTabButton).click();
}
