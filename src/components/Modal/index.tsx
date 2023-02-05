import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

/** Componente Input
 *
 * @param {ReactNode | Element} children - item a ser renderizado dentro do botão
 * @param {string} className - classes adicionais de estilização
 *
 */

type ModalProps = {
  children: ReactNode;
  className: string;
};

export const Modal = ({ className, children }: ModalProps) => {
  return createPortal(
    <div className='flex items-center justify-center bg-black/50 z-[999] h-full w-full fixed top-0 left-0'>
      <div
        className={`bgMainColor p-10 rounded-xl flex flex-col shadow-lg ${
          className ?? ''
        }`}
      >
        {children}
      </div>
    </div>,

    document.getElementById('root') as HTMLElement
  );
};
