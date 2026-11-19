'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(true);

    // Hide the header completely on the home page ('/')
    if (pathname === '/') {
        return null;
    }

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            { }
            <div
                className={`pointer-events-auto bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-300 overflow-hidden flex items-center ${isExpanded ? 'w-full max-w-2xl px-4 py-2 rounded-2xl' : 'justify-center cursor-pointer'
                    }`}
                onClick={() => {
                    if (!isExpanded) setIsExpanded(true);
                }}
            >
                { }
                {!isExpanded ? (
                    <div className="flex items-center justify-center w-full h-full text-zinc-700 hover:text-zinc-900 dark:text-zinc-200  dark:hover:text-white font-bold text-sm sm:text-xl select-none">
                        <Image src={"/BergenFontSign.svg"} width={100} height={70} alt='Logo' />
                    </div>
                ) : (
                    <div className="flex items-center justify-between w-full animate-fadeIn">
                        {/* Navigation Links */}
                        <nav className="flex items-center space-x-6 text-xs sm:text-xl text-nowrap font-bold text-zinc-700 dark:text-zinc-200 ">
                            <Link href="/" className='hover:text-[#00a95c]  dark:hover:text-[#ff48b0]'>
                                Hjem
                            </Link>
                            <Link href="/kart" className='hover:text-[#00a95c]  dark:hover:text-[#ff48b0]'>
                                Kart
                            </Link>
                            <Link href="/plakatvegg" className='hover:text-[#00a95c]  dark:hover:text-[#ff48b0]'>
                                Plakatvegg
                            </Link>
                            <Link href="/om" className='hover:text-[#00a95c]  dark:hover:text-[#ff48b0]'>
                                Om oss
                            </Link>
                            <Link href="/kontakt" className='hover:text-[#00a95c]  dark:hover:text-[#ff48b0]'>
                                Kontakt
                            </Link>
                        </nav>

                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(false);
                            }}
                            className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800  text-zinc-700 hover:text-[#00a95c]  dark:hover:text-[#ff48b0] dark:text-zinc-200 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}