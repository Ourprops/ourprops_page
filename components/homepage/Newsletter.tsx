'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '../ui/input';
import { Mail } from 'lucide-react';
import { Textarea } from '../ui/textarea';

export default function Newsletter() {
    const [email, setEmail] = useState("")

    return (
        <section className="relative h-auto overflow-hidden bg-slate-100 flex flex-col md:flex-row">
            <div className="py-20 sm:py-10 md:py-20 lg:px-28 sm:px-10 px-5 flex flex-col basis-1/2">
                <div className="relative">
                    <p className='text-muted-foreground text-xs uppercase'>Subscribe</p>
                    <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default -mt-2'></span>
                </div>
                <h1 className='md:text-5xl text-4xl font-bold text-black md:mt-16 mt-8 md:w-[90%] w-[100%]'>
                    Be the First to Know
                </h1>
                <p className='text-muted-foreground md:mt-16 mt-8 text-sm'>
                    Sign up for our newsletter and get exclusive access to product updates, tips, and real estate news delivered straight to you.
                </p>
            </div>
            <div className="flex-1 bg-neutral-900 w-full py-10 md:py-20 lg:px-28 sm:px-10 px-5">
                <div className='flex flex-col justify-center items-center'>
                    <span className='p-3 bg-white rounded-full'>
                        <Mail size={32} color='black' />
                    </span>
                    <h2 className='text-white text-2xl mt-5 font-semibold'>Subscribe to our Newsletter</h2>
                    <div className="relative w-full">
                        <Input
                            type='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-5 py-5 text-white w-full'
                        />
                    </div>
                    <Textarea
                        placeholder="Got something to share? We'd love to hear it!"
                        value=''
                        onChange={() => { }}
                        className='mt-5 py-5 text-white w-full'
                    />   
                    <Button
                        className='mt-5 py-5 w-full bg-appColor-orange-default hover:bg-appColor-orange-dark'
                    >
                        Subscribe
                    </Button> 
                </div>
            </div>
        </section>
    )
}
