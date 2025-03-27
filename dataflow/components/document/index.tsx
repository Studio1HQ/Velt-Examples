"use client";

import { missionData } from "@/lib/data";
import type { SpreadsheetData } from "@/lib/types";
import {
  VeltCommentBubble,
  VeltCommentTool,
  VeltComments,
  VeltCursor,
  useSetDocument
} from "@veltdev/react";
import { useState } from "react";

export default function Document() {
  const [missions, setMissions] = useState<SpreadsheetData[]>(missionData);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  useSetDocument('space-missions-spreadsheet', {
    documentName: 'Space Missions Spreadsheet'
  });

  return (
    <>
      {/* Enable Velt features */}
      <VeltComments popoverMode={true} popoverTriangleComponent={true} />
      <VeltCursor />


      {/* Main content */}
      <div className="flex-1 overflow-auto relative">
        <table className="w-full border-separate border-spacing-0">
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
              <tr key={mission.id} className="border-b ">
                <td className="border-r p-4 text-center text-muted-foreground bg-background sticky left-0 ">
                  {mission.id}
                </td>
                <td
                  className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-mission` ? 'outline outline-2 outline-yellow-400 rounded-md' : ''}`}
                  id={`cell-${mission.id}-mission`}
                  data-velt-comment-target={`cell-${mission.id}-mission`}
                  onClick={() => setSelectedCell(`cell-${mission.id}-mission`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.mission}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool targetElementId={`cell-${mission.id}-mission`} />
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-mission`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </td>
                <td
                  className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-destination` ? 'outline outline-2 outline-yellow-400 rounded-md' : ''}`}
                  id={`cell-${mission.id}-destination`}
                  data-velt-comment-target={`cell-${mission.id}-destination`}
                  onClick={() => setSelectedCell(`cell-${mission.id}-destination`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.destination}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool targetElementId={`cell-${mission.id}-destination`} />
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-destination`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </td>
                <td
                  className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-type` ? 'outline outline-2 outline-yellow-400 rounded-md' : ''}`}
                  id={`cell-${mission.id}-type`}
                  data-velt-comment-target={`cell-${mission.id}-type`}
                  onClick={() => setSelectedCell(`cell-${mission.id}-type`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.missionType}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <VeltCommentTool targetElementId={`cell-${mission.id}-type`} />
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-type`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </td>
                {['D', 'E', 'F'].map((col) => (
                  <td
                    key={col}
                    className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-${col}` ? 'outline outline-2 outline-yellow-400 rounded-md' : ''}`}
                    id={`cell-${mission.id}-${col}`}
                    data-velt-comment-target={`cell-${mission.id}-${col}`}
                    onClick={() => setSelectedCell(`cell-${mission.id}-${col}`)}
                  >
                    <div className="flex items-center justify-between">
                      <span></span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <VeltCommentTool targetElementId={`cell-${mission.id}-${col}`} />
                        <VeltCommentBubble
                          targetElementId={`cell-${mission.id}-${col}`}
                          commentCountType="total"
                        />
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

