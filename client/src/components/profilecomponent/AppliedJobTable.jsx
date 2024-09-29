import React from 'react';

const AppliedJobTable = () => {
  const jobs = [
    { date: '2024-09-20', role: 'Frontend Developer', company: 'Company A', status: 'Pending' },
    { date: '2024-09-18', role: 'Backend Developer', company: 'Company B', status: 'Interview Scheduled' },
    { date: '2024-09-15', role: 'Fullstack Developer', company: 'Company C', status: 'Rejected' },
    { date: '2024-09-10', role: 'UX Designer', company: 'Company D', status: 'Hired' },
  ];

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left'
  };

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd'
  };

  const captionStyle = {
    captionSide: 'top',
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingBottom: '10px'
  };

  return (
    <div>
      <table style={tableStyle}>
        <caption style={captionStyle}>List of your applied jobs</caption>
        <thead>
          <tr>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Job Role</th>
            <th style={thStyle}>Company</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td style={tdStyle}>{job.date}</td>
              <td style={tdStyle}>{job.role}</td>
              <td style={tdStyle}>{job.company}</td>
              <td style={tdStyle}>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobTable;
