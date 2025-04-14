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
    <div className="rounded-lg w-full xl:px-20 lg:px-10 md:px-5 h-full py-20 min-h-[95vh] p-4 relative ">
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1
          className={`lg:text-6xl sm:text-4xl text-3xl text-black font-medium tracking-tight mt-10 lg:leading-[4rem] ${poppins.className} z-20 text-center`}
        >
          {hero?.headline}
        </h1>
        <p className="md:text-base text-sm text-muted-foreground mt-6 z-10">
          {hero?.subheadline}
        </p>
        <div className="flex flex-row items-center gap-2 mt-10 ">
          <L smooth={true} to="newsletter">
            <Button className="text-white z-10" size="lg">
              Join us <ArrowRight color="white" />
            </Button>
          </L>
          <Link href="/about">
            <Button size="lg"  variant="link" className="text-black">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

