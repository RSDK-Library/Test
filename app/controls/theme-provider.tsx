"use client"

// ---------------
// Library Imports
// ---------------

import * as lib_settings from '@/lib/settings'
import * as React from 'react'

// --------------------
// UI Component Imports
// --------------------

import * as themes from "next-themes"

// ---------------------
// Component Definitions
// ---------------------

export function ThemeProvider({ children, ...props }: themes.ThemeProviderProps) {
	const [mounted, setMounted] = React.useState(false);
	const settings = lib_settings.Load();

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return <>{children}</>;

	return (
		<themes.ThemeProvider
            defaultTheme={settings.theme}
            enableSystem
			{...props}
		>
			{children}
		</themes.ThemeProvider>
	);
}