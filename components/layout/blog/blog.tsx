import { BLOG_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { placeholder } from "../home/services";
import { PortableText } from "@portabletext/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Blog({ blog }: { blog: BLOG_QUERYResult }) {
  const blogImage = blog?.imageUrl ? urlFor(blog.imageUrl)?.url() : "";
  const date = new Date(blog?.date ?? "");

  return (
    <div className="py-20 flex flex-col justify-center items-center gap-5 xl:px-20 lg:px-10 md:px-5 px-4">
      <div>
        <span className="p-1 rounded-md border border-primary uppercase text-[10px] text-primary">
          {date.toDateString()}
        </span>
      </div>
      <h1
        className={`lg:text-6xl sm:text-5xl text-4xl font-medium ${poppins.className}`}
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
      <div className="prose max-w-none w-full sm:leading-7 font-sans">
        <PortableText value={blog?.content ?? []} />
      </div>
    </div>
  );
}
