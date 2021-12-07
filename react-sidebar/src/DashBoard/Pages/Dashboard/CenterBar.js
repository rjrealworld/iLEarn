import React from 'react';

import './CenterBar.css';

function centerBar(props) {
    return (
        <div className="centerBar">        
            <img src={props.image} alt="teaching" className="centerImage" />
            <div className="vl" />
            <div className="paragraph">
                <p>{props.p1}</p>
                <p>{props.p2}</p>
            </div>
        </div>
    )
}

export default centerBar;