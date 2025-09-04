import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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
                        Secure Your Property’s Boundaries
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground text-sm">
                        Be the first to claim and protect your property&apos;s digital boundaries. By securing your space, you&apos;ll join our exclusive waitlist and ensure your property cannot be claimed by anyone else when we launch.
                    </DialogDescription>
                </DialogHeader>
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
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit} type="submit">
                        {loading ? (
                            <div className="flex items-center">
                                <span className="loader mr-2"></span>
                                Securing...
                            </div>
                        ) : (
                            "Secure My Property"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}