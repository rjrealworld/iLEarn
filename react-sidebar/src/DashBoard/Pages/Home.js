import React from "react";
// import MotionHoc from "./MotionHoc";
import ProgressBar from "./Dashboard/RightBar/ProgressBar";
import CenterBar from "./Dashboard/CenterBar";
import dashBoard from "../../assets/dashBoard.svg";
import { useAuth } from "../../contexts/AuthContext";
import UserCard from "./Dashboard/userCards";
import Profile from "./Dashboard/Profile";


const Home = () => {
  const {currentUser} = useAuth();
  const name = currentUser.displayName.split(" ")[0]; 

  return (
    <div>
      <CenterBar p1={'Hey ' + name} p2={"Let's start the learning"} image={dashBoard}/>
      {/* <ProgressBar /> */}
      {/* <UserCard /> */}
      <Profile />
    </div>
  );
};

// const Home = MotionHoc(HomeComponent);

export default Home;
