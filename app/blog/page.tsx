import Content from "@/components/layout/blog/content";
import Hero from "@/components/layout/blog/hero";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";

const BLOG_QUERY = defineQuery(`*[
    _type == "blogType"
]| order(publishedAt) [0...$count]{
    _id,
    title,
    subtitle,
    image,
    publishedAt,
    author,
    slug
}`);

export default async function Page() {
  const { data: blogs } = await sanityFetch({
    query: BLOG_QUERY,
    params: { count: 10 },
  });
    console.log(blogs);
  return (
    <div>
      <Hero />
      <Content blogs={blogs} />
    </div>
  );
}
