import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { AboutWeb } from '../../components/Organisms/AboutWeb/AboutWeb';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { Title } from '../../components/Molecules/Title/Title';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function WebPage() {
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
      {/* <AboutWeb /> */}
      <TitleDesc
        title="We develop cutting-edge solutions that propel your business forward"
        description="At HIPL, we pride ourselves on delivering top-tier development solutions that combine technical prowess with innovative thinking. Our skilled team is committed to building robust, scalable, and high-performing web applications that align with your business objectives. Whether you need a dynamic landing page, a comprehensive multi-page website, a tailored portfolio, or a custom web application, we bring a meticulous approach to every project. Our development services are designed to enhance functionality, ensure security, and provide a seamless user experience. Trust HIPL to turn your digital vision into reality with development excellence that drives your business forward."
      />

      <InfoCard
        color="red"
        title="Custom websites made just for you"
        description="At HIPL, we understand the importance of having a professionally designed and developed website for your business. Our team of experienced designers and developers are committed to delivering top-tier web solutions that meet the highest standards of quality and performance. Every project we undertake is approached with meticulous attention to detail, ensuring that your website is not only visually stunning but also fully functional and responsive."
      />
      <DarkText
        services={[
          {
            title: 'Landing Page Websites',
            price: '400',
            desc: 'Capture your audiences attention from the very first click with our expertly crafted landing page websites. Designed to drive conversions and make a strong first impression, our landing pages are visually appealing and highly functional',
            link: '#',
          },
          {
            title: 'Multi-page Websites',
            price: '700',
            desc: 'Showcase your business with our detailed and user-friendly multi-page websites. Ideal for businesses looking to provide extensive information and multiple services, our multi-page designs offer seamless navigation and a cohesive user experience',
            link: '#',
          },
          {
            title: 'Portfolio Websites',
            price: '500',
            desc: 'Highlight your work and achievements with our beautifully designed portfolio websites. Perfect for artists, photographers, designers, and professionals, our portfolio websites provide a stunning platform to display your projects and attract potential clients',
            link: '#',
          },
          {
            title: 'Custom Websites',
            desc: 'Enhance your business operations with our custom web applications. From CRM integrations to bespoke business systems, we develop solutions that are tailored to your specific needs, ensuring efficiency and scalability for your growing business.',

            link: '#',
          },
        ]}
      />
      <ServiceDesc
        tabTitles={['Landing', 'Multipage', 'Portfolio', 'Custom']}
        tabDescriptions={[
          'A landing page is often the first interaction a potential customer has with your business, making it crucial to create a lasting impact. At HIPL, we specialize in designing landing page websites that are not only visually striking but also strategically optimized to convert visitors into customers. Our landing pages are crafted to highlight your key messages, products, or services, driving higher engagement and ultimately boosting your conversion rates. With a clear call-to-action and seamless navigation, your landing page will become a powerful tool to achieve your marketing goals and grow your business.',
          'For businesses that need to present a wealth of information and a variety of services, a multi-page website is the perfect solution. At HIPL, we design and develop multi-page websites that provide a structured and intuitive user experience, allowing visitors to easily find the information they need. Each page is thoughtfully crafted to align with your brands identity, ensuring a cohesive and professional look throughout. A well-organized multi-page website not only enhances your credibility but also improves your search engine rankings, driving more organic traffic to your site. With HIPLs expertise, your multi-page website will effectively communicate your brands story and offerings, helping you to attract and retain customers.',
          'Your portfolio is a reflection of your talent and creativity, and at HIPL, we understand the importance of showcasing your work in the best possible light. Our portfolio websites are designed to be visually stunning, offering a clean and elegant layout that puts your work at the forefront. We create customizable galleries and interactive features that allow you to present your projects in a dynamic and engaging manner. Whether you are an artist, photographer, designer, or any professional with work to showcase, our portfolio websites will help you make a strong impression on potential clients and employers, opening up new opportunities and helping your business grow.',
          'In todays digital landscape, having a web application that is tailored to your business processes can be a game-changer. At HIPL, we specialize in developing custom web applications that are designed to meet your unique business requirements. Whether you need a CRM system to manage customer relationships, a custom e-commerce platform, or any other business application, we have the expertise to deliver solutions that enhance your operational efficiency and scalability. Our custom web applications are built with the latest technologies, ensuring they are secure, reliable, and future-proof. By streamlining your processes and providing a seamless user experience, our custom web applications will empower your business to achieve greater productivity and growth',
        ]}
      />

      <Title title="We are looking forward to working with you!" />
      <Footer />
    </>
  );
}
