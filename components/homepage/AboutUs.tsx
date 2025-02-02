import React from 'react';
import { Button } from '../ui/button';

export default function AboutUs() {
    return (
        <div>
            <section className="section2  w-[100%] h-auto flex flex-col lg:flex-row xl:items-start justify-evenly md:py-0 py-10 lg:px-28 sm:px-10 px-5 md:gap-32 gap-x-10 gap-y-0">
                <div className='xl:w-[50%] w-[100%] flex justify-start items-start my-10 xl:my-0 flex-col'>
                    <div className="relative">
                        <p className='text-muted-foreground text-xs uppercase mt-2'>About</p>
                        <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                    </div>
                    <h1 className='md:text-5xl text-4xl font-bold text-black md:mt-16 mt-8 md:w-[90%] w-[100%]'>
                        Empowering Real Estate Through Technology
                    </h1>
                    <p className='text-muted-foreground md:mt-16 mt-8 text-sm'>
                        At the heart of our mission is the belief that property ownership should be simple, secure, and transparent. Through innovative tools like blockchain for fraud prevention, map-based visualization, and secure document uploads, we are empowering property owners, buyers
                    </p>
                    <div className='mt-10'>
                        <Button className='bg-appColor-orange-default hover:bg-appColor-orange-dark text-white px-5 py-3 rounded-md'>
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className='xl:w-[50%] w-[100%] h-[100%] flex justify-start mt-10 xl:mt-0 '>
                    <div className="rounded-lg md:h-[550px] h-[300px] w-[100%] bg-neutral-900"></div>
                </div>
            </section>
        </div>
    )
}
