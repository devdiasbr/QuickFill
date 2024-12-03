import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UsersTable } from '@/components/admin/UsersTable';
import { SubscriptionsTable } from '@/components/admin/SubscriptionsTable';
import { StatsCards } from '@/components/admin/StatsCards';

export function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Painel Administrativo</h1>
      
      <StatsCards />

      <Tabs defaultValue="users" className="mt-6">
        <TabsList>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="subscriptions">Assinaturas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users">
          <UsersTable />
        </TabsContent>
        
        <TabsContent value="subscriptions">
          <SubscriptionsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}