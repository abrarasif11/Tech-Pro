import React from 'react';

const Login = () => {
    return (
        <section class="max-w-4xl mt-32 p-6 mx-auto bg-indigo-500 rounded-md shadow-md dark:bg-gray-800">
    <h2 class="text-3xl font-semibold text-black capitalize dark:text-white">Please Login Here</h2>

    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 ">
            

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress"></label>
                <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder='Email Address' required/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="password"></label>
                <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder='Password' required/>
            </div>
        </div>
        <div class="flex justify-center mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-sky-700 rounded-md  hover:bg-sky-500 focus:outline-none focus:bg-sky-600">Log in</button>
        </div>
    </form>
</section>
    );
};

export default Login;