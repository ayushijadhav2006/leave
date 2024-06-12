// src/HolidayForm.js
import React, { useState } from 'react';

const Prediction= () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    holidayType: '',
    startDate: '',
    endDate: '',
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

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="employeeId">Employee ID:</label>
        <input
          style={inputStyle}
          type="text"
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="holidayType">Holiday Type:</label>
        <input
          style={inputStyle}
          type="text"
          id="holidayType"
          name="holidayType"
          value={formData.holidayType}
          onChange={handleChange}
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="startDate">Start Date:</label>
        <input
          style={inputStyle}
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="endDate">End Date:</label>
        <input
          style={inputStyle}
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        style={{ ...buttonStyle, ':hover': buttonHoverStyle }}
      >
        Predict
      </button>
    </form>
  );
};

export default Prediction;