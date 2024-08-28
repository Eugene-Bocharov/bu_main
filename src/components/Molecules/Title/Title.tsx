import React from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }: TitleProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
