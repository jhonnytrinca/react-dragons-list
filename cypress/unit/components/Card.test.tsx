import { Card } from 'components';
import DragonsService from 'services';
import { DRAGON_UNIT } from '../../mocks';

describe('Card component', () => {
  beforeEach(() => {
    cy.stub(DragonsService, 'getAll').returns([]);
    cy.render(<Card data={DRAGON_UNIT} />);
  });
  it('should show card info', () => {
    cy.findByText('#12 - Toothless').should('be.visible');
  });

  it('should go to edit page', () => {
    cy.findByTestId('edit-button')
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('form/12'))
      );
  });

  it('should go to detail page', () => {
    cy.findByTestId('details-button')
      .click()
      .then(() =>
        cy.location().should((loc) => expect(loc.pathname).include('12'))
      );
  });

  it('should delete item', () => {
    const remove = cy.stub(DragonsService, 'remove');
    cy.findByTestId('delete-button')
      .click()
      .then(() => expect(remove).to.calledWith('12'));
  });
});
