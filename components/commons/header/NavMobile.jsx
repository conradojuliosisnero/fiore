
const NavMobile = () => {
    return (
        <nav className="bg-white fixed bottom-0 w-full shadow-lg md:hidden">
            <ul className="flex justify-around items-center py-2">
                <li className="text-gray-700 hover:text-gray-900">
                    <a href="#home" className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9 9v-6a2 2 0 012-2h4a2 2 0 012 2v6m-6 0h6"></path>
                        </svg>
                        Home
                    </a>
                </li>
                <li className="text-gray-700 hover:text-gray-900">
                    <a href="#search" className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Search
                    </a>
                </li>
                <li className="text-gray-700 hover:text-gray-900">
                    <a href="#profile" className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM12 12a3 3 0 100-6 3 3 0 000 6z"></path>
                        </svg>
                        Profile
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavMobile;
