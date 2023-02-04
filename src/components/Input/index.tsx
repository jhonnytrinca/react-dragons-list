import { InputHTMLAttributes } from 'react';
import { Button } from '../Button';
import { Field, FieldProps, useFormikContext } from 'formik';
import { HiExclamationCircle } from 'react-icons/hi';

/** Componente Input
 *
 * @param {string} type - tipo do imput. Padrão 'text'
 * @param {Icon} icon - icone a ser exibido dentro do input
 * @param {boolean} clearValue - exibe botão para limpar o valor do input
 * @param {string} className - classes adicionais de estilização
 * @param {string} name - nome do campo
 *
 */

type InputProps = {
  icon?: any;
  clearValue?: boolean;
  className?: string;
};

export const Input = ({
  icon: Icon,
  clearValue,
  className,
  type,
  name
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const showError = !!meta.error && !!meta.touched;
        return (
          <div className='flex flex-col w-full'>
            <div
              className={`flex items-center w-full border-2 bg-white rounded-md py-1 px-4 ${className} ${
                showError
                  ? 'text-red-500 border-red-500 placeholder:text-red-500'
                  : 'border-gray-400 dark:border-white'
              }`}
            >
              {Icon && <Icon size={26} className='text-gray-400' />}
              <input
                type={type || 'text'}
                onChange={field.onChange}
                {...meta}
                {...(field as any)}
                className='w-full pl-2'
              />
              {console.log('field', field)}
              {console.log('meta', meta)}
              {!!clearValue && (
                <Button
                  onClick={() => setFieldValue(field.name, '')}
                  className='underline italic text-gray-400 px-3'
                >
                  limpar
                </Button>
              )}
            </div>
            {showError && (
              <div className='flex gap-1 items-center text-red-500 p-2 text-md'>
                <HiExclamationCircle size={20} />
                <span>{meta.error}</span>
              </div>
            )}
          </div>
        );
      }}
    </Field>
  );
};
