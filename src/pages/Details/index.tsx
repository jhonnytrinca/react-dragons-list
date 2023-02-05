import { Button, InfoText, Loading, Modal } from 'components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import DragonsService from 'service';

const Details = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  const { data, isLoading } = useSWR(`/${id}`, DragonsService.getById);

  return (
    <Modal className='w-full sm:w-3/4 lg:w-1/2 h-inherit pb-3'>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex gap-10'>
          {state?.photo && (
            <img
              src={state?.photo}
              alt='Imagem de dragão'
              className='w-80 h-80'
            />
          )}
          <div className='flex flex-col gap-4 w-1/2'>
            <h2 className='text-blue-600 font-bold text-2xl font-poppins'>
              Detalhes do dragão.
            </h2>
            <InfoText name='Nome' text={data?.name} />
            <InfoText name='Tipo' text={data?.type} />
            <InfoText name='História' text={data?.histories} />
            <InfoText
              name='Data de criação'
              text={
                data?.createdAt &&
                new Date(data.createdAt).toLocaleDateString('pt-BR')
              }
            />

            <Button
              type='submit'
              onClick={() => navigate(-1)}
              className='w-full sm:w-1/3 text-gray-400 py-2 rounded-md border border-gray-300 hover:border-gray-500 hover:text-gray-700 disabled:opacity-60 transition-colors '
            >
              Voltar a lista
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Details;
