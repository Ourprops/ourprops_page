import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { DialogDescription } from "@radix-ui/react-dialog";


export default function Waitlist() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await api.post("/waitlist", {
                fullname,
                email,
            });
            setFullname("");
            setEmail("");
            toast({
                title: "Success!",
                description: "You have successfully joined the waitlist.",
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
                    Join our waitlist <ArrowRight className="ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl">
                        Join our waitlist
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground text-sm">
                        Be the first to know when we launch! Join our waitlist and
                        stay updated with the latest news and updates.
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
                                Joining...
                            </div>
                        ) : (
                            "Join Waitlist"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}