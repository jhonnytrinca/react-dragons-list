import { Card, Header } from 'components';
import { Outlet } from 'react-router-dom';
import useSWR from 'swr';
import DragonsService from 'service';
import toast from 'react-hot-toast';

const Home = () => {
  const { data, isLoading, mutate } = useSWR('/', DragonsService.getAll, {
    fallbackData: []
  });

  const handleDelete = async (id: string) => {
    try {
      await DragonsService.remove(id);
      mutate((list) => list?.filter((item) => item.id !== id));
      toast.success('Dragão removido com sucesso!');
    } catch (e) {
      toast.error('Ocorreu um erro, tente novamente!');
    }
  };

  return (
    <div className='bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <Header />

      <div className='p-2 sm:p-4 max-w-screen-xl mx-auto my-10'>
        <div className='flex gap-4 sm:gap-10 flex-wrap justify-center'>
          {data.map((item) => (
            <Card data={item} handleDelete={handleDelete} />
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
