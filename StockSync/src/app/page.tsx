'use client';

import {
  useIdentify,
  useSetDocumentId,
  VeltComments,
  VeltCommentTool,
} from '@veltdev/react';
import { useState } from 'react';
import InventoryList from '../components/InventoryList';
import MetricsCard from '../components/MetricsCard';
import Navigation from '../components/Navigation';
import QuickFilters from '../components/QuickFilters';
import { initialInventory } from '../data/inventory';
import { getInventoryMetrics } from '../utils/inventory';

export default function Home() {
  const [inventory] = useState(initialInventory);
  const metrics = getInventoryMetrics(inventory);

  useIdentify({
    userId: 'inventory-manager',
    name: 'Inventory Manager',
    email: 'manager@inventory.com',
    photoUrl: 'https://placekitten.com/100/100',
    organizationId: 'inventory-org',
  });

  useSetDocumentId('inventory-page');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950">
      <VeltComments />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 text-transparent bg-clip-text">
                Inventory Dashboard
              </h1>
              <p className="mt-2 text-blue-200/70">Real-time inventory management and team collaboration</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 text-blue-100 hover:bg-white/20 transition-all border border-white/10">
                Export
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all">
                + Add Item
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <MetricsCard metrics={metrics} />
            <QuickFilters />
          </div>
          <div className="lg:col-span-3">
            <InventoryList inventory={inventory} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <VeltCommentTool />
      </div>
    </div>
  );
}
