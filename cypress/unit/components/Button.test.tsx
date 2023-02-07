/* eslint-disable testing-library/await-async-query */
import { Button } from 'components';

describe('Button component', () => {
  it('should render button with correct custom style', () => {
    cy.mount(
      <Button onClick={cy.stub()} className='text-red-500'>
        Botão teste
      </Button>
    );

    const button = cy.findByRole('button');
    button.contains('Botão teste');
    button.should('have.css', 'color', 'rgb(239, 68, 68)');
  });

  it('should call function on click', () => {
    const handleClick = cy.stub();
    cy.mount(
      <Button onClick={handleClick} variant='primary'>
        Botão teste
      </Button>
    );

    cy.findByRole('button')
      .click()
      .then(() => expect(handleClick).to.called);
  });
});
