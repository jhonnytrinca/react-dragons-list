import { motion, AnimationProps, HoverHandlers } from 'framer-motion';
import { ReactNode } from 'react';

/** Componente Button
 *
 * @param {ReactNode | Element} children - item a ser renderizado dentro do botão
 * @param {Function} onClick - função de retorno ao clicar no botão
 * @param {string} className - classes adicionais de estilização
 * @param {string} type - indicador de tipo do botão. Padrão: 'button'
 * @param {boolean} disabled - boolean que informa se o botão está desativado ou não
 * @param {string} variant - variantes com estilos pré-definidos para o botão
 *
 */

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

const variantStyle = {
  primary: 'primaryButton',
  secondary: 'secondaryButton',
  tertiary: 'tertiaryButton'
};

export const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  disabled,
  variant,
  ...rest
}: ButtonProps & AnimationProps & HoverHandlers) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center justify-center ${className} ${
      !!variant ? variantStyle[variant] : ''
    } `}
    type={type}
    disabled={disabled}
    {...rest}
  >
    {children}
  </motion.button>
);
