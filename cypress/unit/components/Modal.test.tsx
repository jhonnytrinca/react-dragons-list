import { Modal } from 'components';

describe('Modal component', () => {
  it('should render modal', () => {
    cy.mount(<Modal className='w-96 h-96'>Teste Modal</Modal>);

    const modal = cy.findByTestId('modal');
    modal.should('have.class', 'w-96 h-96');
    cy.findByText('Teste Modal').should('be.visible');
  });
});
