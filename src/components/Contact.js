import React from 'react';
import '../styles/Contact.css';
import { useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaPortrait } from 'react-icons/fa';
import CV from '../download/Matt_Worthington_CV.docx';

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

      <a href="https://www.linkedin.com/in/matt-worthington/" target="blank">
        <FaLinkedin size={100} />
        <h4>LinkedIn</h4>
      </a>

      <a href="https://github.com/MattWorthington95" target="blank">
        <FaGithub size={100} />
        <h4>GitHub</h4>
      </a>
      <a href={CV} download>
        <FaPortrait size={100} />
        <h4>CV</h4>
      </a>
    </div>
  );
}

export default Contact;
