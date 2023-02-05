import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDp0uIrUcmBdp4AT834z8zr9BGDQlWH8uE',
  authDomain: 'react-dragons.firebaseapp.com',
  projectId: 'react-dragons',
  storageBucket: 'react-dragons.appspot.com',
  messagingSenderId: '643438132787',
  appId: '1:643438132787:web:07134a1756fa1865e0ad46'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
