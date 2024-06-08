/**
 *
 * @param {string} name
 * @returns
 */
export const resolveActiveEnv = (key) => {
  const activeEnv = Cypress.env("__active_env");

  try {
    return Cypress.env(activeEnv)[key];
  } catch (e) {
    throw new Error(
      `Cannot set active environment because '${activeEnv}' does not match any environment in cypress.env.json`
    );
  }
};
