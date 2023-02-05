import { FiLoader } from 'react-icons/fi';

export const Loading = () => (
  <div className='w-full h-full flex items-center justify-center text-blue-600'>
    <FiLoader size={30} className='animate-spin-loading' />
  </div>
);
