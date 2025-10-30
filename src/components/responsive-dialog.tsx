"use client";


import { useIsMobile } from "../hooks/use-mobile"
import { 
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer"


interface ResponsiveDialogProps {
    title: string;
    description:string;
    children: React.ReactNode;
    open:boolean;
    onOpenChange:(open:boolean) => void;
};

export const ResponsiveDialog = ({
    title,
    description,
    children,
    open,
    onOpenChange,
}:ResponsiveDialogProps) =>{
    const isMobile = useIsMobile();

    if(isMobile){
        return(
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DialogContent className={""}>
                    <DialogHeader className={""}>
                        <DialogTitle className={""}>{title}</DialogTitle>
                        <DialogDescription className={""}>{description}</DialogDescription>
                    </DialogHeader>
                    <div className="p-4">
                        {children}
                    </div>
                </DialogContent>
            </Drawer>
        );
    }

    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className={""}>
                <DialogHeader className={""}>
                    <DialogTitle className={""}>{title}</DialogTitle>
                    <DialogDescription className={""}>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};