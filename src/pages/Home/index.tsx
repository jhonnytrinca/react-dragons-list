import { Card, Header } from 'components';
import { Outlet } from 'react-router-dom';

const data = [
  {
    createdAt: '2023-02-04T00:53:52.086Z',
    name: 'Fafnir',
    type: 'Water',
    histories: '',
    id: '9'
  },
  {
    createdAt: '2023-02-01T22:49:50.298Z',
    name: 'Test',
    type: 'Test',
    histories: '',
    id: '11'
  },
  {
    createdAt: '2023-02-04T01:05:58.090Z',
    name: 'Valentine',
    type: 'Red',
    histories: 'GOT',
    id: '12'
  },
  {
    createdAt: '2023-02-01T19:57:05.137Z',
    name: 'Fafnir',
    type: 'Fire',
    histories: '',
    id: '13'
  }
];

const Home = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 min-h-screen'>
      <Header />

      <div className='p-2 sm:p-4 max-w-screen-xl mx-auto my-10'>
        <div className='flex gap-4 sm:gap-10 flex-wrap justify-center'>
          {data.map((item) => (
            <Card
              data={item}
              handleDelete={() => {}}
              handleDetails={() => {}}
            />
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
