"use client"

// ---------------------
// Component Definitions
// ---------------------

export enum themeType {
    system = "system",
    light = "light",
    dark = "dark",
}

export interface ISettings {
    theme: themeType;
    disableFileConf: boolean;
    mobileLayout: boolean;
    enablePlus: boolean;
}

const defaultSettings: ISettings = {
    theme: themeType.system,
    disableFileConf: false,
    mobileLayout: false,
    enablePlus: false,
};

export const Load = (): ISettings => {
    if (typeof window === "undefined") return defaultSettings;

    const savedSettings = localStorage.getItem("rsdk-library-settings");
    if (savedSettings)
        return JSON.parse(savedSettings);

    return defaultSettings;
};

export const Save = (settings: ISettings) => {
    if (typeof window !== "undefined")
        localStorage.setItem("rsdk-library-settings", JSON.stringify(settings));
};

export const Update = (updates: Partial<ISettings>) => {
    Save({ ...Load(), ...updates });
};