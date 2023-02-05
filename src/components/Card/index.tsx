import { Actions } from 'components';
import { IDragon } from 'pages/Form/validation';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { dragonImages } from './dragonImages';

/** Componente Card
 *
 * @param {Object} data - dados a serem exibidos
 * @param {Function} handleDelete - função para remoção do item
 *
 */

type CardProps = {
  data: IDragon;
  handleDelete: (id: string) => void;
};

export const Card = ({ data, handleDelete }: CardProps) => {
  const navigate = useNavigate();
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
            handleEdit={() =>
              navigate(`form/${data?.id}`, { state: { photo: randomImage } })
            }
            handleDelete={() => handleDelete(data.id!)}
            handleDetails={() =>
              navigate(`${data?.id}`, { state: { photo: randomImage } })
            }
            id={data?.id}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
