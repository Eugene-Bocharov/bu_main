import React, { useEffect, useState } from 'react';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Header } from '../../components/Organisms/Header/Header';

export default function Homepage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}
      <div>Homepage</div>
    </>
  );
}
