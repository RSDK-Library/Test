"use client"

// --------------------
// UI Component Imports
// --------------------

import * as themes from "next-themes"

// ---------------------
// Component Definitions
// ---------------------

export function ThemeProvider({ children, ...props }: themes.ThemeProviderProps) {
	return <themes.ThemeProvider {...props}>{children}</themes.ThemeProvider>
}
