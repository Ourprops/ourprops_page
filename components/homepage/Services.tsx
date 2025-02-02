import React from 'react'

export default function Services() {
    const services = [
        {
            id: 1,
            img: "/house1.jpg",
            title: "Affordable",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam",
        },
        {
            id: 2,
            img: "/house.jpg",
            title: "Convenient",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam",
        },
        {
            id: 3,
            img: "/house2.jpg",
            title: "Secured",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam",
        }
    ]
    return (
        <div className='w-[100%] h-auto py-10 lg:px-28 sm:px-10 px-5'>
            <div className='flex flex-col py-5'>
                <div className="relative">
                    <p className='text-muted-foreground text-xs uppercase mt-2'>What we offer</p>
                    <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                </div>
                <h1 className='md:text-5xl text-4xl font-bold text-black mt-8 md:w-[70%] w-[100%]'>
                    Smart Solutions for Property Management
                </h1>
                <p className='text-muted-foreground mt-8 text-sm lg:w-[40%] md:w-[50%] sm:w-[70%] w-[100%]'>
                    Manage property boundaries, secure ownership, and protect your investments with smart, transparent tools designed for the modern world.
                </p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-8 gap-10'>
                {services.map((service) => (
                    <div key={service.id} className="rounded-md bg-slate-400 col-span-1 h-[400px]">

                    </div>
                ))}
            </div>
        </div>
    )
}
