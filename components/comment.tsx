"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader, MessageCircle } from "lucide-react";
import { api } from "@/lib/api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Comment() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/email/contact", { message, email, name });
      toast({
        title: "Message sent",
        description: "Thank you for your message. We will get back to you soon.",
      });
      setMessage("");
      setEmail("");
      setName("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed right-10 bottom-10 z-10">
      <Popover>
        <PopoverTrigger asChild>
          <button
            aria-label="Feedback"
            className="p-2.5 rounded-full bg-black hover:bg-black/85 duration-150"
          >
            <MessageCircle color="white" size={20} />
          </button>
        </PopoverTrigger>
        <PopoverContent side="top" className="mr-10">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
              required
            />
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            <Textarea
              required
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">
              {loading ? (
                <Loader size={20} className="animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
