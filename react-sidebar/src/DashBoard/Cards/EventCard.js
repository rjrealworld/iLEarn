import React from 'react';
import "./EventCard.css";

export default function EventCard(props) {
    return (
      <div className="EventCard">
        <div className="upper-container">
          <div className="image-container">
            <img
              src={props.img}
              alt={props.alt}
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lower-container">
          <h3> {props.name} </h3>
          <p> {props.date} </p>
          <p> {props.description} </p>
          <button>RSVP</button>
        </div>
      </div>
    );
}
