'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState("mission");

    // Tab content data
    const tabContent = {
        mission: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere recusandae magni! Fuga aliquam aperiam hic ut recusandae voluptate ex.",
        objective: "Ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas."
    };

    return (
        <div>
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
                            {tabContent[activeTab as keyof typeof tabContent]}
                        </div>
                    </div>
                    <Button variant="default" className='px-10 py-2 bg-blue-500 rounded-full'>LEARN MORE ABOUT US</Button>
                </div>
            </section>
        </div>
    )
}
