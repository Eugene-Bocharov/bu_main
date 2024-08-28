import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Title } from '../../components/Molecules/Title/Title';
import { ContactForm } from '../../components/Organisms/ContactForm/ContactForm';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function ContactPage() {
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
      <Title title="Get in touch today!" />
      <ContactForm />
      <Footer />
    </>
  );
}
