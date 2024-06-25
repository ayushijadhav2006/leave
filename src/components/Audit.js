import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';  
import { Button } from 'primereact/button';
// import axios from "axios";
        
const Audit= () => {
  
  // const [response] = useState({
  //   console.log("response");
  // });
  const [selectedLeave, setLeavespan] = useState(null);
    const Leave = [
        { name: 'Half Day', code: 'HF' },
        { name: 'Full day', code: 'FH' },
    ];
    const [selectedholiday, setholidaytype] = useState(null);
    const Holiday = [
        { name: 'Paternity Leave', code: 'PL' },
        { name: 'Maternity Leave', code: 'ML' },
        { name: 'Annual Leave', code: 'AL' },
        { name: 'Outdoor Leave', code: 'OL' },
    ];
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


      <div style={formGroupStyle} >
        <label style={labelStyle}htmlFor="holidayType">Holiday Type:</label>
      <Dropdown value={selectedholiday} onChange={(e) => setholidaytype(e.value)} options={Holiday} optionLabel="name" 
                placeholder="Select a Type" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
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
      <div style={formGroupStyle}>
      <label style={labelStyle} htmlFor="Half/Full Day">Half/Full Day:</label>
      <Dropdown value={selectedLeave} onChange={(e) => setLeavespan(e.value)} options={Leave} optionLabel="name" 
        placeholder="Select a Leave" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
      </div>
      
      <div className="card flex justify-content-center">
      <Button label="Predict" disabled = {!formData.employeeId || !formData.holidayType || !formData.startDate || !formData.endDate} />
      </div>
    </form>
  );
};

export default Audit;