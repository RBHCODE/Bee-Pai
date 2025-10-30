
import { Dispatch, SetStateAction } from "react";
import { CommandResposiveDialog, CommandInput, CommandItem, CommandList } from "../../../../components/ui/command";

interface Props{
        open:Boolean;
        setOpen: Dispatch<SetStateAction<Boolean>>;
    };

export const DashboardCommand = ({open, setOpen}:Props) =>{
    
    return (
        <CommandResposiveDialog className={""} open={open} onOpenChange={setOpen}>
            <CommandInput className={""}
              placeholder="Find a meeting or agent"
            />
            <CommandList className={""}>
                <CommandItem className={""}>
                    Test
                </CommandItem>
            </CommandList>
        </CommandResposiveDialog>
    );
};