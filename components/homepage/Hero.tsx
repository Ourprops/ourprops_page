'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { Button } from '../ui/button';
import SecondHeader from './second-header';


export default function Hero() {
    const [isOpen, setOpen] = useState(false);
    const currentPath = usePathname();
    console.log(currentPath.split("/")[0])

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
                <SecondHeader color='text-white' />

                {/* Body Section */}
                <div className="relative h-auto xl:h-[80vh] w-full">
                    {/* <img
                        src='/interior2.jpg'
                        className="absolute inset-0 h-full w-full object-cover"
                    /> */}
                    <div className="xl:absolute relative py-24 xl:py-0 inset-0 bg-neutral-900 flex justify-center items-center">
                        <div
                            className="text-center text-white w-[100%] md:w-[90%] lg:w-[70%] p-8 flex flex-col justify-start items-center"
                        >
                            <h2 className="md:text-[50px] sm:text-[40px] text-[30px] w-[100%] mb-6 font-bold leading-[35px] md:leading-[60px] tracking-wide">
                                Visualize Boundaries, Verify Ownership, Prevent Fraud
                            </h2>
                            <p className="sm:text-base text-sm text-muted-foreground mb-8 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[60%] text-center">
                                Powerful mapping tools and blockchain security to simplify property transactions and protect your assets.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Button className='bg-appColor-orange-default hover:bg-appColor-orange-dark text-white md:py-6 px-5'>
                                    Subscribe for Updates
                                </Button>
                                <Button variant='link' className='bg-transparent text-white md:py-6 px-5'>
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
