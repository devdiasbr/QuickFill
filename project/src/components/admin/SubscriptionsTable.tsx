import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function SubscriptionsTable() {
  const [subscriptions, setSubscriptions] = React.useState([]);

  React.useEffect(() => {
    // TODO: Implementar busca de assinaturas do Stripe/Supabase
  }, []);

  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cliente
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Plano
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Próxima Cobrança
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {subscriptions.map((subscription: any) => (
            <tr key={subscription.id}>
              <td className="px-6 py-4 whitespace-nowrap">{subscription.customer_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{subscription.plan_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(subscription.amount)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  subscription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {subscription.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(subscription.next_billing_date), 'dd/MM/yyyy', { locale: ptBR })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}