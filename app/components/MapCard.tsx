'use client';

import { ReactNode } from 'react';

interface MapCardProps {
    children: ReactNode;
}

export default function MapCard({
    children,
}: MapCardProps) {
    return (
        <div className="flex flex-col w-full overflow-hidden rounded-2xl border --color-background shadow-xl dark:border-slate-800 dark:bg-slate-900">
            {/* Map Viewport Container */}
            <div className="relative h-137.5 w-full overflow-hidden rounded-2xl --color-background dark:bg-slate-950">
                {children}
            </div>
        </div>
    );
}