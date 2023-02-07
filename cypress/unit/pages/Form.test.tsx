import { Form } from 'pages';

describe('Form page', () => {
  beforeEach(() => {
    cy.render(<Form />);
  });

  it('should validate fields', () => {
    cy.findByText('Criar dragão').click();
    cy.findAllByText('Campo obrigatório').should('have.length', 2);
  });

  it('should add new dragon', () => {
    cy.findByText('Crie seu dragão.');

    cy.getInputByName('name').type('Dragão');
    cy.getInputByName('type').type('Tipo');
    cy.getInputByName('histories').type('História');

    cy.intercept('POST', '*').as('createDragon');

    cy.findByText('Criar dragão').click();
    cy.wait('@createDragon').then(({ request }) => {
      expect(request.body).to.include({
        name: 'Dragão',
        type: 'Tipo',
        histories: 'História'
      });
    });
    cy.findByText('Dragão cadastrado com sucesso!').should('be.visible');
  });
});
