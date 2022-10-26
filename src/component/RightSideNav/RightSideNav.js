import React from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({courses}) => {
    return (
        <div className='grid grid-cols-1  mt-20 '>
          {
            courses.map(course => <Link to='/rightsite' className='m-4 rounded-md hover:bg-gray-400 text-xl font-semibold font-poppins py-2' 
             key={course.id}>
                {course?.name}
                :
          <p>{}</p>
                </Link>)
          }
          
        </div>
    );
};

export default RightSideNav;