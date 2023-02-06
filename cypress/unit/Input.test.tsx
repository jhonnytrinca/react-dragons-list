import { Input } from 'components';
import { InputProps } from 'components/Input';
import * as yup from 'yup';
import { useFormik, FormikProvider } from 'formik';

const Component = (props: InputProps) => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(5, 'Necessário ao menos cinco caracteres')
      .required('Campo obrigatório')
  });

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema,
    onSubmit: () => {}
  });

  return (
    <FormikProvider value={formik}>
      <Input {...props} />
      <button onClick={() => formik.handleSubmit()}>Enviar</button>
    </FormikProvider>
  );
};

describe('Input component', () => {
  beforeEach(() => {
    cy.mount(
      <Component name='name' placeholder='Informe o nome' label='Nome' />
    );
  });

  it('should render input', () => {
    cy.findByText('Nome').should('be.visible');
    cy.findByPlaceholderText('Informe o nome');
    cy.getInputByName('name').type('Valor');
  });

  it('should validate required field', () => {
    cy.findByRole('button').click();
    cy.findByText('Campo obrigatório');
  });

  it('should validate min characters', () => {
    cy.getInputByName('name').type('a');
    cy.findByRole('button').click();
    cy.findByText('Necessário ao menos cinco caracteres');
  });
});
