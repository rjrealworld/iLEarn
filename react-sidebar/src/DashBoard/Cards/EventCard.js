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
          <p> {props.orgBy} </p>
          <p> {props.sDate + ' ~ ' + props.eDate} </p>
          <p> {props.description} </p>
          <div className="count">
          {/* https://img.icons8.com/material-sharp/24/000000/person-male.png */}
          <img src="https://img.icons8.com/material-two-tone/24/000000/person-male.png" className="attendees"/>
          <p className="att-count">0</p>
          </div>
          <button>RSVP</button>
        </div>
      </div>
    );
}
