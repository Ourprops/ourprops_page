import { Montserrat } from "next/font/google";
import ServiceCard from "./serviceCard";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export const placeholder =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";

interface Services {
  headline: string;
  subheadline: string;
  services: Array<{
    title: string;
    description: string;
    imageUrl: string;
  }>;
}


export default async function Services({ services }: { services: Services }) {

  return (
    <div className="h-auto py-24 justify-center items-center w-full gap-5 flex flex-col xl:px-20 lg:px-10 md:px-5 px-4 bg-primary">
      <div className="grid lg:grid-cols-4 w-full">
        <div>
          <span className="text-sm font-semibold text-white">
            Services
          </span>
        </div>
        <div className="col-span-3">
          <h2
            className={`sm:text-4xl text-3xl font-medium ${montserrat.className} lg:leading-[3rem] md:mt-2 mt-4 tracking-tighter text-white`}
          >
            {services?.headline}
          </h2>
          <p className="text-sm sm:text-base text-muted lg:w-[70%] md:w-[70%] lg:mt-16 md:md-14 mt-10">
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
