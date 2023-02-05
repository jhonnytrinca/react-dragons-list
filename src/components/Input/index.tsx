import { animationItem } from 'animations';
import { Field, FieldProps } from 'formik';
import { motion } from 'framer-motion';
import { HiExclamationCircle } from 'react-icons/hi';

/** Componente Input
 *
 * @param {string} type - tipo do imput. Padrão 'text'
 * @param {Icon} icon - icone a ser exibido dentro do input
 * @param {Function} onClickIcon - função ao ser chamada ao clicar no ícone
 * @param {string} className - classes adicionais de estilização
 * @param {string} name - nome do campo
 * @param {string} placeholder - texto de placeholder do input
 * @param {string} label - label do input
 *
 */

type InputProps = {
  type?: string;
  icon?: any;
  onClickIcon?: () => void;
  className?: string;
  name: string;
  placeholder: string;
  label?: string;
};

export const Input = ({
  type = 'text',
  icon: Icon,
  className,
  name,
  placeholder,
  onClickIcon,
  label
}: InputProps) => (
  <Field name={name}>
    {({ field, meta }: FieldProps) => {
      const showError = !!meta.error && !!meta.touched;
      return (
        <motion.div className='w-full' variants={animationItem}>
          <div
            className={`relative flex items-center w-full border-2 bgMainColor rounded-md py-1 px-4 ${className} ${
              showError
                ? 'text-red-500 border-red-500 placeholder:text-red-500 dark:text-red-300 dark:border-red-300 dark:placeholder:text-red-300'
                : 'textMainColor border-gray-400 dark:border-gray-100'
            }`}
          >
            <label className='absolute -top-4 bgMainColor px-2'>{label}</label>
            {Icon && <Icon size={26} onClick={onClickIcon} />}
            <input
              type={type}
              onChange={field.onChange}
              placeholder={placeholder}
              {...meta}
              {...(field as any)}
              className='w-full pl-2 bgMainColor placeholder:text-gray-400'
            />
          </div>
          {showError && (
            <div className='flex gap-1 items-center text-red-500 dark:text-red-300 text-md'>
              <HiExclamationCircle size={20} />
              <span>{meta.error}</span>
            </div>
          )}
        </motion.div>
      );
    }}
  </Field>
);
