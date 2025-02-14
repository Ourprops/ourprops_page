import { PROBLEM_QUERYResult } from "@/sanity/types";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});


export default function Problem({ problems }: { problems: PROBLEM_QUERYResult }) {
  const first4Words = problems?.headline?.split(" ").slice(0, 4).join(" ");
  const yours = problems?.headline?.split(" ").slice(4).join(" "); 

  return (
    <div className="h-auto py-24 items-start w-full lg:gap-20 gap-24 md:gap-4 grid md:grid-cols-2 grid-cols-1 xl:px-20 lg:px-10 md:px-5 px-4 ">
      <div>
        <h2
          className={`sm:text-4xl text-3xl font-bold ${poppins.className} lg:leading-[3rem]`}
        >
          {`${first4Words}`}{" "}
          <span className="bg-appColor-orange-default text-white">{yours}</span>?
        </h2>
        <p className="text-sm sm:text-base mt-5">
          {problems?.subheadline}
        </p>
      </div>
      <div className="grid grid-flow-row">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
          {problems?.problems?.slice(0, 2).map((problem, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "border-y-[0.2px]" : "border-b-[0.2px] sm:border-t-[0.2px]"} border-neutral-400 py-5 border-dotted`}
            >
              <h3 className={`${poppins.className} text-lg`}>
                {problem?.title}
              </h3>
              <p className="sm:text-sm text-xs mt-3">{problem.description}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
          {problems?.problems?.slice(2, 4).map((problem, index: number) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "border-b-[0.2px]" : "border-b-[0.2px]"} border-neutral-400 py-5`}
            >
              <h3 className={`${poppins.className} text-lg`}>
                {problem.title}
              </h3>
              <p className="sm:text-sm text-xs mt-3">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

