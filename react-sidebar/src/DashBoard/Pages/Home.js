import React from "react";
// import MotionHoc from "./MotionHoc";
import ProgressBar from "./Dashboard/RightBar/ProgressBar";
import CenterBar from "./Dashboard/CenterBar";

const Home = () => {
  return (
    <div>
      <CenterBar />
      <ProgressBar />
    </div>
  );
};

// const Home = MotionHoc(HomeComponent);

export default Home;
