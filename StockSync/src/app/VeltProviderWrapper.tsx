'use client';

import { VeltComments, VeltProvider } from "@veltdev/react";


export default function VeltProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log('Velt API Key:', process.env.NEXT_PUBLIC_VELT_API_KEY ? 'Present' : 'Missing');

    if (!process.env.NEXT_PUBLIC_VELT_API_KEY) {
        throw new Error('VELT_API_KEY environment variable is required');
    }

    return (
        <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY!}>
            <VeltComments />
            {children}
        </VeltProvider>
    );
}