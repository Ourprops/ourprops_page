import { BLOG_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { placeholder } from "../home/services";
import { PortableText } from "@portabletext/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export default function Blog({ blog }: { blog: BLOG_QUERYResult }) {
  const blogImage = blog?.imageUrl ? urlFor(blog.imageUrl)?.url() : "";
  const date = new Date(blog?.date ?? "");

  return (
    <div className="py-24 flex flex-col justify-center items-center gap-5 xl:px-20 lg:px-10 md:px-5 px-4">
      <div>
        <span className="p-1 px-3 rounded-full border text-sm text-black">
          {date.toDateString()}
        </span>
      </div>
      <h1
        className={`lg:text-6xl sm:text-5xl text-4xl font-medium ${montserrat.className}`}
      >
        {blog?.title}
      </h1>
      <p className="text-base sm:text-sm text-muted-foreground">
        {blog?.subtitle}
      </p>
      <div className="relative w-full lg:h-[600px] md:h-[500px] h-[400px]  overflow-hidden my-5">
        <Image
          src={blogImage}
          alt={blog?.title || ""}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          placeholder="blur"
          blurDataURL={placeholder}
        />
      </div>
      <div className="max-w-4xl">
        <PortableText value={blog?.content ?? []} />
      </div>
    </div>
  );
}
