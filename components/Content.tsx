'use client'
import React from 'react';
import '../app/styles.css';
import Hero from './content/Hero'
import AboutUs from './content/AboutUs'
import Newsletter from './content/Newsletter'
import Blog from './content/Blog'
import Services from './content/Services';

export default function Content() {
    return (
        <div className='font-sans'>
            <Hero />
            <AboutUs />
            <Services />
            <Newsletter />
            <Blog />
        </div>
    )
}
