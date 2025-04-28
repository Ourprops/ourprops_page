"use client";
import { Button } from "@/components/ui/button";
import { HERO_QUERYResult } from "@/sanity/types";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Montserrat } from "next/font/google";
import React from "react";
import { Link as L } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export default function Hero({ hero }: { hero: HERO_QUERYResult }) {
  return (
    <div className="min-h-[100vh] w-full relative flex justify-between flex-col">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.pexels.com/photos/966397/pexels-photo-966397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay - White at top, fading to transparent */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.2) 70%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="w-full xl:px-20 lg:px-10 md:px-5 h-full py-20 p-4 relative flex-1">
        <div className="mt-10 flex flex-col justify-center items-center relative z-10">
          <div className="text-center mt-10">
            <span className="bg-neutral-100 rounded-full px-4 py-2 text-sm font-thin text-black">
              Coming Soon
            </span>
            <h1
              className={`lg:text-6xl sm:text-5xl text-4xl text-black font-medium tracking-tighter mt-2 lg:leading-[4rem] ${montserrat.className} text-center`}
            >
              {hero?.headline}
            </h1>
          </div>
          <p className="sm:text-base text-sm text-gray-700 mt-6 text-center max-w-3xl">
            {hero?.subheadline}
          </p>
          <div className="flex flex-row items-center gap-4 mt-10">
            <L smooth={true} to="newsletter">
              <Button className="shadow-lg font-semibold" size="lg">
                Join us <ArrowRight className="ml-2" />
              </Button>
            </L>
            <Link href="/about">
              <Button
                size="lg"
                variant="ghost"
                className="font-semibold"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full items-start z-10 xl:px-20 lg:px-10 md:px-5 px-4 pb-10">
        <span className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black rounded-lg p-4 flex flex-row items-center gap-2">
          <Lightbulb color='gold' />
        <p
          className="sm:text-base text-sm text-white">
          Get up to date with our latest news and updates by subscribing to our newsletter.
        </p>
        </span>
      </div>
    </div>
  );
}