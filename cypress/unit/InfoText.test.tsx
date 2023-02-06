import { InfoText } from 'components';

describe('InfoText component', () => {
  it('should render with correct info', () => {
    cy.mount(<InfoText name='Nome' text='Texto de exemplo' />);

    cy.findByText('Nome:').should('be.visible');
    cy.findByText('Texto de exemplo').should('be.visible');
  });
});
