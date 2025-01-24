import React from 'react';
import Image from 'next/image'

export default function Blog() {
    return (
        <div>
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
