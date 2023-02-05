import { Toast } from 'components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('pages/Login'));
const Home = React.lazy(() => import('pages/Home'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Toast />
        <React.Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
