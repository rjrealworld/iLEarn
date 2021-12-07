import React, { useState, useEffect } from "react";
import MotionHoc from "./MotionHoc";
import Add from "../../assets/Add.svg";
import "./Calender.css";
import db from "../.././firebase";
import EventCard from "../Cards/EventCard";
import events from "../../assets/events.svg";
import CenterBar from "./Dashboard/CenterBar";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const CalenderComponent = () => {
  const imgURL = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-event-poster-design-template-56512e03cadd02795cfa1aeb1d1da465_screen.jpg?ts=1567089463";

  const ref = collection(db, "events");
  const [eventList, setEventList] = useState([]);

  const handleClick = ({}) => {
    setDoc(doc(db, "events", "Event-t"), {
      'Name': "Temp",
      'OrganisedBy': "Hub",
      'Poster': imgURL,
      'Start': "2020-06-01",
      'End': "2020-06-03",
      'Venue': "OAT",
      'count': 0,
    });
  };

  useEffect(() => {
    getDocs(ref).then((snapshot) => {
      snapshot.forEach((event) => {
        console.log(event.id, " ", event.data());
        setEventList((d) => {
          return [...d, {'id': event.id, 'data': event.data()}];
        });
      });
    });
    console.log(eventList);
  }, []);

  return (
    <div>
      {/* <h1>Events</h1> */}
      <CenterBar p1={'Event Pages'} p2={"See what's coming up!"} image={events}/>
      <div className="container-events">
        {/* <EventCard
          name="Event"
          date="2020-06-01"
          description="Description"
          img={imgURL}
          alt="altText"
        /> */}
        {eventList.map((evnt) => {
          <EventCard
            name={evnt.data.Name}
            date="2020-06-01"
            description={evnt.data.OrganisedBy}
            img={evnt.data.Poster}
            alt={evnt.id}
          />
        })}
      </div>
      <div className="float" onClick={handleClick}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;