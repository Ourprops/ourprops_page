'use client'
import { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { AnimatePresence, motion } from "motion/react";
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

export default function SecondHeader() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname(); // Get the current route path
    const router = useRouter();

    const handleLinkClick = (route: string) => {
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
        {/* Navbar  */}
        <div className='flex justify-center'>
            <nav className="bg-transparent absolute top-0 w-full px-10 lg:px-36 py-4 z-10 flex items-center justify-between">
                <h2 className="text-black font-bold text-2xl">OurProps</h2>
                {/* Navigation Links */}
                <ul className="hidden md:flex items-center space-x-8 ">
                    {[
                        { name: 'Home', route: "/" },
                        { name: 'Blog', route: "/blog" },
                        { name: 'About', route: "/about" }
                    ].map((item, index) => (
                        <li key={index} className="relative group">
                            <Link
                                href={item.route}
                                className="text-black hover:underline transition duration-200 font-medium"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Contact Section */}
                <div className="hidden md:block">
                    <Button className='bg-appColor-orange-default hover:bg-appColor-orange-dark text-white'>Join our waitlist</Button>
                </div>
                <div className='md:hidden flex'>
                    <Hamburger toggled={isOpen} toggle={setOpen} color='black' />
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
    </div>
    )
}
