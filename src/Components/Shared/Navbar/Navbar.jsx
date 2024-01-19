import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Navbar = () => {
    const navItems = 
        <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#f0e0e5d2] underline" : ""
            }>HOME</NavLink>
        </li>
        <li>
        <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-[#f0e0e5d2] underline" : ""
            }>Home</NavLink>
        </li>
        </>
    
    return (<>
    <div className=' fixed  z-10 top-0 left-0 right-0'>
    <Contact></Contact>
        <div className="navbar mx-auto fixed z-10 opacity-50 bg-black text-white font-bold">
       
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
        {navItems}
      </ul>
    </div>
  <div className='md:ms-28 md:my-2'>
  <Link to="/"><img className='w-6 md:w-20' src="https://summercamp.ancorathemes.com/wp-content/uploads/2016/03/footer_logo.png" alt="" /></Link>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  
   <div className='mx-8 md:me-16'>
  
  
 
   </div>
  </div>
</div>
</div>

</>
    );
};

export default Navbar;