import { Actions } from 'components';

describe('Actions component', () => {
  beforeEach(() => {});
  it('should show tooltip on hover and render correct colors', () => {
    cy.mount(
      <div className='w-full h-96'>
        <Actions
          handleEdit={cy.stub()}
          handleDelete={cy.stub()}
          handleDetails={cy.stub()}
        />
      </div>
    );
    const editButton = cy.findByTestId('edit-button');
    editButton.realHover().then(() => {
      editButton.should('have.css', 'background-color', 'rgb(101, 163, 13)');
      cy.findByText('Editar').should('be.visible');
    });

    const deleteButton = cy.findByTestId('delete-button');
    deleteButton.realHover().then(() => {
      deleteButton.should('have.css', 'background-color', 'rgb(190, 18, 60)');
      cy.findByText('Excluir').should('be.visible');
    });

    const detailsButton = cy.findByTestId('details-button');
    detailsButton.realHover().then(() => {
      detailsButton.should('have.css', 'background-color', 'rgb(67, 56, 202)');
      cy.findByText('Ver detalhes').should('be.visible');
    });
  });

  it('should call functions on click', () => {
    const handleEdit = cy.stub();
    const handleDelete = cy.stub();
    const handleDetails = cy.stub();

    cy.mount(
      <div className='w-full h-96'>
        <Actions
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleDetails={handleDetails}
        />
      </div>
    );

    cy.findByTestId('edit-button')
      .click()
      .then(() => expect(handleEdit).to.called);

    cy.findByTestId('delete-button')
      .click()
      .then(() => expect(handleDelete).to.called);

    cy.findByTestId('details-button')
      .click()
      .then(() => expect(handleDetails).to.called);
  });
});
