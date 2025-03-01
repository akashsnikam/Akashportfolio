import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Skils from "./components/Skils";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
        <Aboutme></Aboutme>
        <Experience></Experience>
        <Skils></Skils>
        <Project></Project>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
