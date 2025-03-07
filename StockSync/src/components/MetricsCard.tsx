'use client';

import { InventoryMetrics } from '../types/inventory';

interface MetricsCardProps {
    metrics: InventoryMetrics;
}

export default function MetricsCard({ metrics }: MetricsCardProps) {
    return (
        <div className="rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-medium text-black dark:text-white mb-4">Inventory Metrics</h2>
            <div className="space-y-4">
                <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Products</div>
                    <div className="text-2xl font-bold text-black dark:text-white">{metrics.totalItems}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Value</div>
                    <div className="text-2xl font-bold text-black dark:text-white">
                        ${metrics.totalValue.toLocaleString()}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                    <div className="text-2xl font-bold text-black dark:text-white">{metrics.categories}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Low Stock Items</div>
                    <div className="text-2xl font-bold text-black dark:text-white">{metrics.lowStock}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Critical Stock</div>
                    <div className="text-2xl font-bold text-black dark:text-white">{metrics.criticalStock}</div>
                </div>
            </div>
        </div>
    );
} 