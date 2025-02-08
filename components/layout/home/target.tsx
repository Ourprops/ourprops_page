"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type Audience = {
  title: string;
  image: string;
};

const audience = [
  {
    title: "Property Owner",
    image:
      "https://images.pexels.com/photos/7937749/pexels-photo-7937749.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Buyer/Investor",
    image: "https://images.pexels.com/photos/3206168/pexels-photo-3206168.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Real Estate Agent",
    image: "https://images.pexels.com/photos/7578902/pexels-photo-7578902.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
] as Audience[];

function AudienceCard({
  title,
  // image
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-lg w-full lg:h-[350px] md:h-[270px] sm:h-[230px] h-[340px] bg-slate-100">

      </div>
      <h3 className={`${poppins.className} text-lg mt-5`}>{title}</h3>
    </div>
  );
}

export default function Target() {
  return (
    <div className="h-auto py-24 w-full xl:px-20 lg:px-10 md:px-5 px-4">
      <h2
        className={`text-4xl font-bold ${poppins.className} lg:leading-[3rem]`}
      >
        Working Together for a Transparent Land Market
      </h2>
      <p className="text-base sm:text-sm mt-5">
        Partnering with individuals, businesses, and governments to build trust
        and security.
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-8 mt-10">
        {audience.map((audience, index) => (
          <AudienceCard key={index} title={audience.title} image={audience.image} />
        ))}
      </div>
    </div>
  );
}
