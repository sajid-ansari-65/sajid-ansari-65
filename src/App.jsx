import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Career from "./components/Career";
import WhatIDo from "./components/WhatIDo";
import Work from "./components/Work";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <div className={`main-body ${isLoaded ? "main-active" : ""}`}>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Landing />
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <TechStack />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
