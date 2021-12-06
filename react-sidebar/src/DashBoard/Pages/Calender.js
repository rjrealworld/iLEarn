import React from "react";
import MotionHoc from "./MotionHoc";
import "./Calender.css";
import EventCard from "../Cards/EventCard";

const CalenderComponent = () => {
  const description = "Introduction to web development. Learn the basics of HTML, CSS, and JavaScript. This course covers the basic building blocks of a website: the HTML document, the head, the body, and the content.";
  const imgURL = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-event-poster-design-template-56512e03cadd02795cfa1aeb1d1da465_screen.jpg?ts=1567089463";

  return (
    <div>
      <h1>Events</h1>
      <div className="container-events">
        <EventCard
          name="Web Dev Basics"
          date="05/01/2020"
          description={description}
          img={imgURL}
          alt="img"
        />
      </div>
    </div>
  );
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;
