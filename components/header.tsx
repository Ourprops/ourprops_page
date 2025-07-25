"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Image from "next/image";
import Waitlist from "./waitlist";

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

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
    if (typeof window !== "undefined") {
        const controlHeader = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
            // if scroll down hide the header
            setShowHeader(false);
            } else {
            // if scroll up show the header
            setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        }
        };

        window.addEventListener("scroll", controlHeader);

        // cleanup function
        return () => {
        window.removeEventListener("scroll", controlHeader);
        };
    }
    }, [lastScrollY]);

    return (
    <div
        className={`fixed top-0 left-0 right-0 z-50 bg-transparent xl:px-20 lg:px-10 md:px-5 px-4 transition-transform duration-300 border-b bg-white ${showHeader ? "translate-y-0" : "-translate-y-24"
        }`}
    >
        <div className="py-3 flex justify-between items-center ">
        <div>
            <Link href="/">
            <Image 
                src="/ourpropspage_logo.png" 
                alt="logo" 
                width={180} 
                height={180} 
                priority
            />
            </Link>
        </div>
        <div className="md:hidden block">
            <Sidebar />
        </div>
        <nav className="md:flex items-center space-x-8 hidden">
            {navs.map((nav, index) => (
            <Link
                key={index}
                href={nav.href}
                className="text-sm font-medium text-black relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-primary after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
                {nav.name}
            </Link>
            ))}
        </nav>
        <div className="md:block hidden">
            <Waitlist />
        </div>
        </div>
    </div>
    );
}
