import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between bg-black py-2 px-4 sm:px-6 h-[70px]">

                <img className="w-[50px] h-[50px]" src={logo} alt="Logo" />
                
                <ul className="text-l hidden md:flex text-white gap-x-6 lg:gap-x-10">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/products"><li>Products</li></NavLink>
                    <NavLink to="/cart"><li>🛒Cart</li></NavLink>
                </ul>


                <div className="hidden md:flex">
                    <button className="bg-white p-2 text-sm mr-2 rounded-lg cursor-pointer text-black hover:bg-green-400 hover:text-white">
                        LogIn
                    </button>
                    <button className="bg-white p-2 text-sm rounded-lg cursor-pointer text-black hover:bg-green-400 hover:text-white">
                        Sign Up
                    </button>
                </div>

                <div className="flex md:hidden">
                    <button 
                        className="text-white text-2xl focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black text-white absolute top-[70px] left-0 right-0 z-50 shadow-lg">
                    <ul className="flex flex-col p-4">
                        <NavLink 
                            to="/" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <li className="py-3 px-4 hover:bg-gray-800 rounded-lg">Home</li>
                        </NavLink>
                        <NavLink 
                            to="/products" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <li className="py-3 px-4 hover:bg-gray-800 rounded-lg">Products</li>
                        </NavLink>
                        <NavLink 
                            to="/cart" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <li className="py-3 px-4 hover:bg-gray-800 rounded-lg">🛒 Cart</li>
                        </NavLink>
                    </ul>
                    
                    <div className="flex flex-col p-4 border-t border-gray-700 gap-2">
                        <button 
                            className="bg-white p-2 rounded-lg cursor-pointer text-black hover:bg-green-400 hover:text-white text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            LogIn
                        </button>
                        <button 
                            className="bg-white p-2 rounded-lg cursor-pointer text-black hover:bg-green-400 hover:text-white text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}