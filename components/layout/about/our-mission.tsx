import { OurPurpose } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function SubSection({
  name,
  title,
  description,
  image,
}: {
  name: string;
  title: string | undefined;
  description: string | undefined;
  image: unknown;
}) {
  const sectionImage = image ? (urlFor(image)?.url() ?? "") : "";

  return (
    <div className="md:grid md:grid-cols-2 grid-cols-1 gap-20">
      <div>
        <div className="grid grid-flow-row gap-5">
          <h4
            className={`uppercase ${poppins.className} text-primary text-sm`}
          >
            {name}
          </h4>
          <h2 className={`sm:text-2xl text-xl font-medium ${poppins.className}`}>
            {title}
          </h2>
          <p className="sm:text-base text-sm sm:leading-7 leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <div className="relative overflow-hidden w-full rounded-lg h-[400px]">
          <Image
            src={sectionImage}
            layout="fill"
            objectFit="cover"
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

export default function OurMission({ ourPurpose }: { ourPurpose: OurPurpose }) {
  return (
    <div className="h-auto w-full xl:px-20 lg:px-10 md:px-5 px-4 relative">
      <div className="flex justify-center items-center flex-col py-24">
        <div className="text-center flex flex-col gap-5">
          <div>
            <span className="p-1 rounded-md border border-primary uppercase text-[10px] text-primary">
              Our Purpose
            </span>
            <h2
              className={`sm:text-4xl text-3xl font-semibold ${poppins.className} lg:leading-[3rem] mt-4`}
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
            title={ourPurpose.ourMission?.headline}
            description={ourPurpose.ourMission?.subheadline}
            image={ourPurpose.ourMission?.image}
          />
          <SubSection
            name="Our Vision"
            title={ourPurpose.ourVision?.headline}
            description={ourPurpose.ourVision?.subheadline}
            image={ourPurpose.ourVision?.image}
          />
        </div>
      </div>
    </div>
  );
}
