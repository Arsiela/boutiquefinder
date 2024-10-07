import React, { useState, useRef, useEffect } from 'react';
import Login from './Login'; // Import your Login component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loginType, setLoginType] = useState(null); // State for login type

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLoginClick = (type) => {
        setLoginType(type);
    };

    return (
        <>
        <nav className='navbar text-white flex items-center justify-between p-4 shadow-lg sticky top-0 z-50'>
            <h1 className='text-2xl font-bold px-5'>DRESS ME APP</h1>
            <input
                type='text'
                placeholder='Search products...'
                className='p-1 mr-auto rounded text-black focus:outline-none focus:ring-2 focus:ring-transparent'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='flex items-center space-x-4'>
                <ul className='flex items-center space-x-8 text-l'>
                    <li className='hover:text-gray-400 transition duration-200'>Products</li>
                    <li className='relative' ref={dropdownRef}>
                        <button className='focus:outline-none hover:text-gray-400' onClick={toggleDropdown}>
                            Login
                        </button>
                        {isOpen && (
                            <div className='absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg'>
                                <ul className='py-2'>
                                    <li className='px-4 py-2 hover:bg-gray-200 transition duration-200' onClick={() => handleLoginClick('Owner')}>Login as Owner</li>
                                    <li className='px-4 py-2 hover:bg-gray-200 transition duration-200' onClick={() => handleLoginClick('Admin')}>Login as Admin</li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
         {loginType && <Login userType={loginType} />} {/* Render Login component based on type */}
        </>
    );
};

export default Navbar;
