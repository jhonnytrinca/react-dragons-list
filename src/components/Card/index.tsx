import { Actions } from 'components';
import { useMemo } from 'react';
import { dragonImages } from './dragonImages';

/** Componente Card
 *
 * @param {Object} data - dados a serem exibidos
 * @param {Function} handleEdit - função para edição do item
 * @param {Function} handleDelete - função para remoção do item
 * @param {Function} handleDetails - função para ver detalhes do item
 *
 */

type CardProps = {
  data: {
    createdAt: string;
    name: string;
    type: string;
    histories?: string;
    id: string;
  };
  handleEdit: () => void;
  handleDelete: () => void;
  handleDetails: () => void;
};

export const Card = ({
  data,
  handleEdit,
  handleDelete,
  handleDetails
}: CardProps) => {
  const randomImage = useMemo(() => {
    return dragonImages[Math.floor(Math.random() * dragonImages.length)];
  }, []);

  return (
    <>
      <div className='rounded-xl w-40 md:w-48 h-fit flex flex-col gap-2 relative hover:transition-opacity shadow-xl hover:scale-105	bg-white dark:bg-gray-600 p-3'>
        <img src={randomImage} alt='Imagem de dragão' />
        <div className='overflow-hidden whitespace-nowrap text-center'>
          <span
            className={`text-sm md:text-lg font-semibold min-w-full px-2 uppercase dark:text-white font-poppins hover:animateTitle     
            `}
          >
            #{data?.id} - {data?.name || ''}
          </span>
        </div>

        <div className='self-center pl-2 pr-4 md:px-3'>
          <Actions
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleDetails={handleDetails}
            id={data?.id}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
