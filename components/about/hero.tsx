"use client"
import { ABOUT_HERO_QUERYResult } from "@/sanity/types";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";
import Waitlist from "../waitlist";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

function ContactUsDialog() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.post("/email/contact", { message, email, name });
      toast({
        title: "Message sent",
        description: "Thank you for your message. We will get back to you soon.",
      });
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="font-medium">
          Contact us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Contact us
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Message
            </Label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => handleSubmit()}>
            {loading ? (
              <div className="flex items-center">
                <LoaderCircle className="animate-spin mr-2" />
                Sending...
              </div>
            ) : (
              "Send"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function Hero({ hero }: { hero: ABOUT_HERO_QUERYResult }) {

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 h-full flex-1 min-h-[100vh] relative py-24 xl:px-20 lg:px-10 md:px-5 px-4 mt-10">
      <div className="h-full flex justify-between flex-col">
        <div>
          <span className="bg-[#003366]/10 rounded-full px-4 py-2 text-sm font-thin text-black">
            Map-Based Property Registration and Verification System
          </span>
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          className={`lg:text-6xl sm:text-5xl text-4xl text-black font-medium tracking-tighter mt-5 lg:leading-[4rem] ${montserrat.className}`}>
            {hero?.headline}
          </motion.h1>
          <p
          className="sm:text-base text-sm text-muted-foreground mt-6">
            {hero?.subheadline}
          </p>
          <div className="mt-10">
              <Waitlist />
          </div>
        </div>
        <div className="mt-10 flex flex-row items-center">
          <div className="flex flex-col items-center">
            <h4 className="md:text-3xl text-2xl font-semibold">
              1k+
            </h4>
            <p className="text-sm text-muted-foreground">
              Land Owners Waitlisted
            </p>
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      className="h-full flex relative overflow-hidden min-h-[20rem]">
        <div className="flex-1 rounded-lg overflow-hidden absolute inset-0 w-full h-full">
          <Image
            src="https://images.pexels.com/photos/16754490/pexels-photo-16754490/free-photo-of-forest-near-road-near-town.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <div className="flex-1 p-4 flex justify-between z-10 flex-col">
          <div className="flex justify-end w-full">
            <ContactUsDialog />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="h-full w-1 bg-white" />
            <p className="text-white sm:text-base text-sm">
              Explore the future of ownership with us. Our mission is to
              revolutionize the way you think about ownership, making it
              accessible, transparent, and empowering. Join us on this journey
            </p>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
      </motion.div>
    </div>
  );
}