import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlMagnifier } from "react-icons/sl";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const MainNav = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="bg-white shadow-sm sticky top-0 z-50">
            <div className="flex items-center justify-between w-full px-4 lg:w-10/12 mx-auto py-4">
                {/* Logo */}
                <div className="flex-1 lg:flex-none">
                    <Link to="/" className="text-4xl font-extrabold hover:text-[#f55839] transition-colors">
                        PROWESS <span className='text-[#f55839]'>++</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <nav className="flex items-center gap-8 text-lg font-semibold">
                        <Link to="/" className='hover:text-[#f55839] transition-colors'>HOME</Link>
                        <Link to="/pages" className='hover:text-[#f55839] transition-colors'>PAGES</Link>
                        <Link to="/portfolio" className='hover:text-[#f55839] transition-colors'>PORTFOLIO</Link>
                        <Link to="/blog" className='hover:text-[#f55839] transition-colors'>BLOG</Link>
                        <Link to="/events" className='hover:text-[#f55839] transition-colors'>EVENT</Link>
                        <Link to="/shop" className='hover:text-[#f55839] transition-colors'>SHOP</Link>
                        <Link to="/elements" className='hover:text-[#f55839] transition-colors'>ELEMENTS</Link>
                    </nav>
                </div>

                {/* Icons Group */}
                <div className="flex items-center gap-6 lg:gap-8 flex-1 lg:flex-none justify-end">
                    <Link to="/search" className="hover:text-[#f55839] transition-colors">
                        <SlMagnifier className='size-6' />
                    </Link>
                    <Link to="/cart" className="hover:text-[#f55839] transition-colors relative">
                        <MdShoppingCart className='size-6' />
                        <span className="absolute -top-2 -right-2 bg-[#f55839] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            0
                        </span>
                    </Link>
                    <button 
                        onClick={toggleDrawer}
                        className="lg:hidden focus:outline-none"
                        aria-label="Open menu"
                    >
                        <IoMenu className="bg-black text-white rounded-3xl size-8 p-1 hover:bg-[#f55839] transition-colors" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`absolute top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <button 
                            onClick={toggleDrawer}
                            className="focus:outline-none"
                            aria-label="Close menu"
                        >
                            <IoClose className="size-6 hover:text-[#f55839]" />
                        </button>
                    </div>
                    <nav className="p-4 flex flex-col gap-4">
                        <Link 
                            to="/" 
                            className='hover:text-[#f55839] transition-colors py-2'
                            onClick={toggleDrawer}
                        >
                            HOME
                        </Link>
                        <Link 
                            to="/pages" 
                            className='hover:text-[#f55839] transition-colors py-2'
                            onClick={toggleDrawer}
                        >
                            PAGES
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className='hover:text-[#f55839] transition-colors py-2'
                            onClick={toggleDrawer}
                        >
                            PORTFOLIO
                        </Link>
                        <Link 
                            to="/blog" 
                            className='hover:text-[#f55839] transition-colors py-2'
                            onClick={toggleDrawer}
                        >
                            BLOG
                        </Link>
                        <Link 
                            to="/events" 
                            className='hover:text-[#f55839] transition-colors py-2'
                            onClick={toggleDrawer}
                        >
                            EVENT
                        </Link>
                        <Link 
                            to="/shop" 
                            className='hover:text-[#f55839] transition-colors py-2'
                            onClick={toggleDrawer}
                        >
                            SHOP
                        </Link>
                        <Link 
                            to="/elements" 
                            className='hover:text-[#f55839] transition-colors py-2'
                            onClick={toggleDrawer}
                        >
                            ELEMENTS
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MainNav;