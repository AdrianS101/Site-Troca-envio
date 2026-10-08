import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import AppSection from '../components/AppSection';
import Differentials from '../components/Differentials';
import Positioning from '../components/Positioning';
import Testimonials from '../components/Testimonials';
import Integrations from '../components/Integrations';
import FinalCTA from '../components/FinalCTA';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileAppBar from '../components/MobileAppBar';
import { useRevealOnScroll } from '../hooks/useReveal';

const Home = () => {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <AppSection />
        <Differentials />
        <Positioning />
        <Testimonials />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileAppBar />
    </div>
  );
};

export default Home;
