
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-accent pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">ВААУ БАНК</h3>
            <p className="text-accent/70 mb-4">
              Современный банк с инновационными решениями для всех ваших финансовых потребностей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-accent mb-4">Частным клиентам</h4>
            <ul className="space-y-2">
              <li><Link to="/cards" className="text-accent/70 hover:text-primary">Карты</Link></li>
              <li><Link to="/credits" className="text-accent/70 hover:text-primary">Кредиты</Link></li>
              <li><Link to="/deposits" className="text-accent/70 hover:text-primary">Вклады</Link></li>
              <li><Link to="/investments" className="text-accent/70 hover:text-primary">Инвестиции</Link></li>
              <li><Link to="/insurance" className="text-accent/70 hover:text-primary">Страхование</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-accent mb-4">Бизнесу</h4>
            <ul className="space-y-2">
              <li><Link to="/business/rko" className="text-accent/70 hover:text-primary">Расчётный счёт</Link></li>
              <li><Link to="/business/credits" className="text-accent/70 hover:text-primary">Кредитование</Link></li>
              <li><Link to="/business/acquiring" className="text-accent/70 hover:text-primary">Эквайринг</Link></li>
              <li><Link to="/business/salary" className="text-accent/70 hover:text-primary">Зарплатный проект</Link></li>
              <li><Link to="/business/support" className="text-accent/70 hover:text-primary">Поддержка</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-accent mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="PhoneCall" className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <p className="text-accent">8 800 100-00-00</p>
                  <p className="text-accent/70 text-sm">Круглосуточно, бесплатно</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="Mail" className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <p className="text-accent">info@vaaubank.ru</p>
                  <p className="text-accent/70 text-sm">Электронная почта</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <p className="text-accent">г. Москва, ул. Банковская, 1</p>
                  <p className="text-accent/70 text-sm">Головной офис</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent/60 text-sm mb-4 md:mb-0">
            © 2025 ВААУ БАНК. Все права защищены. Генеральная лицензия ЦБ РФ №0000.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-accent/60 text-sm hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-accent/60 text-sm hover:text-primary">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
