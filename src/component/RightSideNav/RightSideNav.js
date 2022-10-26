import React from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({courses}) => {
    return (
        <div className='grid grid-cols-1  mt-20 '>
          {
            courses.map(course => <Link className='m-4' key={course.id}>
                <h2>{course?.name}</h2>
                </Link>)
          }
        </div>
    );
};

export default RightSideNav;