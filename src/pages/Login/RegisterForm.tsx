/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormikProvider, useFormik } from 'formik';
import { Button, Input } from 'components';
import {
  initialValues,
  IRegisterUser,
  registerValidationSchema
} from './validation';
import { animationContainer, animationItem } from 'animations';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebase';
import toast from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';

type Props = {
  closeModal: () => void;
};

export const RegisterForm = ({ closeModal }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [createUserWithEmailAndPassword, _, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const { validateToken } = useAuth();

  const formik = useFormik<IRegisterUser>({
    initialValues: { ...initialValues, confirmPassword: '' },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => handleCreateUser(values)
  });

  const handleCreateUser = (values: IRegisterUser) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(email, password).then((res) => {
      !!res && validateToken();
      formik.setSubmitting(false);
    });
  };

  useEffect(() => {
    if (!loading && error) {
      toast.error(
        error.message.includes('email-already-in-use')
          ? 'E-mail já cadastrado'
          : 'Ocorreu um erro, tente novamente'
      );
    }
  }, [error, loading]);

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
        <Input
          name='password'
          placeholder='Informe sua senha'
          label='Senha'
          type={showPassword ? 'text' : 'password'}
          icon={showPassword ? AiOutlineEyeInvisible : AiOutlineEye}
          onClickIcon={() => setShowPassword(!showPassword)}
        />
        <Input
          name='confirmPassword'
          placeholder='Confirme a senha'
          label='Confirme a senha'
          type={showConfirmPassword ? 'text' : 'password'}
          icon={showConfirmPassword ? AiOutlineEyeInvisible : AiOutlineEye}
          onClickIcon={() => setShowConfirmPassword(!showConfirmPassword)}
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
            disabled={!formik.isValid || formik.isSubmitting}
            className='w-full sm:w-1/3'
            variant='primary'
          >
            {loading ? 'Carregando...' : 'Cadastrar'}
          </Button>
        </motion.div>
      </motion.div>
    </FormikProvider>
  );
};
