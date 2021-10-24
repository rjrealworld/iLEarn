import MotionHoc from "./MotionHoc";
import ProgressBar from "./Dashboard/RightBar/ProgressBar";
import CenterBar from "./Dashboard/CenterBar";

const HomeComponent = () => {
  return (
    <div>
      <CenterBar />
      <ProgressBar />
    </div>
  );
};

// const Home = MotionHoc(HomeComponent);

export default HomeComponent;
