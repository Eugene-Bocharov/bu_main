import React from 'react';
import { useState } from 'react'; // Import useState separately
import styles from './Footer.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.midContainer}>
          <div className={styles.titleBox}>
            <div className={styles.logoImgBox}>
              <div className={styles.logoImg}></div>
            </div>
            <h2 className={styles.logoTitle}>Best effort development</h2>
          </div>
          <div className={styles.dividerBox}>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Service</p>
              <a className={styles.link} href="#">
                UI/UX Design
              </a>
              <a className={styles.link} href="#">
                Web Development
              </a>
              <a className={styles.link} href="#">
                Mobile Development
              </a>

              <a className={styles.link} href="#">
                Merketing
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Social Media</p>
              <a className={styles.link} href="#">
                Instagram
              </a>
              <a className={styles.link} href="#">
                Facebook
              </a>
              <a className={styles.link} href="#">
                Telegram
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Contact</p>
              <a className={styles.link} href="#">
                4003498@gmail.com
              </a>
              <a className={styles.link} href="#">
                +380 50 598 82 20
              </a>
              <a className={styles.link} href="#">
                Write us
              </a>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.midContainer}>
          <p className={styles.rightT}>
            Creativescape Copyright © 2024 BET Transport - All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
