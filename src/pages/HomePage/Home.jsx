import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import PartnersSection from './PartnersSection/PartnersSection';
import IntroductionSection from './IntroductionSection/IntroductionSection';
import ServicesSection from './ServicesSection/ServicesSection';
import WhyChooseUsSection from './WhyChooseUsSection/WhyChooseUsSection';


const Home = () => {
    return (
        <>
        <HeroSection />
        <PartnersSection />
        <IntroductionSection />
        <ServicesSection />
        <WhyChooseUsSection />
        </>
    );
};

export default Home;