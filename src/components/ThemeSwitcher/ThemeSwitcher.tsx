import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';
import { IconMoon, IconSun } from '../../icons';



export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false)
  const themeText = isDark ? 'dark' : 'ligth';
  const ThemeIcon = isDark ? IconMoon : IconSun;
  
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark':'light')
  }, [isDark])

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon />
    </div>
  )
};
