"use client"
import Image from "next/image";
import { motion } from 'motion/react';
import { urlFor } from "@/sanity/url-for";
import { Montserrat } from "next/font/google";
import { placeholder } from "./services";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export default function ServiceCard({
    service,
    num
}: {
    service: { title: string; description: string; imageUrl: string };
    num: number;
}) {
    const serviceImage = service?.imageUrl
        ? (urlFor(service.imageUrl)?.url() ?? "")
        : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: num * 0.3 }}
            viewport={{ once: true }}
            className={`w-full rounded-lg h-[24rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-neutral-400 p-4 aspect-square flex justify-between flex-col`}
        >
            <div className="w-full flex flex-row items-start justify-between">
                <h2
                    className={`${montserrat.className} lg:text-xl text-lg font-medium text-white lg:w-[70%] h-[4rem]`}
                >
                    {service.title}
                </h2>
                <span className="text-white font-bold lg:text-xl text-lg">
                    {num + 1}.
                </span>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mt-8">
                <div className="lg:block sm:block hidden"></div>
                <div>
                    <p className="text-base sm:text-sm text-muted lg:mt-4 mt-4">
                        {service?.description}
                    </p>
                </div>
            </div>
            <div className="flex-1 w-full relative mt-4 overflow-hidden flex justify-start items-end">
                <div className="lg:w-2/5 sm:w-3/4 md:w-2/4 w-2/5 rounded-sm relative overflow-hidden">
                    <Image
                        src={serviceImage || "/placeholder.jpg"}
                        width={300}
                        height={800}
                        alt={service.title}
                        priority
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={placeholder}
                    />
                </div>
            </div>
        </motion.div>
    );
}