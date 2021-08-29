import React from "react";
import "../styles/Contact.css";
import { useRef, useEffect } from "react";
function Contact({ setSectionPositions }) {
  const myRef = useRef();
  useEffect(() => {
    setSectionPositions((currentPositions) => {
      const currentPositionsCopy = { ...currentPositions };
      currentPositionsCopy.contact = {
        top: myRef.current.getBoundingClientRect().top,
        bottom: myRef.current.getBoundingClientRect().bottom,
      };
      return currentPositionsCopy;
    });
  }, []);
  return (
    <div className="Contact" ref={myRef}>
      <div className="filler"></div>
      <h2>Contact</h2>
    </div>
  );
}

export default Contact;
