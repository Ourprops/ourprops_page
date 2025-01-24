'use client'
import React, {useState} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image'

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("all");

    const portfolioItems = [
        { id: 1, category: "Interior", image: "/interior.jpg", alt: "Interior" },
        { id: 2, category: "Property", image: "/property7.jpg", alt: "Property 7" },
        { id: 4, category: "Interior", image: "/interior1.jpg", alt: "Interior 1" },
        { id: 5, category: "Property", image: "/property6.jpg", alt: "Property 6" },
        { id: 6, category: "Lands", image: "/land.jpg", alt: "Land" },
        { id: 7, category: "Lands", image: "/land1.jpg", alt: "Land 1" },
    ];

    const handleFilterChange = (filter: any) => {
        setActiveFilter(filter);
    };

    return (
        <div>
            {/* Portfolio Section */}
            <section className="bg-[#fff] h-auto justify-center py-20 flex flex-col items-center mb-40">
                <div className='mb-0'>
                    <p className='text-[14px] font-serif text-gray-600 italic mb-2'>Latest Works</p>
                </div>
                
                <h2 className='font-bold text-[20px] mb-1'>Our Portfolio</h2>
                <div className='border-2 border-blue-500 w-[6%] mb-8'></div>

                <div className="portfolio flex justify-center items-center flex-col w-[70%]">
                    {/* Tabs */}
                    <ul className="portfolio-tabs flex space-x-3">
                        {["all", "Interior", "Property", "Lands"].map((filter) => (
                        <li
                            key={filter}
                            className={`cursor-pointer px-4 py-1 ${
                            activeFilter === filter ? " text-white rounded-full bg-blue-500 border-2 border-blue-500 px-8" : "text-black border-2 border-blue-500 px-8 rounded-full"
                            }`}
                            onClick={() => handleFilterChange(filter)}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </li>
                        ))}
                    </ul>

                    {/* Portfolio Items */}
                    <div className="portfolio-items grid grid-cols-3 gap-1 mt-4 mb-10">
                        <AnimatePresence>
                            {portfolioItems
                            .filter(
                                (item) => activeFilter === "all" || item.category === activeFilter
                            )
                            .map((item) => (
                                <motion.div 
                                    key={item.id} 
                                    className="item border p-0"
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-auto rounded shadow"
                                        layout="responsive"
                                        objectFit='cover'
                                        height={200}
                                        width={200}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    )
}
