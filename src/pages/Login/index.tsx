import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { Button, Input, Modal } from 'components';
import { ReactComponent as DragonLogo } from 'images/login-dragon.svg';
import { RegisterForm } from './RegisterForm';
import { IUser, initialValues, validationSchema } from './validation';

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const formik = useFormik<IUser>({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleLogin(values)
  });

  const handleLogin = (values: any) => {
    console.log(values);
  };

  return (
    <FormikProvider value={formik}>
      <div className='flex w-screen h-screen overflow-hidden relative lg:justify-end bgMainColor'>
        <DragonLogo className='absolute -bottom-6 lg:left-40 w-full lg:w-[45%] opacity-40 lg:opacity-100' />

        <div className='w-full lg:w-3/5 lg:px-32 py-14 sm:py-0 flex flex-col gap-12 sm:justify-center items-center z-10'>
          <div className='w-4/5 lg:w-2/3'>
            <p className='w-4/5 text-4xl sm:text-7xl mainColor font-poppins'>
              React Dragons List.
            </p>
          </div>
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
            />
            <Button
              type='submit'
              onClick={formik.handleSubmit}
              disabled={!formik.isValid}
              className='w-full'
              variant='primary'
            >
              Entrar
            </Button>
            <p className='w-full flex justify-center textMainColor gap-2 bgMainColor rounded px-4 py-2'>
              Não possui conta?
              <Button
                onClick={() => setOpenModal(true)}
                className='underline font-semibold'
              >
                Cadastre-se
              </Button>
            </p>
          </div>
        </div>
      </div>

      {openModal && (
        <Modal className='w-full sm:w-3/4 lg:w-1/3 h-inherit'>
          <RegisterForm closeModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </FormikProvider>
  );
};

export default Login;
