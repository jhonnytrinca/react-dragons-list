import { Toggle } from '../Toggle';
import { Button } from 'components';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center w-full h-14 shadow-md bgMainColor'>
      <div className='flex container px-4 max-w-screen-xl mx-auto justify-between items-center'>
        <p className='sm:text-2xl mainColor font-poppins'>
          React Dragons List.
        </p>
        <div className='flex gap-4 sm:gap-8'>
          <Button onClick={() => navigate('/form')} variant='tertiary'>
            <AiOutlinePlus size={16} />{' '}
            <span className='hidden sm:block pr-2'>Adicionar dragão</span>
          </Button>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
