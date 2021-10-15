import React from 'react';
import './ProgressBar.css';
import ToggleButton from './ToggleButton';

function ProgressBar() {
    return (
        <div className="progressBar">
            <ToggleButton />
            <p>Progress</p>
            <p>Recent Activities</p>
        </div>
    )
}

export default ProgressBar;