import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { motion, stagger } from "motion/react";

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
    <div className='w-[100%] xl:h-[100vh] h-auto p-10 bg-[#f9f9f9]'>
        <div className='flex flex-col justify-center items-center py-5'>
            <p className='text-[14px] font-serif mb-3 text-gray-600 italic'>Services</p>
            <h2 className='font-bold text-[20px] mb-1'>What We <span className='text-orange-500'>Do</span></h2>
            <div className='border-b-4 border-orange-500 w-[50px] mb-4'></div>
        </div>
        
        
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-3 gap-10'>
                {services.map((service) => (
                    <div  key={service.id} className='flex flex-col justify-center items-center lg:px-20 px-10 py-8 shadow-md rounded-lg bg-white'>
                        <Image src={service.img} alt='House Logo' height={500} width={500} />
                        <h2 className='font-semibold text-xl mb-3 mt-3 text-center'>{service.title}</h2>
                        <p className='text-center mb-8'>{service.description}</p>
                        <Button className="bg-blue-500 text-white px-6 py-4 shadow-md hover:bg-blue-600 transition">Learn More</Button>
                    </div>
                ))}
            </div>
        
        
    </div>
    )
}
