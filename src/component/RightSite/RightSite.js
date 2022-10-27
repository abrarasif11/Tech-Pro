import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightSite = () => {
    const coursedetails = useLoaderData();
    console.log(coursedetails);
    return (
        <div className="max-w-xs mx-auto rounded-md mt-10 mb-10 shadow-md font-poppins bg-gray-100 dark:text-gray-100">
        <img src={coursedetails.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{coursedetails.name}</h2>
                <p className="dark:text-gray-100">{coursedetails.duration}</p>
            </div>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-gray-900">Get Premium</button>
        </div>
    </div>
    );
};

export default RightSite;