"use client";
import { Button } from "@/components/ui/button";
import { HERO_QUERYResult } from "@/sanity/types";
import { Lightbulb } from "lucide-react";
import { Montserrat } from "next/font/google";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from '../../public/property1.jpg'
import { motion } from 'motion/react';

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
          src={HeroImage}
          alt="hero"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            mixBlendMode: 'normal'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="w-full xl:px-20 lg:px-10 md:px-5 h-full py-20 p-4 relative flex-1">
        <div className="mt-10 flex flex-col justify-center items-center relative z-10">
          <div className="text-center mt-10 flex flex-col justify-center items-center">
            {/* <span className="bg-neutral-100 rounded-full px-4 py-2 text-sm font-thin text-black mb-3">
              Coming Soon
            </span> */}
            <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
              className={`lg:text-6xl sm:text-5xl text-4xl lg:w-[60%] md:w-[80%] w-[100%] text-white font-medium tracking-tighter mt-3 lg:leading-[4rem] ${montserrat.className} text-center`}
            >
              {hero?.headline}
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          className="sm:text-base text-sm text-white mt-6 text-center max-w-3xl">
            {hero?.subheadline}
          </motion.p>
          <div className="flex flex-row items-center gap-4 mt-10">
            {/* <Waitlist /> */}
            <a href="https://app.ourprops.net">
              <Button size="lg">Register Your Property</Button>
            </a>
            <Link href="/about">
              <Button
                size="lg"
                variant="ghost"
                className="font-semibold text-white"
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
