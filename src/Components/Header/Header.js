import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <header className='flex justify-center md:justify-between items-center sticky md:px-20 md:py-5  bg-teal-500 py-5 px-5 '>
            <div className='hidden md:block md:text-3xl text-white font-bold '>
                <Link to='./' >Car Marts</Link>
            </div>
            <nav className='flex md:gap-4 md:text-xl gap-2'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/review'>Review</CustomLink>
                <CustomLink to='/dashboard'>DashBoard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </header>
    );
};

export default Header;