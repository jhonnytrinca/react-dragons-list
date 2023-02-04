import useDarkMode from 'hooks/useDarkMode';
import { motion } from 'framer-motion';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

export const Toggle = () => {
  const { setTheme, theme } = useDarkMode();
  const darkTheme = theme === 'dark';

  return (
    <div
      className={`w-12 h-8 cursor-pointer flex items-center rounded-full p-1 transition-colors ${
        darkTheme ? 'justify-end bg-slate-900' : 'justify-start bg-sky-400'
      } `}
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      <motion.div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          darkTheme ? 'bg-slate-700' : 'bg-sky-200'
        }`}
        layout
        transition={spring}
      >
        {darkTheme ? (
          <BsMoonStarsFill className='text-gray-100' />
        ) : (
          <BsSunFill className='text-yellow-500' />
        )}
      </motion.div>
    </div>
  );
};
