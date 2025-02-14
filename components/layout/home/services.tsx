import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/url-for";
import { defineQuery } from "next-sanity";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const placeholder = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="

function ServiceCard({
  service,
}: {
  service: { title: string; description: string; image: unknown };
  }) {
  const serviceImage = service?.image ? urlFor(service.image)?.url() ?? "" : "";  
  
  return (
    <div
      className={`w-full rounded-lg md:h-[500px] h-[485px] flex flex-col justify-between p-4 bg-white`}
    >
      <div className="rounded-lg w-full h-4/5 relative overflow-hidden">
        <Image
          src={serviceImage}
          layout="fill"
          objectFit="cover"
          alt={service.title}
          priority
          placeholder="blur"
          blurDataURL={placeholder}
        />
      </div>
      <div className="h-1/5 mt-4">
        <h3 className={`text-xl font-semibold ${poppins.className}`}>
          {service.title}
        </h3>
        <p className="md:text-sm text-xs md:leading-5 mt-2">
          {service?.description}
        </p>
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
        image
    }
}`);

export default async function Services() {
  const { data: services } = await sanityFetch({
    query: SERVICES_QUERY,
  });
  
  return (
    <div className="h-auto py-24 justify-center items-center w-full gap-5 flex flex-col xl:px-20 lg:px-10 md:px-5 px-4 ">
      <h2
        className={`sm:text-4xl text-3xl font-bold text-center ${poppins.className} g:w-[70%] md:w-[70%] lg:leading-[3rem]`}
      >
        {services?.headline}
      </h2>
      <p className="text-center text-sm sm:text-base w-[70%]">
        {services?.subheadline}
      </p>
      <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-4 w-full">
        {
          services?.services &&
          services?.services.map(
            (
              service: { title: string; description: string, image: unknown },
              index: number
            ) => <ServiceCard key={index} service={service} />
          )}
      </div>
    </div>
  );
}
