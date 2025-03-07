'use client';

import { VeltInlineCommentsSection } from '@veltdev/react';
import { InventoryItem } from '../types/inventory';

interface InventoryListProps {
    inventory: InventoryItem[];
}

export default function InventoryList({ inventory }: InventoryListProps) {
    return (
        <section
            id="inventory-list"
            data-velt-comment-container
            data-velt-target-inline-comment-element-id="inventory-list"
            className="rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 overflow-hidden"
        >
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-black dark:text-white">Inventory Items</h2>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Select any item to comment
                        </div>
                        <input
                            type="text"
                            placeholder="Search inventory..."
                            className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white px-4 py-1 rounded-lg border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500"
                        />
                    </div>
                </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {inventory.map((item) => (
                    <div
                        key={item.id}
                        className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors relative"
                        data-velt-comment-target={`item-${item.id}`}
                        data-velt-target-inline-comment-element-id={`item-${item.id}`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-lg font-medium text-black dark:text-white">{item.name}</h3>
                                    <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-800">
                                        {item.sku}
                                    </span>
                                </div>
                                <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                    <div>Category: {item.category}</div>
                                    <div>Location: {item.location}</div>
                                    <div>Supplier: {item.supplier}</div>
                                    <div>Reorder Point: {item.reorderPoint}</div>
                                </div>
                                <div className="mt-2 flex space-x-2">
                                    {item.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-right ml-8">
                                <div className="text-2xl font-semibold text-black dark:text-white">
                                    {item.quantity}
                                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">units</span>
                                </div>
                                <div className="text-lg font-medium text-black dark:text-white mt-1">
                                    ${item.price}
                                </div>
                                <div className={`mt-2 text-sm px-3 py-1 rounded-full inline-block border
                  ${item.status === 'In Stock'
                                        ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800'
                                        : item.status === 'Low Stock'
                                            ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
                                            : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800'}`}>
                                    {item.status}
                                </div>
                            </div>
                        </div>
                        <VeltInlineCommentsSection
                            targetElementId={`item-${item.id}`}
                            shadowDom={false}
                            darkMode={true}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
} 