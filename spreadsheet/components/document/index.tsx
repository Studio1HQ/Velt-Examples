"use client";

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

export default function Document() {
  const [missions, setMissions] = useState<SpreadsheetData[]>(missionData);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  // [VELT] Initialize the document with a unique identifier and metadata.

  <VeltInitializeDocument />;

  return (
    <>
      {/* / [VELT] Initialize velt comment  */}
      <VeltComments popoverMode={true} popoverTriangleComponent={true} />
      <VeltCursor />

      <div className="flex-1 overflow-auto relative">
        <table className="w-full border-separate border-spacing-0 ">
          <thead>
            <tr className="text-left ">
              <th className="w-12 border-r border-b p-2 bg-background  sticky top-0"></th>
              <th className="p-2 border-r border-b bg-background top-0 min-w-[200px] text-center">
                A
              </th>
              <th className="p-2 border-r border-b bg-background  min-w-[200px] text-center">
                B
              </th>
              <th className="p-2 border-r border-b bg-background  min-w-[200px] text-center">
                C
              </th>
              <th className="p-2 border-r border-b bg-background  min-w-[200px] text-center">
                D
              </th>
              <th className="p-2 border-r border-b bg-background  min-w-[200px] text-center">
                E
              </th>
              <th className="p-2 border-r border-b bg-background  min-w-[200px] text-center">
                F
              </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.id} className="border-b ">
                <td className="border-r p-4 text-center text-muted-foreground bg-background sticky left-0 ">
                  {mission.id}
                </td>
                <td
                  className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-mission`
                    ? "outline outline-2 outline-yellow-400 rounded-md"
                    : ""
                    }`}
                  id={`cell-${mission.id}-mission`}
                  data-velt-comment-target={`cell-${mission.id}-mission`}
                  onClick={() => setSelectedCell(`cell-${mission.id}-mission`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.mission}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* [VELT] Add a comment tool to the mission cell */}
                      <VeltCommentTool
                        targetElementId={`cell-${mission.id}-mission`}
                      />
                      {/* [VELT] Add a comment bubble to the mission cell */}
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-mission`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </td>
                <td
                  className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-destination`
                    ? "outline outline-2 outline-yellow-400 rounded-md"
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
                      {/* [VELT] Add a comment tool to the destination cell */}
                      <VeltCommentTool
                        targetElementId={`cell-${mission.id}-destination`}
                      />
                      {/* [VELT] Add a comment bubble to the destination cell */}
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-destination`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </td>
                <td
                  className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-type`
                    ? "outline outline-2 outline-yellow-400 rounded-md"
                    : ""
                    }`}
                  id={`cell-${mission.id}-type`}
                  data-velt-comment-target={`cell-${mission.id}-type`}
                  onClick={() => setSelectedCell(`cell-${mission.id}-type`)}
                >
                  <div className="flex items-center justify-between">
                    <span>{mission.missionType}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* [VELT] Add a comment tool to the type cell */}
                      <VeltCommentTool
                        targetElementId={`cell-${mission.id}-type`}
                      />
                      {/* [VELT] Add a comment bubble to the type cell */}
                      <VeltCommentBubble
                        targetElementId={`cell-${mission.id}-type`}
                        commentCountType="total"
                      />
                    </div>
                  </div>
                </td>
                {["D", "E", "F"].map((col) => (
                  <td
                    key={col}
                    className={`p-2 relative group  border hover:bg-muted/80 ${selectedCell === `cell-${mission.id}-${col}`
                      ? "outline outline-2 outline-yellow-400 rounded-md"
                      : ""
                      }`}
                    id={`cell-${mission.id}-${col}`}
                    data-velt-comment-target={`cell-${mission.id}-${col}`}
                    onClick={() => setSelectedCell(`cell-${mission.id}-${col}`)}
                  >
                    <div className="flex items-center justify-between">
                      <span></span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* [VELT] Add a comment tool to the cell */}
                        <VeltCommentTool
                          targetElementId={`cell-${mission.id}-${col}`}
                        />
                        {/* [VELT] Add a comment bubble to the cell */}
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
