import '../app/styles.css';
import Hero from './homepage/Hero'
import AboutUs from './homepage/AboutUs'
import Newsletter from './homepage/Newsletter'
import Blog from './homepage/Blog'
import Services from './homepage/Services';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';

const HERO_QUERY = defineQuery(`*[
    _type == "hero"
][0]{headline, subheadline, image}`);

const ABOUT_QUERY = defineQuery(`*[
    _type == "about"
][0]{headline, subheadline, image}`);

const SERVICES_QUERY = defineQuery(`*[ 
    _type == "service"
]{headline, subheadline, services}`);

export default async function Content() {
    const { data: hero } = await sanityFetch({ query: HERO_QUERY });
    const { data: about } = await sanityFetch({ query: ABOUT_QUERY });
    const { data: services } = await sanityFetch({ query: SERVICES_QUERY });

    return (
        <div className='font-sans'>
            <Hero {...hero} />
            <AboutUs {...about} />
            <Services {...services} />
            <Newsletter />
            <Blog />
        </div>
    )
}
