'use client';

import { InventoryItem } from '../types/inventory';

interface InventoryListProps {
    inventory: InventoryItem[];
}

export default function InventoryList({ inventory }: InventoryListProps) {
    return (
        <div
            id="inventory-list"
            data-velt-comment-container
            className="rounded-xl backdrop-blur-md bg-white/10 border border-white/10 overflow-hidden"
        >
            <div className="px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-blue-100">Inventory Items</h2>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm text-blue-200/70">
                            Select any item to comment
                        </div>
                        <input
                            type="text"
                            placeholder="Search inventory..."
                            className="bg-white/5 text-blue-100 px-4 py-1 rounded-lg border border-white/10 focus:outline-none focus:border-blue-400 placeholder-blue-200/50"
                        />
                    </div>
                </div>
            </div>

            <div className="divide-y divide-white/10">
                {inventory.map((item) => (
                    <div
                        key={item.id}
                        className="p-6 hover:bg-white/5 transition-colors"
                        data-velt-comment-target={`item-${item.id}`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-lg font-medium text-blue-100">{item.name}</h3>
                                    <span className="text-xs text-blue-200/70 bg-white/5 px-2 py-1 rounded-lg border border-white/10">
                                        {item.sku}
                                    </span>
                                </div>
                                <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-blue-200/70">
                                    <div>Category: {item.category}</div>
                                    <div>Location: {item.location}</div>
                                    <div>Supplier: {item.supplier}</div>
                                    <div>Reorder Point: {item.reorderPoint}</div>
                                </div>
                                <div className="mt-2 flex space-x-2">
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-right ml-8">
                                <div className="text-2xl font-semibold text-blue-100">
                                    {item.quantity}
                                    <span className="text-sm text-blue-200/70 ml-1">units</span>
                                </div>
                                <div className="text-lg font-medium text-emerald-400 mt-1">
                                    ${item.price}
                                </div>
                                <div className={`mt-2 text-sm px-3 py-1 rounded-full inline-block border
                  ${item.status === 'In Stock'
                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                        : item.status === 'Low Stock'
                                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                                    {item.status}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 