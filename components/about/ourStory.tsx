import { OUR_STORY_QUERYResult } from "@/sanity/types";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export default function OurStoryView({
  ourStory,
}: {
  ourStory: OUR_STORY_QUERYResult;
}) {

  return (
    <div className="w-full xl:px-20 lg:px-10 md:px-5 px-4 py-20 grid md:grid-cols-3 grid-cols-1">
      <div>
        <span className="text-sm font-semibold text-black col-span-1">
          Our Story
        </span>
      </div>
      <div className="col-span-2 md:mt-10">
        <h2
          className={`sm:text-5xl text-4xl font-medium ${montserrat.className} lg:leading-[3rem] mt-4 tracking-tighter`}
        >
          {ourStory?.headline}
        </h2>
        <p className="sm:text-base text-sm text-muted-foreground sm:leading-7 leading-6 mt-10">
          {ourStory?.subheadline}
        </p>
      </div>
    </div>
  );
}
