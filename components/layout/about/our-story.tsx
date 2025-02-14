import { OurStory } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function OurStoryView({ ourStory }: { ourStory: OurStory }) {
  const ourStoryImage = ourStory?.image
    ? (urlFor(ourStory.image)?.url() ?? "")
    : "";

  return (
    <div className="h-auto w-full xl:px-20 lg:px-10 md:px-5 px-4 relative">
      <div className="pt-24 md:grid md:grid-cols-2 grid-cols-1 gap-20 flex flex-col-reverse md:flex-row">
        <div>
          <div className="w-full rounded-lg h-[400px] relative overflow-hidden">
            <Image
              src={ourStoryImage}
              layout="fill"
              objectFit="cover"
              alt={ourStory?.headline || ""}
              priority
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
        <div>
          <div className="grid grid-flow-row gap-5">
            <h4
              className={`uppercase ${poppins.className} text-appColor-orange-default`}
            >
              Our story
            </h4>
            <h2
              className={`sm:text-4xl text-3xl font-bold ${poppins.className} lg:leading-[3rem]`}
            >
              {ourStory?.headline}
            </h2>
            <p className="text-base sm:text-lg sm:leading-7 leading-6">
              {ourStory?.subheadline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
