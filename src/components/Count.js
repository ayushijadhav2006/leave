import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
const Count = () => {
    const [selecteddept, setdepttype] = useState(null);
    const Department = [
        { name: 'Data Analytics', code: 'DA' },
        { name: '', code: 'ML' },
        { name: '', code: 'AL' },
        { name: '', code: 'OL' },
    ];
  const [formData, setFormData] = useState({
    department: '',
    year: '',
    month: '',
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
    <>
    <form style={formStyle} onSubmit={handleSubmit}>
        <div style={formGroupStyle} >
            <label style={labelStyle}htmlFor="department">Department:</label>
            <Dropdown value={selecteddept} onChange={(e) => setdepttype(e.value)} options={Department} optionLabel="name" placeholder="Select a Department" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
        </div>

        <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="year">Year:</label>
            <input style={inputStyle} type="number" id="year" name="year" placeholder='Enter Year' value={formData.year} onChange={handleChange} required />
        </div>

        <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="month">Month:</label>
            <input style={inputStyle} type="text" id="month" name="month" placeholder="Enter Month" value={formData.month} onChange={handleChange} required />
        </div>

        <div className="card flex justify-content-center">
            <Link to={'/'}><Button label='Predict' raised className='m-2'/></Link>
        </div>

    </form>
    </>
  )
}

export default Count