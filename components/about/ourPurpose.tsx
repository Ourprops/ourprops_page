import {
  internalGroqTypeReferenceTo,
  OUR_PURPOSE_QUERYResult,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

function SubSection({
  title,
  description,
  image,
}: {
  name: string;
  title: string | undefined;
  description: string | undefined;
  image:
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      }
    | undefined;
}) {
  const sectionImage = image ? (urlFor(image?.asset || "")?.url() ?? "") : "";

  return (
    <div className="md:grid md:grid-cols-2 grid-cols-1 gap-20 border rounded-lg md:p-10 p-5 bg-white">
      <div className="md:w-[80%]">
        <h2 className={`sm:text-3xl text-2xl font-medium ${montserrat.className} tracking-tighter`}>
          {title}
        </h2>
        <p className="sm:text-base text-sm leading-6 text-muted-foreground mt-5">
          {description}
        </p>
      </div>
      <div className="mt-5 md:mt-0">
        <div className="relative overflow-hidden w-full rounded-lg h-[350px] aspect-square">
          <Image
            src={sectionImage}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={title || ""}
            priority
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    </div>
  );
}

export default function OurPurpose({
  ourPurpose,
}: {
  ourPurpose: OUR_PURPOSE_QUERYResult;
}) {
  return (
    <div className="h-auto w-full xl:px-20 lg:px-10 md:px-5 px-4 relative bg-neutral-100">
      <div className="flex justify-center items-center flex-col py-24">
        <div className="text-center flex flex-col gap-5">
          <div>
            <span className="text-sm font-semibold text-black">
              Our Purpose
            </span>
            <h2
              className={`sm:text-5xl text-4xl font-medium ${montserrat.className} lg:leading-[3rem] mt-4 tracking-tighter`}
            >
              {ourPurpose?.headline}
            </h2>
          </div>
          <p className="sm:text-base text-sm text-muted-foreground sm:leading-7 leading-6">
            {ourPurpose?.subheadline}
          </p>
        </div>
        <div className="mt-20 grid grid-flow-row gap-20">
          <SubSection
            name="Our Mission"
            title={ourPurpose?.ourMission?.headline}
            description={ourPurpose?.ourMission?.subheadline}
            image={ourPurpose?.ourMission?.image}
          />
          <SubSection
            name="Our Vision"
            title={ourPurpose?.ourVision?.headline}
            description={ourPurpose?.ourVision?.subheadline}
            image={ourPurpose?.ourVision?.image}
          />
        </div>
      </div>
    </div>
  );
}
