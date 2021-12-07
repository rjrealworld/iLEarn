import React from 'react';
import './ProgressBar.css';
import ToggleButton from './ToggleButton';
import Progress from './Progress';
import Recent from './Recent';

function ProgressBar() {
    return (
        <div className="progressBar">
            {/* <ToggleButton /> */}
            {/* <div className="credits"></div> */}
            <Progress />
            <Recent />
        </div>
    )
}

export default ProgressBar;