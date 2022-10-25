import React from 'react';

const Course = ({course}) => {
    return (
        <div>
            <div className="font-poppins text-lg mb-10 max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={course.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{course.name}</h2>
			<p>Course Duration : {course.duration}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black hover:bg-slate-800	 text-white">Course Details</button>
	</div>
</div>
        </div>
    );
};

export default Course;