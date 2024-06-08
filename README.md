## Cypress e2e Template

A thoughtful project scaffold for writing Cypress e2e tests against multiple environments. I made it because I enjoy the challenge of building reasonable and conceptually scalable project architectures. In the process, I've learned a lot about Cypress and e2e testing!

Full disclaimer: I am not an e2e tester

## Project Structure

At first glance, the excess number of `index.js` files is certainly questionable; especially if one is not accustomed to [barrel exports](https://flaming.codes/en/posts/barrel-files-in-javascript/). Admittedly, the added files do appear unnecessary when presented alongside the empty scaffold.

However, the intent is to follow a **consistent convention**; where `cypress/support/<APP_NAME>` and each folder contained therein, is an isolated [**module**](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/). Code logic lives within its own file(s) inside the module and the sole responsibility of the index is to export the code from that module for use in other modules or tests.

The advantages of this pattern will become more apparent as a project grows.

```
├───cypress
│   ├───e2e                 # Spec Workspace
│   ├───fixtures
│   └───support
│       ├───__template      # App-specific workspace
│       │   ├───env         # Resolved environment variables
│       │   ├───pages       # Page object models
│       │   └───scripts     # App-specific logic and helpers
│       └───global          # Cypress commands and global hooks
└───cypress.env.json        # Environment configuration and secrets
```

## Getting Started

### Installation

1. Clone the repo

   ```bash
   npx degit benjammin4dayz/cypress-e2e-template ez-e2e
   cd ez-e2e
   ```

2. Install dependencies

   ```bash
   npm install
   ```

### Usage

1. Create `cypress.env.json` and configure your testing environment.

2. Start Cypress

   ```bash
   npm start
   ```

3. Write & Run your tests

## Adding New Environment Variables

1. Add the key/value to each environment in [cypress.env.json](./cypress.env.json)

2. Resolve the key if necessary

3. Declare a variable to represent the value(s) in [cypress/support/\_\_template/env/config.js](./cypress/support/__template/env/config.js)

4. Consume the variable in your code

   ```js
   // reference the env module INSIDE cypress/support/<APP_NAME>
   // e.g. when writing site-specific scripts or functions
   import * as env from "./env";

   // --- or ---

   // reference the env module outside cypress/support/<APP_NAME>
   // e.g. directly in test specs
   import { env } from "cypress/support/<APP_NAME>";
   ```

   You might be thinking,

   - "..b-but why not use them directly? Why another file and variable?"

     After creating or changing a key inside `cypress.env.json`, you only need to edit a **single source** to resolve, declare, process, and export the finalized value. As a result, consumers receive consistently structured data that is immediately ready to use.

## Adding New Pages

This template loosely follows a [page object model](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)

1. Create a new page in [cypress/support/<APP_NAME>/pages](./cypress/support/__template/pages/Main.js)

2. Use the `PageHelper` [utility class](./cypress/support/__template/pages/util.js) to create a new page.

   1. Instantiate `PageHelper` with the app's base URL

      ```js
      import * as env from "../env";
      import { PageHelper } from "./util";

      const page = new PageHelper(env.APP_URL);
      ```

   2. Design your page object model

      ```js
      export class Main {
        static HomePage = page.create("/", {
          header: "body > div > h1",
        });
      }
      ```
