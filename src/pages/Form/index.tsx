import { Button, Input, Loading, Modal } from 'components';
import { Formik } from 'formik';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { initialValues, validationSchema } from './validation';
import useSWR, { mutate } from 'swr';
import DragonsService from 'service';
import toast from 'react-hot-toast';

const Form = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { data, isLoading } = useSWR(
    id ? `/${id}` : '',
    DragonsService.getById
  );

  const handleSubmit = async (values: any) => {
    try {
      id
        ? await DragonsService.update(values)
        : await DragonsService.create({
            ...values,
            createdAt: new Date().toISOString()
          });
      toast.success(`Dragão ${id ? 'atualizado' : 'cadastrado'} com sucesso!`);
      mutate('/');
      navigate('/');
    } catch (e) {
      toast.error('Ocorreu um erro, tente novamente!');
    }
  };

  return (
    <Modal className='w-full sm:w-3/4 lg:w-3/5 h-inherit'>
      {isLoading ? (
        <Loading />
      ) : (
        <Formik
          initialValues={{ ...initialValues, ...data }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleSubmit, isValid }) => (
            <div className='flex flex-col lg:flex-row gap-10'>
              {state?.photo && (
                <img
                  src={state?.photo}
                  alt='Imagem de dragão'
                  className='w-48 h-48 sm:w-96 sm:h-96 self-center'
                />
              )}
              <div className='flex flex-col gap-10 justify-between w-full'>
                <h2 className='mainColor font-bold text-2xl font-poppins'>
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
                    className='w-full sm:w-1/3'
                    variant='secondary'
                  >
                    Voltar a lista
                  </Button>
                  <Button
                    type='submit'
                    onClick={handleSubmit}
                    disabled={!isValid}
                    className='w-full sm:w-1/3'
                    variant='primary'
                  >
                    {id ? 'Editar' : 'Criar'} dragão
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default Form;
