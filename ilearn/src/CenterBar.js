import React from 'react';

import './CenterBar.css';

function centerBar() {
    return (
        <div className="centerBar">        
            <img src="/assets/images/Teaching-rafiki.png" alt="teaching" className="centerImage" />
            <div className="vl"></div>
            <div className="paragraph">
                <p>Hey there!</p>
                <p>Let's begin the learning.</p>
            </div>
        </div>
    )
}

export default centerBar;