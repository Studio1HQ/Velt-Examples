'use client';

import { VeltComments } from '@veltdev/react';

export default function VeltClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <main className="flex-1 overflow-auto">
                <VeltComments />
                {children}
            </main>
        </div>
    );
} 