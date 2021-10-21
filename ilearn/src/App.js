import Sidebar from "./Sidebar";
import ProgressBar from "./RightBar/ProgressBar";
import CenterBar from "./Dashboard/CenterBar";
import ProfileImage from "./Dashboard/profileImage";
import ProfileText from "./Dashboard/profileText";

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <ProfileImage />
      <ProfileText />
      <CenterBar />
      <ProgressBar />
      {/* <Event></Event> */}
    </div>
  );
}

export default App;
