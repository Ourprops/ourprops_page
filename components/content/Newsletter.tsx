'use client'
import React,{useState} from 'react';
import { Button } from "@/components/ui/button";

export default function Newsletter() {
    const [email, setEmail] = useState("")


    const handleSubmit = (e:any) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribing email:", email)
        setEmail("")
    }
    return (
        <div>
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
        </div>
    )
}
