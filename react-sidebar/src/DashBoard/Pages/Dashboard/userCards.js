import React from "react";
import {useAuth} from "../../../contexts/AuthContext";
import './userCards.css';

const UserCards = () => { 

  const { currentUser } = useAuth();
  
    return (
      <div className="user-card">
            <div className="card-body">
            <center>
              <h3>Profile</h3></center>
              <div className="avatar">
                <img
                  src={currentUser.photoURL}
                  className="card-img-top"
                  alt=""
                />
              </div>
              <center>
              <h5 className="card-title">{currentUser.displayName}</h5>
              <p className="card-text">{currentUser.email}</p>
              </center>
            </div>
          </div>
  );
}

export default UserCards;