"use client";

import { missionData } from "@/lib/data";
import type { SpreadsheetData } from "@/lib/types";
import { useState } from "react";

export default function Document() {
  const [missions, setMissions] = useState<SpreadsheetData[]>(missionData);

  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left">
            <th className="w-12 border-r border-b p-2 bg-background sticky top-0"></th>
            <th className="p-2 border-r border-b bg-background sticky top-0 min-w-[200px] text-center">A</th>
            <th className="p-2 border-r border-b bg-background sticky top-0 min-w-[200px] text-center">B</th>
            <th className="p-2 border-r border-b bg-background sticky top-0 min-w-[200px] text-center">C</th>
            <th className="p-2 border-r border-b bg-background sticky top-0 min-w-[200px] text-center">D</th>
            <th className="p-2 border-r border-b bg-background sticky top-0 min-w-[200px] text-center">E</th>
            <th className="p-2 border-r border-b bg-background sticky top-0 min-w-[200px] text-center">F</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id} className="border-b hover:bg-muted/30">
              <td className="border-r p-4  rounded-md text-center text-muted-foreground bg-background sticky left-0">
                {mission.id}
              </td>
              <td
                className={`border-r p-2 ${mission.id === 1 ? "font-semibold dark:bg-background dark:border-neutral-800 border" : ""}`}
              >
                {mission.mission}
              </td>
              <td
                className={`border-r p-2 ${mission.id === 1 ? "font-semibold dark:bg-background dark:border-neutral-800 border border-neutral-200" : ""}`}
              >
                {mission.destination}
              </td>
              <td
                className={`border-r p-2 ${mission.id === 1 ? "font-semibold dark:bg-background dark:border-neutral-800 border border-neutral-200" : ""}`}
              >
                {mission.missionType}
              </td>
              <td className="border-r p-2"></td>
              <td className="border-r p-2"></td>
              <td className="border-r p-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

