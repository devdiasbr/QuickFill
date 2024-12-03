import React from 'react';
import { Users, CreditCard, FileText, TrendingUp } from 'lucide-react';

export function StatsCards() {
  const stats = [
    {
      title: 'Total de Usuários',
      value: '0',
      icon: Users,
      change: '+5%',
    },
    {
      title: 'Receita Mensal',
      value: 'R$ 0,00',
      icon: CreditCard,
      change: '+12%',
    },
    {
      title: 'Documentos Processados',
      value: '0',
      icon: FileText,
      change: '+8%',
    },
    {
      title: 'Taxa de Conversão',
      value: '0%',
      icon: TrendingUp,
      change: '+2%',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">{stat.change}</span>
            <span className="text-sm text-gray-500"> vs. mês anterior</span>
          </div>
        </div>
      ))}
    </div>
  );
}