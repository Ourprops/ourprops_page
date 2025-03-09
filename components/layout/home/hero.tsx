"use client"
import { Button } from "@/components/ui/button";
import { HERO_QUERYResult } from "@/sanity/types";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";
import { Link } from "react-scroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero({ hero }: { hero: HERO_QUERYResult }) {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/286744/pexels-photo-286744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-[100vh] pt-16 xl:px-20 lg:px-10 md:px-5 px-4 relative flex justify-center items-center flex-col gap-5"
    >
      <h1
        className={`lg:text-6xl sm:text-5xl text-4xl font-semibold text-center lg:w-[70%] md:w-[70%] lg:leading-[4rem] ${poppins.className} text-white z-10`}
      >
        {hero?.headline}
      </h1>
      <p className="text-center md:text-lg text-base mt-4 lg:w-[70%] md:w-[70%] text-muted z-10">
        {hero?.subheadline}
      </p>
      <div className="flex flex-row items-center gap-2 mt-4 z-10">
        <Link smooth={true} to="newsletter">
          <Button

            className="px-7 py-6 text-white shadow-[0px_0px_45px_2px_#64acff]">
            Join us
          </Button>
        </Link>
        <Button
          onClick={() => router.push("/about")}
          variant="link" className="px-7 py-6 text-white">
          Learn more
        </Button>
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
    </div>
  );
}
