import { FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Button, Input, Modal } from 'components';
import { RegisterForm } from './RegisterForm';
import { IUser, initialValues, validationSchema } from './validation';
import { motion } from 'framer-motion';
import { animationContainer, animationItem, fadeAnimation } from 'animations';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginDragon from 'images/login-dragon.svg';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebase';
import toast from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const { validateToken } = useAuth();

  const formik = useFormik<IUser>({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleLogin(values)
  });

  const handleLogin = (values: IUser) => {
    const { email, password } = values;
    signInWithEmailAndPassword(email, password).then((res) => {
      !!res && validateToken();
      formik.setSubmitting(false);
    });
  };

  useEffect(() => {
    if (!loading && error) {
      toast.error(
        error?.message?.includes('wrong-password')
          ? 'Senha inválida'
          : error?.message?.includes('user-not-found')
          ? 'Usuário não encontrado'
          : 'Erro na autenticação, tente novamente'
      );
    }
  }, [error, loading]);

  return (
    <>
      <FormikProvider value={formik}>
        <motion.div
          className='flex w-screen h-screen overflow-hidden relative lg:justify-end bgMainColor'
          initial='hidden'
          animate='visible'
          variants={animationContainer}
          key={'login'}
        >
          <motion.img
            src={loginDragon}
            className='absolute -bottom-6 lg:left-40 w-full lg:w-[45%] opacity-40 lg:opacity-100'
            variants={fadeAnimation}
          />

          <div className='w-full lg:w-3/5 lg:px-32 py-14 sm:py-0 flex flex-col gap-12 sm:justify-center items-center z-10'>
            <motion.div className='w-4/5 lg:w-2/3' variants={animationItem}>
              <p className='w-4/5 text-4xl sm:text-7xl mainColor font-poppins'>
                React Dragons List.
              </p>
            </motion.div>
            <div className='flex flex-col gap-8 items-center w-4/5 lg:w-2/3'>
              <Input
                name='email'
                placeholder='Informe seu e-mail'
                label='E-mail'
              />
              <Input
                name='password'
                placeholder='Informe sua senha'
                label='Senha'
                type={showPassword ? 'text' : 'password'}
                icon={showPassword ? AiOutlineEyeInvisible : AiOutlineEye}
                onClickIcon={() => setShowPassword(!showPassword)}
              />
              <Button
                type='submit'
                onClick={formik.handleSubmit}
                disabled={!formik.isValid || formik.isSubmitting}
                className='w-full'
                variant='primary'
                variants={animationItem}
              >
                {loading ? 'Carregando...' : 'Entrar'}
              </Button>
              <motion.p
                className='w-full flex justify-center textMainColor gap-2 bgMainColor rounded px-4 py-2'
                variants={animationItem}
              >
                Não possui conta?
                <Button
                  onClick={() => setOpenModal(true)}
                  className='underline font-semibold'
                >
                  Cadastre-se
                </Button>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </FormikProvider>
      {openModal && (
        <Modal className='w-full sm:w-3/4 lg:w-1/3 h-inherit'>
          <RegisterForm closeModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default Login;
