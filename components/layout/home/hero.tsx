"use client";
import { Button } from "@/components/ui/button";
import { HERO_QUERYResult } from "@/sanity/types";
import { ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";
import React from "react";
import { Link as L } from "react-scroll";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero({ hero }: { hero: HERO_QUERYResult }) {
  return (
    <div className="gap-5 bg-white p-4">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-lg bg-black w-full xl:px-20 lg:px-10 md:px-5 h-full py-20 min-h-[90vh] p-4 relative"
      >
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20"></div> */}
        <h1
          className={`lg:w-[60%] md:w-[70%] lg:text-5xl sm:text-4xl text-4xl text-white font-semibold tracking-tight mt-10 lg:leading-[4rem] ${poppins.className} z-20`}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          {hero?.headline}
        </h1>
        <p
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
          className="texmd:text-lg text-base lg:w-[40%] md:w-[70%] text-muted mt-10 z-10"
        >
          {hero?.subheadline}
        </p>
        <div className="flex flex-row items-center gap-2 mt-20 ">
          <L smooth={true} to="newsletter">
            <Button className="text-white z-10">
              Join us <ArrowRight color="white" />
            </Button>
          </L>
          <Link href="/about">
            <Button
              className="text-white z-10 bg-transparent"
              variant="outline"
            >
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

