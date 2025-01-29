import React from 'react';
import Image from 'next/image'

export default function WhyChooseUs() {
    return (
        <div>
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
        </div>
    )
}
