import React from 'react';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';


const Header = () => {
  return (
    <>
    <div style={{ color: 'var(--primary-color-text)', backgroundColor: 'var(--primary-color)', paddingLeft: '2rem', display: "flex", width: "100%", margin: "0"}}>
    
            <div className="md:col-2" style={{width: "1370px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h1>Leave Prediction System</h1>
            </div> 

            <div className='md:col-1'>
            <img src='./welspunWLogo.png' alt='error' width="50px" height="45px" style={{ marginLeft: '20%', paddingTop: '4px', paddingBottom: '2px', marginTop: '14px', borderRadius : '10px'}} />
            </div>
        </div>    
    </>
  )
}

export default Header