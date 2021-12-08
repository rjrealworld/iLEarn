import React, {useState} from "react";
import CenterBar from "./Dashboard/CenterBar";
import teams from "../../assets/community.svg";
import Add from "../../assets/Add.svg";
import addPost from "./PostForm";
import MotionHoc from "./MotionHoc";


const TeamComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };  

  return (
    <div>
      {/* <h1>Team</h1> */}
      {isOpen }
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
