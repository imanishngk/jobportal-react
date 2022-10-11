import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./page/Signup";
import Home from "./page/Home";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
