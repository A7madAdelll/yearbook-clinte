import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { imageDB } from './Config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import axios from 'axios';

const AddCell = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const schoolNamelist = pathname.split('/');
  const schoolName = schoolNamelist[schoolNamelist.length - 2];

  const { search } = location;
  const params = new URLSearchParams(search);

  const initialX = params.get('x');
  const initialY = params.get('y');

  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    _id: schoolName,
    x: initialX || '',
    y: initialY || '',
    caption: '',
    imageURL: ''
  });

  useEffect(() => {
    setFormData({
      ...formData,
      x: initialX || '',
      y: initialY || '',
      _id: schoolName,
    });
  }, [initialX, initialY, schoolName]);

  const handleChange = (e) => {
    if (e.target.name === 'imageFile') {
      setImageFile(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imgRef = ref(imageDB, `files/${v4()}`);
      const uploadTaskSnapshot = await uploadBytes(imgRef, imageFile);
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

      axios.post(`https://yearbook-server.onrender.com/yearbook/${schoolName}/addcell`, { _id: schoolName, ...formData, imageURL: downloadURL }).then(responsefrombackend => {
        navigate(`/school/${schoolName}`)
      });

    } catch (error) {
      console.error('Error adding cell:', error);
    }
  };

  return (
    <div>
      <h2>Add Cell - {schoolName}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          X:
          <input type="number" name="x" value={formData.x} onChange={handleChange} />
        </label>
        <br />
        <label>
          Y:
          <input type="number" name="y" value={formData.y} onChange={handleChange} />
        </label>
        <br />
        <label>
          Caption:
          <input type="text" name="caption" onChange={handleChange} />
        </label>
        <br />
        <label>
          Image File:
          <input type="file" name="imageFile" accept="image/*" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Cell</button>
      </form>
    </div>
  );
};

export default AddCell;
