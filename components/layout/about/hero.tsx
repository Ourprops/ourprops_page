import { Button } from "@/components/ui/button";
import { AboutHero } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero({
  hero
}: {
  hero: AboutHero;
  }) {
  const heroImage = hero?.image ? urlFor(hero.image)?.url() ?? "" : "";
  
  return (
    <div className="w-full h-auto xl:px-20 lg:px-10 md:px-5 px-4 relative bg-appColor-blue-muted">
      <div className="lg:pt-36 md:pt-36 sm:pt-36 pt-28 pb-10 grid md:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <div className="grid grid-flow-row gap-5">
            <h4
              className={`uppercase ${poppins.className} text-appColor-orange-default`}
            >
              who we are
            </h4>
            <h1
              className={`lg:text-6xl sm:text-5xl text-4xl font-bold ${poppins.className} bg-gradient-to-r from-primary to-appColor-orange-default bg-clip-text text-transparent`}
            >
              {hero?.headline}
            </h1>
            <p className="text-lg">
              {hero?.subheadline}
            </p>
            <div className="flex flex-row items-center gap-4">
              <Button className="px-7 py-6">Join us</Button>
              <Button variant="secondary" className="px-7 py-6">
                Contact us
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-full h-[430px] rounded-lg relative overflow-hidden">
            <Image
              src={heroImage}
              layout="fill"
              objectFit="cover"
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
