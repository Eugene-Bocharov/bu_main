// Import necessary modules
import React, { useState } from 'react';
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import { HeaderLink } from '../../Molecules/HeaderLink/HeaderLink';
import { log } from 'console';

// Define HeaderProps interface
interface HeaderProps {
  children: React.ReactElement;
}

// Define HideOnScroll component
const HideOnScroll: React.FC<HeaderProps> = ({ children }) => {
  const trigger = useScrollTrigger();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, { elevation: prevScrollPos > 0 ? 4 : 0 })}
    </Slide>
  );
};

// Define Header component
export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    console.log(lng);
  };

  return (
    <div className={styles.header}>
      <HideOnScroll>
        <AppBar position="fixed" className={styles.appBar}>
          <Toolbar className={styles.toolbar}>
            <div className={styles.incontainer}>
              <div className={styles.divider}>
                <div className={styles.divcontainerl}>
                  <div className={styles.logocontainer}>
                    <div className={styles.logo}></div>
                  </div>

                  <div>
                    <HeaderLink text="Home" href="/" />
                    <HeaderLink text="Design" href="/design" />
                    <HeaderLink text="Web Development" href="/webdev" />
                    <HeaderLink text="Contact" href="/contact" />
                  </div>
                </div>
                <div className={styles.divcontainerr}>
                  {i18n.language === 'en' ? (
                    <button
                      className={styles.button}
                      onClick={() => changeLanguage('fr')}
                    >
                      Fr
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      onClick={() => changeLanguage('en')}
                    >
                      Eng
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
