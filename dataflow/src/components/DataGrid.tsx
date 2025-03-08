import { ClientSideRowModelModule, ModuleRegistry, ValidationModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useMemo } from 'react';
import './grid.css';
import { mockData } from './mockData';
import { CustomColDef } from './types';

/**
 * Enterprise-grade data management interface with real-time updates,
 * sorting, and Excel-like features optimized for dark mode.
 */

// Register required AG Grid modules
ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ValidationModule
]);

const DataManagementGrid: React.FC = () => {
    // Column configurations with type safety
    const columnDefs = useMemo<CustomColDef[]>(() => [
        {
            field: 'id',
            headerName: 'ID',
            width: 80,
            sortable: true
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            sortable: true
        },
        {
            field: 'age',
            headerName: 'Age',
            width: 90,
            sortable: true
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            sortable: true
        },
        {
            field: 'country',
            headerName: 'Country',
            width: 150,
            sortable: true
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            sortable: true,
            cellRenderer: (params: { value: string; }) => (
                <span className={`px-2 py-1 rounded text-xs font-medium ${params.value === 'Active'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/20 text-red-400'
                    }`}>
                    {params.value}
                </span>
            )
        },
        {
            field: 'joinDate',
            headerName: 'Join Date',
            width: 150,
            sortable: true
        }
    ], []);

    // Default column configurations for consistent behavior
    const defaultColDef = useMemo(() => ({
        resizable: true,
        sortable: true,
        flex: 1,
        minWidth: 80
    }), []);

    return (
        <div className="w-full h-[calc(100vh-8rem)] bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <AgGridReact
                rowData={mockData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                headerHeight={48}
                rowHeight={40}
                suppressDragLeaveHidesColumns={true}
                theme="legacy"
                domLayout="normal"
                className="ag-theme-custom"
            />
        </div>
    );
};

export default DataManagementGrid; 