// ---------------
// Library Imports
// ---------------

import * as Next from 'next'

// --------------------
// UI Component Imports
// --------------------

import { Figtree, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/app/controls/theme-provider'
import { AppSidebar } from "@/app/controls/app-sidebar"
import { SiteHeader } from "@/app/controls/site/site-header"
import * as ui_sidebar from "@/components/ui/sidebar"
import "./globals.css";

import * as ui_button from "@/components/ui/button"
import * as lucide from "lucide-react"

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
                    <ui_sidebar.SidebarProvider>
                        <AppSidebar />
                        <ui_sidebar.SidebarInset>
                            <main>
                                <SiteHeader title='Engine Sources' >
                                    <ui_button.Button variant="ghost" size="lg">
                                        <lucide.ListPlus />
                                    </ui_button.Button>
                                </SiteHeader>

                                <div className="p-8">
                                    {children}
                                </div>
                            </main>
                        </ui_sidebar.SidebarInset>
                    </ui_sidebar.SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
