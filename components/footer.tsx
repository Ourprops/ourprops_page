"use client"
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import {Link as L} from "react-scroll"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});


const navs = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const socials = [
  {
    link: "https://facebook.com",
    icon: Facebook,
  },
  {
    link: "https://twitter.com",
    icon: Twitter,
  },
  {
    link: "https://instagram.com",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <div className="h-auto w-full xl:px-20 lg:px-10 md:px-5 px-4 py-20 grid md:grid-cols-2 bg-black">
      <div>
        <h2
          className={`${montserrat.className} lg:text-xl text-lg font-semibold text-white lg:w-[70%]`}
        >
          Ourprops
        </h2>
        <p className="text-muted-foreground text-sm sm:text-xs mt-5 md:w-[60%]">
          OurProps makes property transactions seamless. Buy, sell, or invest in
          real estate with confidence. Explore listings or submit your property
          today!
        </p>
        <div className="flex flex-row items-center gap-5 mt-5">
          <p className="text-muted-foreground text-sm sm:text-xs">
            Follow us on:
          </p>
          <div className="flex flex-row items-center gap-2">
            {socials.map((social, index) => (
              <Link key={index} href={social.link}>
                <social.icon color="gray" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10 md:mt-0">
        <div className="flex flex-col gap-3">
          {navs.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="text-sm hover:underline text-white"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <span className="text-sm hover:underline text-white cursor-pointer">
                Contact
              </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Send us a message</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  Submit <Send className="ml-2" size={16} />
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <L
            smooth={true}
            to="newslatter"
            className="text-sm hover:underline text-white"
          >
            Newsletter
          </L>
          <span className="text-sm text-gray-500 opacity-60">
            Terms & Conditions
          </span>
        </div>
      </div>
    </div>
  );
}
