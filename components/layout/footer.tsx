"use client"
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import {Link as L} from "react-scroll"


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
    <div className="h-auto w-full p-4 py-10">
      <div className="rounded-xl w-full flex-1 bg-neutral-900 py-10 grid md:grid-cols-2 grid-cols-1 gap-10 xl:px-20 lg:px-10 md:px-5 px-4">
        <div>
          <h1 className="text-white text-lg font-medium">OURPROPS</h1>
          <p className="text-muted-foreground text-sm mt-5">
            OurProps makes property transactions seamless. Buy, sell, or invest
            in real estate with confidence. Explore listings or submit your
            property today!
          </p>
          <p className="text-muted-foreground text-sm mt-5">
            © 2025 OurProps. All rights reserved.
          </p>
          <div className="flex flex-row gap-4 mt-10">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                className="border border-white p-2 rounded-full"
              >
                <social.icon color="white" size={20} />
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 lg:pl-24">
          <div>
            <h4 className="text-white font-medium">Pages</h4>
            <div className="flex flex-col gap-3 mt-5">
              {navs.map((nav, index) => (
                <Link
                  key={index}
                  href={nav.href}
                  className="text-muted-foreground text-sm hover:underline"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium">More</h4>
            <div className="flex flex-col gap-3 mt-5">
              <Link
                href="/contact"
                className="text-muted-foreground text-sm hover:underline"
              >
                Contact
              </Link>
              <L
                smooth={true}
                to="newslatter"
                className="text-muted-foreground text-sm hover:underline"
              >
                Newsletter
              </L>
              <Link
                href="/terms"
                className="text-muted-foreground text-sm hover:underline"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
