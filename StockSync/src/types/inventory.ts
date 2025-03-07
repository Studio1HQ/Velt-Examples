export interface InventoryItem {
    id: number;
    name: string;
    sku: string;
    category: string;
    quantity: number;
    price: number;
    status: string;
    location: string;
    reorderPoint: number;
    supplier: string;
    lastUpdated: string;
    tags: string[];
}

export interface InventoryMetrics {
    totalItems: number;
    totalValue: number;
    lowStock: number;
    criticalStock: number;
    categories: number;
} 