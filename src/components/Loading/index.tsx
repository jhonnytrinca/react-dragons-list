import { FiLoader } from 'react-icons/fi';

export const Loading = () => (
  <div className='w-full h-full flex items-center justify-center mainColor'>
    <FiLoader size={30} className='animate-spin-loading' />
  </div>
);
