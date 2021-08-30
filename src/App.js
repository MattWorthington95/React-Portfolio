import About from "./components/About";
import "./styles/App.css";

import LandingPage from "./components/LandingPage";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Test from "./components/test";
import { useEffect, useState, useRef } from "react";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// window.addEventListener("resize", function () {
//   "use strict";
//   window.location.reload();
// });

function App() {
  const prevScrollY = useRef(0);

  const [sectionPositions, setSectionPositions] = useState(null);
  const [currentSectionInView, setCurrentSectionInView] = useState("Home");

  const [currentScrollPosition, setCurrentScrollPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setCurrentScrollPosition(currentScrollY);
      console.log(currentScrollY);
    };

    console.log(sectionPositions);

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (sectionPositions) {
      if (
        currentScrollPosition >= sectionPositions.contact.top - 200 &&
        currentScrollPosition < sectionPositions.contact.bottom
      ) {
        console.log("were in contact!!!!");
        setCurrentSectionInView("Contact");
      } else if (
        currentScrollPosition >= sectionPositions.about.top - 300 &&
        currentScrollPosition < sectionPositions.about.bottom - 300
      ) {
        console.log("were in about!!!!");
        setCurrentSectionInView("About");
      } else if (
        currentScrollPosition >= sectionPositions.projects.top - 300 &&
        currentScrollPosition < sectionPositions.projects.bottom
      ) {
        console.log("were in project!!!!");
        setCurrentSectionInView("Project");
      } else {
        console.log("were NOT project!!!!");
        setCurrentSectionInView("Not Project");
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentScrollPosition]);

  // console.log(currentSectionInView);

  return (
    <div className="App">
      <LandingPage />
      <About
        name="About"
        currentSectionInView={currentSectionInView}
        setSectionPositions={setSectionPositions}
      />

      <Projects setSectionPositions={setSectionPositions} />
      <Contact setSectionPositions={setSectionPositions} />
    </div>
  );
}

export default App;
