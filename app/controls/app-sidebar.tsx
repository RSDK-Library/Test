"use client"

// ---------------
// Library Imports
// ---------------

import * as React from "react"
import * as lucide from "lucide-react"
import * as simple from "@icons-pack/react-simple-icons"

// --------------------
// UI Component Imports
// --------------------

import * as ui_sidebar from "@/components/ui/sidebar"

// ---------------------
// Component Definitions
// ---------------------

const data = {
    library: [
        { title: "Engine Sources", icon: lucide.Package, action: Action_EngineSources },
        { title: "File Manager", icon: lucide.FolderClosed, action: Action_FileManager },
    ],
    documentation: [
        { title: "Website Development", icon: lucide.CloudFog, action: Action_WebsiteDevelopment },
        { title: "Engine Development", icon: lucide.GamepadDirectional, action: Action_EngineDevelopment },
        { title: "Bug Reports", icon: lucide.BadgeAlert, action: Action_BugReports },
    ],
    footer: [
        { title: "Github", icon: simple.SiGithub, action: Action_Github },
        { title: "Settings", icon: lucide.Settings, action: Action_Settings },
    ],
}

export function AppSidebar(): React.JSX.Element {
    return (
        <ui_sidebar.Sidebar>
            <ui_sidebar.SidebarHeader className='PWA-Title-Draggable w-full h-12 shrink-0 border-b'>
                <ui_sidebar.SidebarMenu>
                    <ui_sidebar.SidebarMenuItem>
                        <ui_sidebar.SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <a href="#">
                                <img src="./assets/RSDKv5U.svg" className="!size-6" />
                                <span className="text-base font-semibold">RSDK-Library</span>
                            </a>
                        </ui_sidebar.SidebarMenuButton>
                    </ui_sidebar.SidebarMenuItem>
                </ui_sidebar.SidebarMenu>
            </ui_sidebar.SidebarHeader>
            <ui_sidebar.SidebarContent>
                <ui_sidebar.SidebarGroup>
                    <ui_sidebar.SidebarGroupLabel>Library</ui_sidebar.SidebarGroupLabel>
                    <ui_sidebar.SidebarMenu>
                        {data.library.map((item) => (
                            <ui_sidebar.SidebarMenuItem key={item.title}>
                                <ui_sidebar.SidebarMenuButton asChild onClick={item.action}>
                                    <a href="#">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </ui_sidebar.SidebarMenuButton>
                            </ui_sidebar.SidebarMenuItem>
                        ))}
                    </ui_sidebar.SidebarMenu>
                </ui_sidebar.SidebarGroup>
                <ui_sidebar.SidebarGroup>
                    <ui_sidebar.SidebarGroupLabel>Documentation</ui_sidebar.SidebarGroupLabel>
                    <ui_sidebar.SidebarMenu>
                        {data.documentation.map((item) => (
                            <ui_sidebar.SidebarMenuItem key={item.title}>
                                <ui_sidebar.SidebarMenuButton asChild onClick={item.action}>
                                    <a href="#">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </ui_sidebar.SidebarMenuButton>
                            </ui_sidebar.SidebarMenuItem>
                        ))}
                    </ui_sidebar.SidebarMenu>
                </ui_sidebar.SidebarGroup>
            </ui_sidebar.SidebarContent>
            <ui_sidebar.SidebarSeparator className="mx-0" />
            <ui_sidebar.SidebarFooter>
                <ui_sidebar.SidebarMenu>
                    {data.footer.map((item) => (
                        <ui_sidebar.SidebarMenuItem key={item.title}>
                            <ui_sidebar.SidebarMenuButton asChild onClick={item.action}>
                                <a href="#">
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </ui_sidebar.SidebarMenuButton>
                        </ui_sidebar.SidebarMenuItem>
                    ))}
                </ui_sidebar.SidebarMenu>
            </ui_sidebar.SidebarFooter>
        </ui_sidebar.Sidebar>
    )
}

// ----------------
// Sidebar: Library
// ----------------

function Action_EngineSources(): void {
}

function Action_FileManager(): void {
}

// ----------------------
// Sidebar: Documentation
// ----------------------

function Action_WebsiteDevelopment(): void {
}

function Action_EngineDevelopment(): void {
}

function Action_BugReports(): void {
}

// ---------------
// Sidebar: Footer
// ---------------

function Action_Github(): void {
    window.open("https://github.com/RSDK-Library", "_blank");
}

function Action_Settings(): void {
}