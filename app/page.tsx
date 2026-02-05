"use client"

import * as ui_card from "@/components/ui/card"
import * as ui_sidebar from "@/components/ui/sidebar"
import * as lucide from "lucide-react"

import * as dialogs from '@/app/controls/dialogs'

import HomeEngineButton from "@/app/controls/home-engine-button"

const data = [
    {
        title: "RSDKv5U",
        description: "Jds2ce/RSDKv5-Decompilation",
        icon: "./assets/RSDKv5U.svg",
        fs_directory: "RSDKv5U",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv5U.wasm"
    },
    {
        title: "RSDKv5",
        description: "Jds2ce/RSDKv5-Decompilation",
        icon: "./assets/RSDKv5.svg",
        fs_directory: "RSDKv5",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv5.wasm"
    },
    {
        title: "RSDKv4",
        description: "Jds2ce/RSDKv4-Decompilation",
        icon: "./assets/RSDKv4.svg",
        fs_directory: "RSDKv4",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv4.wasm"
    },
    {
        title: "RSDKv3",
        description: "Jds2ce/RSDKv3-Decompilation",
        icon: "./assets/RSDKv3.svg",
        fs_directory: "RSDKv3",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv3.wasm"
    },
    {
        title: "RSDKv2",
        description: "Jds2ce/RSDKv2-Decompilation",
        icon: "./assets/RSDKv2.svg",
        fs_directory: "RSDKv2",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv2.wasm"
    },
]



export default function Page() {
    return (
        <div className="flex h-svh items-center justify-center">
            <dialogs.SettingsDialog />
            <dialogs.FolderCreateDialog />
            <dialogs.FolderDeleteDialog />

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">


                { /*
                {data.map((engine) => (
                    <HomeEngineButton
                        key={engine.title}
                        title={engine.title}
                        description={engine.description}
                        icon={engine.icon}
                    />
                ))}
                */ }

            </div>
        </div>
    )
}