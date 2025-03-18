import Link from "next/link";

export default function Footer(){
    return( <footer className="bg-gray-800 w-5xl h-fit lg:w-full">
        <div >
            
       
        <div className="flex px-5 pt-10 pb-10 pr-40 justify-between items-center ml-20">
                        <ul className="hidden md:flex ml-20">
                            <li><Link href="/about" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">ABOUT US</Link></li>
                            <li><Link href="/contact" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">CONTACT US</Link></li>
                        </ul>
                        <p>© Copyright 2025 </p>
        </div>

        </div>

    </footer>
    );
}