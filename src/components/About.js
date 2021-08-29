import Navbar from "./Navbar";
import "../styles/About.css";
import { useRef, useEffect } from "react";

const About = ({ currentSectionInView, setSectionPositions }) => {
  const myRef = useRef();
  useEffect(() => {
    setSectionPositions((currentPositions) => {
      const currentPositionsCopy = { ...currentPositions };
      currentPositionsCopy.about = {
        top: myRef.current.getBoundingClientRect().top,
        bottom: myRef.current.getBoundingClientRect().bottom,
      };
      return currentPositionsCopy;
    });
  }, []);
  return (
    <div className="about" id="About" ref={myRef}>
      <Navbar currentSectionInView={currentSectionInView} />

      <div className="about-content">
        <h2>About</h2>
      </div>
    </div>
  );
};

export default About;
