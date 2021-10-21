import React from 'react';

import './EventCenterBar.css';

function EventCenterBar() {
    return (
        <div className="eventCenterBar">        
            <img src="/assets/images/Teaching-rafiki.png" alt="teaching" className="centerImage" />
            <div className="vl" />
            <div className="paragraph">
                <p>EVENTS</p>
                <p>What's coming up next...</p>
            </div>
        </div>
    )
}

export default EventCenterBar;