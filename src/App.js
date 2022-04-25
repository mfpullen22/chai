import './App.css';
import {Route, Routes} from "react-router";
import Home from "./components/home";
import Guidelines from "./components/guidelines";
import Map from "./components/map";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Guidelines" element={<Guidelines />} />
        <Route path="Map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
