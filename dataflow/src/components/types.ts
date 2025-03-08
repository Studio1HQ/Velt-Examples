import { ColDef } from 'ag-grid-community';
import { ReactElement } from 'react';

// Define the structure for our row data
export interface RowData {
    id: number;
    name: string;
    age: number;
    email: string;
    country: string;
    status: string;
    joinDate: string;
}

// Column definition type using AG Grid's ColDef
export interface CustomColDef extends ColDef {
    field: keyof RowData;
    headerName: string;
    width?: number;
    sortable?: boolean;
    filter?: boolean;
    cellRenderer?: (params: any) => ReactElement;
} 