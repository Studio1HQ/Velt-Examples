'use client';

import { VeltProvider } from "@veltdev/react";


export default function VeltProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    if (!process.env.NEXT_PUBLIC_VELT_API_KEY) {
        throw new Error('VELT_API_KEY environment variable is required');
    }

    return (
        <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY!}>
            {children}
        </VeltProvider>
    );
}