import { Tooltip } from 'components';

describe('Tooltip component', () => {
  it('should show tooltio on hover', () => {
    cy.mount(
      <Tooltip id='1' content='Tooltip'>
        <div data-testId='tooltip'>Mostrar tooltio</div>
      </Tooltip>
    );

    const tooltip = cy.findByTestId('tooltip');
    tooltip.realHover().then(() => {
      cy.findByText('Tooltip').should('be.visible');
    });
  });
});
