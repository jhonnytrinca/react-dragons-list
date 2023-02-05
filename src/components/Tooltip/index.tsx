import { ReactNode } from 'react';
import { Tooltip as ReactTooltip, ITooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

/** Componente Actions
 *
 * @param {string | number} id - id único de identificação do item para o tooltip
 * @param {ReactNode | Element} children - item a ser renderizado
 * @param {string} content - conteúdo a ser renderizado dentro do tooltip
 *
 */

type TooltipProps = {
  id: string | number;
  children: ReactNode;
  content: string;
} & ITooltip;

export const Tooltip = ({ id, children, ...rest }: TooltipProps) => (
  <div id={id} className='inline-block'>
    {children}

    <ReactTooltip anchorId={id} {...rest} place='bottom' className='z-[999]' />
  </div>
);
