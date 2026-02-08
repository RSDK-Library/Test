"use client"

import * as ui_card from "@/components/ui/card"
import * as ui_sidebar from "@/components/ui/sidebar"
import * as lucide from "lucide-react"

import * as dialogs from '@/app/controls/dialogs'

import HomeEngineButton from "@/app/controls/home-engine-button"

const data = [
    {
        title: "RSDKv5U",
        description: "RSDKv5U.wasm",
        icon: "./assets/RSDKv5U.svg",
        fs_directory: "RSDKv5U",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv5U.wasm"
    },
    {
        title: "RSDKv5",
        description: "RSDKv5.wasm",
        icon: "./assets/RSDKv5.svg",
        fs_directory: "RSDKv5",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv5.wasm"
    },
    {
        title: "RSDKv4",
        description: "RSDKv4.wasm",
        icon: "./assets/RSDKv4.svg",
        fs_directory: "RSDKv4",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv4.wasm"
    },
    {
        title: "RSDKv3",
        description: "RSDKv3.wasm",
        icon: "./assets/RSDKv3.svg",
        fs_directory: "RSDKv3",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv3.wasm"
    },
    {
        title: "RSDKv2",
        description: "RSDKv2.wasm",
        icon: "./assets/RSDKv2.svg",
        fs_directory: "RSDKv2",
        executable: "https://github.com/Jds2ce/RSDKv5-Decompilation/RSDKv2.wasm"
    },
]



export default function Page() {
    return (
        <div className="flex items-center justify-left">
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {data.map((engine) => (
                    <HomeEngineButton
                        key={engine.title}
                        title={engine.title}
                        description={engine.description}
                        icon={engine.icon}
                    />
                ))}

                <dialogs.SettingsDialog />
                <dialogs.FolderCreateDialog />
                <dialogs.FolderDeleteDialog />
            </div>
        </div>
    )
}