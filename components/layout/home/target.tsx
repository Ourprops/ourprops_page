import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/url-for";
import { defineQuery } from "next-sanity";
import { Poppins } from "next/font/google";
import { placeholder } from "./services";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Audience = {
  target: string;
  imageUrl: string;
  description: string;
};

function AudienceCard({ target, imageUrl, description }: Audience) {
  const targetImage = imageUrl ? (urlFor(imageUrl)?.url() ?? "") : "";

  return (
    <div className="flex flex-col border p-3 rounded-lg bg-white shadow-sm">
      <div className="relative rounded-lg w-full lg:h-[350px] md:h-[270px] sm:h-[230px] h-[340px] overflow-hidden">
        <Image
          src={targetImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full h-full"
          alt={target}
          priority
          placeholder="blur"
          blurDataURL={placeholder}
        />
      </div>
      <h3 className={`${poppins.className} text-lg font-medium mt-5`}>
        {target}
      </h3>
      <p className="md:text-sm text-xs md:leading-5 mt-2 text-muted-foreground">
        {description}
      </p>
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
        "imageUrl": image.asset->url,
        description
    }
}`);

export default async function Target() {
  const { data: targets } = await sanityFetch({
    query: TARGETS_QUERY,
  });

  return (
    <div className="h-auto py-24 w-full xl:px-20 lg:px-10 md:px-5 px-4">
      <span className="p-1 rounded-md border border-primary uppercase text-[10px] text-primary">
        Targets
      </span>
      <h2
        className={`sm:text-4xl text-3xl font-semibold ${poppins.className} lg:leading-[3rem] mt-4 `}
      >
        {targets?.headline}
      </h2>
      <p className="text-sm sm:text-base mt-2 text-muted-foreground">
        {targets?.subheadline}
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-8 mt-10">
        {targets?.targets &&
          targets?.targets.map((audience: Audience, index: number) => (
            <AudienceCard
              key={index}
              target={audience.target}
              imageUrl={audience.imageUrl}
              description={audience.description}
            />
          ))}
      </div>
    </div>
  );
}
