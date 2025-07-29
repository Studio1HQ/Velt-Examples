import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 space-y-2 dark:bg-[#25293c] dark:text-white">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">{title}</h2>
      <div className="space-y-1">{children}</div>
    </div>
  );
}
