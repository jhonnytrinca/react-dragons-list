import { Details } from 'pages';

describe('Details page', () => {
  beforeEach(() => {
    cy.render(<Details />);
  });
  it('should render detaiks', () => {
    cy.findByText('Detalhes do dragão.');
    cy.findByText('Nome:');
    cy.findByText('Tipo:');
    cy.findByText('História:');
    cy.findByText('Data de criação:');
    cy.findAllByText('Não informado');

    cy.findByText('Voltar a lista')
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('/'))
      );
  });
});
