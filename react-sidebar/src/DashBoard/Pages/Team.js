import React, {useState, useEffect} from "react";
import CenterBar from "./Dashboard/CenterBar";
import teams from "../../assets/community.svg";
import Add from "../../assets/Add.svg";
import PostForm from "./PostForm";
import MotionHoc from "./MotionHoc";
import { serverTimestamp } from "firebase/firestore";
import {useAuth} from "../../contexts/AuthContext";
import db from "../.././firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import Post from "../Cards/Post";
import "./Team.css";


const TeamComponent = () => {
  const ref = collection(db, "posts");
  const [postList, setPostList] = useState([]);

  const {currentUser} = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const def = {
    id: "",
    name: "",
    link: "",
    user: "",
    dispImg: "",
    desc: "",
    sshot: "",
    time: "",
  };

  const [post, setPost] = useState(def);

  const addPost = () => {
    const data = {
      id: Date.now(),
      name: post.name,
      link: post.link,
      user: currentUser.displayName,
      dispImg: currentUser.photoURL, 
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

  useEffect(() => {
    getDocs(ref)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setPostList((d) => {
            return [...d, doc.data()];
        });
      });
    });
  }, []);

  return (
    <div>
      {/* <h1>Team</h1> */}
      {isOpen && (
        <PostForm
          handleClose={togglePopup}
          data={post}
          addPost={addPost}
          setPost={setPost}
        />
      )}
      {/* <CenterBar
        p1={"Community Page"}
        p2={"See what's going on in the Community!"}
        image={teams}
      /> */}

      {/* <Post
        username="Riya Jain"
        userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVzfQ0dNV81i_D80HcVsJg-QUF4YGb0oqig&usqp=CAU"
        timestamp="08/12/2021 at 6:54:00 PM GMT"
        desc="This is a test post"
        img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      /> */}
      <div className="feed">
        {postList.map((p) => {
          return (
            <Post
              username={p.name}
              userImg="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7--v2.png"
              timestamp={p.time.toDate().toString()}
              desc={p.desc}
              img={p.sshot}
            />
          );
        })}
      </div>
      <div className="float" onClick={togglePopup}>
        <img src={Add} className="my-float" />
      </div>
    </div>
  );
};

const Team = MotionHoc(TeamComponent);

export default Team;
