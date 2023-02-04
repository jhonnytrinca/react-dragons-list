import * as yup from 'yup';

export type IUser = {
  email: string;
  password: string;
}

export type IRegisterUser = IUser & {
  confirmPassword?: string;
}

export const initialValues = { email: '', password: '' }

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Mínimo seis caracteres')
    .required('Campo obrigatório'),
  confirmPassword: yup
    .string()
    .min(6, 'Mínimo seis caracteres')
    .oneOf([yup.ref('password'), null], 'Senhas não conferem!')
    .required('Campo obrigatório')
});