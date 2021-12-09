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
    description: "",
    count: 0,
  };

  const [eventData, setEventData] = useState(def);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const addEvent = () => {
    if(eventData.poster === "") {
      eventData.poster = "https://www.pngrepo.com/png/190685/512/calendar.png";
    }
    const data = {
      id: Date.now(),
      Name: eventData.name,
      OrganisedBy: eventData.orgBy,
      Poster: eventData.poster,
      Start: eventData.start,
      End: eventData.end,
      Venue: eventData.venue,
      Desc: eventData.description,
      LikeCount: eventData.count,
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
        {eventList.map((evnt) => (
          <EventCard
            key={evnt.id}
            id={evnt.id}
            name={evnt.data.Name}
            sDate={evnt.data.Start}
            eDate={evnt.data.End}
            orgBy={evnt.data.OrganisedBy}
            description={evnt.data.Desc}
            img={evnt.data.Poster}
            alt={evnt.id}
            count={evnt.data.LikeCount}
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