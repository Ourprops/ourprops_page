'use client'
import React from 'react';
import '../app/styles.css';
import Hero from './content/Hero'
import AboutUs from './content/AboutUs'
import WhyChooseUs from './content/WhoChooseUs'
import Portfolio from './content/Portfolio'
import Newsletter from './content/Newsletter'
import Blog from './content/Blog'

export default function Content() {
    return (
        <div className='font-sans'>
            <Hero />
            <AboutUs />
            <WhyChooseUs />
            <Portfolio />
            <Newsletter />
            <Blog />
        </div>
    )
}
