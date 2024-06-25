import 'primeicons/primeicons.css';
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function HeadlessDemo() {
    return (
        <>
        <div className="overflow-y-auto" style={{ color: 'var(--primary-color-text)'}}>
                <ul className="list-none p-4 m-0 sidebar">
                    <li><Link to='/Audit'><i className="pi pi-user mr-4" style={{fontSize: '20px'}}></i>Request Leave Prediction</Link></li>
                    <li><Link to='/Forecast'><i className="pi pi-users mr-4" style={{fontSize: '20px'}}></i>Request Forecasting</Link></li>
                    <li><Link to='/Count'><i className="pi pi-chart-line mr-4"  style={{fontSize: '20px'}}></i>Request Count Prediction</Link></li>
                </ul>
    </div>
    </>
    )
}