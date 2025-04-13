import Hero from "@/components/layout/home/hero";
import Newsletter from "@/components/layout/news-letter";
import Problem from "@/components/layout/home/problem";
import Services from "@/components/layout/home/services";
import Target from "@/components/layout/home/target";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";

const HERO_QUERY = defineQuery(`*[
    _type == "homeHero"
][0]{
    headline,
    subheadline,
}`);
const PROBLEM_QUERY = defineQuery(`*[
    _type == "problemsType"
][0]{
    headline,
    subheadline,
    problems[]->{
        _id,
        title,
        description,
        },
    imageUrl1,
    imageUrl2,
}`);

export default async function Home() {
  const [{ data: hero }, { data: problems }] = await Promise.all([
    sanityFetch({
      query: HERO_QUERY,
    }),
    sanityFetch({
      query: PROBLEM_QUERY,
    }),
  ]);

  return (
    <div>
      <Hero hero={hero} />
      <Problem problems={problems} />
      <Services />
      <Target />
      <Newsletter />
    </div>
  );
}
