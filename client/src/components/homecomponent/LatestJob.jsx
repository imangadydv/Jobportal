import React from 'react'
import LatestJobCard from './LatestJobCard';

const LatestJob = () => {

 const randomJobs = [1,2,3,4,5,6,7,8];


  return (
    <div>
        <h1 className='text-4xl font-bold'><span className='text-blue-600'>Latest & Top</span> Job Openings</h1>
       <div className='grid grid-cols-3 gap-4 my-5'>
       {
            randomJobs.slice(0,6).map((item,index)=><LatestJobCard key={item}/>)
         }
       </div>
         
    </div>
  )
}

export default LatestJob