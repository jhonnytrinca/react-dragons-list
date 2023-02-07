import { animationItem } from 'animations';
import { Actions } from 'components';
import { motion } from 'framer-motion';
import { useDragons } from 'hooks/useDragons';
import { IDragon } from 'pages/Form/validation';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { dragonImages } from './dragonImages';

/** Componente Card
 *
 * @param {Object} data - dados a serem exibidos
 *
 */

type CardProps = {
  data: IDragon;
};

export const Card = ({ data }: CardProps) => {
  const navigate = useNavigate();
  const randomImage = useMemo(() => {
    return dragonImages[Math.floor(Math.random() * dragonImages.length)];
  }, []);
  const { handleDelete } = useDragons();

  return (
    <motion.div
      className='rounded-xl w-40 md:w-48 h-fit flex flex-col gap-2 relative shadow hover:shadow-xl cardMainColor p-3'
      variants={animationItem}
      data-testId='card'
    >
      <img src={randomImage} alt='Imagem de dragão' />
      <div className='overflow-hidden whitespace-nowrap text-center'>
        <span
          className={`text-sm md:text-lg font-semibold min-w-full px-2 uppercase textMainColor font-poppins hover:animateTitle     
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
    </motion.div>
  );
};

export default Card;
