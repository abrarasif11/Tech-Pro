import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
  
  const [error, setError] = useState(null);

  const { createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const htmlForm = event.target;
    const userName = htmlForm.name.value;
    const photoURL = htmlForm.photoURL.value;
    const email = htmlForm.email.value;
    const password = htmlForm.password.value;
    
    console.log( email, password);

    createUser(email, password)
    .then((result) =>{
      const user = result.user;
      updateUserProfile(userName, photoURL)
      console.log(user);
      toast.success('User Created Successfully')
      // verifyEmail();
      htmlForm.reset();
      setError('');
    })
    .catch((error) =>{
      console.error(error);
    });
  }
    return (
      <section className="p-6 font-poppins dark:text-gray-100">
      <form onSubmit={handleSubmit}  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
        <h2 className="w-full text-3xl font-bold leading-tight">Register Here...</h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">Name</label>
          <input id="name" name='name' type="text" placeholder="enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
          <label htmlFor="name"  className="block mb-1 ml-1">Photo URL</label>
          <input id="photoURL" name='photoURL' type="text" placeholder="enter photo url" required="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">Email</label>
          <input id="email" name='email' type="email" placeholder="enter your email"  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"  />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">Password</label>
          <input id="password" name='password' type="password" placeholder="enter your password" className="mb-5 w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"></input>
        </div>
        <label htmlFor="password" className="text-sm"></label>
              <Link rel="noopener noreferrer" to="/login" className="text-x hover:underline dark:text-gray-400">Already have an account Login?</Link>
        <div>
          <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400  bg-black hover:bg-zinc-800 text-gray-200">Register</button>
        </div>
      </form>
    </section>
    );
};

export default Register;