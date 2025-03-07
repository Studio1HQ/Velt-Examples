import { InventoryItem, InventoryMetrics } from '../types/inventory';

export const getInventoryMetrics = (inventory: InventoryItem[]): InventoryMetrics => {
    return {
        totalItems: inventory.length,
        totalValue: inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        lowStock: inventory.filter(item => item.status === "Low Stock").length,
        criticalStock: inventory.filter(item => item.status === "Critical Stock").length,
        categories: [...new Set(inventory.map(item => item.category))].length,
    };
}; 