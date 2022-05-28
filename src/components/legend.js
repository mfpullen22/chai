import React from 'react';
import './legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#fe0131' }}>Over 10000</div>
            <div style={{ "--color": '#e90069' }}>5000 - 9999</div>
            <div style={{ "--color": '#bd2d8f' }}>2500 - 4999</div>
            <div style={{ "--color": '#84489d' }}>1000 - 2499</div>
            <div style={{ "--color": '#4b5294'}}>100 - 999</div>
            <div style={{ "--color": '#265079' }}>1 - 99</div>
            <div style={{ "--color": '#fee5d9' }}>No data</div>
        </div>
    );
}
export default Legend;