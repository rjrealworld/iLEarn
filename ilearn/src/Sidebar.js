import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faQuestionCircle, faCalendarAlt, faCommentAlt, faRssSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img src="/assets/images/icon-iLEarn.png" alt="icon-iLEarn" className="sidebar-logo"/>
            <FontAwesomeIcon icon={faQuestionCircle} className="sidebar-icons" />
            <FontAwesomeIcon icon={faBookOpen} className="sidebar-icons" />
            <FontAwesomeIcon icon={faCalendarAlt} className="sidebar-icons" />
            <FontAwesomeIcon icon={faRssSquare} className="sidebar-icons" />
            <FontAwesomeIcon icon={faCommentAlt} className="sidebar-icons" />
            <FontAwesomeIcon icon={faTimesCircle} className="sidebar-icons" />
        </div>
    )
}

export default Sidebar;
