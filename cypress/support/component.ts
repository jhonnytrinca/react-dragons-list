import './commands'
import { mount } from 'cypress/react18'
import { renderWithTheme, history } from '../testUtils'
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount,
      getInputByName(target: string): Chainable<JQuery<Node>>
      render(component: React.ReactNode | Element): Chainable<MountReturn>
    }
  }
}

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('getInputByName', (target) =>
  cy.get(`input[name="${target}"]`)
);

Cypress.Commands.add('render', (component) => {

  history.push('/')
  return mount(renderWithTheme(component))
})
