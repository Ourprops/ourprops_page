import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const problems = [
    {
        id: 0,
        title: "Fraudulent Agents",
        description: "Many agents are not registered and have no formal training, leading to fraudulent activities.",
    },
    {
        id: 1,
        title: "Duplicate Sales",
        description: "The same property is often sold to multiple buyers, resulting in prolonged legal disputes.",
    },
    {
        id: 2,
        title: "Legal Disputes",
        description: "Unclear property boundaries and ownership claims lead to costly and time-consuming legal battles.",
    },
    {
        id: 3,
        title: "Lack of Transparency",
        description: "The absence of accessible and reliable information makes it difficult to verify property ownership.",
    },
];

export default function Problem() {
  return (
    <div className="h-auto py-24 items-start w-full lg:gap-20 gap-24 md:gap-4 grid md:grid-cols-2 grid-cols-1 xl:px-20 lg:px-10 md:px-5 px-4 ">
      <div>
        <h2
          className={`text-4xl font-bold ${poppins.className} lg:leading-[3rem]`}
        >
          Is Your Land Truly <span className="bg-appColor-orange-default text-white">Yours</span>?
        </h2>
        <p className="text-base sm:text-sm mt-5">
          Outdated processes and lack of information are holding back Ghana{`'`}
          s property market.
        </p>
      </div>
      <div className="grid grid-flow-row">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
        {
            problems.slice(0, 2).map((problem, index) => (
                <div key={index} className={
                    `${problem.id === 0 ? 'border-y-[0.2px]' : 'border-b-[0.2px] sm:border-t-[0.2px]'} border-neutral-400 py-5`
                }>
                    <h3 className={`${poppins.className} text-lg`}>{problem.title}</h3>
                    <p className="sm:text-xs text-[10px] mt-3">{problem.description}</p>
                </div>
            ))
        }
      </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
        {
            problems.slice(2, 4).map((problem, index) => (
                <div key={index} className={
                    `${problem.id === 2 ? 'border-b-[0.2px]' : 'border-b-[0.2px]'} border-neutral-400 py-5`
                }>
                    <h3 className={`${poppins.className} text-lg`}>{problem.title}</h3>
                    <p className="sm:text-xs text-[10px] mt-3">{problem.description}</p>
                </div>
            ))
        }
      </div>
    </div>
    </div>
  );
}

