import React from 'react';

const LatestJobCard = ({job}) => {
  return (
    <div className='border p-4 rounded-lg shadow-lg'>
      <div>
        <h1 className='text-xl font-bold'>{job?.company?.name}</h1>
        <p className='text-gray-500'>India</p>
      </div>
      <div className='mt-2'>
        <h1 className='text-lg font-semibold'>{job?.title}</h1>
        <p className='text-gray-600'>
          {job?.description}
        </p>
      </div>
      <div className='mt-3'>
        <span className='bg-blue-100 text-blue-600 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded'>
          Full-Time
        </span>
        <span className='bg-green-100 text-green-600 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded'>
          Remote
        </span>
        <span className='bg-yellow-100 text-yellow-600 text-sm font-semibold px-2.5 py-0.5 rounded'>
          Entry Level
        </span>
      </div>
    </div>
  );
};

export default LatestJobCard;
