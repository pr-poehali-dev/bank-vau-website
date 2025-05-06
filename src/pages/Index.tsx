
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardShowcase from '@/components/CardShowcase';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <CardShowcase />
        <Services />
        <Calculator />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
