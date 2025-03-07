'use client';

export default function QuickFilters() {
    return (
        <div className="rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-medium text-black dark:text-white mb-4">Quick Filters</h2>
            <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    🔴 Critical Stock Items
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    ⚠️ Low Stock Items
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    💰 High Value Items
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                    🏷️ Recent Updates
                </button>
            </div>
        </div>
    );
} 