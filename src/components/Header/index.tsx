import { Toggle } from '../Toggle';
import { Button } from 'components';
import { AiOutlinePlus } from 'react-icons/ai';

export const Header = () => (
  <div className='flex justify-center w-full h-14 shadow-md bg-white dark:bg-gray-600'>
    <div className='flex container px-4 max-w-screen-xl mx-auto justify-between items-center'>
      <p className='sm:text-2xl text-blue-700 font-poppins'>
        React Dragons List.
      </p>
      <div className='flex gap-4 sm:gap-8'>
        <Button
          onClick={() => {}}
          className='sm:mr-10 bg-blue-700 text-white text-xs px-2 rounded-full flex items-center gap-2'
        >
          <AiOutlinePlus size={16} />{' '}
          <span className='hidden sm:block pr-2'>Adicionar dragão</span>
        </Button>
        <Toggle />
      </div>
    </div>
  </div>
);

export default Header;
