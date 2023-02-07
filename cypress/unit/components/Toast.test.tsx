import toast from 'react-hot-toast';

describe('Toast component', () => {
  it('should render toast with correct messages', () => {
    cy.render(
      <div className='flex gap-10'>
        <button onClick={() => toast.success('Toast de sucesso')}>
          Sucesso
        </button>
        <button onClick={() => toast.error('Toast de erro')}>Erro</button>
      </div>
    );

    cy.findByText('Sucesso')
      .click()
      .then(() => {
        cy.findByText('Toast de sucesso').should('be.visible');
      });

    cy.findByText('Erro')
      .click()
      .then(() => {
        cy.findByText('Toast de erro').should('be.visible');
      });
  });
});
