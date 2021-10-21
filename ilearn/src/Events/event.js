import './event.css';
import Sidebar from "../Sidebar";
import EventCenterBar from './EventCenterBar';

function Event() {
  return (
    <div className="Event">
      <Sidebar />
      <EventCenterBar></EventCenterBar>
    </div>
  );
}

export default Event;
