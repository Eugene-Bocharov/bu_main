import React from 'react';
import styles from './TitleDesc.module.scss';

interface TitleDescProps {
  title: string;
  description: string;
  showDivider?: boolean;
  pic?: string; // Optional prop for picture URL
  isReverse?: boolean; // Optional prop for reversing layout
}

export function TitleDesc({
  title,
  description,
  showDivider = false,
  pic,
  isReverse = false,
}: TitleDescProps) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.midContainer} ${isReverse ? styles.reverse : ''}`}
      >
        {pic && (
          <div
            className={styles.imgBox}
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.description}>{description}</h3>
          {showDivider && <div className={styles.divider}></div>}
          <a href="#" className={styles.seeButton}>
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
