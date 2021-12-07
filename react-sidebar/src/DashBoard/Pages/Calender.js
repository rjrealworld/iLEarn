import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import Add from "../../assets/Add.svg";
import "./Calender.css";
import db from "../.././firebase";
import EventCard from "../Cards/EventCard";
import events from "../../assets/events.svg";
import CenterBar from "./Dashboard/CenterBar";
import EventForm from "./EventForm";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const CalenderComponent = () => {
  const ref = collection(db, "events");
  const [eventList, setEventList] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const def = {
    id: "",
    name: "",
    orgBy: "",
    poster: "",
    start: "",
    end: "",
    venue: "",
    count: 0,
  };

  const [eventData, setEventData] = useState(def);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const addEvent = () => {
    const data = {
      Name: eventData.name,
      OrganisedBy: eventData.orgBy,
      Poster: eventData.poster,
      Start: eventData.start,
      End: eventData.end,
      Venue: eventData.venue,
      count: eventData.count,
    };
    setDoc(doc(ref), data);
    togglePopup();
    setEventData(def);
  };


  useEffect(() => {
    getDocs(ref).then((snapshot) => {
      snapshot.forEach((event) => {
        setEventList((d) => {
          return [...d, {'id': event.id, 'data': event.data()}];
        });
      });
    });
  }, []);

  return (
    <div>
      {/* <h1>Events</h1> */}
      {isOpen && (
        <EventForm
          handleClose={togglePopup}
          data={eventData}
          setData={setEventData}
          addData={addEvent}
        />
      )}
      <CenterBar
        p1={"Event Pages"}
        p2={"See what's coming up!"}
        image={events}
      />
      <div className="container-events">
        {console.log(eventList)}
        {eventList.map((evnt) => (
          <EventCard
            name={evnt.data.Name}
            date="2020-06-01"
            description={evnt.data.OrganisedBy}
            img={evnt.data.Poster}
            alt={evnt.id}
          />
        ))}
      </div>
      <div className="float" onClick={togglePopup}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;