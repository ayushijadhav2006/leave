import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const Forecast = () => {
  const [empId, setEmpId] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ empId, startYear, endYear, endMonth });
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

  const buttonStyle = {
    display: 'block',
    width: '100px',
    padding: '10px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: 'var(--primary-color)',
  };
  return (
    <>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="empId" style={labelStyle}>Employee ID:</label>
            <input type="number" id="empId" value={empId} placeholder='Enter ID' onChange={(e) => setEmpId(e.target.value)} style={inputStyle} required/>
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="startYear" style={labelStyle}>Start Year: </label>
            <input type="date" id="startYear" value={startYear} onChange={(e) => setStartYear(e.target.value)}
              style={inputStyle} required />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="endYear" style={labelStyle}>End Year: </label>
            <input type="date" id="endYear" value={endYear} onChange={(e) => setEndYear(e.target.value)} style={inputStyle} required />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="endMonth" style={labelStyle}>End Month: </label>
            <input type="text" id="endMonth" value={endMonth} placeholder='Enter Month' onChange={(e) => setEndMonth(e.target.value)} style={inputStyle} required />
          </div>

          <div className="card flex justify-content-center">
          <Link to={'/Graph'}><Button label='Predict'/></Link>
          </div>
        </form>
    </>
  );
};

export default Forecast;
