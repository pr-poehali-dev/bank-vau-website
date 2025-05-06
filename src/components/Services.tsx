
import React from 'react';
import Icon from '@/components/ui/Icon';

const Services = () => {
  const services = [
    {
      icon: "Wallet", 
      title: "Вклады и счета",
      description: "Выгодные условия для сбережений с возможностью пополнения и снятия"
    },
    {
      icon: "Home",
      title: "Ипотека",
      description: "Кредиты на покупку недвижимости с низкими ставками и быстрым одобрением"
    },
    {
      icon: "PiggyBank",
      title: "Накопления",
      description: "Накопительные счета с ежемесячной капитализацией процентов"
    },
    {
      icon: "Banknote",
      title: "Кредиты",
      description: "Потребительские кредиты на любые цели без скрытых комиссий"
    },
    {
      icon: "BarChart",
      title: "Инвестиции",
      description: "Брокерские услуги и инвестиционные продукты для всех категорий инвесторов"
    },
    {
      icon: "Shield",
      title: "Страхование",
      description: "Программы страхования жизни, здоровья, имущества и путешествий"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Наши услуги</h2>
          <p className="text-accent/80 max-w-2xl mx-auto">
            ВААУ Банк предлагает широкий спектр финансовых услуг для частных лиц и бизнеса
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-secondary-light p-6 rounded-lg border border-gray-800 hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name={service.icon} className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">{service.title}</h3>
              <p className="text-accent/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
