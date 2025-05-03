"use client";

import React, { memo, useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import {
  Box,
  Paper,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { VeltCommentTool, VeltComments } from "@veltdev/react";

interface DessertData {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const rows: DessertData[] = [
  { id: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  {
    id: 4,
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 5,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
  {
    id: 6,
    name: "Ice Cream Sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 7,
    name: "Jelly Bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
  },
  { id: 8, name: "KitKat", calories: 518, fat: 26.0, carbs: 65, protein: 7.0 },
  { id: 9, name: "Lollipop", calories: 392, fat: 0.2, carbs: 98, protein: 0.0 },
  { id: 10, name: "Salt", calories: 0, fat: 0, carbs: 0, protein: 0 },
  { id: 11, name: "Pepper", calories: 0, fat: 0, carbs: 0, protein: 0 },
  { id: 12, name: "Lume", calories: 0, fat: 0, carbs: 0, protein: 0 },
  { id: 13, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 14, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 15, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
];

// Memoized GridCell component to avoid unnecessary re-renders
const GridCell = memo(
  ({
    params,
    field,
    selectedCell,
    onCellClick,
  }: {
    params: GridRenderCellParams;
    field: string;
    selectedCell: string | null;
    onCellClick: (cellId: string) => void;
  }) => {
    const cellId = `cell-${params.row.id}-${field}`;
    const isSelected = selectedCell === cellId;
    return (
      <div
        className={`relative group w-full h-full flex items-center justify-between ${
          isSelected ? "selected-cell" : ""
        }`}
        id={cellId}
        data-velt-comment-target={cellId}
        onClick={() => onCellClick(cellId)}
        style={{
          minHeight: "100%",
          whiteSpace: "normal",
          wordWrap: "break-word",
          overflow: "visible",
          outline: isSelected ? "2px solid #facc15" : "none",
          outlineOffset: "-2px",
        }}
      >
        <div className="flex items-center ml-4">
          <span style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
            {params.value}
          </span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-[0.40rem] right-2">
          <VeltCommentTool targetElementId={cellId} />
        </div>
      </div>
    );
  },
);
GridCell.displayName = "GridCell";

export default function DocumentGrid() {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sortedRows, setSortedRows] = useState<DessertData[]>(rows);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: resolvedTheme === "dark" ? "dark" : "light",
        },
      }),
    [resolvedTheme],
  );

  const handleCellClick = (cellId: string) => {
    setSelectedCell(cellId);
  };

  const renderHeader = useMemo(
    () => (params: { field: string; headerName: string }) => (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <span>{params.headerName}</span>
        </div>
      </div>
    ),
    [],
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 80,
        flex: 0,
        headerAlign: "left",
        align: "left",
        renderCell: (params) => (
          <GridCell
            params={params}
            field="id"
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
          />
        ),
        renderHeader: () => renderHeader({ field: "id", headerName: "ID" }),
      },
      {
        field: "name",
        headerName: "Dessert",
        width: 180,
        flex: 1,
        minWidth: 120,
        headerAlign: "left",
        align: "left",
        renderCell: (params) => (
          <GridCell
            params={params}
            field="name"
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
          />
        ),
        renderHeader: () =>
          renderHeader({ field: "name", headerName: "Dessert" }),
      },
      {
        field: "calories",
        headerName: "Calories",
        type: "number",
        width: 120,
        flex: 0.8,
        minWidth: 90,
        headerAlign: "left",
        align: "left",
        renderCell: (params) => (
          <GridCell
            params={params}
            field="calories"
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
          />
        ),
        renderHeader: () =>
          renderHeader({ field: "calories", headerName: "Calories" }),
      },
      {
        field: "fat",
        headerName: "Fat (g)",
        type: "number",
        width: 120,
        flex: 0.7,
        minWidth: 80,
        headerAlign: "left",
        align: "left",
        renderCell: (params) => (
          <GridCell
            params={params}
            field="fat"
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
          />
        ),
        renderHeader: () =>
          renderHeader({ field: "fat", headerName: "Fat (g)" }),
      },
      {
        field: "carbs",
        headerName: "Carbs (g)",
        type: "number",
        width: 120,
        flex: 0.7,
        minWidth: 80,
        headerAlign: "left",
        align: "left",
        renderCell: (params) => (
          <GridCell
            params={params}
            field="carbs"
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
          />
        ),
        renderHeader: () =>
          renderHeader({ field: "carbs", headerName: "Carbs (g)" }),
      },
      {
        field: "protein",
        headerName: "Protein (g)",
        type: "number",
        width: 120,
        flex: 0.7,
        minWidth: 80,
        headerAlign: "left",
        align: "left",
        renderCell: (params) => (
          <GridCell
            params={params}
            field="protein"
            selectedCell={selectedCell}
            onCellClick={handleCellClick}
          />
        ),
        renderHeader: () =>
          renderHeader({ field: "protein", headerName: "Protein (g)" }),
      },
    ],
    [selectedCell, handleCellClick, renderHeader],
  );

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* [Velt] Main comments component for the document */}
      <VeltComments
        popoverMode={true}
        popoverTriangleComponent={true}
        darkMode={theme === "dark"}
      />

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Box
          sx={{
            height: "100%",
            width: "100%",
            margin: "0",
            position: "relative",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              minWidth: "920px",
              borderRight: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                "& .MuiDataGrid-root": {
                  border: "none",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRight: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
                },
                "& .MuiDataGrid-main": {
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                },
                "& .MuiDataGrid-virtualScroller": {
                  flex: 1,
                },
                "& .MuiDataGrid-footerContainer": {
                  position: "sticky",
                  bottom: 0,
                  backgroundColor: "var(--bg-background)",
                  borderTop: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
                },
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                rowHeight={56}
                columnHeaderHeight={56}
                disableColumnMenu
                disableRowSelectionOnClick
                hideFooter={false}
                pagination
                paginationModel={{ page: 0, pageSize: 15 }}
                pageSizeOptions={[15]}
                sx={{
                  height: "100%",
                  width: "100%",
                  color: "text.primary",
                  backgroundColor: "hsl(var(--background))",
                  borderColor:
                    resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5",
                  "& .MuiDataGrid-cell": {
                    padding: "0px",
                    backgroundColor: "hsl(var(--background))",
                    borderRight: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
                    borderBottom: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
                    borderTop: "none",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      backgroundColor:
                        resolvedTheme === "dark"
                          ? "rgba(31, 41, 55, 1)"
                          : "rgba(243, 244, 246, 1)",
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                      outline: "15px solid #facc15 !important",
                      outlineOffset: "15px !important",
                      backgroundColor: "transparent !important",
                    },
                    "&:focus": {
                      outline: "none !important",
                      "--DataGrid-t-color-interactive-focus":
                        "transparent !important",
                    },
                    "&:focus-within": {
                      outline: "none !important",
                      "--DataGrid-t-color-interactive-focus":
                        "transparent !important",
                    },
                  },
                  "& .MuiDataGrid-row": {
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  },

                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "hsl(var(--background))",
                    borderBottom: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
                    color: `${
                      resolvedTheme === "dark"
                        ? "hsl(var(--muted-foreground))"
                        : " hsl(var(--muted-foreground))"
                    }`,
                  },
                  "& .MuiDataGrid-columnHeader": {
                    backgroundColor: "hsl(var(--background))",
                    borderRight: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
                    padding: "0 16px",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: `1px solid ${resolvedTheme === "dark" ? "#ffffff14" : "#f5f5f5"}`,
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
}
