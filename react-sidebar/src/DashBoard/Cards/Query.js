import React from "react";
import "./Post.css";

function Query(props) {
  return (
    <div className="post">
      <div className="post_top">
        <img src={props.userImg} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{props.username}</h3>
          <p>{props.timestamp}</p>
        </div>
        <a href={"mailto:"+props.email+"?subject=Solution: "+props.desc} rel="noreferrer" target="_blank">
          <button className="view-project">Solve</button>
        </a>
      </div>

      <div className="post_bottom">
        <p>{props.desc}</p>
      </div>

      <div className="post_image">
        {props.img != "" && <img src={props.img} alt="img" />}
      </div>
    </div>
  );
}

export default Query;
