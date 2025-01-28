import React from 'react';
import { Button } from "@/components/ui/button";

export default function AboutUs() {
    return (
        <div>
            {/* About Us */}
            <section className="section2 bg-[#fff] w-[100%] xl:h-[100vh] h-auto flex flex-col lg:flex-row xl:items-start justify-evenly md:py-10 py-0">
                <div className='xl:w-[50%] w-[100%] flex justify-start items-start p-10 md:p-20 flex-col'>
                    <p className='text-[14px] font-serif mb-3 text-gray-600 italic'>About Us</p>
                    <h2 className='font-bold text-[20px] mb-1'>We Are <span className='text-orange-500'>Our Props</span></h2>
                    <div className='border-b-4 border-orange-500 w-[8%] mb-4'></div>
                    <p className='mb-5 w-[100%] text-gray-500 text-[15px] leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, a voluptatibus. 
                        Similique distinctio aspernatur et pariatur aperiam, optio accusantium ratione! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dicta?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas.
                        Similique distinctio aspernatur et pariatur aperiam, optio accusantium ratione! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dicta?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas.
                    </p>
                    <Button className="bg-blue-500 text-white px-6 py-4 shadow-md hover:bg-blue-600 transition">Learn More</Button>
                </div>
                <div className='xl:w-[50%] w-[100%] h-[100%] flex justify-start xl:p-16 p-10'>
                    <img src="/property.jpg" alt="Property" className='object-cover rounded-lg h-[400px] w-[100%]' />
                </div>
            </section>
        </div>
    )
}
