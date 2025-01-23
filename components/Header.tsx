import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdCall } from "react-icons/io";

export default function Header() {
    return (
        <div className='bg-white flex justify-between items-center px-5 py-3 shadow-lg font-sans'>
            {/* Left Section */}
            <div>
                <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </div>

            {/* Middle Section */}
            <div className='flex justify-center items-center gap-8 font-medium text-[15px] font-sans'>
                <Link href="/">Home</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Blog</Link>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center gap-1 font-medium">
                <IoMdCall className='text-2xl text-[#227485]' />
                <p className='text-[17px] font-sans'>+233 54 567 9876</p>
            </div>
        </div>
    )
}
