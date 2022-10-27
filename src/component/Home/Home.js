import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold font-poppins leading-none sm:text-5xl">
          Welcome to <span className='text-sky-500'>Tech Pro</span></h1>
        <p className="px-8 mt-8 mb-12 text-lg font-poppins font-poppins">This is one of the Biggest <span className='text-2xl font-poppins'>Learning Online Platform</span></p>
        <div className="flex flex-wrap justify-center">
          <Link to='/courses'>
          <button className="px-8 py-3 m-2 font-poppins text-lg font-semibold rounded bg-sky-400 dark:text-gray-900">See Courses</button></Link>
          <Link to='/faq'>
          <button className="px-8 font-poppins py-3 m-2 text-lg border rounded dark:text-gray-50 border-sky-400">Learn more</button></Link>
        </div>
      </div>
    </section>
    );
};

export default Home;