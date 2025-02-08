'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader, MessageCircle } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { api } from "@/lib/api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Comment() {
    const [feedback, setFeedback] = useState("");
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
           await api.post("/email/feedback", { feedback }); 
           toast({
                title: "Thank you for your feedback!",
                description: "We appreciate your feedback and will work on it",
           })
           setFeedback("");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className="fixed right-10 bottom-10 z-10">
      <Popover>
        <PopoverTrigger asChild>
            <button aria-label="Feedback" className="p-2.5 rounded-full bg-appColor-orange-default hover:bg-[#ff5314] duration-150">
                <MessageCircle color="white" size={20} />
            </button>
        </PopoverTrigger>
        <PopoverContent side="top" className="mr-10">
            <form onSubmit={handleSubmit} className="grid gap-4">
                <Textarea required placeholder="Tell us what you think..." value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                <Button type="submit">
                    {
                        loading ? <Loader size={20} className="animate-spin" /> : "Submit"
                    }
                </Button>
            </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
