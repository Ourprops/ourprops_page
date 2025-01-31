import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

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
        <section className="h-auto py-10 flex flex-col relative lg:px-28 sm:px-10 px-5">
            <div className="relative">
                <p className='text-muted-foreground text-xs uppercase mt-2'>Blog</p>
                <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
            </div>
            <div className="w-full gap-20 flex lg:flex-row flex-col justify-center mt-10">
                <div className='flex flex-col'>
                    <div>
                        <h1 className='md:text-5xl text-4xl font-bold text-black mt-8 md:w-[90%] w-[100%]'>
                            Insights and Updates
                        </h1>
                        <p className='text-muted-foreground mt-8 text-sm sm:w-[70%] w-[100%]'>
                            Stay informed with our latest stories, tips, and news about innovation, property management, and what{`’`}s happening at OurProps.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <Button className='bg-appColor-orange-default hover:bg-appColor-orange-dark mt-5 xl:mt-0'>
                            Explore
                        </Button>
                    </div>
                </div>
                <div className='xl:w-[70%] w-[100%] h-[100%] flex flex-col mt-0 xl:mt-10 '>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='w-[100%] flex flex-row justify-center sm:gap-10 gap-5 items-start mb-5 border-b scale-100 transition-all ease-in duration-100'>
                            <div className='sm:w-[10%] w-[30%] mt-2'>
                                <p className='font-bold lg:text-md text-sm mb-2'>8 min read</p>
                                <p className='text-muted-foreground text-xs'>02 Dec 20</p>
                            </div>
                            <div className='sm:w-[70%] mb-10'>
                                <Link href="#" className='font-medium lg:text-[23px] text:[20px] lg:leading-[40px] leading-[30px] mb-4 font-serif hover:underline'>{blog.title}</Link>
                                <p className='text-gray-600'>{blog.description}</p>
                            </div>
                            <Link href="#" className='sm:w-[5%] w-[0%] md:flex hidden justify-center mt-4'>
                                <ArrowUpRight />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
