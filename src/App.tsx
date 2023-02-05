import { Toast } from 'components';
import { Home, Form, Login, Details } from 'pages';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <Toast />
      <Routes>
        <Route path='/' element={<Home />}>
          {['form', 'form/:id'].map((path: string) => (
            <Route path={path} element={<Form />} />
          ))}
          <Route path=':id' element={<Details />} />
        </Route>

        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
