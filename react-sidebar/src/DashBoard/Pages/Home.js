import React from "react";
// import MotionHoc from "./MotionHoc";
import ProgressBar from "./Dashboard/RightBar/ProgressBar";
import CenterBar from "./Dashboard/CenterBar";
import dashBoard from "../../assets/dashBoard.svg";

const Home = () => {
  return (
    <div>
      <CenterBar p1={'Hey There'} p2={"Let's start the learning"} image={dashBoard}/>
      {/* <ProgressBar /> */}
    </div>
  );
};

// const Home = MotionHoc(HomeComponent);

export default Home;
