import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../customTailCss/navbar.css'; 

const Navbar: React.FC<{ setSelectedItem: (item: string) => void }> = ({ setSelectedItem }) => {
    const [activeItem, setActiveItem] = useState('home');
    const [isOpen, setIsOpen] = useState(false); 

    const handleItemClick = (item: string) => {
        setActiveItem(item);
        setSelectedItem(item);
        setIsOpen(false); // Close menu upon item click in mobile view
    };

    return (
        <nav className="bg-gray-800 flex">
            <div className="grid grid-cols-3 gap-2 w-full">
                <div className="ml-3">
                    <Link href="https://honkaiimpact3.hoyoverse.com/global/en-us/fab">
                        <div className="navbar-logo">  
                            <Image
                                className="h-16 w-16"
                                src="/images/icons/honkaiICON.png"
                                alt="Logo"
                                width={256}
                                height={256}
                            />
                        </div>
                    </Link>
                </div>
                <ul className={`md:flex md:justify-center mt-4 mb-1 ${isOpen ? 'block' : 'hidden'}`}>
                    <li className={`${activeItem === "home" ? ' text-purple-600' : 'text-slate-800'} bg-yellow-500 hover:bg-yellow-400 font-Pixelify_Sans py-2 px-4 border-b-4 hover:text-purple-400 border-yellow-700 hover:border-yellow-500 rounded navbar-link mx-3 mb-1`}
                        onClick={() => handleItemClick("home")}>
                            Home
                    </li>
                    <li className={`${activeItem === "valkyries" ? ' text-purple-600' : 'text-slate-800'} bg-yellow-500 hover:bg-yellow-400 font-Pixelify_Sans py-2 px-4 border-b-4  hover:text-purple-400 border-yellow-700 hover:border-yellow-500 rounded navbar-link mx-3 mb-1`}
                        onClick={() => handleItemClick("valkyries")}>
                            Valkyries
                    </li>
                    <li className={`${activeItem === "signup" ? ' text-purple-600' : 'text-slate-800'} bg-yellow-500 hover:bg-yellow-400 font-Pixelify_Sans py-2 px-4 border-b-4  hover:text-purple-400 border-yellow-700 hover:border-yellow-500 rounded navbar-link mx-3 mb-1`}
                        onClick={() => handleItemClick("signup")}>
                            Sign Up
                    </li>
                    <li className={`${activeItem === "login" ? ' text-purple-600' : 'text-slate-800'} bg-yellow-500 hover:bg-yellow-400 font-Pixelify_Sans py-2 px-4 border-b-4  hover:text-purple-400 border-yellow-700 hover:border-yellow-500 rounded navbar-link mx-3 mb-1`}
                        onClick={() => handleItemClick("login")}>
                            login
                    </li>
                    
                </ul>
                <div className={`md:flex md:justify-center ${isOpen ? 'hidden' : 'block'}`}></div>
                <div className="flex  justify-end m-3">
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden group h-10 w-10 rounded-lg border-2 border-yellow-500">
                    <div className="grid justify-items-center gap-1.5 ">
                        <span className="h-1 w-8 rounded-full bg-yellow-500 transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
                        <span className="h-1 w-8 rounded-full bg-yellow-500 group-hover:scale-x-0 transition"></span>
                        <span className="h-1 w-8 rounded-full bg-yellow-500 group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
                    </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
