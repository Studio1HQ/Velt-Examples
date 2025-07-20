"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { EmailData } from "./EmailComposer";
import TiptapEditor from "./TiptapEditor";
import InfoCard from "./InfoCard";
import StatusPill from "./StatusPill";
import TextRow from "./TextRow";

interface EditorAreaProps {
  emailData: EmailData;
  updateEmailData: (updates: Partial<EmailData>) => void;
}

export const EditorArea: React.FC<EditorAreaProps> = ({
  emailData,
  updateEmailData,
}) => {
  return (
    <div className="flex-1 bg-white">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <Input
              value={emailData.to}
              onChange={(e) => updateEmailData({ to: e.target.value })}
              placeholder="Enter recipient email..."
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 p-6 space-y-6">
        <div className="w-full lg:max-w-[70vw] col-span-2 mx-auto">
          <TiptapEditor />
        </div>
        <main className="space-y-6">
          {/* Journey Section */}
          <InfoCard title="Journey">
            <TextRow label="Started" value="17 minutes ago" />
            <div className="flex justify-between items-center text-sm text-gray-700">
              <span>Status</span>
              <StatusPill status="Active" />
            </div>
            <TextRow label="Next Step" value="In 3 days" />
            <div className="text-right text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                View full journey →
              </a>
            </div>
          </InfoCard>

          {/* Metrics Section */}
          <InfoCard title="Metrics">
            <TextRow label="Human opened" />
            <TextRow label="Human clicked" />
            <TextRow label="Prefetch opened" />
            <TextRow label="Machine clicked" />
            <TextRow label="Sent" value="Today at 12:34 am" />
            <TextRow label="Delivered" value="Today at 12:34 am" />
            <TextRow label="Opened" />
            <TextRow label="Clicked" />
          </InfoCard>
        </main>
      </div>
    </div>
  );
};
