import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Differentials from '../components/Differentials';
import Positioning from '../components/Positioning';
import Testimonials from '../components/Testimonials';
import Integrations from '../components/Integrations';
import FinalCTA from '../components/FinalCTA';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Differentials />
      <Positioning />
      <Testimonials />
      <Integrations />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
