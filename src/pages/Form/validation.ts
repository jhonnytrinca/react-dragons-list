import * as yup from 'yup';

export type IDragon = {
  createdAt?: string;
  id?: string;
  name: string;
  type: string;
  histories?: string;
}

export const initialValues = {   
  name: '',
  type: '',
  histories: '' 
}

export const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  type: yup.string().required('Campo obrigatório'),
  histories: yup.string().nullable(),
});