'use client'

import React, { useState } from 'react'
import '../app/styles.css'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'

export default function Content() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [activeTab, setActiveTab] = useState("mission");
    const [email, setEmail] = useState("")

    // Tab content data
    const tabContent = {
        mission: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere recusandae magni! Fuga aliquam aperiam hic ut recusandae voluptate ex.",
        objective: "Ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas"
    };

    const portfolioItems = [
        { id: 1, category: "Interior", image: "/interior.jpg", alt: "Interior" },
        { id: 2, category: "Property", image: "/property7.jpg", alt: "Property 7" },
        { id: 4, category: "Interior", image: "/interior1.jpg", alt: "Interior 1" },
        { id: 5, category: "Property", image: "/property6.jpg", alt: "Property 6" },
        { id: 6, category: "Lands", image: "/land.jpg", alt: "Land" },
        { id: 7, category: "Lands", image: "/land1.jpg", alt: "Land 1" },
    ];

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribing email:", email)
        setEmail("")
    }

    return (
        <div className='font-sans'>
            {/* Hero Section */}
            <section className="section1 h-[90vh] overflow-hidden flex flex-col gap-3 items-center justify-center ">
                <h1 className='text-white text-6xl font-extrabold text-center'>WE ARE OURPROPS</h1>
                <p className='text-gray-100 w-[40%] text-center mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eveniet possimus at ipsam magni, 
                    veniam dolor odio ipsum autem consequuntur.
                </p>
                <Button variant="default" className='bg-blue-500 px-10 border-blue-500 border-2 hover:border-white hover:bg-blue-500 py-3 rounded-full'>LEARM MORE ABOUT US</Button>
            </section>

            {/* About Us */}
            <section className="section2 bg-[#fff] h-auto flex gap-4 justify-between mb-10 py-10">
                <div className='w-[50%] flex justify-end p-5'>
                    <Image src="/interior2.jpg" alt="Property" className='object-cover rounded-md' layout='intrinsic' height={800} width={500}/>
                </div>
                <div className='w-[50%] flex justify-center items-start py-10 flex-col'>
                    <p className='text-[14px] font-serif mb-3 text-gray-600 italic'>Who We Are</p>
                    <h2 className='font-bold text-[20px] mb-1'>We Are <span className='text-blue-500'>Our Props</span></h2>
                    <div className='border-b-4 border-blue-500 w-[8%] mb-4'></div>
                    <p className='mb-3 w-[75%] text-gray-500 text-[15px] leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, a voluptatibus. 
                        Similique distinctio aspernatur et pariatur aperiam, optio accusantium ratione! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dicta?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas.
                    </p>
                    <p className='pb-0 w-[75%] text-gray-500 text-[15px] leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, a voluptatibus. 
                        Similique distinctio aspernatur et pariatur aperiam, optio accusantium ratione! 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas.
                        Ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas.

                    </p>
                    <div className="text-black py-6">
                        {/* Tabs */}
                        <div className="flex justify-start items-center space-x-6 text-sm font-semibold mb-4 text-gray-600 text-[15px]">
                            <p
                                onClick={() => setActiveTab("mission")}
                                className={`${
                                    activeTab === "mission" ? "text-blue-500 font-medium cursor-pointer" : "font-medium cursor-pointer"
                                } hover:text-grey-500 cursor-pointer text-[17px] font-medium`}
                            >
                                Mission
                            </p>
                            <span>|</span>
                            <p
                                onClick={() => setActiveTab("objective")}
                                className={`${
                                    activeTab === "objective" ? "text-blue-500 font-medium cursor-pointer" : "font-medium cursor-pointer"
                                } hover:text-grey-500 cursor-pointer text-[17px] font-medium`}
                                >
                                Objective
                            </p>
                        </div>

                        {/* Tab Content */}
                        <div className="text-gray-500 text-[15px] text-start mt-4 w-[80%]">
                            {tabContent[activeTab]}
                        </div>
                    </div>
                    <Button variant="default" className='px-10 py-2 bg-blue-500 rounded-full'>LEARN MORE ABOUT US</Button>
                </div>
            </section>



            {/* WHY CHOOSE US */}
            <section className="bg-[#fff] h-auto flex gap-5 justify-center">
                <div className="flex flex-col lg:flex-row w-[100%]">
                    <div className="w-[40%] h-[100%]">
                        <Image 
                            src="/property7.jpg" 
                            alt="Property" 
                            className="w-full h-full object-cover"  
                            height={1000} 
                            width={1000}
                        />
                    </div>

                    <div className="w-[60%] bg-[#222838] text-white py-20 px-16 ">
                        <h2 className="text-2xl font-bold py-2">Why Choose Us</h2>
                        <div className='border-2 border-blue-500 w-[8%] mb-8'></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-sm font-bold text-blue-500 uppercase mb-2">Fabulous View</h3>
                                <p className="text-[15px] text-gray-400 mb-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam.</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-blue-500 uppercase mb-2">Large Playground</h3>
                                <p className="text-[15px] text-gray-400 mb-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam.</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-blue-500 uppercase mb-2">Quiet Neighborhood</h3>
                                <p className="text-[15px] text-gray-400 mb-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam.</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-blue-500 uppercase mb-2">Swimming Pool</h3>
                                <p className="text-[15px] text-gray-400 mb-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



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



            {/* Newsletter Section */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                    backgroundImage:
                        "url(/property3.jpeg)",
                    }}
                >
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">
                        <span className="text-blue-500">OUR </span>
                        <span className="text-white">NEWSLETTER</span>
                    </h2>
                    <p className="text-white text-lg mb-4">KEEP IN TOUCH</p>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        Sign up to our newsletter subscription and be the first to know about Important news & Amazing offers &
                        Discounts
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter Your Email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 pl-10 bg-white text-black rounded-md"
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-500"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            </span>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-md transition-colors"
                        >
                            SUBSCRIBE NOW
                        </Button>
                    </form>
                </div>

                {/* Curved Border */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#3f81f2"
                    />
                    </svg>
                </div>
            </section>
            


            {/* Blog Section */}
            <section className="bg-[#fff] h-[100vh] justify-start py-20 flex flex-col items-center relative">
                <div className='mb-0'>
                    <p className='text-[14px] font-serif text-gray-600 italic mb-2'>Articles</p>
                </div>
                
                <h2 className='font-bold text-[20px] mb-1'>Latest Blogs</h2>
                <div className='border-2 border-blue-500 w-[6%] mb-8'></div>

                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[70%] mx-auto">
                        <div className="bg-white overflow-hidden cursor-pointer">
                            <div className="relative">
                                <Image src="/property2.jpg" alt="Property" className="w-full h-48 object-cover" height={300} width={300}/>
                                <div className="absolute bottom-0 right-0 bg-blue-500 text-white text-center px-4 py-3">
                                    <p className="text-xl font-bold">05</p>
                                    <p className="text-sm uppercase">Aug</p>
                                </div>
                            </div>
                            <div className="py-4">
                                <p className="text-sm text-gray-600 mb-2">By: Anjori Meyami | Comments: 6</p>
                                <h3 className="text-md font-bold mb-2 uppercase">Heading of Blog</h3>
                                <p className="text-sm text-gray-600 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                                <a href="#" className="text-blue-600 font-medium hover:underline">Read More »</a>
                            </div>
                        </div>


                        <div className="bg-white overflow-hidden cursor-pointer">
                            <div className="relative">
                                <Image src="/property.jpg" alt="Property" className="w-full h-48 object-cover" height={300} width={300}/>
                                <div className="absolute bottom-0 right-0 bg-blue-500 text-white text-center px-4 py-3">
                                    <p className="text-xl font-bold">10</p>
                                    <p className="text-sm uppercase">Jan</p>
                                </div>
                            </div>
                            <div className="py-4">
                                <p className="text-sm text-gray-600 mb-2">By: Anjori Meyami | Comments: 6</p>
                                <h3 className="text-md font-bold mb-2 uppercase">Heading of Blog</h3>
                                <p className="text-sm text-gray-600 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                                <a href="#" className="text-blue-600 font-medium hover:underline">Read More »</a>
                            </div>
                        </div>


                        <div className="bg-white overflow-hidden cursor-pointer">
                        <div className="relative">
                            <Image src="/property4.jpeg" alt="Property" className="w-full h-48 object-cover" height={300} width={300}/>
                            <div className="absolute bottom-0 right-0 bg-blue-500 text-white text-center px-4 py-3">
                                    <p className="text-xl font-bold">18</p>
                                    <p className="text-sm uppercase">May</p>
                                </div>
                        </div>
                        <div className="py-4">
                            <p className="text-sm text-gray-600 mb-2">By: Anjori Meyami | Comments: 6</p>
                            <h3 className="text-md font-bold mb-2 uppercase">Heading of Blog</h3>
                            <p className="text-sm text-gray-600 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                            <a href="#" className="text-blue-600 font-medium hover:underline">Read More »</a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
