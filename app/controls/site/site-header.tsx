"use client"

// ---------------
// Library Imports
// ---------------

import * as React from "react"

// ---------------------
// Types
// ---------------------

interface SiteHeaderProps {
    children?: React.ReactNode
    title?: string
}

// ---------------------
// Component Definitions
// ---------------------

export function SiteHeader({ children, title }: SiteHeaderProps): React.JSX.Element {
    return (
        <header className="PWA-Title-Draggable site-header pl-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                {title && <h1 className="text-base font-medium">{title}</h1>}
                <div className="ml-auto flex items-center gap-2">
                    {children && children}
                </div>
            </div>
        </header>
    )
}