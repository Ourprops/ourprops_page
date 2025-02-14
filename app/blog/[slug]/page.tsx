import Blog from "@/components/layout/blog/blog";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import { notFound } from "next/navigation";

const BLOG_QUERY = defineQuery(`*[
    _type == "blogType" &&
    slug.current == $slug
][0]{
    _id, title, subtitle, image, date, author, slug, content
}`);

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { data: blog } = await sanityFetch({
      query: BLOG_QUERY,
      params: await params,
    });
    
    if (!blog) {
        return notFound();
    }

    return (
        <div>
            <Blog blog={blog} />
        </div>
    );
}