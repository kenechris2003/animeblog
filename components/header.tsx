export default function Header() {
    return (
        <header className="bg-gray-800 w-5xl lg:w-full">
            <div className="h-50 justify-between px-4 sm:px-4 sm:w-5xl lg:px-6 pt-8 ">
                <nav className="mr-40 flex justify-between items-center w-4xl px-1.5 sm:ml-20 md:px-2 md:ml-20 lg:px-3">
                    <div className="flex items-center ml-40">
                        <img src="/logo.png" alt="logo" className="h-8 w-auto" />
                        <ul className="flex ml-30 space-x-1">
                            <li><a href="/" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">HOME</a></li>
                            <li><a href="/about" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">CATEGORIES</a></li>
                            <li><a href="/contact" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">JOBS</a></li>
                            <li><a href="/" className="px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-700">SHOP</a></li>
                        </ul>
                    </div>

                    <svg className="w-6 h-6 ml-70." fill="currentColor" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd"></path>
                    </svg>
                </nav>
            </div>
        </header>
    );
}