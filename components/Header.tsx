'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
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

    // Get the path name
    const path = pathname.split("/")[1];

    const handleLinkClick = (route: string) => {
        router.push(route); // Navigate to the route
        setOpen(false); // Close the menu
    };

    // Scroll in animation for navbar
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
    }, [isOpen, window, path]);

    return (
        <>
            <div className='flex justify-center sticky w-full top-0 z-50'>
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: scrolling ? 0 : -100, opacity: scrolling ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="backdrop-filter backdrop-blur-sm bg-opacity-10  bg-gray-100 shadow-md fixed top-0 w-full px-10 lg:px-36 py-0 md:py-2 z-20 flex items-center justify-between"
                >
                    {/* Left Section */}
                    <h2 className="text-black font-bold md:text-2xl sm:text-xl text-lg">OurProps</h2>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Home', route: "/", pathName: "" },
                            { name: 'Blog', route: "/blog", pathName: "blog" },
                            { name: 'About', route: "/about", pathName: "about" },
                        ].map((item, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href={item.route}
                                    className={ path === item.pathName ? `text-orange-500 border-b-2 border-orange-500 py-1 transition duration-200 font-medium` : `text-black hover:text-orange-400 transition duration-200 font-medium`}
                                >
                                    {item.name}
                                    {/* <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span> */}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Section */}
                    <div className="hidden md:block">
                        <Button className='bg-appColor-orange-default hover:bg-appColor-orange-dark text-white'>Join our waitlist</Button>
                    </div>

                    <div className='md:hidden flex'>
                        <Hamburger size={15} toggled={isOpen} toggle={setOpen} color='black' />
                    </div>
                </motion.nav>
            </div>
            


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className='bg-black w-[100%] h-screen fixed top-0 left-0 z-20 flex flex-col justify-center items-center'>

                        <div className='absolute top-10 right-10'>
                            <Hamburger size={15} toggled={isOpen} toggle={setOpen} color='white' />
                        </div>
                        <motion.div variants={itemVariants} className='mb-5'>
                            <div
                                onClick={() => handleLinkClick('/')}
                                className={`${path === '' ? 'text-orange-500 border-b-2 border-orange-500 py-1 text-xl font-sans font-bold cursor-pointer uppercase' : 'text-white text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                            >
                                HOME
                                {/* <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span> */}
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className='mb-5'>
                            <div
                                onClick={() => handleLinkClick('/blog')}
                                className={`${path === 'blog' ? 'text-orange-500 border-b-2 border-orange-500 py-1 text-xl font-sans font-bold cursor-pointer uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                            >
                                BLOG
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className='mb-5'>
                            <div
                                onClick={() => handleLinkClick('/about')}
                                className={`${path === 'about' ? 'text-orange-500 border-b-2 border-orange-500 py-1 text-xl font-sans font-bold cursor-pointer uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
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
