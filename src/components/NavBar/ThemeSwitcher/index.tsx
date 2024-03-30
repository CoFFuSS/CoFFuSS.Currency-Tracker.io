import { useState } from 'react';

import themeSwitcher from '@/store';

import { Switcher } from './styled';

export const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(() => themeSwitcher.themeName !== 'dark');

  const handleToggle = () => {
    themeSwitcher.toggleTheme();
    setIsChecked((prev) => !prev);
  };

  return (
    <Switcher checked={isChecked}>
      <input
        name='themeSwitcher'
        onChange={handleToggle}
        id='checkbox'
        type='checkbox'
      />
    </Switcher>
  );
};
