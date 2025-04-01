export interface SpreadsheetData {
  id: number;
  mission: string;
  destination: string;
  missionType: "Manned" | "Unmanned";
}

export type User = {
  userId: string;
  name: string;
  email: string;
  profileUrl: string;
  organizationId: string;
};
