import { Button } from "@/components/ui/button"
import { ExternalLink, FilePenIcon, MoreVertical, TrashIcon } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { RemoveDialog } from "@/components/remove-dialog";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">) => void;
};

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                    <MoreVertical className="size-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent onClick={(e) => e.stopPropagation()}>
                <RenameDialog documentId={documentId} initialTitle={title}>
                    <DropdownMenuItem 
                    onSelect={(e) => e.preventDefault()}
                    onClick={(e) => e.stopPropagation()}>
                        <FilePenIcon className="size-4 mr-2"/>
                        Rename
                    </DropdownMenuItem>
                </RenameDialog>

                <RemoveDialog documentId={documentId}>
                    <DropdownMenuItem 
                    onSelect={(e) => e.preventDefault()}
                    onClick={(e) => e.stopPropagation()}>
                        <TrashIcon className="size-4 mr-2"/>
                        Remove
                    </DropdownMenuItem>
                </RemoveDialog>
                <DropdownMenuItem onClick={() => onNewTab(documentId)}>
                    <ExternalLink className="size-4 mr-2"/>
                    Open in a new tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}