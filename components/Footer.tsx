import React from 'react'
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Link from 'next/link';
import CountdownTimer from './content/CountdownTimer';


export default function Footer() {
    
    return (
        <div className='font-sans'>
            <section className="relative h-[60vh]">
                <Image
                    src="/property_dark.jpg"
                    alt="Real Estate Meeting"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2836]/80 to-[#1a2836]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-4xl font-bold text-white mb-6">WE ARE COMING SOON</h1>
                    <CountdownTimer />
                    <p className="text-gray-300 max-w-2xl mb-8 text-[15px] mt-5">
                        Subscribe to get notified when we launch
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1a2836] text-gray-400 py-16">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[80%] mx-auto">
                        {/* Brand */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-5">Our Props</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus laboriosam corrupti 
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 mt-1 text-gray-400" />
                            <p>
                                House No.08, Road No.08,
                                <br />
                                Din Bari, Dhaka,Bangladesh
                            </p>
                            </div>
                            <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 mt-1 text-gray-400" />
                            <div className="space-y-1">
                                <p>Username@gmail.com</p>
                                <p>Damo@gmail.com</p>
                            </div>
                            </div>
                            <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 mt-1 text-gray-400" />
                            <div className="space-y-1">
                                <p>(+660 256 24857)</p>
                                <p>(+660 256 24857)</p>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        </div>

                        {/* Stay in touch */}
                        <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Stay in touch</h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="w-full bg-[#2a3947] border-none rounded-md py-3 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                <Send className="w-5 h-5 text-blue-500" />
                            </button>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-white mb-4">Folllow</h4>
                            <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.141 16.596H7.883V9.98h1.976v6.616zm-.988-7.512a1.147 1.147 0 11-.001-2.294 1.147 1.147 0 01.001 2.294zm9.116 7.512h-1.975v-3.213c0-.737-.014-1.685-1.026-1.685-1.028 0-1.186.802-1.186 1.632v3.266h-1.974V9.98h1.894v.869h.027c.264-.5.91-1.027 1.872-1.027 2.003 0 2.371 1.318 2.371 3.03v3.744z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t w-[100%] text-center border-gray-800">
                        <p>© OurProps 2025. ALL Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
