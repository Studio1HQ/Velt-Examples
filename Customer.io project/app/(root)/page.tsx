"use client";

import { useState } from 'react';
import { EmailComposer } from '@/components/EmailComposer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <EmailComposer />
      </div>
    </QueryClientProvider>
  );
}