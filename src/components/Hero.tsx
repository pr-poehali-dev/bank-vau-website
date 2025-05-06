
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-secondary py-16 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1607944024060-0450380ddd33?q=80&w=2000')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">
            Современный банк <span className="text-primary">для современных людей</span>
          </h1>
          
          <p className="text-xl text-accent/80 mb-8 max-w-2xl">
            ВААУ Банк — это инновационные решения, выгодные условия и удобный сервис для всех ваших финансовых потребностей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary-dark">
              <Link to="/registration">Открыть счёт</Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/products">Узнать о продуктах</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
