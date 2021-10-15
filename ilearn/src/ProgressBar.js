import React from 'react';
import './ProgressBar.css';
import ToggleButton from './ToggleButton';

function ProgressBar() {
    return (
        <div className="progressBar">
            <div className="topProgressBar">
                <div><ToggleButton /></div>
                {/* <div className="credits"></div> */}
            </div>
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