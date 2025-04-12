import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/url-for";
import { defineQuery } from "next-sanity";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const placeholder =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";

function ServiceCard({
  service,
  num
}: {
    service: { title: string; description: string; imageUrl: string };
  num: number;
}) {
  const serviceImage = service?.imageUrl
    ? (urlFor(service.imageUrl)?.url() ?? "")
    : "";
  
  return (
    <div
      className={`w-full rounded-lg h-[24rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-neutral-400 p-4 aspect-square flex justify-between flex-col`}
    >
      <div className="w-full flex flex-row items-start justify-between">
        <h2
          className={`${poppins.className} lg:text-xl text-lg font-semibold text-white lg:w-[70%] h-[4rem]`}
        >
          {service.title}
        </h2>
        <span className="text-white font-bold lg:text-xl text-lg">
          {num + 1}.
        </span>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div className="lg:block sm:block hidden"></div>
        <div>
          <p className="text-sm sm:text-xs text-muted lg:mt-4 mt-4">
            {service?.description}
          </p>
        </div>
      </div>
      <div className="flex-1 w-full relative mt-4 overflow-hidden flex justify-start items-end">
        <div className="lg:w-2/5 sm:w-3/4 md:w-2/4 w-2/5 rounded-sm relative overflow-hidden">
          <Image
            src={serviceImage}
            width={300}
            height={800}
            alt={service.title}
            priority
            className="object-cover"
            placeholder="blur"
            blurDataURL={placeholder}
          />
        </div>
      </div>
    </div>
  );
}

const SERVICES_QUERY = defineQuery(`*[
    _type == "servicesType"
][0]{
    headline,
    subheadline,
    services[]->{
        _id,
        title,
        description,
        "imageUrl": image.asset->url,
    }
}`);

export default async function Services() {
  const { data: services } = await sanityFetch({
    query: SERVICES_QUERY,
  });

  return (
    <div className="h-auto py-24 justify-center items-center w-full gap-5 flex flex-col xl:px-20 lg:px-10 md:px-5 px-4 bg-appColor-blue-default">
      <div className="grid lg:grid-cols-4 w-full">
        <div>
          <span className="p-1 px-3 rounded-full border text-sm text-white">
            Services
          </span>
        </div>
        <div className="col-span-3">
          <h2
            className={`sm:text-4xl text-3xl font-semibold ${poppins.className} lg:leading-[3rem] md:mt-2 mt-4 tracking-tight text-white`}
          >
            {services?.headline}
          </h2>
          <p className="text-base text-muted lg:w-[70%] md:w-[70%] lg:mt-16 md:md-14 mt-10">
            {services?.subheadline}
          </p>
        </div>
      </div>
      <div className="md:md-14 mt-10 grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
        {services?.services &&
          services?.services.slice(1).map(
            (
              service: { title: string; description: string; imageUrl: string },
              index: number
            ) => <ServiceCard key={index} service={service} num={index} />
          )}
      </div>
    </div>
  );
}

{/* <div className="w-full h-4/5 relative overflow-hidden rounded-t-lg">
        <Image
          src={serviceImage}
          fill
          alt={service.title}
          priority
          className="object-cover w-full h-full"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          blurDataURL={placeholder}
        />
      </div>
      <div className="h-1/5 p-4">
        <h3 className={`text-xl font-medium ${poppins.className}`}>
          {service.title}
        </h3>
        <p className="md:text-sm text-xs md:leading-5 mt-2 text-muted-foreground">
          {service?.description}
        </p>
      </div> */}