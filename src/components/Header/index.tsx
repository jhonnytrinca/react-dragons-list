import { Toggle } from '../Toggle';
import { Button } from 'components';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeAnimation } from 'animations';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center w-full h-14 shadow-md bgMainColor'>
      <div className='flex container px-4 max-w-screen-xl mx-auto justify-between items-center'>
        <motion.p
          className='sm:text-2xl mainColor font-poppins'
          variants={fadeAnimation}
          initial='hidden'
          animate='visible'
        >
          React Dragons List.
        </motion.p>
        <motion.div
          className='flex gap-4 sm:gap-8'
          variants={fadeAnimation}
          initial='hidden'
          animate='visible'
        >
          <Button
            onClick={() => navigate('/form')}
            variant='tertiary'
            className='overflow-hidden whitespace-nowrap group w-8 sm:hover:w-36 transition-width'
          >
            <AiOutlinePlus size={16} />
            <span className='pr-2 hidden sm:group-hover:block'>
              Adicionar dragão
            </span>
          </Button>
          <Toggle />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
