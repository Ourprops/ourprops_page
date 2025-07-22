import Hero from "@/components/home/hero";
import Problem from "@/components/home/problem";
import Services from "@/components/home/services";
import Target from "@/components/home/target";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import MapSection from "@/components/homepage/map-section";

const HERO_QUERY = defineQuery(
  `*[_type == "homeHero"][0]{ headline, subheadline }`
);
const PROBLEM_QUERY = defineQuery(`*[_type == "problemsType"][0]{
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
    sanityFetch({ query: HERO_QUERY }),
    sanityFetch({ query: PROBLEM_QUERY }),
  ]);

  return (
    <div>
      <Hero hero={hero} />

      {/* Fullscreen hybrid Google Map */}
      <MapSection />

      <Problem problems={problems} />
      <Services />
      <Target />
    </div>
  );
}
