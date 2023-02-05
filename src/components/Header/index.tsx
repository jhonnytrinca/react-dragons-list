import { Toggle } from '../Toggle';
import { Button } from 'components';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeAnimation } from 'animations';
import { MdLogout } from 'react-icons/md';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

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
          className='flex gap-4 sm:gap-5'
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
          <Button
            onClick={handleLogout}
            className='textMainColor gap-2 text-sm'
          >
            <MdLogout />
            <p>Sair</p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
