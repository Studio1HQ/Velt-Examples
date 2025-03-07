'use client';

export default function Navigation() {
    return (
        <nav className="backdrop-blur-md bg-white/10 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <span className="text-xl font-bold text-white">StockSync Pro</span>
                        <div className="hidden md:flex space-x-1">
                            <a href="#" className="text-blue-100 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">Dashboard</a>
                            <a href="#" className="text-blue-100 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">Orders</a>
                            <a href="#" className="text-blue-100 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">Reports</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-600"></span>
                            <span className="text-blue-100">Online</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-blue-100">John Manager</span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                                <span className="text-white text-sm">JM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 