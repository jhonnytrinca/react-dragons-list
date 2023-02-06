import { signOut } from 'firebase/auth';
import { useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'services/firebase';

export const useAuth = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const validateToken = useCallback(() => {
    user?.getIdTokenResult().then((result) => {
      sessionStorage.setItem('token', result.token);
    });
    navigate('dragons');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleLogout = useCallback(() => {
    signOut(auth);
    sessionStorage.removeItem('token');
    navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    validateToken,
    handleLogout
  };
};
