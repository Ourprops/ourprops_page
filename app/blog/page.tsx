import Content from "@/components/blog/content";
import Hero from "@/components/blog/hero";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";

const BLOGS_QUERY = defineQuery(`*[
    _type == "blogType"
]| order(date) [0...$count]{
    _id,
    title,
    subtitle,
    "imageUrl": image.asset->url,
    date,
    author,
    slug
}`);

export default async function Page() {
  const { data: blogs } = await sanityFetch({
    query: BLOGS_QUERY,
    params: { count: 10 },
  });

  return (
    <div>
      <Hero />
      <Content blogs={blogs} />
    </div>
  );
}
