import { Login } from 'pages';

describe('Login form', () => {
  beforeEach(() => {
    cy.render(<Login />);
  });

  it('should validate fields', () => {
    cy.findByText('Entrar').click();
    cy.findAllByText('Campo obrigatório').should('have.length', 2);

    cy.getInputByName('email')
      .type('aa')
      .then(() =>
        cy.findAllByText('Digite um email válido').should('be.visible')
      );
    cy.getInputByName('password')
      .type('aa')
      .then(() =>
        cy.findAllByText('Mínimo seis caracteres').should('be.visible')
      );
  });

  it('should validate submit with no found user', () => {
    cy.intercept('POST', '*').as('postLogin');

    cy.getInputByName('email').type('1234@1234.com.br');
    cy.getInputByName('password').type('abcdef');

    cy.findByText('Entrar').click();
    cy.wait('@postLogin').then(({ request }) => {
      expect(request.body).to.include({
        email: '1234@1234.com.br',
        password: 'abcdef'
      });
      cy.findByText('Usuário não encontrado').should('be.visible');
    });
  });

  it('should validate submit with success', () => {
    cy.intercept('POST', '*').as('postLogin');

    cy.getInputByName('email').type('123@123.com.br');
    cy.getInputByName('password').type('abcdef');

    cy.findByText('Entrar').click();
    cy.wait('@postLogin').then(({ request }) => {
      expect(request.body).to.include({
        email: '123@123.com.br',
        password: 'abcdef'
      });
      cy.location().should((loc) => expect(loc.pathname).include('dragons'));
    });
  });
});

describe('Register form', () => {
  beforeEach(() => {
    cy.render(<Login />);
    cy.findByText('Cadastre-se').click();
  });

  it('should validate form', () => {
    cy.findByText('Cadastrar').click();
    cy.findAllByText('Campo obrigatório').should('have.length', 3);

    cy.findAllByPlaceholderText('Informe seu e-mail')
      .eq(1)
      .type('aa')
      .then(() =>
        cy.findAllByText('Digite um email válido').should('be.visible')
      );
    cy.findAllByPlaceholderText('Informe sua senha')
      .eq(1)
      .type('aa')
      .then(() =>
        cy.findAllByText('Mínimo seis caracteres').should('be.visible')
      );

    cy.getInputByName('confirmPassword')
      .type('bb')
      .then(() =>
        cy.findAllByText('Mínimo seis caracteres').should('be.visible')
      );
  });

  it('should validate submit with no found user', () => {
    cy.intercept('POST', '*').as('postRegister');

    cy.findAllByPlaceholderText('Informe seu e-mail')
      .eq(1)
      .type('123@123.com.br');

    cy.findAllByPlaceholderText('Informe sua senha').eq(1).type('abcdef');

    cy.getInputByName('confirmPassword').type('abcdef');

    cy.findByText('Cadastrar').click();
    cy.wait('@postRegister').then(({ request }) => {
      expect(request.body).to.include({
        email: '123@123.com.br',
        password: 'abcdef'
      });
    });
  });
});
