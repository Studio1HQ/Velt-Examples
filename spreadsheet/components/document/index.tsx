/* [Velt] This component implements the salesdata  document 
  with Velt collaboration features including comments and cursor tracking. */
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { missionData as salesData } from '@/lib/data';
import type { SalesData } from '@/lib/types';
import { VeltCommentTool, VeltComments, VeltCursor } from '@veltdev/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import VeltInitializeDocument from '../velt/VeltInitializeDocument';

const common_header_style =
  'hidden lg:table-cell w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14]  bg-transparent';

export default function Document() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rows, setRows] = useState<SalesData[]>(salesData);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof SalesData | null;
    direction: 'asc' | 'desc';
  }>({
    key: null,
    direction: 'asc',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSort = (key: keyof SalesData) => {
    let direction: 'asc' | 'desc' = 'asc';

    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedData = [...rows].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setRows(sortedData);
  };

  /* [VELT] Initialize the document with a unique identifier and metadata. */
  <VeltInitializeDocument />;

  return (
    <>
      {/* [Velt] Main comments component for the document */}
      {mounted && (
        <VeltComments
          popoverMode={true}
          popoverTriangleComponent={true}
          darkMode={theme === 'dark'}
        />
      )}
      {/* [Velt] Cursor tracking component for real-time collaboration */}
      <VeltCursor />

      <div className="flex-1 overflow-auto relative shrink-0">
        <Table className="w-full table-fixed border border-[#f5f5f5] dark:border-[#ffffff14]">
          <TableHeader className="bg-transparent">
            <TableRow>
              <TableHead className="w-[8px] min-w-[8px] max-w-[8px] !overflow-hidden !truncate border border-[#f5f5f5] dark:border-[#ffffff14] px-0">
                <div className="w-full overflow-hidden text-ellipsis"></div>
              </TableHead>

              {[
                { label: 'Name', key: 'name' },
                { label: 'Department', key: 'department' },
                { label: 'Value', key: 'value' },
              ].map((col) => (
                <TableHead
                  key={col.key}
                  className="p-2 cursor-pointer w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14] bg-transparent"
                  onClick={() => handleSort(col.key as keyof SalesData)}
                >
                  {col.label}{' '}
                  {sortConfig.key === col.key
                    ? sortConfig.direction === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </TableHead>
              ))}
              <TableHead className={common_header_style}>D</TableHead>
              <TableHead className={common_header_style}>E</TableHead>
              <TableHead className={common_header_style}>F</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                className="border border-[#f5f5f5] dark:border-[#ffffff14] hover:bg-transparent"
              >
                <TableCell className="w-[8px] min-w-[8px] max-w-[8px] !overflow-hidden !truncate border border-[#f5f5f5] dark:border-[#ffffff14]">
                  {row.id}
                </TableCell>

                {/* Name Column */}
                <TableCell
                  className={`relative group hover:bg-gray-100 dark:hover:bg-gray-800 w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14] ${selectedCell === `cell-${row.id}-name`
                      ? 'outline outline-2 outline-yellow-400'
                      : ''
                    }`}
                  id={`cell-${row.id}-name`}
                  data-velt-comment-target={`cell-${row.id}-name`}
                  onClick={() => setSelectedCell(`cell-${row.id}-name`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{row.name}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool
                        targetElementId={`cell-${row.id}-name`}
                      />
                    </div>
                  </div>
                </TableCell>

                {/* Department Column */}
                <TableCell
                  className={`relative group hover:bg-gray-100 dark:hover:bg-gray-800 w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14] ${selectedCell === `cell-${row.id}-department`
                      ? 'outline outline-2 outline-yellow-400'
                      : ''
                    }`}
                  id={`cell-${row.id}-department`}
                  data-velt-comment-target={`cell-${row.id}-department`}
                  onClick={() => setSelectedCell(`cell-${row.id}-department`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{row.department}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool
                        targetElementId={`cell-${row.id}-department`}
                      />
                    </div>
                  </div>
                </TableCell>

                {/* Value Column */}
                <TableCell
                  className={`relative group hover:bg-gray-100 dark:hover:bg-gray-800 w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14] ${selectedCell === `cell-${row.id}-value`
                      ? 'outline outline-2 outline-yellow-400'
                      : ''
                    }`}
                  id={`cell-${row.id}-value`}
                  data-velt-comment-target={`cell-${row.id}-value`}
                  onClick={() => setSelectedCell(`cell-${row.id}-value`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{row.value}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool
                        targetElementId={`cell-${row.id}-value`}
                      />
                    </div>
                  </div>
                </TableCell>

                {Array.from({ length: 3 }).map((_, index) => (
                  <TableCell
                    className="hidden lg:table-cell w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14]"
                    key={index}
                  ></TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
