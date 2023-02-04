import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const colorTheme: string = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return { theme, setTheme };
};

export default useDarkMode;
