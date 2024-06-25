import 'primeicons/primeicons.css';
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function HeadlessDemo() {
    return (
        <>
        <div className="overflow-y-auto" style={{ color: 'var(--primary-color-text)'}}>
                <ul className="list-none p-4 m-0 sidebar">
                    <li><Link to='/Audit'>Request Leave Prediction</Link></li>
                    <li><Link to='/Forecast'>Request Forecasting</Link></li>
                    <li><Link to='/Count'>Request Count Prediction</Link></li>
                </ul>
    </div>
    </>
    )
}