'use client'

import React, {useState, useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from "@/components/ui/button";
import {Menu} from 'lucide-react'
import Link from 'next/link';
import '../../app/styles.css';
import {AnimatePresence, motion } from "motion/react";
import Hamburger from 'hamburger-react';
import { usePathname, useRouter } from "next/navigation";

// Slide in animation for menu
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between child animations
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function Hero() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname(); // Get the current route path
    const router = useRouter();

    const handleLinkClick = (route:string) => {
        router.push(route); // Navigate to the route
        setOpen(false); // Close the menu
    };

    // Hide the menubar based on the screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);
    
    return (
    <div>
        {/* Hero Section */}
        <div className="relative h-screen w-full">
            <div className='flex justify-center'>
                <nav className="bg-transparent absolute top-0 w-full px-10 lg:px-36 py-4 z-10 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <span className="text-orange-500 text-2xl font-extrabold">OUR</span>
                        <span className="text-white text-2xl font-extrabold">PROPS</span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8 ">
                        {[
                            { name: 'Home', route: "/"},
                            { name: 'Blog', route: "/blog"},
                            { name: 'About Us', route: "/about-us"}
                        ].map((item, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href={item.route}
                                    className="text-white text-md hover:text-blue-500 transition duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Section */}
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="text-white text-md">
                            <p>+91 123 456 789</p>
                        </div>
                        <div>
                            <Button className="bg-blue-500 text-white px-6 py-4 shadow-md hover:bg-blue-600 transition">Join our waitlist</Button>
                        </div>
                    </div>

                    <div className='md:hidden flex'>
                    <Hamburger toggled={isOpen} toggle={setOpen} color='white' />
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className='bg-black w-[100%] h-screen fixed top-0 left-0 z-20 flex flex-col justify-center items-center text-white'>
                        
                        <div className='absolute top-5 right-10'>
                            <Hamburger toggled={isOpen} toggle={setOpen} color='white' />
                        </div>
                        <motion.div variants={itemVariants} className='mb-5'>
                            <div
                                onClick={() => handleLinkClick('/')}
                                className={`${pathname === 'about-us' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                            >
                                HOME
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className='mb-5'>
                            <div
                                onClick={() => handleLinkClick('/blog')}
                                className={`${pathname === 'about-us' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                            >
                                BLOG
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className='mb-5'>
                            <div
                                onClick={() => handleLinkClick('/about-us')}
                                className={`${pathname === 'about-us' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                            >
                                ABOUT US
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>



            {/* Body Section */}
            <div className="relative h-screen w-full">
                <img
                    src='/interior2.jpg'
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-white w-[100%] md:w-[90%] lg:w-[70%] p-8 flex flex-col justify-start items-center"
                    >
                        <h2 className="lg:text-[70px] text-[60px] w-[100%] sm:w-[80%]  mb-6 font-extrabold leading-[65px] md:leading-[70px]">Find Your Dream Home</h2>
                        <p className="text-lg text-gray-300 mb-8 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[60%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad voluptatum aliquid dolorum dolores</p>
                        <div className="flex justify-center space-x-4">
                            <Button className="bg-blue-500 text-white px-6 py-4 shadow-md hover:bg-blue-600 transition">Join Waitlist</Button>
                            <Button className=" text-white bg-transparent hover:bg-transparent px-6 py-4 shadow-md border-2 transition">Learn More</Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    )
}
