import 'primeicons/primeicons.css';
import React, { useState } from 'react';

import './Sidebar.css';

export default function HeadlessDemo() {
    return (
        <>
        {/* <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <div className='m-4'>
            <Link to={'/Audit'}><Button label='Request Leave Prediction' raised className='m-2'/></Link>
            <Link to={'/Forecast'}><Button label='Request Forecasting' raised className='m-2'/></Link>
            <Link to={'/Count'}><Button label='Request Count Prediction' raised className='m-2'/></Link>
            </div>
        </Sidebar> */}
    
        <div className="overflow-y-auto" style={{ color: 'var(--primary-color-text)'}}>

                <ul className="list-none p-2 m-0 sidebar">

                <li><a href="#">Request Leave Prediction</a></li>
                <li><a href="#">Request Forecasting</a></li>
                <li><a href="#">Request Count Prediction</a></li>
                </ul>
    </div>
    </>
    )
}