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
 * @param {string} placeholder - texto de placeholder do input
 * @param {string} label - label do input
 *
 */

type InputProps = {
  type?: string;
  icon?: any;
  clearValue?: boolean;
  className?: string;
  name: string;
  placeholder: string;
  label?: string;
};

export const Input = ({
  type = 'text',
  icon: Icon,
  clearValue,
  className,
  name,
  placeholder,
  label
}: InputProps) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const showError = !!meta.error && !!meta.touched;
        return (
          <div className='w-full'>
            <div
              className={`relative flex items-center w-full border-2 bg-white rounded-md py-1 px-4 ${className} ${
                showError
                  ? 'text-red-500 border-red-500 placeholder:text-red-500'
                  : 'text-gray-500 border-gray-400 dark:border-white'
              }`}
            >
              <label className='absolute -top-4 bg-white px-2'>{label}</label>
              {Icon && <Icon size={26} />}
              <input
                type={type}
                onChange={field.onChange}
                placeholder={placeholder}
                {...meta}
                {...(field as any)}
                className='w-full pl-2 placeholder:text-gray-400'
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
              <div className='flex gap-1 items-center text-red-500 text-md'>
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
