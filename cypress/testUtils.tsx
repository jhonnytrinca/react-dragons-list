import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const renderWithTheme = (children: React.ReactNode | Element) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={children} />
      </Routes>
    </BrowserRouter>
  );
};
