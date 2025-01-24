'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import '../../app/styles.css';

export default function Hero() {
    const slides = [
        {
            image: '/interior2.jpg',
            title: 'Own Your Dream Home',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad voluptatum aliquid dolorum dolores quod',
        },
        {
            image: '/property.jpg',
            title: 'Live Where Dreams Flourish',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad voluptatum aliquid dolorum dolores quod',
        },
        {
            image: '/interior.jpg',
            title: 'Elevate Your Living Experience',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad voluptatum aliquid dolorum dolores quod',
        },
    ];
    return (
    <div>
        {/* Hero Section */}
        <div className="relative h-screen w-full">
            <div className='flex justify-center'>
                <nav className="bg-transparent absolute top-0 max-w-6xl px-6 py-4 w-full z-10 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <span className="text-blue-500 text-2xl font-extrabold">OUR</span>
                        <span className="text-white text-2xl font-extrabold">PROPS</span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex items-center space-x-8">
                        {[
                            { name: 'Home'},
                            { name: 'About Us'},
                            { name: 'Blog'}
                        ].map((item, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href="#"
                                    className="text-white font-medium hover:text-blue-500 transition duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Section */}
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#3f81f2"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.05 11.828a4.992 4.992 0 01-1.414 1.414m1.414-1.414a4.992 4.992 0 001.414-1.414m-1.414 1.414L8.465 5.636m4.95 4.95a4.992 4.992 0 011.414 1.414M6.343 17.657l4.95-4.95m0 0a4.992 4.992 0 01-1.414-1.414m1.414 1.414a4.992 4.992 0 001.414-1.414m-1.414 1.414l6.343 6.343"
                                />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-white text-sm font-medium">Need Help?</span>
                            <span className="block text-blue-500 font-bold text-md">+1 (123) 456-7890</span>
                        </div>
                    </div>
                </nav>
            </div>

            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                interval={5000}
                transitionTime={1000}
            >
                {slides.map((slide, index) => (
                <div key={index} className="relative h-screen w-full">
                    <img
                        src={slide.image}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white w-[100%] md:w-[60%] p-8 flex flex-col items-center"
                    >
                        <h2 className="text-[70px] mb-6 font-extrabold leading-[70px]">{slide.title}</h2>
                        <p className="text-lg text-gray-300 mb-8 w-[100%] md:w-[60%] text-center">{slide.desc}</p>
                        <div className="flex justify-center space-x-4">
                            <Button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition">Read More About Us</Button>
                            {/* <button className="bg-transparent border border-white px-6 py-2 rounded-full shadow-md hover:bg-white hover:text-black transition">Subscribe</button> */}
                        </div>
                    </motion.div>
                    </div>
                </div>
                ))}
            </Carousel>
        </div>
    </div>
    )
}
