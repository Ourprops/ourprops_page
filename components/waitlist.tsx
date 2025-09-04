import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


export default function Waitlist() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://api.ourprops.net/email/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    fullname,
                    email,
                    website: "ourprops"
                 }),
            });
            if (!res.ok) {
                throw new Error("Failed to join waitlist");
            }
            setIsSuccess(true);
            setFullname("");
            setEmail("");
            toast({
                title: "Success!",
                description: "You have successfully secured your spot!",
            })
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="shadow-lg font-semibold" size="lg">
                    Secure My Property
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl">
                        {isSuccess ? "You're on the waitlist!" : "Secure Your Property’s Boundaries"}
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground md:text-sm text-xs">
                       {
                        isSuccess ? 
                        "Thank you for joining our waitlist! We'll keep you updated with the latest news and let you know as soon as you can secure your property on our platform." :
                        "Be the first to know and protect your property&apos;s digital boundaries. On our platform, you can be free from scammers selling your proerty or buying a conflictual property. Join now!"
                       }
                    </DialogDescription>
                </DialogHeader>
                {!isSuccess && 
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Full name
                        </Label>
                        <Input value={fullname} onChange={(e) => setFullname(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
                    </div>
                </div>}
                <DialogFooter>
                    {!isSuccess && <Button onClick={handleSubmit} type="submit">
                        {loading ? (
                            <div className="flex items-center">
                                <span className="loader mr-2"></span>
                                Securing...
                            </div>
                        ) : (
                            "Secure My Property"
                        )}
                    </Button>}
                    {isSuccess && <DialogClose asChild>
                        <Button>Close</Button>
                    </DialogClose>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}