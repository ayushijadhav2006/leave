import React from 'react';
import 'primeicons/primeicons.css';


const Header = () => {
  return (
    <>
    <div style={{ color: 'var(--primary-color-text)', backgroundColor: 'var(--primary-color)', display: "flex", width: "100%", margin: "0"}}>
    
            <div className="md:col-2" style={{width: "1300px", marginLeft: '20px'}}>
                <h1>Leave Prediction System</h1>
            </div> 

            <div className='md:col-1'>
            <img src='./welspunWLogo.png' alt='error' width="50px" height="45px" style={{ marginLeft: '20%', paddingTop: '4px', paddingBottom: '2px', marginTop: '14px', borderRadius : '20px'}} />
            </div>
        </div>    
    </>
  )
}

export default Header