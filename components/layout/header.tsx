"use client";
import { Button } from "../ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "../sidebar";
import { ArrowRight } from "lucide-react";
import { Link as L } from "react-scroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
      className={`fixed top-7 left-0 right-0 z-50 bg-transparent xl:px-20 lg:px-10 md:px-5 px-4 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div className="xl:px-20 lg:px-10 md:px-5 px-4 py-2 flex justify-between items-center rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 bg-neutral-100">
        <div className="md:hidden block">
          <Sidebar />
        </div>
        <div>
          <h1 className={`text-black font-medium ${poppins.className}`}>
            OURPROPS
          </h1>
        </div>
        <nav className="md:flex items-center space-x-8 hidden">
          {navs.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="text-sm text-black relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-primary after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <div className="grid grid-flow-col">
          <L smooth={true} to="newsletter">
            <Button className="">
              Join us <ArrowRight color="white" />
            </Button>
          </L>
        </div>
      </div>
    </div>
  );
}
