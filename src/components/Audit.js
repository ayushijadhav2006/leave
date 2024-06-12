import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Ripple } from 'primereact/ripple';
        
        
const Audit= () => {
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

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: 'var(--primary-color)',
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
      <div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-2 font-bold p-ripple mb-2">
                Predict
                <Ripple />
            </div>
    </form>
  );
};

export default Audit;