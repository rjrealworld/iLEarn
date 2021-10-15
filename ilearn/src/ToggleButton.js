import React from 'react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import './ToggleButton.css';

function ToggleButton() {
    return (
        <div className="toggleButton">
            <div className="btn"> 
                <input type="checkbox" id="checkbox" />
                <label for="checkbox" className="label">
                    <UilMoon className="moon" />
                    <UilSun className="sun" />
                    <div className="ball" />
                </label>
            </div>            
        </div>
    )
}

export default ToggleButton;
