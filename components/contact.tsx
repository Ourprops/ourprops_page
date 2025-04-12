import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { LoaderCircle, Send } from "lucide-react";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  const { toast } = useToast();

    const sendMessage = async () => {
    setLoading(true);
    await api.post("/email/contact", {
      name,
      email,
      phone,
      message,
    });

    toast({
      title: "Message sent!",
      description: "We will get back to you shortly",
    });
        setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Contact us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send us a message</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              type="tel"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={sendMessage}
            type="submit">
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <>
                Submit <Send color="white" />
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
