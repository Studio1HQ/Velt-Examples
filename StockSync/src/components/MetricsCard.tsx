'use client';

import { InventoryMetrics } from '../types/inventory';

interface MetricsCardProps {
    metrics: InventoryMetrics;
}

export default function MetricsCard({ metrics }: MetricsCardProps) {
    return (
        <div className="rounded-xl backdrop-blur-md bg-white/10 border border-white/10 p-6">
            <h2 className="text-lg font-medium text-blue-100 mb-4">Inventory Metrics</h2>
            <div className="space-y-4">
                <div>
                    <div className="text-sm text-blue-200/70">Total Products</div>
                    <div className="text-2xl font-bold text-blue-100">{metrics.totalItems}</div>
                </div>
                <div>
                    <div className="text-sm text-blue-200/70">Total Value</div>
                    <div className="text-2xl font-bold text-emerald-400">
                        ${metrics.totalValue.toLocaleString()}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-blue-200/70">Categories</div>
                    <div className="text-2xl font-bold text-blue-400">{metrics.categories}</div>
                </div>
                <div>
                    <div className="text-sm text-blue-200/70">Low Stock Items</div>
                    <div className="text-2xl font-bold text-amber-400">{metrics.lowStock}</div>
                </div>
                <div>
                    <div className="text-sm text-blue-200/70">Critical Stock</div>
                    <div className="text-2xl font-bold text-rose-400">{metrics.criticalStock}</div>
                </div>
            </div>
        </div>
    );
} 