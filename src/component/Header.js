import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Header = () => {
  const {user , logOut} = useContext(AuthContext);
  console.log(user);

   const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
   }

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
					<img style={{width : '9%'}} src="https://tse3.mm.bing.net/th?id=OIP.dRB6vilESTbaDvlkgti-JAHaGy&pid=Api&P=0" alt="" />
        
					
        <Link to='/' className= " font-poppins btn btn-ghost normal-case text-2xl">Tech Pro</Link>
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
      <label htmlFor="check" className='bg-gray-100 ml-2 cursor-pointer relative w-14 h-6 rounded-full'>
      <input type="checkbox" id='check' className="sr-only peer" />
      <span className='w-2/5 h-4/5 bg-gray-400 absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-5 '></span>
      </label>
      <div className="navbar-end ">
        {
          user && user?.uid ? (
            <>
            <img
             src={user?.photoURL}
             alt=""
             style={{height : "30px", marginRight: "10px" }}
             title={user?.displayName}
            />
            <Link className='btn bg-zinc-900 mr-2' onClick={handleLogOut}>
             Log Out
            </Link>
            </>
          )
          :
          (
         <>       
        <Link to='/login' className='text-sm font-poppins btn bg-zinc-900	 mr-2'>
          Login
        </Link>
        <Link to='/register' className='font-poppins btn bg-zinc-900	mr-2'>
          Register
        </Link>
          </>  
          )
}
      </div>
    </div>
    );
};

export default Header;