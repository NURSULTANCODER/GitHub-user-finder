import { ReactNode } from 'react';
import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: ReactNode,
  text?: string | null,
  isLink?: boolean
}

export const InfoItem = ({ icon, text, isLink}: InfoItemProps) => {
  const currentText = text || 'Not available';
  let currentHref = '';

  if(isLink) {
    currentHref = text && text.startsWith('http') ? text : `https${text}`
  }
  return (
    <div className={styles.infoItem}>
      {icon}
      <div>
        {isLink && text ? (
          <a href={currentHref} target="_blank" rel='noreferrer' className={styles.link}>currentText</a>
        ) : currentText}
      </div>
    </div>
  );
};
