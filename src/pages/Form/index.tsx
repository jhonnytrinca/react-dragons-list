import { Button, Input, Modal } from 'components';
import { FormikProvider, useFormik } from 'formik';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IDragon, initialValues, validationSchema } from './validation';

const Form = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik<IDragon>({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleCreateUser(values)
  });

  const handleCreateUser = (values: any) => {
    console.log(values);
  };

  return (
    <Modal className='w-full sm:w-3/4 lg:w-3/5 h-inherit'>
      <FormikProvider value={formik}>
        <div className='flex gap-10'>
          {state?.photo && (
            <img
              src={state?.photo}
              alt='Imagem de dragão'
              className='w-96 h-96'
            />
          )}
          <div className='flex flex-col gap-10 justify-between w-full'>
            <h2 className='text-blue-600 font-bold text-2xl font-poppins'>
              {id ? 'Edite' : 'Crie'} seu dragão.
            </h2>
            <Input
              name='name'
              placeholder='Informe o nome do dragão'
              label='Nome *'
            />
            <Input
              name='type'
              placeholder='Informe o tipo do dragão'
              label='Tipo *'
            />
            <Input
              name='histories'
              placeholder='Informe a história a que o dragão faz parte'
              label='História'
            />
            <div className='flex justify-between gap-6'>
              <Button
                type='submit'
                onClick={() => navigate(-1)}
                className='w-full sm:w-1/3 text-gray-400 py-2 rounded-md border border-gray-300 hover:border-gray-500 hover:text-gray-700 disabled:opacity-60 transition-colors '
              >
                Voltar a lista
              </Button>
              <Button
                type='submit'
                onClick={formik.handleSubmit}
                disabled={!formik.isValid}
                className='w-full sm:w-1/3 text-white py-2 rounded-md bg-blue-700 hover:enabled:bg-blue-500 disabled:opacity-60 transition-colors '
              >
                {id ? 'Editar' : 'Criar'} dragão
              </Button>
            </div>
          </div>
        </div>
      </FormikProvider>
    </Modal>
  );
};

export default Form;
