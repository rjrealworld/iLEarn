import React from 'react';
import './Post.css';

function Post(props) {
    return (
      <div className="post">
        <div className="post_top">
          <img src={props.userImg} className="post_avatar" />
          <div className="post_topInfo">
            <h3>{props.username}</h3>
            <p>{props.timestamp}</p>
          </div>
          <a
            href={props.link}
            rel="noreferrer"
            target="_blank"
          >
            <button className="view-project">View</button>
          </a>
        </div>

        <div className="post_bottom">
          <p>{props.desc}</p>
        </div>

        <div className="post_image">
          <img src={props.img} alt="img" />
        </div>
      </div>
    );
}

export default Post;