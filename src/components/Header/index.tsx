import { Toggle } from '../Toggle';
import { Button } from 'components';
import { IoExitOutline } from 'react-icons/io5';

export const Header = () => (
  <div className='flex justify-center w-full h-14 shadow-md bg-white'>
    <div className='flex container px-4 max-w-screen-xl mx-auto justify-between items-center'>
      <p className='sm:text-2xl text-blue-700 font-poppins'>
        React Dragons List.
      </p>
      <div className='flex gap-4 sm:gap-8'>
        <Toggle />
        <Button
          onClick={() => {}}
          className='flex items-center gap-2 text-gray-400'
        >
          <IoExitOutline size={20} />
          Sair
        </Button>
      </div>
    </div>
  </div>
);

export default Header;
