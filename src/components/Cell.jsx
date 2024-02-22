import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cell = ({ cell, row, col,schoolName }) => {
  const navigate = useNavigate();

  const handleCellClick = () => {
    if (!cell.allocated) {
      console.log(row, col);
      // Redirect to addcell page with x and y as parameters
      navigate(`/school/${schoolName}/addcell?x=${cell.x}&y=${cell.y}`);
    }
  };

  const renderContent = () => {
    if (cell.allocated) {
      return (
        <>
          <div style={{ height: '70%', overflow: 'hidden' }}>
            <img
              src={cell.imageURL || 'placeholder.jpg'}
              alt={`Cell ${cell.x}-${cell.y}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>{cell.caption}</p>
        </>
      );
    } else {
      return (
        <div style={{ height: '70%', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={handleCellClick}>
          <span style={{ color: 'white' }}>Not Allocated</span>
        </div>
      );
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center', height: '240px', width: '240px', margin: '10px 5px' }}>
      {renderContent()}
    </div>
  );
};

export default Cell;
