'use client'
import React from 'react';
import '../app/styles.css';
import Hero from './homepage/Hero'
import AboutUs from './homepage/AboutUs'
import Newsletter from './homepage/Newsletter'
import Blog from './homepage/Blog'
import Services from './homepage/Services';

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
