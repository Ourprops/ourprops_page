import { BlogType } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { placeholder } from "../home/services";
import { PortableText } from "@portabletext/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Blog({
  blog,
}: {
  blog: BlogType;
}) {
  const blogImage = blog.image ? urlFor(blog.image)?.url() : "";
  
  return (
    <div className="py-20 flex flex-col justify-center items-center gap-5 xl:px-20 lg:px-10 md:px-5 px-4">
      <p className="text-xs text-muted-foreground">
        {new Date(blog?.date ?? "").toLocaleDateString()}
      </p>
      <h1
        className={`lg:text-6xl sm:text-5xl text-4xl font-bold ${poppins.className}`}
      >
        {blog.title}
      </h1>
      <p className="sm:text-lg text-base text-muted-foreground">
        {blog.subtitle}
      </p>
      <div className="relative w-full lg:h-[600px] md:h-[500px] h-[400px]  overflow-hidden my-5">
        <Image
          src={
            blogImage ||
            "https://images.pexels.com/photos/8099475/pexels-photo-8099475.jpeg?auto=compress&cs=tinysrgb&w=1200"
          }
          alt={blog.title || ""}
          layout="fill"
          objectFit="cover"
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
