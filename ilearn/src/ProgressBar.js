import React from 'react';
import './ProgressBar.css';
import ToggleButton from './ToggleButton';

function ProgressBar() {
    return (
        <div className="progressBar">
            <ToggleButton />
            {/* <div className="credits"></div> */}
            <div className="progressChart">
                <p>Progress</p>
            </div>
            
            <div className="recent">
                <p>Recent Activities</p>
            </div>
        </div>
    )
}

export default ProgressBar;