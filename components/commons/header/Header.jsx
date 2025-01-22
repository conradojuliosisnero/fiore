"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <Link href='/' className="text-2xl font-bold text-secondary">Fiore</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 p-1 hover:text-gray-800">
            Inicio
          </Link>
          <Link href="/shoping" className="text-white bg-secondary p-1 rounded-md hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary">
            Tienda
          </Link>
          <Link href="/contact" className="text-gray-600 p-1 hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
