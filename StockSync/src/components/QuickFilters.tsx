'use client';

export default function QuickFilters() {
    return (
        <div className="rounded-xl backdrop-blur-md bg-white/10 border border-white/10 p-6">
            <h2 className="text-lg font-medium text-blue-100 mb-4">Quick Filters</h2>
            <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors">
                    🔴 Critical Stock Items
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors">
                    ⚠️ Low Stock Items
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors">
                    💰 High Value Items
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors">
                    🏷️ Recent Updates
                </button>
            </div>
        </div>
    );
} 