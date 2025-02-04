'use client'
import '../../app/styles.css';
import Image from "next/image"
import Header from "@/components/Header"
import Services from "@/components/homepage/Services"
import Newsletter from "@/components/homepage/Newsletter"
import Footer from "@/components/Footer"
import { Button } from '../../components/ui/button';
import Hamburger from 'hamburger-react';
import Link from "next/link";
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import SecondHeader from '@/components/homepage/second-header';

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

export default function page() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname(); // Get the current route path
    const router = useRouter();

    const path = pathname.split("/")[1];

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
    <div className='font-sans'>
        {/* Scroll In Navbar */}
        <Header />

        {/* Navbar  */}
        <SecondHeader color="text-white" />

        <main className="h-auto">
            {/* Hero Section */}
            <section className="relative h-[80vh] bg-neutral-900">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-6xl px-4">
                    <h2 className="md:text-[50px] text-white sm:text-[40px] text-[30px] w-[100%] mb-6 font-bold leading-[35px] md:leading-[60px] tracking-wide">
                        Visualize Boundaries, Verify Ownership, Prevent Fraud
                    </h2>
                    <div className="flex justify-center items-center">
                        <Button className='bg-appColor-orange-default hover:bg-appColor-orange-dark mt-3 text-white md:py-6 px-5'>
                            Subscribe for Updates
                        </Button>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="w-[100%] h-auto flex flex-col lg:flex-row lg:px-28 sm:px-10 px-5 md:gap-8 gap-x-10 gap-y-0 my-20">
                <div className='xl:w-[50%] w-[100%] flex justify-start items-start mt-10 xl:my-0 flex-col'>
                    <div className="relative">
                        <p className='text-muted-foreground text-xs uppercase mt-2'>Our Missoin</p>
                        <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-bold text-black md:mt-16 mt-8 md:w-[90%] w-[100%]'>
                        Empowering Real Estate Through Technology
                    </h1>
                    <p className='text-muted-foreground md:mt-16 mt-8 text-sm'>
                        At the heart of our mission is the belief that property ownership should be simple, secure, and transparent. Through innovative tools like blockchain for fraud prevention, map-based visualization, and secure document uploads, we are empowering property owners, buyers
                    </p>
                </div>
                <div className='xl:w-[50%] w-[100%] h-[100%] flex justify-start mt-10 xl:mt-0'>
                    <div className="rounded-lg md:h-[550px] h-[300px] w-[100%] bg-neutral-900"></div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section2 w-[100%] h-auto xl:h-[60vh] flex flex-col lg:flex-row xl:items-start justify-evenly md:py-0 py-0 lg:px-28 sm:px-10 px-5 mt-0 xl:mt-20">
                <div className='xl:w-[50%] w-[100%] flex justify-start items-start my-0 xl:my-0 flex-col'>
                    <div className="relative">
                        <p className='text-muted-foreground text-xs uppercase mt-2'>Our STORY</p>
                        <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-bold text-black md:mt-16 mt-8 md:w-[90%] w-[100%]'>
                        Empowering Real Estate Through Technology
                    </h1>
                </div>
                <div className='xl:w-[50%] w-[100%] h-[100%] flex justify-start mt-0 xl:mt-20'>
                    <p className='text-muted-foreground md:mt-0 mt-8 text-md leading-6'>
                        At the heart of our mission is the belief that property ownership should be 
                        simple, secure, and transparent. Through innovative tools like blockchain for fraud prevention, 
                        map-based visualization, and secure document uploads, we are empowering property owners, buyers
                        At the heart of our mission is the belief that property ownership should be 
                        simple, secure, and transparent. Through innovative tools like blockchain for fraud prevention, 
                    </p>
                </div>
            </section>

            {/* What we offer Section*/}
            <Services />

            {/* Newsletter Section*/}
            <Newsletter />

            {/* Footer Section */}
            <Footer />


        </main>
    </div>
    )
}

