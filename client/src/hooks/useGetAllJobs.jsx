import React, { useEffect } from 'react';
import { JOB_API_END_POINT } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setAllJobs } from '../redux/jobSlice';

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await fetch(`${JOB_API_END_POINT}/get`, {
          method: 'GET',
          credentials: 'include',
        });
        console.log('Fetching jobs from:', `${JOB_API_END_POINT}/get`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`); 
        }

        const data = await res.json();
        if (data.success) {
          dispatch(setAllJobs(data.jobs));
        } else {
          console.error('Failed to fetch jobs:', data.message);
        }
      } catch (error) {
        console.log('Error fetching jobs:', error);
      }
    };

    fetchAllJobs();
  }, [dispatch]); 

};

export default useGetAllJobs;
