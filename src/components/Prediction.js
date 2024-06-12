import React, { useState } from 'react';

function Prediction() {
  const [form, setForm] = useState({
    employeeId: '',
    holidayType: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Leave Prediction Form</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Employee ID:
              <input
                type="text"
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Holiday Type:
              <select
                name="holidayType"
                value={form.holidayType}
                onChange={handleChange}
                required
                style={styles.input}
              >
                <option value="">Select</option>
                <option value="Annual Leave">Annual Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Paternity Leave">Paternity Leave</option>
              </select>
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              End Date:
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
          </div>
          <button type="submit" style={styles.button}>Predict</button>
        </form>
      </header>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
  },
  header: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  formGroup: {
    margin: '10px 0',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default Prediction;
