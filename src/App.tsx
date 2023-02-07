import { PrivateRoute, Toast } from 'components';
import { List, Form, Login, Details } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Toast />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dragons' element={<PrivateRoute />}>
          <Route path='' element={<List />}>
            {['form', 'form/:id'].map((path: string) => (
              <Route path={path} element={<Form />} key={path} />
            ))}
            <Route path=':id' element={<Details />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </>
  );
}

export default App;
