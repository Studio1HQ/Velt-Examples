'use client';

import {
  useIdentify,
  useSetDocumentId,
  VeltComments,
  VeltCommentTool,
} from '@veltdev/react';
import { useEffect, useState } from 'react';
import InventoryList from '../components/InventoryList';
import MetricsCard from '../components/MetricsCard';
import Navigation from '../components/Navigation';
import QuickFilters from '../components/QuickFilters';
import { initialInventory } from '../data/inventory';
import { getInventoryMetrics } from '../utils/inventory';
import { getOrCreateRandomUser } from '../utils/randomUser';

export default function Home() {
  const [inventory] = useState(initialInventory);
  const [userData, setUserData] = useState({
    userId: 'loading',
    name: 'Loading...',
    email: 'loading@example.com',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=loading',
    organizationId: 'inventory-org'
  });
  const metrics = getInventoryMetrics(inventory);

  useIdentify(userData);
  useSetDocumentId('inventory-page');

  useEffect(() => {
    const initializeUser = async () => {
      const user = await getOrCreateRandomUser();
      if (user) {
        setUserData(user);
      }
    };
    initializeUser();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <VeltComments />
      <Navigation userData={userData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-black dark:text-white">
                Inventory Dashboard
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Real-time inventory management and team collaboration</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 rounded-lg bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all border border-gray-200 dark:border-gray-800">
                Export
              </button>
              <button className="px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition-all">
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
