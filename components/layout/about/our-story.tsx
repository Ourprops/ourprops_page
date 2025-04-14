import { OUR_STORY_QUERYResult } from "@/sanity/types";
// import { urlFor } from "@/sanity/url-for";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function OurStoryView({
  ourStory,
}: {
  ourStory: OUR_STORY_QUERYResult;
}) {

  return (
    <div className="h-auto pb-24 w-full xl:px-20 lg:px-10 md:px-5 px-4 md:grid md:grid-cols-2 grid-cols-1 gap-20 flex flex-col md:flex-row">
      <div>
        <span className="p-1 px-3 rounded-full border text-sm text-black">
          Our Story
        </span>
        <h2
          className={`sm:text-5xl text-4xl font-medium ${poppins.className} lg:leading-[3rem] mt-4 tracking-tight`}
        >
          {ourStory?.headline}
        </h2>
      </div>
      <div>
        <p className="sm:text-base text-sm text-muted-foreground sm:leading-7 leading-6">
          {ourStory?.subheadline}
        </p>
      </div>
    </div>
  );
}
