import styles from './Button.module.scss';

interface ButtonProps {
  children: string,
  onClick?: () => void,
 }

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
