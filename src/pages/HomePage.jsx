import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services/Services';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import Footer from '../components/Footer/Footer';

const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer />
    </>
  );
};

export default HomePage;