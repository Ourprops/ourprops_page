"use client"
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import {Link as L} from "react-scroll"

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
          <Link href="/contact" className="text-sm hover:underline text-white">
            Contact
          </Link>
          <L
            smooth={true}
            to="newslatter"
            className="text-sm hover:underline text-white"
          >
            Newsletter
          </L>
          <Link href="/terms" className="text-sm hover:underline text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
