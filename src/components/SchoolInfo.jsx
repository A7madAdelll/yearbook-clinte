import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import Cell from './Cell';


const SchoolInfo = () => {
  const location = useLocation();
  const { pathname } = location;
  const schoolName = pathname.split('/').pop();
  const [school, setSchool] = useState(null);

  useEffect(() => {
    axios.get(`https://yearbook-server.onrender.com/yearbook/${schoolName}`)
      .then((response) => {
        console.log(schoolName);
        console.log('Response from API:', response.data);
        setSchool(response.data.schoolfromdb[0]);
      })
      .catch((error) => {
        console.error('Error fetching school data:', error);
        if (error.response) {
          console.error('Response status:', error.response.status);
        }
      });
  }, [schoolName]);

  return (
    <div>
      <h2>School Information - {schoolName}</h2>
      {school ? (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${school.columns}, 1fr)`, gap: '2px' }}>
          {Array.from({ length: school.rows * school.columns }, (_, index) => {
            const row = Math.floor(index / school.columns) + 1;
            const col = (index % school.columns) + 1;
            const cell = school.cells.find((c) => c.x === row && c.y === col) || { x: row, y: col, allocated: false };
            return <Cell key={index} cell={cell} row={row} col={col} schoolName={schoolName}/>;
          })}
        </div>
      ) : (
        <p>Loading school data...</p>
      )}
    </div>
  );
};

export default SchoolInfo;
