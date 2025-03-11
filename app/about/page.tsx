import Hero from "@/components/layout/about/hero";
import OurPurpose from "@/components/layout/about/our-purpose";
import OurStory from "@/components/layout/about/our-story";
import Newsletter from "@/components/layout/news-letter";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";

const ABOUT_HERO_QUERY = defineQuery(`*[
    _type == "aboutHero"
][0]{
    headline,
    subheadline,
    "imageUrl": image.asset->url
}`);

const OUR_STORY_QUERY = defineQuery(`*[
    _type == "ourStory"
][0]{
    headline,
    subheadline,
    "imageUrl": image.asset->url
}`);

const OUR_PURPOSE_QUERY = defineQuery(`*[
    _type == "ourPurpose"
][0]{
    headline,
    subheadline,
    ourMission,
    ourVision
}`);

export default async function Page() {
  const { data: aboutHero } = await sanityFetch({
    query: ABOUT_HERO_QUERY,
  });
  const { data: ourStory } = await sanityFetch({
    query: OUR_STORY_QUERY,
  });
  const { data: ourPurpose } = await sanityFetch({
    query: OUR_PURPOSE_QUERY,
  });

  return (
    <div>
      <Hero hero={aboutHero} />
      <OurStory ourStory={ourStory} />
      <OurPurpose ourPurpose={ourPurpose} />
      <Newsletter />
    </div>
  );
}
