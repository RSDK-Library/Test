import * as React from 'react'
import * as lucide from "lucide-react"

import * as ui_button from "@/components/ui/button"
import * as ui_card from "@/components/ui/card"

interface Props {
    icon?: string;
    title?: string;
    description?: string;
    launchClicked?: () => void;
    filesClicked?: () => void;
    disabled?: boolean;
}

const HomeEngineButton: React.FC<Props> = ({ icon, title, description, launchClicked, filesClicked, disabled = false }) => {
    return (
        <ui_card.Card className="relative mx-auto w-64 pt-0">
            <div className="relative flex items-center justify-center w-full h-32 bg-gray-200">
                <img
                    src={icon}
                    className="w-16 h-16 z-2 object-contain"
                    alt={title}
                />
                <div
                    className="absolute inset-0 z-1"
                    style={{ backgroundColor: "#121212" }}
                />
            </div>

            <ui_card.CardHeader>
                <ui_card.CardAction />
                <ui_card.CardTitle className="font-semibold">{title}</ui_card.CardTitle>
                <ui_card.CardDescription>{description}</ui_card.CardDescription>
            </ui_card.CardHeader>
        </ui_card.Card>
    );
};

export default HomeEngineButton;
