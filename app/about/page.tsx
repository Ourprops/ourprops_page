'use client'
import Image from "next/image"
import Header from "@/components/Header"
import Services from "@/components/homepage/Services"
import Newsletter from "@/components/homepage/Newsletter"
import Footer from "@/components/Footer"
import { Button } from '../../components/ui/button';
import Hamburger from 'hamburger-react';
import Link from "next/link";
import { useState } from "react"

export default function page() {
    const [isOpen, setOpen] = useState(false);
    return (
    <>
        <Header />
        {/* Navbar  */}
        <div className='flex justify-center'>
            <nav className="bg-transparent absolute top-0 w-full px-10 lg:px-36 py-4 z-10 flex items-center justify-between">
                <h2 className="text-white font-bold md:text-2xl sm:text-xl text-lg">OurProps</h2>
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
                                className="text-white text-md font-medium transition duration-300"
                            >
                                {item.name}
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Contact Section */}
                <div className="hidden md:block">
                    <Button variant='outline' className='bg-transparent text-white'>Join our waitlist</Button>
                </div>
                <div className='md:hidden flex'>
                    <Hamburger size={7} toggled={isOpen} toggle={setOpen} color='white' />
                </div>
            </nav>
        </div>
        <main className="h-auto">
            {/* Hero Section */}
            <section className="relative h-[80vh] bg-neutral-900">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-2xl px-4">
                    <h2 className="md:text-[50px] text-white sm:text-[40px] text-[30px] w-[100%] mb-6 font-extrabold leading-[35px] md:leading-[60px] tracking-wide">
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
            <section className="w-[100%] h-auto flex flex-col lg:flex-row lg:px-28 sm:px-10 px-5 md:gap-32 gap-x-10 gap-y-0 xl:my-20 my-0">
                <div className='xl:w-[50%] w-[100%] flex justify-start items-start my-10 xl:my-0 flex-col'>
                    <div className="relative">
                        <p className='text-muted-foreground text-xs uppercase mt-2'>Our Missoin</p>
                        <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-extrabold text-black md:mt-16 mt-8 md:w-[90%] w-[100%]'>
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
            <section className="section2  w-[100%]  h-auto flex flex-col lg:flex-row xl:items-start justify-evenly md:py-0 py-0 lg:px-28 sm:px-10 px-5 my-0 xl:my-20">
                <div className='xl:w-[50%] w-[100%] flex justify-start items-start my-10 xl:my-0 flex-col'>
                    <div className="relative">
                        <p className='text-muted-foreground text-xs uppercase mt-2'>Our STORY</p>
                        <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-extrabold text-black md:mt-16 mt-8 md:w-[90%] w-[100%]'>
                        Empowering Real Estate Through Technology
                    </h1>
                </div>
                <div className='xl:w-[50%] w-[100%] h-[100%] flex justify-start mt-10 xl:mt-0'>
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
    </>
    )
}

