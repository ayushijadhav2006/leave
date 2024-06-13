import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
        
        
const Audit= () => {
  
  const [formData, setFormData] = useState({
    employeeId: '',
    startYear: '',
    startMonth: '',
    endYear: '',
    endMonth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
    console.log(formData);
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    marginTop: '32px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: 'calc(100% - 22px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };



  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={formGroupStyle} >
        <label style={labelStyle} htmlFor="employeeId">Employee ID:</label>
        <input
          style={inputStyle}
          type="number"
          id="employeeId"
          name="employeeId"
          placeholder='Enter ID'
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="startYear">Start Year:</label>
        <input
          style={inputStyle}
          type="date"
          id="startYear"
          name="startYear"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="startMonth">Start Month:</label>
        <input
          style={inputStyle}
          type="text"
          id="startMonth"
          name="startMonth"
          placeholder='Enter Month'
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="endYear">End Year:</label>
        <input
          style={inputStyle}
          type="date"
          id="endYear"
          name="endYear"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>

      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="endMonth">End Month:</label>
        <input
          style={inputStyle}
          type="text"
          id="endMonth"
          name="endMonth"
          placeholder='Enter Month'
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="card flex justify-content-center">
      <Link to={'/Graph'}><Button label='Predict'/></Link>
      </div>
    </form>
  );
};

export default Audit;