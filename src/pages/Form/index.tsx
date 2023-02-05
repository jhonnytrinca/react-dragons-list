import { Button, Input, Loading, Modal } from 'components';
import { Formik } from 'formik';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { initialValues, validationSchema } from './validation';
import { motion } from 'framer-motion';
import { animationContainer, animationItem } from 'animations';
import { useDragons } from 'hooks/useDragons';

const Form = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { dragon, loadingDragon, handleSubmit } = useDragons();
  const navigate = useNavigate();

  return (
    <Modal className='w-full sm:w-3/4 lg:w-3/5 h-inherit'>
      {loadingDragon ? (
        <Loading />
      ) : (
        <Formik
          initialValues={{ ...initialValues, ...dragon }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleSubmit, isValid, isSubmitting }) => (
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
                  className='w-48 h-48 sm:w-96 sm:h-96 self-center'
                  variants={animationItem}
                />
              )}
              <div className='flex flex-col gap-10 justify-between w-full'>
                <motion.h2
                  className='mainColor font-bold text-2xl font-poppins'
                  variants={animationItem}
                >
                  {id ? 'Edite' : 'Crie'} seu dragão.
                </motion.h2>
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
                <motion.div
                  className='flex justify-between gap-6'
                  variants={animationItem}
                >
                  <Button
                    type='submit'
                    onClick={() => navigate('/')}
                    className='w-full sm:w-1/3'
                    variant='secondary'
                  >
                    Voltar a lista
                  </Button>
                  <Button
                    type='submit'
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                    className='w-full sm:w-1/3'
                    variant='primary'
                  >
                    {isSubmitting
                      ? 'Carregando...'
                      : id
                      ? 'Editar dragão'
                      : 'Criar dragão'}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default Form;
