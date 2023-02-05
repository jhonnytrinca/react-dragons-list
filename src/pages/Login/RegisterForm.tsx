import { FormikProvider, useFormik } from 'formik';
import { Button, Input } from 'components';
import { initialValues, IRegisterUser, validationSchema } from './validation';
import { animationContainer, animationItem } from 'animations';
import { motion } from 'framer-motion';

type Props = {
  closeModal: () => void;
};

export const RegisterForm = ({ closeModal }: Props) => {
  const formik = useFormik<IRegisterUser>({
    initialValues: { ...initialValues, confirmPassword: '' },
    validationSchema,
    onSubmit: (values) => handleCreateUser(values)
  });

  const handleCreateUser = (values: any) => {
    console.log(values);
    closeModal();
  };

  return (
    <FormikProvider value={formik}>
      <motion.div
        className='flex flex-col gap-10 sm:px-3'
        initial='hidden'
        animate='visible'
        variants={animationContainer}
      >
        <motion.h2
          className='mainColor font-bold text-2xl font-poppins'
          variants={animationItem}
        >
          Crie sua conta.
        </motion.h2>
        <Input name='email' placeholder='Informe seu e-mail' label='E-mail' />
        <Input name='password' placeholder='Informe sua senha' label='Senha' />
        <Input
          name='confirmPassword'
          placeholder='Confirme a senha'
          label='Confirme a senha'
        />
        <motion.div
          className='flex justify-between gap-6'
          variants={animationItem}
        >
          <Button
            type='submit'
            onClick={closeModal}
            className='w-full sm:w-1/3'
            variant='secondary'
          >
            Voltar
          </Button>
          <Button
            type='submit'
            onClick={formik.handleSubmit}
            disabled={!formik.isValid}
            className='w-full sm:w-1/3'
            variant='primary'
          >
            Cadastrar
          </Button>
        </motion.div>
      </motion.div>
    </FormikProvider>
  );
};
