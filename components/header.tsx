'use client';
 

import Link from 'next/link'
 
export default function Page() {

    return (
        <header className="bg-gray-800 w-5xl lg:w-full">
            <div className="h-50 justify-between items-center px-4 sm:px-4 sm:w-5xl lg:px-6 pt-8">
                <nav className="mr-40 flex justify-between items-center w-4xl px-1.5 ml-40 sm:ml-20 md:px-2 md:ml-20 lg:px-3 lg:ml-20">
                    <div className="flex items-center ml-20">
                        <Link href={"/"}> <img src="/logo.png" alt="logo" className="h-16 w-80 lg:h-8 lg:w-auto" /> </Link>
                        <ul className="hidden md:flex ml-20">
                            <li><Link href="/" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">HOME</Link></li>
                            <li><Link href="/about" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">CATEGORIES</Link></li>
                            <li><Link href="/about" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">JOBS</Link></li>
                            <li><Link href="/about" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">SHOP</Link></li>
                        </ul>
                    </div>

                    <svg className="w-6 h-6 ml-70 hidden md:flex" fill="currentColor" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd"></path>
                    </svg>
                </nav>
            </div>
        </header>
    );
}