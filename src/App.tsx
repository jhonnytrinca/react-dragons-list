import { Toast } from 'components';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('pages/Login'));
const Home = React.lazy(() => import('pages/Home'));
const Form = React.lazy(() => import('pages/Form'));
const Details = React.lazy(() => import('pages/Details'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Toast />
        <React.Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Home />}>
              {['form', 'form/:id'].map((path: string) => (
                <Route path={path} element={<Form />} />
              ))}
              <Route path=':id' element={<Details />} />
            </Route>

            <Route path='login' element={<Login />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
