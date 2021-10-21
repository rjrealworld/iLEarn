import Sidebar from "./Sidebar";
import ProgressBar from "./RightBar/ProgressBar";
import CenterBar from "./Dashboard/CenterBar";
import ProfileImage from "./Profile/profileImage";
import ProfileText from "./Profile/profileText";
import Event from "./Events/event";
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ProfileImage />
      <ProfileText />
      <CenterBar />
      <ProgressBar />
      {/* <Event /> */}
    </div>
  );
}

export default App;
