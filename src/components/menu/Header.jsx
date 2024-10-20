import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

export const Header = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },
        { name: "Services", link: "/" },
    ];
    
    let [open, setOpen] = useState(true);

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
               
                {/* Logo */}
                <div className="flex items-center text-2xl font-bold cursor-pointer gap-1">
                    <BookOpenIcon className="h-7 w-7 text-blue-600" />
                    <span className="font-bold">React Navbar Tailwind</span>
                </div>

                {/* Icono del menú hamburguesa */}
                <div 
                    onClick={() => setOpen(!open)} 
                    className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                {/* Links del menú */}
                <ul 
                    className={`md:flex pl-9 md:pb-0 md:items-center pb-12 absolute md:z-auto z-[-1] left-0 w-full transition-all bg-white duration-500 ease-in 
                    ${open ? 'top-12' : '-top-[490px]'}`}
                >
                    {Links.map((link, index) => (
                        <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                            <a href={link.link} className="text-gray-800 hover:text-blue-400 duration-500">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded">
                        Get Started
                    </button>
                </ul>
            </div>
        </div>
    );
};