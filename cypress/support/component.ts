import './commands'
import { mount } from 'cypress/react18'
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount,
      getInputByName(target: string): Chainable<JQuery<Node>>
    }
  }
}

Cypress.Commands.add('mount', mount)