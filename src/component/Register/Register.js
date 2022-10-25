import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <section className="p-6 font-poppins dark:text-gray-100">
      <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
        <h2 className="w-full text-3xl font-bold leading-tight">Register Here...</h2>
        <div>
          <label for="name" className="block mb-1 ml-1">Name</label>
          <input id="name" type="text" placeholder="enter your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-gray-800 dark:bg-gray-800" />
          <label for="name" className="block mb-1 ml-1">Photo URL</label>
          <input id="name" type="text" placeholder="enter photo url" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-gray-800 dark:bg-gray-800" />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">Email</label>
          <input id="email" type="email" placeholder="enter your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-gray-800" />
        </div>
        <div>
          <label for="message" className="block mb-1 ml-1">Password</label>
          <input id="password" type="password" placeholder="enter your password" className="block w-full p-2 rounded autoexpand focus:ring-gray-800"></input>
        </div>
        <div>
          <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400  bg-black text-gray-200">Register</button>
        </div>
      </form>
    </section>
    );
};

export default Register;