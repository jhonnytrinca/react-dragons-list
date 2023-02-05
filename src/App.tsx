import { Toast } from 'components';
import { Home, Form, Login, Details } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
