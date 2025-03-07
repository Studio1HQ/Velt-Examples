'use client';

export default function Navigation() {
    return (
        <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <span className="text-xl font-bold text-black dark:text-white">StockSync Pro</span>
                        <div className="hidden md:flex space-x-1">
                            <a href="#" className="text-gray-600 dark:text-gray-400 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Dashboard</a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Orders</a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">Reports</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-600"></span>
                            <span className="text-gray-600 dark:text-gray-400">Online</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600 dark:text-gray-400">John Manager</span>
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                <span className="text-black dark:text-white text-sm">JM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 