import { Card, Header, Loading } from 'components';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationContainer } from 'animations';
import { useDragons } from 'hooks/useDragons';

const List = () => {
  const { list, loadingList } = useDragons();

  return (
    <div className='min-h-screen'>
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

export default List;
