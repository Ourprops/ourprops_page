'use client'
import React, {useState, useEffect} from 'react';
import {motion} from "motion/react"
import Link from 'next/link';

export default function Header() {
    const [scrolling, setScrolling] = useState(false);

    // Scroll event listener to detect when scrolling starts
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex justify-center'>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: scrolling ? 0 : -100, opacity: scrolling ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md fixed top-0 w-full px-36 py-4 z-20 flex items-center justify-between"
            >
                {/* Left Section */}
                <div className="flex items-center space-x-2">
                    <span className="text-blue-500 text-2xl font-extrabold">OUR</span>
                    <span className="text-black text-2xl font-extrabold">PROPS</span>
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
                                className="text-black font-medium hover:text-blue-500 transition duration-300"
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
                        <span className="block text-black text-sm font-medium">Need Help?</span>
                        <span className="block text-blue-500 font-bold text-md">+1 (123) 456-7890</span>
                    </div>
                </div>
            </motion.nav>
        </div>
    )
}
