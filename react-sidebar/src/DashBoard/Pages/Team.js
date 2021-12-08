import React, {useState} from "react";
import CenterBar from "./Dashboard/CenterBar";
import teams from "../../assets/community.svg";
import Add from "../../assets/Add.svg";
import PostForm from "./PostForm";
import MotionHoc from "./MotionHoc";
import { serverTimestamp } from "firebase/firestore";
import {useAuth} from "../../contexts/AuthContext";
import db from "../.././firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";


const TeamComponent = () => {
  const ref = collection(db, "posts");
  const {currentUser} = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const def = {
    name: "",
    link: "",
    user: "",
    desc: "",
    sshot: "",
    time: "",
  };

  const [post, setPost] = useState(def);

  const addPost = () => {
    const data = {
      name: post.name,
      link: post.link,
      user: currentUser.displayName,
      desc: post.desc,
      sshot: post.sshot,
      time: serverTimestamp(),
    };
    setDoc(doc(ref), data);
    togglePopup();
    setPost(def);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <h1>Team</h1> */}
      {isOpen && <PostForm handleClose={togglePopup} data={post} addPost={addPost} setPost={setPost} />}
      <CenterBar
        p1={"Community Page"}
        p2={"See what's going on in the Community!"}
        image={teams}
      />

      <div className="float" onClick={togglePopup}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
};

const Team = MotionHoc(TeamComponent);

export default Team;
