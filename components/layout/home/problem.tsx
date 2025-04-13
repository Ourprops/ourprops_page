import { Poppins } from "next/font/google";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import { color } from "@/constants/color";
import { FileX, Scale } from "lucide-react";
import { urlFor } from "@/sanity/url-for";
import Image from "next/image";
import { PROBLEM_QUERYResult } from "@/sanity/types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Problem({
  problems,
}: {
  problems: PROBLEM_QUERYResult;
}) {
  const first4Words = problems?.headline?.split(" ").slice(0, 4).join(" ");
  const yours = problems?.headline?.split(" ").slice(4).join(" ");

  const imageUrl1 = problems?.imageUrl1
    ? (urlFor(problems.imageUrl1)?.url() ?? "")
    : "";
  const imageUrl2 = problems?.imageUrl2
    ? (urlFor(problems.imageUrl2)?.url() ?? "")
    : "";

  return (
    <div className="h-auto py-24 w-full px-4 xl:px-20 lg:px-10 md:px-5">
      <div className="grid lg:grid-cols-4 w-full">
        <div>
          <span className="p-1 px-3 rounded-full border text-sm text-black">
            Problems
          </span>
        </div>
        <div className="col-span-3">
          <h2
            className={`sm:text-4xl text-3xl font-semibold ${poppins.className} lg:leading-[3rem] md:mt-2 mt-4 tracking-tight`}
          >
            {`${first4Words}`}{" "}
            <span className="text-appColor-orange-default">{yours}</span>?
          </h2>
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 grid-rows-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full h-auto">
        <div className="h-[22rem] rounded-lg md:block hidden relative overflow-hidden">
          <Image
            src={imageUrl1}
            alt="alt"
            className="object-cover"
            fill
          />
        </div>
        <div className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${poppins.className} text-xl font-semibold`}>
            {problems?.problems?.[0]?.title ?? "No title available"}
          </h3>
          <div>
            <p className="text-muted-foreground md:text-sm">
              {problems?.problems?.[0]?.description ??
                "No description available"}
            </p>
            <div className="mt-6">
              <GppMaybeOutlinedIcon className="text-primary" fontSize="large" />
            </div>
          </div>
        </div>
        <div className="h-[20rem] bg-white lg:block hidden"></div>
        <div className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${poppins.className} text-xl font-semibold`}>
            {problems?.problems?.[1]?.title ?? "No title available"}
          </h3>
          <div>
            <p className="text-muted-foreground md:text-sm">
              {problems?.problems?.[1]?.description ??
                "No description available"}
            </p>
            <div className="mt-6">
              <HolidayVillageOutlinedIcon
                className="text-primary"
                fontSize="large"
              />
            </div>
          </div>
        </div>
        <div className="h-[22rem] rounded-lg md:block hidden relative overflow-hidden">
          <Image src={imageUrl2} alt="alt" className="object-cover" fill />
        </div>
        <div className="h-[20rem] bg-white lg:block hidden"></div>
        <div className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${poppins.className} text-xl font-semibold`}>
            {problems?.problems?.[2]?.title ?? "No title available"}
          </h3>
          <div>
            <p className="text-muted-foreground md:text-sm">
              {problems?.problems?.[2]?.description ??
                "No description available"}
            </p>
            <div className="mt-6">
              <FileX color={color.blue.default} size={30} />
            </div>
          </div>
        </div>
        <div className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${poppins.className} text-xl font-semibold`}>
            {problems?.problems?.[3]?.title ?? "No title available"}
          </h3>
          <div>
            <p className="text-muted-foreground md:text-sm">
              {problems?.problems?.[3]?.description ??
                "No description available"}
            </p>
            <div className="mt-6">
              <Scale color={color.blue.default} size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
