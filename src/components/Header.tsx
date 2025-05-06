
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Header = () => {
  return (
    <header className="bg-secondary text-accent py-3 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-primary text-2xl font-bold mr-2">ВААУ</span>
            <span className="text-accent text-xl hidden sm:inline">БАНК</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/services" className="text-accent hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/cards" className="text-accent hover:text-primary transition-colors">
            Карты
          </Link>
          <Link to="/credits" className="text-accent hover:text-primary transition-colors">
            Кредиты
          </Link>
          <Link to="/investments" className="text-accent hover:text-primary transition-colors">
            Инвестиции
          </Link>
          <Link to="/about" className="text-accent hover:text-primary transition-colors">
            О банке
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-accent hover:text-primary hidden sm:flex">
            <Icon name="Search" className="mr-2 h-4 w-4" />
            <span>Поиск</span>
          </Button>
          
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-secondary hidden sm:flex">
            <Icon name="User" className="mr-2 h-4 w-4" />
            <span>Войти</span>
          </Button>
          
          <Button variant="default" size="sm" className="bg-primary text-secondary hover:bg-primary-dark">
            <span>Онлайн-банк</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden text-accent">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
