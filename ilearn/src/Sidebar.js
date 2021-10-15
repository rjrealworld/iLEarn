import React from 'react';
import BookIcon from '@mui/icons-material/Book';
import EventIcon from '@mui/icons-material/Event';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css';


function Sidebar() {
    return (
        <div className="sidebar">
            <img src="./assets/icon-iLEarn.png" alt="icon-iLEarn"/>
            <BookIcon />
            <EventIcon />
            <ContactSupportIcon />
            <FeedIcon />
            <LogoutIcon />
        </div>
    )
}

export default Sidebar;
