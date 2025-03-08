'use client';

import dynamic from 'next/dynamic';

// Dynamically import the DataGrid component with SSR disabled
const DataGrid = dynamic(() => import('./DataGrid'), { ssr: false });

export default function DataGridWrapper() {
    return (
        <div className="min-h-screen bg-gray-900">
            <div className="border-b border-gray-800 bg-gray-900 px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-100">Company Data Management</h1>
            </div>
            <div className="p-4">
                <DataGrid />
            </div>
        </div>
    );
} 