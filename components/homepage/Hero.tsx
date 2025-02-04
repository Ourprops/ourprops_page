'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { Button } from '../ui/button';
<<<<<<< HEAD
import SecondHeader from './second-header';


export default function Hero() {
    const [isOpen, setOpen] = useState(false);
    const currentPath = usePathname();
    console.log(currentPath.split("/")[0])
=======
import Image from "next/image";
import { urlFor } from '@/sanity/url-for';


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



type HeroProps = {
    headline?: string;
    subheadline?: string;
    image?: string;
};

export default function Hero({
    headline,
    subheadline,
    image,
}: HeroProps) {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname(); // Get the current route path
    const router = useRouter();

    const path = pathname.split("/")[1];

    const heroImageUrl = image
    ? urlFor(image)?.url()
    : null;


    const handleLinkClick = (route: string) => {
        router.push(route); // Navigate to the route
        setOpen(false); // Close the menu
    };
>>>>>>> 2367a88 (Update package-lock.json)

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
        <div className='h-auto xl:h-[90vh]'>
            {/* Hero Section */}
            <div className="relative w-full">
                {/* Navbar  */}
<<<<<<< HEAD
                <SecondHeader color='text-white' />
=======
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
                                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-appColor-orange-default scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
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

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className='bg-black w-[100%] h-screen fixed top-0 left-0 z-20 flex flex-col justify-center items-center text-white'>

                            <div className='absolute top-10 right-10'>
                                <Hamburger size={7} toggled={isOpen} toggle={setOpen} color='white' />
                            </div>
                            <motion.div variants={itemVariants} className='mb-5'>
                                <div
                                    onClick={() => handleLinkClick('/')}
                                    className={`${path === '' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                                >
                                    HOME
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className='mb-5'>
                                <div
                                    onClick={() => handleLinkClick('/blog')}
                                    className={`${path === 'blog' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                                >
                                    BLOG
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className='mb-5'>
                                <div
                                    onClick={() => handleLinkClick('/about')}
                                    className={`${path === 'about' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                                >
                                    ABOUT US
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>


>>>>>>> 2367a88 (Update package-lock.json)

                {/* Body Section */}
                <div className="relative h-auto xl:h-[80vh] w-full">
                    <Image
                        src={heroImageUrl || "https://placehold.co/550x310/png"}
                        alt='hero image'
                        className="absolute inset-0 h-full w-full object-cover"
                        fill
                    />
                    <div className="xl:absolute relative py-24 xl:py-0 inset-0 flex justify-center items-center">
                        <div
                            className="text-center text-white w-[100%] md:w-[90%] lg:w-[70%] p-8 flex flex-col justify-start items-center"
                        >
                            <h2 className="md:text-[50px] sm:text-[40px] text-[30px] w-[100%] mb-6 font-bold leading-[35px] md:leading-[60px] tracking-wide">
                                {headline}
                            </h2>
                            <p className="sm:text-base text-sm text-muted-foreground mb-8 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[60%] text-center">
                                {subheadline}
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Button className='text-white md:py-6 px-5'>
                                    Subscribe for Updates
                                </Button>
                                <Button variant='secondary' className=' text-white md:py-6 px-5'>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
