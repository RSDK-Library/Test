import * as React from 'react'
import * as lucide from "lucide-react"

import * as ui_button from "@/components/ui/button"
import * as ui_card from "@/components/ui/card"
import * as ui_tooltip from "@/components/ui/tooltip"

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
        <ui_card.Card className="relative w-64 pt-0">
            {/* icon */}
            <div className="relative flex items-center justify-center w-full h-32 border-b" style={{ backgroundColor: "#121212" }}>
                <img src={icon} className="w-16 h-16 z-2 object-contain" alt={title} />
            </div>

            <ui_card.CardHeader>
                <ui_card.CardAction>

                </ui_card.CardAction>
                <ui_card.CardTitle className="font-bold">{title}</ui_card.CardTitle>
                <ui_card.CardDescription className="font-semibold">{description}</ui_card.CardDescription>
            </ui_card.CardHeader>

            <ui_card.CardFooter className="p-1 gap-1">
                {/* Play */}
                <ui_tooltip.Tooltip>
                    <ui_tooltip.TooltipTrigger asChild>
                        <ui_button.Button variant="ghost" size="lg">
                            <lucide.Play />
                        </ui_button.Button>
                    </ui_tooltip.TooltipTrigger>
                    <ui_tooltip.TooltipContent>
                        <p>Play</p>
                    </ui_tooltip.TooltipContent>
                </ui_tooltip.Tooltip>

                {/* Open Files */}
                <ui_tooltip.Tooltip>
                    <ui_tooltip.TooltipTrigger asChild>
                        <ui_button.Button variant="ghost" size="lg">
                            <lucide.FolderClosedIcon />
                        </ui_button.Button>
                    </ui_tooltip.TooltipTrigger>
                    <ui_tooltip.TooltipContent>
                        <p>Open Files</p>
                    </ui_tooltip.TooltipContent>
                </ui_tooltip.Tooltip>

                {/* Favorite */}
                <ui_tooltip.Tooltip>
                    <ui_tooltip.TooltipTrigger asChild>
                        <ui_button.Button variant="ghost" size="lg">
                            <lucide.Star />
                        </ui_button.Button>
                    </ui_tooltip.TooltipTrigger>
                    <ui_tooltip.TooltipContent>
                        <p>Favorite</p>
                    </ui_tooltip.TooltipContent>
                </ui_tooltip.Tooltip>

                {/* Edit Entry */}
                <ui_tooltip.Tooltip>
                    <ui_tooltip.TooltipTrigger asChild>
                        <ui_button.Button variant="ghost" size="lg">
                            <lucide.PencilIcon />
                        </ui_button.Button>
                    </ui_tooltip.TooltipTrigger>
                    <ui_tooltip.TooltipContent>
                        <p>Edit Entry</p>
                    </ui_tooltip.TooltipContent>
                </ui_tooltip.Tooltip>
            </ui_card.CardFooter>
        </ui_card.Card>
    );
};

export default HomeEngineButton;
