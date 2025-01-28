import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
    const blogs = [
        {
            id: 1,
            title: "Salesforce to purchase workplace-chat tool Slack for nearly $28 billion",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam, animi consequatur sit voluptate?",
        },
        {
            id: 2,
            title: "Biden's econimic team poised to challenge GOP's renewed debt worries",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam, animi consequatur sit voluptate?",
        },
        {
            id: 3,
            title: "Salesforce to purchase workplace-chat tool Slack for nearly $28 billion",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam, animi consequatur sit voluptate?",
        }
    ]
    return (
        <div>
            {/* Blog Section */}
            <section className="bg-[#fff] h-auto justify-start py-10 flex flex-col items-center relative">
                <div className='mb-0'>
                    <p className='text-[14px] font-serif text-gray-600 italic mb-2'>Articles</p>
                </div>
                
                <h2 className='font-bold text-[20px] mb-1'>Latest <span className='text-orange-500'>Blogs</span></h2>
                <div className='border-2 border-orange-500 w-[6%]'></div>

                <div className="container w-[100%] h-[100%] gap-20 flex lg:flex-row flex-col justify-center xl:p-20 p-5">
                    <div className='xl:w-[30%] w-[0%] h-[100%] px-10 xl:block hidden'>
                        <h1 className='font-serif font-extrabold text-4xl mb-8'>What's New?</h1>
                        <p>where to expert and undiscovered <span className='font-bold'>voices</span> can share their <span className='font-bold'>writing</span> on any topic</p>
                    </div>
                    
                    <div className='xl:w-[70%] w-[100%] h-[100%] flex flex-col md:mt-0 mt-20 '>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='w-[100%] flex flex-row justify-center sm:gap-10 gap-5 items-start mb-5 border-b cursor-pointer hover:scale-105 scale-100 transition-all ease-in duration-100'>
                            <div className='sm:w-[10%] w-[30%] mt-2'>
                                <p className='font-bold lg:text-md text-sm mb-2'>8 min read</p>
                                <p className='text-gray-500 text-xs'>02 Dec 20</p>
                            </div>
                            <div className='sm:w-[70%] mb-10'>
                                <p className='font-medium lg:text-[23px] text:[20px] lg:leading-[40px] leading-[30px] mb-4 font-serif'>{blog.title}</p>
                                <p className='text-gray-600'>{blog.description}</p>
                            </div>
                            <div className='sm:w-[5%] w-[0%] md:flex hidden justify-center mt-4'>
                                <ArrowUpRight className='text-gray-500' />
                            </div>
                        </div>
                    ))}
                    </div>
                    
                </div>
            </section>
        </div>
    )
}
