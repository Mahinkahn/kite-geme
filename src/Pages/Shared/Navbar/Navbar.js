import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className='hover:text-[#00d084]'><Link to="/">Home</Link></li>
        <li className='hover:text-[#00d084]'><Link to="/app">New App</Link></li>
        <li className='hover:text-[#00d084]'><Link to="/featured">Featured</Link></li>
        <li className='hover:text-[#00d084]'><Link to="/apps">Apps</Link></li>
        <li className='hover:text-[#00d084]'><Link to="/about">About</Link></li>
        <li className='hover:text-[#00d084]'><Link to="/team">Team</Link></li>
        <li className='hover:text-[#00d084]'><Link to="/career">Career</Link></li>
        <li className='hover:text-[#00d084]'><Link to="/contact">Contact</Link></li>
    </React.Fragment>

    return (
        <div className=' navbar bg-gray-400 flex justify-between'>
            <div className="  w-[1140px] mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img src="http://www.kitegamesstudio.com/wp-content/themes/kitegames/img/logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white ">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;