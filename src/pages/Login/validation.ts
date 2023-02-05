import * as yup from 'yup';

export type IUser = {
  email: string;
  password: string;
}

export type IRegisterUser = IUser & {
  confirmPassword?: string;
}

export const initialValues = { email: '', password: '' }

const loginSchema = {
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Mínimo seis caracteres')
    .required('Campo obrigatório'),
}

export const validationSchema = yup.object().shape(loginSchema);

export const registerValidationSchema = yup.object().shape({
  ...loginSchema,
  confirmPassword: yup
    .string()
    .min(6, 'Mínimo seis caracteres')
    .oneOf([yup.ref('password'), null], 'Senhas não conferem!')
    .required('Campo obrigatório')
})