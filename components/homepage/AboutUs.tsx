import React from 'react';

export default function AboutUs() {
    return (
        <div>
            <section className="section2  w-[100%] xl:h-[100vh] h-auto flex flex-col lg:flex-row xl:items-start justify-evenly md:py-10 py-0 lg:px-28 sm:px-10 px-5 md:gap-32 gap-x-10 gap-y-0">
                <div className='xl:w-[50%] w-[100%] flex justify-start items-start py-10 md:py-20 flex-col'>
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
                </div>
                <div className='xl:w-[50%] w-[100%] h-[100%] flex justify-start xl:py-16 py-10'>
                    <div className="rounded-lg md:h-[550px] h-[300px] w-[100%] bg-slate-700"></div>
                </div>
            </section>
        </div>
    )
}
