import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/url-for";
import { defineQuery } from "next-sanity";
import { Poppins } from "next/font/google";
import { placeholder } from "./services";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type Audience = {
  target: string;
  image: unknown;
};

function AudienceCard({
  target,
  image
}: Audience) {
    const targetImage = image ? urlFor(image)?.url() ?? "" : "";  
  
  return (
    <div className="flex flex-col">
      <div className="relative rounded-lg w-full lg:h-[350px] md:h-[270px] sm:h-[230px] h-[340px] overflow-hidden">
        <Image
          src={targetImage}
          layout="fill"
          objectFit="cover"
          alt={target}
          priority
          placeholder="blur"
          blurDataURL={placeholder}
        />
      </div>
      <h3 className={`${poppins.className} text-lg mt-5`}>{target}</h3>
    </div>
  );
}

const TARGETS_QUERY = defineQuery(`*[
    _type == "targetsType"
][0]{
    headline,
    subheadline,
    targets[]->{
        _id,
        target,
        image,
    }
}`);

export default async function Target() {
  const { data: targets } = await sanityFetch({
    query: TARGETS_QUERY,
  });

  return (
    <div className="h-auto py-24 w-full xl:px-20 lg:px-10 md:px-5 px-4">
      <h2
        className={`sm:text-4xl text-3xl font-bold ${poppins.className} lg:leading-[3rem]`}
      >
        {targets?.headline}
      </h2>
      <p className="text-sm sm:text-base mt-5">{targets?.subheadline}</p>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-8 mt-10">
        {targets?.targets &&
          targets?.targets.map((audience: Audience, index: number) => (
            <AudienceCard
              key={index}
              target={audience.target}
              image={audience.image}
            />
          ))}
      </div>
    </div>
  );
}
