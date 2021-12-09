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
  const [likes, setLikes] = useState(props.count);

  const toggle = () => {    
    setImg(p => {
      if(p === unlikedImg) {
        setLikes(props.count + 1);
        return likedImg;
      }
      setLikes(props.count);
      return unlikedImg;
    });
    // updateDoc(ref, {
    //   LikeCount: likes
    // });
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
        <p> <b>Start: </b>{props.sDate}</p>
        <p> <b>End:</b> {props.eDate}</p>
        <p> {props.description} </p>
        <div className="count" onClick={toggle}>
          <img
            src={img}
            className="attendees"
          />
          <p className="att-count">{likes}</p>
        </div>
      </div>
    </div>
  );
}
