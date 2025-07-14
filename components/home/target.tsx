import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/url-for";
import { defineQuery } from "next-sanity";
import { Montserrat } from "next/font/google";
import { placeholder } from "./services";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

type Audience = {
  target: string;
  imageUrl: string;
  description: string;
};

function AudienceCard({ target, imageUrl, description }: Audience) {
  const targetImage = imageUrl ? (urlFor(imageUrl)?.url() ?? "") : "";

  return (
    <div className="flex flex-row items-start">
      <span className="bg-gray-300 h-2/3 w-[0.08rem] md:block hidden" />
      <div className="flex flex-col justify-between md:ml-1">
        <div className="h-[12rem] md:ml-4">
          <h2
            className={`sm:text-3xl text-2xl font-medium ${montserrat.className} lg:leading-[3rem] mt-4 tracking-tighter`}
          >
            {target}
          </h2>
          <p className="md:text-xs text-sm text-muted-foreground mt-2 md:w-[80%]">
            {description}
          </p>
        </div>
        <div className="mt-0 md:mt-10">
          <div className="w-full rounded-lg relative overflow-hidden">
            <Image
              src={targetImage}
              width={300}
              height={800}
              alt={target}
              priority
              className="object-cover rounded-lg"
              placeholder="blur"
              blurDataURL={placeholder}
            />
          </div>
        </div>
      </div>
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
    <div className="h-auto py-24 w-full xl:px-20 lg:px-10 md:px-5 px-4 grid lg:grid-cols-4 grid-cols-1 gap-4 bg-white">
      <div>
        <span className="text-sm font-semibold text-black">
          Targets
        </span>
        <h2
          className={`sm:text-4xl text-3xl font-medium ${montserrat.className} lg:leading-[3rem] md:mt-5 mt-4 tracking-tighter text-black lg:mt-10`}
        >
          {targets?.headline}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 mt:gap-4 gap-10 grid-cols-1 lg:col-span-3 mt-10">
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

