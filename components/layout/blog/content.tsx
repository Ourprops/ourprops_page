"use client"
import { Button } from "@/components/ui/button";
import { BLOG_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/url-for";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Blog({ blog }: { blog: any }) {
  const blogImage = blog.image ? urlFor(blog.image)?.url() : "";
  const router = useRouter();

  return (
    <div className="w-full h-[350px]">
      <div className="relative w-full h-[250px] rounded-t-lg overflow-hidden">
        <Image
          src={blogImage || ""}
          alt={blog?.title || ""}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute z-10 w-full bottom-0 left-0 p-3 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-t-[0.1px] border-gray-100 flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-white text-sm font-semibold">{blog.author}</p>
            <p className="text-xs text-white">
              {new Date(blog?._createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="py-3">
        <Link
          href={`blog/${blog.slug?.current}`}
          className="text-lg font-semibold hover:underline"
        >
          {blog.title}
        </Link>
        <p className="text-sm text-muted-foreground">
          {/* 115 words max */}
          {
            blog.subtitle &&
            blog?.subtitle.length > 115
            ? blog.subtitle.slice(0, 115) + "..."
            : blog.subtitle}
        </p>
      </div>
      <div>
        <Button variant="link" className="pl-0" onClick={() => router.push(`blog/${blog.slug?.current}`)}>
          Read more <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
}

export default function Content({ blogs }: { blogs: BLOG_QUERYResult }) {
  return (
    <div className="w-full h-auto xl:px-20 lg:px-10 md:px-5 px-4 relative py-10">
      <div className="w-full mb-10">
        <h1 className={`text-xl font-medium ${poppins.className}`}>
          Blog
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          Over here, you{`'`}ll find all the latest updates and news that will help you stay informed.
        </p>
      </div>
      {blogs && blogs?.length > 0 ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-7 gap-y-16">
          {blogs.map((blog, index) => <Blog blog={blog} key={index} />)}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-muted-foreground">No blogs found</p>
        </div>
      )}
      <div className="w-full mt-32 flex justify-center items-center">
        <Button className="text-white">
          <ArrowDown color="white" />
          Load more
        </Button>
      </div>
    </div>
  );
}
