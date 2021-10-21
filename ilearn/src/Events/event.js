import './event.css';
import Sidebar from "../Sidebar";
import ProfileImage from "../Profile/profileImage";
import ProfileText from "../Profile/profileText";
import EventCenterBar from './EventCenterBar';

function Event() {
  return (
    <div className="Event">
      <Sidebar />
      <ProfileImage />
      <ProfileText />
      <EventCenterBar></EventCenterBar>
    </div>
  );
}

export default Event;
