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
    maxWidth: '800px',
    margin: '0 auto',
    padding: '32px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    marginTop: '32px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
    alignItems: 'center',
    padding: '8px',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    marginTop: '8px',
  };


  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div className='flex '>
      <div style={formGroupStyle} >
        <label style={labelStyle} htmlFor="employeeId" className='md:col-2'> Employee ID</label>
        <input
          className='mt-2 ml-3'
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
        <div className='flex-row'>
          <div style={{ flex: '1', marginLeft: '40px'}}>
            <label style={labelStyle} htmlFor="holidayType" className='md:col-1'>Holiday Type</label>
          </div>
          <div style={{ flex: '2', marginLeft: '40px'}}>
            <Dropdown 
            value={selectedholiday} 
            onChange={(e) => setholidaytype(e.value)} 
            options={Holiday} optionLabel="name" 
            placeholder="Select a Type" 
            className="w-400px md:w-20rem ml-3 mt-2" 
            checkmark={true} 
            highlightOnSelect={false} />
          </div>
        </div>
      </div>
    </div>

      <div className='flex'>
      <div style={formGroupStyle}>
        <label style={labelStyle} htmlFor="startDate" className='md:col-2'>From Date</label>
        <input
          className='mt-2 ml-3 w-19rem'
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
        <label style={labelStyle} htmlFor="endDate" className='md:col-1'>To Date</label>
        <input
          className='mt-2 ml-3 w-20rem'
          style={inputStyle}
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      </div>

    <div style={formGroupStyle} >
      <div className='flex-row'>
        <div style={{ flex: '1'}}>
          <label style={labelStyle} htmlFor="Half/Full Day" className='m-2'>Half/Full Day</label>
        </div>
        <div style={{ flex: '2', margin: '8px'}}>
          <Dropdown
            value={selectedLeave}
            onChange={(e) => setLeavespan(e.value)}
            options={Leave}
            optionLabel="name"
            placeholder="Select a Leave"
            className="w-full md:w-20rem m-1"
            checkmark={true}
            highlightOnSelect={false}
          />
        </div>
      </div>
      <div className="md:col-1">
        <Button label="Predict" onClick={handleSubmit} className='w-20rem m-2'/>
      </div>
    </div>
    </form>
  );
};

export default Audit;