import 'primeicons/primeicons.css';
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState(false);
    return (
    <>
        <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <div className='m-4'>
            <Link to={'/Audit'}><Button label='Request Leave Prediction' raised className='m-2'/></Link>
            <Link to={'/Forecast'}><Button label='Request Forecasting' raised className='m-2'/></Link>
            <Link to={'/Count'}><Button label='Request Count Prediction' raised className='m-2'/></Link>
            </div>
        </Sidebar>
    
        <div style={{ color: 'var(--primary-color-text)', backgroundColor: 'var(--primary-color)', paddingLeft: '2rem', display: "flex", width: "102.1%"}}>
            <div className="md:col-3 pl-5 pt-3 mt-2" style={{position:"absolute"}}>
                <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            </div>
    
            <div className="md:col-2" style={{width: "1380px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h1>Leave Prediction System</h1>
            </div> 
            <div className='md:col-1'>
            <img src='./welspunWLogo.png' alt='error' width="50px" height="45px" style={{ marginLeft: '24%', paddingTop: '4px', paddingBottom: '2px', marginTop: '14px' }} />
            </div>
        </div>    
    </div>
</>
    )
}
        
