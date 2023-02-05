import { FormikProvider, useFormik } from 'formik';
import { Button, Input } from 'components';
import { initialValues, IRegisterUser, validationSchema } from './validation';

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
      <div className='flex flex-col gap-10 sm:px-3'>
        <h2 className='mainColor font-bold text-2xl font-poppins'>
          Crie sua conta.
        </h2>
        <Input name='email' placeholder='Informe seu e-mail' label='E-mail' />
        <Input name='password' placeholder='Informe sua senha' label='Senha' />
        <Input
          name='confirmPassword'
          placeholder='Confirme a senha'
          label='Confirme a senha'
        />
        <div className='flex justify-between gap-6'>
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
        </div>
      </div>
    </FormikProvider>
  );
};
