import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HomeWelc } from '../../components/Organisms/HomeWelc/HomeWelc';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function Homepage() {
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
      <HomeWelc />
      <TitleDesc
        title="Crafting Innovative Web Solutions Aligned with Your Vision."
        description="Welcome to HIPL, a dynamic web design and development company based in Canada. Like Brand Vision, we are dedicated to transparency and creativity. Our core mission is to create innovative web design solutions that resonate with your vision. Recognizing the significance of your brand, we specialize in bespoke website design and development, ensuring each project is meticulously crafted to meet your exact requirements.."
      />
      <DarkTitleDesk
        title="We create beautiful websites that drive business growth."
        description="HIPL is your trusted partner in web design and development. At HIPL, we pride ourselves on our commitment to excellence and innovation. Our primary goal is to deliver cutting-edge web design solutions that align perfectly with your business goals. Understanding the unique essence of your brand, we focus on creating customized websites that are crafted with precision and care to meet your specific needs."
        link="#"
      />
      <InfoCard
        color="blue"
        title="Custom websites made just for you"
        description="At HIPL, we understand that a professionally designed and developed website is crucial for your business's success. Our expert team is committed to creating websites that not only look stunning but also perform seamlessly. We meticulously plan and execute each project to ensure your website is fully responsive, user-friendly, and optimized for search engines. "
      />
      <Title title="We are looking forward to working with you!" />
      <ServiceDesc
        tabTitles={['Design', 'Development']}
        tabDescriptions={[
          'At HIPL, we excel in delivering top-notch design services that elevate your brand and drive business growth. Our team of expert designers is dedicated to creating visually stunning and highly functional designs that resonate with your target audience. We transform your ideas into beautifully crafted websites that captivate visitors and provide an exceptional user experience. Our designs are tailored to reflect your brands identity while ensuring ease of navigation and functionality. In todays mobile-first world, having an intuitive and engaging mobile app is essential. Our mobile app design services focus on creating seamless and responsive interfaces that provide a delightful user experience on any device. Exceptional user experience is key to the success of any digital product. Our UI/UX consulting services help optimize your digital interfaces, ensuring they are user-friendly and maximize engagement. We provide strategic recommendations and design principles that enhance usability and satisfaction. At HIPL, our commitment to design excellence ensures that every project we undertake is meticulously crafted to meet your unique needs. Let us help you create visually compelling and effective design solutions that set your business apart in the digital landscape.',
          'At HIPL, our development services are designed to provide robust, scalable, and high-performing web solutions that propel your business forward. Our team of experienced developers is dedicated to delivering top-tier development services that meet the highest standards of quality and performance. Capture your audiences attention from the very first click with our expertly crafted landing pages. Designed to drive conversions, our landing pages are visually appealing and optimized for performance. For businesses needing to present extensive information and services, our multi-page websites offer comprehensive and user-friendly experiences. Each page is thoughtfully designed to ensure seamless navigation and a cohesive look throughout. Showcase your work and achievements with our elegant portfolio websites. Perfect for professionals and creatives, our portfolios highlight your projects in a visually striking manner that leaves a lasting impression. Enhance your business operations with our tailored web applications. From CRM integrations to bespoke business systems, we develop solutions that streamline your processes and improve efficiency. Our custom web applications are built using the latest technologies, ensuring they are secure, reliable, and future-proof. At HIPL, our meticulous approach to development ensures that every project we deliver is fully functional, responsive, and optimized for your business needs. Trust us to create powerful web solutions that drive your business growth and success.',
        ]}
      />
      {/* <DarkText
        services={[
          {
            title: 'Landing Webpage',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            // isButton: false,
          },
          {
            title: 'Multiple Page Website',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            // isButton: false,
          },
          {
            title: 'Portfolio Website',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            // isButton: false,
          },
          {
            title: 'Custom Web Applications',
            desc: 'We ensure that every project is overseen by senior professionals from start to finish. Brand Visions team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations',
            link: '#',
            // isButton: false,
          },
        ]}
      /> */}
      <InfoCard
        color="red"
        title="Custom websites made just for you"
        description="A strong online presence is essential to ensure the success of any business as it impacts how your audience perceives your brand. In order to maximize growth, a business needs to clearly differentiate itself from the vast sea of competition. At Brand Vision, we specialize in designing websites that are not only visually stunning but also user-friendly, ensuring your brand makes an unforgettable impression."
      />
      <TitleDesc
        title="We create beautiful websites that drive business growth."
        description="We are Brand Vision, an award-winning web design agency focused on transparency and creativity. Our mission is to tailor innovative web design solutions that align with your vision. Understanding the importance of your brand, we specialize in custom website design and development, ensuring each project is uniquely crafted to meet your specific needs."
      />{' '}
      {/* Example with a dog picture, normal layout */}
      <TitleDesc
        title="Welcome to Dog World"
        description="Discover the cutest dogs and their amazing stories."
        pic="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGRvZ3xlbnwwfHx8fDE2NzMwNzgyODg&ixlib=rb-4.0.3&q=80&w=400"
      />
      {/* Example with a dog picture, reversed layout */}
      <TitleDesc
        title="Welcome to the World of Dogs"
        description="Explore how dogs bring joy to our lives every day."
        pic="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGRvZ3xlbnwwfHx8fDE2NzMwNzgyODg&ixlib=rb-4.0.3&q=80&w=400"
        isReverse={true}
      />
      <Slider />
      <Footer />
    </>
  );
}
