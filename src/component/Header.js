import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="navbar bg-blue-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"> 
            <li>
              <Link className='font-poppins' to='/courses'>Courses</Link>
              </li>
            <li tabIndex={0}>
              <Link to='/faq' className="justify-between">
                FAQ
              </Link>
            </li>
            <li>
              <Link className='font-poppins' to='/blog'>
              Blog
              </Link>
              </li>
          </ul>
        </div>
        <div>
        {/* <a href=""><img className='w-1/12 rounded-l-full rounded-r-full' src="th.jpeg" alt="" /></a> */}
        <a className= " font-poppins btn btn-ghost normal-case text-2xl">Tech Pro</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className='font-poppins' to='/courses'>
            Courses
            </Link>
            </li>
          <li tabIndex={0}>
            <Link className='font-poppins' to='/faq'>
              FAQ
            </Link>
            
          </li>
          <li>
            <Link className='font-poppins' to='/blog'>
            Blog
            </Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <Link to='/login' className='text-sm font-poppins btn bg-zinc-900	 mr-2'>
          Login
        </Link>
        <Link to='/register' className='font-poppins btn bg-zinc-900	mr-2'>
          Register
        </Link>
      </div>
    </div>
    );
};

export default Header;