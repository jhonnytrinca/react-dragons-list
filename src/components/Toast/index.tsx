import { Toaster } from 'react-hot-toast';

export const Toast = () => (
  <Toaster
    position='top-center'
    toastOptions={{
      duration: 5000,
      error: {
        iconTheme: { primary: '#fff', secondary: '#ff6767' },
        style: { background: '#ff6767', color: '#fff' }
      },
      success: {
        iconTheme: { primary: '#fff', secondary: '#34cf58' },
        style: { background: '#34cf58', color: '#fff' }
      }
    }}
  />
);
