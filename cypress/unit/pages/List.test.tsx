import { List } from 'pages';
import DragonsService from 'services';
import { DRAGON_LIST } from '../../mocks';

describe('List page', () => {
  beforeEach(() => {
    cy.stub(DragonsService, 'getAll').returns(DRAGON_LIST);
    cy.render(<List />);
  });

  it('should show list items', () => {
    cy.findAllByTestId('card').should('have.length', 2);
    cy.findByText('#13 - Eragon').should('be.visible');
    cy.findByText('#12 - Toothless').should('be.visible');
  });

  it('should open form to add new', () => {
    cy.findByTestId('add-new-button')
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('form'))
      );
  });

  it('should go to detail', () => {
    cy.findAllByTestId('details-button')
      .eq(0)
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('13'))
      );
  });

  it('should go to detail', () => {
    cy.findAllByTestId('details-button')
      .eq(0)
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('13'))
      );
  });

  it('should go to edit', () => {
    cy.findAllByTestId('edit-button')
      .eq(0)
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('form/13'))
      );
  });

  it('should delete', () => {
    const remove = cy.stub(DragonsService, 'remove');
    cy.findAllByTestId('delete-button')
      .eq(0)
      .click()
      .then(() => expect(remove).to.calledWith('13'));
  });
});
