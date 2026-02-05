import * as Next from 'next'

// --------------------
// UI Component Imports
// --------------------

import { Figtree, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/app/controls/theme-provider'
import "./globals.css";

// ------------------
// UI Component Fonts
// ------------------

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-sans'
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// ---------------------
// Component Definitions
// ---------------------

export const metadata: Next.Metadata = {
    applicationName: 'RSDK',
    title: 'RSDK-Library',
    description: 'RSDK-Library website',
    manifest: "./manifest.webmanifest",
    appleWebApp: {
        capable: true,
        title: 'RSDK',
    },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={figtree.variable} suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute='class'>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
