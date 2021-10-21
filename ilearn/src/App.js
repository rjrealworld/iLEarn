import Sidebar from "./Sidebar";
import ProgressBar from "./RightBar/ProgressBar";
import CenterBar from "./CenterBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <CenterBar />
      <ProgressBar />
      {/* <Event></Event> */}
    </div>
  );
}

export default App;
