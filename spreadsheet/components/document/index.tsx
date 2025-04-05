/* [Velt] This component implements the spreadsheet document 
  with Velt collaboration features including comments and cursor tracking. */
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { missionData } from "@/lib/data";
import type { SpreadsheetData } from "@/lib/types";
import {
  VeltCommentBubble,
  VeltCommentTool,
  VeltComments,
  VeltCursor,
} from "@veltdev/react";
import { useState } from "react";
import VeltInitializeDocument from "../velt/VeltInitializeDocument";

const common_header_style =
  "hidden lg:table-cell w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14]  bg-transparent";
export default function Document() {
  const [missions, setMissions] = useState<SpreadsheetData[]>(missionData);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof SpreadsheetData | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "asc",
  });

  const handleSort = (key: keyof SpreadsheetData) => {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...missions].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setMissions(sortedData);
  };
  /* [VELT] Initialize the document with a unique identifier and metadata. */
  <VeltInitializeDocument />;
  return (
    <>
      {/* [Velt] Main comments component for the document */}
      <VeltComments popoverMode={true} popoverTriangleComponent={true} />
      {/* [Velt] Cursor tracking component for real-time collaboration */}
      <VeltCursor />

      <div className="flex-1 overflow-auto relative shrink-0">
        {/* ✅ Enforce `table-fixed` to ensure columns respect width constraints */}
        <Table className="w-full table-fixed border border-[#f5f5f5] dark:border-[#ffffff14] ">
          {/* Transparent Header */}
          <TableHeader className="bg-transparent">
            <TableRow>
              {/* ✅ First Column (Strict 8px Width) */}
              <TableHead className="w-[8px] min-w-[8px] max-w-[8px] !overflow-hidden !truncate border border-[#f5f5f5] dark:border-[#ffffff14] px-0">
                <div className="w-full overflow-hidden text-ellipsis"></div>
              </TableHead>

              {/* Other Columns (35px Width) */}
              {[
                { label: "A", key: "mission" },
                { label: "B", key: "destination" },
                { label: "C", key: "missionType" },
              ].map((col) => (
                <TableHead
                  key={col.key}
                  className="p-2 cursor-pointer w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14]  bg-transparent"
                  onClick={() => handleSort(col.key as keyof SpreadsheetData)}
                >
                  {col.label}{" "}
                  {sortConfig.key === col.key
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </TableHead>
              ))}
              <TableHead className={common_header_style}>D</TableHead>
              <TableHead className={common_header_style}>E</TableHead>
              <TableHead className={common_header_style}>F</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {missions.map((mission) => (
              <TableRow
                key={mission.id}
                className="border border-[#f5f5f5] dark:border-[#ffffff14] hover:bg-transparent"
              >
                {/* ✅ First Column */}
                <TableCell className="w-[8px] min-w-[8px] max-w-[8px] !overflow-hidden !truncate border border-[#f5f5f5] dark:border-[#ffffff14]">
                  {mission.id}
                </TableCell>

                {/* Mission Column */}
                <TableCell
                  className={`relative group hover:bg-gray-100 dark:hover:bg-gray-800 w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14]  ${
                    selectedCell === `cell-${mission.id}-mission`
                      ? "outline outline-2 outline-yellow-400"
                      : ""
                  }`}
                  id={`cell-${mission.id}-mission`}
                  data-velt-comment-target={`cell-${mission.id}-mission`}
                  onClick={() => setSelectedCell(`cell-${mission.id}-mission`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.mission}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* [Velt] Comment tool for adding comments to this cell */}
                      <VeltCommentTool
                        targetElementId={`cell-${mission.id}-mission`}
                      />
                      {/* [Velt] Comment bubble showing number of comments */}
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-mission`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </TableCell>

                {/* Destination Column */}
                <TableCell
                  className={`relative group hover:bg-gray-100 dark:hover:bg-gray-800 w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14]  ${
                    selectedCell === `cell-${mission.id}-destination`
                      ? "outline outline-2 outline-yellow-400"
                      : ""
                  }`}
                  id={`cell-${mission.id}-destination`}
                  data-velt-comment-target={`cell-${mission.id}-destination`}
                  onClick={() =>
                    setSelectedCell(`cell-${mission.id}-destination`)
                  }
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.destination}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool
                        targetElementId={`cell-${mission.id}-destination`}
                      />
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-destination`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </TableCell>
                {/* Mission Type Column */}
                <TableCell
                  className={`relative group hover:bg-gray-100 dark:hover:bg-gray-800 w-[35px] min-w-[35px] max-w-[35px] whitespace-nowrap overflow-hidden truncate border border-[#f5f5f5] dark:border-[#ffffff14]  ${
                    selectedCell === `cell-${mission.id}-type`
                      ? "outline outline-2 outline-yellow-400"
                      : ""
                  }`}
                  id={`cell-${mission.id}-type`}
                  data-velt-comment-target={`cell-${mission.id}-type`}
                  onClick={() => setSelectedCell(`cell-${mission.id}-type`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.missionType}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool
                        targetElementId={`cell-${mission.id}-type`}
                      />
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-type`}
                        commentCountType="total"
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
