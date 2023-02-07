import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Toast } from 'components';

export const history = createBrowserHistory();

export const renderWithTheme = (children: React.ReactNode | Element) => {
  return (
    <>
      <Toast />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={children} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
