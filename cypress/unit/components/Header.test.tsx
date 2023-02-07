import { Header } from 'components';

describe('Header component', () => {
  beforeEach(() => {
    cy.render(<Header />);
  });

  it('should render component', () => {
    cy.findByText('React Dragons List.').should('be.visible');
    cy.findByTestId('add-new-button').should('be.visible');
    cy.findByTestId('theme-toggle').should('be.visible');
    cy.findByTestId('logout-button').should('be.visible');
  });

  it('should open form to add new', () => {
    cy.findByTestId('add-new-button')
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('form'))
      );
  });

  it('should toggle theme', () => {
    const toggle = cy.findByTestId('theme-toggle');
    toggle.should('have.css', 'background-color', 'rgb(56, 189, 248)');
    toggle.click();
    toggle.should('have.css', 'background-color', 'rgb(15, 23, 42)');
  });

  it('should logout', () => {
    cy.findByTestId('logout-button')
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('/'))
      );
  });
});
