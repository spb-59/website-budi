import * as React from "react"

import { cn } from "../@/lib/utils"
import useMediaQuery from "./hooks/useMediaQuery"
import { Button } from "../@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../@/components/ui/drawer"
import { Input } from "../@/components/ui/input"
import { Label } from "../@/components/ui/label"

export function FormInput({text}) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline " className="button "><div className="text-xl">{text}</div></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{text}</DialogTitle>
                        <DialogDescription>
                            Contact our team to find out more and get started                     </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        )
    };

    return (
        <Drawer open={open} onOpenChange={setOpen} >
            <DrawerTrigger asChild>
                <Button variant="outline " className="button">{text}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{text}</DrawerTitle>
                    <DrawerDescription>
                        Contact our team to find out more and get started                        </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function ProfileForm({ className }) {
    return (
        <form className={cn("grid items-start gap-4 ", className)}>
            <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="name" id="name" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="phone" id="email" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Organisation Name</Label>
                <Input id="username" defaultValue="" />
            </div>
            <Button type="submit" className="bg-[#562BB9]">Submit</Button>
        </form>
    )
}