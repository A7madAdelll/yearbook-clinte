// AddSchool.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';

import axios from 'axios';

const AddSchool = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    columns: '',
    rows: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send data to your API for adding a school using axios
    axios.post('https://yearbook-server.onrender.com/yearbook/addschool', formData)
      .then((response) => {console.log(response.data)
        navigate(`/school/${formData.name}`)
    })
      .catch((error) => console.error('Error adding school:', error));
  };

  return (
    <div>
      <h2>Add School</h2>
      <form onSubmit={handleSubmit}>
        <label>
          School Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Columns:
          <input type="number" name="columns" onChange={handleChange} />
        </label>
        <br />
        <label>
          Rows:
          <input type="number" name="rows" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add School</button>
      </form>
    </div>
  );
};

export default AddSchool;

