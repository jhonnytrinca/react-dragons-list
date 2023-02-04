import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { Button, Input, Toast } from './components';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';

const validationSchema = yup.object().shape({
  teste: yup.string().required('Campo obrigatório')
});

function App() {
  const [value, setValue] = useState('');

  const formik = useFormik({
    initialValues: { teste: '' },
    validationSchema,
    onSubmit: (values) => console.log(values)
  });
  return (
    <FormikProvider value={formik}>
      <Toast />
      <div className='p-8'>
        <Input
          placeholder='Informe'
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name='teste'
        />

        <Button
          onClick={() => {
            toast.error('erro');
            toast.success('sucesso');
          }}
        >
          +
        </Button>
      </div>
    </FormikProvider>
  );
}

export default App;
