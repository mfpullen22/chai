import React from 'react';
import './legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#fe0131' }}>Over 10,000</div>
            <div style={{ "--color": '#e90069' }}>5,000 - 9,999</div>
            <div style={{ "--color": '#bd2d8f' }}>2,500 - 4,999</div>
            <div style={{ "--color": '#84489d' }}>1,000 - 2,499</div>
            <div style={{ "--color": '#4b5294'}}>100 - 999</div>
            <div style={{ "--color": '#265079' }}>1 - 99</div>
            <div style={{ "--color": '#fee5d9' }}>No data</div>
        </div>
    );
}
export default Legend;