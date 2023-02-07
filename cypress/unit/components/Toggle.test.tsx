import { Toggle } from 'components/Toggle';

describe('Toggle component', () => {
  it('should render toggle component and change style on click', () => {
    cy.mount(<Toggle />);

    const toggle = cy.findByTestId('theme-toggle');
    toggle.should('have.css', 'background-color', 'rgb(56, 189, 248)');
    toggle.click();
    toggle.should('have.css', 'background-color', 'rgb(15, 23, 42)');
  });
});
