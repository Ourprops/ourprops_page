"use client";
import { Montserrat } from "next/font/google";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import { FileX, Scale } from "lucide-react";
import { urlFor } from "@/sanity/url-for";
import Image from "next/image";
import { PROBLEM_QUERYResult } from "@/sanity/types";
import { color } from "@/constants/color";
import { motion } from "motion/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
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
          <span className="text-sm font-semibold text-black">
            Problems
          </span>
        </div>
        <div className="col-span-3">
          <h2
            className={`sm:text-4xl text-3xl font-medium ${montserrat.className} lg:leading-[3rem] md:mt-2 mt-4 tracking-tighter`}
          >
            {`${first4Words}`}{" "}
            <span className="text-red-500 italic">{yours}</span>?
          </h2>
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 grid-rows-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full h-auto">
        <motion.div 
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-[22rem] rounded-lg md:block hidden relative overflow-hidden">
          <Image
            src={imageUrl1 || "/placeholder.jpg"}
            alt="alt"
            className="object-cover"
            fill
          />
        </motion.div>
        <motion.div 
        initial={{opacity: 0, x: -40}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${montserrat.className} text-xl font-medium`}>
            {problems?.problems?.[0]?.title}
          </h3>
          <div>
            <p className="text-muted-foreground sm:text-base text-sm">
              {problems?.problems?.[0]?.description}
            </p>
            <div className="mt-6">
              <GppMaybeOutlinedIcon fontSize="large" className="text-primary" />
            </div>
          </div>
        </motion.div>
        <div className="h-[20rem] bg-white lg:block hidden"></div>
        <motion.div 
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${montserrat.className} text-xl font-medium`}>
            {problems?.problems?.[1]?.title}
          </h3>
          <div>
            <p className="text-muted-foreground sm:text-base text-sm">
              {problems?.problems?.[1]?.description}
            </p>
            <div className="mt-6">
              <HolidayVillageOutlinedIcon
                fontSize="large"
                className="text-primary"
              />
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, x: 40}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-[22rem] rounded-lg md:block hidden relative overflow-hidden">
          <Image src={imageUrl2} alt="alt" className="object-cover" fill />
        </motion.div>
        <div className="h-[20rem] bg-white lg:block hidden"></div>
        <motion.div 
        initial={{opacity: 0, y: -40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${montserrat.className} text-xl font-medium`}>
            {problems?.problems?.[2]?.title}
          </h3>
          <div>
            <p className="text-muted-foreground sm:text-base text-sm">
              {problems?.problems?.[2]?.description}
            </p>
            <div className="mt-6">
              <FileX size={30} color={color.blue.default} />
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, x: -40}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="h-[22rem] rounded-lg bg-neutral-100 p-4 flex justify-between flex-col">
          <h3 className={`${montserrat.className} text-xl font-medium`}>
            {problems?.problems?.[3]?.title}
          </h3>
          <div>
            <p className="text-muted-foreground sm:text-base text-sm">
              {problems?.problems?.[3]?.description}
            </p>
            <div className="mt-6">
              <Scale size={30} color={color.blue.default} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
