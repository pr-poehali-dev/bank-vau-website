
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const CardShowcase = () => {
  const cards = [
    {
      id: 1,
      title: "Дебетовая карта ВААУ",
      description: "Кэшбэк до 5% на все покупки и бесплатное обслуживание",
      features: ["Бесплатный выпуск", "Кэшбэк до 5%", "Бесконтактная оплата"],
      image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=600"
    },
    {
      id: 2,
      title: "Кредитная карта ВААУ Gold",
      description: "Кредитный лимит до 500 000 ₽ и 100 дней без процентов",
      features: ["Лимит до 500 000 ₽", "100 дней без %", "Моментальное оформление"],
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600"
    },
    {
      id: 3,
      title: "Премиум карта ВААУ Black",
      description: "Эксклюзивные привилегии для самых требовательных клиентов",
      features: ["Премиальные сервисы", "Расширенное страхование", "Консьерж-сервис 24/7"],
      image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=600"
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Банковские карты ВААУ</h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Выберите карту, которая подходит именно вам. От простых дебетовых до премиальных с расширенными возможностями.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Card key={card.id} className="bg-white border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-secondary">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-secondary/80">
                      <Icon name="Check" className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-secondary hover:bg-primary-dark">
                  Заказать карту
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;
