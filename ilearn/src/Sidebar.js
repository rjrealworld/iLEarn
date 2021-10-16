import React from 'react';

import { UilQuestionCircle, UilBooks, UilSchedule, UilRss, UilChat, UilSignout  } from '@iconscout/react-unicons';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img src="/assets/images/icon-iLEarn.png" alt="icon-iLEarn" className="sidebar-logo"/>
            <UilBooks className="sidebar-icons" />
            <UilSchedule className="sidebar-icons" />
            <UilQuestionCircle className="sidebar-icons" />            
            <UilRss className="sidebar-icons" />
            <UilChat  className="sidebar-icons" />
            <UilSignout  className="sidebar-icons" />
        </div>
    )
}

export default Sidebar;
