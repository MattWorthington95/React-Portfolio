import { useState } from "react";
import { useEffect, useRef } from "react";
import "../styles/Projects.css";
import ReactCarousel from "./ReactCarousel";

function Projects({ setSectionPositions }) {
  const myRef = useRef();
  useEffect(() => {
    setSectionPositions((currentPositions) => {
      const currentPositionsCopy = { ...currentPositions };
      currentPositionsCopy.projects = {
        top: myRef.current.getBoundingClientRect().top,
        bottom: myRef.current.getBoundingClientRect().bottom,
      };
      return currentPositionsCopy;
    });
  }, []);
  return (
    <div className="Projects" ref={myRef}>
      <div className="filler"></div>
      <h2>Projects</h2>
      <ReactCarousel />
    </div>
  );
}

export default Projects;
