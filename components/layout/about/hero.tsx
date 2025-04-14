"use client"
import Contact from "@/components/contact";
import { Button } from "@/components/ui/button";
import { ABOUT_HERO_QUERYResult } from "@/sanity/types";
// import { AboutHero } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Link } from "react-scroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Hero({ hero }: { hero: ABOUT_HERO_QUERYResult }) {
  const heroImage = hero?.imageUrl ? (urlFor(hero.imageUrl)?.url() ?? "") : "";

  return (
    <div className="w-full h-auto xl:px-20 lg:px-10 md:px-5 px-4 relative min-h-[100vh] flex justify-center items-center">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <div className="grid grid-flow-row gap-5 mt-10">
            <div>
              <span className="p-1 px-3 rounded-full border text-sm text-black">
                Who we are
              </span>
              <h1
                className={`lg:text-6xl sm:text-5xl text-4xl font-medium ${poppins.className} mt-5`}
              >
                {hero?.headline}
              </h1>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">{hero?.subheadline}</p>
            <div className="flex flex-row items-center gap-2">
              <Link to="newsletter" smooth={true} duration={500}>
                <Button>
                  Join us <ArrowRight color="white" />
                </Button>
              </Link>
              <Contact />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-full h-[430px] rounded-lg relative overflow-hidden">
            <Image
              src={heroImage}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={hero?.headline || ""}
              priority
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
    </div>
  );
}

