import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg">
 <div className="text-center lg:text-left">
   <h1 className="text-5xl font-bold">Please Register Here!</h1>
   
 </div>
 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   <form  className="card-body">
     <div className="form-control">
       <label className="label">
         <span className="label-text">User Name</span>
       </label>
       <input type="text" name='name' placeholder="user name" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered" required />
       <label className="label">
       <Link to={'/login'} className="btn btn-active btn-link">Already have an account?</Link>
       </label>
     </div>
     <div className="form-control mt-6">
       <button  className="btn bg-sky-700 border-none hover:bg-sky-500">Register</button>
     </div>
   </form>
 </div>
</div>
</div> 
     </div>
    );
};

export default Register;