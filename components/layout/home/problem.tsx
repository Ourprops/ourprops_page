import { Button } from "@/components/ui/button";
import { PROBLEM_QUERYResult } from "@/sanity/types";
import { ArrowUpRight } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export default function Problem({ problems }: { problems: PROBLEM_QUERYResult }) {
  const first4Words = problems?.headline?.split(" ").slice(0, 4).join(" ");
  const yours = problems?.headline?.split(" ").slice(4).join(" "); 

  return (
    <div className="h-auto py-24 items-start w-full lg:gap-20 gap-24 md:gap-4 grid md:grid-cols-2 grid-cols-1 xl:px-20 lg:px-10 md:px-5 px-4 ">
      <div>
        <span className="p-1 rounded-md border border-primary uppercase text-[10px] text-primary">
          Problems
        </span>
        <h2
          className={`sm:text-4xl text-3xl font-semibold ${poppins.className} lg:leading-[3rem] mt-4`}
        >
          {`${first4Words}`}{" "}
          <span className="bg-appColor-orange-default text-white">{yours}</span>
          ?
        </h2>
        <p className="text-sm sm:text-base my-5">{problems?.subheadline}</p>
        <Button className="text-white">
          Learn more <ArrowUpRight color="white" />
        </Button>
      </div>
      <div className="grid grid-flow-row gap-3">
        {problems?.problems?.map((problem, index) => (
          <div
            key={index}
            className="w-full p-4 border rounded-lg shadow-sm relative"
          >
            
            <h3 className={`${poppins.className} text-lg`}>{problem?.title}</h3>
            <p className="sm:text-sm text-xs mt-3 text-muted-foreground">{problem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
