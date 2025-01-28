'use client'
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import Hamburger from 'hamburger-react';

// Animation variants for the container and children
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

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname(); // Get the current route path
    const router = useRouter();

    const handleLinkClick = (route:string) => {
        router.push(route); // Navigate to the route
        setOpen(false); // Close the menu
    };

    // Scroll event listener to detect when scrolling starts
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) { // Assuming 768px is the medium breakpoint
                setOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    return (
        <>
            <div className='flex justify-center sticky w-[100%] top-0 z-50'>
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: scrolling ? 0 : -100, opacity: scrolling ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-md fixed top-0 w-full px-10 lg:px-36 py-4 z-20 flex items-center justify-between"
                >
                    {/* Left Section */}
                    <div className="flex items-center space-x-2">
                        <span className="text-orange-500 text-2xl font-extrabold">OUR</span>
                        <span className="text-black text-2xl font-extrabold">PROPS</span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Home', route: "/"},
                            { name: 'Blog', route: "/blog"},
                            { name: 'About Us', route: "/about-us"}
                        ].map((item, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href={item.route}
                                    className="text-black text-md font-medium hover:text-blue-500 transition duration-300"
                                >
                                    {item.name}
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Section */}
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="text-black text-md">
                            <p>+91 123 456 789</p>
                        </div>
                        <div>
                            <Button className="bg-blue-500 text-white px-6 py-4 shadow-md hover:bg-blue-600 transition">Join our waitlist</Button>
                        </div>
                    </div>

                    <div className='md:hidden flex'>
                        <Hamburger toggled={isOpen} toggle={setOpen} color='black' />
                    </div>
                </motion.nav>
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
        </>
    )
}
