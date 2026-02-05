// ------------------
// UI Component Fonts
// ------------------

import * as ui_alert from "@/components/ui/alert-dialog"
import * as ui_button from "@/components/ui/button"
import * as ui_field from "@/components/ui/field"
import * as ui_input from "@/components/ui/input"
import * as ui_label from "@/components/ui/label"
import * as ui_select from "@/components/ui/select"
import * as ui_switch from "@/components/ui/switch"
import * as lucide from "lucide-react"

// ---------------------
// Component Definitions
// ---------------------

export function SettingsDialog() {
    return (
        <ui_alert.AlertDialog>
            <form>
                <ui_alert.AlertDialogTrigger asChild>
                    <ui_button.Button variant="outline">Settings dialog</ui_button.Button>
                </ui_alert.AlertDialogTrigger>

                <ui_alert.AlertDialogContent size="sm" className="!max-w-sm">
                    <ui_alert.AlertDialogHeader>
                        <ui_alert.AlertDialogMedia>
                            <lucide.LucideSettings />
                        </ui_alert.AlertDialogMedia>
                        <ui_alert.AlertDialogTitle>Settings</ui_alert.AlertDialogTitle>
                        <ui_alert.AlertDialogDescription>
                            Make edits to the site/engine configuration
                        </ui_alert.AlertDialogDescription>
                    </ui_alert.AlertDialogHeader>

                    <ui_field.FieldGroup>
                        <ui_field.Field>
                            <ui_field.FieldLabel htmlFor="theme-form">Theme</ui_field.FieldLabel>
                            <ui_select.Select defaultValue="system">
                                <ui_select.SelectTrigger id="theme-form">
                                    <ui_select.SelectValue placeholder="Select a theme" />
                                </ui_select.SelectTrigger>
                                <ui_select.SelectContent>
                                    <ui_select.SelectGroup>
                                        <ui_select.SelectItem value="system">System theme</ui_select.SelectItem>
                                        <ui_select.SelectItem value="light">Light theme</ui_select.SelectItem>
                                        <ui_select.SelectItem value="dark">Dark theme</ui_select.SelectItem>
                                    </ui_select.SelectGroup>
                                </ui_select.SelectContent>
                            </ui_select.Select>
                        </ui_field.Field>

                        <ui_field.FieldLabel htmlFor="mobile-layout-switch">
                            <ui_field.Field orientation="horizontal">
                                <ui_field.FieldContent>
                                    <ui_field.FieldTitle>Disable confirmation dialogs</ui_field.FieldTitle>
                                    <ui_field.FieldDescription>
                                        Disables dialogs for the file manager
                                    </ui_field.FieldDescription>
                                </ui_field.FieldContent>
                                <ui_switch.Switch id="mobile-layout-switch" />
                            </ui_field.Field>
                        </ui_field.FieldLabel>

                        <ui_field.FieldLabel htmlFor="mobile-layout-switch">
                            <ui_field.Field orientation="horizontal">
                                <ui_field.FieldContent>
                                    <ui_field.FieldTitle>Mobile layout</ui_field.FieldTitle>
                                    <ui_field.FieldDescription>
                                        Use the mobile layout on supported engines
                                    </ui_field.FieldDescription>
                                </ui_field.FieldContent>
                                <ui_switch.Switch id="mobile-layout-switch" />
                            </ui_field.Field>
                        </ui_field.FieldLabel>

                        <ui_field.FieldLabel htmlFor="switch-share">
                            <ui_field.Field orientation="horizontal">
                                <ui_field.FieldContent>
                                    <ui_field.FieldTitle>Plus DLC</ui_field.FieldTitle>
                                    <ui_field.FieldDescription>
                                        Use the Plus DLC on supported engines
                                    </ui_field.FieldDescription>
                                </ui_field.FieldContent>
                                <ui_switch.Switch id="switch-share" />
                            </ui_field.Field>
                        </ui_field.FieldLabel>
                    </ui_field.FieldGroup>

                    <ui_alert.AlertDialogFooter>
                        <ui_alert.AlertDialogCancel>Cancel</ui_alert.AlertDialogCancel>
                        <ui_alert.AlertDialogAction>Save changes</ui_alert.AlertDialogAction>
                    </ui_alert.AlertDialogFooter>
                </ui_alert.AlertDialogContent>
            </form>
        </ui_alert.AlertDialog>
    )
}

export function FolderCreateDialog() {
    return (
        <ui_alert.AlertDialog>
            <form>
                <ui_alert.AlertDialogTrigger asChild>
                    <ui_button.Button variant="outline">Folder create dialog</ui_button.Button>
                </ui_alert.AlertDialogTrigger>

                <ui_alert.AlertDialogContent size="sm">
                    <ui_alert.AlertDialogHeader>
                        <ui_alert.AlertDialogMedia>
                            <lucide.FolderClosed />
                        </ui_alert.AlertDialogMedia>
                        <ui_alert.AlertDialogTitle>New Folder</ui_alert.AlertDialogTitle>
                         <ui_alert.AlertDialogDescription>
                            Create a new folder in [directory]
                        </ui_alert.AlertDialogDescription>
                    </ui_alert.AlertDialogHeader>

                    <ui_field.FieldGroup>
                        <ui_field.Field>
                            <ui_label.Label htmlFor="name-1">Name</ui_label.Label>
                            <ui_input.Input id="name-1" name="name" />
                        </ui_field.Field>
                    </ui_field.FieldGroup>

                    <ui_alert.AlertDialogFooter>
                        <ui_alert.AlertDialogCancel>Cancel</ui_alert.AlertDialogCancel>
                        <ui_alert.AlertDialogAction>Create</ui_alert.AlertDialogAction>
                    </ui_alert.AlertDialogFooter>
                </ui_alert.AlertDialogContent>
            </form>
        </ui_alert.AlertDialog>
    )
}

export function FolderDeleteDialog() {
    return (
        <ui_alert.AlertDialog>
            <form>
                <ui_alert.AlertDialogTrigger asChild>
                    <ui_button.Button variant="outline">Folder delete dialog</ui_button.Button>
                </ui_alert.AlertDialogTrigger>

                <ui_alert.AlertDialogContent size="sm">
                    <ui_alert.AlertDialogHeader>
                        <ui_alert.AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                            <lucide.Trash2 />
                        </ui_alert.AlertDialogMedia>
                        <ui_alert.AlertDialogTitle>Delete Folder?</ui_alert.AlertDialogTitle>
                        <ui_alert.AlertDialogDescription>
                            Are you sure? This action is irreversible.
                        </ui_alert.AlertDialogDescription>
                    </ui_alert.AlertDialogHeader>

                    <ui_alert.AlertDialogFooter>
                        <ui_alert.AlertDialogCancel variant="outline">Cancel</ui_alert.AlertDialogCancel>
                        <ui_alert.AlertDialogAction variant="destructive">Delete</ui_alert.AlertDialogAction>
                    </ui_alert.AlertDialogFooter>
                </ui_alert.AlertDialogContent>
            </form>
        </ui_alert.AlertDialog>
    )
}