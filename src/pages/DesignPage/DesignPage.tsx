import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function DesignPage() {
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
      <TitleDesc
        title="We create beautiful designes that drive business growth."
        description="At HIPL, we excel in creating exceptional designs that blend creativity with functionality. Our expert team is dedicated to crafting visually stunning and user-friendly interfaces that resonate with your brand's identity. Whether it's web design, mobile app design, or UI/UX consulting, we deliver high-quality, innovative solutions that enhance user experience and drive business success. Trust HIPL to bring your vision to life with design excellence that sets you apart."
      />

      <InfoCard
        color="blue"
        title="Custom websites made just for you"
        description="At HIPL, we recognize the power of exceptional design in elevating your business. Our team of seasoned designers is dedicated to crafting visually captivating and highly functional designs that make a significant impact. We approach each project with a keen eye for detail, ensuring that every design not only enhances your brand’s aesthetic but also delivers an intuitive and engaging user experience. From stunning web design to seamless mobile app interfaces, we create design solutions that are both beautiful and effective, helping your business stand out and thrive in the digital landscape."
      />
      <DarkText
        services={[
          {
            title: 'Web Design',
            price: '250',
            desc: 'Transform your ideas into visually captivating websites with our expert web design services. We create aesthetically pleasing and user-friendly designs that enhance your brand’s online presence and deliver an exceptional user experience.',
            link: '#',
            isButton: true,
          },
          {
            title: 'Mobile App Design',
            price: '250',
            desc: 'Engage your audience on the go with our intuitive mobile app design services. We craft seamless and responsive mobile interfaces that provide an enjoyable user experience across all devices, ensuring your app stands out in the competitive market',
            link: '#',
            isButton: true,
          },
          {
            title: 'UI/UX Consulting',
            price: '200',
            desc: 'Optimize user interactions and enhance usability with our professional UI/UX consulting services. Our strategic design principles focus on maximizing user satisfaction and engagement, helping you create digital products that are both functional and delightful to use.',
            link: '#',
            isButton: true,
          },
        ]}
      />
      <ServiceDesc
        tabTitles={['Web Design', 'Mobile Design', 'Consulting']}
        tabDescriptions={[
          'At HIPL, we believe that a well-designed website is the cornerstone of a successful online presence. Our web design services focus on creating visually striking and highly functional websites that capture your brand’s essence. By incorporating modern design principles and user-centric layouts, we ensure that your website not only looks great but also provides an intuitive and engaging experience for your visitors. A professionally designed website can significantly boost your credibility, attract more visitors, and convert them into loyal customers. Let HIPLs web design expertise help you stand out in the crowded digital landscape and achieve your business goals.',
          'In today’s mobile-first world, having a well-designed mobile app is crucial for reaching and engaging your audience. HIPL specializes in creating intuitive and visually appealing mobile app designs that enhance user interaction and satisfaction. Our designs are tailored to provide a seamless experience across all devices, ensuring your app is both functional and beautiful. By focusing on user experience (UX) and user interface (UI) design, we help you create an app that meets your business objectives and stands out in a competitive market. A well-designed mobile app can drive user engagement, increase customer loyalty, and open new revenue streams for your business.',
          'At HIPL, we understand that exceptional user experience (UX) and user interface (UI) design are critical to the success of any digital product. Our UI/UX consulting services are designed to help you optimize your digital interfaces and create engaging, user-friendly experiences. Through in-depth research and analysis, we identify areas for improvement and provide strategic recommendations to enhance usability and user satisfaction. By focusing on intuitive design, clear navigation, and interactive elements, we ensure your product not only meets but exceeds user expectations. Partner with HIPL to elevate your digital products and deliver outstanding user experiences that drive customer loyalty and business growth.',
        ]}
      />
      <Title title="We are looking forward to working with you!" />
      <Footer />
    </>
  );
}
