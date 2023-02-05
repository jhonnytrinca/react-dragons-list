import { Card, Header, Loading } from 'components';
import { Outlet } from 'react-router-dom';
import useSWR from 'swr';
import DragonsService from 'services';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { animationContainer } from 'animations';
import { useDragons } from 'hooks/useDragons';

const Home = () => {
  const { list, loadingList } = useDragons();

  return (
    <div className='bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <Header />

      <div className='p-2 sm:p-4 max-w-screen-xl mx-auto my-10'>
        {loadingList ? (
          <Loading />
        ) : (
          <motion.div
            className='flex gap-4 sm:gap-10 flex-wrap justify-center'
            variants={animationContainer}
            initial='hidden'
            animate='visible'
          >
            {list.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </motion.div>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
