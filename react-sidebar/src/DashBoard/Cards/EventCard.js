import React, {useState} from "react";
import "./EventCard.css";
import db from "../.././firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function EventCard(props) {
  const ref = doc(db, "events", props.id);
    
  const unlikedImg =
    "https://img.icons8.com/material-two-tone/24/000000/person-male.png";
  const likedImg =
    "https://img.icons8.com/material-sharp/24/000000/person-male.png";

  const [img, setImg] = useState(unlikedImg);

  const toggle = () => {
    var val = props.count;
    
    setImg(p => {
      if(p === unlikedImg) {
        val = val + 1;
        return likedImg;
      }
      val = val - 1;
      return unlikedImg;
    })

    updateDoc(ref, {
      count: val,
    });
  }

  return (
    <div className="EventCard">
      <div className="upper-container">
        <div className="image-container">
          <img src={props.img} alt={props.alt} height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h3> {props.name} </h3>
        
        <p><b>Organised By :</b> {props.orgBy} </p>
        <p> <b>Start: </b>{props.sDate.toDate().toLocaleString()}</p>
        <p> <b>End:</b> {props.eDate.toDate().toLocaleString()}</p>
        <p> {props.description} </p>
        <div className="count" onClick={toggle}>
          <img
            src={img}
            className="attendees"
          />
          <p className="att-count">{props.count}</p>
        </div>
        <button>RSVP</button>
      </div>
    </div>
  );
}
