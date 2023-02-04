import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

/** Componente Input
 *
 * @param {ReactNode | Element} children - item a ser renderizado dentro do botão
 * @param {boolean} isOpen - indicativo para exibição do modal
 * @param {string} className - classes adicionais de estilização
 *
 */

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  className: string;
};

export const Modal = ({ isOpen, className, children }: ModalProps) => {
  return createPortal(
    <>
      {isOpen && (
        <div className='flex items-center justify-center bg-black/50 z-[999] h-full w-full fixed top-0 left-0'>
          <div
            className={`bg-white p-10 rounded-xl flex flex-col ${
              className ?? ''
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById('root') as HTMLElement
  );
};
