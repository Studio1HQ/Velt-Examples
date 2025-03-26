"use client";

import { missionData } from "@/lib/data";
import type { SpreadsheetData } from "@/lib/types";
import { useState } from "react";

export default function Document() {
  const [missions, setMissions] = useState<SpreadsheetData[]>(missionData);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: string; } | null>({ row: 2, col: 'A' });

  const handleCellSelect = (row: number, col: string) => {
    if (selectedCell?.row === row && selectedCell?.col === col) {
      setSelectedCell(null);
    } else {
      setSelectedCell({ row, col });
    }
  };

  const isSelected = (row: number, col: string) => {
    return selectedCell?.row === row && selectedCell?.col === col;
  };

  return (
    <div className="flex-1 overflow-auto relative">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead className="sticky top-0 z-10">
            <tr className="text-left">
              <th className="w-12 border-r border-b p-2  text-gray-400 sticky left-0 z-20"></th>
              <th className="p-2 border-r border-b  text-gray-400 min-w-[200px] text-center">A</th>
              <th className="p-2 border-r border-b  text-gray-400 min-w-[200px] text-center">B</th>
              <th className="p-2 border-r border-b  text-gray-400 min-w-[200px] text-center">C</th>
              <th className="p-2 border-r border-b  text-gray-400 min-w-[200px] text-center">D</th>
              <th className="p-2 border-r border-b  text-gray-400 min-w-[200px] text-center">E</th>
              <th className="p-2 border-r border-b  text-gray-400 min-w-[200px] text-center">F</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.id} className="border-b  ">
                <td className="border-r  p-4 text-center text-gray-400  sticky left-0 z-10">
                  {mission.id}
                </td>
                <td
                  className={`border-r  p-2 cursor-pointer relative ${isSelected(mission.id, 'A') ? "bg-amber-500/10" : ""
                    }`}
                  onClick={() => handleCellSelect(mission.id, 'A')}
                >
                  {isSelected(mission.id, 'A') && (
                    <div className="absolute inset-0 border-2 border-amber-400 rounded-md pointer-events-none"></div>
                  )}
                  <div className="min-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {mission.mission}
                  </div>
                </td>
                <td
                  className={`border-r  p-2 cursor-pointer relative ${isSelected(mission.id, 'B') ? "bg-amber-500/10" : ""
                    }`}
                  onClick={() => handleCellSelect(mission.id, 'B')}
                >
                  {isSelected(mission.id, 'B') && (
                    <div className="absolute inset-0 border-2 border-amber-400 rounded-md pointer-events-none"></div>
                  )}
                  <div className="min-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {mission.destination}
                  </div>
                </td>
                <td
                  className={`border-r  p-2 cursor-pointer relative ${isSelected(mission.id, 'C') ? "bg-amber-500/10" : ""
                    }`}
                  onClick={() => handleCellSelect(mission.id, 'C')}
                >
                  {isSelected(mission.id, 'C') && (
                    <div className="absolute inset-0 border-2 border-amber-400 rounded-md pointer-events-none"></div>
                  )}
                  <div className="min-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {mission.missionType}
                  </div>
                </td>
                {['D', 'E', 'F'].map((col) => (
                  <td
                    key={col}
                    className={`border-r  p-2 cursor-pointer relative ${isSelected(mission.id, col) ? "bg-amber-500/10" : ""
                      }`}
                    onClick={() => handleCellSelect(mission.id, col)}
                  >
                    {isSelected(mission.id, col) && (
                      <div className="absolute inset-0 border-2 border-amber-400 rounded-md pointer-events-none"></div>
                    )}
                    <div className="min-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

