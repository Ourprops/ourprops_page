import Hero from "@/components/home/hero";
import Problem from "@/components/home/problem";
import Services from "@/components/home/services";
import Target from "@/components/home/target";
import Map from "@/components/home/map";
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

const SERVICES_QUERY = defineQuery(`*[
    _type == "servicesType"
][0]{
    headline,
    subheadline,
    services[]->{
        _id,
        title,
        description,
        "imageUrl": image.asset->url,
    }
}`);

const TARGETS_QUERY = defineQuery(`*[
    _type == "targetsType"
][0]{
    headline,
    subheadline,
    targets[]->{
        _id,
        target,
        "imageUrl": image.asset->url,
        description
    }
}`);

export default async function Home() {
  const [{ data: hero }, { data: problems }, { data: services }, { data: targets }] = await Promise.all([
    sanityFetch({
      query: HERO_QUERY,
    }),
    sanityFetch({
      query: PROBLEM_QUERY,
    }),
    sanityFetch({
      query: SERVICES_QUERY,
    }),
    sanityFetch({
      query: TARGETS_QUERY,
    }),
  ]);

  return (
    <div>
      <Hero hero={hero} />
      <Problem problems={problems} />
      <Services services={services} />
      <Map />
      <Target targets={targets} />
    </div>
  );
}
