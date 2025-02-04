/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

type Service = {
    headline: string;
    subheadline: string;
    svg: string;
}

type ServicesProps = {
    headline: string;
    subheadline: string;
    services: Service[]; 
}

export default function Services({
    headline,
    subheadline,
    services
}: ServicesProps) {
    
    return (
        <div className='w-[100%] h-auto pt-10 pb-20 lg:px-28 sm:px-10 px-5'>
            <div className='flex flex-col py-5'>
                <div className="relative">
                    <p className='text-muted-foreground text-xs uppercase mt-2'>What we offer</p>
                    <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-orange-default'></span>
                </div>
                <h1 className='md:text-5xl text-4xl font-bold text-black mt-8 md:w-[70%] w-[100%]'>
                    Smart Solutions for Property Management
                </h1>
                <p className='text-muted-foreground mt-8 md:text-sm text-xs lg:w-[40%] md:w-[70%] sm:w-[90%] w-[100%]'>
                    Manage property boundaries, secure ownership, and protect your investments with smart, transparent tools designed for the modern world.
                </p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-8 gap-10'>
                {services.map((service) => (
                    <div key={service.headline} className="rounded-md bg-neutral-100 col-span-1 h-[400px] p-4">
                        <div>
                            
                        </div>
                        <h2 className='text-xl font-bold mt-4'>
                            {service.headline}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
