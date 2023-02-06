import '@testing-library/cypress/add-commands'
import '../../node_modules/tailwindcss/tailwind.css'

Cypress.Commands.add('getInputByName', (target) =>
  cy.get(`input[name="${target}"]`)
);