import { ResponsiveDialog } from "../../../../../components/responsive-dialog";
import { AgentForm } from "./agent-form";


interface NewAgentDialogProp{
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NewAgentDialogProp = ({
    open,
    onOpenChange,
}:NewAgentDialogProp) =>{
    return(
        <ResponsiveDialog
        title="New Agents"
        description="Create New Agents"
        open={open}
        onOpenChange= {onOpenChange}
        >
            <AgentForm 
               onSuccess={ () => onOpenChange(false)}
               onCancel={ () => onOpenChange(false)}
            />
        </ResponsiveDialog>
    );
};