import { Button, InfoText, Loading, Modal } from 'components';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationContainer, animationItem } from 'animations';
import { useDragons } from 'hooks/useDragons';

const Details = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { dragon, loadingDragon } = useDragons();

  return (
    <Modal className='w-full sm:w-3/4 lg:w-1/2 h-inherit lg:pb-3'>
      {loadingDragon ? (
        <Loading />
      ) : (
        <motion.div
          className='flex flex-col lg:flex-row gap-10'
          initial='hidden'
          animate='visible'
          variants={animationContainer}
        >
          {state?.photo && (
            <motion.img
              src={state?.photo}
              alt='Imagem de dragão'
              className='w-72 h-72 sm:w-80 sm:h-80 self-center'
              variants={animationItem}
            />
          )}
          <div className='flex flex-col gap-4 lg:w-1/2'>
            <motion.h2
              className='mainColor font-bold text-2xl font-poppins'
              variants={animationItem}
            >
              Detalhes do dragão.
            </motion.h2>
            <InfoText name='Nome' text={dragon?.name} />
            <InfoText name='Tipo' text={dragon?.type} />
            <InfoText name='História' text={dragon?.histories} />
            <InfoText
              name='Data de criação'
              text={
                dragon?.createdAt &&
                new Date(dragon.createdAt).toLocaleDateString('pt-BR')
              }
            />

            <Button
              type='submit'
              onClick={() => navigate('/dragons')}
              className='w-full sm:w-1/3'
              variant='secondary'
              variants={animationItem}
            >
              Voltar a lista
            </Button>
          </div>
        </motion.div>
      )}
    </Modal>
  );
};

export default Details;
