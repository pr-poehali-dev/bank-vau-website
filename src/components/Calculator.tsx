
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const Calculator = () => {
  const [loanType, setLoanType] = useState('consumer');
  const [amount, setAmount] = useState(300000);
  const [term, setTerm] = useState(24);
  
  // Простой расчет ежемесячного платежа
  const calculatePayment = () => {
    const rates = {
      consumer: 14.9,
      mortgage: 8.5,
      car: 11.9
    };
    
    const rate = rates[loanType as keyof typeof rates] / 100 / 12;
    const payment = (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    
    return Math.round(payment);
  };
  
  const monthlyPayment = calculatePayment();

  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Кредитный калькулятор</h2>
          <p className="text-accent/80 max-w-2xl mx-auto">
            Рассчитайте ваш кредит и узнайте ежемесячный платеж
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto bg-secondary border-gray-800">
          <CardHeader>
            <CardTitle className="text-primary">Рассчитать кредит</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-accent mb-2">Тип кредита</label>
              <Select value={loanType} onValueChange={setLoanType}>
                <SelectTrigger className="bg-secondary-light border-gray-700 text-accent">
                  <SelectValue placeholder="Выберите тип кредита" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-gray-700">
                  <SelectItem value="consumer">Потребительский кредит</SelectItem>
                  <SelectItem value="mortgage">Ипотека</SelectItem>
                  <SelectItem value="car">Автокредит</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-accent mb-2">
                Сумма кредита: {amount.toLocaleString()} ₽
              </label>
              <Slider 
                value={[amount]}
                min={50000} 
                max={5000000} 
                step={10000}
                onValueChange={(val) => setAmount(val[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-accent/60">
                <span>50 000 ₽</span>
                <span>5 000 000 ₽</span>
              </div>
            </div>
            
            <div>
              <label className="block text-accent mb-2">
                Срок кредита: {term} {term === 1 ? 'месяц' : term < 5 ? 'месяца' : 'месяцев'}
              </label>
              <Slider 
                value={[term]}
                min={3} 
                max={60} 
                step={1}
                onValueChange={(val) => setTerm(val[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-accent/60">
                <span>3 месяца</span>
                <span>5 лет</span>
              </div>
            </div>
            
            <div className="p-4 bg-secondary-light rounded-lg">
              <h3 className="text-accent font-medium mb-2">Результат расчета:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-accent/70 text-sm">Ежемесячный платеж:</p>
                  <p className="text-primary text-2xl font-bold">{monthlyPayment.toLocaleString()} ₽</p>
                </div>
                <div>
                  <p className="text-accent/70 text-sm">Общая сумма выплат:</p>
                  <p className="text-accent/90 text-xl">{(monthlyPayment * term).toLocaleString()} ₽</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-secondary hover:bg-primary-dark">
              Оформить заявку
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Calculator;
