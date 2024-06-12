const Prediction = () => {
  const [EmloyeeID, setEmployeeID] = useState('');
  const [HolidayType, setHolidayType] = useState('');
  const [startDate, setStartdate] = useState('');
  const [enddate, setenddate] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ EmployeeID, HolidayType, startDate, enddate });
  };

  return (
    <>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form style={{width: '600px', margin: '2rem', borderRadius: '4px', border: '1px solid #ccc', padding: '56px'}} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem', display:'flex' }}>
            <label htmlFor="empId" style={{ display: 'block', margin: '0.5rem' }}>Employee ID:</label>
            <input type="number" id="empId" value={empId} onChange={(e) => setEmpId(e.target.value)}
              style={{
                width: '300px',
                padding: '0.5rem',
                marginLeft: '0.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }} required/>
          </div>
          <div style={{ marginBottom: '1rem', display:'flex' }}>
            <label htmlFor="startYear" style={{ display: 'block', margin: '0.5rem' }}>Start Year: </label>
            <input type="date" id="startYear" value={startYear} onChange={(e) => setStartYear(e.target.value)}
              style={{
                width: '300px',
                padding: '0.5rem',
                marginLeft: '0.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }} required />
          </div>
          <div style={{ marginBottom: '1rem', display:'flex' }}>
            <label htmlFor="endYear" style={{ display: 'block', margin: '0.5rem' }}>End Year: </label>
            <input type="date" id="endYear" value={endYear} onChange={(e) => setEndYear(e.target.value)}
              style={{
                width: '300px',
                padding: '0.5rem',
                marginLeft: '0.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }} required />
          </div>
          <div style={{ marginBottom: '1rem', display: 'flex' }}>
            <label htmlFor="endMonth" style={{ display: 'block', margin: '0.5rem' }}>End Month: </label>
            <input type="date" id="endMonth" value={endMonth} onChange={(e) => setEndMonth(e.target.value)}
              style={{
                width: '300px',
                padding: '0.5rem',
                marginLeft: '0.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }} required />
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem', backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Predict</button>
        </form>
      </div>
    </>
  );
};

export default Prediction;
