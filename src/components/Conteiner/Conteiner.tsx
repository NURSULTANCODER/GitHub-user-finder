import { ReactNode } from 'react';
import styles from './Conteiner.module.scss';

interface ConteinerProps { 
  children: ReactNode
}

export const Conteiner = ({ children }: ConteinerProps) => (
  <div className={styles.conteiner}>
    {children}
  </div>
);
